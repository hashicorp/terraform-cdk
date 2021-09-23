// https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontCachePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#cache_policy_config CloudfrontCachePolicy#cache_policy_config}
  */
  readonly cachePolicyConfig: CloudfrontCachePolicyCachePolicyConfig;
}
export interface CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#cookie_behavior CloudfrontCachePolicy#cookie_behavior}
  */
  readonly cookieBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#cookies CloudfrontCachePolicy#cookies}
  */
  readonly cookies?: string[];
}

export function cloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct?: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cookie_behavior: cdktf.stringToTerraform(struct!.cookieBehavior),
    cookies: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cookies),
  }
}

export interface CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#header_behavior CloudfrontCachePolicy#header_behavior}
  */
  readonly headerBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#headers CloudfrontCachePolicy#headers}
  */
  readonly headers?: string[];
}

export function cloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct?: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_behavior: cdktf.stringToTerraform(struct!.headerBehavior),
    headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headers),
  }
}

export interface CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#query_string_behavior CloudfrontCachePolicy#query_string_behavior}
  */
  readonly queryStringBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#query_strings CloudfrontCachePolicy#query_strings}
  */
  readonly queryStrings?: string[];
}

export function cloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct?: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query_string_behavior: cdktf.stringToTerraform(struct!.queryStringBehavior),
    query_strings: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStrings),
  }
}

export interface CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#cookies_config CloudfrontCachePolicy#cookies_config}
  */
  readonly cookiesConfig: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#enable_accept_encoding_brotli CloudfrontCachePolicy#enable_accept_encoding_brotli}
  */
  readonly enableAcceptEncodingBrotli?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#enable_accept_encoding_gzip CloudfrontCachePolicy#enable_accept_encoding_gzip}
  */
  readonly enableAcceptEncodingGzip: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#headers_config CloudfrontCachePolicy#headers_config}
  */
  readonly headersConfig: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#query_strings_config CloudfrontCachePolicy#query_strings_config}
  */
  readonly queryStringsConfig: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
}

export function cloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginToTerraform(struct?: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cookies_config: cloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct!.cookiesConfig),
    enable_accept_encoding_brotli: cdktf.booleanToTerraform(struct!.enableAcceptEncodingBrotli),
    enable_accept_encoding_gzip: cdktf.booleanToTerraform(struct!.enableAcceptEncodingGzip),
    headers_config: cloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct!.headersConfig),
    query_strings_config: cloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct!.queryStringsConfig),
  }
}

export interface CloudfrontCachePolicyCachePolicyConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#comment CloudfrontCachePolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#default_ttl CloudfrontCachePolicy#default_ttl}
  */
  readonly defaultTtl: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#max_ttl CloudfrontCachePolicy#max_ttl}
  */
  readonly maxTtl: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#min_ttl CloudfrontCachePolicy#min_ttl}
  */
  readonly minTtl: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#name CloudfrontCachePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html#parameters_in_cache_key_and_forwarded_to_origin CloudfrontCachePolicy#parameters_in_cache_key_and_forwarded_to_origin}
  */
  readonly parametersInCacheKeyAndForwardedToOrigin: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin;
}

export function cloudfrontCachePolicyCachePolicyConfigToTerraform(struct?: CloudfrontCachePolicyCachePolicyConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
    min_ttl: cdktf.numberToTerraform(struct!.minTtl),
    name: cdktf.stringToTerraform(struct!.name),
    parameters_in_cache_key_and_forwarded_to_origin: cloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginToTerraform(struct!.parametersInCacheKeyAndForwardedToOrigin),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html awscc_cloudfront_cache_policy}
*/
export class CloudfrontCachePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudfront_cache_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html awscc_cloudfront_cache_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontCachePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontCachePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_cache_policy',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cachePolicyConfig = config.cachePolicyConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_policy_config - computed: false, optional: false, required: true
  private _cachePolicyConfig: CloudfrontCachePolicyCachePolicyConfig;
  public get cachePolicyConfig() {
    return this.interpolationForAttribute('cache_policy_config') as any;
  }
  public set cachePolicyConfig(value: CloudfrontCachePolicyCachePolicyConfig) {
    this._cachePolicyConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePolicyConfigInput() {
    return this._cachePolicyConfig
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_policy_config: cloudfrontCachePolicyCachePolicyConfigToTerraform(this._cachePolicyConfig),
    };
  }
}
