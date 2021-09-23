"use strict";
// https://www.terraform.io/docs/providers/awscc/d/mwaa_environment.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccMwaaEnvironment = exports.dataAwsccMwaaEnvironmentNetworkConfigurationToTerraform = exports.DataAwsccMwaaEnvironmentNetworkConfiguration = exports.dataAwsccMwaaEnvironmentLoggingConfigurationToTerraform = exports.DataAwsccMwaaEnvironmentLoggingConfiguration = exports.dataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform = exports.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs = exports.dataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform = exports.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs = exports.dataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsToTerraform = exports.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs = exports.dataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform = exports.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs = exports.dataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform = exports.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs = void 0;
const cdktf = require("cdktf");
class DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs extends cdktf.ComplexComputedList {
    // cloudwatch_log_group_arn - computed: true, optional: false, required: false
    get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_level - computed: true, optional: false, required: false
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
}
exports.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs = DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs;
function dataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_log_group_arn: cdktf.stringToTerraform(struct.cloudwatchLogGroupArn),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
exports.dataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform = dataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform;
class DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs extends cdktf.ComplexComputedList {
    // cloudwatch_log_group_arn - computed: true, optional: false, required: false
    get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_level - computed: true, optional: false, required: false
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
}
exports.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs = DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs;
function dataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_log_group_arn: cdktf.stringToTerraform(struct.cloudwatchLogGroupArn),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
exports.dataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform = dataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform;
class DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs extends cdktf.ComplexComputedList {
    // cloudwatch_log_group_arn - computed: true, optional: false, required: false
    get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_level - computed: true, optional: false, required: false
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
}
exports.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs = DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs;
function dataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_log_group_arn: cdktf.stringToTerraform(struct.cloudwatchLogGroupArn),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
exports.dataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsToTerraform = dataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsToTerraform;
class DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs extends cdktf.ComplexComputedList {
    // cloudwatch_log_group_arn - computed: true, optional: false, required: false
    get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_level - computed: true, optional: false, required: false
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
}
exports.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs = DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs;
function dataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_log_group_arn: cdktf.stringToTerraform(struct.cloudwatchLogGroupArn),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
exports.dataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform = dataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform;
class DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs extends cdktf.ComplexComputedList {
    // cloudwatch_log_group_arn - computed: true, optional: false, required: false
    get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_level - computed: true, optional: false, required: false
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
}
exports.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs = DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs;
function dataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_log_group_arn: cdktf.stringToTerraform(struct.cloudwatchLogGroupArn),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
exports.dataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform = dataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform;
class DataAwsccMwaaEnvironmentLoggingConfiguration extends cdktf.ComplexComputedList {
    // dag_processing_logs - computed: true, optional: false, required: false
    get dagProcessingLogs() {
        return this.interpolationForAttribute('dag_processing_logs');
    }
    // scheduler_logs - computed: true, optional: false, required: false
    get schedulerLogs() {
        return this.interpolationForAttribute('scheduler_logs');
    }
    // task_logs - computed: true, optional: false, required: false
    get taskLogs() {
        return this.interpolationForAttribute('task_logs');
    }
    // webserver_logs - computed: true, optional: false, required: false
    get webserverLogs() {
        return this.interpolationForAttribute('webserver_logs');
    }
    // worker_logs - computed: true, optional: false, required: false
    get workerLogs() {
        return this.interpolationForAttribute('worker_logs');
    }
}
exports.DataAwsccMwaaEnvironmentLoggingConfiguration = DataAwsccMwaaEnvironmentLoggingConfiguration;
function dataAwsccMwaaEnvironmentLoggingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dag_processing_logs: dataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct.dagProcessingLogs),
        scheduler_logs: dataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct.schedulerLogs),
        task_logs: dataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct.taskLogs),
        webserver_logs: dataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct.webserverLogs),
        worker_logs: dataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct.workerLogs),
    };
}
exports.dataAwsccMwaaEnvironmentLoggingConfigurationToTerraform = dataAwsccMwaaEnvironmentLoggingConfigurationToTerraform;
class DataAwsccMwaaEnvironmentNetworkConfiguration extends cdktf.ComplexComputedList {
    // security_group_ids - computed: true, optional: false, required: false
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    // subnet_ids - computed: true, optional: false, required: false
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
}
exports.DataAwsccMwaaEnvironmentNetworkConfiguration = DataAwsccMwaaEnvironmentNetworkConfiguration;
function dataAwsccMwaaEnvironmentNetworkConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
exports.dataAwsccMwaaEnvironmentNetworkConfigurationToTerraform = dataAwsccMwaaEnvironmentNetworkConfigurationToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mwaa_environment.html awscc_mwaa_environment}
*/
class DataAwsccMwaaEnvironment extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mwaa_environment.html awscc_mwaa_environment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMwaaEnvironmentConfig
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
        this._id = config.id;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // airflow_configuration_options - computed: true, optional: false, required: false
    airflowConfigurationOptions(key) {
        return new cdktf.StringMap(this, 'airflow_configuration_options').lookup(key);
    }
    // airflow_version - computed: true, optional: false, required: false
    get airflowVersion() {
        return this.getStringAttribute('airflow_version');
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // dag_s3_path - computed: true, optional: false, required: false
    get dagS3Path() {
        return this.getStringAttribute('dag_s3_path');
    }
    // environment_class - computed: true, optional: false, required: false
    get environmentClass() {
        return this.getStringAttribute('environment_class');
    }
    // execution_role_arn - computed: true, optional: false, required: false
    get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
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
    // kms_key - computed: true, optional: false, required: false
    get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    // logging_configuration - computed: true, optional: false, required: false
    get loggingConfiguration() {
        return this.interpolationForAttribute('logging_configuration');
    }
    // max_workers - computed: true, optional: false, required: false
    get maxWorkers() {
        return this.getNumberAttribute('max_workers');
    }
    // min_workers - computed: true, optional: false, required: false
    get minWorkers() {
        return this.getNumberAttribute('min_workers');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // network_configuration - computed: true, optional: false, required: false
    get networkConfiguration() {
        return this.interpolationForAttribute('network_configuration');
    }
    // plugins_s3_object_version - computed: true, optional: false, required: false
    get pluginsS3ObjectVersion() {
        return this.getStringAttribute('plugins_s3_object_version');
    }
    // plugins_s3_path - computed: true, optional: false, required: false
    get pluginsS3Path() {
        return this.getStringAttribute('plugins_s3_path');
    }
    // requirements_s3_object_version - computed: true, optional: false, required: false
    get requirementsS3ObjectVersion() {
        return this.getStringAttribute('requirements_s3_object_version');
    }
    // requirements_s3_path - computed: true, optional: false, required: false
    get requirementsS3Path() {
        return this.getStringAttribute('requirements_s3_path');
    }
    // schedulers - computed: true, optional: false, required: false
    get schedulers() {
        return this.getNumberAttribute('schedulers');
    }
    // source_bucket_arn - computed: true, optional: false, required: false
    get sourceBucketArn() {
        return this.getStringAttribute('source_bucket_arn');
    }
    // tags - computed: true, optional: false, required: false
    tags(key) {
        return new cdktf.StringMap(this, 'tags').lookup(key);
    }
    // webserver_access_mode - computed: true, optional: false, required: false
    get webserverAccessMode() {
        return this.getStringAttribute('webserver_access_mode');
    }
    // webserver_url - computed: true, optional: false, required: false
    get webserverUrl() {
        return this.getStringAttribute('webserver_url');
    }
    // weekly_maintenance_window_start - computed: true, optional: false, required: false
    get weeklyMaintenanceWindowStart() {
        return this.getStringAttribute('weekly_maintenance_window_start');
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
exports.DataAwsccMwaaEnvironment = DataAwsccMwaaEnvironment;
// =================
// STATIC PROPERTIES
// =================
DataAwsccMwaaEnvironment.tfResourceType = "awscc_mwaa_environment";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1td2FhLWVudmlyb25tZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1td2FhLWVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3RUFBd0U7QUFDeEUsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBWS9CLE1BQWEsNkRBQThELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUUxRyw4RUFBOEU7SUFDOUUsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsNkRBQTZEO0lBQzdELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsK0RBQStEO0lBQy9ELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0Y7QUFoQkQsc0lBZ0JDO0FBRUQsU0FBZ0Isd0VBQXdFLENBQUMsTUFBc0U7SUFDN0osSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCx3QkFBd0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO1FBQ2hGLE9BQU8sRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7S0FDckQsQ0FBQTtBQUNILENBQUM7QUFQRCw0SkFPQztBQUVELE1BQWEseURBQTBELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV0Ryw4RUFBOEU7SUFDOUUsSUFBVyxxQkFBcUI7UUFD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Q25ELElBQUksQ0FBQyxHQUFXO1FBQ3JCLE9BQU8sSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELDJFQUEyRTtJQUMzRSxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxxRkFBcUY7SUFDckYsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBdktILDREQXdLQztBQXRLQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHVDQUFjLEdBQVcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9td2FhX2Vudmlyb25tZW50Lmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NNd2FhRW52aXJvbm1lbnRDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9td2FhX2Vudmlyb25tZW50Lmh0bWwjaWQgRGF0YUF3c2NjTXdhYUVudmlyb25tZW50I2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY013YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uRGFnUHJvY2Vzc2luZ0xvZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbG91ZHdhdGNoTG9nR3JvdXBBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm4nKTtcbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxuXG4gIC8vIGxvZ19sZXZlbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvZ0xldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX2xldmVsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY013YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uRGFnUHJvY2Vzc2luZ0xvZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbkRhZ1Byb2Nlc3NpbmdMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNsb3Vkd2F0Y2hfbG9nX2dyb3VwX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoTG9nR3JvdXBBcm4pLFxuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19sZXZlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dMZXZlbCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY013YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uU2NoZWR1bGVyTG9ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9nX2dyb3VwX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dHcm91cEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nsb3Vkd2F0Y2hfbG9nX2dyb3VwX2FybicpO1xuICB9XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gbG9nX2xldmVsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nTGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfbGV2ZWwnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25TY2hlZHVsZXJMb2dzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25TY2hlZHVsZXJMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNsb3Vkd2F0Y2hfbG9nX2dyb3VwX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoTG9nR3JvdXBBcm4pLFxuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19sZXZlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dMZXZlbCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY013YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uVGFza0xvZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbG91ZHdhdGNoTG9nR3JvdXBBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm4nKTtcbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxuXG4gIC8vIGxvZ19sZXZlbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvZ0xldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX2xldmVsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY013YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uVGFza0xvZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblRhc2tMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNsb3Vkd2F0Y2hfbG9nX2dyb3VwX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoTG9nR3JvdXBBcm4pLFxuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19sZXZlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dMZXZlbCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY013YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV2Vic2VydmVyTG9ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9nX2dyb3VwX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dHcm91cEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nsb3Vkd2F0Y2hfbG9nX2dyb3VwX2FybicpO1xuICB9XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gbG9nX2xldmVsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nTGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfbGV2ZWwnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25XZWJzZXJ2ZXJMb2dzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25XZWJzZXJ2ZXJMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNsb3Vkd2F0Y2hfbG9nX2dyb3VwX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoTG9nR3JvdXBBcm4pLFxuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19sZXZlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dMZXZlbCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY013YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV29ya2VyTG9ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9nX2dyb3VwX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dHcm91cEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nsb3Vkd2F0Y2hfbG9nX2dyb3VwX2FybicpO1xuICB9XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gbG9nX2xldmVsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nTGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfbGV2ZWwnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25Xb3JrZXJMb2dzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25Xb3JrZXJMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNsb3Vkd2F0Y2hfbG9nX2dyb3VwX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoTG9nR3JvdXBBcm4pLFxuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19sZXZlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dMZXZlbCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY013YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGFnX3Byb2Nlc3NpbmdfbG9ncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhZ1Byb2Nlc3NpbmdMb2dzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RhZ19wcm9jZXNzaW5nX2xvZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzY2hlZHVsZXJfbG9ncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNjaGVkdWxlckxvZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2NoZWR1bGVyX2xvZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0YXNrX2xvZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YXNrTG9ncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YXNrX2xvZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB3ZWJzZXJ2ZXJfbG9ncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHdlYnNlcnZlckxvZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnd2Vic2VydmVyX2xvZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB3b3JrZXJfbG9ncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHdvcmtlckxvZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnd29ya2VyX2xvZ3MnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY013YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGFnX3Byb2Nlc3NpbmdfbG9nczogZGF0YUF3c2NjTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25EYWdQcm9jZXNzaW5nTG9nc1RvVGVycmFmb3JtKHN0cnVjdCEuZGFnUHJvY2Vzc2luZ0xvZ3MpLFxuICAgIHNjaGVkdWxlcl9sb2dzOiBkYXRhQXdzY2NNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblNjaGVkdWxlckxvZ3NUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjaGVkdWxlckxvZ3MpLFxuICAgIHRhc2tfbG9nczogZGF0YUF3c2NjTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25UYXNrTG9nc1RvVGVycmFmb3JtKHN0cnVjdCEudGFza0xvZ3MpLFxuICAgIHdlYnNlcnZlcl9sb2dzOiBkYXRhQXdzY2NNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldlYnNlcnZlckxvZ3NUb1RlcnJhZm9ybShzdHJ1Y3QhLndlYnNlcnZlckxvZ3MpLFxuICAgIHdvcmtlcl9sb2dzOiBkYXRhQXdzY2NNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldvcmtlckxvZ3NUb1RlcnJhZm9ybShzdHJ1Y3QhLndvcmtlckxvZ3MpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NNd2FhRW52aXJvbm1lbnROZXR3b3JrQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHNlY3VyaXR5X2dyb3VwX2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc2VjdXJpdHlfZ3JvdXBfaWRzJyk7XG4gIH1cblxuICAvLyBzdWJuZXRfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VibmV0SWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1Ym5ldF9pZHMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTXdhYUVudmlyb25tZW50TmV0d29ya0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NNd2FhRW52aXJvbm1lbnROZXR3b3JrQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzZWN1cml0eV9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2VjdXJpdHlHcm91cElkcyksXG4gICAgc3VibmV0X2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zdWJuZXRJZHMpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvbXdhYV9lbnZpcm9ubWVudC5odG1sIGF3c2NjX213YWFfZW52aXJvbm1lbnR9XG4qL1xuZXhwb3J0IGNsYXNzIERhdGFBd3NjY013YWFFbnZpcm9ubWVudCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfbXdhYV9lbnZpcm9ubWVudFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9td2FhX2Vudmlyb25tZW50Lmh0bWwgYXdzY2NfbXdhYV9lbnZpcm9ubWVudH0gRGF0YSBTb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRGF0YUF3c2NjTXdhYUVudmlyb25tZW50Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NjY013YWFFbnZpcm9ubWVudENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfbXdhYV9lbnZpcm9ubWVudCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhaXJmbG93X2NvbmZpZ3VyYXRpb25fb3B0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgYWlyZmxvd0NvbmZpZ3VyYXRpb25PcHRpb25zKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IGNka3RmLlN0cmluZ01hcCh0aGlzLCAnYWlyZmxvd19jb25maWd1cmF0aW9uX29wdGlvbnMnKS5sb29rdXAoa2V5KTtcbiAgfVxuXG4gIC8vIGFpcmZsb3dfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFpcmZsb3dWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWlyZmxvd192ZXJzaW9uJyk7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGRhZ19zM19wYXRoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGFnUzNQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGFnX3MzX3BhdGgnKTtcbiAgfVxuXG4gIC8vIGVudmlyb25tZW50X2NsYXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW52aXJvbm1lbnRDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Vudmlyb25tZW50X2NsYXNzJyk7XG4gIH1cblxuICAvLyBleGVjdXRpb25fcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBleGVjdXRpb25Sb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXhlY3V0aW9uX3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZFxuICB9XG5cbiAgLy8ga21zX2tleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGttc0tleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXknKTtcbiAgfVxuXG4gIC8vIGxvZ2dpbmdfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvZ2dpbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xvZ2dpbmdfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG1heF93b3JrZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4V29ya2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF93b3JrZXJzJyk7XG4gIH1cblxuICAvLyBtaW5fd29ya2VycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pbldvcmtlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5fd29ya2VycycpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyBuZXR3b3JrX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuZXR3b3JrQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCduZXR3b3JrX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwbHVnaW5zX3MzX29iamVjdF92ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGx1Z2luc1MzT2JqZWN0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BsdWdpbnNfczNfb2JqZWN0X3ZlcnNpb24nKTtcbiAgfVxuXG4gIC8vIHBsdWdpbnNfczNfcGF0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBsdWdpbnNTM1BhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwbHVnaW5zX3MzX3BhdGgnKTtcbiAgfVxuXG4gIC8vIHJlcXVpcmVtZW50c19zM19vYmplY3RfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlcXVpcmVtZW50c1MzT2JqZWN0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcXVpcmVtZW50c19zM19vYmplY3RfdmVyc2lvbicpO1xuICB9XG5cbiAgLy8gcmVxdWlyZW1lbnRzX3MzX3BhdGggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXF1aXJlbWVudHNTM1BhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXF1aXJlbWVudHNfczNfcGF0aCcpO1xuICB9XG5cbiAgLy8gc2NoZWR1bGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNjaGVkdWxlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzY2hlZHVsZXJzJyk7XG4gIH1cblxuICAvLyBzb3VyY2VfYnVja2V0X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNvdXJjZUJ1Y2tldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZV9idWNrZXRfYXJuJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyB0YWdzKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IGNka3RmLlN0cmluZ01hcCh0aGlzLCAndGFncycpLmxvb2t1cChrZXkpO1xuICB9XG5cbiAgLy8gd2Vic2VydmVyX2FjY2Vzc19tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd2Vic2VydmVyQWNjZXNzTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dlYnNlcnZlcl9hY2Nlc3NfbW9kZScpO1xuICB9XG5cbiAgLy8gd2Vic2VydmVyX3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHdlYnNlcnZlclVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dlYnNlcnZlcl91cmwnKTtcbiAgfVxuXG4gIC8vIHdlZWtseV9tYWludGVuYW5jZV93aW5kb3dfc3RhcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnd2Vla2x5X21haW50ZW5hbmNlX3dpbmRvd19zdGFydCcpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==