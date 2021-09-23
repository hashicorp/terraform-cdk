import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudfrontCloudfrontOriginAccessIdentitiesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_cloudfront_origin_access_identities.html awscc_cloudfront_cloudfront_origin_access_identities}
*/
export declare class DataAwsccCloudfrontCloudfrontOriginAccessIdentities extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_cloudfront_origin_access_identities.html awscc_cloudfront_cloudfront_origin_access_identities} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudfrontCloudfrontOriginAccessIdentitiesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccCloudfrontCloudfrontOriginAccessIdentitiesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
