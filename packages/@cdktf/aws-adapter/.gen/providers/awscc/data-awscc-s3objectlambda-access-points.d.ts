import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccS3ObjectlambdaAccessPointsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3objectlambda_access_points.html awscc_s3objectlambda_access_points}
*/
export declare class DataAwsccS3ObjectlambdaAccessPoints extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3objectlambda_access_points.html awscc_s3objectlambda_access_points} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccS3ObjectlambdaAccessPointsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccS3ObjectlambdaAccessPointsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
