// https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

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

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attachment_field_mappings: cdktf.listMapper(kendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToTerraform)(struct!.attachmentFieldMappings),
    crawl_attachments: cdktf.booleanToTerraform(struct!.crawlAttachments),
  }
}

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

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#blog_field_mappings KendraDataSource#blog_field_mappings}
  */
  readonly blogFieldMappings?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings[];
}

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    blog_field_mappings: cdktf.listMapper(kendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToTerraform)(struct!.blogFieldMappings),
  }
}

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

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export interface KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#page_field_mappings KendraDataSource#page_field_mappings}
  */
  readonly pageFieldMappings?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings[];
}

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    page_field_mappings: cdktf.listMapper(kendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToTerraform)(struct!.pageFieldMappings),
  }
}

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

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

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

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    crawl_archived_spaces: cdktf.booleanToTerraform(struct!.crawlArchivedSpaces),
    crawl_personal_spaces: cdktf.booleanToTerraform(struct!.crawlPersonalSpaces),
    exclude_spaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeSpaces),
    include_spaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includeSpaces),
    space_field_mappings: cdktf.listMapper(kendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToTerraform)(struct!.spaceFieldMappings),
  }
}

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

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

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

export function kendraDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationConfluenceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attachment_configuration: kendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToTerraform(struct!.attachmentConfiguration),
    blog_configuration: kendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToTerraform(struct!.blogConfiguration),
    exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusionPatterns),
    inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.inclusionPatterns),
    page_configuration: kendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToTerraform(struct!.pageConfiguration),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    server_url: cdktf.stringToTerraform(struct!.serverUrl),
    space_configuration: kendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToTerraform(struct!.spaceConfiguration),
    version: cdktf.stringToTerraform(struct!.version),
    vpc_configuration: kendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}

export interface KendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#allowed_groups_column_name KendraDataSource#allowed_groups_column_name}
  */
  readonly allowedGroupsColumnName: string;
}

export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_groups_column_name: cdktf.stringToTerraform(struct!.allowedGroupsColumnName),
  }
}

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

export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

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

export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    change_detecting_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.changeDetectingColumns),
    document_data_column_name: cdktf.stringToTerraform(struct!.documentDataColumnName),
    document_id_column_name: cdktf.stringToTerraform(struct!.documentIdColumnName),
    document_title_column_name: cdktf.stringToTerraform(struct!.documentTitleColumnName),
    field_mappings: cdktf.listMapper(kendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
  }
}

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

export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_host: cdktf.stringToTerraform(struct!.databaseHost),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    database_port: cdktf.numberToTerraform(struct!.databasePort),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface KendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#query_identifiers_enclosing_option KendraDataSource#query_identifiers_enclosing_option}
  */
  readonly queryIdentifiersEnclosingOption?: string;
}

export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query_identifiers_enclosing_option: cdktf.stringToTerraform(struct!.queryIdentifiersEnclosingOption),
  }
}

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

export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

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

export function kendraDataSourceDataSourceConfigurationDatabaseConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationDatabaseConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acl_configuration: kendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToTerraform(struct!.aclConfiguration),
    column_configuration: kendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToTerraform(struct!.columnConfiguration),
    connection_configuration: kendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToTerraform(struct!.connectionConfiguration),
    database_engine_type: cdktf.stringToTerraform(struct!.databaseEngineType),
    sql_configuration: kendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToTerraform(struct!.sqlConfiguration),
    vpc_configuration: kendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}

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

export function kendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

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

export function kendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationGoogleDriveConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exclude_mime_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeMimeTypes),
    exclude_shared_drives: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeSharedDrives),
    exclude_user_accounts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeUserAccounts),
    exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusionPatterns),
    field_mappings: cdktf.listMapper(kendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
    inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.inclusionPatterns),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
  }
}

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

export function kendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

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

export function kendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToTerraform(struct?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

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

export function kendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToTerraform(struct?: KendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    one_drive_user_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oneDriveUserList),
    one_drive_user_s3_path: kendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToTerraform(struct!.oneDriveUserS3Path),
  }
}

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

export function kendraDataSourceDataSourceConfigurationOneDriveConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationOneDriveConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_local_groups: cdktf.booleanToTerraform(struct!.disableLocalGroups),
    exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusionPatterns),
    field_mappings: cdktf.listMapper(kendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
    inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.inclusionPatterns),
    one_drive_users: kendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToTerraform(struct!.oneDriveUsers),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    tenant_domain: cdktf.stringToTerraform(struct!.tenantDomain),
  }
}

export interface KendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#key_path KendraDataSource#key_path}
  */
  readonly keyPath?: string;
}

export function kendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_path: cdktf.stringToTerraform(struct!.keyPath),
  }
}

export interface KendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html#s3_prefix KendraDataSource#s3_prefix}
  */
  readonly s3Prefix?: string;
}

export function kendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_prefix: cdktf.stringToTerraform(struct!.s3Prefix),
  }
}

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

export function kendraDataSourceDataSourceConfigurationS3ConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_control_list_configuration: kendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform(struct!.accessControlListConfiguration),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    documents_metadata_configuration: kendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform(struct!.documentsMetadataConfiguration),
    exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusionPatterns),
    inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.inclusionPatterns),
    inclusion_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.inclusionPrefixes),
  }
}

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

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

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

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    document_data_field_name: cdktf.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktf.stringToTerraform(struct!.documentTitleFieldName),
    field_mappings: cdktf.listMapper(kendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
    include_filter_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includeFilterTypes),
  }
}

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

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

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

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    document_data_field_name: cdktf.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktf.stringToTerraform(struct!.documentTitleFieldName),
    field_mappings: cdktf.listMapper(kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToTerraform)(struct!.fieldMappings),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

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

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

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

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    document_data_field_name: cdktf.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktf.stringToTerraform(struct!.documentTitleFieldName),
    field_mappings: cdktf.listMapper(kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
  }
}

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

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_knowledge_article_type_configurations: cdktf.listMapper(kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToTerraform)(struct!.customKnowledgeArticleTypeConfigurations),
    included_states: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedStates),
    standard_knowledge_article_type_configuration: kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToTerraform(struct!.standardKnowledgeArticleTypeConfiguration),
  }
}

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

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

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

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    document_title_field_name: cdktf.stringToTerraform(struct!.documentTitleFieldName),
    field_mappings: cdktf.listMapper(kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
  }
}

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

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

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

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    document_data_field_name: cdktf.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktf.stringToTerraform(struct!.documentTitleFieldName),
    field_mappings: cdktf.listMapper(kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToTerraform)(struct!.fieldMappings),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

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

export function kendraDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSalesforceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    chatter_feed_configuration: kendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToTerraform(struct!.chatterFeedConfiguration),
    crawl_attachments: cdktf.booleanToTerraform(struct!.crawlAttachments),
    exclude_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeAttachmentFilePatterns),
    include_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includeAttachmentFilePatterns),
    knowledge_article_configuration: kendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToTerraform(struct!.knowledgeArticleConfiguration),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    server_url: cdktf.stringToTerraform(struct!.serverUrl),
    standard_object_attachment_configuration: kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToTerraform(struct!.standardObjectAttachmentConfiguration),
    standard_object_configurations: cdktf.listMapper(kendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToTerraform)(struct!.standardObjectConfigurations),
  }
}

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

export function kendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

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

export function kendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    crawl_attachments: cdktf.booleanToTerraform(struct!.crawlAttachments),
    document_data_field_name: cdktf.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktf.stringToTerraform(struct!.documentTitleFieldName),
    exclude_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeAttachmentFilePatterns),
    field_mappings: cdktf.listMapper(kendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
    include_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includeAttachmentFilePatterns),
  }
}

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

export function kendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

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

export function kendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    crawl_attachments: cdktf.booleanToTerraform(struct!.crawlAttachments),
    document_data_field_name: cdktf.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktf.stringToTerraform(struct!.documentTitleFieldName),
    exclude_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeAttachmentFilePatterns),
    field_mappings: cdktf.listMapper(kendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
    include_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includeAttachmentFilePatterns),
  }
}

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

export function kendraDataSourceDataSourceConfigurationServiceNowConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationServiceNowConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_url: cdktf.stringToTerraform(struct!.hostUrl),
    knowledge_article_configuration: kendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToTerraform(struct!.knowledgeArticleConfiguration),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    service_catalog_configuration: kendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToTerraform(struct!.serviceCatalogConfiguration),
    service_now_build_version: cdktf.stringToTerraform(struct!.serviceNowBuildVersion),
  }
}

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

export function kendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToTerraform(struct?: KendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

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

export function kendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

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

export function kendraDataSourceDataSourceConfigurationSharePointConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfigurationSharePointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    crawl_attachments: cdktf.booleanToTerraform(struct!.crawlAttachments),
    disable_local_groups: cdktf.booleanToTerraform(struct!.disableLocalGroups),
    document_title_field_name: cdktf.stringToTerraform(struct!.documentTitleFieldName),
    exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusionPatterns),
    field_mappings: cdktf.listMapper(kendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
    inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.inclusionPatterns),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    share_point_version: cdktf.stringToTerraform(struct!.sharePointVersion),
    urls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.urls),
    use_change_log: cdktf.booleanToTerraform(struct!.useChangeLog),
    vpc_configuration: kendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}

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

export function kendraDataSourceDataSourceConfigurationToTerraform(struct?: KendraDataSourceDataSourceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    confluence_configuration: kendraDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform(struct!.confluenceConfiguration),
    database_configuration: kendraDataSourceDataSourceConfigurationDatabaseConfigurationToTerraform(struct!.databaseConfiguration),
    google_drive_configuration: kendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToTerraform(struct!.googleDriveConfiguration),
    one_drive_configuration: kendraDataSourceDataSourceConfigurationOneDriveConfigurationToTerraform(struct!.oneDriveConfiguration),
    s3_configuration: kendraDataSourceDataSourceConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
    salesforce_configuration: kendraDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform(struct!.salesforceConfiguration),
    service_now_configuration: kendraDataSourceDataSourceConfigurationServiceNowConfigurationToTerraform(struct!.serviceNowConfiguration),
    share_point_configuration: kendraDataSourceDataSourceConfigurationSharePointConfigurationToTerraform(struct!.sharePointConfiguration),
  }
}

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

export function kendraDataSourceTagsToTerraform(struct?: KendraDataSourceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html awscc_kendra_data_source}
*/
export class KendraDataSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_kendra_data_source";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kendra_data_source.html awscc_kendra_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KendraDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: KendraDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kendra_data_source',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataSourceConfiguration = config.dataSourceConfiguration;
    this._description = config.description;
    this._indexId = config.indexId;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._schedule = config.schedule;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_source_configuration - computed: false, optional: true, required: false
  private _dataSourceConfiguration?: KendraDataSourceDataSourceConfiguration;
  public get dataSourceConfiguration() {
    return this.interpolationForAttribute('data_source_configuration') as any;
  }
  public set dataSourceConfiguration(value: KendraDataSourceDataSourceConfiguration ) {
    this._dataSourceConfiguration = value;
  }
  public resetDataSourceConfiguration() {
    this._dataSourceConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceConfigurationInput() {
    return this._dataSourceConfiguration
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

  // index_id - computed: false, optional: false, required: true
  private _indexId: string;
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string ) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string;
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string ) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: KendraDataSourceTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: KendraDataSourceTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_source_configuration: kendraDataSourceDataSourceConfigurationToTerraform(this._dataSourceConfiguration),
      description: cdktf.stringToTerraform(this._description),
      index_id: cdktf.stringToTerraform(this._indexId),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      schedule: cdktf.stringToTerraform(this._schedule),
      tags: cdktf.listMapper(kendraDataSourceTagsToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
