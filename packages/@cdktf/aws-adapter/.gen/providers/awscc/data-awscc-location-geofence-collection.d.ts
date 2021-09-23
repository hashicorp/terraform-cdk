import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLocationGeofenceCollectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/location_geofence_collection.html#id DataAwsccLocationGeofenceCollection#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/location_geofence_collection.html awscc_location_geofence_collection}
*/
export declare class DataAwsccLocationGeofenceCollection extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/location_geofence_collection.html awscc_location_geofence_collection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLocationGeofenceCollectionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLocationGeofenceCollectionConfig);
    get collectionArn(): string;
    get collectionName(): string;
    get createTime(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get kmsKeyId(): string;
    get pricingPlan(): string;
    get pricingPlanDataSource(): string;
    get updateTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
