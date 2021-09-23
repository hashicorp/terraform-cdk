// https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontOriginRequestPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html#origin_request_policy_config CloudfrontOriginRequestPolicy#origin_request_policy_config}
  */
  readonly originRequestPolicyConfig: CloudfrontOriginRequestPolicyOriginRequestPolicyConfig;
}
export interface CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html#cookie_behavior CloudfrontOriginRequestPolicy#cookie_behavior}
  */
  readonly cookieBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html#cookies CloudfrontOriginRequestPolicy#cookies}
  */
  readonly cookies?: string[];
}

export function cloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigToTerraform(struct?: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cookie_behavior: cdktf.stringToTerraform(struct!.cookieBehavior),
    cookies: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cookies),
  }
}

export interface CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html#header_behavior CloudfrontOriginRequestPolicy#header_behavior}
  */
  readonly headerBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html#headers CloudfrontOriginRequestPolicy#headers}
  */
  readonly headers?: string[];
}

export function cloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigToTerraform(struct?: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_behavior: cdktf.stringToTerraform(struct!.headerBehavior),
    headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headers),
  }
}

export interface CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html#query_string_behavior CloudfrontOriginRequestPolicy#query_string_behavior}
  */
  readonly queryStringBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html#query_strings CloudfrontOriginRequestPolicy#query_strings}
  */
  readonly queryStrings?: string[];
}

export function cloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigToTerraform(struct?: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query_string_behavior: cdktf.stringToTerraform(struct!.queryStringBehavior),
    query_strings: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStrings),
  }
}

export interface CloudfrontOriginRequestPolicyOriginRequestPolicyConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html#comment CloudfrontOriginRequestPolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html#cookies_config CloudfrontOriginRequestPolicy#cookies_config}
  */
  readonly cookiesConfig: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html#headers_config CloudfrontOriginRequestPolicy#headers_config}
  */
  readonly headersConfig: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html#name CloudfrontOriginRequestPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html#query_strings_config CloudfrontOriginRequestPolicy#query_strings_config}
  */
  readonly queryStringsConfig: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig;
}

export function cloudfrontOriginRequestPolicyOriginRequestPolicyConfigToTerraform(struct?: CloudfrontOriginRequestPolicyOriginRequestPolicyConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    cookies_config: cloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigToTerraform(struct!.cookiesConfig),
    headers_config: cloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigToTerraform(struct!.headersConfig),
    name: cdktf.stringToTerraform(struct!.name),
    query_strings_config: cloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigToTerraform(struct!.queryStringsConfig),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html awscc_cloudfront_origin_request_policy}
*/
export class CloudfrontOriginRequestPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudfront_origin_request_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html awscc_cloudfront_origin_request_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontOriginRequestPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontOriginRequestPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_origin_request_policy',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._originRequestPolicyConfig = config.originRequestPolicyConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // origin_request_policy_config - computed: false, optional: false, required: true
  private _originRequestPolicyConfig: CloudfrontOriginRequestPolicyOriginRequestPolicyConfig;
  public get originRequestPolicyConfig() {
    return this.interpolationForAttribute('origin_request_policy_config') as any;
  }
  public set originRequestPolicyConfig(value: CloudfrontOriginRequestPolicyOriginRequestPolicyConfig) {
    this._originRequestPolicyConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originRequestPolicyConfigInput() {
    return this._originRequestPolicyConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      origin_request_policy_config: cloudfrontOriginRequestPolicyOriginRequestPolicyConfigToTerraform(this._originRequestPolicyConfig),
    };
  }
}
