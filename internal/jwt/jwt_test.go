//+build unit

package jwt_test

import (
	"github.com/EmptyShadow/eltech.journal/api/domain"
	"github.com/EmptyShadow/eltech.journal/internal/jwt"
	"github.com/stretchr/testify/assert"
	"os"
	"testing"
)

var (
	manager *jwt.TokenManager
	tokens *domain.Tokens

	claims = &domain.Claims{
		SessionID: "test session id",
		UserID:    "test user id",
	}
)

func TestMain(m *testing.M) {
	os.Setenv("JWT_ISSUER", "test issuer")
	os.Setenv("JWT_PRIVATE_KEY", "private key")

	manager = jwt.NewTokenManager()

	code := m.Run()

	os.Exit(code)
}

func TestTokenManager_Release(t *testing.T) {
	asserting := assert.New(t)

	var err error

	tokens, err = manager.Release(nil, claims)
	asserting.NoError(err)
}

func TestTokenManager_Verify_IsValid(t *testing.T) {
	asserting := assert.New(t)

	gotClaims, err := manager.Verify(nil, tokens.Access)
	if asserting.NoError(err) {
		asserting.Equal(gotClaims, claims)
	}

	gotClaims, err = manager.Verify(nil, tokens.Refresh)
	if asserting.NoError(err) {
		asserting.Equal(gotClaims, claims)
	}
}

func TestTokenManager_Verify_NotValid(t *testing.T) {
	asserting := assert.New(t)

	_, err := manager.Verify(nil, "not jwt token")
	asserting.Error(err)
}
