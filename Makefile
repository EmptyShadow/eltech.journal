# генерация
gen:
	@go generate ./...

# работа с гошным кодом
go-lint:
	@docker run --rm -v $(pwd):/app -w /app golangci/golangci-lint:v1.31.0 golangci-lint run

new-migrate:
	@migrate create -ext sql -dir migrations ${name}

# работа с dev локальным кластером
run-dev:
	@docker-compose \
	--file deployments/dev-compose/docker-compose.yml \
	--project-name=eltech_journal \
	${ARGS}