import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLambdaCodeSigningConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/lambda_code_signing_config.html#id DataAwsccLambdaCodeSigningConfig#id}
    */
    readonly id: string;
}
export declare class DataAwsccLambdaCodeSigningConfigAllowedPublishers extends cdktf.ComplexComputedList {
    get signingProfileVersionArns(): string[];
}
export declare function dataAwsccLambdaCodeSigningConfigAllowedPublishersToTerraform(struct?: DataAwsccLambdaCodeSigningConfigAllowedPublishers): any;
export declare class DataAwsccLambdaCodeSigningConfigCodeSigningPolicies extends cdktf.ComplexComputedList {
    get untrustedArtifactOnDeployment(): string;
}
export declare function dataAwsccLambdaCodeSigningConfigCodeSigningPoliciesToTerraform(struct?: DataAwsccLambdaCodeSigningConfigCodeSigningPolicies): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lambda_code_signing_config.html awscc_lambda_code_signing_config}
*/
export declare class DataAwsccLambdaCodeSigningConfig extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lambda_code_signing_config.html awscc_lambda_code_signing_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLambdaCodeSigningConfigConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLambdaCodeSigningConfigConfig);
    get allowedPublishers(): any;
    get codeSigningConfigArn(): string;
    get codeSigningConfigId(): string;
    get codeSigningPolicies(): any;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
