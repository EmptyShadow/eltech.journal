// +build integration

package pg_test

import (
	"context"
	"testing"

	"github.com/EmptyShadow/eltech.journal/api/domain"
	"github.com/EmptyShadow/eltech.journal/internal/pg"
	"github.com/EmptyShadow/eltech.journal/internal/pg/testdata"
	"github.com/stretchr/testify/assert"
)

var sessions = make(map[string]*domain.Session)

func TestSessions_Save(t *testing.T) {
	asserting := assert.New(t)

	r := pg.NewSessions(pgdb)

	for _, userID := range testdata.Users {
		session, err := r.Save(context.Background(), userID)
		if asserting.NoError(err) && asserting.NotNil(session) {
			asserting.Equal(session.UserID, userID)
			asserting.NotEmpty(session.ID)
			asserting.NotNil(session.CreatedAt)
			asserting.Nil(session.ClosedAt)

			sessions[session.ID] = session
		}
	}
}

func TestSessions_Read(t *testing.T) {
	asserting := assert.New(t)

	r := pg.NewSessions(pgdb)

	for id, wantSession := range sessions {
		gotSession, err := r.Read(context.Background(), id)
		if asserting.NoError(err) && asserting.NotNil(gotSession) {
			asserting.Equal(gotSession, wantSession)
		}
	}
}

func TestSessions_IsClosed_False(t *testing.T) {
	asserting := assert.New(t)

	r := pg.NewSessions(pgdb)

	for id, _ := range sessions {
		isClosed, err := r.IsClosed(context.Background(), id)
		asserting.NoError(err)
		asserting.False(isClosed)
	}
}

func TestSessions_Close(t *testing.T) {
	asserting := assert.New(t)

	r := pg.NewSessions(pgdb)

	for id, _ := range sessions {
		asserting.NoError(r.Close(context.Background(), id))
	}
}

func TestSessions_IsClosed_True(t *testing.T) {
	asserting := assert.New(t)

	r := pg.NewSessions(pgdb)

	for id, _ := range sessions {
		isClosed, err := r.IsClosed(context.Background(), id)
		asserting.NoError(err)
		asserting.True(isClosed)
	}
}
