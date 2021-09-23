import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotsitewiseAssetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset.html#id DataAwsccIotsitewiseAsset#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotsitewiseAssetAssetHierarchies extends cdktf.ComplexComputedList {
    get childAssetId(): string;
    get logicalId(): string;
}
export declare function dataAwsccIotsitewiseAssetAssetHierarchiesToTerraform(struct?: DataAwsccIotsitewiseAssetAssetHierarchies): any;
export declare class DataAwsccIotsitewiseAssetAssetProperties extends cdktf.ComplexComputedList {
    get alias(): string;
    get logicalId(): string;
    get notificationState(): string;
}
export declare function dataAwsccIotsitewiseAssetAssetPropertiesToTerraform(struct?: DataAwsccIotsitewiseAssetAssetProperties): any;
export declare class DataAwsccIotsitewiseAssetTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotsitewiseAssetTagsToTerraform(struct?: DataAwsccIotsitewiseAssetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset.html awscc_iotsitewise_asset}
*/
export declare class DataAwsccIotsitewiseAsset extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset.html awscc_iotsitewise_asset} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotsitewiseAssetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotsitewiseAssetConfig);
    get assetArn(): string;
    get assetHierarchies(): any;
    get assetId(): string;
    get assetModelId(): string;
    get assetName(): string;
    get assetProperties(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
