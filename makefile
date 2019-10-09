help: ## Help documentation
	@echo "Available targets:"
	@grep -E '^[a-zA-Z_0-9-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

init: ## Install necessary tooling on macOS
	brew install awscli || exit 0
	brew install terraform || exit 0

start: ## Start the app locally
	@(yarn start)

deploy: ## Deploy app to s3
	BUCKET=`(cd terraform && terraform output bucket_domain_name)` && \
	yarn build && aws s3 cp ./dist/apps/star-wars s3://$$BUCKET/ --recursive --acl public-read
