import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCeCostCategoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ce_cost_category.html#id DataAwsccCeCostCategory#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ce_cost_category.html awscc_ce_cost_category}
*/
export declare class DataAwsccCeCostCategory extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ce_cost_category.html awscc_ce_cost_category} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCeCostCategoryConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCeCostCategoryConfig);
    get arn(): string;
    get defaultValue(): string;
    get effectiveStart(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get ruleVersion(): string;
    get rules(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
