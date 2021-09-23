import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIvsStreamKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ivs_stream_key.html#id DataAwsccIvsStreamKey#id}
    */
    readonly id: string;
}
export declare class DataAwsccIvsStreamKeyTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIvsStreamKeyTagsToTerraform(struct?: DataAwsccIvsStreamKeyTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ivs_stream_key.html awscc_ivs_stream_key}
*/
export declare class DataAwsccIvsStreamKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ivs_stream_key.html awscc_ivs_stream_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIvsStreamKeyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIvsStreamKeyConfig);
    get arn(): string;
    get channelArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    get value(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
