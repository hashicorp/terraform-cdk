import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccS3OutpostsBucketPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/s3outposts_bucket_policy.html#id DataAwsccS3OutpostsBucketPolicy#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3outposts_bucket_policy.html awscc_s3outposts_bucket_policy}
*/
export declare class DataAwsccS3OutpostsBucketPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3outposts_bucket_policy.html awscc_s3outposts_bucket_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccS3OutpostsBucketPolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccS3OutpostsBucketPolicyConfig);
    get bucket(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    policyDocument(key: string): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
