# генерация
gen:
	@go generate ./...

# работа с гошным кодом
go-lint:
	@docker run --rm -v "${PWD}":/app -w /app golangci/golangci-lint:v1.33-alpine golangci-lint run

new-migrate:
	@docker run --rm -u "$(id -u)":"$(id -g)" -v "${PWD}"/migrations:/migrations migrate/migrate create -ext sql -dir /migrations ${name}

# работа с dev локальным кластером
run-dev:
	@docker-compose \
	--file deployments/dev-compose/docker-compose.yml \
	--project-name=eltech_journal \
	${ARGS}