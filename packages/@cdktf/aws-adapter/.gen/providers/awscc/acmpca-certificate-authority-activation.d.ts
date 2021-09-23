import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AcmpcaCertificateAuthorityActivationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Certificate Authority certificate that will be installed in the Certificate Authority.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority_activation.html#certificate AcmpcaCertificateAuthorityActivation#certificate}
    */
    readonly certificate: string;
    /**
    * Arn of the Certificate Authority.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority_activation.html#certificate_authority_arn AcmpcaCertificateAuthorityActivation#certificate_authority_arn}
    */
    readonly certificateAuthorityArn: string;
    /**
    * Certificate chain for the Certificate Authority certificate.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority_activation.html#certificate_chain AcmpcaCertificateAuthorityActivation#certificate_chain}
    */
    readonly certificateChain?: string;
    /**
    * The status of the Certificate Authority.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority_activation.html#status AcmpcaCertificateAuthorityActivation#status}
    */
    readonly status?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority_activation.html awscc_acmpca_certificate_authority_activation}
*/
export declare class AcmpcaCertificateAuthorityActivation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority_activation.html awscc_acmpca_certificate_authority_activation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmpcaCertificateAuthorityActivationConfig
    */
    constructor(scope: Construct, id: string, config: AcmpcaCertificateAuthorityActivationConfig);
    private _certificate;
    get certificate(): string;
    set certificate(value: string);
    get certificateInput(): string;
    private _certificateAuthorityArn;
    get certificateAuthorityArn(): string;
    set certificateAuthorityArn(value: string);
    get certificateAuthorityArnInput(): string;
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    resetCertificateChain(): void;
    get certificateChainInput(): string | undefined;
    get completeCertificateChain(): string;
    get id(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
