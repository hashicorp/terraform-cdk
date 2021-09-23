import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIvsChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ivs_channel.html#id DataAwsccIvsChannel#id}
    */
    readonly id: string;
}
export declare class DataAwsccIvsChannelTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIvsChannelTagsToTerraform(struct?: DataAwsccIvsChannelTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ivs_channel.html awscc_ivs_channel}
*/
export declare class DataAwsccIvsChannel extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ivs_channel.html awscc_ivs_channel} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIvsChannelConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIvsChannelConfig);
    get arn(): string;
    get authorized(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get ingestEndpoint(): string;
    get latencyMode(): string;
    get name(): string;
    get playbackUrl(): string;
    get recordingConfigurationArn(): string;
    get tags(): any;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
