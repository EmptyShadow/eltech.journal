# сборка бинарника сервера
FROM golang:1.15-alpine AS server-builder
WORKDIR /app
ENV CGO_ENABLED 0
ENV TZ=Europe/Moscow
RUN apk --no-cache add ca-certificates tzdata && \
    cp -r -f /usr/share/zoneinfo/$TZ /etc/localtime
COPY cmd cmd
COPY api api
COPY internal internal
COPY pkg pkg
COPY vendor vendor
COPY go.mod go.mod
COPY go.sum go.sum
RUN go build -mod=vendor -o /journal ./cmd/journal

# Объединение бинарника и статики ui в один образ без каких либо других зависимостей
FROM scratch
COPY --from=server-builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
COPY --from=server-builder /etc/localtime /etc/localtime
COPY --from=server-builder /journal /journal
COPY migrations /migrations
ENTRYPOINT ["/journal"]
EXPOSE 9000 # grpc
EXPOSE 7000 # health
EXPOSE 7010 # pprof