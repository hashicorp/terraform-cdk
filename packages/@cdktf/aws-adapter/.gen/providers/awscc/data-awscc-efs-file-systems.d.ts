import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEfsFileSystemsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/efs_file_systems.html awscc_efs_file_systems}
*/
export declare class DataAwsccEfsFileSystems extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/efs_file_systems.html awscc_efs_file_systems} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEfsFileSystemsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEfsFileSystemsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
