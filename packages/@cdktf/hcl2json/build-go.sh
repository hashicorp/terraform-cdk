#!/bin/bash
set -euo pipefail

echo "Running go get.."
GOOS=js GOARCH=wasm go get .
echo "Running go build.."
GOOS=js GOARCH=wasm go build -ldflags="-s -w" -o main.wasm
echo "Zipping wasm build.."
gzip -9 -v -c main.wasm > main.wasm.gz
echo "Done."
