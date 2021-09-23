// https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority_activation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
export class AcmpcaCertificateAuthorityActivation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_acmpca_certificate_authority_activation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_certificate_authority_activation.html awscc_acmpca_certificate_authority_activation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcmpcaCertificateAuthorityActivationConfig
  */
  public constructor(scope: Construct, id: string, config: AcmpcaCertificateAuthorityActivationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_acmpca_certificate_authority_activation',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificate = config.certificate;
    this._certificateAuthorityArn = config.certificateAuthorityArn;
    this._certificateChain = config.certificateChain;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: false, optional: false, required: true
  private _certificate: string;
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // certificate_authority_arn - computed: false, optional: false, required: true
  private _certificateAuthorityArn: string;
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }
  public set certificateAuthorityArn(value: string) {
    this._certificateAuthorityArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnInput() {
    return this._certificateAuthorityArn
  }

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain?: string;
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string ) {
    this._certificateChain = value;
  }
  public resetCertificateChain() {
    this._certificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain
  }

  // complete_certificate_chain - computed: true, optional: false, required: false
  public get completeCertificateChain() {
    return this.getStringAttribute('complete_certificate_chain');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.stringToTerraform(this._certificate),
      certificate_authority_arn: cdktf.stringToTerraform(this._certificateAuthorityArn),
      certificate_chain: cdktf.stringToTerraform(this._certificateChain),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
