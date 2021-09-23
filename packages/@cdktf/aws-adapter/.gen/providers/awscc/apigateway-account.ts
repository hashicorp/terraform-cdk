// https://www.terraform.io/docs/providers/awscc/r/apigateway_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigatewayAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of an IAM role that has write access to CloudWatch Logs in your account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_account.html#cloudwatch_role_arn ApigatewayAccount#cloudwatch_role_arn}
  */
  readonly cloudwatchRoleArn?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_account.html awscc_apigateway_account}
*/
export class ApigatewayAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_apigateway_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_account.html awscc_apigateway_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigatewayAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApigatewayAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigateway_account',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cloudwatchRoleArn = config.cloudwatchRoleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloudwatch_role_arn - computed: false, optional: true, required: false
  private _cloudwatchRoleArn?: string;
  public get cloudwatchRoleArn() {
    return this.getStringAttribute('cloudwatch_role_arn');
  }
  public set cloudwatchRoleArn(value: string ) {
    this._cloudwatchRoleArn = value;
  }
  public resetCloudwatchRoleArn() {
    this._cloudwatchRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchRoleArnInput() {
    return this._cloudwatchRoleArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloudwatch_role_arn: cdktf.stringToTerraform(this._cloudwatchRoleArn),
    };
  }
}
