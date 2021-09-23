import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2PrefixListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Ip Version of Prefix List.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_prefix_list.html#address_family Ec2PrefixList#address_family}
    */
    readonly addressFamily: string;
    /**
    * Entries of Prefix List.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_prefix_list.html#entries Ec2PrefixList#entries}
    */
    readonly entries?: Ec2PrefixListEntries[];
    /**
    * Max Entries of Prefix List.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_prefix_list.html#max_entries Ec2PrefixList#max_entries}
    */
    readonly maxEntries: number;
    /**
    * Name of Prefix List.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_prefix_list.html#prefix_list_name Ec2PrefixList#prefix_list_name}
    */
    readonly prefixListName: string;
    /**
    * Tags for Prefix List
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_prefix_list.html#tags Ec2PrefixList#tags}
    */
    readonly tags?: Ec2PrefixListTags[];
}
export interface Ec2PrefixListEntries {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_prefix_list.html#cidr Ec2PrefixList#cidr}
    */
    readonly cidr: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_prefix_list.html#description Ec2PrefixList#description}
    */
    readonly description?: string;
}
export declare function ec2PrefixListEntriesToTerraform(struct?: Ec2PrefixListEntries): any;
export interface Ec2PrefixListTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_prefix_list.html#key Ec2PrefixList#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_prefix_list.html#value Ec2PrefixList#value}
    */
    readonly value?: string;
}
export declare function ec2PrefixListTagsToTerraform(struct?: Ec2PrefixListTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_prefix_list.html awscc_ec2_prefix_list}
*/
export declare class Ec2PrefixList extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_prefix_list.html awscc_ec2_prefix_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2PrefixListConfig
    */
    constructor(scope: Construct, id: string, config: Ec2PrefixListConfig);
    private _addressFamily;
    get addressFamily(): string;
    set addressFamily(value: string);
    get addressFamilyInput(): string;
    get arn(): string;
    private _entries?;
    get entries(): Ec2PrefixListEntries[];
    set entries(value: Ec2PrefixListEntries[]);
    resetEntries(): void;
    get entriesInput(): Ec2PrefixListEntries[] | undefined;
    get id(): string;
    private _maxEntries;
    get maxEntries(): number;
    set maxEntries(value: number);
    get maxEntriesInput(): number;
    get ownerId(): string;
    get prefixListId(): string;
    private _prefixListName;
    get prefixListName(): string;
    set prefixListName(value: string);
    get prefixListNameInput(): string;
    private _tags?;
    get tags(): Ec2PrefixListTags[];
    set tags(value: Ec2PrefixListTags[]);
    resetTags(): void;
    get tagsInput(): Ec2PrefixListTags[] | undefined;
    get version(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
