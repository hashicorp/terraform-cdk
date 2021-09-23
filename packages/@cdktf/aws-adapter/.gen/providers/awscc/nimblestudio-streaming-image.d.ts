import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NimblestudioStreamingImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_streaming_image.html#description NimblestudioStreamingImage#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_streaming_image.html#ec_2_image_id NimblestudioStreamingImage#ec_2_image_id}
    */
    readonly ec2ImageId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_streaming_image.html#name NimblestudioStreamingImage#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_streaming_image.html#studio_id NimblestudioStreamingImage#studio_id}
    */
    readonly studioId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_streaming_image.html#tags NimblestudioStreamingImage#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class NimblestudioStreamingImageEncryptionConfiguration extends cdktf.ComplexComputedList {
    private _keyArn?;
    get keyArn(): string;
    set keyArn(value: string);
    resetKeyArn(): void;
    get keyArnInput(): string | undefined;
    get keyType(): string;
}
export declare function nimblestudioStreamingImageEncryptionConfigurationToTerraform(struct?: NimblestudioStreamingImageEncryptionConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_streaming_image.html awscc_nimblestudio_streaming_image}
*/
export declare class NimblestudioStreamingImage extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_streaming_image.html awscc_nimblestudio_streaming_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NimblestudioStreamingImageConfig
    */
    constructor(scope: Construct, id: string, config: NimblestudioStreamingImageConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _ec2ImageId;
    get ec2ImageId(): string;
    set ec2ImageId(value: string);
    get ec2ImageIdInput(): string;
    get encryptionConfiguration(): any;
    get eulaIds(): string[];
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get owner(): string;
    get platform(): string;
    get streamingImageId(): string;
    private _studioId;
    get studioId(): string;
    set studioId(value: string);
    get studioIdInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
