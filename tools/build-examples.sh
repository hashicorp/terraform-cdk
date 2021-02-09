#!/bin/bash
set -euo pipefail

# always run from repo root
cd $(dirname $0)/..

# Disable spinner even when we have a TTY
export CI='1'

BUILD_TARGET=$1

if  [ $BUILD_TARGET == "java" ] ; then
  npx lerna run --stream --scope @examples/${BUILD_TARGET}* --concurrency 1 reinstall
  npx lerna run --stream --scope @examples/${BUILD_TARGET}* --concurrency 1 build
  npx lerna run --stream --scope @examples/${BUILD_TARGET}* --concurrency 1 synth
else
  npx lerna run --parallel --scope @examples/${BUILD_TARGET}* reinstall
  npx lerna run --parallel --scope @examples/${BUILD_TARGET}* build
  npx lerna run --parallel --scope @examples/${BUILD_TARGET}* synth
fi

