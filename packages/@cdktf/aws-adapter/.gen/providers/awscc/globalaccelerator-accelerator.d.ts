import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlobalacceleratorAcceleratorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Indicates whether an accelerator is enabled. The value is true or false.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html#enabled GlobalacceleratorAccelerator#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * IP Address type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html#ip_address_type GlobalacceleratorAccelerator#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * The IP addresses from BYOIP Prefix pool.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html#ip_addresses GlobalacceleratorAccelerator#ip_addresses}
    */
    readonly ipAddresses?: string[];
    /**
    * Name of accelerator.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html#name GlobalacceleratorAccelerator#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html#tags GlobalacceleratorAccelerator#tags}
    */
    readonly tags?: GlobalacceleratorAcceleratorTags[];
}
export interface GlobalacceleratorAcceleratorTags {
    /**
    * Key of the tag. Value can be 1 to 127 characters.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html#key GlobalacceleratorAccelerator#key}
    */
    readonly key: string;
    /**
    * Value for the tag. Value can be 1 to 255 characters.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html#value GlobalacceleratorAccelerator#value}
    */
    readonly value: string;
}
export declare function globalacceleratorAcceleratorTagsToTerraform(struct?: GlobalacceleratorAcceleratorTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html awscc_globalaccelerator_accelerator}
*/
export declare class GlobalacceleratorAccelerator extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_accelerator.html awscc_globalaccelerator_accelerator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorAcceleratorConfig
    */
    constructor(scope: Construct, id: string, config: GlobalacceleratorAcceleratorConfig);
    get acceleratorArn(): string;
    get dnsName(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    resetIpAddressType(): void;
    get ipAddressTypeInput(): string | undefined;
    private _ipAddresses?;
    get ipAddresses(): string[];
    set ipAddresses(value: string[]);
    resetIpAddresses(): void;
    get ipAddressesInput(): string[] | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _tags?;
    get tags(): GlobalacceleratorAcceleratorTags[];
    set tags(value: GlobalacceleratorAcceleratorTags[]);
    resetTags(): void;
    get tagsInput(): GlobalacceleratorAcceleratorTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
