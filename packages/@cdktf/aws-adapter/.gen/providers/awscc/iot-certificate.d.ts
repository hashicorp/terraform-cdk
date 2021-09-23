import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_certificate.html#ca_certificate_pem IotCertificate#ca_certificate_pem}
    */
    readonly caCertificatePem?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_certificate.html#certificate_mode IotCertificate#certificate_mode}
    */
    readonly certificateMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_certificate.html#certificate_pem IotCertificate#certificate_pem}
    */
    readonly certificatePem?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_certificate.html#certificate_signing_request IotCertificate#certificate_signing_request}
    */
    readonly certificateSigningRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_certificate.html#status IotCertificate#status}
    */
    readonly status: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_certificate.html awscc_iot_certificate}
*/
export declare class IotCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_certificate.html awscc_iot_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotCertificateConfig
    */
    constructor(scope: Construct, id: string, config: IotCertificateConfig);
    get arn(): string;
    private _caCertificatePem?;
    get caCertificatePem(): string;
    set caCertificatePem(value: string);
    resetCaCertificatePem(): void;
    get caCertificatePemInput(): string | undefined;
    private _certificateMode?;
    get certificateMode(): string;
    set certificateMode(value: string);
    resetCertificateMode(): void;
    get certificateModeInput(): string | undefined;
    private _certificatePem?;
    get certificatePem(): string;
    set certificatePem(value: string);
    resetCertificatePem(): void;
    get certificatePemInput(): string | undefined;
    private _certificateSigningRequest?;
    get certificateSigningRequest(): string;
    set certificateSigningRequest(value: string);
    resetCertificateSigningRequest(): void;
    get certificateSigningRequestInput(): string | undefined;
    get id(): string;
    private _status;
    get status(): string;
    set status(value: string);
    get statusInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
