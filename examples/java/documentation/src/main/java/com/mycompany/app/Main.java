package com.mycompany.app;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;
import com.mycompany.app.assets.MyAssetStack;
import com.mycompany.app.constructs.MainConstructScope;
import com.mycompany.app.constructs.MainUseConstructs;
import com.mycompany.app.dataSources.DataSourcesDefine;
import com.mycompany.app.dataSources.DataSourcesRemoteState;
import com.mycompany.app.modules.MainCreateModules;
import com.mycompany.app.modules.MainInstallModules;
import com.mycompany.app.modules.MainModuleExample;
import com.mycompany.app.providers.MainImportClasses;
import com.mycompany.app.providers.MainImportProviders;
import com.mycompany.app.remoteBackends.MainRemoteBackend;
import com.mycompany.app.remoteBackends.MainRemoteBackendDefine;
import com.mycompany.app.resources.MainResources;
import com.mycompany.app.resources.MainResourcesDefine;
import com.mycompany.app.stacks.MainCrossStackReferences;
import com.mycompany.app.stacks.MainMultipleStacks;
import com.mycompany.app.stacks.MainSingleStack;
import com.mycompany.app.stacks.MainStacks;
import com.mycompany.app.variablesAndOutputs.VariablesAndOutputs;
import com.mycompany.app.variablesAndOutputs.VariablesAndOutputsDefineValues;
import com.mycompany.app.variablesAndOutputs.VariablesAndOutputsRemoteState;
import com.mycompany.app.variablesAndOutputs.VariablesAndOutputsValues;
import software.constructs.Construct;

public class Main extends TerraformStack {

    public Main(Construct scope, String id) {
        super(scope, id);
    }

    public static void main(String[] args) {
        App app = new App();
        new MyAssetStack(app, "assets");
        new MainConstructScope(app, "constructs-scope");
        new MainUseConstructs(app, "use-constructs");
        new DataSourcesDefine(app, "data-sources-define");
        new DataSourcesRemoteState(app, "data-sources-remote-state");
        new MainCreateModules(app, "create-modules");
        new MainInstallModules(app, "install-modules");
        new MainModuleExample(app, "module-example");
        new MainImportClasses(app, "import-classes");
        new MainImportProviders(app, "import-providers");
        new MainRemoteBackend(app, "remote-backend");
        new MainRemoteBackendDefine(app, "remote-backend-define");
        new MainResources(app, "resources");
        new MainResourcesDefine(app, "resources-define");
        MainCrossStackReferences.VPCStack origin = new MainCrossStackReferences.VPCStack(app, "origin-stack");
        new MainCrossStackReferences.BackendStack(app, "target-stack", new MainCrossStackReferences.BackendStackConfig()
                .setRegion(origin.region)
                .setVpcId(origin.vpc.getId())
                .setDockerImage("org/my-image:latest"));
        new MainMultipleStacks(app, "multiple-stacks-production-us",
                new MainMultipleStacks.MultipleStacksConfig().setEnvironment("staging").setRegion("eu-central-1"));
        new MainSingleStack(app, "single-stack");
        new MainStacks(app, "stacks");
        new VariablesAndOutputsDefineValues(app, "var-and-outs-define");
        new VariablesAndOutputsRemoteState.Producer(app, "cdktf-producer");
        new VariablesAndOutputsRemoteState.Consumer(app, "cdktf-consumer");
        new VariablesAndOutputsValues(app, "var-and-outs-values",
                new VariablesAndOutputsValues.VariablesAndOutputsValuesProps("domain"));
        new MainFunction(app, "main-function");
        new MainHCL(app, "main-hcl");
        new MainIterator(app, "main-iterator");
        new MainIterator2(app, "main-iterator2");
        new MainToken(app, "main-token");
        app.synth();
    }
}
