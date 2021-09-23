// https://www.terraform.io/docs/providers/awscc/r/logs_resource_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsResourcePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The policy document
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/logs_resource_policy.html#policy_document LogsResourcePolicy#policy_document}
  */
  readonly policyDocument: string;
  /**
  * A name for resource policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/logs_resource_policy.html#policy_name LogsResourcePolicy#policy_name}
  */
  readonly policyName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/logs_resource_policy.html awscc_logs_resource_policy}
*/
export class LogsResourcePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_logs_resource_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/logs_resource_policy.html awscc_logs_resource_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsResourcePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: LogsResourcePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_logs_resource_policy',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._policyDocument = config.policyDocument;
    this._policyName = config.policyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_document - computed: false, optional: false, required: true
  private _policyDocument: string;
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName: string;
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_document: cdktf.stringToTerraform(this._policyDocument),
      policy_name: cdktf.stringToTerraform(this._policyName),
    };
  }
}
