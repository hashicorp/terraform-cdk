import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Wafv2RegexPatternSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Description of the entity.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html#description Wafv2RegexPatternSet#description}
    */
    readonly description?: string;
    /**
    * Name of the RegexPatternSet.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html#name Wafv2RegexPatternSet#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html#regular_expression_list Wafv2RegexPatternSet#regular_expression_list}
    */
    readonly regularExpressionList: string[];
    /**
    * Use CLOUDFRONT for CloudFront RegexPatternSet, use REGIONAL for Application Load Balancer and API Gateway.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html#scope Wafv2RegexPatternSet#scope}
    */
    readonly scope: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html#tags Wafv2RegexPatternSet#tags}
    */
    readonly tags?: Wafv2RegexPatternSetTags[];
}
export interface Wafv2RegexPatternSetTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html#key Wafv2RegexPatternSet#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html#value Wafv2RegexPatternSet#value}
    */
    readonly value?: string;
}
export declare function wafv2RegexPatternSetTagsToTerraform(struct?: Wafv2RegexPatternSetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html awscc_wafv2_regex_pattern_set}
*/
export declare class Wafv2RegexPatternSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html awscc_wafv2_regex_pattern_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2RegexPatternSetConfig
    */
    constructor(scope: Construct, id: string, config: Wafv2RegexPatternSetConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _regularExpressionList;
    get regularExpressionList(): string[];
    set regularExpressionList(value: string[]);
    get regularExpressionListInput(): string[];
    private _scope;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
    private _tags?;
    get tags(): Wafv2RegexPatternSetTags[];
    set tags(value: Wafv2RegexPatternSetTags[]);
    resetTags(): void;
    get tagsInput(): Wafv2RegexPatternSetTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
