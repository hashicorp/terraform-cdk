// https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AthenaWorkGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The workgroup description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#description AthenaWorkGroup#description}
  */
  readonly description?: string;
  /**
  * The workGroup name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#name AthenaWorkGroup#name}
  */
  readonly name: string;
  /**
  * The option to delete the workgroup and its contents even if the workgroup contains any named queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#recursive_delete_option AthenaWorkGroup#recursive_delete_option}
  */
  readonly recursiveDeleteOption?: boolean | cdktf.IResolvable;
  /**
  * The state of the workgroup: ENABLED or DISABLED.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#state AthenaWorkGroup#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#tags AthenaWorkGroup#tags}
  */
  readonly tags?: AthenaWorkGroupTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#work_group_configuration AthenaWorkGroup#work_group_configuration}
  */
  readonly workGroupConfiguration?: AthenaWorkGroupWorkGroupConfiguration;
  /**
  * The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#work_group_configuration_updates AthenaWorkGroup#work_group_configuration_updates}
  */
  readonly workGroupConfigurationUpdates?: AthenaWorkGroupWorkGroupConfigurationUpdates;
}
export interface AthenaWorkGroupTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#key AthenaWorkGroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#value AthenaWorkGroup#value}
  */
  readonly value: string;
}

export function athenaWorkGroupTagsToTerraform(struct?: AthenaWorkGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AthenaWorkGroupWorkGroupConfigurationEngineVersion {
  /**
  * Read only. The engine version on which the query runs. If the user requests a valid engine version other than Auto, the effective engine version is the same as the engine version that the user requested. If the user requests Auto, the effective engine version is chosen by Athena. When a request to update the engine version is made by a CreateWorkGroup or UpdateWorkGroup operation, the EffectiveEngineVersion field is ignored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#effective_engine_version AthenaWorkGroup#effective_engine_version}
  */
  readonly effectiveEngineVersion: string;
  /**
  * The engine version requested by the user. Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#selected_engine_version AthenaWorkGroup#selected_engine_version}
  */
  readonly selectedEngineVersion?: string;
}

export function athenaWorkGroupWorkGroupConfigurationEngineVersionToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationEngineVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    effective_engine_version: cdktf.stringToTerraform(struct!.effectiveEngineVersion),
    selected_engine_version: cdktf.stringToTerraform(struct!.selectedEngineVersion),
  }
}

export interface AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration {
  /**
  * Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#encryption_option AthenaWorkGroup#encryption_option}
  */
  readonly encryptionOption: string;
  /**
  * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#kms_key AthenaWorkGroup#kms_key}
  */
  readonly kmsKey?: string;
}

export function athenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_option: cdktf.stringToTerraform(struct!.encryptionOption),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}

export interface AthenaWorkGroupWorkGroupConfigurationResultConfiguration {
  /**
  * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#encryption_configuration AthenaWorkGroup#encryption_configuration}
  */
  readonly encryptionConfiguration?: AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration;
  /**
  * The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#output_location AthenaWorkGroup#output_location}
  */
  readonly outputLocation?: string;
}

export function athenaWorkGroupWorkGroupConfigurationResultConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationResultConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_configuration: athenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    output_location: cdktf.stringToTerraform(struct!.outputLocation),
  }
}

export interface AthenaWorkGroupWorkGroupConfiguration {
  /**
  * The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#bytes_scanned_cutoff_per_query AthenaWorkGroup#bytes_scanned_cutoff_per_query}
  */
  readonly bytesScannedCutoffPerQuery?: number;
  /**
  * If set to "true", the settings for the workgroup override client-side settings. If set to "false", client-side settings are used
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#enforce_work_group_configuration AthenaWorkGroup#enforce_work_group_configuration}
  */
  readonly enforceWorkGroupConfiguration?: boolean | cdktf.IResolvable;
  /**
  * The Athena engine version for running queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#engine_version AthenaWorkGroup#engine_version}
  */
  readonly engineVersion?: AthenaWorkGroupWorkGroupConfigurationEngineVersion;
  /**
  * Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#publish_cloudwatch_metrics_enabled AthenaWorkGroup#publish_cloudwatch_metrics_enabled}
  */
  readonly publishCloudwatchMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#requester_pays_enabled AthenaWorkGroup#requester_pays_enabled}
  */
  readonly requesterPaysEnabled?: boolean | cdktf.IResolvable;
  /**
  * The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.

  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#result_configuration AthenaWorkGroup#result_configuration}
  */
  readonly resultConfiguration?: AthenaWorkGroupWorkGroupConfigurationResultConfiguration;
}

export function athenaWorkGroupWorkGroupConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bytes_scanned_cutoff_per_query: cdktf.numberToTerraform(struct!.bytesScannedCutoffPerQuery),
    enforce_work_group_configuration: cdktf.booleanToTerraform(struct!.enforceWorkGroupConfiguration),
    engine_version: athenaWorkGroupWorkGroupConfigurationEngineVersionToTerraform(struct!.engineVersion),
    publish_cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.publishCloudwatchMetricsEnabled),
    requester_pays_enabled: cdktf.booleanToTerraform(struct!.requesterPaysEnabled),
    result_configuration: athenaWorkGroupWorkGroupConfigurationResultConfigurationToTerraform(struct!.resultConfiguration),
  }
}

export interface AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion {
  /**
  * Read only. The engine version on which the query runs. If the user requests a valid engine version other than Auto, the effective engine version is the same as the engine version that the user requested. If the user requests Auto, the effective engine version is chosen by Athena. When a request to update the engine version is made by a CreateWorkGroup or UpdateWorkGroup operation, the EffectiveEngineVersion field is ignored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#effective_engine_version AthenaWorkGroup#effective_engine_version}
  */
  readonly effectiveEngineVersion: string;
  /**
  * The engine version requested by the user. Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#selected_engine_version AthenaWorkGroup#selected_engine_version}
  */
  readonly selectedEngineVersion?: string;
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    effective_engine_version: cdktf.stringToTerraform(struct!.effectiveEngineVersion),
    selected_engine_version: cdktf.stringToTerraform(struct!.selectedEngineVersion),
  }
}

export interface AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration {
  /**
  * Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#encryption_option AthenaWorkGroup#encryption_option}
  */
  readonly encryptionOption: string;
  /**
  * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#kms_key AthenaWorkGroup#kms_key}
  */
  readonly kmsKey?: string;
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_option: cdktf.stringToTerraform(struct!.encryptionOption),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}

export interface AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates {
  /**
  * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#encryption_configuration AthenaWorkGroup#encryption_configuration}
  */
  readonly encryptionConfiguration?: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration;
  /**
  * The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#output_location AthenaWorkGroup#output_location}
  */
  readonly outputLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#remove_encryption_configuration AthenaWorkGroup#remove_encryption_configuration}
  */
  readonly removeEncryptionConfiguration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#remove_output_location AthenaWorkGroup#remove_output_location}
  */
  readonly removeOutputLocation?: boolean | cdktf.IResolvable;
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_configuration: athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    output_location: cdktf.stringToTerraform(struct!.outputLocation),
    remove_encryption_configuration: cdktf.booleanToTerraform(struct!.removeEncryptionConfiguration),
    remove_output_location: cdktf.booleanToTerraform(struct!.removeOutputLocation),
  }
}

export interface AthenaWorkGroupWorkGroupConfigurationUpdates {
  /**
  * The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#bytes_scanned_cutoff_per_query AthenaWorkGroup#bytes_scanned_cutoff_per_query}
  */
  readonly bytesScannedCutoffPerQuery?: number;
  /**
  * If set to "true", the settings for the workgroup override client-side settings. If set to "false", client-side settings are used
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#enforce_work_group_configuration AthenaWorkGroup#enforce_work_group_configuration}
  */
  readonly enforceWorkGroupConfiguration?: boolean | cdktf.IResolvable;
  /**
  * The Athena engine version for running queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#engine_version AthenaWorkGroup#engine_version}
  */
  readonly engineVersion?: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion;
  /**
  * Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#publish_cloudwatch_metrics_enabled AthenaWorkGroup#publish_cloudwatch_metrics_enabled}
  */
  readonly publishCloudwatchMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates that the data usage control limit per query is removed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#remove_bytes_scanned_cutoff_per_query AthenaWorkGroup#remove_bytes_scanned_cutoff_per_query}
  */
  readonly removeBytesScannedCutoffPerQuery?: boolean | cdktf.IResolvable;
  /**
  * If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#requester_pays_enabled AthenaWorkGroup#requester_pays_enabled}
  */
  readonly requesterPaysEnabled?: boolean | cdktf.IResolvable;
  /**
  * The result configuration information about the queries in this workgroup that will be updated. Includes the updated results location and an updated option for encrypting query results. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html#result_configuration_updates AthenaWorkGroup#result_configuration_updates}
  */
  readonly resultConfigurationUpdates?: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates;
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdates): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bytes_scanned_cutoff_per_query: cdktf.numberToTerraform(struct!.bytesScannedCutoffPerQuery),
    enforce_work_group_configuration: cdktf.booleanToTerraform(struct!.enforceWorkGroupConfiguration),
    engine_version: athenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionToTerraform(struct!.engineVersion),
    publish_cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.publishCloudwatchMetricsEnabled),
    remove_bytes_scanned_cutoff_per_query: cdktf.booleanToTerraform(struct!.removeBytesScannedCutoffPerQuery),
    requester_pays_enabled: cdktf.booleanToTerraform(struct!.requesterPaysEnabled),
    result_configuration_updates: athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesToTerraform(struct!.resultConfigurationUpdates),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html awscc_athena_work_group}
*/
export class AthenaWorkGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_athena_work_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/athena_work_group.html awscc_athena_work_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AthenaWorkGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AthenaWorkGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_athena_work_group',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._recursiveDeleteOption = config.recursiveDeleteOption;
    this._state = config.state;
    this._tags = config.tags;
    this._workGroupConfiguration = config.workGroupConfiguration;
    this._workGroupConfigurationUpdates = config.workGroupConfigurationUpdates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // recursive_delete_option - computed: false, optional: true, required: false
  private _recursiveDeleteOption?: boolean | cdktf.IResolvable;
  public get recursiveDeleteOption() {
    return this.getBooleanAttribute('recursive_delete_option');
  }
  public set recursiveDeleteOption(value: boolean | cdktf.IResolvable ) {
    this._recursiveDeleteOption = value;
  }
  public resetRecursiveDeleteOption() {
    this._recursiveDeleteOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveDeleteOptionInput() {
    return this._recursiveDeleteOption
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string ) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: AthenaWorkGroupTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: AthenaWorkGroupTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // work_group_configuration - computed: false, optional: true, required: false
  private _workGroupConfiguration?: AthenaWorkGroupWorkGroupConfiguration;
  public get workGroupConfiguration() {
    return this.interpolationForAttribute('work_group_configuration') as any;
  }
  public set workGroupConfiguration(value: AthenaWorkGroupWorkGroupConfiguration ) {
    this._workGroupConfiguration = value;
  }
  public resetWorkGroupConfiguration() {
    this._workGroupConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupConfigurationInput() {
    return this._workGroupConfiguration
  }

  // work_group_configuration_updates - computed: false, optional: true, required: false
  private _workGroupConfigurationUpdates?: AthenaWorkGroupWorkGroupConfigurationUpdates;
  public get workGroupConfigurationUpdates() {
    return this.interpolationForAttribute('work_group_configuration_updates') as any;
  }
  public set workGroupConfigurationUpdates(value: AthenaWorkGroupWorkGroupConfigurationUpdates ) {
    this._workGroupConfigurationUpdates = value;
  }
  public resetWorkGroupConfigurationUpdates() {
    this._workGroupConfigurationUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupConfigurationUpdatesInput() {
    return this._workGroupConfigurationUpdates
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      recursive_delete_option: cdktf.booleanToTerraform(this._recursiveDeleteOption),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.listMapper(athenaWorkGroupTagsToTerraform)(this._tags),
      work_group_configuration: athenaWorkGroupWorkGroupConfigurationToTerraform(this._workGroupConfiguration),
      work_group_configuration_updates: athenaWorkGroupWorkGroupConfigurationUpdatesToTerraform(this._workGroupConfigurationUpdates),
    };
  }
}
