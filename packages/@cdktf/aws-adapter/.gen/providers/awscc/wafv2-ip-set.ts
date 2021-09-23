// https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wafv2IpSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of IPAddresses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html#addresses Wafv2IpSet#addresses}
  */
  readonly addresses: string[];
  /**
  * Description of the entity.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html#description Wafv2IpSet#description}
  */
  readonly description?: string;
  /**
  * Type of addresses in the IPSet, use IPV4 for IPV4 IP addresses, IPV6 for IPV6 address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html#ip_address_version Wafv2IpSet#ip_address_version}
  */
  readonly ipAddressVersion: string;
  /**
  * Name of the IPSet.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html#name Wafv2IpSet#name}
  */
  readonly name?: string;
  /**
  * Use CLOUDFRONT for CloudFront IPSet, use REGIONAL for Application Load Balancer and API Gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html#scope Wafv2IpSet#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html#tags Wafv2IpSet#tags}
  */
  readonly tags?: Wafv2IpSetTags[];
}
export interface Wafv2IpSetTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html#key Wafv2IpSet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html#value Wafv2IpSet#value}
  */
  readonly value?: string;
}

export function wafv2IpSetTagsToTerraform(struct?: Wafv2IpSetTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html awscc_wafv2_ip_set}
*/
export class Wafv2IpSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_wafv2_ip_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html awscc_wafv2_ip_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv2IpSetConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv2IpSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wafv2_ip_set',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addresses = config.addresses;
    this._description = config.description;
    this._ipAddressVersion = config.ipAddressVersion;
    this._name = config.name;
    this._scope = config.scope;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: false, optional: false, required: true
  private _addresses: string[];
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address_version - computed: false, optional: false, required: true
  private _ipAddressVersion: string;
  public get ipAddressVersion() {
    return this.getStringAttribute('ip_address_version');
  }
  public set ipAddressVersion(value: string) {
    this._ipAddressVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressVersionInput() {
    return this._ipAddressVersion
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Wafv2IpSetTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Wafv2IpSetTags[] ) {
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
      addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._addresses),
      description: cdktf.stringToTerraform(this._description),
      ip_address_version: cdktf.stringToTerraform(this._ipAddressVersion),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      tags: cdktf.listMapper(wafv2IpSetTagsToTerraform)(this._tags),
    };
  }
}
