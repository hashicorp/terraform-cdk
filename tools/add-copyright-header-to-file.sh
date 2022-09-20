#!/bin/bash

set -e
scriptdir="$(cd $(dirname $0) && pwd)"

IGNORED_FILES=(packages/cdktf-cli/templates/typescript/main.ts)

if echo $IGNORED_FILES | grep -w -q $1; then
  echo "Skipping $1"
  exit 0
fi

if ! grep -m1 -q Copyright $1; then
cat $scriptdir/license-header.txt $1 >$1.new && mv $1.new $1
fi
