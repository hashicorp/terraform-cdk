#!/bin/sh
set -e
scriptdir=$(cd $(dirname $0) && pwd)

cd ${scriptdir}

npx jest --runInBand