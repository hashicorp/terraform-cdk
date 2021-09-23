import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEfsAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/efs_access_point.html#id DataAwsccEfsAccessPoint#id}
    */
    readonly id: string;
}
export declare class DataAwsccEfsAccessPointAccessPointTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEfsAccessPointAccessPointTagsToTerraform(struct?: DataAwsccEfsAccessPointAccessPointTags): any;
export declare class DataAwsccEfsAccessPointPosixUser extends cdktf.ComplexComputedList {
    get gid(): string;
    get secondaryGids(): string[];
    get uid(): string;
}
export declare function dataAwsccEfsAccessPointPosixUserToTerraform(struct?: DataAwsccEfsAccessPointPosixUser): any;
export declare class DataAwsccEfsAccessPointRootDirectoryCreationInfo extends cdktf.ComplexComputedList {
    get ownerGid(): string;
    get ownerUid(): string;
    get permissions(): string;
}
export declare function dataAwsccEfsAccessPointRootDirectoryCreationInfoToTerraform(struct?: DataAwsccEfsAccessPointRootDirectoryCreationInfo): any;
export declare class DataAwsccEfsAccessPointRootDirectory extends cdktf.ComplexComputedList {
    get creationInfo(): any;
    get path(): string;
}
export declare function dataAwsccEfsAccessPointRootDirectoryToTerraform(struct?: DataAwsccEfsAccessPointRootDirectory): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/efs_access_point.html awscc_efs_access_point}
*/
export declare class DataAwsccEfsAccessPoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/efs_access_point.html awscc_efs_access_point} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEfsAccessPointConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEfsAccessPointConfig);
    get accessPointId(): string;
    get accessPointTags(): any;
    get arn(): string;
    get clientToken(): string;
    get fileSystemId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get posixUser(): any;
    get rootDirectory(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
