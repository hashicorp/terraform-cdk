import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLocationMapsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/location_maps.html awscc_location_maps}
*/
export declare class DataAwsccLocationMaps extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/location_maps.html awscc_location_maps} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLocationMapsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccLocationMapsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
