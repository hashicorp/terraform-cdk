#!/bin/bash
#
# usage: align-version.sh [SUFFIX]
#
# aligns lerna version to package.json
# this is executed in CI builds so artifacts include the actual version instead of 0.0.0.0
#
# if SUFFIX is provided, appends this to the version as-is
#

set -euo pipefail
scriptdir="$(cd $(dirname $0) && pwd)"
cd ${scriptdir}/..

suffix="${1:-}"
version="$(node -p "require('./package.json').version")${suffix}"
npx lerna version ${version} --yes --exact --force-publish=* --no-git-tag-version --no-push
