FROM golang:alpine AS builder
WORKDIR /app
ENV CGO_ENABLED 0
COPY pkg pkg
COPY vendor vendor
COPY go.mod go.mod
COPY go.sum go.sum
COPY cmd/migrate cmd/migrate
RUN go build -mod=vendor -o /journal-migrate ./cmd/migrate

FROM scratch
COPY --from=builder /journal-migrate /journal-migrate
COPY migrations /migrations
ENTRYPOINT ["/journal-migrate", "up"]