package pgx

import (
	"context"
	"fmt"
	"github.com/jackc/pgx/v4/pgxpool"
)

func OpenPool(connString string) *pgxpool.Pool {
	config, err := pgxpool.ParseConfig(connString)
	if err != nil {
		panic(fmt.Errorf("failed parse postgres config: %w", err))
	}

	pool, err := pgxpool.ConnectConfig(context.Background(), config)
	if err != nil {
		panic(fmt.Errorf("failed connect to postgres: %w", err))
	}

	return pool
}