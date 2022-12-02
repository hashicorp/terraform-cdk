#!/bin/bash
set -euo pipefail

GOOS=js GOARCH=wasm go get .
GOOS=js GOARCH=wasm go build  -ldflags="-s -w" -o main.wasm
gzip -9 -v -c main.wasm > main.wasm.gz

# We need it in both root and build folder for npm pack
cp main.wasm.gz build/main.wasm.gz