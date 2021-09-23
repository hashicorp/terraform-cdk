// https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_vpc_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEc2TransitGatewayVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_vpc_attachment.html#id DataAwsccEc2TransitGatewayVpcAttachment#id}
  */
  readonly id: string;
}
export class DataAwsccEc2TransitGatewayVpcAttachmentOptions extends cdktf.ComplexComputedList {

  // appliance_mode_support - computed: true, optional: false, required: false
  public get applianceModeSupport() {
    return this.getStringAttribute('appliance_mode_support');
  }

  // dns_support - computed: true, optional: false, required: false
  public get dnsSupport() {
    return this.getStringAttribute('dns_support');
  }

  // ipv_6_support - computed: true, optional: false, required: false
  public get ipv6Support() {
    return this.getStringAttribute('ipv_6_support');
  }
}

export function dataAwsccEc2TransitGatewayVpcAttachmentOptionsToTerraform(struct?: DataAwsccEc2TransitGatewayVpcAttachmentOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    appliance_mode_support: cdktf.stringToTerraform(struct!.applianceModeSupport),
    dns_support: cdktf.stringToTerraform(struct!.dnsSupport),
    ipv_6_support: cdktf.stringToTerraform(struct!.ipv6Support),
  }
}

export class DataAwsccEc2TransitGatewayVpcAttachmentTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEc2TransitGatewayVpcAttachmentTagsToTerraform(struct?: DataAwsccEc2TransitGatewayVpcAttachmentTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_vpc_attachment.html awscc_ec2_transit_gateway_vpc_attachment}
*/
export class DataAwsccEc2TransitGatewayVpcAttachment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_transit_gateway_vpc_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_vpc_attachment.html awscc_ec2_transit_gateway_vpc_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2TransitGatewayVpcAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayVpcAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_transit_gateway_vpc_attachment',
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

  // add_subnet_ids - computed: true, optional: false, required: false
  public get addSubnetIds() {
    return this.getListAttribute('add_subnet_ids');
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

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.interpolationForAttribute('options') as any;
  }

  // remove_subnet_ids - computed: true, optional: false, required: false
  public get removeSubnetIds() {
    return this.getListAttribute('remove_subnet_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
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
