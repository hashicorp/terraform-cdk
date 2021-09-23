import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatasyncLocationSmbsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_smbs.html awscc_datasync_location_smbs}
*/
export declare class DataAwsccDatasyncLocationSmbs extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_smbs.html awscc_datasync_location_smbs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatasyncLocationSmbsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccDatasyncLocationSmbsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
