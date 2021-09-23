import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Wafv2IpSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * List of IPAddresses.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html#addresses Wafv2IpSet#addresses}
    */
    readonly addresses: string[];
    /**
    * Description of the entity.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html#description Wafv2IpSet#description}
    */
    readonly description?: string;
    /**
    * Type of addresses in the IPSet, use IPV4 for IPV4 IP addresses, IPV6 for IPV6 address.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html#ip_address_version Wafv2IpSet#ip_address_version}
    */
    readonly ipAddressVersion: string;
    /**
    * Name of the IPSet.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html#name Wafv2IpSet#name}
    */
    readonly name?: string;
    /**
    * Use CLOUDFRONT for CloudFront IPSet, use REGIONAL for Application Load Balancer and API Gateway.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html#scope Wafv2IpSet#scope}
    */
    readonly scope: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html#tags Wafv2IpSet#tags}
    */
    readonly tags?: Wafv2IpSetTags[];
}
export interface Wafv2IpSetTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html#key Wafv2IpSet#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html#value Wafv2IpSet#value}
    */
    readonly value?: string;
}
export declare function wafv2IpSetTagsToTerraform(struct?: Wafv2IpSetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html awscc_wafv2_ip_set}
*/
export declare class Wafv2IpSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_ip_set.html awscc_wafv2_ip_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2IpSetConfig
    */
    constructor(scope: Construct, id: string, config: Wafv2IpSetConfig);
    private _addresses;
    get addresses(): string[];
    set addresses(value: string[]);
    get addressesInput(): string[];
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _ipAddressVersion;
    get ipAddressVersion(): string;
    set ipAddressVersion(value: string);
    get ipAddressVersionInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _scope;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
    private _tags?;
    get tags(): Wafv2IpSetTags[];
    set tags(value: Wafv2IpSetTags[]);
    resetTags(): void;
    get tagsInput(): Wafv2IpSetTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
