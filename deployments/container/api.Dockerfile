FROM golang:alpine AS builder
WORKDIR /app
ENV CGO_ENABLED 0
ENV TZ=Europe/Moscow
RUN apk --no-cache add ca-certificates tzdata && \
    cp -r -f /usr/share/zoneinfo/$TZ /etc/localtime
COPY api api
COPY internal internal
COPY pkg pkg
COPY vendor vendor
COPY go.mod go.mod
COPY go.sum go.sum
COPY cmd/api cmd/api
RUN go build -mod=vendor -o /journal-api ./cmd/api

FROM scratch
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
COPY --from=builder /etc/localtime /etc/localtime
COPY --from=builder /journal-api /journal-api
ENTRYPOINT ["/journal-api"]
EXPOSE 8000 9000 7010