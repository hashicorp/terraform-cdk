import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function iotsitewiseAssetAssetHierarchiesToTerraform(struct?: IotsitewiseAssetAssetHierarchies): any;
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
export declare function iotsitewiseAssetAssetPropertiesToTerraform(struct?: IotsitewiseAssetAssetProperties): any;
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
export declare function iotsitewiseAssetTagsToTerraform(struct?: IotsitewiseAssetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html awscc_iotsitewise_asset}
*/
export declare class IotsitewiseAsset extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset.html awscc_iotsitewise_asset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotsitewiseAssetConfig
    */
    constructor(scope: Construct, id: string, config: IotsitewiseAssetConfig);
    get assetArn(): string;
    private _assetHierarchies?;
    get assetHierarchies(): IotsitewiseAssetAssetHierarchies[];
    set assetHierarchies(value: IotsitewiseAssetAssetHierarchies[]);
    resetAssetHierarchies(): void;
    get assetHierarchiesInput(): IotsitewiseAssetAssetHierarchies[] | undefined;
    get assetId(): string;
    private _assetModelId;
    get assetModelId(): string;
    set assetModelId(value: string);
    get assetModelIdInput(): string;
    private _assetName;
    get assetName(): string;
    set assetName(value: string);
    get assetNameInput(): string;
    private _assetProperties?;
    get assetProperties(): IotsitewiseAssetAssetProperties[];
    set assetProperties(value: IotsitewiseAssetAssetProperties[]);
    resetAssetProperties(): void;
    get assetPropertiesInput(): IotsitewiseAssetAssetProperties[] | undefined;
    get id(): string;
    private _tags?;
    get tags(): IotsitewiseAssetTags[];
    set tags(value: IotsitewiseAssetTags[]);
    resetTags(): void;
    get tagsInput(): IotsitewiseAssetTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
