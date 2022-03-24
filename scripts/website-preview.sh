#!/bin/bash

# This script runs a local preview of terraform.io (https://github.com/hashicorp/terraform-website)
# and allows you to preview terraform-cdk content changes locally.

echo "------------------------------------------"
echo "🏎  Starting terraform.io local preview..."
echo "------------------------------------------"
echo ""

BRANCH=brk.feat/tfcdk-remote-content

NAV_DATA_PATH="data/cdktf-nav-data.json"
CONTENT_DIR="cdktf"
WORKDIR="/website"

NAV_DATA_BIND_MOUNT="$(pwd)/website/data/cdktf-nav-data.json:/website/data/cdktf-nav-data.json"
CONTENT_DIR_BIND_MOUNT="$(pwd)/website/docs/cdktf:/website/cdktf"

IMAGE_NAME="hashicorp-terraform-website-local"

echo "----------------------------"
echo "🐳 Building terraform.io docker image..."
echo "----------------------------"
echo ""

docker rmi $IMAGE_NAME:latest || true
docker build --quiet -t $IMAGE_NAME:latest https://github.com/hashicorp/terraform-website.git#$BRANCH

# This must be run from the `terraform-cdk` root
echo "---------------------------"
echo "🏃 Running local preview..."
echo "---------------------------"
echo ""

docker run \
    -e DEBUG=@hashicorp* \
    -e "IS_CONTENT_PREVIEW=true" \
    -e "NAV_DATA_PATH=$NAV_DATA_PATH" \
    -e "CONTENT_DIR=$CONTENT_DIR" \
    --interactive \
    --rm \
    --tty \
    --workdir "$WORKFIR" \
    --volume "$NAV_DATA_BIND_MOUNT" \
    --volume "$CONTENT_DIR_BIND_MOUNT" \
    --publish "3000:3000" \
    --name terraform-cdk \
    $IMAGE_NAME:latest \
    npm start

