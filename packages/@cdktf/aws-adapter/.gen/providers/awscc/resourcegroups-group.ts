// https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function resourcegroupsGroupConfigurationParametersToTerraform(struct?: ResourcegroupsGroupConfigurationParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

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

export function resourcegroupsGroupConfigurationToTerraform(struct?: ResourcegroupsGroupConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.listMapper(resourcegroupsGroupConfigurationParametersToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

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

export function resourcegroupsGroupResourceQueryQueryTagFiltersToTerraform(struct?: ResourcegroupsGroupResourceQueryQueryTagFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

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

export function resourcegroupsGroupResourceQueryQueryToTerraform(struct?: ResourcegroupsGroupResourceQueryQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_type_filters: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceTypeFilters),
    stack_identifier: cdktf.stringToTerraform(struct!.stackIdentifier),
    tag_filters: cdktf.listMapper(resourcegroupsGroupResourceQueryQueryTagFiltersToTerraform)(struct!.tagFilters),
  }
}

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

export function resourcegroupsGroupResourceQueryToTerraform(struct?: ResourcegroupsGroupResourceQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query: resourcegroupsGroupResourceQueryQueryToTerraform(struct!.query),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

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

export function resourcegroupsGroupTagsToTerraform(struct?: ResourcegroupsGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html awscc_resourcegroups_group}
*/
export class ResourcegroupsGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_resourcegroups_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/resourcegroups_group.html awscc_resourcegroups_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourcegroupsGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ResourcegroupsGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_resourcegroups_group',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._configuration = config.configuration;
    this._description = config.description;
    this._name = config.name;
    this._resourceQuery = config.resourceQuery;
    this._resources = config.resources;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: ResourcegroupsGroupConfiguration[];
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }
  public set configuration(value: ResourcegroupsGroupConfiguration[] ) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_query - computed: false, optional: true, required: false
  private _resourceQuery?: ResourcegroupsGroupResourceQuery;
  public get resourceQuery() {
    return this.interpolationForAttribute('resource_query') as any;
  }
  public set resourceQuery(value: ResourcegroupsGroupResourceQuery ) {
    this._resourceQuery = value;
  }
  public resetResourceQuery() {
    this._resourceQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceQueryInput() {
    return this._resourceQuery
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[];
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[] ) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: ResourcegroupsGroupTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: ResourcegroupsGroupTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: cdktf.listMapper(resourcegroupsGroupConfigurationToTerraform)(this._configuration),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      resource_query: resourcegroupsGroupResourceQueryToTerraform(this._resourceQuery),
      resources: cdktf.listMapper(cdktf.stringToTerraform)(this._resources),
      tags: cdktf.listMapper(resourcegroupsGroupTagsToTerraform)(this._tags),
    };
  }
}
