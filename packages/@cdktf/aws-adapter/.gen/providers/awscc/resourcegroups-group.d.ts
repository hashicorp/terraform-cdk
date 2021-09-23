import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ResourcegroupsGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#configuration ResourcegroupsGroup#configuration}
    */
    readonly configuration?: ResourcegroupsGroupConfiguration[];
    /**
    * The description of the resource group
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#description ResourcegroupsGroup#description}
    */
    readonly description?: string;
    /**
    * The name of the resource group
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#name ResourcegroupsGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#resource_query ResourcegroupsGroup#resource_query}
    */
    readonly resourceQuery?: ResourcegroupsGroupResourceQuery;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#resources ResourcegroupsGroup#resources}
    */
    readonly resources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#tags ResourcegroupsGroup#tags}
    */
    readonly tags?: ResourcegroupsGroupTags[];
}
export interface ResourcegroupsGroupConfigurationParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#name ResourcegroupsGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#values ResourcegroupsGroup#values}
    */
    readonly values?: string[];
}
export declare function resourcegroupsGroupConfigurationParametersToTerraform(struct?: ResourcegroupsGroupConfigurationParameters): any;
export interface ResourcegroupsGroupConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#parameters ResourcegroupsGroup#parameters}
    */
    readonly parameters?: ResourcegroupsGroupConfigurationParameters[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#type ResourcegroupsGroup#type}
    */
    readonly type?: string;
}
export declare function resourcegroupsGroupConfigurationToTerraform(struct?: ResourcegroupsGroupConfiguration): any;
export interface ResourcegroupsGroupResourceQueryQueryTagFilters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#key ResourcegroupsGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#values ResourcegroupsGroup#values}
    */
    readonly values?: string[];
}
export declare function resourcegroupsGroupResourceQueryQueryTagFiltersToTerraform(struct?: ResourcegroupsGroupResourceQueryQueryTagFilters): any;
export interface ResourcegroupsGroupResourceQueryQuery {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#resource_type_filters ResourcegroupsGroup#resource_type_filters}
    */
    readonly resourceTypeFilters?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#stack_identifier ResourcegroupsGroup#stack_identifier}
    */
    readonly stackIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#tag_filters ResourcegroupsGroup#tag_filters}
    */
    readonly tagFilters?: ResourcegroupsGroupResourceQueryQueryTagFilters[];
}
export declare function resourcegroupsGroupResourceQueryQueryToTerraform(struct?: ResourcegroupsGroupResourceQueryQuery): any;
export interface ResourcegroupsGroupResourceQuery {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#query ResourcegroupsGroup#query}
    */
    readonly query?: ResourcegroupsGroupResourceQueryQuery;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#type ResourcegroupsGroup#type}
    */
    readonly type?: string;
}
export declare function resourcegroupsGroupResourceQueryToTerraform(struct?: ResourcegroupsGroupResourceQuery): any;
export interface ResourcegroupsGroupTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#key ResourcegroupsGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html#value ResourcegroupsGroup#value}
    */
    readonly value?: string;
}
export declare function resourcegroupsGroupTagsToTerraform(struct?: ResourcegroupsGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html awscc_resourcegroups_group}
*/
export declare class ResourcegroupsGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html awscc_resourcegroups_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ResourcegroupsGroupConfig
    */
    constructor(scope: Construct, id: string, config: ResourcegroupsGroupConfig);
    get arn(): string;
    private _configuration?;
    get configuration(): ResourcegroupsGroupConfiguration[];
    set configuration(value: ResourcegroupsGroupConfiguration[]);
    resetConfiguration(): void;
    get configurationInput(): ResourcegroupsGroupConfiguration[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _resourceQuery?;
    get resourceQuery(): ResourcegroupsGroupResourceQuery;
    set resourceQuery(value: ResourcegroupsGroupResourceQuery);
    resetResourceQuery(): void;
    get resourceQueryInput(): ResourcegroupsGroupResourceQuery | undefined;
    private _resources?;
    get resources(): string[];
    set resources(value: string[]);
    resetResources(): void;
    get resourcesInput(): string[] | undefined;
    private _tags?;
    get tags(): ResourcegroupsGroupTags[];
    set tags(value: ResourcegroupsGroupTags[]);
    resetTags(): void;
    get tagsInput(): ResourcegroupsGroupTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
