import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMediapackageAssetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_asset.html#id DataAwsccMediapackageAsset#id}
    */
    readonly id: string;
}
export declare class DataAwsccMediapackageAssetEgressEndpoints extends cdktf.ComplexComputedList {
    get packagingConfigurationId(): string;
    get url(): string;
}
export declare function dataAwsccMediapackageAssetEgressEndpointsToTerraform(struct?: DataAwsccMediapackageAssetEgressEndpoints): any;
export declare class DataAwsccMediapackageAssetTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccMediapackageAssetTagsToTerraform(struct?: DataAwsccMediapackageAssetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_asset.html awscc_mediapackage_asset}
*/
export declare class DataAwsccMediapackageAsset extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_asset.html awscc_mediapackage_asset} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMediapackageAssetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccMediapackageAssetConfig);
    get arn(): string;
    get createdAt(): string;
    get egressEndpoints(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get packagingGroupId(): string;
    get resourceId(): string;
    get sourceArn(): string;
    get sourceRoleArn(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
