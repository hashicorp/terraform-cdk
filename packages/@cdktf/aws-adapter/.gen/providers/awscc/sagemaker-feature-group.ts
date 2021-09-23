// https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerFeatureGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description about the FeatureGroup.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#description SagemakerFeatureGroup#description}
  */
  readonly description?: string;
  /**
  * The Event Time Feature Name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}
  */
  readonly eventTimeFeatureName: string;
  /**
  * An Array of Feature Definition
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#feature_definitions SagemakerFeatureGroup#feature_definitions}
  */
  readonly featureDefinitions: SagemakerFeatureGroupFeatureDefinitions[];
  /**
  * The Name of the FeatureGroup.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#feature_group_name SagemakerFeatureGroup#feature_group_name}
  */
  readonly featureGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#offline_store_config SagemakerFeatureGroup#offline_store_config}
  */
  readonly offlineStoreConfig?: SagemakerFeatureGroupOfflineStoreConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#online_store_config SagemakerFeatureGroup#online_store_config}
  */
  readonly onlineStoreConfig?: SagemakerFeatureGroupOnlineStoreConfig;
  /**
  * The Record Identifier Feature Name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}
  */
  readonly recordIdentifierFeatureName: string;
  /**
  * Role Arn
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#role_arn SagemakerFeatureGroup#role_arn}
  */
  readonly roleArn?: string;
  /**
  * An array of key-value pair to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#tags SagemakerFeatureGroup#tags}
  */
  readonly tags?: SagemakerFeatureGroupTags[];
}
export interface SagemakerFeatureGroupFeatureDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#feature_name SagemakerFeatureGroup#feature_name}
  */
  readonly featureName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#feature_type SagemakerFeatureGroup#feature_type}
  */
  readonly featureType: string;
}

export function sagemakerFeatureGroupFeatureDefinitionsToTerraform(struct?: SagemakerFeatureGroupFeatureDefinitions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    feature_name: cdktf.stringToTerraform(struct!.featureName),
    feature_type: cdktf.stringToTerraform(struct!.featureType),
  }
}

export interface SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#catalog SagemakerFeatureGroup#catalog}
  */
  readonly catalog: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#database SagemakerFeatureGroup#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#table_name SagemakerFeatureGroup#table_name}
  */
  readonly tableName: string;
}

export function sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    database: cdktf.stringToTerraform(struct!.database),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig extends cdktf.ComplexComputedList {

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

  // s3_uri - computed: true, optional: false, required: true
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}

export function sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export interface SagemakerFeatureGroupOfflineStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#data_catalog_config SagemakerFeatureGroup#data_catalog_config}
  */
  readonly dataCatalogConfig?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}
  */
  readonly disableGlueTableCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#s3_storage_config SagemakerFeatureGroup#s3_storage_config}
  */
  readonly s3StorageConfig: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig;
}

export function sagemakerFeatureGroupOfflineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_catalog_config: sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct!.dataCatalogConfig),
    disable_glue_table_creation: cdktf.booleanToTerraform(struct!.disableGlueTableCreation),
    s3_storage_config: sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct!.s3StorageConfig),
  }
}

export interface SagemakerFeatureGroupOnlineStoreConfigSecurityConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#kms_key_id SagemakerFeatureGroup#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}

export interface SagemakerFeatureGroupOnlineStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#enable_online_store SagemakerFeatureGroup#enable_online_store}
  */
  readonly enableOnlineStore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#security_config SagemakerFeatureGroup#security_config}
  */
  readonly securityConfig?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig;
}

export function sagemakerFeatureGroupOnlineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_online_store: cdktf.booleanToTerraform(struct!.enableOnlineStore),
    security_config: sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct!.securityConfig),
  }
}

export interface SagemakerFeatureGroupTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#key SagemakerFeatureGroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#value SagemakerFeatureGroup#value}
  */
  readonly value: string;
}

export function sagemakerFeatureGroupTagsToTerraform(struct?: SagemakerFeatureGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html awscc_sagemaker_feature_group}
*/
export class SagemakerFeatureGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_feature_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html awscc_sagemaker_feature_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerFeatureGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerFeatureGroupConfig) {
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
    this._description = config.description;
    this._eventTimeFeatureName = config.eventTimeFeatureName;
    this._featureDefinitions = config.featureDefinitions;
    this._featureGroupName = config.featureGroupName;
    this._offlineStoreConfig = config.offlineStoreConfig;
    this._onlineStoreConfig = config.onlineStoreConfig;
    this._recordIdentifierFeatureName = config.recordIdentifierFeatureName;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // event_time_feature_name - computed: false, optional: false, required: true
  private _eventTimeFeatureName: string;
  public get eventTimeFeatureName() {
    return this.getStringAttribute('event_time_feature_name');
  }
  public set eventTimeFeatureName(value: string) {
    this._eventTimeFeatureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimeFeatureNameInput() {
    return this._eventTimeFeatureName
  }

  // feature_definitions - computed: false, optional: false, required: true
  private _featureDefinitions: SagemakerFeatureGroupFeatureDefinitions[];
  public get featureDefinitions() {
    return this.interpolationForAttribute('feature_definitions') as any;
  }
  public set featureDefinitions(value: SagemakerFeatureGroupFeatureDefinitions[]) {
    this._featureDefinitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureDefinitionsInput() {
    return this._featureDefinitions
  }

  // feature_group_name - computed: false, optional: false, required: true
  private _featureGroupName: string;
  public get featureGroupName() {
    return this.getStringAttribute('feature_group_name');
  }
  public set featureGroupName(value: string) {
    this._featureGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGroupNameInput() {
    return this._featureGroupName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // offline_store_config - computed: true, optional: true, required: false
  private _offlineStoreConfig?: SagemakerFeatureGroupOfflineStoreConfig;
  public get offlineStoreConfig() {
    return this.interpolationForAttribute('offline_store_config') as any;
  }
  public set offlineStoreConfig(value: SagemakerFeatureGroupOfflineStoreConfig) {
    this._offlineStoreConfig = value;
  }
  public resetOfflineStoreConfig() {
    this._offlineStoreConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineStoreConfigInput() {
    return this._offlineStoreConfig
  }

  // online_store_config - computed: true, optional: true, required: false
  private _onlineStoreConfig?: SagemakerFeatureGroupOnlineStoreConfig;
  public get onlineStoreConfig() {
    return this.interpolationForAttribute('online_store_config') as any;
  }
  public set onlineStoreConfig(value: SagemakerFeatureGroupOnlineStoreConfig) {
    this._onlineStoreConfig = value;
  }
  public resetOnlineStoreConfig() {
    this._onlineStoreConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineStoreConfigInput() {
    return this._onlineStoreConfig
  }

  // record_identifier_feature_name - computed: false, optional: false, required: true
  private _recordIdentifierFeatureName: string;
  public get recordIdentifierFeatureName() {
    return this.getStringAttribute('record_identifier_feature_name');
  }
  public set recordIdentifierFeatureName(value: string) {
    this._recordIdentifierFeatureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIdentifierFeatureNameInput() {
    return this._recordIdentifierFeatureName
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: SagemakerFeatureGroupTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SagemakerFeatureGroupTags[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      event_time_feature_name: cdktf.stringToTerraform(this._eventTimeFeatureName),
      feature_definitions: cdktf.listMapper(sagemakerFeatureGroupFeatureDefinitionsToTerraform)(this._featureDefinitions),
      feature_group_name: cdktf.stringToTerraform(this._featureGroupName),
      offline_store_config: sagemakerFeatureGroupOfflineStoreConfigToTerraform(this._offlineStoreConfig),
      online_store_config: sagemakerFeatureGroupOnlineStoreConfigToTerraform(this._onlineStoreConfig),
      record_identifier_feature_name: cdktf.stringToTerraform(this._recordIdentifierFeatureName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.listMapper(sagemakerFeatureGroupTagsToTerraform)(this._tags),
    };
  }
}
