// https://www.terraform.io/docs/providers/awscc/d/kendra_data_source.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccKendraDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/kendra_data_source.html#id DataAwsccKendraDataSource#id}
  */
  readonly id: string;
}
export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings extends cdktf.ComplexComputedList {

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration extends cdktf.ComplexComputedList {

  // attachment_field_mappings - computed: true, optional: false, required: false
  public get attachmentFieldMappings() {
    return this.interpolationForAttribute('attachment_field_mappings') as any;
  }

  // crawl_attachments - computed: true, optional: false, required: false
  public get crawlAttachments() {
    return this.getBooleanAttribute('crawl_attachments');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attachment_field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToTerraform)(struct!.attachmentFieldMappings),
    crawl_attachments: cdktf.booleanToTerraform(struct!.crawlAttachments),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings extends cdktf.ComplexComputedList {

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration extends cdktf.ComplexComputedList {

  // blog_field_mappings - computed: true, optional: false, required: false
  public get blogFieldMappings() {
    return this.interpolationForAttribute('blog_field_mappings') as any;
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    blog_field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToTerraform)(struct!.blogFieldMappings),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings extends cdktf.ComplexComputedList {

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration extends cdktf.ComplexComputedList {

  // page_field_mappings - computed: true, optional: false, required: false
  public get pageFieldMappings() {
    return this.interpolationForAttribute('page_field_mappings') as any;
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    page_field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToTerraform)(struct!.pageFieldMappings),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings extends cdktf.ComplexComputedList {

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration extends cdktf.ComplexComputedList {

  // crawl_archived_spaces - computed: true, optional: false, required: false
  public get crawlArchivedSpaces() {
    return this.getBooleanAttribute('crawl_archived_spaces');
  }

  // crawl_personal_spaces - computed: true, optional: false, required: false
  public get crawlPersonalSpaces() {
    return this.getBooleanAttribute('crawl_personal_spaces');
  }

  // exclude_spaces - computed: true, optional: false, required: false
  public get excludeSpaces() {
    return this.getListAttribute('exclude_spaces');
  }

  // include_spaces - computed: true, optional: false, required: false
  public get includeSpaces() {
    return this.getListAttribute('include_spaces');
  }

  // space_field_mappings - computed: true, optional: false, required: false
  public get spaceFieldMappings() {
    return this.interpolationForAttribute('space_field_mappings') as any;
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    crawl_archived_spaces: cdktf.booleanToTerraform(struct!.crawlArchivedSpaces),
    crawl_personal_spaces: cdktf.booleanToTerraform(struct!.crawlPersonalSpaces),
    exclude_spaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeSpaces),
    include_spaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includeSpaces),
    space_field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToTerraform)(struct!.spaceFieldMappings),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration extends cdktf.ComplexComputedList {

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfiguration extends cdktf.ComplexComputedList {

  // attachment_configuration - computed: true, optional: false, required: false
  public get attachmentConfiguration() {
    return this.interpolationForAttribute('attachment_configuration') as any;
  }

  // blog_configuration - computed: true, optional: false, required: false
  public get blogConfiguration() {
    return this.interpolationForAttribute('blog_configuration') as any;
  }

  // exclusion_patterns - computed: true, optional: false, required: false
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }

  // inclusion_patterns - computed: true, optional: false, required: false
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }

  // page_configuration - computed: true, optional: false, required: false
  public get pageConfiguration() {
    return this.interpolationForAttribute('page_configuration') as any;
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // server_url - computed: true, optional: false, required: false
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }

  // space_configuration - computed: true, optional: false, required: false
  public get spaceConfiguration() {
    return this.interpolationForAttribute('space_configuration') as any;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vpc_configuration - computed: true, optional: false, required: false
  public get vpcConfiguration() {
    return this.interpolationForAttribute('vpc_configuration') as any;
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attachment_configuration: dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToTerraform(struct!.attachmentConfiguration),
    blog_configuration: dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToTerraform(struct!.blogConfiguration),
    exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusionPatterns),
    inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.inclusionPatterns),
    page_configuration: dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToTerraform(struct!.pageConfiguration),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    server_url: cdktf.stringToTerraform(struct!.serverUrl),
    space_configuration: dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToTerraform(struct!.spaceConfiguration),
    version: cdktf.stringToTerraform(struct!.version),
    vpc_configuration: dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration extends cdktf.ComplexComputedList {

  // allowed_groups_column_name - computed: true, optional: false, required: false
  public get allowedGroupsColumnName() {
    return this.getStringAttribute('allowed_groups_column_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_groups_column_name: cdktf.stringToTerraform(struct!.allowedGroupsColumnName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings extends cdktf.ComplexComputedList {

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration extends cdktf.ComplexComputedList {

  // change_detecting_columns - computed: true, optional: false, required: false
  public get changeDetectingColumns() {
    return this.getListAttribute('change_detecting_columns');
  }

  // document_data_column_name - computed: true, optional: false, required: false
  public get documentDataColumnName() {
    return this.getStringAttribute('document_data_column_name');
  }

  // document_id_column_name - computed: true, optional: false, required: false
  public get documentIdColumnName() {
    return this.getStringAttribute('document_id_column_name');
  }

  // document_title_column_name - computed: true, optional: false, required: false
  public get documentTitleColumnName() {
    return this.getStringAttribute('document_title_column_name');
  }

  // field_mappings - computed: true, optional: false, required: false
  public get fieldMappings() {
    return this.interpolationForAttribute('field_mappings') as any;
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    change_detecting_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.changeDetectingColumns),
    document_data_column_name: cdktf.stringToTerraform(struct!.documentDataColumnName),
    document_id_column_name: cdktf.stringToTerraform(struct!.documentIdColumnName),
    document_title_column_name: cdktf.stringToTerraform(struct!.documentTitleColumnName),
    field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration extends cdktf.ComplexComputedList {

  // database_host - computed: true, optional: false, required: false
  public get databaseHost() {
    return this.getStringAttribute('database_host');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_port - computed: true, optional: false, required: false
  public get databasePort() {
    return this.getNumberAttribute('database_port');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_host: cdktf.stringToTerraform(struct!.databaseHost),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    database_port: cdktf.numberToTerraform(struct!.databasePort),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration extends cdktf.ComplexComputedList {

  // query_identifiers_enclosing_option - computed: true, optional: false, required: false
  public get queryIdentifiersEnclosingOption() {
    return this.getStringAttribute('query_identifiers_enclosing_option');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query_identifiers_enclosing_option: cdktf.stringToTerraform(struct!.queryIdentifiersEnclosingOption),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration extends cdktf.ComplexComputedList {

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfiguration extends cdktf.ComplexComputedList {

  // acl_configuration - computed: true, optional: false, required: false
  public get aclConfiguration() {
    return this.interpolationForAttribute('acl_configuration') as any;
  }

  // column_configuration - computed: true, optional: false, required: false
  public get columnConfiguration() {
    return this.interpolationForAttribute('column_configuration') as any;
  }

  // connection_configuration - computed: true, optional: false, required: false
  public get connectionConfiguration() {
    return this.interpolationForAttribute('connection_configuration') as any;
  }

  // database_engine_type - computed: true, optional: false, required: false
  public get databaseEngineType() {
    return this.getStringAttribute('database_engine_type');
  }

  // sql_configuration - computed: true, optional: false, required: false
  public get sqlConfiguration() {
    return this.interpolationForAttribute('sql_configuration') as any;
  }

  // vpc_configuration - computed: true, optional: false, required: false
  public get vpcConfiguration() {
    return this.interpolationForAttribute('vpc_configuration') as any;
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acl_configuration: dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToTerraform(struct!.aclConfiguration),
    column_configuration: dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToTerraform(struct!.columnConfiguration),
    connection_configuration: dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToTerraform(struct!.connectionConfiguration),
    database_engine_type: cdktf.stringToTerraform(struct!.databaseEngineType),
    sql_configuration: dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToTerraform(struct!.sqlConfiguration),
    vpc_configuration: dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings extends cdktf.ComplexComputedList {

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfiguration extends cdktf.ComplexComputedList {

  // exclude_mime_types - computed: true, optional: false, required: false
  public get excludeMimeTypes() {
    return this.getListAttribute('exclude_mime_types');
  }

  // exclude_shared_drives - computed: true, optional: false, required: false
  public get excludeSharedDrives() {
    return this.getListAttribute('exclude_shared_drives');
  }

  // exclude_user_accounts - computed: true, optional: false, required: false
  public get excludeUserAccounts() {
    return this.getListAttribute('exclude_user_accounts');
  }

  // exclusion_patterns - computed: true, optional: false, required: false
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }

  // field_mappings - computed: true, optional: false, required: false
  public get fieldMappings() {
    return this.interpolationForAttribute('field_mappings') as any;
  }

  // inclusion_patterns - computed: true, optional: false, required: false
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exclude_mime_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeMimeTypes),
    exclude_shared_drives: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeSharedDrives),
    exclude_user_accounts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeUserAccounts),
    exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusionPatterns),
    field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
    inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.inclusionPatterns),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings extends cdktf.ComplexComputedList {

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers extends cdktf.ComplexComputedList {

  // one_drive_user_list - computed: true, optional: false, required: false
  public get oneDriveUserList() {
    return this.getListAttribute('one_drive_user_list');
  }

  // one_drive_user_s3_path - computed: true, optional: false, required: false
  public get oneDriveUserS3Path() {
    return this.interpolationForAttribute('one_drive_user_s3_path') as any;
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    one_drive_user_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oneDriveUserList),
    one_drive_user_s3_path: dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToTerraform(struct!.oneDriveUserS3Path),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfiguration extends cdktf.ComplexComputedList {

  // disable_local_groups - computed: true, optional: false, required: false
  public get disableLocalGroups() {
    return this.getBooleanAttribute('disable_local_groups');
  }

  // exclusion_patterns - computed: true, optional: false, required: false
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }

  // field_mappings - computed: true, optional: false, required: false
  public get fieldMappings() {
    return this.interpolationForAttribute('field_mappings') as any;
  }

  // inclusion_patterns - computed: true, optional: false, required: false
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }

  // one_drive_users - computed: true, optional: false, required: false
  public get oneDriveUsers() {
    return this.interpolationForAttribute('one_drive_users') as any;
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // tenant_domain - computed: true, optional: false, required: false
  public get tenantDomain() {
    return this.getStringAttribute('tenant_domain');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_local_groups: cdktf.booleanToTerraform(struct!.disableLocalGroups),
    exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusionPatterns),
    field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
    inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.inclusionPatterns),
    one_drive_users: dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToTerraform(struct!.oneDriveUsers),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    tenant_domain: cdktf.stringToTerraform(struct!.tenantDomain),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration extends cdktf.ComplexComputedList {

  // key_path - computed: true, optional: false, required: false
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_path: cdktf.stringToTerraform(struct!.keyPath),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration extends cdktf.ComplexComputedList {

  // s3_prefix - computed: true, optional: false, required: false
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_prefix: cdktf.stringToTerraform(struct!.s3Prefix),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationS3Configuration extends cdktf.ComplexComputedList {

  // access_control_list_configuration - computed: true, optional: false, required: false
  public get accessControlListConfiguration() {
    return this.interpolationForAttribute('access_control_list_configuration') as any;
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // documents_metadata_configuration - computed: true, optional: false, required: false
  public get documentsMetadataConfiguration() {
    return this.interpolationForAttribute('documents_metadata_configuration') as any;
  }

  // exclusion_patterns - computed: true, optional: false, required: false
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }

  // inclusion_patterns - computed: true, optional: false, required: false
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }

  // inclusion_prefixes - computed: true, optional: false, required: false
  public get inclusionPrefixes() {
    return this.getListAttribute('inclusion_prefixes');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_control_list_configuration: dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform(struct!.accessControlListConfiguration),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    documents_metadata_configuration: dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform(struct!.documentsMetadataConfiguration),
    exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusionPatterns),
    inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.inclusionPatterns),
    inclusion_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.inclusionPrefixes),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings extends cdktf.ComplexComputedList {

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration extends cdktf.ComplexComputedList {

  // document_data_field_name - computed: true, optional: false, required: false
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }

  // document_title_field_name - computed: true, optional: false, required: false
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }

  // field_mappings - computed: true, optional: false, required: false
  public get fieldMappings() {
    return this.interpolationForAttribute('field_mappings') as any;
  }

  // include_filter_types - computed: true, optional: false, required: false
  public get includeFilterTypes() {
    return this.getListAttribute('include_filter_types');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    document_data_field_name: cdktf.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktf.stringToTerraform(struct!.documentTitleFieldName),
    field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
    include_filter_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includeFilterTypes),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings extends cdktf.ComplexComputedList {

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations extends cdktf.ComplexComputedList {

  // document_data_field_name - computed: true, optional: false, required: false
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }

  // document_title_field_name - computed: true, optional: false, required: false
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }

  // field_mappings - computed: true, optional: false, required: false
  public get fieldMappings() {
    return this.interpolationForAttribute('field_mappings') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    document_data_field_name: cdktf.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktf.stringToTerraform(struct!.documentTitleFieldName),
    field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToTerraform)(struct!.fieldMappings),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings extends cdktf.ComplexComputedList {

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration extends cdktf.ComplexComputedList {

  // document_data_field_name - computed: true, optional: false, required: false
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }

  // document_title_field_name - computed: true, optional: false, required: false
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }

  // field_mappings - computed: true, optional: false, required: false
  public get fieldMappings() {
    return this.interpolationForAttribute('field_mappings') as any;
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    document_data_field_name: cdktf.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktf.stringToTerraform(struct!.documentTitleFieldName),
    field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration extends cdktf.ComplexComputedList {

  // custom_knowledge_article_type_configurations - computed: true, optional: false, required: false
  public get customKnowledgeArticleTypeConfigurations() {
    return this.interpolationForAttribute('custom_knowledge_article_type_configurations') as any;
  }

  // included_states - computed: true, optional: false, required: false
  public get includedStates() {
    return this.getListAttribute('included_states');
  }

  // standard_knowledge_article_type_configuration - computed: true, optional: false, required: false
  public get standardKnowledgeArticleTypeConfiguration() {
    return this.interpolationForAttribute('standard_knowledge_article_type_configuration') as any;
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_knowledge_article_type_configurations: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToTerraform)(struct!.customKnowledgeArticleTypeConfigurations),
    included_states: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedStates),
    standard_knowledge_article_type_configuration: dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToTerraform(struct!.standardKnowledgeArticleTypeConfiguration),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings extends cdktf.ComplexComputedList {

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration extends cdktf.ComplexComputedList {

  // document_title_field_name - computed: true, optional: false, required: false
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }

  // field_mappings - computed: true, optional: false, required: false
  public get fieldMappings() {
    return this.interpolationForAttribute('field_mappings') as any;
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    document_title_field_name: cdktf.stringToTerraform(struct!.documentTitleFieldName),
    field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings extends cdktf.ComplexComputedList {

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations extends cdktf.ComplexComputedList {

  // document_data_field_name - computed: true, optional: false, required: false
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }

  // document_title_field_name - computed: true, optional: false, required: false
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }

  // field_mappings - computed: true, optional: false, required: false
  public get fieldMappings() {
    return this.interpolationForAttribute('field_mappings') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    document_data_field_name: cdktf.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktf.stringToTerraform(struct!.documentTitleFieldName),
    field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToTerraform)(struct!.fieldMappings),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfiguration extends cdktf.ComplexComputedList {

  // chatter_feed_configuration - computed: true, optional: false, required: false
  public get chatterFeedConfiguration() {
    return this.interpolationForAttribute('chatter_feed_configuration') as any;
  }

  // crawl_attachments - computed: true, optional: false, required: false
  public get crawlAttachments() {
    return this.getBooleanAttribute('crawl_attachments');
  }

  // exclude_attachment_file_patterns - computed: true, optional: false, required: false
  public get excludeAttachmentFilePatterns() {
    return this.getListAttribute('exclude_attachment_file_patterns');
  }

  // include_attachment_file_patterns - computed: true, optional: false, required: false
  public get includeAttachmentFilePatterns() {
    return this.getListAttribute('include_attachment_file_patterns');
  }

  // knowledge_article_configuration - computed: true, optional: false, required: false
  public get knowledgeArticleConfiguration() {
    return this.interpolationForAttribute('knowledge_article_configuration') as any;
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // server_url - computed: true, optional: false, required: false
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }

  // standard_object_attachment_configuration - computed: true, optional: false, required: false
  public get standardObjectAttachmentConfiguration() {
    return this.interpolationForAttribute('standard_object_attachment_configuration') as any;
  }

  // standard_object_configurations - computed: true, optional: false, required: false
  public get standardObjectConfigurations() {
    return this.interpolationForAttribute('standard_object_configurations') as any;
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    chatter_feed_configuration: dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToTerraform(struct!.chatterFeedConfiguration),
    crawl_attachments: cdktf.booleanToTerraform(struct!.crawlAttachments),
    exclude_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeAttachmentFilePatterns),
    include_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includeAttachmentFilePatterns),
    knowledge_article_configuration: dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToTerraform(struct!.knowledgeArticleConfiguration),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    server_url: cdktf.stringToTerraform(struct!.serverUrl),
    standard_object_attachment_configuration: dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToTerraform(struct!.standardObjectAttachmentConfiguration),
    standard_object_configurations: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToTerraform)(struct!.standardObjectConfigurations),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings extends cdktf.ComplexComputedList {

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration extends cdktf.ComplexComputedList {

  // crawl_attachments - computed: true, optional: false, required: false
  public get crawlAttachments() {
    return this.getBooleanAttribute('crawl_attachments');
  }

  // document_data_field_name - computed: true, optional: false, required: false
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }

  // document_title_field_name - computed: true, optional: false, required: false
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }

  // exclude_attachment_file_patterns - computed: true, optional: false, required: false
  public get excludeAttachmentFilePatterns() {
    return this.getListAttribute('exclude_attachment_file_patterns');
  }

  // field_mappings - computed: true, optional: false, required: false
  public get fieldMappings() {
    return this.interpolationForAttribute('field_mappings') as any;
  }

  // include_attachment_file_patterns - computed: true, optional: false, required: false
  public get includeAttachmentFilePatterns() {
    return this.getListAttribute('include_attachment_file_patterns');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    crawl_attachments: cdktf.booleanToTerraform(struct!.crawlAttachments),
    document_data_field_name: cdktf.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktf.stringToTerraform(struct!.documentTitleFieldName),
    exclude_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeAttachmentFilePatterns),
    field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
    include_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includeAttachmentFilePatterns),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings extends cdktf.ComplexComputedList {

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration extends cdktf.ComplexComputedList {

  // crawl_attachments - computed: true, optional: false, required: false
  public get crawlAttachments() {
    return this.getBooleanAttribute('crawl_attachments');
  }

  // document_data_field_name - computed: true, optional: false, required: false
  public get documentDataFieldName() {
    return this.getStringAttribute('document_data_field_name');
  }

  // document_title_field_name - computed: true, optional: false, required: false
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }

  // exclude_attachment_file_patterns - computed: true, optional: false, required: false
  public get excludeAttachmentFilePatterns() {
    return this.getListAttribute('exclude_attachment_file_patterns');
  }

  // field_mappings - computed: true, optional: false, required: false
  public get fieldMappings() {
    return this.interpolationForAttribute('field_mappings') as any;
  }

  // include_attachment_file_patterns - computed: true, optional: false, required: false
  public get includeAttachmentFilePatterns() {
    return this.getListAttribute('include_attachment_file_patterns');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    crawl_attachments: cdktf.booleanToTerraform(struct!.crawlAttachments),
    document_data_field_name: cdktf.stringToTerraform(struct!.documentDataFieldName),
    document_title_field_name: cdktf.stringToTerraform(struct!.documentTitleFieldName),
    exclude_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeAttachmentFilePatterns),
    field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
    include_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includeAttachmentFilePatterns),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfiguration extends cdktf.ComplexComputedList {

  // host_url - computed: true, optional: false, required: false
  public get hostUrl() {
    return this.getStringAttribute('host_url');
  }

  // knowledge_article_configuration - computed: true, optional: false, required: false
  public get knowledgeArticleConfiguration() {
    return this.interpolationForAttribute('knowledge_article_configuration') as any;
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // service_catalog_configuration - computed: true, optional: false, required: false
  public get serviceCatalogConfiguration() {
    return this.interpolationForAttribute('service_catalog_configuration') as any;
  }

  // service_now_build_version - computed: true, optional: false, required: false
  public get serviceNowBuildVersion() {
    return this.getStringAttribute('service_now_build_version');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_url: cdktf.stringToTerraform(struct!.hostUrl),
    knowledge_article_configuration: dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToTerraform(struct!.knowledgeArticleConfiguration),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    service_catalog_configuration: dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToTerraform(struct!.serviceCatalogConfiguration),
    service_now_build_version: cdktf.stringToTerraform(struct!.serviceNowBuildVersion),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings extends cdktf.ComplexComputedList {

  // data_source_field_name - computed: true, optional: false, required: false
  public get dataSourceFieldName() {
    return this.getStringAttribute('data_source_field_name');
  }

  // date_field_format - computed: true, optional: false, required: false
  public get dateFieldFormat() {
    return this.getStringAttribute('date_field_format');
  }

  // index_field_name - computed: true, optional: false, required: false
  public get indexFieldName() {
    return this.getStringAttribute('index_field_name');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_source_field_name: cdktf.stringToTerraform(struct!.dataSourceFieldName),
    date_field_format: cdktf.stringToTerraform(struct!.dateFieldFormat),
    index_field_name: cdktf.stringToTerraform(struct!.indexFieldName),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration extends cdktf.ComplexComputedList {

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfiguration extends cdktf.ComplexComputedList {

  // crawl_attachments - computed: true, optional: false, required: false
  public get crawlAttachments() {
    return this.getBooleanAttribute('crawl_attachments');
  }

  // disable_local_groups - computed: true, optional: false, required: false
  public get disableLocalGroups() {
    return this.getBooleanAttribute('disable_local_groups');
  }

  // document_title_field_name - computed: true, optional: false, required: false
  public get documentTitleFieldName() {
    return this.getStringAttribute('document_title_field_name');
  }

  // exclusion_patterns - computed: true, optional: false, required: false
  public get exclusionPatterns() {
    return this.getListAttribute('exclusion_patterns');
  }

  // field_mappings - computed: true, optional: false, required: false
  public get fieldMappings() {
    return this.interpolationForAttribute('field_mappings') as any;
  }

  // inclusion_patterns - computed: true, optional: false, required: false
  public get inclusionPatterns() {
    return this.getListAttribute('inclusion_patterns');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // share_point_version - computed: true, optional: false, required: false
  public get sharePointVersion() {
    return this.getStringAttribute('share_point_version');
  }

  // urls - computed: true, optional: false, required: false
  public get urls() {
    return this.getListAttribute('urls');
  }

  // use_change_log - computed: true, optional: false, required: false
  public get useChangeLog() {
    return this.getBooleanAttribute('use_change_log');
  }

  // vpc_configuration - computed: true, optional: false, required: false
  public get vpcConfiguration() {
    return this.interpolationForAttribute('vpc_configuration') as any;
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    crawl_attachments: cdktf.booleanToTerraform(struct!.crawlAttachments),
    disable_local_groups: cdktf.booleanToTerraform(struct!.disableLocalGroups),
    document_title_field_name: cdktf.stringToTerraform(struct!.documentTitleFieldName),
    exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusionPatterns),
    field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToTerraform)(struct!.fieldMappings),
    inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.inclusionPatterns),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    share_point_version: cdktf.stringToTerraform(struct!.sharePointVersion),
    urls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.urls),
    use_change_log: cdktf.booleanToTerraform(struct!.useChangeLog),
    vpc_configuration: dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}

export class DataAwsccKendraDataSourceDataSourceConfiguration extends cdktf.ComplexComputedList {

  // confluence_configuration - computed: true, optional: false, required: false
  public get confluenceConfiguration() {
    return this.interpolationForAttribute('confluence_configuration') as any;
  }

  // database_configuration - computed: true, optional: false, required: false
  public get databaseConfiguration() {
    return this.interpolationForAttribute('database_configuration') as any;
  }

  // google_drive_configuration - computed: true, optional: false, required: false
  public get googleDriveConfiguration() {
    return this.interpolationForAttribute('google_drive_configuration') as any;
  }

  // one_drive_configuration - computed: true, optional: false, required: false
  public get oneDriveConfiguration() {
    return this.interpolationForAttribute('one_drive_configuration') as any;
  }

  // s3_configuration - computed: true, optional: false, required: false
  public get s3Configuration() {
    return this.interpolationForAttribute('s3_configuration') as any;
  }

  // salesforce_configuration - computed: true, optional: false, required: false
  public get salesforceConfiguration() {
    return this.interpolationForAttribute('salesforce_configuration') as any;
  }

  // service_now_configuration - computed: true, optional: false, required: false
  public get serviceNowConfiguration() {
    return this.interpolationForAttribute('service_now_configuration') as any;
  }

  // share_point_configuration - computed: true, optional: false, required: false
  public get sharePointConfiguration() {
    return this.interpolationForAttribute('share_point_configuration') as any;
  }
}

export function dataAwsccKendraDataSourceDataSourceConfigurationToTerraform(struct?: DataAwsccKendraDataSourceDataSourceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    confluence_configuration: dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform(struct!.confluenceConfiguration),
    database_configuration: dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationToTerraform(struct!.databaseConfiguration),
    google_drive_configuration: dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToTerraform(struct!.googleDriveConfiguration),
    one_drive_configuration: dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationToTerraform(struct!.oneDriveConfiguration),
    s3_configuration: dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
    salesforce_configuration: dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform(struct!.salesforceConfiguration),
    service_now_configuration: dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationToTerraform(struct!.serviceNowConfiguration),
    share_point_configuration: dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationToTerraform(struct!.sharePointConfiguration),
  }
}

export class DataAwsccKendraDataSourceTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccKendraDataSourceTagsToTerraform(struct?: DataAwsccKendraDataSourceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/kendra_data_source.html awscc_kendra_data_source}
*/
export class DataAwsccKendraDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_kendra_data_source";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/kendra_data_source.html awscc_kendra_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccKendraDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccKendraDataSourceConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_source_configuration - computed: true, optional: false, required: false
  public get dataSourceConfiguration() {
    return this.interpolationForAttribute('data_source_configuration') as any;
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

  // index_id - computed: true, optional: false, required: false
  public get indexId() {
    return this.getStringAttribute('index_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
