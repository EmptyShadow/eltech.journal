// +build integration

package pg_test

import (
	"context"
	"github.com/EmptyShadow/eltech.journal/internal/pg/testdata"
	"os"
	"testing"

	"github.com/EmptyShadow/eltech.journal/pkg/pgx"
	"github.com/jackc/pgx/v4/pgxpool"
)

var pgdb *pgxpool.Pool

func TestMain(m *testing.M) {
	pgdb = pgx.OpenPool(pgx.ConnString(), "eltech_journal_test")
	defer pgdb.Close()

	_, err := pgdb.Exec(context.Background(), testdata.Up)
	if err != nil {
		panic(err)
	}

	code := m.Run()

	_, err = pgdb.Exec(context.Background(), testdata.Down)
	if err != nil {
		panic(err)
	}

	os.Exit(code)
}
