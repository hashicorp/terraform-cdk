// https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsTaskSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#cluster EcsTaskSet#cluster}
  */
  readonly cluster: string;
  /**
  * An optional non-unique tag that identifies this task set in external systems. If the task set is associated with a service discovery registry, the tasks in this task set will have the ECS_TASK_SET_EXTERNAL_ID AWS Cloud Map attribute set to the provided value. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#external_id EcsTaskSet#external_id}
  */
  readonly externalId?: string;
  /**
  * The launch type that new tasks in the task set will use. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html in the Amazon Elastic Container Service Developer Guide. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#launch_type EcsTaskSet#launch_type}
  */
  readonly launchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#load_balancers EcsTaskSet#load_balancers}
  */
  readonly loadBalancers?: EcsTaskSetLoadBalancers[];
  /**
  * An object representing the network configuration for a task or service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#network_configuration EcsTaskSet#network_configuration}
  */
  readonly networkConfiguration?: EcsTaskSetNetworkConfiguration;
  /**
  * The platform version that the tasks in the task set should use. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used by default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#platform_version EcsTaskSet#platform_version}
  */
  readonly platformVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#scale EcsTaskSet#scale}
  */
  readonly scale?: EcsTaskSetScale;
  /**
  * The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#service EcsTaskSet#service}
  */
  readonly service: string;
  /**
  * The details of the service discovery registries to assign to this task set. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#service_registries EcsTaskSet#service_registries}
  */
  readonly serviceRegistries?: EcsTaskSetServiceRegistries[];
  /**
  * The short name or full Amazon Resource Name (ARN) of the task definition for the tasks in the task set to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#task_definition EcsTaskSet#task_definition}
  */
  readonly taskDefinition: string;
}
export interface EcsTaskSetLoadBalancers {
  /**
  * The name of the container (as it appears in a container definition) to associate with the load balancer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#container_name EcsTaskSet#container_name}
  */
  readonly containerName?: string;
  /**
  * The port on the container to associate with the load balancer. This port must correspond to a containerPort in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they are launched on must allow ingress traffic on the hostPort of the port mapping.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#container_port EcsTaskSet#container_port}
  */
  readonly containerPort?: number;
  /**
  * The name of the load balancer to associate with the Amazon ECS service or task set. A load balancer name is only specified when using a Classic Load Balancer. If you are using an Application Load Balancer or a Network Load Balancer this should be omitted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#load_balancer_name EcsTaskSet#load_balancer_name}
  */
  readonly loadBalancerName?: string;
  /**
  * The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set. A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer. If you are using a Classic Load Balancer this should be omitted. For services using the ECS deployment controller, you can specify one or multiple target groups. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html in the Amazon Elastic Container Service Developer Guide. For services using the CODE_DEPLOY deployment controller, you are required to define two target groups for the load balancer. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html in the Amazon Elastic Container Service Developer Guide. If your service's task definition uses the awsvpc network mode (which is required for the Fargate launch type), you must choose ip as the target type, not instance, when creating your target groups because tasks that use the awsvpc network mode are associated with an elastic network interface, not an Amazon EC2 instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#target_group_arn EcsTaskSet#target_group_arn}
  */
  readonly targetGroupArn?: string;
}

export function ecsTaskSetLoadBalancersToTerraform(struct?: EcsTaskSetLoadBalancers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    load_balancer_name: cdktf.stringToTerraform(struct!.loadBalancerName),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
  }
}

export interface EcsTaskSetNetworkConfigurationAwsVpcConfiguration {
  /**
  * Whether the task's elastic network interface receives a public IP address. The default value is DISABLED.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#assign_public_ip EcsTaskSet#assign_public_ip}
  */
  readonly assignPublicIp?: string;
  /**
  * The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. There is a limit of 5 security groups that can be specified per AwsVpcConfiguration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#security_groups EcsTaskSet#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * The subnets associated with the task or service. There is a limit of 16 subnets that can be specified per AwsVpcConfiguration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#subnets EcsTaskSet#subnets}
  */
  readonly subnets: string[];
}

export function ecsTaskSetNetworkConfigurationAwsVpcConfigurationToTerraform(struct?: EcsTaskSetNetworkConfigurationAwsVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    assign_public_ip: cdktf.stringToTerraform(struct!.assignPublicIp),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}

export interface EcsTaskSetNetworkConfiguration {
  /**
  * The VPC subnets and security groups associated with a task. All specified subnets and security groups must be from the same VPC.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#aws_vpc_configuration EcsTaskSet#aws_vpc_configuration}
  */
  readonly awsVpcConfiguration?: EcsTaskSetNetworkConfigurationAwsVpcConfiguration;
}

export function ecsTaskSetNetworkConfigurationToTerraform(struct?: EcsTaskSetNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aws_vpc_configuration: ecsTaskSetNetworkConfigurationAwsVpcConfigurationToTerraform(struct!.awsVpcConfiguration),
  }
}

export interface EcsTaskSetScale {
  /**
  * The unit of measure for the scale value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#unit EcsTaskSet#unit}
  */
  readonly unit?: string;
  /**
  * The value, specified as a percent total of a service's desiredCount, to scale the task set. Accepted values are numbers between 0 and 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#value EcsTaskSet#value}
  */
  readonly value?: number;
}

export function ecsTaskSetScaleToTerraform(struct?: EcsTaskSetScale): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EcsTaskSetServiceRegistries {
  /**
  * The container name value, already specified in the task definition, to be used for your service discovery service. If the task definition that your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition that your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#container_name EcsTaskSet#container_name}
  */
  readonly containerName?: string;
  /**
  * The port value, already specified in the task definition, to be used for your service discovery service. If the task definition your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#container_port EcsTaskSet#container_port}
  */
  readonly containerPort?: number;
  /**
  * The port value used if your service discovery service specified an SRV record. This field may be used if both the awsvpc network mode and SRV records are used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#port EcsTaskSet#port}
  */
  readonly port?: number;
  /**
  * The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is AWS Cloud Map. For more information, see https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#registry_arn EcsTaskSet#registry_arn}
  */
  readonly registryArn?: string;
}

export function ecsTaskSetServiceRegistriesToTerraform(struct?: EcsTaskSetServiceRegistries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    port: cdktf.numberToTerraform(struct!.port),
    registry_arn: cdktf.stringToTerraform(struct!.registryArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html awscc_ecs_task_set}
*/
export class EcsTaskSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecs_task_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html awscc_ecs_task_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsTaskSetConfig
  */
  public constructor(scope: Construct, id: string, config: EcsTaskSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecs_task_set',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cluster = config.cluster;
    this._externalId = config.externalId;
    this._launchType = config.launchType;
    this._loadBalancers = config.loadBalancers;
    this._networkConfiguration = config.networkConfiguration;
    this._platformVersion = config.platformVersion;
    this._scale = config.scale;
    this._service = config.service;
    this._serviceRegistries = config.serviceRegistries;
    this._taskDefinition = config.taskDefinition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster: string;
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string;
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId
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
  private _loadBalancers?: EcsTaskSetLoadBalancers[];
  public get loadBalancers() {
    return this.interpolationForAttribute('load_balancers') as any;
  }
  public set loadBalancers(value: EcsTaskSetLoadBalancers[]) {
    this._loadBalancers = value;
  }
  public resetLoadBalancers() {
    this._loadBalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersInput() {
    return this._loadBalancers
  }

  // network_configuration - computed: true, optional: true, required: false
  private _networkConfiguration?: EcsTaskSetNetworkConfiguration;
  public get networkConfiguration() {
    return this.interpolationForAttribute('network_configuration') as any;
  }
  public set networkConfiguration(value: EcsTaskSetNetworkConfiguration) {
    this._networkConfiguration = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration
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

  // scale - computed: false, optional: true, required: false
  private _scale?: EcsTaskSetScale;
  public get scale() {
    return this.interpolationForAttribute('scale') as any;
  }
  public set scale(value: EcsTaskSetScale ) {
    this._scale = value;
  }
  public resetScale() {
    this._scale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }

  // service_registries - computed: true, optional: true, required: false
  private _serviceRegistries?: EcsTaskSetServiceRegistries[];
  public get serviceRegistries() {
    return this.interpolationForAttribute('service_registries') as any;
  }
  public set serviceRegistries(value: EcsTaskSetServiceRegistries[]) {
    this._serviceRegistries = value;
  }
  public resetServiceRegistries() {
    this._serviceRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRegistriesInput() {
    return this._serviceRegistries
  }

  // task_definition - computed: false, optional: false, required: true
  private _taskDefinition: string;
  public get taskDefinition() {
    return this.getStringAttribute('task_definition');
  }
  public set taskDefinition(value: string) {
    this._taskDefinition = value;
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
      cluster: cdktf.stringToTerraform(this._cluster),
      external_id: cdktf.stringToTerraform(this._externalId),
      launch_type: cdktf.stringToTerraform(this._launchType),
      load_balancers: cdktf.listMapper(ecsTaskSetLoadBalancersToTerraform)(this._loadBalancers),
      network_configuration: ecsTaskSetNetworkConfigurationToTerraform(this._networkConfiguration),
      platform_version: cdktf.stringToTerraform(this._platformVersion),
      scale: ecsTaskSetScaleToTerraform(this._scale),
      service: cdktf.stringToTerraform(this._service),
      service_registries: cdktf.listMapper(ecsTaskSetServiceRegistriesToTerraform)(this._serviceRegistries),
      task_definition: cdktf.stringToTerraform(this._taskDefinition),
    };
  }
}
