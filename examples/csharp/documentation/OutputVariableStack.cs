// DOCS_BLOCK_START:var-out-output-values
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
    class OutputVariableStackConfig {
        public OutputVariableStackConfig (string myDomain) {
            this.MyDomain = myDomain;
        }

        public string MyDomain { get; set; }
    }

    class OutputVariableStack : TerraformStack
    {
        public OutputVariableStack(Construct scope, string name, OutputVariableStackConfig config) : base(scope, name)
        {
            new TerraformOutput(this, "my-domain", new TerraformOutputConfig {
                Value = config.MyDomain,
            });
        }


// DOCS_BLOCK_END:var-out-output-values
/*
// DOCS_BLOCK_START:var-out-output-values
        public static void Main(string[] args)
        {
            App app = new App();
            new OutputVariableStack(app, "cdktf-producer", new OutputVariableStackConfig("example.com"));
            app.Synth();
        }
// DOCS_BLOCK_END:var-out-output-values
*/
// DOCS_BLOCK_START:var-out-output-values
    }
    
}


// DOCS_BLOCK_END:var-out-output-values
