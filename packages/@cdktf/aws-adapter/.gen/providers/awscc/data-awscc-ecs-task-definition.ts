// https://www.terraform.io/docs/providers/awscc/d/ecs_task_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEcsTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecs_task_definition.html#id DataAwsccEcsTaskDefinition#id}
  */
  readonly id: string;
}
export class DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn extends cdktf.ComplexComputedList {

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    container_name: cdktf.stringToTerraform(struct!.containerName),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles extends cdktf.ComplexComputedList {

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts extends cdktf.ComplexComputedList {

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration extends cdktf.ComplexComputedList {

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.interpolationForAttribute('options') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // retries - computed: true, optional: false, required: false
  public get retries() {
    return this.getNumberAttribute('retries');
  }

  // start_period - computed: true, optional: false, required: false
  public get startPeriod() {
    return this.getNumberAttribute('start_period');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    interval: cdktf.numberToTerraform(struct!.interval),
    retries: cdktf.numberToTerraform(struct!.retries),
    start_period: cdktf.numberToTerraform(struct!.startPeriod),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities extends cdktf.ComplexComputedList {

  // add - computed: true, optional: false, required: false
  public get add() {
    return this.getListAttribute('add');
  }

  // drop - computed: true, optional: false, required: false
  public get drop() {
    return this.getListAttribute('drop');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices extends cdktf.ComplexComputedList {

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // host_path - computed: true, optional: false, required: false
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_path: cdktf.stringToTerraform(struct!.containerPath),
    host_path: cdktf.stringToTerraform(struct!.hostPath),
    permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.permissions),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs extends cdktf.ComplexComputedList {

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // mount_options - computed: true, optional: false, required: false
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_path: cdktf.stringToTerraform(struct!.containerPath),
    mount_options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.mountOptions),
    size: cdktf.numberToTerraform(struct!.size),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters extends cdktf.ComplexComputedList {

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.interpolationForAttribute('capabilities') as any;
  }

  // devices - computed: true, optional: false, required: false
  public get devices() {
    return this.interpolationForAttribute('devices') as any;
  }

  // init_process_enabled - computed: true, optional: false, required: false
  public get initProcessEnabled() {
    return this.getBooleanAttribute('init_process_enabled');
  }

  // max_swap - computed: true, optional: false, required: false
  public get maxSwap() {
    return this.getNumberAttribute('max_swap');
  }

  // shared_memory_size - computed: true, optional: false, required: false
  public get sharedMemorySize() {
    return this.getNumberAttribute('shared_memory_size');
  }

  // swappiness - computed: true, optional: false, required: false
  public get swappiness() {
    return this.getNumberAttribute('swappiness');
  }

  // tmpfs - computed: true, optional: false, required: false
  public get tmpfs() {
    return this.interpolationForAttribute('tmpfs') as any;
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capabilities: dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToTerraform(struct!.capabilities),
    devices: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesToTerraform)(struct!.devices),
    init_process_enabled: cdktf.booleanToTerraform(struct!.initProcessEnabled),
    max_swap: cdktf.numberToTerraform(struct!.maxSwap),
    shared_memory_size: cdktf.numberToTerraform(struct!.sharedMemorySize),
    swappiness: cdktf.numberToTerraform(struct!.swappiness),
    tmpfs: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToTerraform)(struct!.tmpfs),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_from: cdktf.stringToTerraform(struct!.valueFrom),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration extends cdktf.ComplexComputedList {

  // log_driver - computed: true, optional: false, required: false
  public get logDriver() {
    return this.getStringAttribute('log_driver');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.interpolationForAttribute('options') as any;
  }

  // secret_options - computed: true, optional: false, required: false
  public get secretOptions() {
    return this.interpolationForAttribute('secret_options') as any;
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_driver: cdktf.stringToTerraform(struct!.logDriver),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    secret_options: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToTerraform)(struct!.secretOptions),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints extends cdktf.ComplexComputedList {

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // source_volume - computed: true, optional: false, required: false
  public get sourceVolume() {
    return this.getStringAttribute('source_volume');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_path: cdktf.stringToTerraform(struct!.containerPath),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    source_volume: cdktf.stringToTerraform(struct!.sourceVolume),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings extends cdktf.ComplexComputedList {

  // container_port - computed: true, optional: false, required: false
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials extends cdktf.ComplexComputedList {

  // credentials_parameter - computed: true, optional: false, required: false
  public get credentialsParameter() {
    return this.getStringAttribute('credentials_parameter');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    credentials_parameter: cdktf.stringToTerraform(struct!.credentialsParameter),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements extends cdktf.ComplexComputedList {

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsSecretsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_from: cdktf.stringToTerraform(struct!.valueFrom),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls extends cdktf.ComplexComputedList {

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits extends cdktf.ComplexComputedList {

  // hard_limit - computed: true, optional: false, required: false
  public get hardLimit() {
    return this.getNumberAttribute('hard_limit');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // soft_limit - computed: true, optional: false, required: false
  public get softLimit() {
    return this.getNumberAttribute('soft_limit');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hard_limit: cdktf.numberToTerraform(struct!.hardLimit),
    name: cdktf.stringToTerraform(struct!.name),
    soft_limit: cdktf.numberToTerraform(struct!.softLimit),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom extends cdktf.ComplexComputedList {

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // source_container - computed: true, optional: false, required: false
  public get sourceContainer() {
    return this.getStringAttribute('source_container');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    source_container: cdktf.stringToTerraform(struct!.sourceContainer),
  }
}

export class DataAwsccEcsTaskDefinitionContainerDefinitions extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // depends_on - computed: true, optional: false, required: false
  public get dependsOn() {
    return this.interpolationForAttribute('depends_on') as any;
  }

  // disable_networking - computed: true, optional: false, required: false
  public get disableNetworking() {
    return this.getBooleanAttribute('disable_networking');
  }

  // dns_search_domains - computed: true, optional: false, required: false
  public get dnsSearchDomains() {
    return this.getListAttribute('dns_search_domains');
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }

  // docker_labels - computed: true, optional: false, required: false
  public get dockerLabels() {
    return this.interpolationForAttribute('docker_labels') as any;
  }

  // docker_security_options - computed: true, optional: false, required: false
  public get dockerSecurityOptions() {
    return this.getListAttribute('docker_security_options');
  }

  // entry_point - computed: true, optional: false, required: false
  public get entryPoint() {
    return this.getListAttribute('entry_point');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.interpolationForAttribute('environment') as any;
  }

  // environment_files - computed: true, optional: false, required: false
  public get environmentFiles() {
    return this.interpolationForAttribute('environment_files') as any;
  }

  // essential - computed: true, optional: false, required: false
  public get essential() {
    return this.getBooleanAttribute('essential');
  }

  // extra_hosts - computed: true, optional: false, required: false
  public get extraHosts() {
    return this.interpolationForAttribute('extra_hosts') as any;
  }

  // firelens_configuration - computed: true, optional: false, required: false
  public get firelensConfiguration() {
    return this.interpolationForAttribute('firelens_configuration') as any;
  }

  // health_check - computed: true, optional: false, required: false
  public get healthCheck() {
    return this.interpolationForAttribute('health_check') as any;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // interactive - computed: true, optional: false, required: false
  public get interactive() {
    return this.getBooleanAttribute('interactive');
  }

  // links - computed: true, optional: false, required: false
  public get links() {
    return this.getListAttribute('links');
  }

  // linux_parameters - computed: true, optional: false, required: false
  public get linuxParameters() {
    return this.interpolationForAttribute('linux_parameters') as any;
  }

  // log_configuration - computed: true, optional: false, required: false
  public get logConfiguration() {
    return this.interpolationForAttribute('log_configuration') as any;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // memory_reservation - computed: true, optional: false, required: false
  public get memoryReservation() {
    return this.getNumberAttribute('memory_reservation');
  }

  // mount_points - computed: true, optional: false, required: false
  public get mountPoints() {
    return this.interpolationForAttribute('mount_points') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port_mappings - computed: true, optional: false, required: false
  public get portMappings() {
    return this.interpolationForAttribute('port_mappings') as any;
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // pseudo_terminal - computed: true, optional: false, required: false
  public get pseudoTerminal() {
    return this.getBooleanAttribute('pseudo_terminal');
  }

  // readonly_root_filesystem - computed: true, optional: false, required: false
  public get readonlyRootFilesystem() {
    return this.getBooleanAttribute('readonly_root_filesystem');
  }

  // repository_credentials - computed: true, optional: false, required: false
  public get repositoryCredentials() {
    return this.interpolationForAttribute('repository_credentials') as any;
  }

  // resource_requirements - computed: true, optional: false, required: false
  public get resourceRequirements() {
    return this.interpolationForAttribute('resource_requirements') as any;
  }

  // secrets - computed: true, optional: false, required: false
  public get secrets() {
    return this.interpolationForAttribute('secrets') as any;
  }

  // start_timeout - computed: true, optional: false, required: false
  public get startTimeout() {
    return this.getNumberAttribute('start_timeout');
  }

  // stop_timeout - computed: true, optional: false, required: false
  public get stopTimeout() {
    return this.getNumberAttribute('stop_timeout');
  }

  // system_controls - computed: true, optional: false, required: false
  public get systemControls() {
    return this.interpolationForAttribute('system_controls') as any;
  }

  // ulimits - computed: true, optional: false, required: false
  public get ulimits() {
    return this.interpolationForAttribute('ulimits') as any;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // volumes_from - computed: true, optional: false, required: false
  public get volumesFrom() {
    return this.interpolationForAttribute('volumes_from') as any;
  }

  // working_directory - computed: true, optional: false, required: false
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
}

export function dataAwsccEcsTaskDefinitionContainerDefinitionsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    cpu: cdktf.numberToTerraform(struct!.cpu),
    depends_on: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnToTerraform)(struct!.dependsOn),
    disable_networking: cdktf.booleanToTerraform(struct!.disableNetworking),
    dns_search_domains: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsSearchDomains),
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsServers),
    docker_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dockerLabels),
    docker_security_options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dockerSecurityOptions),
    entry_point: cdktf.listMapper(cdktf.stringToTerraform)(struct!.entryPoint),
    environment: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentToTerraform)(struct!.environment),
    environment_files: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesToTerraform)(struct!.environmentFiles),
    essential: cdktf.booleanToTerraform(struct!.essential),
    extra_hosts: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsToTerraform)(struct!.extraHosts),
    firelens_configuration: dataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationToTerraform(struct!.firelensConfiguration),
    health_check: dataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckToTerraform(struct!.healthCheck),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    image: cdktf.stringToTerraform(struct!.image),
    interactive: cdktf.booleanToTerraform(struct!.interactive),
    links: cdktf.listMapper(cdktf.stringToTerraform)(struct!.links),
    linux_parameters: dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersToTerraform(struct!.linuxParameters),
    log_configuration: dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationToTerraform(struct!.logConfiguration),
    memory: cdktf.numberToTerraform(struct!.memory),
    memory_reservation: cdktf.numberToTerraform(struct!.memoryReservation),
    mount_points: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsToTerraform)(struct!.mountPoints),
    name: cdktf.stringToTerraform(struct!.name),
    port_mappings: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsToTerraform)(struct!.portMappings),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    pseudo_terminal: cdktf.booleanToTerraform(struct!.pseudoTerminal),
    readonly_root_filesystem: cdktf.booleanToTerraform(struct!.readonlyRootFilesystem),
    repository_credentials: dataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsToTerraform(struct!.repositoryCredentials),
    resource_requirements: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsToTerraform)(struct!.resourceRequirements),
    secrets: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsSecretsToTerraform)(struct!.secrets),
    start_timeout: cdktf.numberToTerraform(struct!.startTimeout),
    stop_timeout: cdktf.numberToTerraform(struct!.stopTimeout),
    system_controls: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsToTerraform)(struct!.systemControls),
    ulimits: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsToTerraform)(struct!.ulimits),
    user: cdktf.stringToTerraform(struct!.user),
    volumes_from: cdktf.listMapper(dataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromToTerraform)(struct!.volumesFrom),
    working_directory: cdktf.stringToTerraform(struct!.workingDirectory),
  }
}

export class DataAwsccEcsTaskDefinitionEphemeralStorage extends cdktf.ComplexComputedList {

  // size_in_gi_b - computed: true, optional: false, required: false
  public get sizeInGiB() {
    return this.getNumberAttribute('size_in_gi_b');
  }
}

export function dataAwsccEcsTaskDefinitionEphemeralStorageToTerraform(struct?: DataAwsccEcsTaskDefinitionEphemeralStorage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    size_in_gi_b: cdktf.numberToTerraform(struct!.sizeInGiB),
  }
}

export class DataAwsccEcsTaskDefinitionInferenceAccelerators extends cdktf.ComplexComputedList {

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
}

export function dataAwsccEcsTaskDefinitionInferenceAcceleratorsToTerraform(struct?: DataAwsccEcsTaskDefinitionInferenceAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
  }
}

export class DataAwsccEcsTaskDefinitionPlacementConstraints extends cdktf.ComplexComputedList {

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccEcsTaskDefinitionPlacementConstraintsToTerraform(struct?: DataAwsccEcsTaskDefinitionPlacementConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesToTerraform(struct?: DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccEcsTaskDefinitionProxyConfiguration extends cdktf.ComplexComputedList {

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // proxy_configuration_properties - computed: true, optional: false, required: false
  public get proxyConfigurationProperties() {
    return this.interpolationForAttribute('proxy_configuration_properties') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccEcsTaskDefinitionProxyConfigurationToTerraform(struct?: DataAwsccEcsTaskDefinitionProxyConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    proxy_configuration_properties: cdktf.listMapper(dataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesToTerraform)(struct!.proxyConfigurationProperties),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccEcsTaskDefinitionTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEcsTaskDefinitionTagsToTerraform(struct?: DataAwsccEcsTaskDefinitionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration extends cdktf.ComplexComputedList {

  // autoprovision - computed: true, optional: false, required: false
  public get autoprovision() {
    return this.getBooleanAttribute('autoprovision');
  }

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // driver_opts - computed: true, optional: false, required: false
  public get driverOpts() {
    return this.interpolationForAttribute('driver_opts') as any;
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export function dataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationToTerraform(struct?: DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    autoprovision: cdktf.booleanToTerraform(struct!.autoprovision),
    driver: cdktf.stringToTerraform(struct!.driver),
    driver_opts: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.driverOpts),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}

export class DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig extends cdktf.ComplexComputedList {

  // access_point_id - computed: true, optional: false, required: false
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }

  // iam - computed: true, optional: false, required: false
  public get iam() {
    return this.getStringAttribute('iam');
  }
}

export function dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_point_id: cdktf.stringToTerraform(struct!.accessPointId),
    iam: cdktf.stringToTerraform(struct!.iam),
  }
}

export class DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration extends cdktf.ComplexComputedList {

  // authorization_config - computed: true, optional: false, required: false
  public get authorizationConfig() {
    return this.interpolationForAttribute('authorization_config') as any;
  }

  // filesystem_id - computed: true, optional: false, required: false
  public get filesystemId() {
    return this.getStringAttribute('filesystem_id');
  }

  // root_directory - computed: true, optional: false, required: false
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }

  // transit_encryption - computed: true, optional: false, required: false
  public get transitEncryption() {
    return this.getStringAttribute('transit_encryption');
  }

  // transit_encryption_port - computed: true, optional: false, required: false
  public get transitEncryptionPort() {
    return this.getNumberAttribute('transit_encryption_port');
  }
}

export function dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationToTerraform(struct?: DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    authorization_config: dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform(struct!.authorizationConfig),
    filesystem_id: cdktf.stringToTerraform(struct!.filesystemId),
    root_directory: cdktf.stringToTerraform(struct!.rootDirectory),
    transit_encryption: cdktf.stringToTerraform(struct!.transitEncryption),
    transit_encryption_port: cdktf.numberToTerraform(struct!.transitEncryptionPort),
  }
}

export class DataAwsccEcsTaskDefinitionVolumesHost extends cdktf.ComplexComputedList {

  // source_path - computed: true, optional: false, required: false
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
}

export function dataAwsccEcsTaskDefinitionVolumesHostToTerraform(struct?: DataAwsccEcsTaskDefinitionVolumesHost): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source_path: cdktf.stringToTerraform(struct!.sourcePath),
  }
}

export class DataAwsccEcsTaskDefinitionVolumes extends cdktf.ComplexComputedList {

  // docker_volume_configuration - computed: true, optional: false, required: false
  public get dockerVolumeConfiguration() {
    return this.interpolationForAttribute('docker_volume_configuration') as any;
  }

  // efs_volume_configuration - computed: true, optional: false, required: false
  public get efsVolumeConfiguration() {
    return this.interpolationForAttribute('efs_volume_configuration') as any;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.interpolationForAttribute('host') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccEcsTaskDefinitionVolumesToTerraform(struct?: DataAwsccEcsTaskDefinitionVolumes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    docker_volume_configuration: dataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationToTerraform(struct!.dockerVolumeConfiguration),
    efs_volume_configuration: dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationToTerraform(struct!.efsVolumeConfiguration),
    host: dataAwsccEcsTaskDefinitionVolumesHostToTerraform(struct!.host),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_task_definition.html awscc_ecs_task_definition}
*/
export class DataAwsccEcsTaskDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecs_task_definition";

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
  public constructor(scope: Construct, id: string, config: DataAwsccEcsTaskDefinitionConfig) {
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
  public get containerDefinitions() {
    return this.interpolationForAttribute('container_definitions') as any;
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // ephemeral_storage - computed: true, optional: false, required: false
  public get ephemeralStorage() {
    return this.interpolationForAttribute('ephemeral_storage') as any;
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
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

  // inference_accelerators - computed: true, optional: false, required: false
  public get inferenceAccelerators() {
    return this.interpolationForAttribute('inference_accelerators') as any;
  }

  // ipc_mode - computed: true, optional: false, required: false
  public get ipcMode() {
    return this.getStringAttribute('ipc_mode');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }

  // network_mode - computed: true, optional: false, required: false
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }

  // pid_mode - computed: true, optional: false, required: false
  public get pidMode() {
    return this.getStringAttribute('pid_mode');
  }

  // placement_constraints - computed: true, optional: false, required: false
  public get placementConstraints() {
    return this.interpolationForAttribute('placement_constraints') as any;
  }

  // proxy_configuration - computed: true, optional: false, required: false
  public get proxyConfiguration() {
    return this.interpolationForAttribute('proxy_configuration') as any;
  }

  // requires_compatibilities - computed: true, optional: false, required: false
  public get requiresCompatibilities() {
    return this.getListAttribute('requires_compatibilities');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // task_definition_arn - computed: true, optional: false, required: false
  public get taskDefinitionArn() {
    return this.getStringAttribute('task_definition_arn');
  }

  // task_role_arn - computed: true, optional: false, required: false
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }

  // volumes - computed: true, optional: false, required: false
  public get volumes() {
    return this.interpolationForAttribute('volumes') as any;
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
