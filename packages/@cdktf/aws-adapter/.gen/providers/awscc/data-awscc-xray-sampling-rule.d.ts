import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccXraySamplingRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/xray_sampling_rule.html#id DataAwsccXraySamplingRule#id}
    */
    readonly id: string;
}
export declare class DataAwsccXraySamplingRuleSamplingRule extends cdktf.ComplexComputedList {
    get attributes(): any;
    get fixedRate(): number;
    get host(): string;
    get httpMethod(): string;
    get priority(): number;
    get reservoirSize(): number;
    get resourceArn(): string;
    get ruleArn(): string;
    get ruleName(): string;
    get serviceName(): string;
    get serviceType(): string;
    get urlPath(): string;
    get version(): number;
}
export declare function dataAwsccXraySamplingRuleSamplingRuleToTerraform(struct?: DataAwsccXraySamplingRuleSamplingRule): any;
export declare class DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule extends cdktf.ComplexComputedList {
    get attributes(): any;
    get fixedRate(): number;
    get host(): string;
    get httpMethod(): string;
    get priority(): number;
    get reservoirSize(): number;
    get resourceArn(): string;
    get ruleArn(): string;
    get ruleName(): string;
    get serviceName(): string;
    get serviceType(): string;
    get urlPath(): string;
    get version(): number;
}
export declare function dataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleToTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule): any;
export declare class DataAwsccXraySamplingRuleSamplingRuleRecord extends cdktf.ComplexComputedList {
    get createdAt(): string;
    get modifiedAt(): string;
    get samplingRule(): any;
}
export declare function dataAwsccXraySamplingRuleSamplingRuleRecordToTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleRecord): any;
export declare class DataAwsccXraySamplingRuleSamplingRuleUpdate extends cdktf.ComplexComputedList {
    get attributes(): any;
    get fixedRate(): number;
    get host(): string;
    get httpMethod(): string;
    get priority(): number;
    get reservoirSize(): number;
    get resourceArn(): string;
    get ruleArn(): string;
    get ruleName(): string;
    get serviceName(): string;
    get serviceType(): string;
    get urlPath(): string;
}
export declare function dataAwsccXraySamplingRuleSamplingRuleUpdateToTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleUpdate): any;
export declare class DataAwsccXraySamplingRuleTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccXraySamplingRuleTagsToTerraform(struct?: DataAwsccXraySamplingRuleTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/xray_sampling_rule.html awscc_xray_sampling_rule}
*/
export declare class DataAwsccXraySamplingRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/xray_sampling_rule.html awscc_xray_sampling_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccXraySamplingRuleConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccXraySamplingRuleConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get ruleArn(): string;
    get ruleName(): string;
    get samplingRule(): any;
    get samplingRuleRecord(): any;
    get samplingRuleUpdate(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
