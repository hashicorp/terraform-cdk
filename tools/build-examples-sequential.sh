#!/bin/bash
set -euo pipefail

# always run from repo root
cd $(dirname $0)/..

# Disable spinner even when we have a TTY
export CI='1'

BUILD_TARGET=$1

npx lerna run --stream --concurrency 1 --no-bail --scope @examples/${BUILD_TARGET}* reinstall
npx lerna run --stream --concurrency 1 --no-bail --scope @examples/${BUILD_TARGET}* build
npx lerna run --stream --concurrency 1 --no-bail --scope @examples/${BUILD_TARGET}* synth

