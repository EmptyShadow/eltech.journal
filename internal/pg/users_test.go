// +build integration

package pg_test

import (
	"context"
	"testing"

	"github.com/EmptyShadow/eltech.journal/api/domain"
	"github.com/EmptyShadow/eltech.journal/internal/pg"
	"github.com/stretchr/testify/assert"
)

var (
	emails = []string{
		"email1@test.com", "email2@test.com", "email3@test.com", "email4@test.com",
	}
	users = make(map[string]*domain.User)
)

func TestUsers_Save(t *testing.T) {
	asserting := assert.New(t)

	r := pg.NewUsers(pgdb)

	pwd := []byte("password")
	fn := &domain.FullName{
		FirstName:  "first",
		MiddleName: "middle",
		LastName:   "last",
	}

	for _, email := range emails {
		u, err := r.Save(context.Background(), email, pwd, fn)
		if asserting.NoError(err) && asserting.NotNil(u) {
			asserting.Equal(u.Email, email)
			asserting.Equal(u.FullName, fn)
			asserting.Equal(u.Pwd, pwd)
			asserting.NotNil(u.CreatedAt)

			users[u.ID] = u
		}
	}
}

func TestUsers_Read(t *testing.T) {
	asserting := assert.New(t)

	r := pg.NewUsers(pgdb)

	for id, wantUser := range users {
		gotUser, err := r.Read(context.Background(), id)
		if asserting.NoError(err) && asserting.NotNil(gotUser) {
			asserting.Equal(gotUser, wantUser)
		}
	}
}

func TestUsers_Pwd(t *testing.T) {
	asserting := assert.New(t)

	r := pg.NewUsers(pgdb)

	for id, wantUser := range users {
		gotPwd, err := r.Pwd(context.Background(), id)
		if asserting.NoError(err) {
			asserting.Equal(gotPwd, wantUser.Pwd)
		}
	}
}

func TestUsers_Update_Email(t *testing.T) {
	asserting := assert.New(t)

	r := pg.NewUsers(pgdb)

	for _, user := range users {
		u := &domain.User{
			ID:    user.ID,
			Email: "new" + user.Email,
		}

		err := r.Update(context.Background(), u)
		if asserting.NoError(err) {
			asserting.NotNil(u.UpdatedAt)
		}

		user.UpdatedAt = u.UpdatedAt
	}
}

func TestUsers_Update_Pwd(t *testing.T) {
	asserting := assert.New(t)

	r := pg.NewUsers(pgdb)

	for _, user := range users {
		u := &domain.User{
			ID:  user.ID,
			Pwd: []byte("new_password"),
		}

		err := r.Update(context.Background(), u)
		if asserting.NoError(err) {
			asserting.NotNil(u.UpdatedAt)
		}

		user.UpdatedAt = u.UpdatedAt
	}
}

func TestUsers_Update_FullName(t *testing.T) {
	asserting := assert.New(t)

	r := pg.NewUsers(pgdb)

	for _, user := range users {
		u := &domain.User{
			ID:  user.ID,
			FullName: &domain.FullName{
				FirstName:  "newfirstname",
				MiddleName: "newmiddlename",
				LastName:   "newlastname",
			},
		}

		err := r.Update(context.Background(), u)
		if asserting.NoError(err) {
			asserting.NotNil(u.UpdatedAt)
		}

		user.UpdatedAt = u.UpdatedAt
	}
}

func TestUsers_Delete(t *testing.T) {
	asserting := assert.New(t)

	r := pg.NewUsers(pgdb)

	for id, _ := range users {
		err := r.Delete(context.Background(), id)
		asserting.NoError(err)
	}
}
