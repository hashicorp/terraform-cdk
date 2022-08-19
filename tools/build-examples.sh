#!/bin/bash
set -euo pipefail

# always run from repo root
cd $(dirname $0)/..

# Disable spinner even when we have a TTY
export CI='1'

BUILD_TARGET=$1

npx lerna run --scope ${BUILD_TARGET}* reinstall
build_start_time=$(date +%s.%3N)
npx lerna run --scope ${BUILD_TARGET}* build
build_end_time=$(date +%s.%3N)
synth_start_time=$(date +%s.%3N)
npx lerna run --scope ${BUILD_TARGET}* synth
synth_end_time=$(date +%s.%3N)

build_time=$(echo "scale=3; $build_end_time - $build_start_time" | bc)
synth_time=$(echo "scale=3; $synth_end_time - $synth_start_time" | bc)

if [ ! -z $EMIT_BENCHMARK_FILE ]; then
cat << EOF > ./benchmark.json
[{
    "name": "$1 - get",
    "unit": "ms",
    "value": $build_time
},
{
    "name": "$1 - synth",
    "unit": "ms",
    "value": $synth_time
}]
EOF
fi

