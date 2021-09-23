import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccResourcegroupsGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/resourcegroups_group.html#id DataAwsccResourcegroupsGroup#id}
    */
    readonly id: string;
}
export declare class DataAwsccResourcegroupsGroupConfigurationParameters extends cdktf.ComplexComputedList {
    get name(): string;
    get values(): string[];
}
export declare function dataAwsccResourcegroupsGroupConfigurationParametersToTerraform(struct?: DataAwsccResourcegroupsGroupConfigurationParameters): any;
export declare class DataAwsccResourcegroupsGroupConfiguration extends cdktf.ComplexComputedList {
    get parameters(): any;
    get type(): string;
}
export declare function dataAwsccResourcegroupsGroupConfigurationToTerraform(struct?: DataAwsccResourcegroupsGroupConfiguration): any;
export declare class DataAwsccResourcegroupsGroupResourceQueryQueryTagFilters extends cdktf.ComplexComputedList {
    get key(): string;
    get values(): string[];
}
export declare function dataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersToTerraform(struct?: DataAwsccResourcegroupsGroupResourceQueryQueryTagFilters): any;
export declare class DataAwsccResourcegroupsGroupResourceQueryQuery extends cdktf.ComplexComputedList {
    get resourceTypeFilters(): string[];
    get stackIdentifier(): string;
    get tagFilters(): any;
}
export declare function dataAwsccResourcegroupsGroupResourceQueryQueryToTerraform(struct?: DataAwsccResourcegroupsGroupResourceQueryQuery): any;
export declare class DataAwsccResourcegroupsGroupResourceQuery extends cdktf.ComplexComputedList {
    get query(): any;
    get type(): string;
}
export declare function dataAwsccResourcegroupsGroupResourceQueryToTerraform(struct?: DataAwsccResourcegroupsGroupResourceQuery): any;
export declare class DataAwsccResourcegroupsGroupTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccResourcegroupsGroupTagsToTerraform(struct?: DataAwsccResourcegroupsGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/resourcegroups_group.html awscc_resourcegroups_group}
*/
export declare class DataAwsccResourcegroupsGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/resourcegroups_group.html awscc_resourcegroups_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccResourcegroupsGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccResourcegroupsGroupConfig);
    get arn(): string;
    get configuration(): any;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get resourceQuery(): any;
    get resources(): string[];
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
