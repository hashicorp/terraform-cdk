// https://www.terraform.io/docs/providers/awscc/d/athena_prepared_statement.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
export class DataAwsccAthenaPreparedStatement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_athena_prepared_statement";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/athena_prepared_statement.html awscc_athena_prepared_statement} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAthenaPreparedStatementConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAthenaPreparedStatementConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_athena_prepared_statement',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // query_statement - computed: true, optional: false, required: false
  public get queryStatement() {
    return this.getStringAttribute('query_statement');
  }

  // statement_name - computed: true, optional: false, required: false
  public get statementName() {
    return this.getStringAttribute('statement_name');
  }

  // work_group - computed: true, optional: false, required: false
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
