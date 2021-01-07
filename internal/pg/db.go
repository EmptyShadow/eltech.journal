package pg

import (
	"context"
	"fmt"

	"github.com/jackc/pgconn"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
)

type DB interface {
	QueryRow(ctx context.Context, sql string, args ...interface{}) pgx.Row
	Query(ctx context.Context, sql string, args ...interface{}) (pgx.Rows, error)
	Exec(ctx context.Context, sql string, arguments ...interface{}) (pgconn.CommandTag, error)
}

func CompleteTx(ctx context.Context, tx pgx.Tx, err error) error {
	if err != nil {
		return tx.Rollback(ctx)
	}

	return tx.Commit(ctx)
}

func TxFlow(ctx context.Context, pool *pgxpool.Pool, h func(tx pgx.Tx) error) error {
	tx, err := pool.Begin(ctx)
	if err != nil {
		return fmt.Errorf("failed start tx: %w", err)
	}

	err = CompleteTx(ctx, tx, h(tx))
	if err != nil {
		return fmt.Errorf("failed complete tx: %w", err)
	}

	return nil
}
