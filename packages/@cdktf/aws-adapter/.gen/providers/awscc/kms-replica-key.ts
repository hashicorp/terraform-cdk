// https://www.terraform.io/docs/providers/awscc/r/kms_replica_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsReplicaKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the CMK. Use a description that helps you to distinguish this CMK from others in the account, such as its intended use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_replica_key.html#description KmsReplicaKey#description}
  */
  readonly description?: string;
  /**
  * Specifies whether the customer master key (CMK) is enabled. Disabled CMKs cannot be used in cryptographic operations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_replica_key.html#enabled KmsReplicaKey#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The key policy that authorizes use of the CMK. The key policy must observe the following rules.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_replica_key.html#key_policy KmsReplicaKey#key_policy}
  */
  readonly keyPolicy: string;
  /**
  * Specifies the number of days in the waiting period before AWS KMS deletes a CMK that has been removed from a CloudFormation stack. Enter a value between 7 and 30 days. The default value is 30 days.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_replica_key.html#pending_window_in_days KmsReplicaKey#pending_window_in_days}
  */
  readonly pendingWindowInDays?: number;
  /**
  * Identifies the primary CMK to create a replica of. Specify the Amazon Resource Name (ARN) of the CMK. You cannot specify an alias or key ID. For help finding the ARN, see Finding the Key ID and ARN in the AWS Key Management Service Developer Guide.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_replica_key.html#primary_key_arn KmsReplicaKey#primary_key_arn}
  */
  readonly primaryKeyArn: string;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_replica_key.html#tags KmsReplicaKey#tags}
  */
  readonly tags?: KmsReplicaKeyTags[];
}
export interface KmsReplicaKeyTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_replica_key.html#key KmsReplicaKey#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_replica_key.html#value KmsReplicaKey#value}
  */
  readonly value: string;
}

export function kmsReplicaKeyTagsToTerraform(struct?: KmsReplicaKeyTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kms_replica_key.html awscc_kms_replica_key}
*/
export class KmsReplicaKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_kms_replica_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kms_replica_key.html awscc_kms_replica_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsReplicaKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KmsReplicaKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kms_replica_key',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._keyPolicy = config.keyPolicy;
    this._pendingWindowInDays = config.pendingWindowInDays;
    this._primaryKeyArn = config.primaryKeyArn;
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

  // primary_key_arn - computed: false, optional: false, required: true
  private _primaryKeyArn: string;
  public get primaryKeyArn() {
    return this.getStringAttribute('primary_key_arn');
  }
  public set primaryKeyArn(value: string) {
    this._primaryKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyArnInput() {
    return this._primaryKeyArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: KmsReplicaKeyTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: KmsReplicaKeyTags[] ) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      key_policy: cdktf.stringToTerraform(this._keyPolicy),
      pending_window_in_days: cdktf.numberToTerraform(this._pendingWindowInDays),
      primary_key_arn: cdktf.stringToTerraform(this._primaryKeyArn),
      tags: cdktf.listMapper(kmsReplicaKeyTagsToTerraform)(this._tags),
    };
  }
}
