import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function cloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigToTerraform(struct?: CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cloudfront_origin_access_identity.html awscc_cloudfront_cloudfront_origin_access_identity}
*/
export declare class CloudfrontCloudfrontOriginAccessIdentity extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_cloudfront_origin_access_identity.html awscc_cloudfront_cloudfront_origin_access_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontCloudfrontOriginAccessIdentityConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontCloudfrontOriginAccessIdentityConfig);
    private _cloudfrontOriginAccessIdentityConfig;
    get cloudfrontOriginAccessIdentityConfig(): CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig;
    set cloudfrontOriginAccessIdentityConfig(value: CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig);
    get cloudfrontOriginAccessIdentityConfigInput(): CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig;
    get id(): string;
    get s3CanonicalUserId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
