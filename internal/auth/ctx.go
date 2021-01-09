package auth

import (
	"context"

	"github.com/EmptyShadow/eltech.journal/api/domain"
)

type ClaimsCtx struct{}

type claimsKey struct{}

func (c *ClaimsCtx) FromContext(ctx context.Context) (claims domain.Claims, isExists bool) {
	claims, isExists = ctx.Value(claimsKey{}).(domain.Claims)

	return
}

func (c *ClaimsCtx) ToContext(ctx context.Context, claims domain.Claims) context.Context {
	return context.WithValue(ctx, claimsKey{}, claims)
}
