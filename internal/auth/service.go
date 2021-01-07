package auth

import (
	"context"
	"fmt"

	"github.com/EmptyShadow/eltech.journal/api/auth"
	"github.com/EmptyShadow/eltech.journal/api/domain"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type UsersRepository interface {
	ReadByEmail(ctx context.Context, email string) (*domain.User, error)
}

type PwdComparator interface {
	CompareHash(hash, pwd []byte) bool
}

type TokenMaker interface {
	Release(ctx context.Context, claims *domain.Claims) (tokens *domain.Tokens, err error)
	Verify(ctx context.Context, token string) (claims *domain.Claims, err error)
}

type SessionsRepository interface {
	Save(ctx context.Context, userID string) (session *domain.Session, err error)
	Read(ctx context.Context, sessionID string) (session *domain.Session, err error)
	Close(ctx context.Context, sessionID string) error
	IsClosed(ctx context.Context, sessionID string) (bool, error)
}

type SessionTxFunc func(ctx context.Context, tx func(r SessionsRepository) error) error

type Service struct {
	users         UsersRepository
	pwdComparator PwdComparator
	tokenMaker    TokenMaker
	sessionsTx    SessionTxFunc
}

func NewService(users UsersRepository, pwdComparator PwdComparator, tokenMaker TokenMaker, sessionsTx SessionTxFunc) *Service {
	return &Service{users: users, pwdComparator: pwdComparator, tokenMaker: tokenMaker, sessionsTx: sessionsTx}
}

func (s *Service) Trust(ctx context.Context, r *auth.TrustRequest) (*auth.TrustResponse, error) {
	user, err := s.users.ReadByEmail(ctx, r.Credentials.Email)
	if err != nil {
		return nil, fmt.Errorf("failed read user by email %s: %w", r.Credentials.Email, err)
	}

	if !s.pwdComparator.CompareHash(user.Pwd, r.Credentials.SHA1HashPWD) {
		return nil, status.Error(codes.InvalidArgument, "bad credentials")
	}

	var tks *domain.Tokens

	err = s.sessionsTx(ctx, func(r SessionsRepository) error {
		tks, err = s.newSessionAndTokens(ctx, user.ID, r)
		if err != nil {
			return fmt.Errorf("failed create new session and tokens: %w", err)
		}

		return nil
	})
	if err != nil {
		return nil, fmt.Errorf("failed session tx: %w", err)
	}

	return &auth.TrustResponse{Tokens: tks}, nil
}

func (s *Service) Refresh(ctx context.Context, r *auth.RefreshRequest) (*auth.RefreshResponse, error) {
	claims, err := s.tokenMaker.Verify(ctx, r.RefreshToken)
	if err != nil {
		return nil, fmt.Errorf("failed parse token: %w", err)
	}

	var tks *domain.Tokens

	err = s.sessionsTx(ctx, func(r SessionsRepository) error {
		if err := r.Close(ctx, claims.SessionID); err != nil {
			return fmt.Errorf("failed close session %s: %w", claims.SessionID, err)
		}

		tks, err = s.newSessionAndTokens(ctx, claims.UserID, r)
		if err != nil {
			return fmt.Errorf("failed create new session and tokens: %w", err)
		}

		return nil
	})
	if err != nil {
		return nil, fmt.Errorf("failed session tx: %w", err)
	}

	return &auth.RefreshResponse{Tokens: tks}, nil
}

func (s *Service) newSessionAndTokens(ctx context.Context, userID string,
	r SessionsRepository) (tks *domain.Tokens, err error) {
	newSession, err := r.Save(ctx, userID)
	if err != nil {
		return nil, fmt.Errorf("failed save new session: %w", err)
	}

	tks, err = s.tokenMaker.Release(ctx, &domain.Claims{
		SessionID: newSession.ID,
		UserID:    userID,
	})
	if err != nil {
		return nil, fmt.Errorf("failed release new tokens: %w", err)
	}

	return tks, nil
}
