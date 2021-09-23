// https://www.terraform.io/docs/providers/awscc/d/xray_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccXrayGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/xray_group.html#id DataAwsccXrayGroup#id}
  */
  readonly id: string;
}
export class DataAwsccXrayGroupInsightsConfiguration extends cdktf.ComplexComputedList {

  // insights_enabled - computed: true, optional: false, required: false
  public get insightsEnabled() {
    return this.getBooleanAttribute('insights_enabled');
  }

  // notifications_enabled - computed: true, optional: false, required: false
  public get notificationsEnabled() {
    return this.getBooleanAttribute('notifications_enabled');
  }
}

export function dataAwsccXrayGroupInsightsConfigurationToTerraform(struct?: DataAwsccXrayGroupInsightsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    insights_enabled: cdktf.booleanToTerraform(struct!.insightsEnabled),
    notifications_enabled: cdktf.booleanToTerraform(struct!.notificationsEnabled),
  }
}

export class DataAwsccXrayGroupTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccXrayGroupTagsToTerraform(struct?: DataAwsccXrayGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/xray_group.html awscc_xray_group}
*/
export class DataAwsccXrayGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_xray_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/xray_group.html awscc_xray_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccXrayGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccXrayGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_xray_group',
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

  // filter_expression - computed: true, optional: false, required: false
  public get filterExpression() {
    return this.getStringAttribute('filter_expression');
  }

  // group_arn - computed: true, optional: false, required: false
  public get groupArn() {
    return this.getStringAttribute('group_arn');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
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

  // insights_configuration - computed: true, optional: false, required: false
  public get insightsConfiguration() {
    return this.interpolationForAttribute('insights_configuration') as any;
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
