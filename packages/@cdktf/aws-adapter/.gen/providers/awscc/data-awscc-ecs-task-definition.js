"use strict";
// https://www.terraform.io/docs/providers/awscc/d/ecs_task_definition.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesToTerraform = exports.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties = exports.dataAwsccEcsTaskDefinitionPlacementConstraintsToTerraform = exports.DataAwsccEcsTaskDefinitionPlacementConstraints = exports.dataAwsccEcsTaskDefinitionInferenceAcceleratorsToTerraform = exports.DataAwsccEcsTaskDefinitionInferenceAccelerators = exports.dataAwsccEcsTaskDefinitionEphemeralStorageToTerraform = exports.DataAwsccEcsTaskDefinitionEphemeralStorage = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitions = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsSecretsToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment = exports.dataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnToTerraform = exports.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn = void 0;
exports.DataAwsccEcsTaskDefinition = exports.dataAwsccEcsTaskDefinitionVolumesToTerraform = exports.DataAwsccEcsTaskDefinitionVolumes = exports.dataAwsccEcsTaskDefinitionVolumesHostToTerraform = exports.DataAwsccEcsTaskDefinitionVolumesHost = exports.dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationToTerraform = exports.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration = exports.dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform = exports.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig = exports.dataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationToTerraform = exports.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration = exports.dataAwsccEcsTaskDefinitionTagsToTerraform = exports.DataAwsccEcsTaskDefinitionTags = exports.dataAwsccEcsTaskDefinitionProxyConfigurationToTerraform = exports.DataAwsccEcsTaskDefinitionProxyConfiguration = void 0;
const cdktf = require("cdktf");
class DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn extends cdktf.ComplexComputedList {
    // condition - computed: true, optional: false, required: false
    get condition() {
        return this.getStringAttribute('condition');
    }
    // container_name - computed: true, optional: false, required: false
    get containerName() {
        return this.getStringAttribute('container_name');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn = DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn;
function dataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        condition: cdktf.stringToTerraform(struct.condition),
        container_name: cdktf.stringToTerraform(struct.containerName),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment = DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment;
function dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles extends cdktf.ComplexComputedList {
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles = DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles;
function dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts extends cdktf.ComplexComputedList {
    // hostname - computed: true, optional: false, required: false
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    // ip_address - computed: true, optional: false, required: false
    get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts = DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts;
function dataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hostname: cdktf.stringToTerraform(struct.hostname),
        ip_address: cdktf.stringToTerraform(struct.ipAddress),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration extends cdktf.ComplexComputedList {
    // options - computed: true, optional: false, required: false
    get options() {
        return this.interpolationForAttribute('options');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration = DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration;
function dataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        options: cdktf.hashMapper(cdktf.stringToTerraform)(struct.options),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck extends cdktf.ComplexComputedList {
    // command - computed: true, optional: false, required: false
    get command() {
        return this.getListAttribute('command');
    }
    // interval - computed: true, optional: false, required: false
    get interval() {
        return this.getNumberAttribute('interval');
    }
    // retries - computed: true, optional: false, required: false
    get retries() {
        return this.getNumberAttribute('retries');
    }
    // start_period - computed: true, optional: false, required: false
    get startPeriod() {
        return this.getNumberAttribute('start_period');
    }
    // timeout - computed: true, optional: false, required: false
    get timeout() {
        return this.getNumberAttribute('timeout');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck = DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck;
function dataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        command: cdktf.listMapper(cdktf.stringToTerraform)(struct.command),
        interval: cdktf.numberToTerraform(struct.interval),
        retries: cdktf.numberToTerraform(struct.retries),
        start_period: cdktf.numberToTerraform(struct.startPeriod),
        timeout: cdktf.numberToTerraform(struct.timeout),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities extends cdktf.ComplexComputedList {
    // add - computed: true, optional: false, required: false
    get add() {
        return this.getListAttribute('add');
    }
    // drop - computed: true, optional: false, required: false
    get drop() {
        return this.getListAttribute('drop');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities = DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities;
function dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        add: cdktf.listMapper(cdktf.stringToTerraform)(struct.add),
        drop: cdktf.listMapper(cdktf.stringToTerraform)(struct.drop),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices extends cdktf.ComplexComputedList {
    // container_path - computed: true, optional: false, required: false
    get containerPath() {
        return this.getStringAttribute('container_path');
    }
    // host_path - computed: true, optional: false, required: false
    get hostPath() {
        return this.getStringAttribute('host_path');
    }
    // permissions - computed: true, optional: false, required: false
    get permissions() {
        return this.getListAttribute('permissions');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices = DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices;
function dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_path: cdktf.stringToTerraform(struct.containerPath),
        host_path: cdktf.stringToTerraform(struct.hostPath),
        permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct.permissions),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs extends cdktf.ComplexComputedList {
    // container_path - computed: true, optional: false, required: false
    get containerPath() {
        return this.getStringAttribute('container_path');
    }
    // mount_options - computed: true, optional: false, required: false
    get mountOptions() {
        return this.getListAttribute('mount_options');
    }
    // size - computed: true, optional: false, required: false
    get size() {
        return this.getNumberAttribute('size');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs = DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs;
function dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_path: cdktf.stringToTerraform(struct.containerPath),
        mount_options: cdktf.listMapper(cdktf.stringToTerraform)(struct.mountOptions),
        size: cdktf.numberToTerraform(struct.size),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters extends cdktf.ComplexComputedList {
    // capabilities - computed: true, optional: false, required: false
    get capabilities() {
        return this.interpolationForAttribute('capabilities');
    }
    // devices - computed: true, optional: false, required: false
    get devices() {
        return this.interpolationForAttribute('devices');
    }
    // init_process_enabled - computed: true, optional: false, required: false
    get initProcessEnabled() {
        return this.getBooleanAttribute('init_process_enabled');
    }
    // max_swap - computed: true, optional: false, required: false
    get maxSwap() {
        return this.getNumberAttribute('max_swap');
    }
    // shared_memory_size - computed: true, optional: false, required: false
    get sharedMemorySize() {
        return this.getNumberAttribute('shared_memory_size');
    }
    // swappiness - computed: true, optional: false, required: false
    get swappiness() {
        return this.getNumberAttribute('swappiness');
    }
    // tmpfs - computed: true, optional: false, required: false
    get tmpfs() {
        return this.interpolationForAttribute('tmpfs');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters = DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters;
function dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        capabilities: dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToTerraform(struct.capabilities),
        devices: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesToTerraform)(struct.devices),
        init_process_enabled: cdktf.booleanToTerraform(struct.initProcessEnabled),
        max_swap: cdktf.numberToTerraform(struct.maxSwap),
        shared_memory_size: cdktf.numberToTerraform(struct.sharedMemorySize),
        swappiness: cdktf.numberToTerraform(struct.swappiness),
        tmpfs: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToTerraform)(struct.tmpfs),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // value_from - computed: true, optional: false, required: false
    get valueFrom() {
        return this.getStringAttribute('value_from');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions = DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions;
function dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value_from: cdktf.stringToTerraform(struct.valueFrom),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration extends cdktf.ComplexComputedList {
    // log_driver - computed: true, optional: false, required: false
    get logDriver() {
        return this.getStringAttribute('log_driver');
    }
    // options - computed: true, optional: false, required: false
    get options() {
        return this.interpolationForAttribute('options');
    }
    // secret_options - computed: true, optional: false, required: false
    get secretOptions() {
        return this.interpolationForAttribute('secret_options');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration = DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration;
function dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        log_driver: cdktf.stringToTerraform(struct.logDriver),
        options: cdktf.hashMapper(cdktf.stringToTerraform)(struct.options),
        secret_options: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToTerraform)(struct.secretOptions),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints extends cdktf.ComplexComputedList {
    // container_path - computed: true, optional: false, required: false
    get containerPath() {
        return this.getStringAttribute('container_path');
    }
    // read_only - computed: true, optional: false, required: false
    get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    // source_volume - computed: true, optional: false, required: false
    get sourceVolume() {
        return this.getStringAttribute('source_volume');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints = DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints;
function dataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_path: cdktf.stringToTerraform(struct.containerPath),
        read_only: cdktf.booleanToTerraform(struct.readOnly),
        source_volume: cdktf.stringToTerraform(struct.sourceVolume),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings extends cdktf.ComplexComputedList {
    // container_port - computed: true, optional: false, required: false
    get containerPort() {
        return this.getNumberAttribute('container_port');
    }
    // host_port - computed: true, optional: false, required: false
    get hostPort() {
        return this.getNumberAttribute('host_port');
    }
    // protocol - computed: true, optional: false, required: false
    get protocol() {
        return this.getStringAttribute('protocol');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings = DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings;
function dataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_port: cdktf.numberToTerraform(struct.containerPort),
        host_port: cdktf.numberToTerraform(struct.hostPort),
        protocol: cdktf.stringToTerraform(struct.protocol),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials extends cdktf.ComplexComputedList {
    // credentials_parameter - computed: true, optional: false, required: false
    get credentialsParameter() {
        return this.getStringAttribute('credentials_parameter');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials = DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials;
function dataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        credentials_parameter: cdktf.stringToTerraform(struct.credentialsParameter),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements extends cdktf.ComplexComputedList {
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements = DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements;
function dataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // value_from - computed: true, optional: false, required: false
    get valueFrom() {
        return this.getStringAttribute('value_from');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets = DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets;
function dataAwsccEcsTaskDefinitionContainerDefinitionsSecretsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value_from: cdktf.stringToTerraform(struct.valueFrom),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsSecretsToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsSecretsToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls extends cdktf.ComplexComputedList {
    // namespace - computed: true, optional: false, required: false
    get namespace() {
        return this.getStringAttribute('namespace');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls = DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls;
function dataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        namespace: cdktf.stringToTerraform(struct.namespace),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits extends cdktf.ComplexComputedList {
    // hard_limit - computed: true, optional: false, required: false
    get hardLimit() {
        return this.getNumberAttribute('hard_limit');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // soft_limit - computed: true, optional: false, required: false
    get softLimit() {
        return this.getNumberAttribute('soft_limit');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits = DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits;
function dataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hard_limit: cdktf.numberToTerraform(struct.hardLimit),
        name: cdktf.stringToTerraform(struct.name),
        soft_limit: cdktf.numberToTerraform(struct.softLimit),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom extends cdktf.ComplexComputedList {
    // read_only - computed: true, optional: false, required: false
    get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    // source_container - computed: true, optional: false, required: false
    get sourceContainer() {
        return this.getStringAttribute('source_container');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom = DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom;
function dataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        read_only: cdktf.booleanToTerraform(struct.readOnly),
        source_container: cdktf.stringToTerraform(struct.sourceContainer),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromToTerraform;
class DataAwsccEcsTaskDefinitionContainerDefinitions extends cdktf.ComplexComputedList {
    // command - computed: true, optional: false, required: false
    get command() {
        return this.getListAttribute('command');
    }
    // cpu - computed: true, optional: false, required: false
    get cpu() {
        return this.getNumberAttribute('cpu');
    }
    // depends_on - computed: true, optional: false, required: false
    get dependsOn() {
        return this.interpolationForAttribute('depends_on');
    }
    // disable_networking - computed: true, optional: false, required: false
    get disableNetworking() {
        return this.getBooleanAttribute('disable_networking');
    }
    // dns_search_domains - computed: true, optional: false, required: false
    get dnsSearchDomains() {
        return this.getListAttribute('dns_search_domains');
    }
    // dns_servers - computed: true, optional: false, required: false
    get dnsServers() {
        return this.getListAttribute('dns_servers');
    }
    // docker_labels - computed: true, optional: false, required: false
    get dockerLabels() {
        return this.interpolationForAttribute('docker_labels');
    }
    // docker_security_options - computed: true, optional: false, required: false
    get dockerSecurityOptions() {
        return this.getListAttribute('docker_security_options');
    }
    // entry_point - computed: true, optional: false, required: false
    get entryPoint() {
        return this.getListAttribute('entry_point');
    }
    // environment - computed: true, optional: false, required: false
    get environment() {
        return this.interpolationForAttribute('environment');
    }
    // environment_files - computed: true, optional: false, required: false
    get environmentFiles() {
        return this.interpolationForAttribute('environment_files');
    }
    // essential - computed: true, optional: false, required: false
    get essential() {
        return this.getBooleanAttribute('essential');
    }
    // extra_hosts - computed: true, optional: false, required: false
    get extraHosts() {
        return this.interpolationForAttribute('extra_hosts');
    }
    // firelens_configuration - computed: true, optional: false, required: false
    get firelensConfiguration() {
        return this.interpolationForAttribute('firelens_configuration');
    }
    // health_check - computed: true, optional: false, required: false
    get healthCheck() {
        return this.interpolationForAttribute('health_check');
    }
    // hostname - computed: true, optional: false, required: false
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    // image - computed: true, optional: false, required: false
    get image() {
        return this.getStringAttribute('image');
    }
    // interactive - computed: true, optional: false, required: false
    get interactive() {
        return this.getBooleanAttribute('interactive');
    }
    // links - computed: true, optional: false, required: false
    get links() {
        return this.getListAttribute('links');
    }
    // linux_parameters - computed: true, optional: false, required: false
    get linuxParameters() {
        return this.interpolationForAttribute('linux_parameters');
    }
    // log_configuration - computed: true, optional: false, required: false
    get logConfiguration() {
        return this.interpolationForAttribute('log_configuration');
    }
    // memory - computed: true, optional: false, required: false
    get memory() {
        return this.getNumberAttribute('memory');
    }
    // memory_reservation - computed: true, optional: false, required: false
    get memoryReservation() {
        return this.getNumberAttribute('memory_reservation');
    }
    // mount_points - computed: true, optional: false, required: false
    get mountPoints() {
        return this.interpolationForAttribute('mount_points');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // port_mappings - computed: true, optional: false, required: false
    get portMappings() {
        return this.interpolationForAttribute('port_mappings');
    }
    // privileged - computed: true, optional: false, required: false
    get privileged() {
        return this.getBooleanAttribute('privileged');
    }
    // pseudo_terminal - computed: true, optional: false, required: false
    get pseudoTerminal() {
        return this.getBooleanAttribute('pseudo_terminal');
    }
    // readonly_root_filesystem - computed: true, optional: false, required: false
    get readonlyRootFilesystem() {
        return this.getBooleanAttribute('readonly_root_filesystem');
    }
    // repository_credentials - computed: true, optional: false, required: false
    get repositoryCredentials() {
        return this.interpolationForAttribute('repository_credentials');
    }
    // resource_requirements - computed: true, optional: false, required: false
    get resourceRequirements() {
        return this.interpolationForAttribute('resource_requirements');
    }
    // secrets - computed: true, optional: false, required: false
    get secrets() {
        return this.interpolationForAttribute('secrets');
    }
    // start_timeout - computed: true, optional: false, required: false
    get startTimeout() {
        return this.getNumberAttribute('start_timeout');
    }
    // stop_timeout - computed: true, optional: false, required: false
    get stopTimeout() {
        return this.getNumberAttribute('stop_timeout');
    }
    // system_controls - computed: true, optional: false, required: false
    get systemControls() {
        return this.interpolationForAttribute('system_controls');
    }
    // ulimits - computed: true, optional: false, required: false
    get ulimits() {
        return this.interpolationForAttribute('ulimits');
    }
    // user - computed: true, optional: false, required: false
    get user() {
        return this.getStringAttribute('user');
    }
    // volumes_from - computed: true, optional: false, required: false
    get volumesFrom() {
        return this.interpolationForAttribute('volumes_from');
    }
    // working_directory - computed: true, optional: false, required: false
    get workingDirectory() {
        return this.getStringAttribute('working_directory');
    }
}
exports.DataAwsccEcsTaskDefinitionContainerDefinitions = DataAwsccEcsTaskDefinitionContainerDefinitions;
function dataAwsccEcsTaskDefinitionContainerDefinitionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        command: cdktf.listMapper(cdktf.stringToTerraform)(struct.command),
        cpu: cdktf.numberToTerraform(struct.cpu),
        depends_on: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnToTerraform)(struct.dependsOn),
        disable_networking: cdktf.booleanToTerraform(struct.disableNetworking),
        dns_search_domains: cdktf.listMapper(cdktf.stringToTerraform)(struct.dnsSearchDomains),
        dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct.dnsServers),
        docker_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct.dockerLabels),
        docker_security_options: cdktf.listMapper(cdktf.stringToTerraform)(struct.dockerSecurityOptions),
        entry_point: cdktf.listMapper(cdktf.stringToTerraform)(struct.entryPoint),
        environment: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentToTerraform)(struct.environment),
        environment_files: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesToTerraform)(struct.environmentFiles),
        essential: cdktf.booleanToTerraform(struct.essential),
        extra_hosts: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsToTerraform)(struct.extraHosts),
        firelens_configuration: dataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationToTerraform(struct.firelensConfiguration),
        health_check: dataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckToTerraform(struct.healthCheck),
        hostname: cdktf.stringToTerraform(struct.hostname),
        image: cdktf.stringToTerraform(struct.image),
        interactive: cdktf.booleanToTerraform(struct.interactive),
        links: cdktf.listMapper(cdktf.stringToTerraform)(struct.links),
        linux_parameters: dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersToTerraform(struct.linuxParameters),
        log_configuration: dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationToTerraform(struct.logConfiguration),
        memory: cdktf.numberToTerraform(struct.memory),
        memory_reservation: cdktf.numberToTerraform(struct.memoryReservation),
        mount_points: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsToTerraform)(struct.mountPoints),
        name: cdktf.stringToTerraform(struct.name),
        port_mappings: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsToTerraform)(struct.portMappings),
        privileged: cdktf.booleanToTerraform(struct.privileged),
        pseudo_terminal: cdktf.booleanToTerraform(struct.pseudoTerminal),
        readonly_root_filesystem: cdktf.booleanToTerraform(struct.readonlyRootFilesystem),
        repository_credentials: dataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsToTerraform(struct.repositoryCredentials),
        resource_requirements: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsToTerraform)(struct.resourceRequirements),
        secrets: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsSecretsToTerraform)(struct.secrets),
        start_timeout: cdktf.numberToTerraform(struct.startTimeout),
        stop_timeout: cdktf.numberToTerraform(struct.stopTimeout),
        system_controls: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsToTerraform)(struct.systemControls),
        ulimits: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsToTerraform)(struct.ulimits),
        user: cdktf.stringToTerraform(struct.user),
        volumes_from: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromToTerraform)(struct.volumesFrom),
        working_directory: cdktf.stringToTerraform(struct.workingDirectory),
    };
}
exports.dataAwsccEcsTaskDefinitionContainerDefinitionsToTerraform = dataAwsccEcsTaskDefinitionContainerDefinitionsToTerraform;
class DataAwsccEcsTaskDefinitionEphemeralStorage extends cdktf.ComplexComputedList {
    // size_in_gi_b - computed: true, optional: false, required: false
    get sizeInGiB() {
        return this.getNumberAttribute('size_in_gi_b');
    }
}
exports.DataAwsccEcsTaskDefinitionEphemeralStorage = DataAwsccEcsTaskDefinitionEphemeralStorage;
function dataAwsccEcsTaskDefinitionEphemeralStorageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        size_in_gi_b: cdktf.numberToTerraform(struct.sizeInGiB),
    };
}
exports.dataAwsccEcsTaskDefinitionEphemeralStorageToTerraform = dataAwsccEcsTaskDefinitionEphemeralStorageToTerraform;
class DataAwsccEcsTaskDefinitionInferenceAccelerators extends cdktf.ComplexComputedList {
    // device_name - computed: true, optional: false, required: false
    get deviceName() {
        return this.getStringAttribute('device_name');
    }
    // device_type - computed: true, optional: false, required: false
    get deviceType() {
        return this.getStringAttribute('device_type');
    }
}
exports.DataAwsccEcsTaskDefinitionInferenceAccelerators = DataAwsccEcsTaskDefinitionInferenceAccelerators;
function dataAwsccEcsTaskDefinitionInferenceAcceleratorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        device_type: cdktf.stringToTerraform(struct.deviceType),
    };
}
exports.dataAwsccEcsTaskDefinitionInferenceAcceleratorsToTerraform = dataAwsccEcsTaskDefinitionInferenceAcceleratorsToTerraform;
class DataAwsccEcsTaskDefinitionPlacementConstraints extends cdktf.ComplexComputedList {
    // expression - computed: true, optional: false, required: false
    get expression() {
        return this.getStringAttribute('expression');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccEcsTaskDefinitionPlacementConstraints = DataAwsccEcsTaskDefinitionPlacementConstraints;
function dataAwsccEcsTaskDefinitionPlacementConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccEcsTaskDefinitionPlacementConstraintsToTerraform = dataAwsccEcsTaskDefinitionPlacementConstraintsToTerraform;
class DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties = DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties;
function dataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesToTerraform = dataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesToTerraform;
class DataAwsccEcsTaskDefinitionProxyConfiguration extends cdktf.ComplexComputedList {
    // container_name - computed: true, optional: false, required: false
    get containerName() {
        return this.getStringAttribute('container_name');
    }
    // proxy_configuration_properties - computed: true, optional: false, required: false
    get proxyConfigurationProperties() {
        return this.interpolationForAttribute('proxy_configuration_properties');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccEcsTaskDefinitionProxyConfiguration = DataAwsccEcsTaskDefinitionProxyConfiguration;
function dataAwsccEcsTaskDefinitionProxyConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_name: cdktf.stringToTerraform(struct.containerName),
        proxy_configuration_properties: cdktf.listMapper(dataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesToTerraform)(struct.proxyConfigurationProperties),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccEcsTaskDefinitionProxyConfigurationToTerraform = dataAwsccEcsTaskDefinitionProxyConfigurationToTerraform;
class DataAwsccEcsTaskDefinitionTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccEcsTaskDefinitionTags = DataAwsccEcsTaskDefinitionTags;
function dataAwsccEcsTaskDefinitionTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccEcsTaskDefinitionTagsToTerraform = dataAwsccEcsTaskDefinitionTagsToTerraform;
class DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration extends cdktf.ComplexComputedList {
    // autoprovision - computed: true, optional: false, required: false
    get autoprovision() {
        return this.getBooleanAttribute('autoprovision');
    }
    // driver - computed: true, optional: false, required: false
    get driver() {
        return this.getStringAttribute('driver');
    }
    // driver_opts - computed: true, optional: false, required: false
    get driverOpts() {
        return this.interpolationForAttribute('driver_opts');
    }
    // labels - computed: true, optional: false, required: false
    get labels() {
        return this.interpolationForAttribute('labels');
    }
    // scope - computed: true, optional: false, required: false
    get scope() {
        return this.getStringAttribute('scope');
    }
}
exports.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration = DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration;
function dataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        autoprovision: cdktf.booleanToTerraform(struct.autoprovision),
        driver: cdktf.stringToTerraform(struct.driver),
        driver_opts: cdktf.hashMapper(cdktf.stringToTerraform)(struct.driverOpts),
        labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct.labels),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
exports.dataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationToTerraform = dataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationToTerraform;
class DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig extends cdktf.ComplexComputedList {
    // access_point_id - computed: true, optional: false, required: false
    get accessPointId() {
        return this.getStringAttribute('access_point_id');
    }
    // iam - computed: true, optional: false, required: false
    get iam() {
        return this.getStringAttribute('iam');
    }
}
exports.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig = DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig;
function dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_point_id: cdktf.stringToTerraform(struct.accessPointId),
        iam: cdktf.stringToTerraform(struct.iam),
    };
}
exports.dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform = dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform;
class DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration extends cdktf.ComplexComputedList {
    // authorization_config - computed: true, optional: false, required: false
    get authorizationConfig() {
        return this.interpolationForAttribute('authorization_config');
    }
    // filesystem_id - computed: true, optional: false, required: false
    get filesystemId() {
        return this.getStringAttribute('filesystem_id');
    }
    // root_directory - computed: true, optional: false, required: false
    get rootDirectory() {
        return this.getStringAttribute('root_directory');
    }
    // transit_encryption - computed: true, optional: false, required: false
    get transitEncryption() {
        return this.getStringAttribute('transit_encryption');
    }
    // transit_encryption_port - computed: true, optional: false, required: false
    get transitEncryptionPort() {
        return this.getNumberAttribute('transit_encryption_port');
    }
}
exports.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration = DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration;
function dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        authorization_config: dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform(struct.authorizationConfig),
        filesystem_id: cdktf.stringToTerraform(struct.filesystemId),
        root_directory: cdktf.stringToTerraform(struct.rootDirectory),
        transit_encryption: cdktf.stringToTerraform(struct.transitEncryption),
        transit_encryption_port: cdktf.numberToTerraform(struct.transitEncryptionPort),
    };
}
exports.dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationToTerraform = dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationToTerraform;
class DataAwsccEcsTaskDefinitionVolumesHost extends cdktf.ComplexComputedList {
    // source_path - computed: true, optional: false, required: false
    get sourcePath() {
        return this.getStringAttribute('source_path');
    }
}
exports.DataAwsccEcsTaskDefinitionVolumesHost = DataAwsccEcsTaskDefinitionVolumesHost;
function dataAwsccEcsTaskDefinitionVolumesHostToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        source_path: cdktf.stringToTerraform(struct.sourcePath),
    };
}
exports.dataAwsccEcsTaskDefinitionVolumesHostToTerraform = dataAwsccEcsTaskDefinitionVolumesHostToTerraform;
class DataAwsccEcsTaskDefinitionVolumes extends cdktf.ComplexComputedList {
    // docker_volume_configuration - computed: true, optional: false, required: false
    get dockerVolumeConfiguration() {
        return this.interpolationForAttribute('docker_volume_configuration');
    }
    // efs_volume_configuration - computed: true, optional: false, required: false
    get efsVolumeConfiguration() {
        return this.interpolationForAttribute('efs_volume_configuration');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.interpolationForAttribute('host');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
exports.DataAwsccEcsTaskDefinitionVolumes = DataAwsccEcsTaskDefinitionVolumes;
function dataAwsccEcsTaskDefinitionVolumesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        docker_volume_configuration: dataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationToTerraform(struct.dockerVolumeConfiguration),
        efs_volume_configuration: dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationToTerraform(struct.efsVolumeConfiguration),
        host: dataAwsccEcsTaskDefinitionVolumesHostToTerraform(struct.host),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.dataAwsccEcsTaskDefinitionVolumesToTerraform = dataAwsccEcsTaskDefinitionVolumesToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_task_definition.html awscc_ecs_task_definition}
*/
class DataAwsccEcsTaskDefinition extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_task_definition.html awscc_ecs_task_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcsTaskDefinitionConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecs_task_definition',
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
    // container_definitions - computed: true, optional: false, required: false
    get containerDefinitions() {
        return this.interpolationForAttribute('container_definitions');
    }
    // cpu - computed: true, optional: false, required: false
    get cpu() {
        return this.getStringAttribute('cpu');
    }
    // ephemeral_storage - computed: true, optional: false, required: false
    get ephemeralStorage() {
        return this.interpolationForAttribute('ephemeral_storage');
    }
    // execution_role_arn - computed: true, optional: false, required: false
    get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    // family - computed: true, optional: false, required: false
    get family() {
        return this.getStringAttribute('family');
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
    // inference_accelerators - computed: true, optional: false, required: false
    get inferenceAccelerators() {
        return this.interpolationForAttribute('inference_accelerators');
    }
    // ipc_mode - computed: true, optional: false, required: false
    get ipcMode() {
        return this.getStringAttribute('ipc_mode');
    }
    // memory - computed: true, optional: false, required: false
    get memory() {
        return this.getStringAttribute('memory');
    }
    // network_mode - computed: true, optional: false, required: false
    get networkMode() {
        return this.getStringAttribute('network_mode');
    }
    // pid_mode - computed: true, optional: false, required: false
    get pidMode() {
        return this.getStringAttribute('pid_mode');
    }
    // placement_constraints - computed: true, optional: false, required: false
    get placementConstraints() {
        return this.interpolationForAttribute('placement_constraints');
    }
    // proxy_configuration - computed: true, optional: false, required: false
    get proxyConfiguration() {
        return this.interpolationForAttribute('proxy_configuration');
    }
    // requires_compatibilities - computed: true, optional: false, required: false
    get requiresCompatibilities() {
        return this.getListAttribute('requires_compatibilities');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // task_definition_arn - computed: true, optional: false, required: false
    get taskDefinitionArn() {
        return this.getStringAttribute('task_definition_arn');
    }
    // task_role_arn - computed: true, optional: false, required: false
    get taskRoleArn() {
        return this.getStringAttribute('task_role_arn');
    }
    // volumes - computed: true, optional: false, required: false
    get volumes() {
        return this.interpolationForAttribute('volumes');
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
exports.DataAwsccEcsTaskDefinition = DataAwsccEcsTaskDefinition;
// =================
// STATIC PROPERTIES
// =================
DataAwsccEcsTaskDefinition.tfResourceType = "awscc_ecs_task_definition";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1lY3MtdGFzay1kZWZpbml0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1lY3MtdGFzay1kZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyRUFBMkU7QUFDM0UsMkNBQTJDOzs7O0FBRzNDLCtCQUErQjtBQVkvQixNQUFhLHVEQUF3RCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFcEcsK0RBQStEO0lBQy9ELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsb0VBQW9FO0lBQ3BFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRjtBQVhELDBIQVdDO0FBRUQsU0FBZ0Isa0VBQWtFLENBQUMsTUFBZ0U7SUFDakosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDckQsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO0tBQy9ELENBQUE7QUFDSCxDQUFDO0FBTkQsZ0pBTUM7QUFFRCxNQUFhLHlEQUEwRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFdEcsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwyREFBMkQ7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNGO0FB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QkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsNkRBQTZEO0lBQzdELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUMxRCxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBOUlILGdFQStJQztBQTdJQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHlDQUFjLEdBQVcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9lY3NfdGFza19kZWZpbml0aW9uLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBVbmlxdWVseSBpZGVudGlmaWVzIHRoZSByZXNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2Vjc190YXNrX2RlZmluaXRpb24uaHRtbCNpZCBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbiNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zRGVwZW5kc09uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29uZGl0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29uZGl0aW9uJyk7XG4gIH1cblxuICAvLyBjb250YWluZXJfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250YWluZXJfbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zRGVwZW5kc09uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0RlcGVuZHNPbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb25kaXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29uZGl0aW9uKSxcbiAgICBjb250YWluZXJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250YWluZXJOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0Vudmlyb25tZW50IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0Vudmlyb25tZW50VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0Vudmlyb25tZW50KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zRW52aXJvbm1lbnRGaWxlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNFbnZpcm9ubWVudEZpbGVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0Vudmlyb25tZW50RmlsZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNFeHRyYUhvc3RzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaG9zdG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0bmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RuYW1lJyk7XG4gIH1cblxuICAvLyBpcF9hZGRyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXBBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaXBfYWRkcmVzcycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zRXh0cmFIb3N0c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNFeHRyYUhvc3RzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGhvc3RuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3RuYW1lKSxcbiAgICBpcF9hZGRyZXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlwQWRkcmVzcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNGaXJlbGVuc0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBvcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdvcHRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNGaXJlbGVuc0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zRmlyZWxlbnNDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG9wdGlvbnM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEub3B0aW9ucyksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0hlYWx0aENoZWNrIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29tbWFuZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbW1hbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY29tbWFuZCcpO1xuICB9XG5cbiAgLy8gaW50ZXJ2YWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnRlcnZhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2ludGVydmFsJyk7XG4gIH1cblxuICAvLyByZXRyaWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmV0cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3JldHJpZXMnKTtcbiAgfVxuXG4gIC8vIHN0YXJ0X3BlcmlvZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXJ0UGVyaW9kKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc3RhcnRfcGVyaW9kJyk7XG4gIH1cblxuICAvLyB0aW1lb3V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RpbWVvdXQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0hlYWx0aENoZWNrVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0hlYWx0aENoZWNrKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbW1hbmQ6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29tbWFuZCksXG4gICAgaW50ZXJ2YWw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWwpLFxuICAgIHJldHJpZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucmV0cmllcyksXG4gICAgc3RhcnRfcGVyaW9kOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXJ0UGVyaW9kKSxcbiAgICB0aW1lb3V0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpbWVvdXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zTGludXhQYXJhbWV0ZXJzQ2FwYWJpbGl0aWVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWRkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWRkKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2FkZCcpO1xuICB9XG5cbiAgLy8gZHJvcCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZHJvcCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zTGludXhQYXJhbWV0ZXJzQ2FwYWJpbGl0aWVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0xpbnV4UGFyYW1ldGVyc0NhcGFiaWxpdGllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhZGQ6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWRkKSxcbiAgICBkcm9wOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRyb3ApLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zTGludXhQYXJhbWV0ZXJzRGV2aWNlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbnRhaW5lcl9wYXRoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29udGFpbmVyUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRhaW5lcl9wYXRoJyk7XG4gIH1cblxuICAvLyBob3N0X3BhdGggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RfcGF0aCcpO1xuICB9XG5cbiAgLy8gcGVybWlzc2lvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwZXJtaXNzaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdwZXJtaXNzaW9ucycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zTGludXhQYXJhbWV0ZXJzRGV2aWNlc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNMaW51eFBhcmFtZXRlcnNEZXZpY2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcl9wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRhaW5lclBhdGgpLFxuICAgIGhvc3RfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0UGF0aCksXG4gICAgcGVybWlzc2lvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEucGVybWlzc2lvbnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zTGludXhQYXJhbWV0ZXJzVG1wZnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb250YWluZXJfcGF0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lclBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250YWluZXJfcGF0aCcpO1xuICB9XG5cbiAgLy8gbW91bnRfb3B0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1vdW50T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdtb3VudF9vcHRpb25zJyk7XG4gIH1cblxuICAvLyBzaXplIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NpemUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0xpbnV4UGFyYW1ldGVyc1RtcGZzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0xpbnV4UGFyYW1ldGVyc1RtcGZzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcl9wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRhaW5lclBhdGgpLFxuICAgIG1vdW50X29wdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEubW91bnRPcHRpb25zKSxcbiAgICBzaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNpemUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zTGludXhQYXJhbWV0ZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2FwYWJpbGl0aWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2FwYWJpbGl0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NhcGFiaWxpdGllcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRldmljZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXZpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RldmljZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpbml0X3Byb2Nlc3NfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluaXRQcm9jZXNzRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbml0X3Byb2Nlc3NfZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gbWF4X3N3YXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXhTd2FwKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X3N3YXAnKTtcbiAgfVxuXG4gIC8vIHNoYXJlZF9tZW1vcnlfc2l6ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNoYXJlZE1lbW9yeVNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzaGFyZWRfbWVtb3J5X3NpemUnKTtcbiAgfVxuXG4gIC8vIHN3YXBwaW5lc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzd2FwcGluZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc3dhcHBpbmVzcycpO1xuICB9XG5cbiAgLy8gdG1wZnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0bXBmcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0bXBmcycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0xpbnV4UGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNMaW51eFBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2FwYWJpbGl0aWVzOiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zTGludXhQYXJhbWV0ZXJzQ2FwYWJpbGl0aWVzVG9UZXJyYWZvcm0oc3RydWN0IS5jYXBhYmlsaXRpZXMpLFxuICAgIGRldmljZXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0xpbnV4UGFyYW1ldGVyc0RldmljZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5kZXZpY2VzKSxcbiAgICBpbml0X3Byb2Nlc3NfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5pdFByb2Nlc3NFbmFibGVkKSxcbiAgICBtYXhfc3dhcDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhTd2FwKSxcbiAgICBzaGFyZWRfbWVtb3J5X3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2hhcmVkTWVtb3J5U2l6ZSksXG4gICAgc3dhcHBpbmVzczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zd2FwcGluZXNzKSxcbiAgICB0bXBmczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zTGludXhQYXJhbWV0ZXJzVG1wZnNUb1RlcnJhZm9ybSkoc3RydWN0IS50bXBmcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNMb2dDb25maWd1cmF0aW9uU2VjcmV0T3B0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gdmFsdWVfZnJvbSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlRnJvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlX2Zyb20nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0xvZ0NvbmZpZ3VyYXRpb25TZWNyZXRPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0xvZ0NvbmZpZ3VyYXRpb25TZWNyZXRPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmFsdWVfZnJvbTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZUZyb20pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zTG9nQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGxvZ19kcml2ZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dEcml2ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZHJpdmVyJyk7XG4gIH1cblxuICAvLyBvcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdvcHRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2VjcmV0X29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWNyZXRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NlY3JldF9vcHRpb25zJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zTG9nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNMb2dDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGxvZ19kcml2ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nRHJpdmVyKSxcbiAgICBvcHRpb25zOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLm9wdGlvbnMpLFxuICAgIHNlY3JldF9vcHRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNMb2dDb25maWd1cmF0aW9uU2VjcmV0T3B0aW9uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNlY3JldE9wdGlvbnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zTW91bnRQb2ludHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb250YWluZXJfcGF0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lclBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250YWluZXJfcGF0aCcpO1xuICB9XG5cbiAgLy8gcmVhZF9vbmx5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVhZE9ubHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncmVhZF9vbmx5Jyk7XG4gIH1cblxuICAvLyBzb3VyY2Vfdm9sdW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc291cmNlVm9sdW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX3ZvbHVtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zTW91bnRQb2ludHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zTW91bnRQb2ludHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyX3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGFpbmVyUGF0aCksXG4gICAgcmVhZF9vbmx5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yZWFkT25seSksXG4gICAgc291cmNlX3ZvbHVtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VWb2x1bWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zUG9ydE1hcHBpbmdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29udGFpbmVyX3BvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb250YWluZXJQb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnY29udGFpbmVyX3BvcnQnKTtcbiAgfVxuXG4gIC8vIGhvc3RfcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3RQb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaG9zdF9wb3J0Jyk7XG4gIH1cblxuICAvLyBwcm90b2NvbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb3RvY29sKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvdG9jb2wnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc1BvcnRNYXBwaW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNQb3J0TWFwcGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyX3BvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuY29udGFpbmVyUG9ydCksXG4gICAgaG9zdF9wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3RQb3J0KSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNSZXBvc2l0b3J5Q3JlZGVudGlhbHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjcmVkZW50aWFsc19wYXJhbWV0ZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmVkZW50aWFsc1BhcmFtZXRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWRlbnRpYWxzX3BhcmFtZXRlcicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zUmVwb3NpdG9yeUNyZWRlbnRpYWxzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc1JlcG9zaXRvcnlDcmVkZW50aWFscyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjcmVkZW50aWFsc19wYXJhbWV0ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3JlZGVudGlhbHNQYXJhbWV0ZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zUmVzb3VyY2VSZXF1aXJlbWVudHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zUmVzb3VyY2VSZXF1aXJlbWVudHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zUmVzb3VyY2VSZXF1aXJlbWVudHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNTZWNyZXRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyB2YWx1ZV9mcm9tIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWVGcm9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWVfZnJvbScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zU2VjcmV0c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNTZWNyZXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmFsdWVfZnJvbTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZUZyb20pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zU3lzdGVtQ29udHJvbHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBuYW1lc3BhY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lc3BhY2UnKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zU3lzdGVtQ29udHJvbHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zU3lzdGVtQ29udHJvbHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZXNwYWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWVzcGFjZSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zVWxpbWl0cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGhhcmRfbGltaXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBoYXJkTGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdoYXJkX2xpbWl0Jyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHNvZnRfbGltaXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb2Z0TGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzb2Z0X2xpbWl0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNVbGltaXRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc1VsaW1pdHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaGFyZF9saW1pdDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5oYXJkTGltaXQpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgc29mdF9saW1pdDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zb2Z0TGltaXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zVm9sdW1lc0Zyb20gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyByZWFkX29ubHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWFkT25seSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZWFkX29ubHknKTtcbiAgfVxuXG4gIC8vIHNvdXJjZV9jb250YWluZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb3VyY2VDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzb3VyY2VfY29udGFpbmVyJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNWb2x1bWVzRnJvbVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNWb2x1bWVzRnJvbSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByZWFkX29ubHk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJlYWRPbmx5KSxcbiAgICBzb3VyY2VfY29udGFpbmVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZUNvbnRhaW5lciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb21tYW5kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tbWFuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjb21tYW5kJyk7XG4gIH1cblxuICAvLyBjcHUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcHUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjcHUnKTtcbiAgfVxuXG4gIC8vIGRlcGVuZHNfb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXBlbmRzT24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGVwZW5kc19vbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRpc2FibGVfbmV0d29ya2luZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpc2FibGVOZXR3b3JraW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Rpc2FibGVfbmV0d29ya2luZycpO1xuICB9XG5cbiAgLy8gZG5zX3NlYXJjaF9kb21haW5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG5zU2VhcmNoRG9tYWlucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdkbnNfc2VhcmNoX2RvbWFpbnMnKTtcbiAgfVxuXG4gIC8vIGRuc19zZXJ2ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG5zU2VydmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdkbnNfc2VydmVycycpO1xuICB9XG5cbiAgLy8gZG9ja2VyX2xhYmVscyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRvY2tlckxhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkb2NrZXJfbGFiZWxzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZG9ja2VyX3NlY3VyaXR5X29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkb2NrZXJTZWN1cml0eU9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZG9ja2VyX3NlY3VyaXR5X29wdGlvbnMnKTtcbiAgfVxuXG4gIC8vIGVudHJ5X3BvaW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW50cnlQb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdlbnRyeV9wb2ludCcpO1xuICB9XG5cbiAgLy8gZW52aXJvbm1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbnZpcm9ubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbnZpcm9ubWVudCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGVudmlyb25tZW50X2ZpbGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW52aXJvbm1lbnRGaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbnZpcm9ubWVudF9maWxlcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGVzc2VudGlhbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVzc2VudGlhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlc3NlbnRpYWwnKTtcbiAgfVxuXG4gIC8vIGV4dHJhX2hvc3RzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXh0cmFIb3N0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdleHRyYV9ob3N0cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGZpcmVsZW5zX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmaXJlbGVuc0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmlyZWxlbnNfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGhlYWx0aF9jaGVjayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhlYWx0aENoZWNrKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2hlYWx0aF9jaGVjaycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGhvc3RuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9zdG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0bmFtZScpO1xuICB9XG5cbiAgLy8gaW1hZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbWFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ltYWdlJyk7XG4gIH1cblxuICAvLyBpbnRlcmFjdGl2ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGludGVyYWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2ludGVyYWN0aXZlJyk7XG4gIH1cblxuICAvLyBsaW5rcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxpbmtzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2xpbmtzJyk7XG4gIH1cblxuICAvLyBsaW51eF9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGludXhQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xpbnV4X3BhcmFtZXRlcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBsb2dfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbG9nX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBtZW1vcnkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtZW1vcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtZW1vcnknKTtcbiAgfVxuXG4gIC8vIG1lbW9yeV9yZXNlcnZhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1lbW9yeVJlc2VydmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWVtb3J5X3Jlc2VydmF0aW9uJyk7XG4gIH1cblxuICAvLyBtb3VudF9wb2ludHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtb3VudFBvaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtb3VudF9wb2ludHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHBvcnRfbWFwcGluZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0TWFwcGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncG9ydF9tYXBwaW5ncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHByaXZpbGVnZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcml2aWxlZ2VkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3ByaXZpbGVnZWQnKTtcbiAgfVxuXG4gIC8vIHBzZXVkb190ZXJtaW5hbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBzZXVkb1Rlcm1pbmFsKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3BzZXVkb190ZXJtaW5hbCcpO1xuICB9XG5cbiAgLy8gcmVhZG9ubHlfcm9vdF9maWxlc3lzdGVtIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVhZG9ubHlSb290RmlsZXN5c3RlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZWFkb25seV9yb290X2ZpbGVzeXN0ZW0nKTtcbiAgfVxuXG4gIC8vIHJlcG9zaXRvcnlfY3JlZGVudGlhbHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXBvc2l0b3J5Q3JlZGVudGlhbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVwb3NpdG9yeV9jcmVkZW50aWFscycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX3JlcXVpcmVtZW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc291cmNlUmVxdWlyZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Jlc291cmNlX3JlcXVpcmVtZW50cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNlY3JldHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWNyZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NlY3JldHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzdGFydF90aW1lb3V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhcnRUaW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc3RhcnRfdGltZW91dCcpO1xuICB9XG5cbiAgLy8gc3RvcF90aW1lb3V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RvcFRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzdG9wX3RpbWVvdXQnKTtcbiAgfVxuXG4gIC8vIHN5c3RlbV9jb250cm9scyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN5c3RlbUNvbnRyb2xzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N5c3RlbV9jb250cm9scycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHVsaW1pdHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1bGltaXRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3VsaW1pdHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB1c2VyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXInKTtcbiAgfVxuXG4gIC8vIHZvbHVtZXNfZnJvbSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZvbHVtZXNGcm9tKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZvbHVtZXNfZnJvbScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHdvcmtpbmdfZGlyZWN0b3J5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd29ya2luZ0RpcmVjdG9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dvcmtpbmdfZGlyZWN0b3J5Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbW1hbmQ6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29tbWFuZCksXG4gICAgY3B1OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmNwdSksXG4gICAgZGVwZW5kc19vbjogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zRGVwZW5kc09uVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGVwZW5kc09uKSxcbiAgICBkaXNhYmxlX25ldHdvcmtpbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRpc2FibGVOZXR3b3JraW5nKSxcbiAgICBkbnNfc2VhcmNoX2RvbWFpbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZG5zU2VhcmNoRG9tYWlucyksXG4gICAgZG5zX3NlcnZlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZG5zU2VydmVycyksXG4gICAgZG9ja2VyX2xhYmVsczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5kb2NrZXJMYWJlbHMpLFxuICAgIGRvY2tlcl9zZWN1cml0eV9vcHRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRvY2tlclNlY3VyaXR5T3B0aW9ucyksXG4gICAgZW50cnlfcG9pbnQ6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZW50cnlQb2ludCksXG4gICAgZW52aXJvbm1lbnQ6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0Vudmlyb25tZW50VG9UZXJyYWZvcm0pKHN0cnVjdCEuZW52aXJvbm1lbnQpLFxuICAgIGVudmlyb25tZW50X2ZpbGVzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNFbnZpcm9ubWVudEZpbGVzVG9UZXJyYWZvcm0pKHN0cnVjdCEuZW52aXJvbm1lbnRGaWxlcyksXG4gICAgZXNzZW50aWFsOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lc3NlbnRpYWwpLFxuICAgIGV4dHJhX2hvc3RzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNFeHRyYUhvc3RzVG9UZXJyYWZvcm0pKHN0cnVjdCEuZXh0cmFIb3N0cyksXG4gICAgZmlyZWxlbnNfY29uZmlndXJhdGlvbjogZGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0ZpcmVsZW5zQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZmlyZWxlbnNDb25maWd1cmF0aW9uKSxcbiAgICBoZWFsdGhfY2hlY2s6IGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNIZWFsdGhDaGVja1RvVGVycmFmb3JtKHN0cnVjdCEuaGVhbHRoQ2hlY2spLFxuICAgIGhvc3RuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3RuYW1lKSxcbiAgICBpbWFnZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbWFnZSksXG4gICAgaW50ZXJhY3RpdmU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmludGVyYWN0aXZlKSxcbiAgICBsaW5rczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5saW5rcyksXG4gICAgbGludXhfcGFyYW1ldGVyczogZGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0xpbnV4UGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEubGludXhQYXJhbWV0ZXJzKSxcbiAgICBsb2dfY29uZmlndXJhdGlvbjogZGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc0xvZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0NvbmZpZ3VyYXRpb24pLFxuICAgIG1lbW9yeTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tZW1vcnkpLFxuICAgIG1lbW9yeV9yZXNlcnZhdGlvbjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tZW1vcnlSZXNlcnZhdGlvbiksXG4gICAgbW91bnRfcG9pbnRzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNNb3VudFBvaW50c1RvVGVycmFmb3JtKShzdHJ1Y3QhLm1vdW50UG9pbnRzKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHBvcnRfbWFwcGluZ3M6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Db250YWluZXJEZWZpbml0aW9uc1BvcnRNYXBwaW5nc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnBvcnRNYXBwaW5ncyksXG4gICAgcHJpdmlsZWdlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucHJpdmlsZWdlZCksXG4gICAgcHNldWRvX3Rlcm1pbmFsOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5wc2V1ZG9UZXJtaW5hbCksXG4gICAgcmVhZG9ubHlfcm9vdF9maWxlc3lzdGVtOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yZWFkb25seVJvb3RGaWxlc3lzdGVtKSxcbiAgICByZXBvc2l0b3J5X2NyZWRlbnRpYWxzOiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zUmVwb3NpdG9yeUNyZWRlbnRpYWxzVG9UZXJyYWZvcm0oc3RydWN0IS5yZXBvc2l0b3J5Q3JlZGVudGlhbHMpLFxuICAgIHJlc291cmNlX3JlcXVpcmVtZW50czogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zUmVzb3VyY2VSZXF1aXJlbWVudHNUb1RlcnJhZm9ybSkoc3RydWN0IS5yZXNvdXJjZVJlcXVpcmVtZW50cyksXG4gICAgc2VjcmV0czogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zU2VjcmV0c1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNlY3JldHMpLFxuICAgIHN0YXJ0X3RpbWVvdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc3RhcnRUaW1lb3V0KSxcbiAgICBzdG9wX3RpbWVvdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc3RvcFRpbWVvdXQpLFxuICAgIHN5c3RlbV9jb250cm9sczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zU3lzdGVtQ29udHJvbHNUb1RlcnJhZm9ybSkoc3RydWN0IS5zeXN0ZW1Db250cm9scyksXG4gICAgdWxpbWl0czogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkNvbnRhaW5lckRlZmluaXRpb25zVWxpbWl0c1RvVGVycmFmb3JtKShzdHJ1Y3QhLnVsaW1pdHMpLFxuICAgIHVzZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlciksXG4gICAgdm9sdW1lc19mcm9tOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29udGFpbmVyRGVmaW5pdGlvbnNWb2x1bWVzRnJvbVRvVGVycmFmb3JtKShzdHJ1Y3QhLnZvbHVtZXNGcm9tKSxcbiAgICB3b3JraW5nX2RpcmVjdG9yeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS53b3JraW5nRGlyZWN0b3J5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25FcGhlbWVyYWxTdG9yYWdlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc2l6ZV9pbl9naV9iIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2l6ZUluR2lCKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc2l6ZV9pbl9naV9iJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uRXBoZW1lcmFsU3RvcmFnZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uRXBoZW1lcmFsU3RvcmFnZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzaXplX2luX2dpX2I6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2l6ZUluR2lCKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25JbmZlcmVuY2VBY2NlbGVyYXRvcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkZXZpY2VfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRldmljZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXZpY2VfbmFtZScpO1xuICB9XG5cbiAgLy8gZGV2aWNlX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXZpY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGV2aWNlX3R5cGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25JbmZlcmVuY2VBY2NlbGVyYXRvcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvbkluZmVyZW5jZUFjY2VsZXJhdG9ycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXZpY2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VOYW1lKSxcbiAgICBkZXZpY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25QbGFjZW1lbnRDb25zdHJhaW50cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGV4cHJlc3Npb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBleHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXhwcmVzc2lvbicpO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uUGxhY2VtZW50Q29uc3RyYWludHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblBsYWNlbWVudENvbnN0cmFpbnRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGV4cHJlc3Npb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXhwcmVzc2lvbiksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Qcm94eUNvbmZpZ3VyYXRpb25Qcm94eUNvbmZpZ3VyYXRpb25Qcm9wZXJ0aWVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Qcm94eUNvbmZpZ3VyYXRpb25Qcm94eUNvbmZpZ3VyYXRpb25Qcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Qcm94eUNvbmZpZ3VyYXRpb25Qcm94eUNvbmZpZ3VyYXRpb25Qcm9wZXJ0aWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblByb3h5Q29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbnRhaW5lcl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29udGFpbmVyTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRhaW5lcl9uYW1lJyk7XG4gIH1cblxuICAvLyBwcm94eV9jb25maWd1cmF0aW9uX3Byb3BlcnRpZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm94eUNvbmZpZ3VyYXRpb25Qcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Byb3h5X2NvbmZpZ3VyYXRpb25fcHJvcGVydGllcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblByb3h5Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uUHJveHlDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRhaW5lck5hbWUpLFxuICAgIHByb3h5X2NvbmZpZ3VyYXRpb25fcHJvcGVydGllczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblByb3h5Q29uZmlndXJhdGlvblByb3h5Q29uZmlndXJhdGlvblByb3BlcnRpZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5wcm94eUNvbmZpZ3VyYXRpb25Qcm9wZXJ0aWVzKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblRhZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblRhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblZvbHVtZXNEb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXV0b3Byb3Zpc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF1dG9wcm92aXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXV0b3Byb3Zpc2lvbicpO1xuICB9XG5cbiAgLy8gZHJpdmVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZHJpdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZHJpdmVyJyk7XG4gIH1cblxuICAvLyBkcml2ZXJfb3B0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRyaXZlck9wdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZHJpdmVyX29wdHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBsYWJlbHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbGFiZWxzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2NvcGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzY29wZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Njb3BlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uVm9sdW1lc0RvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblZvbHVtZXNEb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGF1dG9wcm92aXNpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmF1dG9wcm92aXNpb24pLFxuICAgIGRyaXZlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kcml2ZXIpLFxuICAgIGRyaXZlcl9vcHRzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRyaXZlck9wdHMpLFxuICAgIGxhYmVsczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5sYWJlbHMpLFxuICAgIHNjb3BlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjb3BlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Wb2x1bWVzRWZzVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY2Nlc3NfcG9pbnRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY2Nlc3NQb2ludElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNjZXNzX3BvaW50X2lkJyk7XG4gIH1cblxuICAvLyBpYW0gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpYW0nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Wb2x1bWVzRWZzVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblZvbHVtZXNFZnNWb2x1bWVDb25maWd1cmF0aW9uQXV0aG9yaXphdGlvbkNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY2Nlc3NfcG9pbnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzUG9pbnRJZCksXG4gICAgaWFtOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlhbSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uVm9sdW1lc0Vmc1ZvbHVtZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhdXRob3JpemF0aW9uX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF1dGhvcml6YXRpb25Db25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXV0aG9yaXphdGlvbl9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBmaWxlc3lzdGVtX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmlsZXN5c3RlbUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmlsZXN5c3RlbV9pZCcpO1xuICB9XG5cbiAgLy8gcm9vdF9kaXJlY3RvcnkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb290RGlyZWN0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9vdF9kaXJlY3RvcnknKTtcbiAgfVxuXG4gIC8vIHRyYW5zaXRfZW5jcnlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRyYW5zaXRFbmNyeXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHJhbnNpdF9lbmNyeXB0aW9uJyk7XG4gIH1cblxuICAvLyB0cmFuc2l0X2VuY3J5cHRpb25fcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRyYW5zaXRFbmNyeXB0aW9uUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RyYW5zaXRfZW5jcnlwdGlvbl9wb3J0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uVm9sdW1lc0Vmc1ZvbHVtZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblZvbHVtZXNFZnNWb2x1bWVDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGF1dGhvcml6YXRpb25fY29uZmlnOiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblZvbHVtZXNFZnNWb2x1bWVDb25maWd1cmF0aW9uQXV0aG9yaXphdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXV0aG9yaXphdGlvbkNvbmZpZyksXG4gICAgZmlsZXN5c3RlbV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlc3lzdGVtSWQpLFxuICAgIHJvb3RfZGlyZWN0b3J5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvb3REaXJlY3RvcnkpLFxuICAgIHRyYW5zaXRfZW5jcnlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50cmFuc2l0RW5jcnlwdGlvbiksXG4gICAgdHJhbnNpdF9lbmNyeXB0aW9uX3BvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudHJhbnNpdEVuY3J5cHRpb25Qb3J0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb25Wb2x1bWVzSG9zdCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHNvdXJjZV9wYXRoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc291cmNlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZV9wYXRoJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uVm9sdW1lc0hvc3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblZvbHVtZXNIb3N0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNvdXJjZV9wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZVBhdGgpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblZvbHVtZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkb2NrZXJfdm9sdW1lX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RvY2tlcl92b2x1bWVfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGVmc192b2x1bWVfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVmc1ZvbHVtZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWZzX3ZvbHVtZV9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaG9zdCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblZvbHVtZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblZvbHVtZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZG9ja2VyX3ZvbHVtZV9jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NFY3NUYXNrRGVmaW5pdGlvblZvbHVtZXNEb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5kb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uKSxcbiAgICBlZnNfdm9sdW1lX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uVm9sdW1lc0Vmc1ZvbHVtZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVmc1ZvbHVtZUNvbmZpZ3VyYXRpb24pLFxuICAgIGhvc3Q6IGRhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uVm9sdW1lc0hvc3RUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9lY3NfdGFza19kZWZpbml0aW9uLmh0bWwgYXdzY2NfZWNzX3Rhc2tfZGVmaW5pdGlvbn1cbiovXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWNzVGFza0RlZmluaXRpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2Vjc190YXNrX2RlZmluaXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvZWNzX3Rhc2tfZGVmaW5pdGlvbi5odG1sIGF3c2NjX2Vjc190YXNrX2RlZmluaXRpb259IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NjY0Vjc1Rhc2tEZWZpbml0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19lY3NfdGFza19kZWZpbml0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNvbnRhaW5lcl9kZWZpbml0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lckRlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbnRhaW5lcl9kZWZpbml0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNwdSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNwdSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NwdScpO1xuICB9XG5cbiAgLy8gZXBoZW1lcmFsX3N0b3JhZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlcGhlbWVyYWxTdG9yYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VwaGVtZXJhbF9zdG9yYWdlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZXhlY3V0aW9uX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4ZWN1dGlvbl9yb2xlX2FybicpO1xuICB9XG5cbiAgLy8gZmFtaWx5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmFtaWx5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmFtaWx5Jyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZFxuICB9XG5cbiAgLy8gaW5mZXJlbmNlX2FjY2VsZXJhdG9ycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluZmVyZW5jZUFjY2VsZXJhdG9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpbmZlcmVuY2VfYWNjZWxlcmF0b3JzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaXBjX21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpcGNNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaXBjX21vZGUnKTtcbiAgfVxuXG4gIC8vIG1lbW9yeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1lbW9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lbW9yeScpO1xuICB9XG5cbiAgLy8gbmV0d29ya19tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmV0d29ya01vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduZXR3b3JrX21vZGUnKTtcbiAgfVxuXG4gIC8vIHBpZF9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGlkTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BpZF9tb2RlJyk7XG4gIH1cblxuICAvLyBwbGFjZW1lbnRfY29uc3RyYWludHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwbGFjZW1lbnRDb25zdHJhaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwbGFjZW1lbnRfY29uc3RyYWludHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwcm94eV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJveHlDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Byb3h5X2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZXF1aXJlc19jb21wYXRpYmlsaXRpZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXF1aXJlc0NvbXBhdGliaWxpdGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdyZXF1aXJlc19jb21wYXRpYmlsaXRpZXMnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0YXNrX2RlZmluaXRpb25fYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFza0RlZmluaXRpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YXNrX2RlZmluaXRpb25fYXJuJyk7XG4gIH1cblxuICAvLyB0YXNrX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFza1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YXNrX3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyB2b2x1bWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdm9sdW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2b2x1bWVzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==