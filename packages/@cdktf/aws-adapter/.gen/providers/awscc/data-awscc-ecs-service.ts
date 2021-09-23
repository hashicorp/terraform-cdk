// https://www.terraform.io/docs/providers/awscc/d/ecs_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEcsServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecs_service.html#id DataAwsccEcsService#id}
  */
  readonly id: string;
}
export class DataAwsccEcsServiceCapacityProviderStrategy extends cdktf.ComplexComputedList {

  // base - computed: true, optional: false, required: false
  public get base() {
    return this.getNumberAttribute('base');
  }

  // capacity_provider - computed: true, optional: false, required: false
  public get capacityProvider() {
    return this.getStringAttribute('capacity_provider');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export function dataAwsccEcsServiceCapacityProviderStrategyToTerraform(struct?: DataAwsccEcsServiceCapacityProviderStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    base: cdktf.numberToTerraform(struct!.base),
    capacity_provider: cdktf.stringToTerraform(struct!.capacityProvider),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export class DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker extends cdktf.ComplexComputedList {

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // rollback - computed: true, optional: false, required: false
  public get rollback() {
    return this.getBooleanAttribute('rollback');
  }
}

export function dataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerToTerraform(struct?: DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    rollback: cdktf.booleanToTerraform(struct!.rollback),
  }
}

export class DataAwsccEcsServiceDeploymentConfiguration extends cdktf.ComplexComputedList {

  // deployment_circuit_breaker - computed: true, optional: false, required: false
  public get deploymentCircuitBreaker() {
    return this.interpolationForAttribute('deployment_circuit_breaker') as any;
  }

  // maximum_percent - computed: true, optional: false, required: false
  public get maximumPercent() {
    return this.getNumberAttribute('maximum_percent');
  }

  // minimum_healthy_percent - computed: true, optional: false, required: false
  public get minimumHealthyPercent() {
    return this.getNumberAttribute('minimum_healthy_percent');
  }
}

export function dataAwsccEcsServiceDeploymentConfigurationToTerraform(struct?: DataAwsccEcsServiceDeploymentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    deployment_circuit_breaker: dataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerToTerraform(struct!.deploymentCircuitBreaker),
    maximum_percent: cdktf.numberToTerraform(struct!.maximumPercent),
    minimum_healthy_percent: cdktf.numberToTerraform(struct!.minimumHealthyPercent),
  }
}

export class DataAwsccEcsServiceDeploymentController extends cdktf.ComplexComputedList {

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccEcsServiceDeploymentControllerToTerraform(struct?: DataAwsccEcsServiceDeploymentController): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccEcsServiceLoadBalancers extends cdktf.ComplexComputedList {

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // container_port - computed: true, optional: false, required: false
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // load_balancer_name - computed: true, optional: false, required: false
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }

  // target_group_arn - computed: true, optional: false, required: false
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
}

export function dataAwsccEcsServiceLoadBalancersToTerraform(struct?: DataAwsccEcsServiceLoadBalancers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    load_balancer_name: cdktf.stringToTerraform(struct!.loadBalancerName),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
  }
}

export class DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration extends cdktf.ComplexComputedList {

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getStringAttribute('assign_public_ip');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}

export function dataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationToTerraform(struct?: DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    assign_public_ip: cdktf.stringToTerraform(struct!.assignPublicIp),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}

export class DataAwsccEcsServiceNetworkConfiguration extends cdktf.ComplexComputedList {

  // awsvpc_configuration - computed: true, optional: false, required: false
  public get awsvpcConfiguration() {
    return this.interpolationForAttribute('awsvpc_configuration') as any;
  }
}

export function dataAwsccEcsServiceNetworkConfigurationToTerraform(struct?: DataAwsccEcsServiceNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awsvpc_configuration: dataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationToTerraform(struct!.awsvpcConfiguration),
  }
}

export class DataAwsccEcsServicePlacementConstraints extends cdktf.ComplexComputedList {

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccEcsServicePlacementConstraintsToTerraform(struct?: DataAwsccEcsServicePlacementConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccEcsServicePlacementStrategies extends cdktf.ComplexComputedList {

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccEcsServicePlacementStrategiesToTerraform(struct?: DataAwsccEcsServicePlacementStrategies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccEcsServiceServiceRegistries extends cdktf.ComplexComputedList {

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // container_port - computed: true, optional: false, required: false
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // registry_arn - computed: true, optional: false, required: false
  public get registryArn() {
    return this.getStringAttribute('registry_arn');
  }
}

export function dataAwsccEcsServiceServiceRegistriesToTerraform(struct?: DataAwsccEcsServiceServiceRegistries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    port: cdktf.numberToTerraform(struct!.port),
    registry_arn: cdktf.stringToTerraform(struct!.registryArn),
  }
}

export class DataAwsccEcsServiceTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEcsServiceTagsToTerraform(struct?: DataAwsccEcsServiceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_service.html awscc_ecs_service}
*/
export class DataAwsccEcsService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecs_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_service.html awscc_ecs_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEcsServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEcsServiceConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_provider_strategy - computed: true, optional: false, required: false
  public get capacityProviderStrategy() {
    return this.interpolationForAttribute('capacity_provider_strategy') as any;
  }

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return this.getStringAttribute('cluster');
  }

  // deployment_configuration - computed: true, optional: false, required: false
  public get deploymentConfiguration() {
    return this.interpolationForAttribute('deployment_configuration') as any;
  }

  // deployment_controller - computed: true, optional: false, required: false
  public get deploymentController() {
    return this.interpolationForAttribute('deployment_controller') as any;
  }

  // desired_count - computed: true, optional: false, required: false
  public get desiredCount() {
    return this.getNumberAttribute('desired_count');
  }

  // enable_ecs_managed_tags - computed: true, optional: false, required: false
  public get enableEcsManagedTags() {
    return this.getBooleanAttribute('enable_ecs_managed_tags');
  }

  // enable_execute_command - computed: true, optional: false, required: false
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command');
  }

  // health_check_grace_period_seconds - computed: true, optional: false, required: false
  public get healthCheckGracePeriodSeconds() {
    return this.getNumberAttribute('health_check_grace_period_seconds');
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

  // launch_type - computed: true, optional: false, required: false
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }

  // load_balancers - computed: true, optional: false, required: false
  public get loadBalancers() {
    return this.interpolationForAttribute('load_balancers') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_configuration - computed: true, optional: false, required: false
  public get networkConfiguration() {
    return this.interpolationForAttribute('network_configuration') as any;
  }

  // placement_constraints - computed: true, optional: false, required: false
  public get placementConstraints() {
    return this.interpolationForAttribute('placement_constraints') as any;
  }

  // placement_strategies - computed: true, optional: false, required: false
  public get placementStrategies() {
    return this.interpolationForAttribute('placement_strategies') as any;
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // propagate_tags - computed: true, optional: false, required: false
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // scheduling_strategy - computed: true, optional: false, required: false
  public get schedulingStrategy() {
    return this.getStringAttribute('scheduling_strategy');
  }

  // service_arn - computed: true, optional: false, required: false
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_registries - computed: true, optional: false, required: false
  public get serviceRegistries() {
    return this.interpolationForAttribute('service_registries') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // task_definition - computed: true, optional: false, required: false
  public get taskDefinition() {
    return this.getStringAttribute('task_definition');
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
