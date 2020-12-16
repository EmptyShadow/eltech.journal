package shutdown

import "os"

func IsSignalErr(err error) bool {
	_, isSignal := err.(*Signal)

	return isSignal
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
