// https://www.terraform.io/docs/providers/awscc/r/iot_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
export class IotCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_certificate.html awscc_iot_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: IotCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_certificate',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._caCertificatePem = config.caCertificatePem;
    this._certificateMode = config.certificateMode;
    this._certificatePem = config.certificatePem;
    this._certificateSigningRequest = config.certificateSigningRequest;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // ca_certificate_pem - computed: true, optional: true, required: false
  private _caCertificatePem?: string;
  public get caCertificatePem() {
    return this.getStringAttribute('ca_certificate_pem');
  }
  public set caCertificatePem(value: string) {
    this._caCertificatePem = value;
  }
  public resetCaCertificatePem() {
    this._caCertificatePem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatePemInput() {
    return this._caCertificatePem
  }

  // certificate_mode - computed: true, optional: true, required: false
  private _certificateMode?: string;
  public get certificateMode() {
    return this.getStringAttribute('certificate_mode');
  }
  public set certificateMode(value: string) {
    this._certificateMode = value;
  }
  public resetCertificateMode() {
    this._certificateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateModeInput() {
    return this._certificateMode
  }

  // certificate_pem - computed: true, optional: true, required: false
  private _certificatePem?: string;
  public get certificatePem() {
    return this.getStringAttribute('certificate_pem');
  }
  public set certificatePem(value: string) {
    this._certificatePem = value;
  }
  public resetCertificatePem() {
    this._certificatePem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePemInput() {
    return this._certificatePem
  }

  // certificate_signing_request - computed: true, optional: true, required: false
  private _certificateSigningRequest?: string;
  public get certificateSigningRequest() {
    return this.getStringAttribute('certificate_signing_request');
  }
  public set certificateSigningRequest(value: string) {
    this._certificateSigningRequest = value;
  }
  public resetCertificateSigningRequest() {
    this._certificateSigningRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSigningRequestInput() {
    return this._certificateSigningRequest
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: false, optional: false, required: true
  private _status: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
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
      ca_certificate_pem: cdktf.stringToTerraform(this._caCertificatePem),
      certificate_mode: cdktf.stringToTerraform(this._certificateMode),
      certificate_pem: cdktf.stringToTerraform(this._certificatePem),
      certificate_signing_request: cdktf.stringToTerraform(this._certificateSigningRequest),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
