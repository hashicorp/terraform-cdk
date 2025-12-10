#!/bin/bash
# Copyright IBM Corp. 2019, 2025
# SPDX-License-Identifier: MPL-2.0


set -ex

# always run from this dir
cd $(dirname $0)

result=( $(cat "./providers.json" | jq -r '. | keys[]') )

for type in "${result[@]}"; do
    UPDATE_SNAPSHOTS=true ./test-provider.sh "$type" 
done