#!/bin/bash

set -e
scriptdir="$(cd $(dirname $0) && pwd)"

if ! grep -m1 -q Copyright $1
then
cat $scriptdir/license-header.txt $1 >$1.new && mv $1.new $1
fi
