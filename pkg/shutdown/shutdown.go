package shutdown

import (
	"errors"
	"os"
)

func IsSignalErr(err error) bool {
	var s *Signal

	return errors.As(err, &s)
}

func PanicIfErr(err error) {
	if !IsSignalErr(err) && err != nil {
		panic(err)
	}
}

func ExitIfErr(err error) {
	if !IsSignalErr(err) && err != nil {
		os.Exit(1)
	}
}
