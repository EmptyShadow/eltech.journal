package pgx

import (
	"database/sql"
	"fmt"

	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database"
	"github.com/golang-migrate/migrate/v4/database/postgres"
)

type Migrate struct {
	*migrate.Migrate
	db     *sql.DB
	driver database.Driver
}

func (m *Migrate) Close() {
	m.db.Close()
	m.driver.Close()
	m.Migrate.Close()
}

func NewMigrate(filesPath string) (*Migrate, error) {
	db, err := sql.Open("postgres", MustConnString())
	if err != nil {
		return nil, fmt.Errorf("error open pg connection: %w", err)
	}

	driver, err := postgres.WithInstance(db, &postgres.Config{})
	if err != nil {
		db.Close()

		return nil, fmt.Errorf("error create pg driver: %w", err)
	}

	m, err := migrate.NewWithDatabaseInstance(fmt.Sprintf("file://%s", filesPath), "postgres", driver)
	if err != nil {
		db.Close()
		driver.Close()

		return nil, fmt.Errorf("error create migration with db instance: %w", err)
	}

	return &Migrate{
		Migrate: m,
		db:      db,
		driver:  driver,
	}, nil
}
