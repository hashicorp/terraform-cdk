import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function cloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigToTerraform(struct?: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig): any;
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
export declare function cloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigToTerraform(struct?: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig): any;
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
export declare function cloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigToTerraform(struct?: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig): any;
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
export declare function cloudfrontOriginRequestPolicyOriginRequestPolicyConfigToTerraform(struct?: CloudfrontOriginRequestPolicyOriginRequestPolicyConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html awscc_cloudfront_origin_request_policy}
*/
export declare class CloudfrontOriginRequestPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_origin_request_policy.html awscc_cloudfront_origin_request_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontOriginRequestPolicyConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontOriginRequestPolicyConfig);
    get id(): string;
    get lastModifiedTime(): string;
    private _originRequestPolicyConfig;
    get originRequestPolicyConfig(): CloudfrontOriginRequestPolicyOriginRequestPolicyConfig;
    set originRequestPolicyConfig(value: CloudfrontOriginRequestPolicyOriginRequestPolicyConfig);
    get originRequestPolicyConfigInput(): CloudfrontOriginRequestPolicyOriginRequestPolicyConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
