import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEfsMountTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/efs_mount_target.html#id DataAwsccEfsMountTarget#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/efs_mount_target.html awscc_efs_mount_target}
*/
export declare class DataAwsccEfsMountTarget extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/efs_mount_target.html awscc_efs_mount_target} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEfsMountTargetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEfsMountTargetConfig);
    get fileSystemId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get ipAddress(): string;
    get securityGroups(): string[];
    get subnetId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
