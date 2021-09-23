import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEventsApiDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/events_api_destination.html#id DataAwsccEventsApiDestination#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/events_api_destination.html awscc_events_api_destination}
*/
export declare class DataAwsccEventsApiDestination extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/events_api_destination.html awscc_events_api_destination} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEventsApiDestinationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEventsApiDestinationConfig);
    get arn(): string;
    get connectionArn(): string;
    get description(): string;
    get httpMethod(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get invocationEndpoint(): string;
    get invocationRateLimitPerSecond(): number;
    get name(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
