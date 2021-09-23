"use strict";
// https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_quality_job_definition.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccSagemakerModelQualityJobDefinition = exports.dataAwsccSagemakerModelQualityJobDefinitionTagsToTerraform = exports.DataAwsccSagemakerModelQualityJobDefinitionTags = exports.dataAwsccSagemakerModelQualityJobDefinitionStoppingConditionToTerraform = exports.DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition = exports.dataAwsccSagemakerModelQualityJobDefinitionNetworkConfigToTerraform = exports.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig = exports.dataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigToTerraform = exports.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig = exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigToTerraform = exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig = exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsToTerraform = exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs = exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform = exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output = exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputToTerraform = exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput = exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputToTerraform = exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input = exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputToTerraform = exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput = exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigToTerraform = exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig = exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceToTerraform = exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource = exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationToTerraform = exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification = exports.dataAwsccSagemakerModelQualityJobDefinitionJobResourcesToTerraform = exports.DataAwsccSagemakerModelQualityJobDefinitionJobResources = exports.dataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigToTerraform = exports.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig = void 0;
const cdktf = require("cdktf");
class DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig extends cdktf.ComplexComputedList {
    // instance_count - computed: true, optional: false, required: false
    get instanceCount() {
        return this.getNumberAttribute('instance_count');
    }
    // instance_type - computed: true, optional: false, required: false
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    // volume_kms_key_id - computed: true, optional: false, required: false
    get volumeKmsKeyId() {
        return this.getStringAttribute('volume_kms_key_id');
    }
    // volume_size_in_gb - computed: true, optional: false, required: false
    get volumeSizeInGb() {
        return this.getNumberAttribute('volume_size_in_gb');
    }
}
exports.DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig = DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig;
function dataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_count: cdktf.numberToTerraform(struct.instanceCount),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        volume_kms_key_id: cdktf.stringToTerraform(struct.volumeKmsKeyId),
        volume_size_in_gb: cdktf.numberToTerraform(struct.volumeSizeInGb),
    };
}
exports.dataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigToTerraform = dataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigToTerraform;
class DataAwsccSagemakerModelQualityJobDefinitionJobResources extends cdktf.ComplexComputedList {
    // cluster_config - computed: true, optional: false, required: false
    get clusterConfig() {
        return this.interpolationForAttribute('cluster_config');
    }
}
exports.DataAwsccSagemakerModelQualityJobDefinitionJobResources = DataAwsccSagemakerModelQualityJobDefinitionJobResources;
function dataAwsccSagemakerModelQualityJobDefinitionJobResourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cluster_config: dataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct.clusterConfig),
    };
}
exports.dataAwsccSagemakerModelQualityJobDefinitionJobResourcesToTerraform = dataAwsccSagemakerModelQualityJobDefinitionJobResourcesToTerraform;
class DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification extends cdktf.ComplexComputedList {
    // container_arguments - computed: true, optional: false, required: false
    get containerArguments() {
        return this.getListAttribute('container_arguments');
    }
    // container_entrypoint - computed: true, optional: false, required: false
    get containerEntrypoint() {
        return this.getListAttribute('container_entrypoint');
    }
    // environment - computed: true, optional: false, required: false
    get environment() {
        return this.interpolationForAttribute('environment');
    }
    // image_uri - computed: true, optional: false, required: false
    get imageUri() {
        return this.getStringAttribute('image_uri');
    }
    // post_analytics_processor_source_uri - computed: true, optional: false, required: false
    get postAnalyticsProcessorSourceUri() {
        return this.getStringAttribute('post_analytics_processor_source_uri');
    }
    // problem_type - computed: true, optional: false, required: false
    get problemType() {
        return this.getStringAttribute('problem_type');
    }
    // record_preprocessor_source_uri - computed: true, optional: false, required: false
    get recordPreprocessorSourceUri() {
        return this.getStringAttribute('record_preprocessor_source_uri');
    }
}
exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification = DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification;
function dataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_arguments: cdktf.listMapper(cdktf.stringToTerraform)(struct.containerArguments),
        container_entrypoint: cdktf.listMapper(cdktf.stringToTerraform)(struct.containerEntrypoint),
        environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct.environment),
        image_uri: cdktf.stringToTerraform(struct.imageUri),
        post_analytics_processor_source_uri: cdktf.stringToTerraform(struct.postAnalyticsProcessorSourceUri),
        problem_type: cdktf.stringToTerraform(struct.problemType),
        record_preprocessor_source_uri: cdktf.stringToTerraform(struct.recordPreprocessorSourceUri),
    };
}
exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationToTerraform = dataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationToTerraform;
class DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource extends cdktf.ComplexComputedList {
    // s3_uri - computed: true, optional: false, required: false
    get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
}
exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource = DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource;
function dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_uri: cdktf.stringToTerraform(struct.s3Uri),
    };
}
exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceToTerraform = dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceToTerraform;
class DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig extends cdktf.ComplexComputedList {
    // baselining_job_name - computed: true, optional: false, required: false
    get baseliningJobName() {
        return this.getStringAttribute('baselining_job_name');
    }
    // constraints_resource - computed: true, optional: false, required: false
    get constraintsResource() {
        return this.interpolationForAttribute('constraints_resource');
    }
}
exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig = DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig;
function dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        baselining_job_name: cdktf.stringToTerraform(struct.baseliningJobName),
        constraints_resource: dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceToTerraform(struct.constraintsResource),
    };
}
exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigToTerraform = dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigToTerraform;
class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput extends cdktf.ComplexComputedList {
    // end_time_offset - computed: true, optional: false, required: false
    get endTimeOffset() {
        return this.getStringAttribute('end_time_offset');
    }
    // endpoint_name - computed: true, optional: false, required: false
    get endpointName() {
        return this.getStringAttribute('endpoint_name');
    }
    // inference_attribute - computed: true, optional: false, required: false
    get inferenceAttribute() {
        return this.getStringAttribute('inference_attribute');
    }
    // local_path - computed: true, optional: false, required: false
    get localPath() {
        return this.getStringAttribute('local_path');
    }
    // probability_attribute - computed: true, optional: false, required: false
    get probabilityAttribute() {
        return this.getStringAttribute('probability_attribute');
    }
    // probability_threshold_attribute - computed: true, optional: false, required: false
    get probabilityThresholdAttribute() {
        return this.getNumberAttribute('probability_threshold_attribute');
    }
    // s3_data_distribution_type - computed: true, optional: false, required: false
    get s3DataDistributionType() {
        return this.getStringAttribute('s3_data_distribution_type');
    }
    // s3_input_mode - computed: true, optional: false, required: false
    get s3InputMode() {
        return this.getStringAttribute('s3_input_mode');
    }
    // start_time_offset - computed: true, optional: false, required: false
    get startTimeOffset() {
        return this.getStringAttribute('start_time_offset');
    }
}
exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput = DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput;
function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end_time_offset: cdktf.stringToTerraform(struct.endTimeOffset),
        endpoint_name: cdktf.stringToTerraform(struct.endpointName),
        inference_attribute: cdktf.stringToTerraform(struct.inferenceAttribute),
        local_path: cdktf.stringToTerraform(struct.localPath),
        probability_attribute: cdktf.stringToTerraform(struct.probabilityAttribute),
        probability_threshold_attribute: cdktf.numberToTerraform(struct.probabilityThresholdAttribute),
        s3_data_distribution_type: cdktf.stringToTerraform(struct.s3DataDistributionType),
        s3_input_mode: cdktf.stringToTerraform(struct.s3InputMode),
        start_time_offset: cdktf.stringToTerraform(struct.startTimeOffset),
    };
}
exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputToTerraform = dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputToTerraform;
class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input extends cdktf.ComplexComputedList {
    // s3_uri - computed: true, optional: false, required: false
    get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
}
exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input = DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input;
function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_uri: cdktf.stringToTerraform(struct.s3Uri),
    };
}
exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputToTerraform = dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputToTerraform;
class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput extends cdktf.ComplexComputedList {
    // endpoint_input - computed: true, optional: false, required: false
    get endpointInput() {
        return this.interpolationForAttribute('endpoint_input');
    }
    // ground_truth_s3_input - computed: true, optional: false, required: false
    get groundTruthS3Input() {
        return this.interpolationForAttribute('ground_truth_s3_input');
    }
}
exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput = DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput;
function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint_input: dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputToTerraform(struct.endpointInput),
        ground_truth_s3_input: dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputToTerraform(struct.groundTruthS3Input),
    };
}
exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputToTerraform = dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputToTerraform;
class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output extends cdktf.ComplexComputedList {
    // local_path - computed: true, optional: false, required: false
    get localPath() {
        return this.getStringAttribute('local_path');
    }
    // s3_upload_mode - computed: true, optional: false, required: false
    get s3UploadMode() {
        return this.getStringAttribute('s3_upload_mode');
    }
    // s3_uri - computed: true, optional: false, required: false
    get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
}
exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output = DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output;
function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        local_path: cdktf.stringToTerraform(struct.localPath),
        s3_upload_mode: cdktf.stringToTerraform(struct.s3UploadMode),
        s3_uri: cdktf.stringToTerraform(struct.s3Uri),
    };
}
exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform = dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform;
class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs extends cdktf.ComplexComputedList {
    // s3_output - computed: true, optional: false, required: false
    get s3Output() {
        return this.interpolationForAttribute('s3_output');
    }
}
exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs = DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs;
function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_output: dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct.s3Output),
    };
}
exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsToTerraform = dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsToTerraform;
class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig extends cdktf.ComplexComputedList {
    // kms_key_id - computed: true, optional: false, required: false
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    // monitoring_outputs - computed: true, optional: false, required: false
    get monitoringOutputs() {
        return this.interpolationForAttribute('monitoring_outputs');
    }
}
exports.DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig = DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig;
function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        monitoring_outputs: cdktf.listMapper(dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsToTerraform)(struct.monitoringOutputs),
    };
}
exports.dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigToTerraform = dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigToTerraform;
class DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig extends cdktf.ComplexComputedList {
    // security_group_ids - computed: true, optional: false, required: false
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    // subnets - computed: true, optional: false, required: false
    get subnets() {
        return this.getListAttribute('subnets');
    }
}
exports.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig = DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig;
function dataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnets),
    };
}
exports.dataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigToTerraform = dataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigToTerraform;
class DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig extends cdktf.ComplexComputedList {
    // enable_inter_container_traffic_encryption - computed: true, optional: false, required: false
    get enableInterContainerTrafficEncryption() {
        return this.getBooleanAttribute('enable_inter_container_traffic_encryption');
    }
    // enable_network_isolation - computed: true, optional: false, required: false
    get enableNetworkIsolation() {
        return this.getBooleanAttribute('enable_network_isolation');
    }
    // vpc_config - computed: true, optional: false, required: false
    get vpcConfig() {
        return this.interpolationForAttribute('vpc_config');
    }
}
exports.DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig = DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig;
function dataAwsccSagemakerModelQualityJobDefinitionNetworkConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct.enableInterContainerTrafficEncryption),
        enable_network_isolation: cdktf.booleanToTerraform(struct.enableNetworkIsolation),
        vpc_config: dataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct.vpcConfig),
    };
}
exports.dataAwsccSagemakerModelQualityJobDefinitionNetworkConfigToTerraform = dataAwsccSagemakerModelQualityJobDefinitionNetworkConfigToTerraform;
class DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition extends cdktf.ComplexComputedList {
    // max_runtime_in_seconds - computed: true, optional: false, required: false
    get maxRuntimeInSeconds() {
        return this.getNumberAttribute('max_runtime_in_seconds');
    }
}
exports.DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition = DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition;
function dataAwsccSagemakerModelQualityJobDefinitionStoppingConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_runtime_in_seconds: cdktf.numberToTerraform(struct.maxRuntimeInSeconds),
    };
}
exports.dataAwsccSagemakerModelQualityJobDefinitionStoppingConditionToTerraform = dataAwsccSagemakerModelQualityJobDefinitionStoppingConditionToTerraform;
class DataAwsccSagemakerModelQualityJobDefinitionTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccSagemakerModelQualityJobDefinitionTags = DataAwsccSagemakerModelQualityJobDefinitionTags;
function dataAwsccSagemakerModelQualityJobDefinitionTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccSagemakerModelQualityJobDefinitionTagsToTerraform = dataAwsccSagemakerModelQualityJobDefinitionTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_quality_job_definition.html awscc_sagemaker_model_quality_job_definition}
*/
class DataAwsccSagemakerModelQualityJobDefinition extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_quality_job_definition.html awscc_sagemaker_model_quality_job_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerModelQualityJobDefinitionConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_model_quality_job_definition',
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
    get creationTime() {
        return this.getStringAttribute('creation_time');
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
    // job_definition_arn - computed: true, optional: false, required: false
    get jobDefinitionArn() {
        return this.getStringAttribute('job_definition_arn');
    }
    // job_definition_name - computed: true, optional: false, required: false
    get jobDefinitionName() {
        return this.getStringAttribute('job_definition_name');
    }
    // job_resources - computed: true, optional: false, required: false
    get jobResources() {
        return this.interpolationForAttribute('job_resources');
    }
    // model_quality_app_specification - computed: true, optional: false, required: false
    get modelQualityAppSpecification() {
        return this.interpolationForAttribute('model_quality_app_specification');
    }
    // model_quality_baseline_config - computed: true, optional: false, required: false
    get modelQualityBaselineConfig() {
        return this.interpolationForAttribute('model_quality_baseline_config');
    }
    // model_quality_job_input - computed: true, optional: false, required: false
    get modelQualityJobInput() {
        return this.interpolationForAttribute('model_quality_job_input');
    }
    // model_quality_job_output_config - computed: true, optional: false, required: false
    get modelQualityJobOutputConfig() {
        return this.interpolationForAttribute('model_quality_job_output_config');
    }
    // network_config - computed: true, optional: false, required: false
    get networkConfig() {
        return this.interpolationForAttribute('network_config');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // stopping_condition - computed: true, optional: false, required: false
    get stoppingCondition() {
        return this.interpolationForAttribute('stopping_condition');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
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
exports.DataAwsccSagemakerModelQualityJobDefinition = DataAwsccSagemakerModelQualityJobDefinition;
// =================
// STATIC PROPERTIES
// =================
DataAwsccSagemakerModelQualityJobDefinition.tfResourceType = "awscc_sagemaker_model_quality_job_definition";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1zYWdlbWFrZXItbW9kZWwtcXVhbGl0eS1qb2ItZGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtYXdzY2Mtc2FnZW1ha2VyLW1vZGVsLXF1YWxpdHktam9iLWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhGQUE4RjtBQUM5RiwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFZL0IsTUFBYSxvRUFBcUUsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWpILG9FQUFvRTtJQUNwRSxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsbUVBQW1FO0lBQ25FLElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsdUVBQXVFO0lBQ3ZFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUNGO0FBckJELG9KQXFCQztBQUVELFNBQWdCLCtFQUErRSxDQUFDLE1BQTZFO0lBQzNLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlELGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM1RCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlC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QUksQ0FBQyx5QkFBeUIsQ0FBQyxpQ0FBaUMsQ0FBUSxDQUFDO0lBQ2xGLENBQUM7SUFFRCxvRUFBb0U7SUFDcEUsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGdCQUFnQixDQUFRLENBQUM7SUFDakUsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHdFQUF3RTtJQUN4RSxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxvQkFBb0IsQ0FBUSxDQUFDO0lBQ3JFLENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFRLENBQUM7SUFDdkQsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3RDLENBQUM7SUFDSixDQUFDOztBQXJISCxrR0FzSEM7QUFwSEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRywwREFBYyxHQUFXLDhDQUE4QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2Qvc2FnZW1ha2VyX21vZGVsX3F1YWxpdHlfam9iX2RlZmluaXRpb24uaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9zYWdlbWFrZXJfbW9kZWxfcXVhbGl0eV9qb2JfZGVmaW5pdGlvbi5odG1sI2lkIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb24jaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbkpvYlJlc291cmNlc0NsdXN0ZXJDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpbnN0YW5jZV9jb3VudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbnN0YW5jZV9jb3VudCcpO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3R5cGUnKTtcbiAgfVxuXG4gIC8vIHZvbHVtZV9rbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdm9sdW1lS21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2b2x1bWVfa21zX2tleV9pZCcpO1xuICB9XG5cbiAgLy8gdm9sdW1lX3NpemVfaW5fZ2IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2b2x1bWVTaXplSW5HYigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZvbHVtZV9zaXplX2luX2diJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25Kb2JSZXNvdXJjZXNDbHVzdGVyQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbkpvYlJlc291cmNlc0NsdXN0ZXJDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaW5zdGFuY2VfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VDb3VudCksXG4gICAgaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVR5cGUpLFxuICAgIHZvbHVtZV9rbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZUttc0tleUlkKSxcbiAgICB2b2x1bWVfc2l6ZV9pbl9nYjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVTaXplSW5HYiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25Kb2JSZXNvdXJjZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjbHVzdGVyX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2x1c3Rlcl9jb25maWcnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25Kb2JSZXNvdXJjZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uSm9iUmVzb3VyY2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNsdXN0ZXJfY29uZmlnOiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uSm9iUmVzb3VyY2VzQ2x1c3RlckNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2x1c3RlckNvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25Nb2RlbFF1YWxpdHlBcHBTcGVjaWZpY2F0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29udGFpbmVyX2FyZ3VtZW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lckFyZ3VtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjb250YWluZXJfYXJndW1lbnRzJyk7XG4gIH1cblxuICAvLyBjb250YWluZXJfZW50cnlwb2ludCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lckVudHJ5cG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY29udGFpbmVyX2VudHJ5cG9pbnQnKTtcbiAgfVxuXG4gIC8vIGVudmlyb25tZW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW52aXJvbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZW52aXJvbm1lbnQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpbWFnZV91cmkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbWFnZVVyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ltYWdlX3VyaScpO1xuICB9XG5cbiAgLy8gcG9zdF9hbmFseXRpY3NfcHJvY2Vzc29yX3NvdXJjZV91cmkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3N0QW5hbHl0aWNzUHJvY2Vzc29yU291cmNlVXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncG9zdF9hbmFseXRpY3NfcHJvY2Vzc29yX3NvdXJjZV91cmknKTtcbiAgfVxuXG4gIC8vIHByb2JsZW1fdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb2JsZW1UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvYmxlbV90eXBlJyk7XG4gIH1cblxuICAvLyByZWNvcmRfcHJlcHJvY2Vzc29yX3NvdXJjZV91cmkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWNvcmRQcmVwcm9jZXNzb3JTb3VyY2VVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWNvcmRfcHJlcHJvY2Vzc29yX3NvdXJjZV91cmknKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbk1vZGVsUXVhbGl0eUFwcFNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uTW9kZWxRdWFsaXR5QXBwU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXJfYXJndW1lbnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbnRhaW5lckFyZ3VtZW50cyksXG4gICAgY29udGFpbmVyX2VudHJ5cG9pbnQ6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29udGFpbmVyRW50cnlwb2ludCksXG4gICAgZW52aXJvbm1lbnQ6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZW52aXJvbm1lbnQpLFxuICAgIGltYWdlX3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbWFnZVVyaSksXG4gICAgcG9zdF9hbmFseXRpY3NfcHJvY2Vzc29yX3NvdXJjZV91cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucG9zdEFuYWx5dGljc1Byb2Nlc3NvclNvdXJjZVVyaSksXG4gICAgcHJvYmxlbV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb2JsZW1UeXBlKSxcbiAgICByZWNvcmRfcHJlcHJvY2Vzc29yX3NvdXJjZV91cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkUHJlcHJvY2Vzc29yU291cmNlVXJpKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbk1vZGVsUXVhbGl0eUJhc2VsaW5lQ29uZmlnQ29uc3RyYWludHNSZXNvdXJjZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHMzX3VyaSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzVXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfdXJpJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25Nb2RlbFF1YWxpdHlCYXNlbGluZUNvbmZpZ0NvbnN0cmFpbnRzUmVzb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uTW9kZWxRdWFsaXR5QmFzZWxpbmVDb25maWdDb25zdHJhaW50c1Jlc291cmNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHMzX3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM1VyaSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25Nb2RlbFF1YWxpdHlCYXNlbGluZUNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJhc2VsaW5pbmdfam9iX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBiYXNlbGluaW5nSm9iTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Jhc2VsaW5pbmdfam9iX25hbWUnKTtcbiAgfVxuXG4gIC8vIGNvbnN0cmFpbnRzX3Jlc291cmNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29uc3RyYWludHNSZXNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb25zdHJhaW50c19yZXNvdXJjZScpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbk1vZGVsUXVhbGl0eUJhc2VsaW5lQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbk1vZGVsUXVhbGl0eUJhc2VsaW5lQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJhc2VsaW5pbmdfam9iX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYmFzZWxpbmluZ0pvYk5hbWUpLFxuICAgIGNvbnN0cmFpbnRzX3Jlc291cmNlOiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uTW9kZWxRdWFsaXR5QmFzZWxpbmVDb25maWdDb25zdHJhaW50c1Jlc291cmNlVG9UZXJyYWZvcm0oc3RydWN0IS5jb25zdHJhaW50c1Jlc291cmNlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbk1vZGVsUXVhbGl0eUpvYklucHV0RW5kcG9pbnRJbnB1dCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuZF90aW1lX29mZnNldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuZFRpbWVPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmRfdGltZV9vZmZzZXQnKTtcbiAgfVxuXG4gIC8vIGVuZHBvaW50X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRwb2ludE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmRwb2ludF9uYW1lJyk7XG4gIH1cblxuICAvLyBpbmZlcmVuY2VfYXR0cmlidXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5mZXJlbmNlQXR0cmlidXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5mZXJlbmNlX2F0dHJpYnV0ZScpO1xuICB9XG5cbiAgLy8gbG9jYWxfcGF0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvY2FsUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvY2FsX3BhdGgnKTtcbiAgfVxuXG4gIC8vIHByb2JhYmlsaXR5X2F0dHJpYnV0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb2JhYmlsaXR5QXR0cmlidXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvYmFiaWxpdHlfYXR0cmlidXRlJyk7XG4gIH1cblxuICAvLyBwcm9iYWJpbGl0eV90aHJlc2hvbGRfYXR0cmlidXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvYmFiaWxpdHlUaHJlc2hvbGRBdHRyaWJ1dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwcm9iYWJpbGl0eV90aHJlc2hvbGRfYXR0cmlidXRlJyk7XG4gIH1cblxuICAvLyBzM19kYXRhX2Rpc3RyaWJ1dGlvbl90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNEYXRhRGlzdHJpYnV0aW9uVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX2RhdGFfZGlzdHJpYnV0aW9uX3R5cGUnKTtcbiAgfVxuXG4gIC8vIHMzX2lucHV0X21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM0lucHV0TW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX2lucHV0X21vZGUnKTtcbiAgfVxuXG4gIC8vIHN0YXJ0X3RpbWVfb2Zmc2V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhcnRUaW1lT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhcnRfdGltZV9vZmZzZXQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbk1vZGVsUXVhbGl0eUpvYklucHV0RW5kcG9pbnRJbnB1dFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25Nb2RlbFF1YWxpdHlKb2JJbnB1dEVuZHBvaW50SW5wdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5kX3RpbWVfb2Zmc2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVuZFRpbWVPZmZzZXQpLFxuICAgIGVuZHBvaW50X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW5kcG9pbnROYW1lKSxcbiAgICBpbmZlcmVuY2VfYXR0cmlidXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluZmVyZW5jZUF0dHJpYnV0ZSksXG4gICAgbG9jYWxfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2NhbFBhdGgpLFxuICAgIHByb2JhYmlsaXR5X2F0dHJpYnV0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9iYWJpbGl0eUF0dHJpYnV0ZSksXG4gICAgcHJvYmFiaWxpdHlfdGhyZXNob2xkX2F0dHJpYnV0ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9iYWJpbGl0eVRocmVzaG9sZEF0dHJpYnV0ZSksXG4gICAgczNfZGF0YV9kaXN0cmlidXRpb25fdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM0RhdGFEaXN0cmlidXRpb25UeXBlKSxcbiAgICBzM19pbnB1dF9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzSW5wdXRNb2RlKSxcbiAgICBzdGFydF90aW1lX29mZnNldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGFydFRpbWVPZmZzZXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uTW9kZWxRdWFsaXR5Sm9iSW5wdXRHcm91bmRUcnV0aFMzSW5wdXQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBzM191cmkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM1VyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX3VyaScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uTW9kZWxRdWFsaXR5Sm9iSW5wdXRHcm91bmRUcnV0aFMzSW5wdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uTW9kZWxRdWFsaXR5Sm9iSW5wdXRHcm91bmRUcnV0aFMzSW5wdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgczNfdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzVXJpKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbk1vZGVsUXVhbGl0eUpvYklucHV0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5kcG9pbnRfaW5wdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRwb2ludElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VuZHBvaW50X2lucHV0JykgYXMgYW55O1xuICB9XG5cbiAgLy8gZ3JvdW5kX3RydXRoX3MzX2lucHV0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZ3JvdW5kVHJ1dGhTM0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2dyb3VuZF90cnV0aF9zM19pbnB1dCcpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbk1vZGVsUXVhbGl0eUpvYklucHV0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbk1vZGVsUXVhbGl0eUpvYklucHV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuZHBvaW50X2lucHV0OiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uTW9kZWxRdWFsaXR5Sm9iSW5wdXRFbmRwb2ludElucHV0VG9UZXJyYWZvcm0oc3RydWN0IS5lbmRwb2ludElucHV0KSxcbiAgICBncm91bmRfdHJ1dGhfczNfaW5wdXQ6IGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25Nb2RlbFF1YWxpdHlKb2JJbnB1dEdyb3VuZFRydXRoUzNJbnB1dFRvVGVycmFmb3JtKHN0cnVjdCEuZ3JvdW5kVHJ1dGhTM0lucHV0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbk1vZGVsUXVhbGl0eUpvYk91dHB1dENvbmZpZ01vbml0b3JpbmdPdXRwdXRzUzNPdXRwdXQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBsb2NhbF9wYXRoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9jYWxQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9jYWxfcGF0aCcpO1xuICB9XG5cbiAgLy8gczNfdXBsb2FkX21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM1VwbG9hZE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM191cGxvYWRfbW9kZScpO1xuICB9XG5cbiAgLy8gczNfdXJpIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM191cmknKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbk1vZGVsUXVhbGl0eUpvYk91dHB1dENvbmZpZ01vbml0b3JpbmdPdXRwdXRzUzNPdXRwdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uTW9kZWxRdWFsaXR5Sm9iT3V0cHV0Q29uZmlnTW9uaXRvcmluZ091dHB1dHNTM091dHB1dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBsb2NhbF9wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvY2FsUGF0aCksXG4gICAgczNfdXBsb2FkX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNVcGxvYWRNb2RlKSxcbiAgICBzM191cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNVcmkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uTW9kZWxRdWFsaXR5Sm9iT3V0cHV0Q29uZmlnTW9uaXRvcmluZ091dHB1dHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBzM19vdXRwdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM091dHB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzM19vdXRwdXQnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25Nb2RlbFF1YWxpdHlKb2JPdXRwdXRDb25maWdNb25pdG9yaW5nT3V0cHV0c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25Nb2RlbFF1YWxpdHlKb2JPdXRwdXRDb25maWdNb25pdG9yaW5nT3V0cHV0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzM19vdXRwdXQ6IGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25Nb2RlbFF1YWxpdHlKb2JPdXRwdXRDb25maWdNb25pdG9yaW5nT3V0cHV0c1MzT3V0cHV0VG9UZXJyYWZvcm0oc3RydWN0IS5zM091dHB1dCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25Nb2RlbFF1YWxpdHlKb2JPdXRwdXRDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2lkJyk7XG4gIH1cblxuICAvLyBtb25pdG9yaW5nX291dHB1dHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtb25pdG9yaW5nT3V0cHV0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtb25pdG9yaW5nX291dHB1dHMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25Nb2RlbFF1YWxpdHlKb2JPdXRwdXRDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uTW9kZWxRdWFsaXR5Sm9iT3V0cHV0Q29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgIG1vbml0b3Jpbmdfb3V0cHV0czogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uTW9kZWxRdWFsaXR5Sm9iT3V0cHV0Q29uZmlnTW9uaXRvcmluZ091dHB1dHNUb1RlcnJhZm9ybSkoc3RydWN0IS5tb25pdG9yaW5nT3V0cHV0cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25OZXR3b3JrQ29uZmlnVnBjQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9pZHMnKTtcbiAgfVxuXG4gIC8vIHN1Ym5ldHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdWJuZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1Ym5ldHMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbk5ldHdvcmtDb25maWdWcGNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uTmV0d29ya0NvbmZpZ1ZwY0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzZWN1cml0eV9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2VjdXJpdHlHcm91cElkcyksXG4gICAgc3VibmV0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zdWJuZXRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbk5ldHdvcmtDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmFibGVfaW50ZXJfY29udGFpbmVyX3RyYWZmaWNfZW5jcnlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZUludGVyQ29udGFpbmVyVHJhZmZpY0VuY3J5cHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX2ludGVyX2NvbnRhaW5lcl90cmFmZmljX2VuY3J5cHRpb24nKTtcbiAgfVxuXG4gIC8vIGVuYWJsZV9uZXR3b3JrX2lzb2xhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZU5ldHdvcmtJc29sYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX25ldHdvcmtfaXNvbGF0aW9uJyk7XG4gIH1cblxuICAvLyB2cGNfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdnBjQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZwY19jb25maWcnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25OZXR3b3JrQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbk5ldHdvcmtDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlX2ludGVyX2NvbnRhaW5lcl90cmFmZmljX2VuY3J5cHRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZUludGVyQ29udGFpbmVyVHJhZmZpY0VuY3J5cHRpb24pLFxuICAgIGVuYWJsZV9uZXR3b3JrX2lzb2xhdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlTmV0d29ya0lzb2xhdGlvbiksXG4gICAgdnBjX2NvbmZpZzogZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbk5ldHdvcmtDb25maWdWcGNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZwY0NvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25TdG9wcGluZ0NvbmRpdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG1heF9ydW50aW1lX2luX3NlY29uZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXhSdW50aW1lSW5TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X3J1bnRpbWVfaW5fc2Vjb25kcycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uU3RvcHBpbmdDb25kaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uU3RvcHBpbmdDb25kaXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWF4X3J1bnRpbWVfaW5fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhSdW50aW1lSW5TZWNvbmRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvblRhZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbFF1YWxpdHlKb2JEZWZpbml0aW9uVGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25UYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL3NhZ2VtYWtlcl9tb2RlbF9xdWFsaXR5X2pvYl9kZWZpbml0aW9uLmh0bWwgYXdzY2Nfc2FnZW1ha2VyX21vZGVsX3F1YWxpdHlfam9iX2RlZmluaXRpb259XG4qL1xuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX3NhZ2VtYWtlcl9tb2RlbF9xdWFsaXR5X2pvYl9kZWZpbml0aW9uXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL3NhZ2VtYWtlcl9tb2RlbF9xdWFsaXR5X2pvYl9kZWZpbml0aW9uLmh0bWwgYXdzY2Nfc2FnZW1ha2VyX21vZGVsX3F1YWxpdHlfam9iX2RlZmluaXRpb259IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsUXVhbGl0eUpvYkRlZmluaXRpb25Db25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxRdWFsaXR5Sm9iRGVmaW5pdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2Nfc2FnZW1ha2VyX21vZGVsX3F1YWxpdHlfam9iX2RlZmluaXRpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gY3JlYXRpb25fdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0aW9uVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0aW9uX3RpbWUnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBqb2JfZGVmaW5pdGlvbl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBqb2JEZWZpbml0aW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnam9iX2RlZmluaXRpb25fYXJuJyk7XG4gIH1cblxuICAvLyBqb2JfZGVmaW5pdGlvbl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgam9iRGVmaW5pdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdqb2JfZGVmaW5pdGlvbl9uYW1lJyk7XG4gIH1cblxuICAvLyBqb2JfcmVzb3VyY2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgam9iUmVzb3VyY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2pvYl9yZXNvdXJjZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBtb2RlbF9xdWFsaXR5X2FwcF9zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbW9kZWxRdWFsaXR5QXBwU3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtb2RlbF9xdWFsaXR5X2FwcF9zcGVjaWZpY2F0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbW9kZWxfcXVhbGl0eV9iYXNlbGluZV9jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtb2RlbFF1YWxpdHlCYXNlbGluZUNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtb2RlbF9xdWFsaXR5X2Jhc2VsaW5lX2NvbmZpZycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG1vZGVsX3F1YWxpdHlfam9iX2lucHV0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbW9kZWxRdWFsaXR5Sm9iSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbW9kZWxfcXVhbGl0eV9qb2JfaW5wdXQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBtb2RlbF9xdWFsaXR5X2pvYl9vdXRwdXRfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbW9kZWxRdWFsaXR5Sm9iT3V0cHV0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21vZGVsX3F1YWxpdHlfam9iX291dHB1dF9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBuZXR3b3JrX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5ldHdvcmtDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbmV0d29ya19jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gc3RvcHBpbmdfY29uZGl0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RvcHBpbmdDb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RvcHBpbmdfY29uZGl0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=