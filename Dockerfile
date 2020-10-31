# сборка статического минимизированного ui приложения
FROM node:12-alpine as ui-builder
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY ./web/journal-ui /app
RUN npm run build

# сборка бинарника сервера
FROM golang:1.15-alpine AS server-builder
WORKDIR /app
ENV CGO_ENABLED 0
ENV TZ=Europe/Moscow
RUN apk --no-cache add ca-certificates tzdata && \
    cp -r -f /usr/share/zoneinfo/$TZ /etc/localtime
COPY ./cmd ./cmd
COPY ./internal ./internal
RUN go build -mod=vendor -o /journal ./cmd/journal

# Объединение бинарника и статики ui в один образ без каких либо других зависимостей
FROM scratch
COPY --from=server-builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
COPY --from=server-builder /etc/localtime /etc/localtime
COPY ./migrations /migrations
COPY --from=server-builder /journal /journal
COPY --from=ui-builder /app/build /public
ENTRYPOINT ["/journal"]
