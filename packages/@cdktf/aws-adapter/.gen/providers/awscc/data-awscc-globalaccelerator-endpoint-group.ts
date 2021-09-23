// https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_endpoint_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccGlobalacceleratorEndpointGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_endpoint_group.html#id DataAwsccGlobalacceleratorEndpointGroup#id}
  */
  readonly id: string;
}
export class DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations extends cdktf.ComplexComputedList {

  // client_ip_preservation_enabled - computed: true, optional: false, required: false
  public get clientIpPreservationEnabled() {
    return this.getBooleanAttribute('client_ip_preservation_enabled');
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export function dataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsToTerraform(struct?: DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_ip_preservation_enabled: cdktf.booleanToTerraform(struct!.clientIpPreservationEnabled),
    endpoint_id: cdktf.stringToTerraform(struct!.endpointId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export class DataAwsccGlobalacceleratorEndpointGroupPortOverrides extends cdktf.ComplexComputedList {

  // endpoint_port - computed: true, optional: false, required: false
  public get endpointPort() {
    return this.getNumberAttribute('endpoint_port');
  }

  // listener_port - computed: true, optional: false, required: false
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
}

export function dataAwsccGlobalacceleratorEndpointGroupPortOverridesToTerraform(struct?: DataAwsccGlobalacceleratorEndpointGroupPortOverrides): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_port: cdktf.numberToTerraform(struct!.endpointPort),
    listener_port: cdktf.numberToTerraform(struct!.listenerPort),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_endpoint_group.html awscc_globalaccelerator_endpoint_group}
*/
export class DataAwsccGlobalacceleratorEndpointGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_globalaccelerator_endpoint_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_endpoint_group.html awscc_globalaccelerator_endpoint_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGlobalacceleratorEndpointGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGlobalacceleratorEndpointGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_globalaccelerator_endpoint_group',
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

  // endpoint_configurations - computed: true, optional: false, required: false
  public get endpointConfigurations() {
    return this.interpolationForAttribute('endpoint_configurations') as any;
  }

  // endpoint_group_arn - computed: true, optional: false, required: false
  public get endpointGroupArn() {
    return this.getStringAttribute('endpoint_group_arn');
  }

  // endpoint_group_region - computed: true, optional: false, required: false
  public get endpointGroupRegion() {
    return this.getStringAttribute('endpoint_group_region');
  }

  // health_check_interval_seconds - computed: true, optional: false, required: false
  public get healthCheckIntervalSeconds() {
    return this.getNumberAttribute('health_check_interval_seconds');
  }

  // health_check_path - computed: true, optional: false, required: false
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }

  // health_check_port - computed: true, optional: false, required: false
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }

  // health_check_protocol - computed: true, optional: false, required: false
  public get healthCheckProtocol() {
    return this.getStringAttribute('health_check_protocol');
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

  // port_overrides - computed: true, optional: false, required: false
  public get portOverrides() {
    return this.interpolationForAttribute('port_overrides') as any;
  }

  // threshold_count - computed: true, optional: false, required: false
  public get thresholdCount() {
    return this.getNumberAttribute('threshold_count');
  }

  // traffic_dial_percentage - computed: true, optional: false, required: false
  public get trafficDialPercentage() {
    return this.getNumberAttribute('traffic_dial_percentage');
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
