"use strict";
// https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.MwaaEnvironment = exports.mwaaEnvironmentNetworkConfigurationToTerraform = exports.mwaaEnvironmentLoggingConfigurationToTerraform = exports.mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform = exports.mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform = exports.mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform = exports.mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform = exports.mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform = void 0;
const cdktf = require("cdktf");
function mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_log_group_arn: cdktf.stringToTerraform(struct.cloudwatchLogGroupArn),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
exports.mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform = mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform;
function mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_log_group_arn: cdktf.stringToTerraform(struct.cloudwatchLogGroupArn),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
exports.mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform = mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform;
function mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_log_group_arn: cdktf.stringToTerraform(struct.cloudwatchLogGroupArn),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
exports.mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform = mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform;
function mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_log_group_arn: cdktf.stringToTerraform(struct.cloudwatchLogGroupArn),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
exports.mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform = mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform;
function mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_log_group_arn: cdktf.stringToTerraform(struct.cloudwatchLogGroupArn),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
exports.mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform = mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform;
function mwaaEnvironmentLoggingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dag_processing_logs: mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct.dagProcessingLogs),
        scheduler_logs: mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct.schedulerLogs),
        task_logs: mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct.taskLogs),
        webserver_logs: mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct.webserverLogs),
        worker_logs: mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct.workerLogs),
    };
}
exports.mwaaEnvironmentLoggingConfigurationToTerraform = mwaaEnvironmentLoggingConfigurationToTerraform;
function mwaaEnvironmentNetworkConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
exports.mwaaEnvironmentNetworkConfigurationToTerraform = mwaaEnvironmentNetworkConfigurationToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html awscc_mwaa_environment}
*/
class MwaaEnvironment extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html awscc_mwaa_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MwaaEnvironmentConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_mwaa_environment',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._airflowConfigurationOptions = config.airflowConfigurationOptions;
        this._airflowVersion = config.airflowVersion;
        this._dagS3Path = config.dagS3Path;
        this._environmentClass = config.environmentClass;
        this._executionRoleArn = config.executionRoleArn;
        this._kmsKey = config.kmsKey;
        this._loggingConfiguration = config.loggingConfiguration;
        this._maxWorkers = config.maxWorkers;
        this._minWorkers = config.minWorkers;
        this._name = config.name;
        this._networkConfiguration = config.networkConfiguration;
        this._pluginsS3ObjectVersion = config.pluginsS3ObjectVersion;
        this._pluginsS3Path = config.pluginsS3Path;
        this._requirementsS3ObjectVersion = config.requirementsS3ObjectVersion;
        this._requirementsS3Path = config.requirementsS3Path;
        this._schedulers = config.schedulers;
        this._sourceBucketArn = config.sourceBucketArn;
        this._tags = config.tags;
        this._webserverAccessMode = config.webserverAccessMode;
        this._weeklyMaintenanceWindowStart = config.weeklyMaintenanceWindowStart;
    }
    get airflowConfigurationOptions() {
        return this.interpolationForAttribute('airflow_configuration_options');
    }
    set airflowConfigurationOptions(value) {
        this._airflowConfigurationOptions = value;
    }
    resetAirflowConfigurationOptions() {
        this._airflowConfigurationOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get airflowConfigurationOptionsInput() {
        return this._airflowConfigurationOptions;
    }
    get airflowVersion() {
        return this.getStringAttribute('airflow_version');
    }
    set airflowVersion(value) {
        this._airflowVersion = value;
    }
    resetAirflowVersion() {
        this._airflowVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get airflowVersionInput() {
        return this._airflowVersion;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get dagS3Path() {
        return this.getStringAttribute('dag_s3_path');
    }
    set dagS3Path(value) {
        this._dagS3Path = value;
    }
    resetDagS3Path() {
        this._dagS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dagS3PathInput() {
        return this._dagS3Path;
    }
    get environmentClass() {
        return this.getStringAttribute('environment_class');
    }
    set environmentClass(value) {
        this._environmentClass = value;
    }
    resetEnvironmentClass() {
        this._environmentClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentClassInput() {
        return this._environmentClass;
    }
    get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    set executionRoleArn(value) {
        this._executionRoleArn = value;
    }
    resetExecutionRoleArn() {
        this._executionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get executionRoleArnInput() {
        return this._executionRoleArn;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    set kmsKey(value) {
        this._kmsKey = value;
    }
    resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyInput() {
        return this._kmsKey;
    }
    get loggingConfiguration() {
        return this.interpolationForAttribute('logging_configuration');
    }
    set loggingConfiguration(value) {
        this._loggingConfiguration = value;
    }
    resetLoggingConfiguration() {
        this._loggingConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loggingConfigurationInput() {
        return this._loggingConfiguration;
    }
    get maxWorkers() {
        return this.getNumberAttribute('max_workers');
    }
    set maxWorkers(value) {
        this._maxWorkers = value;
    }
    resetMaxWorkers() {
        this._maxWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxWorkersInput() {
        return this._maxWorkers;
    }
    get minWorkers() {
        return this.getNumberAttribute('min_workers');
    }
    set minWorkers(value) {
        this._minWorkers = value;
    }
    resetMinWorkers() {
        this._minWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minWorkersInput() {
        return this._minWorkers;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get networkConfiguration() {
        return this.interpolationForAttribute('network_configuration');
    }
    set networkConfiguration(value) {
        this._networkConfiguration = value;
    }
    resetNetworkConfiguration() {
        this._networkConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkConfigurationInput() {
        return this._networkConfiguration;
    }
    get pluginsS3ObjectVersion() {
        return this.getStringAttribute('plugins_s3_object_version');
    }
    set pluginsS3ObjectVersion(value) {
        this._pluginsS3ObjectVersion = value;
    }
    resetPluginsS3ObjectVersion() {
        this._pluginsS3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pluginsS3ObjectVersionInput() {
        return this._pluginsS3ObjectVersion;
    }
    get pluginsS3Path() {
        return this.getStringAttribute('plugins_s3_path');
    }
    set pluginsS3Path(value) {
        this._pluginsS3Path = value;
    }
    resetPluginsS3Path() {
        this._pluginsS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pluginsS3PathInput() {
        return this._pluginsS3Path;
    }
    get requirementsS3ObjectVersion() {
        return this.getStringAttribute('requirements_s3_object_version');
    }
    set requirementsS3ObjectVersion(value) {
        this._requirementsS3ObjectVersion = value;
    }
    resetRequirementsS3ObjectVersion() {
        this._requirementsS3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requirementsS3ObjectVersionInput() {
        return this._requirementsS3ObjectVersion;
    }
    get requirementsS3Path() {
        return this.getStringAttribute('requirements_s3_path');
    }
    set requirementsS3Path(value) {
        this._requirementsS3Path = value;
    }
    resetRequirementsS3Path() {
        this._requirementsS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requirementsS3PathInput() {
        return this._requirementsS3Path;
    }
    get schedulers() {
        return this.getNumberAttribute('schedulers');
    }
    set schedulers(value) {
        this._schedulers = value;
    }
    resetSchedulers() {
        this._schedulers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get schedulersInput() {
        return this._schedulers;
    }
    get sourceBucketArn() {
        return this.getStringAttribute('source_bucket_arn');
    }
    set sourceBucketArn(value) {
        this._sourceBucketArn = value;
    }
    resetSourceBucketArn() {
        this._sourceBucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceBucketArnInput() {
        return this._sourceBucketArn;
    }
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    get webserverAccessMode() {
        return this.getStringAttribute('webserver_access_mode');
    }
    set webserverAccessMode(value) {
        this._webserverAccessMode = value;
    }
    resetWebserverAccessMode() {
        this._webserverAccessMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get webserverAccessModeInput() {
        return this._webserverAccessMode;
    }
    // webserver_url - computed: true, optional: false, required: false
    get webserverUrl() {
        return this.getStringAttribute('webserver_url');
    }
    get weeklyMaintenanceWindowStart() {
        return this.getStringAttribute('weekly_maintenance_window_start');
    }
    set weeklyMaintenanceWindowStart(value) {
        this._weeklyMaintenanceWindowStart = value;
    }
    resetWeeklyMaintenanceWindowStart() {
        this._weeklyMaintenanceWindowStart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get weeklyMaintenanceWindowStartInput() {
        return this._weeklyMaintenanceWindowStart;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            airflow_configuration_options: cdktf.hashMapper(cdktf.anyToTerraform)(this._airflowConfigurationOptions),
            airflow_version: cdktf.stringToTerraform(this._airflowVersion),
            dag_s3_path: cdktf.stringToTerraform(this._dagS3Path),
            environment_class: cdktf.stringToTerraform(this._environmentClass),
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            kms_key: cdktf.stringToTerraform(this._kmsKey),
            logging_configuration: mwaaEnvironmentLoggingConfigurationToTerraform(this._loggingConfiguration),
            max_workers: cdktf.numberToTerraform(this._maxWorkers),
            min_workers: cdktf.numberToTerraform(this._minWorkers),
            name: cdktf.stringToTerraform(this._name),
            network_configuration: mwaaEnvironmentNetworkConfigurationToTerraform(this._networkConfiguration),
            plugins_s3_object_version: cdktf.stringToTerraform(this._pluginsS3ObjectVersion),
            plugins_s3_path: cdktf.stringToTerraform(this._pluginsS3Path),
            requirements_s3_object_version: cdktf.stringToTerraform(this._requirementsS3ObjectVersion),
            requirements_s3_path: cdktf.stringToTerraform(this._requirementsS3Path),
            schedulers: cdktf.numberToTerraform(this._schedulers),
            source_bucket_arn: cdktf.stringToTerraform(this._sourceBucketArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            webserver_access_mode: cdktf.stringToTerraform(this._webserverAccessMode),
            weekly_maintenance_window_start: cdktf.stringToTerraform(this._weeklyMaintenanceWindowStart),
        };
    }
}
exports.MwaaEnvironment = MwaaEnvironment;
// =================
// STATIC PROPERTIES
// =================
MwaaEnvironment.tfResourceType = "awscc_mwaa_environment";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXdhYS1lbnZpcm9ubWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm13YWEtZW52aXJvbm1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdFQUF3RTtBQUN4RSwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFpSy9CLFNBQWdCLCtEQUErRCxDQUFDLE1BQTZEO0lBQzNJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUNoRixPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO0tBQ3JELENBQUE7QUFDSCxDQUFDO0FBUEQsMElBT0M7QUFpQkQsU0FBZ0IsMkRBQTJELENBQUMsTUFBeUQ7SUFDbkksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCx3QkFBd0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO1FBQ2hGLE9BQU8sRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7S0FDckQsQ0FBQTtBQUNILENBQUM7QUFQRCxrSUFPQztBQWlCRCxTQUFnQixzREFBc0QsQ0FBQyxNQUFvRDtJQUN6SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8s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LENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN6RSwrQkFBK0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDO1NBQzdGLENBQUM7SUFDSixDQUFDOztBQTlaSCwwQ0ErWkM7QUE3WkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyw4QkFBYyxHQUFXLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbXdhYV9lbnZpcm9ubWVudC5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgTXdhYUVudmlyb25tZW50Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIEtleS92YWx1ZSBwYWlycyByZXByZXNlbnRpbmcgQWlyZmxvdyBjb25maWd1cmF0aW9uIHZhcmlhYmxlcy5cbiAgICBLZXlzIGFyZSBwcmVmaXhlZCBieSB0aGVpciBzZWN0aW9uOlxuXG4gICAgW2NvcmVdXG4gICAgZGFnc19mb2xkZXI9e0FJUkZMT1dfSE9NRX0vZGFnc1xuXG4gICAgV291bGQgYmUgcmVwcmVzZW50ZWQgYXNcblxuICAgIFwiY29yZS5kYWdzX2ZvbGRlclwiOiBcIntBSVJGTE9XX0hPTUV9L2RhZ3NcIlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbXdhYV9lbnZpcm9ubWVudC5odG1sI2FpcmZsb3dfY29uZmlndXJhdGlvbl9vcHRpb25zIE13YWFFbnZpcm9ubWVudCNhaXJmbG93X2NvbmZpZ3VyYXRpb25fb3B0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgYWlyZmxvd0NvbmZpZ3VyYXRpb25PcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBWZXJzaW9uIG9mIGFpcmZsb3cgdG8gZGVwbG95IHRvIHRoZSBlbnZpcm9ubWVudC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCNhaXJmbG93X3ZlcnNpb24gTXdhYUVudmlyb25tZW50I2FpcmZsb3dfdmVyc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgYWlyZmxvd1ZlcnNpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFJlcHJlc2VudHMgYW4gUzMgcHJlZml4IHJlbGF0aXZlIHRvIHRoZSByb290IG9mIGFuIFMzIGJ1Y2tldC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCNkYWdfczNfcGF0aCBNd2FhRW52aXJvbm1lbnQjZGFnX3MzX3BhdGh9XG4gICovXG4gIHJlYWRvbmx5IGRhZ1MzUGF0aD86IHN0cmluZztcbiAgLyoqXG4gICogVGVtcGxhdGVkIGNvbmZpZ3VyYXRpb24gZm9yIGFpcmZsb3cgcHJvY2Vzc2VzIGFuZCBiYWNraW5nIGluZnJhc3RydWN0dXJlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbXdhYV9lbnZpcm9ubWVudC5odG1sI2Vudmlyb25tZW50X2NsYXNzIE13YWFFbnZpcm9ubWVudCNlbnZpcm9ubWVudF9jbGFzc31cbiAgKi9cbiAgcmVhZG9ubHkgZW52aXJvbm1lbnRDbGFzcz86IHN0cmluZztcbiAgLyoqXG4gICogSUFNIHJvbGUgdG8gYmUgdXNlZCBieSB0YXNrcy5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCNleGVjdXRpb25fcm9sZV9hcm4gTXdhYUVudmlyb25tZW50I2V4ZWN1dGlvbl9yb2xlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgZXhlY3V0aW9uUm9sZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogVGhlIGlkZW50aWZpZXIgb2YgdGhlIEFXUyBLZXkgTWFuYWdlbWVudCBTZXJ2aWNlIChBV1MgS01TKSBjdXN0b21lciBtYXN0ZXIga2V5IChDTUspIHRvIHVzZSBmb3IgTVdBQSBkYXRhIGVuY3J5cHRpb24uXG5cbiAgICBZb3UgY2FuIHNwZWNpZnkgdGhlIENNSyB1c2luZyBhbnkgb2YgdGhlIGZvbGxvd2luZzpcblxuICAgIEtleSBJRC4gRm9yIGV4YW1wbGUsIGtleS8xMjM0YWJjZC0xMmFiLTM0Y2QtNTZlZi0xMjM0NTY3ODkwYWIuXG5cbiAgICBLZXkgYWxpYXMuIEZvciBleGFtcGxlLCBhbGlhcy9FeGFtcGxlQWxpYXMuXG5cbiAgICBLZXkgQVJOLiBGb3IgZXhhbXBsZSwgYXJuOmF3czprbXM6dXMtZWFzdC0xOjAxMjM0NTY3ODkxMDprZXkvYWJjZDEyMzQtYTEyMy00NTZhLWExMmItYTEyM2I0Y2Q1NmVmLlxuXG4gICAgQWxpYXMgQVJOLiBGb3IgZXhhbXBsZSwgYXJuOmF3czprbXM6dXMtZWFzdC0xOjAxMjM0NTY3ODkxMDphbGlhcy9FeGFtcGxlQWxpYXMuXG5cbiAgICBBV1MgYXV0aGVudGljYXRlcyB0aGUgQ01LIGFzeW5jaHJvbm91c2x5LiBUaGVyZWZvcmUsIGlmIHlvdSBzcGVjaWZ5IGFuIElELCBhbGlhcywgb3IgQVJOIHRoYXQgaXMgbm90IHZhbGlkLCB0aGUgYWN0aW9uIGNhbiBhcHBlYXIgdG8gY29tcGxldGUsIGJ1dCBldmVudHVhbGx5IGZhaWxzLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbXdhYV9lbnZpcm9ubWVudC5odG1sI2ttc19rZXkgTXdhYUVudmlyb25tZW50I2ttc19rZXl9XG4gICovXG4gIHJlYWRvbmx5IGttc0tleT86IHN0cmluZztcbiAgLyoqXG4gICogTG9nZ2luZyBjb25maWd1cmF0aW9uIGZvciB0aGUgZW52aXJvbm1lbnQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9td2FhX2Vudmlyb25tZW50Lmh0bWwjbG9nZ2luZ19jb25maWd1cmF0aW9uIE13YWFFbnZpcm9ubWVudCNsb2dnaW5nX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGxvZ2dpbmdDb25maWd1cmF0aW9uPzogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb247XG4gIC8qKlxuICAqIE1heGltdW0gd29ya2VyIGNvbXB1dGUgdW5pdHMuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9td2FhX2Vudmlyb25tZW50Lmh0bWwjbWF4X3dvcmtlcnMgTXdhYUVudmlyb25tZW50I21heF93b3JrZXJzfVxuICAqL1xuICByZWFkb25seSBtYXhXb3JrZXJzPzogbnVtYmVyO1xuICAvKipcbiAgKiBNaW5pbXVtIHdvcmtlciBjb21wdXRlIHVuaXRzLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbXdhYV9lbnZpcm9ubWVudC5odG1sI21pbl93b3JrZXJzIE13YWFFbnZpcm9ubWVudCNtaW5fd29ya2Vyc31cbiAgKi9cbiAgcmVhZG9ubHkgbWluV29ya2Vycz86IG51bWJlcjtcbiAgLyoqXG4gICogQ3VzdG9tZXItZGVmaW5lZCBpZGVudGlmaWVyIGZvciB0aGUgZW52aXJvbm1lbnQsIHVuaXF1ZSBwZXIgY3VzdG9tZXIgcmVnaW9uLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbXdhYV9lbnZpcm9ubWVudC5odG1sI25hbWUgTXdhYUVudmlyb25tZW50I25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogQ29uZmlndXJlcyB0aGUgbmV0d29yayByZXNvdXJjZXMgb2YgdGhlIGVudmlyb25tZW50LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbXdhYV9lbnZpcm9ubWVudC5odG1sI25ldHdvcmtfY29uZmlndXJhdGlvbiBNd2FhRW52aXJvbm1lbnQjbmV0d29ya19jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBuZXR3b3JrQ29uZmlndXJhdGlvbj86IE13YWFFbnZpcm9ubWVudE5ldHdvcmtDb25maWd1cmF0aW9uO1xuICAvKipcbiAgKiBSZXByZXNlbnRzIGFuIHZlcnNpb24gSUQgZm9yIGFuIFMzIG9iamVjdC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCNwbHVnaW5zX3MzX29iamVjdF92ZXJzaW9uIE13YWFFbnZpcm9ubWVudCNwbHVnaW5zX3MzX29iamVjdF92ZXJzaW9ufVxuICAqL1xuICByZWFkb25seSBwbHVnaW5zUzNPYmplY3RWZXJzaW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBSZXByZXNlbnRzIGFuIFMzIHByZWZpeCByZWxhdGl2ZSB0byB0aGUgcm9vdCBvZiBhbiBTMyBidWNrZXQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9td2FhX2Vudmlyb25tZW50Lmh0bWwjcGx1Z2luc19zM19wYXRoIE13YWFFbnZpcm9ubWVudCNwbHVnaW5zX3MzX3BhdGh9XG4gICovXG4gIHJlYWRvbmx5IHBsdWdpbnNTM1BhdGg/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFJlcHJlc2VudHMgYW4gdmVyc2lvbiBJRCBmb3IgYW4gUzMgb2JqZWN0LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbXdhYV9lbnZpcm9ubWVudC5odG1sI3JlcXVpcmVtZW50c19zM19vYmplY3RfdmVyc2lvbiBNd2FhRW52aXJvbm1lbnQjcmVxdWlyZW1lbnRzX3MzX29iamVjdF92ZXJzaW9ufVxuICAqL1xuICByZWFkb25seSByZXF1aXJlbWVudHNTM09iamVjdFZlcnNpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFJlcHJlc2VudHMgYW4gUzMgcHJlZml4IHJlbGF0aXZlIHRvIHRoZSByb290IG9mIGFuIFMzIGJ1Y2tldC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCNyZXF1aXJlbWVudHNfczNfcGF0aCBNd2FhRW52aXJvbm1lbnQjcmVxdWlyZW1lbnRzX3MzX3BhdGh9XG4gICovXG4gIHJlYWRvbmx5IHJlcXVpcmVtZW50c1MzUGF0aD86IHN0cmluZztcbiAgLyoqXG4gICogU2NoZWR1bGVyIGNvbXB1dGUgdW5pdHMuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9td2FhX2Vudmlyb25tZW50Lmh0bWwjc2NoZWR1bGVycyBNd2FhRW52aXJvbm1lbnQjc2NoZWR1bGVyc31cbiAgKi9cbiAgcmVhZG9ubHkgc2NoZWR1bGVycz86IG51bWJlcjtcbiAgLyoqXG4gICogQVJOIGZvciB0aGUgQVdTIFMzIGJ1Y2tldCB0byB1c2UgYXMgdGhlIHNvdXJjZSBvZiBEQUdzIGFuZCBwbHVnaW5zIGZvciB0aGUgZW52aXJvbm1lbnQuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9td2FhX2Vudmlyb25tZW50Lmh0bWwjc291cmNlX2J1Y2tldF9hcm4gTXdhYUVudmlyb25tZW50I3NvdXJjZV9idWNrZXRfYXJufVxuICAqL1xuICByZWFkb25seSBzb3VyY2VCdWNrZXRBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIEEgbWFwIG9mIHRhZ3MgZm9yIHRoZSBlbnZpcm9ubWVudC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCN0YWdzIE13YWFFbnZpcm9ubWVudCN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBDaG9pY2UgZm9yIG1vZGUgb2Ygd2Vic2VydmVyIGFjY2VzcyBpbmNsdWRpbmcgb3ZlciBwdWJsaWMgaW50ZXJuZXQgb3IgdmlhIHByaXZhdGUgVlBDIGVuZHBvaW50LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbXdhYV9lbnZpcm9ubWVudC5odG1sI3dlYnNlcnZlcl9hY2Nlc3NfbW9kZSBNd2FhRW52aXJvbm1lbnQjd2Vic2VydmVyX2FjY2Vzc19tb2RlfVxuICAqL1xuICByZWFkb25seSB3ZWJzZXJ2ZXJBY2Nlc3NNb2RlPzogc3RyaW5nO1xuICAvKipcbiAgKiBTdGFydCB0aW1lIGZvciB0aGUgd2Vla2x5IG1haW50ZW5hbmNlIHdpbmRvdy5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCN3ZWVrbHlfbWFpbnRlbmFuY2Vfd2luZG93X3N0YXJ0IE13YWFFbnZpcm9ubWVudCN3ZWVrbHlfbWFpbnRlbmFuY2Vfd2luZG93X3N0YXJ0fVxuICAqL1xuICByZWFkb25seSB3ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0Pzogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbkRhZ1Byb2Nlc3NpbmdMb2dzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9td2FhX2Vudmlyb25tZW50Lmh0bWwjY2xvdWR3YXRjaF9sb2dfZ3JvdXBfYXJuIE13YWFFbnZpcm9ubWVudCNjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm59XG4gICovXG4gIHJlYWRvbmx5IGNsb3Vkd2F0Y2hMb2dHcm91cEFybjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCNlbmFibGVkIE13YWFFbnZpcm9ubWVudCNlbmFibGVkfVxuICAqL1xuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCNsb2dfbGV2ZWwgTXdhYUVudmlyb25tZW50I2xvZ19sZXZlbH1cbiAgKi9cbiAgcmVhZG9ubHkgbG9nTGV2ZWw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbkRhZ1Byb2Nlc3NpbmdMb2dzVG9UZXJyYWZvcm0oc3RydWN0PzogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25EYWdQcm9jZXNzaW5nTG9ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaExvZ0dyb3VwQXJuKSxcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBsb2dfbGV2ZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nTGV2ZWwpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25TY2hlZHVsZXJMb2dzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9td2FhX2Vudmlyb25tZW50Lmh0bWwjY2xvdWR3YXRjaF9sb2dfZ3JvdXBfYXJuIE13YWFFbnZpcm9ubWVudCNjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm59XG4gICovXG4gIHJlYWRvbmx5IGNsb3Vkd2F0Y2hMb2dHcm91cEFybjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCNlbmFibGVkIE13YWFFbnZpcm9ubWVudCNlbmFibGVkfVxuICAqL1xuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCNsb2dfbGV2ZWwgTXdhYUVudmlyb25tZW50I2xvZ19sZXZlbH1cbiAgKi9cbiAgcmVhZG9ubHkgbG9nTGV2ZWw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblNjaGVkdWxlckxvZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblNjaGVkdWxlckxvZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2xvdWR3YXRjaF9sb2dfZ3JvdXBfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hMb2dHcm91cEFybiksXG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgbG9nX2xldmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0xldmVsKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uVGFza0xvZ3Mge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCNjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm4gTXdhYUVudmlyb25tZW50I2Nsb3Vkd2F0Y2hfbG9nX2dyb3VwX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgY2xvdWR3YXRjaExvZ0dyb3VwQXJuOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbXdhYV9lbnZpcm9ubWVudC5odG1sI2VuYWJsZWQgTXdhYUVudmlyb25tZW50I2VuYWJsZWR9XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbXdhYV9lbnZpcm9ubWVudC5odG1sI2xvZ19sZXZlbCBNd2FhRW52aXJvbm1lbnQjbG9nX2xldmVsfVxuICAqL1xuICByZWFkb25seSBsb2dMZXZlbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uVGFza0xvZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblRhc2tMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNsb3Vkd2F0Y2hfbG9nX2dyb3VwX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoTG9nR3JvdXBBcm4pLFxuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19sZXZlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dMZXZlbCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldlYnNlcnZlckxvZ3Mge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCNjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm4gTXdhYUVudmlyb25tZW50I2Nsb3Vkd2F0Y2hfbG9nX2dyb3VwX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgY2xvdWR3YXRjaExvZ0dyb3VwQXJuOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbXdhYV9lbnZpcm9ubWVudC5odG1sI2VuYWJsZWQgTXdhYUVudmlyb25tZW50I2VuYWJsZWR9XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbXdhYV9lbnZpcm9ubWVudC5odG1sI2xvZ19sZXZlbCBNd2FhRW52aXJvbm1lbnQjbG9nX2xldmVsfVxuICAqL1xuICByZWFkb25seSBsb2dMZXZlbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV2Vic2VydmVyTG9nc1RvVGVycmFmb3JtKHN0cnVjdD86IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV2Vic2VydmVyTG9ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaExvZ0dyb3VwQXJuKSxcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBsb2dfbGV2ZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nTGV2ZWwpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25Xb3JrZXJMb2dzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9td2FhX2Vudmlyb25tZW50Lmh0bWwjY2xvdWR3YXRjaF9sb2dfZ3JvdXBfYXJuIE13YWFFbnZpcm9ubWVudCNjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm59XG4gICovXG4gIHJlYWRvbmx5IGNsb3Vkd2F0Y2hMb2dHcm91cEFybjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCNlbmFibGVkIE13YWFFbnZpcm9ubWVudCNlbmFibGVkfVxuICAqL1xuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCNsb2dfbGV2ZWwgTXdhYUVudmlyb25tZW50I2xvZ19sZXZlbH1cbiAgKi9cbiAgcmVhZG9ubHkgbG9nTGV2ZWw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldvcmtlckxvZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldvcmtlckxvZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2xvdWR3YXRjaF9sb2dfZ3JvdXBfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hMb2dHcm91cEFybiksXG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgbG9nX2xldmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0xldmVsKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogTG9nZ2luZyBjb25maWd1cmF0aW9uIGZvciBhIHNwZWNpZmljIGFpcmZsb3cgY29tcG9uZW50LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbXdhYV9lbnZpcm9ubWVudC5odG1sI2RhZ19wcm9jZXNzaW5nX2xvZ3MgTXdhYUVudmlyb25tZW50I2RhZ19wcm9jZXNzaW5nX2xvZ3N9XG4gICovXG4gIHJlYWRvbmx5IGRhZ1Byb2Nlc3NpbmdMb2dzPzogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25EYWdQcm9jZXNzaW5nTG9ncztcbiAgLyoqXG4gICogTG9nZ2luZyBjb25maWd1cmF0aW9uIGZvciBhIHNwZWNpZmljIGFpcmZsb3cgY29tcG9uZW50LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbXdhYV9lbnZpcm9ubWVudC5odG1sI3NjaGVkdWxlcl9sb2dzIE13YWFFbnZpcm9ubWVudCNzY2hlZHVsZXJfbG9nc31cbiAgKi9cbiAgcmVhZG9ubHkgc2NoZWR1bGVyTG9ncz86IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uU2NoZWR1bGVyTG9ncztcbiAgLyoqXG4gICogTG9nZ2luZyBjb25maWd1cmF0aW9uIGZvciBhIHNwZWNpZmljIGFpcmZsb3cgY29tcG9uZW50LlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvbXdhYV9lbnZpcm9ubWVudC5odG1sI3Rhc2tfbG9ncyBNd2FhRW52aXJvbm1lbnQjdGFza19sb2dzfVxuICAqL1xuICByZWFkb25seSB0YXNrTG9ncz86IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uVGFza0xvZ3M7XG4gIC8qKlxuICAqIExvZ2dpbmcgY29uZmlndXJhdGlvbiBmb3IgYSBzcGVjaWZpYyBhaXJmbG93IGNvbXBvbmVudC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCN3ZWJzZXJ2ZXJfbG9ncyBNd2FhRW52aXJvbm1lbnQjd2Vic2VydmVyX2xvZ3N9XG4gICovXG4gIHJlYWRvbmx5IHdlYnNlcnZlckxvZ3M/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldlYnNlcnZlckxvZ3M7XG4gIC8qKlxuICAqIExvZ2dpbmcgY29uZmlndXJhdGlvbiBmb3IgYSBzcGVjaWZpYyBhaXJmbG93IGNvbXBvbmVudC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCN3b3JrZXJfbG9ncyBNd2FhRW52aXJvbm1lbnQjd29ya2VyX2xvZ3N9XG4gICovXG4gIHJlYWRvbmx5IHdvcmtlckxvZ3M/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldvcmtlckxvZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhZ19wcm9jZXNzaW5nX2xvZ3M6IG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uRGFnUHJvY2Vzc2luZ0xvZ3NUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhZ1Byb2Nlc3NpbmdMb2dzKSxcbiAgICBzY2hlZHVsZXJfbG9nczogbXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25TY2hlZHVsZXJMb2dzVG9UZXJyYWZvcm0oc3RydWN0IS5zY2hlZHVsZXJMb2dzKSxcbiAgICB0YXNrX2xvZ3M6IG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uVGFza0xvZ3NUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhc2tMb2dzKSxcbiAgICB3ZWJzZXJ2ZXJfbG9nczogbXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25XZWJzZXJ2ZXJMb2dzVG9UZXJyYWZvcm0oc3RydWN0IS53ZWJzZXJ2ZXJMb2dzKSxcbiAgICB3b3JrZXJfbG9nczogbXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25Xb3JrZXJMb2dzVG9UZXJyYWZvcm0oc3RydWN0IS53b3JrZXJMb2dzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE13YWFFbnZpcm9ubWVudE5ldHdvcmtDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogQSBsaXN0IG9mIHNlY3VyaXR5IGdyb3VwcyB0byB1c2UgZm9yIHRoZSBlbnZpcm9ubWVudC5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL213YWFfZW52aXJvbm1lbnQuaHRtbCNzZWN1cml0eV9ncm91cF9pZHMgTXdhYUVudmlyb25tZW50I3NlY3VyaXR5X2dyb3VwX2lkc31cbiAgKi9cbiAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBBIGxpc3Qgb2Ygc3VibmV0cyB0byB1c2UgZm9yIHRoZSBlbnZpcm9ubWVudC4gVGhlc2UgbXVzdCBiZSBwcml2YXRlIHN1Ym5ldHMsIGluIHRoZSBzYW1lIFZQQywgaW4gdHdvIGRpZmZlcmVudCBhdmFpbGFiaWxpdHkgem9uZXMuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9td2FhX2Vudmlyb25tZW50Lmh0bWwjc3VibmV0X2lkcyBNd2FhRW52aXJvbm1lbnQjc3VibmV0X2lkc31cbiAgKi9cbiAgcmVhZG9ubHkgc3VibmV0SWRzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtd2FhRW52aXJvbm1lbnROZXR3b3JrQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IE13YWFFbnZpcm9ubWVudE5ldHdvcmtDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zZWN1cml0eUdyb3VwSWRzKSxcbiAgICBzdWJuZXRfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN1Ym5ldElkcyksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9td2FhX2Vudmlyb25tZW50Lmh0bWwgYXdzY2NfbXdhYV9lbnZpcm9ubWVudH1cbiovXG5leHBvcnQgY2xhc3MgTXdhYUVudmlyb25tZW50IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfbXdhYV9lbnZpcm9ubWVudFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9td2FhX2Vudmlyb25tZW50Lmh0bWwgYXdzY2NfbXdhYV9lbnZpcm9ubWVudH0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgTXdhYUVudmlyb25tZW50Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IE13YWFFbnZpcm9ubWVudENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfbXdhYV9lbnZpcm9ubWVudCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FpcmZsb3dDb25maWd1cmF0aW9uT3B0aW9ucyA9IGNvbmZpZy5haXJmbG93Q29uZmlndXJhdGlvbk9wdGlvbnM7XG4gICAgdGhpcy5fYWlyZmxvd1ZlcnNpb24gPSBjb25maWcuYWlyZmxvd1ZlcnNpb247XG4gICAgdGhpcy5fZGFnUzNQYXRoID0gY29uZmlnLmRhZ1MzUGF0aDtcbiAgICB0aGlzLl9lbnZpcm9ubWVudENsYXNzID0gY29uZmlnLmVudmlyb25tZW50Q2xhc3M7XG4gICAgdGhpcy5fZXhlY3V0aW9uUm9sZUFybiA9IGNvbmZpZy5leGVjdXRpb25Sb2xlQXJuO1xuICAgIHRoaXMuX2ttc0tleSA9IGNvbmZpZy5rbXNLZXk7XG4gICAgdGhpcy5fbG9nZ2luZ0NvbmZpZ3VyYXRpb24gPSBjb25maWcubG9nZ2luZ0NvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fbWF4V29ya2VycyA9IGNvbmZpZy5tYXhXb3JrZXJzO1xuICAgIHRoaXMuX21pbldvcmtlcnMgPSBjb25maWcubWluV29ya2VycztcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fbmV0d29ya0NvbmZpZ3VyYXRpb24gPSBjb25maWcubmV0d29ya0NvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fcGx1Z2luc1MzT2JqZWN0VmVyc2lvbiA9IGNvbmZpZy5wbHVnaW5zUzNPYmplY3RWZXJzaW9uO1xuICAgIHRoaXMuX3BsdWdpbnNTM1BhdGggPSBjb25maWcucGx1Z2luc1MzUGF0aDtcbiAgICB0aGlzLl9yZXF1aXJlbWVudHNTM09iamVjdFZlcnNpb24gPSBjb25maWcucmVxdWlyZW1lbnRzUzNPYmplY3RWZXJzaW9uO1xuICAgIHRoaXMuX3JlcXVpcmVtZW50c1MzUGF0aCA9IGNvbmZpZy5yZXF1aXJlbWVudHNTM1BhdGg7XG4gICAgdGhpcy5fc2NoZWR1bGVycyA9IGNvbmZpZy5zY2hlZHVsZXJzO1xuICAgIHRoaXMuX3NvdXJjZUJ1Y2tldEFybiA9IGNvbmZpZy5zb3VyY2VCdWNrZXRBcm47XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3dlYnNlcnZlckFjY2Vzc01vZGUgPSBjb25maWcud2Vic2VydmVyQWNjZXNzTW9kZTtcbiAgICB0aGlzLl93ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0ID0gY29uZmlnLndlZWtseU1haW50ZW5hbmNlV2luZG93U3RhcnQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFpcmZsb3dfY29uZmlndXJhdGlvbl9vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FpcmZsb3dDb25maWd1cmF0aW9uT3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgcHVibGljIGdldCBhaXJmbG93Q29uZmlndXJhdGlvbk9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWlyZmxvd19jb25maWd1cmF0aW9uX29wdGlvbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhaXJmbG93Q29uZmlndXJhdGlvbk9wdGlvbnModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSApIHtcbiAgICB0aGlzLl9haXJmbG93Q29uZmlndXJhdGlvbk9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBaXJmbG93Q29uZmlndXJhdGlvbk9wdGlvbnMoKSB7XG4gICAgdGhpcy5fYWlyZmxvd0NvbmZpZ3VyYXRpb25PcHRpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhaXJmbG93Q29uZmlndXJhdGlvbk9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWlyZmxvd0NvbmZpZ3VyYXRpb25PcHRpb25zXG4gIH1cblxuICAvLyBhaXJmbG93X3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWlyZmxvd1ZlcnNpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgYWlyZmxvd1ZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhaXJmbG93X3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFpcmZsb3dWZXJzaW9uKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fYWlyZmxvd1ZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBaXJmbG93VmVyc2lvbigpIHtcbiAgICB0aGlzLl9haXJmbG93VmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWlyZmxvd1ZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWlyZmxvd1ZlcnNpb25cbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZGFnX3MzX3BhdGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGFnUzNQYXRoPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGRhZ1MzUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhZ19zM19wYXRoJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYWdTM1BhdGgodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9kYWdTM1BhdGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYWdTM1BhdGgoKSB7XG4gICAgdGhpcy5fZGFnUzNQYXRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYWdTM1BhdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGFnUzNQYXRoXG4gIH1cblxuICAvLyBlbnZpcm9ubWVudF9jbGFzcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbnZpcm9ubWVudENsYXNzPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGVudmlyb25tZW50Q2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbnZpcm9ubWVudF9jbGFzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW52aXJvbm1lbnRDbGFzcyh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2Vudmlyb25tZW50Q2xhc3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbnZpcm9ubWVudENsYXNzKCkge1xuICAgIHRoaXMuX2Vudmlyb25tZW50Q2xhc3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVudmlyb25tZW50Q2xhc3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW52aXJvbm1lbnRDbGFzc1xuICB9XG5cbiAgLy8gZXhlY3V0aW9uX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4ZWN1dGlvblJvbGVBcm4/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4ZWN1dGlvbl9yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhlY3V0aW9uUm9sZUFybih2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2V4ZWN1dGlvblJvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeGVjdXRpb25Sb2xlQXJuKCkge1xuICAgIHRoaXMuX2V4ZWN1dGlvblJvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4ZWN1dGlvblJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhlY3V0aW9uUm9sZUFyblxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBrbXNfa2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGttc0tleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zS2V5KCkge1xuICAgIHRoaXMuX2ttc0tleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleVxuICB9XG5cbiAgLy8gbG9nZ2luZ19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ2dpbmdDb25maWd1cmF0aW9uPzogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb247XG4gIHB1YmxpYyBnZXQgbG9nZ2luZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbG9nZ2luZ19jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbG9nZ2luZ0NvbmZpZ3VyYXRpb24odmFsdWU6IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uICkge1xuICAgIHRoaXMuX2xvZ2dpbmdDb25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nZ2luZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fbG9nZ2luZ0NvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvZ2dpbmdDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2dpbmdDb25maWd1cmF0aW9uXG4gIH1cblxuICAvLyBtYXhfd29ya2VycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhXb3JrZXJzPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IG1heFdvcmtlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfd29ya2VycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4V29ya2Vycyh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX21heFdvcmtlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhXb3JrZXJzKCkge1xuICAgIHRoaXMuX21heFdvcmtlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heFdvcmtlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4V29ya2Vyc1xuICB9XG5cbiAgLy8gbWluX3dvcmtlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWluV29ya2Vycz86IG51bWJlcjtcbiAgcHVibGljIGdldCBtaW5Xb3JrZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX3dvcmtlcnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1pbldvcmtlcnModmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl9taW5Xb3JrZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWluV29ya2VycygpIHtcbiAgICB0aGlzLl9taW5Xb3JrZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtaW5Xb3JrZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbldvcmtlcnNcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZVxuICB9XG5cbiAgLy8gbmV0d29ya19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25ldHdvcmtDb25maWd1cmF0aW9uPzogTXdhYUVudmlyb25tZW50TmV0d29ya0NvbmZpZ3VyYXRpb247XG4gIHB1YmxpYyBnZXQgbmV0d29ya0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbmV0d29ya19jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbmV0d29ya0NvbmZpZ3VyYXRpb24odmFsdWU6IE13YWFFbnZpcm9ubWVudE5ldHdvcmtDb25maWd1cmF0aW9uICkge1xuICAgIHRoaXMuX25ldHdvcmtDb25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmV0d29ya0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fbmV0d29ya0NvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5ldHdvcmtDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25ldHdvcmtDb25maWd1cmF0aW9uXG4gIH1cblxuICAvLyBwbHVnaW5zX3MzX29iamVjdF92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BsdWdpbnNTM09iamVjdFZlcnNpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcGx1Z2luc1MzT2JqZWN0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BsdWdpbnNfczNfb2JqZWN0X3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBsdWdpbnNTM09iamVjdFZlcnNpb24odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9wbHVnaW5zUzNPYmplY3RWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGx1Z2luc1MzT2JqZWN0VmVyc2lvbigpIHtcbiAgICB0aGlzLl9wbHVnaW5zUzNPYmplY3RWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwbHVnaW5zUzNPYmplY3RWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsdWdpbnNTM09iamVjdFZlcnNpb25cbiAgfVxuXG4gIC8vIHBsdWdpbnNfczNfcGF0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wbHVnaW5zUzNQYXRoPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHBsdWdpbnNTM1BhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwbHVnaW5zX3MzX3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBsdWdpbnNTM1BhdGgodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9wbHVnaW5zUzNQYXRoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGx1Z2luc1MzUGF0aCgpIHtcbiAgICB0aGlzLl9wbHVnaW5zUzNQYXRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwbHVnaW5zUzNQYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsdWdpbnNTM1BhdGhcbiAgfVxuXG4gIC8vIHJlcXVpcmVtZW50c19zM19vYmplY3RfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1aXJlbWVudHNTM09iamVjdFZlcnNpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcmVxdWlyZW1lbnRzUzNPYmplY3RWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVxdWlyZW1lbnRzX3MzX29iamVjdF92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXF1aXJlbWVudHNTM09iamVjdFZlcnNpb24odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9yZXF1aXJlbWVudHNTM09iamVjdFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1aXJlbWVudHNTM09iamVjdFZlcnNpb24oKSB7XG4gICAgdGhpcy5fcmVxdWlyZW1lbnRzUzNPYmplY3RWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1aXJlbWVudHNTM09iamVjdFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZW1lbnRzUzNPYmplY3RWZXJzaW9uXG4gIH1cblxuICAvLyByZXF1aXJlbWVudHNfczNfcGF0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1aXJlbWVudHNTM1BhdGg/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcmVxdWlyZW1lbnRzUzNQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVxdWlyZW1lbnRzX3MzX3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVpcmVtZW50c1MzUGF0aCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3JlcXVpcmVtZW50c1MzUGF0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcXVpcmVtZW50c1MzUGF0aCgpIHtcbiAgICB0aGlzLl9yZXF1aXJlbWVudHNTM1BhdGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcXVpcmVtZW50c1MzUGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlbWVudHNTM1BhdGhcbiAgfVxuXG4gIC8vIHNjaGVkdWxlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NoZWR1bGVycz86IG51bWJlcjtcbiAgcHVibGljIGdldCBzY2hlZHVsZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc2NoZWR1bGVycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2NoZWR1bGVycyh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX3NjaGVkdWxlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY2hlZHVsZXJzKCkge1xuICAgIHRoaXMuX3NjaGVkdWxlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjaGVkdWxlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NoZWR1bGVyc1xuICB9XG5cbiAgLy8gc291cmNlX2J1Y2tldF9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc291cmNlQnVja2V0QXJuPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHNvdXJjZUJ1Y2tldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZV9idWNrZXRfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzb3VyY2VCdWNrZXRBcm4odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9zb3VyY2VCdWNrZXRBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTb3VyY2VCdWNrZXRBcm4oKSB7XG4gICAgdGhpcy5fc291cmNlQnVja2V0QXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VCdWNrZXRBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlQnVja2V0QXJuXG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gd2Vic2VydmVyX2FjY2Vzc19tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3dlYnNlcnZlckFjY2Vzc01vZGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgd2Vic2VydmVyQWNjZXNzTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dlYnNlcnZlcl9hY2Nlc3NfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgd2Vic2VydmVyQWNjZXNzTW9kZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3dlYnNlcnZlckFjY2Vzc01vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXZWJzZXJ2ZXJBY2Nlc3NNb2RlKCkge1xuICAgIHRoaXMuX3dlYnNlcnZlckFjY2Vzc01vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdlYnNlcnZlckFjY2Vzc01vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2Vic2VydmVyQWNjZXNzTW9kZVxuICB9XG5cbiAgLy8gd2Vic2VydmVyX3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHdlYnNlcnZlclVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dlYnNlcnZlcl91cmwnKTtcbiAgfVxuXG4gIC8vIHdlZWtseV9tYWludGVuYW5jZV93aW5kb3dfc3RhcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd2Vla2x5TWFpbnRlbmFuY2VXaW5kb3dTdGFydD86IHN0cmluZztcbiAgcHVibGljIGdldCB3ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnd2Vla2x5X21haW50ZW5hbmNlX3dpbmRvd19zdGFydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgd2Vla2x5TWFpbnRlbmFuY2VXaW5kb3dTdGFydCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3dlZWtseU1haW50ZW5hbmNlV2luZG93U3RhcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0KCkge1xuICAgIHRoaXMuX3dlZWtseU1haW50ZW5hbmNlV2luZG93U3RhcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdlZWtseU1haW50ZW5hbmNlV2luZG93U3RhcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2Vla2x5TWFpbnRlbmFuY2VXaW5kb3dTdGFydFxuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhaXJmbG93X2NvbmZpZ3VyYXRpb25fb3B0aW9uczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fYWlyZmxvd0NvbmZpZ3VyYXRpb25PcHRpb25zKSxcbiAgICAgIGFpcmZsb3dfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWlyZmxvd1ZlcnNpb24pLFxuICAgICAgZGFnX3MzX3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RhZ1MzUGF0aCksXG4gICAgICBlbnZpcm9ubWVudF9jbGFzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZW52aXJvbm1lbnRDbGFzcyksXG4gICAgICBleGVjdXRpb25fcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V4ZWN1dGlvblJvbGVBcm4pLFxuICAgICAga21zX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fa21zS2V5KSxcbiAgICAgIGxvZ2dpbmdfY29uZmlndXJhdGlvbjogbXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9sb2dnaW5nQ29uZmlndXJhdGlvbiksXG4gICAgICBtYXhfd29ya2VyczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWF4V29ya2VycyksXG4gICAgICBtaW5fd29ya2VyczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWluV29ya2VycyksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIG5ldHdvcmtfY29uZmlndXJhdGlvbjogbXdhYUVudmlyb25tZW50TmV0d29ya0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9uZXR3b3JrQ29uZmlndXJhdGlvbiksXG4gICAgICBwbHVnaW5zX3MzX29iamVjdF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wbHVnaW5zUzNPYmplY3RWZXJzaW9uKSxcbiAgICAgIHBsdWdpbnNfczNfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGx1Z2luc1MzUGF0aCksXG4gICAgICByZXF1aXJlbWVudHNfczNfb2JqZWN0X3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlcXVpcmVtZW50c1MzT2JqZWN0VmVyc2lvbiksXG4gICAgICByZXF1aXJlbWVudHNfczNfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVxdWlyZW1lbnRzUzNQYXRoKSxcbiAgICAgIHNjaGVkdWxlcnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3NjaGVkdWxlcnMpLFxuICAgICAgc291cmNlX2J1Y2tldF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NvdXJjZUJ1Y2tldEFybiksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHdlYnNlcnZlcl9hY2Nlc3NfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fd2Vic2VydmVyQWNjZXNzTW9kZSksXG4gICAgICB3ZWVrbHlfbWFpbnRlbmFuY2Vfd2luZG93X3N0YXJ0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl93ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0KSxcbiAgICB9O1xuICB9XG59XG4iXX0=