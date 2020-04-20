#!/bin/bash
#
# usage: install-terraform.sh [VERSION]
#
# Install terraform. Defaults to latest if no version given
#
# Mostly copied from https://github.com/hashicorp/terraform-github-actions/blob/1acd6aa693246e33c9d49f861878fc5813736d47/src/main.sh#L76

tfVersion=${1:-"latest"}
if [[ "${tfVersion}" == "latest" ]]; then
  echo "Checking the latest version of Terraform"
  tfVersion=$(curl -sL https://releases.hashicorp.com/terraform/index.json | jq -r '.versions[].version' | grep -v '[-].*' | sort -rV | head -n 1)

  if [[ -z "${tfVersion}" ]]; then
    echo "Failed to fetch the latest version"
    exit 1
  fi
fi

url="https://releases.hashicorp.com/terraform/${tfVersion}/terraform_${tfVersion}_linux_amd64.zip"

echo "Downloading Terraform v${tfVersion}"
curl -s -S -L -o /tmp/terraform_${tfVersion} ${url}
if [ "${?}" -ne 0 ]; then
  echo "Failed to download Terraform v${tfVersion}"
  exit 1
fi
echo "Successfully downloaded Terraform v${tfVersion}"

echo "Unzipping Terraform v${tfVersion}"
unzip -d /usr/local/bin /tmp/terraform_${tfVersion} &> /dev/null
if [ "${?}" -ne 0 ]; then
  echo "Failed to unzip Terraform v${tfVersion}"
  exit 1
fi
echo "Successfully unzipped Terraform v${tfVersion}"
