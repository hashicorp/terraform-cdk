// https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoPermissionSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The permission set description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#description SsoPermissionSet#description}
  */
  readonly description?: string;
  /**
  * The inline policy to put in permission set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#inline_policy SsoPermissionSet#inline_policy}
  */
  readonly inlinePolicy?: string;
  /**
  * The sso instance arn that the permission set is owned.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#instance_arn SsoPermissionSet#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#managed_policies SsoPermissionSet#managed_policies}
  */
  readonly managedPolicies?: string[];
  /**
  * The name you want to assign to this permission set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#name SsoPermissionSet#name}
  */
  readonly name: string;
  /**
  * The relay state URL that redirect links to any service in the AWS Management Console.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#relay_state_type SsoPermissionSet#relay_state_type}
  */
  readonly relayStateType?: string;
  /**
  * The length of time that a user can be signed in to an AWS account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#session_duration SsoPermissionSet#session_duration}
  */
  readonly sessionDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#tags SsoPermissionSet#tags}
  */
  readonly tags?: SsoPermissionSetTags[];
}
export interface SsoPermissionSetTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#key SsoPermissionSet#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#value SsoPermissionSet#value}
  */
  readonly value: string;
}

export function ssoPermissionSetTagsToTerraform(struct?: SsoPermissionSetTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html awscc_sso_permission_set}
*/
export class SsoPermissionSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sso_permission_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html awscc_sso_permission_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoPermissionSetConfig
  */
  public constructor(scope: Construct, id: string, config: SsoPermissionSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sso_permission_set',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._inlinePolicy = config.inlinePolicy;
    this._instanceArn = config.instanceArn;
    this._managedPolicies = config.managedPolicies;
    this._name = config.name;
    this._relayStateType = config.relayStateType;
    this._sessionDuration = config.sessionDuration;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inline_policy - computed: false, optional: true, required: false
  private _inlinePolicy?: string;
  public get inlinePolicy() {
    return this.getStringAttribute('inline_policy');
  }
  public set inlinePolicy(value: string ) {
    this._inlinePolicy = value;
  }
  public resetInlinePolicy() {
    this._inlinePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlinePolicyInput() {
    return this._inlinePolicy
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

  // managed_policies - computed: false, optional: true, required: false
  private _managedPolicies?: string[];
  public get managedPolicies() {
    return this.getListAttribute('managed_policies');
  }
  public set managedPolicies(value: string[] ) {
    this._managedPolicies = value;
  }
  public resetManagedPolicies() {
    this._managedPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPoliciesInput() {
    return this._managedPolicies
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // permission_set_arn - computed: true, optional: false, required: false
  public get permissionSetArn() {
    return this.getStringAttribute('permission_set_arn');
  }

  // relay_state_type - computed: false, optional: true, required: false
  private _relayStateType?: string;
  public get relayStateType() {
    return this.getStringAttribute('relay_state_type');
  }
  public set relayStateType(value: string ) {
    this._relayStateType = value;
  }
  public resetRelayStateType() {
    this._relayStateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayStateTypeInput() {
    return this._relayStateType
  }

  // session_duration - computed: false, optional: true, required: false
  private _sessionDuration?: string;
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }
  public set sessionDuration(value: string ) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: SsoPermissionSetTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SsoPermissionSetTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      inline_policy: cdktf.stringToTerraform(this._inlinePolicy),
      instance_arn: cdktf.stringToTerraform(this._instanceArn),
      managed_policies: cdktf.listMapper(cdktf.stringToTerraform)(this._managedPolicies),
      name: cdktf.stringToTerraform(this._name),
      relay_state_type: cdktf.stringToTerraform(this._relayStateType),
      session_duration: cdktf.stringToTerraform(this._sessionDuration),
      tags: cdktf.listMapper(ssoPermissionSetTagsToTerraform)(this._tags),
    };
  }
}
