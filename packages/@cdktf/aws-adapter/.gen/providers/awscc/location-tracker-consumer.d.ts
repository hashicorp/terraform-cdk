import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LocationTrackerConsumerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker_consumer.html#consumer_arn LocationTrackerConsumer#consumer_arn}
    */
    readonly consumerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker_consumer.html#tracker_name LocationTrackerConsumer#tracker_name}
    */
    readonly trackerName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker_consumer.html awscc_location_tracker_consumer}
*/
export declare class LocationTrackerConsumer extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker_consumer.html awscc_location_tracker_consumer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LocationTrackerConsumerConfig
    */
    constructor(scope: Construct, id: string, config: LocationTrackerConsumerConfig);
    private _consumerArn;
    get consumerArn(): string;
    set consumerArn(value: string);
    get consumerArnInput(): string;
    get id(): string;
    private _trackerName;
    get trackerName(): string;
    set trackerName(value: string);
    get trackerNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
