import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AthenaNamedQueryConfig extends cdktf.TerraformMetaArguments {
    /**
    * The database to which the query belongs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_named_query.html#database AthenaNamedQuery#database}
    */
    readonly database: string;
    /**
    * The query description.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_named_query.html#description AthenaNamedQuery#description}
    */
    readonly description?: string;
    /**
    * The query name.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_named_query.html#name AthenaNamedQuery#name}
    */
    readonly name?: string;
    /**
    * The contents of the query with all query statements.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_named_query.html#query_string AthenaNamedQuery#query_string}
    */
    readonly queryString: string;
    /**
    * The name of the workgroup that contains the named query.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_named_query.html#work_group AthenaNamedQuery#work_group}
    */
    readonly workGroup?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/athena_named_query.html awscc_athena_named_query}
*/
export declare class AthenaNamedQuery extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/athena_named_query.html awscc_athena_named_query} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AthenaNamedQueryConfig
    */
    constructor(scope: Construct, id: string, config: AthenaNamedQueryConfig);
    private _database;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get namedQueryId(): string;
    private _queryString;
    get queryString(): string;
    set queryString(value: string);
    get queryStringInput(): string;
    private _workGroup?;
    get workGroup(): string;
    set workGroup(value: string);
    resetWorkGroup(): void;
    get workGroupInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
