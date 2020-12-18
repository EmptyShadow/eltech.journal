package users

import (
	"context"
	"github.com/EmptyShadow/eltech.journal/api/domain"

	"github.com/EmptyShadow/eltech.journal/api/users"
)

type Repository interface {
	Save(ctx context.Context, email string, pwd []byte, fn *domain.FullName) (*domain.User, error)
}

type Service struct {
	repo Repository
}

func NewService(repo Repository) *Service {
	return &Service{repo: repo}
}

func (u *Service) Create(ctx context.Context, r *users.CreateRequest) (*users.CreateResponse, error) {
	panic("implement me")
}
