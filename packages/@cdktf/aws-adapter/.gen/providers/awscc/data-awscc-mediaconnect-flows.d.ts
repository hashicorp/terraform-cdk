import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMediaconnectFlowsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flows.html awscc_mediaconnect_flows}
*/
export declare class DataAwsccMediaconnectFlows extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flows.html awscc_mediaconnect_flows} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMediaconnectFlowsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccMediaconnectFlowsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
