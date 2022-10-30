from cdktf import TerraformStack, TerraformVariable, Token
from constructs import Construct
from imports.vpc import Vpc
from imports.eks import Eks

class TokenStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        #DOCS_BLOCK_START:tokens
        log_retention = TerraformVariable(self, "logRetentionInDays",
            type = "number"
        )

        vpc = Vpc(self, "vpcName",
            name = "vpcName",
            public_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
        )

        Eks(self, "EksModules",
            vpc_id = vpc.vpc_id_output,
            cluster_name = "my-kubernetes-cluster",
            subnets = Token.as_list(vpc.public_subnets_output),
            cluster_create_timeout = log_retention.number_value 
        )
        #DOCS_BLOCK_END:tokens