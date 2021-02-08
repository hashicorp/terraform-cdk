#!/bin/bash
set -euo pipefail
scriptdir=$(cd $(dirname $0) && pwd)

cd ${scriptdir}

for dir in test-csharp*; do
  [ ! -d $dir ] && continue

  echo "--------------------------------------------------------------------"
  echo $dir
  echo "--------------------------------------------------------------------"
  $dir/test.sh
done

for dir in test-java*; do
  [ ! -d $dir ] && continue

  echo "--------------------------------------------------------------------"
  echo $dir
  echo "--------------------------------------------------------------------"
  $dir/test.sh
done

for dir in test-python*; do
  [ ! -d $dir ] && continue

  echo "--------------------------------------------------------------------"
  echo $dir
  echo "--------------------------------------------------------------------"
  $dir/test.sh
done