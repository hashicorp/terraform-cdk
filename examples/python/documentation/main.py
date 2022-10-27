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

app = App()
MyAssetStack(app, "assets")
MyS3BucketStack(app, "constructs-s3")
MyKubernetesStack(app, "constructs-k8s")
HelloTerraform(app, "data-sources")
HelloTerraformRemoteState(app, "data-sources-terraform-remotes-state")
FunctionsStack(app, "functions")
HclInteropStack(app, "hcl-interop")
# TODO: Fix these
IteratorStackOne(app, "iterator-1")
# IteratorStackTwo(app, "iterator-2")
ModuleStack(app, "module")
HclModuleStack(app, "hcl-module")
ModuleWithOutputStack(app, "module-with-output")
SimpleProviderStack(app, "simple-provider")
ProviderStack(app, "provider")
RemoteBackendStack(app, "remote-backend")
ResourceStack(app, "resource")
ReferencesStack(app, "references")
# TODO: Fix this one
EscapeHatch(app, "escape-hatch")
ResourceOverrideStack(app, "resource-override")
EscapeHatchDynamicStack(app, "escape-hatch-dynamic")
EscapeThroughLoopsStack(app, "escape-through-loops")
app.synth()
