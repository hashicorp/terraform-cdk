import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEventsConnectionsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/events_connections.html awscc_events_connections}
*/
export declare class DataAwsccEventsConnections extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/events_connections.html awscc_events_connections} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEventsConnectionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEventsConnectionsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
