
#------------------------ASSETS_PAGE------------------------#

# DOCS_BLOCK_START:assets
from constructs import Construct
import cdktf
import imports.aws as aws
import os

class MyStack(cdktf.TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        aws.AwsProvider(self, 'aws', region='eu-central-1')

        bucket = aws.s3.S3Bucket(self, "bucket", bucket="demo")

        asset = cdktf.TerraformAsset(self, "lambda-asset",
                                     path=os.path.join(os.path.dirname(
                                         __file__), 'lambda'),
                                     type=cdktf.AssetType.ARCHIVE
                                     )

        aws.s3.S3BucketObject(self, "lambda-archive",
                              bucket=bucket.bucket,
                              key=asset.file_name,
                              source=asset.path
                              )


app = cdktf.App()
MyStack(app, "demo")

app.synth()
# DOCS_BLOCK_END:assets

#------------------------ASSETS_PAGE------------------------#


#------------------------CONSTRUCTS_PAGE------------------------#

from imports.aws.s3 import S3Bucket, S3BucketWebsite

# DOCS_BLOCK_START:constructs-use-constructs
import os
import imports.kubernetes as kubernetes
from my_constructs import KubernetesWebAppDeployment

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        kubernetes.KubernetesProvider(self, "kind",
                                      config_path=os.path.join(os.path.dirname(
                                          __file__), '..', 'kubeconfig.yaml')
                                      )

        KubernetesWebAppDeployment(self, "deployment",
                                   image="nginx:latest",
                                   replicas=2,
                                   app="myapp",
                                   component="frontend",
                                   environment="dev"
                                   )


app = cdktf.App()
MyStack(app, "demo")
app.synth()
# DOCS_BLOCK_END:constructs-use-constructs

# DOCS_BLOCK_START:constructs-scope

from constructs import Construct
from cdktf import App, TerraformStack

class PublicS3Bucket(Construct):

    bucket: S3Bucket
    
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name) # This creates a new scope since we extend from construct

        AwsProvider(self, "aws",
            region = "us-east-1"
        )

        # This bucket is in a different scope than the buckets
        # defined in `MyStack`. Therefore, it does not need a unique name.
        self.bucket = S3Bucket(self, "bucket",
            bucket_prefix = name,
            website = S3BucketWebsite(
                index_document = "index.html",
                error_document = "5xx.html",
            )
        )


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        # Both buckets are inside of the same stack, meaning they share
        # the same scope. Therefore, their names must be unique.
        PublicS3Bucket(self, "first-bucket")
        PublicS3Bucket(self, "second-bucket")
# DOCS_BLOCK_END:constructs-scope

#------------------------CONSTRUCTS_PAGE------------------------#


#------------------------DATA_SOURCES_PAGE------------------------#

# DOCS_BLOCK_START:data-sources-define-data-sources
from imports.aws.datasources import DataAwsRegion
from imports.aws import AwsProvider

class HelloTerraform(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "temp",
            region = "us-east-1"
        )

        #.....
        region = DataAwsRegion(self, "region")

# DOCS_BLOCK_END:data-sources-define-data-sources

from cdktf import DataTerraformRemoteState
from imports.aws import ec2

# DOCS_BLOCK_START:data-sources-remote-state-data-source
from cdktf import DataTerraformRemoteState
from imports.aws import ec2

class HelloTerraform(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        #.....
        remoteState = DataTerraformRemoteState(self, 
            organization = "hashicorp",
            workspace = 'vpc-prod'
        )

        ec2.Instance(self, "foo",
            #.....
            subnet_id = remoteState.get('subnet_id')
        )
# DOCS_BLOCK_END:data-sources-remote-state-data-source

#------------------------DATA_SOURCES_PAGE------------------------#


#------------------------FUNCTIONS_PAGE------------------------#

class TestStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        # DOCS_BLOCK_START:functions-usage-example
        from cdktf import Fn, TerraformOutput
        from imports.aws.datasources import DataAwsAvailabilityZones

        zones = DataAwsAvailabilityZones(self, 'zones',
            state = "available",
        )

        TerraformOutput(self, 'first-zone',
            value = Fn.element(zones.names, 0)
        )
        # DOCS_BLOCK_END:functions-usage-example

#------------------------FUNCTIONS_PAGE------------------------#


#------------------------HCL_INTEROPERABILITY_PAGE------------------------#

# DOCS_BLOCK_START:hcl-interop
from constructs import Construct
from cdktf import App, TerraformOutput, TerraformStack, TerraformVariable
from imports.random import Pet, RandomProvider

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        RandomProvider(self, "default")
        petNameLength = TerraformVariable(self, "petNameLength",
            type = "number",
            default = 2,
            description = "Pet name length"
        )

        myPet = Pet(self, "example",
            length = petNameLength.number_value
        )

        TerraformOutput(self, "name",
            value = myPet.id
        )

app = App()
MyStack(app, "random-pet-module")
app.synth
# DOCS_BLOCK_END:hcl-interop

#------------------------HCL_INTEROPERABILITY_PAGE------------------------#


#------------------------ITERATORS_PAGE------------------------#

# DOCS_BLOCK_START:iterators-define-iterators,iterators-iterators-complex-types
from imports.aws import s3
from cdktf import TerraformIterator, TerraformVariable
# DOCS_BLOCK_END:iterators-define-iterators,iterators-iterators-complex-types     

class TestStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        # DOCS_BLOCK_START:iterators-iterators-complex-types
        iterator = TerraformIterator.from_list(
            list = [
                {
                    "name": "website-static-files",
                    "tags": {"app": "website"}
                },
                {
                    "name": "images",
                    "tags": {"app": "image-converter"}
                }
            ]
        )

        s3Bucket = s3.S3Bucket(self, "bucket",
            for_each = iterator,
            name = iterator.getString("name"),
            tags = iterator.getString("tags")
        )
        # DOCS_BLOCK_END:iterators-iterators-complex-types

        # DOCS_BLOCK_START:iterators-define-iterators
        list = TerraformVariable(self, "list", 
            type = "list(string)"
        )

        iterator = TerraformIterator.from_list(list.list_value)

        s3Bucket = s3.S3Bucket(self, "bucket",
            for_each = iterator,
            name = iterator.value
        )
        # DOCS_BLOCK_END:iterators-define-iterators

#------------------------ITERATORS_PAGE------------------------#


#------------------------MODULES_PAGE------------------------#

from cdktf import TerraformHclModule

# DOCS_BLOCK_START:modules-install-modules
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import AwsProvider
from imports.vpc import Vpc

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
            region = "us-east-1",
        )

        Vpc(self, "MyVpc",
            name = "my-vpc",
            cidr = "10.0.0.0/16",
            azs = ['us-west-2a', 'us-west-2b', 'us-west-2c'],
            private_subnets = ['10.0.1.0/24', '10.0.2.0/24', '10.0.3.0/24'],
            public_subnets = ['10.0.101.0/24', '10.0.102.0/24', '10.0.103.0/24'],
            enable_nat_gateway = True
        )

app = App()
MyStack(app, "hello-terraform")
app.synth
# DOCS_BLOCK_END:modules-install-modules


stack = TerraformStack(App(), "temp")
# DOCS_BLOCK_START:modules-create-modules
provider = AwsProvider(stack, "provider",
    region = "us-east-1",
)

module = TerraformHclModule(stack, "Vpc",
    source = "terraform-aws-modules/vpc/aws",
    # variables takes any input - please consult the docs of the module
    # to ensure the arguments are correct
    variables = {
        "name": "my-vpc",
        "cidr": "10.0.0.0/16",
        "azs": ["us-west-2a", "us-west-2b", "us-west-2c"],
        "privateSubnets": ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"],
        "publicSubnets": ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"],
        "enableNatGateway": True,
    },
    providers = [provider]
)
# DOCS_BLOCK_END:modules-create-modules

# DOCS_BLOCK_START:modules-examples
from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput
# This module can come from a registry or through a local / remote reference
from imports.my_local_module import MyLocalModule


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        localModule = MyLocalModule(self, "local-module", ip_address='127.0.0.1')
        TerraformOutput(self, "dns-server", value=localModule.dns_server_output)
# DOCS_BLOCK_END:modules-examples

#------------------------MODULES_PAGE------------------------#


#------------------------PROVIDERS_PAGE------------------------#

# DOCS_BLOCK_START:providers-import-providers
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import AwsProvider, ec2

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
            region = "us-east-1",
        )

        ec2.Instance(self, "hello",
            ami = "ami-2757f631",
            instance_type = "t2.micro",
        )

app = App()
MyStack(app, "hello-terraform")
app.synth
# DOCS_BLOCK_END:providers-import-providers

# DOCS_BLOCK_START:providers-import-classes
import os
from constructs import Construct
from cdktf import App, TerraformStack, Token
from imports.aws import AwsProvider, ec2
from imports.dnsimple import DnsimpleProvider, Record

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
            region = "us-east-1",
        )

        instance = ec2.Instance(self, "Hello",
            ami = "ami-2757f631",
            instance_type = "t2.micro",
        )

        DnsimpleProvider(self, "dnsimple",
            token = Token.as_string(os.getenv("DNSIMPLE_TOKEN")),
            account = Token.as_string(os.getenv("DNSIMPLE_ACCOUNT")),
        )

        Record(self, "web-www",
            domain = "example.com",
            name = "web",
            value = instance.public_ip,
            type = "A"
        )

app = App()
MyStack(app, "hello-terraform")
app.synth
# DOCS_BLOCK_END:providers-import-classes

#------------------------PROVIDERS_PAGE------------------------#


#------------------------REMOTE_BACKEND_PAGE------------------------#

from cdktf import CloudBackend, NamedCloudWorkspace

# DOCS_BLOCK_START:remote-backend-migrate
stack = MyStack(app, "hi-terraform")
CloudBackend(stack,
    hostname = "app.terraform.io",
    organization = "company",
    workspaces = NamedCloudWorkspace("my-app-prod")
)
# DOCS_BLOCK_END:remote-backend-migrate

# DOCS_BLOCK_START:remote-backend-define
from constructs import Construct
from cdktf import App, CloudBackend, NamedCloudWorkspace,TerraformStack, TerraformOutput

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        CloudBackend(self,
            hostname = "app.terraform.io",
            organization = "company",
            workspaces = NamedCloudWorkspace("my-app-prod")
        )

        TerraformOutput(self, "dns-server",
            value = "hello-world"
        )

app = App()
MyStack(app, "hello-terraform")
app.synth
# DOCS_BLOCK_END:remote-backend-define

# DOCS_BLOCK_START:remote-backend-escape-hatches
stack.add_override("terraform.backend",{
    "atlas": {
        "name": "example_corp/networking-prod",
        "address": "https://app.terraform.io"
    }
})
# DOCS_BLOCK_END:remote-backend-escape-hatches

#------------------------REMOTE_BACKEND_PAGE------------------------#


#------------------------RESOURCES_PAGE------------------------#

# DOCS_BLOCK_START:resources-define
from constructs import Construct
from cdktf import TerraformStack
from imports.aws import dynamodb

class HelloTera(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
            region = "us-east-1" 
        )

        region = DataAwsRegion(self, "region")

        dynamodb.DynamodbTable(self, "Hello",
            name = "my-first-table-{}".format(region.name),
            hash_key = "temp",
            attribute = [{ "name": "id", "type": "S"}],
            billing_mode = "PAY_PER_REQUEST", 
        )
# DOCS_BLOCK_END:resources-define

# DOCS_BLOCK_START:resources-references
from imports.kubernetes import Deployment, DeploymentMetadata, Namespace, NamespaceMetadata
# DOCS_BLOCK_END:resources-references

class TestStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        # DOCS_BLOCK_START:resources-references
        exampleNamespace = Namespace(self, "tf-cdk-example",
            metadata = NamespaceMetadata({
                "name": "tf-cdk-example"
            })
        )

        Deployment(self, "nginx-deployment",
            metadata = DeploymentMetadata({
                "name": "nginx",
                "namespace": exampleNamespace.metadata.name,
                "labels": {
                    app,
                }
            })
        )
        # DOCS_BLOCK_END:resources-references


class TestStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
# DOCS_BLOCK_START:resources-escape-hatch
from imports.aws import dynamodb
# DOCS_BLOCK_END:resources-escape-hatch

class TestStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        # DOCS_BLOCK_START:resources-escape-hatch
        tableName = "my-table"

        table = dynamodb.DynamodbTable(self, "Hello",
            name = tableName,
            hash_key = "id",
            attribute = [{"name": "id", "type": "S"}]
        )

        table.add_override("provisioner", [
            {
                "local-exec": {
                    "command": "aws dynamodb create-backup --table-name {} --backup-name {}-backup".format(tableName)
                }
            }
        ])
        # DOCS_BLOCK_END:resources-escape-hatch

#DOCS_BLOCK_START:resources-override-attribute
from imports.aws import sns
#DOCS_BLOCK_END:resources-override-attribute


class TestStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        #DOCS_BLOCK_START:resources-override-attribute

        topic = sns.SnsTopic(self, "Topic",
            display_name = "will-be-overwritten"
        )

        topic.add_override("display_name", "my-topic")
        #DOCS_BLOCK_END:resources-override-attribute

#DOCS_BLOCK_START:resources-escape-hatch-dynamic-block
from cdktf import TerraformVariable
from imports.aws.vpc import SecurityGroup
#DOCS_BLOCK_END:resources-escape-hatch-dynamic-block

class TestStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        #DOCS_BLOCK_START:resources-escape-hatch-dynamic-block
        ports = TerraformVariable(self, "ports",
            type = "list",
            default = [22, 80, 443, 5432] 
        )

        sq = SecurityGroup(self, "sec1grp",
            name = "security1",
            vpc_id = "vpcs",
            egress = [
                {
                    "fromPort": 0,
                    "toPort": 0,
                    "ciderBlocks": ["0.0.0.0/0"],
                    "protocal": "-1"
                }
            ] 
        )

        sq.add_override("dynamic.ingress", {
            "for_each": ports.list_value,
            "content": {
                "fromPort": "${ingress.value}",
                "toPort": "${ingress.value}",
                "ciderBlocks": ["0.0.0.0/0"],
                "protocal": "-1"
            }
        })
        #DOCS_BLOCK_END:resources-escape-hatch-dynamic-block

#DOCS_BLOCK_START:resources-escape-loop-thru-ports
from imports.aws.vpc import SecurityGroup
#DOCS_BLOCK_END:resources-escape-loop-thru-ports

class TestStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        #DOCS_BLOCK_START:resources-escape-loop-thru-ports
        ports = [22, 80, 443, 5432]

        SecurityGroup(self, "sec1grp",
            name = "security1",
            vpc_id = "vpcs",
            egress = [
                {
                    "fromPort": 0,
                    "toPort": 0,
                    "ciderBlocks": ["0.0.0.0/0"],
                    "protocal": "-1"
                }
            ],
            ingress = map(lambda port_list, port: port_list.append(
                {
                    "fromPort": port,
                    "toPort": port,
                    "cidrBlocks": ["0.0.0.0/0"],
                    "protocol": "-1",
                }
            ), [], ports)
        )
        #DOCS_BLOCK_END:resources-escape-loop-thru-ports

#------------------------RESOURCES_PAGE------------------------#


#------------------------STACKS_PAGE------------------------#

#DOCS_BLOCK_START:single-stack
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import AwsProvider, ec2

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
            region = "us-east-1"
        )

        ec2.Instance(self, "Hello",
            ami = "ami-2757f631",
            instance_type = "t2.micro"
        )

app = App()
MyStack(app, "a-single-stack")
app.synth
#DOCS_BLOCK_END:single-stack

#DOCS_BLOCK_START:multiple-stacks
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import AwsProvider, ec2

class MyStackConfig:
    environment: str
    region: str = None
    def __init__(self, environment: str, region: str = None):
        self.environment = environment
        self.region = region


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, id: str, config: MyStackConfig):
        super().__init__(scope, id)

        region = "us-east-1" if config.region == None else config.region

        AwsProvider(self, "aws",
            region = region
        )

        ec2.Instance(self, "Hello",
            ami = "ami-2757f631",
            instance_type = "t2.micro",
            tags = {
                "environment": config.environment,
            }
        )

app = App()
MyStack(app, "multiple-stacks-dev", MyStackConfig(environment = "dev"))
MyStack(app, "multiple-stacks-staging", MyStackConfig(environment = "staging"))
MyStack(app, "multiple-stacks-production-us", MyStackConfig(environment = "staging", region = "eu-central-1"))

app.synth
#DOCS_BLOCK_END:multiple-stacks

#DOCS_BLOCK_START:cross-stack-reference
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import AwsProvider
from imports.vpc import Vpc
from my_constructs import DockerBackend

class VPCStack(TerraformStack):
    vpc: Vpc
    region = "us-east-1"
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
            region = self.region
        )

        self.vpc = Vpc(self, "vpc")

class BackendStackConfig:
    region: str
    vpc_id: str
    docker_image: str
    def __init__(self, region: str, vpc_id: str, docker_image: str):
        self.region = region
        self.vpc_id = vpc_id
        self.docker_image = docker_image

class BackendStack(TerraformStack):
    def __init__(self, scope: Construct, id: str, config: BackendStackConfig):
        super().__init__(scope, id)

        AwsProvider(self, "aws", 
            region = config.region
        )

        DockerBackend(self, "docker-backend",
            vpc_id = config.vpc_id,
            docker_image = config.docker_image 
        )

app = App()
origin = VPCStack(app, "origin-stack")
BackendStack(app, "target-stack",
    BackendStackConfig(
        region = origin.region,
        vpc_id = origin.vpc.vpc_id_output,
        docker_image = "org/my-image:latest"
    )
)

app.synth()
#DOCS_BLOCK_END:cross-stack-reference

if False:
    #DOCS_BLOCK_START:stack-dependencies
    self.allResources =  TerraformLocal(self, "merge_items", Fn.merge_lists(resourceFromStackA.items, resourceFromStackB.items))
    #DOCS_BLOCK_END:stack-dependencies

#DOCS_BLOCK_START:stack-escape-hatches
stack.add_override("terraform.backend",{
    "remote": {
        "organization": "test",
        "workspaces": {
            "name": "test"
        }
    }
})
#DOCS_BLOCK_END:stack-escape-hatches

#------------------------STACKS_PAGE------------------------#


#------------------------TOKENS_PAGE------------------------#

from imports.eks import Eks
class TestStack(TerraformStack):
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
            cluster_name = "my-kubernetes-cluster",
            subnets = Token.as_list(vpc.public_subnets_output),
            cluster_create_timeout = log_retention.number_value 
        )
        #DOCS_BLOCK_END:tokens

#------------------------TOKENS_PAGE------------------------#


#------------------------VARIABLE_AND_OUTPUTS_PAGE------------------------#

from cdktf import TerraformLocal

class TestStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        #DOCS_BLOCK_START:var-out-define-local
        commonTags = TerraformLocal(self, "common_tags", {
            "service": "service_name",
            "owner": "owner"
        })

        ec2.Instance(self, "example",
            tags = commonTags.expression
        )
        #DOCS_BLOCK_END:var-out-define-local
        #DOCS_BLOCK_START:var-out-input-variables
        imageId = TerraformVariable(self, "imageId",
            type = "string",
            default = "ami-abcde123",
            description = "What AMI to use to create an instance"
        )
        ec2.Instance(self, "hello",
            ami = imageId.string_value,
            instance_type = "t2.micro"
        )
        #DOCS_BLOCK_END:var-out-input-variables

#DOCS_BLOCK_START:var-out-output-values
from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput

class MyStackProps:
    myDomain: str
    def __init__(self, myDomain: str):
        self.myDomain = myDomain

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, name: str, props: MyStackProps):
        super().__init__(scope, name)

        TerraformOutput(self, "my-domain",
            value = props.myDomain
        )

app = App()
MyStack(app, "cdktf-producer", MyStackProps(myDomain = "example.com"))
app.synth()
#DOCS_BLOCK_END:var-out-output-values

#DOCS_BLOCK_START:var-out-define-output-values
import imports.random as random

from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        random.RandomProvider(self, "random")
        pet = random.Pet(self, "pet")

        TerraformOutput(self, "random-pet", 
            value = pet.id
        )

app = App()
MyStack(app, "cdktf-demo")
app.synth()
#DOCS_BLOCK_END:var-out-define-output-values


#DOCS_BLOCK_START:var-out-define-reference-remote-state
import imports.random as random

from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput, CloudBackend, NamedRemoteWorkspace, DataTerraformRemoteState

class Producer(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        CloudBackend(self,
            organization = "hashicorp",
            workspaces = NamedCloudWorkspace("producer")
        )

        random.RandomProvider(self, "random")
        pet = random.Pet(self, "pet")

        TerraformOutput(self, "random-pet",
            value = pet.id
        )

class Consumer(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        CloudBackend(self, 
            organization = "hashicorp",
            workspaces = NamedCloudWorkspace("consumer")
        )

        remoteState = DataTerraformRemoteState(self, "remote-pet",
            organization = "hashicorp",
            workspaces = NamedRemoteWorkspace(name = "producer")
        )

        TerraformOutput(self, "random-remote-pet",
            value = remoteState.get_string("random-pet")
        )

app = App()
Producer(app, "cdktf-producer")
Consumer(app, "cdktf-consumer")
app.synth()
#DOCS_BLOCK_END:var-out-define-reference-remote-state

#------------------------VARIABLE_AND_OUTPUTS_PAGE------------------------#