#!/bin/bash
# This script is created by projen, do not edit it directly.
set -e

SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

# check if the module folder has been generated as expected
MODULES_FOLDER=$( cd -- "$SCRIPTPATH/../src/modules/stacks" >/dev/null 2>&1 ; pwd -P )
SRC_FOLDER=$( cd -- "$SCRIPTPATH/../src/" >/dev/null 2>&1 ; pwd -P )
TARGET_FOLDER="$SCRIPTPATH/../modules"

if [ ! -d "$MODULES_FOLDER" ]; then
  echo "Expected module folder to exist at $MODULES_FOLDER"
  exit 1
fi

cd "$MODULES_FOLDER"
for d in */ ; do
    [ -L "${d%/}" ] && continue

    dirname="${d%/}"


    # Check if everything is in place
    if [ ! -f "$MODULES_FOLDER/$dirname/cdk.tf.json" ]; then
      echo "Expected code for $dirname at cdk.tf.json to exist at $MODULES_FOLDER/$dirname"
      exit 1
    fi

    if [ ! -f "$SRC_FOLDER/$dirname.md" ]; then
      echo "Expected Documentation for $dirname at $dirname.md to exist at $SRC_FOLDER/$dirname.md"
      exit 1
    fi

    # Copy module and readme together
    echo "Copying Code and README for module $dirname"
    mkdir -p "$TARGET_FOLDER"
    mkdir -p "$TARGET_FOLDER/$dirname"
    cp "$MODULES_FOLDER/$dirname/cdk.tf.json" "$TARGET_FOLDER/$dirname/cdk.tf.json"
    cp "$SRC_FOLDER/$dirname.md" "$TARGET_FOLDER/$dirname/README.md"

    # Add README hcl docs
    if which terraform-docs >/dev/null; then
      terraform-docs markdown table --output-file "$TARGET_FOLDER/$dirname/README.md" "$TARGET_FOLDER/$dirname" 
    else
      docker run --rm --volume "$SCRIPTPATH/../modules:/terraform-docs" -u $(id -u) quay.io/terraform-docs/terraform-docs:0.16.0 markdown table --output-file "/terraform-docs/$dirname/README.md" /terraform-docs/$dirname
    fi
done