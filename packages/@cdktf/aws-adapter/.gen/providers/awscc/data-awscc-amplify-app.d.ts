import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAmplifyAppConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/amplify_app.html#id DataAwsccAmplifyApp#id}
    */
    readonly id: string;
}
export declare class DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig extends cdktf.ComplexComputedList {
    get enableBasicAuth(): any;
    get password(): string;
    get username(): string;
}
export declare function dataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigToTerraform(struct?: DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig): any;
export declare class DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): string;
}
export declare function dataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesToTerraform(struct?: DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables): any;
export declare class DataAwsccAmplifyAppAutoBranchCreationConfig extends cdktf.ComplexComputedList {
    get autoBranchCreationPatterns(): string[];
    get basicAuthConfig(): any;
    get buildSpec(): string;
    get enableAutoBranchCreation(): any;
    get enableAutoBuild(): any;
    get enablePerformanceMode(): any;
    get enablePullRequestPreview(): any;
    get environmentVariables(): any;
    get pullRequestEnvironmentName(): string;
    get stage(): string;
}
export declare function dataAwsccAmplifyAppAutoBranchCreationConfigToTerraform(struct?: DataAwsccAmplifyAppAutoBranchCreationConfig): any;
export declare class DataAwsccAmplifyAppBasicAuthConfig extends cdktf.ComplexComputedList {
    get enableBasicAuth(): any;
    get password(): string;
    get username(): string;
}
export declare function dataAwsccAmplifyAppBasicAuthConfigToTerraform(struct?: DataAwsccAmplifyAppBasicAuthConfig): any;
export declare class DataAwsccAmplifyAppCustomRules extends cdktf.ComplexComputedList {
    get condition(): string;
    get source(): string;
    get status(): string;
    get target(): string;
}
export declare function dataAwsccAmplifyAppCustomRulesToTerraform(struct?: DataAwsccAmplifyAppCustomRules): any;
export declare class DataAwsccAmplifyAppEnvironmentVariables extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): string;
}
export declare function dataAwsccAmplifyAppEnvironmentVariablesToTerraform(struct?: DataAwsccAmplifyAppEnvironmentVariables): any;
export declare class DataAwsccAmplifyAppTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccAmplifyAppTagsToTerraform(struct?: DataAwsccAmplifyAppTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/amplify_app.html awscc_amplify_app}
*/
export declare class DataAwsccAmplifyApp extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/amplify_app.html awscc_amplify_app} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAmplifyAppConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAmplifyAppConfig);
    get accessToken(): string;
    get appId(): string;
    get appName(): string;
    get arn(): string;
    get autoBranchCreationConfig(): any;
    get basicAuthConfig(): any;
    get buildSpec(): string;
    get customHeaders(): string;
    get customRules(): any;
    get defaultDomain(): string;
    get description(): string;
    get enableBranchAutoDeletion(): cdktf.IResolvable;
    get environmentVariables(): any;
    get iamServiceRole(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get oauthToken(): string;
    get repository(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
