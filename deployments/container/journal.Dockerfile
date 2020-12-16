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
COPY cmd cmd
RUN go build -mod=vendor -o /journal ./cmd/journal

FROM scratch
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
COPY --from=builder /etc/localtime /etc/localtime
COPY --from=builder /journal /journal
ENTRYPOINT ["/journal"]
EXPOSE 9000 7010