#!/bin/bash
# This script is created by projen, do not edit it directly.
set -e

terraform -chdir=terraform init --upgrade
terraform -chdir=terraform fmt
terraform -chdir=terraform validate

          