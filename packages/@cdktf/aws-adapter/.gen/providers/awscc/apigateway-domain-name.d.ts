import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApigatewayDomainNameConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#certificate_arn ApigatewayDomainName#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#domain_name ApigatewayDomainName#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#endpoint_configuration ApigatewayDomainName#endpoint_configuration}
    */
    readonly endpointConfiguration?: ApigatewayDomainNameEndpointConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#mutual_tls_authentication ApigatewayDomainName#mutual_tls_authentication}
    */
    readonly mutualTlsAuthentication?: ApigatewayDomainNameMutualTlsAuthentication;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#ownership_verification_certificate_arn ApigatewayDomainName#ownership_verification_certificate_arn}
    */
    readonly ownershipVerificationCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#regional_certificate_arn ApigatewayDomainName#regional_certificate_arn}
    */
    readonly regionalCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#security_policy ApigatewayDomainName#security_policy}
    */
    readonly securityPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#tags ApigatewayDomainName#tags}
    */
    readonly tags?: ApigatewayDomainNameTags[];
}
export interface ApigatewayDomainNameEndpointConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#types ApigatewayDomainName#types}
    */
    readonly types?: string[];
}
export declare function apigatewayDomainNameEndpointConfigurationToTerraform(struct?: ApigatewayDomainNameEndpointConfiguration): any;
export interface ApigatewayDomainNameMutualTlsAuthentication {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#truststore_uri ApigatewayDomainName#truststore_uri}
    */
    readonly truststoreUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#truststore_version ApigatewayDomainName#truststore_version}
    */
    readonly truststoreVersion?: string;
}
export declare function apigatewayDomainNameMutualTlsAuthenticationToTerraform(struct?: ApigatewayDomainNameMutualTlsAuthentication): any;
export interface ApigatewayDomainNameTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#key ApigatewayDomainName#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html#value ApigatewayDomainName#value}
    */
    readonly value?: string;
}
export declare function apigatewayDomainNameTagsToTerraform(struct?: ApigatewayDomainNameTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html awscc_apigateway_domain_name}
*/
export declare class ApigatewayDomainName extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_domain_name.html awscc_apigateway_domain_name} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApigatewayDomainNameConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ApigatewayDomainNameConfig);
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    resetCertificateArn(): void;
    get certificateArnInput(): string | undefined;
    get distributionDomainName(): string;
    get distributionHostedZoneId(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    resetDomainName(): void;
    get domainNameInput(): string | undefined;
    private _endpointConfiguration?;
    get endpointConfiguration(): ApigatewayDomainNameEndpointConfiguration;
    set endpointConfiguration(value: ApigatewayDomainNameEndpointConfiguration);
    resetEndpointConfiguration(): void;
    get endpointConfigurationInput(): ApigatewayDomainNameEndpointConfiguration | undefined;
    get id(): string;
    private _mutualTlsAuthentication?;
    get mutualTlsAuthentication(): ApigatewayDomainNameMutualTlsAuthentication;
    set mutualTlsAuthentication(value: ApigatewayDomainNameMutualTlsAuthentication);
    resetMutualTlsAuthentication(): void;
    get mutualTlsAuthenticationInput(): ApigatewayDomainNameMutualTlsAuthentication | undefined;
    private _ownershipVerificationCertificateArn?;
    get ownershipVerificationCertificateArn(): string;
    set ownershipVerificationCertificateArn(value: string);
    resetOwnershipVerificationCertificateArn(): void;
    get ownershipVerificationCertificateArnInput(): string | undefined;
    private _regionalCertificateArn?;
    get regionalCertificateArn(): string;
    set regionalCertificateArn(value: string);
    resetRegionalCertificateArn(): void;
    get regionalCertificateArnInput(): string | undefined;
    get regionalDomainName(): string;
    get regionalHostedZoneId(): string;
    private _securityPolicy?;
    get securityPolicy(): string;
    set securityPolicy(value: string);
    resetSecurityPolicy(): void;
    get securityPolicyInput(): string | undefined;
    private _tags?;
    get tags(): ApigatewayDomainNameTags[];
    set tags(value: ApigatewayDomainNameTags[]);
    resetTags(): void;
    get tagsInput(): ApigatewayDomainNameTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
