// https://www.terraform.io/docs/providers/awscc/d/appflow_flow.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccAppflowFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/appflow_flow.html#id DataAwsccAppflowFlow#id}
  */
  readonly id: string;
}
export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig extends cdktf.ComplexComputedList {

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // fail_on_first_error - computed: true, optional: false, required: false
  public get failOnFirstError() {
    return this.getBooleanAttribute('fail_on_first_error');
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_error: cdktf.booleanToTerraform(struct!.failOnFirstError),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge extends cdktf.ComplexComputedList {

  // error_handling_config - computed: true, optional: false, required: false
  public get errorHandlingConfig() {
    return this.interpolationForAttribute('error_handling_config') as any;
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    error_handling_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics extends cdktf.ComplexComputedList {

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetricsToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig extends cdktf.ComplexComputedList {

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // fail_on_first_error - computed: true, optional: false, required: false
  public get failOnFirstError() {
    return this.getBooleanAttribute('fail_on_first_error');
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_error: cdktf.booleanToTerraform(struct!.failOnFirstError),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift extends cdktf.ComplexComputedList {

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // error_handling_config - computed: true, optional: false, required: false
  public get errorHandlingConfig() {
    return this.interpolationForAttribute('error_handling_config') as any;
  }

  // intermediate_bucket_name - computed: true, optional: false, required: false
  public get intermediateBucketName() {
    return this.getStringAttribute('intermediate_bucket_name');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    error_handling_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
    intermediate_bucket_name: cdktf.stringToTerraform(struct!.intermediateBucketName),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig extends cdktf.ComplexComputedList {

  // aggregation_type - computed: true, optional: false, required: false
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation_type: cdktf.stringToTerraform(struct!.aggregationType),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig extends cdktf.ComplexComputedList {

  // prefix_format - computed: true, optional: false, required: false
  public get prefixFormat() {
    return this.getStringAttribute('prefix_format');
  }

  // prefix_type - computed: true, optional: false, required: false
  public get prefixType() {
    return this.getStringAttribute('prefix_type');
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix_format: cdktf.stringToTerraform(struct!.prefixFormat),
    prefix_type: cdktf.stringToTerraform(struct!.prefixType),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig extends cdktf.ComplexComputedList {

  // aggregation_config - computed: true, optional: false, required: false
  public get aggregationConfig() {
    return this.interpolationForAttribute('aggregation_config') as any;
  }

  // file_type - computed: true, optional: false, required: false
  public get fileType() {
    return this.getStringAttribute('file_type');
  }

  // prefix_config - computed: true, optional: false, required: false
  public get prefixConfig() {
    return this.interpolationForAttribute('prefix_config') as any;
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform(struct!.aggregationConfig),
    file_type: cdktf.stringToTerraform(struct!.fileType),
    prefix_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToTerraform(struct!.prefixConfig),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3 extends cdktf.ComplexComputedList {

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // s3_output_format_config - computed: true, optional: false, required: false
  public get s3OutputFormatConfig() {
    return this.interpolationForAttribute('s3_output_format_config') as any;
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3ToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    s3_output_format_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigToTerraform(struct!.s3OutputFormatConfig),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig extends cdktf.ComplexComputedList {

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // fail_on_first_error - computed: true, optional: false, required: false
  public get failOnFirstError() {
    return this.getBooleanAttribute('fail_on_first_error');
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_error: cdktf.booleanToTerraform(struct!.failOnFirstError),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce extends cdktf.ComplexComputedList {

  // error_handling_config - computed: true, optional: false, required: false
  public get errorHandlingConfig() {
    return this.interpolationForAttribute('error_handling_config') as any;
  }

  // id_field_names - computed: true, optional: false, required: false
  public get idFieldNames() {
    return this.getListAttribute('id_field_names');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // write_operation_type - computed: true, optional: false, required: false
  public get writeOperationType() {
    return this.getStringAttribute('write_operation_type');
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    error_handling_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
    id_field_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.idFieldNames),
    object: cdktf.stringToTerraform(struct!.object),
    write_operation_type: cdktf.stringToTerraform(struct!.writeOperationType),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig extends cdktf.ComplexComputedList {

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // fail_on_first_error - computed: true, optional: false, required: false
  public get failOnFirstError() {
    return this.getBooleanAttribute('fail_on_first_error');
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_error: cdktf.booleanToTerraform(struct!.failOnFirstError),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake extends cdktf.ComplexComputedList {

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // error_handling_config - computed: true, optional: false, required: false
  public get errorHandlingConfig() {
    return this.interpolationForAttribute('error_handling_config') as any;
  }

  // intermediate_bucket_name - computed: true, optional: false, required: false
  public get intermediateBucketName() {
    return this.getStringAttribute('intermediate_bucket_name');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    error_handling_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
    intermediate_bucket_name: cdktf.stringToTerraform(struct!.intermediateBucketName),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig extends cdktf.ComplexComputedList {

  // aggregation_type - computed: true, optional: false, required: false
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation_type: cdktf.stringToTerraform(struct!.aggregationType),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig extends cdktf.ComplexComputedList {

  // prefix_format - computed: true, optional: false, required: false
  public get prefixFormat() {
    return this.getStringAttribute('prefix_format');
  }

  // prefix_type - computed: true, optional: false, required: false
  public get prefixType() {
    return this.getStringAttribute('prefix_type');
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix_format: cdktf.stringToTerraform(struct!.prefixFormat),
    prefix_type: cdktf.stringToTerraform(struct!.prefixType),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig extends cdktf.ComplexComputedList {

  // aggregation_config - computed: true, optional: false, required: false
  public get aggregationConfig() {
    return this.interpolationForAttribute('aggregation_config') as any;
  }

  // file_type - computed: true, optional: false, required: false
  public get fileType() {
    return this.getStringAttribute('file_type');
  }

  // prefix_config - computed: true, optional: false, required: false
  public get prefixConfig() {
    return this.interpolationForAttribute('prefix_config') as any;
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToTerraform(struct!.aggregationConfig),
    file_type: cdktf.stringToTerraform(struct!.fileType),
    prefix_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToTerraform(struct!.prefixConfig),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver extends cdktf.ComplexComputedList {

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // s3_output_format_config - computed: true, optional: false, required: false
  public get s3OutputFormatConfig() {
    return this.interpolationForAttribute('s3_output_format_config') as any;
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    s3_output_format_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToTerraform(struct!.s3OutputFormatConfig),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig extends cdktf.ComplexComputedList {

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // fail_on_first_error - computed: true, optional: false, required: false
  public get failOnFirstError() {
    return this.getBooleanAttribute('fail_on_first_error');
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_error: cdktf.booleanToTerraform(struct!.failOnFirstError),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk extends cdktf.ComplexComputedList {

  // error_handling_config - computed: true, optional: false, required: false
  public get errorHandlingConfig() {
    return this.interpolationForAttribute('error_handling_config') as any;
  }

  // id_field_names - computed: true, optional: false, required: false
  public get idFieldNames() {
    return this.getListAttribute('id_field_names');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // write_operation_type - computed: true, optional: false, required: false
  public get writeOperationType() {
    return this.getStringAttribute('write_operation_type');
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    error_handling_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
    id_field_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.idFieldNames),
    object: cdktf.stringToTerraform(struct!.object),
    write_operation_type: cdktf.stringToTerraform(struct!.writeOperationType),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorProperties extends cdktf.ComplexComputedList {

  // event_bridge - computed: true, optional: false, required: false
  public get eventBridge() {
    return this.interpolationForAttribute('event_bridge') as any;
  }

  // lookout_metrics - computed: true, optional: false, required: false
  public get lookoutMetrics() {
    return this.interpolationForAttribute('lookout_metrics') as any;
  }

  // redshift - computed: true, optional: false, required: false
  public get redshift() {
    return this.interpolationForAttribute('redshift') as any;
  }

  // s3 - computed: true, optional: false, required: false
  public get s3() {
    return this.interpolationForAttribute('s3') as any;
  }

  // salesforce - computed: true, optional: false, required: false
  public get salesforce() {
    return this.interpolationForAttribute('salesforce') as any;
  }

  // snowflake - computed: true, optional: false, required: false
  public get snowflake() {
    return this.interpolationForAttribute('snowflake') as any;
  }

  // upsolver - computed: true, optional: false, required: false
  public get upsolver() {
    return this.interpolationForAttribute('upsolver') as any;
  }

  // zendesk - computed: true, optional: false, required: false
  public get zendesk() {
    return this.interpolationForAttribute('zendesk') as any;
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_bridge: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeToTerraform(struct!.eventBridge),
    lookout_metrics: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetricsToTerraform(struct!.lookoutMetrics),
    redshift: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftToTerraform(struct!.redshift),
    s3: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3ToTerraform(struct!.s3),
    salesforce: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceToTerraform(struct!.salesforce),
    snowflake: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeToTerraform(struct!.snowflake),
    upsolver: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverToTerraform(struct!.upsolver),
    zendesk: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskToTerraform(struct!.zendesk),
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigList extends cdktf.ComplexComputedList {

  // connector_profile_name - computed: true, optional: false, required: false
  public get connectorProfileName() {
    return this.getStringAttribute('connector_profile_name');
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // destination_connector_properties - computed: true, optional: false, required: false
  public get destinationConnectorProperties() {
    return this.interpolationForAttribute('destination_connector_properties') as any;
  }
}

export function dataAwsccAppflowFlowDestinationFlowConfigListToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connector_profile_name: cdktf.stringToTerraform(struct!.connectorProfileName),
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
    destination_connector_properties: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesToTerraform(struct!.destinationConnectorProperties),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfig extends cdktf.ComplexComputedList {

  // datetime_type_field_name - computed: true, optional: false, required: false
  public get datetimeTypeFieldName() {
    return this.getStringAttribute('datetime_type_field_name');
  }
}

export function dataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfigToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    datetime_type_field_name: cdktf.stringToTerraform(struct!.datetimeTypeFieldName),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude extends cdktf.ComplexComputedList {

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog extends cdktf.ComplexComputedList {

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace extends cdktf.ComplexComputedList {

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics extends cdktf.ComplexComputedList {

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus extends cdktf.ComplexComputedList {

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo extends cdktf.ComplexComputedList {

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 extends cdktf.ComplexComputedList {

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce extends cdktf.ComplexComputedList {

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

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_dynamic_field_update: cdktf.booleanToTerraform(struct!.enableDynamicFieldUpdate),
    include_deleted_records: cdktf.booleanToTerraform(struct!.includeDeletedRecords),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow extends cdktf.ComplexComputedList {

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular extends cdktf.ComplexComputedList {

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack extends cdktf.ComplexComputedList {

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro extends cdktf.ComplexComputedList {

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva extends cdktf.ComplexComputedList {

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk extends cdktf.ComplexComputedList {

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorProperties extends cdktf.ComplexComputedList {

  // amplitude - computed: true, optional: false, required: false
  public get amplitude() {
    return this.interpolationForAttribute('amplitude') as any;
  }

  // datadog - computed: true, optional: false, required: false
  public get datadog() {
    return this.interpolationForAttribute('datadog') as any;
  }

  // dynatrace - computed: true, optional: false, required: false
  public get dynatrace() {
    return this.interpolationForAttribute('dynatrace') as any;
  }

  // google_analytics - computed: true, optional: false, required: false
  public get googleAnalytics() {
    return this.interpolationForAttribute('google_analytics') as any;
  }

  // infor_nexus - computed: true, optional: false, required: false
  public get inforNexus() {
    return this.interpolationForAttribute('infor_nexus') as any;
  }

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

  // singular - computed: true, optional: false, required: false
  public get singular() {
    return this.interpolationForAttribute('singular') as any;
  }

  // slack - computed: true, optional: false, required: false
  public get slack() {
    return this.interpolationForAttribute('slack') as any;
  }

  // trendmicro - computed: true, optional: false, required: false
  public get trendmicro() {
    return this.interpolationForAttribute('trendmicro') as any;
  }

  // veeva - computed: true, optional: false, required: false
  public get veeva() {
    return this.interpolationForAttribute('veeva') as any;
  }

  // zendesk - computed: true, optional: false, required: false
  public get zendesk() {
    return this.interpolationForAttribute('zendesk') as any;
  }
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    amplitude: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToTerraform(struct!.amplitude),
    datadog: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToTerraform(struct!.datadog),
    dynatrace: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToTerraform(struct!.dynatrace),
    google_analytics: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToTerraform(struct!.googleAnalytics),
    infor_nexus: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToTerraform(struct!.inforNexus),
    marketo: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct!.marketo),
    s3: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct!.s3),
    salesforce: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct!.salesforce),
    service_now: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct!.serviceNow),
    singular: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToTerraform(struct!.singular),
    slack: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToTerraform(struct!.slack),
    trendmicro: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToTerraform(struct!.trendmicro),
    veeva: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToTerraform(struct!.veeva),
    zendesk: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct!.zendesk),
  }
}

export class DataAwsccAppflowFlowSourceFlowConfig extends cdktf.ComplexComputedList {

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

export function dataAwsccAppflowFlowSourceFlowConfigToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connector_profile_name: cdktf.stringToTerraform(struct!.connectorProfileName),
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
    incremental_pull_config: dataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfigToTerraform(struct!.incrementalPullConfig),
    source_connector_properties: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesToTerraform(struct!.sourceConnectorProperties),
  }
}

export class DataAwsccAppflowFlowTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccAppflowFlowTagsToTerraform(struct?: DataAwsccAppflowFlowTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccAppflowFlowTasksConnectorOperator extends cdktf.ComplexComputedList {

  // amplitude - computed: true, optional: false, required: false
  public get amplitude() {
    return this.getStringAttribute('amplitude');
  }

  // datadog - computed: true, optional: false, required: false
  public get datadog() {
    return this.getStringAttribute('datadog');
  }

  // dynatrace - computed: true, optional: false, required: false
  public get dynatrace() {
    return this.getStringAttribute('dynatrace');
  }

  // google_analytics - computed: true, optional: false, required: false
  public get googleAnalytics() {
    return this.getStringAttribute('google_analytics');
  }

  // infor_nexus - computed: true, optional: false, required: false
  public get inforNexus() {
    return this.getStringAttribute('infor_nexus');
  }

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

  // singular - computed: true, optional: false, required: false
  public get singular() {
    return this.getStringAttribute('singular');
  }

  // slack - computed: true, optional: false, required: false
  public get slack() {
    return this.getStringAttribute('slack');
  }

  // trendmicro - computed: true, optional: false, required: false
  public get trendmicro() {
    return this.getStringAttribute('trendmicro');
  }

  // veeva - computed: true, optional: false, required: false
  public get veeva() {
    return this.getStringAttribute('veeva');
  }

  // zendesk - computed: true, optional: false, required: false
  public get zendesk() {
    return this.getStringAttribute('zendesk');
  }
}

export function dataAwsccAppflowFlowTasksConnectorOperatorToTerraform(struct?: DataAwsccAppflowFlowTasksConnectorOperator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    amplitude: cdktf.stringToTerraform(struct!.amplitude),
    datadog: cdktf.stringToTerraform(struct!.datadog),
    dynatrace: cdktf.stringToTerraform(struct!.dynatrace),
    google_analytics: cdktf.stringToTerraform(struct!.googleAnalytics),
    infor_nexus: cdktf.stringToTerraform(struct!.inforNexus),
    marketo: cdktf.stringToTerraform(struct!.marketo),
    s3: cdktf.stringToTerraform(struct!.s3),
    salesforce: cdktf.stringToTerraform(struct!.salesforce),
    service_now: cdktf.stringToTerraform(struct!.serviceNow),
    singular: cdktf.stringToTerraform(struct!.singular),
    slack: cdktf.stringToTerraform(struct!.slack),
    trendmicro: cdktf.stringToTerraform(struct!.trendmicro),
    veeva: cdktf.stringToTerraform(struct!.veeva),
    zendesk: cdktf.stringToTerraform(struct!.zendesk),
  }
}

export class DataAwsccAppflowFlowTasksTaskProperties extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccAppflowFlowTasksTaskPropertiesToTerraform(struct?: DataAwsccAppflowFlowTasksTaskProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccAppflowFlowTasks extends cdktf.ComplexComputedList {

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

export function dataAwsccAppflowFlowTasksToTerraform(struct?: DataAwsccAppflowFlowTasks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connector_operator: dataAwsccAppflowFlowTasksConnectorOperatorToTerraform(struct!.connectorOperator),
    destination_field: cdktf.stringToTerraform(struct!.destinationField),
    source_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceFields),
    task_properties: cdktf.listMapper(dataAwsccAppflowFlowTasksTaskPropertiesToTerraform)(struct!.taskProperties),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}

export class DataAwsccAppflowFlowTriggerConfigTriggerProperties extends cdktf.ComplexComputedList {

  // data_pull_mode - computed: true, optional: false, required: false
  public get dataPullMode() {
    return this.getStringAttribute('data_pull_mode');
  }

  // schedule_end_time - computed: true, optional: false, required: false
  public get scheduleEndTime() {
    return this.getNumberAttribute('schedule_end_time');
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }

  // schedule_start_time - computed: true, optional: false, required: false
  public get scheduleStartTime() {
    return this.getNumberAttribute('schedule_start_time');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
}

export function dataAwsccAppflowFlowTriggerConfigTriggerPropertiesToTerraform(struct?: DataAwsccAppflowFlowTriggerConfigTriggerProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_pull_mode: cdktf.stringToTerraform(struct!.dataPullMode),
    schedule_end_time: cdktf.numberToTerraform(struct!.scheduleEndTime),
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
    schedule_start_time: cdktf.numberToTerraform(struct!.scheduleStartTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}

export class DataAwsccAppflowFlowTriggerConfig extends cdktf.ComplexComputedList {

  // trigger_properties - computed: true, optional: false, required: false
  public get triggerProperties() {
    return this.interpolationForAttribute('trigger_properties') as any;
  }

  // trigger_type - computed: true, optional: false, required: false
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
}

export function dataAwsccAppflowFlowTriggerConfigToTerraform(struct?: DataAwsccAppflowFlowTriggerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    trigger_properties: dataAwsccAppflowFlowTriggerConfigTriggerPropertiesToTerraform(struct!.triggerProperties),
    trigger_type: cdktf.stringToTerraform(struct!.triggerType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/appflow_flow.html awscc_appflow_flow}
*/
export class DataAwsccAppflowFlow extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_appflow_flow";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/appflow_flow.html awscc_appflow_flow} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAppflowFlowConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAppflowFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appflow_flow',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_flow_config_list - computed: true, optional: false, required: false
  public get destinationFlowConfigList() {
    return this.interpolationForAttribute('destination_flow_config_list') as any;
  }

  // flow_arn - computed: true, optional: false, required: false
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }

  // flow_name - computed: true, optional: false, required: false
  public get flowName() {
    return this.getStringAttribute('flow_name');
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

  // kms_arn - computed: true, optional: false, required: false
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
  }

  // source_flow_config - computed: true, optional: false, required: false
  public get sourceFlowConfig() {
    return this.interpolationForAttribute('source_flow_config') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // tasks - computed: true, optional: false, required: false
  public get tasks() {
    return this.interpolationForAttribute('tasks') as any;
  }

  // trigger_config - computed: true, optional: false, required: false
  public get triggerConfig() {
    return this.interpolationForAttribute('trigger_config') as any;
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
