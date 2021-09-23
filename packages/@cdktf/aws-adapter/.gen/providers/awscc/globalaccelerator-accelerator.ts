// https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalacceleratorAcceleratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether an accelerator is enabled. The value is true or false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html#enabled GlobalacceleratorAccelerator#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * IP Address type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html#ip_address_type GlobalacceleratorAccelerator#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * The IP addresses from BYOIP Prefix pool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html#ip_addresses GlobalacceleratorAccelerator#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Name of accelerator.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html#name GlobalacceleratorAccelerator#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html#tags GlobalacceleratorAccelerator#tags}
  */
  readonly tags?: GlobalacceleratorAcceleratorTags[];
}
export interface GlobalacceleratorAcceleratorTags {
  /**
  * Key of the tag. Value can be 1 to 127 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html#key GlobalacceleratorAccelerator#key}
  */
  readonly key: string;
  /**
  * Value for the tag. Value can be 1 to 255 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html#value GlobalacceleratorAccelerator#value}
  */
  readonly value: string;
}

export function globalacceleratorAcceleratorTagsToTerraform(struct?: GlobalacceleratorAcceleratorTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html awscc_globalaccelerator_accelerator}
*/
export class GlobalacceleratorAccelerator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_globalaccelerator_accelerator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html awscc_globalaccelerator_accelerator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalacceleratorAcceleratorConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalacceleratorAcceleratorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_globalaccelerator_accelerator',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._ipAddressType = config.ipAddressType;
    this._ipAddresses = config.ipAddresses;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerator_arn - computed: true, optional: false, required: false
  public get acceleratorArn() {
    return this.getStringAttribute('accelerator_arn');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address_type - computed: true, optional: true, required: false
  private _ipAddressType?: string;
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[];
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[] ) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: GlobalacceleratorAcceleratorTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: GlobalacceleratorAcceleratorTags[] ) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
      ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._ipAddresses),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(globalacceleratorAcceleratorTagsToTerraform)(this._tags),
    };
  }
}
