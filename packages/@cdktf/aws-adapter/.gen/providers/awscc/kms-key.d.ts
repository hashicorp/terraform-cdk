import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function kmsKeyTagsToTerraform(struct?: KmsKeyTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kms_key.html awscc_kms_key}
*/
export declare class KmsKey extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kms_key.html awscc_kms_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsKeyConfig
    */
    constructor(scope: Construct, id: string, config: KmsKeyConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enableKeyRotation?;
    get enableKeyRotation(): boolean | cdktf.IResolvable;
    set enableKeyRotation(value: boolean | cdktf.IResolvable);
    resetEnableKeyRotation(): void;
    get enableKeyRotationInput(): boolean | cdktf.IResolvable | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    get keyId(): string;
    private _keyPolicy;
    get keyPolicy(): string;
    set keyPolicy(value: string);
    get keyPolicyInput(): string;
    private _keySpec?;
    get keySpec(): string;
    set keySpec(value: string);
    resetKeySpec(): void;
    get keySpecInput(): string | undefined;
    private _keyUsage?;
    get keyUsage(): string;
    set keyUsage(value: string);
    resetKeyUsage(): void;
    get keyUsageInput(): string | undefined;
    private _multiRegion?;
    get multiRegion(): boolean | cdktf.IResolvable;
    set multiRegion(value: boolean | cdktf.IResolvable);
    resetMultiRegion(): void;
    get multiRegionInput(): boolean | cdktf.IResolvable | undefined;
    private _pendingWindowInDays?;
    get pendingWindowInDays(): number;
    set pendingWindowInDays(value: number);
    resetPendingWindowInDays(): void;
    get pendingWindowInDaysInput(): number | undefined;
    private _tags?;
    get tags(): KmsKeyTags[];
    set tags(value: KmsKeyTags[]);
    resetTags(): void;
    get tagsInput(): KmsKeyTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
