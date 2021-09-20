#!/bin/bash
set -euo pipefail

# always run from repo root
cd $(dirname $0)/..

tests=$(cd test && npx jest --listTests | jq  -R -s --arg cwd "$(pwd)/" -c 'split("\n") | map(select(length > 0)) | map(sub($cwd; "")) | { target: values, terraform: ["0.14.11", "0.15.4"]}')
echo $tests
echo "::set-output name=tests::$tests"
