import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAcmpcaCertificateAuthorityActivationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate_authority_activation.html#id DataAwsccAcmpcaCertificateAuthorityActivation#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate_authority_activation.html awscc_acmpca_certificate_authority_activation}
*/
export declare class DataAwsccAcmpcaCertificateAuthorityActivation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_certificate_authority_activation.html awscc_acmpca_certificate_authority_activation} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAcmpcaCertificateAuthorityActivationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAcmpcaCertificateAuthorityActivationConfig);
    get certificate(): string;
    get certificateAuthorityArn(): string;
    get certificateChain(): string;
    get completeCertificateChain(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
