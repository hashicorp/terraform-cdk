#!/bin/bash
set -euo pipefail
bundle=$(npm pack)
rm -fr dist
mkdir -p dist/js
mv ${bundle} dist/js
