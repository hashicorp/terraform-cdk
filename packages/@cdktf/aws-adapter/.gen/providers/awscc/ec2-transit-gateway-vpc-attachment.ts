// https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#add_subnet_ids Ec2TransitGatewayVpcAttachment#add_subnet_ids}
  */
  readonly addSubnetIds?: string[];
  /**
  * The options for the transit gateway vpc attachment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#options Ec2TransitGatewayVpcAttachment#options}
  */
  readonly options?: Ec2TransitGatewayVpcAttachmentOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#remove_subnet_ids Ec2TransitGatewayVpcAttachment#remove_subnet_ids}
  */
  readonly removeSubnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#subnet_ids Ec2TransitGatewayVpcAttachment#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#tags Ec2TransitGatewayVpcAttachment#tags}
  */
  readonly tags?: Ec2TransitGatewayVpcAttachmentTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#transit_gateway_id Ec2TransitGatewayVpcAttachment#transit_gateway_id}
  */
  readonly transitGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#vpc_id Ec2TransitGatewayVpcAttachment#vpc_id}
  */
  readonly vpcId?: string;
}
export interface Ec2TransitGatewayVpcAttachmentOptions {
  /**
  * Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#appliance_mode_support Ec2TransitGatewayVpcAttachment#appliance_mode_support}
  */
  readonly applianceModeSupport?: string;
  /**
  * Indicates whether to enable DNS Support for Vpc Attachment. Valid Values: enable | disable
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#dns_support Ec2TransitGatewayVpcAttachment#dns_support}
  */
  readonly dnsSupport?: string;
  /**
  * Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#ipv_6_support Ec2TransitGatewayVpcAttachment#ipv_6_support}
  */
  readonly ipv6Support?: string;
}

export function ec2TransitGatewayVpcAttachmentOptionsToTerraform(struct?: Ec2TransitGatewayVpcAttachmentOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    appliance_mode_support: cdktf.stringToTerraform(struct!.applianceModeSupport),
    dns_support: cdktf.stringToTerraform(struct!.dnsSupport),
    ipv_6_support: cdktf.stringToTerraform(struct!.ipv6Support),
  }
}

export interface Ec2TransitGatewayVpcAttachmentTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#key Ec2TransitGatewayVpcAttachment#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#value Ec2TransitGatewayVpcAttachment#value}
  */
  readonly value: string;
}

export function ec2TransitGatewayVpcAttachmentTagsToTerraform(struct?: Ec2TransitGatewayVpcAttachmentTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html awscc_ec2_transit_gateway_vpc_attachment}
*/
export class Ec2TransitGatewayVpcAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_transit_gateway_vpc_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html awscc_ec2_transit_gateway_vpc_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayVpcAttachmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayVpcAttachmentConfig = {}) {
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
    this._addSubnetIds = config.addSubnetIds;
    this._options = config.options;
    this._removeSubnetIds = config.removeSubnetIds;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._transitGatewayId = config.transitGatewayId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_subnet_ids - computed: false, optional: true, required: false
  private _addSubnetIds?: string[];
  public get addSubnetIds() {
    return this.getListAttribute('add_subnet_ids');
  }
  public set addSubnetIds(value: string[] ) {
    this._addSubnetIds = value;
  }
  public resetAddSubnetIds() {
    this._addSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSubnetIdsInput() {
    return this._addSubnetIds
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // options - computed: false, optional: true, required: false
  private _options?: Ec2TransitGatewayVpcAttachmentOptions;
  public get options() {
    return this.interpolationForAttribute('options') as any;
  }
  public set options(value: Ec2TransitGatewayVpcAttachmentOptions ) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }

  // remove_subnet_ids - computed: false, optional: true, required: false
  private _removeSubnetIds?: string[];
  public get removeSubnetIds() {
    return this.getListAttribute('remove_subnet_ids');
  }
  public set removeSubnetIds(value: string[] ) {
    this._removeSubnetIds = value;
  }
  public resetRemoveSubnetIds() {
    this._removeSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeSubnetIdsInput() {
    return this._removeSubnetIds
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Ec2TransitGatewayVpcAttachmentTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Ec2TransitGatewayVpcAttachmentTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // transit_gateway_id - computed: true, optional: true, required: false
  private _transitGatewayId?: string;
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  public resetTransitGatewayId() {
    this._transitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._addSubnetIds),
      options: ec2TransitGatewayVpcAttachmentOptionsToTerraform(this._options),
      remove_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._removeSubnetIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.listMapper(ec2TransitGatewayVpcAttachmentTagsToTerraform)(this._tags),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
