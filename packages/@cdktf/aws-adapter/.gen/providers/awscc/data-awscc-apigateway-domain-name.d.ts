import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccApigatewayDomainNameConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_domain_name.html#id DataAwsccApigatewayDomainName#id}
    */
    readonly id: string;
}
export declare class DataAwsccApigatewayDomainNameEndpointConfiguration extends cdktf.ComplexComputedList {
    get types(): string[];
}
export declare function dataAwsccApigatewayDomainNameEndpointConfigurationToTerraform(struct?: DataAwsccApigatewayDomainNameEndpointConfiguration): any;
export declare class DataAwsccApigatewayDomainNameMutualTlsAuthentication extends cdktf.ComplexComputedList {
    get truststoreUri(): string;
    get truststoreVersion(): string;
}
export declare function dataAwsccApigatewayDomainNameMutualTlsAuthenticationToTerraform(struct?: DataAwsccApigatewayDomainNameMutualTlsAuthentication): any;
export declare class DataAwsccApigatewayDomainNameTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccApigatewayDomainNameTagsToTerraform(struct?: DataAwsccApigatewayDomainNameTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_domain_name.html awscc_apigateway_domain_name}
*/
export declare class DataAwsccApigatewayDomainName extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_domain_name.html awscc_apigateway_domain_name} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccApigatewayDomainNameConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccApigatewayDomainNameConfig);
    get certificateArn(): string;
    get distributionDomainName(): string;
    get distributionHostedZoneId(): string;
    get domainName(): string;
    get endpointConfiguration(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get mutualTlsAuthentication(): any;
    get ownershipVerificationCertificateArn(): string;
    get regionalCertificateArn(): string;
    get regionalDomainName(): string;
    get regionalHostedZoneId(): string;
    get securityPolicy(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
