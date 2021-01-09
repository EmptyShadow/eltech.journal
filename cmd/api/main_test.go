// +build e2e

package main

import (
	"context"
	"crypto/sha1"
	"fmt"
	"os"
	"testing"

	authapi "github.com/EmptyShadow/eltech.journal/api/auth"
	"github.com/EmptyShadow/eltech.journal/api/domain"
	usersapi "github.com/EmptyShadow/eltech.journal/api/users"
	"github.com/stretchr/testify/assert"
	"google.golang.org/grpc"
)

var conn *grpc.ClientConn

func TestMain(m *testing.M) {
	var err error

	conn, err = grpc.Dial("127.0.0.1:8000", grpc.WithInsecure())
	if err != nil {
		panic(err)
	}

	code := m.Run()

	if err = conn.Close(); err != nil {
		fmt.Println(err)
	}

	os.Exit(code)
}

func Test_Users(t *testing.T) {
	asserting := assert.New(t)

	users := usersapi.NewUsersClient(conn)

	email := "example@gmail.com"
	fn := &domain.FullName{
		FirstName:  "First",
		MiddleName: "Middle",
		LastName:   "Last",
	}
	pwd := []byte("qwertyuio")

	pwdHash := sha1.New()

	_, err := pwdHash.Write(pwd)
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

func Test_Auth(t *testing.T) {
	asserting := assert.New(t)

	auth := authapi.NewAuthClient(conn)

	email := "example@gmail.com"
	pwd := []byte("qwertyuio")

	pwdHash := sha1.New()
	_, err := pwdHash.Write(pwd)
	if err != nil {
		t.Fatal(err)
	}

	resAuth, err := auth.Trust(context.Background(), &authapi.TrustRequest{
		Credentials: &domain.Credentials{
			Email:       email,
			SHA1HashPWD: pwd,
		},
	})
	if !(asserting.NoError(err) &&
		asserting.NotNil(resAuth) &&
		asserting.NotNil(resAuth.Tokens) &&
		asserting.NotEmpty(resAuth.Tokens.Access) &&
		asserting.NotEmpty(resAuth.Tokens.Refresh) &&
		asserting.NotEqual(resAuth.Tokens.Access, resAuth.Tokens.Refresh)) {
		return
	}

	resRefresh, err := auth.Refresh(context.Background(), &authapi.RefreshRequest{
		RefreshToken: resAuth.Tokens.Refresh,
	})
	if !(asserting.NoError(err) &&
		asserting.NotNil(resRefresh) &&
		asserting.NotNil(resRefresh.Tokens) &&
		asserting.NotEmpty(resRefresh.Tokens.Access) &&
		asserting.NotEmpty(resRefresh.Tokens.Refresh) &&
		asserting.NotEqual(resRefresh.Tokens.Access, resRefresh.Tokens.Refresh) &&
		asserting.NotEqual(resAuth.Tokens, resRefresh.Tokens)) {
		return
	}
}
