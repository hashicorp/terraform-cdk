// https://www.terraform.io/docs/providers/awscc/r/networkmanager_transit_gateway_registration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkmanagerTransitGatewayRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the global network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_transit_gateway_registration.html#global_network_id NetworkmanagerTransitGatewayRegistration#global_network_id}
  */
  readonly globalNetworkId: string;
  /**
  * The Amazon Resource Name (ARN) of the transit gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_transit_gateway_registration.html#transit_gateway_arn NetworkmanagerTransitGatewayRegistration#transit_gateway_arn}
  */
  readonly transitGatewayArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_transit_gateway_registration.html awscc_networkmanager_transit_gateway_registration}
*/
export class NetworkmanagerTransitGatewayRegistration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_networkmanager_transit_gateway_registration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_transit_gateway_registration.html awscc_networkmanager_transit_gateway_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkmanagerTransitGatewayRegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkmanagerTransitGatewayRegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkmanager_transit_gateway_registration',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._globalNetworkId = config.globalNetworkId;
    this._transitGatewayArn = config.transitGatewayArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // transit_gateway_arn - computed: false, optional: false, required: true
  private _transitGatewayArn: string;
  public get transitGatewayArn() {
    return this.getStringAttribute('transit_gateway_arn');
  }
  public set transitGatewayArn(value: string) {
    this._transitGatewayArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayArnInput() {
    return this._transitGatewayArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      global_network_id: cdktf.stringToTerraform(this._globalNetworkId),
      transit_gateway_arn: cdktf.stringToTerraform(this._transitGatewayArn),
    };
  }
}
