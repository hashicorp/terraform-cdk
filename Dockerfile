FROM jsii/superchain

COPY tools/install-terraform.sh /tmp/

RUN yum install -y jq && /tmp/install-terraform.sh && curl https://raw.githubusercontent.com/pypa/pipenv/master/get-pipenv.py | python

RUN rm -f /tmp/install-terraform.sh && yum remove -y jq