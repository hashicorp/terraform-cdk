#!/bin/bash

set -ex

# Creates a folder with all pre-built providers and lerna packages
# that can be used to run a command against each (e.g. triggering a workflow or pushing a commit)
# Requires the gh CLI and jq to be installed

PATH_TO_CREATE=$1
if [ -z "$PATH_TO_CREATE" ]; then
    echo "No argument supplied, please call with the path to create the folder"
fi

# Create the folder
mkdir -p "$PATH_TO_CREATE"
cd "$PATH_TO_CREATE"

# Create static files
cat << EOF > lerna.json
{
  "packages": [
    "packages/*"
  ],
  "version": "0.0.0"
}
EOF

cat << EOF > package.json
{
  "name": "root",
  "private": true,
  "devDependencies": {
    "lerna": "^4.0.0"
  }
}
EOF

# Install lerna
yarn

REPO_NAMES=$(gh repo list hashicorp --json "name" --topic pre-built-provider | jq -r ".[] | .name")

# Create package folder
mkdir -p packages
cd packages

# Clone all the repositories, could be parallelized, but it's not worth it
for repo in $REPO_NAMES; do
    echo "Adding $repo"
    
    gh repo clone "hashicorp/$repo"
done

# Removing is easier than filtering
rm -rf cdktf-provider-project
