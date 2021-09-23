import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
    readonly logDestination: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_logging_configuration.html#log_destination_type NetworkfirewallLoggingConfiguration#log_destination_type}
    */
    readonly logDestinationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_logging_configuration.html#log_type NetworkfirewallLoggingConfiguration#log_type}
    */
    readonly logType: string;
}
export declare function networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsToTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs): any;
export interface NetworkfirewallLoggingConfigurationLoggingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_logging_configuration.html#log_destination_configs NetworkfirewallLoggingConfiguration#log_destination_configs}
    */
    readonly logDestinationConfigs: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs[];
}
export declare function networkfirewallLoggingConfigurationLoggingConfigurationToTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_logging_configuration.html awscc_networkfirewall_logging_configuration}
*/
export declare class NetworkfirewallLoggingConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_logging_configuration.html awscc_networkfirewall_logging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallLoggingConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: NetworkfirewallLoggingConfigurationConfig);
    private _firewallArn;
    get firewallArn(): string;
    set firewallArn(value: string);
    get firewallArnInput(): string;
    private _firewallName?;
    get firewallName(): string;
    set firewallName(value: string);
    resetFirewallName(): void;
    get firewallNameInput(): string | undefined;
    get id(): string;
    private _loggingConfiguration;
    get loggingConfiguration(): NetworkfirewallLoggingConfigurationLoggingConfiguration;
    set loggingConfiguration(value: NetworkfirewallLoggingConfigurationLoggingConfiguration);
    get loggingConfigurationInput(): NetworkfirewallLoggingConfigurationLoggingConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
