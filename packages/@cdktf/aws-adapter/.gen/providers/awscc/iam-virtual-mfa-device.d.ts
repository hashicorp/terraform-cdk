import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamVirtualMfaDeviceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html#path IamVirtualMfaDevice#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html#tags IamVirtualMfaDevice#tags}
    */
    readonly tags?: IamVirtualMfaDeviceTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html#users IamVirtualMfaDevice#users}
    */
    readonly users: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html#virtual_mfa_device_name IamVirtualMfaDevice#virtual_mfa_device_name}
    */
    readonly virtualMfaDeviceName?: string;
}
export interface IamVirtualMfaDeviceTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html#key IamVirtualMfaDevice#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html#value IamVirtualMfaDevice#value}
    */
    readonly value: string;
}
export declare function iamVirtualMfaDeviceTagsToTerraform(struct?: IamVirtualMfaDeviceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html awscc_iam_virtual_mfa_device}
*/
export declare class IamVirtualMfaDevice extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iam_virtual_mfa_device.html awscc_iam_virtual_mfa_device} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamVirtualMfaDeviceConfig
    */
    constructor(scope: Construct, id: string, config: IamVirtualMfaDeviceConfig);
    get id(): string;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
    get serialNumber(): string;
    private _tags?;
    get tags(): IamVirtualMfaDeviceTags[];
    set tags(value: IamVirtualMfaDeviceTags[]);
    resetTags(): void;
    get tagsInput(): IamVirtualMfaDeviceTags[] | undefined;
    private _users;
    get users(): string[];
    set users(value: string[]);
    get usersInput(): string[];
    private _virtualMfaDeviceName?;
    get virtualMfaDeviceName(): string;
    set virtualMfaDeviceName(value: string);
    resetVirtualMfaDeviceName(): void;
    get virtualMfaDeviceNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
