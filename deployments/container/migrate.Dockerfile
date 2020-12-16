FROM golang:alpine AS builder
WORKDIR /app
ENV CGO_ENABLED 0
COPY cmd cmd
COPY pkg pkg
COPY vendor vendor
COPY go.mod go.mod
COPY go.sum go.sum
RUN go build -mod=vendor -o /migrate ./cmd/migrate

FROM scratch
COPY --from=builder /migrate /migrate
COPY migrations /migrations
ENTRYPOINT ["/migrate", "up"]