import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLocationGeofenceCollectionsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/location_geofence_collections.html awscc_location_geofence_collections}
*/
export declare class DataAwsccLocationGeofenceCollections extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/location_geofence_collections.html awscc_location_geofence_collections} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLocationGeofenceCollectionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccLocationGeofenceCollectionsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
