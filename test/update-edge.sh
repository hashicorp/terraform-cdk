#!/bin/bash
# Copyright IBM Corp. 2019, 2025
# SPDX-License-Identifier: MPL-2.0

set -euo pipefail
scriptdir=$(cd $(dirname $0) && pwd)

npx jest -u $scriptdir/*/edge