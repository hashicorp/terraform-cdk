import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccWafv2RegexPatternSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_regex_pattern_set.html#id DataAwsccWafv2RegexPatternSet#id}
    */
    readonly id: string;
}
export declare class DataAwsccWafv2RegexPatternSetTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccWafv2RegexPatternSetTagsToTerraform(struct?: DataAwsccWafv2RegexPatternSetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_regex_pattern_set.html awscc_wafv2_regex_pattern_set}
*/
export declare class DataAwsccWafv2RegexPatternSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/wafv2_regex_pattern_set.html awscc_wafv2_regex_pattern_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccWafv2RegexPatternSetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccWafv2RegexPatternSetConfig);
    get arn(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get regularExpressionList(): string[];
    get scope(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
