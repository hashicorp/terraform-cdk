import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudfrontCachePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_cache_policy.html#id DataAwsccCloudfrontCachePolicy#id}
    */
    readonly id: string;
}
export declare class DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig extends cdktf.ComplexComputedList {
    get cookieBehavior(): string;
    get cookies(): string[];
}
export declare function dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig): any;
export declare class DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig extends cdktf.ComplexComputedList {
    get headerBehavior(): string;
    get headers(): string[];
}
export declare function dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig): any;
export declare class DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig extends cdktf.ComplexComputedList {
    get queryStringBehavior(): string;
    get queryStrings(): string[];
}
export declare function dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig): any;
export declare class DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin extends cdktf.ComplexComputedList {
    get cookiesConfig(): any;
    get enableAcceptEncodingBrotli(): any;
    get enableAcceptEncodingGzip(): any;
    get headersConfig(): any;
    get queryStringsConfig(): any;
}
export declare function dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginToTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin): any;
export declare class DataAwsccCloudfrontCachePolicyCachePolicyConfig extends cdktf.ComplexComputedList {
    get comment(): string;
    get defaultTtl(): number;
    get maxTtl(): number;
    get minTtl(): number;
    get name(): string;
    get parametersInCacheKeyAndForwardedToOrigin(): any;
}
export declare function dataAwsccCloudfrontCachePolicyCachePolicyConfigToTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_cache_policy.html awscc_cloudfront_cache_policy}
*/
export declare class DataAwsccCloudfrontCachePolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_cache_policy.html awscc_cloudfront_cache_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudfrontCachePolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudfrontCachePolicyConfig);
    get cachePolicyConfig(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastModifiedTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
