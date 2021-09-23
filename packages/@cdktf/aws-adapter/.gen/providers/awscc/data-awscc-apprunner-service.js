"use strict";
// https://www.terraform.io/docs/providers/awscc/d/apprunner_service.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccApprunnerService = exports.dataAwsccApprunnerServiceTagsToTerraform = exports.DataAwsccApprunnerServiceTags = exports.dataAwsccApprunnerServiceSourceConfigurationToTerraform = exports.DataAwsccApprunnerServiceSourceConfiguration = exports.dataAwsccApprunnerServiceSourceConfigurationImageRepositoryToTerraform = exports.DataAwsccApprunnerServiceSourceConfigurationImageRepository = exports.dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform = exports.DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration = exports.dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesToTerraform = exports.DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables = exports.dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryToTerraform = exports.DataAwsccApprunnerServiceSourceConfigurationCodeRepository = exports.dataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform = exports.DataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion = exports.dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform = exports.DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration = exports.dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform = exports.DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues = exports.dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesToTerraform = exports.DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables = exports.dataAwsccApprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform = exports.DataAwsccApprunnerServiceSourceConfigurationAuthenticationConfiguration = exports.dataAwsccApprunnerServiceInstanceConfigurationToTerraform = exports.DataAwsccApprunnerServiceInstanceConfiguration = exports.dataAwsccApprunnerServiceHealthCheckConfigurationToTerraform = exports.DataAwsccApprunnerServiceHealthCheckConfiguration = exports.dataAwsccApprunnerServiceEncryptionConfigurationToTerraform = exports.DataAwsccApprunnerServiceEncryptionConfiguration = void 0;
const cdktf = require("cdktf");
class DataAwsccApprunnerServiceEncryptionConfiguration extends cdktf.ComplexComputedList {
    // kms_key - computed: true, optional: false, required: false
    get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
}
exports.DataAwsccApprunnerServiceEncryptionConfiguration = DataAwsccApprunnerServiceEncryptionConfiguration;
function dataAwsccApprunnerServiceEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key: cdktf.stringToTerraform(struct.kmsKey),
    };
}
exports.dataAwsccApprunnerServiceEncryptionConfigurationToTerraform = dataAwsccApprunnerServiceEncryptionConfigurationToTerraform;
class DataAwsccApprunnerServiceHealthCheckConfiguration extends cdktf.ComplexComputedList {
    // healthy_threshold - computed: true, optional: false, required: false
    get healthyThreshold() {
        return this.getNumberAttribute('healthy_threshold');
    }
    // interval - computed: true, optional: false, required: false
    get interval() {
        return this.getNumberAttribute('interval');
    }
    // path - computed: true, optional: false, required: false
    get path() {
        return this.getStringAttribute('path');
    }
    // protocol - computed: true, optional: false, required: false
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    // timeout - computed: true, optional: false, required: false
    get timeout() {
        return this.getNumberAttribute('timeout');
    }
    // unhealthy_threshold - computed: true, optional: false, required: false
    get unhealthyThreshold() {
        return this.getNumberAttribute('unhealthy_threshold');
    }
}
exports.DataAwsccApprunnerServiceHealthCheckConfiguration = DataAwsccApprunnerServiceHealthCheckConfiguration;
function dataAwsccApprunnerServiceHealthCheckConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        healthy_threshold: cdktf.numberToTerraform(struct.healthyThreshold),
        interval: cdktf.numberToTerraform(struct.interval),
        path: cdktf.stringToTerraform(struct.path),
        protocol: cdktf.stringToTerraform(struct.protocol),
        timeout: cdktf.numberToTerraform(struct.timeout),
        unhealthy_threshold: cdktf.numberToTerraform(struct.unhealthyThreshold),
    };
}
exports.dataAwsccApprunnerServiceHealthCheckConfigurationToTerraform = dataAwsccApprunnerServiceHealthCheckConfigurationToTerraform;
class DataAwsccApprunnerServiceInstanceConfiguration extends cdktf.ComplexComputedList {
    // cpu - computed: true, optional: false, required: false
    get cpu() {
        return this.getStringAttribute('cpu');
    }
    // instance_role_arn - computed: true, optional: false, required: false
    get instanceRoleArn() {
        return this.getStringAttribute('instance_role_arn');
    }
    // memory - computed: true, optional: false, required: false
    get memory() {
        return this.getStringAttribute('memory');
    }
}
exports.DataAwsccApprunnerServiceInstanceConfiguration = DataAwsccApprunnerServiceInstanceConfiguration;
function dataAwsccApprunnerServiceInstanceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cpu: cdktf.stringToTerraform(struct.cpu),
        instance_role_arn: cdktf.stringToTerraform(struct.instanceRoleArn),
        memory: cdktf.stringToTerraform(struct.memory),
    };
}
exports.dataAwsccApprunnerServiceInstanceConfigurationToTerraform = dataAwsccApprunnerServiceInstanceConfigurationToTerraform;
class DataAwsccApprunnerServiceSourceConfigurationAuthenticationConfiguration extends cdktf.ComplexComputedList {
    // access_role_arn - computed: true, optional: false, required: false
    get accessRoleArn() {
        return this.getStringAttribute('access_role_arn');
    }
    // connection_arn - computed: true, optional: false, required: false
    get connectionArn() {
        return this.getStringAttribute('connection_arn');
    }
}
exports.DataAwsccApprunnerServiceSourceConfigurationAuthenticationConfiguration = DataAwsccApprunnerServiceSourceConfigurationAuthenticationConfiguration;
function dataAwsccApprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_role_arn: cdktf.stringToTerraform(struct.accessRoleArn),
        connection_arn: cdktf.stringToTerraform(struct.connectionArn),
    };
}
exports.dataAwsccApprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform = dataAwsccApprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform;
class DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables = DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables;
function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesToTerraform = dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesToTerraform;
class DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues extends cdktf.ComplexComputedList {
    // build_command - computed: true, optional: false, required: false
    get buildCommand() {
        return this.getStringAttribute('build_command');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getStringAttribute('port');
    }
    // runtime - computed: true, optional: false, required: false
    get runtime() {
        return this.getStringAttribute('runtime');
    }
    // runtime_environment_variables - computed: true, optional: false, required: false
    get runtimeEnvironmentVariables() {
        return this.interpolationForAttribute('runtime_environment_variables');
    }
    // start_command - computed: true, optional: false, required: false
    get startCommand() {
        return this.getStringAttribute('start_command');
    }
}
exports.DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues = DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues;
function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        build_command: cdktf.stringToTerraform(struct.buildCommand),
        port: cdktf.stringToTerraform(struct.port),
        runtime: cdktf.stringToTerraform(struct.runtime),
        runtime_environment_variables: cdktf.listMapper(dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesToTerraform)(struct.runtimeEnvironmentVariables),
        start_command: cdktf.stringToTerraform(struct.startCommand),
    };
}
exports.dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform = dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform;
class DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration extends cdktf.ComplexComputedList {
    // code_configuration_values - computed: true, optional: false, required: false
    get codeConfigurationValues() {
        return this.interpolationForAttribute('code_configuration_values');
    }
    // configuration_source - computed: true, optional: false, required: false
    get configurationSource() {
        return this.getStringAttribute('configuration_source');
    }
}
exports.DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration = DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration;
function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        code_configuration_values: dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct.codeConfigurationValues),
        configuration_source: cdktf.stringToTerraform(struct.configurationSource),
    };
}
exports.dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform = dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform;
class DataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion extends cdktf.ComplexComputedList {
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion = DataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion;
function dataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform = dataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform;
class DataAwsccApprunnerServiceSourceConfigurationCodeRepository extends cdktf.ComplexComputedList {
    // code_configuration - computed: true, optional: false, required: false
    get codeConfiguration() {
        return this.interpolationForAttribute('code_configuration');
    }
    // repository_url - computed: true, optional: false, required: false
    get repositoryUrl() {
        return this.getStringAttribute('repository_url');
    }
    // source_code_version - computed: true, optional: false, required: false
    get sourceCodeVersion() {
        return this.interpolationForAttribute('source_code_version');
    }
}
exports.DataAwsccApprunnerServiceSourceConfigurationCodeRepository = DataAwsccApprunnerServiceSourceConfigurationCodeRepository;
function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        code_configuration: dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct.codeConfiguration),
        repository_url: cdktf.stringToTerraform(struct.repositoryUrl),
        source_code_version: dataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct.sourceCodeVersion),
    };
}
exports.dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryToTerraform = dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryToTerraform;
class DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables = DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables;
function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesToTerraform = dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesToTerraform;
class DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration extends cdktf.ComplexComputedList {
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getStringAttribute('port');
    }
    // runtime_environment_variables - computed: true, optional: false, required: false
    get runtimeEnvironmentVariables() {
        return this.interpolationForAttribute('runtime_environment_variables');
    }
    // start_command - computed: true, optional: false, required: false
    get startCommand() {
        return this.getStringAttribute('start_command');
    }
}
exports.DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration = DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration;
function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        port: cdktf.stringToTerraform(struct.port),
        runtime_environment_variables: cdktf.listMapper(dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesToTerraform)(struct.runtimeEnvironmentVariables),
        start_command: cdktf.stringToTerraform(struct.startCommand),
    };
}
exports.dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform = dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform;
class DataAwsccApprunnerServiceSourceConfigurationImageRepository extends cdktf.ComplexComputedList {
    // image_configuration - computed: true, optional: false, required: false
    get imageConfiguration() {
        return this.interpolationForAttribute('image_configuration');
    }
    // image_identifier - computed: true, optional: false, required: false
    get imageIdentifier() {
        return this.getStringAttribute('image_identifier');
    }
    // image_repository_type - computed: true, optional: false, required: false
    get imageRepositoryType() {
        return this.getStringAttribute('image_repository_type');
    }
}
exports.DataAwsccApprunnerServiceSourceConfigurationImageRepository = DataAwsccApprunnerServiceSourceConfigurationImageRepository;
function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        image_configuration: dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct.imageConfiguration),
        image_identifier: cdktf.stringToTerraform(struct.imageIdentifier),
        image_repository_type: cdktf.stringToTerraform(struct.imageRepositoryType),
    };
}
exports.dataAwsccApprunnerServiceSourceConfigurationImageRepositoryToTerraform = dataAwsccApprunnerServiceSourceConfigurationImageRepositoryToTerraform;
class DataAwsccApprunnerServiceSourceConfiguration extends cdktf.ComplexComputedList {
    // authentication_configuration - computed: true, optional: false, required: false
    get authenticationConfiguration() {
        return this.interpolationForAttribute('authentication_configuration');
    }
    // auto_deployments_enabled - computed: true, optional: false, required: false
    get autoDeploymentsEnabled() {
        return this.getBooleanAttribute('auto_deployments_enabled');
    }
    // code_repository - computed: true, optional: false, required: false
    get codeRepository() {
        return this.interpolationForAttribute('code_repository');
    }
    // image_repository - computed: true, optional: false, required: false
    get imageRepository() {
        return this.interpolationForAttribute('image_repository');
    }
}
exports.DataAwsccApprunnerServiceSourceConfiguration = DataAwsccApprunnerServiceSourceConfiguration;
function dataAwsccApprunnerServiceSourceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        authentication_configuration: dataAwsccApprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct.authenticationConfiguration),
        auto_deployments_enabled: cdktf.booleanToTerraform(struct.autoDeploymentsEnabled),
        code_repository: dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct.codeRepository),
        image_repository: dataAwsccApprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct.imageRepository),
    };
}
exports.dataAwsccApprunnerServiceSourceConfigurationToTerraform = dataAwsccApprunnerServiceSourceConfigurationToTerraform;
class DataAwsccApprunnerServiceTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccApprunnerServiceTags = DataAwsccApprunnerServiceTags;
function dataAwsccApprunnerServiceTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccApprunnerServiceTagsToTerraform = dataAwsccApprunnerServiceTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apprunner_service.html awscc_apprunner_service}
*/
class DataAwsccApprunnerService extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apprunner_service.html awscc_apprunner_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccApprunnerServiceConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_apprunner_service',
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
    // auto_scaling_configuration_arn - computed: true, optional: false, required: false
    get autoScalingConfigurationArn() {
        return this.getStringAttribute('auto_scaling_configuration_arn');
    }
    // encryption_configuration - computed: true, optional: false, required: false
    get encryptionConfiguration() {
        return this.interpolationForAttribute('encryption_configuration');
    }
    // health_check_configuration - computed: true, optional: false, required: false
    get healthCheckConfiguration() {
        return this.interpolationForAttribute('health_check_configuration');
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
    // instance_configuration - computed: true, optional: false, required: false
    get instanceConfiguration() {
        return this.interpolationForAttribute('instance_configuration');
    }
    // service_arn - computed: true, optional: false, required: false
    get serviceArn() {
        return this.getStringAttribute('service_arn');
    }
    // service_id - computed: true, optional: false, required: false
    get serviceId() {
        return this.getStringAttribute('service_id');
    }
    // service_name - computed: true, optional: false, required: false
    get serviceName() {
        return this.getStringAttribute('service_name');
    }
    // service_url - computed: true, optional: false, required: false
    get serviceUrl() {
        return this.getStringAttribute('service_url');
    }
    // source_configuration - computed: true, optional: false, required: false
    get sourceConfiguration() {
        return this.interpolationForAttribute('source_configuration');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
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
exports.DataAwsccApprunnerService = DataAwsccApprunnerService;
// =================
// STATIC PROPERTIES
// =================
DataAwsccApprunnerService.tfResourceType = "awscc_apprunner_service";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1hcHBydW5uZXItc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtYXdzY2MtYXBwcnVubmVyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlFQUF5RTtBQUN6RSwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFZL0IsTUFBYSxnREFBaUQsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTdGLDZEQUE2RDtJQUM3RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7QUFORCw0R0FNQztBQUVELFNBQWdCLDJEQUEyRCxDQUFDLE1BQXlEO0lBQ25JLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2pELENBQUE7QUFDSCxDQUFDO0FBTEQsa0lBS0M7QUFFRCxNQUFhLGlEQUFrRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFOUYsdUVBQXVFO0lBQ3ZFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsOERBQThEO0lBQzlELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENB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LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2FwcHJ1bm5lcl9zZXJ2aWNlLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIHJlc291cmNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvYXBwcnVubmVyX3NlcnZpY2UuaHRtbCNpZCBEYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlI2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VFbmNyeXB0aW9uQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGttc19rZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrbXNLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VFbmNyeXB0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VFbmNyeXB0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrbXNfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VIZWFsdGhDaGVja0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBoZWFsdGh5X3RocmVzaG9sZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhlYWx0aHlUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdoZWFsdGh5X3RocmVzaG9sZCcpO1xuICB9XG5cbiAgLy8gaW50ZXJ2YWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnRlcnZhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2ludGVydmFsJyk7XG4gIH1cblxuICAvLyBwYXRoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhdGgnKTtcbiAgfVxuXG4gIC8vIHByb3RvY29sIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm90b2NvbCcpO1xuICB9XG5cbiAgLy8gdGltZW91dCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0aW1lb3V0Jyk7XG4gIH1cblxuICAvLyB1bmhlYWx0aHlfdGhyZXNob2xkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdW5oZWFsdGh5VGhyZXNob2xkKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndW5oZWFsdGh5X3RocmVzaG9sZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlSGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwcnVubmVyU2VydmljZUhlYWx0aENoZWNrQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBoZWFsdGh5X3RocmVzaG9sZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5oZWFsdGh5VGhyZXNob2xkKSxcbiAgICBpbnRlcnZhbDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbnRlcnZhbCksXG4gICAgcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXRoKSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgdGltZW91dDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0KSxcbiAgICB1bmhlYWx0aHlfdGhyZXNob2xkOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaGVhbHRoeVRocmVzaG9sZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjcHUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcHUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcHUnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2Vfcm9sZV9hcm4nKTtcbiAgfVxuXG4gIC8vIG1lbW9yeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1lbW9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lbW9yeScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlSW5zdGFuY2VDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwcnVubmVyU2VydmljZUluc3RhbmNlQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjcHU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3B1KSxcbiAgICBpbnN0YW5jZV9yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVJvbGVBcm4pLFxuICAgIG1lbW9yeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZW1vcnkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFjY2Vzc19yb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjY2Vzc1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2Nlc3Nfcm9sZV9hcm4nKTtcbiAgfVxuXG4gIC8vIGNvbm5lY3Rpb25fYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29ubmVjdGlvbkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nvbm5lY3Rpb25fYXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25BdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNjZXNzX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY2Vzc1JvbGVBcm4pLFxuICAgIGNvbm5lY3Rpb25fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3Rpb25Bcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb25Db2RlQ29uZmlndXJhdGlvblZhbHVlc1J1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzUnVudGltZUVudmlyb25tZW50VmFyaWFibGVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uQ29kZUNvbmZpZ3VyYXRpb25WYWx1ZXNSdW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYnVpbGRfY29tbWFuZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1aWxkQ29tbWFuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1aWxkX2NvbW1hbmQnKTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG5cbiAgLy8gcnVudGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJ1bnRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdydW50aW1lJyk7XG4gIH1cblxuICAvLyBydW50aW1lX2Vudmlyb25tZW50X3ZhcmlhYmxlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdydW50aW1lX2Vudmlyb25tZW50X3ZhcmlhYmxlcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN0YXJ0X2NvbW1hbmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGFydENvbW1hbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGFydF9jb21tYW5kJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uQ29kZUNvbmZpZ3VyYXRpb25WYWx1ZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYnVpbGRfY29tbWFuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWlsZENvbW1hbmQpLFxuICAgIHBvcnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gICAgcnVudGltZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ydW50aW1lKSxcbiAgICBydW50aW1lX2Vudmlyb25tZW50X3ZhcmlhYmxlczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb25Db2RlQ29uZmlndXJhdGlvblZhbHVlc1J1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcyksXG4gICAgc3RhcnRfY29tbWFuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGFydENvbW1hbmQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb2RlX2NvbmZpZ3VyYXRpb25fdmFsdWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29kZUNvbmZpZ3VyYXRpb25WYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29kZV9jb25maWd1cmF0aW9uX3ZhbHVlcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNvbmZpZ3VyYXRpb25fc291cmNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvblNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbmZpZ3VyYXRpb25fc291cmNlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb2RlX2NvbmZpZ3VyYXRpb25fdmFsdWVzOiBkYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb25Db2RlQ29uZmlndXJhdGlvblZhbHVlc1RvVGVycmFmb3JtKHN0cnVjdCEuY29kZUNvbmZpZ3VyYXRpb25WYWx1ZXMpLFxuICAgIGNvbmZpZ3VyYXRpb25fc291cmNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpZ3VyYXRpb25Tb3VyY2UpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5U291cmNlQ29kZVZlcnNpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5U291cmNlQ29kZVZlcnNpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5U291cmNlQ29kZVZlcnNpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnkgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb2RlX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb2RlQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb2RlX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZXBvc2l0b3J5X3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlcG9zaXRvcnlVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXBvc2l0b3J5X3VybCcpO1xuICB9XG5cbiAgLy8gc291cmNlX2NvZGVfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNvdXJjZUNvZGVWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NvdXJjZV9jb2RlX3ZlcnNpb24nKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvZGVfY29uZmlndXJhdGlvbjogZGF0YUF3c2NjQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jb2RlQ29uZmlndXJhdGlvbiksXG4gICAgcmVwb3NpdG9yeV91cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVwb3NpdG9yeVVybCksXG4gICAgc291cmNlX2NvZGVfdmVyc2lvbjogZGF0YUF3c2NjQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeVNvdXJjZUNvZGVWZXJzaW9uVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VDb2RlVmVyc2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5SW1hZ2VDb25maWd1cmF0aW9uUnVudGltZUVudmlyb25tZW50VmFyaWFibGVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlJbWFnZUNvbmZpZ3VyYXRpb25SdW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeUltYWdlQ29uZmlndXJhdGlvblJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlJbWFnZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxuXG4gIC8vIHJ1bnRpbWVfZW52aXJvbm1lbnRfdmFyaWFibGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcnVudGltZUVudmlyb25tZW50VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3J1bnRpbWVfZW52aXJvbm1lbnRfdmFyaWFibGVzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3RhcnRfY29tbWFuZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXJ0Q29tbWFuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXJ0X2NvbW1hbmQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlJbWFnZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeUltYWdlQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwb3J0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICAgIHJ1bnRpbWVfZW52aXJvbm1lbnRfdmFyaWFibGVzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5SW1hZ2VDb25maWd1cmF0aW9uUnVudGltZUVudmlyb25tZW50VmFyaWFibGVzVG9UZXJyYWZvcm0pKHN0cnVjdCEucnVudGltZUVudmlyb25tZW50VmFyaWFibGVzKSxcbiAgICBzdGFydF9jb21tYW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXJ0Q29tbWFuZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaW1hZ2VfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGltYWdlQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpbWFnZV9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaW1hZ2VfaWRlbnRpZmllciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGltYWdlSWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ltYWdlX2lkZW50aWZpZXInKTtcbiAgfVxuXG4gIC8vIGltYWdlX3JlcG9zaXRvcnlfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGltYWdlUmVwb3NpdG9yeVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbWFnZV9yZXBvc2l0b3J5X3R5cGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbWFnZV9jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeUltYWdlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VDb25maWd1cmF0aW9uKSxcbiAgICBpbWFnZV9pZGVudGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmltYWdlSWRlbnRpZmllciksXG4gICAgaW1hZ2VfcmVwb3NpdG9yeV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmltYWdlUmVwb3NpdG9yeVR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGF1dGhlbnRpY2F0aW9uX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXV0aGVudGljYXRpb25fY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGF1dG9fZGVwbG95bWVudHNfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF1dG9EZXBsb3ltZW50c0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXV0b19kZXBsb3ltZW50c19lbmFibGVkJyk7XG4gIH1cblxuICAvLyBjb2RlX3JlcG9zaXRvcnkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb2RlUmVwb3NpdG9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb2RlX3JlcG9zaXRvcnknKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpbWFnZV9yZXBvc2l0b3J5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW1hZ2VSZXBvc2l0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ltYWdlX3JlcG9zaXRvcnknKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXV0aGVudGljYXRpb25fY29uZmlndXJhdGlvbjogZGF0YUF3c2NjQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25BdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbiksXG4gICAgYXV0b19kZXBsb3ltZW50c19lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRvRGVwbG95bWVudHNFbmFibGVkKSxcbiAgICBjb2RlX3JlcG9zaXRvcnk6IGRhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvZGVSZXBvc2l0b3J5KSxcbiAgICBpbWFnZV9yZXBvc2l0b3J5OiBkYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeVRvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VSZXBvc2l0b3J5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwcnVubmVyU2VydmljZVRhZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBydW5uZXJTZXJ2aWNlVGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VUYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2FwcHJ1bm5lcl9zZXJ2aWNlLmh0bWwgYXdzY2NfYXBwcnVubmVyX3NlcnZpY2V9XG4qL1xuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2UgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2FwcHJ1bm5lcl9zZXJ2aWNlXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2FwcHJ1bm5lcl9zZXJ2aWNlLmh0bWwgYXdzY2NfYXBwcnVubmVyX3NlcnZpY2V9IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY0FwcHJ1bm5lclNlcnZpY2VDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjQXBwcnVubmVyU2VydmljZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfYXBwcnVubmVyX3NlcnZpY2UnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXV0b19zY2FsaW5nX2NvbmZpZ3VyYXRpb25fYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXV0b1NjYWxpbmdDb25maWd1cmF0aW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0b19zY2FsaW5nX2NvbmZpZ3VyYXRpb25fYXJuJyk7XG4gIH1cblxuICAvLyBlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmNyeXB0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBoZWFsdGhfY2hlY2tfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhlYWx0aENoZWNrQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdoZWFsdGhfY2hlY2tfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBpbnN0YW5jZV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2luc3RhbmNlX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzZXJ2aWNlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlcnZpY2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX2FybicpO1xuICB9XG5cbiAgLy8gc2VydmljZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlcnZpY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2VfaWQnKTtcbiAgfVxuXG4gIC8vIHNlcnZpY2VfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9uYW1lJyk7XG4gIH1cblxuICAvLyBzZXJ2aWNlX3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlcnZpY2VVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX3VybCcpO1xuICB9XG5cbiAgLy8gc291cmNlX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb3VyY2VDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NvdXJjZV9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==