import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationFsxWindowsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the Windows domain that the FSx for Windows server belongs to.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#domain DatasyncLocationFsxWindows#domain}
    */
    readonly domain?: string;
    /**
    * The Amazon Resource Name (ARN) for the FSx for Windows file system.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#fsx_filesystem_arn DatasyncLocationFsxWindows#fsx_filesystem_arn}
    */
    readonly fsxFilesystemArn: string;
    /**
    * The password of the user who has the permissions to access files and folders in the FSx for Windows file system.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#password DatasyncLocationFsxWindows#password}
    */
    readonly password: string;
    /**
    * The ARNs of the security groups that are to use to configure the FSx for Windows file system.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#security_group_arns DatasyncLocationFsxWindows#security_group_arns}
    */
    readonly securityGroupArns: string[];
    /**
    * A subdirectory in the location's path.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#subdirectory DatasyncLocationFsxWindows#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#tags DatasyncLocationFsxWindows#tags}
    */
    readonly tags?: DatasyncLocationFsxWindowsTags[];
    /**
    * The user who has the permissions to access files and folders in the FSx for Windows file system.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#user DatasyncLocationFsxWindows#user}
    */
    readonly user: string;
}
export interface DatasyncLocationFsxWindowsTags {
    /**
    * The key for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#key DatasyncLocationFsxWindows#key}
    */
    readonly key: string;
    /**
    * The value for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#value DatasyncLocationFsxWindows#value}
    */
    readonly value: string;
}
export declare function datasyncLocationFsxWindowsTagsToTerraform(struct?: DatasyncLocationFsxWindowsTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html awscc_datasync_location_fsx_windows}
*/
export declare class DatasyncLocationFsxWindows extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html awscc_datasync_location_fsx_windows} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationFsxWindowsConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationFsxWindowsConfig);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string | undefined;
    private _fsxFilesystemArn;
    get fsxFilesystemArn(): string;
    set fsxFilesystemArn(value: string);
    get fsxFilesystemArnInput(): string;
    get id(): string;
    get locationArn(): string;
    get locationUri(): string;
    private _password;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _securityGroupArns;
    get securityGroupArns(): string[];
    set securityGroupArns(value: string[]);
    get securityGroupArnsInput(): string[];
    private _subdirectory?;
    get subdirectory(): string;
    set subdirectory(value: string);
    resetSubdirectory(): void;
    get subdirectoryInput(): string | undefined;
    private _tags?;
    get tags(): DatasyncLocationFsxWindowsTags[];
    set tags(value: DatasyncLocationFsxWindowsTags[]);
    resetTags(): void;
    get tagsInput(): DatasyncLocationFsxWindowsTags[] | undefined;
    private _user;
    get user(): string;
    set user(value: string);
    get userInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
