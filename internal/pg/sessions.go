package pg

import (
	"context"
	"fmt"
	"github.com/gogo/protobuf/types"
	"github.com/jackc/pgx/v4"
	"time"

	"github.com/EmptyShadow/eltech.journal/api/domain"
)

type Sessions struct {
	db DB
}

func NewSessions(db DB) *Sessions {
	return &Sessions{db: db}
}

const querySaveSession = `
INSERT INTO sessions (user_id)
VALUES ($1)
RETURNING id, created_at;
`

func (r *Sessions) Save(ctx context.Context, userID string) (session *domain.Session, err error) {
	var (
		id string
		createdAt time.Time
	)

	err = r.db.
		QueryRow(ctx, querySaveSession, userID).
		Scan(&id, &createdAt)
	if err != nil {
		return nil, fmt.Errorf("failed insert session: %w", ConvertConstraintErr(err))
	}

	session = new(domain.Session)
	session.ID = id
	session.UserID = userID
	session.CreatedAt, _ = types.TimestampProto(createdAt)

	return
}

const queryReadSession = `
SELECT id, user_id, created_at, closed_at
FROM sessions
WHERE id = $1;
`

func (r *Sessions) Read(ctx context.Context, sessionID string) (session *domain.Session, err error) {
	user, err := r.scan(r.db.QueryRow(ctx, queryReadSession, sessionID))
	if err != nil {
		return nil, fmt.Errorf("failed select session: %w", err)
	}

	return user, nil
}

func (r *Sessions) Close(ctx context.Context, sessionID string) error {
	panic("implement me")
}

func (r *Sessions) IsClosed(ctx context.Context, sessionID string) (bool, error) {
	panic("implement me")
}

func (r *Sessions) scan(row pgx.Row) (*domain.Session, error) {

}
