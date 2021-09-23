// https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_control_panel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRoute53RecoverycontrolControlPanelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_control_panel.html#id DataAwsccRoute53RecoverycontrolControlPanel#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_control_panel.html awscc_route53recoverycontrol_control_panel}
*/
export class DataAwsccRoute53RecoverycontrolControlPanel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53recoverycontrol_control_panel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_control_panel.html awscc_route53recoverycontrol_control_panel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53RecoverycontrolControlPanelConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoverycontrolControlPanelConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_arn - computed: true, optional: false, required: false
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }

  // control_panel_arn - computed: true, optional: false, required: false
  public get controlPanelArn() {
    return this.getStringAttribute('control_panel_arn');
  }

  // default_control_panel - computed: true, optional: false, required: false
  public get defaultControlPanel() {
    return this.getBooleanAttribute('default_control_panel');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
