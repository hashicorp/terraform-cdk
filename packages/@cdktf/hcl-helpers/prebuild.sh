#!/bin/bash
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

set -euo pipefail

if [[ -z "${GOROOT-}" ]]; then
  echo "GOROOT environment variable needs to be set!"
  exit 1
fi

if [ ! -f "$GOROOT/misc/wasm/wasm_exec.js" ]
then
    echo "File $GOROOT/misc/wasm/wasm_exec.js does not exist!"
    exit 1
fi

cp "$GOROOT/misc/wasm/wasm_exec.js" ./wasm/wasm_exec.js

echo "Copied build system wasm_exec.js file to wasm/ directory."