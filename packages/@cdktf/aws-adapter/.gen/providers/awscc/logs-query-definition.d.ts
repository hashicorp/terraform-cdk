import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LogsQueryDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Optionally define specific log groups as part of your query definition
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/logs_query_definition.html#log_group_names LogsQueryDefinition#log_group_names}
    */
    readonly logGroupNames?: string[];
    /**
    * A name for the saved query definition
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/logs_query_definition.html#name LogsQueryDefinition#name}
    */
    readonly name: string;
    /**
    * The query string to use for this definition
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/logs_query_definition.html#query_string LogsQueryDefinition#query_string}
    */
    readonly queryString: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/logs_query_definition.html awscc_logs_query_definition}
*/
export declare class LogsQueryDefinition extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/logs_query_definition.html awscc_logs_query_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LogsQueryDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: LogsQueryDefinitionConfig);
    get id(): string;
    private _logGroupNames?;
    get logGroupNames(): string[];
    set logGroupNames(value: string[]);
    resetLogGroupNames(): void;
    get logGroupNamesInput(): string[] | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get queryDefinitionId(): string;
    private _queryString;
    get queryString(): string;
    set queryString(value: string);
    get queryStringInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
