import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2NetworkInsightsPathsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_paths.html awscc_ec2_network_insights_paths}
*/
export declare class DataAwsccEc2NetworkInsightsPaths extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_paths.html awscc_ec2_network_insights_paths} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2NetworkInsightsPathsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEc2NetworkInsightsPathsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
