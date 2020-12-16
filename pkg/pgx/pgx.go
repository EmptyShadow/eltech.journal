package pgx

import (
	"context"
	"fmt"
	"github.com/jackc/pgx/v4/pgxpool"
)

func OpenPool(connString string) *pgxpool.Pool {
	config, err := pgxpool.ParseConfig(connString)
	if err != nil {
		panic(fmt.Errorf("failed parse config: %w", err))
	}

	pool, err := pgxpool.ConnectConfig(context.Background(), config)
	if err != nil {
		panic(fmt.Errorf("failed connect: %w", err))
	}

	return pool
}