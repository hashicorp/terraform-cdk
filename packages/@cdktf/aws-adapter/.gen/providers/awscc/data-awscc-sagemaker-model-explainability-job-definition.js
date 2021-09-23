"use strict";
// https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_explainability_job_definition.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccSagemakerModelExplainabilityJobDefinition = exports.dataAwsccSagemakerModelExplainabilityJobDefinitionTagsToTerraform = exports.DataAwsccSagemakerModelExplainabilityJobDefinitionTags = exports.dataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionToTerraform = exports.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition = exports.dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigToTerraform = exports.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig = exports.dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigToTerraform = exports.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig = exports.dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigToTerraform = exports.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig = exports.dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsToTerraform = exports.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs = exports.dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputToTerraform = exports.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output = exports.dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputToTerraform = exports.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput = exports.dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputToTerraform = exports.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput = exports.dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigToTerraform = exports.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig = exports.dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceToTerraform = exports.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource = exports.dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationToTerraform = exports.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification = exports.dataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesToTerraform = exports.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources = exports.dataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigToTerraform = exports.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig = void 0;
const cdktf = require("cdktf");
class DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig extends cdktf.ComplexComputedList {
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
exports.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig = DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig;
function dataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigToTerraform(struct) {
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
exports.dataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigToTerraform = dataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigToTerraform;
class DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources extends cdktf.ComplexComputedList {
    // cluster_config - computed: true, optional: false, required: false
    get clusterConfig() {
        return this.interpolationForAttribute('cluster_config');
    }
}
exports.DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources = DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources;
function dataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cluster_config: dataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigToTerraform(struct.clusterConfig),
    };
}
exports.dataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesToTerraform = dataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesToTerraform;
class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification extends cdktf.ComplexComputedList {
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
exports.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification = DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification;
function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        config_uri: cdktf.stringToTerraform(struct.configUri),
        environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct.environment),
        image_uri: cdktf.stringToTerraform(struct.imageUri),
    };
}
exports.dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationToTerraform = dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationToTerraform;
class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource extends cdktf.ComplexComputedList {
    // s3_uri - computed: true, optional: false, required: false
    get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
}
exports.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource = DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource;
function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_uri: cdktf.stringToTerraform(struct.s3Uri),
    };
}
exports.dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceToTerraform = dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceToTerraform;
class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig extends cdktf.ComplexComputedList {
    // baselining_job_name - computed: true, optional: false, required: false
    get baseliningJobName() {
        return this.getStringAttribute('baselining_job_name');
    }
    // constraints_resource - computed: true, optional: false, required: false
    get constraintsResource() {
        return this.interpolationForAttribute('constraints_resource');
    }
}
exports.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig = DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig;
function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        baselining_job_name: cdktf.stringToTerraform(struct.baseliningJobName),
        constraints_resource: dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceToTerraform(struct.constraintsResource),
    };
}
exports.dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigToTerraform = dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigToTerraform;
class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput extends cdktf.ComplexComputedList {
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
    // s3_data_distribution_type - computed: true, optional: false, required: false
    get s3DataDistributionType() {
        return this.getStringAttribute('s3_data_distribution_type');
    }
    // s3_input_mode - computed: true, optional: false, required: false
    get s3InputMode() {
        return this.getStringAttribute('s3_input_mode');
    }
}
exports.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput = DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput;
function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint_name: cdktf.stringToTerraform(struct.endpointName),
        features_attribute: cdktf.stringToTerraform(struct.featuresAttribute),
        inference_attribute: cdktf.stringToTerraform(struct.inferenceAttribute),
        local_path: cdktf.stringToTerraform(struct.localPath),
        probability_attribute: cdktf.stringToTerraform(struct.probabilityAttribute),
        s3_data_distribution_type: cdktf.stringToTerraform(struct.s3DataDistributionType),
        s3_input_mode: cdktf.stringToTerraform(struct.s3InputMode),
    };
}
exports.dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputToTerraform = dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputToTerraform;
class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput extends cdktf.ComplexComputedList {
    // endpoint_input - computed: true, optional: false, required: false
    get endpointInput() {
        return this.interpolationForAttribute('endpoint_input');
    }
}
exports.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput = DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput;
function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint_input: dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputToTerraform(struct.endpointInput),
    };
}
exports.dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputToTerraform = dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputToTerraform;
class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output extends cdktf.ComplexComputedList {
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
exports.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output = DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output;
function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        local_path: cdktf.stringToTerraform(struct.localPath),
        s3_upload_mode: cdktf.stringToTerraform(struct.s3UploadMode),
        s3_uri: cdktf.stringToTerraform(struct.s3Uri),
    };
}
exports.dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputToTerraform = dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputToTerraform;
class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs extends cdktf.ComplexComputedList {
    // s3_output - computed: true, optional: false, required: false
    get s3Output() {
        return this.interpolationForAttribute('s3_output');
    }
}
exports.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs = DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs;
function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_output: dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct.s3Output),
    };
}
exports.dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsToTerraform = dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsToTerraform;
class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig extends cdktf.ComplexComputedList {
    // kms_key_id - computed: true, optional: false, required: false
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    // monitoring_outputs - computed: true, optional: false, required: false
    get monitoringOutputs() {
        return this.interpolationForAttribute('monitoring_outputs');
    }
}
exports.DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig = DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig;
function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        monitoring_outputs: cdktf.listMapper(dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsToTerraform)(struct.monitoringOutputs),
    };
}
exports.dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigToTerraform = dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigToTerraform;
class DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig extends cdktf.ComplexComputedList {
    // security_group_ids - computed: true, optional: false, required: false
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    // subnets - computed: true, optional: false, required: false
    get subnets() {
        return this.getListAttribute('subnets');
    }
}
exports.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig = DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig;
function dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnets),
    };
}
exports.dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigToTerraform = dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigToTerraform;
class DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig extends cdktf.ComplexComputedList {
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
exports.DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig = DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig;
function dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct.enableInterContainerTrafficEncryption),
        enable_network_isolation: cdktf.booleanToTerraform(struct.enableNetworkIsolation),
        vpc_config: dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigToTerraform(struct.vpcConfig),
    };
}
exports.dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigToTerraform = dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigToTerraform;
class DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition extends cdktf.ComplexComputedList {
    // max_runtime_in_seconds - computed: true, optional: false, required: false
    get maxRuntimeInSeconds() {
        return this.getNumberAttribute('max_runtime_in_seconds');
    }
}
exports.DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition = DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition;
function dataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_runtime_in_seconds: cdktf.numberToTerraform(struct.maxRuntimeInSeconds),
    };
}
exports.dataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionToTerraform = dataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionToTerraform;
class DataAwsccSagemakerModelExplainabilityJobDefinitionTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccSagemakerModelExplainabilityJobDefinitionTags = DataAwsccSagemakerModelExplainabilityJobDefinitionTags;
function dataAwsccSagemakerModelExplainabilityJobDefinitionTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccSagemakerModelExplainabilityJobDefinitionTagsToTerraform = dataAwsccSagemakerModelExplainabilityJobDefinitionTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_explainability_job_definition.html awscc_sagemaker_model_explainability_job_definition}
*/
class DataAwsccSagemakerModelExplainabilityJobDefinition extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_explainability_job_definition.html awscc_sagemaker_model_explainability_job_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerModelExplainabilityJobDefinitionConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_model_explainability_job_definition',
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
    // model_explainability_app_specification - computed: true, optional: false, required: false
    get modelExplainabilityAppSpecification() {
        return this.interpolationForAttribute('model_explainability_app_specification');
    }
    // model_explainability_baseline_config - computed: true, optional: false, required: false
    get modelExplainabilityBaselineConfig() {
        return this.interpolationForAttribute('model_explainability_baseline_config');
    }
    // model_explainability_job_input - computed: true, optional: false, required: false
    get modelExplainabilityJobInput() {
        return this.interpolationForAttribute('model_explainability_job_input');
    }
    // model_explainability_job_output_config - computed: true, optional: false, required: false
    get modelExplainabilityJobOutputConfig() {
        return this.interpolationForAttribute('model_explainability_job_output_config');
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
exports.DataAwsccSagemakerModelExplainabilityJobDefinition = DataAwsccSagemakerModelExplainabilityJobDefinition;
// =================
// STATIC PROPERTIES
// =================
DataAwsccSagemakerModelExplainabilityJobDefinition.tfResourceType = "awscc_sagemaker_model_explainability_job_definition";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1zYWdlbWFrZXItbW9kZWwtZXhwbGFpbmFiaWxpdHktam9iLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLWF3c2NjLXNhZ2VtYWtlci1tb2RlbC1leHBsYWluYWJpbGl0eS1qb2ItZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUdBQXFHO0FBQ3JHLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQVkvQixNQUFhLDJFQUE0RSxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFeEgsb0VBQW9FO0lBQ3BFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELHVFQUF1RTtJQUN2RSxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0Y7QUFyQkQsa0tBcUJDO0FBRUQsU0FBZ0Isc0ZBQXNGLENBQUMsTUFBb0Y7SUFDekwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDOUQsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzVELGlCQUFpQixFQUFFLEtB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QXJISCxnSEFzSEM7QUFwSEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxpRUFBYyxHQUFXLHFEQUFxRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2Qvc2FnZW1ha2VyX21vZGVsX2V4cGxhaW5hYmlsaXR5X2pvYl9kZWZpbml0aW9uLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEV4cGxhaW5hYmlsaXR5Sm9iRGVmaW5pdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBVbmlxdWVseSBpZGVudGlmaWVzIHRoZSByZXNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL3NhZ2VtYWtlcl9tb2RlbF9leHBsYWluYWJpbGl0eV9qb2JfZGVmaW5pdGlvbi5odG1sI2lkIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uI2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uSm9iUmVzb3VyY2VzQ2x1c3RlckNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGluc3RhbmNlX2NvdW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2luc3RhbmNlX2NvdW50Jyk7XG4gIH1cblxuICAvLyBpbnN0YW5jZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdHlwZScpO1xuICB9XG5cbiAgLy8gdm9sdW1lX2ttc19rZXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2b2x1bWVLbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZvbHVtZV9rbXNfa2V5X2lkJyk7XG4gIH1cblxuICAvLyB2b2x1bWVfc2l6ZV9pbl9nYiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZvbHVtZVNpemVJbkdiKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndm9sdW1lX3NpemVfaW5fZ2InKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25Kb2JSZXNvdXJjZXNDbHVzdGVyQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25Kb2JSZXNvdXJjZXNDbHVzdGVyQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlQ291bnQpLFxuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICB2b2x1bWVfa21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVLbXNLZXlJZCksXG4gICAgdm9sdW1lX3NpemVfaW5fZ2I6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lU2l6ZUluR2IpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEV4cGxhaW5hYmlsaXR5Sm9iRGVmaW5pdGlvbkpvYlJlc291cmNlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNsdXN0ZXJfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2x1c3RlckNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjbHVzdGVyX2NvbmZpZycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25Kb2JSZXNvdXJjZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEV4cGxhaW5hYmlsaXR5Sm9iRGVmaW5pdGlvbkpvYlJlc291cmNlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjbHVzdGVyX2NvbmZpZzogZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25Kb2JSZXNvdXJjZXNDbHVzdGVyQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5jbHVzdGVyQ29uZmlnKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25Nb2RlbEV4cGxhaW5hYmlsaXR5QXBwU3BlY2lmaWNhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbmZpZ191cmkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25maWdVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25maWdfdXJpJyk7XG4gIH1cblxuICAvLyBlbnZpcm9ubWVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVudmlyb25tZW50KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Vudmlyb25tZW50JykgYXMgYW55O1xuICB9XG5cbiAgLy8gaW1hZ2VfdXJpIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW1hZ2VVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbWFnZV91cmknKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25Nb2RlbEV4cGxhaW5hYmlsaXR5QXBwU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uTW9kZWxFeHBsYWluYWJpbGl0eUFwcFNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29uZmlnX3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb25maWdVcmkpLFxuICAgIGVudmlyb25tZW50OiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmVudmlyb25tZW50KSxcbiAgICBpbWFnZV91cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VVcmkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEV4cGxhaW5hYmlsaXR5Sm9iRGVmaW5pdGlvbk1vZGVsRXhwbGFpbmFiaWxpdHlCYXNlbGluZUNvbmZpZ0NvbnN0cmFpbnRzUmVzb3VyY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBzM191cmkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM1VyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX3VyaScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEV4cGxhaW5hYmlsaXR5Sm9iRGVmaW5pdGlvbk1vZGVsRXhwbGFpbmFiaWxpdHlCYXNlbGluZUNvbmZpZ0NvbnN0cmFpbnRzUmVzb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEV4cGxhaW5hYmlsaXR5Sm9iRGVmaW5pdGlvbk1vZGVsRXhwbGFpbmFiaWxpdHlCYXNlbGluZUNvbmZpZ0NvbnN0cmFpbnRzUmVzb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgczNfdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzVXJpKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25Nb2RlbEV4cGxhaW5hYmlsaXR5QmFzZWxpbmVDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBiYXNlbGluaW5nX2pvYl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYmFzZWxpbmluZ0pvYk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdiYXNlbGluaW5nX2pvYl9uYW1lJyk7XG4gIH1cblxuICAvLyBjb25zdHJhaW50c19yZXNvdXJjZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbnN0cmFpbnRzUmVzb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29uc3RyYWludHNfcmVzb3VyY2UnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uTW9kZWxFeHBsYWluYWJpbGl0eUJhc2VsaW5lQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25Nb2RlbEV4cGxhaW5hYmlsaXR5QmFzZWxpbmVDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYmFzZWxpbmluZ19qb2JfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5iYXNlbGluaW5nSm9iTmFtZSksXG4gICAgY29uc3RyYWludHNfcmVzb3VyY2U6IGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uTW9kZWxFeHBsYWluYWJpbGl0eUJhc2VsaW5lQ29uZmlnQ29uc3RyYWludHNSZXNvdXJjZVRvVGVycmFmb3JtKHN0cnVjdCEuY29uc3RyYWludHNSZXNvdXJjZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uTW9kZWxFeHBsYWluYWJpbGl0eUpvYklucHV0RW5kcG9pbnRJbnB1dCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuZHBvaW50X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRwb2ludE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmRwb2ludF9uYW1lJyk7XG4gIH1cblxuICAvLyBmZWF0dXJlc19hdHRyaWJ1dGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmZWF0dXJlc0F0dHJpYnV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZlYXR1cmVzX2F0dHJpYnV0ZScpO1xuICB9XG5cbiAgLy8gaW5mZXJlbmNlX2F0dHJpYnV0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluZmVyZW5jZUF0dHJpYnV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luZmVyZW5jZV9hdHRyaWJ1dGUnKTtcbiAgfVxuXG4gIC8vIGxvY2FsX3BhdGggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2NhbFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2NhbF9wYXRoJyk7XG4gIH1cblxuICAvLyBwcm9iYWJpbGl0eV9hdHRyaWJ1dGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9iYWJpbGl0eUF0dHJpYnV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb2JhYmlsaXR5X2F0dHJpYnV0ZScpO1xuICB9XG5cbiAgLy8gczNfZGF0YV9kaXN0cmlidXRpb25fdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzRGF0YURpc3RyaWJ1dGlvblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM19kYXRhX2Rpc3RyaWJ1dGlvbl90eXBlJyk7XG4gIH1cblxuICAvLyBzM19pbnB1dF9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNJbnB1dE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM19pbnB1dF9tb2RlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uTW9kZWxFeHBsYWluYWJpbGl0eUpvYklucHV0RW5kcG9pbnRJbnB1dFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uTW9kZWxFeHBsYWluYWJpbGl0eUpvYklucHV0RW5kcG9pbnRJbnB1dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmRwb2ludF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVuZHBvaW50TmFtZSksXG4gICAgZmVhdHVyZXNfYXR0cmlidXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZlYXR1cmVzQXR0cmlidXRlKSxcbiAgICBpbmZlcmVuY2VfYXR0cmlidXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluZmVyZW5jZUF0dHJpYnV0ZSksXG4gICAgbG9jYWxfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2NhbFBhdGgpLFxuICAgIHByb2JhYmlsaXR5X2F0dHJpYnV0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9iYWJpbGl0eUF0dHJpYnV0ZSksXG4gICAgczNfZGF0YV9kaXN0cmlidXRpb25fdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM0RhdGFEaXN0cmlidXRpb25UeXBlKSxcbiAgICBzM19pbnB1dF9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzSW5wdXRNb2RlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25Nb2RlbEV4cGxhaW5hYmlsaXR5Sm9iSW5wdXQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmRwb2ludF9pbnB1dCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuZHBvaW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZW5kcG9pbnRfaW5wdXQnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uTW9kZWxFeHBsYWluYWJpbGl0eUpvYklucHV0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25Nb2RlbEV4cGxhaW5hYmlsaXR5Sm9iSW5wdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5kcG9pbnRfaW5wdXQ6IGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uTW9kZWxFeHBsYWluYWJpbGl0eUpvYklucHV0RW5kcG9pbnRJbnB1dFRvVGVycmFmb3JtKHN0cnVjdCEuZW5kcG9pbnRJbnB1dCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uTW9kZWxFeHBsYWluYWJpbGl0eUpvYk91dHB1dENvbmZpZ01vbml0b3JpbmdPdXRwdXRzUzNPdXRwdXQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBsb2NhbF9wYXRoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9jYWxQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9jYWxfcGF0aCcpO1xuICB9XG5cbiAgLy8gczNfdXBsb2FkX21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM1VwbG9hZE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM191cGxvYWRfbW9kZScpO1xuICB9XG5cbiAgLy8gczNfdXJpIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM191cmknKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25Nb2RlbEV4cGxhaW5hYmlsaXR5Sm9iT3V0cHV0Q29uZmlnTW9uaXRvcmluZ091dHB1dHNTM091dHB1dFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uTW9kZWxFeHBsYWluYWJpbGl0eUpvYk91dHB1dENvbmZpZ01vbml0b3JpbmdPdXRwdXRzUzNPdXRwdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbG9jYWxfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2NhbFBhdGgpLFxuICAgIHMzX3VwbG9hZF9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzVXBsb2FkTW9kZSksXG4gICAgczNfdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzVXJpKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25Nb2RlbEV4cGxhaW5hYmlsaXR5Sm9iT3V0cHV0Q29uZmlnTW9uaXRvcmluZ091dHB1dHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBzM19vdXRwdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM091dHB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzM19vdXRwdXQnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uTW9kZWxFeHBsYWluYWJpbGl0eUpvYk91dHB1dENvbmZpZ01vbml0b3JpbmdPdXRwdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25Nb2RlbEV4cGxhaW5hYmlsaXR5Sm9iT3V0cHV0Q29uZmlnTW9uaXRvcmluZ091dHB1dHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgczNfb3V0cHV0OiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEV4cGxhaW5hYmlsaXR5Sm9iRGVmaW5pdGlvbk1vZGVsRXhwbGFpbmFiaWxpdHlKb2JPdXRwdXRDb25maWdNb25pdG9yaW5nT3V0cHV0c1MzT3V0cHV0VG9UZXJyYWZvcm0oc3RydWN0IS5zM091dHB1dCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uTW9kZWxFeHBsYWluYWJpbGl0eUpvYk91dHB1dENvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGttc19rZXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfaWQnKTtcbiAgfVxuXG4gIC8vIG1vbml0b3Jpbmdfb3V0cHV0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1vbml0b3JpbmdPdXRwdXRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21vbml0b3Jpbmdfb3V0cHV0cycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25Nb2RlbEV4cGxhaW5hYmlsaXR5Sm9iT3V0cHV0Q29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25Nb2RlbEV4cGxhaW5hYmlsaXR5Sm9iT3V0cHV0Q29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgIG1vbml0b3Jpbmdfb3V0cHV0czogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEV4cGxhaW5hYmlsaXR5Sm9iRGVmaW5pdGlvbk1vZGVsRXhwbGFpbmFiaWxpdHlKb2JPdXRwdXRDb25maWdNb25pdG9yaW5nT3V0cHV0c1RvVGVycmFmb3JtKShzdHJ1Y3QhLm1vbml0b3JpbmdPdXRwdXRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25OZXR3b3JrQ29uZmlnVnBjQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9pZHMnKTtcbiAgfVxuXG4gIC8vIHN1Ym5ldHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdWJuZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1Ym5ldHMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25OZXR3b3JrQ29uZmlnVnBjQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25OZXR3b3JrQ29uZmlnVnBjQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zZWN1cml0eUdyb3VwSWRzKSxcbiAgICBzdWJuZXRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN1Ym5ldHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEV4cGxhaW5hYmlsaXR5Sm9iRGVmaW5pdGlvbk5ldHdvcmtDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmFibGVfaW50ZXJfY29udGFpbmVyX3RyYWZmaWNfZW5jcnlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZUludGVyQ29udGFpbmVyVHJhZmZpY0VuY3J5cHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX2ludGVyX2NvbnRhaW5lcl90cmFmZmljX2VuY3J5cHRpb24nKTtcbiAgfVxuXG4gIC8vIGVuYWJsZV9uZXR3b3JrX2lzb2xhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZU5ldHdvcmtJc29sYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX25ldHdvcmtfaXNvbGF0aW9uJyk7XG4gIH1cblxuICAvLyB2cGNfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdnBjQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZwY19jb25maWcnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uTmV0d29ya0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uTmV0d29ya0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVfaW50ZXJfY29udGFpbmVyX3RyYWZmaWNfZW5jcnlwdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlSW50ZXJDb250YWluZXJUcmFmZmljRW5jcnlwdGlvbiksXG4gICAgZW5hYmxlX25ldHdvcmtfaXNvbGF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVOZXR3b3JrSXNvbGF0aW9uKSxcbiAgICB2cGNfY29uZmlnOiBkYXRhQXdzY2NTYWdlbWFrZXJNb2RlbEV4cGxhaW5hYmlsaXR5Sm9iRGVmaW5pdGlvbk5ldHdvcmtDb25maWdWcGNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZwY0NvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uU3RvcHBpbmdDb25kaXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBtYXhfcnVudGltZV9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4UnVudGltZUluU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9ydW50aW1lX2luX3NlY29uZHMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25TdG9wcGluZ0NvbmRpdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uU3RvcHBpbmdDb25kaXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWF4X3J1bnRpbWVfaW5fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhSdW50aW1lSW5TZWNvbmRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25UYWdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25UYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb25UYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL3NhZ2VtYWtlcl9tb2RlbF9leHBsYWluYWJpbGl0eV9qb2JfZGVmaW5pdGlvbi5odG1sIGF3c2NjX3NhZ2VtYWtlcl9tb2RlbF9leHBsYWluYWJpbGl0eV9qb2JfZGVmaW5pdGlvbn1cbiovXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9kZWxFeHBsYWluYWJpbGl0eUpvYkRlZmluaXRpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX3NhZ2VtYWtlcl9tb2RlbF9leHBsYWluYWJpbGl0eV9qb2JfZGVmaW5pdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9zYWdlbWFrZXJfbW9kZWxfZXhwbGFpbmFiaWxpdHlfam9iX2RlZmluaXRpb24uaHRtbCBhd3NjY19zYWdlbWFrZXJfbW9kZWxfZXhwbGFpbmFiaWxpdHlfam9iX2RlZmluaXRpb259IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NjY1NhZ2VtYWtlck1vZGVsRXhwbGFpbmFiaWxpdHlKb2JEZWZpbml0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19zYWdlbWFrZXJfbW9kZWxfZXhwbGFpbmFiaWxpdHlfam9iX2RlZmluaXRpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gY3JlYXRpb25fdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0aW9uVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0aW9uX3RpbWUnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBqb2JfZGVmaW5pdGlvbl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBqb2JEZWZpbml0aW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnam9iX2RlZmluaXRpb25fYXJuJyk7XG4gIH1cblxuICAvLyBqb2JfZGVmaW5pdGlvbl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgam9iRGVmaW5pdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdqb2JfZGVmaW5pdGlvbl9uYW1lJyk7XG4gIH1cblxuICAvLyBqb2JfcmVzb3VyY2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgam9iUmVzb3VyY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2pvYl9yZXNvdXJjZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBtb2RlbF9leHBsYWluYWJpbGl0eV9hcHBfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1vZGVsRXhwbGFpbmFiaWxpdHlBcHBTcGVjaWZpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21vZGVsX2V4cGxhaW5hYmlsaXR5X2FwcF9zcGVjaWZpY2F0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbW9kZWxfZXhwbGFpbmFiaWxpdHlfYmFzZWxpbmVfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbW9kZWxFeHBsYWluYWJpbGl0eUJhc2VsaW5lQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21vZGVsX2V4cGxhaW5hYmlsaXR5X2Jhc2VsaW5lX2NvbmZpZycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG1vZGVsX2V4cGxhaW5hYmlsaXR5X2pvYl9pbnB1dCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1vZGVsRXhwbGFpbmFiaWxpdHlKb2JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtb2RlbF9leHBsYWluYWJpbGl0eV9qb2JfaW5wdXQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBtb2RlbF9leHBsYWluYWJpbGl0eV9qb2Jfb3V0cHV0X2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1vZGVsRXhwbGFpbmFiaWxpdHlKb2JPdXRwdXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbW9kZWxfZXhwbGFpbmFiaWxpdHlfam9iX291dHB1dF9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBuZXR3b3JrX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5ldHdvcmtDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbmV0d29ya19jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gc3RvcHBpbmdfY29uZGl0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RvcHBpbmdDb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RvcHBpbmdfY29uZGl0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=