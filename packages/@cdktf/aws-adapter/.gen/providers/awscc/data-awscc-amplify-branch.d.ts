import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAmplifyBranchConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/amplify_branch.html#id DataAwsccAmplifyBranch#id}
    */
    readonly id: string;
}
export declare class DataAwsccAmplifyBranchBasicAuthConfig extends cdktf.ComplexComputedList {
    get enableBasicAuth(): any;
    get password(): string;
    get username(): string;
}
export declare function dataAwsccAmplifyBranchBasicAuthConfigToTerraform(struct?: DataAwsccAmplifyBranchBasicAuthConfig): any;
export declare class DataAwsccAmplifyBranchEnvironmentVariables extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): string;
}
export declare function dataAwsccAmplifyBranchEnvironmentVariablesToTerraform(struct?: DataAwsccAmplifyBranchEnvironmentVariables): any;
export declare class DataAwsccAmplifyBranchTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccAmplifyBranchTagsToTerraform(struct?: DataAwsccAmplifyBranchTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/amplify_branch.html awscc_amplify_branch}
*/
export declare class DataAwsccAmplifyBranch extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/amplify_branch.html awscc_amplify_branch} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAmplifyBranchConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAmplifyBranchConfig);
    get appId(): string;
    get arn(): string;
    get basicAuthConfig(): any;
    get branchName(): string;
    get buildSpec(): string;
    get description(): string;
    get enableAutoBuild(): cdktf.IResolvable;
    get enablePerformanceMode(): cdktf.IResolvable;
    get enablePullRequestPreview(): cdktf.IResolvable;
    get environmentVariables(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get pullRequestEnvironmentName(): string;
    get stage(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
