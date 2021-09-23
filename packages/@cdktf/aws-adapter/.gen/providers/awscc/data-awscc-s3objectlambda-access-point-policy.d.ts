import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccS3ObjectlambdaAccessPointPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/s3objectlambda_access_point_policy.html#id DataAwsccS3ObjectlambdaAccessPointPolicy#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3objectlambda_access_point_policy.html awscc_s3objectlambda_access_point_policy}
*/
export declare class DataAwsccS3ObjectlambdaAccessPointPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3objectlambda_access_point_policy.html awscc_s3objectlambda_access_point_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccS3ObjectlambdaAccessPointPolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccS3ObjectlambdaAccessPointPolicyConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get objectLambdaAccessPoint(): string;
    policyDocument(key: string): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
