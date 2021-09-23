// https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotwirelessWirelessGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of Wireless Gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#description IotwirelessWirelessGateway#description}
  */
  readonly description?: string;
  /**
  * The date and time when the most recent uplink was received.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#last_uplink_received_at IotwirelessWirelessGateway#last_uplink_received_at}
  */
  readonly lastUplinkReceivedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#lo_ra_wan IotwirelessWirelessGateway#lo_ra_wan}
  */
  readonly loRaWan: IotwirelessWirelessGatewayLoRaWan;
  /**
  * Name of Wireless Gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#name IotwirelessWirelessGateway#name}
  */
  readonly name?: string;
  /**
  * A list of key-value pairs that contain metadata for the gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#tags IotwirelessWirelessGateway#tags}
  */
  readonly tags?: IotwirelessWirelessGatewayTags[];
  /**
  * Thing Arn. Passed into Update to associate a Thing with the Wireless Gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#thing_arn IotwirelessWirelessGateway#thing_arn}
  */
  readonly thingArn?: string;
}
export interface IotwirelessWirelessGatewayLoRaWan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#gateway_eui IotwirelessWirelessGateway#gateway_eui}
  */
  readonly gatewayEui: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#rf_region IotwirelessWirelessGateway#rf_region}
  */
  readonly rfRegion: string;
}

export function iotwirelessWirelessGatewayLoRaWanToTerraform(struct?: IotwirelessWirelessGatewayLoRaWan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gateway_eui: cdktf.stringToTerraform(struct!.gatewayEui),
    rf_region: cdktf.stringToTerraform(struct!.rfRegion),
  }
}

export interface IotwirelessWirelessGatewayTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#key IotwirelessWirelessGateway#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#value IotwirelessWirelessGateway#value}
  */
  readonly value?: string;
}

export function iotwirelessWirelessGatewayTagsToTerraform(struct?: IotwirelessWirelessGatewayTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html awscc_iotwireless_wireless_gateway}
*/
export class IotwirelessWirelessGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotwireless_wireless_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html awscc_iotwireless_wireless_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotwirelessWirelessGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: IotwirelessWirelessGatewayConfig) {
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
    this._description = config.description;
    this._lastUplinkReceivedAt = config.lastUplinkReceivedAt;
    this._loRaWan = config.loRaWan;
    this._name = config.name;
    this._tags = config.tags;
    this._thingArn = config.thingArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // last_uplink_received_at - computed: false, optional: true, required: false
  private _lastUplinkReceivedAt?: string;
  public get lastUplinkReceivedAt() {
    return this.getStringAttribute('last_uplink_received_at');
  }
  public set lastUplinkReceivedAt(value: string ) {
    this._lastUplinkReceivedAt = value;
  }
  public resetLastUplinkReceivedAt() {
    this._lastUplinkReceivedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUplinkReceivedAtInput() {
    return this._lastUplinkReceivedAt
  }

  // lo_ra_wan - computed: false, optional: false, required: true
  private _loRaWan: IotwirelessWirelessGatewayLoRaWan;
  public get loRaWan() {
    return this.interpolationForAttribute('lo_ra_wan') as any;
  }
  public set loRaWan(value: IotwirelessWirelessGatewayLoRaWan) {
    this._loRaWan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loRaWanInput() {
    return this._loRaWan
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotwirelessWirelessGatewayTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotwirelessWirelessGatewayTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // thing_arn - computed: false, optional: true, required: false
  private _thingArn?: string;
  public get thingArn() {
    return this.getStringAttribute('thing_arn');
  }
  public set thingArn(value: string ) {
    this._thingArn = value;
  }
  public resetThingArn() {
    this._thingArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingArnInput() {
    return this._thingArn
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
      description: cdktf.stringToTerraform(this._description),
      last_uplink_received_at: cdktf.stringToTerraform(this._lastUplinkReceivedAt),
      lo_ra_wan: iotwirelessWirelessGatewayLoRaWanToTerraform(this._loRaWan),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(iotwirelessWirelessGatewayTagsToTerraform)(this._tags),
      thing_arn: cdktf.stringToTerraform(this._thingArn),
    };
  }
}
