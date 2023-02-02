from cdktf import App
from assets import MyAssetStack
from custom_constructs import MyS3BucketStack, MyKubernetesStack
from data_sources import HelloTerraform, HelloTerraformRemoteState
from functions import FunctionsStack
from hcl_interop import HclInteropStack
from iterators import IteratorStackOne, IteratorStackTwo
from modules import ModuleStack, HclModuleStack, ModuleWithOutputStack
from providers import SimpleProviderStack, ProviderStack
from remote_backend import RemoteBackendStack
from resources import ResourceStack, ReferencesStack, EscapeHatch, ResourceOverrideStack, EscapeHatchDynamicStack, EscapeThroughLoopsStack
from stacks import MySingleStack, MyMultipleStacks, MyMultipleStacksConfig, VPCStack, BackendStack, BackendStackConfig
from tokens import TokenStack
from variables_outputs import VariablesOutputsDefineLocalStack, OutputValuesStack, OutputValuesProps, DefineOutputStack, Producer, Consumer
from aspects import MainAspects
from unit_tests import MyApplicationsAbstraction

app = App()

MyAssetStack(app, "assets")
MyS3BucketStack(app, "constructs-s3")
MyKubernetesStack(app, "constructs-k8s")
HelloTerraform(app, "data-sources")
HelloTerraformRemoteState(app, "data-sources-terraform-remotes-state")
FunctionsStack(app, "functions")
HclInteropStack(app, "hcl-interop")
IteratorStackOne(app, "iterator-1")
IteratorStackTwo(app, "iterator-2")
ModuleStack(app, "module")
HclModuleStack(app, "hcl-module")
ModuleWithOutputStack(app, "module-with-output")
SimpleProviderStack(app, "simple-provider")
ProviderStack(app, "provider")
RemoteBackendStack(app, "remote-backend")
ResourceStack(app, "resource")
ReferencesStack(app, "references")
EscapeHatch(app, "escape-hatch")
ResourceOverrideStack(app, "resource-override")
EscapeHatchDynamicStack(app, "escape-hatch-dynamic")
EscapeThroughLoopsStack(app, "escape-through-loops")
MySingleStack(app, "a-single-stack")
MyMultipleStacks(app, "multiple-stacks-dev", MyMultipleStacksConfig(environment = "dev"))
MyMultipleStacks(app, "multiple-stacks-staging", MyMultipleStacksConfig(environment = "staging"))
MyMultipleStacks(app, "multiple-stacks-production-us", MyMultipleStacksConfig(environment = "staging", region = "eu-central-1"))
origin = VPCStack(app, "origin-stack")
BackendStack(app, "target-stack",
    BackendStackConfig(
        region = origin.region,
        vpc_id = origin.vpc.vpc_id_output,
        docker_image = "org/my-image:latest"
    )
)
VariablesOutputsDefineLocalStack(app, "var-out-define-local")
OutputValuesStack(app, "output-values-stack", OutputValuesProps(myDomain = "example.com"))
DefineOutputStack(app, "define-output")
Producer(app, "cdktf-producer")
Consumer(app, "cdktf-consumer")
TokenStack(app, "tokens")
MainAspects(app, "aspects")

app.synth()
