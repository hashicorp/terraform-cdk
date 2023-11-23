#!/bin/bash
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

set -euo pipefail

# We use go.work for examples (so we can have editor support in those)
# We have to disable it here however, because else this script would try to
# build all go workspaces (which includes the examples which rely on the cdktf
# go package which might not exist yet)
export GOWORK=off

echo "Running go get.."
GOOS=js GOARCH=wasm go get .
echo "Running go build.."
GOOS=js GOARCH=wasm go build -ldflags="-s -w" -o main.wasm
echo "Zipping wasm build.."
gzip -9 -v -c main.wasm > main.wasm.gz
echo "Done."
