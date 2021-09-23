// https://www.terraform.io/docs/providers/awscc/r/ec2_egress_only_internet_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2EgressOnlyInternetGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the VPC for which to create the egress-only internet gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_egress_only_internet_gateway.html#vpc_id Ec2EgressOnlyInternetGateway#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_egress_only_internet_gateway.html awscc_ec2_egress_only_internet_gateway}
*/
export class Ec2EgressOnlyInternetGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_egress_only_internet_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_egress_only_internet_gateway.html awscc_ec2_egress_only_internet_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2EgressOnlyInternetGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2EgressOnlyInternetGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_egress_only_internet_gateway',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
