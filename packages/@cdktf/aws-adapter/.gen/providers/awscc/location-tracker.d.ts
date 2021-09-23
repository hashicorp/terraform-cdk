import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LocationTrackerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker.html#description LocationTracker#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker.html#kms_key_id LocationTracker#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker.html#pricing_plan LocationTracker#pricing_plan}
    */
    readonly pricingPlan: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker.html#pricing_plan_data_source LocationTracker#pricing_plan_data_source}
    */
    readonly pricingPlanDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker.html#tracker_name LocationTracker#tracker_name}
    */
    readonly trackerName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker.html awscc_location_tracker}
*/
export declare class LocationTracker extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker.html awscc_location_tracker} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LocationTrackerConfig
    */
    constructor(scope: Construct, id: string, config: LocationTrackerConfig);
    get arn(): string;
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
    get trackerArn(): string;
    private _trackerName;
    get trackerName(): string;
    set trackerName(value: string);
    get trackerNameInput(): string;
    get updateTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
