package log

import (
	"fmt"
	"go.uber.org/zap"
)

func NewLogger() *zap.Logger {
	l, err := zap.NewProduction()
	if err != nil {
		panic(fmt.Errorf("failed init logger: %w", err))
	}

	return l
}
