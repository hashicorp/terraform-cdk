#!/bin/sh
set -e
scriptdir=$(cd $(dirname $0) && pwd)
cd $(mktemp -d)
mkdir test && cd test

# hidden files should be ignored
touch .foo
mkdir .bar

# initialize an empty project
cdktf init --template python --project-name="python-test" --project-description="python test app" --local

# put some code in it
cp ${scriptdir}/main.py .
cp ${scriptdir}/cdktf.json .

rm -rf cdktf.out

# regenerate with module
cdktf get

# build
cdktf synth

# get rid of downloaded Terraform providers, no point in diffing them
rm -rf cdktf.out/.terraform

# show output
diff cdktf.out ${scriptdir}/expected

echo "PASS"