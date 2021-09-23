import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationS3Config extends cdktf.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html#s3_bucket_arn DatasyncLocationS3#s3_bucket_arn}
    */
    readonly s3BucketArn: string;
    /**
    * The Amazon Resource Name (ARN) of the AWS IAM role that is used to access an Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html#s3_config DatasyncLocationS3#s3_config}
    */
    readonly s3Config: DatasyncLocationS3S3Config;
    /**
    * The Amazon S3 storage class you want to store your files in when this location is used as a task destination.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html#s3_storage_class DatasyncLocationS3#s3_storage_class}
    */
    readonly s3StorageClass?: string;
    /**
    * A subdirectory in the Amazon S3 bucket. This subdirectory in Amazon S3 is used to read data from the S3 source location or write data to the S3 destination.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html#subdirectory DatasyncLocationS3#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html#tags DatasyncLocationS3#tags}
    */
    readonly tags?: DatasyncLocationS3Tags[];
}
export interface DatasyncLocationS3S3Config {
    /**
    * The ARN of the IAM role of the Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html#bucket_access_role_arn DatasyncLocationS3#bucket_access_role_arn}
    */
    readonly bucketAccessRoleArn: string;
}
export declare function datasyncLocationS3S3ConfigToTerraform(struct?: DatasyncLocationS3S3Config): any;
export interface DatasyncLocationS3Tags {
    /**
    * The key for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html#key DatasyncLocationS3#key}
    */
    readonly key: string;
    /**
    * The value for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html#value DatasyncLocationS3#value}
    */
    readonly value: string;
}
export declare function datasyncLocationS3TagsToTerraform(struct?: DatasyncLocationS3Tags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html awscc_datasync_location_s3}
*/
export declare class DatasyncLocationS3 extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html awscc_datasync_location_s3} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationS3Config
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationS3Config);
    get id(): string;
    get locationArn(): string;
    get locationUri(): string;
    private _s3BucketArn;
    get s3BucketArn(): string;
    set s3BucketArn(value: string);
    get s3BucketArnInput(): string;
    private _s3Config;
    get s3Config(): DatasyncLocationS3S3Config;
    set s3Config(value: DatasyncLocationS3S3Config);
    get s3ConfigInput(): DatasyncLocationS3S3Config;
    private _s3StorageClass?;
    get s3StorageClass(): string;
    set s3StorageClass(value: string);
    resetS3StorageClass(): void;
    get s3StorageClassInput(): string | undefined;
    private _subdirectory?;
    get subdirectory(): string;
    set subdirectory(value: string);
    resetSubdirectory(): void;
    get subdirectoryInput(): string | undefined;
    private _tags?;
    get tags(): DatasyncLocationS3Tags[];
    set tags(value: DatasyncLocationS3Tags[]);
    resetTags(): void;
    get tagsInput(): DatasyncLocationS3Tags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
