import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudfrontPublicKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_public_key.html#id DataAwsccCloudfrontPublicKey#id}
    */
    readonly id: string;
}
export declare class DataAwsccCloudfrontPublicKeyPublicKeyConfig extends cdktf.ComplexComputedList {
    get callerReference(): string;
    get comment(): string;
    get encodedKey(): string;
    get name(): string;
}
export declare function dataAwsccCloudfrontPublicKeyPublicKeyConfigToTerraform(struct?: DataAwsccCloudfrontPublicKeyPublicKeyConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_public_key.html awscc_cloudfront_public_key}
*/
export declare class DataAwsccCloudfrontPublicKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_public_key.html awscc_cloudfront_public_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudfrontPublicKeyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudfrontPublicKeyConfig);
    get createdTime(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get publicKeyConfig(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
