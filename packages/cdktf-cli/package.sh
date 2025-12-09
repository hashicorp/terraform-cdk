#!/bin/bash
# Copyright IBM Corp. 2019, 2025
# SPDX-License-Identifier: MPL-2.0

set -euo pipefail
bundle=$(npm pack)
rm -fr dist
mkdir -p dist/js
mv ${bundle} dist/js
