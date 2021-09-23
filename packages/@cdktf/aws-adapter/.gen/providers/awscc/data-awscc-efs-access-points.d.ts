import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEfsAccessPointsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/efs_access_points.html awscc_efs_access_points}
*/
export declare class DataAwsccEfsAccessPoints extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/efs_access_points.html awscc_efs_access_points} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEfsAccessPointsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEfsAccessPointsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
