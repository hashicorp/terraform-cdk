// https://www.terraform.io/docs/providers/awscc/r/logs_query_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
export class LogsQueryDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_logs_query_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/logs_query_definition.html awscc_logs_query_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsQueryDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: LogsQueryDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_logs_query_definition',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._logGroupNames = config.logGroupNames;
    this._name = config.name;
    this._queryString = config.queryString;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_group_names - computed: false, optional: true, required: false
  private _logGroupNames?: string[];
  public get logGroupNames() {
    return this.getListAttribute('log_group_names');
  }
  public set logGroupNames(value: string[] ) {
    this._logGroupNames = value;
  }
  public resetLogGroupNames() {
    this._logGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNamesInput() {
    return this._logGroupNames
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // query_definition_id - computed: true, optional: false, required: false
  public get queryDefinitionId() {
    return this.getStringAttribute('query_definition_id');
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString: string;
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._logGroupNames),
      name: cdktf.stringToTerraform(this._name),
      query_string: cdktf.stringToTerraform(this._queryString),
    };
  }
}
