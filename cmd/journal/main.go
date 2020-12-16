package main

import (
	"context"
	"github.com/EmptyShadow/eltech.journal/internal/users"
	"github.com/EmptyShadow/eltech.journal/pkg/config"
	"github.com/EmptyShadow/eltech.journal/pkg/log"

	apiusers "github.com/EmptyShadow/eltech.journal/api/users"
	"github.com/EmptyShadow/eltech.journal/internal/pg"
	"github.com/EmptyShadow/eltech.journal/pkg/grpc"
	"github.com/EmptyShadow/eltech.journal/pkg/http"
	"github.com/EmptyShadow/eltech.journal/pkg/parallel"
	"github.com/EmptyShadow/eltech.journal/pkg/pgx"
	"github.com/EmptyShadow/eltech.journal/pkg/pprof"
	"github.com/EmptyShadow/eltech.journal/pkg/shutdown"
)

const (
	serviceName = "journal"

	envAPIAddr = "API_SERVING_ADDR"
	apiAddr    = "0.0.0.0:9000"

	envPprofAddr = "PPROF_SERVING_ADDR"
	pprofAddr    = "0.0.0.0:7010"

	envPGConnString = "PG_CONN_STRING"
)

func main() {
	l := log.NewLogger()
	defer l.Sync()

	l.Info("init integrations")

	pgdb := pgx.OpenPool(config.Get(envPGConnString).String(""), serviceName)
	defer pgdb.Close()

	l.Info("init adapters")

	usersRepo := pg.NewUsersRepository(pgdb)

	grpcServer := grpc.NewServer(grpc.ServingAddr(config.Get(envAPIAddr).String(apiAddr)))

	l.Info("registration services")

	apiusers.RegisterUsersServer(grpcServer.Server, users.NewService(usersRepo))

	l.Info("start app")
	defer l.Info("stop app")

	shutdown.PanicIfErr(parallel.Run(context.Background(),
		shutdown.NotifySignals,
		http.RunServer(
			pprof.HTTPServer(
				http.ServingAddr(config.Get(envPprofAddr).String(pprofAddr)),
			),
		),
		grpc.RunServer(grpcServer),
	))
}
