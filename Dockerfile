# Use a previous version as there are problems with the latest Docker image, related to https://github.com/aws/jsii/issues/3903
FROM docker.mirror.hashicorp.services/jsii/superchain@sha256:80ee12fd2b143ff58d93c72c43985281bb6923370f8df93fcbb23834f0bfb5a7
# FROM docker.mirror.hashicorp.services/jsii/superchain:1-buster-slim-node14

USER root

ARG DEFAULT_TERRAFORM_VERSION
ARG AVAILABLE_TERRAFORM_VERSIONS


RUN apt-get update -y && apt-get install -y unzip jq build-essential time
RUN curl https://raw.githubusercontent.com/pypa/pipenv/master/get-pipenv.py | python3
RUN npm install -g @sentry/cli --unsafe-perm

ENV TF_PLUGIN_CACHE_DIR="/root/.terraform.d/plugin-cache"           \
    # MAVEN_OPTS is set in jsii/superchain with -Xmx512m. This isn't enough memory for provider generation.
    MAVEN_OPTS="-Xms256m -Xmx3G"

# Install Terraform
RUN for VERSION in ${AVAILABLE_TERRAFORM_VERSIONS}; do curl -LOk https://releases.hashicorp.com/terraform/${VERSION}/terraform_${VERSION}_linux_amd64.zip && \
    mkdir -p /usr/local/bin/tf/versions/${VERSION} && \
    unzip terraform_${VERSION}_linux_amd64.zip -d /usr/local/bin/tf/versions/${VERSION} && \
    ln -s /usr/local/bin/tf/versions/${VERSION}/terraform /usr/local/bin/terraform${VERSION};rm terraform_${VERSION}_linux_amd64.zip;done && \
    ln -s /usr/local/bin/tf/versions/${DEFAULT_TERRAFORM_VERSION}/terraform /usr/local/bin/terraform
