// +build e2e

package main

import (
	"context"
	"crypto/sha1"
	"testing"

	"github.com/EmptyShadow/eltech.journal/api/domain"
	usersapi "github.com/EmptyShadow/eltech.journal/api/users"
	"github.com/stretchr/testify/assert"
	"google.golang.org/grpc"
)

func Test_Users(t *testing.T) {
	asserting := assert.New(t)

	conn, err := grpc.Dial("127.0.0.1:8000", grpc.WithInsecure())
	if err != nil {
		t.Fatal(err)
	}
	defer conn.Close()

	users := usersapi.NewUsersClient(conn)

	email := "example@gmail.com"
	fn := &domain.FullName{
		FirstName:  "First",
		MiddleName: "Middle",
		LastName:   "Last",
	}
	pwd := []byte("qwertyuio")

	pwdHash := sha1.New()

	_, err = pwdHash.Write(pwd)
	if err != nil {
		t.Fatal(err)
	}

	res, err := users.Create(context.Background(), &usersapi.CreateRequest{
		Credentials: &domain.Credentials{
			Email:       email,
			SHA1HashPWD: pwdHash.Sum(nil),
		},
		FullName: fn,
	})
	if err != nil {
		t.Fatal(err)
	}

	if asserting.NotNil(res.User) {
		asserting.Equal(res.User.Email, email)
		asserting.Equal(res.User.FullName, fn)
		asserting.NotNil(res.User.CreatedAt)
		asserting.NotEmpty(res.User.ID)
		asserting.NotEmpty(res.User.Pwd)
	}
}
