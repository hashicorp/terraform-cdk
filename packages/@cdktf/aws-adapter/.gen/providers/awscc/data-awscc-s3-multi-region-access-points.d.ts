import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccS3MultiRegionAccessPointsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3_multi_region_access_points.html awscc_s3_multi_region_access_points}
*/
export declare class DataAwsccS3MultiRegionAccessPoints extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3_multi_region_access_points.html awscc_s3_multi_region_access_points} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccS3MultiRegionAccessPointsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccS3MultiRegionAccessPointsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
