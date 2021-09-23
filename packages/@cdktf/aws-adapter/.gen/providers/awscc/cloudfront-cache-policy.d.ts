import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function cloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct?: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig): any;
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
export declare function cloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct?: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig): any;
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
export declare function cloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct?: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig): any;
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
export declare function cloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginToTerraform(struct?: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin): any;
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
export declare function cloudfrontCachePolicyCachePolicyConfigToTerraform(struct?: CloudfrontCachePolicyCachePolicyConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html awscc_cloudfront_cache_policy}
*/
export declare class CloudfrontCachePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cache_policy.html awscc_cloudfront_cache_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontCachePolicyConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontCachePolicyConfig);
    private _cachePolicyConfig;
    get cachePolicyConfig(): CloudfrontCachePolicyCachePolicyConfig;
    set cachePolicyConfig(value: CloudfrontCachePolicyCachePolicyConfig);
    get cachePolicyConfigInput(): CloudfrontCachePolicyCachePolicyConfig;
    get id(): string;
    get lastModifiedTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
