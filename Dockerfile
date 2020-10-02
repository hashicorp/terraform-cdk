FROM jsii/superchain

RUN yum install -y unzip jq && curl https://raw.githubusercontent.com/pypa/pipenv/master/get-pipenv.py | python

ENV DEFAULT_TERRAFORM_VERSION=0.13.4
ENV TF_PLUGIN_CACHE_DIR="/root/.terraform.d/plugin-cache"

# Install Terraform
RUN AVAILABLE_TERRAFORM_VERSIONS="0.12.29 0.13.4 ${DEFAULT_TERRAFORM_VERSION}" && \
    for VERSION in ${AVAILABLE_TERRAFORM_VERSIONS}; do curl -LOk https://releases.hashicorp.com/terraform/${VERSION}/terraform_${VERSION}_linux_amd64.zip && \
    mkdir -p /usr/local/bin/tf/versions/${VERSION} && \
    unzip terraform_${VERSION}_linux_amd64.zip -d /usr/local/bin/tf/versions/${VERSION} && \
    ln -s /usr/local/bin/tf/versions/${VERSION}/terraform /usr/local/bin/terraform${VERSION};rm terraform_${VERSION}_linux_amd64.zip;done && \
    ln -s /usr/local/bin/tf/versions/${DEFAULT_TERRAFORM_VERSION}/terraform /usr/local/bin/terraform
