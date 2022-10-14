package main.java.com.mycompany.app;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;
import com.mycompany.app.assets.MainAssets;
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
        new MainAssets(app, "assets");
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
        new MainCrossStackReferences(app, "cross-stack-references");
        new MainMultipleStacks(app, "multiple-stacks", new MainMultipleStacks.MultipleStacksConfig());
        new MainSingleStack(app, "single-stack");
        new MainStacks(app, "stacks");
        new VariablesAndOutputs(app, "var-and-outs");
        new VariablesAndOutputsDefineValues(app, "var-and-outs-define");
        new VariablesAndOutputsRemoteState();
        new VariablesAndOutputsValues(app, "var-and-outs-values",
                new VariablesAndOutputsValues.VariablesAndOutputsValuesProps("domain"));
        new MainFunction(app, "main-function");
        new MainHCL(app, "main-hcl");
        new MainIterator(app, "main-iterator");
        new MainToken(app, "main-token");

    }
}
