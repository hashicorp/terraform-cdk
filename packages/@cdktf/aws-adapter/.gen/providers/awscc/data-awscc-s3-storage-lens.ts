// https://www.terraform.io/docs/providers/awscc/d/s3_storage_lens.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccS3StorageLensConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/s3_storage_lens.html#id DataAwsccS3StorageLens#id}
  */
  readonly id: string;
}
export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics extends cdktf.ComplexComputedList {

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics extends cdktf.ComplexComputedList {

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria extends cdktf.ComplexComputedList {

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // max_depth - computed: true, optional: false, required: false
  public get maxDepth() {
    return this.getNumberAttribute('max_depth');
  }

  // min_storage_bytes_percentage - computed: true, optional: false, required: false
  public get minStorageBytesPercentage() {
    return this.getNumberAttribute('min_storage_bytes_percentage');
  }
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    max_depth: cdktf.numberToTerraform(struct!.maxDepth),
    min_storage_bytes_percentage: cdktf.numberToTerraform(struct!.minStorageBytesPercentage),
  }
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics extends cdktf.ComplexComputedList {

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // selection_criteria - computed: true, optional: false, required: false
  public get selectionCriteria() {
    return this.interpolationForAttribute('selection_criteria') as any;
  }
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    selection_criteria: dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToTerraform(struct!.selectionCriteria),
  }
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel extends cdktf.ComplexComputedList {

  // storage_metrics - computed: true, optional: false, required: false
  public get storageMetrics() {
    return this.interpolationForAttribute('storage_metrics') as any;
  }
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    storage_metrics: dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToTerraform(struct!.storageMetrics),
  }
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel extends cdktf.ComplexComputedList {

  // activity_metrics - computed: true, optional: false, required: false
  public get activityMetrics() {
    return this.interpolationForAttribute('activity_metrics') as any;
  }

  // prefix_level - computed: true, optional: false, required: false
  public get prefixLevel() {
    return this.interpolationForAttribute('prefix_level') as any;
  }
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    activity_metrics: dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToTerraform(struct!.activityMetrics),
    prefix_level: dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToTerraform(struct!.prefixLevel),
  }
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevel extends cdktf.ComplexComputedList {

  // activity_metrics - computed: true, optional: false, required: false
  public get activityMetrics() {
    return this.interpolationForAttribute('activity_metrics') as any;
  }

  // bucket_level - computed: true, optional: false, required: false
  public get bucketLevel() {
    return this.interpolationForAttribute('bucket_level') as any;
  }
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    activity_metrics: dataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsToTerraform(struct!.activityMetrics),
    bucket_level: dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelToTerraform(struct!.bucketLevel),
  }
}

export class DataAwsccS3StorageLensStorageLensConfigurationAwsOrg extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}

export function dataAwsccS3StorageLensStorageLensConfigurationAwsOrgToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAwsOrg): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export class DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination extends cdktf.ComplexComputedList {

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.interpolationForAttribute('encryption') as any;
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // output_schema_version - computed: true, optional: false, required: false
  public get outputSchemaVersion() {
    return this.getStringAttribute('output_schema_version');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export function dataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    arn: cdktf.stringToTerraform(struct!.arn),
    encryption: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.encryption),
    format: cdktf.stringToTerraform(struct!.format),
    output_schema_version: cdktf.stringToTerraform(struct!.outputSchemaVersion),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export class DataAwsccS3StorageLensStorageLensConfigurationDataExport extends cdktf.ComplexComputedList {

  // s3_bucket_destination - computed: true, optional: false, required: false
  public get s3BucketDestination() {
    return this.interpolationForAttribute('s3_bucket_destination') as any;
  }
}

export function dataAwsccS3StorageLensStorageLensConfigurationDataExportToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExport): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_bucket_destination: dataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationToTerraform(struct!.s3BucketDestination),
  }
}

export class DataAwsccS3StorageLensStorageLensConfigurationExclude extends cdktf.ComplexComputedList {

  // buckets - computed: true, optional: false, required: false
  public get buckets() {
    return this.getListAttribute('buckets');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getListAttribute('regions');
  }
}

export function dataAwsccS3StorageLensStorageLensConfigurationExcludeToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExclude): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    buckets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.buckets),
    regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
  }
}

export class DataAwsccS3StorageLensStorageLensConfigurationInclude extends cdktf.ComplexComputedList {

  // buckets - computed: true, optional: false, required: false
  public get buckets() {
    return this.getListAttribute('buckets');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getListAttribute('regions');
  }
}

export function dataAwsccS3StorageLensStorageLensConfigurationIncludeToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationInclude): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    buckets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.buckets),
    regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
  }
}

export class DataAwsccS3StorageLensStorageLensConfiguration extends cdktf.ComplexComputedList {

  // account_level - computed: true, optional: false, required: false
  public get accountLevel() {
    return this.interpolationForAttribute('account_level') as any;
  }

  // aws_org - computed: true, optional: false, required: false
  public get awsOrg() {
    return this.interpolationForAttribute('aws_org') as any;
  }

  // data_export - computed: true, optional: false, required: false
  public get dataExport() {
    return this.interpolationForAttribute('data_export') as any;
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return this.interpolationForAttribute('exclude') as any;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.interpolationForAttribute('include') as any;
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // storage_lens_arn - computed: true, optional: false, required: false
  public get storageLensArn() {
    return this.getStringAttribute('storage_lens_arn');
  }
}

export function dataAwsccS3StorageLensStorageLensConfigurationToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account_level: dataAwsccS3StorageLensStorageLensConfigurationAccountLevelToTerraform(struct!.accountLevel),
    aws_org: dataAwsccS3StorageLensStorageLensConfigurationAwsOrgToTerraform(struct!.awsOrg),
    data_export: dataAwsccS3StorageLensStorageLensConfigurationDataExportToTerraform(struct!.dataExport),
    exclude: dataAwsccS3StorageLensStorageLensConfigurationExcludeToTerraform(struct!.exclude),
    id: cdktf.stringToTerraform(struct!.id),
    include: dataAwsccS3StorageLensStorageLensConfigurationIncludeToTerraform(struct!.include),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    storage_lens_arn: cdktf.stringToTerraform(struct!.storageLensArn),
  }
}

export class DataAwsccS3StorageLensTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccS3StorageLensTagsToTerraform(struct?: DataAwsccS3StorageLensTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3_storage_lens.html awscc_s3_storage_lens}
*/
export class DataAwsccS3StorageLens extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_s3_storage_lens";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3_storage_lens.html awscc_s3_storage_lens} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccS3StorageLensConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccS3StorageLensConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3_storage_lens',
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

  // storage_lens_configuration - computed: true, optional: false, required: false
  public get storageLensConfiguration() {
    return this.interpolationForAttribute('storage_lens_configuration') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
