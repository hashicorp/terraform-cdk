import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaCodeSigningConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * When the CodeSigningConfig is later on attached to a function, the function code will be expected to be signed by profiles from this list
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_code_signing_config.html#allowed_publishers LambdaCodeSigningConfig#allowed_publishers}
    */
    readonly allowedPublishers: LambdaCodeSigningConfigAllowedPublishers;
    /**
    * Policies to control how to act if a signature is invalid
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_code_signing_config.html#code_signing_policies LambdaCodeSigningConfig#code_signing_policies}
    */
    readonly codeSigningPolicies?: LambdaCodeSigningConfigCodeSigningPolicies;
    /**
    * A description of the CodeSigningConfig
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_code_signing_config.html#description LambdaCodeSigningConfig#description}
    */
    readonly description?: string;
}
export interface LambdaCodeSigningConfigAllowedPublishers {
    /**
    * List of Signing profile version Arns
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_code_signing_config.html#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}
    */
    readonly signingProfileVersionArns: string[];
}
export declare function lambdaCodeSigningConfigAllowedPublishersToTerraform(struct?: LambdaCodeSigningConfigAllowedPublishers): any;
export interface LambdaCodeSigningConfigCodeSigningPolicies {
    /**
    * Indicates how Lambda operations involve updating the code artifact will operate. Default to Warn if not provided
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_code_signing_config.html#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}
    */
    readonly untrustedArtifactOnDeployment?: string;
}
export declare function lambdaCodeSigningConfigCodeSigningPoliciesToTerraform(struct?: LambdaCodeSigningConfigCodeSigningPolicies): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/lambda_code_signing_config.html awscc_lambda_code_signing_config}
*/
export declare class LambdaCodeSigningConfig extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/lambda_code_signing_config.html awscc_lambda_code_signing_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaCodeSigningConfigConfig
    */
    constructor(scope: Construct, id: string, config: LambdaCodeSigningConfigConfig);
    private _allowedPublishers;
    get allowedPublishers(): LambdaCodeSigningConfigAllowedPublishers;
    set allowedPublishers(value: LambdaCodeSigningConfigAllowedPublishers);
    get allowedPublishersInput(): LambdaCodeSigningConfigAllowedPublishers;
    get codeSigningConfigArn(): string;
    get codeSigningConfigId(): string;
    private _codeSigningPolicies?;
    get codeSigningPolicies(): LambdaCodeSigningConfigCodeSigningPolicies;
    set codeSigningPolicies(value: LambdaCodeSigningConfigCodeSigningPolicies);
    resetCodeSigningPolicies(): void;
    get codeSigningPoliciesInput(): LambdaCodeSigningConfigCodeSigningPolicies | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
