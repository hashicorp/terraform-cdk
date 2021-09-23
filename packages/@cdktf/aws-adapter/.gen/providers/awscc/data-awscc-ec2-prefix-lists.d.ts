import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2PrefixListsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_prefix_lists.html awscc_ec2_prefix_lists}
*/
export declare class DataAwsccEc2PrefixLists extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_prefix_lists.html awscc_ec2_prefix_lists} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2PrefixListsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEc2PrefixListsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
