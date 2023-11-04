IMAGE := opentelemetry-tracing-example

.PHONY: help build up down restart ps rm logs %-up %-down %-restart %-rm %-logs

help:
	@echo "Usage: make [target]"
	@echo ""
	@awk -F ':.*?## ' '/^[%a-zA-Z0-9_-]+:.*?## / { printf "  %-20s %s\n", $$1, $$2 }' $(MAKEFILE_LIST)
	@echo ""

build: ## Build the Docker image
	@docker build --tag $(IMAGE) .

up: ## Create and start all containers
	@docker compose up -d

down: ## Stop all containers
	@docker compose down

restart: ## Restart all containers
	@docker compose restart

ps: ## List all running containers
	@docker compose ps

rm: ## Remove all containers and volumes
	@docker compose down -v
	@docker compose rm -f

logs: ## Print logs from all containers
	@docker compose logs -f

%-up: ## Create and start a specific container
	@docker-compose up -d $*

%-down: ## Stop a specific container
	@docker-compose down $*

%-restart: ## Restart a specific container
	@docker-compose restart $*

%-rm: ## Remove a specific container and volumes
	@docker compose down -v $*
	@docker compose rm -f $*

%-logs: ## Print logs from a specific container
	@docker-compose logs -f $*
