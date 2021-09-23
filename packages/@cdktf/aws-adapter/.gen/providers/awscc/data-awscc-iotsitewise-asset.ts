// https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotsitewiseAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset.html#id DataAwsccIotsitewiseAsset#id}
  */
  readonly id: string;
}
export class DataAwsccIotsitewiseAssetAssetHierarchies extends cdktf.ComplexComputedList {

  // child_asset_id - computed: true, optional: false, required: false
  public get childAssetId() {
    return this.getStringAttribute('child_asset_id');
  }

  // logical_id - computed: true, optional: false, required: false
  public get logicalId() {
    return this.getStringAttribute('logical_id');
  }
}

export function dataAwsccIotsitewiseAssetAssetHierarchiesToTerraform(struct?: DataAwsccIotsitewiseAssetAssetHierarchies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    child_asset_id: cdktf.stringToTerraform(struct!.childAssetId),
    logical_id: cdktf.stringToTerraform(struct!.logicalId),
  }
}

export class DataAwsccIotsitewiseAssetAssetProperties extends cdktf.ComplexComputedList {

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // logical_id - computed: true, optional: false, required: false
  public get logicalId() {
    return this.getStringAttribute('logical_id');
  }

  // notification_state - computed: true, optional: false, required: false
  public get notificationState() {
    return this.getStringAttribute('notification_state');
  }
}

export function dataAwsccIotsitewiseAssetAssetPropertiesToTerraform(struct?: DataAwsccIotsitewiseAssetAssetProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    logical_id: cdktf.stringToTerraform(struct!.logicalId),
    notification_state: cdktf.stringToTerraform(struct!.notificationState),
  }
}

export class DataAwsccIotsitewiseAssetTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotsitewiseAssetTagsToTerraform(struct?: DataAwsccIotsitewiseAssetTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset.html awscc_iotsitewise_asset}
*/
export class DataAwsccIotsitewiseAsset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotsitewise_asset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset.html awscc_iotsitewise_asset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotsitewiseAssetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotsitewiseAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotsitewise_asset',
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

  // asset_arn - computed: true, optional: false, required: false
  public get assetArn() {
    return this.getStringAttribute('asset_arn');
  }

  // asset_hierarchies - computed: true, optional: false, required: false
  public get assetHierarchies() {
    return this.interpolationForAttribute('asset_hierarchies') as any;
  }

  // asset_id - computed: true, optional: false, required: false
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }

  // asset_model_id - computed: true, optional: false, required: false
  public get assetModelId() {
    return this.getStringAttribute('asset_model_id');
  }

  // asset_name - computed: true, optional: false, required: false
  public get assetName() {
    return this.getStringAttribute('asset_name');
  }

  // asset_properties - computed: true, optional: false, required: false
  public get assetProperties() {
    return this.interpolationForAttribute('asset_properties') as any;
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
