"use strict";
// https://www.terraform.io/docs/providers/awscc/d/customerprofiles_integration.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccCustomerprofilesIntegration = exports.dataAwsccCustomerprofilesIntegrationTagsToTerraform = exports.DataAwsccCustomerprofilesIntegrationTags = exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionToTerraform = exports.DataAwsccCustomerprofilesIntegrationFlowDefinition = exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigToTerraform = exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig = exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToTerraform = exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties = exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToTerraform = exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled = exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksToTerraform = exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks = exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToTerraform = exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties = exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToTerraform = exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator = exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigToTerraform = exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig = exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToTerraform = exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties = exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform = exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk = exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform = exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow = exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform = exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce = exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToTerraform = exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 = exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform = exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo = exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToTerraform = exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig = void 0;
const cdktf = require("cdktf");
class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig extends cdktf.ComplexComputedList {
    // datetime_type_field_name - computed: true, optional: false, required: false
    get datetimeTypeFieldName() {
        return this.getStringAttribute('datetime_type_field_name');
    }
}
exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig = DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig;
function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        datetime_type_field_name: cdktf.stringToTerraform(struct.datetimeTypeFieldName),
    };
}
exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToTerraform = dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToTerraform;
class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo extends cdktf.ComplexComputedList {
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo = DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo;
function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform = dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform;
class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 extends cdktf.ComplexComputedList {
    // bucket_name - computed: true, optional: false, required: false
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    // bucket_prefix - computed: true, optional: false, required: false
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
}
exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 = DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3;
function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
    };
}
exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToTerraform = dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToTerraform;
class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce extends cdktf.ComplexComputedList {
    // enable_dynamic_field_update - computed: true, optional: false, required: false
    get enableDynamicFieldUpdate() {
        return this.getBooleanAttribute('enable_dynamic_field_update');
    }
    // include_deleted_records - computed: true, optional: false, required: false
    get includeDeletedRecords() {
        return this.getBooleanAttribute('include_deleted_records');
    }
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce = DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce;
function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enable_dynamic_field_update: cdktf.booleanToTerraform(struct.enableDynamicFieldUpdate),
        include_deleted_records: cdktf.booleanToTerraform(struct.includeDeletedRecords),
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform = dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform;
class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow extends cdktf.ComplexComputedList {
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow = DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow;
function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform = dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform;
class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk extends cdktf.ComplexComputedList {
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk = DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk;
function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform = dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform;
class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties extends cdktf.ComplexComputedList {
    // marketo - computed: true, optional: false, required: false
    get marketo() {
        return this.interpolationForAttribute('marketo');
    }
    // s3 - computed: true, optional: false, required: false
    get s3() {
        return this.interpolationForAttribute('s3');
    }
    // salesforce - computed: true, optional: false, required: false
    get salesforce() {
        return this.interpolationForAttribute('salesforce');
    }
    // service_now - computed: true, optional: false, required: false
    get serviceNow() {
        return this.interpolationForAttribute('service_now');
    }
    // zendesk - computed: true, optional: false, required: false
    get zendesk() {
        return this.interpolationForAttribute('zendesk');
    }
}
exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties = DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties;
function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        marketo: dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct.marketo),
        s3: dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct.s3),
        salesforce: dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct.salesforce),
        service_now: dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct.serviceNow),
        zendesk: dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct.zendesk),
    };
}
exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToTerraform = dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToTerraform;
class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig extends cdktf.ComplexComputedList {
    // connector_profile_name - computed: true, optional: false, required: false
    get connectorProfileName() {
        return this.getStringAttribute('connector_profile_name');
    }
    // connector_type - computed: true, optional: false, required: false
    get connectorType() {
        return this.getStringAttribute('connector_type');
    }
    // incremental_pull_config - computed: true, optional: false, required: false
    get incrementalPullConfig() {
        return this.interpolationForAttribute('incremental_pull_config');
    }
    // source_connector_properties - computed: true, optional: false, required: false
    get sourceConnectorProperties() {
        return this.interpolationForAttribute('source_connector_properties');
    }
}
exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig = DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig;
function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connector_profile_name: cdktf.stringToTerraform(struct.connectorProfileName),
        connector_type: cdktf.stringToTerraform(struct.connectorType),
        incremental_pull_config: dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToTerraform(struct.incrementalPullConfig),
        source_connector_properties: dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToTerraform(struct.sourceConnectorProperties),
    };
}
exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigToTerraform = dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigToTerraform;
class DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator extends cdktf.ComplexComputedList {
    // marketo - computed: true, optional: false, required: false
    get marketo() {
        return this.getStringAttribute('marketo');
    }
    // s3 - computed: true, optional: false, required: false
    get s3() {
        return this.getStringAttribute('s3');
    }
    // salesforce - computed: true, optional: false, required: false
    get salesforce() {
        return this.getStringAttribute('salesforce');
    }
    // service_now - computed: true, optional: false, required: false
    get serviceNow() {
        return this.getStringAttribute('service_now');
    }
    // zendesk - computed: true, optional: false, required: false
    get zendesk() {
        return this.getStringAttribute('zendesk');
    }
}
exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator = DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator;
function dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        marketo: cdktf.stringToTerraform(struct.marketo),
        s3: cdktf.stringToTerraform(struct.s3),
        salesforce: cdktf.stringToTerraform(struct.salesforce),
        service_now: cdktf.stringToTerraform(struct.serviceNow),
        zendesk: cdktf.stringToTerraform(struct.zendesk),
    };
}
exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToTerraform = dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToTerraform;
class DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties extends cdktf.ComplexComputedList {
    // operator_property_key - computed: true, optional: false, required: false
    get operatorPropertyKey() {
        return this.getStringAttribute('operator_property_key');
    }
    // property - computed: true, optional: false, required: false
    get property() {
        return this.getStringAttribute('property');
    }
}
exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties = DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties;
function dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        operator_property_key: cdktf.stringToTerraform(struct.operatorPropertyKey),
        property: cdktf.stringToTerraform(struct.property),
    };
}
exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToTerraform = dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToTerraform;
class DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks extends cdktf.ComplexComputedList {
    // connector_operator - computed: true, optional: false, required: false
    get connectorOperator() {
        return this.interpolationForAttribute('connector_operator');
    }
    // destination_field - computed: true, optional: false, required: false
    get destinationField() {
        return this.getStringAttribute('destination_field');
    }
    // source_fields - computed: true, optional: false, required: false
    get sourceFields() {
        return this.getListAttribute('source_fields');
    }
    // task_properties - computed: true, optional: false, required: false
    get taskProperties() {
        return this.interpolationForAttribute('task_properties');
    }
    // task_type - computed: true, optional: false, required: false
    get taskType() {
        return this.getStringAttribute('task_type');
    }
}
exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks = DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks;
function dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connector_operator: dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToTerraform(struct.connectorOperator),
        destination_field: cdktf.stringToTerraform(struct.destinationField),
        source_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct.sourceFields),
        task_properties: cdktf.listMapper(dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToTerraform)(struct.taskProperties),
        task_type: cdktf.stringToTerraform(struct.taskType),
    };
}
exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksToTerraform = dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksToTerraform;
class DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled extends cdktf.ComplexComputedList {
    // data_pull_mode - computed: true, optional: false, required: false
    get dataPullMode() {
        return this.getStringAttribute('data_pull_mode');
    }
    // first_execution_from - computed: true, optional: false, required: false
    get firstExecutionFrom() {
        return this.getNumberAttribute('first_execution_from');
    }
    // schedule_end_time - computed: true, optional: false, required: false
    get scheduleEndTime() {
        return this.getNumberAttribute('schedule_end_time');
    }
    // schedule_expression - computed: true, optional: false, required: false
    get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    // schedule_offset - computed: true, optional: false, required: false
    get scheduleOffset() {
        return this.getNumberAttribute('schedule_offset');
    }
    // schedule_start_time - computed: true, optional: false, required: false
    get scheduleStartTime() {
        return this.getNumberAttribute('schedule_start_time');
    }
    // timezone - computed: true, optional: false, required: false
    get timezone() {
        return this.getStringAttribute('timezone');
    }
}
exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled = DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled;
function dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_pull_mode: cdktf.stringToTerraform(struct.dataPullMode),
        first_execution_from: cdktf.numberToTerraform(struct.firstExecutionFrom),
        schedule_end_time: cdktf.numberToTerraform(struct.scheduleEndTime),
        schedule_expression: cdktf.stringToTerraform(struct.scheduleExpression),
        schedule_offset: cdktf.numberToTerraform(struct.scheduleOffset),
        schedule_start_time: cdktf.numberToTerraform(struct.scheduleStartTime),
        timezone: cdktf.stringToTerraform(struct.timezone),
    };
}
exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToTerraform = dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToTerraform;
class DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties extends cdktf.ComplexComputedList {
    // scheduled - computed: true, optional: false, required: false
    get scheduled() {
        return this.interpolationForAttribute('scheduled');
    }
}
exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties = DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties;
function dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        scheduled: dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToTerraform(struct.scheduled),
    };
}
exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToTerraform = dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToTerraform;
class DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig extends cdktf.ComplexComputedList {
    // trigger_properties - computed: true, optional: false, required: false
    get triggerProperties() {
        return this.interpolationForAttribute('trigger_properties');
    }
    // trigger_type - computed: true, optional: false, required: false
    get triggerType() {
        return this.getStringAttribute('trigger_type');
    }
}
exports.DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig = DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig;
function dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        trigger_properties: dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToTerraform(struct.triggerProperties),
        trigger_type: cdktf.stringToTerraform(struct.triggerType),
    };
}
exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigToTerraform = dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigToTerraform;
class DataAwsccCustomerprofilesIntegrationFlowDefinition extends cdktf.ComplexComputedList {
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // flow_name - computed: true, optional: false, required: false
    get flowName() {
        return this.getStringAttribute('flow_name');
    }
    // kms_arn - computed: true, optional: false, required: false
    get kmsArn() {
        return this.getStringAttribute('kms_arn');
    }
    // source_flow_config - computed: true, optional: false, required: false
    get sourceFlowConfig() {
        return this.interpolationForAttribute('source_flow_config');
    }
    // tasks - computed: true, optional: false, required: false
    get tasks() {
        return this.interpolationForAttribute('tasks');
    }
    // trigger_config - computed: true, optional: false, required: false
    get triggerConfig() {
        return this.interpolationForAttribute('trigger_config');
    }
}
exports.DataAwsccCustomerprofilesIntegrationFlowDefinition = DataAwsccCustomerprofilesIntegrationFlowDefinition;
function dataAwsccCustomerprofilesIntegrationFlowDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        flow_name: cdktf.stringToTerraform(struct.flowName),
        kms_arn: cdktf.stringToTerraform(struct.kmsArn),
        source_flow_config: dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigToTerraform(struct.sourceFlowConfig),
        tasks: cdktf.listMapper(dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksToTerraform)(struct.tasks),
        trigger_config: dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigToTerraform(struct.triggerConfig),
    };
}
exports.dataAwsccCustomerprofilesIntegrationFlowDefinitionToTerraform = dataAwsccCustomerprofilesIntegrationFlowDefinitionToTerraform;
class DataAwsccCustomerprofilesIntegrationTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccCustomerprofilesIntegrationTags = DataAwsccCustomerprofilesIntegrationTags;
function dataAwsccCustomerprofilesIntegrationTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccCustomerprofilesIntegrationTagsToTerraform = dataAwsccCustomerprofilesIntegrationTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_integration.html awscc_customerprofiles_integration}
*/
class DataAwsccCustomerprofilesIntegration extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_integration.html awscc_customerprofiles_integration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCustomerprofilesIntegrationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_customerprofiles_integration',
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
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // domain_name - computed: true, optional: false, required: false
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    // flow_definition - computed: true, optional: false, required: false
    get flowDefinition() {
        return this.interpolationForAttribute('flow_definition');
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
    // last_updated_at - computed: true, optional: false, required: false
    get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
    }
    // object_type_name - computed: true, optional: false, required: false
    get objectTypeName() {
        return this.getStringAttribute('object_type_name');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // uri - computed: true, optional: false, required: false
    get uri() {
        return this.getStringAttribute('uri');
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
exports.DataAwsccCustomerprofilesIntegration = DataAwsccCustomerprofilesIntegration;
// =================
// STATIC PROPERTIES
// =================
DataAwsccCustomerprofilesIntegration.tfResourceType = "awscc_customerprofiles_integration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1jdXN0b21lcnByb2ZpbGVzLWludGVncmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1jdXN0b21lcnByb2ZpbGVzLWludGVncmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvRkFBb0Y7QUFDcEYsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBWS9CLE1BQWEsdUZBQXdGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVwSSw4RUFBOEU7SUFDOUUsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0Y7QUFORCwwTEFNQztBQUVELFNBQWdCLGtHQUFrRyxDQUFDLE1BQWdHO0lBQ2pOLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztLQUNqRixDQUFBO0FBQ0gsQ0FBQztBQUxELGdOQUtDO0FBRUQsTUFBYSxrR0FBbUcsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRS9JLDREQUE0RDtJQUM1RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUFORCxnTkFNQztBQUVELFNBQWdCLDZHQUE2RyxDQUFDLE1BQTJHO0lBQ3ZPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2hELENBQUE7QUFDSCxDQUFDO0FBTEQs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LElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7QUE1Rkgsb0ZBNkZDO0FBM0ZDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csbURBQWMsR0FBVyxvQ0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2N1c3RvbWVycHJvZmlsZXNfaW50ZWdyYXRpb24uaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBVbmlxdWVseSBpZGVudGlmaWVzIHRoZSByZXNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2N1c3RvbWVycHJvZmlsZXNfaW50ZWdyYXRpb24uaHRtbCNpZCBEYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb24jaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25Tb3VyY2VGbG93Q29uZmlnSW5jcmVtZW50YWxQdWxsQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0ZXRpbWVfdHlwZV9maWVsZF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0ZXRpbWVUeXBlRmllbGROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0ZXRpbWVfdHlwZV9maWVsZF9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkZsb3dEZWZpbml0aW9uU291cmNlRmxvd0NvbmZpZ0luY3JlbWVudGFsUHVsbENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkZsb3dEZWZpbml0aW9uU291cmNlRmxvd0NvbmZpZ0luY3JlbWVudGFsUHVsbENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRldGltZV90eXBlX2ZpZWxkX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0ZXRpbWVUeXBlRmllbGROYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25Tb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc01hcmtldG8gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBvYmplY3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvYmplY3QnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25Tb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc01hcmtldG9Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblNvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzTWFya2V0byk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBvYmplY3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub2JqZWN0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25Tb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc1MzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYnVja2V0X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X25hbWUnKTtcbiAgfVxuXG4gIC8vIGJ1Y2tldF9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXRQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfcHJlZml4Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkZsb3dEZWZpbml0aW9uU291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNTM1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkZsb3dEZWZpbml0aW9uU291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNTMyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXROYW1lKSxcbiAgICBidWNrZXRfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldFByZWZpeCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkZsb3dEZWZpbml0aW9uU291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNTYWxlc2ZvcmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlX2R5bmFtaWNfZmllbGRfdXBkYXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlRHluYW1pY0ZpZWxkVXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9keW5hbWljX2ZpZWxkX3VwZGF0ZScpO1xuICB9XG5cbiAgLy8gaW5jbHVkZV9kZWxldGVkX3JlY29yZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmNsdWRlRGVsZXRlZFJlY29yZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV9kZWxldGVkX3JlY29yZHMnKTtcbiAgfVxuXG4gIC8vIG9iamVjdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29iamVjdCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblNvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzU2FsZXNmb3JjZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkZsb3dEZWZpbml0aW9uU291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNTYWxlc2ZvcmNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZV9keW5hbWljX2ZpZWxkX3VwZGF0ZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlRHluYW1pY0ZpZWxkVXBkYXRlKSxcbiAgICBpbmNsdWRlX2RlbGV0ZWRfcmVjb3JkczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZURlbGV0ZWRSZWNvcmRzKSxcbiAgICBvYmplY3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub2JqZWN0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25Tb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc1NlcnZpY2VOb3cgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBvYmplY3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvYmplY3QnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25Tb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc1NlcnZpY2VOb3dUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblNvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzU2VydmljZU5vdyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBvYmplY3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub2JqZWN0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25Tb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc1plbmRlc2sgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBvYmplY3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvYmplY3QnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25Tb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc1plbmRlc2tUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblNvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzWmVuZGVzayk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBvYmplY3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub2JqZWN0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25Tb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG1hcmtldG8gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXJrZXRvKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21hcmtldG8nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzMyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3MzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2FsZXNmb3JjZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNhbGVzZm9yY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2FsZXNmb3JjZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNlcnZpY2Vfbm93IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VydmljZU5vdygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzZXJ2aWNlX25vdycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHplbmRlc2sgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB6ZW5kZXNrKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3plbmRlc2snKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkZsb3dEZWZpbml0aW9uU291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblNvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1hcmtldG86IGRhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkZsb3dEZWZpbml0aW9uU291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNNYXJrZXRvVG9UZXJyYWZvcm0oc3RydWN0IS5tYXJrZXRvKSxcbiAgICBzMzogZGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25Tb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc1MzVG9UZXJyYWZvcm0oc3RydWN0IS5zMyksXG4gICAgc2FsZXNmb3JjZTogZGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25Tb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc1NhbGVzZm9yY2VUb1RlcnJhZm9ybShzdHJ1Y3QhLnNhbGVzZm9yY2UpLFxuICAgIHNlcnZpY2Vfbm93OiBkYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblNvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzU2VydmljZU5vd1RvVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZU5vdyksXG4gICAgemVuZGVzazogZGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25Tb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc1plbmRlc2tUb1RlcnJhZm9ybShzdHJ1Y3QhLnplbmRlc2spLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblNvdXJjZUZsb3dDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb25uZWN0b3JfcHJvZmlsZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29ubmVjdG9yUHJvZmlsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25uZWN0b3JfcHJvZmlsZV9uYW1lJyk7XG4gIH1cblxuICAvLyBjb25uZWN0b3JfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbm5lY3RvclR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25uZWN0b3JfdHlwZScpO1xuICB9XG5cbiAgLy8gaW5jcmVtZW50YWxfcHVsbF9jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmNyZW1lbnRhbFB1bGxDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaW5jcmVtZW50YWxfcHVsbF9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzb3VyY2VfY29ubmVjdG9yX3Byb3BlcnRpZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NvdXJjZV9jb25uZWN0b3JfcHJvcGVydGllcycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25Tb3VyY2VGbG93Q29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25Tb3VyY2VGbG93Q29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbm5lY3Rvcl9wcm9maWxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29ubmVjdG9yUHJvZmlsZU5hbWUpLFxuICAgIGNvbm5lY3Rvcl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3RvclR5cGUpLFxuICAgIGluY3JlbWVudGFsX3B1bGxfY29uZmlnOiBkYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblNvdXJjZUZsb3dDb25maWdJbmNyZW1lbnRhbFB1bGxDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluY3JlbWVudGFsUHVsbENvbmZpZyksXG4gICAgc291cmNlX2Nvbm5lY3Rvcl9wcm9wZXJ0aWVzOiBkYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblNvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25UYXNrc0Nvbm5lY3Rvck9wZXJhdG9yIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbWFya2V0byAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1hcmtldG8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXJrZXRvJyk7XG4gIH1cblxuICAvLyBzMyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczMnKTtcbiAgfVxuXG4gIC8vIHNhbGVzZm9yY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzYWxlc2ZvcmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2FsZXNmb3JjZScpO1xuICB9XG5cbiAgLy8gc2VydmljZV9ub3cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXJ2aWNlTm93KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9ub3cnKTtcbiAgfVxuXG4gIC8vIHplbmRlc2sgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB6ZW5kZXNrKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnemVuZGVzaycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblRhc2tzQ29ubmVjdG9yT3BlcmF0b3JUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblRhc2tzQ29ubmVjdG9yT3BlcmF0b3IpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWFya2V0bzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYXJrZXRvKSxcbiAgICBzMzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zMyksXG4gICAgc2FsZXNmb3JjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zYWxlc2ZvcmNlKSxcbiAgICBzZXJ2aWNlX25vdzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJ2aWNlTm93KSxcbiAgICB6ZW5kZXNrOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnplbmRlc2spLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblRhc2tzVGFza1Byb3BlcnRpZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBvcGVyYXRvcl9wcm9wZXJ0eV9rZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvcGVyYXRvclByb3BlcnR5S2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3BlcmF0b3JfcHJvcGVydHlfa2V5Jyk7XG4gIH1cblxuICAvLyBwcm9wZXJ0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvcGVydHknKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25UYXNrc1Rhc2tQcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25UYXNrc1Rhc2tQcm9wZXJ0aWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG9wZXJhdG9yX3Byb3BlcnR5X2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcGVyYXRvclByb3BlcnR5S2V5KSxcbiAgICBwcm9wZXJ0eTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9wZXJ0eSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkZsb3dEZWZpbml0aW9uVGFza3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb25uZWN0b3Jfb3BlcmF0b3IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25uZWN0b3JPcGVyYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb25uZWN0b3Jfb3BlcmF0b3InKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbl9maWVsZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uRmllbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXN0aW5hdGlvbl9maWVsZCcpO1xuICB9XG5cbiAgLy8gc291cmNlX2ZpZWxkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNvdXJjZUZpZWxkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzb3VyY2VfZmllbGRzJyk7XG4gIH1cblxuICAvLyB0YXNrX3Byb3BlcnRpZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YXNrUHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YXNrX3Byb3BlcnRpZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0YXNrX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YXNrVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Rhc2tfdHlwZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblRhc2tzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25UYXNrcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb25uZWN0b3Jfb3BlcmF0b3I6IGRhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkZsb3dEZWZpbml0aW9uVGFza3NDb25uZWN0b3JPcGVyYXRvclRvVGVycmFmb3JtKHN0cnVjdCEuY29ubmVjdG9yT3BlcmF0b3IpLFxuICAgIGRlc3RpbmF0aW9uX2ZpZWxkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uRmllbGQpLFxuICAgIHNvdXJjZV9maWVsZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc291cmNlRmllbGRzKSxcbiAgICB0YXNrX3Byb3BlcnRpZXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25UYXNrc1Rhc2tQcm9wZXJ0aWVzVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFza1Byb3BlcnRpZXMpLFxuICAgIHRhc2tfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YXNrVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkZsb3dEZWZpbml0aW9uVHJpZ2dlckNvbmZpZ1RyaWdnZXJQcm9wZXJ0aWVzU2NoZWR1bGVkIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YV9wdWxsX21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhUHVsbE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3B1bGxfbW9kZScpO1xuICB9XG5cbiAgLy8gZmlyc3RfZXhlY3V0aW9uX2Zyb20gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmaXJzdEV4ZWN1dGlvbkZyb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdmaXJzdF9leGVjdXRpb25fZnJvbScpO1xuICB9XG5cbiAgLy8gc2NoZWR1bGVfZW5kX3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzY2hlZHVsZUVuZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzY2hlZHVsZV9lbmRfdGltZScpO1xuICB9XG5cbiAgLy8gc2NoZWR1bGVfZXhwcmVzc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNjaGVkdWxlRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NjaGVkdWxlX2V4cHJlc3Npb24nKTtcbiAgfVxuXG4gIC8vIHNjaGVkdWxlX29mZnNldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNjaGVkdWxlT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc2NoZWR1bGVfb2Zmc2V0Jyk7XG4gIH1cblxuICAvLyBzY2hlZHVsZV9zdGFydF90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2NoZWR1bGVTdGFydFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzY2hlZHVsZV9zdGFydF90aW1lJyk7XG4gIH1cblxuICAvLyB0aW1lem9uZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRpbWV6b25lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGltZXpvbmUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25UcmlnZ2VyQ29uZmlnVHJpZ2dlclByb3BlcnRpZXNTY2hlZHVsZWRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblRyaWdnZXJDb25maWdUcmlnZ2VyUHJvcGVydGllc1NjaGVkdWxlZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhX3B1bGxfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhUHVsbE1vZGUpLFxuICAgIGZpcnN0X2V4ZWN1dGlvbl9mcm9tOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpcnN0RXhlY3V0aW9uRnJvbSksXG4gICAgc2NoZWR1bGVfZW5kX3RpbWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2NoZWR1bGVFbmRUaW1lKSxcbiAgICBzY2hlZHVsZV9leHByZXNzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjaGVkdWxlRXhwcmVzc2lvbiksXG4gICAgc2NoZWR1bGVfb2Zmc2V0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjaGVkdWxlT2Zmc2V0KSxcbiAgICBzY2hlZHVsZV9zdGFydF90aW1lOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjaGVkdWxlU3RhcnRUaW1lKSxcbiAgICB0aW1lem9uZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lem9uZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkZsb3dEZWZpbml0aW9uVHJpZ2dlckNvbmZpZ1RyaWdnZXJQcm9wZXJ0aWVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc2NoZWR1bGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2NoZWR1bGVkKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NjaGVkdWxlZCcpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25UcmlnZ2VyQ29uZmlnVHJpZ2dlclByb3BlcnRpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblRyaWdnZXJDb25maWdUcmlnZ2VyUHJvcGVydGllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzY2hlZHVsZWQ6IGRhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkZsb3dEZWZpbml0aW9uVHJpZ2dlckNvbmZpZ1RyaWdnZXJQcm9wZXJ0aWVzU2NoZWR1bGVkVG9UZXJyYWZvcm0oc3RydWN0IS5zY2hlZHVsZWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblRyaWdnZXJDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyB0cmlnZ2VyX3Byb3BlcnRpZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0cmlnZ2VyUHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0cmlnZ2VyX3Byb3BlcnRpZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0cmlnZ2VyX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0cmlnZ2VyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RyaWdnZXJfdHlwZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblRyaWdnZXJDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblRyaWdnZXJDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdHJpZ2dlcl9wcm9wZXJ0aWVzOiBkYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblRyaWdnZXJDb25maWdUcmlnZ2VyUHJvcGVydGllc1RvVGVycmFmb3JtKHN0cnVjdCEudHJpZ2dlclByb3BlcnRpZXMpLFxuICAgIHRyaWdnZXJfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50cmlnZ2VyVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkZsb3dEZWZpbml0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cblxuICAvLyBmbG93X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmbG93TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Zsb3dfbmFtZScpO1xuICB9XG5cbiAgLy8ga21zX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGttc0FybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19hcm4nKTtcbiAgfVxuXG4gIC8vIHNvdXJjZV9mbG93X2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNvdXJjZUZsb3dDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc291cmNlX2Zsb3dfY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGFza3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YXNrcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRyaWdnZXJfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHJpZ2dlckNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0cmlnZ2VyX2NvbmZpZycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uRmxvd0RlZmluaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXNjcmlwdGlvbiksXG4gICAgZmxvd19uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZsb3dOYW1lKSxcbiAgICBrbXNfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0FybiksXG4gICAgc291cmNlX2Zsb3dfY29uZmlnOiBkYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25GbG93RGVmaW5pdGlvblNvdXJjZUZsb3dDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZUZsb3dDb25maWcpLFxuICAgIHRhc2tzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkZsb3dEZWZpbml0aW9uVGFza3NUb1RlcnJhZm9ybSkoc3RydWN0IS50YXNrcyksXG4gICAgdHJpZ2dlcl9jb25maWc6IGRhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvbkZsb3dEZWZpbml0aW9uVHJpZ2dlckNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEudHJpZ2dlckNvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0N1c3RvbWVycHJvZmlsZXNJbnRlZ3JhdGlvblRhZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25UYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9jdXN0b21lcnByb2ZpbGVzX2ludGVncmF0aW9uLmh0bWwgYXdzY2NfY3VzdG9tZXJwcm9maWxlc19pbnRlZ3JhdGlvbn1cbiovXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19jdXN0b21lcnByb2ZpbGVzX2ludGVncmF0aW9uXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2N1c3RvbWVycHJvZmlsZXNfaW50ZWdyYXRpb24uaHRtbCBhd3NjY19jdXN0b21lcnByb2ZpbGVzX2ludGVncmF0aW9ufSBEYXRhIFNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBEYXRhQXdzY2NDdXN0b21lcnByb2ZpbGVzSW50ZWdyYXRpb25Db25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjQ3VzdG9tZXJwcm9maWxlc0ludGVncmF0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19jdXN0b21lcnByb2ZpbGVzX2ludGVncmF0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNyZWF0ZWRfYXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmVhdGVkQXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGVkX2F0Jyk7XG4gIH1cblxuICAvLyBkb21haW5fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRvbWFpbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb21haW5fbmFtZScpO1xuICB9XG5cbiAgLy8gZmxvd19kZWZpbml0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmxvd0RlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmxvd19kZWZpbml0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRcbiAgfVxuXG4gIC8vIGxhc3RfdXBkYXRlZF9hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RVcGRhdGVkQXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X3VwZGF0ZWRfYXQnKTtcbiAgfVxuXG4gIC8vIG9iamVjdF90eXBlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvYmplY3RUeXBlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29iamVjdF90eXBlX25hbWUnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB1cmkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1cmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1cmknKTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=