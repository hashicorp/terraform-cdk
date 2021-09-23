// https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The sso instance that the permission set is owned.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html#instance_arn SsoAssignment#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * The permission set that the assignemt will be assigned
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html#permission_set_arn SsoAssignment#permission_set_arn}
  */
  readonly permissionSetArn: string;
  /**
  * The assignee's identifier, user id/group id
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html#principal_id SsoAssignment#principal_id}
  */
  readonly principalId: string;
  /**
  * The assignee's type, user/group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html#principal_type SsoAssignment#principal_type}
  */
  readonly principalType: string;
  /**
  * The account id to be provisioned.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html#target_id SsoAssignment#target_id}
  */
  readonly targetId: string;
  /**
  * The type of resource to be provsioned to, only aws account now
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html#target_type SsoAssignment#target_type}
  */
  readonly targetType: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html awscc_sso_assignment}
*/
export class SsoAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sso_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html awscc_sso_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: SsoAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sso_assignment',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceArn = config.instanceArn;
    this._permissionSetArn = config.permissionSetArn;
    this._principalId = config.principalId;
    this._principalType = config.principalType;
    this._targetId = config.targetId;
    this._targetType = config.targetType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn: string;
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn
  }

  // permission_set_arn - computed: false, optional: false, required: true
  private _permissionSetArn: string;
  public get permissionSetArn() {
    return this.getStringAttribute('permission_set_arn');
  }
  public set permissionSetArn(value: string) {
    this._permissionSetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionSetArnInput() {
    return this._permissionSetArn
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId: string;
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId
  }

  // principal_type - computed: false, optional: false, required: true
  private _principalType: string;
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId: string;
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType: string;
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_arn: cdktf.stringToTerraform(this._instanceArn),
      permission_set_arn: cdktf.stringToTerraform(this._permissionSetArn),
      principal_id: cdktf.stringToTerraform(this._principalId),
      principal_type: cdktf.stringToTerraform(this._principalType),
      target_id: cdktf.stringToTerraform(this._targetId),
      target_type: cdktf.stringToTerraform(this._targetType),
    };
  }
}
