package grpc

import (
	"context"
	"net"

	"github.com/EmptyShadow/eltech.journal/pkg/parallel"
	"google.golang.org/grpc"
)

const defaultServingAddr = "0.0.0.0:9000"

type Server struct {
	*grpc.Server
	ServingAddr string
}

type serverOpts struct {
	servingAddr string
	grpcOpts    []grpc.ServerOption
}

type ServerOpt func(opt *serverOpts)

func ServingAddr(addr string) ServerOpt {
	return func(opt *serverOpts) {
		opt.servingAddr = addr
	}
}

func Options(opts ...grpc.ServerOption) ServerOpt {
	return func(opt *serverOpts) {
		opt.grpcOpts = opts
	}
}

func defaultServerOpt() *serverOpts {
	return &serverOpts{
		servingAddr: defaultServingAddr,
	}
}

func NewServer(opts ...ServerOpt) *Server {
	_opts := defaultServerOpt()

	for _, opt := range opts {
		opt(_opts)
	}

	return &Server{
		Server:      grpc.NewServer(_opts.grpcOpts...),
		ServingAddr: _opts.servingAddr,
	}
}

func RunServer(server *Server) parallel.Func {
	return func(ctx context.Context) error {
		listener, err := net.Listen("tcp", server.ServingAddr)
		if err != nil {
			return err
		}

		return parallel.WaitFnOrCtx(
			ctx,
			func() error { return server.Serve(listener) },
			server.GracefulStop,
		)
	}
}
