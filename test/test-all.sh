#!/bin/bash
set -euo pipefail
scriptdir=$(cd $(dirname $0) && pwd)

cd ${scriptdir}

BUILD_TARGET=$1

for dir in test-${BUILD_TARGET}*; do
  [ ! -d $dir ] && continue

  echo "--------------------------------------------------------------------"
  echo $dir
  echo "--------------------------------------------------------------------"
  time $dir/test.sh
done