// https://www.terraform.io/docs/providers/awscc/r/amplify_app.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmplifyAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#access_token AmplifyApp#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}
  */
  readonly autoBranchCreationConfig?: AmplifyAppAutoBranchCreationConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#basic_auth_config AmplifyApp#basic_auth_config}
  */
  readonly basicAuthConfig?: AmplifyAppBasicAuthConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#build_spec AmplifyApp#build_spec}
  */
  readonly buildSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#custom_headers AmplifyApp#custom_headers}
  */
  readonly customHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#custom_rules AmplifyApp#custom_rules}
  */
  readonly customRules?: AmplifyAppCustomRules[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#description AmplifyApp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}
  */
  readonly enableBranchAutoDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#environment_variables AmplifyApp#environment_variables}
  */
  readonly environmentVariables?: AmplifyAppEnvironmentVariables[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#iam_service_role AmplifyApp#iam_service_role}
  */
  readonly iamServiceRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#name AmplifyApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#oauth_token AmplifyApp#oauth_token}
  */
  readonly oauthToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#repository AmplifyApp#repository}
  */
  readonly repository?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#tags AmplifyApp#tags}
  */
  readonly tags?: AmplifyAppTags[];
}
export interface AmplifyAppAutoBranchCreationConfigBasicAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#enable_basic_auth AmplifyApp#enable_basic_auth}
  */
  readonly enableBasicAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#password AmplifyApp#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#username AmplifyApp#username}
  */
  readonly username?: string;
}

export function amplifyAppAutoBranchCreationConfigBasicAuthConfigToTerraform(struct?: AmplifyAppAutoBranchCreationConfigBasicAuthConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_basic_auth: cdktf.booleanToTerraform(struct!.enableBasicAuth),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface AmplifyAppAutoBranchCreationConfigEnvironmentVariables {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#name AmplifyApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#value AmplifyApp#value}
  */
  readonly value: string;
}

export function amplifyAppAutoBranchCreationConfigEnvironmentVariablesToTerraform(struct?: AmplifyAppAutoBranchCreationConfigEnvironmentVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AmplifyAppAutoBranchCreationConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}
  */
  readonly autoBranchCreationPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#basic_auth_config AmplifyApp#basic_auth_config}
  */
  readonly basicAuthConfig?: AmplifyAppAutoBranchCreationConfigBasicAuthConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#build_spec AmplifyApp#build_spec}
  */
  readonly buildSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}
  */
  readonly enableAutoBranchCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#enable_auto_build AmplifyApp#enable_auto_build}
  */
  readonly enableAutoBuild?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#enable_performance_mode AmplifyApp#enable_performance_mode}
  */
  readonly enablePerformanceMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}
  */
  readonly enablePullRequestPreview?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#environment_variables AmplifyApp#environment_variables}
  */
  readonly environmentVariables?: AmplifyAppAutoBranchCreationConfigEnvironmentVariables[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#pull_request_environment_name AmplifyApp#pull_request_environment_name}
  */
  readonly pullRequestEnvironmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#stage AmplifyApp#stage}
  */
  readonly stage?: string;
}

export function amplifyAppAutoBranchCreationConfigToTerraform(struct?: AmplifyAppAutoBranchCreationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_branch_creation_patterns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.autoBranchCreationPatterns),
    basic_auth_config: amplifyAppAutoBranchCreationConfigBasicAuthConfigToTerraform(struct!.basicAuthConfig),
    build_spec: cdktf.stringToTerraform(struct!.buildSpec),
    enable_auto_branch_creation: cdktf.booleanToTerraform(struct!.enableAutoBranchCreation),
    enable_auto_build: cdktf.booleanToTerraform(struct!.enableAutoBuild),
    enable_performance_mode: cdktf.booleanToTerraform(struct!.enablePerformanceMode),
    enable_pull_request_preview: cdktf.booleanToTerraform(struct!.enablePullRequestPreview),
    environment_variables: cdktf.listMapper(amplifyAppAutoBranchCreationConfigEnvironmentVariablesToTerraform)(struct!.environmentVariables),
    pull_request_environment_name: cdktf.stringToTerraform(struct!.pullRequestEnvironmentName),
    stage: cdktf.stringToTerraform(struct!.stage),
  }
}

export interface AmplifyAppBasicAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#enable_basic_auth AmplifyApp#enable_basic_auth}
  */
  readonly enableBasicAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#password AmplifyApp#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#username AmplifyApp#username}
  */
  readonly username?: string;
}

export function amplifyAppBasicAuthConfigToTerraform(struct?: AmplifyAppBasicAuthConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_basic_auth: cdktf.booleanToTerraform(struct!.enableBasicAuth),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface AmplifyAppCustomRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#condition AmplifyApp#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#source AmplifyApp#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#status AmplifyApp#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#target AmplifyApp#target}
  */
  readonly target: string;
}

export function amplifyAppCustomRulesToTerraform(struct?: AmplifyAppCustomRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    source: cdktf.stringToTerraform(struct!.source),
    status: cdktf.stringToTerraform(struct!.status),
    target: cdktf.stringToTerraform(struct!.target),
  }
}

export interface AmplifyAppEnvironmentVariables {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#name AmplifyApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#value AmplifyApp#value}
  */
  readonly value: string;
}

export function amplifyAppEnvironmentVariablesToTerraform(struct?: AmplifyAppEnvironmentVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AmplifyAppTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#key AmplifyApp#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html#value AmplifyApp#value}
  */
  readonly value: string;
}

export function amplifyAppTagsToTerraform(struct?: AmplifyAppTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html awscc_amplify_app}
*/
export class AmplifyApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_amplify_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html awscc_amplify_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmplifyAppConfig
  */
  public constructor(scope: Construct, id: string, config: AmplifyAppConfig) {
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
    this._accessToken = config.accessToken;
    this._autoBranchCreationConfig = config.autoBranchCreationConfig;
    this._basicAuthConfig = config.basicAuthConfig;
    this._buildSpec = config.buildSpec;
    this._customHeaders = config.customHeaders;
    this._customRules = config.customRules;
    this._description = config.description;
    this._enableBranchAutoDeletion = config.enableBranchAutoDeletion;
    this._environmentVariables = config.environmentVariables;
    this._iamServiceRole = config.iamServiceRole;
    this._name = config.name;
    this._oauthToken = config.oauthToken;
    this._repository = config.repository;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string;
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string ) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken
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

  // auto_branch_creation_config - computed: false, optional: true, required: false
  private _autoBranchCreationConfig?: AmplifyAppAutoBranchCreationConfig;
  public get autoBranchCreationConfig() {
    return this.interpolationForAttribute('auto_branch_creation_config') as any;
  }
  public set autoBranchCreationConfig(value: AmplifyAppAutoBranchCreationConfig ) {
    this._autoBranchCreationConfig = value;
  }
  public resetAutoBranchCreationConfig() {
    this._autoBranchCreationConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBranchCreationConfigInput() {
    return this._autoBranchCreationConfig
  }

  // basic_auth_config - computed: false, optional: true, required: false
  private _basicAuthConfig?: AmplifyAppBasicAuthConfig;
  public get basicAuthConfig() {
    return this.interpolationForAttribute('basic_auth_config') as any;
  }
  public set basicAuthConfig(value: AmplifyAppBasicAuthConfig ) {
    this._basicAuthConfig = value;
  }
  public resetBasicAuthConfig() {
    this._basicAuthConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthConfigInput() {
    return this._basicAuthConfig
  }

  // build_spec - computed: false, optional: true, required: false
  private _buildSpec?: string;
  public get buildSpec() {
    return this.getStringAttribute('build_spec');
  }
  public set buildSpec(value: string ) {
    this._buildSpec = value;
  }
  public resetBuildSpec() {
    this._buildSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildSpecInput() {
    return this._buildSpec
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders?: string;
  public get customHeaders() {
    return this.getStringAttribute('custom_headers');
  }
  public set customHeaders(value: string ) {
    this._customHeaders = value;
  }
  public resetCustomHeaders() {
    this._customHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders
  }

  // custom_rules - computed: false, optional: true, required: false
  private _customRules?: AmplifyAppCustomRules[];
  public get customRules() {
    return this.interpolationForAttribute('custom_rules') as any;
  }
  public set customRules(value: AmplifyAppCustomRules[] ) {
    this._customRules = value;
  }
  public resetCustomRules() {
    this._customRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRulesInput() {
    return this._customRules
  }

  // default_domain - computed: true, optional: false, required: false
  public get defaultDomain() {
    return this.getStringAttribute('default_domain');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // enable_branch_auto_deletion - computed: false, optional: true, required: false
  private _enableBranchAutoDeletion?: boolean | cdktf.IResolvable;
  public get enableBranchAutoDeletion() {
    return this.getBooleanAttribute('enable_branch_auto_deletion');
  }
  public set enableBranchAutoDeletion(value: boolean | cdktf.IResolvable ) {
    this._enableBranchAutoDeletion = value;
  }
  public resetEnableBranchAutoDeletion() {
    this._enableBranchAutoDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBranchAutoDeletionInput() {
    return this._enableBranchAutoDeletion
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: AmplifyAppEnvironmentVariables[];
  public get environmentVariables() {
    return this.interpolationForAttribute('environment_variables') as any;
  }
  public set environmentVariables(value: AmplifyAppEnvironmentVariables[] ) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables
  }

  // iam_service_role - computed: false, optional: true, required: false
  private _iamServiceRole?: string;
  public get iamServiceRole() {
    return this.getStringAttribute('iam_service_role');
  }
  public set iamServiceRole(value: string ) {
    this._iamServiceRole = value;
  }
  public resetIamServiceRole() {
    this._iamServiceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamServiceRoleInput() {
    return this._iamServiceRole
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // oauth_token - computed: false, optional: true, required: false
  private _oauthToken?: string;
  public get oauthToken() {
    return this.getStringAttribute('oauth_token');
  }
  public set oauthToken(value: string ) {
    this._oauthToken = value;
  }
  public resetOauthToken() {
    this._oauthToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenInput() {
    return this._oauthToken
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string;
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string ) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: AmplifyAppTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: AmplifyAppTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token: cdktf.stringToTerraform(this._accessToken),
      auto_branch_creation_config: amplifyAppAutoBranchCreationConfigToTerraform(this._autoBranchCreationConfig),
      basic_auth_config: amplifyAppBasicAuthConfigToTerraform(this._basicAuthConfig),
      build_spec: cdktf.stringToTerraform(this._buildSpec),
      custom_headers: cdktf.stringToTerraform(this._customHeaders),
      custom_rules: cdktf.listMapper(amplifyAppCustomRulesToTerraform)(this._customRules),
      description: cdktf.stringToTerraform(this._description),
      enable_branch_auto_deletion: cdktf.booleanToTerraform(this._enableBranchAutoDeletion),
      environment_variables: cdktf.listMapper(amplifyAppEnvironmentVariablesToTerraform)(this._environmentVariables),
      iam_service_role: cdktf.stringToTerraform(this._iamServiceRole),
      name: cdktf.stringToTerraform(this._name),
      oauth_token: cdktf.stringToTerraform(this._oauthToken),
      repository: cdktf.stringToTerraform(this._repository),
      tags: cdktf.listMapper(amplifyAppTagsToTerraform)(this._tags),
    };
  }
}
