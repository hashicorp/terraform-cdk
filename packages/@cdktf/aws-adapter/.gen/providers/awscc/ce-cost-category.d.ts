import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CeCostCategoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * The default value for the cost category
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ce_cost_category.html#default_value CeCostCategory#default_value}
    */
    readonly defaultValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ce_cost_category.html#name CeCostCategory#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ce_cost_category.html#rule_version CeCostCategory#rule_version}
    */
    readonly ruleVersion: string;
    /**
    * JSON array format of Expression in Billing and Cost Management API
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ce_cost_category.html#rules CeCostCategory#rules}
    */
    readonly rules: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ce_cost_category.html awscc_ce_cost_category}
*/
export declare class CeCostCategory extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ce_cost_category.html awscc_ce_cost_category} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CeCostCategoryConfig
    */
    constructor(scope: Construct, id: string, config: CeCostCategoryConfig);
    get arn(): string;
    private _defaultValue?;
    get defaultValue(): string;
    set defaultValue(value: string);
    resetDefaultValue(): void;
    get defaultValueInput(): string | undefined;
    get effectiveStart(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _ruleVersion;
    get ruleVersion(): string;
    set ruleVersion(value: string);
    get ruleVersionInput(): string;
    private _rules;
    get rules(): string;
    set rules(value: string);
    get rulesInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
