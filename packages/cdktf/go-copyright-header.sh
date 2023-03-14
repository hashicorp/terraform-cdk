#!/bin/bash

DIRECTORY="$PWD/dist/go/cdktf"
COPYRIGHT="Copyright (c) HashiCorp, Inc."
LICENSE="SPDX-License-Identifier: MPL-2.0"

# search for all files in the dist/go/cdktf directory and its subdirectories
find "$DIRECTORY" -type f -print0 | while IFS= read -r -d '' FILE; do
    # avoid appending to tarball file and to version
    if [[ "$FILE" != *.tgz ]] && [[ "$FILE" != *version ]]; then
        # only add copyright to LICENSE, move to outer directory so its at root of Github Repo
        if [[ "$FILE" == *LICENSE* ]]; then
            awk -v s="$COPYRIGHT\n" 'BEGIN{print s}{print}' "$FILE" > temp && mv temp "$FILE" 2>/dev/null
            mv "$FILE" "$DIRECTORY/../LICENSE" 2>/dev/null
        else
            awk -v s="// $COPYRIGHT\n// $LICENSE\n" 'BEGIN{print s}{print}' "$FILE" > temp && mv temp "$FILE" 2>/dev/null
        fi
    fi
done
