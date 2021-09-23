// https://www.terraform.io/docs/providers/awscc/r/route53_dnssec.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53DnssecConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique string (ID) used to identify a hosted zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_dnssec.html#hosted_zone_id Route53Dnssec#hosted_zone_id}
  */
  readonly hostedZoneId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53_dnssec.html awscc_route53_dnssec}
*/
export class Route53Dnssec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53_dnssec";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53_dnssec.html awscc_route53_dnssec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53DnssecConfig
  */
  public constructor(scope: Construct, id: string, config: Route53DnssecConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53_dnssec',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hostedZoneId = config.hostedZoneId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
    };
  }
}
