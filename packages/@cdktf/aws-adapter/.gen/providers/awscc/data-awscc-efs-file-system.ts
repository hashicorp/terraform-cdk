// https://www.terraform.io/docs/providers/awscc/d/efs_file_system.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEfsFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/efs_file_system.html#id DataAwsccEfsFileSystem#id}
  */
  readonly id: string;
}
export class DataAwsccEfsFileSystemBackupPolicy extends cdktf.ComplexComputedList {

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export function dataAwsccEfsFileSystemBackupPolicyToTerraform(struct?: DataAwsccEfsFileSystemBackupPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export class DataAwsccEfsFileSystemFileSystemTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEfsFileSystemFileSystemTagsToTerraform(struct?: DataAwsccEfsFileSystemFileSystemTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccEfsFileSystemLifecyclePolicies extends cdktf.ComplexComputedList {

  // transition_to_ia - computed: true, optional: false, required: false
  public get transitionToIa() {
    return this.getStringAttribute('transition_to_ia');
  }
}

export function dataAwsccEfsFileSystemLifecyclePoliciesToTerraform(struct?: DataAwsccEfsFileSystemLifecyclePolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    transition_to_ia: cdktf.stringToTerraform(struct!.transitionToIa),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/efs_file_system.html awscc_efs_file_system}
*/
export class DataAwsccEfsFileSystem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_efs_file_system";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/efs_file_system.html awscc_efs_file_system} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEfsFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEfsFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_efs_file_system',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone_name - computed: true, optional: false, required: false
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }

  // backup_policy - computed: true, optional: false, required: false
  public get backupPolicy() {
    return this.interpolationForAttribute('backup_policy') as any;
  }

  // bypass_policy_lockout_safety_check - computed: true, optional: false, required: false
  public get bypassPolicyLockoutSafetyCheck() {
    return this.getBooleanAttribute('bypass_policy_lockout_safety_check');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // file_system_policy - computed: true, optional: false, required: false
  public fileSystemPolicy(key: string): string {
    return new cdktf.StringMap(this, 'file_system_policy').lookup(key);
  }

  // file_system_tags - computed: true, optional: false, required: false
  public get fileSystemTags() {
    return this.interpolationForAttribute('file_system_tags') as any;
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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // lifecycle_policies - computed: true, optional: false, required: false
  public get lifecyclePolicies() {
    return this.interpolationForAttribute('lifecycle_policies') as any;
  }

  // performance_mode - computed: true, optional: false, required: false
  public get performanceMode() {
    return this.getStringAttribute('performance_mode');
  }

  // provisioned_throughput_in_mibps - computed: true, optional: false, required: false
  public get provisionedThroughputInMibps() {
    return this.getNumberAttribute('provisioned_throughput_in_mibps');
  }

  // throughput_mode - computed: true, optional: false, required: false
  public get throughputMode() {
    return this.getStringAttribute('throughput_mode');
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
