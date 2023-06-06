#!/bin/bash
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0


set -ex

# always run from this dir
cd $(dirname $0)

export NODE_OPTIONS="--max-old-space-size=6656"
node ./generate-provider-test.js "$1"
../run-against-dist npx jest "./providers/$1"
