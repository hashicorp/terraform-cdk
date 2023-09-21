#!/bin/bash
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0


set -ex

sed -i 's/"com\.hashicorp:cdktf:0\.0\.0"/files("..\/..\/..\/dist\/java\/com\/hashicorp\/cdktf\/0.0.0\/cdktf-0.0.0.jar")/g' build.gradle
