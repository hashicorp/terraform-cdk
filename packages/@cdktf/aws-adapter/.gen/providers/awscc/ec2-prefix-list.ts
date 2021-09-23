// https://www.terraform.io/docs/providers/awscc/r/ec2_prefix_list.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function ec2PrefixListEntriesToTerraform(struct?: Ec2PrefixListEntries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    description: cdktf.stringToTerraform(struct!.description),
  }
}

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

export function ec2PrefixListTagsToTerraform(struct?: Ec2PrefixListTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_prefix_list.html awscc_ec2_prefix_list}
*/
export class Ec2PrefixList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_prefix_list";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_prefix_list.html awscc_ec2_prefix_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2PrefixListConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2PrefixListConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_prefix_list',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addressFamily = config.addressFamily;
    this._entries = config.entries;
    this._maxEntries = config.maxEntries;
    this._prefixListName = config.prefixListName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: false, optional: false, required: true
  private _addressFamily: string;
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // entries - computed: false, optional: true, required: false
  private _entries?: Ec2PrefixListEntries[];
  public get entries() {
    return this.interpolationForAttribute('entries') as any;
  }
  public set entries(value: Ec2PrefixListEntries[] ) {
    this._entries = value;
  }
  public resetEntries() {
    this._entries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_entries - computed: false, optional: false, required: true
  private _maxEntries: number;
  public get maxEntries() {
    return this.getNumberAttribute('max_entries');
  }
  public set maxEntries(value: number) {
    this._maxEntries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntriesInput() {
    return this._maxEntries
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // prefix_list_id - computed: true, optional: false, required: false
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }

  // prefix_list_name - computed: false, optional: false, required: true
  private _prefixListName: string;
  public get prefixListName() {
    return this.getStringAttribute('prefix_list_name');
  }
  public set prefixListName(value: string) {
    this._prefixListName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListNameInput() {
    return this._prefixListName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Ec2PrefixListTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Ec2PrefixListTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: cdktf.stringToTerraform(this._addressFamily),
      entries: cdktf.listMapper(ec2PrefixListEntriesToTerraform)(this._entries),
      max_entries: cdktf.numberToTerraform(this._maxEntries),
      prefix_list_name: cdktf.stringToTerraform(this._prefixListName),
      tags: cdktf.listMapper(ec2PrefixListTagsToTerraform)(this._tags),
    };
  }
}
