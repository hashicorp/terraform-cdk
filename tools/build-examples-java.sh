#!/bin/bash
set -euo pipefail

# always run from repo root
cd $(dirname $0)/..

# Disable spinner even when we have a TTY
export CI='1'

npx lerna run --stream --concurrency 1 --no-bail --scope @examples/java* reinstall
npx lerna run --stream --concurrency 1 --no-bail --scope @examples/java* build
npx lerna run --stream --concurrency 1 --no-bail --scope @examples/java* synth

