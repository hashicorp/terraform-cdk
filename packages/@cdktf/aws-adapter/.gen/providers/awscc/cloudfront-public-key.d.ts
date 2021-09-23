import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontPublicKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_public_key.html#public_key_config CloudfrontPublicKey#public_key_config}
    */
    readonly publicKeyConfig: CloudfrontPublicKeyPublicKeyConfig;
}
export interface CloudfrontPublicKeyPublicKeyConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_public_key.html#caller_reference CloudfrontPublicKey#caller_reference}
    */
    readonly callerReference: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_public_key.html#comment CloudfrontPublicKey#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_public_key.html#encoded_key CloudfrontPublicKey#encoded_key}
    */
    readonly encodedKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_public_key.html#name CloudfrontPublicKey#name}
    */
    readonly name: string;
}
export declare function cloudfrontPublicKeyPublicKeyConfigToTerraform(struct?: CloudfrontPublicKeyPublicKeyConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_public_key.html awscc_cloudfront_public_key}
*/
export declare class CloudfrontPublicKey extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_public_key.html awscc_cloudfront_public_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontPublicKeyConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontPublicKeyConfig);
    get createdTime(): string;
    get id(): string;
    private _publicKeyConfig;
    get publicKeyConfig(): CloudfrontPublicKeyPublicKeyConfig;
    set publicKeyConfig(value: CloudfrontPublicKeyPublicKeyConfig);
    get publicKeyConfigInput(): CloudfrontPublicKeyPublicKeyConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
