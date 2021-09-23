import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3AccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the bucket that you want to associate this Access Point with.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html#bucket S3AccessPoint#bucket}
    */
    readonly bucket: string;
    /**
    * The Access Point Policy you want to apply to this access point.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html#policy S3AccessPoint#policy}
    */
    readonly policy?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html#policy_status S3AccessPoint#policy_status}
    */
    readonly policyStatus?: S3AccessPointPolicyStatus;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html#public_access_block_configuration S3AccessPoint#public_access_block_configuration}
    */
    readonly publicAccessBlockConfiguration?: S3AccessPointPublicAccessBlockConfiguration;
    /**
    * The Virtual Private Cloud (VPC) configuration for a bucket access point.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html#vpc_configuration S3AccessPoint#vpc_configuration}
    */
    readonly vpcConfiguration?: S3AccessPointVpcConfiguration;
}
export interface S3AccessPointPolicyStatus {
    /**
    * Specifies whether the policy is public or not.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html#is_public S3AccessPoint#is_public}
    */
    readonly isPublic?: string;
}
export declare function s3AccessPointPolicyStatusToTerraform(struct?: S3AccessPointPolicyStatus): any;
export interface S3AccessPointPublicAccessBlockConfiguration {
    /**
    * Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to TRUE causes the following behavior:
  - PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
   - PUT Object calls fail if the request includes a public ACL.
  . - PUT Bucket calls fail if the request includes a public ACL.
  Enabling this setting doesn't affect existing policies or ACLs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html#block_public_acls S3AccessPoint#block_public_acls}
    */
    readonly blockPublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html#block_public_policy S3AccessPoint#block_public_policy}
    */
    readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
    /**
    * Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html#ignore_public_acls S3AccessPoint#ignore_public_acls}
    */
    readonly ignorePublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.
  Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html#restrict_public_buckets S3AccessPoint#restrict_public_buckets}
    */
    readonly restrictPublicBuckets?: boolean | cdktf.IResolvable;
}
export declare function s3AccessPointPublicAccessBlockConfigurationToTerraform(struct?: S3AccessPointPublicAccessBlockConfiguration): any;
export interface S3AccessPointVpcConfiguration {
    /**
    * If this field is specified, this access point will only allow connections from the specified VPC ID.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html#vpc_id S3AccessPoint#vpc_id}
    */
    readonly vpcId?: string;
}
export declare function s3AccessPointVpcConfigurationToTerraform(struct?: S3AccessPointVpcConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html awscc_s3_access_point}
*/
export declare class S3AccessPoint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html awscc_s3_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3AccessPointConfig
    */
    constructor(scope: Construct, id: string, config: S3AccessPointConfig);
    get alias(): string;
    get arn(): string;
    private _bucket;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get id(): string;
    get name(): string;
    get networkOrigin(): string;
    private _policy?;
    get policy(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set policy(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetPolicy(): void;
    get policyInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    private _policyStatus?;
    get policyStatus(): S3AccessPointPolicyStatus;
    set policyStatus(value: S3AccessPointPolicyStatus);
    resetPolicyStatus(): void;
    get policyStatusInput(): S3AccessPointPolicyStatus | undefined;
    private _publicAccessBlockConfiguration?;
    get publicAccessBlockConfiguration(): S3AccessPointPublicAccessBlockConfiguration;
    set publicAccessBlockConfiguration(value: S3AccessPointPublicAccessBlockConfiguration);
    resetPublicAccessBlockConfiguration(): void;
    get publicAccessBlockConfigurationInput(): S3AccessPointPublicAccessBlockConfiguration | undefined;
    private _vpcConfiguration?;
    get vpcConfiguration(): S3AccessPointVpcConfiguration;
    set vpcConfiguration(value: S3AccessPointVpcConfiguration);
    resetVpcConfiguration(): void;
    get vpcConfigurationInput(): S3AccessPointVpcConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
