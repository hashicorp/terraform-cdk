// https://www.terraform.io/docs/providers/awscc/r/datasync_task.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function datasyncTaskExcludesToTerraform(struct?: DatasyncTaskExcludes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

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

export function datasyncTaskOptionsToTerraform(struct?: DatasyncTaskOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    atime: cdktf.stringToTerraform(struct!.atime),
    bytes_per_second: cdktf.numberToTerraform(struct!.bytesPerSecond),
    gid: cdktf.stringToTerraform(struct!.gid),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    mtime: cdktf.stringToTerraform(struct!.mtime),
    overwrite_mode: cdktf.stringToTerraform(struct!.overwriteMode),
    posix_permissions: cdktf.stringToTerraform(struct!.posixPermissions),
    preserve_deleted_files: cdktf.stringToTerraform(struct!.preserveDeletedFiles),
    preserve_devices: cdktf.stringToTerraform(struct!.preserveDevices),
    security_descriptor_copy_flags: cdktf.stringToTerraform(struct!.securityDescriptorCopyFlags),
    task_queueing: cdktf.stringToTerraform(struct!.taskQueueing),
    transfer_mode: cdktf.stringToTerraform(struct!.transferMode),
    uid: cdktf.stringToTerraform(struct!.uid),
    verify_mode: cdktf.stringToTerraform(struct!.verifyMode),
  }
}

export interface DatasyncTaskSchedule {
  /**
  * A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html#schedule_expression DatasyncTask#schedule_expression}
  */
  readonly scheduleExpression: string;
}

export function datasyncTaskScheduleToTerraform(struct?: DatasyncTaskSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
  }
}

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

export function datasyncTaskTagsToTerraform(struct?: DatasyncTaskTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html awscc_datasync_task}
*/
export class DatasyncTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_datasync_task";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/datasync_task.html awscc_datasync_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datasync_task',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
    this._destinationLocationArn = config.destinationLocationArn;
    this._excludes = config.excludes;
    this._name = config.name;
    this._options = config.options;
    this._schedule = config.schedule;
    this._sourceLocationArn = config.sourceLocationArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloudwatch_log_group_arn - computed: false, optional: true, required: false
  private _cloudwatchLogGroupArn?: string;
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }
  public set cloudwatchLogGroupArn(value: string ) {
    this._cloudwatchLogGroupArn = value;
  }
  public resetCloudwatchLogGroupArn() {
    this._cloudwatchLogGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogGroupArnInput() {
    return this._cloudwatchLogGroupArn
  }

  // destination_location_arn - computed: false, optional: false, required: true
  private _destinationLocationArn: string;
  public get destinationLocationArn() {
    return this.getStringAttribute('destination_location_arn');
  }
  public set destinationLocationArn(value: string) {
    this._destinationLocationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationLocationArnInput() {
    return this._destinationLocationArn
  }

  // destination_network_interface_arns - computed: true, optional: false, required: false
  public get destinationNetworkInterfaceArns() {
    return this.getListAttribute('destination_network_interface_arns');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // error_detail - computed: true, optional: false, required: false
  public get errorDetail() {
    return this.getStringAttribute('error_detail');
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: DatasyncTaskExcludes[];
  public get excludes() {
    return this.interpolationForAttribute('excludes') as any;
  }
  public set excludes(value: DatasyncTaskExcludes[] ) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // options - computed: false, optional: true, required: false
  private _options?: DatasyncTaskOptions;
  public get options() {
    return this.interpolationForAttribute('options') as any;
  }
  public set options(value: DatasyncTaskOptions ) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: DatasyncTaskSchedule;
  public get schedule() {
    return this.interpolationForAttribute('schedule') as any;
  }
  public set schedule(value: DatasyncTaskSchedule ) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // source_location_arn - computed: false, optional: false, required: true
  private _sourceLocationArn: string;
  public get sourceLocationArn() {
    return this.getStringAttribute('source_location_arn');
  }
  public set sourceLocationArn(value: string) {
    this._sourceLocationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationArnInput() {
    return this._sourceLocationArn
  }

  // source_network_interface_arns - computed: true, optional: false, required: false
  public get sourceNetworkInterfaceArns() {
    return this.getListAttribute('source_network_interface_arns');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: DatasyncTaskTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: DatasyncTaskTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // task_arn - computed: true, optional: false, required: false
  public get taskArn() {
    return this.getStringAttribute('task_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloudwatch_log_group_arn: cdktf.stringToTerraform(this._cloudwatchLogGroupArn),
      destination_location_arn: cdktf.stringToTerraform(this._destinationLocationArn),
      excludes: cdktf.listMapper(datasyncTaskExcludesToTerraform)(this._excludes),
      name: cdktf.stringToTerraform(this._name),
      options: datasyncTaskOptionsToTerraform(this._options),
      schedule: datasyncTaskScheduleToTerraform(this._schedule),
      source_location_arn: cdktf.stringToTerraform(this._sourceLocationArn),
      tags: cdktf.listMapper(datasyncTaskTagsToTerraform)(this._tags),
    };
  }
}
