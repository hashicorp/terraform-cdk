// https://www.terraform.io/docs/providers/awscc/r/emr_studio_session_mapping.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrStudioSessionMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the user or group. For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio_session_mapping.html#identity_name EmrStudioSessionMapping#identity_name}
  */
  readonly identityName: string;
  /**
  * Specifies whether the identity to map to the Studio is a user or a group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio_session_mapping.html#identity_type EmrStudioSessionMapping#identity_type}
  */
  readonly identityType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio_session_mapping.html#session_policy_arn EmrStudioSessionMapping#session_policy_arn}
  */
  readonly sessionPolicyArn: string;
  /**
  * The ID of the Amazon EMR Studio to which the user or group will be mapped.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio_session_mapping.html#studio_id EmrStudioSessionMapping#studio_id}
  */
  readonly studioId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio_session_mapping.html awscc_emr_studio_session_mapping}
*/
export class EmrStudioSessionMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_emr_studio_session_mapping";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio_session_mapping.html awscc_emr_studio_session_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrStudioSessionMappingConfig
  */
  public constructor(scope: Construct, id: string, config: EmrStudioSessionMappingConfig) {
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
    this._identityName = config.identityName;
    this._identityType = config.identityType;
    this._sessionPolicyArn = config.sessionPolicyArn;
    this._studioId = config.studioId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_name - computed: false, optional: false, required: true
  private _identityName: string;
  public get identityName() {
    return this.getStringAttribute('identity_name');
  }
  public set identityName(value: string) {
    this._identityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityNameInput() {
    return this._identityName
  }

  // identity_type - computed: false, optional: false, required: true
  private _identityType: string;
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType
  }

  // session_policy_arn - computed: false, optional: false, required: true
  private _sessionPolicyArn: string;
  public get sessionPolicyArn() {
    return this.getStringAttribute('session_policy_arn');
  }
  public set sessionPolicyArn(value: string) {
    this._sessionPolicyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPolicyArnInput() {
    return this._sessionPolicyArn
  }

  // studio_id - computed: false, optional: false, required: true
  private _studioId: string;
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }
  public set studioId(value: string) {
    this._studioId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get studioIdInput() {
    return this._studioId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identity_name: cdktf.stringToTerraform(this._identityName),
      identity_type: cdktf.stringToTerraform(this._identityType),
      session_policy_arn: cdktf.stringToTerraform(this._sessionPolicyArn),
      studio_id: cdktf.stringToTerraform(this._studioId),
    };
  }
}
