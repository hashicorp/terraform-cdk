import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccConfigAggregationAuthorizationsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/config_aggregation_authorizations.html awscc_config_aggregation_authorizations}
*/
export declare class DataAwsccConfigAggregationAuthorizations extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/config_aggregation_authorizations.html awscc_config_aggregation_authorizations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccConfigAggregationAuthorizationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccConfigAggregationAuthorizationsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
