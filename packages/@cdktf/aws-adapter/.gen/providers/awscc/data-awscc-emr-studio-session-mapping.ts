// https://www.terraform.io/docs/providers/awscc/d/emr_studio_session_mapping.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEmrStudioSessionMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/emr_studio_session_mapping.html#id DataAwsccEmrStudioSessionMapping#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/emr_studio_session_mapping.html awscc_emr_studio_session_mapping}
*/
export class DataAwsccEmrStudioSessionMapping extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_emr_studio_session_mapping";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/emr_studio_session_mapping.html awscc_emr_studio_session_mapping} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEmrStudioSessionMappingConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEmrStudioSessionMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_emr_studio_session_mapping',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // identity_name - computed: true, optional: false, required: false
  public get identityName() {
    return this.getStringAttribute('identity_name');
  }

  // identity_type - computed: true, optional: false, required: false
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }

  // session_policy_arn - computed: true, optional: false, required: false
  public get sessionPolicyArn() {
    return this.getStringAttribute('session_policy_arn');
  }

  // studio_id - computed: true, optional: false, required: false
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
