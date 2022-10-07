package com.mycompany.app.variablesAndOutputs;

// DOCS_BLOCK_START:var-out-output-values
import software.constructs.Construct;
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformOutput;
import com.hashicorp.cdktf.TerraformOutputConfig;

public class VariablesAndOutputsValues extends TerraformStack {

    public VariablesAndOutputsValues(Construct scope, String id, VariablesAndOutputsValuesProps props){
        super(scope, id);

        new TerraformOutput(this, "my-domain", TerraformOutputConfig.builder()
                .value(props.myDomain)
                .build()
        );
    }

    public static class VariablesAndOutputsValuesProps {
        public String myDomain;
        public VariablesAndOutputsValuesProps(String myDomain){
            this.myDomain = myDomain;
        }
    }

    public static void main(String[] args) {
        final App app = new App();
        new VariablesAndOutputsValues(app, "cdktf-producer", new VariablesAndOutputsValuesProps("example.com"));
        app.synth();
    }
}
// DOCS_BLOCK_END:var-out-output-values
