// https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalacceleratorEndpointGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of endpoint objects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#endpoint_configurations GlobalacceleratorEndpointGroup#endpoint_configurations}
  */
  readonly endpointConfigurations?: GlobalacceleratorEndpointGroupEndpointConfigurations[];
  /**
  * The name of the AWS Region where the endpoint group is located
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}
  */
  readonly endpointGroupRegion: string;
  /**
  * The time in seconds between each health check for an endpoint. Must be a value of 10 or 30
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}
  */
  readonly healthCheckIntervalSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#health_check_path GlobalacceleratorEndpointGroup#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#health_check_port GlobalacceleratorEndpointGroup#health_check_port}
  */
  readonly healthCheckPort?: number;
  /**
  * The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}
  */
  readonly healthCheckProtocol?: string;
  /**
  * The Amazon Resource Name (ARN) of the listener
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#listener_arn GlobalacceleratorEndpointGroup#listener_arn}
  */
  readonly listenerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#port_overrides GlobalacceleratorEndpointGroup#port_overrides}
  */
  readonly portOverrides?: GlobalacceleratorEndpointGroupPortOverrides[];
  /**
  * The number of consecutive health checks required to set the state of the endpoint to unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#threshold_count GlobalacceleratorEndpointGroup#threshold_count}
  */
  readonly thresholdCount?: number;
  /**
  * The percentage of traffic to sent to an AWS Region
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}
  */
  readonly trafficDialPercentage?: number;
}
export interface GlobalacceleratorEndpointGroupEndpointConfigurations {
  /**
  * true if client ip should be preserved
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#client_ip_preservation_enabled GlobalacceleratorEndpointGroup#client_ip_preservation_enabled}
  */
  readonly clientIpPreservationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Id of the endpoint. For Network/Application Load Balancer this value is the ARN.  For EIP, this value is the allocation ID.  For EC2 instances, this is the EC2 instance ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#endpoint_id GlobalacceleratorEndpointGroup#endpoint_id}
  */
  readonly endpointId: string;
  /**
  * The weight for the endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#weight GlobalacceleratorEndpointGroup#weight}
  */
  readonly weight?: number;
}

export function globalacceleratorEndpointGroupEndpointConfigurationsToTerraform(struct?: GlobalacceleratorEndpointGroupEndpointConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_ip_preservation_enabled: cdktf.booleanToTerraform(struct!.clientIpPreservationEnabled),
    endpoint_id: cdktf.stringToTerraform(struct!.endpointId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface GlobalacceleratorEndpointGroupPortOverrides {
  /**
  * A network port number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#endpoint_port GlobalacceleratorEndpointGroup#endpoint_port}
  */
  readonly endpointPort: number;
  /**
  * A network port number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#listener_port GlobalacceleratorEndpointGroup#listener_port}
  */
  readonly listenerPort: number;
}

export function globalacceleratorEndpointGroupPortOverridesToTerraform(struct?: GlobalacceleratorEndpointGroupPortOverrides): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_port: cdktf.numberToTerraform(struct!.endpointPort),
    listener_port: cdktf.numberToTerraform(struct!.listenerPort),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html awscc_globalaccelerator_endpoint_group}
*/
export class GlobalacceleratorEndpointGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_globalaccelerator_endpoint_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html awscc_globalaccelerator_endpoint_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalacceleratorEndpointGroupConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalacceleratorEndpointGroupConfig) {
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
    this._endpointConfigurations = config.endpointConfigurations;
    this._endpointGroupRegion = config.endpointGroupRegion;
    this._healthCheckIntervalSeconds = config.healthCheckIntervalSeconds;
    this._healthCheckPath = config.healthCheckPath;
    this._healthCheckPort = config.healthCheckPort;
    this._healthCheckProtocol = config.healthCheckProtocol;
    this._listenerArn = config.listenerArn;
    this._portOverrides = config.portOverrides;
    this._thresholdCount = config.thresholdCount;
    this._trafficDialPercentage = config.trafficDialPercentage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_configurations - computed: false, optional: true, required: false
  private _endpointConfigurations?: GlobalacceleratorEndpointGroupEndpointConfigurations[];
  public get endpointConfigurations() {
    return this.interpolationForAttribute('endpoint_configurations') as any;
  }
  public set endpointConfigurations(value: GlobalacceleratorEndpointGroupEndpointConfigurations[] ) {
    this._endpointConfigurations = value;
  }
  public resetEndpointConfigurations() {
    this._endpointConfigurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationsInput() {
    return this._endpointConfigurations
  }

  // endpoint_group_arn - computed: true, optional: false, required: false
  public get endpointGroupArn() {
    return this.getStringAttribute('endpoint_group_arn');
  }

  // endpoint_group_region - computed: false, optional: false, required: true
  private _endpointGroupRegion: string;
  public get endpointGroupRegion() {
    return this.getStringAttribute('endpoint_group_region');
  }
  public set endpointGroupRegion(value: string) {
    this._endpointGroupRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointGroupRegionInput() {
    return this._endpointGroupRegion
  }

  // health_check_interval_seconds - computed: true, optional: true, required: false
  private _healthCheckIntervalSeconds?: number;
  public get healthCheckIntervalSeconds() {
    return this.getNumberAttribute('health_check_interval_seconds');
  }
  public set healthCheckIntervalSeconds(value: number) {
    this._healthCheckIntervalSeconds = value;
  }
  public resetHealthCheckIntervalSeconds() {
    this._healthCheckIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalSecondsInput() {
    return this._healthCheckIntervalSeconds
  }

  // health_check_path - computed: true, optional: true, required: false
  private _healthCheckPath?: string;
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string) {
    this._healthCheckPath = value;
  }
  public resetHealthCheckPath() {
    this._healthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPathInput() {
    return this._healthCheckPath
  }

  // health_check_port - computed: true, optional: true, required: false
  private _healthCheckPort?: number;
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort
  }

  // health_check_protocol - computed: true, optional: true, required: false
  private _healthCheckProtocol?: string;
  public get healthCheckProtocol() {
    return this.getStringAttribute('health_check_protocol');
  }
  public set healthCheckProtocol(value: string) {
    this._healthCheckProtocol = value;
  }
  public resetHealthCheckProtocol() {
    this._healthCheckProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckProtocolInput() {
    return this._healthCheckProtocol
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listener_arn - computed: false, optional: false, required: true
  private _listenerArn: string;
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }
  public set listenerArn(value: string) {
    this._listenerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerArnInput() {
    return this._listenerArn
  }

  // port_overrides - computed: false, optional: true, required: false
  private _portOverrides?: GlobalacceleratorEndpointGroupPortOverrides[];
  public get portOverrides() {
    return this.interpolationForAttribute('port_overrides') as any;
  }
  public set portOverrides(value: GlobalacceleratorEndpointGroupPortOverrides[] ) {
    this._portOverrides = value;
  }
  public resetPortOverrides() {
    this._portOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverridesInput() {
    return this._portOverrides
  }

  // threshold_count - computed: true, optional: true, required: false
  private _thresholdCount?: number;
  public get thresholdCount() {
    return this.getNumberAttribute('threshold_count');
  }
  public set thresholdCount(value: number) {
    this._thresholdCount = value;
  }
  public resetThresholdCount() {
    this._thresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdCountInput() {
    return this._thresholdCount
  }

  // traffic_dial_percentage - computed: true, optional: true, required: false
  private _trafficDialPercentage?: number;
  public get trafficDialPercentage() {
    return this.getNumberAttribute('traffic_dial_percentage');
  }
  public set trafficDialPercentage(value: number) {
    this._trafficDialPercentage = value;
  }
  public resetTrafficDialPercentage() {
    this._trafficDialPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDialPercentageInput() {
    return this._trafficDialPercentage
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_configurations: cdktf.listMapper(globalacceleratorEndpointGroupEndpointConfigurationsToTerraform)(this._endpointConfigurations),
      endpoint_group_region: cdktf.stringToTerraform(this._endpointGroupRegion),
      health_check_interval_seconds: cdktf.numberToTerraform(this._healthCheckIntervalSeconds),
      health_check_path: cdktf.stringToTerraform(this._healthCheckPath),
      health_check_port: cdktf.numberToTerraform(this._healthCheckPort),
      health_check_protocol: cdktf.stringToTerraform(this._healthCheckProtocol),
      listener_arn: cdktf.stringToTerraform(this._listenerArn),
      port_overrides: cdktf.listMapper(globalacceleratorEndpointGroupPortOverridesToTerraform)(this._portOverrides),
      threshold_count: cdktf.numberToTerraform(this._thresholdCount),
      traffic_dial_percentage: cdktf.numberToTerraform(this._trafficDialPercentage),
    };
  }
}
