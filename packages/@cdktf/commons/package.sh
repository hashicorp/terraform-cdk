#!/bin/bash
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

set -euo pipefail
bundle=$(npm pack)
rm -fr dist
mkdir -p dist/js
mv ${bundle} dist/js
