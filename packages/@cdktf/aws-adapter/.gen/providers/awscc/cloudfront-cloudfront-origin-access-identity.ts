// https://www.terraform.io/docs/providers/awscc/r/cloudfront_cloudfront_origin_access_identity.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontCloudfrontOriginAccessIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cloudfront_origin_access_identity.html#cloudfront_origin_access_identity_config CloudfrontCloudfrontOriginAccessIdentity#cloudfront_origin_access_identity_config}
  */
  readonly cloudfrontOriginAccessIdentityConfig: CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig;
}
export interface CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cloudfront_origin_access_identity.html#comment CloudfrontCloudfrontOriginAccessIdentity#comment}
  */
  readonly comment: string;
}

export function cloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigToTerraform(struct?: CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cloudfront_origin_access_identity.html awscc_cloudfront_cloudfront_origin_access_identity}
*/
export class CloudfrontCloudfrontOriginAccessIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudfront_cloudfront_origin_access_identity";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cloudfront_origin_access_identity.html awscc_cloudfront_cloudfront_origin_access_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontCloudfrontOriginAccessIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontCloudfrontOriginAccessIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_cloudfront_origin_access_identity',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cloudfrontOriginAccessIdentityConfig = config.cloudfrontOriginAccessIdentityConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloudfront_origin_access_identity_config - computed: false, optional: false, required: true
  private _cloudfrontOriginAccessIdentityConfig: CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig;
  public get cloudfrontOriginAccessIdentityConfig() {
    return this.interpolationForAttribute('cloudfront_origin_access_identity_config') as any;
  }
  public set cloudfrontOriginAccessIdentityConfig(value: CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig) {
    this._cloudfrontOriginAccessIdentityConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudfrontOriginAccessIdentityConfigInput() {
    return this._cloudfrontOriginAccessIdentityConfig
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // s3_canonical_user_id - computed: true, optional: false, required: false
  public get s3CanonicalUserId() {
    return this.getStringAttribute('s3_canonical_user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloudfront_origin_access_identity_config: cloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigToTerraform(this._cloudfrontOriginAccessIdentityConfig),
    };
  }
}
