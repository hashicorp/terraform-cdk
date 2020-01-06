#!/bin/bash
set -euo pipefail
npx tfcdk install-module terraform-aws-modules/eks/aws
npx tfcdk install-module terraform-aws-modules/vpc/aws
npx tfcdk install-provider aws
npx tfcdk install-provider google
