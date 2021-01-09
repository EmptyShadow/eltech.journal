package jwt

import (
	"context"
	"fmt"
	"time"

	"github.com/EmptyShadow/eltech.journal/api/domain"
	"github.com/EmptyShadow/eltech.journal/pkg/config"
	"github.com/dgrijalva/jwt-go"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type signMethod string

const (
	hmac256 = "hmac256"
	hmac384 = "hmac384"
	hmac512 = "hmac512"
)

func (m signMethod) Method() jwt.SigningMethod {
	switch m {
	case hmac256:
		return jwt.SigningMethodHS256
	case hmac384:
		return jwt.SigningMethodHS384
	case hmac512:
		return jwt.SigningMethodHS512
	}

	panic(fmt.Sprintf("sign method %s not supported", m))
}

type buildingTokenOpts struct {
	lifePeriod time.Duration
}

type TokenManager struct {
	signMethod       jwt.SigningMethod
	issuer           string
	accessTokenOpts  buildingTokenOpts
	refreshTokenOpts buildingTokenOpts
	privateKey       []byte
}

const (
	envSignMethod     = "JWT_SIGN_METHOD"
	defaultSignMethod = hmac512

	envIssuer = "JWT_ISSUER"

	envAssessTokenLifeTime     = "JWT_ACCESS_TOKEN_LIFE_TIME"
	defaultAssessTokenLifeTime = time.Hour * 24

	// nolint:gosec // нет особых параметров.
	envRefreshTokenLifeTime     = "JWT_REFRESH_TOKEN_LIFE_TIME"
	defaultRefreshTokenLifeTime = time.Hour * 24 * 7

	envPrivateKey = "JWT_PRIVATE_KEY"
)

func NewTokenManager() *TokenManager {
	return &TokenManager{
		signMethod: signMethod(config.Get(envSignMethod).String(defaultSignMethod)).Method(),
		issuer:     config.Get(envIssuer).MustString(),
		accessTokenOpts: buildingTokenOpts{
			lifePeriod: config.Get(envAssessTokenLifeTime).Duration(defaultAssessTokenLifeTime),
		},
		refreshTokenOpts: buildingTokenOpts{
			lifePeriod: config.Get(envRefreshTokenLifeTime).Duration(defaultRefreshTokenLifeTime),
		},
		privateKey: config.Get(envPrivateKey).MustBytes(),
	}
}

func (t *TokenManager) Release(_ context.Context, claims *domain.Claims) (tokens *domain.Tokens, err error) {
	accessToken, err := t.createToken(jwt.StandardClaims{
		ExpiresAt: time.Now().Add(t.accessTokenOpts.lifePeriod).Unix(),
		Id:        claims.SessionID,
		Issuer:    t.issuer,
		Subject:   claims.UserID,
	})
	if err != nil {
		return nil, fmt.Errorf("failed create access token: %w", err)
	}

	refreshToken, err := t.createToken(jwt.StandardClaims{
		ExpiresAt: time.Now().Add(t.refreshTokenOpts.lifePeriod).Unix(),
		Id:        claims.SessionID,
		Issuer:    t.issuer,
		Subject:   claims.UserID,
	})
	if err != nil {
		return nil, fmt.Errorf("failed create refresh token: %w", err)
	}

	return &domain.Tokens{
		Access:  accessToken,
		Refresh: refreshToken,
	}, nil
}

func (t *TokenManager) Verify(_ context.Context, tokenStr string) (claims *domain.Claims, err error) {
	token, err := jwt.ParseWithClaims(tokenStr, &jwt.StandardClaims{},
		func(token *jwt.Token) (interface{}, error) {
			return t.privateKey, nil
		},
	)
	if err != nil {
		return nil, status.Error(codes.Unauthenticated, err.Error())
	}

	if !token.Valid {
		return nil, status.Error(codes.Unauthenticated, "jwt token is not valid")
	}

	tokenClaims, ok := token.Claims.(*jwt.StandardClaims)

	if !ok {
		return nil, status.Error(codes.Unauthenticated, "jwt token contains not supported json payload")
	}

	return &domain.Claims{
		SessionID: tokenClaims.Id,
		UserID:    tokenClaims.Subject,
	}, nil
}

func (t *TokenManager) createToken(claims jwt.Claims) (string, error) {
	token := jwt.NewWithClaims(t.signMethod, claims)

	return token.SignedString(t.privateKey)
}
