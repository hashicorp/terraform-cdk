#!/bin/bash
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

set -euo pipefail
scriptdir=$(cd $(dirname $0) && pwd)

npx jest -u $scriptdir/*/edge