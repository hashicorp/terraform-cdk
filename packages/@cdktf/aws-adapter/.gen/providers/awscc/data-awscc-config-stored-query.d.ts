import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccConfigStoredQueryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/config_stored_query.html#id DataAwsccConfigStoredQuery#id}
    */
    readonly id: string;
}
export declare class DataAwsccConfigStoredQueryTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccConfigStoredQueryTagsToTerraform(struct?: DataAwsccConfigStoredQueryTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/config_stored_query.html awscc_config_stored_query}
*/
export declare class DataAwsccConfigStoredQuery extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/config_stored_query.html awscc_config_stored_query} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccConfigStoredQueryConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccConfigStoredQueryConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get queryArn(): string;
    get queryDescription(): string;
    get queryExpression(): string;
    get queryId(): string;
    get queryName(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
