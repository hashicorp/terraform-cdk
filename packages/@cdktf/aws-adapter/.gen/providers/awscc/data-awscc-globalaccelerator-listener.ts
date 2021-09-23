// https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_listener.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccGlobalacceleratorListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_listener.html#id DataAwsccGlobalacceleratorListener#id}
  */
  readonly id: string;
}
export class DataAwsccGlobalacceleratorListenerPortRanges extends cdktf.ComplexComputedList {

  // from_port - computed: true, optional: false, required: false
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
}

export function dataAwsccGlobalacceleratorListenerPortRangesToTerraform(struct?: DataAwsccGlobalacceleratorListenerPortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_listener.html awscc_globalaccelerator_listener}
*/
export class DataAwsccGlobalacceleratorListener extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_globalaccelerator_listener";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_listener.html awscc_globalaccelerator_listener} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGlobalacceleratorListenerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGlobalacceleratorListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_globalaccelerator_listener',
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

  // accelerator_arn - computed: true, optional: false, required: false
  public get acceleratorArn() {
    return this.getStringAttribute('accelerator_arn');
  }

  // client_affinity - computed: true, optional: false, required: false
  public get clientAffinity() {
    return this.getStringAttribute('client_affinity');
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

  // listener_arn - computed: true, optional: false, required: false
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }

  // port_ranges - computed: true, optional: false, required: false
  public get portRanges() {
    return this.interpolationForAttribute('port_ranges') as any;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
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
