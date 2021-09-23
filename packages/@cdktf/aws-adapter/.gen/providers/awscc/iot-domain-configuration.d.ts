import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotDomainConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#authorizer_config IotDomainConfiguration#authorizer_config}
    */
    readonly authorizerConfig?: IotDomainConfigurationAuthorizerConfig;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#domain_configuration_name IotDomainConfiguration#domain_configuration_name}
    */
    readonly domainConfigurationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#domain_configuration_status IotDomainConfiguration#domain_configuration_status}
    */
    readonly domainConfigurationStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#domain_name IotDomainConfiguration#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#server_certificate_arns IotDomainConfiguration#server_certificate_arns}
    */
    readonly serverCertificateArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#service_type IotDomainConfiguration#service_type}
    */
    readonly serviceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#tags IotDomainConfiguration#tags}
    */
    readonly tags?: IotDomainConfigurationTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}
    */
    readonly validationCertificateArn?: string;
}
export interface IotDomainConfigurationAuthorizerConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}
    */
    readonly allowAuthorizerOverride?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#default_authorizer_name IotDomainConfiguration#default_authorizer_name}
    */
    readonly defaultAuthorizerName?: string;
}
export declare function iotDomainConfigurationAuthorizerConfigToTerraform(struct?: IotDomainConfigurationAuthorizerConfig): any;
export declare class IotDomainConfigurationServerCertificates extends cdktf.ComplexComputedList {
    private _serverCertificateArn?;
    get serverCertificateArn(): string;
    set serverCertificateArn(value: string);
    resetServerCertificateArn(): void;
    get serverCertificateArnInput(): string | undefined;
    private _serverCertificateStatus?;
    get serverCertificateStatus(): string;
    set serverCertificateStatus(value: string);
    resetServerCertificateStatus(): void;
    get serverCertificateStatusInput(): string | undefined;
    private _serverCertificateStatusDetail?;
    get serverCertificateStatusDetail(): string;
    set serverCertificateStatusDetail(value: string);
    resetServerCertificateStatusDetail(): void;
    get serverCertificateStatusDetailInput(): string | undefined;
}
export declare function iotDomainConfigurationServerCertificatesToTerraform(struct?: IotDomainConfigurationServerCertificates): any;
export interface IotDomainConfigurationTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#key IotDomainConfiguration#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html#value IotDomainConfiguration#value}
    */
    readonly value: string;
}
export declare function iotDomainConfigurationTagsToTerraform(struct?: IotDomainConfigurationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html awscc_iot_domain_configuration}
*/
export declare class IotDomainConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_domain_configuration.html awscc_iot_domain_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotDomainConfigurationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: IotDomainConfigurationConfig);
    get arn(): string;
    private _authorizerConfig?;
    get authorizerConfig(): IotDomainConfigurationAuthorizerConfig;
    set authorizerConfig(value: IotDomainConfigurationAuthorizerConfig);
    resetAuthorizerConfig(): void;
    get authorizerConfigInput(): IotDomainConfigurationAuthorizerConfig | undefined;
    private _domainConfigurationName?;
    get domainConfigurationName(): string;
    set domainConfigurationName(value: string);
    resetDomainConfigurationName(): void;
    get domainConfigurationNameInput(): string | undefined;
    private _domainConfigurationStatus?;
    get domainConfigurationStatus(): string;
    set domainConfigurationStatus(value: string);
    resetDomainConfigurationStatus(): void;
    get domainConfigurationStatusInput(): string | undefined;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    resetDomainName(): void;
    get domainNameInput(): string | undefined;
    get domainType(): string;
    get id(): string;
    private _serverCertificateArns?;
    get serverCertificateArns(): string[];
    set serverCertificateArns(value: string[]);
    resetServerCertificateArns(): void;
    get serverCertificateArnsInput(): string[] | undefined;
    get serverCertificates(): any;
    private _serviceType?;
    get serviceType(): string;
    set serviceType(value: string);
    resetServiceType(): void;
    get serviceTypeInput(): string | undefined;
    private _tags?;
    get tags(): IotDomainConfigurationTags[];
    set tags(value: IotDomainConfigurationTags[]);
    resetTags(): void;
    get tagsInput(): IotDomainConfigurationTags[] | undefined;
    private _validationCertificateArn?;
    get validationCertificateArn(): string;
    set validationCertificateArn(value: string);
    resetValidationCertificateArn(): void;
    get validationCertificateArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
