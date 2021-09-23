import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncTaskConfig extends cdktf.TerraformMetaArguments {
    /**
    * The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}
    */
    readonly cloudwatchLogGroupArn?: string;
    /**
    * The ARN of an AWS storage resource's location.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#destination_location_arn DatasyncTask#destination_location_arn}
    */
    readonly destinationLocationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#excludes DatasyncTask#excludes}
    */
    readonly excludes?: DatasyncTaskExcludes[];
    /**
    * The name of a task. This value is a text reference that is used to identify the task in the console.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#name DatasyncTask#name}
    */
    readonly name?: string;
    /**
    * Represents the options that are available to control the behavior of a StartTaskExecution operation.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#options DatasyncTask#options}
    */
    readonly options?: DatasyncTaskOptions;
    /**
    * Specifies the schedule you want your task to use for repeated executions.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#schedule DatasyncTask#schedule}
    */
    readonly schedule?: DatasyncTaskSchedule;
    /**
    * The ARN of the source location for the task.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#source_location_arn DatasyncTask#source_location_arn}
    */
    readonly sourceLocationArn: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#tags DatasyncTask#tags}
    */
    readonly tags?: DatasyncTaskTags[];
}
export interface DatasyncTaskExcludes {
    /**
    * The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#filter_type DatasyncTask#filter_type}
    */
    readonly filterType?: string;
    /**
    * A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|".
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#value DatasyncTask#value}
    */
    readonly value?: string;
}
export declare function datasyncTaskExcludesToTerraform(struct?: DatasyncTaskExcludes): any;
export interface DatasyncTaskOptions {
    /**
    * A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#atime DatasyncTask#atime}
    */
    readonly atime?: string;
    /**
    * A value that limits the bandwidth used by AWS DataSync.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#bytes_per_second DatasyncTask#bytes_per_second}
    */
    readonly bytesPerSecond?: number;
    /**
    * The group ID (GID) of the file's owners.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#gid DatasyncTask#gid}
    */
    readonly gid?: string;
    /**
    * A value that determines the types of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#log_level DatasyncTask#log_level}
    */
    readonly logLevel?: string;
    /**
    * A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#mtime DatasyncTask#mtime}
    */
    readonly mtime?: string;
    /**
    * A value that determines whether files at the destination should be overwritten or preserved when copying files.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#overwrite_mode DatasyncTask#overwrite_mode}
    */
    readonly overwriteMode?: string;
    /**
    * A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#posix_permissions DatasyncTask#posix_permissions}
    */
    readonly posixPermissions?: string;
    /**
    * A value that specifies whether files in the destination that don't exist in the source file system should be preserved.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#preserve_deleted_files DatasyncTask#preserve_deleted_files}
    */
    readonly preserveDeletedFiles?: string;
    /**
    * A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#preserve_devices DatasyncTask#preserve_devices}
    */
    readonly preserveDevices?: string;
    /**
    * A value that determines which components of the SMB security descriptor are copied during transfer.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#security_descriptor_copy_flags DatasyncTask#security_descriptor_copy_flags}
    */
    readonly securityDescriptorCopyFlags?: string;
    /**
    * A value that determines whether tasks should be queued before executing the tasks.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#task_queueing DatasyncTask#task_queueing}
    */
    readonly taskQueueing?: string;
    /**
    * A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#transfer_mode DatasyncTask#transfer_mode}
    */
    readonly transferMode?: string;
    /**
    * The user ID (UID) of the file's owner.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#uid DatasyncTask#uid}
    */
    readonly uid?: string;
    /**
    * A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#verify_mode DatasyncTask#verify_mode}
    */
    readonly verifyMode?: string;
}
export declare function datasyncTaskOptionsToTerraform(struct?: DatasyncTaskOptions): any;
export interface DatasyncTaskSchedule {
    /**
    * A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#schedule_expression DatasyncTask#schedule_expression}
    */
    readonly scheduleExpression: string;
}
export declare function datasyncTaskScheduleToTerraform(struct?: DatasyncTaskSchedule): any;
export interface DatasyncTaskTags {
    /**
    * The key for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#key DatasyncTask#key}
    */
    readonly key: string;
    /**
    * The value for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#value DatasyncTask#value}
    */
    readonly value: string;
}
export declare function datasyncTaskTagsToTerraform(struct?: DatasyncTaskTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html awscc_datasync_task}
*/
export declare class DatasyncTask extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html awscc_datasync_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncTaskConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncTaskConfig);
    private _cloudwatchLogGroupArn?;
    get cloudwatchLogGroupArn(): string;
    set cloudwatchLogGroupArn(value: string);
    resetCloudwatchLogGroupArn(): void;
    get cloudwatchLogGroupArnInput(): string | undefined;
    private _destinationLocationArn;
    get destinationLocationArn(): string;
    set destinationLocationArn(value: string);
    get destinationLocationArnInput(): string;
    get destinationNetworkInterfaceArns(): string[];
    get errorCode(): string;
    get errorDetail(): string;
    private _excludes?;
    get excludes(): DatasyncTaskExcludes[];
    set excludes(value: DatasyncTaskExcludes[]);
    resetExcludes(): void;
    get excludesInput(): DatasyncTaskExcludes[] | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _options?;
    get options(): DatasyncTaskOptions;
    set options(value: DatasyncTaskOptions);
    resetOptions(): void;
    get optionsInput(): DatasyncTaskOptions | undefined;
    private _schedule?;
    get schedule(): DatasyncTaskSchedule;
    set schedule(value: DatasyncTaskSchedule);
    resetSchedule(): void;
    get scheduleInput(): DatasyncTaskSchedule | undefined;
    private _sourceLocationArn;
    get sourceLocationArn(): string;
    set sourceLocationArn(value: string);
    get sourceLocationArnInput(): string;
    get sourceNetworkInterfaceArns(): string[];
    get status(): string;
    private _tags?;
    get tags(): DatasyncTaskTags[];
    set tags(value: DatasyncTaskTags[]);
    resetTags(): void;
    get tagsInput(): DatasyncTaskTags[] | undefined;
    get taskArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
