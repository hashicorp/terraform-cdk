import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLocationTrackerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/location_tracker.html#id DataAwsccLocationTracker#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/location_tracker.html awscc_location_tracker}
*/
export declare class DataAwsccLocationTracker extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/location_tracker.html awscc_location_tracker} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLocationTrackerConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLocationTrackerConfig);
    get arn(): string;
    get createTime(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get kmsKeyId(): string;
    get pricingPlan(): string;
    get pricingPlanDataSource(): string;
    get trackerArn(): string;
    get trackerName(): string;
    get updateTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
