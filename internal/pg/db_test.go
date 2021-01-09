// +build integration

package pg_test

import (
	"context"
	"errors"
	"testing"

	"github.com/EmptyShadow/eltech.journal/internal/pg"
	"github.com/jackc/pgx/v4"
	"github.com/stretchr/testify/assert"
)

func Test_TxFlow_Commit(t *testing.T) {
	asserting := assert.New(t)

	ctx := context.Background()

	asserting.NoError(pg.TxFlow(ctx, pgdb, func(tx pgx.Tx) error {
		_, err := tx.Exec(ctx, "CREATE TABLE test_table (\n    text text NOT NULL\n);")
		if err != nil {
			return err
		}

		_, err = tx.Exec(ctx, "INSERT INTO test_table (text) VALUES ('test1');")
		if err != nil {
			return err
		}

		_, err = tx.Exec(ctx, "DROP TABLE test_table;")
		if err != nil {
			return err
		}

		return nil
	}))
}

func Test_TxFlow_Rollback(t *testing.T) {
	asserting := assert.New(t)

	ctx := context.Background()

	asserting.NoError(pg.TxFlow(ctx, pgdb, func(tx pgx.Tx) error {
		_, err := tx.Exec(ctx, "CREATE TABLE test_table (\n    text text NOT NULL\n);")
		if err != nil {
			return err
		}

		_, err = tx.Exec(ctx, "INSERT INTO test_table (text) VALUES ('test1');")
		if err != nil {
			return err
		}

		return errors.New("test error")
	}))
}
