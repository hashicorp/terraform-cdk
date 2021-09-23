// https://www.terraform.io/docs/providers/awscc/r/ecs_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function ecsServiceCapacityProviderStrategyToTerraform(struct?: EcsServiceCapacityProviderStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    base: cdktf.numberToTerraform(struct!.base),
    capacity_provider: cdktf.stringToTerraform(struct!.capacityProvider),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

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

export function ecsServiceDeploymentConfigurationDeploymentCircuitBreakerToTerraform(struct?: EcsServiceDeploymentConfigurationDeploymentCircuitBreaker): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    rollback: cdktf.booleanToTerraform(struct!.rollback),
  }
}

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

export function ecsServiceDeploymentConfigurationToTerraform(struct?: EcsServiceDeploymentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    deployment_circuit_breaker: ecsServiceDeploymentConfigurationDeploymentCircuitBreakerToTerraform(struct!.deploymentCircuitBreaker),
    maximum_percent: cdktf.numberToTerraform(struct!.maximumPercent),
    minimum_healthy_percent: cdktf.numberToTerraform(struct!.minimumHealthyPercent),
  }
}

export interface EcsServiceDeploymentController {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#type EcsService#type}
  */
  readonly type?: string;
}

export function ecsServiceDeploymentControllerToTerraform(struct?: EcsServiceDeploymentController): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

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

export function ecsServiceLoadBalancersToTerraform(struct?: EcsServiceLoadBalancers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    load_balancer_name: cdktf.stringToTerraform(struct!.loadBalancerName),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
  }
}

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

export function ecsServiceNetworkConfigurationAwsvpcConfigurationToTerraform(struct?: EcsServiceNetworkConfigurationAwsvpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    assign_public_ip: cdktf.stringToTerraform(struct!.assignPublicIp),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}

export interface EcsServiceNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html#awsvpc_configuration EcsService#awsvpc_configuration}
  */
  readonly awsvpcConfiguration?: EcsServiceNetworkConfigurationAwsvpcConfiguration;
}

export function ecsServiceNetworkConfigurationToTerraform(struct?: EcsServiceNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awsvpc_configuration: ecsServiceNetworkConfigurationAwsvpcConfigurationToTerraform(struct!.awsvpcConfiguration),
  }
}

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

export function ecsServicePlacementConstraintsToTerraform(struct?: EcsServicePlacementConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

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

export function ecsServicePlacementStrategiesToTerraform(struct?: EcsServicePlacementStrategies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

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

export function ecsServiceServiceRegistriesToTerraform(struct?: EcsServiceServiceRegistries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    port: cdktf.numberToTerraform(struct!.port),
    registry_arn: cdktf.stringToTerraform(struct!.registryArn),
  }
}

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

export function ecsServiceTagsToTerraform(struct?: EcsServiceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html awscc_ecs_service}
*/
export class EcsService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecs_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecs_service.html awscc_ecs_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsServiceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EcsServiceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecs_service',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._capacityProviderStrategy = config.capacityProviderStrategy;
    this._cluster = config.cluster;
    this._deploymentConfiguration = config.deploymentConfiguration;
    this._deploymentController = config.deploymentController;
    this._desiredCount = config.desiredCount;
    this._enableEcsManagedTags = config.enableEcsManagedTags;
    this._enableExecuteCommand = config.enableExecuteCommand;
    this._healthCheckGracePeriodSeconds = config.healthCheckGracePeriodSeconds;
    this._launchType = config.launchType;
    this._loadBalancers = config.loadBalancers;
    this._networkConfiguration = config.networkConfiguration;
    this._placementConstraints = config.placementConstraints;
    this._placementStrategies = config.placementStrategies;
    this._platformVersion = config.platformVersion;
    this._propagateTags = config.propagateTags;
    this._role = config.role;
    this._schedulingStrategy = config.schedulingStrategy;
    this._serviceName = config.serviceName;
    this._serviceRegistries = config.serviceRegistries;
    this._tags = config.tags;
    this._taskDefinition = config.taskDefinition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_provider_strategy - computed: false, optional: true, required: false
  private _capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[];
  public get capacityProviderStrategy() {
    return this.interpolationForAttribute('capacity_provider_strategy') as any;
  }
  public set capacityProviderStrategy(value: EcsServiceCapacityProviderStrategy[] ) {
    this._capacityProviderStrategy = value;
  }
  public resetCapacityProviderStrategy() {
    this._capacityProviderStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderStrategyInput() {
    return this._capacityProviderStrategy
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster?: string;
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster
  }

  // deployment_configuration - computed: false, optional: true, required: false
  private _deploymentConfiguration?: EcsServiceDeploymentConfiguration;
  public get deploymentConfiguration() {
    return this.interpolationForAttribute('deployment_configuration') as any;
  }
  public set deploymentConfiguration(value: EcsServiceDeploymentConfiguration ) {
    this._deploymentConfiguration = value;
  }
  public resetDeploymentConfiguration() {
    this._deploymentConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigurationInput() {
    return this._deploymentConfiguration
  }

  // deployment_controller - computed: true, optional: true, required: false
  private _deploymentController?: EcsServiceDeploymentController;
  public get deploymentController() {
    return this.interpolationForAttribute('deployment_controller') as any;
  }
  public set deploymentController(value: EcsServiceDeploymentController) {
    this._deploymentController = value;
  }
  public resetDeploymentController() {
    this._deploymentController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentControllerInput() {
    return this._deploymentController
  }

  // desired_count - computed: false, optional: true, required: false
  private _desiredCount?: number;
  public get desiredCount() {
    return this.getNumberAttribute('desired_count');
  }
  public set desiredCount(value: number ) {
    this._desiredCount = value;
  }
  public resetDesiredCount() {
    this._desiredCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCountInput() {
    return this._desiredCount
  }

  // enable_ecs_managed_tags - computed: true, optional: true, required: false
  private _enableEcsManagedTags?: boolean | cdktf.IResolvable;
  public get enableEcsManagedTags() {
    return this.getBooleanAttribute('enable_ecs_managed_tags');
  }
  public set enableEcsManagedTags(value: boolean | cdktf.IResolvable) {
    this._enableEcsManagedTags = value;
  }
  public resetEnableEcsManagedTags() {
    this._enableEcsManagedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEcsManagedTagsInput() {
    return this._enableEcsManagedTags
  }

  // enable_execute_command - computed: false, optional: true, required: false
  private _enableExecuteCommand?: boolean | cdktf.IResolvable;
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command');
  }
  public set enableExecuteCommand(value: boolean | cdktf.IResolvable ) {
    this._enableExecuteCommand = value;
  }
  public resetEnableExecuteCommand() {
    this._enableExecuteCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExecuteCommandInput() {
    return this._enableExecuteCommand
  }

  // health_check_grace_period_seconds - computed: false, optional: true, required: false
  private _healthCheckGracePeriodSeconds?: number;
  public get healthCheckGracePeriodSeconds() {
    return this.getNumberAttribute('health_check_grace_period_seconds');
  }
  public set healthCheckGracePeriodSeconds(value: number ) {
    this._healthCheckGracePeriodSeconds = value;
  }
  public resetHealthCheckGracePeriodSeconds() {
    this._healthCheckGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckGracePeriodSecondsInput() {
    return this._healthCheckGracePeriodSeconds
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // launch_type - computed: true, optional: true, required: false
  private _launchType?: string;
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }
  public set launchType(value: string) {
    this._launchType = value;
  }
  public resetLaunchType() {
    this._launchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTypeInput() {
    return this._launchType
  }

  // load_balancers - computed: true, optional: true, required: false
  private _loadBalancers?: EcsServiceLoadBalancers[];
  public get loadBalancers() {
    return this.interpolationForAttribute('load_balancers') as any;
  }
  public set loadBalancers(value: EcsServiceLoadBalancers[]) {
    this._loadBalancers = value;
  }
  public resetLoadBalancers() {
    this._loadBalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersInput() {
    return this._loadBalancers
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration?: EcsServiceNetworkConfiguration;
  public get networkConfiguration() {
    return this.interpolationForAttribute('network_configuration') as any;
  }
  public set networkConfiguration(value: EcsServiceNetworkConfiguration ) {
    this._networkConfiguration = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration
  }

  // placement_constraints - computed: true, optional: true, required: false
  private _placementConstraints?: EcsServicePlacementConstraints[];
  public get placementConstraints() {
    return this.interpolationForAttribute('placement_constraints') as any;
  }
  public set placementConstraints(value: EcsServicePlacementConstraints[]) {
    this._placementConstraints = value;
  }
  public resetPlacementConstraints() {
    this._placementConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintsInput() {
    return this._placementConstraints
  }

  // placement_strategies - computed: true, optional: true, required: false
  private _placementStrategies?: EcsServicePlacementStrategies[];
  public get placementStrategies() {
    return this.interpolationForAttribute('placement_strategies') as any;
  }
  public set placementStrategies(value: EcsServicePlacementStrategies[]) {
    this._placementStrategies = value;
  }
  public resetPlacementStrategies() {
    this._placementStrategies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementStrategiesInput() {
    return this._placementStrategies
  }

  // platform_version - computed: true, optional: true, required: false
  private _platformVersion?: string;
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
  public set platformVersion(value: string) {
    this._platformVersion = value;
  }
  public resetPlatformVersion() {
    this._platformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformVersionInput() {
    return this._platformVersion
  }

  // propagate_tags - computed: true, optional: true, required: false
  private _propagateTags?: string;
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }
  public set propagateTags(value: string) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags
  }

  // role - computed: true, optional: true, required: false
  private _role?: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // scheduling_strategy - computed: true, optional: true, required: false
  private _schedulingStrategy?: string;
  public get schedulingStrategy() {
    return this.getStringAttribute('scheduling_strategy');
  }
  public set schedulingStrategy(value: string) {
    this._schedulingStrategy = value;
  }
  public resetSchedulingStrategy() {
    this._schedulingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingStrategyInput() {
    return this._schedulingStrategy
  }

  // service_arn - computed: true, optional: false, required: false
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string;
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // service_registries - computed: true, optional: true, required: false
  private _serviceRegistries?: EcsServiceServiceRegistries[];
  public get serviceRegistries() {
    return this.interpolationForAttribute('service_registries') as any;
  }
  public set serviceRegistries(value: EcsServiceServiceRegistries[]) {
    this._serviceRegistries = value;
  }
  public resetServiceRegistries() {
    this._serviceRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRegistriesInput() {
    return this._serviceRegistries
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: EcsServiceTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: EcsServiceTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // task_definition - computed: false, optional: true, required: false
  private _taskDefinition?: string;
  public get taskDefinition() {
    return this.getStringAttribute('task_definition');
  }
  public set taskDefinition(value: string ) {
    this._taskDefinition = value;
  }
  public resetTaskDefinition() {
    this._taskDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionInput() {
    return this._taskDefinition
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_provider_strategy: cdktf.listMapper(ecsServiceCapacityProviderStrategyToTerraform)(this._capacityProviderStrategy),
      cluster: cdktf.stringToTerraform(this._cluster),
      deployment_configuration: ecsServiceDeploymentConfigurationToTerraform(this._deploymentConfiguration),
      deployment_controller: ecsServiceDeploymentControllerToTerraform(this._deploymentController),
      desired_count: cdktf.numberToTerraform(this._desiredCount),
      enable_ecs_managed_tags: cdktf.booleanToTerraform(this._enableEcsManagedTags),
      enable_execute_command: cdktf.booleanToTerraform(this._enableExecuteCommand),
      health_check_grace_period_seconds: cdktf.numberToTerraform(this._healthCheckGracePeriodSeconds),
      launch_type: cdktf.stringToTerraform(this._launchType),
      load_balancers: cdktf.listMapper(ecsServiceLoadBalancersToTerraform)(this._loadBalancers),
      network_configuration: ecsServiceNetworkConfigurationToTerraform(this._networkConfiguration),
      placement_constraints: cdktf.listMapper(ecsServicePlacementConstraintsToTerraform)(this._placementConstraints),
      placement_strategies: cdktf.listMapper(ecsServicePlacementStrategiesToTerraform)(this._placementStrategies),
      platform_version: cdktf.stringToTerraform(this._platformVersion),
      propagate_tags: cdktf.stringToTerraform(this._propagateTags),
      role: cdktf.stringToTerraform(this._role),
      scheduling_strategy: cdktf.stringToTerraform(this._schedulingStrategy),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_registries: cdktf.listMapper(ecsServiceServiceRegistriesToTerraform)(this._serviceRegistries),
      tags: cdktf.listMapper(ecsServiceTagsToTerraform)(this._tags),
      task_definition: cdktf.stringToTerraform(this._taskDefinition),
    };
  }
}
