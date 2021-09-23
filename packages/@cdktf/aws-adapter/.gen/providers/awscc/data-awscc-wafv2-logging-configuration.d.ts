import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccWafv2LoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_logging_configuration.html#id DataAwsccWafv2LoggingConfiguration#id}
    */
    readonly id: string;
}
export declare class DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition extends cdktf.ComplexComputedList {
    get action(): string;
}
export declare function dataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionToTerraform(struct?: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition): any;
export declare class DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition extends cdktf.ComplexComputedList {
    get labelName(): string;
}
export declare function dataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionToTerraform(struct?: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition): any;
export declare class DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions extends cdktf.ComplexComputedList {
    get actionCondition(): any;
    get labelNameCondition(): any;
}
export declare function dataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsToTerraform(struct?: DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions): any;
export declare class DataAwsccWafv2LoggingConfigurationLoggingFilterFilters extends cdktf.ComplexComputedList {
    get behavior(): string;
    get conditions(): any;
    get requirement(): string;
}
export declare function dataAwsccWafv2LoggingConfigurationLoggingFilterFiltersToTerraform(struct?: DataAwsccWafv2LoggingConfigurationLoggingFilterFilters): any;
export declare class DataAwsccWafv2LoggingConfigurationLoggingFilter extends cdktf.ComplexComputedList {
    get defaultBehavior(): string;
    get filters(): any;
}
export declare function dataAwsccWafv2LoggingConfigurationLoggingFilterToTerraform(struct?: DataAwsccWafv2LoggingConfigurationLoggingFilter): any;
export declare class DataAwsccWafv2LoggingConfigurationRedactedFieldsJsonBodyMatchPattern extends cdktf.ComplexComputedList {
    get all(): any;
    get includedPaths(): string[];
}
export declare function dataAwsccWafv2LoggingConfigurationRedactedFieldsJsonBodyMatchPatternToTerraform(struct?: DataAwsccWafv2LoggingConfigurationRedactedFieldsJsonBodyMatchPattern): any;
export declare class DataAwsccWafv2LoggingConfigurationRedactedFieldsJsonBody extends cdktf.ComplexComputedList {
    get invalidFallbackBehavior(): string;
    get matchPattern(): any;
    get matchScope(): string;
}
export declare function dataAwsccWafv2LoggingConfigurationRedactedFieldsJsonBodyToTerraform(struct?: DataAwsccWafv2LoggingConfigurationRedactedFieldsJsonBody): any;
export declare class DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader extends cdktf.ComplexComputedList {
    get name(): string;
}
export declare function dataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct?: DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader): any;
export declare class DataAwsccWafv2LoggingConfigurationRedactedFields extends cdktf.ComplexComputedList {
    get jsonBody(): any;
    get method(): any;
    get queryString(): any;
    get singleHeader(): any;
    get uriPath(): any;
}
export declare function dataAwsccWafv2LoggingConfigurationRedactedFieldsToTerraform(struct?: DataAwsccWafv2LoggingConfigurationRedactedFields): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_logging_configuration.html awscc_wafv2_logging_configuration}
*/
export declare class DataAwsccWafv2LoggingConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_logging_configuration.html awscc_wafv2_logging_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccWafv2LoggingConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccWafv2LoggingConfigurationConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get logDestinationConfigs(): string[];
    get loggingFilter(): any;
    get managedByFirewallManager(): cdktf.IResolvable;
    get redactedFields(): any;
    get resourceArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
