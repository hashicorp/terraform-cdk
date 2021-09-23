import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEcsTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecs_task_definition.html#id DataAwsccEcsTaskDefinition#id}
    */
    readonly id: string;
}
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn extends cdktf.ComplexComputedList {
    get condition(): string;
    get containerName(): string;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): string;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles extends cdktf.ComplexComputedList {
    get type(): string;
    get value(): string;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts extends cdktf.ComplexComputedList {
    get hostname(): string;
    get ipAddress(): string;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration extends cdktf.ComplexComputedList {
    get options(): any;
    get type(): string;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck extends cdktf.ComplexComputedList {
    get command(): string[];
    get interval(): number;
    get retries(): number;
    get startPeriod(): number;
    get timeout(): number;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities extends cdktf.ComplexComputedList {
    get add(): string[];
    get drop(): string[];
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices extends cdktf.ComplexComputedList {
    get containerPath(): string;
    get hostPath(): string;
    get permissions(): string[];
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs extends cdktf.ComplexComputedList {
    get containerPath(): string;
    get mountOptions(): string[];
    get size(): number;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters extends cdktf.ComplexComputedList {
    get capabilities(): any;
    get devices(): any;
    get initProcessEnabled(): any;
    get maxSwap(): number;
    get sharedMemorySize(): number;
    get swappiness(): number;
    get tmpfs(): any;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions extends cdktf.ComplexComputedList {
    get name(): string;
    get valueFrom(): string;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration extends cdktf.ComplexComputedList {
    get logDriver(): string;
    get options(): any;
    get secretOptions(): any;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints extends cdktf.ComplexComputedList {
    get containerPath(): string;
    get readOnly(): any;
    get sourceVolume(): string;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings extends cdktf.ComplexComputedList {
    get containerPort(): number;
    get hostPort(): number;
    get protocol(): string;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials extends cdktf.ComplexComputedList {
    get credentialsParameter(): string;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements extends cdktf.ComplexComputedList {
    get type(): string;
    get value(): string;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets extends cdktf.ComplexComputedList {
    get name(): string;
    get valueFrom(): string;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsSecretsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls extends cdktf.ComplexComputedList {
    get namespace(): string;
    get value(): string;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits extends cdktf.ComplexComputedList {
    get hardLimit(): number;
    get name(): string;
    get softLimit(): number;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom extends cdktf.ComplexComputedList {
    get readOnly(): any;
    get sourceContainer(): string;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom): any;
export declare class DataAwsccEcsTaskDefinitionContainerDefinitions extends cdktf.ComplexComputedList {
    get command(): string[];
    get cpu(): number;
    get dependsOn(): any;
    get disableNetworking(): any;
    get dnsSearchDomains(): string[];
    get dnsServers(): string[];
    get dockerLabels(): any;
    get dockerSecurityOptions(): string[];
    get entryPoint(): string[];
    get environment(): any;
    get environmentFiles(): any;
    get essential(): any;
    get extraHosts(): any;
    get firelensConfiguration(): any;
    get healthCheck(): any;
    get hostname(): string;
    get image(): string;
    get interactive(): any;
    get links(): string[];
    get linuxParameters(): any;
    get logConfiguration(): any;
    get memory(): number;
    get memoryReservation(): number;
    get mountPoints(): any;
    get name(): string;
    get portMappings(): any;
    get privileged(): any;
    get pseudoTerminal(): any;
    get readonlyRootFilesystem(): any;
    get repositoryCredentials(): any;
    get resourceRequirements(): any;
    get secrets(): any;
    get startTimeout(): number;
    get stopTimeout(): number;
    get systemControls(): any;
    get ulimits(): any;
    get user(): string;
    get volumesFrom(): any;
    get workingDirectory(): string;
}
export declare function dataAwsccEcsTaskDefinitionContainerDefinitionsToTerraform(struct?: DataAwsccEcsTaskDefinitionContainerDefinitions): any;
export declare class DataAwsccEcsTaskDefinitionEphemeralStorage extends cdktf.ComplexComputedList {
    get sizeInGiB(): number;
}
export declare function dataAwsccEcsTaskDefinitionEphemeralStorageToTerraform(struct?: DataAwsccEcsTaskDefinitionEphemeralStorage): any;
export declare class DataAwsccEcsTaskDefinitionInferenceAccelerators extends cdktf.ComplexComputedList {
    get deviceName(): string;
    get deviceType(): string;
}
export declare function dataAwsccEcsTaskDefinitionInferenceAcceleratorsToTerraform(struct?: DataAwsccEcsTaskDefinitionInferenceAccelerators): any;
export declare class DataAwsccEcsTaskDefinitionPlacementConstraints extends cdktf.ComplexComputedList {
    get expression(): string;
    get type(): string;
}
export declare function dataAwsccEcsTaskDefinitionPlacementConstraintsToTerraform(struct?: DataAwsccEcsTaskDefinitionPlacementConstraints): any;
export declare class DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): string;
}
export declare function dataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesToTerraform(struct?: DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties): any;
export declare class DataAwsccEcsTaskDefinitionProxyConfiguration extends cdktf.ComplexComputedList {
    get containerName(): string;
    get proxyConfigurationProperties(): any;
    get type(): string;
}
export declare function dataAwsccEcsTaskDefinitionProxyConfigurationToTerraform(struct?: DataAwsccEcsTaskDefinitionProxyConfiguration): any;
export declare class DataAwsccEcsTaskDefinitionTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEcsTaskDefinitionTagsToTerraform(struct?: DataAwsccEcsTaskDefinitionTags): any;
export declare class DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration extends cdktf.ComplexComputedList {
    get autoprovision(): any;
    get driver(): string;
    get driverOpts(): any;
    get labels(): any;
    get scope(): string;
}
export declare function dataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationToTerraform(struct?: DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration): any;
export declare class DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig extends cdktf.ComplexComputedList {
    get accessPointId(): string;
    get iam(): string;
}
export declare function dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig): any;
export declare class DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration extends cdktf.ComplexComputedList {
    get authorizationConfig(): any;
    get filesystemId(): string;
    get rootDirectory(): string;
    get transitEncryption(): string;
    get transitEncryptionPort(): number;
}
export declare function dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationToTerraform(struct?: DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration): any;
export declare class DataAwsccEcsTaskDefinitionVolumesHost extends cdktf.ComplexComputedList {
    get sourcePath(): string;
}
export declare function dataAwsccEcsTaskDefinitionVolumesHostToTerraform(struct?: DataAwsccEcsTaskDefinitionVolumesHost): any;
export declare class DataAwsccEcsTaskDefinitionVolumes extends cdktf.ComplexComputedList {
    get dockerVolumeConfiguration(): any;
    get efsVolumeConfiguration(): any;
    get host(): any;
    get name(): string;
}
export declare function dataAwsccEcsTaskDefinitionVolumesToTerraform(struct?: DataAwsccEcsTaskDefinitionVolumes): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_task_definition.html awscc_ecs_task_definition}
*/
export declare class DataAwsccEcsTaskDefinition extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_task_definition.html awscc_ecs_task_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcsTaskDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEcsTaskDefinitionConfig);
    get containerDefinitions(): any;
    get cpu(): string;
    get ephemeralStorage(): any;
    get executionRoleArn(): string;
    get family(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get inferenceAccelerators(): any;
    get ipcMode(): string;
    get memory(): string;
    get networkMode(): string;
    get pidMode(): string;
    get placementConstraints(): any;
    get proxyConfiguration(): any;
    get requiresCompatibilities(): string[];
    get tags(): any;
    get taskDefinitionArn(): string;
    get taskRoleArn(): string;
    get volumes(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
