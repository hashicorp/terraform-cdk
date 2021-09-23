// https://www.terraform.io/docs/providers/awscc/r/lookoutvision_project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LookoutvisionProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Amazon Lookout for Vision project
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutvision_project.html#project_name LookoutvisionProject#project_name}
  */
  readonly projectName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/lookoutvision_project.html awscc_lookoutvision_project}
*/
export class LookoutvisionProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_lookoutvision_project";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/lookoutvision_project.html awscc_lookoutvision_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LookoutvisionProjectConfig
  */
  public constructor(scope: Construct, id: string, config: LookoutvisionProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lookoutvision_project',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._projectName = config.projectName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName: string;
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_name: cdktf.stringToTerraform(this._projectName),
    };
  }
}
