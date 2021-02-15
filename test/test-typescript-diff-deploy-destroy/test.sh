#!/bin/sh
set -e
scriptdir=$(cd $(dirname $0) && pwd)
npx jest --runInBand ${scriptdir}/test.js