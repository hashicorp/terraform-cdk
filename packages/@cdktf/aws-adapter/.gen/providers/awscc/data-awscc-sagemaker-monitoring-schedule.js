"use strict";
// https://www.terraform.io/docs/providers/awscc/d/sagemaker_monitoring_schedule.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccSagemakerMonitoringSchedule = exports.dataAwsccSagemakerMonitoringScheduleTagsToTerraform = exports.DataAwsccSagemakerMonitoringScheduleTags = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfig = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingConditionToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfigToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfigToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3OutputToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInputToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecificationToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResourceToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource = exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResourceToTerraform = exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource = exports.dataAwsccSagemakerMonitoringScheduleLastMonitoringExecutionSummaryToTerraform = exports.DataAwsccSagemakerMonitoringScheduleLastMonitoringExecutionSummary = void 0;
const cdktf = require("cdktf");
class DataAwsccSagemakerMonitoringScheduleLastMonitoringExecutionSummary extends cdktf.ComplexComputedList {
    // creation_time - computed: true, optional: false, required: false
    get creationTime() {
        return this.getStringAttribute('creation_time');
    }
    // endpoint_name - computed: true, optional: false, required: false
    get endpointName() {
        return this.getStringAttribute('endpoint_name');
    }
    // failure_reason - computed: true, optional: false, required: false
    get failureReason() {
        return this.getStringAttribute('failure_reason');
    }
    // last_modified_time - computed: true, optional: false, required: false
    get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }
    // monitoring_execution_status - computed: true, optional: false, required: false
    get monitoringExecutionStatus() {
        return this.getStringAttribute('monitoring_execution_status');
    }
    // monitoring_schedule_name - computed: true, optional: false, required: false
    get monitoringScheduleName() {
        return this.getStringAttribute('monitoring_schedule_name');
    }
    // processing_job_arn - computed: true, optional: false, required: false
    get processingJobArn() {
        return this.getStringAttribute('processing_job_arn');
    }
    // scheduled_time - computed: true, optional: false, required: false
    get scheduledTime() {
        return this.getStringAttribute('scheduled_time');
    }
}
exports.DataAwsccSagemakerMonitoringScheduleLastMonitoringExecutionSummary = DataAwsccSagemakerMonitoringScheduleLastMonitoringExecutionSummary;
function dataAwsccSagemakerMonitoringScheduleLastMonitoringExecutionSummaryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        creation_time: cdktf.stringToTerraform(struct.creationTime),
        endpoint_name: cdktf.stringToTerraform(struct.endpointName),
        failure_reason: cdktf.stringToTerraform(struct.failureReason),
        last_modified_time: cdktf.stringToTerraform(struct.lastModifiedTime),
        monitoring_execution_status: cdktf.stringToTerraform(struct.monitoringExecutionStatus),
        monitoring_schedule_name: cdktf.stringToTerraform(struct.monitoringScheduleName),
        processing_job_arn: cdktf.stringToTerraform(struct.processingJobArn),
        scheduled_time: cdktf.stringToTerraform(struct.scheduledTime),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleLastMonitoringExecutionSummaryToTerraform = dataAwsccSagemakerMonitoringScheduleLastMonitoringExecutionSummaryToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource extends cdktf.ComplexComputedList {
    // s3_uri - computed: true, optional: false, required: false
    get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
}
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_uri: cdktf.stringToTerraform(struct.s3Uri),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResourceToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResourceToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource extends cdktf.ComplexComputedList {
    // s3_uri - computed: true, optional: false, required: false
    get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
}
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_uri: cdktf.stringToTerraform(struct.s3Uri),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResourceToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResourceToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig extends cdktf.ComplexComputedList {
    // constraints_resource - computed: true, optional: false, required: false
    get constraintsResource() {
        return this.interpolationForAttribute('constraints_resource');
    }
    // statistics_resource - computed: true, optional: false, required: false
    get statisticsResource() {
        return this.interpolationForAttribute('statistics_resource');
    }
}
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        constraints_resource: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResourceToTerraform(struct.constraintsResource),
        statistics_resource: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResourceToTerraform(struct.statisticsResource),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification extends cdktf.ComplexComputedList {
    // container_arguments - computed: true, optional: false, required: false
    get containerArguments() {
        return this.getListAttribute('container_arguments');
    }
    // container_entrypoint - computed: true, optional: false, required: false
    get containerEntrypoint() {
        return this.getListAttribute('container_entrypoint');
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
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_arguments: cdktf.listMapper(cdktf.stringToTerraform)(struct.containerArguments),
        container_entrypoint: cdktf.listMapper(cdktf.stringToTerraform)(struct.containerEntrypoint),
        image_uri: cdktf.stringToTerraform(struct.imageUri),
        post_analytics_processor_source_uri: cdktf.stringToTerraform(struct.postAnalyticsProcessorSourceUri),
        record_preprocessor_source_uri: cdktf.stringToTerraform(struct.recordPreprocessorSourceUri),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecificationToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecificationToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput extends cdktf.ComplexComputedList {
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
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInputToTerraform(struct) {
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
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInputToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInputToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs extends cdktf.ComplexComputedList {
    // endpoint_input - computed: true, optional: false, required: false
    get endpointInput() {
        return this.interpolationForAttribute('endpoint_input');
    }
}
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint_input: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInputToTerraform(struct.endpointInput),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output extends cdktf.ComplexComputedList {
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
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3OutputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        local_path: cdktf.stringToTerraform(struct.localPath),
        s3_upload_mode: cdktf.stringToTerraform(struct.s3UploadMode),
        s3_uri: cdktf.stringToTerraform(struct.s3Uri),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3OutputToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3OutputToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs extends cdktf.ComplexComputedList {
    // s3_output - computed: true, optional: false, required: false
    get s3Output() {
        return this.interpolationForAttribute('s3_output');
    }
}
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_output: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3OutputToTerraform(struct.s3Output),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig extends cdktf.ComplexComputedList {
    // kms_key_id - computed: true, optional: false, required: false
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    // monitoring_outputs - computed: true, optional: false, required: false
    get monitoringOutputs() {
        return this.interpolationForAttribute('monitoring_outputs');
    }
}
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        monitoring_outputs: cdktf.listMapper(dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsToTerraform)(struct.monitoringOutputs),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig extends cdktf.ComplexComputedList {
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
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfigToTerraform(struct) {
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
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfigToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfigToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources extends cdktf.ComplexComputedList {
    // cluster_config - computed: true, optional: false, required: false
    get clusterConfig() {
        return this.interpolationForAttribute('cluster_config');
    }
}
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cluster_config: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfigToTerraform(struct.clusterConfig),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig extends cdktf.ComplexComputedList {
    // security_group_ids - computed: true, optional: false, required: false
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    // subnets - computed: true, optional: false, required: false
    get subnets() {
        return this.getListAttribute('subnets');
    }
}
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnets),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfigToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfigToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig extends cdktf.ComplexComputedList {
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
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct.enableInterContainerTrafficEncryption),
        enable_network_isolation: cdktf.booleanToTerraform(struct.enableNetworkIsolation),
        vpc_config: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfigToTerraform(struct.vpcConfig),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition extends cdktf.ComplexComputedList {
    // max_runtime_in_seconds - computed: true, optional: false, required: false
    get maxRuntimeInSeconds() {
        return this.getNumberAttribute('max_runtime_in_seconds');
    }
}
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_runtime_in_seconds: cdktf.numberToTerraform(struct.maxRuntimeInSeconds),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingConditionToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingConditionToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition extends cdktf.ComplexComputedList {
    // baseline_config - computed: true, optional: false, required: false
    get baselineConfig() {
        return this.interpolationForAttribute('baseline_config');
    }
    // environment - computed: true, optional: false, required: false
    get environment() {
        return this.interpolationForAttribute('environment');
    }
    // monitoring_app_specification - computed: true, optional: false, required: false
    get monitoringAppSpecification() {
        return this.interpolationForAttribute('monitoring_app_specification');
    }
    // monitoring_inputs - computed: true, optional: false, required: false
    get monitoringInputs() {
        return this.interpolationForAttribute('monitoring_inputs');
    }
    // monitoring_output_config - computed: true, optional: false, required: false
    get monitoringOutputConfig() {
        return this.interpolationForAttribute('monitoring_output_config');
    }
    // monitoring_resources - computed: true, optional: false, required: false
    get monitoringResources() {
        return this.interpolationForAttribute('monitoring_resources');
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
}
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        baseline_config: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigToTerraform(struct.baselineConfig),
        environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct.environment),
        monitoring_app_specification: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecificationToTerraform(struct.monitoringAppSpecification),
        monitoring_inputs: cdktf.listMapper(dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsToTerraform)(struct.monitoringInputs),
        monitoring_output_config: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigToTerraform(struct.monitoringOutputConfig),
        monitoring_resources: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesToTerraform(struct.monitoringResources),
        network_config: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigToTerraform(struct.networkConfig),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        stopping_condition: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingConditionToTerraform(struct.stoppingCondition),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig extends cdktf.ComplexComputedList {
    // schedule_expression - computed: true, optional: false, required: false
    get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
}
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        schedule_expression: cdktf.stringToTerraform(struct.scheduleExpression),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigToTerraform;
class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfig extends cdktf.ComplexComputedList {
    // monitoring_job_definition - computed: true, optional: false, required: false
    get monitoringJobDefinition() {
        return this.interpolationForAttribute('monitoring_job_definition');
    }
    // monitoring_job_definition_name - computed: true, optional: false, required: false
    get monitoringJobDefinitionName() {
        return this.getStringAttribute('monitoring_job_definition_name');
    }
    // monitoring_type - computed: true, optional: false, required: false
    get monitoringType() {
        return this.getStringAttribute('monitoring_type');
    }
    // schedule_config - computed: true, optional: false, required: false
    get scheduleConfig() {
        return this.interpolationForAttribute('schedule_config');
    }
}
exports.DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfig = DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfig;
function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        monitoring_job_definition: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionToTerraform(struct.monitoringJobDefinition),
        monitoring_job_definition_name: cdktf.stringToTerraform(struct.monitoringJobDefinitionName),
        monitoring_type: cdktf.stringToTerraform(struct.monitoringType),
        schedule_config: dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigToTerraform(struct.scheduleConfig),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigToTerraform = dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigToTerraform;
class DataAwsccSagemakerMonitoringScheduleTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccSagemakerMonitoringScheduleTags = DataAwsccSagemakerMonitoringScheduleTags;
function dataAwsccSagemakerMonitoringScheduleTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccSagemakerMonitoringScheduleTagsToTerraform = dataAwsccSagemakerMonitoringScheduleTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_monitoring_schedule.html awscc_sagemaker_monitoring_schedule}
*/
class DataAwsccSagemakerMonitoringSchedule extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    get creationTime() {
        return this.getStringAttribute('creation_time');
    }
    // endpoint_name - computed: true, optional: false, required: false
    get endpointName() {
        return this.getStringAttribute('endpoint_name');
    }
    // failure_reason - computed: true, optional: false, required: false
    get failureReason() {
        return this.getStringAttribute('failure_reason');
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
    // last_modified_time - computed: true, optional: false, required: false
    get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }
    // last_monitoring_execution_summary - computed: true, optional: false, required: false
    get lastMonitoringExecutionSummary() {
        return this.interpolationForAttribute('last_monitoring_execution_summary');
    }
    // monitoring_schedule_arn - computed: true, optional: false, required: false
    get monitoringScheduleArn() {
        return this.getStringAttribute('monitoring_schedule_arn');
    }
    // monitoring_schedule_config - computed: true, optional: false, required: false
    get monitoringScheduleConfig() {
        return this.interpolationForAttribute('monitoring_schedule_config');
    }
    // monitoring_schedule_name - computed: true, optional: false, required: false
    get monitoringScheduleName() {
        return this.getStringAttribute('monitoring_schedule_name');
    }
    // monitoring_schedule_status - computed: true, optional: false, required: false
    get monitoringScheduleStatus() {
        return this.getStringAttribute('monitoring_schedule_status');
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
exports.DataAwsccSagemakerMonitoringSchedule = DataAwsccSagemakerMonitoringSchedule;
// =================
// STATIC PROPERTIES
// =================
DataAwsccSagemakerMonitoringSchedule.tfResourceType = "awscc_sagemaker_monitoring_schedule";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1zYWdlbWFrZXItbW9uaXRvcmluZy1zY2hlZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtYXdzY2Mtc2FnZW1ha2VyLW1vbml0b3Jpbmctc2NoZWR1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFGQUFxRjtBQUNyRiwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFZL0IsTUFBYSxrRUFBbUUsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRS9HLG1FQUFtRTtJQUNuRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELG9FQUFvRTtJQUNwRSxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELGlGQUFpRjtJQUNqRixJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCw4RUFBOEU7SUFDOUUsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELG9FQUFvRTtJQUNwRSxJQUFXLGFBQWE7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QUVELGdGQUFnRjtJQUNoRixJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyw0QkFBNEIsQ0FBUSxDQUFDO0lBQzdFLENBQUM7SUFFRCw4RUFBOEU7SUFDOUUsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsZ0ZBQWdGO0lBQ2hGLElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBM0dILG9GQTRHQztBQTFHQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLG1EQUFjLEdBQVcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9zYWdlbWFrZXJfbW9uaXRvcmluZ19zY2hlZHVsZS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIHJlc291cmNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2Qvc2FnZW1ha2VyX21vbml0b3Jpbmdfc2NoZWR1bGUuaHRtbCNpZCBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGUjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTGFzdE1vbml0b3JpbmdFeGVjdXRpb25TdW1tYXJ5IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY3JlYXRpb25fdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0aW9uVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0aW9uX3RpbWUnKTtcbiAgfVxuXG4gIC8vIGVuZHBvaW50X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRwb2ludE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmRwb2ludF9uYW1lJyk7XG4gIH1cblxuICAvLyBmYWlsdXJlX3JlYXNvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZhaWx1cmVSZWFzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmYWlsdXJlX3JlYXNvbicpO1xuICB9XG5cbiAgLy8gbGFzdF9tb2RpZmllZF90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdE1vZGlmaWVkVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3RfbW9kaWZpZWRfdGltZScpO1xuICB9XG5cbiAgLy8gbW9uaXRvcmluZ19leGVjdXRpb25fc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbW9uaXRvcmluZ0V4ZWN1dGlvblN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21vbml0b3JpbmdfZXhlY3V0aW9uX3N0YXR1cycpO1xuICB9XG5cbiAgLy8gbW9uaXRvcmluZ19zY2hlZHVsZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbW9uaXRvcmluZ1NjaGVkdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21vbml0b3Jpbmdfc2NoZWR1bGVfbmFtZScpO1xuICB9XG5cbiAgLy8gcHJvY2Vzc2luZ19qb2JfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc2luZ0pvYkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb2Nlc3Npbmdfam9iX2FybicpO1xuICB9XG5cbiAgLy8gc2NoZWR1bGVkX3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzY2hlZHVsZWRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2NoZWR1bGVkX3RpbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTGFzdE1vbml0b3JpbmdFeGVjdXRpb25TdW1tYXJ5VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTGFzdE1vbml0b3JpbmdFeGVjdXRpb25TdW1tYXJ5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNyZWF0aW9uX3RpbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRpb25UaW1lKSxcbiAgICBlbmRwb2ludF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVuZHBvaW50TmFtZSksXG4gICAgZmFpbHVyZV9yZWFzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZmFpbHVyZVJlYXNvbiksXG4gICAgbGFzdF9tb2RpZmllZF90aW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhc3RNb2RpZmllZFRpbWUpLFxuICAgIG1vbml0b3JpbmdfZXhlY3V0aW9uX3N0YXR1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tb25pdG9yaW5nRXhlY3V0aW9uU3RhdHVzKSxcbiAgICBtb25pdG9yaW5nX3NjaGVkdWxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubW9uaXRvcmluZ1NjaGVkdWxlTmFtZSksXG4gICAgcHJvY2Vzc2luZ19qb2JfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb2Nlc3NpbmdKb2JBcm4pLFxuICAgIHNjaGVkdWxlZF90aW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjaGVkdWxlZFRpbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbkJhc2VsaW5lQ29uZmlnQ29uc3RyYWludHNSZXNvdXJjZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHMzX3VyaSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzVXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfdXJpJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uQmFzZWxpbmVDb25maWdDb25zdHJhaW50c1Jlc291cmNlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnTW9uaXRvcmluZ0pvYkRlZmluaXRpb25CYXNlbGluZUNvbmZpZ0NvbnN0cmFpbnRzUmVzb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgczNfdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzVXJpKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnTW9uaXRvcmluZ0pvYkRlZmluaXRpb25CYXNlbGluZUNvbmZpZ1N0YXRpc3RpY3NSZXNvdXJjZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHMzX3VyaSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzVXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfdXJpJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uQmFzZWxpbmVDb25maWdTdGF0aXN0aWNzUmVzb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbkJhc2VsaW5lQ29uZmlnU3RhdGlzdGljc1Jlc291cmNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHMzX3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM1VyaSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uQmFzZWxpbmVDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb25zdHJhaW50c19yZXNvdXJjZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbnN0cmFpbnRzUmVzb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29uc3RyYWludHNfcmVzb3VyY2UnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzdGF0aXN0aWNzX3Jlc291cmNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdGlzdGljc1Jlc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N0YXRpc3RpY3NfcmVzb3VyY2UnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uQmFzZWxpbmVDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbkJhc2VsaW5lQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbnN0cmFpbnRzX3Jlc291cmNlOiBkYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbkJhc2VsaW5lQ29uZmlnQ29uc3RyYWludHNSZXNvdXJjZVRvVGVycmFmb3JtKHN0cnVjdCEuY29uc3RyYWludHNSZXNvdXJjZSksXG4gICAgc3RhdGlzdGljc19yZXNvdXJjZTogZGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnTW9uaXRvcmluZ0pvYkRlZmluaXRpb25CYXNlbGluZUNvbmZpZ1N0YXRpc3RpY3NSZXNvdXJjZVRvVGVycmFmb3JtKHN0cnVjdCEuc3RhdGlzdGljc1Jlc291cmNlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnTW9uaXRvcmluZ0pvYkRlZmluaXRpb25Nb25pdG9yaW5nQXBwU3BlY2lmaWNhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbnRhaW5lcl9hcmd1bWVudHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb250YWluZXJBcmd1bWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY29udGFpbmVyX2FyZ3VtZW50cycpO1xuICB9XG5cbiAgLy8gY29udGFpbmVyX2VudHJ5cG9pbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb250YWluZXJFbnRyeXBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2NvbnRhaW5lcl9lbnRyeXBvaW50Jyk7XG4gIH1cblxuICAvLyBpbWFnZV91cmkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbWFnZVVyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ltYWdlX3VyaScpO1xuICB9XG5cbiAgLy8gcG9zdF9hbmFseXRpY3NfcHJvY2Vzc29yX3NvdXJjZV91cmkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3N0QW5hbHl0aWNzUHJvY2Vzc29yU291cmNlVXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncG9zdF9hbmFseXRpY3NfcHJvY2Vzc29yX3NvdXJjZV91cmknKTtcbiAgfVxuXG4gIC8vIHJlY29yZF9wcmVwcm9jZXNzb3Jfc291cmNlX3VyaSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlY29yZFByZXByb2Nlc3NvclNvdXJjZVVyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlY29yZF9wcmVwcm9jZXNzb3Jfc291cmNlX3VyaScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbk1vbml0b3JpbmdBcHBTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnTW9uaXRvcmluZ0pvYkRlZmluaXRpb25Nb25pdG9yaW5nQXBwU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXJfYXJndW1lbnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbnRhaW5lckFyZ3VtZW50cyksXG4gICAgY29udGFpbmVyX2VudHJ5cG9pbnQ6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29udGFpbmVyRW50cnlwb2ludCksXG4gICAgaW1hZ2VfdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmltYWdlVXJpKSxcbiAgICBwb3N0X2FuYWx5dGljc19wcm9jZXNzb3Jfc291cmNlX3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wb3N0QW5hbHl0aWNzUHJvY2Vzc29yU291cmNlVXJpKSxcbiAgICByZWNvcmRfcHJlcHJvY2Vzc29yX3NvdXJjZV91cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkUHJlcHJvY2Vzc29yU291cmNlVXJpKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnTW9uaXRvcmluZ0pvYkRlZmluaXRpb25Nb25pdG9yaW5nSW5wdXRzRW5kcG9pbnRJbnB1dCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuZHBvaW50X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRwb2ludE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmRwb2ludF9uYW1lJyk7XG4gIH1cblxuICAvLyBsb2NhbF9wYXRoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9jYWxQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9jYWxfcGF0aCcpO1xuICB9XG5cbiAgLy8gczNfZGF0YV9kaXN0cmlidXRpb25fdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzRGF0YURpc3RyaWJ1dGlvblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM19kYXRhX2Rpc3RyaWJ1dGlvbl90eXBlJyk7XG4gIH1cblxuICAvLyBzM19pbnB1dF9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNJbnB1dE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM19pbnB1dF9tb2RlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uTW9uaXRvcmluZ0lucHV0c0VuZHBvaW50SW5wdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbk1vbml0b3JpbmdJbnB1dHNFbmRwb2ludElucHV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuZHBvaW50X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW5kcG9pbnROYW1lKSxcbiAgICBsb2NhbF9wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvY2FsUGF0aCksXG4gICAgczNfZGF0YV9kaXN0cmlidXRpb25fdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM0RhdGFEaXN0cmlidXRpb25UeXBlKSxcbiAgICBzM19pbnB1dF9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzSW5wdXRNb2RlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnTW9uaXRvcmluZ0pvYkRlZmluaXRpb25Nb25pdG9yaW5nSW5wdXRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5kcG9pbnRfaW5wdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRwb2ludElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VuZHBvaW50X2lucHV0JykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbk1vbml0b3JpbmdJbnB1dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbk1vbml0b3JpbmdJbnB1dHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5kcG9pbnRfaW5wdXQ6IGRhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uTW9uaXRvcmluZ0lucHV0c0VuZHBvaW50SW5wdXRUb1RlcnJhZm9ybShzdHJ1Y3QhLmVuZHBvaW50SW5wdXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbk1vbml0b3JpbmdPdXRwdXRDb25maWdNb25pdG9yaW5nT3V0cHV0c1MzT3V0cHV0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbG9jYWxfcGF0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvY2FsUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvY2FsX3BhdGgnKTtcbiAgfVxuXG4gIC8vIHMzX3VwbG9hZF9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNVcGxvYWRNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfdXBsb2FkX21vZGUnKTtcbiAgfVxuXG4gIC8vIHMzX3VyaSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzVXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfdXJpJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uTW9uaXRvcmluZ091dHB1dENvbmZpZ01vbml0b3JpbmdPdXRwdXRzUzNPdXRwdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbk1vbml0b3JpbmdPdXRwdXRDb25maWdNb25pdG9yaW5nT3V0cHV0c1MzT3V0cHV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGxvY2FsX3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9jYWxQYXRoKSxcbiAgICBzM191cGxvYWRfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM1VwbG9hZE1vZGUpLFxuICAgIHMzX3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM1VyaSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uTW9uaXRvcmluZ091dHB1dENvbmZpZ01vbml0b3JpbmdPdXRwdXRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gczNfb3V0cHV0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNPdXRwdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnczNfb3V0cHV0JykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbk1vbml0b3JpbmdPdXRwdXRDb25maWdNb25pdG9yaW5nT3V0cHV0c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uTW9uaXRvcmluZ091dHB1dENvbmZpZ01vbml0b3JpbmdPdXRwdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHMzX291dHB1dDogZGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnTW9uaXRvcmluZ0pvYkRlZmluaXRpb25Nb25pdG9yaW5nT3V0cHV0Q29uZmlnTW9uaXRvcmluZ091dHB1dHNTM091dHB1dFRvVGVycmFmb3JtKHN0cnVjdCEuczNPdXRwdXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbk1vbml0b3JpbmdPdXRwdXRDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2lkJyk7XG4gIH1cblxuICAvLyBtb25pdG9yaW5nX291dHB1dHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtb25pdG9yaW5nT3V0cHV0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtb25pdG9yaW5nX291dHB1dHMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uTW9uaXRvcmluZ091dHB1dENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uTW9uaXRvcmluZ091dHB1dENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUlkKSxcbiAgICBtb25pdG9yaW5nX291dHB1dHM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnTW9uaXRvcmluZ0pvYkRlZmluaXRpb25Nb25pdG9yaW5nT3V0cHV0Q29uZmlnTW9uaXRvcmluZ091dHB1dHNUb1RlcnJhZm9ybSkoc3RydWN0IS5tb25pdG9yaW5nT3V0cHV0cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uTW9uaXRvcmluZ1Jlc291cmNlc0NsdXN0ZXJDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpbnN0YW5jZV9jb3VudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbnN0YW5jZV9jb3VudCcpO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3R5cGUnKTtcbiAgfVxuXG4gIC8vIHZvbHVtZV9rbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdm9sdW1lS21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2b2x1bWVfa21zX2tleV9pZCcpO1xuICB9XG5cbiAgLy8gdm9sdW1lX3NpemVfaW5fZ2IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2b2x1bWVTaXplSW5HYigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZvbHVtZV9zaXplX2luX2diJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uTW9uaXRvcmluZ1Jlc291cmNlc0NsdXN0ZXJDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbk1vbml0b3JpbmdSZXNvdXJjZXNDbHVzdGVyQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlQ291bnQpLFxuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICB2b2x1bWVfa21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVLbXNLZXlJZCksXG4gICAgdm9sdW1lX3NpemVfaW5fZ2I6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lU2l6ZUluR2IpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbk1vbml0b3JpbmdSZXNvdXJjZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjbHVzdGVyX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2x1c3Rlcl9jb25maWcnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uTW9uaXRvcmluZ1Jlc291cmNlc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uTW9uaXRvcmluZ1Jlc291cmNlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjbHVzdGVyX2NvbmZpZzogZGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnTW9uaXRvcmluZ0pvYkRlZmluaXRpb25Nb25pdG9yaW5nUmVzb3VyY2VzQ2x1c3RlckNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2x1c3RlckNvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uTmV0d29ya0NvbmZpZ1ZwY0NvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHNlY3VyaXR5X2dyb3VwX2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc2VjdXJpdHlfZ3JvdXBfaWRzJyk7XG4gIH1cblxuICAvLyBzdWJuZXRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VibmV0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdWJuZXRzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uTmV0d29ya0NvbmZpZ1ZwY0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uTmV0d29ya0NvbmZpZ1ZwY0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzZWN1cml0eV9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2VjdXJpdHlHcm91cElkcyksXG4gICAgc3VibmV0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zdWJuZXRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnTW9uaXRvcmluZ0pvYkRlZmluaXRpb25OZXR3b3JrQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlX2ludGVyX2NvbnRhaW5lcl90cmFmZmljX2VuY3J5cHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVJbnRlckNvbnRhaW5lclRyYWZmaWNFbmNyeXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9pbnRlcl9jb250YWluZXJfdHJhZmZpY19lbmNyeXB0aW9uJyk7XG4gIH1cblxuICAvLyBlbmFibGVfbmV0d29ya19pc29sYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVOZXR3b3JrSXNvbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9uZXR3b3JrX2lzb2xhdGlvbicpO1xuICB9XG5cbiAgLy8gdnBjX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZwY0NvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2cGNfY29uZmlnJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbk5ldHdvcmtDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbk5ldHdvcmtDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlX2ludGVyX2NvbnRhaW5lcl90cmFmZmljX2VuY3J5cHRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZUludGVyQ29udGFpbmVyVHJhZmZpY0VuY3J5cHRpb24pLFxuICAgIGVuYWJsZV9uZXR3b3JrX2lzb2xhdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlTmV0d29ya0lzb2xhdGlvbiksXG4gICAgdnBjX2NvbmZpZzogZGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnTW9uaXRvcmluZ0pvYkRlZmluaXRpb25OZXR3b3JrQ29uZmlnVnBjQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS52cGNDb25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvblN0b3BwaW5nQ29uZGl0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbWF4X3J1bnRpbWVfaW5fc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1heFJ1bnRpbWVJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfcnVudGltZV9pbl9zZWNvbmRzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uU3RvcHBpbmdDb25kaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvblN0b3BwaW5nQ29uZGl0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1heF9ydW50aW1lX2luX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4UnVudGltZUluU2Vjb25kcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYmFzZWxpbmVfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYmFzZWxpbmVDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYmFzZWxpbmVfY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZW52aXJvbm1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbnZpcm9ubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbnZpcm9ubWVudCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG1vbml0b3JpbmdfYXBwX3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtb25pdG9yaW5nQXBwU3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtb25pdG9yaW5nX2FwcF9zcGVjaWZpY2F0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbW9uaXRvcmluZ19pbnB1dHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtb25pdG9yaW5nSW5wdXRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21vbml0b3JpbmdfaW5wdXRzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbW9uaXRvcmluZ19vdXRwdXRfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbW9uaXRvcmluZ091dHB1dENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtb25pdG9yaW5nX291dHB1dF9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBtb25pdG9yaW5nX3Jlc291cmNlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1vbml0b3JpbmdSZXNvdXJjZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbW9uaXRvcmluZ19yZXNvdXJjZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBuZXR3b3JrX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5ldHdvcmtDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbmV0d29ya19jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gc3RvcHBpbmdfY29uZGl0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RvcHBpbmdDb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RvcHBpbmdfY29uZGl0aW9uJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJhc2VsaW5lX2NvbmZpZzogZGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnTW9uaXRvcmluZ0pvYkRlZmluaXRpb25CYXNlbGluZUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuYmFzZWxpbmVDb25maWcpLFxuICAgIGVudmlyb25tZW50OiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmVudmlyb25tZW50KSxcbiAgICBtb25pdG9yaW5nX2FwcF9zcGVjaWZpY2F0aW9uOiBkYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbk1vbml0b3JpbmdBcHBTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5tb25pdG9yaW5nQXBwU3BlY2lmaWNhdGlvbiksXG4gICAgbW9uaXRvcmluZ19pbnB1dHM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnTW9uaXRvcmluZ0pvYkRlZmluaXRpb25Nb25pdG9yaW5nSW5wdXRzVG9UZXJyYWZvcm0pKHN0cnVjdCEubW9uaXRvcmluZ0lucHV0cyksXG4gICAgbW9uaXRvcmluZ19vdXRwdXRfY29uZmlnOiBkYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbk1vbml0b3JpbmdPdXRwdXRDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1vbml0b3JpbmdPdXRwdXRDb25maWcpLFxuICAgIG1vbml0b3JpbmdfcmVzb3VyY2VzOiBkYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbk1vbml0b3JpbmdSZXNvdXJjZXNUb1RlcnJhZm9ybShzdHJ1Y3QhLm1vbml0b3JpbmdSZXNvdXJjZXMpLFxuICAgIG5ldHdvcmtfY29uZmlnOiBkYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdNb25pdG9yaW5nSm9iRGVmaW5pdGlvbk5ldHdvcmtDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5ldHdvcmtDb25maWcpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHN0b3BwaW5nX2NvbmRpdGlvbjogZGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnTW9uaXRvcmluZ0pvYkRlZmluaXRpb25TdG9wcGluZ0NvbmRpdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuc3RvcHBpbmdDb25kaXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWdTY2hlZHVsZUNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHNjaGVkdWxlX2V4cHJlc3Npb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzY2hlZHVsZUV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzY2hlZHVsZV9leHByZXNzaW9uJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ1NjaGVkdWxlQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnU2NoZWR1bGVDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2NoZWR1bGVfZXhwcmVzc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zY2hlZHVsZUV4cHJlc3Npb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVNb25pdG9yaW5nU2NoZWR1bGVDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBtb25pdG9yaW5nX2pvYl9kZWZpbml0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbW9uaXRvcmluZ0pvYkRlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbW9uaXRvcmluZ19qb2JfZGVmaW5pdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG1vbml0b3Jpbmdfam9iX2RlZmluaXRpb25fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1vbml0b3JpbmdKb2JEZWZpbml0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21vbml0b3Jpbmdfam9iX2RlZmluaXRpb25fbmFtZScpO1xuICB9XG5cbiAgLy8gbW9uaXRvcmluZ190eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbW9uaXRvcmluZ1R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtb25pdG9yaW5nX3R5cGUnKTtcbiAgfVxuXG4gIC8vIHNjaGVkdWxlX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNjaGVkdWxlQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NjaGVkdWxlX2NvbmZpZycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlTW9uaXRvcmluZ1NjaGVkdWxlQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1vbml0b3Jpbmdfam9iX2RlZmluaXRpb246IGRhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ01vbml0b3JpbmdKb2JEZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5tb25pdG9yaW5nSm9iRGVmaW5pdGlvbiksXG4gICAgbW9uaXRvcmluZ19qb2JfZGVmaW5pdGlvbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1vbml0b3JpbmdKb2JEZWZpbml0aW9uTmFtZSksXG4gICAgbW9uaXRvcmluZ190eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1vbml0b3JpbmdUeXBlKSxcbiAgICBzY2hlZHVsZV9jb25maWc6IGRhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZU1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ1NjaGVkdWxlQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5zY2hlZHVsZUNvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZVRhZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjU2FnZW1ha2VyTW9uaXRvcmluZ1NjaGVkdWxlVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9zYWdlbWFrZXJfbW9uaXRvcmluZ19zY2hlZHVsZS5odG1sIGF3c2NjX3NhZ2VtYWtlcl9tb25pdG9yaW5nX3NjaGVkdWxlfVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX3NhZ2VtYWtlcl9tb25pdG9yaW5nX3NjaGVkdWxlXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL3NhZ2VtYWtlcl9tb25pdG9yaW5nX3NjaGVkdWxlLmh0bWwgYXdzY2Nfc2FnZW1ha2VyX21vbml0b3Jpbmdfc2NoZWR1bGV9IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY1NhZ2VtYWtlck1vbml0b3JpbmdTY2hlZHVsZUNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzY2NTYWdlbWFrZXJNb25pdG9yaW5nU2NoZWR1bGVDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX3NhZ2VtYWtlcl9tb25pdG9yaW5nX3NjaGVkdWxlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNyZWF0aW9uX3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmVhdGlvblRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGlvbl90aW1lJyk7XG4gIH1cblxuICAvLyBlbmRwb2ludF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5kcG9pbnRfbmFtZScpO1xuICB9XG5cbiAgLy8gZmFpbHVyZV9yZWFzb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmYWlsdXJlUmVhc29uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmFpbHVyZV9yZWFzb24nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBsYXN0X21vZGlmaWVkX3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0TW9kaWZpZWRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF9tb2RpZmllZF90aW1lJyk7XG4gIH1cblxuICAvLyBsYXN0X21vbml0b3JpbmdfZXhlY3V0aW9uX3N1bW1hcnkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0TW9uaXRvcmluZ0V4ZWN1dGlvblN1bW1hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbGFzdF9tb25pdG9yaW5nX2V4ZWN1dGlvbl9zdW1tYXJ5JykgYXMgYW55O1xuICB9XG5cbiAgLy8gbW9uaXRvcmluZ19zY2hlZHVsZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtb25pdG9yaW5nU2NoZWR1bGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtb25pdG9yaW5nX3NjaGVkdWxlX2FybicpO1xuICB9XG5cbiAgLy8gbW9uaXRvcmluZ19zY2hlZHVsZV9jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtb25pdG9yaW5nU2NoZWR1bGVDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbW9uaXRvcmluZ19zY2hlZHVsZV9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBtb25pdG9yaW5nX3NjaGVkdWxlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtb25pdG9yaW5nU2NoZWR1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbW9uaXRvcmluZ19zY2hlZHVsZV9uYW1lJyk7XG4gIH1cblxuICAvLyBtb25pdG9yaW5nX3NjaGVkdWxlX3N0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1vbml0b3JpbmdTY2hlZHVsZVN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21vbml0b3Jpbmdfc2NoZWR1bGVfc3RhdHVzJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==