// https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_routing_control.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRoute53RecoverycontrolRoutingControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_routing_control.html#id DataAwsccRoute53RecoverycontrolRoutingControl#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_routing_control.html awscc_route53recoverycontrol_routing_control}
*/
export class DataAwsccRoute53RecoverycontrolRoutingControl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53recoverycontrol_routing_control";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_routing_control.html awscc_route53recoverycontrol_routing_control} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53RecoverycontrolRoutingControlConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoverycontrolRoutingControlConfig) {
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
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
