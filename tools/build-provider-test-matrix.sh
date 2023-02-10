#!/bin/bash
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

set -euo pipefail

# always run from repo root
cd $(dirname $0)/..

tests=$( cat ./test/provider-tests/providers.json | jq -c 'keys')
matrix="{ \"target\": $tests }"
echo $matrix
echo "tests=$matrix" >> $GITHUB_OUTPUT
