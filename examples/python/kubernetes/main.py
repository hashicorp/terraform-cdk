from constructs import Construct
from cdktf import App, TerraformStack
from imports.kubernetes.provider import KubernetesProvider
from imports.kubernetes.namespace import Namespace
from imports.kubernetes.deployment import Deployment
from imports.kubernetes.service import Service


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        KubernetesProvider(self, 'kind', config_path="~/.kube/config")
        example_namespace = Namespace(self, "tf-cdk-example",
                                      metadata={
                                          'name': 'tf-cdk-example'
                                      })
        app_name = "nginx-example"
        Deployment(self, 'nginx-deployment',
                   metadata={
                       'name': app_name,
                       'namespace': example_namespace.metadata.name,
                       'labels': {
                           'app': app_name
                       }
                   },
                   spec={
                       'replicas': 2,
                       'selector': {
                           'match_labels': {
                               'app': app_name
                           }
                       },
                       'template': {
                           'metadata': {
                               'labels': {
                                   'app': app_name
                               }
                           },
                           'spec': {
                               'container': [{
                                   'image': 'nginx:1.7.9',
                                   'name': 'example',
                                   'ports': [{
                                       'containerPort': 80
                                   }]
                               }]
                           }
                       }
                   })
        Service(self, "tf-cdk-service",
                metadata={
                    'name': 'tf-cdk-service',
                    'namespace': example_namespace.metadata.name,
                },
                spec={
                    'selector': {
                        'app': app_name
                    },
                    'port': [{
                        'nodePort': 30201,
                        'port': 80,
                        'target_port': 80
                    }],
                    'type': 'NodePort'
                })


app = App()
MyStack(app, "python-kubernetes")

app.synth()
