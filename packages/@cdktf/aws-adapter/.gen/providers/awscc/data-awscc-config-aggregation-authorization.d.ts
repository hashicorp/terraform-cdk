import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccConfigAggregationAuthorizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/config_aggregation_authorization.html#id DataAwsccConfigAggregationAuthorization#id}
    */
    readonly id: string;
}
export declare class DataAwsccConfigAggregationAuthorizationTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccConfigAggregationAuthorizationTagsToTerraform(struct?: DataAwsccConfigAggregationAuthorizationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/config_aggregation_authorization.html awscc_config_aggregation_authorization}
*/
export declare class DataAwsccConfigAggregationAuthorization extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/config_aggregation_authorization.html awscc_config_aggregation_authorization} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccConfigAggregationAuthorizationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccConfigAggregationAuthorizationConfig);
    get aggregationAuthorizationArn(): string;
    get authorizedAccountId(): string;
    get authorizedAwsRegion(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
