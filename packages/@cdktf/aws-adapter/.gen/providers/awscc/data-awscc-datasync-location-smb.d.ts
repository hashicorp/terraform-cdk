import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatasyncLocationSmbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_smb.html#id DataAwsccDatasyncLocationSmb#id}
    */
    readonly id: string;
}
export declare class DataAwsccDatasyncLocationSmbMountOptions extends cdktf.ComplexComputedList {
    get version(): string;
}
export declare function dataAwsccDatasyncLocationSmbMountOptionsToTerraform(struct?: DataAwsccDatasyncLocationSmbMountOptions): any;
export declare class DataAwsccDatasyncLocationSmbTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccDatasyncLocationSmbTagsToTerraform(struct?: DataAwsccDatasyncLocationSmbTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_smb.html awscc_datasync_location_smb}
*/
export declare class DataAwsccDatasyncLocationSmb extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_smb.html awscc_datasync_location_smb} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatasyncLocationSmbConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccDatasyncLocationSmbConfig);
    get agentArns(): string[];
    get domain(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get locationArn(): string;
    get locationUri(): string;
    get mountOptions(): any;
    get password(): string;
    get serverHostname(): string;
    get subdirectory(): string;
    get tags(): any;
    get user(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
