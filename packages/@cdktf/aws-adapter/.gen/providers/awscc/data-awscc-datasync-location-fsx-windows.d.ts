import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatasyncLocationFsxWindowsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_fsx_windows.html#id DataAwsccDatasyncLocationFsxWindows#id}
    */
    readonly id: string;
}
export declare class DataAwsccDatasyncLocationFsxWindowsTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccDatasyncLocationFsxWindowsTagsToTerraform(struct?: DataAwsccDatasyncLocationFsxWindowsTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_fsx_windows.html awscc_datasync_location_fsx_windows}
*/
export declare class DataAwsccDatasyncLocationFsxWindows extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_fsx_windows.html awscc_datasync_location_fsx_windows} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatasyncLocationFsxWindowsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccDatasyncLocationFsxWindowsConfig);
    get domain(): string;
    get fsxFilesystemArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get locationArn(): string;
    get locationUri(): string;
    get password(): string;
    get securityGroupArns(): string[];
    get subdirectory(): string;
    get tags(): any;
    get user(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
