import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccQldbStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/qldb_stream.html#id DataAwsccQldbStream#id}
    */
    readonly id: string;
}
export declare class DataAwsccQldbStreamKinesisConfiguration extends cdktf.ComplexComputedList {
    get aggregationEnabled(): any;
    get streamArn(): string;
}
export declare function dataAwsccQldbStreamKinesisConfigurationToTerraform(struct?: DataAwsccQldbStreamKinesisConfiguration): any;
export declare class DataAwsccQldbStreamTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccQldbStreamTagsToTerraform(struct?: DataAwsccQldbStreamTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/qldb_stream.html awscc_qldb_stream}
*/
export declare class DataAwsccQldbStream extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/qldb_stream.html awscc_qldb_stream} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccQldbStreamConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccQldbStreamConfig);
    get arn(): string;
    get exclusiveEndTime(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get inclusiveStartTime(): string;
    get kinesisConfiguration(): any;
    get ledgerName(): string;
    get roleArn(): string;
    get streamName(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
