#!/bin/bash
set -euo pipefail
node index.js
cd cdk.out
terraform init
terraform apply