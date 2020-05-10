#!/bin/sh
set -e
scriptdir=$(cd $(dirname $0) && pwd)
cd $(mktemp -d)
mkdir test && cd test

# hidden files should be ignored
touch .foo
mkdir .bar

# initialize an empty project
cdktf init --template python

# put some code in it
cp ${scriptdir}/main.py .

# build
pipenv run python ./main.py

# get rid of downloaded Terraform providers, no point in diffing them
rm -rf dist/.terraform

# show output
diff dist ${scriptdir}/expected

echo "PASS"