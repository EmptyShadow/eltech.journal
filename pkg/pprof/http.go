package pprof

import (
	stdhttp "net/http"
	"net/http/pprof"

	"github.com/EmptyShadow/eltech.journal/pkg/http"
)

func HTTPServer(opts ...http.ServerOpt) *stdhttp.Server {
	m := stdhttp.NewServeMux()
	m.Handle("/debug/pprof/", stdhttp.HandlerFunc(pprof.Index))
	m.Handle("/debug/pprof/cmdline", stdhttp.HandlerFunc(pprof.Cmdline))
	m.Handle("/debug/pprof/profile", stdhttp.HandlerFunc(pprof.Profile))
	m.Handle("/debug/pprof/symbol", stdhttp.HandlerFunc(pprof.Symbol))
	m.Handle("/debug/pprof/trace", stdhttp.HandlerFunc(pprof.Trace))

	return http.NewServer(m, opts...)
}
