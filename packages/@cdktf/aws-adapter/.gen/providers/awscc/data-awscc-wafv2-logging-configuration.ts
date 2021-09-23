// https://www.terraform.io/docs/providers/awscc/d/wafv2_logging_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccWafv2LoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_logging_configuration.html#id DataAwsccWafv2LoggingConfiguration#id}
  */
  readonly id: string;
}
export class DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition extends cdktf.ComplexComputedList {

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }
}

export function dataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionToTerraform(struct?: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}

export class DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition extends cdktf.ComplexComputedList {

  // label_name - computed: true, optional: false, required: false
  public get labelName() {
    return this.getStringAttribute('label_name');
  }
}

export function dataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionToTerraform(struct?: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label_name: cdktf.stringToTerraform(struct!.labelName),
  }
}

export class DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions extends cdktf.ComplexComputedList {

  // action_condition - computed: true, optional: false, required: false
  public get actionCondition() {
    return this.interpolationForAttribute('action_condition') as any;
  }

  // label_name_condition - computed: true, optional: false, required: false
  public get labelNameCondition() {
    return this.interpolationForAttribute('label_name_condition') as any;
  }
}

export function dataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsToTerraform(struct?: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_condition: dataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionToTerraform(struct!.actionCondition),
    label_name_condition: dataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionToTerraform(struct!.labelNameCondition),
  }
}

export class DataAwsccWafv2LoggingConfigurationLoggingFilterFilters extends cdktf.ComplexComputedList {

  // behavior - computed: true, optional: false, required: false
  public get behavior() {
    return this.getStringAttribute('behavior');
  }

  // conditions - computed: true, optional: false, required: false
  public get conditions() {
    return this.interpolationForAttribute('conditions') as any;
  }

  // requirement - computed: true, optional: false, required: false
  public get requirement() {
    return this.getStringAttribute('requirement');
  }
}

export function dataAwsccWafv2LoggingConfigurationLoggingFilterFiltersToTerraform(struct?: DataAwsccWafv2LoggingConfigurationLoggingFilterFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    conditions: cdktf.listMapper(dataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsToTerraform)(struct!.conditions),
    requirement: cdktf.stringToTerraform(struct!.requirement),
  }
}

export class DataAwsccWafv2LoggingConfigurationLoggingFilter extends cdktf.ComplexComputedList {

  // default_behavior - computed: true, optional: false, required: false
  public get defaultBehavior() {
    return this.getStringAttribute('default_behavior');
  }

  // filters - computed: true, optional: false, required: false
  public get filters() {
    return this.interpolationForAttribute('filters') as any;
  }
}

export function dataAwsccWafv2LoggingConfigurationLoggingFilterToTerraform(struct?: DataAwsccWafv2LoggingConfigurationLoggingFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_behavior: cdktf.stringToTerraform(struct!.defaultBehavior),
    filters: cdktf.listMapper(dataAwsccWafv2LoggingConfigurationLoggingFilterFiltersToTerraform)(struct!.filters),
  }
}

export class DataAwsccWafv2LoggingConfigurationRedactedFieldsJsonBodyMatchPattern extends cdktf.ComplexComputedList {

  // all - computed: true, optional: false, required: false
  public get all() {
    return this.interpolationForAttribute('all') as any;
  }

  // included_paths - computed: true, optional: false, required: false
  public get includedPaths() {
    return this.getListAttribute('included_paths');
  }
}

export function dataAwsccWafv2LoggingConfigurationRedactedFieldsJsonBodyMatchPatternToTerraform(struct?: DataAwsccWafv2LoggingConfigurationRedactedFieldsJsonBodyMatchPattern): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.all),
    included_paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedPaths),
  }
}

export class DataAwsccWafv2LoggingConfigurationRedactedFieldsJsonBody extends cdktf.ComplexComputedList {

  // invalid_fallback_behavior - computed: true, optional: false, required: false
  public get invalidFallbackBehavior() {
    return this.getStringAttribute('invalid_fallback_behavior');
  }

  // match_pattern - computed: true, optional: false, required: false
  public get matchPattern() {
    return this.interpolationForAttribute('match_pattern') as any;
  }

  // match_scope - computed: true, optional: false, required: false
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
}

export function dataAwsccWafv2LoggingConfigurationRedactedFieldsJsonBodyToTerraform(struct?: DataAwsccWafv2LoggingConfigurationRedactedFieldsJsonBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    invalid_fallback_behavior: cdktf.stringToTerraform(struct!.invalidFallbackBehavior),
    match_pattern: dataAwsccWafv2LoggingConfigurationRedactedFieldsJsonBodyMatchPatternToTerraform(struct!.matchPattern),
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
  }
}

export class DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct?: DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataAwsccWafv2LoggingConfigurationRedactedFields extends cdktf.ComplexComputedList {

  // json_body - computed: true, optional: false, required: false
  public get jsonBody() {
    return this.interpolationForAttribute('json_body') as any;
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.interpolationForAttribute('method') as any;
  }

  // query_string - computed: true, optional: false, required: false
  public get queryString() {
    return this.interpolationForAttribute('query_string') as any;
  }

  // single_header - computed: true, optional: false, required: false
  public get singleHeader() {
    return this.interpolationForAttribute('single_header') as any;
  }

  // uri_path - computed: true, optional: false, required: false
  public get uriPath() {
    return this.interpolationForAttribute('uri_path') as any;
  }
}

export function dataAwsccWafv2LoggingConfigurationRedactedFieldsToTerraform(struct?: DataAwsccWafv2LoggingConfigurationRedactedFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    json_body: dataAwsccWafv2LoggingConfigurationRedactedFieldsJsonBodyToTerraform(struct!.jsonBody),
    method: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.method),
    query_string: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.queryString),
    single_header: dataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct!.singleHeader),
    uri_path: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.uriPath),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_logging_configuration.html awscc_wafv2_logging_configuration}
*/
export class DataAwsccWafv2LoggingConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_wafv2_logging_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_logging_configuration.html awscc_wafv2_logging_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccWafv2LoggingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccWafv2LoggingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wafv2_logging_configuration',
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

  // log_destination_configs - computed: true, optional: false, required: false
  public get logDestinationConfigs() {
    return this.getListAttribute('log_destination_configs');
  }

  // logging_filter - computed: true, optional: false, required: false
  public get loggingFilter() {
    return this.interpolationForAttribute('logging_filter') as any;
  }

  // managed_by_firewall_manager - computed: true, optional: false, required: false
  public get managedByFirewallManager() {
    return this.getBooleanAttribute('managed_by_firewall_manager');
  }

  // redacted_fields - computed: true, optional: false, required: false
  public get redactedFields() {
    return this.interpolationForAttribute('redacted_fields') as any;
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
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
