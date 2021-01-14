#!/bin/sh
set -e

# Disable spinner even when we have a TTY
export CI='1'

export TERRAFORM_CLOUD_WORKSPACE_NAME="${GITHUB_RUN_NUMBER}-$(date +%s%N)"
export TERRAFORM_CLOUD_ORGANIZATION="cdktf-team"

# Don't run on external Pull Requests - Will be addressed properly with
# https://github.com/hashicorp/terraform-cdk/issues/200
[ -z "$TERRAFORM_CLOUD_TOKEN" ] && echo "Need to set TERRAFORM_CLOUD_TOKEN - skipping" && exit 0;

scriptdir=$(cd $(dirname $0) && pwd)

cd $(mktemp -d)
mkdir test && cd test

# initialize an empty project
# currently, we initialize this as a local project but we will use stack overrides
# to define remote state backend and test
# the deploy which should call into Terraform
# Cloud for the remote state.
cdktf init --template typescript-minimal --project-name="typescript-test" --project-description="typescript test app" --local

# Create Workspace
echo "Creating workspace ${TERRAFORM_CLOUD_WORKSPACE_NAME} in ${TERRAFORM_CLOUD_ORGANIZATION}."
jq -n '{"data": { "attributes": { "name": env.TERRAFORM_CLOUD_WORKSPACE_NAME, "terraform_version": env.TERRAFORM_VERSION, "execution-mode": "remote" }, "type": "workspaces"}}' > payload.json

curl \
  --header "Authorization: Bearer $TERRAFORM_CLOUD_TOKEN" \
  --header "Content-Type: application/vnd.api+json" \
  --output /dev/null \
  --silent \
  --data @payload.json \
  https://app.terraform.io/api/v2/organizations/${TERRAFORM_CLOUD_ORGANIZATION}/workspaces
echo "Done creating: https://app.terraform.io/app/${TERRAFORM_CLOUD_ORGANIZATION}/workspaces/${TERRAFORM_CLOUD_WORKSPACE_NAME}"

# put some code in it
cp ${scriptdir}/main.ts .

# add null provider
cp ${scriptdir}/cdktf.json .
cdktf get

# diff
cdktf deploy --auto-approve > output
diff output ${scriptdir}/expected/output

echo "Destroying workspace ${TERRAFORM_CLOUD_WORKSPACE_NAME} in ${TERRAFORM_CLOUD_ORGANIZATION}."
curl \
  --header "Authorization: Bearer $TERRAFORM_CLOUD_TOKEN" \
  --header "Content-Type: application/vnd.api+json" \
  --request DELETE \
  --output /dev/null \
  --silent \
  https://app.terraform.io/api/v2/organizations/${TERRAFORM_CLOUD_ORGANIZATION}/workspaces/${TERRAFORM_CLOUD_WORKSPACE_NAME}
echo "Destroyed successfully."

echo "PASS"