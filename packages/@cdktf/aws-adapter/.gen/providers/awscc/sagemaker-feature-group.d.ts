import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function sagemakerFeatureGroupFeatureDefinitionsToTerraform(struct?: SagemakerFeatureGroupFeatureDefinitions): any;
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
export declare function sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig): any;
export declare class SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig extends cdktf.ComplexComputedList {
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get s3Uri(): string;
}
export declare function sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig): any;
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
export declare function sagemakerFeatureGroupOfflineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfig): any;
export interface SagemakerFeatureGroupOnlineStoreConfigSecurityConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html#kms_key_id SagemakerFeatureGroup#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export declare function sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig): any;
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
export declare function sagemakerFeatureGroupOnlineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfig): any;
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
export declare function sagemakerFeatureGroupTagsToTerraform(struct?: SagemakerFeatureGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html awscc_sagemaker_feature_group}
*/
export declare class SagemakerFeatureGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_feature_group.html awscc_sagemaker_feature_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerFeatureGroupConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerFeatureGroupConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _eventTimeFeatureName;
    get eventTimeFeatureName(): string;
    set eventTimeFeatureName(value: string);
    get eventTimeFeatureNameInput(): string;
    private _featureDefinitions;
    get featureDefinitions(): SagemakerFeatureGroupFeatureDefinitions[];
    set featureDefinitions(value: SagemakerFeatureGroupFeatureDefinitions[]);
    get featureDefinitionsInput(): SagemakerFeatureGroupFeatureDefinitions[];
    private _featureGroupName;
    get featureGroupName(): string;
    set featureGroupName(value: string);
    get featureGroupNameInput(): string;
    get id(): string;
    private _offlineStoreConfig?;
    get offlineStoreConfig(): SagemakerFeatureGroupOfflineStoreConfig;
    set offlineStoreConfig(value: SagemakerFeatureGroupOfflineStoreConfig);
    resetOfflineStoreConfig(): void;
    get offlineStoreConfigInput(): SagemakerFeatureGroupOfflineStoreConfig | undefined;
    private _onlineStoreConfig?;
    get onlineStoreConfig(): SagemakerFeatureGroupOnlineStoreConfig;
    set onlineStoreConfig(value: SagemakerFeatureGroupOnlineStoreConfig);
    resetOnlineStoreConfig(): void;
    get onlineStoreConfigInput(): SagemakerFeatureGroupOnlineStoreConfig | undefined;
    private _recordIdentifierFeatureName;
    get recordIdentifierFeatureName(): string;
    set recordIdentifierFeatureName(value: string);
    get recordIdentifierFeatureNameInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _tags?;
    get tags(): SagemakerFeatureGroupTags[];
    set tags(value: SagemakerFeatureGroupTags[]);
    resetTags(): void;
    get tagsInput(): SagemakerFeatureGroupTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
