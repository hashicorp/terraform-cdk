import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIvsChannelsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ivs_channels.html awscc_ivs_channels}
*/
export declare class DataAwsccIvsChannels extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ivs_channels.html awscc_ivs_channels} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIvsChannelsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIvsChannelsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
