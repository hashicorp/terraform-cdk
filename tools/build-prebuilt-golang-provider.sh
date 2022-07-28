#!/bin/bash

set -e

# Since the GH Action release of the golang pre-built provider fails
# due to OOM errors in some instances, we need to build and push the provider manually.

PROVIDERS=(google googlebeta azurerm kubernetes)

if [ -z "$GITHUB_TOKEN" ]; then
    echo "Set the GITHUB_TOKEN environment variable to a personal github token with enough permissions."
    exit 1;
fi

# Some of use use gpg signing, but that does not work with the automation, so we need to disable it first.
GPG_SIGNING=$(git config --global commit.gpgsign)
if [ "$GPG_SIGNING" = "true" ]; then
    git config --global commit.gpgsign false
    echo "WARNING: Disabled global gpg signing since the automation does not handle it well."
    echo "         You will need to re-enable it manually after the build is complete."
    echo "         Run: git config --global commit.gpgsign true"
fi

for PROVIDER in "${PROVIDERS[@]}"; do
    tmp_dir=$(mktemp -d)
    cd "$tmp_dir"
    echo "Cloning ${PROVIDER} provider into $tmp_dir"
    git clone "git@github.com:hashicorp/cdktf-provider-$PROVIDER.git" .

    echo "Installing provider dependencies"
    yarn

    echo "Set version in package.json"

    CURRENT_VERSION=$(git -c "versionsort.suffix=-" tag --sort="-version:refname" --list "v*" | head -n 1 | sed 's/^v//')
    jq -M -r ".version = \"$CURRENT_VERSION\"" package.json > package.json.new
    mv package.json.new package.json

    # We don't use built to get around packaging for all the languages.
    echo "Compiling ${PROVIDER} provider"
    yarn compile

    echo "Packaging ${PROVIDER} provider"
    yarn package:go

    GIT_USER_NAME="CDK for Terraform Team" GIT_USER_EMAIL="github-team-tf-cdk@hashicorp.com" GITHUB_TOKEN="$GITHUB_TOKEN" npx --yes -p publib@latest publib-golang
done