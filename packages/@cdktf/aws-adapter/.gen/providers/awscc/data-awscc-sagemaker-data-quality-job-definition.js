"use strict";
// https://www.terraform.io/docs/providers/awscc/d/sagemaker_data_quality_job_definition.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccSagemakerDataQualityJobDefinition = exports.dataAwsccSagemakerDataQualityJobDefinitionTagsToTerraform = exports.DataAwsccSagemakerDataQualityJobDefinitionTags = exports.dataAwsccSagemakerDataQualityJobDefinitionStoppingConditionToTerraform = exports.DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition = exports.dataAwsccSagemakerDataQualityJobDefinitionNetworkConfigToTerraform = exports.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig = exports.dataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigToTerraform = exports.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig = exports.dataAwsccSagemakerDataQualityJobDefinitionJobResourcesToTerraform = exports.DataAwsccSagemakerDataQualityJobDefinitionJobResources = exports.dataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigToTerraform = exports.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig = exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigToTerraform = exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig = exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsToTerraform = exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs = exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform = exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output = exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputToTerraform = exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput = exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputToTerraform = exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput = exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigToTerraform = exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig = exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceToTerraform = exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource = exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceToTerraform = exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource = exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationToTerraform = exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification = void 0;
const cdktf = require("cdktf");
class DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification extends cdktf.ComplexComputedList {
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
    // record_preprocessor_source_uri - computed: true, optional: false, required: false
    get recordPreprocessorSourceUri() {
        return this.getStringAttribute('record_preprocessor_source_uri');
    }
}
exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification = DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification;
function dataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_arguments: cdktf.listMapper(cdktf.stringToTerraform)(struct.containerArguments),
        container_entrypoint: cdktf.listMapper(cdktf.stringToTerraform)(struct.containerEntrypoint),
        environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct.environment),
        image_uri: cdktf.stringToTerraform(struct.imageUri),
        post_analytics_processor_source_uri: cdktf.stringToTerraform(struct.postAnalyticsProcessorSourceUri),
        record_preprocessor_source_uri: cdktf.stringToTerraform(struct.recordPreprocessorSourceUri),
    };
}
exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationToTerraform = dataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationToTerraform;
class DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource extends cdktf.ComplexComputedList {
    // s3_uri - computed: true, optional: false, required: false
    get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
}
exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource = DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource;
function dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_uri: cdktf.stringToTerraform(struct.s3Uri),
    };
}
exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceToTerraform = dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceToTerraform;
class DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource extends cdktf.ComplexComputedList {
    // s3_uri - computed: true, optional: false, required: false
    get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
}
exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource = DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource;
function dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_uri: cdktf.stringToTerraform(struct.s3Uri),
    };
}
exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceToTerraform = dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceToTerraform;
class DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig extends cdktf.ComplexComputedList {
    // baselining_job_name - computed: true, optional: false, required: false
    get baseliningJobName() {
        return this.getStringAttribute('baselining_job_name');
    }
    // constraints_resource - computed: true, optional: false, required: false
    get constraintsResource() {
        return this.interpolationForAttribute('constraints_resource');
    }
    // statistics_resource - computed: true, optional: false, required: false
    get statisticsResource() {
        return this.interpolationForAttribute('statistics_resource');
    }
}
exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig = DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig;
function dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        baselining_job_name: cdktf.stringToTerraform(struct.baseliningJobName),
        constraints_resource: dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceToTerraform(struct.constraintsResource),
        statistics_resource: dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceToTerraform(struct.statisticsResource),
    };
}
exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigToTerraform = dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigToTerraform;
class DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput extends cdktf.ComplexComputedList {
    // endpoint_name - computed: true, optional: false, required: false
    get endpointName() {
        return this.getStringAttribute('endpoint_name');
    }
    // local_path - computed: true, optional: false, required: false
    get localPath() {
        return this.getStringAttribute('local_path');
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
exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput = DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput;
function dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint_name: cdktf.stringToTerraform(struct.endpointName),
        local_path: cdktf.stringToTerraform(struct.localPath),
        s3_data_distribution_type: cdktf.stringToTerraform(struct.s3DataDistributionType),
        s3_input_mode: cdktf.stringToTerraform(struct.s3InputMode),
    };
}
exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputToTerraform = dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputToTerraform;
class DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput extends cdktf.ComplexComputedList {
    // endpoint_input - computed: true, optional: false, required: false
    get endpointInput() {
        return this.interpolationForAttribute('endpoint_input');
    }
}
exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput = DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput;
function dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint_input: dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputToTerraform(struct.endpointInput),
    };
}
exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputToTerraform = dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputToTerraform;
class DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output extends cdktf.ComplexComputedList {
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
exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output = DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output;
function dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        local_path: cdktf.stringToTerraform(struct.localPath),
        s3_upload_mode: cdktf.stringToTerraform(struct.s3UploadMode),
        s3_uri: cdktf.stringToTerraform(struct.s3Uri),
    };
}
exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform = dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform;
class DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs extends cdktf.ComplexComputedList {
    // s3_output - computed: true, optional: false, required: false
    get s3Output() {
        return this.interpolationForAttribute('s3_output');
    }
}
exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs = DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs;
function dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_output: dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct.s3Output),
    };
}
exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsToTerraform = dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsToTerraform;
class DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig extends cdktf.ComplexComputedList {
    // kms_key_id - computed: true, optional: false, required: false
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    // monitoring_outputs - computed: true, optional: false, required: false
    get monitoringOutputs() {
        return this.interpolationForAttribute('monitoring_outputs');
    }
}
exports.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig = DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig;
function dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        monitoring_outputs: cdktf.listMapper(dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsToTerraform)(struct.monitoringOutputs),
    };
}
exports.dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigToTerraform = dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigToTerraform;
class DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig extends cdktf.ComplexComputedList {
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
exports.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig = DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig;
function dataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct) {
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
exports.dataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigToTerraform = dataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigToTerraform;
class DataAwsccSagemakerDataQualityJobDefinitionJobResources extends cdktf.ComplexComputedList {
    // cluster_config - computed: true, optional: false, required: false
    get clusterConfig() {
        return this.interpolationForAttribute('cluster_config');
    }
}
exports.DataAwsccSagemakerDataQualityJobDefinitionJobResources = DataAwsccSagemakerDataQualityJobDefinitionJobResources;
function dataAwsccSagemakerDataQualityJobDefinitionJobResourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cluster_config: dataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct.clusterConfig),
    };
}
exports.dataAwsccSagemakerDataQualityJobDefinitionJobResourcesToTerraform = dataAwsccSagemakerDataQualityJobDefinitionJobResourcesToTerraform;
class DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig extends cdktf.ComplexComputedList {
    // security_group_ids - computed: true, optional: false, required: false
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    // subnets - computed: true, optional: false, required: false
    get subnets() {
        return this.getListAttribute('subnets');
    }
}
exports.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig = DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig;
function dataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnets),
    };
}
exports.dataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigToTerraform = dataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigToTerraform;
class DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig extends cdktf.ComplexComputedList {
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
exports.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig = DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig;
function dataAwsccSagemakerDataQualityJobDefinitionNetworkConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct.enableInterContainerTrafficEncryption),
        enable_network_isolation: cdktf.booleanToTerraform(struct.enableNetworkIsolation),
        vpc_config: dataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct.vpcConfig),
    };
}
exports.dataAwsccSagemakerDataQualityJobDefinitionNetworkConfigToTerraform = dataAwsccSagemakerDataQualityJobDefinitionNetworkConfigToTerraform;
class DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition extends cdktf.ComplexComputedList {
    // max_runtime_in_seconds - computed: true, optional: false, required: false
    get maxRuntimeInSeconds() {
        return this.getNumberAttribute('max_runtime_in_seconds');
    }
}
exports.DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition = DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition;
function dataAwsccSagemakerDataQualityJobDefinitionStoppingConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_runtime_in_seconds: cdktf.numberToTerraform(struct.maxRuntimeInSeconds),
    };
}
exports.dataAwsccSagemakerDataQualityJobDefinitionStoppingConditionToTerraform = dataAwsccSagemakerDataQualityJobDefinitionStoppingConditionToTerraform;
class DataAwsccSagemakerDataQualityJobDefinitionTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccSagemakerDataQualityJobDefinitionTags = DataAwsccSagemakerDataQualityJobDefinitionTags;
function dataAwsccSagemakerDataQualityJobDefinitionTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccSagemakerDataQualityJobDefinitionTagsToTerraform = dataAwsccSagemakerDataQualityJobDefinitionTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_data_quality_job_definition.html awscc_sagemaker_data_quality_job_definition}
*/
class DataAwsccSagemakerDataQualityJobDefinition extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    get creationTime() {
        return this.getStringAttribute('creation_time');
    }
    // data_quality_app_specification - computed: true, optional: false, required: false
    get dataQualityAppSpecification() {
        return this.interpolationForAttribute('data_quality_app_specification');
    }
    // data_quality_baseline_config - computed: true, optional: false, required: false
    get dataQualityBaselineConfig() {
        return this.interpolationForAttribute('data_quality_baseline_config');
    }
    // data_quality_job_input - computed: true, optional: false, required: false
    get dataQualityJobInput() {
        return this.interpolationForAttribute('data_quality_job_input');
    }
    // data_quality_job_output_config - computed: true, optional: false, required: false
    get dataQualityJobOutputConfig() {
        return this.interpolationForAttribute('data_quality_job_output_config');
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
exports.DataAwsccSagemakerDataQualityJobDefinition = DataAwsccSagemakerDataQualityJobDefinition;
// =================
// STATIC PROPERTIES
// =================
DataAwsccSagemakerDataQualityJobDefinition.tfResourceType = "awscc_sagemaker_data_quality_job_definition";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1zYWdlbWFrZXItZGF0YS1xdWFsaXR5LWpvYi1kZWZpbml0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1zYWdlbWFrZXItZGF0YS1xdWFsaXR5LWpvYi1kZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2RkFBNkY7QUFDN0YsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBWS9CLE1BQWEscUVBQXNFLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVsSCx5RUFBeUU7SUFDekUsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsMEVBQTBFO0lBQzFFLElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELGlFQUFpRTtJQUNqRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFRLENBQUM7SUFDOUQsQ0FBQztJQUVELCtEQUErRDtJQUMvRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELHlGQUF5RjtJQUN6RixJQUFXLCtCQUErQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxvRkFBb0Y7SUFDcEYsSUFBVywyQkFBMkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQ0Y7QUEvQkQsc0pBK0JDO0FBRUQsU0FBZ0IsZ0ZBQWdGLENBQUMsTUFBOEU7SUFDN0ssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztRQUMxRixvQkFBb0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUM1RixXQUFXLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzNFLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNwRCxtQ0FBbUMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLCtCQUErQixDQUFDO1FBQ3JHLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsMkJBQTJCLENBQUM7S0FDN0YsQ0FBQTtBQUNILENBQUM7QUFWRCw0S0FVQztBQUVELE1BQWEsc0ZBQXVGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVuSSw0REFBNEQ7SUFDNUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNGO0FBTkQsd0xBTUM7QUFFRCxTQUFnQixpR0FBaUcsQ0FBQyxNQUErRjtJQUMvTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUMvQyxDQUFBO0FBQ0gsQ0FBQztBQUxELDhNQUtDO0FBRUQsTUFBYSxxRkFBc0YsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWxJLDREQUE0RDtJQUM1RCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUFORCxzTEFNQztBQUVELFNBQWdCLGdHQUFnRyxDQUFDLE1BQThGO0lBQzdNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQy9DLENBQUE7QUFDSCxDQUFDO0FBTEQsNE1BS0M7QUFFRCxNQUFhLG1FQUFvRSxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFaEgseUVBQXlFO0lBQ3pFLElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELDBFQUEwRTtJQUMxRSxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxzQkFBc0IsQ0FBUSxDQUFDO0lBQ3ZFLENBQUM7SUFFRCx5RUFBeUU7SUFDekUsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMscUJBQXFCLENBQVEsQ0FBQztJQUN0RSxDQUFDO0NBQ0Y7QUFoQkQsa0pBZ0JDO0FBRUQsU0FBZ0IsOEVBQThFLENBQUMsTUFBNEU7SUFDekssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3ZFLG9CQUFvQixFQUFFLGlHQUFpRyxDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUNwSixtQkFBbUIsRUFBRSxnR0FBZ0csQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7S0FDbEosQ0FBQTtBQUNILENBQUM7QUFQRCx3S0FPQztBQUVELE1BQWEsMEVBQTJFLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV2SCxtRUFBbUU7SUFDbkUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxnRUFBZ0U7SUFDaEUsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCwrRUFBK0U7SUFDL0UsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsbUVBQW1FO0lBQ25FLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0NBQ0Y7QUFyQkQsZ0tBcUJDO0FBRUQsU0FBZ0IscUZBQXFGLENBQUMsTUFBbUY7SUFDdkwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELHlCQUF5QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDbEYsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO0tBQzVELENBQUE7QUFDSCxDQUFDO0FBUkQsc0xBUUM7QUFFRCxNQUFhLDZEQUE4RCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFMUcsb0VBQW9FO0lBQ3BFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxnQkFBZ0IsQ0FBUSxDQUFDO0lBQ2pFLENBQUM7Q0FDRjtBQU5ELHNJQU1DO0FBRUQsU0FBZ0Isd0VBQXdFLENBQUMsTUFBc0U7SUFDN0osSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxjQUFjLEVBQUUscUZBQXFGLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztLQUM3SCxDQUFBO0FBQ0gsQ0FBQztBQUxELDRKQUtDO0FBRUQsTUFBYSw2RkFBOEYsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTFJLGdFQUFnRTtJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELG9FQUFvRTtJQUNwRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsNERBQTREO0lBQzVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQWhCRCxzTUFnQkM7QUFFRCxTQUFnQix3R0FBd0csQ0FBQyxNQUFzRztJQUM3TixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUN0RCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDN0QsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQy9DLENBQUE7QUFDSCxDQUFDO0FBUEQsNE5BT0M7QUFFRCxNQUFhLHFGQUFzRixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFbEksK0RBQStEO0lBQy9ELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQVEsQ0FBQztJQUM1RCxDQUFDO0NBQ0Y7QUFORCxzTEFNQztBQUVELFNBQWdCLGdHQUFnRyxDQUFDLE1BQThGO0lBQzdNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsU0FBUyxFQUFFLHdHQUF3RyxDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7S0FDdEksQ0FBQTtBQUNILENBQUM7QUFMRCw0TUFLQztBQUVELE1BQWEsb0VBQXFFLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVqSCxnRUFBZ0U7SUFDaEUsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCx3RUFBd0U7SUFDeEUsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsb0JBQW9CLENBQVEsQ0FBQztJQUNyRSxDQUFDO0NBQ0Y7QUFYRCxvSkFXQztBQUVELFNBQWdCLCtFQUErRSxDQUFDLE1BQTZFO0lBQzNLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3JELGtCQUFrQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0dBQWdHLENBQUMsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7S0FDbEssQ0FBQTtBQUNILENBQUM7QUFORCwwS0FNQztBQUVELE1BQWEsbUVBQW9FLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVoSCxvRUFBb0U7SUFDcEUsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHVFQUF1RTtJQUN2RSxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsdUVBQXVFO0lBQ3ZFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDRjtBQXJCRCxrSkFxQkM7QUFFRCxTQUFnQiw4RUFBOEUsQ0FBQyxNQUE0RTtJQUN6SyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUM5RCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDbEUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7S0FDbkUsQ0FBQTtBQUNILENBQUM7QUFSRCx3S0FRQztBQUVELE1BQWEsc0RBQXVELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVuRyxvRUFBb0U7SUFDcEUsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGdCQUFnQixDQUFRLENBQUM7SUFDakUsQ0FBQztDQUNGO0FBTkQsd0hBTUM7QUFFRCxTQUFnQixpRUFBaUUsQ0FBQyxNQUErRDtJQUMvSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLGNBQWMsRUFBRSw4RUFBOEUsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO0tBQ3RILENBQUE7QUFDSCxDQUFDO0FBTEQsOElBS0M7QUFFRCxNQUFhLGdFQUFpRSxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFN0csd0VBQXdFO0lBQ3hFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELDZEQUE2RDtJQUM3RCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNGO0FBWEQsNElBV0M7QUFFRCxTQUFnQiwyRUFBMkUsQ0FBQyxNQUF5RTtJQUNuSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZGLE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDcEUsQ0FBQTtBQUNILENBQUM7QUFORCxrS0FNQztBQUVELE1BQWEsdURBQXdELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVwRywrRkFBK0Y7SUFDL0YsSUFBVyxxQ0FBcUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsMkNBQTJDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsOEVBQThFO0lBQzlFLElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGdFQUFnRTtJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFRLENBQUM7SUFDN0QsQ0FBQztDQUNGO0FBaEJELDBIQWdCQztBQUVELFNBQWdCLGtFQUFrRSxDQUFDLE1BQWdFO0lBQ2pKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wseUNBQXlDLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxxQ0FBcUMsQ0FBQztRQUNsSCx3QkFBd0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ2xGLFVBQVUsRUFBRSwyRUFBMkUsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO0tBQzNHLENBQUE7QUFDSCxDQUFDO0FBUEQsZ0pBT0M7QUFFRCxNQUFhLDJEQUE0RCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFeEcsNEVBQTRFO0lBQzVFLElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQztDQUNGO0FBTkQsa0lBTUM7QUFFRCxTQUFnQixzRUFBc0UsQ0FBQyxNQUFvRTtJQUN6SixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsbUJBQW1CLENBQUM7S0FDN0UsQ0FBQTtBQUNILENBQUM7QUFMRCx3SkFLQztBQUVELE1BQWEsOENBQStDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUUzRix5REFBeUQ7SUFDekQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELDJEQUEyRDtJQUMzRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0Y7QUFYRCx3R0FXQztBQUVELFNBQWdCLHlEQUF5RCxDQUFDLE1BQXVEO0lBQy9ILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pDLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQU5ELDhIQU1DO0FBR0Q7O0VBRUU7QUFDRixNQUFhLDBDQUEyQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFPdkYsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBd0Q7UUFDdkcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSw2Q0FBNkM7WUFDcEUsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxPQUFPO2FBQ3RCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIsbUVBQW1FO0lBQ25FLElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsb0ZBQW9GO0lBQ3BGLElBQVcsMkJBQTJCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGdDQUFnQyxDQUFRLENBQUM7SUFDakYsQ0FBQztJQUVELGtGQUFrRjtJQUNsRixJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyw4QkFBOEIsQ0FBUSxDQUFDO0lBQy9FLENBQUM7SUFFRCw0RUFBNEU7SUFDNUUsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsd0JBQXdCLENBQVEsQ0FBQztJQUN6RSxDQUFDO0lBRUQsb0ZBQW9GO0lBQ3BGLElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGdDQUFnQyxDQUFRLENBQUM7SUFDakYsQ0FBQztJQUlELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFXLEVBQUUsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHlFQUF5RTtJQUN6RSxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGVBQWUsQ0FBUSxDQUFDO0lBQ2hFLENBQUM7SUFFRCxvRUFBb0U7SUFDcEUsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGdCQUFnQixDQUFRLENBQUM7SUFDakUsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHdFQUF3RTtJQUN4RSxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxvQkFBb0IsQ0FBUSxDQUFDO0lBQ3JFLENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFRLENBQUM7SUFDdkQsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3RDLENBQUM7SUFDSixDQUFDOztBQXJISCxnR0FzSEM7QUFwSEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyx5REFBYyxHQUFXLDZDQUE2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2Qvc2FnZW1ha2VyX2RhdGFfcXVhbGl0eV9qb2JfZGVmaW5pdGlvbi5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c2NjU2FnZW1ha2VyRGF0YVF1YWxpdHlKb2JEZWZpbml0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIHJlc291cmNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2Qvc2FnZW1ha2VyX2RhdGFfcXVhbGl0eV9qb2JfZGVmaW5pdGlvbi5odG1sI2lkIERhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbiNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25EYXRhUXVhbGl0eUFwcFNwZWNpZmljYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb250YWluZXJfYXJndW1lbnRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29udGFpbmVyQXJndW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2NvbnRhaW5lcl9hcmd1bWVudHMnKTtcbiAgfVxuXG4gIC8vIGNvbnRhaW5lcl9lbnRyeXBvaW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29udGFpbmVyRW50cnlwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjb250YWluZXJfZW50cnlwb2ludCcpO1xuICB9XG5cbiAgLy8gZW52aXJvbm1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbnZpcm9ubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbnZpcm9ubWVudCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGltYWdlX3VyaSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGltYWdlVXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW1hZ2VfdXJpJyk7XG4gIH1cblxuICAvLyBwb3N0X2FuYWx5dGljc19wcm9jZXNzb3Jfc291cmNlX3VyaSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvc3RBbmFseXRpY3NQcm9jZXNzb3JTb3VyY2VVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwb3N0X2FuYWx5dGljc19wcm9jZXNzb3Jfc291cmNlX3VyaScpO1xuICB9XG5cbiAgLy8gcmVjb3JkX3ByZXByb2Nlc3Nvcl9zb3VyY2VfdXJpIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVjb3JkUHJlcHJvY2Vzc29yU291cmNlVXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVjb3JkX3ByZXByb2Nlc3Nvcl9zb3VyY2VfdXJpJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbkRhdGFRdWFsaXR5QXBwU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbkRhdGFRdWFsaXR5QXBwU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXJfYXJndW1lbnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbnRhaW5lckFyZ3VtZW50cyksXG4gICAgY29udGFpbmVyX2VudHJ5cG9pbnQ6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29udGFpbmVyRW50cnlwb2ludCksXG4gICAgZW52aXJvbm1lbnQ6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZW52aXJvbm1lbnQpLFxuICAgIGltYWdlX3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbWFnZVVyaSksXG4gICAgcG9zdF9hbmFseXRpY3NfcHJvY2Vzc29yX3NvdXJjZV91cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucG9zdEFuYWx5dGljc1Byb2Nlc3NvclNvdXJjZVVyaSksXG4gICAgcmVjb3JkX3ByZXByb2Nlc3Nvcl9zb3VyY2VfdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZFByZXByb2Nlc3NvclNvdXJjZVVyaSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbkRhdGFRdWFsaXR5QmFzZWxpbmVDb25maWdDb25zdHJhaW50c1Jlc291cmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gczNfdXJpIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM191cmknKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyRGF0YVF1YWxpdHlKb2JEZWZpbml0aW9uRGF0YVF1YWxpdHlCYXNlbGluZUNvbmZpZ0NvbnN0cmFpbnRzUmVzb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25EYXRhUXVhbGl0eUJhc2VsaW5lQ29uZmlnQ29uc3RyYWludHNSZXNvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzM191cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNVcmkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25EYXRhUXVhbGl0eUJhc2VsaW5lQ29uZmlnU3RhdGlzdGljc1Jlc291cmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gczNfdXJpIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM191cmknKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyRGF0YVF1YWxpdHlKb2JEZWZpbml0aW9uRGF0YVF1YWxpdHlCYXNlbGluZUNvbmZpZ1N0YXRpc3RpY3NSZXNvdXJjZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbkRhdGFRdWFsaXR5QmFzZWxpbmVDb25maWdTdGF0aXN0aWNzUmVzb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgczNfdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzVXJpKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyRGF0YVF1YWxpdHlKb2JEZWZpbml0aW9uRGF0YVF1YWxpdHlCYXNlbGluZUNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJhc2VsaW5pbmdfam9iX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBiYXNlbGluaW5nSm9iTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Jhc2VsaW5pbmdfam9iX25hbWUnKTtcbiAgfVxuXG4gIC8vIGNvbnN0cmFpbnRzX3Jlc291cmNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29uc3RyYWludHNSZXNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb25zdHJhaW50c19yZXNvdXJjZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN0YXRpc3RpY3NfcmVzb3VyY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0aXN0aWNzUmVzb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RhdGlzdGljc19yZXNvdXJjZScpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyRGF0YVF1YWxpdHlKb2JEZWZpbml0aW9uRGF0YVF1YWxpdHlCYXNlbGluZUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbkRhdGFRdWFsaXR5QmFzZWxpbmVDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYmFzZWxpbmluZ19qb2JfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5iYXNlbGluaW5nSm9iTmFtZSksXG4gICAgY29uc3RyYWludHNfcmVzb3VyY2U6IGRhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbkRhdGFRdWFsaXR5QmFzZWxpbmVDb25maWdDb25zdHJhaW50c1Jlc291cmNlVG9UZXJyYWZvcm0oc3RydWN0IS5jb25zdHJhaW50c1Jlc291cmNlKSxcbiAgICBzdGF0aXN0aWNzX3Jlc291cmNlOiBkYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25EYXRhUXVhbGl0eUJhc2VsaW5lQ29uZmlnU3RhdGlzdGljc1Jlc291cmNlVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0aXN0aWNzUmVzb3VyY2UpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25EYXRhUXVhbGl0eUpvYklucHV0RW5kcG9pbnRJbnB1dCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuZHBvaW50X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRwb2ludE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmRwb2ludF9uYW1lJyk7XG4gIH1cblxuICAvLyBsb2NhbF9wYXRoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9jYWxQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9jYWxfcGF0aCcpO1xuICB9XG5cbiAgLy8gczNfZGF0YV9kaXN0cmlidXRpb25fdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzRGF0YURpc3RyaWJ1dGlvblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM19kYXRhX2Rpc3RyaWJ1dGlvbl90eXBlJyk7XG4gIH1cblxuICAvLyBzM19pbnB1dF9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNJbnB1dE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM19pbnB1dF9tb2RlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbkRhdGFRdWFsaXR5Sm9iSW5wdXRFbmRwb2ludElucHV0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyRGF0YVF1YWxpdHlKb2JEZWZpbml0aW9uRGF0YVF1YWxpdHlKb2JJbnB1dEVuZHBvaW50SW5wdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5kcG9pbnRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbmRwb2ludE5hbWUpLFxuICAgIGxvY2FsX3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9jYWxQYXRoKSxcbiAgICBzM19kYXRhX2Rpc3RyaWJ1dGlvbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzRGF0YURpc3RyaWJ1dGlvblR5cGUpLFxuICAgIHMzX2lucHV0X21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNJbnB1dE1vZGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25EYXRhUXVhbGl0eUpvYklucHV0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5kcG9pbnRfaW5wdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRwb2ludElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VuZHBvaW50X2lucHV0JykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25EYXRhUXVhbGl0eUpvYklucHV0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyRGF0YVF1YWxpdHlKb2JEZWZpbml0aW9uRGF0YVF1YWxpdHlKb2JJbnB1dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmRwb2ludF9pbnB1dDogZGF0YUF3c2NjU2FnZW1ha2VyRGF0YVF1YWxpdHlKb2JEZWZpbml0aW9uRGF0YVF1YWxpdHlKb2JJbnB1dEVuZHBvaW50SW5wdXRUb1RlcnJhZm9ybShzdHJ1Y3QhLmVuZHBvaW50SW5wdXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25EYXRhUXVhbGl0eUpvYk91dHB1dENvbmZpZ01vbml0b3JpbmdPdXRwdXRzUzNPdXRwdXQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBsb2NhbF9wYXRoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9jYWxQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9jYWxfcGF0aCcpO1xuICB9XG5cbiAgLy8gczNfdXBsb2FkX21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM1VwbG9hZE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM191cGxvYWRfbW9kZScpO1xuICB9XG5cbiAgLy8gczNfdXJpIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM191cmknKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyRGF0YVF1YWxpdHlKb2JEZWZpbml0aW9uRGF0YVF1YWxpdHlKb2JPdXRwdXRDb25maWdNb25pdG9yaW5nT3V0cHV0c1MzT3V0cHV0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyRGF0YVF1YWxpdHlKb2JEZWZpbml0aW9uRGF0YVF1YWxpdHlKb2JPdXRwdXRDb25maWdNb25pdG9yaW5nT3V0cHV0c1MzT3V0cHV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGxvY2FsX3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9jYWxQYXRoKSxcbiAgICBzM191cGxvYWRfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM1VwbG9hZE1vZGUpLFxuICAgIHMzX3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM1VyaSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbkRhdGFRdWFsaXR5Sm9iT3V0cHV0Q29uZmlnTW9uaXRvcmluZ091dHB1dHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBzM19vdXRwdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM091dHB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzM19vdXRwdXQnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbkRhdGFRdWFsaXR5Sm9iT3V0cHV0Q29uZmlnTW9uaXRvcmluZ091dHB1dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25EYXRhUXVhbGl0eUpvYk91dHB1dENvbmZpZ01vbml0b3JpbmdPdXRwdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHMzX291dHB1dDogZGF0YUF3c2NjU2FnZW1ha2VyRGF0YVF1YWxpdHlKb2JEZWZpbml0aW9uRGF0YVF1YWxpdHlKb2JPdXRwdXRDb25maWdNb25pdG9yaW5nT3V0cHV0c1MzT3V0cHV0VG9UZXJyYWZvcm0oc3RydWN0IS5zM091dHB1dCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbkRhdGFRdWFsaXR5Sm9iT3V0cHV0Q29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga21zX2tleV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGttc0tleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleV9pZCcpO1xuICB9XG5cbiAgLy8gbW9uaXRvcmluZ19vdXRwdXRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbW9uaXRvcmluZ091dHB1dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbW9uaXRvcmluZ19vdXRwdXRzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25EYXRhUXVhbGl0eUpvYk91dHB1dENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbkRhdGFRdWFsaXR5Sm9iT3V0cHV0Q29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgIG1vbml0b3Jpbmdfb3V0cHV0czogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25EYXRhUXVhbGl0eUpvYk91dHB1dENvbmZpZ01vbml0b3JpbmdPdXRwdXRzVG9UZXJyYWZvcm0pKHN0cnVjdCEubW9uaXRvcmluZ091dHB1dHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25Kb2JSZXNvdXJjZXNDbHVzdGVyQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaW5zdGFuY2VfY291bnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnN0YW5jZUNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW5zdGFuY2VfY291bnQnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV90eXBlJyk7XG4gIH1cblxuICAvLyB2b2x1bWVfa21zX2tleV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZvbHVtZUttc0tleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndm9sdW1lX2ttc19rZXlfaWQnKTtcbiAgfVxuXG4gIC8vIHZvbHVtZV9zaXplX2luX2diIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdm9sdW1lU2l6ZUluR2IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd2b2x1bWVfc2l6ZV9pbl9nYicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25Kb2JSZXNvdXJjZXNDbHVzdGVyQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyRGF0YVF1YWxpdHlKb2JEZWZpbml0aW9uSm9iUmVzb3VyY2VzQ2x1c3RlckNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZV9jb3VudDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZUNvdW50KSxcbiAgICBpbnN0YW5jZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAgdm9sdW1lX2ttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lS21zS2V5SWQpLFxuICAgIHZvbHVtZV9zaXplX2luX2diOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVNpemVJbkdiKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyRGF0YVF1YWxpdHlKb2JEZWZpbml0aW9uSm9iUmVzb3VyY2VzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2x1c3Rlcl9jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbHVzdGVyQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NsdXN0ZXJfY29uZmlnJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25Kb2JSZXNvdXJjZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25Kb2JSZXNvdXJjZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2x1c3Rlcl9jb25maWc6IGRhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbkpvYlJlc291cmNlc0NsdXN0ZXJDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsdXN0ZXJDb25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25OZXR3b3JrQ29uZmlnVnBjQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9pZHMnKTtcbiAgfVxuXG4gIC8vIHN1Ym5ldHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdWJuZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1Ym5ldHMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyRGF0YVF1YWxpdHlKb2JEZWZpbml0aW9uTmV0d29ya0NvbmZpZ1ZwY0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbk5ldHdvcmtDb25maWdWcGNDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2VjdXJpdHlfZ3JvdXBfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBJZHMpLFxuICAgIHN1Ym5ldHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3VibmV0cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbk5ldHdvcmtDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmFibGVfaW50ZXJfY29udGFpbmVyX3RyYWZmaWNfZW5jcnlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZUludGVyQ29udGFpbmVyVHJhZmZpY0VuY3J5cHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX2ludGVyX2NvbnRhaW5lcl90cmFmZmljX2VuY3J5cHRpb24nKTtcbiAgfVxuXG4gIC8vIGVuYWJsZV9uZXR3b3JrX2lzb2xhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZU5ldHdvcmtJc29sYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX25ldHdvcmtfaXNvbGF0aW9uJyk7XG4gIH1cblxuICAvLyB2cGNfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdnBjQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZwY19jb25maWcnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbk5ldHdvcmtDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25OZXR3b3JrQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZV9pbnRlcl9jb250YWluZXJfdHJhZmZpY19lbmNyeXB0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVJbnRlckNvbnRhaW5lclRyYWZmaWNFbmNyeXB0aW9uKSxcbiAgICBlbmFibGVfbmV0d29ya19pc29sYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZU5ldHdvcmtJc29sYXRpb24pLFxuICAgIHZwY19jb25maWc6IGRhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbk5ldHdvcmtDb25maWdWcGNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZwY0NvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvblN0b3BwaW5nQ29uZGl0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbWF4X3J1bnRpbWVfaW5fc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1heFJ1bnRpbWVJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfcnVudGltZV9pbl9zZWNvbmRzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvblN0b3BwaW5nQ29uZGl0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyRGF0YVF1YWxpdHlKb2JEZWZpbml0aW9uU3RvcHBpbmdDb25kaXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWF4X3J1bnRpbWVfaW5fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhSdW50aW1lSW5TZWNvbmRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyRGF0YVF1YWxpdHlKb2JEZWZpbml0aW9uVGFncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvblRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25UYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL3NhZ2VtYWtlcl9kYXRhX3F1YWxpdHlfam9iX2RlZmluaXRpb24uaHRtbCBhd3NjY19zYWdlbWFrZXJfZGF0YV9xdWFsaXR5X2pvYl9kZWZpbml0aW9ufVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX3NhZ2VtYWtlcl9kYXRhX3F1YWxpdHlfam9iX2RlZmluaXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2Qvc2FnZW1ha2VyX2RhdGFfcXVhbGl0eV9qb2JfZGVmaW5pdGlvbi5odG1sIGF3c2NjX3NhZ2VtYWtlcl9kYXRhX3F1YWxpdHlfam9iX2RlZmluaXRpb259IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY1NhZ2VtYWtlckRhdGFRdWFsaXR5Sm9iRGVmaW5pdGlvbkNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzY2NTYWdlbWFrZXJEYXRhUXVhbGl0eUpvYkRlZmluaXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX3NhZ2VtYWtlcl9kYXRhX3F1YWxpdHlfam9iX2RlZmluaXRpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gY3JlYXRpb25fdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0aW9uVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0aW9uX3RpbWUnKTtcbiAgfVxuXG4gIC8vIGRhdGFfcXVhbGl0eV9hcHBfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFRdWFsaXR5QXBwU3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkYXRhX3F1YWxpdHlfYXBwX3NwZWNpZmljYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkYXRhX3F1YWxpdHlfYmFzZWxpbmVfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YVF1YWxpdHlCYXNlbGluZUNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkYXRhX3F1YWxpdHlfYmFzZWxpbmVfY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZGF0YV9xdWFsaXR5X2pvYl9pbnB1dCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFRdWFsaXR5Sm9iSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGF0YV9xdWFsaXR5X2pvYl9pbnB1dCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRhdGFfcXVhbGl0eV9qb2Jfb3V0cHV0X2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFRdWFsaXR5Sm9iT3V0cHV0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RhdGFfcXVhbGl0eV9qb2Jfb3V0cHV0X2NvbmZpZycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBqb2JfZGVmaW5pdGlvbl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBqb2JEZWZpbml0aW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnam9iX2RlZmluaXRpb25fYXJuJyk7XG4gIH1cblxuICAvLyBqb2JfZGVmaW5pdGlvbl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgam9iRGVmaW5pdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdqb2JfZGVmaW5pdGlvbl9uYW1lJyk7XG4gIH1cblxuICAvLyBqb2JfcmVzb3VyY2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgam9iUmVzb3VyY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2pvYl9yZXNvdXJjZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBuZXR3b3JrX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5ldHdvcmtDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbmV0d29ya19jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gc3RvcHBpbmdfY29uZGl0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RvcHBpbmdDb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RvcHBpbmdfY29uZGl0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=