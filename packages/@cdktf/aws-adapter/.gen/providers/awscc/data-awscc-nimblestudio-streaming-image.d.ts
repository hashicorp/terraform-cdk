import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNimblestudioStreamingImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_streaming_image.html#id DataAwsccNimblestudioStreamingImage#id}
    */
    readonly id: string;
}
export declare class DataAwsccNimblestudioStreamingImageEncryptionConfiguration extends cdktf.ComplexComputedList {
    get keyArn(): string;
    get keyType(): string;
}
export declare function dataAwsccNimblestudioStreamingImageEncryptionConfigurationToTerraform(struct?: DataAwsccNimblestudioStreamingImageEncryptionConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_streaming_image.html awscc_nimblestudio_streaming_image}
*/
export declare class DataAwsccNimblestudioStreamingImage extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_streaming_image.html awscc_nimblestudio_streaming_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNimblestudioStreamingImageConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccNimblestudioStreamingImageConfig);
    get description(): string;
    get ec2ImageId(): string;
    get encryptionConfiguration(): any;
    get eulaIds(): string[];
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get owner(): string;
    get platform(): string;
    get streamingImageId(): string;
    get studioId(): string;
    tags(key: string): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
