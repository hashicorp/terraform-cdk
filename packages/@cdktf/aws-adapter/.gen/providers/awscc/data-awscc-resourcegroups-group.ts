// https://www.terraform.io/docs/providers/awscc/d/resourcegroups_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccResourcegroupsGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/resourcegroups_group.html#id DataAwsccResourcegroupsGroup#id}
  */
  readonly id: string;
}
export class DataAwsccResourcegroupsGroupConfigurationParameters extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export function dataAwsccResourcegroupsGroupConfigurationParametersToTerraform(struct?: DataAwsccResourcegroupsGroupConfigurationParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class DataAwsccResourcegroupsGroupConfiguration extends cdktf.ComplexComputedList {

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccResourcegroupsGroupConfigurationToTerraform(struct?: DataAwsccResourcegroupsGroupConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.listMapper(dataAwsccResourcegroupsGroupConfigurationParametersToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccResourcegroupsGroupResourceQueryQueryTagFilters extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export function dataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersToTerraform(struct?: DataAwsccResourcegroupsGroupResourceQueryQueryTagFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class DataAwsccResourcegroupsGroupResourceQueryQuery extends cdktf.ComplexComputedList {

  // resource_type_filters - computed: true, optional: false, required: false
  public get resourceTypeFilters() {
    return this.getListAttribute('resource_type_filters');
  }

  // stack_identifier - computed: true, optional: false, required: false
  public get stackIdentifier() {
    return this.getStringAttribute('stack_identifier');
  }

  // tag_filters - computed: true, optional: false, required: false
  public get tagFilters() {
    return this.interpolationForAttribute('tag_filters') as any;
  }
}

export function dataAwsccResourcegroupsGroupResourceQueryQueryToTerraform(struct?: DataAwsccResourcegroupsGroupResourceQueryQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_type_filters: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceTypeFilters),
    stack_identifier: cdktf.stringToTerraform(struct!.stackIdentifier),
    tag_filters: cdktf.listMapper(dataAwsccResourcegroupsGroupResourceQueryQueryTagFiltersToTerraform)(struct!.tagFilters),
  }
}

export class DataAwsccResourcegroupsGroupResourceQuery extends cdktf.ComplexComputedList {

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.interpolationForAttribute('query') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccResourcegroupsGroupResourceQueryToTerraform(struct?: DataAwsccResourcegroupsGroupResourceQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query: dataAwsccResourcegroupsGroupResourceQueryQueryToTerraform(struct!.query),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccResourcegroupsGroupTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccResourcegroupsGroupTagsToTerraform(struct?: DataAwsccResourcegroupsGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/resourcegroups_group.html awscc_resourcegroups_group}
*/
export class DataAwsccResourcegroupsGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_resourcegroups_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/resourcegroups_group.html awscc_resourcegroups_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccResourcegroupsGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccResourcegroupsGroupConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_query - computed: true, optional: false, required: false
  public get resourceQuery() {
    return this.interpolationForAttribute('resource_query') as any;
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
