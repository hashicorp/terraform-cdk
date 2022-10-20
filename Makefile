.DEFAULT_GOAL := website

# Default: run this if working on the website locally to run in watch mode.
.PHONY: website
website:
	$(MAKE) -C website website

# Use this if you have run `website/build-local` to use the locally built image.
.PHONY: website/local
website/local:
	$(MAKE) -C website website/local

# Run this to generate a new local Docker image.
.PHONY: website/build-local
website/build-local:
	$(MAKE) -C website website/build-local