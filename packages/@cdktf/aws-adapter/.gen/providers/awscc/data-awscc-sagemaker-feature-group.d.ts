import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerFeatureGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_feature_group.html#id DataAwsccSagemakerFeatureGroup#id}
    */
    readonly id: string;
}
export declare class DataAwsccSagemakerFeatureGroupFeatureDefinitions extends cdktf.ComplexComputedList {
    get featureName(): string;
    get featureType(): string;
}
export declare function dataAwsccSagemakerFeatureGroupFeatureDefinitionsToTerraform(struct?: DataAwsccSagemakerFeatureGroupFeatureDefinitions): any;
export declare class DataAwsccSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig extends cdktf.ComplexComputedList {
    get catalog(): string;
    get database(): string;
    get tableName(): string;
}
export declare function dataAwsccSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct?: DataAwsccSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig): any;
export declare class DataAwsccSagemakerFeatureGroupOfflineStoreConfigS3StorageConfig extends cdktf.ComplexComputedList {
    get kmsKeyId(): string;
    get s3Uri(): string;
}
export declare function dataAwsccSagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct?: DataAwsccSagemakerFeatureGroupOfflineStoreConfigS3StorageConfig): any;
export declare class DataAwsccSagemakerFeatureGroupOfflineStoreConfig extends cdktf.ComplexComputedList {
    get dataCatalogConfig(): any;
    get disableGlueTableCreation(): any;
    get s3StorageConfig(): any;
}
export declare function dataAwsccSagemakerFeatureGroupOfflineStoreConfigToTerraform(struct?: DataAwsccSagemakerFeatureGroupOfflineStoreConfig): any;
export declare class DataAwsccSagemakerFeatureGroupOnlineStoreConfigSecurityConfig extends cdktf.ComplexComputedList {
    get kmsKeyId(): string;
}
export declare function dataAwsccSagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct?: DataAwsccSagemakerFeatureGroupOnlineStoreConfigSecurityConfig): any;
export declare class DataAwsccSagemakerFeatureGroupOnlineStoreConfig extends cdktf.ComplexComputedList {
    get enableOnlineStore(): any;
    get securityConfig(): any;
}
export declare function dataAwsccSagemakerFeatureGroupOnlineStoreConfigToTerraform(struct?: DataAwsccSagemakerFeatureGroupOnlineStoreConfig): any;
export declare class DataAwsccSagemakerFeatureGroupTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerFeatureGroupTagsToTerraform(struct?: DataAwsccSagemakerFeatureGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_feature_group.html awscc_sagemaker_feature_group}
*/
export declare class DataAwsccSagemakerFeatureGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_feature_group.html awscc_sagemaker_feature_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerFeatureGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerFeatureGroupConfig);
    get description(): string;
    get eventTimeFeatureName(): string;
    get featureDefinitions(): any;
    get featureGroupName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get offlineStoreConfig(): any;
    get onlineStoreConfig(): any;
    get recordIdentifierFeatureName(): string;
    get roleArn(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
