import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2NetworkInsightsAnalysesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_analyses.html awscc_ec2_network_insights_analyses}
*/
export declare class DataAwsccEc2NetworkInsightsAnalyses extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_analyses.html awscc_ec2_network_insights_analyses} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2NetworkInsightsAnalysesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEc2NetworkInsightsAnalysesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
