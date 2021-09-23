// https://www.terraform.io/docs/providers/awscc/d/sagemaker_feature_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSagemakerFeatureGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_feature_group.html#id DataAwsccSagemakerFeatureGroup#id}
  */
  readonly id: string;
}
export class DataAwsccSagemakerFeatureGroupFeatureDefinitions extends cdktf.ComplexComputedList {

  // feature_name - computed: true, optional: false, required: false
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }

  // feature_type - computed: true, optional: false, required: false
  public get featureType() {
    return this.getStringAttribute('feature_type');
  }
}

export function dataAwsccSagemakerFeatureGroupFeatureDefinitionsToTerraform(struct?: DataAwsccSagemakerFeatureGroupFeatureDefinitions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    feature_name: cdktf.stringToTerraform(struct!.featureName),
    feature_type: cdktf.stringToTerraform(struct!.featureType),
  }
}

export class DataAwsccSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig extends cdktf.ComplexComputedList {

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export function dataAwsccSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct?: DataAwsccSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    database: cdktf.stringToTerraform(struct!.database),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class DataAwsccSagemakerFeatureGroupOfflineStoreConfigS3StorageConfig extends cdktf.ComplexComputedList {

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}

export function dataAwsccSagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct?: DataAwsccSagemakerFeatureGroupOfflineStoreConfigS3StorageConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export class DataAwsccSagemakerFeatureGroupOfflineStoreConfig extends cdktf.ComplexComputedList {

  // data_catalog_config - computed: true, optional: false, required: false
  public get dataCatalogConfig() {
    return this.interpolationForAttribute('data_catalog_config') as any;
  }

  // disable_glue_table_creation - computed: true, optional: false, required: false
  public get disableGlueTableCreation() {
    return this.getBooleanAttribute('disable_glue_table_creation');
  }

  // s3_storage_config - computed: true, optional: false, required: false
  public get s3StorageConfig() {
    return this.interpolationForAttribute('s3_storage_config') as any;
  }
}

export function dataAwsccSagemakerFeatureGroupOfflineStoreConfigToTerraform(struct?: DataAwsccSagemakerFeatureGroupOfflineStoreConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_catalog_config: dataAwsccSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct!.dataCatalogConfig),
    disable_glue_table_creation: cdktf.booleanToTerraform(struct!.disableGlueTableCreation),
    s3_storage_config: dataAwsccSagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct!.s3StorageConfig),
  }
}

export class DataAwsccSagemakerFeatureGroupOnlineStoreConfigSecurityConfig extends cdktf.ComplexComputedList {

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}

export function dataAwsccSagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct?: DataAwsccSagemakerFeatureGroupOnlineStoreConfigSecurityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}

export class DataAwsccSagemakerFeatureGroupOnlineStoreConfig extends cdktf.ComplexComputedList {

  // enable_online_store - computed: true, optional: false, required: false
  public get enableOnlineStore() {
    return this.getBooleanAttribute('enable_online_store');
  }

  // security_config - computed: true, optional: false, required: false
  public get securityConfig() {
    return this.interpolationForAttribute('security_config') as any;
  }
}

export function dataAwsccSagemakerFeatureGroupOnlineStoreConfigToTerraform(struct?: DataAwsccSagemakerFeatureGroupOnlineStoreConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_online_store: cdktf.booleanToTerraform(struct!.enableOnlineStore),
    security_config: dataAwsccSagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct!.securityConfig),
  }
}

export class DataAwsccSagemakerFeatureGroupTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccSagemakerFeatureGroupTagsToTerraform(struct?: DataAwsccSagemakerFeatureGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_feature_group.html awscc_sagemaker_feature_group}
*/
export class DataAwsccSagemakerFeatureGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_feature_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_feature_group.html awscc_sagemaker_feature_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerFeatureGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerFeatureGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_feature_group',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // event_time_feature_name - computed: true, optional: false, required: false
  public get eventTimeFeatureName() {
    return this.getStringAttribute('event_time_feature_name');
  }

  // feature_definitions - computed: true, optional: false, required: false
  public get featureDefinitions() {
    return this.interpolationForAttribute('feature_definitions') as any;
  }

  // feature_group_name - computed: true, optional: false, required: false
  public get featureGroupName() {
    return this.getStringAttribute('feature_group_name');
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

  // offline_store_config - computed: true, optional: false, required: false
  public get offlineStoreConfig() {
    return this.interpolationForAttribute('offline_store_config') as any;
  }

  // online_store_config - computed: true, optional: false, required: false
  public get onlineStoreConfig() {
    return this.interpolationForAttribute('online_store_config') as any;
  }

  // record_identifier_feature_name - computed: true, optional: false, required: false
  public get recordIdentifierFeatureName() {
    return this.getStringAttribute('record_identifier_feature_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
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
