// https://www.terraform.io/docs/providers/awscc/d/ecs_task_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEcsTaskSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecs_task_set.html#id DataAwsccEcsTaskSet#id}
  */
  readonly id: string;
}
export class DataAwsccEcsTaskSetLoadBalancers extends cdktf.ComplexComputedList {

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

export function dataAwsccEcsTaskSetLoadBalancersToTerraform(struct?: DataAwsccEcsTaskSetLoadBalancers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    load_balancer_name: cdktf.stringToTerraform(struct!.loadBalancerName),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
  }
}

export class DataAwsccEcsTaskSetNetworkConfigurationAwsVpcConfiguration extends cdktf.ComplexComputedList {

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

export function dataAwsccEcsTaskSetNetworkConfigurationAwsVpcConfigurationToTerraform(struct?: DataAwsccEcsTaskSetNetworkConfigurationAwsVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    assign_public_ip: cdktf.stringToTerraform(struct!.assignPublicIp),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}

export class DataAwsccEcsTaskSetNetworkConfiguration extends cdktf.ComplexComputedList {

  // aws_vpc_configuration - computed: true, optional: false, required: false
  public get awsVpcConfiguration() {
    return this.interpolationForAttribute('aws_vpc_configuration') as any;
  }
}

export function dataAwsccEcsTaskSetNetworkConfigurationToTerraform(struct?: DataAwsccEcsTaskSetNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aws_vpc_configuration: dataAwsccEcsTaskSetNetworkConfigurationAwsVpcConfigurationToTerraform(struct!.awsVpcConfiguration),
  }
}

export class DataAwsccEcsTaskSetScale extends cdktf.ComplexComputedList {

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export function dataAwsccEcsTaskSetScaleToTerraform(struct?: DataAwsccEcsTaskSetScale): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class DataAwsccEcsTaskSetServiceRegistries extends cdktf.ComplexComputedList {

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

export function dataAwsccEcsTaskSetServiceRegistriesToTerraform(struct?: DataAwsccEcsTaskSetServiceRegistries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    port: cdktf.numberToTerraform(struct!.port),
    registry_arn: cdktf.stringToTerraform(struct!.registryArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_task_set.html awscc_ecs_task_set}
*/
export class DataAwsccEcsTaskSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecs_task_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_task_set.html awscc_ecs_task_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEcsTaskSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEcsTaskSetConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return this.getStringAttribute('cluster');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
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

  // network_configuration - computed: true, optional: false, required: false
  public get networkConfiguration() {
    return this.interpolationForAttribute('network_configuration') as any;
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.interpolationForAttribute('scale') as any;
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // service_registries - computed: true, optional: false, required: false
  public get serviceRegistries() {
    return this.interpolationForAttribute('service_registries') as any;
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
