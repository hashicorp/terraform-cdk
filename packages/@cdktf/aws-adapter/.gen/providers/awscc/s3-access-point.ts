// https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly policy?: { [key: string]: string } | cdktf.IResolvable;
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

export function s3AccessPointPolicyStatusToTerraform(struct?: S3AccessPointPolicyStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_public: cdktf.stringToTerraform(struct!.isPublic),
  }
}

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

export function s3AccessPointPublicAccessBlockConfigurationToTerraform(struct?: S3AccessPointPublicAccessBlockConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    block_public_acls: cdktf.booleanToTerraform(struct!.blockPublicAcls),
    block_public_policy: cdktf.booleanToTerraform(struct!.blockPublicPolicy),
    ignore_public_acls: cdktf.booleanToTerraform(struct!.ignorePublicAcls),
    restrict_public_buckets: cdktf.booleanToTerraform(struct!.restrictPublicBuckets),
  }
}

export interface S3AccessPointVpcConfiguration {
  /**
  * If this field is specified, this access point will only allow connections from the specified VPC ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html#vpc_id S3AccessPoint#vpc_id}
  */
  readonly vpcId?: string;
}

export function s3AccessPointVpcConfigurationToTerraform(struct?: S3AccessPointVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html awscc_s3_access_point}
*/
export class S3AccessPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_s3_access_point";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/s3_access_point.html awscc_s3_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3AccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: S3AccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3_access_point',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._policy = config.policy;
    this._policyStatus = config.policyStatus;
    this._publicAccessBlockConfiguration = config.publicAccessBlockConfiguration;
    this._vpcConfiguration = config.vpcConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_origin - computed: true, optional: false, required: false
  public get networkOrigin() {
    return this.getStringAttribute('network_origin');
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: { [key: string]: string } | cdktf.IResolvable;
  public get policy() {
    return this.interpolationForAttribute('policy') as any;
  }
  public set policy(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // policy_status - computed: false, optional: true, required: false
  private _policyStatus?: S3AccessPointPolicyStatus;
  public get policyStatus() {
    return this.interpolationForAttribute('policy_status') as any;
  }
  public set policyStatus(value: S3AccessPointPolicyStatus ) {
    this._policyStatus = value;
  }
  public resetPolicyStatus() {
    this._policyStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyStatusInput() {
    return this._policyStatus
  }

  // public_access_block_configuration - computed: true, optional: true, required: false
  private _publicAccessBlockConfiguration?: S3AccessPointPublicAccessBlockConfiguration;
  public get publicAccessBlockConfiguration() {
    return this.interpolationForAttribute('public_access_block_configuration') as any;
  }
  public set publicAccessBlockConfiguration(value: S3AccessPointPublicAccessBlockConfiguration) {
    this._publicAccessBlockConfiguration = value;
  }
  public resetPublicAccessBlockConfiguration() {
    this._publicAccessBlockConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessBlockConfigurationInput() {
    return this._publicAccessBlockConfiguration
  }

  // vpc_configuration - computed: true, optional: true, required: false
  private _vpcConfiguration?: S3AccessPointVpcConfiguration;
  public get vpcConfiguration() {
    return this.interpolationForAttribute('vpc_configuration') as any;
  }
  public set vpcConfiguration(value: S3AccessPointVpcConfiguration) {
    this._vpcConfiguration = value;
  }
  public resetVpcConfiguration() {
    this._vpcConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      policy: cdktf.hashMapper(cdktf.anyToTerraform)(this._policy),
      policy_status: s3AccessPointPolicyStatusToTerraform(this._policyStatus),
      public_access_block_configuration: s3AccessPointPublicAccessBlockConfigurationToTerraform(this._publicAccessBlockConfiguration),
      vpc_configuration: s3AccessPointVpcConfigurationToTerraform(this._vpcConfiguration),
    };
  }
}
