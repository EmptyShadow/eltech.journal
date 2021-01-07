package pg

import (
	"context"

	"github.com/EmptyShadow/eltech.journal/api/domain"
)

type Sessions struct {
	db DB
}

func NewSessions(db DB) *Sessions {
	return &Sessions{db: db}
}

func (s *Sessions) Save(ctx context.Context, userID string) (session *domain.Session, err error) {
	panic("implement me")
}

func (s *Sessions) Read(ctx context.Context, sessionID string) (session *domain.Session, err error) {
	panic("implement me")
}

func (s *Sessions) Close(ctx context.Context, sessionID string) error {
	panic("implement me")
}

func (s *Sessions) IsClosed(ctx context.Context, sessionID string) (bool, error) {
	panic("implement me")
}
