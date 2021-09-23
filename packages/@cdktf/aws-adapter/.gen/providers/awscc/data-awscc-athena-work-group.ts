// https://www.terraform.io/docs/providers/awscc/d/athena_work_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccAthenaWorkGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/athena_work_group.html#id DataAwsccAthenaWorkGroup#id}
  */
  readonly id: string;
}
export class DataAwsccAthenaWorkGroupTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccAthenaWorkGroupTagsToTerraform(struct?: DataAwsccAthenaWorkGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion extends cdktf.ComplexComputedList {

  // effective_engine_version - computed: true, optional: false, required: false
  public get effectiveEngineVersion() {
    return this.getStringAttribute('effective_engine_version');
  }

  // selected_engine_version - computed: true, optional: false, required: false
  public get selectedEngineVersion() {
    return this.getStringAttribute('selected_engine_version');
  }
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    effective_engine_version: cdktf.stringToTerraform(struct!.effectiveEngineVersion),
    selected_engine_version: cdktf.stringToTerraform(struct!.selectedEngineVersion),
  }
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {

  // encryption_option - computed: true, optional: false, required: false
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_option: cdktf.stringToTerraform(struct!.encryptionOption),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration extends cdktf.ComplexComputedList {

  // encryption_configuration - computed: true, optional: false, required: false
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }

  // output_location - computed: true, optional: false, required: false
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_configuration: dataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    output_location: cdktf.stringToTerraform(struct!.outputLocation),
  }
}

export class DataAwsccAthenaWorkGroupWorkGroupConfiguration extends cdktf.ComplexComputedList {

  // bytes_scanned_cutoff_per_query - computed: true, optional: false, required: false
  public get bytesScannedCutoffPerQuery() {
    return this.getNumberAttribute('bytes_scanned_cutoff_per_query');
  }

  // enforce_work_group_configuration - computed: true, optional: false, required: false
  public get enforceWorkGroupConfiguration() {
    return this.getBooleanAttribute('enforce_work_group_configuration');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.interpolationForAttribute('engine_version') as any;
  }

  // publish_cloudwatch_metrics_enabled - computed: true, optional: false, required: false
  public get publishCloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('publish_cloudwatch_metrics_enabled');
  }

  // requester_pays_enabled - computed: true, optional: false, required: false
  public get requesterPaysEnabled() {
    return this.getBooleanAttribute('requester_pays_enabled');
  }

  // result_configuration - computed: true, optional: false, required: false
  public get resultConfiguration() {
    return this.interpolationForAttribute('result_configuration') as any;
  }
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bytes_scanned_cutoff_per_query: cdktf.numberToTerraform(struct!.bytesScannedCutoffPerQuery),
    enforce_work_group_configuration: cdktf.booleanToTerraform(struct!.enforceWorkGroupConfiguration),
    engine_version: dataAwsccAthenaWorkGroupWorkGroupConfigurationEngineVersionToTerraform(struct!.engineVersion),
    publish_cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.publishCloudwatchMetricsEnabled),
    requester_pays_enabled: cdktf.booleanToTerraform(struct!.requesterPaysEnabled),
    result_configuration: dataAwsccAthenaWorkGroupWorkGroupConfigurationResultConfigurationToTerraform(struct!.resultConfiguration),
  }
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion extends cdktf.ComplexComputedList {

  // effective_engine_version - computed: true, optional: false, required: false
  public get effectiveEngineVersion() {
    return this.getStringAttribute('effective_engine_version');
  }

  // selected_engine_version - computed: true, optional: false, required: false
  public get selectedEngineVersion() {
    return this.getStringAttribute('selected_engine_version');
  }
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    effective_engine_version: cdktf.stringToTerraform(struct!.effectiveEngineVersion),
    selected_engine_version: cdktf.stringToTerraform(struct!.selectedEngineVersion),
  }
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration extends cdktf.ComplexComputedList {

  // encryption_option - computed: true, optional: false, required: false
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_option: cdktf.stringToTerraform(struct!.encryptionOption),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates extends cdktf.ComplexComputedList {

  // encryption_configuration - computed: true, optional: false, required: false
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }

  // output_location - computed: true, optional: false, required: false
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }

  // remove_encryption_configuration - computed: true, optional: false, required: false
  public get removeEncryptionConfiguration() {
    return this.getBooleanAttribute('remove_encryption_configuration');
  }

  // remove_output_location - computed: true, optional: false, required: false
  public get removeOutputLocation() {
    return this.getBooleanAttribute('remove_output_location');
  }
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_configuration: dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    output_location: cdktf.stringToTerraform(struct!.outputLocation),
    remove_encryption_configuration: cdktf.booleanToTerraform(struct!.removeEncryptionConfiguration),
    remove_output_location: cdktf.booleanToTerraform(struct!.removeOutputLocation),
  }
}

export class DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates extends cdktf.ComplexComputedList {

  // bytes_scanned_cutoff_per_query - computed: true, optional: false, required: false
  public get bytesScannedCutoffPerQuery() {
    return this.getNumberAttribute('bytes_scanned_cutoff_per_query');
  }

  // enforce_work_group_configuration - computed: true, optional: false, required: false
  public get enforceWorkGroupConfiguration() {
    return this.getBooleanAttribute('enforce_work_group_configuration');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.interpolationForAttribute('engine_version') as any;
  }

  // publish_cloudwatch_metrics_enabled - computed: true, optional: false, required: false
  public get publishCloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('publish_cloudwatch_metrics_enabled');
  }

  // remove_bytes_scanned_cutoff_per_query - computed: true, optional: false, required: false
  public get removeBytesScannedCutoffPerQuery() {
    return this.getBooleanAttribute('remove_bytes_scanned_cutoff_per_query');
  }

  // requester_pays_enabled - computed: true, optional: false, required: false
  public get requesterPaysEnabled() {
    return this.getBooleanAttribute('requester_pays_enabled');
  }

  // result_configuration_updates - computed: true, optional: false, required: false
  public get resultConfigurationUpdates() {
    return this.interpolationForAttribute('result_configuration_updates') as any;
  }
}

export function dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesToTerraform(struct?: DataAwsccAthenaWorkGroupWorkGroupConfigurationUpdates): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bytes_scanned_cutoff_per_query: cdktf.numberToTerraform(struct!.bytesScannedCutoffPerQuery),
    enforce_work_group_configuration: cdktf.booleanToTerraform(struct!.enforceWorkGroupConfiguration),
    engine_version: dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionToTerraform(struct!.engineVersion),
    publish_cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.publishCloudwatchMetricsEnabled),
    remove_bytes_scanned_cutoff_per_query: cdktf.booleanToTerraform(struct!.removeBytesScannedCutoffPerQuery),
    requester_pays_enabled: cdktf.booleanToTerraform(struct!.requesterPaysEnabled),
    result_configuration_updates: dataAwsccAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesToTerraform(struct!.resultConfigurationUpdates),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/athena_work_group.html awscc_athena_work_group}
*/
export class DataAwsccAthenaWorkGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_athena_work_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/athena_work_group.html awscc_athena_work_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAthenaWorkGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAthenaWorkGroupConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // recursive_delete_option - computed: true, optional: false, required: false
  public get recursiveDeleteOption() {
    return this.getBooleanAttribute('recursive_delete_option');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // work_group_configuration - computed: true, optional: false, required: false
  public get workGroupConfiguration() {
    return this.interpolationForAttribute('work_group_configuration') as any;
  }

  // work_group_configuration_updates - computed: true, optional: false, required: false
  public get workGroupConfigurationUpdates() {
    return this.interpolationForAttribute('work_group_configuration_updates') as any;
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
