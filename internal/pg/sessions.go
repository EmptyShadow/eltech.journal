package pg

import (
	"context"
	"database/sql"
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
		id        string
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
WHERE id = $1
LIMIT 1;
`

func (r *Sessions) Read(ctx context.Context, sessionID string) (session *domain.Session, err error) {
	user, err := r.scan(r.db.QueryRow(ctx, queryReadSession, sessionID))
	if err != nil {
		return nil, fmt.Errorf("failed select session: %w", err)
	}

	return user, nil
}

const queryCloseSession = `
UPDATE sessions
SET closed_at = now()
WHERE id = $1;
`

func (r *Sessions) Close(ctx context.Context, sessionID string) error {
	_, err := r.db.Exec(ctx, queryCloseSession, sessionID)
	if err != nil {
		return fmt.Errorf("failed exec update sessions: %w", err)
	}

	return nil
}

const queryIsClosedSession = `
SELECT closed_at IS NOT NULL as is_closed
FROM sessions
WHERE id = $1
LIMIT 1;
`

func (r *Sessions) IsClosed(ctx context.Context, sessionID string) (bool, error) {
	var isClosed bool

	err := r.db.QueryRow(ctx, queryIsClosedSession, sessionID).Scan(&isClosed)
	if err != nil {
		return false, fmt.Errorf("failed select is_closed session: %w", err)
	}

	return isClosed, nil
}

func (r *Sessions) scan(row pgx.Row) (*domain.Session, error) {
	var (
		id, userID string
		createdAt  time.Time
		closedAt   sql.NullTime
	)

	err := row.Scan(&id, &userID, &createdAt, &closedAt)
	if err != nil {
		return nil, fmt.Errorf("failed scan session: %w", err)
	}

	s := new(domain.Session)
	s.ID = id
	s.UserID = userID
	s.CreatedAt, _ = types.TimestampProto(createdAt)

	if closedAt.Valid {
		s.ClosedAt, _ = types.TimestampProto(closedAt.Time)
	}

	return s, nil
}
