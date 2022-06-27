#!/bin/bash
set -euo pipefail

# always run from repo root
cd $(dirname $0)/..

tests=$( cat ./test/provider-tests/providers.json | jq -c 'keys')
matrix="{ \"target\": $tests }"
echo $matrix
echo "::set-output name=tests::$matrix"
