import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudtrailTrailsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudtrail_trails.html awscc_cloudtrail_trails}
*/
export declare class DataAwsccCloudtrailTrails extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudtrail_trails.html awscc_cloudtrail_trails} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudtrailTrailsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccCloudtrailTrailsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
