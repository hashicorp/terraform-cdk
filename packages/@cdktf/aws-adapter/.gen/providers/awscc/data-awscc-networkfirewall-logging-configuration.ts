// https://www.terraform.io/docs/providers/awscc/d/networkfirewall_logging_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccNetworkfirewallLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_logging_configuration.html#id DataAwsccNetworkfirewallLoggingConfiguration#id}
  */
  readonly id: string;
}
export class DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs extends cdktf.ComplexComputedList {

  // log_destination - computed: true, optional: false, required: false
  public get logDestination() {
    return this.interpolationForAttribute('log_destination') as any;
  }

  // log_destination_type - computed: true, optional: false, required: false
  public get logDestinationType() {
    return this.getStringAttribute('log_destination_type');
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }
}

export function dataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsToTerraform(struct?: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_destination: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.logDestination),
    log_destination_type: cdktf.stringToTerraform(struct!.logDestinationType),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}

export class DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration extends cdktf.ComplexComputedList {

  // log_destination_configs - computed: true, optional: false, required: false
  public get logDestinationConfigs() {
    return this.interpolationForAttribute('log_destination_configs') as any;
  }
}

export function dataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationToTerraform(struct?: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_destination_configs: cdktf.listMapper(dataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsToTerraform)(struct!.logDestinationConfigs),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_logging_configuration.html awscc_networkfirewall_logging_configuration}
*/
export class DataAwsccNetworkfirewallLoggingConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_networkfirewall_logging_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_logging_configuration.html awscc_networkfirewall_logging_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNetworkfirewallLoggingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNetworkfirewallLoggingConfigurationConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // firewall_arn - computed: true, optional: false, required: false
  public get firewallArn() {
    return this.getStringAttribute('firewall_arn');
  }

  // firewall_name - computed: true, optional: false, required: false
  public get firewallName() {
    return this.getStringAttribute('firewall_name');
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

  // logging_configuration - computed: true, optional: false, required: false
  public get loggingConfiguration() {
    return this.interpolationForAttribute('logging_configuration') as any;
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
