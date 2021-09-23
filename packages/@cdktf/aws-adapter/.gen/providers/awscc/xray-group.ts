// https://www.terraform.io/docs/providers/awscc/r/xray_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface XrayGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The filter expression defining criteria by which to group traces.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html#filter_expression XrayGroup#filter_expression}
  */
  readonly filterExpression?: string;
  /**
  * The case-sensitive name of the new group. Names must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html#group_name XrayGroup#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html#insights_configuration XrayGroup#insights_configuration}
  */
  readonly insightsConfiguration?: XrayGroupInsightsConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html#tags XrayGroup#tags}
  */
  readonly tags?: XrayGroupTags[];
}
export interface XrayGroupInsightsConfiguration {
  /**
  * Set the InsightsEnabled value to true to enable insights or false to disable insights.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html#insights_enabled XrayGroup#insights_enabled}
  */
  readonly insightsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be enabled on a group with InsightsEnabled set to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html#notifications_enabled XrayGroup#notifications_enabled}
  */
  readonly notificationsEnabled?: boolean | cdktf.IResolvable;
}

export function xrayGroupInsightsConfigurationToTerraform(struct?: XrayGroupInsightsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    insights_enabled: cdktf.booleanToTerraform(struct!.insightsEnabled),
    notifications_enabled: cdktf.booleanToTerraform(struct!.notificationsEnabled),
  }
}

export interface XrayGroupTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html#key XrayGroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html#value XrayGroup#value}
  */
  readonly value: string;
}

export function xrayGroupTagsToTerraform(struct?: XrayGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html awscc_xray_group}
*/
export class XrayGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_xray_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html awscc_xray_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options XrayGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: XrayGroupConfig = {}) {
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
    this._filterExpression = config.filterExpression;
    this._groupName = config.groupName;
    this._insightsConfiguration = config.insightsConfiguration;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_expression - computed: false, optional: true, required: false
  private _filterExpression?: string;
  public get filterExpression() {
    return this.getStringAttribute('filter_expression');
  }
  public set filterExpression(value: string ) {
    this._filterExpression = value;
  }
  public resetFilterExpression() {
    this._filterExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExpressionInput() {
    return this._filterExpression
  }

  // group_arn - computed: true, optional: false, required: false
  public get groupArn() {
    return this.getStringAttribute('group_arn');
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string;
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string ) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insights_configuration - computed: false, optional: true, required: false
  private _insightsConfiguration?: XrayGroupInsightsConfiguration;
  public get insightsConfiguration() {
    return this.interpolationForAttribute('insights_configuration') as any;
  }
  public set insightsConfiguration(value: XrayGroupInsightsConfiguration ) {
    this._insightsConfiguration = value;
  }
  public resetInsightsConfiguration() {
    this._insightsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsConfigurationInput() {
    return this._insightsConfiguration
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: XrayGroupTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: XrayGroupTags[] ) {
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
      filter_expression: cdktf.stringToTerraform(this._filterExpression),
      group_name: cdktf.stringToTerraform(this._groupName),
      insights_configuration: xrayGroupInsightsConfigurationToTerraform(this._insightsConfiguration),
      tags: cdktf.listMapper(xrayGroupTagsToTerraform)(this._tags),
    };
  }
}
