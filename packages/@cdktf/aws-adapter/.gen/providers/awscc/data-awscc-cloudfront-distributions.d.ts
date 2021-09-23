import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudfrontDistributionsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_distributions.html awscc_cloudfront_distributions}
*/
export declare class DataAwsccCloudfrontDistributions extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_distributions.html awscc_cloudfront_distributions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudfrontDistributionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccCloudfrontDistributionsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
