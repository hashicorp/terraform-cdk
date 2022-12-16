using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using kubernetes.Provider;
using kubernetes.Namespace;
using kubernetes.Deployment;
using aws.Provider;
using aws.DynamodbTable;

namespace Examples
{
    class ReferencesStack : TerraformStack
    {
        public ReferencesStack(Construct scope, string name) : base(scope, name)
        {
            new KubernetesProvider(this, "kubernetes", new KubernetesProviderConfig {});
            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "us-east-1"
            });
           
           // DOCS_BLOCK_START:resources-references
            Namespace exampleNamespace = new Namespace(this, "tf-cdk-example", new NamespaceConfig {
                Metadata = new NamespaceMetadata {
                    Name = "tf-cdk-example"
                }
            });

            new Deployment(this, "nginx-deployment", new DeploymentConfig {
                Metadata = new DeploymentMetadata {
                    Name = "nginx",
                    Namespace = exampleNamespace.Metadata.Name, // Reference the namespace name propery
                    Labels = new Dictionary<string, string> {
                        { "app", "my-app" }
                    }
                },
                Spec = new DeploymentSpec {
                    Template = new DeploymentSpecTemplate {
                        Metadata = new DeploymentSpecTemplateMetadata {
                            Labels = new Dictionary<string, string> {
                                { "app", "my-app" }
                            }
                        },
                        Spec = new DeploymentSpecTemplateSpec {
                            Container = new DeploymentSpecTemplateSpecContainer[] {
                                new DeploymentSpecTemplateSpecContainer {
                                    Name = "nginx",
                                    Image = "nginx:1.7.9"
                                }
                            }
                        }
                    }
                }
            });
            // DOCS_BLOCK_END:resources-references
            // DOCS_BLOCK_START:resources-escape-hatch
            String tableName = "my-second-table";
            DynamodbTable table = new DynamodbTable(this, "second-table", new DynamodbTableConfig {
                Name = tableName,
                HashKey = "id",
                Attribute = new DynamodbTableAttribute[] {
                    new DynamodbTableAttribute {
                        Name = "id",
                        Type = "S"
                    }
                }
            });

            table.AddOverride("provisioner", new Dictionary<string, object>[] {
                new Dictionary<string, object> {
                    { "local-exec", new Dictionary<string, string> {
                        { "command", $"aws dynamodb create-backup --table-name {tableName} --backup-name {tableName}-backup" }
                    } }
                }
            });

            // DOCS_BLOCK_END:resources-escape-hatch
        }
    }
}
