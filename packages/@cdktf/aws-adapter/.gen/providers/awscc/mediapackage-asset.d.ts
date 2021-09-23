import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class MediapackageAssetEgressEndpoints extends cdktf.ComplexComputedList {
    get packagingConfigurationId(): string;
    get url(): string;
}
export declare function mediapackageAssetEgressEndpointsToTerraform(struct?: MediapackageAssetEgressEndpoints): any;
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
export declare function mediapackageAssetTagsToTerraform(struct?: MediapackageAssetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_asset.html awscc_mediapackage_asset}
*/
export declare class MediapackageAsset extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediapackage_asset.html awscc_mediapackage_asset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediapackageAssetConfig
    */
    constructor(scope: Construct, id: string, config: MediapackageAssetConfig);
    get arn(): string;
    get createdAt(): string;
    get egressEndpoints(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _packagingGroupId;
    get packagingGroupId(): string;
    set packagingGroupId(value: string);
    get packagingGroupIdInput(): string;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    resetResourceId(): void;
    get resourceIdInput(): string | undefined;
    private _sourceArn;
    get sourceArn(): string;
    set sourceArn(value: string);
    get sourceArnInput(): string;
    private _sourceRoleArn;
    get sourceRoleArn(): string;
    set sourceRoleArn(value: string);
    get sourceRoleArnInput(): string;
    private _tags?;
    get tags(): MediapackageAssetTags[];
    set tags(value: MediapackageAssetTags[]);
    resetTags(): void;
    get tagsInput(): MediapackageAssetTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
