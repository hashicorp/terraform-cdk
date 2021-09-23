import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationEfsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The subnet and security group that DataSync uses to access target EFS file system.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html#ec_2_config DatasyncLocationEfs#ec_2_config}
    */
    readonly ec2Config: DatasyncLocationEfsEc2Config;
    /**
    * The Amazon Resource Name (ARN) for the Amazon EFS file system.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html#efs_filesystem_arn DatasyncLocationEfs#efs_filesystem_arn}
    */
    readonly efsFilesystemArn: string;
    /**
    * A subdirectory in the location's path. This subdirectory in the EFS file system is used to read data from the EFS source location or write data to the EFS destination.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html#subdirectory DatasyncLocationEfs#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html#tags DatasyncLocationEfs#tags}
    */
    readonly tags?: DatasyncLocationEfsTags[];
}
export interface DatasyncLocationEfsEc2Config {
    /**
    * The Amazon Resource Names (ARNs) of the security groups that are configured for the Amazon EC2 resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html#security_group_arns DatasyncLocationEfs#security_group_arns}
    */
    readonly securityGroupArns: string[];
    /**
    * The ARN of the subnet that DataSync uses to access the target EFS file system.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html#subnet_arn DatasyncLocationEfs#subnet_arn}
    */
    readonly subnetArn: string;
}
export declare function datasyncLocationEfsEc2ConfigToTerraform(struct?: DatasyncLocationEfsEc2Config): any;
export interface DatasyncLocationEfsTags {
    /**
    * The key for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html#key DatasyncLocationEfs#key}
    */
    readonly key: string;
    /**
    * The value for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html#value DatasyncLocationEfs#value}
    */
    readonly value: string;
}
export declare function datasyncLocationEfsTagsToTerraform(struct?: DatasyncLocationEfsTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html awscc_datasync_location_efs}
*/
export declare class DatasyncLocationEfs extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html awscc_datasync_location_efs} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationEfsConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationEfsConfig);
    private _ec2Config;
    get ec2Config(): DatasyncLocationEfsEc2Config;
    set ec2Config(value: DatasyncLocationEfsEc2Config);
    get ec2ConfigInput(): DatasyncLocationEfsEc2Config;
    private _efsFilesystemArn;
    get efsFilesystemArn(): string;
    set efsFilesystemArn(value: string);
    get efsFilesystemArnInput(): string;
    get id(): string;
    get locationArn(): string;
    get locationUri(): string;
    private _subdirectory?;
    get subdirectory(): string;
    set subdirectory(value: string);
    resetSubdirectory(): void;
    get subdirectoryInput(): string | undefined;
    private _tags?;
    get tags(): DatasyncLocationEfsTags[];
    set tags(value: DatasyncLocationEfsTags[]);
    resetTags(): void;
    get tagsInput(): DatasyncLocationEfsTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
