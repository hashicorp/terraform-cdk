#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack
from imports.kubernetes import Namespace, Service, Deployment, KubernetesProvider


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        KubernetesProvider(self, 'kind', config_path="~/.kube/config")
        example_namespace = Namespace(self, "tf-cdk-example",
                                      metadata=[{
                                          'name': 'tf-cdk-example'
                                      }])
        app_name = "nginx-example"
        Deployment(self, 'nginx-deployment',
                   metadata=[{
                       'name': app_name,
                       'namespace': example_namespace.metadata_input[0].name,
                       'labels': {
                           'app': app_name
                       }
                   }],
                   spec=[{
                       'replicas': 2,
                       'selector': [{
                           'matchLabels': {
                               'app': app_name
                           }
                       }],
                       'template': [{
                           'metadata': [{
                               'labels': {
                                   'app': app_name
                               }
                           }],
                           'spec': [{
                               'container': [{
                                   'image': 'nginx:1.7.9',
                                   'name': 'example',
                                   'ports': [{
                                       'containerPort': 80
                                   }]
                               }]
                           }]
                       }]
                   }])
        Service(self, "tf-cdk-service",
                metadata=[{
                    'name': 'tf-cdk-service'
                }],
                spec=[{
                    'selector': {
                        'app': app_name
                    },
                    'port': [{
                        'nodePort': 30201,
                        'port': 80,
                        'target_port': 80
                    }],
                    'type': 'NodePort'
                }])


app = App()
MyStack(app, "python-kubernetes")

app.synth()
