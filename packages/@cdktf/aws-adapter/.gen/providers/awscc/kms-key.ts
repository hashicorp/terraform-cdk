// https://www.terraform.io/docs/providers/awscc/r/kms_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the CMK. Use a description that helps you to distinguish this CMK from others in the account, such as its intended use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_key.html#description KmsKey#description}
  */
  readonly description?: string;
  /**
  * Enables automatic rotation of the key material for the specified customer master key (CMK). By default, automation key rotation is not enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_key.html#enable_key_rotation KmsKey#enable_key_rotation}
  */
  readonly enableKeyRotation?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the customer master key (CMK) is enabled. Disabled CMKs cannot be used in cryptographic operations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_key.html#enabled KmsKey#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The key policy that authorizes use of the CMK. The key policy must observe the following rules.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_key.html#key_policy KmsKey#key_policy}
  */
  readonly keyPolicy: string;
  /**
  * Specifies the type of CMK to create. The default value is SYMMETRIC_DEFAULT. This property is required only for asymmetric CMKs. You can't change the KeySpec value after the CMK is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_key.html#key_spec KmsKey#key_spec}
  */
  readonly keySpec?: string;
  /**
  * Determines the cryptographic operations for which you can use the CMK. The default value is ENCRYPT_DECRYPT. This property is required only for asymmetric CMKs. You can't change the KeyUsage value after the CMK is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_key.html#key_usage KmsKey#key_usage}
  */
  readonly keyUsage?: string;
  /**
  * Specifies whether the CMK should be Multi-Region. You can't change the MultiRegion value after the CMK is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_key.html#multi_region KmsKey#multi_region}
  */
  readonly multiRegion?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of days in the waiting period before AWS KMS deletes a CMK that has been removed from a CloudFormation stack. Enter a value between 7 and 30 days. The default value is 30 days.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_key.html#pending_window_in_days KmsKey#pending_window_in_days}
  */
  readonly pendingWindowInDays?: number;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_key.html#tags KmsKey#tags}
  */
  readonly tags?: KmsKeyTags[];
}
export interface KmsKeyTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_key.html#key KmsKey#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_key.html#value KmsKey#value}
  */
  readonly value: string;
}

export function kmsKeyTagsToTerraform(struct?: KmsKeyTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kms_key.html awscc_kms_key}
*/
export class KmsKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_kms_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kms_key.html awscc_kms_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KmsKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kms_key',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enableKeyRotation = config.enableKeyRotation;
    this._enabled = config.enabled;
    this._keyPolicy = config.keyPolicy;
    this._keySpec = config.keySpec;
    this._keyUsage = config.keyUsage;
    this._multiRegion = config.multiRegion;
    this._pendingWindowInDays = config.pendingWindowInDays;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

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

  // enable_key_rotation - computed: false, optional: true, required: false
  private _enableKeyRotation?: boolean | cdktf.IResolvable;
  public get enableKeyRotation() {
    return this.getBooleanAttribute('enable_key_rotation');
  }
  public set enableKeyRotation(value: boolean | cdktf.IResolvable ) {
    this._enableKeyRotation = value;
  }
  public resetEnableKeyRotation() {
    this._enableKeyRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKeyRotationInput() {
    return this._enableKeyRotation
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_policy - computed: false, optional: false, required: true
  private _keyPolicy: string;
  public get keyPolicy() {
    return this.getStringAttribute('key_policy');
  }
  public set keyPolicy(value: string) {
    this._keyPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPolicyInput() {
    return this._keyPolicy
  }

  // key_spec - computed: true, optional: true, required: false
  private _keySpec?: string;
  public get keySpec() {
    return this.getStringAttribute('key_spec');
  }
  public set keySpec(value: string) {
    this._keySpec = value;
  }
  public resetKeySpec() {
    this._keySpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySpecInput() {
    return this._keySpec
  }

  // key_usage - computed: true, optional: true, required: false
  private _keyUsage?: string;
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }
  public set keyUsage(value: string) {
    this._keyUsage = value;
  }
  public resetKeyUsage() {
    this._keyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage
  }

  // multi_region - computed: true, optional: true, required: false
  private _multiRegion?: boolean | cdktf.IResolvable;
  public get multiRegion() {
    return this.getBooleanAttribute('multi_region');
  }
  public set multiRegion(value: boolean | cdktf.IResolvable) {
    this._multiRegion = value;
  }
  public resetMultiRegion() {
    this._multiRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiRegionInput() {
    return this._multiRegion
  }

  // pending_window_in_days - computed: false, optional: true, required: false
  private _pendingWindowInDays?: number;
  public get pendingWindowInDays() {
    return this.getNumberAttribute('pending_window_in_days');
  }
  public set pendingWindowInDays(value: number ) {
    this._pendingWindowInDays = value;
  }
  public resetPendingWindowInDays() {
    this._pendingWindowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingWindowInDaysInput() {
    return this._pendingWindowInDays
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: KmsKeyTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: KmsKeyTags[] ) {
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
      enable_key_rotation: cdktf.booleanToTerraform(this._enableKeyRotation),
      enabled: cdktf.booleanToTerraform(this._enabled),
      key_policy: cdktf.stringToTerraform(this._keyPolicy),
      key_spec: cdktf.stringToTerraform(this._keySpec),
      key_usage: cdktf.stringToTerraform(this._keyUsage),
      multi_region: cdktf.booleanToTerraform(this._multiRegion),
      pending_window_in_days: cdktf.numberToTerraform(this._pendingWindowInDays),
      tags: cdktf.listMapper(kmsKeyTagsToTerraform)(this._tags),
    };
  }
}
