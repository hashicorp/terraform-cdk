// https://www.terraform.io/docs/providers/awscc/d/sagemaker_data_quality_job_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSagemakerDataQualityJobDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_data_quality_job_definition.html#id DataAwsccSagemakerDataQualityJobDefinition#id}
  */
  readonly id: string;
}
export class DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification extends cdktf.ComplexComputedList {

  // container_arguments - computed: true, optional: false, required: false
  public get containerArguments() {
    return this.getListAttribute('container_arguments');
  }

  // container_entrypoint - computed: true, optional: false, required: false
  public get containerEntrypoint() {
    return this.getListAttribute('container_entrypoint');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.interpolationForAttribute('environment') as any;
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

export function dataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_arguments: cdktf.listMapper(cdktf.stringToTerraform)(struct!.containerArguments),
    container_entrypoint: cdktf.listMapper(cdktf.stringToTerraform)(struct!.containerEntrypoint),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    post_analytics_processor_source_uri: cdktf.stringToTerraform(struct!.postAnalyticsProcessorSourceUri),
    record_preprocessor_source_uri: cdktf.stringToTerraform(struct!.recordPreprocessorSourceUri),
  }
}

export class DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource extends cdktf.ComplexComputedList {

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}

export function dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export class DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource extends cdktf.ComplexComputedList {

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}

export function dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export class DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig extends cdktf.ComplexComputedList {

  // baselining_job_name - computed: true, optional: false, required: false
  public get baseliningJobName() {
    return this.getStringAttribute('baselining_job_name');
  }

  // constraints_resource - computed: true, optional: false, required: false
  public get constraintsResource() {
    return this.interpolationForAttribute('constraints_resource') as any;
  }

  // statistics_resource - computed: true, optional: false, required: false
  public get statisticsResource() {
    return this.interpolationForAttribute('statistics_resource') as any;
  }
}

export function dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    baselining_job_name: cdktf.stringToTerraform(struct!.baseliningJobName),
    constraints_resource: dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceToTerraform(struct!.constraintsResource),
    statistics_resource: dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceToTerraform(struct!.statisticsResource),
  }
}

export class DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput extends cdktf.ComplexComputedList {

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

export function dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_data_distribution_type: cdktf.stringToTerraform(struct!.s3DataDistributionType),
    s3_input_mode: cdktf.stringToTerraform(struct!.s3InputMode),
  }
}

export class DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput extends cdktf.ComplexComputedList {

  // endpoint_input - computed: true, optional: false, required: false
  public get endpointInput() {
    return this.interpolationForAttribute('endpoint_input') as any;
  }
}

export function dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_input: dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputToTerraform(struct!.endpointInput),
  }
}

export class DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output extends cdktf.ComplexComputedList {

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

export function dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_upload_mode: cdktf.stringToTerraform(struct!.s3UploadMode),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export class DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs extends cdktf.ComplexComputedList {

  // s3_output - computed: true, optional: false, required: false
  public get s3Output() {
    return this.interpolationForAttribute('s3_output') as any;
  }
}

export function dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_output: dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct!.s3Output),
  }
}

export class DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig extends cdktf.ComplexComputedList {

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // monitoring_outputs - computed: true, optional: false, required: false
  public get monitoringOutputs() {
    return this.interpolationForAttribute('monitoring_outputs') as any;
  }
}

export function dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    monitoring_outputs: cdktf.listMapper(dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsToTerraform)(struct!.monitoringOutputs),
  }
}

export class DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig extends cdktf.ComplexComputedList {

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

export function dataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktf.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
  }
}

export class DataAwsccSagemakerDataQualityJobDefinitionJobResources extends cdktf.ComplexComputedList {

  // cluster_config - computed: true, optional: false, required: false
  public get clusterConfig() {
    return this.interpolationForAttribute('cluster_config') as any;
  }
}

export function dataAwsccSagemakerDataQualityJobDefinitionJobResourcesToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionJobResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_config: dataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct!.clusterConfig),
  }
}

export class DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig extends cdktf.ComplexComputedList {

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}

export function dataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}

export class DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig extends cdktf.ComplexComputedList {

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

export function dataAwsccSagemakerDataQualityJobDefinitionNetworkConfigToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_network_isolation: cdktf.booleanToTerraform(struct!.enableNetworkIsolation),
    vpc_config: dataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct!.vpcConfig),
  }
}

export class DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition extends cdktf.ComplexComputedList {

  // max_runtime_in_seconds - computed: true, optional: false, required: false
  public get maxRuntimeInSeconds() {
    return this.getNumberAttribute('max_runtime_in_seconds');
  }
}

export function dataAwsccSagemakerDataQualityJobDefinitionStoppingConditionToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_runtime_in_seconds: cdktf.numberToTerraform(struct!.maxRuntimeInSeconds),
  }
}

export class DataAwsccSagemakerDataQualityJobDefinitionTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccSagemakerDataQualityJobDefinitionTagsToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_data_quality_job_definition.html awscc_sagemaker_data_quality_job_definition}
*/
export class DataAwsccSagemakerDataQualityJobDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_data_quality_job_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_data_quality_job_definition.html awscc_sagemaker_data_quality_job_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerDataQualityJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerDataQualityJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_data_quality_job_definition',
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

  // data_quality_app_specification - computed: true, optional: false, required: false
  public get dataQualityAppSpecification() {
    return this.interpolationForAttribute('data_quality_app_specification') as any;
  }

  // data_quality_baseline_config - computed: true, optional: false, required: false
  public get dataQualityBaselineConfig() {
    return this.interpolationForAttribute('data_quality_baseline_config') as any;
  }

  // data_quality_job_input - computed: true, optional: false, required: false
  public get dataQualityJobInput() {
    return this.interpolationForAttribute('data_quality_job_input') as any;
  }

  // data_quality_job_output_config - computed: true, optional: false, required: false
  public get dataQualityJobOutputConfig() {
    return this.interpolationForAttribute('data_quality_job_output_config') as any;
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

  // job_definition_arn - computed: true, optional: false, required: false
  public get jobDefinitionArn() {
    return this.getStringAttribute('job_definition_arn');
  }

  // job_definition_name - computed: true, optional: false, required: false
  public get jobDefinitionName() {
    return this.getStringAttribute('job_definition_name');
  }

  // job_resources - computed: true, optional: false, required: false
  public get jobResources() {
    return this.interpolationForAttribute('job_resources') as any;
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
