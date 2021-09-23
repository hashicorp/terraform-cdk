import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EventsArchiveConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/events_archive.html#description EventsArchive#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/events_archive.html#event_pattern EventsArchive#event_pattern}
    */
    readonly eventPattern?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/events_archive.html#retention_days EventsArchive#retention_days}
    */
    readonly retentionDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/events_archive.html#source_arn EventsArchive#source_arn}
    */
    readonly sourceArn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/events_archive.html awscc_events_archive}
*/
export declare class EventsArchive extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/events_archive.html awscc_events_archive} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EventsArchiveConfig
    */
    constructor(scope: Construct, id: string, config: EventsArchiveConfig);
    get archiveName(): string;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _eventPattern?;
    get eventPattern(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set eventPattern(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetEventPattern(): void;
    get eventPatternInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    get id(): string;
    private _retentionDays?;
    get retentionDays(): number;
    set retentionDays(value: number);
    resetRetentionDays(): void;
    get retentionDaysInput(): number | undefined;
    private _sourceArn;
    get sourceArn(): string;
    set sourceArn(value: string);
    get sourceArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
