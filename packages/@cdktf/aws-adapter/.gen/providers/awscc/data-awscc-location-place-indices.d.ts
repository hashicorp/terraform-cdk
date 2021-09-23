import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLocationPlaceIndicesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/location_place_indices.html awscc_location_place_indices}
*/
export declare class DataAwsccLocationPlaceIndices extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/location_place_indices.html awscc_location_place_indices} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLocationPlaceIndicesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccLocationPlaceIndicesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
