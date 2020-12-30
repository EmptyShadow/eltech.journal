package users

import (
	"context"
	"crypto/sha1"
	"fmt"

	"github.com/EmptyShadow/eltech.journal/api/domain"
	"github.com/EmptyShadow/eltech.journal/api/users"
	"github.com/EmptyShadow/eltech.journal/pkg/email"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

var (
	ErrInvalidEmail    = status.Error(codes.InvalidArgument, "email must be email address")
	ErrInvalidPwd      = status.Error(codes.InvalidArgument, "pwd must be sha1 hash")
	ErrFullNameInvalid = status.Error(codes.InvalidArgument, "full name must have first and last names")
)

type PwdCryptor interface {
	HashAndSalt(pwd []byte) ([]byte, error)
}

type Repository interface {
	Save(ctx context.Context, email string, pwd []byte, fn *domain.FullName) (*domain.User, error)
}

type Service struct {
	repo       Repository
	pwdCryptor PwdCryptor
}

func NewService(repo Repository, pwdCryptor PwdCryptor) *Service {
	return &Service{repo: repo, pwdCryptor: pwdCryptor}
}

func (s *Service) Create(ctx context.Context, r *users.CreateRequest) (*users.CreateResponse, error) {
	if !email.IsValid(r.Email) {
		return nil, ErrInvalidEmail
	}

	if len(r.SHA1HashPWD) != sha1.Size {
		return nil, ErrInvalidPwd
	}

	if r.FullName == nil || r.FullName.FirstName == "" || r.FullName.LastName == "" {
		return nil, ErrFullNameInvalid
	}

	encryptedPwdHash, err := s.pwdCryptor.HashAndSalt(r.SHA1HashPWD)
	if err != nil {
		return nil, fmt.Errorf("failed hash and salt pwd: %w", err)
	}

	u, err := s.repo.Save(ctx, r.Email, encryptedPwdHash, r.FullName)
	if err != nil {
		return nil, fmt.Errorf("failed save user: %w", err)
	}

	return &users.CreateResponse{User: u}, nil
}
