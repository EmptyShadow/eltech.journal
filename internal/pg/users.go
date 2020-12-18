package pg

import (
	"context"
	sqlstd "database/sql"
	"fmt"
	"time"

	"github.com/EmptyShadow/eltech.journal/api/domain"
	"github.com/EmptyShadow/eltech.journal/pkg/sql"
	"github.com/gogo/protobuf/types"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
)

type Users struct {
	db *pgxpool.Pool
}

func NewUsers(db *pgxpool.Pool) *Users {
	return &Users{db: db}
}

const querySaveUser = `
INSERT INTO users (email, pwd, first_name, middle_name, last_name)
VALUES ($1, $2, $3, $4, $5)
RETURNING id, created_at;
`

func (r *Users) Save(ctx context.Context, email string, pwd []byte,
	fn *domain.FullName) (*domain.User, error) {
	var (
		id        string
		createdAt time.Time
	)

	err := r.db.
		QueryRow(ctx, querySaveUser, email, pwd, fn.FirstName, fn.MiddleName, fn.LastName).
		Scan(&id, &createdAt)
	if err != nil {
		return nil, fmt.Errorf("failed insert user: %w", err)
	}

	user := new(domain.User)
	user.ID = id
	user.Pwd = pwd
	user.Email = email
	user.FullName = fn
	user.CreatedAt, _ = types.TimestampProto(createdAt)

	return user, nil
}

const queryReadUserByID = `
SELECT id,
       email,
       pwd,
       first_name,
       middle_name,
       last_name,
       created_at,
       updated_at,
       deleted_at
FROM users
WHERE id = $1;
`

func (r *Users) Read(ctx context.Context, id string) (*domain.User, error) {
	user, err := r.scan(r.db.QueryRow(ctx, queryReadUserByID, id))
	if err != nil {
		return nil, fmt.Errorf("failed select user: %w", err)
	}

	return user, nil
}

const queryGetUserPwd = `
SELECT pwd
FROM users
WHERE id = $1;
`

func (r *Users) Pwd(ctx context.Context, id string) ([]byte, error) {
	var pwd []byte

	err := r.db.
		QueryRow(ctx, queryGetUserPwd, id).
		Scan(&pwd)
	if err != nil {
		return nil, fmt.Errorf("failed exec select: %w", err)
	}

	return pwd, nil
}

const queryUpdateUser = `
UPDATE users
SET updated_at = now(), %s
WHERE id = $1
RETURNING updated_at;
`

func (r *Users) Update(ctx context.Context, user *domain.User) error {
	fields := []interface{}{"email", user.Email, "pwd", user.Pwd}

	if user.FullName != nil {
		fields = append(fields, "first_name", user.FullName.FirstName, "middle_name", user.FullName.MiddleName,
			"last_name", user.FullName.LastName)
	}

	setFields, setValues := sql.BuildUpdateSets(2, "$", fields...)

	var updatedAt sqlstd.NullTime

	args := append([]interface{}{user.ID}, setValues...)

	err := r.db.QueryRow(ctx, fmt.Sprintf(queryUpdateUser, setFields), args...).
		Scan(&updatedAt)
	if err != nil {
		return fmt.Errorf("failed exec update: %w", err)
	}

	if updatedAt.Valid {
		user.UpdatedAt, _ = types.TimestampProto(updatedAt.Time)
	}

	return nil
}

const queryDeleteUserByID = `
DELETE FROM users WHERE id = $1;
`

func (r *Users) Delete(ctx context.Context, id string) error {
	_, err := r.db.Exec(ctx, queryDeleteUserByID, id)
	if err != nil {
		return fmt.Errorf("failed exec delete: %w", err)
	}

	return nil
}

func (r *Users) scan(row pgx.Row) (*domain.User, error) {
	var (
		id, email, firstName, lastName string
		pwd                            []byte
		middleName                     sqlstd.NullString
		createdAt                      time.Time
		updatedAt, deletedAt           sqlstd.NullTime
	)

	err := row.Scan(&id, &email, &pwd, &firstName, &middleName, &lastName, &createdAt, &updatedAt, &deletedAt)
	if err != nil {
		return nil, fmt.Errorf("failed scan: %w", err)
	}

	user := new(domain.User)
	user.ID = id
	user.Email = email
	user.Pwd = pwd
	user.FullName = new(domain.FullName)
	user.FullName.FirstName = firstName
	user.FullName.LastName = lastName
	user.CreatedAt, _ = types.TimestampProto(createdAt)

	if middleName.Valid {
		user.FullName.MiddleName = middleName.String
	}

	if updatedAt.Valid {
		user.UpdatedAt, _ = types.TimestampProto(updatedAt.Time)
	}

	if deletedAt.Valid {
		user.DeletedAt, _ = types.TimestampProto(deletedAt.Time)
	}

	return user, nil
}
