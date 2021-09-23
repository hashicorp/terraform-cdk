import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatasyncLocationS3Config extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_s3.html#id DataAwsccDatasyncLocationS3#id}
    */
    readonly id: string;
}
export declare class DataAwsccDatasyncLocationS3S3Config extends cdktf.ComplexComputedList {
    get bucketAccessRoleArn(): string;
}
export declare function dataAwsccDatasyncLocationS3S3ConfigToTerraform(struct?: DataAwsccDatasyncLocationS3S3Config): any;
export declare class DataAwsccDatasyncLocationS3Tags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccDatasyncLocationS3TagsToTerraform(struct?: DataAwsccDatasyncLocationS3Tags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_s3.html awscc_datasync_location_s3}
*/
export declare class DataAwsccDatasyncLocationS3 extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_s3.html awscc_datasync_location_s3} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatasyncLocationS3Config
    */
    constructor(scope: Construct, id: string, config: DataAwsccDatasyncLocationS3Config);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get locationArn(): string;
    get locationUri(): string;
    get s3BucketArn(): string;
    get s3Config(): any;
    get s3StorageClass(): string;
    get subdirectory(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
