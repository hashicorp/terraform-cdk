#!/bin/bash

set -ex

sed -i "s/implementation 'com.hashicorp:cdktf:0.0.0'/implementation files(\"..\/..\/..\/dist\/java\/com\/hashicorp\/cdktf\/0.0.0\/cdktf-0.0.0.jar\")/" build.gradle