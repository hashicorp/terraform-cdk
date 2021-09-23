import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEventsArchiveConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/events_archive.html#id DataAwsccEventsArchive#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/events_archive.html awscc_events_archive}
*/
export declare class DataAwsccEventsArchive extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/events_archive.html awscc_events_archive} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEventsArchiveConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEventsArchiveConfig);
    get archiveName(): string;
    get arn(): string;
    get description(): string;
    eventPattern(key: string): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get retentionDays(): number;
    get sourceArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
