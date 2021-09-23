import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccS3AccessPointsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3_access_points.html awscc_s3_access_points}
*/
export declare class DataAwsccS3AccessPoints extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3_access_points.html awscc_s3_access_points} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccS3AccessPointsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccS3AccessPointsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
