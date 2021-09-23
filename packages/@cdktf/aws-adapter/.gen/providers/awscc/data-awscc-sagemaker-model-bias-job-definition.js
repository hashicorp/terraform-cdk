"use strict";
// https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_bias_job_definition.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccSagemakerModelBiasJobDefinition = exports.dataAwsccSagemakerModelBiasJobDefinitionTagsToTerraform = exports.DataAwsccSagemakerModelBiasJobDefinitionTags = exports.dataAwsccSagemakerModelBiasJobDefinitionStoppingConditionToTerraform = exports.DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition = exports.dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigToTerraform = exports.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig = exports.dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigToTerraform = exports.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig = exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigToTerraform = exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig = exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsToTerraform = exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs = exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputToTerraform = exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output = exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputToTerraform = exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput = exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputToTerraform = exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input = exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputToTerraform = exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput = exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigToTerraform = exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig = exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceToTerraform = exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource = exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationToTerraform = exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification = exports.dataAwsccSagemakerModelBiasJobDefinitionJobResourcesToTerraform = exports.DataAwsccSagemakerModelBiasJobDefinitionJobResources = exports.dataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigToTerraform = exports.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig = void 0;
const cdktf = require("cdktf");
class DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig extends cdktf.ComplexComputedList {
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
exports.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig = DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig;
function dataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigToTerraform(struct) {
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
exports.dataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigToTerraform = dataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigToTerraform;
class DataAwsccSagemakerModelBiasJobDefinitionJobResources extends cdktf.ComplexComputedList {
    // cluster_config - computed: true, optional: false, required: false
    get clusterConfig() {
        return this.interpolationForAttribute('cluster_config');
    }
}
exports.DataAwsccSagemakerModelBiasJobDefinitionJobResources = DataAwsccSagemakerModelBiasJobDefinitionJobResources;
function dataAwsccSagemakerModelBiasJobDefinitionJobResourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cluster_config: dataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigToTerraform(struct.clusterConfig),
    };
}
exports.dataAwsccSagemakerModelBiasJobDefinitionJobResourcesToTerraform = dataAwsccSagemakerModelBiasJobDefinitionJobResourcesToTerraform;
class DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification extends cdktf.ComplexComputedList {
    // config_uri - computed: true, optional: false, required: false
    get configUri() {
        return this.getStringAttribute('config_uri');
    }
    // environment - computed: true, optional: false, required: false
    get environment() {
        return this.interpolationForAttribute('environment');
    }
    // image_uri - computed: true, optional: false, required: false
    get imageUri() {
        return this.getStringAttribute('image_uri');
    }
}
exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification = DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification;
function dataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        config_uri: cdktf.stringToTerraform(struct.configUri),
        environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct.environment),
        image_uri: cdktf.stringToTerraform(struct.imageUri),
    };
}
exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationToTerraform = dataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationToTerraform;
class DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource extends cdktf.ComplexComputedList {
    // s3_uri - computed: true, optional: false, required: false
    get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
}
exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource = DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource;
function dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_uri: cdktf.stringToTerraform(struct.s3Uri),
    };
}
exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceToTerraform = dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceToTerraform;
class DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig extends cdktf.ComplexComputedList {
    // baselining_job_name - computed: true, optional: false, required: false
    get baseliningJobName() {
        return this.getStringAttribute('baselining_job_name');
    }
    // constraints_resource - computed: true, optional: false, required: false
    get constraintsResource() {
        return this.interpolationForAttribute('constraints_resource');
    }
}
exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig = DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig;
function dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        baselining_job_name: cdktf.stringToTerraform(struct.baseliningJobName),
        constraints_resource: dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceToTerraform(struct.constraintsResource),
    };
}
exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigToTerraform = dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigToTerraform;
class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput extends cdktf.ComplexComputedList {
    // end_time_offset - computed: true, optional: false, required: false
    get endTimeOffset() {
        return this.getStringAttribute('end_time_offset');
    }
    // endpoint_name - computed: true, optional: false, required: false
    get endpointName() {
        return this.getStringAttribute('endpoint_name');
    }
    // features_attribute - computed: true, optional: false, required: false
    get featuresAttribute() {
        return this.getStringAttribute('features_attribute');
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
exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput = DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput;
function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end_time_offset: cdktf.stringToTerraform(struct.endTimeOffset),
        endpoint_name: cdktf.stringToTerraform(struct.endpointName),
        features_attribute: cdktf.stringToTerraform(struct.featuresAttribute),
        inference_attribute: cdktf.stringToTerraform(struct.inferenceAttribute),
        local_path: cdktf.stringToTerraform(struct.localPath),
        probability_attribute: cdktf.stringToTerraform(struct.probabilityAttribute),
        probability_threshold_attribute: cdktf.numberToTerraform(struct.probabilityThresholdAttribute),
        s3_data_distribution_type: cdktf.stringToTerraform(struct.s3DataDistributionType),
        s3_input_mode: cdktf.stringToTerraform(struct.s3InputMode),
        start_time_offset: cdktf.stringToTerraform(struct.startTimeOffset),
    };
}
exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputToTerraform = dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputToTerraform;
class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input extends cdktf.ComplexComputedList {
    // s3_uri - computed: true, optional: false, required: false
    get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
}
exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input = DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input;
function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_uri: cdktf.stringToTerraform(struct.s3Uri),
    };
}
exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputToTerraform = dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputToTerraform;
class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput extends cdktf.ComplexComputedList {
    // endpoint_input - computed: true, optional: false, required: false
    get endpointInput() {
        return this.interpolationForAttribute('endpoint_input');
    }
    // ground_truth_s3_input - computed: true, optional: false, required: false
    get groundTruthS3Input() {
        return this.interpolationForAttribute('ground_truth_s3_input');
    }
}
exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput = DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput;
function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint_input: dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputToTerraform(struct.endpointInput),
        ground_truth_s3_input: dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputToTerraform(struct.groundTruthS3Input),
    };
}
exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputToTerraform = dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputToTerraform;
class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output extends cdktf.ComplexComputedList {
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
exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output = DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output;
function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        local_path: cdktf.stringToTerraform(struct.localPath),
        s3_upload_mode: cdktf.stringToTerraform(struct.s3UploadMode),
        s3_uri: cdktf.stringToTerraform(struct.s3Uri),
    };
}
exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputToTerraform = dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputToTerraform;
class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs extends cdktf.ComplexComputedList {
    // s3_output - computed: true, optional: false, required: false
    get s3Output() {
        return this.interpolationForAttribute('s3_output');
    }
}
exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs = DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs;
function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_output: dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct.s3Output),
    };
}
exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsToTerraform = dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsToTerraform;
class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig extends cdktf.ComplexComputedList {
    // kms_key_id - computed: true, optional: false, required: false
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    // monitoring_outputs - computed: true, optional: false, required: false
    get monitoringOutputs() {
        return this.interpolationForAttribute('monitoring_outputs');
    }
}
exports.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig = DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig;
function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        monitoring_outputs: cdktf.listMapper(dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsToTerraform)(struct.monitoringOutputs),
    };
}
exports.dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigToTerraform = dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigToTerraform;
class DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig extends cdktf.ComplexComputedList {
    // security_group_ids - computed: true, optional: false, required: false
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    // subnets - computed: true, optional: false, required: false
    get subnets() {
        return this.getListAttribute('subnets');
    }
}
exports.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig = DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig;
function dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnets),
    };
}
exports.dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigToTerraform = dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigToTerraform;
class DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig extends cdktf.ComplexComputedList {
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
exports.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig = DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig;
function dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct.enableInterContainerTrafficEncryption),
        enable_network_isolation: cdktf.booleanToTerraform(struct.enableNetworkIsolation),
        vpc_config: dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigToTerraform(struct.vpcConfig),
    };
}
exports.dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigToTerraform = dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigToTerraform;
class DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition extends cdktf.ComplexComputedList {
    // max_runtime_in_seconds - computed: true, optional: false, required: false
    get maxRuntimeInSeconds() {
        return this.getNumberAttribute('max_runtime_in_seconds');
    }
}
exports.DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition = DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition;
function dataAwsccSagemakerModelBiasJobDefinitionStoppingConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_runtime_in_seconds: cdktf.numberToTerraform(struct.maxRuntimeInSeconds),
    };
}
exports.dataAwsccSagemakerModelBiasJobDefinitionStoppingConditionToTerraform = dataAwsccSagemakerModelBiasJobDefinitionStoppingConditionToTerraform;
class DataAwsccSagemakerModelBiasJobDefinitionTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccSagemakerModelBiasJobDefinitionTags = DataAwsccSagemakerModelBiasJobDefinitionTags;
function dataAwsccSagemakerModelBiasJobDefinitionTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccSagemakerModelBiasJobDefinitionTagsToTerraform = dataAwsccSagemakerModelBiasJobDefinitionTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_bias_job_definition.html awscc_sagemaker_model_bias_job_definition}
*/
class DataAwsccSagemakerModelBiasJobDefinition extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    // model_bias_app_specification - computed: true, optional: false, required: false
    get modelBiasAppSpecification() {
        return this.interpolationForAttribute('model_bias_app_specification');
    }
    // model_bias_baseline_config - computed: true, optional: false, required: false
    get modelBiasBaselineConfig() {
        return this.interpolationForAttribute('model_bias_baseline_config');
    }
    // model_bias_job_input - computed: true, optional: false, required: false
    get modelBiasJobInput() {
        return this.interpolationForAttribute('model_bias_job_input');
    }
    // model_bias_job_output_config - computed: true, optional: false, required: false
    get modelBiasJobOutputConfig() {
        return this.interpolationForAttribute('model_bias_job_output_config');
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
exports.DataAwsccSagemakerModelBiasJobDefinition = DataAwsccSagemakerModelBiasJobDefinition;
// =================
// STATIC PROPERTIES
// =================
DataAwsccSagemakerModelBiasJobDefinition.tfResourceType = "awscc_sagemaker_model_bias_job_definition";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1zYWdlbWFrZXItbW9kZWwtYmlhcy1qb2ItZGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtYXdzY2Mtc2FnZW1ha2VyLW1vZGVsLWJpYXMtam9iLWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJGQUEyRjtBQUMzRiwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFZL0IsTUFBYSxpRUFBa0UsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTlHLG9FQUFvRTtJQUNwRSxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsbUVBQW1FO0lBQ25FLElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsdUVBQXVFO0lBQ3ZFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUNGO0FBckJELDhJQXFCQztBQUVELFNBQWdCLDRFQUE0RSxDQUFDLE1BQTBFO0lBQ3JLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlELGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM1RCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMs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QyxDQUFDO0lBQ0osQ0FBQzs7QUFySEgsNEZBc0hDO0FBcEhDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csdURBQWMsR0FBVywyQ0FBMkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL3NhZ2VtYWtlcl9tb2RlbF9iaWFzX2pvYl9kZWZpbml0aW9uLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIHJlc291cmNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2Qvc2FnZW1ha2VyX21vZGVsX2JpYXNfam9iX2RlZmluaXRpb24uaHRtbCNpZCBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uI2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25Kb2JSZXNvdXJjZXNDbHVzdGVyQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaW5zdGFuY2VfY291bnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnN0YW5jZUNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW5zdGFuY2VfY291bnQnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV90eXBlJyk7XG4gIH1cblxuICAvLyB2b2x1bWVfa21zX2tleV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZvbHVtZUttc0tleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndm9sdW1lX2ttc19rZXlfaWQnKTtcbiAgfVxuXG4gIC8vIHZvbHVtZV9zaXplX2luX2diIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdm9sdW1lU2l6ZUluR2IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd2b2x1bWVfc2l6ZV9pbl9nYicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uSm9iUmVzb3VyY2VzQ2x1c3RlckNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25Kb2JSZXNvdXJjZXNDbHVzdGVyQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlQ291bnQpLFxuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICB2b2x1bWVfa21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVLbXNLZXlJZCksXG4gICAgdm9sdW1lX3NpemVfaW5fZ2I6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lU2l6ZUluR2IpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uSm9iUmVzb3VyY2VzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2x1c3Rlcl9jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbHVzdGVyQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NsdXN0ZXJfY29uZmlnJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uSm9iUmVzb3VyY2VzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvbkpvYlJlc291cmNlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjbHVzdGVyX2NvbmZpZzogZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvbkpvYlJlc291cmNlc0NsdXN0ZXJDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsdXN0ZXJDb25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uTW9kZWxCaWFzQXBwU3BlY2lmaWNhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbmZpZ191cmkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25maWdVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25maWdfdXJpJyk7XG4gIH1cblxuICAvLyBlbnZpcm9ubWVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVudmlyb25tZW50KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Vudmlyb25tZW50JykgYXMgYW55O1xuICB9XG5cbiAgLy8gaW1hZ2VfdXJpIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW1hZ2VVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbWFnZV91cmknKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvbk1vZGVsQmlhc0FwcFNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uTW9kZWxCaWFzQXBwU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb25maWdfdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpZ1VyaSksXG4gICAgZW52aXJvbm1lbnQ6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZW52aXJvbm1lbnQpLFxuICAgIGltYWdlX3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbWFnZVVyaSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25Nb2RlbEJpYXNCYXNlbGluZUNvbmZpZ0NvbnN0cmFpbnRzUmVzb3VyY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBzM191cmkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM1VyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX3VyaScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uTW9kZWxCaWFzQmFzZWxpbmVDb25maWdDb25zdHJhaW50c1Jlc291cmNlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvbk1vZGVsQmlhc0Jhc2VsaW5lQ29uZmlnQ29uc3RyYWludHNSZXNvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzM191cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNVcmkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uTW9kZWxCaWFzQmFzZWxpbmVDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBiYXNlbGluaW5nX2pvYl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYmFzZWxpbmluZ0pvYk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdiYXNlbGluaW5nX2pvYl9uYW1lJyk7XG4gIH1cblxuICAvLyBjb25zdHJhaW50c19yZXNvdXJjZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbnN0cmFpbnRzUmVzb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29uc3RyYWludHNfcmVzb3VyY2UnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25Nb2RlbEJpYXNCYXNlbGluZUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25Nb2RlbEJpYXNCYXNlbGluZUNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBiYXNlbGluaW5nX2pvYl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJhc2VsaW5pbmdKb2JOYW1lKSxcbiAgICBjb25zdHJhaW50c19yZXNvdXJjZTogZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvbk1vZGVsQmlhc0Jhc2VsaW5lQ29uZmlnQ29uc3RyYWludHNSZXNvdXJjZVRvVGVycmFmb3JtKHN0cnVjdCEuY29uc3RyYWludHNSZXNvdXJjZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25Nb2RlbEJpYXNKb2JJbnB1dEVuZHBvaW50SW5wdXQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmRfdGltZV9vZmZzZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRUaW1lT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5kX3RpbWVfb2Zmc2V0Jyk7XG4gIH1cblxuICAvLyBlbmRwb2ludF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5kcG9pbnRfbmFtZScpO1xuICB9XG5cbiAgLy8gZmVhdHVyZXNfYXR0cmlidXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmVhdHVyZXNBdHRyaWJ1dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmZWF0dXJlc19hdHRyaWJ1dGUnKTtcbiAgfVxuXG4gIC8vIGluZmVyZW5jZV9hdHRyaWJ1dGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmZlcmVuY2VBdHRyaWJ1dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbmZlcmVuY2VfYXR0cmlidXRlJyk7XG4gIH1cblxuICAvLyBsb2NhbF9wYXRoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9jYWxQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9jYWxfcGF0aCcpO1xuICB9XG5cbiAgLy8gcHJvYmFiaWxpdHlfYXR0cmlidXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvYmFiaWxpdHlBdHRyaWJ1dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm9iYWJpbGl0eV9hdHRyaWJ1dGUnKTtcbiAgfVxuXG4gIC8vIHByb2JhYmlsaXR5X3RocmVzaG9sZF9hdHRyaWJ1dGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9iYWJpbGl0eVRocmVzaG9sZEF0dHJpYnV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Byb2JhYmlsaXR5X3RocmVzaG9sZF9hdHRyaWJ1dGUnKTtcbiAgfVxuXG4gIC8vIHMzX2RhdGFfZGlzdHJpYnV0aW9uX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM0RhdGFEaXN0cmlidXRpb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfZGF0YV9kaXN0cmlidXRpb25fdHlwZScpO1xuICB9XG5cbiAgLy8gczNfaW5wdXRfbW9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzSW5wdXRNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfaW5wdXRfbW9kZScpO1xuICB9XG5cbiAgLy8gc3RhcnRfdGltZV9vZmZzZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGFydFRpbWVPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGFydF90aW1lX29mZnNldCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uTW9kZWxCaWFzSm9iSW5wdXRFbmRwb2ludElucHV0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvbk1vZGVsQmlhc0pvYklucHV0RW5kcG9pbnRJbnB1dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmRfdGltZV9vZmZzZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW5kVGltZU9mZnNldCksXG4gICAgZW5kcG9pbnRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbmRwb2ludE5hbWUpLFxuICAgIGZlYXR1cmVzX2F0dHJpYnV0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5mZWF0dXJlc0F0dHJpYnV0ZSksXG4gICAgaW5mZXJlbmNlX2F0dHJpYnV0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbmZlcmVuY2VBdHRyaWJ1dGUpLFxuICAgIGxvY2FsX3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9jYWxQYXRoKSxcbiAgICBwcm9iYWJpbGl0eV9hdHRyaWJ1dGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvYmFiaWxpdHlBdHRyaWJ1dGUpLFxuICAgIHByb2JhYmlsaXR5X3RocmVzaG9sZF9hdHRyaWJ1dGU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucHJvYmFiaWxpdHlUaHJlc2hvbGRBdHRyaWJ1dGUpLFxuICAgIHMzX2RhdGFfZGlzdHJpYnV0aW9uX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNEYXRhRGlzdHJpYnV0aW9uVHlwZSksXG4gICAgczNfaW5wdXRfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM0lucHV0TW9kZSksXG4gICAgc3RhcnRfdGltZV9vZmZzZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhcnRUaW1lT2Zmc2V0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvbk1vZGVsQmlhc0pvYklucHV0R3JvdW5kVHJ1dGhTM0lucHV0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gczNfdXJpIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM191cmknKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvbk1vZGVsQmlhc0pvYklucHV0R3JvdW5kVHJ1dGhTM0lucHV0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvbk1vZGVsQmlhc0pvYklucHV0R3JvdW5kVHJ1dGhTM0lucHV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHMzX3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM1VyaSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25Nb2RlbEJpYXNKb2JJbnB1dCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuZHBvaW50X2lucHV0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbmRwb2ludF9pbnB1dCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGdyb3VuZF90cnV0aF9zM19pbnB1dCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGdyb3VuZFRydXRoUzNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdncm91bmRfdHJ1dGhfczNfaW5wdXQnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25Nb2RlbEJpYXNKb2JJbnB1dFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25Nb2RlbEJpYXNKb2JJbnB1dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmRwb2ludF9pbnB1dDogZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvbk1vZGVsQmlhc0pvYklucHV0RW5kcG9pbnRJbnB1dFRvVGVycmFmb3JtKHN0cnVjdCEuZW5kcG9pbnRJbnB1dCksXG4gICAgZ3JvdW5kX3RydXRoX3MzX2lucHV0OiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uTW9kZWxCaWFzSm9iSW5wdXRHcm91bmRUcnV0aFMzSW5wdXRUb1RlcnJhZm9ybShzdHJ1Y3QhLmdyb3VuZFRydXRoUzNJbnB1dCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25Nb2RlbEJpYXNKb2JPdXRwdXRDb25maWdNb25pdG9yaW5nT3V0cHV0c1MzT3V0cHV0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbG9jYWxfcGF0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvY2FsUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvY2FsX3BhdGgnKTtcbiAgfVxuXG4gIC8vIHMzX3VwbG9hZF9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNVcGxvYWRNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfdXBsb2FkX21vZGUnKTtcbiAgfVxuXG4gIC8vIHMzX3VyaSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzVXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfdXJpJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25Nb2RlbEJpYXNKb2JPdXRwdXRDb25maWdNb25pdG9yaW5nT3V0cHV0c1MzT3V0cHV0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvbk1vZGVsQmlhc0pvYk91dHB1dENvbmZpZ01vbml0b3JpbmdPdXRwdXRzUzNPdXRwdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbG9jYWxfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2NhbFBhdGgpLFxuICAgIHMzX3VwbG9hZF9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzVXBsb2FkTW9kZSksXG4gICAgczNfdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzVXJpKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvbk1vZGVsQmlhc0pvYk91dHB1dENvbmZpZ01vbml0b3JpbmdPdXRwdXRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gczNfb3V0cHV0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNPdXRwdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnczNfb3V0cHV0JykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uTW9kZWxCaWFzSm9iT3V0cHV0Q29uZmlnTW9uaXRvcmluZ091dHB1dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uTW9kZWxCaWFzSm9iT3V0cHV0Q29uZmlnTW9uaXRvcmluZ091dHB1dHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgczNfb3V0cHV0OiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uTW9kZWxCaWFzSm9iT3V0cHV0Q29uZmlnTW9uaXRvcmluZ091dHB1dHNTM091dHB1dFRvVGVycmFmb3JtKHN0cnVjdCEuczNPdXRwdXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uTW9kZWxCaWFzSm9iT3V0cHV0Q29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga21zX2tleV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGttc0tleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleV9pZCcpO1xuICB9XG5cbiAgLy8gbW9uaXRvcmluZ19vdXRwdXRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbW9uaXRvcmluZ091dHB1dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbW9uaXRvcmluZ19vdXRwdXRzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uTW9kZWxCaWFzSm9iT3V0cHV0Q29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvbk1vZGVsQmlhc0pvYk91dHB1dENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUlkKSxcbiAgICBtb25pdG9yaW5nX291dHB1dHM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvbk1vZGVsQmlhc0pvYk91dHB1dENvbmZpZ01vbml0b3JpbmdPdXRwdXRzVG9UZXJyYWZvcm0pKHN0cnVjdCEubW9uaXRvcmluZ091dHB1dHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uTmV0d29ya0NvbmZpZ1ZwY0NvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHNlY3VyaXR5X2dyb3VwX2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc2VjdXJpdHlfZ3JvdXBfaWRzJyk7XG4gIH1cblxuICAvLyBzdWJuZXRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VibmV0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdWJuZXRzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25OZXR3b3JrQ29uZmlnVnBjQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvbk5ldHdvcmtDb25maWdWcGNDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2VjdXJpdHlfZ3JvdXBfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBJZHMpLFxuICAgIHN1Ym5ldHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3VibmV0cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25OZXR3b3JrQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlX2ludGVyX2NvbnRhaW5lcl90cmFmZmljX2VuY3J5cHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVJbnRlckNvbnRhaW5lclRyYWZmaWNFbmNyeXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9pbnRlcl9jb250YWluZXJfdHJhZmZpY19lbmNyeXB0aW9uJyk7XG4gIH1cblxuICAvLyBlbmFibGVfbmV0d29ya19pc29sYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVOZXR3b3JrSXNvbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9uZXR3b3JrX2lzb2xhdGlvbicpO1xuICB9XG5cbiAgLy8gdnBjX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZwY0NvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2cGNfY29uZmlnJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uTmV0d29ya0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25OZXR3b3JrQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZV9pbnRlcl9jb250YWluZXJfdHJhZmZpY19lbmNyeXB0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVJbnRlckNvbnRhaW5lclRyYWZmaWNFbmNyeXB0aW9uKSxcbiAgICBlbmFibGVfbmV0d29ya19pc29sYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZU5ldHdvcmtJc29sYXRpb24pLFxuICAgIHZwY19jb25maWc6IGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25OZXR3b3JrQ29uZmlnVnBjQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS52cGNDb25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uU3RvcHBpbmdDb25kaXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBtYXhfcnVudGltZV9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4UnVudGltZUluU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9ydW50aW1lX2luX3NlY29uZHMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvblN0b3BwaW5nQ29uZGl0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvblN0b3BwaW5nQ29uZGl0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1heF9ydW50aW1lX2luX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4UnVudGltZUluU2Vjb25kcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25UYWdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxCaWFzSm9iRGVmaW5pdGlvblRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9zYWdlbWFrZXJfbW9kZWxfYmlhc19qb2JfZGVmaW5pdGlvbi5odG1sIGF3c2NjX3NhZ2VtYWtlcl9tb2RlbF9iaWFzX2pvYl9kZWZpbml0aW9ufVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19zYWdlbWFrZXJfbW9kZWxfYmlhc19qb2JfZGVmaW5pdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9zYWdlbWFrZXJfbW9kZWxfYmlhc19qb2JfZGVmaW5pdGlvbi5odG1sIGF3c2NjX3NhZ2VtYWtlcl9tb2RlbF9iaWFzX2pvYl9kZWZpbml0aW9ufSBEYXRhIFNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEJpYXNKb2JEZWZpbml0aW9uQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsQmlhc0pvYkRlZmluaXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX3NhZ2VtYWtlcl9tb2RlbF9iaWFzX2pvYl9kZWZpbml0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNyZWF0aW9uX3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmVhdGlvblRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGlvbl90aW1lJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZFxuICB9XG5cbiAgLy8gam9iX2RlZmluaXRpb25fYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgam9iRGVmaW5pdGlvbkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2pvYl9kZWZpbml0aW9uX2FybicpO1xuICB9XG5cbiAgLy8gam9iX2RlZmluaXRpb25fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGpvYkRlZmluaXRpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnam9iX2RlZmluaXRpb25fbmFtZScpO1xuICB9XG5cbiAgLy8gam9iX3Jlc291cmNlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGpvYlJlc291cmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdqb2JfcmVzb3VyY2VzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbW9kZWxfYmlhc19hcHBfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1vZGVsQmlhc0FwcFNwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbW9kZWxfYmlhc19hcHBfc3BlY2lmaWNhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG1vZGVsX2JpYXNfYmFzZWxpbmVfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbW9kZWxCaWFzQmFzZWxpbmVDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbW9kZWxfYmlhc19iYXNlbGluZV9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBtb2RlbF9iaWFzX2pvYl9pbnB1dCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1vZGVsQmlhc0pvYklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21vZGVsX2JpYXNfam9iX2lucHV0JykgYXMgYW55O1xuICB9XG5cbiAgLy8gbW9kZWxfYmlhc19qb2Jfb3V0cHV0X2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1vZGVsQmlhc0pvYk91dHB1dENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtb2RlbF9iaWFzX2pvYl9vdXRwdXRfY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbmV0d29ya19jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuZXR3b3JrQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ25ldHdvcmtfY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxuXG4gIC8vIHN0b3BwaW5nX2NvbmRpdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0b3BwaW5nQ29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N0b3BwaW5nX2NvbmRpdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxufVxuIl19