import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LocationGeofenceCollectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_geofence_collection.html#collection_name LocationGeofenceCollection#collection_name}
    */
    readonly collectionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_geofence_collection.html#description LocationGeofenceCollection#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_geofence_collection.html#kms_key_id LocationGeofenceCollection#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_geofence_collection.html#pricing_plan LocationGeofenceCollection#pricing_plan}
    */
    readonly pricingPlan: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_geofence_collection.html#pricing_plan_data_source LocationGeofenceCollection#pricing_plan_data_source}
    */
    readonly pricingPlanDataSource?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/location_geofence_collection.html awscc_location_geofence_collection}
*/
export declare class LocationGeofenceCollection extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/location_geofence_collection.html awscc_location_geofence_collection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LocationGeofenceCollectionConfig
    */
    constructor(scope: Construct, id: string, config: LocationGeofenceCollectionConfig);
    get collectionArn(): string;
    private _collectionName;
    get collectionName(): string;
    set collectionName(value: string);
    get collectionNameInput(): string;
    get createTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _pricingPlan;
    get pricingPlan(): string;
    set pricingPlan(value: string);
    get pricingPlanInput(): string;
    private _pricingPlanDataSource?;
    get pricingPlanDataSource(): string;
    set pricingPlanDataSource(value: string);
    resetPricingPlanDataSource(): void;
    get pricingPlanDataSourceInput(): string | undefined;
    get updateTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
