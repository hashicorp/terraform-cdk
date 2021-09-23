import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccConfigConfigurationAggregatorsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/config_configuration_aggregators.html awscc_config_configuration_aggregators}
*/
export declare class DataAwsccConfigConfigurationAggregators extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/config_configuration_aggregators.html awscc_config_configuration_aggregators} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccConfigConfigurationAggregatorsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccConfigConfigurationAggregatorsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
