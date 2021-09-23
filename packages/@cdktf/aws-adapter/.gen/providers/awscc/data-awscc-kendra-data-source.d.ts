import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccKendraDataSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/kendra_data_source.html#id DataAwsccKendraDataSource#id}
    */
    readonly id: string;
}
export declare class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings extends cdktf.ComplexComputedList {
    get dataSourceFieldName(): string;
    get dateFieldFormat(): string;
    get indexFieldName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration extends cdktf.ComplexComputedList {
    get attachmentFieldMappings(): any;
    get crawlAttachments(): any;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings extends cdktf.ComplexComputedList {
    get dataSourceFieldName(): string;
    get dateFieldFormat(): string;
    get indexFieldName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration extends cdktf.ComplexComputedList {
    get blogFieldMappings(): any;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings extends cdktf.ComplexComputedList {
    get dataSourceFieldName(): string;
    get dateFieldFormat(): string;
    get indexFieldName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration extends cdktf.ComplexComputedList {
    get pageFieldMappings(): any;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings extends cdktf.ComplexComputedList {
    get dataSourceFieldName(): string;
    get dateFieldFormat(): string;
    get indexFieldName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration extends cdktf.ComplexComputedList {
    get crawlArchivedSpaces(): any;
    get crawlPersonalSpaces(): any;
    get excludeSpaces(): string[];
    get includeSpaces(): string[];
    get spaceFieldMappings(): any;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration extends cdktf.ComplexComputedList {
    get securityGroupIds(): string[];
    get subnetIds(): string[];
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfiguration extends cdktf.ComplexComputedList {
    get attachmentConfiguration(): any;
    get blogConfiguration(): any;
    get exclusionPatterns(): string[];
    get inclusionPatterns(): string[];
    get pageConfiguration(): any;
    get secretArn(): string;
    get serverUrl(): string;
    get spaceConfiguration(): any;
    get version(): string;
    get vpcConfiguration(): any;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration extends cdktf.ComplexComputedList {
    get allowedGroupsColumnName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings extends cdktf.ComplexComputedList {
    get dataSourceFieldName(): string;
    get dateFieldFormat(): string;
    get indexFieldName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration extends cdktf.ComplexComputedList {
    get changeDetectingColumns(): string[];
    get documentDataColumnName(): string;
    get documentIdColumnName(): string;
    get documentTitleColumnName(): string;
    get fieldMappings(): any;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration extends cdktf.ComplexComputedList {
    get databaseHost(): string;
    get databaseName(): string;
    get databasePort(): number;
    get secretArn(): string;
    get tableName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration extends cdktf.ComplexComputedList {
    get queryIdentifiersEnclosingOption(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration extends cdktf.ComplexComputedList {
    get securityGroupIds(): string[];
    get subnetIds(): string[];
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfiguration extends cdktf.ComplexComputedList {
    get aclConfiguration(): any;
    get columnConfiguration(): any;
    get connectionConfiguration(): any;
    get databaseEngineType(): string;
    get sqlConfiguration(): any;
    get vpcConfiguration(): any;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings extends cdktf.ComplexComputedList {
    get dataSourceFieldName(): string;
    get dateFieldFormat(): string;
    get indexFieldName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfiguration extends cdktf.ComplexComputedList {
    get excludeMimeTypes(): string[];
    get excludeSharedDrives(): string[];
    get excludeUserAccounts(): string[];
    get exclusionPatterns(): string[];
    get fieldMappings(): any;
    get inclusionPatterns(): string[];
    get secretArn(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings extends cdktf.ComplexComputedList {
    get dataSourceFieldName(): string;
    get dateFieldFormat(): string;
    get indexFieldName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers extends cdktf.ComplexComputedList {
    get oneDriveUserList(): string[];
    get oneDriveUserS3Path(): any;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfiguration extends cdktf.ComplexComputedList {
    get disableLocalGroups(): any;
    get exclusionPatterns(): string[];
    get fieldMappings(): any;
    get inclusionPatterns(): string[];
    get oneDriveUsers(): any;
    get secretArn(): string;
    get tenantDomain(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration extends cdktf.ComplexComputedList {
    get keyPath(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration extends cdktf.ComplexComputedList {
    get s3Prefix(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationS3Configuration extends cdktf.ComplexComputedList {
    get accessControlListConfiguration(): any;
    get bucketName(): string;
    get documentsMetadataConfiguration(): any;
    get exclusionPatterns(): string[];
    get inclusionPatterns(): string[];
    get inclusionPrefixes(): string[];
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationS3Configuration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings extends cdktf.ComplexComputedList {
    get dataSourceFieldName(): string;
    get dateFieldFormat(): string;
    get indexFieldName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration extends cdktf.ComplexComputedList {
    get documentDataFieldName(): string;
    get documentTitleFieldName(): string;
    get fieldMappings(): any;
    get includeFilterTypes(): string[];
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings extends cdktf.ComplexComputedList {
    get dataSourceFieldName(): string;
    get dateFieldFormat(): string;
    get indexFieldName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations extends cdktf.ComplexComputedList {
    get documentDataFieldName(): string;
    get documentTitleFieldName(): string;
    get fieldMappings(): any;
    get name(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings extends cdktf.ComplexComputedList {
    get dataSourceFieldName(): string;
    get dateFieldFormat(): string;
    get indexFieldName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration extends cdktf.ComplexComputedList {
    get documentDataFieldName(): string;
    get documentTitleFieldName(): string;
    get fieldMappings(): any;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration extends cdktf.ComplexComputedList {
    get customKnowledgeArticleTypeConfigurations(): any;
    get includedStates(): string[];
    get standardKnowledgeArticleTypeConfiguration(): any;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings extends cdktf.ComplexComputedList {
    get dataSourceFieldName(): string;
    get dateFieldFormat(): string;
    get indexFieldName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration extends cdktf.ComplexComputedList {
    get documentTitleFieldName(): string;
    get fieldMappings(): any;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings extends cdktf.ComplexComputedList {
    get dataSourceFieldName(): string;
    get dateFieldFormat(): string;
    get indexFieldName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations extends cdktf.ComplexComputedList {
    get documentDataFieldName(): string;
    get documentTitleFieldName(): string;
    get fieldMappings(): any;
    get name(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfiguration extends cdktf.ComplexComputedList {
    get chatterFeedConfiguration(): any;
    get crawlAttachments(): any;
    get excludeAttachmentFilePatterns(): string[];
    get includeAttachmentFilePatterns(): string[];
    get knowledgeArticleConfiguration(): any;
    get secretArn(): string;
    get serverUrl(): string;
    get standardObjectAttachmentConfiguration(): any;
    get standardObjectConfigurations(): any;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings extends cdktf.ComplexComputedList {
    get dataSourceFieldName(): string;
    get dateFieldFormat(): string;
    get indexFieldName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration extends cdktf.ComplexComputedList {
    get crawlAttachments(): any;
    get documentDataFieldName(): string;
    get documentTitleFieldName(): string;
    get excludeAttachmentFilePatterns(): string[];
    get fieldMappings(): any;
    get includeAttachmentFilePatterns(): string[];
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings extends cdktf.ComplexComputedList {
    get dataSourceFieldName(): string;
    get dateFieldFormat(): string;
    get indexFieldName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration extends cdktf.ComplexComputedList {
    get crawlAttachments(): any;
    get documentDataFieldName(): string;
    get documentTitleFieldName(): string;
    get excludeAttachmentFilePatterns(): string[];
    get fieldMappings(): any;
    get includeAttachmentFilePatterns(): string[];
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfiguration extends cdktf.ComplexComputedList {
    get hostUrl(): string;
    get knowledgeArticleConfiguration(): any;
    get secretArn(): string;
    get serviceCatalogConfiguration(): any;
    get serviceNowBuildVersion(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings extends cdktf.ComplexComputedList {
    get dataSourceFieldName(): string;
    get dateFieldFormat(): string;
    get indexFieldName(): string;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration extends cdktf.ComplexComputedList {
    get securityGroupIds(): string[];
    get subnetIds(): string[];
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfiguration extends cdktf.ComplexComputedList {
    get crawlAttachments(): any;
    get disableLocalGroups(): any;
    get documentTitleFieldName(): string;
    get exclusionPatterns(): string[];
    get fieldMappings(): any;
    get inclusionPatterns(): string[];
    get secretArn(): string;
    get sharePointVersion(): string;
    get urls(): string[];
    get useChangeLog(): any;
    get vpcConfiguration(): any;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfiguration): any;
export declare class DataAwsccKendraDataSourceDataSourceConfiguration extends cdktf.ComplexComputedList {
    get confluenceConfiguration(): any;
    get databaseConfiguration(): any;
    get googleDriveConfiguration(): any;
    get oneDriveConfiguration(): any;
    get s3Configuration(): any;
    get salesforceConfiguration(): any;
    get serviceNowConfiguration(): any;
    get sharePointConfiguration(): any;
}
export declare function dataAwsccKendraDataSourceDataSourceConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfiguration): any;
export declare class DataAwsccKendraDataSourceTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccKendraDataSourceTagsToTerraform(struct?: DataAwsccKendraDataSourceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/kendra_data_source.html awscc_kendra_data_source}
*/
export declare class DataAwsccKendraDataSource extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/kendra_data_source.html awscc_kendra_data_source} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccKendraDataSourceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccKendraDataSourceConfig);
    get arn(): string;
    get dataSourceConfiguration(): any;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get indexId(): string;
    get name(): string;
    get roleArn(): string;
    get schedule(): string;
    get tags(): any;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
