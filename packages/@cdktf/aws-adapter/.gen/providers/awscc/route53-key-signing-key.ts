// https://www.terraform.io/docs/providers/awscc/r/route53_key_signing_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53KeySigningKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique string (ID) used to identify a hosted zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_key_signing_key.html#hosted_zone_id Route53KeySigningKey#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * The Amazon resource name (ARN) for a customer managed key (CMK) in AWS Key Management Service (KMS). The KeyManagementServiceArn must be unique for each key signing key (KSK) in a single hosted zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_key_signing_key.html#key_management_service_arn Route53KeySigningKey#key_management_service_arn}
  */
  readonly keyManagementServiceArn: string;
  /**
  * An alphanumeric string used to identify a key signing key (KSK). Name must be unique for each key signing key in the same hosted zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_key_signing_key.html#name Route53KeySigningKey#name}
  */
  readonly name: string;
  /**
  * A string specifying the initial status of the key signing key (KSK). You can set the value to ACTIVE or INACTIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_key_signing_key.html#status Route53KeySigningKey#status}
  */
  readonly status: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53_key_signing_key.html awscc_route53_key_signing_key}
*/
export class Route53KeySigningKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53_key_signing_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53_key_signing_key.html awscc_route53_key_signing_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53KeySigningKeyConfig
  */
  public constructor(scope: Construct, id: string, config: Route53KeySigningKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53_key_signing_key',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hostedZoneId = config.hostedZoneId;
    this._keyManagementServiceArn = config.keyManagementServiceArn;
    this._name = config.name;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hosted_zone_id - computed: false, optional: false, required: true
  private _hostedZoneId: string;
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_management_service_arn - computed: false, optional: false, required: true
  private _keyManagementServiceArn: string;
  public get keyManagementServiceArn() {
    return this.getStringAttribute('key_management_service_arn');
  }
  public set keyManagementServiceArn(value: string) {
    this._keyManagementServiceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyManagementServiceArnInput() {
    return this._keyManagementServiceArn
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
      hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
      key_management_service_arn: cdktf.stringToTerraform(this._keyManagementServiceArn),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
