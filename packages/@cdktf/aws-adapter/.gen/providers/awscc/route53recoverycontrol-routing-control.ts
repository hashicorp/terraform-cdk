// https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_routing_control.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53RecoverycontrolRoutingControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Arn associated with Control Panel
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_routing_control.html#cluster_arn Route53RecoverycontrolRoutingControl#cluster_arn}
  */
  readonly clusterArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the control panel.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_routing_control.html#control_panel_arn Route53RecoverycontrolRoutingControl#control_panel_arn}
  */
  readonly controlPanelArn?: string;
  /**
  * The name of the routing control. You can use any non-white space character in the name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_routing_control.html#name Route53RecoverycontrolRoutingControl#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_routing_control.html awscc_route53recoverycontrol_routing_control}
*/
export class Route53RecoverycontrolRoutingControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53recoverycontrol_routing_control";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_routing_control.html awscc_route53recoverycontrol_routing_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecoverycontrolRoutingControlConfig
  */
  public constructor(scope: Construct, id: string, config: Route53RecoverycontrolRoutingControlConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53recoverycontrol_routing_control',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterArn = config.clusterArn;
    this._controlPanelArn = config.controlPanelArn;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_arn - computed: true, optional: true, required: false
  private _clusterArn?: string;
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  public resetClusterArn() {
    this._clusterArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn
  }

  // control_panel_arn - computed: true, optional: true, required: false
  private _controlPanelArn?: string;
  public get controlPanelArn() {
    return this.getStringAttribute('control_panel_arn');
  }
  public set controlPanelArn(value: string) {
    this._controlPanelArn = value;
  }
  public resetControlPanelArn() {
    this._controlPanelArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPanelArnInput() {
    return this._controlPanelArn
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

  // routing_control_arn - computed: true, optional: false, required: false
  public get routingControlArn() {
    return this.getStringAttribute('routing_control_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_arn: cdktf.stringToTerraform(this._clusterArn),
      control_panel_arn: cdktf.stringToTerraform(this._controlPanelArn),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
