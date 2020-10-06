#!/bin/bash
set -eu # we don't want "pipefail" to implement idempotency

workdir=$(mktemp -d)

pom="$(find . -type f -name *.pom | head -1)"
cd "$(dirname ${pom})" 

release_output="${workdir}/release-output.txt"
mvn deploy -f ${pom} -DaltDeploymentRepository=github::default::https://maven.pkg.github.com/hashicorp/terraform-cdk | tee ${release_output}

# If release failed, check if this was caused because we are trying to publish
# the same version again, which is not an error. The magic string "409 Conflict"
# indicates that we are trying to
# override an existing version. Otherwise, fail!
if [ ${PIPESTATUS[0]} -ne 0 ]; then
    if cat ${release_output} | grep -q "409 Conflict"; then
        echo "⚠️ Artifact already published. Skipping"
    else
        echo "❌ Release failed"
        exit 1
    fi
fi