import { Construct } from "constructs";
import * as cdktf from "cdktf";
import { ValidateTerraformVersion } from "./validations/validate-terraform-version";

export interface DataConfig extends cdktf.TerraformMetaArguments {
  /**
   * (Optional) A value which will be stored in the instance state, and reflected in the output attribute after apply.
   * https://developer.hashicorp.com/terraform/language/resources/terraform-data#input
   */
  readonly input?: { [key: string]: any };
  /**
   * (Optional) A value which is stored in the instance state, and will force replacement when the value changes.
   * https://developer.hashicorp.com/terraform/language/resources/terraform-data#triggers_replace
   */
  readonly triggersReplace?: { [key: string]: any };
}

/**
 * The DataResource implements the standard resource lifecycle, but does not directly take any other actions. You can use the DataResource resource without requiring or configuring a provider.
 *
 * The DataResource resource is useful for storing values which need to follow a manage resource lifecycle, and for triggering provisioners when there is no other logical managed resource in which to place them.
 *
 * It requires Terraform 1.4 or later.
 *
 * It is also possible to generate these bindings by adding "terraform.io/builtin/terraform" to the "terraformProviders" key in your cdktf.json file and running "cdktf get".
 *
 * https://developer.hashicorp.com/terraform/language/resources/terraform-data
 */
export class DataResource extends cdktf.TerraformResource {
  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "terraform_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
   * Generates CDKTF code for importing a Data resource upon running "cdktf plan <stack-name>"
   * @param scope The scope in which to define this construct
   * @param importToId The construct id used in the generated config for the Data to import
   * @param importFromId The id of the existing Data that should be imported. Refer to the {@link https://terraform.io/providers/builtin/terraform/latest/docs/resources/data#import import section} in the documentation of this resource for the id to use
   * @param provider? Optional instance of the provider where the Data to import is found
   */
  public static generateConfigForImport(
    scope: Construct,
    importToId: string,
    importFromId: string,
    provider?: cdktf.TerraformProvider
  ) {
    return new cdktf.ImportableResource(scope, importToId, {
      terraformResourceType: "terraform_data",
      importId: importFromId,
      provider,
    });
  }

  // ===========
  // INITIALIZER
  // ===========

  /**
   * Create a new TerraformData Resource.
   *
   * The DataResource resource is useful for storing values which need to follow a manage resource lifecycle, and for triggering provisioners when there is no other logical managed resource in which to place them.
   *
   * @param scope The scope in which to define this construct
   * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
   * @param options DataConfig = {}
   */
  public constructor(scope: Construct, id: string, config: DataConfig = {}) {
    super(scope, id, {
      terraformResourceType: "terraform_data",
      terraformGeneratorMetadata: {
        providerName: "terraform",
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach,
    });
    this._input = config.input;
    this._triggersReplace = config.triggersReplace;
    this.node.addValidation(
      new ValidateTerraformVersion(
        ">=1.4",
        `The built-in Terraform data resource is only supported for Terraform >=1.4. Please upgrade your Terraform version.`
      )
    );
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute("id");
  }

  // input - computed: false, optional: true, required: false
  private _input?: { [key: string]: any };
  public get input() {
    return this.getAnyMapAttribute("input");
  }
  /**
   * (Optional) A value which will be stored in the instance state, and reflected in the output attribute after apply.
   * https://developer.hashicorp.com/terraform/language/resources/terraform-data#input
   */
  public set input(value: { [key: string]: any }) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // output - computed: true, optional: false, required: false
  private _output = new cdktf.AnyMap(this, "output");
  public get output() {
    return this._output;
  }

  // triggers_replace - computed: false, optional: true, required: false
  private _triggersReplace?: { [key: string]: any };
  public get triggersReplace() {
    return this.getAnyMapAttribute("triggers_replace");
  }
  /**
   * (Optional) A value which is stored in the instance state, and will force replacement when the value changes.
   * https://developer.hashicorp.com/terraform/language/resources/terraform-data#triggers_replace
   */
  public set triggersReplace(value: { [key: string]: any }) {
    this._triggersReplace = value;
  }
  public resetTriggersReplace() {
    this._triggersReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersReplaceInput() {
    return this._triggersReplace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      input: cdktf.hashMapper(cdktf.anyToTerraform)(this._input),
      triggers_replace: cdktf.hashMapper(cdktf.anyToTerraform)(
        this._triggersReplace
      ),
    };
  }
}
