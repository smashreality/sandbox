.DEFAULT_GOAL := start

.PHONY: start
start: ## cd into client folder and runs npm start
	NODE_ENV=development npm start

.PHONY: sb
sb: ## cd into client folder and runs npm start
	NODE_ENV=development npm run storybook

.PHONY: test
test: ## cd into client folder and runs npm start
	npm t

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
