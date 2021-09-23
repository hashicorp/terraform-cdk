// https://www.terraform.io/docs/providers/awscc/d/sagemaker_monitoring_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSagemakerMonitoringScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_monitoring_schedule.html#id DataAwsccSagemakerMonitoringSchedule#id}
  */
  readonly id: string;
}
export class DataAwsccSagemakerMonitoringScheduleLastMonitoringExecutionSummary extends cdktf.ComplexComputedList {

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // monitoring_execution_status - computed: true, optional: false, required: false
  public get monitoringExecutionStatus() {
    return this.getStringAttribute('monitoring_execution_status');
  }

  // monitoring_schedule_name - computed: true, optional: false, required: false
  public get monitoringScheduleName() {
    return this.getStringAttribute('monitoring_schedule_name');
  }

  // processing_job_arn - computed: true, optional: false, required: false
  public get processingJobArn() {
    return this.getStringAttribute('processing_job_arn');
  }

  // scheduled_time - computed: true, optional: false, required: false
  public get scheduledTime() {
    return this.getStringAttribute('scheduled_time');
  }
}

export function dataAwsccSagemakerMonitoringScheduleLastMonitoringExecutionSummaryToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleLastMonitoringExecutionSummary): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    creation_time: cdktf.stringToTerraform(struct!.creationTime),
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    failure_reason: cdktf.stringToTerraform(struct!.failureReason),
    last_modified_time: cdktf.stringToTerraform(struct!.lastModifiedTime),
    monitoring_execution_status: cdktf.stringToTerraform(struct!.monitoringExecutionStatus),
    monitoring_schedule_name: cdktf.stringToTerraform(struct!.monitoringScheduleName),
    processing_job_arn: cdktf.stringToTerraform(struct!.processingJobArn),
    scheduled_time: cdktf.stringToTerraform(struct!.scheduledTime),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource extends cdktf.ComplexComputedList {

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResourceToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource extends cdktf.ComplexComputedList {

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResourceToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig extends cdktf.ComplexComputedList {

  // constraints_resource - computed: true, optional: false, required: false
  public get constraintsResource() {
    return this.interpolationForAttribute('constraints_resource') as any;
  }

  // statistics_resource - computed: true, optional: false, required: false
  public get statisticsResource() {
    return this.interpolationForAttribute('statistics_resource') as any;
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    constraints_resource: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResourceToTerraform(struct!.constraintsResource),
    statistics_resource: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResourceToTerraform(struct!.statisticsResource),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification extends cdktf.ComplexComputedList {

  // container_arguments - computed: true, optional: false, required: false
  public get containerArguments() {
    return this.getListAttribute('container_arguments');
  }

  // container_entrypoint - computed: true, optional: false, required: false
  public get containerEntrypoint() {
    return this.getListAttribute('container_entrypoint');
  }

  // image_uri - computed: true, optional: false, required: false
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }

  // post_analytics_processor_source_uri - computed: true, optional: false, required: false
  public get postAnalyticsProcessorSourceUri() {
    return this.getStringAttribute('post_analytics_processor_source_uri');
  }

  // record_preprocessor_source_uri - computed: true, optional: false, required: false
  public get recordPreprocessorSourceUri() {
    return this.getStringAttribute('record_preprocessor_source_uri');
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecificationToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_arguments: cdktf.listMapper(cdktf.stringToTerraform)(struct!.containerArguments),
    container_entrypoint: cdktf.listMapper(cdktf.stringToTerraform)(struct!.containerEntrypoint),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    post_analytics_processor_source_uri: cdktf.stringToTerraform(struct!.postAnalyticsProcessorSourceUri),
    record_preprocessor_source_uri: cdktf.stringToTerraform(struct!.recordPreprocessorSourceUri),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput extends cdktf.ComplexComputedList {

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }

  // local_path - computed: true, optional: false, required: false
  public get localPath() {
    return this.getStringAttribute('local_path');
  }

  // s3_data_distribution_type - computed: true, optional: false, required: false
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }

  // s3_input_mode - computed: true, optional: false, required: false
  public get s3InputMode() {
    return this.getStringAttribute('s3_input_mode');
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInputToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_data_distribution_type: cdktf.stringToTerraform(struct!.s3DataDistributionType),
    s3_input_mode: cdktf.stringToTerraform(struct!.s3InputMode),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs extends cdktf.ComplexComputedList {

  // endpoint_input - computed: true, optional: false, required: false
  public get endpointInput() {
    return this.interpolationForAttribute('endpoint_input') as any;
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_input: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInputToTerraform(struct!.endpointInput),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output extends cdktf.ComplexComputedList {

  // local_path - computed: true, optional: false, required: false
  public get localPath() {
    return this.getStringAttribute('local_path');
  }

  // s3_upload_mode - computed: true, optional: false, required: false
  public get s3UploadMode() {
    return this.getStringAttribute('s3_upload_mode');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_upload_mode: cdktf.stringToTerraform(struct!.s3UploadMode),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs extends cdktf.ComplexComputedList {

  // s3_output - computed: true, optional: false, required: false
  public get s3Output() {
    return this.interpolationForAttribute('s3_output') as any;
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_output: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3OutputToTerraform(struct!.s3Output),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig extends cdktf.ComplexComputedList {

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // monitoring_outputs - computed: true, optional: false, required: false
  public get monitoringOutputs() {
    return this.interpolationForAttribute('monitoring_outputs') as any;
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    monitoring_outputs: cdktf.listMapper(dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsToTerraform)(struct!.monitoringOutputs),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig extends cdktf.ComplexComputedList {

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // volume_kms_key_id - computed: true, optional: false, required: false
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }

  // volume_size_in_gb - computed: true, optional: false, required: false
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfigToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktf.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources extends cdktf.ComplexComputedList {

  // cluster_config - computed: true, optional: false, required: false
  public get clusterConfig() {
    return this.interpolationForAttribute('cluster_config') as any;
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_config: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfigToTerraform(struct!.clusterConfig),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig extends cdktf.ComplexComputedList {

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig extends cdktf.ComplexComputedList {

  // enable_inter_container_traffic_encryption - computed: true, optional: false, required: false
  public get enableInterContainerTrafficEncryption() {
    return this.getBooleanAttribute('enable_inter_container_traffic_encryption');
  }

  // enable_network_isolation - computed: true, optional: false, required: false
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }

  // vpc_config - computed: true, optional: false, required: false
  public get vpcConfig() {
    return this.interpolationForAttribute('vpc_config') as any;
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_network_isolation: cdktf.booleanToTerraform(struct!.enableNetworkIsolation),
    vpc_config: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfigToTerraform(struct!.vpcConfig),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition extends cdktf.ComplexComputedList {

  // max_runtime_in_seconds - computed: true, optional: false, required: false
  public get maxRuntimeInSeconds() {
    return this.getNumberAttribute('max_runtime_in_seconds');
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingConditionToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_runtime_in_seconds: cdktf.numberToTerraform(struct!.maxRuntimeInSeconds),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition extends cdktf.ComplexComputedList {

  // baseline_config - computed: true, optional: false, required: false
  public get baselineConfig() {
    return this.interpolationForAttribute('baseline_config') as any;
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.interpolationForAttribute('environment') as any;
  }

  // monitoring_app_specification - computed: true, optional: false, required: false
  public get monitoringAppSpecification() {
    return this.interpolationForAttribute('monitoring_app_specification') as any;
  }

  // monitoring_inputs - computed: true, optional: false, required: false
  public get monitoringInputs() {
    return this.interpolationForAttribute('monitoring_inputs') as any;
  }

  // monitoring_output_config - computed: true, optional: false, required: false
  public get monitoringOutputConfig() {
    return this.interpolationForAttribute('monitoring_output_config') as any;
  }

  // monitoring_resources - computed: true, optional: false, required: false
  public get monitoringResources() {
    return this.interpolationForAttribute('monitoring_resources') as any;
  }

  // network_config - computed: true, optional: false, required: false
  public get networkConfig() {
    return this.interpolationForAttribute('network_config') as any;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // stopping_condition - computed: true, optional: false, required: false
  public get stoppingCondition() {
    return this.interpolationForAttribute('stopping_condition') as any;
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    baseline_config: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigToTerraform(struct!.baselineConfig),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    monitoring_app_specification: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecificationToTerraform(struct!.monitoringAppSpecification),
    monitoring_inputs: cdktf.listMapper(dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsToTerraform)(struct!.monitoringInputs),
    monitoring_output_config: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigToTerraform(struct!.monitoringOutputConfig),
    monitoring_resources: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesToTerraform(struct!.monitoringResources),
    network_config: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigToTerraform(struct!.networkConfig),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stopping_condition: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingConditionToTerraform(struct!.stoppingCondition),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig extends cdktf.ComplexComputedList {

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
  }
}

export class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfig extends cdktf.ComplexComputedList {

  // monitoring_job_definition - computed: true, optional: false, required: false
  public get monitoringJobDefinition() {
    return this.interpolationForAttribute('monitoring_job_definition') as any;
  }

  // monitoring_job_definition_name - computed: true, optional: false, required: false
  public get monitoringJobDefinitionName() {
    return this.getStringAttribute('monitoring_job_definition_name');
  }

  // monitoring_type - computed: true, optional: false, required: false
  public get monitoringType() {
    return this.getStringAttribute('monitoring_type');
  }

  // schedule_config - computed: true, optional: false, required: false
  public get scheduleConfig() {
    return this.interpolationForAttribute('schedule_config') as any;
  }
}

export function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    monitoring_job_definition: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionToTerraform(struct!.monitoringJobDefinition),
    monitoring_job_definition_name: cdktf.stringToTerraform(struct!.monitoringJobDefinitionName),
    monitoring_type: cdktf.stringToTerraform(struct!.monitoringType),
    schedule_config: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigToTerraform(struct!.scheduleConfig),
  }
}

export class DataAwsccSagemakerMonitoringScheduleTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccSagemakerMonitoringScheduleTagsToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_monitoring_schedule.html awscc_sagemaker_monitoring_schedule}
*/
export class DataAwsccSagemakerMonitoringSchedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_monitoring_schedule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_monitoring_schedule.html awscc_sagemaker_monitoring_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerMonitoringScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerMonitoringScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_monitoring_schedule',
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

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // last_monitoring_execution_summary - computed: true, optional: false, required: false
  public get lastMonitoringExecutionSummary() {
    return this.interpolationForAttribute('last_monitoring_execution_summary') as any;
  }

  // monitoring_schedule_arn - computed: true, optional: false, required: false
  public get monitoringScheduleArn() {
    return this.getStringAttribute('monitoring_schedule_arn');
  }

  // monitoring_schedule_config - computed: true, optional: false, required: false
  public get monitoringScheduleConfig() {
    return this.interpolationForAttribute('monitoring_schedule_config') as any;
  }

  // monitoring_schedule_name - computed: true, optional: false, required: false
  public get monitoringScheduleName() {
    return this.getStringAttribute('monitoring_schedule_name');
  }

  // monitoring_schedule_status - computed: true, optional: false, required: false
  public get monitoringScheduleStatus() {
    return this.getStringAttribute('monitoring_schedule_status');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
