#!/bin/bash

set -ex
scriptdir="$(cd $(dirname $0) && pwd)"

for i in $(git ls-files | grep '.ts$'); do
  if ! grep -q Copyright $i
  then
    cat $scriptdir/license-header.txt $i >$i.new && mv $i.new $i
  fi
done