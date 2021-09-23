import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEfsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/efs_file_system.html#id DataAwsccEfsFileSystem#id}
    */
    readonly id: string;
}
export declare class DataAwsccEfsFileSystemBackupPolicy extends cdktf.ComplexComputedList {
    get status(): string;
}
export declare function dataAwsccEfsFileSystemBackupPolicyToTerraform(struct?: DataAwsccEfsFileSystemBackupPolicy): any;
export declare class DataAwsccEfsFileSystemFileSystemTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEfsFileSystemFileSystemTagsToTerraform(struct?: DataAwsccEfsFileSystemFileSystemTags): any;
export declare class DataAwsccEfsFileSystemLifecyclePolicies extends cdktf.ComplexComputedList {
    get transitionToIa(): string;
}
export declare function dataAwsccEfsFileSystemLifecyclePoliciesToTerraform(struct?: DataAwsccEfsFileSystemLifecyclePolicies): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/efs_file_system.html awscc_efs_file_system}
*/
export declare class DataAwsccEfsFileSystem extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/efs_file_system.html awscc_efs_file_system} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEfsFileSystemConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEfsFileSystemConfig);
    get arn(): string;
    get availabilityZoneName(): string;
    get backupPolicy(): any;
    get bypassPolicyLockoutSafetyCheck(): cdktf.IResolvable;
    get encrypted(): cdktf.IResolvable;
    get fileSystemId(): string;
    fileSystemPolicy(key: string): string;
    get fileSystemTags(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get kmsKeyId(): string;
    get lifecyclePolicies(): any;
    get performanceMode(): string;
    get provisionedThroughputInMibps(): number;
    get throughputMode(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
