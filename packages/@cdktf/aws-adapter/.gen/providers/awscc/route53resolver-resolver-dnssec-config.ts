// https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_dnssec_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53ResolverResolverDnssecConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * ResourceId
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_dnssec_config.html#resource_id Route53ResolverResolverDnssecConfig#resource_id}
  */
  readonly resourceId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_dnssec_config.html awscc_route53resolver_resolver_dnssec_config}
*/
export class Route53ResolverResolverDnssecConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53resolver_resolver_dnssec_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_resolver_dnssec_config.html awscc_route53resolver_resolver_dnssec_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53ResolverResolverDnssecConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Route53ResolverResolverDnssecConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53resolver_resolver_dnssec_config',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // resource_id - computed: true, optional: true, required: false
  private _resourceId?: string;
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId
  }

  // validation_status - computed: true, optional: false, required: false
  public get validationStatus() {
    return this.getStringAttribute('validation_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_id: cdktf.stringToTerraform(this._resourceId),
    };
  }
}
