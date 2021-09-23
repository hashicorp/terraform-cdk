// https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmplifyBranchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#app_id AmplifyBranch#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#basic_auth_config AmplifyBranch#basic_auth_config}
  */
  readonly basicAuthConfig?: AmplifyBranchBasicAuthConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#branch_name AmplifyBranch#branch_name}
  */
  readonly branchName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#build_spec AmplifyBranch#build_spec}
  */
  readonly buildSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#description AmplifyBranch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#enable_auto_build AmplifyBranch#enable_auto_build}
  */
  readonly enableAutoBuild?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#enable_performance_mode AmplifyBranch#enable_performance_mode}
  */
  readonly enablePerformanceMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}
  */
  readonly enablePullRequestPreview?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#environment_variables AmplifyBranch#environment_variables}
  */
  readonly environmentVariables?: AmplifyBranchEnvironmentVariables[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#pull_request_environment_name AmplifyBranch#pull_request_environment_name}
  */
  readonly pullRequestEnvironmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#stage AmplifyBranch#stage}
  */
  readonly stage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#tags AmplifyBranch#tags}
  */
  readonly tags?: AmplifyBranchTags[];
}
export interface AmplifyBranchBasicAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#enable_basic_auth AmplifyBranch#enable_basic_auth}
  */
  readonly enableBasicAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#password AmplifyBranch#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#username AmplifyBranch#username}
  */
  readonly username: string;
}

export function amplifyBranchBasicAuthConfigToTerraform(struct?: AmplifyBranchBasicAuthConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_basic_auth: cdktf.booleanToTerraform(struct!.enableBasicAuth),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface AmplifyBranchEnvironmentVariables {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#name AmplifyBranch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#value AmplifyBranch#value}
  */
  readonly value: string;
}

export function amplifyBranchEnvironmentVariablesToTerraform(struct?: AmplifyBranchEnvironmentVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AmplifyBranchTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#key AmplifyBranch#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html#value AmplifyBranch#value}
  */
  readonly value: string;
}

export function amplifyBranchTagsToTerraform(struct?: AmplifyBranchTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html awscc_amplify_branch}
*/
export class AmplifyBranch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_amplify_branch";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html awscc_amplify_branch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmplifyBranchConfig
  */
  public constructor(scope: Construct, id: string, config: AmplifyBranchConfig) {
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
    this._appId = config.appId;
    this._basicAuthConfig = config.basicAuthConfig;
    this._branchName = config.branchName;
    this._buildSpec = config.buildSpec;
    this._description = config.description;
    this._enableAutoBuild = config.enableAutoBuild;
    this._enablePerformanceMode = config.enablePerformanceMode;
    this._enablePullRequestPreview = config.enablePullRequestPreview;
    this._environmentVariables = config.environmentVariables;
    this._pullRequestEnvironmentName = config.pullRequestEnvironmentName;
    this._stage = config.stage;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId: string;
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // basic_auth_config - computed: false, optional: true, required: false
  private _basicAuthConfig?: AmplifyBranchBasicAuthConfig;
  public get basicAuthConfig() {
    return this.interpolationForAttribute('basic_auth_config') as any;
  }
  public set basicAuthConfig(value: AmplifyBranchBasicAuthConfig ) {
    this._basicAuthConfig = value;
  }
  public resetBasicAuthConfig() {
    this._basicAuthConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthConfigInput() {
    return this._basicAuthConfig
  }

  // branch_name - computed: false, optional: false, required: true
  private _branchName: string;
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName
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

  // enable_auto_build - computed: false, optional: true, required: false
  private _enableAutoBuild?: boolean | cdktf.IResolvable;
  public get enableAutoBuild() {
    return this.getBooleanAttribute('enable_auto_build');
  }
  public set enableAutoBuild(value: boolean | cdktf.IResolvable ) {
    this._enableAutoBuild = value;
  }
  public resetEnableAutoBuild() {
    this._enableAutoBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoBuildInput() {
    return this._enableAutoBuild
  }

  // enable_performance_mode - computed: false, optional: true, required: false
  private _enablePerformanceMode?: boolean | cdktf.IResolvable;
  public get enablePerformanceMode() {
    return this.getBooleanAttribute('enable_performance_mode');
  }
  public set enablePerformanceMode(value: boolean | cdktf.IResolvable ) {
    this._enablePerformanceMode = value;
  }
  public resetEnablePerformanceMode() {
    this._enablePerformanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePerformanceModeInput() {
    return this._enablePerformanceMode
  }

  // enable_pull_request_preview - computed: false, optional: true, required: false
  private _enablePullRequestPreview?: boolean | cdktf.IResolvable;
  public get enablePullRequestPreview() {
    return this.getBooleanAttribute('enable_pull_request_preview');
  }
  public set enablePullRequestPreview(value: boolean | cdktf.IResolvable ) {
    this._enablePullRequestPreview = value;
  }
  public resetEnablePullRequestPreview() {
    this._enablePullRequestPreview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePullRequestPreviewInput() {
    return this._enablePullRequestPreview
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: AmplifyBranchEnvironmentVariables[];
  public get environmentVariables() {
    return this.interpolationForAttribute('environment_variables') as any;
  }
  public set environmentVariables(value: AmplifyBranchEnvironmentVariables[] ) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pull_request_environment_name - computed: false, optional: true, required: false
  private _pullRequestEnvironmentName?: string;
  public get pullRequestEnvironmentName() {
    return this.getStringAttribute('pull_request_environment_name');
  }
  public set pullRequestEnvironmentName(value: string ) {
    this._pullRequestEnvironmentName = value;
  }
  public resetPullRequestEnvironmentName() {
    this._pullRequestEnvironmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestEnvironmentNameInput() {
    return this._pullRequestEnvironmentName
  }

  // stage - computed: false, optional: true, required: false
  private _stage?: string;
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string ) {
    this._stage = value;
  }
  public resetStage() {
    this._stage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: AmplifyBranchTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: AmplifyBranchTags[] ) {
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
      app_id: cdktf.stringToTerraform(this._appId),
      basic_auth_config: amplifyBranchBasicAuthConfigToTerraform(this._basicAuthConfig),
      branch_name: cdktf.stringToTerraform(this._branchName),
      build_spec: cdktf.stringToTerraform(this._buildSpec),
      description: cdktf.stringToTerraform(this._description),
      enable_auto_build: cdktf.booleanToTerraform(this._enableAutoBuild),
      enable_performance_mode: cdktf.booleanToTerraform(this._enablePerformanceMode),
      enable_pull_request_preview: cdktf.booleanToTerraform(this._enablePullRequestPreview),
      environment_variables: cdktf.listMapper(amplifyBranchEnvironmentVariablesToTerraform)(this._environmentVariables),
      pull_request_environment_name: cdktf.stringToTerraform(this._pullRequestEnvironmentName),
      stage: cdktf.stringToTerraform(this._stage),
      tags: cdktf.listMapper(amplifyBranchTagsToTerraform)(this._tags),
    };
  }
}
