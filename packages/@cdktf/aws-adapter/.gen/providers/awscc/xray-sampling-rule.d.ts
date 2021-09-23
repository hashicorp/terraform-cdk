import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface XraySamplingRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#rule_name XraySamplingRule#rule_name}
    */
    readonly ruleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#sampling_rule XraySamplingRule#sampling_rule}
    */
    readonly samplingRule?: XraySamplingRuleSamplingRule;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#sampling_rule_record XraySamplingRule#sampling_rule_record}
    */
    readonly samplingRuleRecord?: XraySamplingRuleSamplingRuleRecord;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#sampling_rule_update XraySamplingRule#sampling_rule_update}
    */
    readonly samplingRuleUpdate?: XraySamplingRuleSamplingRuleUpdate;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#tags XraySamplingRule#tags}
    */
    readonly tags?: XraySamplingRuleTags[];
}
export interface XraySamplingRuleSamplingRule {
    /**
    * Matches attributes derived from the request.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#attributes XraySamplingRule#attributes}
    */
    readonly attributes?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The percentage of matching requests to instrument, after the reservoir is exhausted.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#fixed_rate XraySamplingRule#fixed_rate}
    */
    readonly fixedRate?: number;
    /**
    * Matches the hostname from a request URL.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#host XraySamplingRule#host}
    */
    readonly host?: string;
    /**
    * Matches the HTTP method from a request URL.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#http_method XraySamplingRule#http_method}
    */
    readonly httpMethod?: string;
    /**
    * The priority of the sampling rule.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#priority XraySamplingRule#priority}
    */
    readonly priority?: number;
    /**
    * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#reservoir_size XraySamplingRule#reservoir_size}
    */
    readonly reservoirSize?: number;
    /**
    * Matches the ARN of the AWS resource on which the service runs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#resource_arn XraySamplingRule#resource_arn}
    */
    readonly resourceArn?: string;
    /**
    * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#rule_arn XraySamplingRule#rule_arn}
    */
    readonly ruleArn?: string;
    /**
    * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#rule_name XraySamplingRule#rule_name}
    */
    readonly ruleName?: string;
    /**
    * Matches the name that the service uses to identify itself in segments.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#service_name XraySamplingRule#service_name}
    */
    readonly serviceName?: string;
    /**
    * Matches the origin that the service uses to identify its type in segments.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#service_type XraySamplingRule#service_type}
    */
    readonly serviceType?: string;
    /**
    * Matches the path from a request URL.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#url_path XraySamplingRule#url_path}
    */
    readonly urlPath?: string;
    /**
    * The version of the sampling rule format (1)
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#version XraySamplingRule#version}
    */
    readonly version?: number;
}
export declare function xraySamplingRuleSamplingRuleToTerraform(struct?: XraySamplingRuleSamplingRule): any;
export interface XraySamplingRuleSamplingRuleRecordSamplingRule {
    /**
    * Matches attributes derived from the request.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#attributes XraySamplingRule#attributes}
    */
    readonly attributes?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The percentage of matching requests to instrument, after the reservoir is exhausted.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#fixed_rate XraySamplingRule#fixed_rate}
    */
    readonly fixedRate?: number;
    /**
    * Matches the hostname from a request URL.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#host XraySamplingRule#host}
    */
    readonly host?: string;
    /**
    * Matches the HTTP method from a request URL.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#http_method XraySamplingRule#http_method}
    */
    readonly httpMethod?: string;
    /**
    * The priority of the sampling rule.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#priority XraySamplingRule#priority}
    */
    readonly priority?: number;
    /**
    * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#reservoir_size XraySamplingRule#reservoir_size}
    */
    readonly reservoirSize?: number;
    /**
    * Matches the ARN of the AWS resource on which the service runs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#resource_arn XraySamplingRule#resource_arn}
    */
    readonly resourceArn?: string;
    /**
    * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#rule_arn XraySamplingRule#rule_arn}
    */
    readonly ruleArn?: string;
    /**
    * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#rule_name XraySamplingRule#rule_name}
    */
    readonly ruleName?: string;
    /**
    * Matches the name that the service uses to identify itself in segments.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#service_name XraySamplingRule#service_name}
    */
    readonly serviceName?: string;
    /**
    * Matches the origin that the service uses to identify its type in segments.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#service_type XraySamplingRule#service_type}
    */
    readonly serviceType?: string;
    /**
    * Matches the path from a request URL.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#url_path XraySamplingRule#url_path}
    */
    readonly urlPath?: string;
    /**
    * The version of the sampling rule format (1)
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#version XraySamplingRule#version}
    */
    readonly version?: number;
}
export declare function xraySamplingRuleSamplingRuleRecordSamplingRuleToTerraform(struct?: XraySamplingRuleSamplingRuleRecordSamplingRule): any;
export interface XraySamplingRuleSamplingRuleRecord {
    /**
    * When the rule was created, in Unix time seconds.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#created_at XraySamplingRule#created_at}
    */
    readonly createdAt?: string;
    /**
    * When the rule was modified, in Unix time seconds.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#modified_at XraySamplingRule#modified_at}
    */
    readonly modifiedAt?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#sampling_rule XraySamplingRule#sampling_rule}
    */
    readonly samplingRule?: XraySamplingRuleSamplingRuleRecordSamplingRule;
}
export declare function xraySamplingRuleSamplingRuleRecordToTerraform(struct?: XraySamplingRuleSamplingRuleRecord): any;
export interface XraySamplingRuleSamplingRuleUpdate {
    /**
    * Matches attributes derived from the request.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#attributes XraySamplingRule#attributes}
    */
    readonly attributes?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The percentage of matching requests to instrument, after the reservoir is exhausted.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#fixed_rate XraySamplingRule#fixed_rate}
    */
    readonly fixedRate?: number;
    /**
    * Matches the hostname from a request URL.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#host XraySamplingRule#host}
    */
    readonly host?: string;
    /**
    * Matches the HTTP method from a request URL.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#http_method XraySamplingRule#http_method}
    */
    readonly httpMethod?: string;
    /**
    * The priority of the sampling rule.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#priority XraySamplingRule#priority}
    */
    readonly priority?: number;
    /**
    * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#reservoir_size XraySamplingRule#reservoir_size}
    */
    readonly reservoirSize?: number;
    /**
    * Matches the ARN of the AWS resource on which the service runs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#resource_arn XraySamplingRule#resource_arn}
    */
    readonly resourceArn?: string;
    /**
    * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#rule_arn XraySamplingRule#rule_arn}
    */
    readonly ruleArn?: string;
    /**
    * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#rule_name XraySamplingRule#rule_name}
    */
    readonly ruleName?: string;
    /**
    * Matches the name that the service uses to identify itself in segments.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#service_name XraySamplingRule#service_name}
    */
    readonly serviceName?: string;
    /**
    * Matches the origin that the service uses to identify its type in segments.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#service_type XraySamplingRule#service_type}
    */
    readonly serviceType?: string;
    /**
    * Matches the path from a request URL.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#url_path XraySamplingRule#url_path}
    */
    readonly urlPath?: string;
}
export declare function xraySamplingRuleSamplingRuleUpdateToTerraform(struct?: XraySamplingRuleSamplingRuleUpdate): any;
export interface XraySamplingRuleTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#key XraySamplingRule#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#value XraySamplingRule#value}
    */
    readonly value: string;
}
export declare function xraySamplingRuleTagsToTerraform(struct?: XraySamplingRuleTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html awscc_xray_sampling_rule}
*/
export declare class XraySamplingRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html awscc_xray_sampling_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options XraySamplingRuleConfig = {}
    */
    constructor(scope: Construct, id: string, config?: XraySamplingRuleConfig);
    get id(): string;
    get ruleArn(): string;
    private _ruleName?;
    get ruleName(): string;
    set ruleName(value: string);
    resetRuleName(): void;
    get ruleNameInput(): string | undefined;
    private _samplingRule?;
    get samplingRule(): XraySamplingRuleSamplingRule;
    set samplingRule(value: XraySamplingRuleSamplingRule);
    resetSamplingRule(): void;
    get samplingRuleInput(): XraySamplingRuleSamplingRule | undefined;
    private _samplingRuleRecord?;
    get samplingRuleRecord(): XraySamplingRuleSamplingRuleRecord;
    set samplingRuleRecord(value: XraySamplingRuleSamplingRuleRecord);
    resetSamplingRuleRecord(): void;
    get samplingRuleRecordInput(): XraySamplingRuleSamplingRuleRecord | undefined;
    private _samplingRuleUpdate?;
    get samplingRuleUpdate(): XraySamplingRuleSamplingRuleUpdate;
    set samplingRuleUpdate(value: XraySamplingRuleSamplingRuleUpdate);
    resetSamplingRuleUpdate(): void;
    get samplingRuleUpdateInput(): XraySamplingRuleSamplingRuleUpdate | undefined;
    private _tags?;
    get tags(): XraySamplingRuleTags[];
    set tags(value: XraySamplingRuleTags[]);
    resetTags(): void;
    get tagsInput(): XraySamplingRuleTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
