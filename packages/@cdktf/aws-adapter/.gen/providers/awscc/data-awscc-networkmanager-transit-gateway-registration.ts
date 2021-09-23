// https://www.terraform.io/docs/providers/awscc/d/networkmanager_transit_gateway_registration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccNetworkmanagerTransitGatewayRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_transit_gateway_registration.html#id DataAwsccNetworkmanagerTransitGatewayRegistration#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_transit_gateway_registration.html awscc_networkmanager_transit_gateway_registration}
*/
export class DataAwsccNetworkmanagerTransitGatewayRegistration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_networkmanager_transit_gateway_registration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_transit_gateway_registration.html awscc_networkmanager_transit_gateway_registration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNetworkmanagerTransitGatewayRegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNetworkmanagerTransitGatewayRegistrationConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // global_network_id - computed: true, optional: false, required: false
  public get globalNetworkId() {
    return this.getStringAttribute('global_network_id');
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

  // transit_gateway_arn - computed: true, optional: false, required: false
  public get transitGatewayArn() {
    return this.getStringAttribute('transit_gateway_arn');
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
