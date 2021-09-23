// https://www.terraform.io/docs/providers/awscc/r/mediapackage_asset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediapackageAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the Asset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_asset.html#id MediapackageAsset#id}
  */
  readonly id: string;
  /**
  * The ID of the PackagingGroup for the Asset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_asset.html#packaging_group_id MediapackageAsset#packaging_group_id}
  */
  readonly packagingGroupId: string;
  /**
  * The resource ID to include in SPEKE key requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_asset.html#resource_id MediapackageAsset#resource_id}
  */
  readonly resourceId?: string;
  /**
  * ARN of the source object in S3.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_asset.html#source_arn MediapackageAsset#source_arn}
  */
  readonly sourceArn: string;
  /**
  * The IAM role_arn used to access the source S3 bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_asset.html#source_role_arn MediapackageAsset#source_role_arn}
  */
  readonly sourceRoleArn: string;
  /**
  * A collection of tags associated with a resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_asset.html#tags MediapackageAsset#tags}
  */
  readonly tags?: MediapackageAssetTags[];
}
export class MediapackageAssetEgressEndpoints extends cdktf.ComplexComputedList {

  // packaging_configuration_id - computed: true, optional: false, required: true
  public get packagingConfigurationId() {
    return this.getStringAttribute('packaging_configuration_id');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }
}

export function mediapackageAssetEgressEndpointsToTerraform(struct?: MediapackageAssetEgressEndpoints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    packaging_configuration_id: cdktf.stringToTerraform(struct!.packagingConfigurationId),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface MediapackageAssetTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_asset.html#key MediapackageAsset#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_asset.html#value MediapackageAsset#value}
  */
  readonly value: string;
}

export function mediapackageAssetTagsToTerraform(struct?: MediapackageAssetTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_asset.html awscc_mediapackage_asset}
*/
export class MediapackageAsset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediapackage_asset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_asset.html awscc_mediapackage_asset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediapackageAssetConfig
  */
  public constructor(scope: Construct, id: string, config: MediapackageAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediapackage_asset',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._packagingGroupId = config.packagingGroupId;
    this._resourceId = config.resourceId;
    this._sourceArn = config.sourceArn;
    this._sourceRoleArn = config.sourceRoleArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // egress_endpoints - computed: true, optional: false, required: false
  public get egressEndpoints() {
    return this.interpolationForAttribute('egress_endpoints') as any;
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // packaging_group_id - computed: false, optional: false, required: true
  private _packagingGroupId: string;
  public get packagingGroupId() {
    return this.getStringAttribute('packaging_group_id');
  }
  public set packagingGroupId(value: string) {
    this._packagingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packagingGroupIdInput() {
    return this._packagingGroupId
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string;
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string ) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId
  }

  // source_arn - computed: false, optional: false, required: true
  private _sourceArn: string;
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
  public set sourceArn(value: string) {
    this._sourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArnInput() {
    return this._sourceArn
  }

  // source_role_arn - computed: false, optional: false, required: true
  private _sourceRoleArn: string;
  public get sourceRoleArn() {
    return this.getStringAttribute('source_role_arn');
  }
  public set sourceRoleArn(value: string) {
    this._sourceRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRoleArnInput() {
    return this._sourceRoleArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: MediapackageAssetTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: MediapackageAssetTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      packaging_group_id: cdktf.stringToTerraform(this._packagingGroupId),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      source_arn: cdktf.stringToTerraform(this._sourceArn),
      source_role_arn: cdktf.stringToTerraform(this._sourceRoleArn),
      tags: cdktf.listMapper(mediapackageAssetTagsToTerraform)(this._tags),
    };
  }
}
