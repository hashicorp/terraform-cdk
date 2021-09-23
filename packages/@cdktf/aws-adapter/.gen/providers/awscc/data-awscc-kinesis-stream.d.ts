import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccKinesisStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/kinesis_stream.html#id DataAwsccKinesisStream#id}
    */
    readonly id: string;
}
export declare class DataAwsccKinesisStreamStreamEncryption extends cdktf.ComplexComputedList {
    get encryptionType(): string;
    get keyId(): string;
}
export declare function dataAwsccKinesisStreamStreamEncryptionToTerraform(struct?: DataAwsccKinesisStreamStreamEncryption): any;
export declare class DataAwsccKinesisStreamTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccKinesisStreamTagsToTerraform(struct?: DataAwsccKinesisStreamTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/kinesis_stream.html awscc_kinesis_stream}
*/
export declare class DataAwsccKinesisStream extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/kinesis_stream.html awscc_kinesis_stream} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccKinesisStreamConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccKinesisStreamConfig);
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get retentionPeriodHours(): number;
    get shardCount(): number;
    get streamEncryption(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
