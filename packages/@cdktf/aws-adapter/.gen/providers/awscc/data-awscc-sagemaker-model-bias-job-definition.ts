// https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_bias_job_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSagemakerModelBiasJobDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_bias_job_definition.html#id DataAwsccSagemakerModelBiasJobDefinition#id}
  */
  readonly id: string;
}
export class DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig extends cdktf.ComplexComputedList {

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

export function dataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktf.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
  }
}

export class DataAwsccSagemakerModelBiasJobDefinitionJobResources extends cdktf.ComplexComputedList {

  // cluster_config - computed: true, optional: false, required: false
  public get clusterConfig() {
    return this.interpolationForAttribute('cluster_config') as any;
  }
}

export function dataAwsccSagemakerModelBiasJobDefinitionJobResourcesToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionJobResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_config: dataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigToTerraform(struct!.clusterConfig),
  }
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification extends cdktf.ComplexComputedList {

  // config_uri - computed: true, optional: false, required: false
  public get configUri() {
    return this.getStringAttribute('config_uri');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.interpolationForAttribute('environment') as any;
  }

  // image_uri - computed: true, optional: false, required: false
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_uri: cdktf.stringToTerraform(struct!.configUri),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
  }
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource extends cdktf.ComplexComputedList {

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig extends cdktf.ComplexComputedList {

  // baselining_job_name - computed: true, optional: false, required: false
  public get baseliningJobName() {
    return this.getStringAttribute('baselining_job_name');
  }

  // constraints_resource - computed: true, optional: false, required: false
  public get constraintsResource() {
    return this.interpolationForAttribute('constraints_resource') as any;
  }
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    baselining_job_name: cdktf.stringToTerraform(struct!.baseliningJobName),
    constraints_resource: dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceToTerraform(struct!.constraintsResource),
  }
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput extends cdktf.ComplexComputedList {

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getStringAttribute('end_time_offset');
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }

  // features_attribute - computed: true, optional: false, required: false
  public get featuresAttribute() {
    return this.getStringAttribute('features_attribute');
  }

  // inference_attribute - computed: true, optional: false, required: false
  public get inferenceAttribute() {
    return this.getStringAttribute('inference_attribute');
  }

  // local_path - computed: true, optional: false, required: false
  public get localPath() {
    return this.getStringAttribute('local_path');
  }

  // probability_attribute - computed: true, optional: false, required: false
  public get probabilityAttribute() {
    return this.getStringAttribute('probability_attribute');
  }

  // probability_threshold_attribute - computed: true, optional: false, required: false
  public get probabilityThresholdAttribute() {
    return this.getNumberAttribute('probability_threshold_attribute');
  }

  // s3_data_distribution_type - computed: true, optional: false, required: false
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }

  // s3_input_mode - computed: true, optional: false, required: false
  public get s3InputMode() {
    return this.getStringAttribute('s3_input_mode');
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getStringAttribute('start_time_offset');
  }
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_time_offset: cdktf.stringToTerraform(struct!.endTimeOffset),
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    features_attribute: cdktf.stringToTerraform(struct!.featuresAttribute),
    inference_attribute: cdktf.stringToTerraform(struct!.inferenceAttribute),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    probability_attribute: cdktf.stringToTerraform(struct!.probabilityAttribute),
    probability_threshold_attribute: cdktf.numberToTerraform(struct!.probabilityThresholdAttribute),
    s3_data_distribution_type: cdktf.stringToTerraform(struct!.s3DataDistributionType),
    s3_input_mode: cdktf.stringToTerraform(struct!.s3InputMode),
    start_time_offset: cdktf.stringToTerraform(struct!.startTimeOffset),
  }
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input extends cdktf.ComplexComputedList {

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput extends cdktf.ComplexComputedList {

  // endpoint_input - computed: true, optional: false, required: false
  public get endpointInput() {
    return this.interpolationForAttribute('endpoint_input') as any;
  }

  // ground_truth_s3_input - computed: true, optional: false, required: false
  public get groundTruthS3Input() {
    return this.interpolationForAttribute('ground_truth_s3_input') as any;
  }
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_input: dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputToTerraform(struct!.endpointInput),
    ground_truth_s3_input: dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputToTerraform(struct!.groundTruthS3Input),
  }
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output extends cdktf.ComplexComputedList {

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

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_upload_mode: cdktf.stringToTerraform(struct!.s3UploadMode),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs extends cdktf.ComplexComputedList {

  // s3_output - computed: true, optional: false, required: false
  public get s3Output() {
    return this.interpolationForAttribute('s3_output') as any;
  }
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_output: dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct!.s3Output),
  }
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig extends cdktf.ComplexComputedList {

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // monitoring_outputs - computed: true, optional: false, required: false
  public get monitoringOutputs() {
    return this.interpolationForAttribute('monitoring_outputs') as any;
  }
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    monitoring_outputs: cdktf.listMapper(dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsToTerraform)(struct!.monitoringOutputs),
  }
}

export class DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig extends cdktf.ComplexComputedList {

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}

export function dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}

export class DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig extends cdktf.ComplexComputedList {

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

export function dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_network_isolation: cdktf.booleanToTerraform(struct!.enableNetworkIsolation),
    vpc_config: dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigToTerraform(struct!.vpcConfig),
  }
}

export class DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition extends cdktf.ComplexComputedList {

  // max_runtime_in_seconds - computed: true, optional: false, required: false
  public get maxRuntimeInSeconds() {
    return this.getNumberAttribute('max_runtime_in_seconds');
  }
}

export function dataAwsccSagemakerModelBiasJobDefinitionStoppingConditionToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_runtime_in_seconds: cdktf.numberToTerraform(struct!.maxRuntimeInSeconds),
  }
}

export class DataAwsccSagemakerModelBiasJobDefinitionTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccSagemakerModelBiasJobDefinitionTagsToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_bias_job_definition.html awscc_sagemaker_model_bias_job_definition}
*/
export class DataAwsccSagemakerModelBiasJobDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_model_bias_job_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_bias_job_definition.html awscc_sagemaker_model_bias_job_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerModelBiasJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerModelBiasJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_model_bias_job_definition',
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

  // model_bias_app_specification - computed: true, optional: false, required: false
  public get modelBiasAppSpecification() {
    return this.interpolationForAttribute('model_bias_app_specification') as any;
  }

  // model_bias_baseline_config - computed: true, optional: false, required: false
  public get modelBiasBaselineConfig() {
    return this.interpolationForAttribute('model_bias_baseline_config') as any;
  }

  // model_bias_job_input - computed: true, optional: false, required: false
  public get modelBiasJobInput() {
    return this.interpolationForAttribute('model_bias_job_input') as any;
  }

  // model_bias_job_output_config - computed: true, optional: false, required: false
  public get modelBiasJobOutputConfig() {
    return this.interpolationForAttribute('model_bias_job_output_config') as any;
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
