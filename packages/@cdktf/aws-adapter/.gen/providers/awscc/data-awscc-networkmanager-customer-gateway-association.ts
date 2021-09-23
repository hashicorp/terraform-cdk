// https://www.terraform.io/docs/providers/awscc/d/networkmanager_customer_gateway_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccNetworkmanagerCustomerGatewayAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_customer_gateway_association.html#id DataAwsccNetworkmanagerCustomerGatewayAssociation#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_customer_gateway_association.html awscc_networkmanager_customer_gateway_association}
*/
export class DataAwsccNetworkmanagerCustomerGatewayAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_networkmanager_customer_gateway_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_customer_gateway_association.html awscc_networkmanager_customer_gateway_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNetworkmanagerCustomerGatewayAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNetworkmanagerCustomerGatewayAssociationConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_gateway_arn - computed: true, optional: false, required: false
  public get customerGatewayArn() {
    return this.getStringAttribute('customer_gateway_arn');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

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

  // link_id - computed: true, optional: false, required: false
  public get linkId() {
    return this.getStringAttribute('link_id');
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
