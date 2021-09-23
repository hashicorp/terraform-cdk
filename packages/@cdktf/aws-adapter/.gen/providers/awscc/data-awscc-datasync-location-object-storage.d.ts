import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatasyncLocationObjectStorageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_object_storage.html#id DataAwsccDatasyncLocationObjectStorage#id}
    */
    readonly id: string;
}
export declare class DataAwsccDatasyncLocationObjectStorageTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccDatasyncLocationObjectStorageTagsToTerraform(struct?: DataAwsccDatasyncLocationObjectStorageTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_object_storage.html awscc_datasync_location_object_storage}
*/
export declare class DataAwsccDatasyncLocationObjectStorage extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_object_storage.html awscc_datasync_location_object_storage} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatasyncLocationObjectStorageConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccDatasyncLocationObjectStorageConfig);
    get accessKey(): string;
    get agentArns(): string[];
    get bucketName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get locationArn(): string;
    get locationUri(): string;
    get secretKey(): string;
    get serverHostname(): string;
    get serverPort(): number;
    get serverProtocol(): string;
    get subdirectory(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
