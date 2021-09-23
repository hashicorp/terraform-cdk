import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ObjectlambdaAccessPointPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the Amazon S3 ObjectLambdaAccessPoint to which the policy applies.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point_policy.html#object_lambda_access_point S3ObjectlambdaAccessPointPolicy#object_lambda_access_point}
    */
    readonly objectLambdaAccessPoint: string;
    /**
    * A policy document containing permissions to add to the specified ObjectLambdaAccessPoint. For more information, see Access Policy Language Overview (https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html) in the Amazon Simple Storage Service Developer Guide.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point_policy.html#policy_document S3ObjectlambdaAccessPointPolicy#policy_document}
    */
    readonly policyDocument: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point_policy.html awscc_s3objectlambda_access_point_policy}
*/
export declare class S3ObjectlambdaAccessPointPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point_policy.html awscc_s3objectlambda_access_point_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ObjectlambdaAccessPointPolicyConfig
    */
    constructor(scope: Construct, id: string, config: S3ObjectlambdaAccessPointPolicyConfig);
    get id(): string;
    private _objectLambdaAccessPoint;
    get objectLambdaAccessPoint(): string;
    set objectLambdaAccessPoint(value: string);
    get objectLambdaAccessPointInput(): string;
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
