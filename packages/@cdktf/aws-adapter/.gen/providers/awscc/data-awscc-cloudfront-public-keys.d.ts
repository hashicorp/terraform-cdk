import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudfrontPublicKeysConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_public_keys.html awscc_cloudfront_public_keys}
*/
export declare class DataAwsccCloudfrontPublicKeys extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_public_keys.html awscc_cloudfront_public_keys} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudfrontPublicKeysConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccCloudfrontPublicKeysConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
