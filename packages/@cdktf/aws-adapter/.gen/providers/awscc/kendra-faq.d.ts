import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KendraFaqConfig extends cdktf.TerraformMetaArguments {
    /**
    * Description of the FAQ
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#description KendraFaq#description}
    */
    readonly description?: string;
    /**
    * Format of the input file
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#file_format KendraFaq#file_format}
    */
    readonly fileFormat?: string;
    /**
    * Unique ID of Index
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#index_id KendraFaq#index_id}
    */
    readonly indexId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#name KendraFaq#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#role_arn KendraFaq#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#s3_path KendraFaq#s3_path}
    */
    readonly s3Path: KendraFaqS3Path;
    /**
    * List of tags
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#tags KendraFaq#tags}
    */
    readonly tags?: KendraFaqTags[];
}
export interface KendraFaqS3Path {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#bucket KendraFaq#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#key KendraFaq#key}
    */
    readonly key: string;
}
export declare function kendraFaqS3PathToTerraform(struct?: KendraFaqS3Path): any;
export interface KendraFaqTags {
    /**
    * A string used to identify this tag
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#key KendraFaq#key}
    */
    readonly key: string;
    /**
    * A string containing the value for the tag
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#value KendraFaq#value}
    */
    readonly value: string;
}
export declare function kendraFaqTagsToTerraform(struct?: KendraFaqTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html awscc_kendra_faq}
*/
export declare class KendraFaq extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html awscc_kendra_faq} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KendraFaqConfig
    */
    constructor(scope: Construct, id: string, config: KendraFaqConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _fileFormat?;
    get fileFormat(): string;
    set fileFormat(value: string);
    resetFileFormat(): void;
    get fileFormatInput(): string | undefined;
    get id(): string;
    private _indexId;
    get indexId(): string;
    set indexId(value: string);
    get indexIdInput(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _s3Path;
    get s3Path(): KendraFaqS3Path;
    set s3Path(value: KendraFaqS3Path);
    get s3PathInput(): KendraFaqS3Path;
    private _tags?;
    get tags(): KendraFaqTags[];
    set tags(value: KendraFaqTags[]);
    resetTags(): void;
    get tagsInput(): KendraFaqTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
