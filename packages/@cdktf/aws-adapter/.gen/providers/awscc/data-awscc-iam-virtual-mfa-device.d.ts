import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIamVirtualMfaDeviceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iam_virtual_mfa_device.html#id DataAwsccIamVirtualMfaDevice#id}
    */
    readonly id: string;
}
export declare class DataAwsccIamVirtualMfaDeviceTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIamVirtualMfaDeviceTagsToTerraform(struct?: DataAwsccIamVirtualMfaDeviceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iam_virtual_mfa_device.html awscc_iam_virtual_mfa_device}
*/
export declare class DataAwsccIamVirtualMfaDevice extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iam_virtual_mfa_device.html awscc_iam_virtual_mfa_device} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIamVirtualMfaDeviceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIamVirtualMfaDeviceConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get path(): string;
    get serialNumber(): string;
    get tags(): any;
    get users(): string[];
    get virtualMfaDeviceName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
