package main

import (
	"context"
	httpsrc "net/http"

	apiauth "github.com/EmptyShadow/eltech.journal/api/auth"
	apiusers "github.com/EmptyShadow/eltech.journal/api/users"
	"github.com/EmptyShadow/eltech.journal/internal/auth"
	"github.com/EmptyShadow/eltech.journal/internal/jwt"
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
	pgxsrc "github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
	"go.uber.org/zap"
	"golang.org/x/crypto/bcrypt"
	grpcsrc "google.golang.org/grpc"
)

const (
	serviceName = "journal"

	envGRPCAPIAddr = "GRPC_API_SERVING_ADDR"
	apiGRPCAddr    = "0.0.0.0:8000"

	envHTTPAPIAddr = "HTTP_API_SERVING_ADDR"
	apiHTTPAddr    = "0.0.0.0:9000"

	envPprofAddr = "PPROF_SERVING_ADDR"
	pprofAddr    = "0.0.0.0:7010"

	envAuthTokenHeader     = "AUTH_TOKEN_HEADER"
	defaultAuthTokenHeader = "Authorization"
)

type integrations struct {
	pgdb *pgxpool.Pool
}

func initIntegrations() *integrations {
	c := new(integrations)

	c.pgdb = pgx.OpenPool(pgx.ConnString(), serviceName)

	return c
}

func (c *integrations) close() {
	c.pgdb.Close()
}

type adapters struct {
	usersRepo    *pg.Users
	sessionsRepo *pg.Sessions
	pwdCryptor   *crypto.PwdCryptor
	tokenManager *jwt.TokenManager
}

func initAdapters(ci *integrations) *adapters {
	c := new(adapters)

	c.usersRepo = pg.NewUsers(ci.pgdb)
	c.sessionsRepo = pg.NewSessions(ci.pgdb)
	c.pwdCryptor = crypto.NewPwdCryptor(bcrypt.DefaultCost)
	c.tokenManager = jwt.NewTokenManager()

	return c
}

type services struct {
	usersSvc *users.Service
	authSvc  *auth.Service
}

func initServices(ci *integrations, ca *adapters) *services {
	c := new(services)

	c.usersSvc = users.NewService(ca.usersRepo, ca.pwdCryptor)
	c.authSvc = auth.NewService(ca.usersRepo, ca.pwdCryptor, ca.tokenManager, sessionsTxFunc(ci.pgdb))

	return c
}

func sessionsTxFunc(pgdb *pgxpool.Pool) auth.SessionTxFunc {
	return func(ctx context.Context, txh func(r auth.SessionsRepository) error) error {
		return pg.TxFlow(ctx, pgdb, func(tx pgxsrc.Tx) error {
			return txh(pg.NewSessions(tx))
		})
	}
}

type servers struct {
	grpcServer                   *grpc.Server
	pprofServer, http2GRPCServer *httpsrc.Server
}

func initServers(l *zap.Logger, ca *adapters) *servers {
	c := new(servers)

	claimsExporter := auth.NewClaimsExportInterceptor(ca.tokenManager, ca.sessionsRepo,
		config.Get(envAuthTokenHeader).String(defaultAuthTokenHeader))

	c.grpcServer = grpc.NewServer(grpc.ServingAddr(config.Get(envGRPCAPIAddr).String(apiGRPCAddr)),
		grpc.Options(grpcsrc.ChainUnaryInterceptor(
			grpc.UnaryServerErrorUnwrap,
			grpc.UnaryServerLogger(l),
			claimsExporter.Unary,
		)))

	c.pprofServer = pprof.HTTPServer(http.ServingAddr(config.Get(envPprofAddr).String(pprofAddr)))

	c.http2GRPCServer = http.NewServer(grpcweb.WrapServer(c.grpcServer.Server),
		http.ServingAddr(config.Get(envHTTPAPIAddr).String(apiHTTPAddr)))

	return c
}

func main() {
	ctx := context.Background()

	l := log.NewLogger()
	defer l.Sync()

	l.Info("init integrations")
	ci := initIntegrations()

	l.Info("init adapters")
	ca := initAdapters(ci)

	l.Info("init services")
	csvc := initServices(ci, ca)

	l.Info("init servers")
	cserv := initServers(l, ca)

	l.Info("registration grpc services")
	apiusers.RegisterUsersServer(cserv.grpcServer.Server, csvc.usersSvc)
	apiauth.RegisterAuthServer(cserv.grpcServer.Server, csvc.authSvc)

	l.Info("start app")
	defer l.Info("stop app")

	shutdown.PanicIfErr(
		parallel.Run(ctx,
			shutdown.NotifySignals,
			grpc.RunServer(cserv.grpcServer),
			http.RunServer(cserv.pprofServer),
			http.RunServer(cserv.http2GRPCServer),
		),
	)
}
