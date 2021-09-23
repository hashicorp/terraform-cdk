import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNetworkfirewallLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_logging_configuration.html#id DataAwsccNetworkfirewallLoggingConfiguration#id}
    */
    readonly id: string;
}
export declare class DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs extends cdktf.ComplexComputedList {
    get logDestination(): any;
    get logDestinationType(): string;
    get logType(): string;
}
export declare function dataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsToTerraform(struct?: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs): any;
export declare class DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration extends cdktf.ComplexComputedList {
    get logDestinationConfigs(): any;
}
export declare function dataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationToTerraform(struct?: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_logging_configuration.html awscc_networkfirewall_logging_configuration}
*/
export declare class DataAwsccNetworkfirewallLoggingConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_logging_configuration.html awscc_networkfirewall_logging_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNetworkfirewallLoggingConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccNetworkfirewallLoggingConfigurationConfig);
    get firewallArn(): string;
    get firewallName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get loggingConfiguration(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
