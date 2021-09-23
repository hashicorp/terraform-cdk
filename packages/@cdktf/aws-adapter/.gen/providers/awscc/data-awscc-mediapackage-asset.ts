// https://www.terraform.io/docs/providers/awscc/d/mediapackage_asset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccMediapackageAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_asset.html#id DataAwsccMediapackageAsset#id}
  */
  readonly id: string;
}
export class DataAwsccMediapackageAssetEgressEndpoints extends cdktf.ComplexComputedList {

  // packaging_configuration_id - computed: true, optional: false, required: false
  public get packagingConfigurationId() {
    return this.getStringAttribute('packaging_configuration_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export function dataAwsccMediapackageAssetEgressEndpointsToTerraform(struct?: DataAwsccMediapackageAssetEgressEndpoints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    packaging_configuration_id: cdktf.stringToTerraform(struct!.packagingConfigurationId),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class DataAwsccMediapackageAssetTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccMediapackageAssetTagsToTerraform(struct?: DataAwsccMediapackageAssetTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_asset.html awscc_mediapackage_asset}
*/
export class DataAwsccMediapackageAsset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediapackage_asset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_asset.html awscc_mediapackage_asset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediapackageAssetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediapackageAssetConfig) {
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

  // packaging_group_id - computed: true, optional: false, required: false
  public get packagingGroupId() {
    return this.getStringAttribute('packaging_group_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // source_arn - computed: true, optional: false, required: false
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }

  // source_role_arn - computed: true, optional: false, required: false
  public get sourceRoleArn() {
    return this.getStringAttribute('source_role_arn');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
