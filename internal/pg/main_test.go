// +build integration

package pg_test

import (
	"os"
	"testing"

	"github.com/EmptyShadow/eltech.journal/pkg/pgx"
	"github.com/jackc/pgx/v4/pgxpool"
)

var pgdb *pgxpool.Pool

func TestMain(m *testing.M) {
	pgdb = pgx.OpenPool(pgx.ConnString(), "eltech_journal_test")
	defer pgdb.Close()

	code := m.Run()

	os.Exit(code)
}
