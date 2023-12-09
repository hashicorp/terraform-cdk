#!/bin/bash
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

set -euo pipefail

# always run from repo root
cd $(dirname $0)/..

tfVersions=$(cat .terraform.versions.json | jq -r '.tested | join(" ")')
tests=$(cd test && npx jest --listTests  --testPathIgnorePatterns='/provider-tests/' | jq  -R -s --arg cwd "$(pwd)/" --arg tfVersions "${tfVersions}" -c 'split("\n") | map(select(length > 0)) | map(sub($cwd; "")) | { target: values, terraform: ($tfVersions | split(" ")), hclOutput: [false, true]}')
echo $tests
echo "tests=$tests" >> $GITHUB_OUTPUT
