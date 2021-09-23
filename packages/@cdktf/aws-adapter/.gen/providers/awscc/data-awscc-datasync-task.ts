// https://www.terraform.io/docs/providers/awscc/d/datasync_task.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccDatasyncTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/datasync_task.html#id DataAwsccDatasyncTask#id}
  */
  readonly id: string;
}
export class DataAwsccDatasyncTaskExcludes extends cdktf.ComplexComputedList {

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccDatasyncTaskExcludesToTerraform(struct?: DataAwsccDatasyncTaskExcludes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccDatasyncTaskOptions extends cdktf.ComplexComputedList {

  // atime - computed: true, optional: false, required: false
  public get atime() {
    return this.getStringAttribute('atime');
  }

  // bytes_per_second - computed: true, optional: false, required: false
  public get bytesPerSecond() {
    return this.getNumberAttribute('bytes_per_second');
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getStringAttribute('gid');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }

  // mtime - computed: true, optional: false, required: false
  public get mtime() {
    return this.getStringAttribute('mtime');
  }

  // overwrite_mode - computed: true, optional: false, required: false
  public get overwriteMode() {
    return this.getStringAttribute('overwrite_mode');
  }

  // posix_permissions - computed: true, optional: false, required: false
  public get posixPermissions() {
    return this.getStringAttribute('posix_permissions');
  }

  // preserve_deleted_files - computed: true, optional: false, required: false
  public get preserveDeletedFiles() {
    return this.getStringAttribute('preserve_deleted_files');
  }

  // preserve_devices - computed: true, optional: false, required: false
  public get preserveDevices() {
    return this.getStringAttribute('preserve_devices');
  }

  // security_descriptor_copy_flags - computed: true, optional: false, required: false
  public get securityDescriptorCopyFlags() {
    return this.getStringAttribute('security_descriptor_copy_flags');
  }

  // task_queueing - computed: true, optional: false, required: false
  public get taskQueueing() {
    return this.getStringAttribute('task_queueing');
  }

  // transfer_mode - computed: true, optional: false, required: false
  public get transferMode() {
    return this.getStringAttribute('transfer_mode');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // verify_mode - computed: true, optional: false, required: false
  public get verifyMode() {
    return this.getStringAttribute('verify_mode');
  }
}

export function dataAwsccDatasyncTaskOptionsToTerraform(struct?: DataAwsccDatasyncTaskOptions): any {
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

export class DataAwsccDatasyncTaskSchedule extends cdktf.ComplexComputedList {

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
}

export function dataAwsccDatasyncTaskScheduleToTerraform(struct?: DataAwsccDatasyncTaskSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
  }
}

export class DataAwsccDatasyncTaskTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccDatasyncTaskTagsToTerraform(struct?: DataAwsccDatasyncTaskTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_task.html awscc_datasync_task}
*/
export class DataAwsccDatasyncTask extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_datasync_task";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_task.html awscc_datasync_task} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatasyncTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatasyncTaskConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloudwatch_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }

  // destination_location_arn - computed: true, optional: false, required: false
  public get destinationLocationArn() {
    return this.getStringAttribute('destination_location_arn');
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

  // excludes - computed: true, optional: false, required: false
  public get excludes() {
    return this.interpolationForAttribute('excludes') as any;
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.interpolationForAttribute('options') as any;
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.interpolationForAttribute('schedule') as any;
  }

  // source_location_arn - computed: true, optional: false, required: false
  public get sourceLocationArn() {
    return this.getStringAttribute('source_location_arn');
  }

  // source_network_interface_arns - computed: true, optional: false, required: false
  public get sourceNetworkInterfaceArns() {
    return this.getListAttribute('source_network_interface_arns');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
