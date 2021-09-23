import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEventsApiDestinationsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/events_api_destinations.html awscc_events_api_destinations}
*/
export declare class DataAwsccEventsApiDestinations extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/events_api_destinations.html awscc_events_api_destinations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEventsApiDestinationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEventsApiDestinationsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
