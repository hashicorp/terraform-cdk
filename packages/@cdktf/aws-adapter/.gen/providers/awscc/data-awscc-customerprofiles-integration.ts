// https://www.terraform.io/docs/providers/awscc/d/customerprofiles_integration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCustomerprofilesIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_integration.html#id DataAwsccCustomerprofilesIntegration#id}
  */
  readonly id: string;
}
export class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig extends cdktf.ComplexComputedList {

  // datetime_type_field_name - computed: true, optional: false, required: false
  public get datetimeTypeFieldName() {
    return this.getStringAttribute('datetime_type_field_name');
  }
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    datetime_type_field_name: cdktf.stringToTerraform(struct!.datetimeTypeFieldName),
  }
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo extends cdktf.ComplexComputedList {

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 extends cdktf.ComplexComputedList {

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
  }
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce extends cdktf.ComplexComputedList {

  // enable_dynamic_field_update - computed: true, optional: false, required: false
  public get enableDynamicFieldUpdate() {
    return this.getBooleanAttribute('enable_dynamic_field_update');
  }

  // include_deleted_records - computed: true, optional: false, required: false
  public get includeDeletedRecords() {
    return this.getBooleanAttribute('include_deleted_records');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_dynamic_field_update: cdktf.booleanToTerraform(struct!.enableDynamicFieldUpdate),
    include_deleted_records: cdktf.booleanToTerraform(struct!.includeDeletedRecords),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow extends cdktf.ComplexComputedList {

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk extends cdktf.ComplexComputedList {

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties extends cdktf.ComplexComputedList {

  // marketo - computed: true, optional: false, required: false
  public get marketo() {
    return this.interpolationForAttribute('marketo') as any;
  }

  // s3 - computed: true, optional: false, required: false
  public get s3() {
    return this.interpolationForAttribute('s3') as any;
  }

  // salesforce - computed: true, optional: false, required: false
  public get salesforce() {
    return this.interpolationForAttribute('salesforce') as any;
  }

  // service_now - computed: true, optional: false, required: false
  public get serviceNow() {
    return this.interpolationForAttribute('service_now') as any;
  }

  // zendesk - computed: true, optional: false, required: false
  public get zendesk() {
    return this.interpolationForAttribute('zendesk') as any;
  }
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    marketo: dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct!.marketo),
    s3: dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct!.s3),
    salesforce: dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct!.salesforce),
    service_now: dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct!.serviceNow),
    zendesk: dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct!.zendesk),
  }
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig extends cdktf.ComplexComputedList {

  // connector_profile_name - computed: true, optional: false, required: false
  public get connectorProfileName() {
    return this.getStringAttribute('connector_profile_name');
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // incremental_pull_config - computed: true, optional: false, required: false
  public get incrementalPullConfig() {
    return this.interpolationForAttribute('incremental_pull_config') as any;
  }

  // source_connector_properties - computed: true, optional: false, required: false
  public get sourceConnectorProperties() {
    return this.interpolationForAttribute('source_connector_properties') as any;
  }
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connector_profile_name: cdktf.stringToTerraform(struct!.connectorProfileName),
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
    incremental_pull_config: dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToTerraform(struct!.incrementalPullConfig),
    source_connector_properties: dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToTerraform(struct!.sourceConnectorProperties),
  }
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator extends cdktf.ComplexComputedList {

  // marketo - computed: true, optional: false, required: false
  public get marketo() {
    return this.getStringAttribute('marketo');
  }

  // s3 - computed: true, optional: false, required: false
  public get s3() {
    return this.getStringAttribute('s3');
  }

  // salesforce - computed: true, optional: false, required: false
  public get salesforce() {
    return this.getStringAttribute('salesforce');
  }

  // service_now - computed: true, optional: false, required: false
  public get serviceNow() {
    return this.getStringAttribute('service_now');
  }

  // zendesk - computed: true, optional: false, required: false
  public get zendesk() {
    return this.getStringAttribute('zendesk');
  }
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    marketo: cdktf.stringToTerraform(struct!.marketo),
    s3: cdktf.stringToTerraform(struct!.s3),
    salesforce: cdktf.stringToTerraform(struct!.salesforce),
    service_now: cdktf.stringToTerraform(struct!.serviceNow),
    zendesk: cdktf.stringToTerraform(struct!.zendesk),
  }
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties extends cdktf.ComplexComputedList {

  // operator_property_key - computed: true, optional: false, required: false
  public get operatorPropertyKey() {
    return this.getStringAttribute('operator_property_key');
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator_property_key: cdktf.stringToTerraform(struct!.operatorPropertyKey),
    property: cdktf.stringToTerraform(struct!.property),
  }
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks extends cdktf.ComplexComputedList {

  // connector_operator - computed: true, optional: false, required: false
  public get connectorOperator() {
    return this.interpolationForAttribute('connector_operator') as any;
  }

  // destination_field - computed: true, optional: false, required: false
  public get destinationField() {
    return this.getStringAttribute('destination_field');
  }

  // source_fields - computed: true, optional: false, required: false
  public get sourceFields() {
    return this.getListAttribute('source_fields');
  }

  // task_properties - computed: true, optional: false, required: false
  public get taskProperties() {
    return this.interpolationForAttribute('task_properties') as any;
  }

  // task_type - computed: true, optional: false, required: false
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connector_operator: dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToTerraform(struct!.connectorOperator),
    destination_field: cdktf.stringToTerraform(struct!.destinationField),
    source_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceFields),
    task_properties: cdktf.listMapper(dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToTerraform)(struct!.taskProperties),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled extends cdktf.ComplexComputedList {

  // data_pull_mode - computed: true, optional: false, required: false
  public get dataPullMode() {
    return this.getStringAttribute('data_pull_mode');
  }

  // first_execution_from - computed: true, optional: false, required: false
  public get firstExecutionFrom() {
    return this.getNumberAttribute('first_execution_from');
  }

  // schedule_end_time - computed: true, optional: false, required: false
  public get scheduleEndTime() {
    return this.getNumberAttribute('schedule_end_time');
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }

  // schedule_offset - computed: true, optional: false, required: false
  public get scheduleOffset() {
    return this.getNumberAttribute('schedule_offset');
  }

  // schedule_start_time - computed: true, optional: false, required: false
  public get scheduleStartTime() {
    return this.getNumberAttribute('schedule_start_time');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_pull_mode: cdktf.stringToTerraform(struct!.dataPullMode),
    first_execution_from: cdktf.numberToTerraform(struct!.firstExecutionFrom),
    schedule_end_time: cdktf.numberToTerraform(struct!.scheduleEndTime),
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
    schedule_offset: cdktf.numberToTerraform(struct!.scheduleOffset),
    schedule_start_time: cdktf.numberToTerraform(struct!.scheduleStartTime),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties extends cdktf.ComplexComputedList {

  // scheduled - computed: true, optional: false, required: false
  public get scheduled() {
    return this.interpolationForAttribute('scheduled') as any;
  }
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    scheduled: dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToTerraform(struct!.scheduled),
  }
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig extends cdktf.ComplexComputedList {

  // trigger_properties - computed: true, optional: false, required: false
  public get triggerProperties() {
    return this.interpolationForAttribute('trigger_properties') as any;
  }

  // trigger_type - computed: true, optional: false, required: false
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    trigger_properties: dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToTerraform(struct!.triggerProperties),
    trigger_type: cdktf.stringToTerraform(struct!.triggerType),
  }
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinition extends cdktf.ComplexComputedList {

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // flow_name - computed: true, optional: false, required: false
  public get flowName() {
    return this.getStringAttribute('flow_name');
  }

  // kms_arn - computed: true, optional: false, required: false
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
  }

  // source_flow_config - computed: true, optional: false, required: false
  public get sourceFlowConfig() {
    return this.interpolationForAttribute('source_flow_config') as any;
  }

  // tasks - computed: true, optional: false, required: false
  public get tasks() {
    return this.interpolationForAttribute('tasks') as any;
  }

  // trigger_config - computed: true, optional: false, required: false
  public get triggerConfig() {
    return this.interpolationForAttribute('trigger_config') as any;
  }
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    flow_name: cdktf.stringToTerraform(struct!.flowName),
    kms_arn: cdktf.stringToTerraform(struct!.kmsArn),
    source_flow_config: dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigToTerraform(struct!.sourceFlowConfig),
    tasks: cdktf.listMapper(dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksToTerraform)(struct!.tasks),
    trigger_config: dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigToTerraform(struct!.triggerConfig),
  }
}

export class DataAwsccCustomerprofilesIntegrationTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccCustomerprofilesIntegrationTagsToTerraform(struct?: DataAwsccCustomerprofilesIntegrationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_integration.html awscc_customerprofiles_integration}
*/
export class DataAwsccCustomerprofilesIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_customerprofiles_integration";

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
  public constructor(scope: Construct, id: string, config: DataAwsccCustomerprofilesIntegrationConfig) {
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
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // flow_definition - computed: true, optional: false, required: false
  public get flowDefinition() {
    return this.interpolationForAttribute('flow_definition') as any;
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

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // object_type_name - computed: true, optional: false, required: false
  public get objectTypeName() {
    return this.getStringAttribute('object_type_name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
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
