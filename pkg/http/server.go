package http

import (
	"context"
	"net/http"

	"github.com/EmptyShadow/eltech.journal/pkg/parallel"
)

const defaultServingAddr = "0.0.0.0:80"

type serverOpts struct {
	servingAddr string
}

type ServerOpt func(opt *serverOpts)

func ServingAddr(addr string) ServerOpt {
	return func(opt *serverOpts) {
		opt.servingAddr = addr
	}
}

func defaultServerOpt() *serverOpts {
	return &serverOpts{
		servingAddr: defaultServingAddr,
	}
}

func NewServer(h http.Handler, opts ...ServerOpt) *http.Server {
	_opts := defaultServerOpt()

	for _, opt := range opts {
		opt(_opts)
	}

	return &http.Server{
		Addr:    _opts.servingAddr,
		Handler: h,
	}
}

func RunServer(server *http.Server) parallel.Func {
	return func(ctx context.Context) error {
		return parallel.WaitFnOrCtx(
			ctx,
			server.ListenAndServe,
			func() { _ = server.Shutdown(context.Background()) },
		)
	}
}
