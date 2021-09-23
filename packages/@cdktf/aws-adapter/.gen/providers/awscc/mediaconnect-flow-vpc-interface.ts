// https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_vpc_interface.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaconnectFlowVpcInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_vpc_interface.html#flow_arn MediaconnectFlowVpcInterface#flow_arn}
  */
  readonly flowArn: string;
  /**
  * Immutable and has to be a unique against other VpcInterfaces in this Flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_vpc_interface.html#name MediaconnectFlowVpcInterface#name}
  */
  readonly name: string;
  /**
  * Role Arn MediaConnect can assumes to create ENIs in customer's account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_vpc_interface.html#role_arn MediaconnectFlowVpcInterface#role_arn}
  */
  readonly roleArn: string;
  /**
  * Security Group IDs to be used on ENI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_vpc_interface.html#security_group_ids MediaconnectFlowVpcInterface#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Subnet must be in the AZ of the Flow
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_vpc_interface.html#subnet_id MediaconnectFlowVpcInterface#subnet_id}
  */
  readonly subnetId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_vpc_interface.html awscc_mediaconnect_flow_vpc_interface}
*/
export class MediaconnectFlowVpcInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediaconnect_flow_vpc_interface";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_vpc_interface.html awscc_mediaconnect_flow_vpc_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaconnectFlowVpcInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: MediaconnectFlowVpcInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_flow_vpc_interface',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._flowArn = config.flowArn;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._securityGroupIds = config.securityGroupIds;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // flow_arn - computed: false, optional: false, required: true
  private _flowArn: string;
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }
  public set flowArn(value: string) {
    this._flowArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowArnInput() {
    return this._flowArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network_interface_ids - computed: true, optional: false, required: false
  public get networkInterfaceIds() {
    return this.getListAttribute('network_interface_ids');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds: string[];
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      flow_arn: cdktf.stringToTerraform(this._flowArn),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
    };
  }
}
