// https://www.terraform.io/docs/providers/awscc/d/groundstation_dataflow_endpoint_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccGroundstationDataflowEndpointGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_dataflow_endpoint_group.html#id DataAwsccGroundstationDataflowEndpointGroup#id}
  */
  readonly id: string;
}
export class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint extends cdktf.ComplexComputedList {

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.interpolationForAttribute('address') as any;
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address: dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToTerraform(struct!.address),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails extends cdktf.ComplexComputedList {

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}

export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

export class DataAwsccGroundstationDataflowEndpointGroupEndpointDetails extends cdktf.ComplexComputedList {

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.interpolationForAttribute('endpoint') as any;
  }

  // security_details - computed: true, optional: false, required: false
  public get securityDetails() {
    return this.interpolationForAttribute('security_details') as any;
  }
}

export function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint: dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointToTerraform(struct!.endpoint),
    security_details: dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToTerraform(struct!.securityDetails),
  }
}

export class DataAwsccGroundstationDataflowEndpointGroupTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccGroundstationDataflowEndpointGroupTagsToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_dataflow_endpoint_group.html awscc_groundstation_dataflow_endpoint_group}
*/
export class DataAwsccGroundstationDataflowEndpointGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_groundstation_dataflow_endpoint_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_dataflow_endpoint_group.html awscc_groundstation_dataflow_endpoint_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGroundstationDataflowEndpointGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGroundstationDataflowEndpointGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_groundstation_dataflow_endpoint_group',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // endpoint_details - computed: true, optional: false, required: false
  public get endpointDetails() {
    return this.interpolationForAttribute('endpoint_details') as any;
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

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
