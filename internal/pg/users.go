package pg

import (
	"context"
	"github.com/EmptyShadow/eltech.journal/api/domain"
	"github.com/jackc/pgx/v4/pgxpool"
)

type UsersRepository struct {
	db *pgxpool.Pool
}

func NewUsersRepository(db *pgxpool.Pool) *UsersRepository {
	return &UsersRepository{db: db}
}

func (r *UsersRepository) Save(ctx context.Context, user *domain.User) (*domain.User, error) {
	panic("implement me")
}

