import {
  App,
  AppOptions,
  TerraformProvider,
  TerraformStack,
  TerraformVariable,
  TerraformVariableConfig,
} from "cdktf";
import { Construct } from "constructs";

export class TFModuleApp extends App {
  constructor(options?: AppOptions) {
    // We don't want the provider validation to kick in
    super({ ...(options || {}), skipValidation: true });
  }
}

export class ProviderRequirement extends TerraformProvider {
  constructor(
    scope: Construct,
    providerName: string,
    providerVersionConstraint?: string,
    terraformProviderSource?: string
  ) {
    super(scope, providerName, {
      terraformResourceType: providerName,
      terraformGeneratorMetadata: {
        providerName,
        providerVersionConstraint,
      },
      terraformProviderSource,
    });
  }
}

export class TFModuleStack extends TerraformStack {
  public toTerraform(): any {
    const tf = super.toTerraform();
    delete tf.provider;
    delete tf.terraform.backend;
    return tf;
  }
}

export type TFModuleVariableConfig = TerraformVariableConfig;
export class TFModuleVariable extends TerraformVariable {
  constructor(scope: Construct, name: string, config: TFModuleVariableConfig) {
    super(scope, name, config);
    this.overrideLogicalId(name);
  }
}
