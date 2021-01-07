package auth

import (
	"context"
	"fmt"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

type ClaimsExportInterceptor struct {
	tokenMaker   TokenMaker
	sessionsRepo SessionsRepository
	header       string
}

func NewClaimsExportInterceptor(tokenMaker TokenMaker, sessionsRepo SessionsRepository,
	header string) *ClaimsExportInterceptor {
	return &ClaimsExportInterceptor{tokenMaker: tokenMaker, sessionsRepo: sessionsRepo, header: header}
}

func (i *ClaimsExportInterceptor) Unary(ctx context.Context, req interface{}, _ *grpc.UnaryServerInfo,
	handler grpc.UnaryHandler) (resp interface{}, err error) {
	hs, isExists := metadata.FromIncomingContext(ctx)
	if !isExists {
		return handler(ctx, req)
	}

	values, isExists := hs[i.header]
	if !isExists {
		return handler(ctx, req)
	}

	claims, err := i.tokenMaker.Verify(ctx, values[0])
	if err != nil {
		return nil, fmt.Errorf("failed verify token: %w", err)
	}

	isClosed, err := i.sessionsRepo.IsClosed(ctx, claims.SessionID)
	if err != nil {
		return nil, fmt.Errorf("failed check session is closed status: %w", err)
	}

	if isClosed {
		return nil, status.Error(codes.Unauthenticated, "session is closed")
	}

	return handler(new(ClaimsCtx).ToContext(ctx, *claims), req)
}
