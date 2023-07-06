#!/bin/bash
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0


set -ex

# always run from this dir
cd $(dirname $0)

node ./generate-provider-test.js "$1"

if [ -z "$UPDATE_SNAPSHOTS" ]; then
    ../run-against-dist npx jest "./providers/$1"
else 
    ../run-against-dist npx jest "./providers/$1" -u
fi
