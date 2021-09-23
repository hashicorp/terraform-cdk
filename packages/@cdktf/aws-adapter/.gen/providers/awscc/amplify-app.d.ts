import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function amplifyAppAutoBranchCreationConfigBasicAuthConfigToTerraform(struct?: AmplifyAppAutoBranchCreationConfigBasicAuthConfig): any;
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
export declare function amplifyAppAutoBranchCreationConfigEnvironmentVariablesToTerraform(struct?: AmplifyAppAutoBranchCreationConfigEnvironmentVariables): any;
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
export declare function amplifyAppAutoBranchCreationConfigToTerraform(struct?: AmplifyAppAutoBranchCreationConfig): any;
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
export declare function amplifyAppBasicAuthConfigToTerraform(struct?: AmplifyAppBasicAuthConfig): any;
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
export declare function amplifyAppCustomRulesToTerraform(struct?: AmplifyAppCustomRules): any;
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
export declare function amplifyAppEnvironmentVariablesToTerraform(struct?: AmplifyAppEnvironmentVariables): any;
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
export declare function amplifyAppTagsToTerraform(struct?: AmplifyAppTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html awscc_amplify_app}
*/
export declare class AmplifyApp extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/amplify_app.html awscc_amplify_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyAppConfig
    */
    constructor(scope: Construct, id: string, config: AmplifyAppConfig);
    private _accessToken?;
    get accessToken(): string;
    set accessToken(value: string);
    resetAccessToken(): void;
    get accessTokenInput(): string | undefined;
    get appId(): string;
    get appName(): string;
    get arn(): string;
    private _autoBranchCreationConfig?;
    get autoBranchCreationConfig(): AmplifyAppAutoBranchCreationConfig;
    set autoBranchCreationConfig(value: AmplifyAppAutoBranchCreationConfig);
    resetAutoBranchCreationConfig(): void;
    get autoBranchCreationConfigInput(): AmplifyAppAutoBranchCreationConfig | undefined;
    private _basicAuthConfig?;
    get basicAuthConfig(): AmplifyAppBasicAuthConfig;
    set basicAuthConfig(value: AmplifyAppBasicAuthConfig);
    resetBasicAuthConfig(): void;
    get basicAuthConfigInput(): AmplifyAppBasicAuthConfig | undefined;
    private _buildSpec?;
    get buildSpec(): string;
    set buildSpec(value: string);
    resetBuildSpec(): void;
    get buildSpecInput(): string | undefined;
    private _customHeaders?;
    get customHeaders(): string;
    set customHeaders(value: string);
    resetCustomHeaders(): void;
    get customHeadersInput(): string | undefined;
    private _customRules?;
    get customRules(): AmplifyAppCustomRules[];
    set customRules(value: AmplifyAppCustomRules[]);
    resetCustomRules(): void;
    get customRulesInput(): AmplifyAppCustomRules[] | undefined;
    get defaultDomain(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enableBranchAutoDeletion?;
    get enableBranchAutoDeletion(): boolean | cdktf.IResolvable;
    set enableBranchAutoDeletion(value: boolean | cdktf.IResolvable);
    resetEnableBranchAutoDeletion(): void;
    get enableBranchAutoDeletionInput(): boolean | cdktf.IResolvable | undefined;
    private _environmentVariables?;
    get environmentVariables(): AmplifyAppEnvironmentVariables[];
    set environmentVariables(value: AmplifyAppEnvironmentVariables[]);
    resetEnvironmentVariables(): void;
    get environmentVariablesInput(): AmplifyAppEnvironmentVariables[] | undefined;
    private _iamServiceRole?;
    get iamServiceRole(): string;
    set iamServiceRole(value: string);
    resetIamServiceRole(): void;
    get iamServiceRoleInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _oauthToken?;
    get oauthToken(): string;
    set oauthToken(value: string);
    resetOauthToken(): void;
    get oauthTokenInput(): string | undefined;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    resetRepository(): void;
    get repositoryInput(): string | undefined;
    private _tags?;
    get tags(): AmplifyAppTags[];
    set tags(value: AmplifyAppTags[]);
    resetTags(): void;
    get tagsInput(): AmplifyAppTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
