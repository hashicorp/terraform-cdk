FROM jsii/superchain

COPY tools/install-terraform.sh /tmp/

RUN yum install -y jq && curl https://raw.githubusercontent.com/pypa/pipenv/master/get-pipenv.py | python

# Setup Terraform via tfenv
RUN git clone https://github.com/tfutils/tfenv.git ~/.tfenv
ENV PATH "/root/.tfenv/bin:$PATH"
RUN tfenv install latest && \
    tfenv install 0.13.0-rc1 && \
    tfenv use latest:^0.12.29

RUN yum remove -y jq