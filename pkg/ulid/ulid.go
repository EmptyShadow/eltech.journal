package ulid

import (
	"math/rand"

	"github.com/oklog/ulid/v2"
)

func MustNew() string {
	t := ulid.Time(ulid.Now())

	// nolint:gosec // rand crypto излишний.
	entropy := ulid.Monotonic(rand.New(rand.NewSource(t.UnixNano())), 0)

	return ulid.MustNew(ulid.Timestamp(t), entropy).String()
}
