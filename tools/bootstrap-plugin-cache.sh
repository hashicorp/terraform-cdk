#!/bin/sh
set -euo pipefail

# Disable spinner even when we have a TTY
export CI='1'

find ./examples -type f -name '*cdktf.json' |  tr '\n' " " | xargs jq -s "map(.terraformProviders) | add | unique | { \"language\": \"typescript\", \"terraformProviders\": . }" > bootstrap.json

scriptdir=$(cd $(dirname $0) && pwd)

cd $(mktemp -d)
mkdir test && cd test

cdktf init --template typescript --project-name="typescript-bootstrap" --project-description="typescript bootstrap plugin cache" --local

# add null provider
mv ${scriptdir}/../bootstrap.json ./cdktf.json
cdktf get

echo "DONE"

