#!/bin/sh
set -e
scriptdir=$(cd $(dirname $0) && pwd)

cd $(mktemp -d)
mkdir test && cd test

# hidden files should be ignored
touch .foo
mkdir .bar

# initialize an empty project
cdktf init --template typescript

# put some code in it
cp ${scriptdir}/main.ts .

# build
yarn compile
yarn synth

# get rid of downloaded Terraform providers, no point in diffing them
rm -rf cdktf.out/.terraform

# show output
diff cdktf.out ${scriptdir}/expected

echo "PASS"