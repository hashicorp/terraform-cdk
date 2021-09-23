// https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#container_definitions EcsTaskDefinition#container_definitions}
  */
  readonly containerDefinitions?: EcsTaskDefinitionContainerDefinitions[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#cpu EcsTaskDefinition#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#ephemeral_storage EcsTaskDefinition#ephemeral_storage}
  */
  readonly ephemeralStorage?: EcsTaskDefinitionEphemeralStorage;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#execution_role_arn EcsTaskDefinition#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#family EcsTaskDefinition#family}
  */
  readonly family?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#inference_accelerators EcsTaskDefinition#inference_accelerators}
  */
  readonly inferenceAccelerators?: EcsTaskDefinitionInferenceAccelerators[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#ipc_mode EcsTaskDefinition#ipc_mode}
  */
  readonly ipcMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#memory EcsTaskDefinition#memory}
  */
  readonly memory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#network_mode EcsTaskDefinition#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#pid_mode EcsTaskDefinition#pid_mode}
  */
  readonly pidMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#placement_constraints EcsTaskDefinition#placement_constraints}
  */
  readonly placementConstraints?: EcsTaskDefinitionPlacementConstraints[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#proxy_configuration EcsTaskDefinition#proxy_configuration}
  */
  readonly proxyConfiguration?: EcsTaskDefinitionProxyConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#requires_compatibilities EcsTaskDefinition#requires_compatibilities}
  */
  readonly requiresCompatibilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#tags EcsTaskDefinition#tags}
  */
  readonly tags?: EcsTaskDefinitionTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#task_role_arn EcsTaskDefinition#task_role_arn}
  */
  readonly taskRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#volumes EcsTaskDefinition#volumes}
  */
  readonly volumes?: EcsTaskDefinitionVolumes[];
}
export interface EcsTaskDefinitionContainerDefinitionsDependsOn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#condition EcsTaskDefinition#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#container_name EcsTaskDefinition#container_name}
  */
  readonly containerName?: string;
}

export function ecsTaskDefinitionContainerDefinitionsDependsOnToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsDependsOn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    container_name: cdktf.stringToTerraform(struct!.containerName),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#name EcsTaskDefinition#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#value EcsTaskDefinition#value}
  */
  readonly value?: string;
}

export function ecsTaskDefinitionContainerDefinitionsEnvironmentToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsEnvironment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsEnvironmentFiles {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#type EcsTaskDefinition#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#value EcsTaskDefinition#value}
  */
  readonly value?: string;
}

export function ecsTaskDefinitionContainerDefinitionsEnvironmentFilesToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsEnvironmentFiles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsExtraHosts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#hostname EcsTaskDefinition#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#ip_address EcsTaskDefinition#ip_address}
  */
  readonly ipAddress?: string;
}

export function ecsTaskDefinitionContainerDefinitionsExtraHostsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsExtraHosts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsFirelensConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#options EcsTaskDefinition#options}
  */
  readonly options?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#type EcsTaskDefinition#type}
  */
  readonly type?: string;
}

export function ecsTaskDefinitionContainerDefinitionsFirelensConfigurationToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsFirelensConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsHealthCheck {
  /**
  * A string array representing the command that the container runs to determine if it is healthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#command EcsTaskDefinition#command}
  */
  readonly command?: string[];
  /**
  * The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#interval EcsTaskDefinition#interval}
  */
  readonly interval?: number;
  /**
  * The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is three retries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#retries EcsTaskDefinition#retries}
  */
  readonly retries?: number;
  /**
  * The optional grace period within which to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You may specify between 0 and 300 seconds. The startPeriod is disabled by default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#start_period EcsTaskDefinition#start_period}
  */
  readonly startPeriod?: number;
  /**
  * The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5 seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#timeout EcsTaskDefinition#timeout}
  */
  readonly timeout?: number;
}

export function ecsTaskDefinitionContainerDefinitionsHealthCheckToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsHealthCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    interval: cdktf.numberToTerraform(struct!.interval),
    retries: cdktf.numberToTerraform(struct!.retries),
    start_period: cdktf.numberToTerraform(struct!.startPeriod),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#add EcsTaskDefinition#add}
  */
  readonly add?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#drop EcsTaskDefinition#drop}
  */
  readonly drop?: string[];
}

export function ecsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsLinuxParametersDevices {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#container_path EcsTaskDefinition#container_path}
  */
  readonly containerPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#host_path EcsTaskDefinition#host_path}
  */
  readonly hostPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#permissions EcsTaskDefinition#permissions}
  */
  readonly permissions?: string[];
}

export function ecsTaskDefinitionContainerDefinitionsLinuxParametersDevicesToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsLinuxParametersDevices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_path: cdktf.stringToTerraform(struct!.containerPath),
    host_path: cdktf.stringToTerraform(struct!.hostPath),
    permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.permissions),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#container_path EcsTaskDefinition#container_path}
  */
  readonly containerPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#mount_options EcsTaskDefinition#mount_options}
  */
  readonly mountOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#size EcsTaskDefinition#size}
  */
  readonly size: number;
}

export function ecsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_path: cdktf.stringToTerraform(struct!.containerPath),
    mount_options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.mountOptions),
    size: cdktf.numberToTerraform(struct!.size),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsLinuxParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#capabilities EcsTaskDefinition#capabilities}
  */
  readonly capabilities?: EcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#devices EcsTaskDefinition#devices}
  */
  readonly devices?: EcsTaskDefinitionContainerDefinitionsLinuxParametersDevices[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#init_process_enabled EcsTaskDefinition#init_process_enabled}
  */
  readonly initProcessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#max_swap EcsTaskDefinition#max_swap}
  */
  readonly maxSwap?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#shared_memory_size EcsTaskDefinition#shared_memory_size}
  */
  readonly sharedMemorySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#swappiness EcsTaskDefinition#swappiness}
  */
  readonly swappiness?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#tmpfs EcsTaskDefinition#tmpfs}
  */
  readonly tmpfs?: EcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs[];
}

export function ecsTaskDefinitionContainerDefinitionsLinuxParametersToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsLinuxParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capabilities: ecsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToTerraform(struct!.capabilities),
    devices: cdktf.listMapper(ecsTaskDefinitionContainerDefinitionsLinuxParametersDevicesToTerraform)(struct!.devices),
    init_process_enabled: cdktf.booleanToTerraform(struct!.initProcessEnabled),
    max_swap: cdktf.numberToTerraform(struct!.maxSwap),
    shared_memory_size: cdktf.numberToTerraform(struct!.sharedMemorySize),
    swappiness: cdktf.numberToTerraform(struct!.swappiness),
    tmpfs: cdktf.listMapper(ecsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToTerraform)(struct!.tmpfs),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#name EcsTaskDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#value_from EcsTaskDefinition#value_from}
  */
  readonly valueFrom: string;
}

export function ecsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_from: cdktf.stringToTerraform(struct!.valueFrom),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsLogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#log_driver EcsTaskDefinition#log_driver}
  */
  readonly logDriver: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#options EcsTaskDefinition#options}
  */
  readonly options?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#secret_options EcsTaskDefinition#secret_options}
  */
  readonly secretOptions?: EcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions[];
}

export function ecsTaskDefinitionContainerDefinitionsLogConfigurationToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsLogConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_driver: cdktf.stringToTerraform(struct!.logDriver),
    options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.options),
    secret_options: cdktf.listMapper(ecsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToTerraform)(struct!.secretOptions),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsMountPoints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#container_path EcsTaskDefinition#container_path}
  */
  readonly containerPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#read_only EcsTaskDefinition#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#source_volume EcsTaskDefinition#source_volume}
  */
  readonly sourceVolume?: string;
}

export function ecsTaskDefinitionContainerDefinitionsMountPointsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsMountPoints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_path: cdktf.stringToTerraform(struct!.containerPath),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    source_volume: cdktf.stringToTerraform(struct!.sourceVolume),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsPortMappings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#container_port EcsTaskDefinition#container_port}
  */
  readonly containerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#host_port EcsTaskDefinition#host_port}
  */
  readonly hostPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#protocol EcsTaskDefinition#protocol}
  */
  readonly protocol?: string;
}

export function ecsTaskDefinitionContainerDefinitionsPortMappingsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsPortMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsRepositoryCredentials {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#credentials_parameter EcsTaskDefinition#credentials_parameter}
  */
  readonly credentialsParameter?: string;
}

export function ecsTaskDefinitionContainerDefinitionsRepositoryCredentialsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsRepositoryCredentials): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    credentials_parameter: cdktf.stringToTerraform(struct!.credentialsParameter),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsResourceRequirements {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#type EcsTaskDefinition#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#value EcsTaskDefinition#value}
  */
  readonly value: string;
}

export function ecsTaskDefinitionContainerDefinitionsResourceRequirementsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsResourceRequirements): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsSecrets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#name EcsTaskDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#value_from EcsTaskDefinition#value_from}
  */
  readonly valueFrom: string;
}

export function ecsTaskDefinitionContainerDefinitionsSecretsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsSecrets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_from: cdktf.stringToTerraform(struct!.valueFrom),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsSystemControls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#namespace EcsTaskDefinition#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#value EcsTaskDefinition#value}
  */
  readonly value?: string;
}

export function ecsTaskDefinitionContainerDefinitionsSystemControlsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsSystemControls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsUlimits {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#hard_limit EcsTaskDefinition#hard_limit}
  */
  readonly hardLimit: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#name EcsTaskDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#soft_limit EcsTaskDefinition#soft_limit}
  */
  readonly softLimit: number;
}

export function ecsTaskDefinitionContainerDefinitionsUlimitsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsUlimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hard_limit: cdktf.numberToTerraform(struct!.hardLimit),
    name: cdktf.stringToTerraform(struct!.name),
    soft_limit: cdktf.numberToTerraform(struct!.softLimit),
  }
}

export interface EcsTaskDefinitionContainerDefinitionsVolumesFrom {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#read_only EcsTaskDefinition#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#source_container EcsTaskDefinition#source_container}
  */
  readonly sourceContainer?: string;
}

export function ecsTaskDefinitionContainerDefinitionsVolumesFromToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsVolumesFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    source_container: cdktf.stringToTerraform(struct!.sourceContainer),
  }
}

export interface EcsTaskDefinitionContainerDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#command EcsTaskDefinition#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#cpu EcsTaskDefinition#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#depends_on EcsTaskDefinition#depends_on}
  */
  readonly dependsOn?: EcsTaskDefinitionContainerDefinitionsDependsOn[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#disable_networking EcsTaskDefinition#disable_networking}
  */
  readonly disableNetworking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#dns_search_domains EcsTaskDefinition#dns_search_domains}
  */
  readonly dnsSearchDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#dns_servers EcsTaskDefinition#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#docker_labels EcsTaskDefinition#docker_labels}
  */
  readonly dockerLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#docker_security_options EcsTaskDefinition#docker_security_options}
  */
  readonly dockerSecurityOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#entry_point EcsTaskDefinition#entry_point}
  */
  readonly entryPoint?: string[];
  /**
  * The environment variables to pass to a container
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#environment EcsTaskDefinition#environment}
  */
  readonly environment?: EcsTaskDefinitionContainerDefinitionsEnvironment[];
  /**
  * The list of one or more files that contain the environment variables to pass to a container
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#environment_files EcsTaskDefinition#environment_files}
  */
  readonly environmentFiles?: EcsTaskDefinitionContainerDefinitionsEnvironmentFiles[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#essential EcsTaskDefinition#essential}
  */
  readonly essential?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#extra_hosts EcsTaskDefinition#extra_hosts}
  */
  readonly extraHosts?: EcsTaskDefinitionContainerDefinitionsExtraHosts[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#firelens_configuration EcsTaskDefinition#firelens_configuration}
  */
  readonly firelensConfiguration?: EcsTaskDefinitionContainerDefinitionsFirelensConfiguration;
  /**
  * The health check command and associated configuration parameters for the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#health_check EcsTaskDefinition#health_check}
  */
  readonly healthCheck?: EcsTaskDefinitionContainerDefinitionsHealthCheck;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#hostname EcsTaskDefinition#hostname}
  */
  readonly hostname?: string;
  /**
  * The image used to start a container. This string is passed directly to the Docker daemon.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#image EcsTaskDefinition#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#interactive EcsTaskDefinition#interactive}
  */
  readonly interactive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#links EcsTaskDefinition#links}
  */
  readonly links?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#linux_parameters EcsTaskDefinition#linux_parameters}
  */
  readonly linuxParameters?: EcsTaskDefinitionContainerDefinitionsLinuxParameters;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#log_configuration EcsTaskDefinition#log_configuration}
  */
  readonly logConfiguration?: EcsTaskDefinitionContainerDefinitionsLogConfiguration;
  /**
  * The amount (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#memory EcsTaskDefinition#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#memory_reservation EcsTaskDefinition#memory_reservation}
  */
  readonly memoryReservation?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#mount_points EcsTaskDefinition#mount_points}
  */
  readonly mountPoints?: EcsTaskDefinitionContainerDefinitionsMountPoints[];
  /**
  * The name of a container. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#name EcsTaskDefinition#name}
  */
  readonly name?: string;
  /**
  * Port mappings allow containers to access ports on the host container instance to send or receive traffic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#port_mappings EcsTaskDefinition#port_mappings}
  */
  readonly portMappings?: EcsTaskDefinitionContainerDefinitionsPortMappings[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#privileged EcsTaskDefinition#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#pseudo_terminal EcsTaskDefinition#pseudo_terminal}
  */
  readonly pseudoTerminal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#readonly_root_filesystem EcsTaskDefinition#readonly_root_filesystem}
  */
  readonly readonlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#repository_credentials EcsTaskDefinition#repository_credentials}
  */
  readonly repositoryCredentials?: EcsTaskDefinitionContainerDefinitionsRepositoryCredentials;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#resource_requirements EcsTaskDefinition#resource_requirements}
  */
  readonly resourceRequirements?: EcsTaskDefinitionContainerDefinitionsResourceRequirements[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#secrets EcsTaskDefinition#secrets}
  */
  readonly secrets?: EcsTaskDefinitionContainerDefinitionsSecrets[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#start_timeout EcsTaskDefinition#start_timeout}
  */
  readonly startTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#stop_timeout EcsTaskDefinition#stop_timeout}
  */
  readonly stopTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#system_controls EcsTaskDefinition#system_controls}
  */
  readonly systemControls?: EcsTaskDefinitionContainerDefinitionsSystemControls[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#ulimits EcsTaskDefinition#ulimits}
  */
  readonly ulimits?: EcsTaskDefinitionContainerDefinitionsUlimits[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#user EcsTaskDefinition#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#volumes_from EcsTaskDefinition#volumes_from}
  */
  readonly volumesFrom?: EcsTaskDefinitionContainerDefinitionsVolumesFrom[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#working_directory EcsTaskDefinition#working_directory}
  */
  readonly workingDirectory?: string;
}

export function ecsTaskDefinitionContainerDefinitionsToTerraform(struct?: EcsTaskDefinitionContainerDefinitions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    cpu: cdktf.numberToTerraform(struct!.cpu),
    depends_on: cdktf.listMapper(ecsTaskDefinitionContainerDefinitionsDependsOnToTerraform)(struct!.dependsOn),
    disable_networking: cdktf.booleanToTerraform(struct!.disableNetworking),
    dns_search_domains: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsSearchDomains),
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsServers),
    docker_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.dockerLabels),
    docker_security_options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dockerSecurityOptions),
    entry_point: cdktf.listMapper(cdktf.stringToTerraform)(struct!.entryPoint),
    environment: cdktf.listMapper(ecsTaskDefinitionContainerDefinitionsEnvironmentToTerraform)(struct!.environment),
    environment_files: cdktf.listMapper(ecsTaskDefinitionContainerDefinitionsEnvironmentFilesToTerraform)(struct!.environmentFiles),
    essential: cdktf.booleanToTerraform(struct!.essential),
    extra_hosts: cdktf.listMapper(ecsTaskDefinitionContainerDefinitionsExtraHostsToTerraform)(struct!.extraHosts),
    firelens_configuration: ecsTaskDefinitionContainerDefinitionsFirelensConfigurationToTerraform(struct!.firelensConfiguration),
    health_check: ecsTaskDefinitionContainerDefinitionsHealthCheckToTerraform(struct!.healthCheck),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    image: cdktf.stringToTerraform(struct!.image),
    interactive: cdktf.booleanToTerraform(struct!.interactive),
    links: cdktf.listMapper(cdktf.stringToTerraform)(struct!.links),
    linux_parameters: ecsTaskDefinitionContainerDefinitionsLinuxParametersToTerraform(struct!.linuxParameters),
    log_configuration: ecsTaskDefinitionContainerDefinitionsLogConfigurationToTerraform(struct!.logConfiguration),
    memory: cdktf.numberToTerraform(struct!.memory),
    memory_reservation: cdktf.numberToTerraform(struct!.memoryReservation),
    mount_points: cdktf.listMapper(ecsTaskDefinitionContainerDefinitionsMountPointsToTerraform)(struct!.mountPoints),
    name: cdktf.stringToTerraform(struct!.name),
    port_mappings: cdktf.listMapper(ecsTaskDefinitionContainerDefinitionsPortMappingsToTerraform)(struct!.portMappings),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    pseudo_terminal: cdktf.booleanToTerraform(struct!.pseudoTerminal),
    readonly_root_filesystem: cdktf.booleanToTerraform(struct!.readonlyRootFilesystem),
    repository_credentials: ecsTaskDefinitionContainerDefinitionsRepositoryCredentialsToTerraform(struct!.repositoryCredentials),
    resource_requirements: cdktf.listMapper(ecsTaskDefinitionContainerDefinitionsResourceRequirementsToTerraform)(struct!.resourceRequirements),
    secrets: cdktf.listMapper(ecsTaskDefinitionContainerDefinitionsSecretsToTerraform)(struct!.secrets),
    start_timeout: cdktf.numberToTerraform(struct!.startTimeout),
    stop_timeout: cdktf.numberToTerraform(struct!.stopTimeout),
    system_controls: cdktf.listMapper(ecsTaskDefinitionContainerDefinitionsSystemControlsToTerraform)(struct!.systemControls),
    ulimits: cdktf.listMapper(ecsTaskDefinitionContainerDefinitionsUlimitsToTerraform)(struct!.ulimits),
    user: cdktf.stringToTerraform(struct!.user),
    volumes_from: cdktf.listMapper(ecsTaskDefinitionContainerDefinitionsVolumesFromToTerraform)(struct!.volumesFrom),
    working_directory: cdktf.stringToTerraform(struct!.workingDirectory),
  }
}

export interface EcsTaskDefinitionEphemeralStorage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#size_in_gi_b EcsTaskDefinition#size_in_gi_b}
  */
  readonly sizeInGiB?: number;
}

export function ecsTaskDefinitionEphemeralStorageToTerraform(struct?: EcsTaskDefinitionEphemeralStorage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    size_in_gi_b: cdktf.numberToTerraform(struct!.sizeInGiB),
  }
}

export interface EcsTaskDefinitionInferenceAccelerators {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#device_name EcsTaskDefinition#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#device_type EcsTaskDefinition#device_type}
  */
  readonly deviceType?: string;
}

export function ecsTaskDefinitionInferenceAcceleratorsToTerraform(struct?: EcsTaskDefinitionInferenceAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
  }
}

export interface EcsTaskDefinitionPlacementConstraints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#expression EcsTaskDefinition#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#type EcsTaskDefinition#type}
  */
  readonly type: string;
}

export function ecsTaskDefinitionPlacementConstraintsToTerraform(struct?: EcsTaskDefinitionPlacementConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface EcsTaskDefinitionProxyConfigurationProxyConfigurationProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#name EcsTaskDefinition#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#value EcsTaskDefinition#value}
  */
  readonly value?: string;
}

export function ecsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesToTerraform(struct?: EcsTaskDefinitionProxyConfigurationProxyConfigurationProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface EcsTaskDefinitionProxyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#container_name EcsTaskDefinition#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#proxy_configuration_properties EcsTaskDefinition#proxy_configuration_properties}
  */
  readonly proxyConfigurationProperties?: EcsTaskDefinitionProxyConfigurationProxyConfigurationProperties[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#type EcsTaskDefinition#type}
  */
  readonly type?: string;
}

export function ecsTaskDefinitionProxyConfigurationToTerraform(struct?: EcsTaskDefinitionProxyConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    proxy_configuration_properties: cdktf.listMapper(ecsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesToTerraform)(struct!.proxyConfigurationProperties),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface EcsTaskDefinitionTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#key EcsTaskDefinition#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#value EcsTaskDefinition#value}
  */
  readonly value?: string;
}

export function ecsTaskDefinitionTagsToTerraform(struct?: EcsTaskDefinitionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface EcsTaskDefinitionVolumesDockerVolumeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#autoprovision EcsTaskDefinition#autoprovision}
  */
  readonly autoprovision?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#driver EcsTaskDefinition#driver}
  */
  readonly driver?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#driver_opts EcsTaskDefinition#driver_opts}
  */
  readonly driverOpts?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#labels EcsTaskDefinition#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#scope EcsTaskDefinition#scope}
  */
  readonly scope?: string;
}

export function ecsTaskDefinitionVolumesDockerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumesDockerVolumeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    autoprovision: cdktf.booleanToTerraform(struct!.autoprovision),
    driver: cdktf.stringToTerraform(struct!.driver),
    driver_opts: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverOpts),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}

export interface EcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#access_point_id EcsTaskDefinition#access_point_id}
  */
  readonly accessPointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#iam EcsTaskDefinition#iam}
  */
  readonly iam?: string;
}

export function ecsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_point_id: cdktf.stringToTerraform(struct!.accessPointId),
    iam: cdktf.stringToTerraform(struct!.iam),
  }
}

export interface EcsTaskDefinitionVolumesEfsVolumeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#authorization_config EcsTaskDefinition#authorization_config}
  */
  readonly authorizationConfig?: EcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#filesystem_id EcsTaskDefinition#filesystem_id}
  */
  readonly filesystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#root_directory EcsTaskDefinition#root_directory}
  */
  readonly rootDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#transit_encryption EcsTaskDefinition#transit_encryption}
  */
  readonly transitEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#transit_encryption_port EcsTaskDefinition#transit_encryption_port}
  */
  readonly transitEncryptionPort?: number;
}

export function ecsTaskDefinitionVolumesEfsVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumesEfsVolumeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    authorization_config: ecsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform(struct!.authorizationConfig),
    filesystem_id: cdktf.stringToTerraform(struct!.filesystemId),
    root_directory: cdktf.stringToTerraform(struct!.rootDirectory),
    transit_encryption: cdktf.stringToTerraform(struct!.transitEncryption),
    transit_encryption_port: cdktf.numberToTerraform(struct!.transitEncryptionPort),
  }
}

export interface EcsTaskDefinitionVolumesHost {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#source_path EcsTaskDefinition#source_path}
  */
  readonly sourcePath?: string;
}

export function ecsTaskDefinitionVolumesHostToTerraform(struct?: EcsTaskDefinitionVolumesHost): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source_path: cdktf.stringToTerraform(struct!.sourcePath),
  }
}

export interface EcsTaskDefinitionVolumes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#docker_volume_configuration EcsTaskDefinition#docker_volume_configuration}
  */
  readonly dockerVolumeConfiguration?: EcsTaskDefinitionVolumesDockerVolumeConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#efs_volume_configuration EcsTaskDefinition#efs_volume_configuration}
  */
  readonly efsVolumeConfiguration?: EcsTaskDefinitionVolumesEfsVolumeConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#host EcsTaskDefinition#host}
  */
  readonly host?: EcsTaskDefinitionVolumesHost;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#name EcsTaskDefinition#name}
  */
  readonly name?: string;
}

export function ecsTaskDefinitionVolumesToTerraform(struct?: EcsTaskDefinitionVolumes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    docker_volume_configuration: ecsTaskDefinitionVolumesDockerVolumeConfigurationToTerraform(struct!.dockerVolumeConfiguration),
    efs_volume_configuration: ecsTaskDefinitionVolumesEfsVolumeConfigurationToTerraform(struct!.efsVolumeConfiguration),
    host: ecsTaskDefinitionVolumesHostToTerraform(struct!.host),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html awscc_ecs_task_definition}
*/
export class EcsTaskDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecs_task_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html awscc_ecs_task_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsTaskDefinitionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EcsTaskDefinitionConfig = {}) {
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
    this._containerDefinitions = config.containerDefinitions;
    this._cpu = config.cpu;
    this._ephemeralStorage = config.ephemeralStorage;
    this._executionRoleArn = config.executionRoleArn;
    this._family = config.family;
    this._inferenceAccelerators = config.inferenceAccelerators;
    this._ipcMode = config.ipcMode;
    this._memory = config.memory;
    this._networkMode = config.networkMode;
    this._pidMode = config.pidMode;
    this._placementConstraints = config.placementConstraints;
    this._proxyConfiguration = config.proxyConfiguration;
    this._requiresCompatibilities = config.requiresCompatibilities;
    this._tags = config.tags;
    this._taskRoleArn = config.taskRoleArn;
    this._volumes = config.volumes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_definitions - computed: true, optional: true, required: false
  private _containerDefinitions?: EcsTaskDefinitionContainerDefinitions[];
  public get containerDefinitions() {
    return this.interpolationForAttribute('container_definitions') as any;
  }
  public set containerDefinitions(value: EcsTaskDefinitionContainerDefinitions[]) {
    this._containerDefinitions = value;
  }
  public resetContainerDefinitions() {
    this._containerDefinitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDefinitionsInput() {
    return this._containerDefinitions
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: string;
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu
  }

  // ephemeral_storage - computed: true, optional: true, required: false
  private _ephemeralStorage?: EcsTaskDefinitionEphemeralStorage;
  public get ephemeralStorage() {
    return this.interpolationForAttribute('ephemeral_storage') as any;
  }
  public set ephemeralStorage(value: EcsTaskDefinitionEphemeralStorage) {
    this._ephemeralStorage = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage
  }

  // execution_role_arn - computed: true, optional: true, required: false
  private _executionRoleArn?: string;
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn
  }

  // family - computed: true, optional: true, required: false
  private _family?: string;
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inference_accelerators - computed: true, optional: true, required: false
  private _inferenceAccelerators?: EcsTaskDefinitionInferenceAccelerators[];
  public get inferenceAccelerators() {
    return this.interpolationForAttribute('inference_accelerators') as any;
  }
  public set inferenceAccelerators(value: EcsTaskDefinitionInferenceAccelerators[]) {
    this._inferenceAccelerators = value;
  }
  public resetInferenceAccelerators() {
    this._inferenceAccelerators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceAcceleratorsInput() {
    return this._inferenceAccelerators
  }

  // ipc_mode - computed: true, optional: true, required: false
  private _ipcMode?: string;
  public get ipcMode() {
    return this.getStringAttribute('ipc_mode');
  }
  public set ipcMode(value: string) {
    this._ipcMode = value;
  }
  public resetIpcMode() {
    this._ipcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipcModeInput() {
    return this._ipcMode
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: string;
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory
  }

  // network_mode - computed: true, optional: true, required: false
  private _networkMode?: string;
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode
  }

  // pid_mode - computed: true, optional: true, required: false
  private _pidMode?: string;
  public get pidMode() {
    return this.getStringAttribute('pid_mode');
  }
  public set pidMode(value: string) {
    this._pidMode = value;
  }
  public resetPidMode() {
    this._pidMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidModeInput() {
    return this._pidMode
  }

  // placement_constraints - computed: true, optional: true, required: false
  private _placementConstraints?: EcsTaskDefinitionPlacementConstraints[];
  public get placementConstraints() {
    return this.interpolationForAttribute('placement_constraints') as any;
  }
  public set placementConstraints(value: EcsTaskDefinitionPlacementConstraints[]) {
    this._placementConstraints = value;
  }
  public resetPlacementConstraints() {
    this._placementConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintsInput() {
    return this._placementConstraints
  }

  // proxy_configuration - computed: true, optional: true, required: false
  private _proxyConfiguration?: EcsTaskDefinitionProxyConfiguration;
  public get proxyConfiguration() {
    return this.interpolationForAttribute('proxy_configuration') as any;
  }
  public set proxyConfiguration(value: EcsTaskDefinitionProxyConfiguration) {
    this._proxyConfiguration = value;
  }
  public resetProxyConfiguration() {
    this._proxyConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigurationInput() {
    return this._proxyConfiguration
  }

  // requires_compatibilities - computed: true, optional: true, required: false
  private _requiresCompatibilities?: string[];
  public get requiresCompatibilities() {
    return this.getListAttribute('requires_compatibilities');
  }
  public set requiresCompatibilities(value: string[]) {
    this._requiresCompatibilities = value;
  }
  public resetRequiresCompatibilities() {
    this._requiresCompatibilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresCompatibilitiesInput() {
    return this._requiresCompatibilities
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: EcsTaskDefinitionTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: EcsTaskDefinitionTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // task_definition_arn - computed: true, optional: false, required: false
  public get taskDefinitionArn() {
    return this.getStringAttribute('task_definition_arn');
  }

  // task_role_arn - computed: true, optional: true, required: false
  private _taskRoleArn?: string;
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }
  public set taskRoleArn(value: string) {
    this._taskRoleArn = value;
  }
  public resetTaskRoleArn() {
    this._taskRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRoleArnInput() {
    return this._taskRoleArn
  }

  // volumes - computed: true, optional: true, required: false
  private _volumes?: EcsTaskDefinitionVolumes[];
  public get volumes() {
    return this.interpolationForAttribute('volumes') as any;
  }
  public set volumes(value: EcsTaskDefinitionVolumes[]) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_definitions: cdktf.listMapper(ecsTaskDefinitionContainerDefinitionsToTerraform)(this._containerDefinitions),
      cpu: cdktf.stringToTerraform(this._cpu),
      ephemeral_storage: ecsTaskDefinitionEphemeralStorageToTerraform(this._ephemeralStorage),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      family: cdktf.stringToTerraform(this._family),
      inference_accelerators: cdktf.listMapper(ecsTaskDefinitionInferenceAcceleratorsToTerraform)(this._inferenceAccelerators),
      ipc_mode: cdktf.stringToTerraform(this._ipcMode),
      memory: cdktf.stringToTerraform(this._memory),
      network_mode: cdktf.stringToTerraform(this._networkMode),
      pid_mode: cdktf.stringToTerraform(this._pidMode),
      placement_constraints: cdktf.listMapper(ecsTaskDefinitionPlacementConstraintsToTerraform)(this._placementConstraints),
      proxy_configuration: ecsTaskDefinitionProxyConfigurationToTerraform(this._proxyConfiguration),
      requires_compatibilities: cdktf.listMapper(cdktf.stringToTerraform)(this._requiresCompatibilities),
      tags: cdktf.listMapper(ecsTaskDefinitionTagsToTerraform)(this._tags),
      task_role_arn: cdktf.stringToTerraform(this._taskRoleArn),
      volumes: cdktf.listMapper(ecsTaskDefinitionVolumesToTerraform)(this._volumes),
    };
  }
}
