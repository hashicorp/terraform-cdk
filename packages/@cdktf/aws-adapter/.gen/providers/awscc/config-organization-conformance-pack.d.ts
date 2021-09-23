import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigOrganizationConformancePackConfig extends cdktf.TerraformMetaArguments {
    /**
    * A list of ConformancePackInputParameter objects.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#conformance_pack_input_parameters ConfigOrganizationConformancePack#conformance_pack_input_parameters}
    */
    readonly conformancePackInputParameters?: ConfigOrganizationConformancePackConformancePackInputParameters[];
    /**
    * AWS Config stores intermediate files while processing conformance pack template.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}
    */
    readonly deliveryS3Bucket?: string;
    /**
    * The prefix for the delivery S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}
    */
    readonly deliveryS3KeyPrefix?: string;
    /**
    * A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}
    */
    readonly excludedAccounts?: string[];
    /**
    * The name of the organization conformance pack.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#organization_conformance_pack_name ConfigOrganizationConformancePack#organization_conformance_pack_name}
    */
    readonly organizationConformancePackName: string;
    /**
    * A string containing full conformance pack template body.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#template_body ConfigOrganizationConformancePack#template_body}
    */
    readonly templateBody?: string;
    /**
    * Location of file containing the template body.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}
    */
    readonly templateS3Uri?: string;
}
export interface ConfigOrganizationConformancePackConformancePackInputParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#parameter_name ConfigOrganizationConformancePack#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html#parameter_value ConfigOrganizationConformancePack#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function configOrganizationConformancePackConformancePackInputParametersToTerraform(struct?: ConfigOrganizationConformancePackConformancePackInputParameters): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html awscc_config_organization_conformance_pack}
*/
export declare class ConfigOrganizationConformancePack extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/config_organization_conformance_pack.html awscc_config_organization_conformance_pack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigOrganizationConformancePackConfig
    */
    constructor(scope: Construct, id: string, config: ConfigOrganizationConformancePackConfig);
    private _conformancePackInputParameters?;
    get conformancePackInputParameters(): ConfigOrganizationConformancePackConformancePackInputParameters[];
    set conformancePackInputParameters(value: ConfigOrganizationConformancePackConformancePackInputParameters[]);
    resetConformancePackInputParameters(): void;
    get conformancePackInputParametersInput(): ConfigOrganizationConformancePackConformancePackInputParameters[] | undefined;
    private _deliveryS3Bucket?;
    get deliveryS3Bucket(): string;
    set deliveryS3Bucket(value: string);
    resetDeliveryS3Bucket(): void;
    get deliveryS3BucketInput(): string | undefined;
    private _deliveryS3KeyPrefix?;
    get deliveryS3KeyPrefix(): string;
    set deliveryS3KeyPrefix(value: string);
    resetDeliveryS3KeyPrefix(): void;
    get deliveryS3KeyPrefixInput(): string | undefined;
    private _excludedAccounts?;
    get excludedAccounts(): string[];
    set excludedAccounts(value: string[]);
    resetExcludedAccounts(): void;
    get excludedAccountsInput(): string[] | undefined;
    get id(): string;
    private _organizationConformancePackName;
    get organizationConformancePackName(): string;
    set organizationConformancePackName(value: string);
    get organizationConformancePackNameInput(): string;
    private _templateBody?;
    get templateBody(): string;
    set templateBody(value: string);
    resetTemplateBody(): void;
    get templateBodyInput(): string | undefined;
    private _templateS3Uri?;
    get templateS3Uri(): string;
    set templateS3Uri(value: string);
    resetTemplateS3Uri(): void;
    get templateS3UriInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
