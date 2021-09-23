import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function ecsTaskDefinitionContainerDefinitionsDependsOnToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsDependsOn): any;
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
export declare function ecsTaskDefinitionContainerDefinitionsEnvironmentToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsEnvironment): any;
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
export declare function ecsTaskDefinitionContainerDefinitionsEnvironmentFilesToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsEnvironmentFiles): any;
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
export declare function ecsTaskDefinitionContainerDefinitionsExtraHostsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsExtraHosts): any;
export interface EcsTaskDefinitionContainerDefinitionsFirelensConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#options EcsTaskDefinition#options}
    */
    readonly options?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#type EcsTaskDefinition#type}
    */
    readonly type?: string;
}
export declare function ecsTaskDefinitionContainerDefinitionsFirelensConfigurationToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsFirelensConfiguration): any;
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
export declare function ecsTaskDefinitionContainerDefinitionsHealthCheckToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsHealthCheck): any;
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
export declare function ecsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities): any;
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
export declare function ecsTaskDefinitionContainerDefinitionsLinuxParametersDevicesToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsLinuxParametersDevices): any;
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
export declare function ecsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs): any;
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
export declare function ecsTaskDefinitionContainerDefinitionsLinuxParametersToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsLinuxParameters): any;
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
export declare function ecsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions): any;
export interface EcsTaskDefinitionContainerDefinitionsLogConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#log_driver EcsTaskDefinition#log_driver}
    */
    readonly logDriver: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#options EcsTaskDefinition#options}
    */
    readonly options?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#secret_options EcsTaskDefinition#secret_options}
    */
    readonly secretOptions?: EcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions[];
}
export declare function ecsTaskDefinitionContainerDefinitionsLogConfigurationToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsLogConfiguration): any;
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
export declare function ecsTaskDefinitionContainerDefinitionsMountPointsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsMountPoints): any;
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
export declare function ecsTaskDefinitionContainerDefinitionsPortMappingsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsPortMappings): any;
export interface EcsTaskDefinitionContainerDefinitionsRepositoryCredentials {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#credentials_parameter EcsTaskDefinition#credentials_parameter}
    */
    readonly credentialsParameter?: string;
}
export declare function ecsTaskDefinitionContainerDefinitionsRepositoryCredentialsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsRepositoryCredentials): any;
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
export declare function ecsTaskDefinitionContainerDefinitionsResourceRequirementsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsResourceRequirements): any;
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
export declare function ecsTaskDefinitionContainerDefinitionsSecretsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsSecrets): any;
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
export declare function ecsTaskDefinitionContainerDefinitionsSystemControlsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsSystemControls): any;
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
export declare function ecsTaskDefinitionContainerDefinitionsUlimitsToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsUlimits): any;
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
export declare function ecsTaskDefinitionContainerDefinitionsVolumesFromToTerraform(struct?: EcsTaskDefinitionContainerDefinitionsVolumesFrom): any;
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
    readonly dockerLabels?: {
        [key: string]: string;
    } | cdktf.IResolvable;
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
export declare function ecsTaskDefinitionContainerDefinitionsToTerraform(struct?: EcsTaskDefinitionContainerDefinitions): any;
export interface EcsTaskDefinitionEphemeralStorage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#size_in_gi_b EcsTaskDefinition#size_in_gi_b}
    */
    readonly sizeInGiB?: number;
}
export declare function ecsTaskDefinitionEphemeralStorageToTerraform(struct?: EcsTaskDefinitionEphemeralStorage): any;
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
export declare function ecsTaskDefinitionInferenceAcceleratorsToTerraform(struct?: EcsTaskDefinitionInferenceAccelerators): any;
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
export declare function ecsTaskDefinitionPlacementConstraintsToTerraform(struct?: EcsTaskDefinitionPlacementConstraints): any;
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
export declare function ecsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesToTerraform(struct?: EcsTaskDefinitionProxyConfigurationProxyConfigurationProperties): any;
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
export declare function ecsTaskDefinitionProxyConfigurationToTerraform(struct?: EcsTaskDefinitionProxyConfiguration): any;
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
export declare function ecsTaskDefinitionTagsToTerraform(struct?: EcsTaskDefinitionTags): any;
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
    readonly driverOpts?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#labels EcsTaskDefinition#labels}
    */
    readonly labels?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#scope EcsTaskDefinition#scope}
    */
    readonly scope?: string;
}
export declare function ecsTaskDefinitionVolumesDockerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumesDockerVolumeConfiguration): any;
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
export declare function ecsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig): any;
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
export declare function ecsTaskDefinitionVolumesEfsVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumesEfsVolumeConfiguration): any;
export interface EcsTaskDefinitionVolumesHost {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html#source_path EcsTaskDefinition#source_path}
    */
    readonly sourcePath?: string;
}
export declare function ecsTaskDefinitionVolumesHostToTerraform(struct?: EcsTaskDefinitionVolumesHost): any;
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
export declare function ecsTaskDefinitionVolumesToTerraform(struct?: EcsTaskDefinitionVolumes): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html awscc_ecs_task_definition}
*/
export declare class EcsTaskDefinition extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_definition.html awscc_ecs_task_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsTaskDefinitionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: EcsTaskDefinitionConfig);
    private _containerDefinitions?;
    get containerDefinitions(): EcsTaskDefinitionContainerDefinitions[];
    set containerDefinitions(value: EcsTaskDefinitionContainerDefinitions[]);
    resetContainerDefinitions(): void;
    get containerDefinitionsInput(): EcsTaskDefinitionContainerDefinitions[] | undefined;
    private _cpu?;
    get cpu(): string;
    set cpu(value: string);
    resetCpu(): void;
    get cpuInput(): string | undefined;
    private _ephemeralStorage?;
    get ephemeralStorage(): EcsTaskDefinitionEphemeralStorage;
    set ephemeralStorage(value: EcsTaskDefinitionEphemeralStorage);
    resetEphemeralStorage(): void;
    get ephemeralStorageInput(): EcsTaskDefinitionEphemeralStorage | undefined;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    resetExecutionRoleArn(): void;
    get executionRoleArnInput(): string | undefined;
    private _family?;
    get family(): string;
    set family(value: string);
    resetFamily(): void;
    get familyInput(): string | undefined;
    get id(): string;
    private _inferenceAccelerators?;
    get inferenceAccelerators(): EcsTaskDefinitionInferenceAccelerators[];
    set inferenceAccelerators(value: EcsTaskDefinitionInferenceAccelerators[]);
    resetInferenceAccelerators(): void;
    get inferenceAcceleratorsInput(): EcsTaskDefinitionInferenceAccelerators[] | undefined;
    private _ipcMode?;
    get ipcMode(): string;
    set ipcMode(value: string);
    resetIpcMode(): void;
    get ipcModeInput(): string | undefined;
    private _memory?;
    get memory(): string;
    set memory(value: string);
    resetMemory(): void;
    get memoryInput(): string | undefined;
    private _networkMode?;
    get networkMode(): string;
    set networkMode(value: string);
    resetNetworkMode(): void;
    get networkModeInput(): string | undefined;
    private _pidMode?;
    get pidMode(): string;
    set pidMode(value: string);
    resetPidMode(): void;
    get pidModeInput(): string | undefined;
    private _placementConstraints?;
    get placementConstraints(): EcsTaskDefinitionPlacementConstraints[];
    set placementConstraints(value: EcsTaskDefinitionPlacementConstraints[]);
    resetPlacementConstraints(): void;
    get placementConstraintsInput(): EcsTaskDefinitionPlacementConstraints[] | undefined;
    private _proxyConfiguration?;
    get proxyConfiguration(): EcsTaskDefinitionProxyConfiguration;
    set proxyConfiguration(value: EcsTaskDefinitionProxyConfiguration);
    resetProxyConfiguration(): void;
    get proxyConfigurationInput(): EcsTaskDefinitionProxyConfiguration | undefined;
    private _requiresCompatibilities?;
    get requiresCompatibilities(): string[];
    set requiresCompatibilities(value: string[]);
    resetRequiresCompatibilities(): void;
    get requiresCompatibilitiesInput(): string[] | undefined;
    private _tags?;
    get tags(): EcsTaskDefinitionTags[];
    set tags(value: EcsTaskDefinitionTags[]);
    resetTags(): void;
    get tagsInput(): EcsTaskDefinitionTags[] | undefined;
    get taskDefinitionArn(): string;
    private _taskRoleArn?;
    get taskRoleArn(): string;
    set taskRoleArn(value: string);
    resetTaskRoleArn(): void;
    get taskRoleArnInput(): string | undefined;
    private _volumes?;
    get volumes(): EcsTaskDefinitionVolumes[];
    set volumes(value: EcsTaskDefinitionVolumes[]);
    resetVolumes(): void;
    get volumesInput(): EcsTaskDefinitionVolumes[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
