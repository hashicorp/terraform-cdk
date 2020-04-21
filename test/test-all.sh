#!/bin/bash
set -euo pipefail
scriptdir=$(cd $(dirname $0) && pwd)

cd ${scriptdir}

for dir in test-*; do
  [ ! -d $dir ] && continue

  echo "--------------------------------------------------------------------"
  echo $dir
  echo "--------------------------------------------------------------------"
  $dir/test.sh
done