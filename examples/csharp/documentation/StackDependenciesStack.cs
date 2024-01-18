// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using aws.Provider;
using aws.Instance;

namespace Examples
{
    class SourceStack : TerraformStack
    {
        public SourceStack(Construct scope, string name) : base(scope, name)
        {

            new AwsProvider(this, "aws", new AwsProviderConfig
            {
                Region = "us-east-1"
            });

            var Instance = new Instance(this, "instance", new InstanceConfig
            {
                Ami = "ami-2757f631",
                InstanceType = "t2.micro",
            });


            var Instance2 = new Instance(this, "instance2", new InstanceConfig
            {
                Ami = "ami-2757f631",
                InstanceType = "t2.micro",
            });

            this.Instances = new List<Instance> { Instance, Instance2 };
        }

        public List<Instance> Instances { get; }
    }


    class StackDependenciesStack : TerraformStack
    {
        public StackDependenciesStack(Construct scope, string name, SourceStack stackA, SourceStack stackB) : base(scope, name)
        {

            new AwsProvider(this, "aws", new AwsProviderConfig
            {
                Region = "us-east-1",
            });

            var resourcesFromStackA = stackA.Instances.ToArray();
            var resourcesFromStackB = stackB.Instances.ToArray();

            // DOCS_BLOCK_START:stack-dependencies
            this.allResources = new TerraformLocal(this, "merge_items", 
                    Fn.Concat(new object[]{resourcesFromStackA, resourcesFromStackB}));
            // DOCS_BLOCK_END:stack-dependencies
        }

        public TerraformLocal allResources { get; }

        /*
        public static void Main(string[] args)
        {
            App app = new App();

            SourceStack sourceStackA = new SourceStack(app, "source-stack");
            SourceStack sourceStackB = new SourceStack(app, "source-stack");

            StackDependenciesStack stack = new StackDependenciesStack(app, "stack-dependencies", sourceStackA, sourceStackB);
            
            app.Synth();
            Console.WriteLine("App synth complete");
        }
        */
    }
}


