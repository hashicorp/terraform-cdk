// https://www.terraform.io/docs/providers/awscc/d/cloudfront_origin_request_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCloudfrontOriginRequestPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_origin_request_policy.html#id DataAwsccCloudfrontOriginRequestPolicy#id}
  */
  readonly id: string;
}
export class DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig extends cdktf.ComplexComputedList {

  // cookie_behavior - computed: true, optional: false, required: false
  public get cookieBehavior() {
    return this.getStringAttribute('cookie_behavior');
  }

  // cookies - computed: true, optional: false, required: false
  public get cookies() {
    return this.getListAttribute('cookies');
  }
}

export function dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigToTerraform(struct?: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cookie_behavior: cdktf.stringToTerraform(struct!.cookieBehavior),
    cookies: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cookies),
  }
}

export class DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig extends cdktf.ComplexComputedList {

  // header_behavior - computed: true, optional: false, required: false
  public get headerBehavior() {
    return this.getStringAttribute('header_behavior');
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return this.getListAttribute('headers');
  }
}

export function dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigToTerraform(struct?: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_behavior: cdktf.stringToTerraform(struct!.headerBehavior),
    headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headers),
  }
}

export class DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig extends cdktf.ComplexComputedList {

  // query_string_behavior - computed: true, optional: false, required: false
  public get queryStringBehavior() {
    return this.getStringAttribute('query_string_behavior');
  }

  // query_strings - computed: true, optional: false, required: false
  public get queryStrings() {
    return this.getListAttribute('query_strings');
  }
}

export function dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigToTerraform(struct?: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query_string_behavior: cdktf.stringToTerraform(struct!.queryStringBehavior),
    query_strings: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStrings),
  }
}

export class DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig extends cdktf.ComplexComputedList {

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // cookies_config - computed: true, optional: false, required: false
  public get cookiesConfig() {
    return this.interpolationForAttribute('cookies_config') as any;
  }

  // headers_config - computed: true, optional: false, required: false
  public get headersConfig() {
    return this.interpolationForAttribute('headers_config') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query_strings_config - computed: true, optional: false, required: false
  public get queryStringsConfig() {
    return this.interpolationForAttribute('query_strings_config') as any;
  }
}

export function dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigToTerraform(struct?: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    cookies_config: dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigToTerraform(struct!.cookiesConfig),
    headers_config: dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigToTerraform(struct!.headersConfig),
    name: cdktf.stringToTerraform(struct!.name),
    query_strings_config: dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigToTerraform(struct!.queryStringsConfig),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_origin_request_policy.html awscc_cloudfront_origin_request_policy}
*/
export class DataAwsccCloudfrontOriginRequestPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudfront_origin_request_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_origin_request_policy.html awscc_cloudfront_origin_request_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudfrontOriginRequestPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudfrontOriginRequestPolicyConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // origin_request_policy_config - computed: true, optional: false, required: false
  public get originRequestPolicyConfig() {
    return this.interpolationForAttribute('origin_request_policy_config') as any;
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
