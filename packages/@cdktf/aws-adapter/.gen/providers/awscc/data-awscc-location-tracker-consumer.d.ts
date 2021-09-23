import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLocationTrackerConsumerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/location_tracker_consumer.html#id DataAwsccLocationTrackerConsumer#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/location_tracker_consumer.html awscc_location_tracker_consumer}
*/
export declare class DataAwsccLocationTrackerConsumer extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/location_tracker_consumer.html awscc_location_tracker_consumer} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLocationTrackerConsumerConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLocationTrackerConsumerConfig);
    get consumerArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get trackerName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
