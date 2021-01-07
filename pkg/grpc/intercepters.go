package grpc

import (
	"context"
	"errors"
	"github.com/EmptyShadow/eltech.journal/pkg/ulid"
	"time"

	"github.com/gogo/protobuf/proto"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func UnaryServerErrorUnwrap(ctx context.Context, req interface{}, _ *grpc.UnaryServerInfo,
	handler grpc.UnaryHandler) (resp interface{}, err error) {
	resp, err = handler(ctx, req)
	if err == nil {
		return resp, nil
	}

	target := errors.Unwrap(err)
	if target != nil {
		err = target
	}

	if status.Convert(err) != nil {
		return nil, err
	}

	return nil, status.Error(codes.Internal, "internal server error")
}

func UnaryServerLogger(l *zap.Logger) grpc.UnaryServerInterceptor {
	return func(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo,
		handler grpc.UnaryHandler) (resp interface{}, err error) {
		fields := []zap.Field{
			zap.String("method", info.FullMethod),
			zap.String("request message", proto.MessageName(req.(proto.Message))),
			zap.Time("input time", time.Now()),
			zap.String("request id", ulid.MustNew()),
		}

		defer func(startAt time.Time) {
			fields = append(fields, zap.Duration("processing time", time.Since(startAt)),
				zap.Time("output time", time.Now()))

			if err != nil {
				l.Error(err.Error(), fields...)
			} else {
				fields = append(fields, zap.String("response message", proto.MessageName(resp.(proto.Message))))

				l.Info("output", fields...)
			}
		}(time.Now())

		l.Info("input", fields...)

		return handler(ctx, req)
	}
}
