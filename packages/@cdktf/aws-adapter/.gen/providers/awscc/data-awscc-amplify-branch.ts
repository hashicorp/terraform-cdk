// https://www.terraform.io/docs/providers/awscc/d/amplify_branch.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccAmplifyBranchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/amplify_branch.html#id DataAwsccAmplifyBranch#id}
  */
  readonly id: string;
}
export class DataAwsccAmplifyBranchBasicAuthConfig extends cdktf.ComplexComputedList {

  // enable_basic_auth - computed: true, optional: false, required: false
  public get enableBasicAuth() {
    return this.getBooleanAttribute('enable_basic_auth');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export function dataAwsccAmplifyBranchBasicAuthConfigToTerraform(struct?: DataAwsccAmplifyBranchBasicAuthConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_basic_auth: cdktf.booleanToTerraform(struct!.enableBasicAuth),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DataAwsccAmplifyBranchEnvironmentVariables extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccAmplifyBranchEnvironmentVariablesToTerraform(struct?: DataAwsccAmplifyBranchEnvironmentVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccAmplifyBranchTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccAmplifyBranchTagsToTerraform(struct?: DataAwsccAmplifyBranchTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/amplify_branch.html awscc_amplify_branch}
*/
export class DataAwsccAmplifyBranch extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_amplify_branch";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/amplify_branch.html awscc_amplify_branch} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAmplifyBranchConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAmplifyBranchConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_amplify_branch',
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

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // basic_auth_config - computed: true, optional: false, required: false
  public get basicAuthConfig() {
    return this.interpolationForAttribute('basic_auth_config') as any;
  }

  // branch_name - computed: true, optional: false, required: false
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }

  // build_spec - computed: true, optional: false, required: false
  public get buildSpec() {
    return this.getStringAttribute('build_spec');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_auto_build - computed: true, optional: false, required: false
  public get enableAutoBuild() {
    return this.getBooleanAttribute('enable_auto_build');
  }

  // enable_performance_mode - computed: true, optional: false, required: false
  public get enablePerformanceMode() {
    return this.getBooleanAttribute('enable_performance_mode');
  }

  // enable_pull_request_preview - computed: true, optional: false, required: false
  public get enablePullRequestPreview() {
    return this.getBooleanAttribute('enable_pull_request_preview');
  }

  // environment_variables - computed: true, optional: false, required: false
  public get environmentVariables() {
    return this.interpolationForAttribute('environment_variables') as any;
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

  // pull_request_environment_name - computed: true, optional: false, required: false
  public get pullRequestEnvironmentName() {
    return this.getStringAttribute('pull_request_environment_name');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
