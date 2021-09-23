import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudfrontOriginRequestPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_origin_request_policy.html#id DataAwsccCloudfrontOriginRequestPolicy#id}
    */
    readonly id: string;
}
export declare class DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig extends cdktf.ComplexComputedList {
    get cookieBehavior(): string;
    get cookies(): string[];
}
export declare function dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigToTerraform(struct?: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig): any;
export declare class DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig extends cdktf.ComplexComputedList {
    get headerBehavior(): string;
    get headers(): string[];
}
export declare function dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigToTerraform(struct?: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig): any;
export declare class DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig extends cdktf.ComplexComputedList {
    get queryStringBehavior(): string;
    get queryStrings(): string[];
}
export declare function dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigToTerraform(struct?: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig): any;
export declare class DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig extends cdktf.ComplexComputedList {
    get comment(): string;
    get cookiesConfig(): any;
    get headersConfig(): any;
    get name(): string;
    get queryStringsConfig(): any;
}
export declare function dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigToTerraform(struct?: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_origin_request_policy.html awscc_cloudfront_origin_request_policy}
*/
export declare class DataAwsccCloudfrontOriginRequestPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_origin_request_policy.html awscc_cloudfront_origin_request_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudfrontOriginRequestPolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudfrontOriginRequestPolicyConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastModifiedTime(): string;
    get originRequestPolicyConfig(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
