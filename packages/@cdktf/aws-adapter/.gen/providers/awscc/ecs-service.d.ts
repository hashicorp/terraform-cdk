import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcsServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#capacity_provider_strategy EcsService#capacity_provider_strategy}
    */
    readonly capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#cluster EcsService#cluster}
    */
    readonly cluster?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#deployment_configuration EcsService#deployment_configuration}
    */
    readonly deploymentConfiguration?: EcsServiceDeploymentConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#deployment_controller EcsService#deployment_controller}
    */
    readonly deploymentController?: EcsServiceDeploymentController;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#desired_count EcsService#desired_count}
    */
    readonly desiredCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#enable_execute_command EcsService#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}
    */
    readonly healthCheckGracePeriodSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#launch_type EcsService#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#load_balancers EcsService#load_balancers}
    */
    readonly loadBalancers?: EcsServiceLoadBalancers[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#network_configuration EcsService#network_configuration}
    */
    readonly networkConfiguration?: EcsServiceNetworkConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#placement_constraints EcsService#placement_constraints}
    */
    readonly placementConstraints?: EcsServicePlacementConstraints[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#placement_strategies EcsService#placement_strategies}
    */
    readonly placementStrategies?: EcsServicePlacementStrategies[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#platform_version EcsService#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#propagate_tags EcsService#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#role EcsService#role}
    */
    readonly role?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#scheduling_strategy EcsService#scheduling_strategy}
    */
    readonly schedulingStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#service_name EcsService#service_name}
    */
    readonly serviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#service_registries EcsService#service_registries}
    */
    readonly serviceRegistries?: EcsServiceServiceRegistries[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#tags EcsService#tags}
    */
    readonly tags?: EcsServiceTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#task_definition EcsService#task_definition}
    */
    readonly taskDefinition?: string;
}
export interface EcsServiceCapacityProviderStrategy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#base EcsService#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#capacity_provider EcsService#capacity_provider}
    */
    readonly capacityProvider?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#weight EcsService#weight}
    */
    readonly weight?: number;
}
export declare function ecsServiceCapacityProviderStrategyToTerraform(struct?: EcsServiceCapacityProviderStrategy): any;
export interface EcsServiceDeploymentConfigurationDeploymentCircuitBreaker {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#enable EcsService#enable}
    */
    readonly enable: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#rollback EcsService#rollback}
    */
    readonly rollback: boolean | cdktf.IResolvable;
}
export declare function ecsServiceDeploymentConfigurationDeploymentCircuitBreakerToTerraform(struct?: EcsServiceDeploymentConfigurationDeploymentCircuitBreaker): any;
export interface EcsServiceDeploymentConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#deployment_circuit_breaker EcsService#deployment_circuit_breaker}
    */
    readonly deploymentCircuitBreaker?: EcsServiceDeploymentConfigurationDeploymentCircuitBreaker;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#maximum_percent EcsService#maximum_percent}
    */
    readonly maximumPercent?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#minimum_healthy_percent EcsService#minimum_healthy_percent}
    */
    readonly minimumHealthyPercent?: number;
}
export declare function ecsServiceDeploymentConfigurationToTerraform(struct?: EcsServiceDeploymentConfiguration): any;
export interface EcsServiceDeploymentController {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#type EcsService#type}
    */
    readonly type?: string;
}
export declare function ecsServiceDeploymentControllerToTerraform(struct?: EcsServiceDeploymentController): any;
export interface EcsServiceLoadBalancers {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#container_name EcsService#container_name}
    */
    readonly containerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#container_port EcsService#container_port}
    */
    readonly containerPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#load_balancer_name EcsService#load_balancer_name}
    */
    readonly loadBalancerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#target_group_arn EcsService#target_group_arn}
    */
    readonly targetGroupArn?: string;
}
export declare function ecsServiceLoadBalancersToTerraform(struct?: EcsServiceLoadBalancers): any;
export interface EcsServiceNetworkConfigurationAwsvpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#assign_public_ip EcsService#assign_public_ip}
    */
    readonly assignPublicIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#security_groups EcsService#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#subnets EcsService#subnets}
    */
    readonly subnets?: string[];
}
export declare function ecsServiceNetworkConfigurationAwsvpcConfigurationToTerraform(struct?: EcsServiceNetworkConfigurationAwsvpcConfiguration): any;
export interface EcsServiceNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#awsvpc_configuration EcsService#awsvpc_configuration}
    */
    readonly awsvpcConfiguration?: EcsServiceNetworkConfigurationAwsvpcConfiguration;
}
export declare function ecsServiceNetworkConfigurationToTerraform(struct?: EcsServiceNetworkConfiguration): any;
export interface EcsServicePlacementConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#expression EcsService#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#type EcsService#type}
    */
    readonly type: string;
}
export declare function ecsServicePlacementConstraintsToTerraform(struct?: EcsServicePlacementConstraints): any;
export interface EcsServicePlacementStrategies {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#field EcsService#field}
    */
    readonly field?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#type EcsService#type}
    */
    readonly type: string;
}
export declare function ecsServicePlacementStrategiesToTerraform(struct?: EcsServicePlacementStrategies): any;
export interface EcsServiceServiceRegistries {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#container_name EcsService#container_name}
    */
    readonly containerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#container_port EcsService#container_port}
    */
    readonly containerPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#port EcsService#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#registry_arn EcsService#registry_arn}
    */
    readonly registryArn?: string;
}
export declare function ecsServiceServiceRegistriesToTerraform(struct?: EcsServiceServiceRegistries): any;
export interface EcsServiceTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#key EcsService#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#value EcsService#value}
    */
    readonly value?: string;
}
export declare function ecsServiceTagsToTerraform(struct?: EcsServiceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html awscc_ecs_service}
*/
export declare class EcsService extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html awscc_ecs_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsServiceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: EcsServiceConfig);
    private _capacityProviderStrategy?;
    get capacityProviderStrategy(): EcsServiceCapacityProviderStrategy[];
    set capacityProviderStrategy(value: EcsServiceCapacityProviderStrategy[]);
    resetCapacityProviderStrategy(): void;
    get capacityProviderStrategyInput(): EcsServiceCapacityProviderStrategy[] | undefined;
    private _cluster?;
    get cluster(): string;
    set cluster(value: string);
    resetCluster(): void;
    get clusterInput(): string | undefined;
    private _deploymentConfiguration?;
    get deploymentConfiguration(): EcsServiceDeploymentConfiguration;
    set deploymentConfiguration(value: EcsServiceDeploymentConfiguration);
    resetDeploymentConfiguration(): void;
    get deploymentConfigurationInput(): EcsServiceDeploymentConfiguration | undefined;
    private _deploymentController?;
    get deploymentController(): EcsServiceDeploymentController;
    set deploymentController(value: EcsServiceDeploymentController);
    resetDeploymentController(): void;
    get deploymentControllerInput(): EcsServiceDeploymentController | undefined;
    private _desiredCount?;
    get desiredCount(): number;
    set desiredCount(value: number);
    resetDesiredCount(): void;
    get desiredCountInput(): number | undefined;
    private _enableEcsManagedTags?;
    get enableEcsManagedTags(): boolean | cdktf.IResolvable;
    set enableEcsManagedTags(value: boolean | cdktf.IResolvable);
    resetEnableEcsManagedTags(): void;
    get enableEcsManagedTagsInput(): boolean | cdktf.IResolvable | undefined;
    private _enableExecuteCommand?;
    get enableExecuteCommand(): boolean | cdktf.IResolvable;
    set enableExecuteCommand(value: boolean | cdktf.IResolvable);
    resetEnableExecuteCommand(): void;
    get enableExecuteCommandInput(): boolean | cdktf.IResolvable | undefined;
    private _healthCheckGracePeriodSeconds?;
    get healthCheckGracePeriodSeconds(): number;
    set healthCheckGracePeriodSeconds(value: number);
    resetHealthCheckGracePeriodSeconds(): void;
    get healthCheckGracePeriodSecondsInput(): number | undefined;
    get id(): string;
    private _launchType?;
    get launchType(): string;
    set launchType(value: string);
    resetLaunchType(): void;
    get launchTypeInput(): string | undefined;
    private _loadBalancers?;
    get loadBalancers(): EcsServiceLoadBalancers[];
    set loadBalancers(value: EcsServiceLoadBalancers[]);
    resetLoadBalancers(): void;
    get loadBalancersInput(): EcsServiceLoadBalancers[] | undefined;
    get name(): string;
    private _networkConfiguration?;
    get networkConfiguration(): EcsServiceNetworkConfiguration;
    set networkConfiguration(value: EcsServiceNetworkConfiguration);
    resetNetworkConfiguration(): void;
    get networkConfigurationInput(): EcsServiceNetworkConfiguration | undefined;
    private _placementConstraints?;
    get placementConstraints(): EcsServicePlacementConstraints[];
    set placementConstraints(value: EcsServicePlacementConstraints[]);
    resetPlacementConstraints(): void;
    get placementConstraintsInput(): EcsServicePlacementConstraints[] | undefined;
    private _placementStrategies?;
    get placementStrategies(): EcsServicePlacementStrategies[];
    set placementStrategies(value: EcsServicePlacementStrategies[]);
    resetPlacementStrategies(): void;
    get placementStrategiesInput(): EcsServicePlacementStrategies[] | undefined;
    private _platformVersion?;
    get platformVersion(): string;
    set platformVersion(value: string);
    resetPlatformVersion(): void;
    get platformVersionInput(): string | undefined;
    private _propagateTags?;
    get propagateTags(): string;
    set propagateTags(value: string);
    resetPropagateTags(): void;
    get propagateTagsInput(): string | undefined;
    private _role?;
    get role(): string;
    set role(value: string);
    resetRole(): void;
    get roleInput(): string | undefined;
    private _schedulingStrategy?;
    get schedulingStrategy(): string;
    set schedulingStrategy(value: string);
    resetSchedulingStrategy(): void;
    get schedulingStrategyInput(): string | undefined;
    get serviceArn(): string;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    resetServiceName(): void;
    get serviceNameInput(): string | undefined;
    private _serviceRegistries?;
    get serviceRegistries(): EcsServiceServiceRegistries[];
    set serviceRegistries(value: EcsServiceServiceRegistries[]);
    resetServiceRegistries(): void;
    get serviceRegistriesInput(): EcsServiceServiceRegistries[] | undefined;
    private _tags?;
    get tags(): EcsServiceTags[];
    set tags(value: EcsServiceTags[]);
    resetTags(): void;
    get tagsInput(): EcsServiceTags[] | undefined;
    private _taskDefinition?;
    get taskDefinition(): string;
    set taskDefinition(value: string);
    resetTaskDefinition(): void;
    get taskDefinitionInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
