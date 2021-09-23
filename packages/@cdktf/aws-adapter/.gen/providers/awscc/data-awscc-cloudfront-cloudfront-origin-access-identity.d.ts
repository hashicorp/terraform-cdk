import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_cloudfront_origin_access_identity.html#id DataAwsccCloudfrontCloudfrontOriginAccessIdentity#id}
    */
    readonly id: string;
}
export declare class DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig extends cdktf.ComplexComputedList {
    get comment(): string;
}
export declare function dataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigToTerraform(struct?: DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_cloudfront_origin_access_identity.html awscc_cloudfront_cloudfront_origin_access_identity}
*/
export declare class DataAwsccCloudfrontCloudfrontOriginAccessIdentity extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_cloudfront_origin_access_identity.html awscc_cloudfront_cloudfront_origin_access_identity} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig);
    get cloudfrontOriginAccessIdentityConfig(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get s3CanonicalUserId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
