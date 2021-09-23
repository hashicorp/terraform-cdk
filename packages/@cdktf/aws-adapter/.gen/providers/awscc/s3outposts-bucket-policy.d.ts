import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3OutpostsBucketPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the specified bucket.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_bucket_policy.html#bucket S3OutpostsBucketPolicy#bucket}
    */
    readonly bucket: string;
    /**
    * A policy document containing permissions to add to the specified bucket.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_bucket_policy.html#policy_document S3OutpostsBucketPolicy#policy_document}
    */
    readonly policyDocument: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_bucket_policy.html awscc_s3outposts_bucket_policy}
*/
export declare class S3OutpostsBucketPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_bucket_policy.html awscc_s3outposts_bucket_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3OutpostsBucketPolicyConfig
    */
    constructor(scope: Construct, id: string, config: S3OutpostsBucketPolicyConfig);
    private _bucket;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get id(): string;
    private _policyDocument;
    get policyDocument(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set policyDocument(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    get policyDocumentInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
