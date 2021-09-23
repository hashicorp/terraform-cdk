// https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayMulticastDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The options for the transit gateway multicast domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html#options Ec2TransitGatewayMulticastDomain#options}
  */
  readonly options?: Ec2TransitGatewayMulticastDomainOptions;
  /**
  * The tags for the transit gateway multicast domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html#tags Ec2TransitGatewayMulticastDomain#tags}
  */
  readonly tags?: Ec2TransitGatewayMulticastDomainTags[];
  /**
  * The ID of the transit gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html#transit_gateway_id Ec2TransitGatewayMulticastDomain#transit_gateway_id}
  */
  readonly transitGatewayId: string;
}
export interface Ec2TransitGatewayMulticastDomainOptions {
  /**
  * Indicates whether to automatically cross-account subnet associations that are associated with the transit gateway multicast domain. Valid Values: enable | disable
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html#auto_accept_shared_associations Ec2TransitGatewayMulticastDomain#auto_accept_shared_associations}
  */
  readonly autoAcceptSharedAssociations?: string;
  /**
  * Indicates whether Internet Group Management Protocol (IGMP) version 2 is turned on for the transit gateway multicast domain. Valid Values: enable | disable
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html#igmpv_2_support Ec2TransitGatewayMulticastDomain#igmpv_2_support}
  */
  readonly igmpv2Support?: string;
  /**
  * Indicates whether support for statically configuring transit gateway multicast group sources is turned on. Valid Values: enable | disable
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html#static_sources_support Ec2TransitGatewayMulticastDomain#static_sources_support}
  */
  readonly staticSourcesSupport?: string;
}

export function ec2TransitGatewayMulticastDomainOptionsToTerraform(struct?: Ec2TransitGatewayMulticastDomainOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_accept_shared_associations: cdktf.stringToTerraform(struct!.autoAcceptSharedAssociations),
    igmpv_2_support: cdktf.stringToTerraform(struct!.igmpv2Support),
    static_sources_support: cdktf.stringToTerraform(struct!.staticSourcesSupport),
  }
}

export interface Ec2TransitGatewayMulticastDomainTags {
  /**
  * The key of the tag. Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws:.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html#key Ec2TransitGatewayMulticastDomain#key}
  */
  readonly key?: string;
  /**
  * The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html#value Ec2TransitGatewayMulticastDomain#value}
  */
  readonly value?: string;
}

export function ec2TransitGatewayMulticastDomainTagsToTerraform(struct?: Ec2TransitGatewayMulticastDomainTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html awscc_ec2_transit_gateway_multicast_domain}
*/
export class Ec2TransitGatewayMulticastDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_transit_gateway_multicast_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html awscc_ec2_transit_gateway_multicast_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayMulticastDomainConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayMulticastDomainConfig) {
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
    this._options = config.options;
    this._tags = config.tags;
    this._transitGatewayId = config.transitGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // options - computed: false, optional: true, required: false
  private _options?: Ec2TransitGatewayMulticastDomainOptions;
  public get options() {
    return this.interpolationForAttribute('options') as any;
  }
  public set options(value: Ec2TransitGatewayMulticastDomainOptions ) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Ec2TransitGatewayMulticastDomainTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Ec2TransitGatewayMulticastDomainTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // transit_gateway_id - computed: false, optional: false, required: true
  private _transitGatewayId: string;
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId
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
      options: ec2TransitGatewayMulticastDomainOptionsToTerraform(this._options),
      tags: cdktf.listMapper(ec2TransitGatewayMulticastDomainTagsToTerraform)(this._tags),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
    };
  }
}
