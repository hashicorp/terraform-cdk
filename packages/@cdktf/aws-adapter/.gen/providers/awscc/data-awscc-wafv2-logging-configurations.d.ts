import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccWafv2LoggingConfigurationsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_logging_configurations.html awscc_wafv2_logging_configurations}
*/
export declare class DataAwsccWafv2LoggingConfigurations extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_logging_configurations.html awscc_wafv2_logging_configurations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccWafv2LoggingConfigurationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccWafv2LoggingConfigurationsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
