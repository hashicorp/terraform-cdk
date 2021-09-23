import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccFinspaceEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/finspace_environment.html#id DataAwsccFinspaceEnvironment#id}
    */
    readonly id: string;
}
export declare class DataAwsccFinspaceEnvironmentFederationParameters extends cdktf.ComplexComputedList {
    get applicationCallBackUrl(): string;
    get attributeMap(): any;
    get federationProviderName(): string;
    get federationUrn(): string;
    get samlMetadataDocument(): string;
    get samlMetadataUrl(): string;
}
export declare function dataAwsccFinspaceEnvironmentFederationParametersToTerraform(struct?: DataAwsccFinspaceEnvironmentFederationParameters): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/finspace_environment.html awscc_finspace_environment}
*/
export declare class DataAwsccFinspaceEnvironment extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/finspace_environment.html awscc_finspace_environment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccFinspaceEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccFinspaceEnvironmentConfig);
    get awsAccountId(): string;
    get dedicatedServiceAccountId(): string;
    get description(): string;
    get environmentArn(): string;
    get environmentId(): string;
    get environmentUrl(): string;
    get federationMode(): string;
    get federationParameters(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get kmsKeyId(): string;
    get name(): string;
    get sageMakerStudioDomainUrl(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
