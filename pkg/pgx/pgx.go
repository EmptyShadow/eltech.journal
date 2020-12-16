package pgx

import (
	"context"
	"fmt"
	"github.com/EmptyShadow/eltech.journal/pkg/config"
	"github.com/jackc/pgx/v4/pgxpool"
)

const (
	envMaxConnIdleTime = "PG_MAX_CONN_IDLE_TIME"
	envMaxConnLifetime = "PG_MAX_CONN_LIFETIME"
	envMaxConns        = "PG_MAX_CONNS"
	envMinConns        = "PG_MIN_CONNS"
)

func OpenPool(connString string, appName string) *pgxpool.Pool {
	conf, err := pgxpool.ParseConfig(connString)
	if err != nil {
		panic(fmt.Errorf("failed parse postgres conf: %w", err))
	}

	conf.MaxConnIdleTime = config.Get(envMaxConnIdleTime).Duration(0)
	conf.MaxConnLifetime = config.Get(envMaxConnLifetime).Duration(0)
	conf.MaxConns = int32(config.Get(envMaxConns).Int(0))
	conf.MinConns = int32(config.Get(envMinConns).Int(0))
	conf.ConnConfig.RuntimeParams = map[string]string{
		"application_name": appName,
	}

	pool, err := pgxpool.ConnectConfig(context.Background(), conf)
	if err != nil {
		panic(fmt.Errorf("failed connect to postgres: %w", err))
	}

	return pool
}
