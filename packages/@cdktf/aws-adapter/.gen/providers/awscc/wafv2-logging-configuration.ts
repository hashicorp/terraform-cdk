// https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wafv2LoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Amazon Kinesis Data Firehose Amazon Resource Name (ARNs) that you want to associate with the web ACL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#log_destination_configs Wafv2LoggingConfiguration#log_destination_configs}
  */
  readonly logDestinationConfigs: string[];
  /**
  * Filtering that specifies which web requests are kept in the logs and which are dropped. You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#logging_filter Wafv2LoggingConfiguration#logging_filter}
  */
  readonly loggingFilter?: Wafv2LoggingConfigurationLoggingFilter;
  /**
  * The parts of the request that you want to keep out of the logs. For example, if you redact the HEADER field, the HEADER field in the firehose will be xxx.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#redacted_fields Wafv2LoggingConfiguration#redacted_fields}
  */
  readonly redactedFields?: Wafv2LoggingConfigurationRedactedFields[];
  /**
  * The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#resource_arn Wafv2LoggingConfiguration#resource_arn}
  */
  readonly resourceArn: string;
}
export interface Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition {
  /**
  * Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#action Wafv2LoggingConfiguration#action}
  */
  readonly action: string;
}

export function wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionToTerraform(struct?: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}

export interface Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition {
  /**
  * The label name that a log record must contain in order to meet the condition. This must be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#label_name Wafv2LoggingConfiguration#label_name}
  */
  readonly labelName: string;
}

export function wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionToTerraform(struct?: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label_name: cdktf.stringToTerraform(struct!.labelName),
  }
}

export interface Wafv2LoggingConfigurationLoggingFilterFiltersConditions {
  /**
  * A single action condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#action_condition Wafv2LoggingConfiguration#action_condition}
  */
  readonly actionCondition?: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition;
  /**
  * A single label name condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#label_name_condition Wafv2LoggingConfiguration#label_name_condition}
  */
  readonly labelNameCondition?: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition;
}

export function wafv2LoggingConfigurationLoggingFilterFiltersConditionsToTerraform(struct?: Wafv2LoggingConfigurationLoggingFilterFiltersConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_condition: wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionToTerraform(struct!.actionCondition),
    label_name_condition: wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionToTerraform(struct!.labelNameCondition),
  }
}

export interface Wafv2LoggingConfigurationLoggingFilterFilters {
  /**
  * How to handle logs that satisfy the filter's conditions and requirement. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#behavior Wafv2LoggingConfiguration#behavior}
  */
  readonly behavior: string;
  /**
  * Match conditions for the filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#conditions Wafv2LoggingConfiguration#conditions}
  */
  readonly conditions: Wafv2LoggingConfigurationLoggingFilterFiltersConditions[];
  /**
  * Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#requirement Wafv2LoggingConfiguration#requirement}
  */
  readonly requirement: string;
}

export function wafv2LoggingConfigurationLoggingFilterFiltersToTerraform(struct?: Wafv2LoggingConfigurationLoggingFilterFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    conditions: cdktf.listMapper(wafv2LoggingConfigurationLoggingFilterFiltersConditionsToTerraform)(struct!.conditions),
    requirement: cdktf.stringToTerraform(struct!.requirement),
  }
}

export interface Wafv2LoggingConfigurationLoggingFilter {
  /**
  * Default handling for logs that don't match any of the specified filtering conditions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#default_behavior Wafv2LoggingConfiguration#default_behavior}
  */
  readonly defaultBehavior: string;
  /**
  * The filters that you want to apply to the logs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#filters Wafv2LoggingConfiguration#filters}
  */
  readonly filters: Wafv2LoggingConfigurationLoggingFilterFilters[];
}

export function wafv2LoggingConfigurationLoggingFilterToTerraform(struct?: Wafv2LoggingConfigurationLoggingFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_behavior: cdktf.stringToTerraform(struct!.defaultBehavior),
    filters: cdktf.listMapper(wafv2LoggingConfigurationLoggingFilterFiltersToTerraform)(struct!.filters),
  }
}

export interface Wafv2LoggingConfigurationRedactedFieldsJsonBodyMatchPattern {
  /**
  * Match all of the elements. See also MatchScope in JsonBody. You must specify either this setting or the IncludedPaths setting, but not both.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#all Wafv2LoggingConfiguration#all}
  */
  readonly all?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Match only the specified include paths. See also MatchScope in JsonBody.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#included_paths Wafv2LoggingConfiguration#included_paths}
  */
  readonly includedPaths?: string[];
}

export function wafv2LoggingConfigurationRedactedFieldsJsonBodyMatchPatternToTerraform(struct?: Wafv2LoggingConfigurationRedactedFieldsJsonBodyMatchPattern): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.all),
    included_paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.includedPaths),
  }
}

export interface Wafv2LoggingConfigurationRedactedFieldsJsonBody {
  /**
  * What AWS WAF should do if it fails to completely parse the JSON body.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#invalid_fallback_behavior Wafv2LoggingConfiguration#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * The patterns to look for in the JSON body. AWS WAF inspects the results of these pattern matches against the rule inspection criteria. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#match_pattern Wafv2LoggingConfiguration#match_pattern}
  */
  readonly matchPattern: Wafv2LoggingConfigurationRedactedFieldsJsonBodyMatchPattern;
  /**
  * The parts of the JSON to match against using the MatchPattern. If you specify All, AWS WAF matches against keys and values. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#match_scope Wafv2LoggingConfiguration#match_scope}
  */
  readonly matchScope: string;
}

export function wafv2LoggingConfigurationRedactedFieldsJsonBodyToTerraform(struct?: Wafv2LoggingConfigurationRedactedFieldsJsonBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    invalid_fallback_behavior: cdktf.stringToTerraform(struct!.invalidFallbackBehavior),
    match_pattern: wafv2LoggingConfigurationRedactedFieldsJsonBodyMatchPatternToTerraform(struct!.matchPattern),
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
  }
}

export interface Wafv2LoggingConfigurationRedactedFieldsSingleHeader {
  /**
  * The name of the query header to inspect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#name Wafv2LoggingConfiguration#name}
  */
  readonly name: string;
}

export function wafv2LoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct?: Wafv2LoggingConfigurationRedactedFieldsSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2LoggingConfigurationRedactedFields {
  /**
  * Inspect the request body as JSON. The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#json_body Wafv2LoggingConfiguration#json_body}
  */
  readonly jsonBody?: Wafv2LoggingConfigurationRedactedFieldsJsonBody;
  /**
  * Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#method Wafv2LoggingConfiguration#method}
  */
  readonly method?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Inspect the query string. This is the part of a URL that appears after a ? character, if any. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#query_string Wafv2LoggingConfiguration#query_string}
  */
  readonly queryString?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Inspect a single header. Provide the name of the header to inspect, for example, User-Agent or Referer. This setting isn't case sensitive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#single_header Wafv2LoggingConfiguration#single_header}
  */
  readonly singleHeader?: Wafv2LoggingConfigurationRedactedFieldsSingleHeader;
  /**
  * Inspect the request URI path. This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#uri_path Wafv2LoggingConfiguration#uri_path}
  */
  readonly uriPath?: { [key: string]: string } | cdktf.IResolvable;
}

export function wafv2LoggingConfigurationRedactedFieldsToTerraform(struct?: Wafv2LoggingConfigurationRedactedFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    json_body: wafv2LoggingConfigurationRedactedFieldsJsonBodyToTerraform(struct!.jsonBody),
    method: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.method),
    query_string: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.queryString),
    single_header: wafv2LoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct!.singleHeader),
    uri_path: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.uriPath),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html awscc_wafv2_logging_configuration}
*/
export class Wafv2LoggingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_wafv2_logging_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html awscc_wafv2_logging_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv2LoggingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv2LoggingConfigurationConfig) {
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
    this._logDestinationConfigs = config.logDestinationConfigs;
    this._loggingFilter = config.loggingFilter;
    this._redactedFields = config.redactedFields;
    this._resourceArn = config.resourceArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_destination_configs - computed: false, optional: false, required: true
  private _logDestinationConfigs: string[];
  public get logDestinationConfigs() {
    return this.getListAttribute('log_destination_configs');
  }
  public set logDestinationConfigs(value: string[]) {
    this._logDestinationConfigs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationConfigsInput() {
    return this._logDestinationConfigs
  }

  // logging_filter - computed: false, optional: true, required: false
  private _loggingFilter?: Wafv2LoggingConfigurationLoggingFilter;
  public get loggingFilter() {
    return this.interpolationForAttribute('logging_filter') as any;
  }
  public set loggingFilter(value: Wafv2LoggingConfigurationLoggingFilter ) {
    this._loggingFilter = value;
  }
  public resetLoggingFilter() {
    this._loggingFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingFilterInput() {
    return this._loggingFilter
  }

  // managed_by_firewall_manager - computed: true, optional: false, required: false
  public get managedByFirewallManager() {
    return this.getBooleanAttribute('managed_by_firewall_manager');
  }

  // redacted_fields - computed: false, optional: true, required: false
  private _redactedFields?: Wafv2LoggingConfigurationRedactedFields[];
  public get redactedFields() {
    return this.interpolationForAttribute('redacted_fields') as any;
  }
  public set redactedFields(value: Wafv2LoggingConfigurationRedactedFields[] ) {
    this._redactedFields = value;
  }
  public resetRedactedFields() {
    this._redactedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactedFieldsInput() {
    return this._redactedFields
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn: string;
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_destination_configs: cdktf.listMapper(cdktf.stringToTerraform)(this._logDestinationConfigs),
      logging_filter: wafv2LoggingConfigurationLoggingFilterToTerraform(this._loggingFilter),
      redacted_fields: cdktf.listMapper(wafv2LoggingConfigurationRedactedFieldsToTerraform)(this._redactedFields),
      resource_arn: cdktf.stringToTerraform(this._resourceArn),
    };
  }
}
