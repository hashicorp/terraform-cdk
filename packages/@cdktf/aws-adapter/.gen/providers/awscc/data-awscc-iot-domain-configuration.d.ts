import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotDomainConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_domain_configuration.html#id DataAwsccIotDomainConfiguration#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotDomainConfigurationAuthorizerConfig extends cdktf.ComplexComputedList {
    get allowAuthorizerOverride(): any;
    get defaultAuthorizerName(): string;
}
export declare function dataAwsccIotDomainConfigurationAuthorizerConfigToTerraform(struct?: DataAwsccIotDomainConfigurationAuthorizerConfig): any;
export declare class DataAwsccIotDomainConfigurationServerCertificates extends cdktf.ComplexComputedList {
    get serverCertificateArn(): string;
    get serverCertificateStatus(): string;
    get serverCertificateStatusDetail(): string;
}
export declare function dataAwsccIotDomainConfigurationServerCertificatesToTerraform(struct?: DataAwsccIotDomainConfigurationServerCertificates): any;
export declare class DataAwsccIotDomainConfigurationTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotDomainConfigurationTagsToTerraform(struct?: DataAwsccIotDomainConfigurationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_domain_configuration.html awscc_iot_domain_configuration}
*/
export declare class DataAwsccIotDomainConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_domain_configuration.html awscc_iot_domain_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotDomainConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotDomainConfigurationConfig);
    get arn(): string;
    get authorizerConfig(): any;
    get domainConfigurationName(): string;
    get domainConfigurationStatus(): string;
    get domainName(): string;
    get domainType(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get serverCertificateArns(): string[];
    get serverCertificates(): any;
    get serviceType(): string;
    get tags(): any;
    get validationCertificateArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
