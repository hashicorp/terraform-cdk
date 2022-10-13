#!/bin/bash

set -e
scriptdir="$(cd $(dirname $0) && pwd)"

for i in $(git ls-files | grep '.ts$'); do
  bash $scriptdir/add-copyright-header-to-file.sh $i
done