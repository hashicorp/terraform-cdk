// https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotsitewiseAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html#asset_hierarchies IotsitewiseAsset#asset_hierarchies}
  */
  readonly assetHierarchies?: IotsitewiseAssetAssetHierarchies[];
  /**
  * The ID of the asset model from which to create the asset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html#asset_model_id IotsitewiseAsset#asset_model_id}
  */
  readonly assetModelId: string;
  /**
  * A unique, friendly name for the asset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html#asset_name IotsitewiseAsset#asset_name}
  */
  readonly assetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html#asset_properties IotsitewiseAsset#asset_properties}
  */
  readonly assetProperties?: IotsitewiseAssetAssetProperties[];
  /**
  * A list of key-value pairs that contain metadata for the asset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html#tags IotsitewiseAsset#tags}
  */
  readonly tags?: IotsitewiseAssetTags[];
}
export interface IotsitewiseAssetAssetHierarchies {
  /**
  * The ID of the child asset to be associated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html#child_asset_id IotsitewiseAsset#child_asset_id}
  */
  readonly childAssetId: string;
  /**
  * The LogicalID of a hierarchy in the parent asset's model.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html#logical_id IotsitewiseAsset#logical_id}
  */
  readonly logicalId: string;
}

export function iotsitewiseAssetAssetHierarchiesToTerraform(struct?: IotsitewiseAssetAssetHierarchies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    child_asset_id: cdktf.stringToTerraform(struct!.childAssetId),
    logical_id: cdktf.stringToTerraform(struct!.logicalId),
  }
}

export interface IotsitewiseAssetAssetProperties {
  /**
  * The property alias that identifies the property.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html#alias IotsitewiseAsset#alias}
  */
  readonly alias?: string;
  /**
  * Customer provided ID for property.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html#logical_id IotsitewiseAsset#logical_id}
  */
  readonly logicalId: string;
  /**
  * The MQTT notification state (ENABLED or DISABLED) for this asset property.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html#notification_state IotsitewiseAsset#notification_state}
  */
  readonly notificationState?: string;
}

export function iotsitewiseAssetAssetPropertiesToTerraform(struct?: IotsitewiseAssetAssetProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    logical_id: cdktf.stringToTerraform(struct!.logicalId),
    notification_state: cdktf.stringToTerraform(struct!.notificationState),
  }
}

export interface IotsitewiseAssetTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html#key IotsitewiseAsset#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html#value IotsitewiseAsset#value}
  */
  readonly value: string;
}

export function iotsitewiseAssetTagsToTerraform(struct?: IotsitewiseAssetTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html awscc_iotsitewise_asset}
*/
export class IotsitewiseAsset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotsitewise_asset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html awscc_iotsitewise_asset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotsitewiseAssetConfig
  */
  public constructor(scope: Construct, id: string, config: IotsitewiseAssetConfig) {
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
    this._assetHierarchies = config.assetHierarchies;
    this._assetModelId = config.assetModelId;
    this._assetName = config.assetName;
    this._assetProperties = config.assetProperties;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_arn - computed: true, optional: false, required: false
  public get assetArn() {
    return this.getStringAttribute('asset_arn');
  }

  // asset_hierarchies - computed: false, optional: true, required: false
  private _assetHierarchies?: IotsitewiseAssetAssetHierarchies[];
  public get assetHierarchies() {
    return this.interpolationForAttribute('asset_hierarchies') as any;
  }
  public set assetHierarchies(value: IotsitewiseAssetAssetHierarchies[] ) {
    this._assetHierarchies = value;
  }
  public resetAssetHierarchies() {
    this._assetHierarchies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetHierarchiesInput() {
    return this._assetHierarchies
  }

  // asset_id - computed: true, optional: false, required: false
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }

  // asset_model_id - computed: false, optional: false, required: true
  private _assetModelId: string;
  public get assetModelId() {
    return this.getStringAttribute('asset_model_id');
  }
  public set assetModelId(value: string) {
    this._assetModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetModelIdInput() {
    return this._assetModelId
  }

  // asset_name - computed: false, optional: false, required: true
  private _assetName: string;
  public get assetName() {
    return this.getStringAttribute('asset_name');
  }
  public set assetName(value: string) {
    this._assetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetNameInput() {
    return this._assetName
  }

  // asset_properties - computed: false, optional: true, required: false
  private _assetProperties?: IotsitewiseAssetAssetProperties[];
  public get assetProperties() {
    return this.interpolationForAttribute('asset_properties') as any;
  }
  public set assetProperties(value: IotsitewiseAssetAssetProperties[] ) {
    this._assetProperties = value;
  }
  public resetAssetProperties() {
    this._assetProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetPropertiesInput() {
    return this._assetProperties
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotsitewiseAssetTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotsitewiseAssetTags[] ) {
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
      asset_hierarchies: cdktf.listMapper(iotsitewiseAssetAssetHierarchiesToTerraform)(this._assetHierarchies),
      asset_model_id: cdktf.stringToTerraform(this._assetModelId),
      asset_name: cdktf.stringToTerraform(this._assetName),
      asset_properties: cdktf.listMapper(iotsitewiseAssetAssetPropertiesToTerraform)(this._assetProperties),
      tags: cdktf.listMapper(iotsitewiseAssetTagsToTerraform)(this._tags),
    };
  }
}
