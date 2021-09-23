// https://www.terraform.io/docs/providers/awscc/d/amplify_app.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccAmplifyAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/amplify_app.html#id DataAwsccAmplifyApp#id}
  */
  readonly id: string;
}
export class DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig extends cdktf.ComplexComputedList {

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

export function dataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigToTerraform(struct?: DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_basic_auth: cdktf.booleanToTerraform(struct!.enableBasicAuth),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesToTerraform(struct?: DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccAmplifyAppAutoBranchCreationConfig extends cdktf.ComplexComputedList {

  // auto_branch_creation_patterns - computed: true, optional: false, required: false
  public get autoBranchCreationPatterns() {
    return this.getListAttribute('auto_branch_creation_patterns');
  }

  // basic_auth_config - computed: true, optional: false, required: false
  public get basicAuthConfig() {
    return this.interpolationForAttribute('basic_auth_config') as any;
  }

  // build_spec - computed: true, optional: false, required: false
  public get buildSpec() {
    return this.getStringAttribute('build_spec');
  }

  // enable_auto_branch_creation - computed: true, optional: false, required: false
  public get enableAutoBranchCreation() {
    return this.getBooleanAttribute('enable_auto_branch_creation');
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

  // pull_request_environment_name - computed: true, optional: false, required: false
  public get pullRequestEnvironmentName() {
    return this.getStringAttribute('pull_request_environment_name');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}

export function dataAwsccAmplifyAppAutoBranchCreationConfigToTerraform(struct?: DataAwsccAmplifyAppAutoBranchCreationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_branch_creation_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.autoBranchCreationPatterns),
    basic_auth_config: dataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigToTerraform(struct!.basicAuthConfig),
    build_spec: cdktf.stringToTerraform(struct!.buildSpec),
    enable_auto_branch_creation: cdktf.booleanToTerraform(struct!.enableAutoBranchCreation),
    enable_auto_build: cdktf.booleanToTerraform(struct!.enableAutoBuild),
    enable_performance_mode: cdktf.booleanToTerraform(struct!.enablePerformanceMode),
    enable_pull_request_preview: cdktf.booleanToTerraform(struct!.enablePullRequestPreview),
    environment_variables: cdktf.listMapper(dataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesToTerraform)(struct!.environmentVariables),
    pull_request_environment_name: cdktf.stringToTerraform(struct!.pullRequestEnvironmentName),
    stage: cdktf.stringToTerraform(struct!.stage),
  }
}

export class DataAwsccAmplifyAppBasicAuthConfig extends cdktf.ComplexComputedList {

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

export function dataAwsccAmplifyAppBasicAuthConfigToTerraform(struct?: DataAwsccAmplifyAppBasicAuthConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_basic_auth: cdktf.booleanToTerraform(struct!.enableBasicAuth),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DataAwsccAmplifyAppCustomRules extends cdktf.ComplexComputedList {

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }
}

export function dataAwsccAmplifyAppCustomRulesToTerraform(struct?: DataAwsccAmplifyAppCustomRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    source: cdktf.stringToTerraform(struct!.source),
    status: cdktf.stringToTerraform(struct!.status),
    target: cdktf.stringToTerraform(struct!.target),
  }
}

export class DataAwsccAmplifyAppEnvironmentVariables extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccAmplifyAppEnvironmentVariablesToTerraform(struct?: DataAwsccAmplifyAppEnvironmentVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccAmplifyAppTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccAmplifyAppTagsToTerraform(struct?: DataAwsccAmplifyAppTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/amplify_app.html awscc_amplify_app}
*/
export class DataAwsccAmplifyApp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_amplify_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/amplify_app.html awscc_amplify_app} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAmplifyAppConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAmplifyAppConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_amplify_app',
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

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_name - computed: true, optional: false, required: false
  public get appName() {
    return this.getStringAttribute('app_name');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_branch_creation_config - computed: true, optional: false, required: false
  public get autoBranchCreationConfig() {
    return this.interpolationForAttribute('auto_branch_creation_config') as any;
  }

  // basic_auth_config - computed: true, optional: false, required: false
  public get basicAuthConfig() {
    return this.interpolationForAttribute('basic_auth_config') as any;
  }

  // build_spec - computed: true, optional: false, required: false
  public get buildSpec() {
    return this.getStringAttribute('build_spec');
  }

  // custom_headers - computed: true, optional: false, required: false
  public get customHeaders() {
    return this.getStringAttribute('custom_headers');
  }

  // custom_rules - computed: true, optional: false, required: false
  public get customRules() {
    return this.interpolationForAttribute('custom_rules') as any;
  }

  // default_domain - computed: true, optional: false, required: false
  public get defaultDomain() {
    return this.getStringAttribute('default_domain');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_branch_auto_deletion - computed: true, optional: false, required: false
  public get enableBranchAutoDeletion() {
    return this.getBooleanAttribute('enable_branch_auto_deletion');
  }

  // environment_variables - computed: true, optional: false, required: false
  public get environmentVariables() {
    return this.interpolationForAttribute('environment_variables') as any;
  }

  // iam_service_role - computed: true, optional: false, required: false
  public get iamServiceRole() {
    return this.getStringAttribute('iam_service_role');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oauth_token - computed: true, optional: false, required: false
  public get oauthToken() {
    return this.getStringAttribute('oauth_token');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
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
