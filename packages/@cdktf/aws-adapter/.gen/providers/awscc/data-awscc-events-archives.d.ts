import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEventsArchivesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/events_archives.html awscc_events_archives}
*/
export declare class DataAwsccEventsArchives extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/events_archives.html awscc_events_archives} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEventsArchivesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEventsArchivesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
