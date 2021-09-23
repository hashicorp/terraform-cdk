import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FinspaceEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Description of the Environment
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#description FinspaceEnvironment#description}
    */
    readonly description?: string;
    /**
    * Federation mode used with the Environment
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#federation_mode FinspaceEnvironment#federation_mode}
    */
    readonly federationMode?: string;
    /**
    * Additional parameters to identify Federation mode
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#federation_parameters FinspaceEnvironment#federation_parameters}
    */
    readonly federationParameters?: FinspaceEnvironmentFederationParameters;
    /**
    * KMS key used to encrypt customer data within FinSpace Environment infrastructure
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#kms_key_id FinspaceEnvironment#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Name of the Environment
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#name FinspaceEnvironment#name}
    */
    readonly name: string;
}
export interface FinspaceEnvironmentFederationParameters {
    /**
    * SAML metadata URL to link with the Environment
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#application_call_back_url FinspaceEnvironment#application_call_back_url}
    */
    readonly applicationCallBackUrl?: string;
    /**
    * Attribute map for SAML configuration
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#attribute_map FinspaceEnvironment#attribute_map}
    */
    readonly attributeMap?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Federation provider name to link with the Environment
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#federation_provider_name FinspaceEnvironment#federation_provider_name}
    */
    readonly federationProviderName?: string;
    /**
    * SAML metadata URL to link with the Environment
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#federation_urn FinspaceEnvironment#federation_urn}
    */
    readonly federationUrn?: string;
    /**
    * SAML metadata document to link the federation provider to the Environment
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#saml_metadata_document FinspaceEnvironment#saml_metadata_document}
    */
    readonly samlMetadataDocument?: string;
    /**
    * SAML metadata URL to link with the Environment
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html#saml_metadata_url FinspaceEnvironment#saml_metadata_url}
    */
    readonly samlMetadataUrl?: string;
}
export declare function finspaceEnvironmentFederationParametersToTerraform(struct?: FinspaceEnvironmentFederationParameters): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html awscc_finspace_environment}
*/
export declare class FinspaceEnvironment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/finspace_environment.html awscc_finspace_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FinspaceEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: FinspaceEnvironmentConfig);
    get awsAccountId(): string;
    get dedicatedServiceAccountId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get environmentArn(): string;
    get environmentId(): string;
    get environmentUrl(): string;
    private _federationMode?;
    get federationMode(): string;
    set federationMode(value: string);
    resetFederationMode(): void;
    get federationModeInput(): string | undefined;
    private _federationParameters?;
    get federationParameters(): FinspaceEnvironmentFederationParameters;
    set federationParameters(value: FinspaceEnvironmentFederationParameters);
    resetFederationParameters(): void;
    get federationParametersInput(): FinspaceEnvironmentFederationParameters | undefined;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get sageMakerStudioDomainUrl(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
