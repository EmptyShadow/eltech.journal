package main

import (
	"errors"
	"fmt"
	"os"
	"path/filepath"

	"github.com/EmptyShadow/eltech.journal/pkg/pgx"
	"github.com/golang-migrate/migrate/v4"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	_ "github.com/lib/pq"
)

const (
	up   = "up"
	down = "down"
	drop = "drop"
)

var ErrUnsupportedCmd = errors.New("unsupported cmd")

func main() {
	cmd := os.Args[1]

	var err error

	defer func() {
		if !errors.Is(err, migrate.ErrNoChange) && err != nil {
			fmt.Println(err.Error())
			os.Exit(1)
		}
	}()

	dir, err := os.Getwd()
	if err != nil {
		return
	}

	file := filepath.Join(dir, "migrations")

	fmt.Println("file", file)

	m, err := pgx.NewMigrate(file)
	if err != nil {
		return
	}
	defer m.Close()

	switch cmd {
	case up:
		err = m.Up()
	case down:
		err = m.Down()
	case drop:
		err = m.Drop()
	default:
		err = ErrUnsupportedCmd
	}
}
