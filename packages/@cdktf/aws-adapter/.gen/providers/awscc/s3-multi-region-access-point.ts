// https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3MultiRegionAccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name you want to assign to this Multi Region Access Point.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point.html#name S3MultiRegionAccessPoint#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point.html#public_access_block_configuration S3MultiRegionAccessPoint#public_access_block_configuration}
  */
  readonly publicAccessBlockConfiguration?: S3MultiRegionAccessPointPublicAccessBlockConfiguration;
  /**
  * The list of buckets that you want to associate this Multi Region Access Point with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point.html#regions S3MultiRegionAccessPoint#regions}
  */
  readonly regions: S3MultiRegionAccessPointRegions[];
}
export interface S3MultiRegionAccessPointPublicAccessBlockConfiguration {
  /**
  * Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to TRUE causes the following behavior:
- PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
 - PUT Object calls fail if the request includes a public ACL.
. - PUT Bucket calls fail if the request includes a public ACL.
Enabling this setting doesn't affect existing policies or ACLs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point.html#block_public_acls S3MultiRegionAccessPoint#block_public_acls}
  */
  readonly blockPublicAcls?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point.html#block_public_policy S3MultiRegionAccessPoint#block_public_policy}
  */
  readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point.html#ignore_public_acls S3MultiRegionAccessPoint#ignore_public_acls}
  */
  readonly ignorePublicAcls?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.
Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point.html#restrict_public_buckets S3MultiRegionAccessPoint#restrict_public_buckets}
  */
  readonly restrictPublicBuckets?: boolean | cdktf.IResolvable;
}

export function s3MultiRegionAccessPointPublicAccessBlockConfigurationToTerraform(struct?: S3MultiRegionAccessPointPublicAccessBlockConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    block_public_acls: cdktf.booleanToTerraform(struct!.blockPublicAcls),
    block_public_policy: cdktf.booleanToTerraform(struct!.blockPublicPolicy),
    ignore_public_acls: cdktf.booleanToTerraform(struct!.ignorePublicAcls),
    restrict_public_buckets: cdktf.booleanToTerraform(struct!.restrictPublicBuckets),
  }
}

export interface S3MultiRegionAccessPointRegions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point.html#bucket S3MultiRegionAccessPoint#bucket}
  */
  readonly bucket: string;
}

export function s3MultiRegionAccessPointRegionsToTerraform(struct?: S3MultiRegionAccessPointRegions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point.html awscc_s3_multi_region_access_point}
*/
export class S3MultiRegionAccessPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_s3_multi_region_access_point";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point.html awscc_s3_multi_region_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3MultiRegionAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: S3MultiRegionAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3_multi_region_access_point',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._publicAccessBlockConfiguration = config.publicAccessBlockConfiguration;
    this._regions = config.regions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // public_access_block_configuration - computed: true, optional: true, required: false
  private _publicAccessBlockConfiguration?: S3MultiRegionAccessPointPublicAccessBlockConfiguration;
  public get publicAccessBlockConfiguration() {
    return this.interpolationForAttribute('public_access_block_configuration') as any;
  }
  public set publicAccessBlockConfiguration(value: S3MultiRegionAccessPointPublicAccessBlockConfiguration) {
    this._publicAccessBlockConfiguration = value;
  }
  public resetPublicAccessBlockConfiguration() {
    this._publicAccessBlockConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessBlockConfigurationInput() {
    return this._publicAccessBlockConfiguration
  }

  // regions - computed: false, optional: false, required: true
  private _regions: S3MultiRegionAccessPointRegions[];
  public get regions() {
    return this.interpolationForAttribute('regions') as any;
  }
  public set regions(value: S3MultiRegionAccessPointRegions[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      public_access_block_configuration: s3MultiRegionAccessPointPublicAccessBlockConfigurationToTerraform(this._publicAccessBlockConfiguration),
      regions: cdktf.listMapper(s3MultiRegionAccessPointRegionsToTerraform)(this._regions),
    };
  }
}
