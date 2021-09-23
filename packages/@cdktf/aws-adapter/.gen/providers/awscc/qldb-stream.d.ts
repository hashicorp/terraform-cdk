import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QldbStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#exclusive_end_time QldbStream#exclusive_end_time}
    */
    readonly exclusiveEndTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#inclusive_start_time QldbStream#inclusive_start_time}
    */
    readonly inclusiveStartTime: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#kinesis_configuration QldbStream#kinesis_configuration}
    */
    readonly kinesisConfiguration: QldbStreamKinesisConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#ledger_name QldbStream#ledger_name}
    */
    readonly ledgerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#role_arn QldbStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#stream_name QldbStream#stream_name}
    */
    readonly streamName: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#tags QldbStream#tags}
    */
    readonly tags?: QldbStreamTags[];
}
export interface QldbStreamKinesisConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#aggregation_enabled QldbStream#aggregation_enabled}
    */
    readonly aggregationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#stream_arn QldbStream#stream_arn}
    */
    readonly streamArn?: string;
}
export declare function qldbStreamKinesisConfigurationToTerraform(struct?: QldbStreamKinesisConfiguration): any;
export interface QldbStreamTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#key QldbStream#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#value QldbStream#value}
    */
    readonly value: string;
}
export declare function qldbStreamTagsToTerraform(struct?: QldbStreamTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html awscc_qldb_stream}
*/
export declare class QldbStream extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html awscc_qldb_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QldbStreamConfig
    */
    constructor(scope: Construct, id: string, config: QldbStreamConfig);
    get arn(): string;
    private _exclusiveEndTime?;
    get exclusiveEndTime(): string;
    set exclusiveEndTime(value: string);
    resetExclusiveEndTime(): void;
    get exclusiveEndTimeInput(): string | undefined;
    get id(): string;
    private _inclusiveStartTime;
    get inclusiveStartTime(): string;
    set inclusiveStartTime(value: string);
    get inclusiveStartTimeInput(): string;
    private _kinesisConfiguration;
    get kinesisConfiguration(): QldbStreamKinesisConfiguration;
    set kinesisConfiguration(value: QldbStreamKinesisConfiguration);
    get kinesisConfigurationInput(): QldbStreamKinesisConfiguration;
    private _ledgerName;
    get ledgerName(): string;
    set ledgerName(value: string);
    get ledgerNameInput(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _streamName;
    get streamName(): string;
    set streamName(value: string);
    get streamNameInput(): string;
    private _tags?;
    get tags(): QldbStreamTags[];
    set tags(value: QldbStreamTags[]);
    resetTags(): void;
    get tagsInput(): QldbStreamTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
