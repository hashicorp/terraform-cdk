// https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEc2TransitGatewayMulticastDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_domain.html#id DataAwsccEc2TransitGatewayMulticastDomain#id}
  */
  readonly id: string;
}
export class DataAwsccEc2TransitGatewayMulticastDomainOptions extends cdktf.ComplexComputedList {

  // auto_accept_shared_associations - computed: true, optional: false, required: false
  public get autoAcceptSharedAssociations() {
    return this.getStringAttribute('auto_accept_shared_associations');
  }

  // igmpv_2_support - computed: true, optional: false, required: false
  public get igmpv2Support() {
    return this.getStringAttribute('igmpv_2_support');
  }

  // static_sources_support - computed: true, optional: false, required: false
  public get staticSourcesSupport() {
    return this.getStringAttribute('static_sources_support');
  }
}

export function dataAwsccEc2TransitGatewayMulticastDomainOptionsToTerraform(struct?: DataAwsccEc2TransitGatewayMulticastDomainOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_accept_shared_associations: cdktf.stringToTerraform(struct!.autoAcceptSharedAssociations),
    igmpv_2_support: cdktf.stringToTerraform(struct!.igmpv2Support),
    static_sources_support: cdktf.stringToTerraform(struct!.staticSourcesSupport),
  }
}

export class DataAwsccEc2TransitGatewayMulticastDomainTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEc2TransitGatewayMulticastDomainTagsToTerraform(struct?: DataAwsccEc2TransitGatewayMulticastDomainTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_domain.html awscc_ec2_transit_gateway_multicast_domain}
*/
export class DataAwsccEc2TransitGatewayMulticastDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_transit_gateway_multicast_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_domain.html awscc_ec2_transit_gateway_multicast_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2TransitGatewayMulticastDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayMulticastDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_transit_gateway_multicast_domain',
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

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // transit_gateway_multicast_domain_arn - computed: true, optional: false, required: false
  public get transitGatewayMulticastDomainArn() {
    return this.getStringAttribute('transit_gateway_multicast_domain_arn');
  }

  // transit_gateway_multicast_domain_id - computed: true, optional: false, required: false
  public get transitGatewayMulticastDomainId() {
    return this.getStringAttribute('transit_gateway_multicast_domain_id');
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
