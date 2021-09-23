// https://www.terraform.io/docs/providers/awscc/r/networkmanager_customer_gateway_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkmanagerCustomerGatewayAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the customer gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_customer_gateway_association.html#customer_gateway_arn NetworkmanagerCustomerGatewayAssociation#customer_gateway_arn}
  */
  readonly customerGatewayArn: string;
  /**
  * The ID of the device
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_customer_gateway_association.html#device_id NetworkmanagerCustomerGatewayAssociation#device_id}
  */
  readonly deviceId: string;
  /**
  * The ID of the global network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_customer_gateway_association.html#global_network_id NetworkmanagerCustomerGatewayAssociation#global_network_id}
  */
  readonly globalNetworkId: string;
  /**
  * The ID of the link
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_customer_gateway_association.html#link_id NetworkmanagerCustomerGatewayAssociation#link_id}
  */
  readonly linkId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_customer_gateway_association.html awscc_networkmanager_customer_gateway_association}
*/
export class NetworkmanagerCustomerGatewayAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_networkmanager_customer_gateway_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_customer_gateway_association.html awscc_networkmanager_customer_gateway_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkmanagerCustomerGatewayAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkmanagerCustomerGatewayAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkmanager_customer_gateway_association',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customerGatewayArn = config.customerGatewayArn;
    this._deviceId = config.deviceId;
    this._globalNetworkId = config.globalNetworkId;
    this._linkId = config.linkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_gateway_arn - computed: false, optional: false, required: true
  private _customerGatewayArn: string;
  public get customerGatewayArn() {
    return this.getStringAttribute('customer_gateway_arn');
  }
  public set customerGatewayArn(value: string) {
    this._customerGatewayArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewayArnInput() {
    return this._customerGatewayArn
  }

  // device_id - computed: false, optional: false, required: true
  private _deviceId: string;
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId
  }

  // global_network_id - computed: false, optional: false, required: true
  private _globalNetworkId: string;
  public get globalNetworkId() {
    return this.getStringAttribute('global_network_id');
  }
  public set globalNetworkId(value: string) {
    this._globalNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkIdInput() {
    return this._globalNetworkId
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_id - computed: true, optional: true, required: false
  private _linkId?: string;
  public get linkId() {
    return this.getStringAttribute('link_id');
  }
  public set linkId(value: string) {
    this._linkId = value;
  }
  public resetLinkId() {
    this._linkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkIdInput() {
    return this._linkId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_gateway_arn: cdktf.stringToTerraform(this._customerGatewayArn),
      device_id: cdktf.stringToTerraform(this._deviceId),
      global_network_id: cdktf.stringToTerraform(this._globalNetworkId),
      link_id: cdktf.stringToTerraform(this._linkId),
    };
  }
}
