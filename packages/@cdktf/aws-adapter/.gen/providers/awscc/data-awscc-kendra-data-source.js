"use strict";
// https://www.terraform.io/docs/providers/awscc/d/kendra_data_source.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers = exports.dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path = exports.dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings = exports.dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings = exports.dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings = exports.dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings = exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings = exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings = exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings = void 0;
exports.DataAwsccKendraDataSource = exports.dataAwsccKendraDataSourceTagsToTerraform = exports.DataAwsccKendraDataSourceTags = exports.dataAwsccKendraDataSourceDataSourceConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings = exports.dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings = exports.dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings = exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations = exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings = exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings = exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings = exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations = exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings = exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration = exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings = exports.dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationToTerraform = exports.DataAwsccKendraDataSourceDataSourceConfigurationS3Configuration = void 0;
const cdktf = require("cdktf");
class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings extends cdktf.ComplexComputedList {
    // data_source_field_name - computed: true, optional: false, required: false
    get dataSourceFieldName() {
        return this.getStringAttribute('data_source_field_name');
    }
    // date_field_format - computed: true, optional: false, required: false
    get dateFieldFormat() {
        return this.getStringAttribute('date_field_format');
    }
    // index_field_name - computed: true, optional: false, required: false
    get indexFieldName() {
        return this.getStringAttribute('index_field_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings = DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappings;
function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_field_name: cdktf.stringToTerraform(struct.dataSourceFieldName),
        date_field_format: cdktf.stringToTerraform(struct.dateFieldFormat),
        index_field_name: cdktf.stringToTerraform(struct.indexFieldName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration extends cdktf.ComplexComputedList {
    // attachment_field_mappings - computed: true, optional: false, required: false
    get attachmentFieldMappings() {
        return this.interpolationForAttribute('attachment_field_mappings');
    }
    // crawl_attachments - computed: true, optional: false, required: false
    get crawlAttachments() {
        return this.getBooleanAttribute('crawl_attachments');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attachment_field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationAttachmentFieldMappingsToTerraform)(struct.attachmentFieldMappings),
        crawl_attachments: cdktf.booleanToTerraform(struct.crawlAttachments),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings extends cdktf.ComplexComputedList {
    // data_source_field_name - computed: true, optional: false, required: false
    get dataSourceFieldName() {
        return this.getStringAttribute('data_source_field_name');
    }
    // date_field_format - computed: true, optional: false, required: false
    get dateFieldFormat() {
        return this.getStringAttribute('date_field_format');
    }
    // index_field_name - computed: true, optional: false, required: false
    get indexFieldName() {
        return this.getStringAttribute('index_field_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings = DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappings;
function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_field_name: cdktf.stringToTerraform(struct.dataSourceFieldName),
        date_field_format: cdktf.stringToTerraform(struct.dateFieldFormat),
        index_field_name: cdktf.stringToTerraform(struct.indexFieldName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration extends cdktf.ComplexComputedList {
    // blog_field_mappings - computed: true, optional: false, required: false
    get blogFieldMappings() {
        return this.interpolationForAttribute('blog_field_mappings');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        blog_field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationBlogFieldMappingsToTerraform)(struct.blogFieldMappings),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings extends cdktf.ComplexComputedList {
    // data_source_field_name - computed: true, optional: false, required: false
    get dataSourceFieldName() {
        return this.getStringAttribute('data_source_field_name');
    }
    // date_field_format - computed: true, optional: false, required: false
    get dateFieldFormat() {
        return this.getStringAttribute('date_field_format');
    }
    // index_field_name - computed: true, optional: false, required: false
    get indexFieldName() {
        return this.getStringAttribute('index_field_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings = DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappings;
function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_field_name: cdktf.stringToTerraform(struct.dataSourceFieldName),
        date_field_format: cdktf.stringToTerraform(struct.dateFieldFormat),
        index_field_name: cdktf.stringToTerraform(struct.indexFieldName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration extends cdktf.ComplexComputedList {
    // page_field_mappings - computed: true, optional: false, required: false
    get pageFieldMappings() {
        return this.interpolationForAttribute('page_field_mappings');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        page_field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationPageFieldMappingsToTerraform)(struct.pageFieldMappings),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings extends cdktf.ComplexComputedList {
    // data_source_field_name - computed: true, optional: false, required: false
    get dataSourceFieldName() {
        return this.getStringAttribute('data_source_field_name');
    }
    // date_field_format - computed: true, optional: false, required: false
    get dateFieldFormat() {
        return this.getStringAttribute('date_field_format');
    }
    // index_field_name - computed: true, optional: false, required: false
    get indexFieldName() {
        return this.getStringAttribute('index_field_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings = DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappings;
function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_field_name: cdktf.stringToTerraform(struct.dataSourceFieldName),
        date_field_format: cdktf.stringToTerraform(struct.dateFieldFormat),
        index_field_name: cdktf.stringToTerraform(struct.indexFieldName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration extends cdktf.ComplexComputedList {
    // crawl_archived_spaces - computed: true, optional: false, required: false
    get crawlArchivedSpaces() {
        return this.getBooleanAttribute('crawl_archived_spaces');
    }
    // crawl_personal_spaces - computed: true, optional: false, required: false
    get crawlPersonalSpaces() {
        return this.getBooleanAttribute('crawl_personal_spaces');
    }
    // exclude_spaces - computed: true, optional: false, required: false
    get excludeSpaces() {
        return this.getListAttribute('exclude_spaces');
    }
    // include_spaces - computed: true, optional: false, required: false
    get includeSpaces() {
        return this.getListAttribute('include_spaces');
    }
    // space_field_mappings - computed: true, optional: false, required: false
    get spaceFieldMappings() {
        return this.interpolationForAttribute('space_field_mappings');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        crawl_archived_spaces: cdktf.booleanToTerraform(struct.crawlArchivedSpaces),
        crawl_personal_spaces: cdktf.booleanToTerraform(struct.crawlPersonalSpaces),
        exclude_spaces: cdktf.listMapper(cdktf.stringToTerraform)(struct.excludeSpaces),
        include_spaces: cdktf.listMapper(cdktf.stringToTerraform)(struct.includeSpaces),
        space_field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationSpaceFieldMappingsToTerraform)(struct.spaceFieldMappings),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration extends cdktf.ComplexComputedList {
    // security_group_ids - computed: true, optional: false, required: false
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    // subnet_ids - computed: true, optional: false, required: false
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfiguration extends cdktf.ComplexComputedList {
    // attachment_configuration - computed: true, optional: false, required: false
    get attachmentConfiguration() {
        return this.interpolationForAttribute('attachment_configuration');
    }
    // blog_configuration - computed: true, optional: false, required: false
    get blogConfiguration() {
        return this.interpolationForAttribute('blog_configuration');
    }
    // exclusion_patterns - computed: true, optional: false, required: false
    get exclusionPatterns() {
        return this.getListAttribute('exclusion_patterns');
    }
    // inclusion_patterns - computed: true, optional: false, required: false
    get inclusionPatterns() {
        return this.getListAttribute('inclusion_patterns');
    }
    // page_configuration - computed: true, optional: false, required: false
    get pageConfiguration() {
        return this.interpolationForAttribute('page_configuration');
    }
    // secret_arn - computed: true, optional: false, required: false
    get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    // server_url - computed: true, optional: false, required: false
    get serverUrl() {
        return this.getStringAttribute('server_url');
    }
    // space_configuration - computed: true, optional: false, required: false
    get spaceConfiguration() {
        return this.interpolationForAttribute('space_configuration');
    }
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getStringAttribute('version');
    }
    // vpc_configuration - computed: true, optional: false, required: false
    get vpcConfiguration() {
        return this.interpolationForAttribute('vpc_configuration');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attachment_configuration: dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationAttachmentConfigurationToTerraform(struct.attachmentConfiguration),
        blog_configuration: dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationBlogConfigurationToTerraform(struct.blogConfiguration),
        exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.exclusionPatterns),
        inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.inclusionPatterns),
        page_configuration: dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationPageConfigurationToTerraform(struct.pageConfiguration),
        secret_arn: cdktf.stringToTerraform(struct.secretArn),
        server_url: cdktf.stringToTerraform(struct.serverUrl),
        space_configuration: dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationSpaceConfigurationToTerraform(struct.spaceConfiguration),
        version: cdktf.stringToTerraform(struct.version),
        vpc_configuration: dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationVpcConfigurationToTerraform(struct.vpcConfiguration),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration extends cdktf.ComplexComputedList {
    // allowed_groups_column_name - computed: true, optional: false, required: false
    get allowedGroupsColumnName() {
        return this.getStringAttribute('allowed_groups_column_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allowed_groups_column_name: cdktf.stringToTerraform(struct.allowedGroupsColumnName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings extends cdktf.ComplexComputedList {
    // data_source_field_name - computed: true, optional: false, required: false
    get dataSourceFieldName() {
        return this.getStringAttribute('data_source_field_name');
    }
    // date_field_format - computed: true, optional: false, required: false
    get dateFieldFormat() {
        return this.getStringAttribute('date_field_format');
    }
    // index_field_name - computed: true, optional: false, required: false
    get indexFieldName() {
        return this.getStringAttribute('index_field_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings = DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappings;
function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_field_name: cdktf.stringToTerraform(struct.dataSourceFieldName),
        date_field_format: cdktf.stringToTerraform(struct.dateFieldFormat),
        index_field_name: cdktf.stringToTerraform(struct.indexFieldName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration extends cdktf.ComplexComputedList {
    // change_detecting_columns - computed: true, optional: false, required: false
    get changeDetectingColumns() {
        return this.getListAttribute('change_detecting_columns');
    }
    // document_data_column_name - computed: true, optional: false, required: false
    get documentDataColumnName() {
        return this.getStringAttribute('document_data_column_name');
    }
    // document_id_column_name - computed: true, optional: false, required: false
    get documentIdColumnName() {
        return this.getStringAttribute('document_id_column_name');
    }
    // document_title_column_name - computed: true, optional: false, required: false
    get documentTitleColumnName() {
        return this.getStringAttribute('document_title_column_name');
    }
    // field_mappings - computed: true, optional: false, required: false
    get fieldMappings() {
        return this.interpolationForAttribute('field_mappings');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        change_detecting_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct.changeDetectingColumns),
        document_data_column_name: cdktf.stringToTerraform(struct.documentDataColumnName),
        document_id_column_name: cdktf.stringToTerraform(struct.documentIdColumnName),
        document_title_column_name: cdktf.stringToTerraform(struct.documentTitleColumnName),
        field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationFieldMappingsToTerraform)(struct.fieldMappings),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration extends cdktf.ComplexComputedList {
    // database_host - computed: true, optional: false, required: false
    get databaseHost() {
        return this.getStringAttribute('database_host');
    }
    // database_name - computed: true, optional: false, required: false
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    // database_port - computed: true, optional: false, required: false
    get databasePort() {
        return this.getNumberAttribute('database_port');
    }
    // secret_arn - computed: true, optional: false, required: false
    get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    // table_name - computed: true, optional: false, required: false
    get tableName() {
        return this.getStringAttribute('table_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database_host: cdktf.stringToTerraform(struct.databaseHost),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        database_port: cdktf.numberToTerraform(struct.databasePort),
        secret_arn: cdktf.stringToTerraform(struct.secretArn),
        table_name: cdktf.stringToTerraform(struct.tableName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration extends cdktf.ComplexComputedList {
    // query_identifiers_enclosing_option - computed: true, optional: false, required: false
    get queryIdentifiersEnclosingOption() {
        return this.getStringAttribute('query_identifiers_enclosing_option');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        query_identifiers_enclosing_option: cdktf.stringToTerraform(struct.queryIdentifiersEnclosingOption),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration extends cdktf.ComplexComputedList {
    // security_group_ids - computed: true, optional: false, required: false
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    // subnet_ids - computed: true, optional: false, required: false
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfiguration extends cdktf.ComplexComputedList {
    // acl_configuration - computed: true, optional: false, required: false
    get aclConfiguration() {
        return this.interpolationForAttribute('acl_configuration');
    }
    // column_configuration - computed: true, optional: false, required: false
    get columnConfiguration() {
        return this.interpolationForAttribute('column_configuration');
    }
    // connection_configuration - computed: true, optional: false, required: false
    get connectionConfiguration() {
        return this.interpolationForAttribute('connection_configuration');
    }
    // database_engine_type - computed: true, optional: false, required: false
    get databaseEngineType() {
        return this.getStringAttribute('database_engine_type');
    }
    // sql_configuration - computed: true, optional: false, required: false
    get sqlConfiguration() {
        return this.interpolationForAttribute('sql_configuration');
    }
    // vpc_configuration - computed: true, optional: false, required: false
    get vpcConfiguration() {
        return this.interpolationForAttribute('vpc_configuration');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acl_configuration: dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationAclConfigurationToTerraform(struct.aclConfiguration),
        column_configuration: dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationColumnConfigurationToTerraform(struct.columnConfiguration),
        connection_configuration: dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationConnectionConfigurationToTerraform(struct.connectionConfiguration),
        database_engine_type: cdktf.stringToTerraform(struct.databaseEngineType),
        sql_configuration: dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationSqlConfigurationToTerraform(struct.sqlConfiguration),
        vpc_configuration: dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationVpcConfigurationToTerraform(struct.vpcConfiguration),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings extends cdktf.ComplexComputedList {
    // data_source_field_name - computed: true, optional: false, required: false
    get dataSourceFieldName() {
        return this.getStringAttribute('data_source_field_name');
    }
    // date_field_format - computed: true, optional: false, required: false
    get dateFieldFormat() {
        return this.getStringAttribute('date_field_format');
    }
    // index_field_name - computed: true, optional: false, required: false
    get indexFieldName() {
        return this.getStringAttribute('index_field_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings = DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappings;
function dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_field_name: cdktf.stringToTerraform(struct.dataSourceFieldName),
        date_field_format: cdktf.stringToTerraform(struct.dateFieldFormat),
        index_field_name: cdktf.stringToTerraform(struct.indexFieldName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfiguration extends cdktf.ComplexComputedList {
    // exclude_mime_types - computed: true, optional: false, required: false
    get excludeMimeTypes() {
        return this.getListAttribute('exclude_mime_types');
    }
    // exclude_shared_drives - computed: true, optional: false, required: false
    get excludeSharedDrives() {
        return this.getListAttribute('exclude_shared_drives');
    }
    // exclude_user_accounts - computed: true, optional: false, required: false
    get excludeUserAccounts() {
        return this.getListAttribute('exclude_user_accounts');
    }
    // exclusion_patterns - computed: true, optional: false, required: false
    get exclusionPatterns() {
        return this.getListAttribute('exclusion_patterns');
    }
    // field_mappings - computed: true, optional: false, required: false
    get fieldMappings() {
        return this.interpolationForAttribute('field_mappings');
    }
    // inclusion_patterns - computed: true, optional: false, required: false
    get inclusionPatterns() {
        return this.getListAttribute('inclusion_patterns');
    }
    // secret_arn - computed: true, optional: false, required: false
    get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exclude_mime_types: cdktf.listMapper(cdktf.stringToTerraform)(struct.excludeMimeTypes),
        exclude_shared_drives: cdktf.listMapper(cdktf.stringToTerraform)(struct.excludeSharedDrives),
        exclude_user_accounts: cdktf.listMapper(cdktf.stringToTerraform)(struct.excludeUserAccounts),
        exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.exclusionPatterns),
        field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationFieldMappingsToTerraform)(struct.fieldMappings),
        inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.inclusionPatterns),
        secret_arn: cdktf.stringToTerraform(struct.secretArn),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings extends cdktf.ComplexComputedList {
    // data_source_field_name - computed: true, optional: false, required: false
    get dataSourceFieldName() {
        return this.getStringAttribute('data_source_field_name');
    }
    // date_field_format - computed: true, optional: false, required: false
    get dateFieldFormat() {
        return this.getStringAttribute('date_field_format');
    }
    // index_field_name - computed: true, optional: false, required: false
    get indexFieldName() {
        return this.getStringAttribute('index_field_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings = DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappings;
function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_field_name: cdktf.stringToTerraform(struct.dataSourceFieldName),
        date_field_format: cdktf.stringToTerraform(struct.dateFieldFormat),
        index_field_name: cdktf.stringToTerraform(struct.indexFieldName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path extends cdktf.ComplexComputedList {
    // bucket - computed: true, optional: false, required: false
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path = DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3Path;
function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers extends cdktf.ComplexComputedList {
    // one_drive_user_list - computed: true, optional: false, required: false
    get oneDriveUserList() {
        return this.getListAttribute('one_drive_user_list');
    }
    // one_drive_user_s3_path - computed: true, optional: false, required: false
    get oneDriveUserS3Path() {
        return this.interpolationForAttribute('one_drive_user_s3_path');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers = DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsers;
function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        one_drive_user_list: cdktf.listMapper(cdktf.stringToTerraform)(struct.oneDriveUserList),
        one_drive_user_s3_path: dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersOneDriveUserS3PathToTerraform(struct.oneDriveUserS3Path),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfiguration extends cdktf.ComplexComputedList {
    // disable_local_groups - computed: true, optional: false, required: false
    get disableLocalGroups() {
        return this.getBooleanAttribute('disable_local_groups');
    }
    // exclusion_patterns - computed: true, optional: false, required: false
    get exclusionPatterns() {
        return this.getListAttribute('exclusion_patterns');
    }
    // field_mappings - computed: true, optional: false, required: false
    get fieldMappings() {
        return this.interpolationForAttribute('field_mappings');
    }
    // inclusion_patterns - computed: true, optional: false, required: false
    get inclusionPatterns() {
        return this.getListAttribute('inclusion_patterns');
    }
    // one_drive_users - computed: true, optional: false, required: false
    get oneDriveUsers() {
        return this.interpolationForAttribute('one_drive_users');
    }
    // secret_arn - computed: true, optional: false, required: false
    get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    // tenant_domain - computed: true, optional: false, required: false
    get tenantDomain() {
        return this.getStringAttribute('tenant_domain');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        disable_local_groups: cdktf.booleanToTerraform(struct.disableLocalGroups),
        exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.exclusionPatterns),
        field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationFieldMappingsToTerraform)(struct.fieldMappings),
        inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.inclusionPatterns),
        one_drive_users: dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationOneDriveUsersToTerraform(struct.oneDriveUsers),
        secret_arn: cdktf.stringToTerraform(struct.secretArn),
        tenant_domain: cdktf.stringToTerraform(struct.tenantDomain),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration extends cdktf.ComplexComputedList {
    // key_path - computed: true, optional: false, required: false
    get keyPath() {
        return this.getStringAttribute('key_path');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key_path: cdktf.stringToTerraform(struct.keyPath),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration extends cdktf.ComplexComputedList {
    // s3_prefix - computed: true, optional: false, required: false
    get s3Prefix() {
        return this.getStringAttribute('s3_prefix');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_prefix: cdktf.stringToTerraform(struct.s3Prefix),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationS3Configuration extends cdktf.ComplexComputedList {
    // access_control_list_configuration - computed: true, optional: false, required: false
    get accessControlListConfiguration() {
        return this.interpolationForAttribute('access_control_list_configuration');
    }
    // bucket_name - computed: true, optional: false, required: false
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    // documents_metadata_configuration - computed: true, optional: false, required: false
    get documentsMetadataConfiguration() {
        return this.interpolationForAttribute('documents_metadata_configuration');
    }
    // exclusion_patterns - computed: true, optional: false, required: false
    get exclusionPatterns() {
        return this.getListAttribute('exclusion_patterns');
    }
    // inclusion_patterns - computed: true, optional: false, required: false
    get inclusionPatterns() {
        return this.getListAttribute('inclusion_patterns');
    }
    // inclusion_prefixes - computed: true, optional: false, required: false
    get inclusionPrefixes() {
        return this.getListAttribute('inclusion_prefixes');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationS3Configuration = DataAwsccKendraDataSourceDataSourceConfigurationS3Configuration;
function dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_control_list_configuration: dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationAccessControlListConfigurationToTerraform(struct.accessControlListConfiguration),
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        documents_metadata_configuration: dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationToTerraform(struct.documentsMetadataConfiguration),
        exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.exclusionPatterns),
        inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.inclusionPatterns),
        inclusion_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct.inclusionPrefixes),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings extends cdktf.ComplexComputedList {
    // data_source_field_name - computed: true, optional: false, required: false
    get dataSourceFieldName() {
        return this.getStringAttribute('data_source_field_name');
    }
    // date_field_format - computed: true, optional: false, required: false
    get dateFieldFormat() {
        return this.getStringAttribute('date_field_format');
    }
    // index_field_name - computed: true, optional: false, required: false
    get indexFieldName() {
        return this.getStringAttribute('index_field_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings = DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappings;
function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_field_name: cdktf.stringToTerraform(struct.dataSourceFieldName),
        date_field_format: cdktf.stringToTerraform(struct.dateFieldFormat),
        index_field_name: cdktf.stringToTerraform(struct.indexFieldName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration extends cdktf.ComplexComputedList {
    // document_data_field_name - computed: true, optional: false, required: false
    get documentDataFieldName() {
        return this.getStringAttribute('document_data_field_name');
    }
    // document_title_field_name - computed: true, optional: false, required: false
    get documentTitleFieldName() {
        return this.getStringAttribute('document_title_field_name');
    }
    // field_mappings - computed: true, optional: false, required: false
    get fieldMappings() {
        return this.interpolationForAttribute('field_mappings');
    }
    // include_filter_types - computed: true, optional: false, required: false
    get includeFilterTypes() {
        return this.getListAttribute('include_filter_types');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        document_data_field_name: cdktf.stringToTerraform(struct.documentDataFieldName),
        document_title_field_name: cdktf.stringToTerraform(struct.documentTitleFieldName),
        field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationFieldMappingsToTerraform)(struct.fieldMappings),
        include_filter_types: cdktf.listMapper(cdktf.stringToTerraform)(struct.includeFilterTypes),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings extends cdktf.ComplexComputedList {
    // data_source_field_name - computed: true, optional: false, required: false
    get dataSourceFieldName() {
        return this.getStringAttribute('data_source_field_name');
    }
    // date_field_format - computed: true, optional: false, required: false
    get dateFieldFormat() {
        return this.getStringAttribute('date_field_format');
    }
    // index_field_name - computed: true, optional: false, required: false
    get indexFieldName() {
        return this.getStringAttribute('index_field_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings = DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappings;
function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_field_name: cdktf.stringToTerraform(struct.dataSourceFieldName),
        date_field_format: cdktf.stringToTerraform(struct.dateFieldFormat),
        index_field_name: cdktf.stringToTerraform(struct.indexFieldName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations extends cdktf.ComplexComputedList {
    // document_data_field_name - computed: true, optional: false, required: false
    get documentDataFieldName() {
        return this.getStringAttribute('document_data_field_name');
    }
    // document_title_field_name - computed: true, optional: false, required: false
    get documentTitleFieldName() {
        return this.getStringAttribute('document_title_field_name');
    }
    // field_mappings - computed: true, optional: false, required: false
    get fieldMappings() {
        return this.interpolationForAttribute('field_mappings');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations = DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurations;
function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        document_data_field_name: cdktf.stringToTerraform(struct.documentDataFieldName),
        document_title_field_name: cdktf.stringToTerraform(struct.documentTitleFieldName),
        field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsFieldMappingsToTerraform)(struct.fieldMappings),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings extends cdktf.ComplexComputedList {
    // data_source_field_name - computed: true, optional: false, required: false
    get dataSourceFieldName() {
        return this.getStringAttribute('data_source_field_name');
    }
    // date_field_format - computed: true, optional: false, required: false
    get dateFieldFormat() {
        return this.getStringAttribute('date_field_format');
    }
    // index_field_name - computed: true, optional: false, required: false
    get indexFieldName() {
        return this.getStringAttribute('index_field_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings = DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappings;
function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_field_name: cdktf.stringToTerraform(struct.dataSourceFieldName),
        date_field_format: cdktf.stringToTerraform(struct.dateFieldFormat),
        index_field_name: cdktf.stringToTerraform(struct.indexFieldName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration extends cdktf.ComplexComputedList {
    // document_data_field_name - computed: true, optional: false, required: false
    get documentDataFieldName() {
        return this.getStringAttribute('document_data_field_name');
    }
    // document_title_field_name - computed: true, optional: false, required: false
    get documentTitleFieldName() {
        return this.getStringAttribute('document_title_field_name');
    }
    // field_mappings - computed: true, optional: false, required: false
    get fieldMappings() {
        return this.interpolationForAttribute('field_mappings');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        document_data_field_name: cdktf.stringToTerraform(struct.documentDataFieldName),
        document_title_field_name: cdktf.stringToTerraform(struct.documentTitleFieldName),
        field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationFieldMappingsToTerraform)(struct.fieldMappings),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration extends cdktf.ComplexComputedList {
    // custom_knowledge_article_type_configurations - computed: true, optional: false, required: false
    get customKnowledgeArticleTypeConfigurations() {
        return this.interpolationForAttribute('custom_knowledge_article_type_configurations');
    }
    // included_states - computed: true, optional: false, required: false
    get includedStates() {
        return this.getListAttribute('included_states');
    }
    // standard_knowledge_article_type_configuration - computed: true, optional: false, required: false
    get standardKnowledgeArticleTypeConfiguration() {
        return this.interpolationForAttribute('standard_knowledge_article_type_configuration');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        custom_knowledge_article_type_configurations: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationCustomKnowledgeArticleTypeConfigurationsToTerraform)(struct.customKnowledgeArticleTypeConfigurations),
        included_states: cdktf.listMapper(cdktf.stringToTerraform)(struct.includedStates),
        standard_knowledge_article_type_configuration: dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationStandardKnowledgeArticleTypeConfigurationToTerraform(struct.standardKnowledgeArticleTypeConfiguration),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings extends cdktf.ComplexComputedList {
    // data_source_field_name - computed: true, optional: false, required: false
    get dataSourceFieldName() {
        return this.getStringAttribute('data_source_field_name');
    }
    // date_field_format - computed: true, optional: false, required: false
    get dateFieldFormat() {
        return this.getStringAttribute('date_field_format');
    }
    // index_field_name - computed: true, optional: false, required: false
    get indexFieldName() {
        return this.getStringAttribute('index_field_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings = DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappings;
function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_field_name: cdktf.stringToTerraform(struct.dataSourceFieldName),
        date_field_format: cdktf.stringToTerraform(struct.dateFieldFormat),
        index_field_name: cdktf.stringToTerraform(struct.indexFieldName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration extends cdktf.ComplexComputedList {
    // document_title_field_name - computed: true, optional: false, required: false
    get documentTitleFieldName() {
        return this.getStringAttribute('document_title_field_name');
    }
    // field_mappings - computed: true, optional: false, required: false
    get fieldMappings() {
        return this.interpolationForAttribute('field_mappings');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        document_title_field_name: cdktf.stringToTerraform(struct.documentTitleFieldName),
        field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationFieldMappingsToTerraform)(struct.fieldMappings),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings extends cdktf.ComplexComputedList {
    // data_source_field_name - computed: true, optional: false, required: false
    get dataSourceFieldName() {
        return this.getStringAttribute('data_source_field_name');
    }
    // date_field_format - computed: true, optional: false, required: false
    get dateFieldFormat() {
        return this.getStringAttribute('date_field_format');
    }
    // index_field_name - computed: true, optional: false, required: false
    get indexFieldName() {
        return this.getStringAttribute('index_field_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings = DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappings;
function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_field_name: cdktf.stringToTerraform(struct.dataSourceFieldName),
        date_field_format: cdktf.stringToTerraform(struct.dateFieldFormat),
        index_field_name: cdktf.stringToTerraform(struct.indexFieldName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations extends cdktf.ComplexComputedList {
    // document_data_field_name - computed: true, optional: false, required: false
    get documentDataFieldName() {
        return this.getStringAttribute('document_data_field_name');
    }
    // document_title_field_name - computed: true, optional: false, required: false
    get documentTitleFieldName() {
        return this.getStringAttribute('document_title_field_name');
    }
    // field_mappings - computed: true, optional: false, required: false
    get fieldMappings() {
        return this.interpolationForAttribute('field_mappings');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations = DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurations;
function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        document_data_field_name: cdktf.stringToTerraform(struct.documentDataFieldName),
        document_title_field_name: cdktf.stringToTerraform(struct.documentTitleFieldName),
        field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsFieldMappingsToTerraform)(struct.fieldMappings),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfiguration extends cdktf.ComplexComputedList {
    // chatter_feed_configuration - computed: true, optional: false, required: false
    get chatterFeedConfiguration() {
        return this.interpolationForAttribute('chatter_feed_configuration');
    }
    // crawl_attachments - computed: true, optional: false, required: false
    get crawlAttachments() {
        return this.getBooleanAttribute('crawl_attachments');
    }
    // exclude_attachment_file_patterns - computed: true, optional: false, required: false
    get excludeAttachmentFilePatterns() {
        return this.getListAttribute('exclude_attachment_file_patterns');
    }
    // include_attachment_file_patterns - computed: true, optional: false, required: false
    get includeAttachmentFilePatterns() {
        return this.getListAttribute('include_attachment_file_patterns');
    }
    // knowledge_article_configuration - computed: true, optional: false, required: false
    get knowledgeArticleConfiguration() {
        return this.interpolationForAttribute('knowledge_article_configuration');
    }
    // secret_arn - computed: true, optional: false, required: false
    get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    // server_url - computed: true, optional: false, required: false
    get serverUrl() {
        return this.getStringAttribute('server_url');
    }
    // standard_object_attachment_configuration - computed: true, optional: false, required: false
    get standardObjectAttachmentConfiguration() {
        return this.interpolationForAttribute('standard_object_attachment_configuration');
    }
    // standard_object_configurations - computed: true, optional: false, required: false
    get standardObjectConfigurations() {
        return this.interpolationForAttribute('standard_object_configurations');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        chatter_feed_configuration: dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationChatterFeedConfigurationToTerraform(struct.chatterFeedConfiguration),
        crawl_attachments: cdktf.booleanToTerraform(struct.crawlAttachments),
        exclude_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.excludeAttachmentFilePatterns),
        include_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.includeAttachmentFilePatterns),
        knowledge_article_configuration: dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationKnowledgeArticleConfigurationToTerraform(struct.knowledgeArticleConfiguration),
        secret_arn: cdktf.stringToTerraform(struct.secretArn),
        server_url: cdktf.stringToTerraform(struct.serverUrl),
        standard_object_attachment_configuration: dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectAttachmentConfigurationToTerraform(struct.standardObjectAttachmentConfiguration),
        standard_object_configurations: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationStandardObjectConfigurationsToTerraform)(struct.standardObjectConfigurations),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings extends cdktf.ComplexComputedList {
    // data_source_field_name - computed: true, optional: false, required: false
    get dataSourceFieldName() {
        return this.getStringAttribute('data_source_field_name');
    }
    // date_field_format - computed: true, optional: false, required: false
    get dateFieldFormat() {
        return this.getStringAttribute('date_field_format');
    }
    // index_field_name - computed: true, optional: false, required: false
    get indexFieldName() {
        return this.getStringAttribute('index_field_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings = DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappings;
function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_field_name: cdktf.stringToTerraform(struct.dataSourceFieldName),
        date_field_format: cdktf.stringToTerraform(struct.dateFieldFormat),
        index_field_name: cdktf.stringToTerraform(struct.indexFieldName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration extends cdktf.ComplexComputedList {
    // crawl_attachments - computed: true, optional: false, required: false
    get crawlAttachments() {
        return this.getBooleanAttribute('crawl_attachments');
    }
    // document_data_field_name - computed: true, optional: false, required: false
    get documentDataFieldName() {
        return this.getStringAttribute('document_data_field_name');
    }
    // document_title_field_name - computed: true, optional: false, required: false
    get documentTitleFieldName() {
        return this.getStringAttribute('document_title_field_name');
    }
    // exclude_attachment_file_patterns - computed: true, optional: false, required: false
    get excludeAttachmentFilePatterns() {
        return this.getListAttribute('exclude_attachment_file_patterns');
    }
    // field_mappings - computed: true, optional: false, required: false
    get fieldMappings() {
        return this.interpolationForAttribute('field_mappings');
    }
    // include_attachment_file_patterns - computed: true, optional: false, required: false
    get includeAttachmentFilePatterns() {
        return this.getListAttribute('include_attachment_file_patterns');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        crawl_attachments: cdktf.booleanToTerraform(struct.crawlAttachments),
        document_data_field_name: cdktf.stringToTerraform(struct.documentDataFieldName),
        document_title_field_name: cdktf.stringToTerraform(struct.documentTitleFieldName),
        exclude_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.excludeAttachmentFilePatterns),
        field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationFieldMappingsToTerraform)(struct.fieldMappings),
        include_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.includeAttachmentFilePatterns),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings extends cdktf.ComplexComputedList {
    // data_source_field_name - computed: true, optional: false, required: false
    get dataSourceFieldName() {
        return this.getStringAttribute('data_source_field_name');
    }
    // date_field_format - computed: true, optional: false, required: false
    get dateFieldFormat() {
        return this.getStringAttribute('date_field_format');
    }
    // index_field_name - computed: true, optional: false, required: false
    get indexFieldName() {
        return this.getStringAttribute('index_field_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings = DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappings;
function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_field_name: cdktf.stringToTerraform(struct.dataSourceFieldName),
        date_field_format: cdktf.stringToTerraform(struct.dateFieldFormat),
        index_field_name: cdktf.stringToTerraform(struct.indexFieldName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration extends cdktf.ComplexComputedList {
    // crawl_attachments - computed: true, optional: false, required: false
    get crawlAttachments() {
        return this.getBooleanAttribute('crawl_attachments');
    }
    // document_data_field_name - computed: true, optional: false, required: false
    get documentDataFieldName() {
        return this.getStringAttribute('document_data_field_name');
    }
    // document_title_field_name - computed: true, optional: false, required: false
    get documentTitleFieldName() {
        return this.getStringAttribute('document_title_field_name');
    }
    // exclude_attachment_file_patterns - computed: true, optional: false, required: false
    get excludeAttachmentFilePatterns() {
        return this.getListAttribute('exclude_attachment_file_patterns');
    }
    // field_mappings - computed: true, optional: false, required: false
    get fieldMappings() {
        return this.interpolationForAttribute('field_mappings');
    }
    // include_attachment_file_patterns - computed: true, optional: false, required: false
    get includeAttachmentFilePatterns() {
        return this.getListAttribute('include_attachment_file_patterns');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        crawl_attachments: cdktf.booleanToTerraform(struct.crawlAttachments),
        document_data_field_name: cdktf.stringToTerraform(struct.documentDataFieldName),
        document_title_field_name: cdktf.stringToTerraform(struct.documentTitleFieldName),
        exclude_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.excludeAttachmentFilePatterns),
        field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationFieldMappingsToTerraform)(struct.fieldMappings),
        include_attachment_file_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.includeAttachmentFilePatterns),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfiguration extends cdktf.ComplexComputedList {
    // host_url - computed: true, optional: false, required: false
    get hostUrl() {
        return this.getStringAttribute('host_url');
    }
    // knowledge_article_configuration - computed: true, optional: false, required: false
    get knowledgeArticleConfiguration() {
        return this.interpolationForAttribute('knowledge_article_configuration');
    }
    // secret_arn - computed: true, optional: false, required: false
    get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    // service_catalog_configuration - computed: true, optional: false, required: false
    get serviceCatalogConfiguration() {
        return this.interpolationForAttribute('service_catalog_configuration');
    }
    // service_now_build_version - computed: true, optional: false, required: false
    get serviceNowBuildVersion() {
        return this.getStringAttribute('service_now_build_version');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        host_url: cdktf.stringToTerraform(struct.hostUrl),
        knowledge_article_configuration: dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationKnowledgeArticleConfigurationToTerraform(struct.knowledgeArticleConfiguration),
        secret_arn: cdktf.stringToTerraform(struct.secretArn),
        service_catalog_configuration: dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationServiceCatalogConfigurationToTerraform(struct.serviceCatalogConfiguration),
        service_now_build_version: cdktf.stringToTerraform(struct.serviceNowBuildVersion),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings extends cdktf.ComplexComputedList {
    // data_source_field_name - computed: true, optional: false, required: false
    get dataSourceFieldName() {
        return this.getStringAttribute('data_source_field_name');
    }
    // date_field_format - computed: true, optional: false, required: false
    get dateFieldFormat() {
        return this.getStringAttribute('date_field_format');
    }
    // index_field_name - computed: true, optional: false, required: false
    get indexFieldName() {
        return this.getStringAttribute('index_field_name');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings = DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappings;
function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_source_field_name: cdktf.stringToTerraform(struct.dataSourceFieldName),
        date_field_format: cdktf.stringToTerraform(struct.dateFieldFormat),
        index_field_name: cdktf.stringToTerraform(struct.indexFieldName),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration extends cdktf.ComplexComputedList {
    // security_group_ids - computed: true, optional: false, required: false
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    // subnet_ids - computed: true, optional: false, required: false
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfiguration extends cdktf.ComplexComputedList {
    // crawl_attachments - computed: true, optional: false, required: false
    get crawlAttachments() {
        return this.getBooleanAttribute('crawl_attachments');
    }
    // disable_local_groups - computed: true, optional: false, required: false
    get disableLocalGroups() {
        return this.getBooleanAttribute('disable_local_groups');
    }
    // document_title_field_name - computed: true, optional: false, required: false
    get documentTitleFieldName() {
        return this.getStringAttribute('document_title_field_name');
    }
    // exclusion_patterns - computed: true, optional: false, required: false
    get exclusionPatterns() {
        return this.getListAttribute('exclusion_patterns');
    }
    // field_mappings - computed: true, optional: false, required: false
    get fieldMappings() {
        return this.interpolationForAttribute('field_mappings');
    }
    // inclusion_patterns - computed: true, optional: false, required: false
    get inclusionPatterns() {
        return this.getListAttribute('inclusion_patterns');
    }
    // secret_arn - computed: true, optional: false, required: false
    get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    // share_point_version - computed: true, optional: false, required: false
    get sharePointVersion() {
        return this.getStringAttribute('share_point_version');
    }
    // urls - computed: true, optional: false, required: false
    get urls() {
        return this.getListAttribute('urls');
    }
    // use_change_log - computed: true, optional: false, required: false
    get useChangeLog() {
        return this.getBooleanAttribute('use_change_log');
    }
    // vpc_configuration - computed: true, optional: false, required: false
    get vpcConfiguration() {
        return this.interpolationForAttribute('vpc_configuration');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfiguration = DataAwsccKendraDataSourceDataSourceConfigurationSharePointConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        crawl_attachments: cdktf.booleanToTerraform(struct.crawlAttachments),
        disable_local_groups: cdktf.booleanToTerraform(struct.disableLocalGroups),
        document_title_field_name: cdktf.stringToTerraform(struct.documentTitleFieldName),
        exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.exclusionPatterns),
        field_mappings: cdktf.listMapper(dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationFieldMappingsToTerraform)(struct.fieldMappings),
        inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct.inclusionPatterns),
        secret_arn: cdktf.stringToTerraform(struct.secretArn),
        share_point_version: cdktf.stringToTerraform(struct.sharePointVersion),
        urls: cdktf.listMapper(cdktf.stringToTerraform)(struct.urls),
        use_change_log: cdktf.booleanToTerraform(struct.useChangeLog),
        vpc_configuration: dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationVpcConfigurationToTerraform(struct.vpcConfiguration),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationToTerraform;
class DataAwsccKendraDataSourceDataSourceConfiguration extends cdktf.ComplexComputedList {
    // confluence_configuration - computed: true, optional: false, required: false
    get confluenceConfiguration() {
        return this.interpolationForAttribute('confluence_configuration');
    }
    // database_configuration - computed: true, optional: false, required: false
    get databaseConfiguration() {
        return this.interpolationForAttribute('database_configuration');
    }
    // google_drive_configuration - computed: true, optional: false, required: false
    get googleDriveConfiguration() {
        return this.interpolationForAttribute('google_drive_configuration');
    }
    // one_drive_configuration - computed: true, optional: false, required: false
    get oneDriveConfiguration() {
        return this.interpolationForAttribute('one_drive_configuration');
    }
    // s3_configuration - computed: true, optional: false, required: false
    get s3Configuration() {
        return this.interpolationForAttribute('s3_configuration');
    }
    // salesforce_configuration - computed: true, optional: false, required: false
    get salesforceConfiguration() {
        return this.interpolationForAttribute('salesforce_configuration');
    }
    // service_now_configuration - computed: true, optional: false, required: false
    get serviceNowConfiguration() {
        return this.interpolationForAttribute('service_now_configuration');
    }
    // share_point_configuration - computed: true, optional: false, required: false
    get sharePointConfiguration() {
        return this.interpolationForAttribute('share_point_configuration');
    }
}
exports.DataAwsccKendraDataSourceDataSourceConfiguration = DataAwsccKendraDataSourceDataSourceConfiguration;
function dataAwsccKendraDataSourceDataSourceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        confluence_configuration: dataAwsccKendraDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform(struct.confluenceConfiguration),
        database_configuration: dataAwsccKendraDataSourceDataSourceConfigurationDatabaseConfigurationToTerraform(struct.databaseConfiguration),
        google_drive_configuration: dataAwsccKendraDataSourceDataSourceConfigurationGoogleDriveConfigurationToTerraform(struct.googleDriveConfiguration),
        one_drive_configuration: dataAwsccKendraDataSourceDataSourceConfigurationOneDriveConfigurationToTerraform(struct.oneDriveConfiguration),
        s3_configuration: dataAwsccKendraDataSourceDataSourceConfigurationS3ConfigurationToTerraform(struct.s3Configuration),
        salesforce_configuration: dataAwsccKendraDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform(struct.salesforceConfiguration),
        service_now_configuration: dataAwsccKendraDataSourceDataSourceConfigurationServiceNowConfigurationToTerraform(struct.serviceNowConfiguration),
        share_point_configuration: dataAwsccKendraDataSourceDataSourceConfigurationSharePointConfigurationToTerraform(struct.sharePointConfiguration),
    };
}
exports.dataAwsccKendraDataSourceDataSourceConfigurationToTerraform = dataAwsccKendraDataSourceDataSourceConfigurationToTerraform;
class DataAwsccKendraDataSourceTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccKendraDataSourceTags = DataAwsccKendraDataSourceTags;
function dataAwsccKendraDataSourceTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccKendraDataSourceTagsToTerraform = dataAwsccKendraDataSourceTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/kendra_data_source.html awscc_kendra_data_source}
*/
class DataAwsccKendraDataSource extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    get arn() {
        return this.getStringAttribute('arn');
    }
    // data_source_configuration - computed: true, optional: false, required: false
    get dataSourceConfiguration() {
        return this.interpolationForAttribute('data_source_configuration');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // index_id - computed: true, optional: false, required: false
    get indexId() {
        return this.getStringAttribute('index_id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // schedule - computed: true, optional: false, required: false
    get schedule() {
        return this.getStringAttribute('schedule');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    }
}
exports.DataAwsccKendraDataSource = DataAwsccKendraDataSource;
// =================
// STATIC PROPERTIES
// =================
DataAwsccKendraDataSource.tfResourceType = "awscc_kendra_data_source";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1rZW5kcmEtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLWF3c2NjLWtlbmRyYS1kYXRhLXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEVBQTBFO0FBQzFFLDJDQUEyQzs7OztBQUczQywrQkFBK0I7QUFZL0IsTUFBYSxxSEFBc0gsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWxLLDRFQUE0RTtJQUM1RSxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELHNFQUFzRTtJQUN0RSxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0Y7QUFoQkQsc1BBZ0JDO0FBRUQsU0FBZ0IsZ0lBQWdJLENBQUMsTUFBOEg7SUFDN1EsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxzQkFBc0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLG1CQUFtQixDQUFDO1FBQzVFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO1FBQ25FLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO0tBQ2xFLENBQUE7QUFDSCxDQUFDO0FBUEQsNFFBT0M7QUFFRCxNQUFhLDhGQUErRixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFM0ksK0VBQStFO0lBQy9FLElB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QUFDO0lBQ0osQ0FBQzs7QUF0R0gsOERBdUdDO0FBckdDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csd0NBQWMsR0FBVywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2tlbmRyYV9kYXRhX3NvdXJjZS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBVbmlxdWVseSBpZGVudGlmaWVzIHRoZSByZXNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2tlbmRyYV9kYXRhX3NvdXJjZS5odG1sI2lkIERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2UjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uQ29uZmx1ZW5jZUNvbmZpZ3VyYXRpb25BdHRhY2htZW50Q29uZmlndXJhdGlvbkF0dGFjaG1lbnRGaWVsZE1hcHBpbmdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YV9zb3VyY2VfZmllbGRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFTb3VyY2VGaWVsZE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3NvdXJjZV9maWVsZF9uYW1lJyk7XG4gIH1cblxuICAvLyBkYXRlX2ZpZWxkX2Zvcm1hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGVGaWVsZEZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGVfZmllbGRfZm9ybWF0Jyk7XG4gIH1cblxuICAvLyBpbmRleF9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5kZXhGaWVsZE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbmRleF9maWVsZF9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkNvbmZsdWVuY2VDb25maWd1cmF0aW9uQXR0YWNobWVudENvbmZpZ3VyYXRpb25BdHRhY2htZW50RmllbGRNYXBwaW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkNvbmZsdWVuY2VDb25maWd1cmF0aW9uQXR0YWNobWVudENvbmZpZ3VyYXRpb25BdHRhY2htZW50RmllbGRNYXBwaW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhX3NvdXJjZV9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFTb3VyY2VGaWVsZE5hbWUpLFxuICAgIGRhdGVfZmllbGRfZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGVGaWVsZEZvcm1hdCksXG4gICAgaW5kZXhfZmllbGRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbmRleEZpZWxkTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkNvbmZsdWVuY2VDb25maWd1cmF0aW9uQXR0YWNobWVudENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhdHRhY2htZW50X2ZpZWxkX21hcHBpbmdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXR0YWNobWVudEZpZWxkTWFwcGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXR0YWNobWVudF9maWVsZF9tYXBwaW5ncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNyYXdsX2F0dGFjaG1lbnRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3Jhd2xBdHRhY2htZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjcmF3bF9hdHRhY2htZW50cycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Db25mbHVlbmNlQ29uZmlndXJhdGlvbkF0dGFjaG1lbnRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uQ29uZmx1ZW5jZUNvbmZpZ3VyYXRpb25BdHRhY2htZW50Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhdHRhY2htZW50X2ZpZWxkX21hcHBpbmdzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkNvbmZsdWVuY2VDb25maWd1cmF0aW9uQXR0YWNobWVudENvbmZpZ3VyYXRpb25BdHRhY2htZW50RmllbGRNYXBwaW5nc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmF0dGFjaG1lbnRGaWVsZE1hcHBpbmdzKSxcbiAgICBjcmF3bF9hdHRhY2htZW50czogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY3Jhd2xBdHRhY2htZW50cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkNvbmZsdWVuY2VDb25maWd1cmF0aW9uQmxvZ0NvbmZpZ3VyYXRpb25CbG9nRmllbGRNYXBwaW5ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGFfc291cmNlX2ZpZWxkX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhU291cmNlRmllbGROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YV9zb3VyY2VfZmllbGRfbmFtZScpO1xuICB9XG5cbiAgLy8gZGF0ZV9maWVsZF9mb3JtYXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRlRmllbGRGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRlX2ZpZWxkX2Zvcm1hdCcpO1xuICB9XG5cbiAgLy8gaW5kZXhfZmllbGRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluZGV4RmllbGROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5kZXhfZmllbGRfbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Db25mbHVlbmNlQ29uZmlndXJhdGlvbkJsb2dDb25maWd1cmF0aW9uQmxvZ0ZpZWxkTWFwcGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Db25mbHVlbmNlQ29uZmlndXJhdGlvbkJsb2dDb25maWd1cmF0aW9uQmxvZ0ZpZWxkTWFwcGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF0YV9zb3VyY2VfZmllbGRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhU291cmNlRmllbGROYW1lKSxcbiAgICBkYXRlX2ZpZWxkX2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRlRmllbGRGb3JtYXQpLFxuICAgIGluZGV4X2ZpZWxkX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5kZXhGaWVsZE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Db25mbHVlbmNlQ29uZmlndXJhdGlvbkJsb2dDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYmxvZ19maWVsZF9tYXBwaW5ncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJsb2dGaWVsZE1hcHBpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Jsb2dfZmllbGRfbWFwcGluZ3MnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkNvbmZsdWVuY2VDb25maWd1cmF0aW9uQmxvZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Db25mbHVlbmNlQ29uZmlndXJhdGlvbkJsb2dDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJsb2dfZmllbGRfbWFwcGluZ3M6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uQ29uZmx1ZW5jZUNvbmZpZ3VyYXRpb25CbG9nQ29uZmlndXJhdGlvbkJsb2dGaWVsZE1hcHBpbmdzVG9UZXJyYWZvcm0pKHN0cnVjdCEuYmxvZ0ZpZWxkTWFwcGluZ3MpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Db25mbHVlbmNlQ29uZmlndXJhdGlvblBhZ2VDb25maWd1cmF0aW9uUGFnZUZpZWxkTWFwcGluZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhX3NvdXJjZV9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZUZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFfc291cmNlX2ZpZWxkX25hbWUnKTtcbiAgfVxuXG4gIC8vIGRhdGVfZmllbGRfZm9ybWF0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0ZUZpZWxkRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0ZV9maWVsZF9mb3JtYXQnKTtcbiAgfVxuXG4gIC8vIGluZGV4X2ZpZWxkX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmRleEZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luZGV4X2ZpZWxkX25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uQ29uZmx1ZW5jZUNvbmZpZ3VyYXRpb25QYWdlQ29uZmlndXJhdGlvblBhZ2VGaWVsZE1hcHBpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uQ29uZmx1ZW5jZUNvbmZpZ3VyYXRpb25QYWdlQ29uZmlndXJhdGlvblBhZ2VGaWVsZE1hcHBpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFfc291cmNlX2ZpZWxkX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVNvdXJjZUZpZWxkTmFtZSksXG4gICAgZGF0ZV9maWVsZF9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0ZUZpZWxkRm9ybWF0KSxcbiAgICBpbmRleF9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluZGV4RmllbGROYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uQ29uZmx1ZW5jZUNvbmZpZ3VyYXRpb25QYWdlQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHBhZ2VfZmllbGRfbWFwcGluZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYWdlRmllbGRNYXBwaW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwYWdlX2ZpZWxkX21hcHBpbmdzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Db25mbHVlbmNlQ29uZmlndXJhdGlvblBhZ2VDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uQ29uZmx1ZW5jZUNvbmZpZ3VyYXRpb25QYWdlQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwYWdlX2ZpZWxkX21hcHBpbmdzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkNvbmZsdWVuY2VDb25maWd1cmF0aW9uUGFnZUNvbmZpZ3VyYXRpb25QYWdlRmllbGRNYXBwaW5nc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnBhZ2VGaWVsZE1hcHBpbmdzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uQ29uZmx1ZW5jZUNvbmZpZ3VyYXRpb25TcGFjZUNvbmZpZ3VyYXRpb25TcGFjZUZpZWxkTWFwcGluZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhX3NvdXJjZV9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZUZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFfc291cmNlX2ZpZWxkX25hbWUnKTtcbiAgfVxuXG4gIC8vIGRhdGVfZmllbGRfZm9ybWF0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0ZUZpZWxkRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0ZV9maWVsZF9mb3JtYXQnKTtcbiAgfVxuXG4gIC8vIGluZGV4X2ZpZWxkX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmRleEZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luZGV4X2ZpZWxkX25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uQ29uZmx1ZW5jZUNvbmZpZ3VyYXRpb25TcGFjZUNvbmZpZ3VyYXRpb25TcGFjZUZpZWxkTWFwcGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Db25mbHVlbmNlQ29uZmlndXJhdGlvblNwYWNlQ29uZmlndXJhdGlvblNwYWNlRmllbGRNYXBwaW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhX3NvdXJjZV9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFTb3VyY2VGaWVsZE5hbWUpLFxuICAgIGRhdGVfZmllbGRfZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGVGaWVsZEZvcm1hdCksXG4gICAgaW5kZXhfZmllbGRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbmRleEZpZWxkTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkNvbmZsdWVuY2VDb25maWd1cmF0aW9uU3BhY2VDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY3Jhd2xfYXJjaGl2ZWRfc3BhY2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3Jhd2xBcmNoaXZlZFNwYWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjcmF3bF9hcmNoaXZlZF9zcGFjZXMnKTtcbiAgfVxuXG4gIC8vIGNyYXdsX3BlcnNvbmFsX3NwYWNlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyYXdsUGVyc29uYWxTcGFjZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY3Jhd2xfcGVyc29uYWxfc3BhY2VzJyk7XG4gIH1cblxuICAvLyBleGNsdWRlX3NwYWNlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4Y2x1ZGVTcGFjZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZXhjbHVkZV9zcGFjZXMnKTtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfc3BhY2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVNwYWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpbmNsdWRlX3NwYWNlcycpO1xuICB9XG5cbiAgLy8gc3BhY2VfZmllbGRfbWFwcGluZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzcGFjZUZpZWxkTWFwcGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3BhY2VfZmllbGRfbWFwcGluZ3MnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkNvbmZsdWVuY2VDb25maWd1cmF0aW9uU3BhY2VDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uQ29uZmx1ZW5jZUNvbmZpZ3VyYXRpb25TcGFjZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3Jhd2xfYXJjaGl2ZWRfc3BhY2VzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5jcmF3bEFyY2hpdmVkU3BhY2VzKSxcbiAgICBjcmF3bF9wZXJzb25hbF9zcGFjZXM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNyYXdsUGVyc29uYWxTcGFjZXMpLFxuICAgIGV4Y2x1ZGVfc3BhY2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmV4Y2x1ZGVTcGFjZXMpLFxuICAgIGluY2x1ZGVfc3BhY2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmluY2x1ZGVTcGFjZXMpLFxuICAgIHNwYWNlX2ZpZWxkX21hcHBpbmdzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkNvbmZsdWVuY2VDb25maWd1cmF0aW9uU3BhY2VDb25maWd1cmF0aW9uU3BhY2VGaWVsZE1hcHBpbmdzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3BhY2VGaWVsZE1hcHBpbmdzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uQ29uZmx1ZW5jZUNvbmZpZ3VyYXRpb25WcGNDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9pZHMnKTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdWJuZXRJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VibmV0X2lkcycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Db25mbHVlbmNlQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Db25mbHVlbmNlQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2VjdXJpdHlfZ3JvdXBfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBJZHMpLFxuICAgIHN1Ym5ldF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3VibmV0SWRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uQ29uZmx1ZW5jZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhdHRhY2htZW50X2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdHRhY2htZW50Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhdHRhY2htZW50X2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBibG9nX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBibG9nQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdibG9nX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBleGNsdXNpb25fcGF0dGVybnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBleGNsdXNpb25QYXR0ZXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdleGNsdXNpb25fcGF0dGVybnMnKTtcbiAgfVxuXG4gIC8vIGluY2x1c2lvbl9wYXR0ZXJucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluY2x1c2lvblBhdHRlcm5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2luY2x1c2lvbl9wYXR0ZXJucycpO1xuICB9XG5cbiAgLy8gcGFnZV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGFnZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncGFnZV9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2VjcmV0X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY3JldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY3JldF9hcm4nKTtcbiAgfVxuXG4gIC8vIHNlcnZlcl91cmwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXJ2ZXJVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2ZXJfdXJsJyk7XG4gIH1cblxuICAvLyBzcGFjZV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3BhY2VDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NwYWNlX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyB2ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZlcnNpb24nKTtcbiAgfVxuXG4gIC8vIHZwY19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdnBjQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2cGNfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uQ29uZmx1ZW5jZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Db25mbHVlbmNlQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhdHRhY2htZW50X2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkNvbmZsdWVuY2VDb25maWd1cmF0aW9uQXR0YWNobWVudENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmF0dGFjaG1lbnRDb25maWd1cmF0aW9uKSxcbiAgICBibG9nX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkNvbmZsdWVuY2VDb25maWd1cmF0aW9uQmxvZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmJsb2dDb25maWd1cmF0aW9uKSxcbiAgICBleGNsdXNpb25fcGF0dGVybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZXhjbHVzaW9uUGF0dGVybnMpLFxuICAgIGluY2x1c2lvbl9wYXR0ZXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5pbmNsdXNpb25QYXR0ZXJucyksXG4gICAgcGFnZV9jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Db25mbHVlbmNlQ29uZmlndXJhdGlvblBhZ2VDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5wYWdlQ29uZmlndXJhdGlvbiksXG4gICAgc2VjcmV0X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNyZXRBcm4pLFxuICAgIHNlcnZlcl91cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VydmVyVXJsKSxcbiAgICBzcGFjZV9jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Db25mbHVlbmNlQ29uZmlndXJhdGlvblNwYWNlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuc3BhY2VDb25maWd1cmF0aW9uKSxcbiAgICB2ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZlcnNpb24pLFxuICAgIHZwY19jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Db25mbHVlbmNlQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnZwY0NvbmZpZ3VyYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25EYXRhYmFzZUNvbmZpZ3VyYXRpb25BY2xDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWxsb3dlZF9ncm91cHNfY29sdW1uX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbGxvd2VkR3JvdXBzQ29sdW1uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FsbG93ZWRfZ3JvdXBzX2NvbHVtbl9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkRhdGFiYXNlQ29uZmlndXJhdGlvbkFjbENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25EYXRhYmFzZUNvbmZpZ3VyYXRpb25BY2xDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFsbG93ZWRfZ3JvdXBzX2NvbHVtbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsbG93ZWRHcm91cHNDb2x1bW5OYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uRGF0YWJhc2VDb25maWd1cmF0aW9uQ29sdW1uQ29uZmlndXJhdGlvbkZpZWxkTWFwcGluZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhX3NvdXJjZV9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZUZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFfc291cmNlX2ZpZWxkX25hbWUnKTtcbiAgfVxuXG4gIC8vIGRhdGVfZmllbGRfZm9ybWF0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0ZUZpZWxkRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0ZV9maWVsZF9mb3JtYXQnKTtcbiAgfVxuXG4gIC8vIGluZGV4X2ZpZWxkX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmRleEZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luZGV4X2ZpZWxkX25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uRGF0YWJhc2VDb25maWd1cmF0aW9uQ29sdW1uQ29uZmlndXJhdGlvbkZpZWxkTWFwcGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25EYXRhYmFzZUNvbmZpZ3VyYXRpb25Db2x1bW5Db25maWd1cmF0aW9uRmllbGRNYXBwaW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhX3NvdXJjZV9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFTb3VyY2VGaWVsZE5hbWUpLFxuICAgIGRhdGVfZmllbGRfZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGVGaWVsZEZvcm1hdCksXG4gICAgaW5kZXhfZmllbGRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbmRleEZpZWxkTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkRhdGFiYXNlQ29uZmlndXJhdGlvbkNvbHVtbkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjaGFuZ2VfZGV0ZWN0aW5nX2NvbHVtbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjaGFuZ2VEZXRlY3RpbmdDb2x1bW5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2NoYW5nZV9kZXRlY3RpbmdfY29sdW1ucycpO1xuICB9XG5cbiAgLy8gZG9jdW1lbnRfZGF0YV9jb2x1bW5fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRvY3VtZW50RGF0YUNvbHVtbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb2N1bWVudF9kYXRhX2NvbHVtbl9uYW1lJyk7XG4gIH1cblxuICAvLyBkb2N1bWVudF9pZF9jb2x1bW5fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRvY3VtZW50SWRDb2x1bW5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9jdW1lbnRfaWRfY29sdW1uX25hbWUnKTtcbiAgfVxuXG4gIC8vIGRvY3VtZW50X3RpdGxlX2NvbHVtbl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG9jdW1lbnRUaXRsZUNvbHVtbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb2N1bWVudF90aXRsZV9jb2x1bW5fbmFtZScpO1xuICB9XG5cbiAgLy8gZmllbGRfbWFwcGluZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmaWVsZE1hcHBpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ZpZWxkX21hcHBpbmdzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25EYXRhYmFzZUNvbmZpZ3VyYXRpb25Db2x1bW5Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uRGF0YWJhc2VDb25maWd1cmF0aW9uQ29sdW1uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjaGFuZ2VfZGV0ZWN0aW5nX2NvbHVtbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY2hhbmdlRGV0ZWN0aW5nQ29sdW1ucyksXG4gICAgZG9jdW1lbnRfZGF0YV9jb2x1bW5fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb2N1bWVudERhdGFDb2x1bW5OYW1lKSxcbiAgICBkb2N1bWVudF9pZF9jb2x1bW5fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb2N1bWVudElkQ29sdW1uTmFtZSksXG4gICAgZG9jdW1lbnRfdGl0bGVfY29sdW1uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG9jdW1lbnRUaXRsZUNvbHVtbk5hbWUpLFxuICAgIGZpZWxkX21hcHBpbmdzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkRhdGFiYXNlQ29uZmlndXJhdGlvbkNvbHVtbkNvbmZpZ3VyYXRpb25GaWVsZE1hcHBpbmdzVG9UZXJyYWZvcm0pKHN0cnVjdCEuZmllbGRNYXBwaW5ncyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkRhdGFiYXNlQ29uZmlndXJhdGlvbkNvbm5lY3Rpb25Db25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YWJhc2VfaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlSG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlX2hvc3QnKTtcbiAgfVxuXG4gIC8vIGRhdGFiYXNlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhYmFzZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZV9uYW1lJyk7XG4gIH1cblxuICAvLyBkYXRhYmFzZV9wb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2VQb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGF0YWJhc2VfcG9ydCcpO1xuICB9XG5cbiAgLy8gc2VjcmV0X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY3JldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY3JldF9hcm4nKTtcbiAgfVxuXG4gIC8vIHRhYmxlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWJsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YWJsZV9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkRhdGFiYXNlQ29uZmlndXJhdGlvbkNvbm5lY3Rpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uRGF0YWJhc2VDb25maWd1cmF0aW9uQ29ubmVjdGlvbkNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF0YWJhc2VfaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZUhvc3QpLFxuICAgIGRhdGFiYXNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2VOYW1lKSxcbiAgICBkYXRhYmFzZV9wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlUG9ydCksXG4gICAgc2VjcmV0X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNyZXRBcm4pLFxuICAgIHRhYmxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFibGVOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uRGF0YWJhc2VDb25maWd1cmF0aW9uU3FsQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHF1ZXJ5X2lkZW50aWZpZXJzX2VuY2xvc2luZ19vcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBxdWVyeUlkZW50aWZpZXJzRW5jbG9zaW5nT3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncXVlcnlfaWRlbnRpZmllcnNfZW5jbG9zaW5nX29wdGlvbicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25EYXRhYmFzZUNvbmZpZ3VyYXRpb25TcWxDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uRGF0YWJhc2VDb25maWd1cmF0aW9uU3FsQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBxdWVyeV9pZGVudGlmaWVyc19lbmNsb3Npbmdfb3B0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnF1ZXJ5SWRlbnRpZmllcnNFbmNsb3NpbmdPcHRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25EYXRhYmFzZUNvbmZpZ3VyYXRpb25WcGNDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9pZHMnKTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdWJuZXRJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VibmV0X2lkcycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25EYXRhYmFzZUNvbmZpZ3VyYXRpb25WcGNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uRGF0YWJhc2VDb25maWd1cmF0aW9uVnBjQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzZWN1cml0eV9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2VjdXJpdHlHcm91cElkcyksXG4gICAgc3VibmV0X2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zdWJuZXRJZHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25EYXRhYmFzZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY2xfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjbENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWNsX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjb2x1bW5fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbHVtbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29sdW1uX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjb25uZWN0aW9uX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25uZWN0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb25uZWN0aW9uX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkYXRhYmFzZV9lbmdpbmVfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlRW5naW5lVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlX2VuZ2luZV90eXBlJyk7XG4gIH1cblxuICAvLyBzcWxfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNxbENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3FsX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyB2cGNfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZwY0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndnBjX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkRhdGFiYXNlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkRhdGFiYXNlQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY2xfY29uZmlndXJhdGlvbjogZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uRGF0YWJhc2VDb25maWd1cmF0aW9uQWNsQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuYWNsQ29uZmlndXJhdGlvbiksXG4gICAgY29sdW1uX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkRhdGFiYXNlQ29uZmlndXJhdGlvbkNvbHVtbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNvbHVtbkNvbmZpZ3VyYXRpb24pLFxuICAgIGNvbm5lY3Rpb25fY29uZmlndXJhdGlvbjogZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uRGF0YWJhc2VDb25maWd1cmF0aW9uQ29ubmVjdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3Rpb25Db25maWd1cmF0aW9uKSxcbiAgICBkYXRhYmFzZV9lbmdpbmVfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZUVuZ2luZVR5cGUpLFxuICAgIHNxbF9jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25EYXRhYmFzZUNvbmZpZ3VyYXRpb25TcWxDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5zcWxDb25maWd1cmF0aW9uKSxcbiAgICB2cGNfY29uZmlndXJhdGlvbjogZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uRGF0YWJhc2VDb25maWd1cmF0aW9uVnBjQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEudnBjQ29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkdvb2dsZURyaXZlQ29uZmlndXJhdGlvbkZpZWxkTWFwcGluZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhX3NvdXJjZV9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZUZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFfc291cmNlX2ZpZWxkX25hbWUnKTtcbiAgfVxuXG4gIC8vIGRhdGVfZmllbGRfZm9ybWF0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0ZUZpZWxkRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0ZV9maWVsZF9mb3JtYXQnKTtcbiAgfVxuXG4gIC8vIGluZGV4X2ZpZWxkX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmRleEZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luZGV4X2ZpZWxkX25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uR29vZ2xlRHJpdmVDb25maWd1cmF0aW9uRmllbGRNYXBwaW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkdvb2dsZURyaXZlQ29uZmlndXJhdGlvbkZpZWxkTWFwcGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF0YV9zb3VyY2VfZmllbGRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhU291cmNlRmllbGROYW1lKSxcbiAgICBkYXRlX2ZpZWxkX2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRlRmllbGRGb3JtYXQpLFxuICAgIGluZGV4X2ZpZWxkX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5kZXhGaWVsZE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Hb29nbGVEcml2ZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBleGNsdWRlX21pbWVfdHlwZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBleGNsdWRlTWltZVR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2V4Y2x1ZGVfbWltZV90eXBlcycpO1xuICB9XG5cbiAgLy8gZXhjbHVkZV9zaGFyZWRfZHJpdmVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXhjbHVkZVNoYXJlZERyaXZlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdleGNsdWRlX3NoYXJlZF9kcml2ZXMnKTtcbiAgfVxuXG4gIC8vIGV4Y2x1ZGVfdXNlcl9hY2NvdW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4Y2x1ZGVVc2VyQWNjb3VudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZXhjbHVkZV91c2VyX2FjY291bnRzJyk7XG4gIH1cblxuICAvLyBleGNsdXNpb25fcGF0dGVybnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBleGNsdXNpb25QYXR0ZXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdleGNsdXNpb25fcGF0dGVybnMnKTtcbiAgfVxuXG4gIC8vIGZpZWxkX21hcHBpbmdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmllbGRNYXBwaW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmaWVsZF9tYXBwaW5ncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGluY2x1c2lvbl9wYXR0ZXJucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluY2x1c2lvblBhdHRlcm5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2luY2x1c2lvbl9wYXR0ZXJucycpO1xuICB9XG5cbiAgLy8gc2VjcmV0X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY3JldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY3JldF9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uR29vZ2xlRHJpdmVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uR29vZ2xlRHJpdmVDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGV4Y2x1ZGVfbWltZV90eXBlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5leGNsdWRlTWltZVR5cGVzKSxcbiAgICBleGNsdWRlX3NoYXJlZF9kcml2ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZXhjbHVkZVNoYXJlZERyaXZlcyksXG4gICAgZXhjbHVkZV91c2VyX2FjY291bnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmV4Y2x1ZGVVc2VyQWNjb3VudHMpLFxuICAgIGV4Y2x1c2lvbl9wYXR0ZXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5leGNsdXNpb25QYXR0ZXJucyksXG4gICAgZmllbGRfbWFwcGluZ3M6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uR29vZ2xlRHJpdmVDb25maWd1cmF0aW9uRmllbGRNYXBwaW5nc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmZpZWxkTWFwcGluZ3MpLFxuICAgIGluY2x1c2lvbl9wYXR0ZXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5pbmNsdXNpb25QYXR0ZXJucyksXG4gICAgc2VjcmV0X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNyZXRBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25PbmVEcml2ZUNvbmZpZ3VyYXRpb25GaWVsZE1hcHBpbmdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YV9zb3VyY2VfZmllbGRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFTb3VyY2VGaWVsZE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3NvdXJjZV9maWVsZF9uYW1lJyk7XG4gIH1cblxuICAvLyBkYXRlX2ZpZWxkX2Zvcm1hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGVGaWVsZEZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGVfZmllbGRfZm9ybWF0Jyk7XG4gIH1cblxuICAvLyBpbmRleF9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5kZXhGaWVsZE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbmRleF9maWVsZF9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbk9uZURyaXZlQ29uZmlndXJhdGlvbkZpZWxkTWFwcGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25PbmVEcml2ZUNvbmZpZ3VyYXRpb25GaWVsZE1hcHBpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFfc291cmNlX2ZpZWxkX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVNvdXJjZUZpZWxkTmFtZSksXG4gICAgZGF0ZV9maWVsZF9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0ZUZpZWxkRm9ybWF0KSxcbiAgICBpbmRleF9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluZGV4RmllbGROYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uT25lRHJpdmVDb25maWd1cmF0aW9uT25lRHJpdmVVc2Vyc09uZURyaXZlVXNlclMzUGF0aCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1Y2tldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldCcpO1xuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbk9uZURyaXZlQ29uZmlndXJhdGlvbk9uZURyaXZlVXNlcnNPbmVEcml2ZVVzZXJTM1BhdGhUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25PbmVEcml2ZUNvbmZpZ3VyYXRpb25PbmVEcml2ZVVzZXJzT25lRHJpdmVVc2VyUzNQYXRoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXQpLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25PbmVEcml2ZUNvbmZpZ3VyYXRpb25PbmVEcml2ZVVzZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gb25lX2RyaXZlX3VzZXJfbGlzdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9uZURyaXZlVXNlckxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnb25lX2RyaXZlX3VzZXJfbGlzdCcpO1xuICB9XG5cbiAgLy8gb25lX2RyaXZlX3VzZXJfczNfcGF0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9uZURyaXZlVXNlclMzUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdvbmVfZHJpdmVfdXNlcl9zM19wYXRoJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25PbmVEcml2ZUNvbmZpZ3VyYXRpb25PbmVEcml2ZVVzZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uT25lRHJpdmVDb25maWd1cmF0aW9uT25lRHJpdmVVc2Vycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBvbmVfZHJpdmVfdXNlcl9saXN0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLm9uZURyaXZlVXNlckxpc3QpLFxuICAgIG9uZV9kcml2ZV91c2VyX3MzX3BhdGg6IGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbk9uZURyaXZlQ29uZmlndXJhdGlvbk9uZURyaXZlVXNlcnNPbmVEcml2ZVVzZXJTM1BhdGhUb1RlcnJhZm9ybShzdHJ1Y3QhLm9uZURyaXZlVXNlclMzUGF0aCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbk9uZURyaXZlQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRpc2FibGVfbG9jYWxfZ3JvdXBzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGlzYWJsZUxvY2FsR3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Rpc2FibGVfbG9jYWxfZ3JvdXBzJyk7XG4gIH1cblxuICAvLyBleGNsdXNpb25fcGF0dGVybnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBleGNsdXNpb25QYXR0ZXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdleGNsdXNpb25fcGF0dGVybnMnKTtcbiAgfVxuXG4gIC8vIGZpZWxkX21hcHBpbmdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmllbGRNYXBwaW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmaWVsZF9tYXBwaW5ncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGluY2x1c2lvbl9wYXR0ZXJucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluY2x1c2lvblBhdHRlcm5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2luY2x1c2lvbl9wYXR0ZXJucycpO1xuICB9XG5cbiAgLy8gb25lX2RyaXZlX3VzZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb25lRHJpdmVVc2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdvbmVfZHJpdmVfdXNlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzZWNyZXRfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjcmV0QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VjcmV0X2FybicpO1xuICB9XG5cbiAgLy8gdGVuYW50X2RvbWFpbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRlbmFudERvbWFpbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RlbmFudF9kb21haW4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uT25lRHJpdmVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uT25lRHJpdmVDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRpc2FibGVfbG9jYWxfZ3JvdXBzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kaXNhYmxlTG9jYWxHcm91cHMpLFxuICAgIGV4Y2x1c2lvbl9wYXR0ZXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5leGNsdXNpb25QYXR0ZXJucyksXG4gICAgZmllbGRfbWFwcGluZ3M6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uT25lRHJpdmVDb25maWd1cmF0aW9uRmllbGRNYXBwaW5nc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmZpZWxkTWFwcGluZ3MpLFxuICAgIGluY2x1c2lvbl9wYXR0ZXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5pbmNsdXNpb25QYXR0ZXJucyksXG4gICAgb25lX2RyaXZlX3VzZXJzOiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25PbmVEcml2ZUNvbmZpZ3VyYXRpb25PbmVEcml2ZVVzZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5vbmVEcml2ZVVzZXJzKSxcbiAgICBzZWNyZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldEFybiksXG4gICAgdGVuYW50X2RvbWFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50ZW5hbnREb21haW4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25BY2Nlc3NDb250cm9sTGlzdENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXlfcGF0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXlfcGF0aCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25BY2Nlc3NDb250cm9sTGlzdENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25BY2Nlc3NDb250cm9sTGlzdENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5X3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5UGF0aCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkRvY3VtZW50c01ldGFkYXRhQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHMzX3ByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfcHJlZml4Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkRvY3VtZW50c01ldGFkYXRhQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkRvY3VtZW50c01ldGFkYXRhQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzM19wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNQcmVmaXgpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY2Nlc3NfY29udHJvbF9saXN0X2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY2Nlc3NDb250cm9sTGlzdENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWNjZXNzX2NvbnRyb2xfbGlzdF9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gYnVja2V0X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X25hbWUnKTtcbiAgfVxuXG4gIC8vIGRvY3VtZW50c19tZXRhZGF0YV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG9jdW1lbnRzTWV0YWRhdGFDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RvY3VtZW50c19tZXRhZGF0YV9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZXhjbHVzaW9uX3BhdHRlcm5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXhjbHVzaW9uUGF0dGVybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZXhjbHVzaW9uX3BhdHRlcm5zJyk7XG4gIH1cblxuICAvLyBpbmNsdXNpb25fcGF0dGVybnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmNsdXNpb25QYXR0ZXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpbmNsdXNpb25fcGF0dGVybnMnKTtcbiAgfVxuXG4gIC8vIGluY2x1c2lvbl9wcmVmaXhlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluY2x1c2lvblByZWZpeGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2luY2x1c2lvbl9wcmVmaXhlcycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNjZXNzX2NvbnRyb2xfbGlzdF9jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25BY2Nlc3NDb250cm9sTGlzdENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmFjY2Vzc0NvbnRyb2xMaXN0Q29uZmlndXJhdGlvbiksXG4gICAgYnVja2V0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0TmFtZSksXG4gICAgZG9jdW1lbnRzX21ldGFkYXRhX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkRvY3VtZW50c01ldGFkYXRhQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZG9jdW1lbnRzTWV0YWRhdGFDb25maWd1cmF0aW9uKSxcbiAgICBleGNsdXNpb25fcGF0dGVybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZXhjbHVzaW9uUGF0dGVybnMpLFxuICAgIGluY2x1c2lvbl9wYXR0ZXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5pbmNsdXNpb25QYXR0ZXJucyksXG4gICAgaW5jbHVzaW9uX3ByZWZpeGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmluY2x1c2lvblByZWZpeGVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25DaGF0dGVyRmVlZENvbmZpZ3VyYXRpb25GaWVsZE1hcHBpbmdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YV9zb3VyY2VfZmllbGRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFTb3VyY2VGaWVsZE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3NvdXJjZV9maWVsZF9uYW1lJyk7XG4gIH1cblxuICAvLyBkYXRlX2ZpZWxkX2Zvcm1hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGVGaWVsZEZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGVfZmllbGRfZm9ybWF0Jyk7XG4gIH1cblxuICAvLyBpbmRleF9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5kZXhGaWVsZE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbmRleF9maWVsZF9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uQ2hhdHRlckZlZWRDb25maWd1cmF0aW9uRmllbGRNYXBwaW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uQ2hhdHRlckZlZWRDb25maWd1cmF0aW9uRmllbGRNYXBwaW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhX3NvdXJjZV9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFTb3VyY2VGaWVsZE5hbWUpLFxuICAgIGRhdGVfZmllbGRfZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGVGaWVsZEZvcm1hdCksXG4gICAgaW5kZXhfZmllbGRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbmRleEZpZWxkTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uQ2hhdHRlckZlZWRDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZG9jdW1lbnRfZGF0YV9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG9jdW1lbnREYXRhRmllbGROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9jdW1lbnRfZGF0YV9maWVsZF9uYW1lJyk7XG4gIH1cblxuICAvLyBkb2N1bWVudF90aXRsZV9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG9jdW1lbnRUaXRsZUZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvY3VtZW50X3RpdGxlX2ZpZWxkX25hbWUnKTtcbiAgfVxuXG4gIC8vIGZpZWxkX21hcHBpbmdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmllbGRNYXBwaW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmaWVsZF9tYXBwaW5ncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfZmlsdGVyX3R5cGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5jbHVkZUZpbHRlclR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2luY2x1ZGVfZmlsdGVyX3R5cGVzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uQ2hhdHRlckZlZWRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25DaGF0dGVyRmVlZENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZG9jdW1lbnRfZGF0YV9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRvY3VtZW50RGF0YUZpZWxkTmFtZSksXG4gICAgZG9jdW1lbnRfdGl0bGVfZmllbGRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb2N1bWVudFRpdGxlRmllbGROYW1lKSxcbiAgICBmaWVsZF9tYXBwaW5nczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TYWxlc2ZvcmNlQ29uZmlndXJhdGlvbkNoYXR0ZXJGZWVkQ29uZmlndXJhdGlvbkZpZWxkTWFwcGluZ3NUb1RlcnJhZm9ybSkoc3RydWN0IS5maWVsZE1hcHBpbmdzKSxcbiAgICBpbmNsdWRlX2ZpbHRlcl90eXBlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5pbmNsdWRlRmlsdGVyVHlwZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TYWxlc2ZvcmNlQ29uZmlndXJhdGlvbktub3dsZWRnZUFydGljbGVDb25maWd1cmF0aW9uQ3VzdG9tS25vd2xlZGdlQXJ0aWNsZVR5cGVDb25maWd1cmF0aW9uc0ZpZWxkTWFwcGluZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhX3NvdXJjZV9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZUZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFfc291cmNlX2ZpZWxkX25hbWUnKTtcbiAgfVxuXG4gIC8vIGRhdGVfZmllbGRfZm9ybWF0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0ZUZpZWxkRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0ZV9maWVsZF9mb3JtYXQnKTtcbiAgfVxuXG4gIC8vIGluZGV4X2ZpZWxkX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmRleEZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luZGV4X2ZpZWxkX25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25Lbm93bGVkZ2VBcnRpY2xlQ29uZmlndXJhdGlvbkN1c3RvbUtub3dsZWRnZUFydGljbGVUeXBlQ29uZmlndXJhdGlvbnNGaWVsZE1hcHBpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25Lbm93bGVkZ2VBcnRpY2xlQ29uZmlndXJhdGlvbkN1c3RvbUtub3dsZWRnZUFydGljbGVUeXBlQ29uZmlndXJhdGlvbnNGaWVsZE1hcHBpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFfc291cmNlX2ZpZWxkX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVNvdXJjZUZpZWxkTmFtZSksXG4gICAgZGF0ZV9maWVsZF9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0ZUZpZWxkRm9ybWF0KSxcbiAgICBpbmRleF9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluZGV4RmllbGROYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25Lbm93bGVkZ2VBcnRpY2xlQ29uZmlndXJhdGlvbkN1c3RvbUtub3dsZWRnZUFydGljbGVUeXBlQ29uZmlndXJhdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkb2N1bWVudF9kYXRhX2ZpZWxkX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkb2N1bWVudERhdGFGaWVsZE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb2N1bWVudF9kYXRhX2ZpZWxkX25hbWUnKTtcbiAgfVxuXG4gIC8vIGRvY3VtZW50X3RpdGxlX2ZpZWxkX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkb2N1bWVudFRpdGxlRmllbGROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9jdW1lbnRfdGl0bGVfZmllbGRfbmFtZScpO1xuICB9XG5cbiAgLy8gZmllbGRfbWFwcGluZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmaWVsZE1hcHBpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ZpZWxkX21hcHBpbmdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uS25vd2xlZGdlQXJ0aWNsZUNvbmZpZ3VyYXRpb25DdXN0b21Lbm93bGVkZ2VBcnRpY2xlVHlwZUNvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25Lbm93bGVkZ2VBcnRpY2xlQ29uZmlndXJhdGlvbkN1c3RvbUtub3dsZWRnZUFydGljbGVUeXBlQ29uZmlndXJhdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZG9jdW1lbnRfZGF0YV9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRvY3VtZW50RGF0YUZpZWxkTmFtZSksXG4gICAgZG9jdW1lbnRfdGl0bGVfZmllbGRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb2N1bWVudFRpdGxlRmllbGROYW1lKSxcbiAgICBmaWVsZF9tYXBwaW5nczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TYWxlc2ZvcmNlQ29uZmlndXJhdGlvbktub3dsZWRnZUFydGljbGVDb25maWd1cmF0aW9uQ3VzdG9tS25vd2xlZGdlQXJ0aWNsZVR5cGVDb25maWd1cmF0aW9uc0ZpZWxkTWFwcGluZ3NUb1RlcnJhZm9ybSkoc3RydWN0IS5maWVsZE1hcHBpbmdzKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TYWxlc2ZvcmNlQ29uZmlndXJhdGlvbktub3dsZWRnZUFydGljbGVDb25maWd1cmF0aW9uU3RhbmRhcmRLbm93bGVkZ2VBcnRpY2xlVHlwZUNvbmZpZ3VyYXRpb25GaWVsZE1hcHBpbmdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YV9zb3VyY2VfZmllbGRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFTb3VyY2VGaWVsZE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3NvdXJjZV9maWVsZF9uYW1lJyk7XG4gIH1cblxuICAvLyBkYXRlX2ZpZWxkX2Zvcm1hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGVGaWVsZEZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGVfZmllbGRfZm9ybWF0Jyk7XG4gIH1cblxuICAvLyBpbmRleF9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5kZXhGaWVsZE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbmRleF9maWVsZF9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uS25vd2xlZGdlQXJ0aWNsZUNvbmZpZ3VyYXRpb25TdGFuZGFyZEtub3dsZWRnZUFydGljbGVUeXBlQ29uZmlndXJhdGlvbkZpZWxkTWFwcGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TYWxlc2ZvcmNlQ29uZmlndXJhdGlvbktub3dsZWRnZUFydGljbGVDb25maWd1cmF0aW9uU3RhbmRhcmRLbm93bGVkZ2VBcnRpY2xlVHlwZUNvbmZpZ3VyYXRpb25GaWVsZE1hcHBpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFfc291cmNlX2ZpZWxkX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVNvdXJjZUZpZWxkTmFtZSksXG4gICAgZGF0ZV9maWVsZF9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0ZUZpZWxkRm9ybWF0KSxcbiAgICBpbmRleF9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluZGV4RmllbGROYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25Lbm93bGVkZ2VBcnRpY2xlQ29uZmlndXJhdGlvblN0YW5kYXJkS25vd2xlZGdlQXJ0aWNsZVR5cGVDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZG9jdW1lbnRfZGF0YV9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG9jdW1lbnREYXRhRmllbGROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9jdW1lbnRfZGF0YV9maWVsZF9uYW1lJyk7XG4gIH1cblxuICAvLyBkb2N1bWVudF90aXRsZV9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG9jdW1lbnRUaXRsZUZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvY3VtZW50X3RpdGxlX2ZpZWxkX25hbWUnKTtcbiAgfVxuXG4gIC8vIGZpZWxkX21hcHBpbmdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmllbGRNYXBwaW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmaWVsZF9tYXBwaW5ncycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25Lbm93bGVkZ2VBcnRpY2xlQ29uZmlndXJhdGlvblN0YW5kYXJkS25vd2xlZGdlQXJ0aWNsZVR5cGVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25Lbm93bGVkZ2VBcnRpY2xlQ29uZmlndXJhdGlvblN0YW5kYXJkS25vd2xlZGdlQXJ0aWNsZVR5cGVDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRvY3VtZW50X2RhdGFfZmllbGRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb2N1bWVudERhdGFGaWVsZE5hbWUpLFxuICAgIGRvY3VtZW50X3RpdGxlX2ZpZWxkX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG9jdW1lbnRUaXRsZUZpZWxkTmFtZSksXG4gICAgZmllbGRfbWFwcGluZ3M6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25Lbm93bGVkZ2VBcnRpY2xlQ29uZmlndXJhdGlvblN0YW5kYXJkS25vd2xlZGdlQXJ0aWNsZVR5cGVDb25maWd1cmF0aW9uRmllbGRNYXBwaW5nc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmZpZWxkTWFwcGluZ3MpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TYWxlc2ZvcmNlQ29uZmlndXJhdGlvbktub3dsZWRnZUFydGljbGVDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY3VzdG9tX2tub3dsZWRnZV9hcnRpY2xlX3R5cGVfY29uZmlndXJhdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjdXN0b21Lbm93bGVkZ2VBcnRpY2xlVHlwZUNvbmZpZ3VyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2N1c3RvbV9rbm93bGVkZ2VfYXJ0aWNsZV90eXBlX2NvbmZpZ3VyYXRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaW5jbHVkZWRfc3RhdGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5jbHVkZWRTdGF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaW5jbHVkZWRfc3RhdGVzJyk7XG4gIH1cblxuICAvLyBzdGFuZGFyZF9rbm93bGVkZ2VfYXJ0aWNsZV90eXBlX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGFuZGFyZEtub3dsZWRnZUFydGljbGVUeXBlQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdGFuZGFyZF9rbm93bGVkZ2VfYXJ0aWNsZV90eXBlX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uS25vd2xlZGdlQXJ0aWNsZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TYWxlc2ZvcmNlQ29uZmlndXJhdGlvbktub3dsZWRnZUFydGljbGVDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGN1c3RvbV9rbm93bGVkZ2VfYXJ0aWNsZV90eXBlX2NvbmZpZ3VyYXRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uS25vd2xlZGdlQXJ0aWNsZUNvbmZpZ3VyYXRpb25DdXN0b21Lbm93bGVkZ2VBcnRpY2xlVHlwZUNvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0pKHN0cnVjdCEuY3VzdG9tS25vd2xlZGdlQXJ0aWNsZVR5cGVDb25maWd1cmF0aW9ucyksXG4gICAgaW5jbHVkZWRfc3RhdGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmluY2x1ZGVkU3RhdGVzKSxcbiAgICBzdGFuZGFyZF9rbm93bGVkZ2VfYXJ0aWNsZV90eXBlX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uS25vd2xlZGdlQXJ0aWNsZUNvbmZpZ3VyYXRpb25TdGFuZGFyZEtub3dsZWRnZUFydGljbGVUeXBlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuc3RhbmRhcmRLbm93bGVkZ2VBcnRpY2xlVHlwZUNvbmZpZ3VyYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TYWxlc2ZvcmNlQ29uZmlndXJhdGlvblN0YW5kYXJkT2JqZWN0QXR0YWNobWVudENvbmZpZ3VyYXRpb25GaWVsZE1hcHBpbmdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YV9zb3VyY2VfZmllbGRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFTb3VyY2VGaWVsZE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3NvdXJjZV9maWVsZF9uYW1lJyk7XG4gIH1cblxuICAvLyBkYXRlX2ZpZWxkX2Zvcm1hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGVGaWVsZEZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGVfZmllbGRfZm9ybWF0Jyk7XG4gIH1cblxuICAvLyBpbmRleF9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5kZXhGaWVsZE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbmRleF9maWVsZF9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uU3RhbmRhcmRPYmplY3RBdHRhY2htZW50Q29uZmlndXJhdGlvbkZpZWxkTWFwcGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TYWxlc2ZvcmNlQ29uZmlndXJhdGlvblN0YW5kYXJkT2JqZWN0QXR0YWNobWVudENvbmZpZ3VyYXRpb25GaWVsZE1hcHBpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFfc291cmNlX2ZpZWxkX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVNvdXJjZUZpZWxkTmFtZSksXG4gICAgZGF0ZV9maWVsZF9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0ZUZpZWxkRm9ybWF0KSxcbiAgICBpbmRleF9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluZGV4RmllbGROYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25TdGFuZGFyZE9iamVjdEF0dGFjaG1lbnRDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZG9jdW1lbnRfdGl0bGVfZmllbGRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRvY3VtZW50VGl0bGVGaWVsZE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb2N1bWVudF90aXRsZV9maWVsZF9uYW1lJyk7XG4gIH1cblxuICAvLyBmaWVsZF9tYXBwaW5ncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZpZWxkTWFwcGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmllbGRfbWFwcGluZ3MnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uU3RhbmRhcmRPYmplY3RBdHRhY2htZW50Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uU3RhbmRhcmRPYmplY3RBdHRhY2htZW50Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkb2N1bWVudF90aXRsZV9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRvY3VtZW50VGl0bGVGaWVsZE5hbWUpLFxuICAgIGZpZWxkX21hcHBpbmdzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uU3RhbmRhcmRPYmplY3RBdHRhY2htZW50Q29uZmlndXJhdGlvbkZpZWxkTWFwcGluZ3NUb1RlcnJhZm9ybSkoc3RydWN0IS5maWVsZE1hcHBpbmdzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25TdGFuZGFyZE9iamVjdENvbmZpZ3VyYXRpb25zRmllbGRNYXBwaW5ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGFfc291cmNlX2ZpZWxkX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhU291cmNlRmllbGROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YV9zb3VyY2VfZmllbGRfbmFtZScpO1xuICB9XG5cbiAgLy8gZGF0ZV9maWVsZF9mb3JtYXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRlRmllbGRGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRlX2ZpZWxkX2Zvcm1hdCcpO1xuICB9XG5cbiAgLy8gaW5kZXhfZmllbGRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluZGV4RmllbGROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5kZXhfZmllbGRfbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TYWxlc2ZvcmNlQ29uZmlndXJhdGlvblN0YW5kYXJkT2JqZWN0Q29uZmlndXJhdGlvbnNGaWVsZE1hcHBpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25TdGFuZGFyZE9iamVjdENvbmZpZ3VyYXRpb25zRmllbGRNYXBwaW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhX3NvdXJjZV9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFTb3VyY2VGaWVsZE5hbWUpLFxuICAgIGRhdGVfZmllbGRfZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGVGaWVsZEZvcm1hdCksXG4gICAgaW5kZXhfZmllbGRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbmRleEZpZWxkTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uU3RhbmRhcmRPYmplY3RDb25maWd1cmF0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRvY3VtZW50X2RhdGFfZmllbGRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRvY3VtZW50RGF0YUZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvY3VtZW50X2RhdGFfZmllbGRfbmFtZScpO1xuICB9XG5cbiAgLy8gZG9jdW1lbnRfdGl0bGVfZmllbGRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRvY3VtZW50VGl0bGVGaWVsZE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb2N1bWVudF90aXRsZV9maWVsZF9uYW1lJyk7XG4gIH1cblxuICAvLyBmaWVsZF9tYXBwaW5ncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZpZWxkTWFwcGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmllbGRfbWFwcGluZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25TdGFuZGFyZE9iamVjdENvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25TdGFuZGFyZE9iamVjdENvbmZpZ3VyYXRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRvY3VtZW50X2RhdGFfZmllbGRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb2N1bWVudERhdGFGaWVsZE5hbWUpLFxuICAgIGRvY3VtZW50X3RpdGxlX2ZpZWxkX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG9jdW1lbnRUaXRsZUZpZWxkTmFtZSksXG4gICAgZmllbGRfbWFwcGluZ3M6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25TdGFuZGFyZE9iamVjdENvbmZpZ3VyYXRpb25zRmllbGRNYXBwaW5nc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmZpZWxkTWFwcGluZ3MpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2hhdHRlcl9mZWVkX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjaGF0dGVyRmVlZENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2hhdHRlcl9mZWVkX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjcmF3bF9hdHRhY2htZW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyYXdsQXR0YWNobWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY3Jhd2xfYXR0YWNobWVudHMnKTtcbiAgfVxuXG4gIC8vIGV4Y2x1ZGVfYXR0YWNobWVudF9maWxlX3BhdHRlcm5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXhjbHVkZUF0dGFjaG1lbnRGaWxlUGF0dGVybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZXhjbHVkZV9hdHRhY2htZW50X2ZpbGVfcGF0dGVybnMnKTtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfYXR0YWNobWVudF9maWxlX3BhdHRlcm5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5jbHVkZUF0dGFjaG1lbnRGaWxlUGF0dGVybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaW5jbHVkZV9hdHRhY2htZW50X2ZpbGVfcGF0dGVybnMnKTtcbiAgfVxuXG4gIC8vIGtub3dsZWRnZV9hcnRpY2xlX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrbm93bGVkZ2VBcnRpY2xlQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdrbm93bGVkZ2VfYXJ0aWNsZV9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2VjcmV0X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY3JldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY3JldF9hcm4nKTtcbiAgfVxuXG4gIC8vIHNlcnZlcl91cmwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXJ2ZXJVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2ZXJfdXJsJyk7XG4gIH1cblxuICAvLyBzdGFuZGFyZF9vYmplY3RfYXR0YWNobWVudF9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhbmRhcmRPYmplY3RBdHRhY2htZW50Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdGFuZGFyZF9vYmplY3RfYXR0YWNobWVudF9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3RhbmRhcmRfb2JqZWN0X2NvbmZpZ3VyYXRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhbmRhcmRPYmplY3RDb25maWd1cmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdGFuZGFyZF9vYmplY3RfY29uZmlndXJhdGlvbnMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2hhdHRlcl9mZWVkX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uQ2hhdHRlckZlZWRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jaGF0dGVyRmVlZENvbmZpZ3VyYXRpb24pLFxuICAgIGNyYXdsX2F0dGFjaG1lbnRzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5jcmF3bEF0dGFjaG1lbnRzKSxcbiAgICBleGNsdWRlX2F0dGFjaG1lbnRfZmlsZV9wYXR0ZXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5leGNsdWRlQXR0YWNobWVudEZpbGVQYXR0ZXJucyksXG4gICAgaW5jbHVkZV9hdHRhY2htZW50X2ZpbGVfcGF0dGVybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuaW5jbHVkZUF0dGFjaG1lbnRGaWxlUGF0dGVybnMpLFxuICAgIGtub3dsZWRnZV9hcnRpY2xlX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uS25vd2xlZGdlQXJ0aWNsZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmtub3dsZWRnZUFydGljbGVDb25maWd1cmF0aW9uKSxcbiAgICBzZWNyZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldEFybiksXG4gICAgc2VydmVyX3VybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJ2ZXJVcmwpLFxuICAgIHN0YW5kYXJkX29iamVjdF9hdHRhY2htZW50X2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uU3RhbmRhcmRPYmplY3RBdHRhY2htZW50Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuc3RhbmRhcmRPYmplY3RBdHRhY2htZW50Q29uZmlndXJhdGlvbiksXG4gICAgc3RhbmRhcmRfb2JqZWN0X2NvbmZpZ3VyYXRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNhbGVzZm9yY2VDb25maWd1cmF0aW9uU3RhbmRhcmRPYmplY3RDb25maWd1cmF0aW9uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN0YW5kYXJkT2JqZWN0Q29uZmlndXJhdGlvbnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TZXJ2aWNlTm93Q29uZmlndXJhdGlvbktub3dsZWRnZUFydGljbGVDb25maWd1cmF0aW9uRmllbGRNYXBwaW5ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGFfc291cmNlX2ZpZWxkX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhU291cmNlRmllbGROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YV9zb3VyY2VfZmllbGRfbmFtZScpO1xuICB9XG5cbiAgLy8gZGF0ZV9maWVsZF9mb3JtYXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRlRmllbGRGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRlX2ZpZWxkX2Zvcm1hdCcpO1xuICB9XG5cbiAgLy8gaW5kZXhfZmllbGRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluZGV4RmllbGROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5kZXhfZmllbGRfbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TZXJ2aWNlTm93Q29uZmlndXJhdGlvbktub3dsZWRnZUFydGljbGVDb25maWd1cmF0aW9uRmllbGRNYXBwaW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNlcnZpY2VOb3dDb25maWd1cmF0aW9uS25vd2xlZGdlQXJ0aWNsZUNvbmZpZ3VyYXRpb25GaWVsZE1hcHBpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFfc291cmNlX2ZpZWxkX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVNvdXJjZUZpZWxkTmFtZSksXG4gICAgZGF0ZV9maWVsZF9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0ZUZpZWxkRm9ybWF0KSxcbiAgICBpbmRleF9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluZGV4RmllbGROYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2VydmljZU5vd0NvbmZpZ3VyYXRpb25Lbm93bGVkZ2VBcnRpY2xlQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNyYXdsX2F0dGFjaG1lbnRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3Jhd2xBdHRhY2htZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjcmF3bF9hdHRhY2htZW50cycpO1xuICB9XG5cbiAgLy8gZG9jdW1lbnRfZGF0YV9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG9jdW1lbnREYXRhRmllbGROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9jdW1lbnRfZGF0YV9maWVsZF9uYW1lJyk7XG4gIH1cblxuICAvLyBkb2N1bWVudF90aXRsZV9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG9jdW1lbnRUaXRsZUZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvY3VtZW50X3RpdGxlX2ZpZWxkX25hbWUnKTtcbiAgfVxuXG4gIC8vIGV4Y2x1ZGVfYXR0YWNobWVudF9maWxlX3BhdHRlcm5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXhjbHVkZUF0dGFjaG1lbnRGaWxlUGF0dGVybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZXhjbHVkZV9hdHRhY2htZW50X2ZpbGVfcGF0dGVybnMnKTtcbiAgfVxuXG4gIC8vIGZpZWxkX21hcHBpbmdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmllbGRNYXBwaW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmaWVsZF9tYXBwaW5ncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfYXR0YWNobWVudF9maWxlX3BhdHRlcm5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5jbHVkZUF0dGFjaG1lbnRGaWxlUGF0dGVybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaW5jbHVkZV9hdHRhY2htZW50X2ZpbGVfcGF0dGVybnMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2VydmljZU5vd0NvbmZpZ3VyYXRpb25Lbm93bGVkZ2VBcnRpY2xlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNlcnZpY2VOb3dDb25maWd1cmF0aW9uS25vd2xlZGdlQXJ0aWNsZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3Jhd2xfYXR0YWNobWVudHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNyYXdsQXR0YWNobWVudHMpLFxuICAgIGRvY3VtZW50X2RhdGFfZmllbGRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb2N1bWVudERhdGFGaWVsZE5hbWUpLFxuICAgIGRvY3VtZW50X3RpdGxlX2ZpZWxkX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG9jdW1lbnRUaXRsZUZpZWxkTmFtZSksXG4gICAgZXhjbHVkZV9hdHRhY2htZW50X2ZpbGVfcGF0dGVybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZXhjbHVkZUF0dGFjaG1lbnRGaWxlUGF0dGVybnMpLFxuICAgIGZpZWxkX21hcHBpbmdzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNlcnZpY2VOb3dDb25maWd1cmF0aW9uS25vd2xlZGdlQXJ0aWNsZUNvbmZpZ3VyYXRpb25GaWVsZE1hcHBpbmdzVG9UZXJyYWZvcm0pKHN0cnVjdCEuZmllbGRNYXBwaW5ncyksXG4gICAgaW5jbHVkZV9hdHRhY2htZW50X2ZpbGVfcGF0dGVybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuaW5jbHVkZUF0dGFjaG1lbnRGaWxlUGF0dGVybnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TZXJ2aWNlTm93Q29uZmlndXJhdGlvblNlcnZpY2VDYXRhbG9nQ29uZmlndXJhdGlvbkZpZWxkTWFwcGluZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhX3NvdXJjZV9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZUZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFfc291cmNlX2ZpZWxkX25hbWUnKTtcbiAgfVxuXG4gIC8vIGRhdGVfZmllbGRfZm9ybWF0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0ZUZpZWxkRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0ZV9maWVsZF9mb3JtYXQnKTtcbiAgfVxuXG4gIC8vIGluZGV4X2ZpZWxkX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmRleEZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luZGV4X2ZpZWxkX25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2VydmljZU5vd0NvbmZpZ3VyYXRpb25TZXJ2aWNlQ2F0YWxvZ0NvbmZpZ3VyYXRpb25GaWVsZE1hcHBpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2VydmljZU5vd0NvbmZpZ3VyYXRpb25TZXJ2aWNlQ2F0YWxvZ0NvbmZpZ3VyYXRpb25GaWVsZE1hcHBpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFfc291cmNlX2ZpZWxkX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVNvdXJjZUZpZWxkTmFtZSksXG4gICAgZGF0ZV9maWVsZF9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0ZUZpZWxkRm9ybWF0KSxcbiAgICBpbmRleF9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluZGV4RmllbGROYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2VydmljZU5vd0NvbmZpZ3VyYXRpb25TZXJ2aWNlQ2F0YWxvZ0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjcmF3bF9hdHRhY2htZW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyYXdsQXR0YWNobWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY3Jhd2xfYXR0YWNobWVudHMnKTtcbiAgfVxuXG4gIC8vIGRvY3VtZW50X2RhdGFfZmllbGRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRvY3VtZW50RGF0YUZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvY3VtZW50X2RhdGFfZmllbGRfbmFtZScpO1xuICB9XG5cbiAgLy8gZG9jdW1lbnRfdGl0bGVfZmllbGRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRvY3VtZW50VGl0bGVGaWVsZE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb2N1bWVudF90aXRsZV9maWVsZF9uYW1lJyk7XG4gIH1cblxuICAvLyBleGNsdWRlX2F0dGFjaG1lbnRfZmlsZV9wYXR0ZXJucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4Y2x1ZGVBdHRhY2htZW50RmlsZVBhdHRlcm5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2V4Y2x1ZGVfYXR0YWNobWVudF9maWxlX3BhdHRlcm5zJyk7XG4gIH1cblxuICAvLyBmaWVsZF9tYXBwaW5ncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZpZWxkTWFwcGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmllbGRfbWFwcGluZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpbmNsdWRlX2F0dGFjaG1lbnRfZmlsZV9wYXR0ZXJucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluY2x1ZGVBdHRhY2htZW50RmlsZVBhdHRlcm5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2luY2x1ZGVfYXR0YWNobWVudF9maWxlX3BhdHRlcm5zJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNlcnZpY2VOb3dDb25maWd1cmF0aW9uU2VydmljZUNhdGFsb2dDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2VydmljZU5vd0NvbmZpZ3VyYXRpb25TZXJ2aWNlQ2F0YWxvZ0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3Jhd2xfYXR0YWNobWVudHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNyYXdsQXR0YWNobWVudHMpLFxuICAgIGRvY3VtZW50X2RhdGFfZmllbGRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb2N1bWVudERhdGFGaWVsZE5hbWUpLFxuICAgIGRvY3VtZW50X3RpdGxlX2ZpZWxkX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG9jdW1lbnRUaXRsZUZpZWxkTmFtZSksXG4gICAgZXhjbHVkZV9hdHRhY2htZW50X2ZpbGVfcGF0dGVybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZXhjbHVkZUF0dGFjaG1lbnRGaWxlUGF0dGVybnMpLFxuICAgIGZpZWxkX21hcHBpbmdzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNlcnZpY2VOb3dDb25maWd1cmF0aW9uU2VydmljZUNhdGFsb2dDb25maWd1cmF0aW9uRmllbGRNYXBwaW5nc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmZpZWxkTWFwcGluZ3MpLFxuICAgIGluY2x1ZGVfYXR0YWNobWVudF9maWxlX3BhdHRlcm5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmluY2x1ZGVBdHRhY2htZW50RmlsZVBhdHRlcm5zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2VydmljZU5vd0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBob3N0X3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3RVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0X3VybCcpO1xuICB9XG5cbiAgLy8ga25vd2xlZGdlX2FydGljbGVfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtub3dsZWRnZUFydGljbGVDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2tub3dsZWRnZV9hcnRpY2xlX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzZWNyZXRfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjcmV0QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VjcmV0X2FybicpO1xuICB9XG5cbiAgLy8gc2VydmljZV9jYXRhbG9nX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXJ2aWNlQ2F0YWxvZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2VydmljZV9jYXRhbG9nX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzZXJ2aWNlX25vd19idWlsZF92ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VydmljZU5vd0J1aWxkVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2Vfbm93X2J1aWxkX3ZlcnNpb24nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2VydmljZU5vd0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TZXJ2aWNlTm93Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBob3N0X3VybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0VXJsKSxcbiAgICBrbm93bGVkZ2VfYXJ0aWNsZV9jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TZXJ2aWNlTm93Q29uZmlndXJhdGlvbktub3dsZWRnZUFydGljbGVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5rbm93bGVkZ2VBcnRpY2xlQ29uZmlndXJhdGlvbiksXG4gICAgc2VjcmV0X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNyZXRBcm4pLFxuICAgIHNlcnZpY2VfY2F0YWxvZ19jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TZXJ2aWNlTm93Q29uZmlndXJhdGlvblNlcnZpY2VDYXRhbG9nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZUNhdGFsb2dDb25maWd1cmF0aW9uKSxcbiAgICBzZXJ2aWNlX25vd19idWlsZF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZpY2VOb3dCdWlsZFZlcnNpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TaGFyZVBvaW50Q29uZmlndXJhdGlvbkZpZWxkTWFwcGluZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhX3NvdXJjZV9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZUZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFfc291cmNlX2ZpZWxkX25hbWUnKTtcbiAgfVxuXG4gIC8vIGRhdGVfZmllbGRfZm9ybWF0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0ZUZpZWxkRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0ZV9maWVsZF9mb3JtYXQnKTtcbiAgfVxuXG4gIC8vIGluZGV4X2ZpZWxkX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmRleEZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luZGV4X2ZpZWxkX25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2hhcmVQb2ludENvbmZpZ3VyYXRpb25GaWVsZE1hcHBpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2hhcmVQb2ludENvbmZpZ3VyYXRpb25GaWVsZE1hcHBpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFfc291cmNlX2ZpZWxkX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVNvdXJjZUZpZWxkTmFtZSksXG4gICAgZGF0ZV9maWVsZF9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0ZUZpZWxkRm9ybWF0KSxcbiAgICBpbmRleF9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluZGV4RmllbGROYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2hhcmVQb2ludENvbmZpZ3VyYXRpb25WcGNDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9pZHMnKTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdWJuZXRJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VibmV0X2lkcycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TaGFyZVBvaW50Q29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TaGFyZVBvaW50Q29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2VjdXJpdHlfZ3JvdXBfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBJZHMpLFxuICAgIHN1Ym5ldF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3VibmV0SWRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2hhcmVQb2ludENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjcmF3bF9hdHRhY2htZW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyYXdsQXR0YWNobWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY3Jhd2xfYXR0YWNobWVudHMnKTtcbiAgfVxuXG4gIC8vIGRpc2FibGVfbG9jYWxfZ3JvdXBzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGlzYWJsZUxvY2FsR3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Rpc2FibGVfbG9jYWxfZ3JvdXBzJyk7XG4gIH1cblxuICAvLyBkb2N1bWVudF90aXRsZV9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG9jdW1lbnRUaXRsZUZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvY3VtZW50X3RpdGxlX2ZpZWxkX25hbWUnKTtcbiAgfVxuXG4gIC8vIGV4Y2x1c2lvbl9wYXR0ZXJucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4Y2x1c2lvblBhdHRlcm5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2V4Y2x1c2lvbl9wYXR0ZXJucycpO1xuICB9XG5cbiAgLy8gZmllbGRfbWFwcGluZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmaWVsZE1hcHBpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ZpZWxkX21hcHBpbmdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaW5jbHVzaW9uX3BhdHRlcm5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5jbHVzaW9uUGF0dGVybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaW5jbHVzaW9uX3BhdHRlcm5zJyk7XG4gIH1cblxuICAvLyBzZWNyZXRfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjcmV0QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VjcmV0X2FybicpO1xuICB9XG5cbiAgLy8gc2hhcmVfcG9pbnRfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNoYXJlUG9pbnRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2hhcmVfcG9pbnRfdmVyc2lvbicpO1xuICB9XG5cbiAgLy8gdXJscyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVybHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndXJscycpO1xuICB9XG5cbiAgLy8gdXNlX2NoYW5nZV9sb2cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1c2VDaGFuZ2VMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndXNlX2NoYW5nZV9sb2cnKTtcbiAgfVxuXG4gIC8vIHZwY19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdnBjQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2cGNfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2hhcmVQb2ludENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TaGFyZVBvaW50Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjcmF3bF9hdHRhY2htZW50czogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY3Jhd2xBdHRhY2htZW50cyksXG4gICAgZGlzYWJsZV9sb2NhbF9ncm91cHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRpc2FibGVMb2NhbEdyb3VwcyksXG4gICAgZG9jdW1lbnRfdGl0bGVfZmllbGRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb2N1bWVudFRpdGxlRmllbGROYW1lKSxcbiAgICBleGNsdXNpb25fcGF0dGVybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZXhjbHVzaW9uUGF0dGVybnMpLFxuICAgIGZpZWxkX21hcHBpbmdzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNoYXJlUG9pbnRDb25maWd1cmF0aW9uRmllbGRNYXBwaW5nc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmZpZWxkTWFwcGluZ3MpLFxuICAgIGluY2x1c2lvbl9wYXR0ZXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5pbmNsdXNpb25QYXR0ZXJucyksXG4gICAgc2VjcmV0X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNyZXRBcm4pLFxuICAgIHNoYXJlX3BvaW50X3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2hhcmVQb2ludFZlcnNpb24pLFxuICAgIHVybHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudXJscyksXG4gICAgdXNlX2NoYW5nZV9sb2c6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnVzZUNoYW5nZUxvZyksXG4gICAgdnBjX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNoYXJlUG9pbnRDb25maWd1cmF0aW9uVnBjQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEudnBjQ29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbmZsdWVuY2VfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbmZsdWVuY2VDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbmZsdWVuY2VfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRhdGFiYXNlX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhYmFzZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGF0YWJhc2VfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGdvb2dsZV9kcml2ZV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZ29vZ2xlRHJpdmVDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2dvb2dsZV9kcml2ZV9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gb25lX2RyaXZlX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvbmVEcml2ZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb25lX2RyaXZlX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzM19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3MzX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzYWxlc2ZvcmNlX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzYWxlc2ZvcmNlQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzYWxlc2ZvcmNlX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzZXJ2aWNlX25vd19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VydmljZU5vd0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2VydmljZV9ub3dfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNoYXJlX3BvaW50X2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaGFyZVBvaW50Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzaGFyZV9wb2ludF9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29uZmx1ZW5jZV9jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25Db25mbHVlbmNlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuY29uZmx1ZW5jZUNvbmZpZ3VyYXRpb24pLFxuICAgIGRhdGFiYXNlX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvbkRhdGFiYXNlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2VDb25maWd1cmF0aW9uKSxcbiAgICBnb29nbGVfZHJpdmVfY29uZmlndXJhdGlvbjogZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uR29vZ2xlRHJpdmVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5nb29nbGVEcml2ZUNvbmZpZ3VyYXRpb24pLFxuICAgIG9uZV9kcml2ZV9jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25PbmVEcml2ZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLm9uZURyaXZlQ29uZmlndXJhdGlvbiksXG4gICAgczNfY29uZmlndXJhdGlvbjogZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5zM0NvbmZpZ3VyYXRpb24pLFxuICAgIHNhbGVzZm9yY2VfY29uZmlndXJhdGlvbjogZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZURhdGFTb3VyY2VDb25maWd1cmF0aW9uU2FsZXNmb3JjZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnNhbGVzZm9yY2VDb25maWd1cmF0aW9uKSxcbiAgICBzZXJ2aWNlX25vd19jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlRGF0YVNvdXJjZUNvbmZpZ3VyYXRpb25TZXJ2aWNlTm93Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZU5vd0NvbmZpZ3VyYXRpb24pLFxuICAgIHNoYXJlX3BvaW50X2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VEYXRhU291cmNlQ29uZmlndXJhdGlvblNoYXJlUG9pbnRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5zaGFyZVBvaW50Q29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VUYWdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZVRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFEYXRhU291cmNlVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9rZW5kcmFfZGF0YV9zb3VyY2UuaHRtbCBhd3NjY19rZW5kcmFfZGF0YV9zb3VyY2V9XG4qL1xuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2UgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2tlbmRyYV9kYXRhX3NvdXJjZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9rZW5kcmFfZGF0YV9zb3VyY2UuaHRtbCBhd3NjY19rZW5kcmFfZGF0YV9zb3VyY2V9IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY0tlbmRyYURhdGFTb3VyY2VDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjS2VuZHJhRGF0YVNvdXJjZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2Nfa2VuZHJhX2RhdGFfc291cmNlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZGF0YV9zb3VyY2VfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFTb3VyY2VDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RhdGFfc291cmNlX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBpbmRleF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluZGV4SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbmRleF9pZCcpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gc2NoZWR1bGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzY2hlZHVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NjaGVkdWxlJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxufVxuIl19