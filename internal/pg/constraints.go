package pg

import (
	"errors"

	"github.com/jackc/pgconn"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

var constraints = map[string]error{
	"users_email_idx":            status.Error(codes.AlreadyExists, "user email is already exists"),
	"users_first_name_non_empty": status.Error(codes.InvalidArgument, "user first name must not be empty"),
	"users_last_name_non_empty":  status.Error(codes.InvalidArgument, "user last name must not be empty"),
}

func ConvertConstraintErr(err error) error {
	var pgerr *pgconn.PgError

	if !errors.As(err, &pgerr) {
		return err
	}

	constErr, exists := constraints[pgerr.ConstraintName]
	if exists {
		return constErr
	}

	return err
}
