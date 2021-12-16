# Default: run this if working on the website locally to run in watch mode.
website:
	@echo "==> Downloading latest Docker image..."
	@docker pull hashicorp/terraform-website:full
	@echo "==> Starting website in Docker..."
	@docker run \
		--interactive \
		--rm \
		--tty \
		--workdir "/website" \
		--volume "$(shell pwd):/website/ext/terraform-cdk" \
		--publish "3000:3000" \
		hashicorp/terraform-website:full \
		npm start

.DEFAULT_GOAL := website
.PHONY: website