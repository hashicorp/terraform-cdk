// https://www.terraform.io/docs/providers/awscc/d/iotwireless_wireless_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotwirelessWirelessGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_wireless_gateway.html#id DataAwsccIotwirelessWirelessGateway#id}
  */
  readonly id: string;
}
export class DataAwsccIotwirelessWirelessGatewayLoRaWan extends cdktf.ComplexComputedList {

  // gateway_eui - computed: true, optional: false, required: false
  public get gatewayEui() {
    return this.getStringAttribute('gateway_eui');
  }

  // rf_region - computed: true, optional: false, required: false
  public get rfRegion() {
    return this.getStringAttribute('rf_region');
  }
}

export function dataAwsccIotwirelessWirelessGatewayLoRaWanToTerraform(struct?: DataAwsccIotwirelessWirelessGatewayLoRaWan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gateway_eui: cdktf.stringToTerraform(struct!.gatewayEui),
    rf_region: cdktf.stringToTerraform(struct!.rfRegion),
  }
}

export class DataAwsccIotwirelessWirelessGatewayTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotwirelessWirelessGatewayTagsToTerraform(struct?: DataAwsccIotwirelessWirelessGatewayTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_wireless_gateway.html awscc_iotwireless_wireless_gateway}
*/
export class DataAwsccIotwirelessWirelessGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotwireless_wireless_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_wireless_gateway.html awscc_iotwireless_wireless_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotwirelessWirelessGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotwirelessWirelessGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotwireless_wireless_gateway',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // last_uplink_received_at - computed: true, optional: false, required: false
  public get lastUplinkReceivedAt() {
    return this.getStringAttribute('last_uplink_received_at');
  }

  // lo_ra_wan - computed: true, optional: false, required: false
  public get loRaWan() {
    return this.interpolationForAttribute('lo_ra_wan') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // thing_arn - computed: true, optional: false, required: false
  public get thingArn() {
    return this.getStringAttribute('thing_arn');
  }

  // thing_name - computed: true, optional: false, required: false
  public get thingName() {
    return this.getStringAttribute('thing_name');
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
