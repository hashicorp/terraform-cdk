import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AthenaPreparedStatementConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description of the prepared statement.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_prepared_statement.html#description AthenaPreparedStatement#description}
    */
    readonly description?: string;
    /**
    * The query string for the prepared statement.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_prepared_statement.html#query_statement AthenaPreparedStatement#query_statement}
    */
    readonly queryStatement: string;
    /**
    * The name of the prepared statement.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_prepared_statement.html#statement_name AthenaPreparedStatement#statement_name}
    */
    readonly statementName: string;
    /**
    * The name of the workgroup to which the prepared statement belongs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_prepared_statement.html#work_group AthenaPreparedStatement#work_group}
    */
    readonly workGroup: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/athena_prepared_statement.html awscc_athena_prepared_statement}
*/
export declare class AthenaPreparedStatement extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/athena_prepared_statement.html awscc_athena_prepared_statement} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AthenaPreparedStatementConfig
    */
    constructor(scope: Construct, id: string, config: AthenaPreparedStatementConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _queryStatement;
    get queryStatement(): string;
    set queryStatement(value: string);
    get queryStatementInput(): string;
    private _statementName;
    get statementName(): string;
    set statementName(value: string);
    get statementNameInput(): string;
    private _workGroup;
    get workGroup(): string;
    set workGroup(value: string);
    get workGroupInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
