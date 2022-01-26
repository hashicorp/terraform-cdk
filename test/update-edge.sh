#!/bin/bash
set -euo pipefail
scriptdir=$(cd $(dirname $0) && pwd)

npx jest -u $scriptdir/*/edge