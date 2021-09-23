// https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_control_panel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53RecoverycontrolControlPanelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster to associate with the Control Panel
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_control_panel.html#cluster_arn Route53RecoverycontrolControlPanel#cluster_arn}
  */
  readonly clusterArn?: string;
  /**
  * The name of the control panel. You can use any non-white space character in the name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_control_panel.html#name Route53RecoverycontrolControlPanel#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_control_panel.html awscc_route53recoverycontrol_control_panel}
*/
export class Route53RecoverycontrolControlPanel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53recoverycontrol_control_panel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_control_panel.html awscc_route53recoverycontrol_control_panel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecoverycontrolControlPanelConfig
  */
  public constructor(scope: Construct, id: string, config: Route53RecoverycontrolControlPanelConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53recoverycontrol_control_panel',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterArn = config.clusterArn;
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

  // control_panel_arn - computed: true, optional: false, required: false
  public get controlPanelArn() {
    return this.getStringAttribute('control_panel_arn');
  }

  // default_control_panel - computed: true, optional: false, required: false
  public get defaultControlPanel() {
    return this.getBooleanAttribute('default_control_panel');
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

  // routing_control_count - computed: true, optional: false, required: false
  public get routingControlCount() {
    return this.getNumberAttribute('routing_control_count');
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
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
