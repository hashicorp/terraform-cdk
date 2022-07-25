#!/bin/bash

set -ex

# always run from this dir
cd $(dirname $0)

node ./generate-provider-test.js "$1"
../run-against-dist npx jest "./providers/$1"
