import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function kmsReplicaKeyTagsToTerraform(struct?: KmsReplicaKeyTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kms_replica_key.html awscc_kms_replica_key}
*/
export declare class KmsReplicaKey extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kms_replica_key.html awscc_kms_replica_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsReplicaKeyConfig
    */
    constructor(scope: Construct, id: string, config: KmsReplicaKeyConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
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
    private _pendingWindowInDays?;
    get pendingWindowInDays(): number;
    set pendingWindowInDays(value: number);
    resetPendingWindowInDays(): void;
    get pendingWindowInDaysInput(): number | undefined;
    private _primaryKeyArn;
    get primaryKeyArn(): string;
    set primaryKeyArn(value: string);
    get primaryKeyArnInput(): string;
    private _tags?;
    get tags(): KmsReplicaKeyTags[];
    set tags(value: KmsReplicaKeyTags[]);
    resetTags(): void;
    get tagsInput(): KmsReplicaKeyTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
