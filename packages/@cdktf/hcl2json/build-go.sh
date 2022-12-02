#!/bin/bash
set -euo pipefail

GOOS=js GOARCH=wasm go get .
GOOS=js GOARCH=wasm go build  -ldflags="-s -w" -o main.wasm
gzip -9 -v -c main.wasm > build/main.wasm.gz
