#!/bin/bash
set -euo pipefail

# always run from repo root
cd $(dirname $0)/..

rm -fr dist
mkdir -p dist

for dir in $(lerna ls -p); do
  src="${dir}/dist"
  if [ -d "$src" ]; then
    echo "collecting from ${src}"
    rsync -aL ${src}/ dist/
  fi
done

find dist/