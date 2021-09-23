import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccApigatewayClientCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_client_certificate.html#id DataAwsccApigatewayClientCertificate#id}
    */
    readonly id: string;
}
export declare class DataAwsccApigatewayClientCertificateTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccApigatewayClientCertificateTagsToTerraform(struct?: DataAwsccApigatewayClientCertificateTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_client_certificate.html awscc_apigateway_client_certificate}
*/
export declare class DataAwsccApigatewayClientCertificate extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_client_certificate.html awscc_apigateway_client_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccApigatewayClientCertificateConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccApigatewayClientCertificateConfig);
    get clientCertificateId(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
