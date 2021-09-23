import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KinesisStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the Kinesis stream.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#name KinesisStream#name}
    */
    readonly name?: string;
    /**
    * The number of hours for the data records that are stored in shards to remain accessible.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#retention_period_hours KinesisStream#retention_period_hours}
    */
    readonly retentionPeriodHours?: number;
    /**
    * The number of shards that the stream uses.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#shard_count KinesisStream#shard_count}
    */
    readonly shardCount: number;
    /**
    * When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream. Removing this property from your stack template and updating your stack disables encryption.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#stream_encryption KinesisStream#stream_encryption}
    */
    readonly streamEncryption?: KinesisStreamStreamEncryption;
    /**
    * An arbitrary set of tags (key–value pairs) to associate with the Kinesis stream.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#tags KinesisStream#tags}
    */
    readonly tags?: KinesisStreamTags[];
}
export interface KinesisStreamStreamEncryption {
    /**
    * The encryption type to use. The only valid value is KMS.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#encryption_type KinesisStream#encryption_type}
    */
    readonly encryptionType: string;
    /**
    * The GUID for the customer-managed AWS KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias aws/kinesis.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#key_id KinesisStream#key_id}
    */
    readonly keyId: string;
}
export declare function kinesisStreamStreamEncryptionToTerraform(struct?: KinesisStreamStreamEncryption): any;
export interface KinesisStreamTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#key KinesisStream#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#value KinesisStream#value}
    */
    readonly value: string;
}
export declare function kinesisStreamTagsToTerraform(struct?: KinesisStreamTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html awscc_kinesis_stream}
*/
export declare class KinesisStream extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html awscc_kinesis_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisStreamConfig
    */
    constructor(scope: Construct, id: string, config: KinesisStreamConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _retentionPeriodHours?;
    get retentionPeriodHours(): number;
    set retentionPeriodHours(value: number);
    resetRetentionPeriodHours(): void;
    get retentionPeriodHoursInput(): number | undefined;
    private _shardCount;
    get shardCount(): number;
    set shardCount(value: number);
    get shardCountInput(): number;
    private _streamEncryption?;
    get streamEncryption(): KinesisStreamStreamEncryption;
    set streamEncryption(value: KinesisStreamStreamEncryption);
    resetStreamEncryption(): void;
    get streamEncryptionInput(): KinesisStreamStreamEncryption | undefined;
    private _tags?;
    get tags(): KinesisStreamTags[];
    set tags(value: KinesisStreamTags[]);
    resetTags(): void;
    get tagsInput(): KinesisStreamTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
