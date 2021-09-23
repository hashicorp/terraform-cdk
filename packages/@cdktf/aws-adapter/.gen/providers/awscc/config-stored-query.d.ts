import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigStoredQueryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html#query_description ConfigStoredQuery#query_description}
    */
    readonly queryDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html#query_expression ConfigStoredQuery#query_expression}
    */
    readonly queryExpression: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html#query_name ConfigStoredQuery#query_name}
    */
    readonly queryName: string;
    /**
    * The tags for the stored query.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html#tags ConfigStoredQuery#tags}
    */
    readonly tags?: ConfigStoredQueryTags[];
}
export interface ConfigStoredQueryTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html#key ConfigStoredQuery#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html#value ConfigStoredQuery#value}
    */
    readonly value: string;
}
export declare function configStoredQueryTagsToTerraform(struct?: ConfigStoredQueryTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html awscc_config_stored_query}
*/
export declare class ConfigStoredQuery extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html awscc_config_stored_query} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigStoredQueryConfig
    */
    constructor(scope: Construct, id: string, config: ConfigStoredQueryConfig);
    get id(): string;
    get queryArn(): string;
    private _queryDescription?;
    get queryDescription(): string;
    set queryDescription(value: string);
    resetQueryDescription(): void;
    get queryDescriptionInput(): string | undefined;
    private _queryExpression;
    get queryExpression(): string;
    set queryExpression(value: string);
    get queryExpressionInput(): string;
    get queryId(): string;
    private _queryName;
    get queryName(): string;
    set queryName(value: string);
    get queryNameInput(): string;
    private _tags?;
    get tags(): ConfigStoredQueryTags[];
    set tags(value: ConfigStoredQueryTags[]);
    resetTags(): void;
    get tagsInput(): ConfigStoredQueryTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
