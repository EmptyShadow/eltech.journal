package shutdown

import (
	"context"
	"os"
	"os/signal"
	"syscall"
)

type Signal struct {
	s os.Signal
}

func (e *Signal) Error() string {
	return e.s.String()
}

func NotifySignals(ctx context.Context) error {
	c := make(chan os.Signal, 1)

	signal.Notify(c, syscall.SIGINT, syscall.SIGTERM)

	select {
	case s := <-c:
		return &Signal{s: s}
	case <-ctx.Done():
		return ctx.Err()
	}
}

