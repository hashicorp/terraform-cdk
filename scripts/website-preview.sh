#!/bin/bash

# This script runs a local preview of terraform.io (https://github.com/hashicorp/terraform-website)
# and allows you to preview terraform-cdk content changes locally.

echo "------------------------------------------"
echo "🏎  Starting terraform.io local preview..."
echo "------------------------------------------"
echo ""

PREVIEW_DIR=website-preview
BRANCH=brk.feat/tfcdk-remote-content

NAV_DATA_PATH="data/cdktf-nav-data.json"
CONTENT_DIR="cdktf"
WORKDIR="/website"

NAV_DATA_BIND_MOUNT="$(pwd)/website/data/cdktf-nav-data.json:/website/data/cdktf-nav-data.json"
CONTENT_DIR_BIND_MOUNT="$(pwd)/website/docs/cdktf:/website/cdktf"

IMAGE_NAME="hashicorp-terraform-website-local"

echo "----------------------------------------"
echo "⏳ Cloning the terraform-website repo..."
echo "----------------------------------------"
echo ""

if [ ! -d "$PREVIEW_DIR" ]; then
    git clone --depth=1 --branch=$BRANCH https://github.com/hashicorp/terraform-website.git "$PREVIEW_DIR"
else
    echo "--------------------------------------------------------"
    echo "📂 [terraform-website] already exists @ $(pwd)/$PREVIEW_DIR"
    echo "--------------------------------------------------------"
    echo ""
    echo "----------------------------"
    echo "⬇️ Pulling latest changes..."
    echo "----------------------------"
    echo ""

    pushd "$PREVIEW_DIR"
    git pull
    
    if [ $? -ne 0 ]; then
        echo "-------------------------------------------------------------"
        echo "🚨 Failed to pull latest changes from terraform-website repo."
        echo "-------------------------------------------------------------"
        echo ""
        echo "  If you've manually updated $PREVIEW_DIR, consider undoing"
        echo "  those changes so that the latest changes may be pulled."
        echo ""
    fi

    popd
fi



echo "----------------------------"
echo "🐳  Building terraform.io docker image..."
echo "----------------------------"
echo ""

pushd "$PREVIEW_DIR"
docker rmi $IMAGE_NAME:latest || true
docker build -t $IMAGE_NAME:latest .
popd

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

