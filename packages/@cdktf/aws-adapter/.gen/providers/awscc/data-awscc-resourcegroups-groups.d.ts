import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccResourcegroupsGroupsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/resourcegroups_groups.html awscc_resourcegroups_groups}
*/
export declare class DataAwsccResourcegroupsGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/resourcegroups_groups.html awscc_resourcegroups_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccResourcegroupsGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccResourcegroupsGroupsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
