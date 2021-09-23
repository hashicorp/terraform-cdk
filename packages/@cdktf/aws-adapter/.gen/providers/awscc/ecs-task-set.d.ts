import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function ecsTaskSetLoadBalancersToTerraform(struct?: EcsTaskSetLoadBalancers): any;
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
export declare function ecsTaskSetNetworkConfigurationAwsVpcConfigurationToTerraform(struct?: EcsTaskSetNetworkConfigurationAwsVpcConfiguration): any;
export interface EcsTaskSetNetworkConfiguration {
    /**
    * The VPC subnets and security groups associated with a task. All specified subnets and security groups must be from the same VPC.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html#aws_vpc_configuration EcsTaskSet#aws_vpc_configuration}
    */
    readonly awsVpcConfiguration?: EcsTaskSetNetworkConfigurationAwsVpcConfiguration;
}
export declare function ecsTaskSetNetworkConfigurationToTerraform(struct?: EcsTaskSetNetworkConfiguration): any;
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
export declare function ecsTaskSetScaleToTerraform(struct?: EcsTaskSetScale): any;
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
export declare function ecsTaskSetServiceRegistriesToTerraform(struct?: EcsTaskSetServiceRegistries): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html awscc_ecs_task_set}
*/
export declare class EcsTaskSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecs_task_set.html awscc_ecs_task_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsTaskSetConfig
    */
    constructor(scope: Construct, id: string, config: EcsTaskSetConfig);
    private _cluster;
    get cluster(): string;
    set cluster(value: string);
    get clusterInput(): string;
    private _externalId?;
    get externalId(): string;
    set externalId(value: string);
    resetExternalId(): void;
    get externalIdInput(): string | undefined;
    get id(): string;
    private _launchType?;
    get launchType(): string;
    set launchType(value: string);
    resetLaunchType(): void;
    get launchTypeInput(): string | undefined;
    private _loadBalancers?;
    get loadBalancers(): EcsTaskSetLoadBalancers[];
    set loadBalancers(value: EcsTaskSetLoadBalancers[]);
    resetLoadBalancers(): void;
    get loadBalancersInput(): EcsTaskSetLoadBalancers[] | undefined;
    private _networkConfiguration?;
    get networkConfiguration(): EcsTaskSetNetworkConfiguration;
    set networkConfiguration(value: EcsTaskSetNetworkConfiguration);
    resetNetworkConfiguration(): void;
    get networkConfigurationInput(): EcsTaskSetNetworkConfiguration | undefined;
    private _platformVersion?;
    get platformVersion(): string;
    set platformVersion(value: string);
    resetPlatformVersion(): void;
    get platformVersionInput(): string | undefined;
    private _scale?;
    get scale(): EcsTaskSetScale;
    set scale(value: EcsTaskSetScale);
    resetScale(): void;
    get scaleInput(): EcsTaskSetScale | undefined;
    private _service;
    get service(): string;
    set service(value: string);
    get serviceInput(): string;
    private _serviceRegistries?;
    get serviceRegistries(): EcsTaskSetServiceRegistries[];
    set serviceRegistries(value: EcsTaskSetServiceRegistries[]);
    resetServiceRegistries(): void;
    get serviceRegistriesInput(): EcsTaskSetServiceRegistries[] | undefined;
    private _taskDefinition;
    get taskDefinition(): string;
    set taskDefinition(value: string);
    get taskDefinitionInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
