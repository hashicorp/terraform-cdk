import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KendraDataSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#data_source_configuration KendraDataSource#data_source_configuration}
    */
    readonly dataSourceConfiguration?: KendraDataSourceDataSourceConfiguration;
    /**
    * Description of data source
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#description KendraDataSource#description}
    */
    readonly description?: string;
    /**
    * ID of Index
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#index_id KendraDataSource#index_id}
    */
    readonly indexId: string;
    /**
    * Name of data source
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#name KendraDataSource#name}
    */
    readonly name: string;
    /**
    * Role ARN
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#role_arn KendraDataSource#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Schedule
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#schedule KendraDataSource#schedule}
    */
    readonly schedule?: string;
    /**
    * List of tags
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#tags KendraDataSource#tags}
    */
    readonly tags?: KendraDataSourceTags[];
    /**
    * Data source type
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#type KendraDataSource#type}
    */
    readonly type: string;
}
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#data_source_field_name KendraDataSource#data_source_field_name}
    */
    readonly dataSourceFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#date_field_format KendraDataSource#date_field_format}
    */
    readonly dateFieldFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#index_field_name KendraDataSource#index_field_name}
    */
    readonly indexFieldName: string;
}
export declare function kendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings): any;
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#attachment_field_mappings KendraDataSource#attachment_field_mappings}
    */
    readonly attachmentFieldMappings?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#crawl_attachments KendraDataSource#crawl_attachments}
    */
    readonly crawlAttachments?: boolean | cdktf.IResolvable;
}
export declare function kendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#data_source_field_name KendraDataSource#data_source_field_name}
    */
    readonly dataSourceFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#date_field_format KendraDataSource#date_field_format}
    */
    readonly dateFieldFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#index_field_name KendraDataSource#index_field_name}
    */
    readonly indexFieldName: string;
}
export declare function kendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings): any;
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#blog_field_mappings KendraDataSource#blog_field_mappings}
    */
    readonly blogFieldMappings?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings[];
}
export declare function kendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#data_source_field_name KendraDataSource#data_source_field_name}
    */
    readonly dataSourceFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#date_field_format KendraDataSource#date_field_format}
    */
    readonly dateFieldFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#index_field_name KendraDataSource#index_field_name}
    */
    readonly indexFieldName: string;
}
export declare function kendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings): any;
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#page_field_mappings KendraDataSource#page_field_mappings}
    */
    readonly pageFieldMappings?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings[];
}
export declare function kendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#data_source_field_name KendraDataSource#data_source_field_name}
    */
    readonly dataSourceFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#date_field_format KendraDataSource#date_field_format}
    */
    readonly dateFieldFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#index_field_name KendraDataSource#index_field_name}
    */
    readonly indexFieldName: string;
}
export declare function kendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings): any;
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#crawl_archived_spaces KendraDataSource#crawl_archived_spaces}
    */
    readonly crawlArchivedSpaces?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#crawl_personal_spaces KendraDataSource#crawl_personal_spaces}
    */
    readonly crawlPersonalSpaces?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#exclude_spaces KendraDataSource#exclude_spaces}
    */
    readonly excludeSpaces?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#include_spaces KendraDataSource#include_spaces}
    */
    readonly includeSpaces?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#space_field_mappings KendraDataSource#space_field_mappings}
    */
    readonly spaceFieldMappings?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings[];
}
export declare function kendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#security_group_ids KendraDataSource#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#subnet_ids KendraDataSource#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function kendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationConfluenceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#attachment_configuration KendraDataSource#attachment_configuration}
    */
    readonly attachmentConfiguration?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#blog_configuration KendraDataSource#blog_configuration}
    */
    readonly blogConfiguration?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#exclusion_patterns KendraDataSource#exclusion_patterns}
    */
    readonly exclusionPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#inclusion_patterns KendraDataSource#inclusion_patterns}
    */
    readonly inclusionPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#page_configuration KendraDataSource#page_configuration}
    */
    readonly pageConfiguration?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#secret_arn KendraDataSource#secret_arn}
    */
    readonly secretArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#server_url KendraDataSource#server_url}
    */
    readonly serverUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#space_configuration KendraDataSource#space_configuration}
    */
    readonly spaceConfiguration?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#version KendraDataSource#version}
    */
    readonly version: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#vpc_configuration KendraDataSource#vpc_configuration}
    */
    readonly vpcConfiguration?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration;
}
export declare function kendraDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#allowed_groups_column_name KendraDataSource#allowed_groups_column_name}
    */
    readonly allowedGroupsColumnName: string;
}
export declare function kendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#data_source_field_name KendraDataSource#data_source_field_name}
    */
    readonly dataSourceFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#date_field_format KendraDataSource#date_field_format}
    */
    readonly dateFieldFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#index_field_name KendraDataSource#index_field_name}
    */
    readonly indexFieldName: string;
}
export declare function kendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings): any;
export interface KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#change_detecting_columns KendraDataSource#change_detecting_columns}
    */
    readonly changeDetectingColumns: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_data_column_name KendraDataSource#document_data_column_name}
    */
    readonly documentDataColumnName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_id_column_name KendraDataSource#document_id_column_name}
    */
    readonly documentIdColumnName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_title_column_name KendraDataSource#document_title_column_name}
    */
    readonly documentTitleColumnName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#field_mappings KendraDataSource#field_mappings}
    */
    readonly fieldMappings?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings[];
}
export declare function kendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#database_host KendraDataSource#database_host}
    */
    readonly databaseHost: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#database_name KendraDataSource#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#database_port KendraDataSource#database_port}
    */
    readonly databasePort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#secret_arn KendraDataSource#secret_arn}
    */
    readonly secretArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#table_name KendraDataSource#table_name}
    */
    readonly tableName: string;
}
export declare function kendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#query_identifiers_enclosing_option KendraDataSource#query_identifiers_enclosing_option}
    */
    readonly queryIdentifiersEnclosingOption?: string;
}
export declare function kendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#security_group_ids KendraDataSource#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#subnet_ids KendraDataSource#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function kendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationDatabaseConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#acl_configuration KendraDataSource#acl_configuration}
    */
    readonly aclConfiguration?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#column_configuration KendraDataSource#column_configuration}
    */
    readonly columnConfiguration: KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#connection_configuration KendraDataSource#connection_configuration}
    */
    readonly connectionConfiguration: KendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#database_engine_type KendraDataSource#database_engine_type}
    */
    readonly databaseEngineType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#sql_configuration KendraDataSource#sql_configuration}
    */
    readonly sqlConfiguration?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#vpc_configuration KendraDataSource#vpc_configuration}
    */
    readonly vpcConfiguration?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration;
}
export declare function kendraDataSourceDataSourceConfigurationDatabaseConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#data_source_field_name KendraDataSource#data_source_field_name}
    */
    readonly dataSourceFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#date_field_format KendraDataSource#date_field_format}
    */
    readonly dateFieldFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#index_field_name KendraDataSource#index_field_name}
    */
    readonly indexFieldName: string;
}
export declare function kendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings): any;
export interface KendraDataSourceDataSourceConfigurationGoogleDriveConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#exclude_mime_types KendraDataSource#exclude_mime_types}
    */
    readonly excludeMimeTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#exclude_shared_drives KendraDataSource#exclude_shared_drives}
    */
    readonly excludeSharedDrives?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#exclude_user_accounts KendraDataSource#exclude_user_accounts}
    */
    readonly excludeUserAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#exclusion_patterns KendraDataSource#exclusion_patterns}
    */
    readonly exclusionPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#field_mappings KendraDataSource#field_mappings}
    */
    readonly fieldMappings?: KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#inclusion_patterns KendraDataSource#inclusion_patterns}
    */
    readonly inclusionPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#secret_arn KendraDataSource#secret_arn}
    */
    readonly secretArn: string;
}
export declare function kendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationGoogleDriveConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#data_source_field_name KendraDataSource#data_source_field_name}
    */
    readonly dataSourceFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#date_field_format KendraDataSource#date_field_format}
    */
    readonly dateFieldFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#index_field_name KendraDataSource#index_field_name}
    */
    readonly indexFieldName: string;
}
export declare function kendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings): any;
export interface KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#bucket KendraDataSource#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#key KendraDataSource#key}
    */
    readonly key: string;
}
export declare function kendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToTerraform(struct?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path): any;
export interface KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#one_drive_user_list KendraDataSource#one_drive_user_list}
    */
    readonly oneDriveUserList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#one_drive_user_s3_path KendraDataSource#one_drive_user_s3_path}
    */
    readonly oneDriveUserS3Path?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path;
}
export declare function kendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToTerraform(struct?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers): any;
export interface KendraDataSourceDataSourceConfigurationOneDriveConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#disable_local_groups KendraDataSource#disable_local_groups}
    */
    readonly disableLocalGroups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#exclusion_patterns KendraDataSource#exclusion_patterns}
    */
    readonly exclusionPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#field_mappings KendraDataSource#field_mappings}
    */
    readonly fieldMappings?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#inclusion_patterns KendraDataSource#inclusion_patterns}
    */
    readonly inclusionPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#one_drive_users KendraDataSource#one_drive_users}
    */
    readonly oneDriveUsers: KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#secret_arn KendraDataSource#secret_arn}
    */
    readonly secretArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#tenant_domain KendraDataSource#tenant_domain}
    */
    readonly tenantDomain: string;
}
export declare function kendraDataSourceDataSourceConfigurationOneDriveConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationOneDriveConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#key_path KendraDataSource#key_path}
    */
    readonly keyPath?: string;
}
export declare function kendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#s3_prefix KendraDataSource#s3_prefix}
    */
    readonly s3Prefix?: string;
}
export declare function kendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#access_control_list_configuration KendraDataSource#access_control_list_configuration}
    */
    readonly accessControlListConfiguration?: KendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#bucket_name KendraDataSource#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#documents_metadata_configuration KendraDataSource#documents_metadata_configuration}
    */
    readonly documentsMetadataConfiguration?: KendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#exclusion_patterns KendraDataSource#exclusion_patterns}
    */
    readonly exclusionPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#inclusion_patterns KendraDataSource#inclusion_patterns}
    */
    readonly inclusionPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#inclusion_prefixes KendraDataSource#inclusion_prefixes}
    */
    readonly inclusionPrefixes?: string[];
}
export declare function kendraDataSourceDataSourceConfigurationS3ConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationS3Configuration): any;
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#data_source_field_name KendraDataSource#data_source_field_name}
    */
    readonly dataSourceFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#date_field_format KendraDataSource#date_field_format}
    */
    readonly dateFieldFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#index_field_name KendraDataSource#index_field_name}
    */
    readonly indexFieldName: string;
}
export declare function kendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings): any;
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_data_field_name KendraDataSource#document_data_field_name}
    */
    readonly documentDataFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_title_field_name KendraDataSource#document_title_field_name}
    */
    readonly documentTitleFieldName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#field_mappings KendraDataSource#field_mappings}
    */
    readonly fieldMappings?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#include_filter_types KendraDataSource#include_filter_types}
    */
    readonly includeFilterTypes?: string[];
}
export declare function kendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#data_source_field_name KendraDataSource#data_source_field_name}
    */
    readonly dataSourceFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#date_field_format KendraDataSource#date_field_format}
    */
    readonly dateFieldFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#index_field_name KendraDataSource#index_field_name}
    */
    readonly indexFieldName: string;
}
export declare function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings): any;
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_data_field_name KendraDataSource#document_data_field_name}
    */
    readonly documentDataFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_title_field_name KendraDataSource#document_title_field_name}
    */
    readonly documentTitleFieldName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#field_mappings KendraDataSource#field_mappings}
    */
    readonly fieldMappings?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#name KendraDataSource#name}
    */
    readonly name: string;
}
export declare function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations): any;
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#data_source_field_name KendraDataSource#data_source_field_name}
    */
    readonly dataSourceFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#date_field_format KendraDataSource#date_field_format}
    */
    readonly dateFieldFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#index_field_name KendraDataSource#index_field_name}
    */
    readonly indexFieldName: string;
}
export declare function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings): any;
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_data_field_name KendraDataSource#document_data_field_name}
    */
    readonly documentDataFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_title_field_name KendraDataSource#document_title_field_name}
    */
    readonly documentTitleFieldName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#field_mappings KendraDataSource#field_mappings}
    */
    readonly fieldMappings?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings[];
}
export declare function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#custom_knowledge_article_type_configurations KendraDataSource#custom_knowledge_article_type_configurations}
    */
    readonly customKnowledgeArticleTypeConfigurations?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#included_states KendraDataSource#included_states}
    */
    readonly includedStates: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#standard_knowledge_article_type_configuration KendraDataSource#standard_knowledge_article_type_configuration}
    */
    readonly standardKnowledgeArticleTypeConfiguration?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration;
}
export declare function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#data_source_field_name KendraDataSource#data_source_field_name}
    */
    readonly dataSourceFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#date_field_format KendraDataSource#date_field_format}
    */
    readonly dateFieldFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#index_field_name KendraDataSource#index_field_name}
    */
    readonly indexFieldName: string;
}
export declare function kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings): any;
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_title_field_name KendraDataSource#document_title_field_name}
    */
    readonly documentTitleFieldName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#field_mappings KendraDataSource#field_mappings}
    */
    readonly fieldMappings?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings[];
}
export declare function kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#data_source_field_name KendraDataSource#data_source_field_name}
    */
    readonly dataSourceFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#date_field_format KendraDataSource#date_field_format}
    */
    readonly dateFieldFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#index_field_name KendraDataSource#index_field_name}
    */
    readonly indexFieldName: string;
}
export declare function kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings): any;
export interface KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_data_field_name KendraDataSource#document_data_field_name}
    */
    readonly documentDataFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_title_field_name KendraDataSource#document_title_field_name}
    */
    readonly documentTitleFieldName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#field_mappings KendraDataSource#field_mappings}
    */
    readonly fieldMappings?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#name KendraDataSource#name}
    */
    readonly name: string;
}
export declare function kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations): any;
export interface KendraDataSourceDataSourceConfigurationSalesforceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#chatter_feed_configuration KendraDataSource#chatter_feed_configuration}
    */
    readonly chatterFeedConfiguration?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#crawl_attachments KendraDataSource#crawl_attachments}
    */
    readonly crawlAttachments?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#exclude_attachment_file_patterns KendraDataSource#exclude_attachment_file_patterns}
    */
    readonly excludeAttachmentFilePatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#include_attachment_file_patterns KendraDataSource#include_attachment_file_patterns}
    */
    readonly includeAttachmentFilePatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#knowledge_article_configuration KendraDataSource#knowledge_article_configuration}
    */
    readonly knowledgeArticleConfiguration?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#secret_arn KendraDataSource#secret_arn}
    */
    readonly secretArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#server_url KendraDataSource#server_url}
    */
    readonly serverUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#standard_object_attachment_configuration KendraDataSource#standard_object_attachment_configuration}
    */
    readonly standardObjectAttachmentConfiguration?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#standard_object_configurations KendraDataSource#standard_object_configurations}
    */
    readonly standardObjectConfigurations?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations[];
}
export declare function kendraDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#data_source_field_name KendraDataSource#data_source_field_name}
    */
    readonly dataSourceFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#date_field_format KendraDataSource#date_field_format}
    */
    readonly dateFieldFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#index_field_name KendraDataSource#index_field_name}
    */
    readonly indexFieldName: string;
}
export declare function kendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings): any;
export interface KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#crawl_attachments KendraDataSource#crawl_attachments}
    */
    readonly crawlAttachments?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_data_field_name KendraDataSource#document_data_field_name}
    */
    readonly documentDataFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_title_field_name KendraDataSource#document_title_field_name}
    */
    readonly documentTitleFieldName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#exclude_attachment_file_patterns KendraDataSource#exclude_attachment_file_patterns}
    */
    readonly excludeAttachmentFilePatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#field_mappings KendraDataSource#field_mappings}
    */
    readonly fieldMappings?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#include_attachment_file_patterns KendraDataSource#include_attachment_file_patterns}
    */
    readonly includeAttachmentFilePatterns?: string[];
}
export declare function kendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#data_source_field_name KendraDataSource#data_source_field_name}
    */
    readonly dataSourceFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#date_field_format KendraDataSource#date_field_format}
    */
    readonly dateFieldFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#index_field_name KendraDataSource#index_field_name}
    */
    readonly indexFieldName: string;
}
export declare function kendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings): any;
export interface KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#crawl_attachments KendraDataSource#crawl_attachments}
    */
    readonly crawlAttachments?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_data_field_name KendraDataSource#document_data_field_name}
    */
    readonly documentDataFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_title_field_name KendraDataSource#document_title_field_name}
    */
    readonly documentTitleFieldName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#exclude_attachment_file_patterns KendraDataSource#exclude_attachment_file_patterns}
    */
    readonly excludeAttachmentFilePatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#field_mappings KendraDataSource#field_mappings}
    */
    readonly fieldMappings?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#include_attachment_file_patterns KendraDataSource#include_attachment_file_patterns}
    */
    readonly includeAttachmentFilePatterns?: string[];
}
export declare function kendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationServiceNowConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#host_url KendraDataSource#host_url}
    */
    readonly hostUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#knowledge_article_configuration KendraDataSource#knowledge_article_configuration}
    */
    readonly knowledgeArticleConfiguration?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#secret_arn KendraDataSource#secret_arn}
    */
    readonly secretArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#service_catalog_configuration KendraDataSource#service_catalog_configuration}
    */
    readonly serviceCatalogConfiguration?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#service_now_build_version KendraDataSource#service_now_build_version}
    */
    readonly serviceNowBuildVersion: string;
}
export declare function kendraDataSourceDataSourceConfigurationServiceNowConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#data_source_field_name KendraDataSource#data_source_field_name}
    */
    readonly dataSourceFieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#date_field_format KendraDataSource#date_field_format}
    */
    readonly dateFieldFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#index_field_name KendraDataSource#index_field_name}
    */
    readonly indexFieldName: string;
}
export declare function kendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings): any;
export interface KendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#security_group_ids KendraDataSource#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#subnet_ids KendraDataSource#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function kendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration): any;
export interface KendraDataSourceDataSourceConfigurationSharePointConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#crawl_attachments KendraDataSource#crawl_attachments}
    */
    readonly crawlAttachments?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#disable_local_groups KendraDataSource#disable_local_groups}
    */
    readonly disableLocalGroups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#document_title_field_name KendraDataSource#document_title_field_name}
    */
    readonly documentTitleFieldName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#exclusion_patterns KendraDataSource#exclusion_patterns}
    */
    readonly exclusionPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#field_mappings KendraDataSource#field_mappings}
    */
    readonly fieldMappings?: KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#inclusion_patterns KendraDataSource#inclusion_patterns}
    */
    readonly inclusionPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#secret_arn KendraDataSource#secret_arn}
    */
    readonly secretArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#share_point_version KendraDataSource#share_point_version}
    */
    readonly sharePointVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#urls KendraDataSource#urls}
    */
    readonly urls: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#use_change_log KendraDataSource#use_change_log}
    */
    readonly useChangeLog?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#vpc_configuration KendraDataSource#vpc_configuration}
    */
    readonly vpcConfiguration?: KendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration;
}
export declare function kendraDataSourceDataSourceConfigurationSharePointConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSharePointConfiguration): any;
export interface KendraDataSourceDataSourceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#confluence_configuration KendraDataSource#confluence_configuration}
    */
    readonly confluenceConfiguration?: KendraDataSourceDataSourceConfigurationConfluenceConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#database_configuration KendraDataSource#database_configuration}
    */
    readonly databaseConfiguration?: KendraDataSourceDataSourceConfigurationDatabaseConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#google_drive_configuration KendraDataSource#google_drive_configuration}
    */
    readonly googleDriveConfiguration?: KendraDataSourceDataSourceConfigurationGoogleDriveConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#one_drive_configuration KendraDataSource#one_drive_configuration}
    */
    readonly oneDriveConfiguration?: KendraDataSourceDataSourceConfigurationOneDriveConfiguration;
    /**
    * S3 data source configuration
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#s3_configuration KendraDataSource#s3_configuration}
    */
    readonly s3Configuration?: KendraDataSourceDataSourceConfigurationS3Configuration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#salesforce_configuration KendraDataSource#salesforce_configuration}
    */
    readonly salesforceConfiguration?: KendraDataSourceDataSourceConfigurationSalesforceConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#service_now_configuration KendraDataSource#service_now_configuration}
    */
    readonly serviceNowConfiguration?: KendraDataSourceDataSourceConfigurationServiceNowConfiguration;
    /**
    * SharePoint configuration
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#share_point_configuration KendraDataSource#share_point_configuration}
    */
    readonly sharePointConfiguration?: KendraDataSourceDataSourceConfigurationSharePointConfiguration;
}
export declare function kendraDataSourceDataSourceConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfiguration): any;
export interface KendraDataSourceTags {
    /**
    * A string used to identify this tag
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#key KendraDataSource#key}
    */
    readonly key: string;
    /**
    * A string containing the value for the tag
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#value KendraDataSource#value}
    */
    readonly value: string;
}
export declare function kendraDataSourceTagsToTerraform(struct?: KendraDataSourceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html awscc_kendra_data_source}
*/
export declare class KendraDataSource extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html awscc_kendra_data_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KendraDataSourceConfig
    */
    constructor(scope: Construct, id: string, config: KendraDataSourceConfig);
    get arn(): string;
    private _dataSourceConfiguration?;
    get dataSourceConfiguration(): KendraDataSourceDataSourceConfiguration;
    set dataSourceConfiguration(value: KendraDataSourceDataSourceConfiguration);
    resetDataSourceConfiguration(): void;
    get dataSourceConfigurationInput(): KendraDataSourceDataSourceConfiguration | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _indexId;
    get indexId(): string;
    set indexId(value: string);
    get indexIdInput(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _schedule?;
    get schedule(): string;
    set schedule(value: string);
    resetSchedule(): void;
    get scheduleInput(): string | undefined;
    private _tags?;
    get tags(): KendraDataSourceTags[];
    set tags(value: KendraDataSourceTags[]);
    resetTags(): void;
    get tagsInput(): KendraDataSourceTags[] | undefined;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
