// https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EfsFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#availability_zone_name EfsFileSystem#availability_zone_name}
  */
  readonly availabilityZoneName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#backup_policy EfsFileSystem#backup_policy}
  */
  readonly backupPolicy?: EfsFileSystemBackupPolicy;
  /**
  * Whether to bypass the FileSystemPolicy lockout safety check. The policy lockout safety check determines whether the policy in the request will prevent the principal making the request to be locked out from making future PutFileSystemPolicy requests on the file system. Set BypassPolicyLockoutSafetyCheck to True only when you intend to prevent the principal that is making the request from making a subsequent PutFileSystemPolicy request on the file system. Defaults to false
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#bypass_policy_lockout_safety_check EfsFileSystem#bypass_policy_lockout_safety_check}
  */
  readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#encrypted EfsFileSystem#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#file_system_policy EfsFileSystem#file_system_policy}
  */
  readonly fileSystemPolicy?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#file_system_tags EfsFileSystem#file_system_tags}
  */
  readonly fileSystemTags?: EfsFileSystemFileSystemTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#kms_key_id EfsFileSystem#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#lifecycle_policies EfsFileSystem#lifecycle_policies}
  */
  readonly lifecyclePolicies?: EfsFileSystemLifecyclePolicies[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#performance_mode EfsFileSystem#performance_mode}
  */
  readonly performanceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}
  */
  readonly provisionedThroughputInMibps?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#throughput_mode EfsFileSystem#throughput_mode}
  */
  readonly throughputMode?: string;
}
export interface EfsFileSystemBackupPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#status EfsFileSystem#status}
  */
  readonly status: string;
}

export function efsFileSystemBackupPolicyToTerraform(struct?: EfsFileSystemBackupPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export interface EfsFileSystemFileSystemTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#key EfsFileSystem#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#value EfsFileSystem#value}
  */
  readonly value: string;
}

export function efsFileSystemFileSystemTagsToTerraform(struct?: EfsFileSystemFileSystemTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface EfsFileSystemLifecyclePolicies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html#transition_to_ia EfsFileSystem#transition_to_ia}
  */
  readonly transitionToIa: string;
}

export function efsFileSystemLifecyclePoliciesToTerraform(struct?: EfsFileSystemLifecyclePolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    transition_to_ia: cdktf.stringToTerraform(struct!.transitionToIa),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html awscc_efs_file_system}
*/
export class EfsFileSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_efs_file_system";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/efs_file_system.html awscc_efs_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EfsFileSystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EfsFileSystemConfig = {}) {
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
    this._availabilityZoneName = config.availabilityZoneName;
    this._backupPolicy = config.backupPolicy;
    this._bypassPolicyLockoutSafetyCheck = config.bypassPolicyLockoutSafetyCheck;
    this._encrypted = config.encrypted;
    this._fileSystemPolicy = config.fileSystemPolicy;
    this._fileSystemTags = config.fileSystemTags;
    this._kmsKeyId = config.kmsKeyId;
    this._lifecyclePolicies = config.lifecyclePolicies;
    this._performanceMode = config.performanceMode;
    this._provisionedThroughputInMibps = config.provisionedThroughputInMibps;
    this._throughputMode = config.throughputMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone_name - computed: true, optional: true, required: false
  private _availabilityZoneName?: string;
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }
  public set availabilityZoneName(value: string) {
    this._availabilityZoneName = value;
  }
  public resetAvailabilityZoneName() {
    this._availabilityZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneNameInput() {
    return this._availabilityZoneName
  }

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy?: EfsFileSystemBackupPolicy;
  public get backupPolicy() {
    return this.interpolationForAttribute('backup_policy') as any;
  }
  public set backupPolicy(value: EfsFileSystemBackupPolicy ) {
    this._backupPolicy = value;
  }
  public resetBackupPolicy() {
    this._backupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyInput() {
    return this._backupPolicy
  }

  // bypass_policy_lockout_safety_check - computed: false, optional: true, required: false
  private _bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
  public get bypassPolicyLockoutSafetyCheck() {
    return this.getBooleanAttribute('bypass_policy_lockout_safety_check');
  }
  public set bypassPolicyLockoutSafetyCheck(value: boolean | cdktf.IResolvable ) {
    this._bypassPolicyLockoutSafetyCheck = value;
  }
  public resetBypassPolicyLockoutSafetyCheck() {
    this._bypassPolicyLockoutSafetyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassPolicyLockoutSafetyCheckInput() {
    return this._bypassPolicyLockoutSafetyCheck
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable;
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // file_system_policy - computed: false, optional: true, required: false
  private _fileSystemPolicy?: { [key: string]: string } | cdktf.IResolvable;
  public get fileSystemPolicy() {
    return this.interpolationForAttribute('file_system_policy') as any;
  }
  public set fileSystemPolicy(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._fileSystemPolicy = value;
  }
  public resetFileSystemPolicy() {
    this._fileSystemPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemPolicyInput() {
    return this._fileSystemPolicy
  }

  // file_system_tags - computed: false, optional: true, required: false
  private _fileSystemTags?: EfsFileSystemFileSystemTags[];
  public get fileSystemTags() {
    return this.interpolationForAttribute('file_system_tags') as any;
  }
  public set fileSystemTags(value: EfsFileSystemFileSystemTags[] ) {
    this._fileSystemTags = value;
  }
  public resetFileSystemTags() {
    this._fileSystemTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTagsInput() {
    return this._fileSystemTags
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // lifecycle_policies - computed: false, optional: true, required: false
  private _lifecyclePolicies?: EfsFileSystemLifecyclePolicies[];
  public get lifecyclePolicies() {
    return this.interpolationForAttribute('lifecycle_policies') as any;
  }
  public set lifecyclePolicies(value: EfsFileSystemLifecyclePolicies[] ) {
    this._lifecyclePolicies = value;
  }
  public resetLifecyclePolicies() {
    this._lifecyclePolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecyclePoliciesInput() {
    return this._lifecyclePolicies
  }

  // performance_mode - computed: true, optional: true, required: false
  private _performanceMode?: string;
  public get performanceMode() {
    return this.getStringAttribute('performance_mode');
  }
  public set performanceMode(value: string) {
    this._performanceMode = value;
  }
  public resetPerformanceMode() {
    this._performanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceModeInput() {
    return this._performanceMode
  }

  // provisioned_throughput_in_mibps - computed: false, optional: true, required: false
  private _provisionedThroughputInMibps?: number;
  public get provisionedThroughputInMibps() {
    return this.getNumberAttribute('provisioned_throughput_in_mibps');
  }
  public set provisionedThroughputInMibps(value: number ) {
    this._provisionedThroughputInMibps = value;
  }
  public resetProvisionedThroughputInMibps() {
    this._provisionedThroughputInMibps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputInMibpsInput() {
    return this._provisionedThroughputInMibps
  }

  // throughput_mode - computed: false, optional: true, required: false
  private _throughputMode?: string;
  public get throughputMode() {
    return this.getStringAttribute('throughput_mode');
  }
  public set throughputMode(value: string ) {
    this._throughputMode = value;
  }
  public resetThroughputMode() {
    this._throughputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputModeInput() {
    return this._throughputMode
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone_name: cdktf.stringToTerraform(this._availabilityZoneName),
      backup_policy: efsFileSystemBackupPolicyToTerraform(this._backupPolicy),
      bypass_policy_lockout_safety_check: cdktf.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      file_system_policy: cdktf.hashMapper(cdktf.anyToTerraform)(this._fileSystemPolicy),
      file_system_tags: cdktf.listMapper(efsFileSystemFileSystemTagsToTerraform)(this._fileSystemTags),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      lifecycle_policies: cdktf.listMapper(efsFileSystemLifecyclePoliciesToTerraform)(this._lifecyclePolicies),
      performance_mode: cdktf.stringToTerraform(this._performanceMode),
      provisioned_throughput_in_mibps: cdktf.numberToTerraform(this._provisionedThroughputInMibps),
      throughput_mode: cdktf.stringToTerraform(this._throughputMode),
    };
  }
}
