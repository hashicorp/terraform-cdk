import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2PrefixListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_prefix_list.html#id DataAwsccEc2PrefixList#id}
    */
    readonly id: string;
}
export declare class DataAwsccEc2PrefixListEntries extends cdktf.ComplexComputedList {
    get cidr(): string;
    get description(): string;
}
export declare function dataAwsccEc2PrefixListEntriesToTerraform(struct?: DataAwsccEc2PrefixListEntries): any;
export declare class DataAwsccEc2PrefixListTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEc2PrefixListTagsToTerraform(struct?: DataAwsccEc2PrefixListTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_prefix_list.html awscc_ec2_prefix_list}
*/
export declare class DataAwsccEc2PrefixList extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_prefix_list.html awscc_ec2_prefix_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2PrefixListConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2PrefixListConfig);
    get addressFamily(): string;
    get arn(): string;
    get entries(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get maxEntries(): number;
    get ownerId(): string;
    get prefixListId(): string;
    get prefixListName(): string;
    get tags(): any;
    get version(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
