// https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomerprofilesIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique name of the domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#domain_name CustomerprofilesIntegration#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#flow_definition CustomerprofilesIntegration#flow_definition}
  */
  readonly flowDefinition?: CustomerprofilesIntegrationFlowDefinition;
  /**
  * The name of the ObjectType defined for the 3rd party data in Profile Service
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#object_type_name CustomerprofilesIntegration#object_type_name}
  */
  readonly objectTypeName: string;
  /**
  * The tags (keys and values) associated with the integration
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#tags CustomerprofilesIntegration#tags}
  */
  readonly tags?: CustomerprofilesIntegrationTags[];
  /**
  * The URI of the S3 bucket or any other type of data source.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#uri CustomerprofilesIntegration#uri}
  */
  readonly uri?: string;
}
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#datetime_type_field_name CustomerprofilesIntegration#datetime_type_field_name}
  */
  readonly datetimeTypeFieldName?: string;
}

export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    datetime_type_field_name: cdktf.stringToTerraform(struct!.datetimeTypeFieldName),
  }
}

export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#object CustomerprofilesIntegration#object}
  */
  readonly object: string;
}

export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#bucket_name CustomerprofilesIntegration#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#bucket_prefix CustomerprofilesIntegration#bucket_prefix}
  */
  readonly bucketPrefix?: string;
}

export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
  }
}

export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#enable_dynamic_field_update CustomerprofilesIntegration#enable_dynamic_field_update}
  */
  readonly enableDynamicFieldUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#include_deleted_records CustomerprofilesIntegration#include_deleted_records}
  */
  readonly includeDeletedRecords?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#object CustomerprofilesIntegration#object}
  */
  readonly object: string;
}

export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_dynamic_field_update: cdktf.booleanToTerraform(struct!.enableDynamicFieldUpdate),
    include_deleted_records: cdktf.booleanToTerraform(struct!.includeDeletedRecords),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#object CustomerprofilesIntegration#object}
  */
  readonly object: string;
}

export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#object CustomerprofilesIntegration#object}
  */
  readonly object: string;
}

export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#marketo CustomerprofilesIntegration#marketo}
  */
  readonly marketo?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#s3 CustomerprofilesIntegration#s3}
  */
  readonly s3?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#salesforce CustomerprofilesIntegration#salesforce}
  */
  readonly salesforce?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#service_now CustomerprofilesIntegration#service_now}
  */
  readonly serviceNow?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#zendesk CustomerprofilesIntegration#zendesk}
  */
  readonly zendesk?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk;
}

export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    marketo: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct!.marketo),
    s3: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct!.s3),
    salesforce: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct!.salesforce),
    service_now: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct!.serviceNow),
    zendesk: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct!.zendesk),
  }
}

export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#connector_profile_name CustomerprofilesIntegration#connector_profile_name}
  */
  readonly connectorProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#connector_type CustomerprofilesIntegration#connector_type}
  */
  readonly connectorType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#incremental_pull_config CustomerprofilesIntegration#incremental_pull_config}
  */
  readonly incrementalPullConfig?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#source_connector_properties CustomerprofilesIntegration#source_connector_properties}
  */
  readonly sourceConnectorProperties: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties;
}

export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connector_profile_name: cdktf.stringToTerraform(struct!.connectorProfileName),
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
    incremental_pull_config: customerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToTerraform(struct!.incrementalPullConfig),
    source_connector_properties: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToTerraform(struct!.sourceConnectorProperties),
  }
}

export interface CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#marketo CustomerprofilesIntegration#marketo}
  */
  readonly marketo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#s3 CustomerprofilesIntegration#s3}
  */
  readonly s3?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#salesforce CustomerprofilesIntegration#salesforce}
  */
  readonly salesforce?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#service_now CustomerprofilesIntegration#service_now}
  */
  readonly serviceNow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#zendesk CustomerprofilesIntegration#zendesk}
  */
  readonly zendesk?: string;
}

export function customerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    marketo: cdktf.stringToTerraform(struct!.marketo),
    s3: cdktf.stringToTerraform(struct!.s3),
    salesforce: cdktf.stringToTerraform(struct!.salesforce),
    service_now: cdktf.stringToTerraform(struct!.serviceNow),
    zendesk: cdktf.stringToTerraform(struct!.zendesk),
  }
}

export interface CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#operator_property_key CustomerprofilesIntegration#operator_property_key}
  */
  readonly operatorPropertyKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#property CustomerprofilesIntegration#property}
  */
  readonly property: string;
}

export function customerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator_property_key: cdktf.stringToTerraform(struct!.operatorPropertyKey),
    property: cdktf.stringToTerraform(struct!.property),
  }
}

export interface CustomerprofilesIntegrationFlowDefinitionTasks {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#connector_operator CustomerprofilesIntegration#connector_operator}
  */
  readonly connectorOperator?: CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#destination_field CustomerprofilesIntegration#destination_field}
  */
  readonly destinationField?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#source_fields CustomerprofilesIntegration#source_fields}
  */
  readonly sourceFields: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#task_properties CustomerprofilesIntegration#task_properties}
  */
  readonly taskProperties?: CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#task_type CustomerprofilesIntegration#task_type}
  */
  readonly taskType: string;
}

export function customerprofilesIntegrationFlowDefinitionTasksToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTasks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connector_operator: customerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToTerraform(struct!.connectorOperator),
    destination_field: cdktf.stringToTerraform(struct!.destinationField),
    source_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceFields),
    task_properties: cdktf.listMapper(customerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToTerraform)(struct!.taskProperties),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}

export interface CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#data_pull_mode CustomerprofilesIntegration#data_pull_mode}
  */
  readonly dataPullMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#first_execution_from CustomerprofilesIntegration#first_execution_from}
  */
  readonly firstExecutionFrom?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#schedule_end_time CustomerprofilesIntegration#schedule_end_time}
  */
  readonly scheduleEndTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#schedule_expression CustomerprofilesIntegration#schedule_expression}
  */
  readonly scheduleExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#schedule_offset CustomerprofilesIntegration#schedule_offset}
  */
  readonly scheduleOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#schedule_start_time CustomerprofilesIntegration#schedule_start_time}
  */
  readonly scheduleStartTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#timezone CustomerprofilesIntegration#timezone}
  */
  readonly timezone?: string;
}

export function customerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled): any {
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

export interface CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#scheduled CustomerprofilesIntegration#scheduled}
  */
  readonly scheduled?: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled;
}

export function customerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    scheduled: customerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToTerraform(struct!.scheduled),
  }
}

export interface CustomerprofilesIntegrationFlowDefinitionTriggerConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#trigger_properties CustomerprofilesIntegration#trigger_properties}
  */
  readonly triggerProperties?: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#trigger_type CustomerprofilesIntegration#trigger_type}
  */
  readonly triggerType: string;
}

export function customerprofilesIntegrationFlowDefinitionTriggerConfigToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTriggerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    trigger_properties: customerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToTerraform(struct!.triggerProperties),
    trigger_type: cdktf.stringToTerraform(struct!.triggerType),
  }
}

export interface CustomerprofilesIntegrationFlowDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#description CustomerprofilesIntegration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#flow_name CustomerprofilesIntegration#flow_name}
  */
  readonly flowName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#kms_arn CustomerprofilesIntegration#kms_arn}
  */
  readonly kmsArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#source_flow_config CustomerprofilesIntegration#source_flow_config}
  */
  readonly sourceFlowConfig: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#tasks CustomerprofilesIntegration#tasks}
  */
  readonly tasks: CustomerprofilesIntegrationFlowDefinitionTasks[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#trigger_config CustomerprofilesIntegration#trigger_config}
  */
  readonly triggerConfig: CustomerprofilesIntegrationFlowDefinitionTriggerConfig;
}

export function customerprofilesIntegrationFlowDefinitionToTerraform(struct?: CustomerprofilesIntegrationFlowDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    flow_name: cdktf.stringToTerraform(struct!.flowName),
    kms_arn: cdktf.stringToTerraform(struct!.kmsArn),
    source_flow_config: customerprofilesIntegrationFlowDefinitionSourceFlowConfigToTerraform(struct!.sourceFlowConfig),
    tasks: cdktf.listMapper(customerprofilesIntegrationFlowDefinitionTasksToTerraform)(struct!.tasks),
    trigger_config: customerprofilesIntegrationFlowDefinitionTriggerConfigToTerraform(struct!.triggerConfig),
  }
}

export interface CustomerprofilesIntegrationTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#key CustomerprofilesIntegration#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#value CustomerprofilesIntegration#value}
  */
  readonly value: string;
}

export function customerprofilesIntegrationTagsToTerraform(struct?: CustomerprofilesIntegrationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html awscc_customerprofiles_integration}
*/
export class CustomerprofilesIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_customerprofiles_integration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html awscc_customerprofiles_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomerprofilesIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: CustomerprofilesIntegrationConfig) {
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
    this._domainName = config.domainName;
    this._flowDefinition = config.flowDefinition;
    this._objectTypeName = config.objectTypeName;
    this._tags = config.tags;
    this._uri = config.uri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // flow_definition - computed: false, optional: true, required: false
  private _flowDefinition?: CustomerprofilesIntegrationFlowDefinition;
  public get flowDefinition() {
    return this.interpolationForAttribute('flow_definition') as any;
  }
  public set flowDefinition(value: CustomerprofilesIntegrationFlowDefinition ) {
    this._flowDefinition = value;
  }
  public resetFlowDefinition() {
    this._flowDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowDefinitionInput() {
    return this._flowDefinition
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // object_type_name - computed: false, optional: false, required: true
  private _objectTypeName: string;
  public get objectTypeName() {
    return this.getStringAttribute('object_type_name');
  }
  public set objectTypeName(value: string) {
    this._objectTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeNameInput() {
    return this._objectTypeName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: CustomerprofilesIntegrationTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: CustomerprofilesIntegrationTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string;
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      flow_definition: customerprofilesIntegrationFlowDefinitionToTerraform(this._flowDefinition),
      object_type_name: cdktf.stringToTerraform(this._objectTypeName),
      tags: cdktf.listMapper(customerprofilesIntegrationTagsToTerraform)(this._tags),
      uri: cdktf.stringToTerraform(this._uri),
    };
  }
}
