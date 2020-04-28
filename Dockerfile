FROM jsii/superchain

COPY tools/install-terraform.sh /tmp/

RUN yum install -y jq && /tmp/install-terraform.sh

RUN rm -f /tmp/install-terraform.sh && yum remove -y jq