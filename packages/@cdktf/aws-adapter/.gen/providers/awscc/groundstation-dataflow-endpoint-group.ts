// https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroundstationDataflowEndpointGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#endpoint_details GroundstationDataflowEndpointGroup#endpoint_details}
  */
  readonly endpointDetails: GroundstationDataflowEndpointGroupEndpointDetails[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#tags GroundstationDataflowEndpointGroup#tags}
  */
  readonly tags?: GroundstationDataflowEndpointGroupTags[];
}
export interface GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#name GroundstationDataflowEndpointGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#port GroundstationDataflowEndpointGroup#port}
  */
  readonly port?: number;
}

export function groundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface GroundstationDataflowEndpointGroupEndpointDetailsEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#address GroundstationDataflowEndpointGroup#address}
  */
  readonly address?: GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#mtu GroundstationDataflowEndpointGroup#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#name GroundstationDataflowEndpointGroup#name}
  */
  readonly name?: string;
}

export function groundstationDataflowEndpointGroupEndpointDetailsEndpointToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address: groundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToTerraform(struct!.address),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#role_arn GroundstationDataflowEndpointGroup#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#security_group_ids GroundstationDataflowEndpointGroup#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#subnet_ids GroundstationDataflowEndpointGroup#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function groundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

export interface GroundstationDataflowEndpointGroupEndpointDetails {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#endpoint GroundstationDataflowEndpointGroup#endpoint}
  */
  readonly endpoint?: GroundstationDataflowEndpointGroupEndpointDetailsEndpoint;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#security_details GroundstationDataflowEndpointGroup#security_details}
  */
  readonly securityDetails?: GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails;
}

export function groundstationDataflowEndpointGroupEndpointDetailsToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint: groundstationDataflowEndpointGroupEndpointDetailsEndpointToTerraform(struct!.endpoint),
    security_details: groundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToTerraform(struct!.securityDetails),
  }
}

export interface GroundstationDataflowEndpointGroupTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#key GroundstationDataflowEndpointGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#value GroundstationDataflowEndpointGroup#value}
  */
  readonly value?: string;
}

export function groundstationDataflowEndpointGroupTagsToTerraform(struct?: GroundstationDataflowEndpointGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html awscc_groundstation_dataflow_endpoint_group}
*/
export class GroundstationDataflowEndpointGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_groundstation_dataflow_endpoint_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html awscc_groundstation_dataflow_endpoint_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroundstationDataflowEndpointGroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroundstationDataflowEndpointGroupConfig) {
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
    this._endpointDetails = config.endpointDetails;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // endpoint_details - computed: false, optional: false, required: true
  private _endpointDetails: GroundstationDataflowEndpointGroupEndpointDetails[];
  public get endpointDetails() {
    return this.interpolationForAttribute('endpoint_details') as any;
  }
  public set endpointDetails(value: GroundstationDataflowEndpointGroupEndpointDetails[]) {
    this._endpointDetails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointDetailsInput() {
    return this._endpointDetails
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: GroundstationDataflowEndpointGroupTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: GroundstationDataflowEndpointGroupTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_details: cdktf.listMapper(groundstationDataflowEndpointGroupEndpointDetailsToTerraform)(this._endpointDetails),
      tags: cdktf.listMapper(groundstationDataflowEndpointGroupTagsToTerraform)(this._tags),
    };
  }
}
