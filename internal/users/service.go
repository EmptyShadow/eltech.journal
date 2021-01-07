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
	if r.Credentials == nil {
		return nil, status.Error(codes.InvalidArgument, "credentials must be not empty")
	}

	cred := r.Credentials

	if !email.IsValid(cred.Email) {
		return nil, status.Error(codes.InvalidArgument, "email must be email address")
	}

	if len(cred.SHA1HashPWD) != sha1.Size {
		return nil, status.Error(codes.InvalidArgument, "pwd must be sha1 hash")
	}

	if r.FullName == nil || r.FullName.FirstName == "" || r.FullName.LastName == "" {
		return nil, status.Error(codes.InvalidArgument, "full name must have first and last names")
	}

	encryptedPwdHash, err := s.pwdCryptor.HashAndSalt(cred.SHA1HashPWD)
	if err != nil {
		return nil, fmt.Errorf("failed hash and salt pwd: %w", err)
	}

	u, err := s.repo.Save(ctx, cred.Email, encryptedPwdHash, r.FullName)
	if err != nil {
		return nil, fmt.Errorf("failed save user: %w", err)
	}

	return &users.CreateResponse{User: u}, nil
}
