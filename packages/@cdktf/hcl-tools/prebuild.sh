#!/bin/bash
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

set -euo pipefail

GOROOT="${GOROOT:-$(go env GOROOT)}"

if [[ -z "${GOROOT-}" ]]; then
  echo "GOROOT environment variable needs to be set!"
  exit 1
fi

WASM_EXEC_PATH="${GOROOT}/misc/wasm/wasm_exec.js"

# After Go version 1.24, the wasm_exec is in the lib/wasm directory instead
if [[ ! -f "${WASM_EXEC_PATH}" ]]; then
    WASM_EXEC_PATH="${GOROOT}/lib/wasm/wasm_exec.js"
fi

cp "$WASM_EXEC_PATH" ./wasm/wasm_exec.js

echo "Copied build system wasm_exec.js file to wasm/ directory."
