package parallel

import (
	"context"

	"golang.org/x/sync/errgroup"
)

type Func func(ctx context.Context) error

func Run(ctx context.Context, fns ...Func) error {
	group, ctx := errgroup.WithContext(ctx)

	for _, fn := range fns {
		internalFn := fn

		group.Go(func() error {
			return internalFn(ctx)
		})
	}

	return group.Wait()
}

func WaitFnOrCtx(ctx context.Context, fn func() error, done func()) error {
	errCh := make(chan error)

	go func() {
		errCh <- fn()
	}()

	select {
	case err := <-errCh:
		return err
	case <-ctx.Done():
		done()

		return ctx.Err()
	}
}
