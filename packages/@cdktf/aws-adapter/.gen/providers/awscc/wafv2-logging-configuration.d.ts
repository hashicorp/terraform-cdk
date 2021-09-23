import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionToTerraform(struct?: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition): any;
export interface Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition {
    /**
    * The label name that a log record must contain in order to meet the condition. This must be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#label_name Wafv2LoggingConfiguration#label_name}
    */
    readonly labelName: string;
}
export declare function wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionToTerraform(struct?: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition): any;
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
export declare function wafv2LoggingConfigurationLoggingFilterFiltersConditionsToTerraform(struct?: Wafv2LoggingConfigurationLoggingFilterFiltersConditions): any;
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
export declare function wafv2LoggingConfigurationLoggingFilterFiltersToTerraform(struct?: Wafv2LoggingConfigurationLoggingFilterFilters): any;
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
export declare function wafv2LoggingConfigurationLoggingFilterToTerraform(struct?: Wafv2LoggingConfigurationLoggingFilter): any;
export interface Wafv2LoggingConfigurationRedactedFieldsJsonBodyMatchPattern {
    /**
    * Match all of the elements. See also MatchScope in JsonBody. You must specify either this setting or the IncludedPaths setting, but not both.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#all Wafv2LoggingConfiguration#all}
    */
    readonly all?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Match only the specified include paths. See also MatchScope in JsonBody.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#included_paths Wafv2LoggingConfiguration#included_paths}
    */
    readonly includedPaths?: string[];
}
export declare function wafv2LoggingConfigurationRedactedFieldsJsonBodyMatchPatternToTerraform(struct?: Wafv2LoggingConfigurationRedactedFieldsJsonBodyMatchPattern): any;
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
export declare function wafv2LoggingConfigurationRedactedFieldsJsonBodyToTerraform(struct?: Wafv2LoggingConfigurationRedactedFieldsJsonBody): any;
export interface Wafv2LoggingConfigurationRedactedFieldsSingleHeader {
    /**
    * The name of the query header to inspect.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#name Wafv2LoggingConfiguration#name}
    */
    readonly name: string;
}
export declare function wafv2LoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct?: Wafv2LoggingConfigurationRedactedFieldsSingleHeader): any;
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
    readonly method?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Inspect the query string. This is the part of a URL that appears after a ? character, if any.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html#query_string Wafv2LoggingConfiguration#query_string}
    */
    readonly queryString?: {
        [key: string]: string;
    } | cdktf.IResolvable;
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
    readonly uriPath?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function wafv2LoggingConfigurationRedactedFieldsToTerraform(struct?: Wafv2LoggingConfigurationRedactedFields): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html awscc_wafv2_logging_configuration}
*/
export declare class Wafv2LoggingConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_logging_configuration.html awscc_wafv2_logging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2LoggingConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: Wafv2LoggingConfigurationConfig);
    get id(): string;
    private _logDestinationConfigs;
    get logDestinationConfigs(): string[];
    set logDestinationConfigs(value: string[]);
    get logDestinationConfigsInput(): string[];
    private _loggingFilter?;
    get loggingFilter(): Wafv2LoggingConfigurationLoggingFilter;
    set loggingFilter(value: Wafv2LoggingConfigurationLoggingFilter);
    resetLoggingFilter(): void;
    get loggingFilterInput(): Wafv2LoggingConfigurationLoggingFilter | undefined;
    get managedByFirewallManager(): cdktf.IResolvable;
    private _redactedFields?;
    get redactedFields(): Wafv2LoggingConfigurationRedactedFields[];
    set redactedFields(value: Wafv2LoggingConfigurationRedactedFields[]);
    resetRedactedFields(): void;
    get redactedFieldsInput(): Wafv2LoggingConfigurationRedactedFields[] | undefined;
    private _resourceArn;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
