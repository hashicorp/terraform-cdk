import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_certificate.html#id DataAwsccIotCertificate#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_certificate.html awscc_iot_certificate}
*/
export declare class DataAwsccIotCertificate extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_certificate.html awscc_iot_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotCertificateConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotCertificateConfig);
    get arn(): string;
    get caCertificatePem(): string;
    get certificateMode(): string;
    get certificatePem(): string;
    get certificateSigningRequest(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
