// https://www.terraform.io/docs/providers/awscc/d/cloudfront_cache_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCloudfrontCachePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_cache_policy.html#id DataAwsccCloudfrontCachePolicy#id}
  */
  readonly id: string;
}
export class DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig extends cdktf.ComplexComputedList {

  // cookie_behavior - computed: true, optional: false, required: false
  public get cookieBehavior() {
    return this.getStringAttribute('cookie_behavior');
  }

  // cookies - computed: true, optional: false, required: false
  public get cookies() {
    return this.getListAttribute('cookies');
  }
}

export function dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cookie_behavior: cdktf.stringToTerraform(struct!.cookieBehavior),
    cookies: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cookies),
  }
}

export class DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig extends cdktf.ComplexComputedList {

  // header_behavior - computed: true, optional: false, required: false
  public get headerBehavior() {
    return this.getStringAttribute('header_behavior');
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return this.getListAttribute('headers');
  }
}

export function dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_behavior: cdktf.stringToTerraform(struct!.headerBehavior),
    headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headers),
  }
}

export class DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig extends cdktf.ComplexComputedList {

  // query_string_behavior - computed: true, optional: false, required: false
  public get queryStringBehavior() {
    return this.getStringAttribute('query_string_behavior');
  }

  // query_strings - computed: true, optional: false, required: false
  public get queryStrings() {
    return this.getListAttribute('query_strings');
  }
}

export function dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query_string_behavior: cdktf.stringToTerraform(struct!.queryStringBehavior),
    query_strings: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStrings),
  }
}

export class DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin extends cdktf.ComplexComputedList {

  // cookies_config - computed: true, optional: false, required: false
  public get cookiesConfig() {
    return this.interpolationForAttribute('cookies_config') as any;
  }

  // enable_accept_encoding_brotli - computed: true, optional: false, required: false
  public get enableAcceptEncodingBrotli() {
    return this.getBooleanAttribute('enable_accept_encoding_brotli');
  }

  // enable_accept_encoding_gzip - computed: true, optional: false, required: false
  public get enableAcceptEncodingGzip() {
    return this.getBooleanAttribute('enable_accept_encoding_gzip');
  }

  // headers_config - computed: true, optional: false, required: false
  public get headersConfig() {
    return this.interpolationForAttribute('headers_config') as any;
  }

  // query_strings_config - computed: true, optional: false, required: false
  public get queryStringsConfig() {
    return this.interpolationForAttribute('query_strings_config') as any;
  }
}

export function dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginToTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cookies_config: dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct!.cookiesConfig),
    enable_accept_encoding_brotli: cdktf.booleanToTerraform(struct!.enableAcceptEncodingBrotli),
    enable_accept_encoding_gzip: cdktf.booleanToTerraform(struct!.enableAcceptEncodingGzip),
    headers_config: dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct!.headersConfig),
    query_strings_config: dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct!.queryStringsConfig),
  }
}

export class DataAwsccCloudfrontCachePolicyCachePolicyConfig extends cdktf.ComplexComputedList {

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // default_ttl - computed: true, optional: false, required: false
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }

  // max_ttl - computed: true, optional: false, required: false
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }

  // min_ttl - computed: true, optional: false, required: false
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters_in_cache_key_and_forwarded_to_origin - computed: true, optional: false, required: false
  public get parametersInCacheKeyAndForwardedToOrigin() {
    return this.interpolationForAttribute('parameters_in_cache_key_and_forwarded_to_origin') as any;
  }
}

export function dataAwsccCloudfrontCachePolicyCachePolicyConfigToTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
    min_ttl: cdktf.numberToTerraform(struct!.minTtl),
    name: cdktf.stringToTerraform(struct!.name),
    parameters_in_cache_key_and_forwarded_to_origin: dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginToTerraform(struct!.parametersInCacheKeyAndForwardedToOrigin),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_cache_policy.html awscc_cloudfront_cache_policy}
*/
export class DataAwsccCloudfrontCachePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudfront_cache_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_cache_policy.html awscc_cloudfront_cache_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudfrontCachePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudfrontCachePolicyConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_policy_config - computed: true, optional: false, required: false
  public get cachePolicyConfig() {
    return this.interpolationForAttribute('cache_policy_config') as any;
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
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
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
