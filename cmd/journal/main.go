package main

import (
	"context"

	apiusers "github.com/EmptyShadow/eltech.journal/api/users"
	"github.com/EmptyShadow/eltech.journal/internal/pg"
	"github.com/EmptyShadow/eltech.journal/internal/users"
	"github.com/EmptyShadow/eltech.journal/pkg/config"
	"github.com/EmptyShadow/eltech.journal/pkg/crypto"
	"github.com/EmptyShadow/eltech.journal/pkg/grpc"
	"github.com/EmptyShadow/eltech.journal/pkg/http"
	"github.com/EmptyShadow/eltech.journal/pkg/log"
	"github.com/EmptyShadow/eltech.journal/pkg/parallel"
	"github.com/EmptyShadow/eltech.journal/pkg/pgx"
	"github.com/EmptyShadow/eltech.journal/pkg/pprof"
	"github.com/EmptyShadow/eltech.journal/pkg/shutdown"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"golang.org/x/crypto/bcrypt"
)

const (
	serviceName = "journal"

	envGRPCAPIAddr = "GRPC_API_SERVING_ADDR"
	apiGRPCAddr    = "0.0.0.0:8000"

	envHTTPAPIAddr = "HTTP_API_SERVING_ADDR"
	apiHTTPAddr    = "0.0.0.0:9000"

	envPprofAddr = "PPROF_SERVING_ADDR"
	pprofAddr    = "0.0.0.0:7010"
)

func main() {
	ctx := context.Background()

	l := log.NewLogger()
	defer l.Sync()

	l.Info("init integrations")

	pgdb := pgx.OpenPool(pgx.ConnString(), serviceName)
	defer pgdb.Close()

	l.Info("init adapters")

	pwdCryptor := crypto.NewPwdCryptor(bcrypt.DefaultCost)

	usersRepo := pg.NewUsers(pgdb)

	l.Info("init endpoints")

	pprofServer := pprof.HTTPServer(http.ServingAddr(config.Get(envPprofAddr).String(pprofAddr)))
	grpcServer := grpc.NewServer(grpc.ServingAddr(config.Get(envGRPCAPIAddr).String(apiGRPCAddr)))
	http2GRPCServer := http.NewServer(grpcweb.WrapServer(grpcServer.Server),
		http.ServingAddr(config.Get(envHTTPAPIAddr).String(apiHTTPAddr)))

	l.Info("registration services")

	apiusers.RegisterUsersServer(grpcServer.Server, users.NewService(usersRepo, pwdCryptor))

	l.Info("start app")
	defer l.Info("stop app")

	shutdown.PanicIfErr(
		parallel.Run(ctx,
			shutdown.NotifySignals,
			http.RunServer(pprofServer),
			grpc.RunServer(grpcServer),
			http.RunServer(http2GRPCServer),
		),
	)
}
