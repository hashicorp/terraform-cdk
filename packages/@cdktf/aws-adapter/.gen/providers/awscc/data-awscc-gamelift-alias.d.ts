import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGameliftAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/gamelift_alias.html#id DataAwsccGameliftAlias#id}
    */
    readonly id: string;
}
export declare class DataAwsccGameliftAliasRoutingStrategy extends cdktf.ComplexComputedList {
    get fleetId(): string;
    get message(): string;
    get type(): string;
}
export declare function dataAwsccGameliftAliasRoutingStrategyToTerraform(struct?: DataAwsccGameliftAliasRoutingStrategy): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/gamelift_alias.html awscc_gamelift_alias}
*/
export declare class DataAwsccGameliftAlias extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/gamelift_alias.html awscc_gamelift_alias} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGameliftAliasConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccGameliftAliasConfig);
    get aliasId(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get routingStrategy(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
