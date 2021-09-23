import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAthenaPreparedStatementConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/athena_prepared_statement.html#id DataAwsccAthenaPreparedStatement#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/athena_prepared_statement.html awscc_athena_prepared_statement}
*/
export declare class DataAwsccAthenaPreparedStatement extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/athena_prepared_statement.html awscc_athena_prepared_statement} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAthenaPreparedStatementConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAthenaPreparedStatementConfig);
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get queryStatement(): string;
    get statementName(): string;
    get workGroup(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
