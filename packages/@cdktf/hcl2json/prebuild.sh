#!/bin/bash
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

set -euo pipefail

GOROOT="${GOROOT:-$(go env GOROOT)}"

if [[ -z "${GOROOT-}" ]]; then
  echo "GOROOT environment variable needs to be set!"
  exit 1
fi

WASM_EXEC_JS=""
if [ -f "$GOROOT/misc/wasm/wasm_exec.js" ]; then
    WASM_EXEC_JS="$GOROOT/misc/wasm/wasm_exec.js"
elif [ -f "$GOROOT/lib/wasm/wasm_exec.js" ]; then
    WASM_EXEC_JS="$GOROOT/lib/wasm/wasm_exec.js"
else
    echo "wasm_exec.js not found in either $GOROOT/misc/wasm/wasm_exec.js or $GOROOT/lib/wasm/wasm_exec.js!"
    exit 1
fi

cp "$WASM_EXEC_JS" ./wasm/wasm_exec.js

echo "Copied build system wasm_exec.js file to wasm/ directory."