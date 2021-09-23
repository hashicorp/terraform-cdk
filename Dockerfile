FROM docker.mirror.hashicorp.services/jsii/superchain:node14

RUN yum install -y unzip jq gcc gcc-c++ && curl https://raw.githubusercontent.com/pypa/pipenv/master/get-pipenv.py | python3

ENV TF_PLUGIN_CACHE_DIR="/root/.terraform.d/plugin-cache"           \
    # MAVEN_OPTS is set in jsii/superchain with -Xmx512m. This isn't enough memory for provider generation.
    MAVEN_OPTS="-Xms256m -Xmx3G"

ADD .terraform.versions.json /

# Install Terraform
RUN DEFAULT_TERRAFORM_VERSION=$(cat .terraform.versions.json | jq -r '.default') && \
    AVAILABLE_TERRAFORM_VERSIONS=$(cat .terraform.versions.json | jq -r '.available | join(" ")') && \
    for VERSION in ${AVAILABLE_TERRAFORM_VERSIONS}; do curl -LOk https://releases.hashicorp.com/terraform/${VERSION}/terraform_${VERSION}_linux_amd64.zip && \
    mkdir -p /usr/local/bin/tf/versions/${VERSION} && \
    unzip terraform_${VERSION}_linux_amd64.zip -d /usr/local/bin/tf/versions/${VERSION} && \
    ln -s /usr/local/bin/tf/versions/${VERSION}/terraform /usr/local/bin/terraform${VERSION};rm terraform_${VERSION}_linux_amd64.zip;done && \
    ln -s /usr/local/bin/tf/versions/${DEFAULT_TERRAFORM_VERSION}/terraform /usr/local/bin/terraform
