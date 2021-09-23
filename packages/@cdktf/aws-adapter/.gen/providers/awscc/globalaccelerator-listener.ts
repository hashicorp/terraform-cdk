// https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalacceleratorListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the accelerator.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html#accelerator_arn GlobalacceleratorListener#accelerator_arn}
  */
  readonly acceleratorArn: string;
  /**
  * Client affinity lets you direct all requests from a user to the same endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html#client_affinity GlobalacceleratorListener#client_affinity}
  */
  readonly clientAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html#port_ranges GlobalacceleratorListener#port_ranges}
  */
  readonly portRanges: GlobalacceleratorListenerPortRanges[];
  /**
  * The protocol for the listener.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html#protocol GlobalacceleratorListener#protocol}
  */
  readonly protocol?: string;
}
export interface GlobalacceleratorListenerPortRanges {
  /**
  * A network port number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html#from_port GlobalacceleratorListener#from_port}
  */
  readonly fromPort: number;
  /**
  * A network port number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html#to_port GlobalacceleratorListener#to_port}
  */
  readonly toPort: number;
}

export function globalacceleratorListenerPortRangesToTerraform(struct?: GlobalacceleratorListenerPortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html awscc_globalaccelerator_listener}
*/
export class GlobalacceleratorListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_globalaccelerator_listener";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html awscc_globalaccelerator_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalacceleratorListenerConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalacceleratorListenerConfig) {
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
    this._acceleratorArn = config.acceleratorArn;
    this._clientAffinity = config.clientAffinity;
    this._portRanges = config.portRanges;
    this._protocol = config.protocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerator_arn - computed: false, optional: false, required: true
  private _acceleratorArn: string;
  public get acceleratorArn() {
    return this.getStringAttribute('accelerator_arn');
  }
  public set acceleratorArn(value: string) {
    this._acceleratorArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorArnInput() {
    return this._acceleratorArn
  }

  // client_affinity - computed: true, optional: true, required: false
  private _clientAffinity?: string;
  public get clientAffinity() {
    return this.getStringAttribute('client_affinity');
  }
  public set clientAffinity(value: string) {
    this._clientAffinity = value;
  }
  public resetClientAffinity() {
    this._clientAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAffinityInput() {
    return this._clientAffinity
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listener_arn - computed: true, optional: false, required: false
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }

  // port_ranges - computed: false, optional: false, required: true
  private _portRanges: GlobalacceleratorListenerPortRanges[];
  public get portRanges() {
    return this.interpolationForAttribute('port_ranges') as any;
  }
  public set portRanges(value: GlobalacceleratorListenerPortRanges[]) {
    this._portRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerator_arn: cdktf.stringToTerraform(this._acceleratorArn),
      client_affinity: cdktf.stringToTerraform(this._clientAffinity),
      port_ranges: cdktf.listMapper(globalacceleratorListenerPortRangesToTerraform)(this._portRanges),
      protocol: cdktf.stringToTerraform(this._protocol),
    };
  }
}
