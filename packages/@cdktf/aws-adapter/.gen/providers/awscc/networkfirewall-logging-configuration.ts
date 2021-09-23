// https://www.terraform.io/docs/providers/awscc/r/networkfirewall_logging_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkfirewallLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A resource ARN.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_logging_configuration.html#firewall_arn NetworkfirewallLoggingConfiguration#firewall_arn}
  */
  readonly firewallArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_logging_configuration.html#firewall_name NetworkfirewallLoggingConfiguration#firewall_name}
  */
  readonly firewallName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_logging_configuration.html#logging_configuration NetworkfirewallLoggingConfiguration#logging_configuration}
  */
  readonly loggingConfiguration: NetworkfirewallLoggingConfigurationLoggingConfiguration;
}
export interface NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs {
  /**
  * A key-value pair to configure the logDestinations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_logging_configuration.html#log_destination NetworkfirewallLoggingConfiguration#log_destination}
  */
  readonly logDestination: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_logging_configuration.html#log_destination_type NetworkfirewallLoggingConfiguration#log_destination_type}
  */
  readonly logDestinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_logging_configuration.html#log_type NetworkfirewallLoggingConfiguration#log_type}
  */
  readonly logType: string;
}

export function networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsToTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_destination: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.logDestination),
    log_destination_type: cdktf.stringToTerraform(struct!.logDestinationType),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}

export interface NetworkfirewallLoggingConfigurationLoggingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_logging_configuration.html#log_destination_configs NetworkfirewallLoggingConfiguration#log_destination_configs}
  */
  readonly logDestinationConfigs: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs[];
}

export function networkfirewallLoggingConfigurationLoggingConfigurationToTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_destination_configs: cdktf.listMapper(networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsToTerraform)(struct!.logDestinationConfigs),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_logging_configuration.html awscc_networkfirewall_logging_configuration}
*/
export class NetworkfirewallLoggingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_networkfirewall_logging_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_logging_configuration.html awscc_networkfirewall_logging_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkfirewallLoggingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkfirewallLoggingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkfirewall_logging_configuration',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._firewallArn = config.firewallArn;
    this._firewallName = config.firewallName;
    this._loggingConfiguration = config.loggingConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // firewall_arn - computed: false, optional: false, required: true
  private _firewallArn: string;
  public get firewallArn() {
    return this.getStringAttribute('firewall_arn');
  }
  public set firewallArn(value: string) {
    this._firewallArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallArnInput() {
    return this._firewallArn
  }

  // firewall_name - computed: true, optional: true, required: false
  private _firewallName?: string;
  public get firewallName() {
    return this.getStringAttribute('firewall_name');
  }
  public set firewallName(value: string) {
    this._firewallName = value;
  }
  public resetFirewallName() {
    this._firewallName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallNameInput() {
    return this._firewallName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logging_configuration - computed: false, optional: false, required: true
  private _loggingConfiguration: NetworkfirewallLoggingConfigurationLoggingConfiguration;
  public get loggingConfiguration() {
    return this.interpolationForAttribute('logging_configuration') as any;
  }
  public set loggingConfiguration(value: NetworkfirewallLoggingConfigurationLoggingConfiguration) {
    this._loggingConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      firewall_arn: cdktf.stringToTerraform(this._firewallArn),
      firewall_name: cdktf.stringToTerraform(this._firewallName),
      logging_configuration: networkfirewallLoggingConfigurationLoggingConfigurationToTerraform(this._loggingConfiguration),
    };
  }
}
