import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatasyncLocationFsxWindowsPluralConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_fsx_windows_plural.html awscc_datasync_location_fsx_windows_plural}
*/
export declare class DataAwsccDatasyncLocationFsxWindowsPlural extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_fsx_windows_plural.html awscc_datasync_location_fsx_windows_plural} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatasyncLocationFsxWindowsPluralConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccDatasyncLocationFsxWindowsPluralConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
