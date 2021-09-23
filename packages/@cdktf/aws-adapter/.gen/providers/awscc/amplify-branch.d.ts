import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function amplifyBranchBasicAuthConfigToTerraform(struct?: AmplifyBranchBasicAuthConfig): any;
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
export declare function amplifyBranchEnvironmentVariablesToTerraform(struct?: AmplifyBranchEnvironmentVariables): any;
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
export declare function amplifyBranchTagsToTerraform(struct?: AmplifyBranchTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html awscc_amplify_branch}
*/
export declare class AmplifyBranch extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/amplify_branch.html awscc_amplify_branch} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyBranchConfig
    */
    constructor(scope: Construct, id: string, config: AmplifyBranchConfig);
    private _appId;
    get appId(): string;
    set appId(value: string);
    get appIdInput(): string;
    get arn(): string;
    private _basicAuthConfig?;
    get basicAuthConfig(): AmplifyBranchBasicAuthConfig;
    set basicAuthConfig(value: AmplifyBranchBasicAuthConfig);
    resetBasicAuthConfig(): void;
    get basicAuthConfigInput(): AmplifyBranchBasicAuthConfig | undefined;
    private _branchName;
    get branchName(): string;
    set branchName(value: string);
    get branchNameInput(): string;
    private _buildSpec?;
    get buildSpec(): string;
    set buildSpec(value: string);
    resetBuildSpec(): void;
    get buildSpecInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enableAutoBuild?;
    get enableAutoBuild(): boolean | cdktf.IResolvable;
    set enableAutoBuild(value: boolean | cdktf.IResolvable);
    resetEnableAutoBuild(): void;
    get enableAutoBuildInput(): boolean | cdktf.IResolvable | undefined;
    private _enablePerformanceMode?;
    get enablePerformanceMode(): boolean | cdktf.IResolvable;
    set enablePerformanceMode(value: boolean | cdktf.IResolvable);
    resetEnablePerformanceMode(): void;
    get enablePerformanceModeInput(): boolean | cdktf.IResolvable | undefined;
    private _enablePullRequestPreview?;
    get enablePullRequestPreview(): boolean | cdktf.IResolvable;
    set enablePullRequestPreview(value: boolean | cdktf.IResolvable);
    resetEnablePullRequestPreview(): void;
    get enablePullRequestPreviewInput(): boolean | cdktf.IResolvable | undefined;
    private _environmentVariables?;
    get environmentVariables(): AmplifyBranchEnvironmentVariables[];
    set environmentVariables(value: AmplifyBranchEnvironmentVariables[]);
    resetEnvironmentVariables(): void;
    get environmentVariablesInput(): AmplifyBranchEnvironmentVariables[] | undefined;
    get id(): string;
    private _pullRequestEnvironmentName?;
    get pullRequestEnvironmentName(): string;
    set pullRequestEnvironmentName(value: string);
    resetPullRequestEnvironmentName(): void;
    get pullRequestEnvironmentNameInput(): string | undefined;
    private _stage?;
    get stage(): string;
    set stage(value: string);
    resetStage(): void;
    get stageInput(): string | undefined;
    private _tags?;
    get tags(): AmplifyBranchTags[];
    set tags(value: AmplifyBranchTags[]);
    resetTags(): void;
    get tagsInput(): AmplifyBranchTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
