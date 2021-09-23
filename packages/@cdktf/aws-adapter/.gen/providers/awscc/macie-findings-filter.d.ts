import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MacieFindingsFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#action MacieFindingsFilter#action}
    */
    readonly action?: string;
    /**
    * Findings filter description
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#description MacieFindingsFilter#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#finding_criteria MacieFindingsFilter#finding_criteria}
    */
    readonly findingCriteria: MacieFindingsFilterFindingCriteria;
    /**
    * Findings filter name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#name MacieFindingsFilter#name}
    */
    readonly name: string;
    /**
    * Findings filter position.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#position MacieFindingsFilter#position}
    */
    readonly position?: number;
}
export interface MacieFindingsFilterFindingCriteriaCriterion {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#eq MacieFindingsFilter#eq}
    */
    readonly eq?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#gt MacieFindingsFilter#gt}
    */
    readonly gt?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#gte MacieFindingsFilter#gte}
    */
    readonly gte?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#lt MacieFindingsFilter#lt}
    */
    readonly lt?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#lte MacieFindingsFilter#lte}
    */
    readonly lte?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#neq MacieFindingsFilter#neq}
    */
    readonly neq?: string[];
}
export declare function macieFindingsFilterFindingCriteriaCriterionToTerraform(struct?: MacieFindingsFilterFindingCriteriaCriterion): any;
export interface MacieFindingsFilterFindingCriteria {
    /**
    * Map of filter criteria.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#criterion MacieFindingsFilter#criterion}
    */
    readonly criterion?: {
        [key: string]: MacieFindingsFilterFindingCriteriaCriterion;
    } | cdktf.IResolvable;
}
export declare function macieFindingsFilterFindingCriteriaToTerraform(struct?: MacieFindingsFilterFindingCriteria): any;
export declare class MacieFindingsFilterFindingsFilterListItems extends cdktf.ComplexComputedList {
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
}
export declare function macieFindingsFilterFindingsFilterListItemsToTerraform(struct?: MacieFindingsFilterFindingsFilterListItems): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html awscc_macie_findings_filter}
*/
export declare class MacieFindingsFilter extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html awscc_macie_findings_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MacieFindingsFilterConfig
    */
    constructor(scope: Construct, id: string, config: MacieFindingsFilterConfig);
    private _action?;
    get action(): string;
    set action(value: string);
    resetAction(): void;
    get actionInput(): string | undefined;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _findingCriteria;
    get findingCriteria(): MacieFindingsFilterFindingCriteria;
    set findingCriteria(value: MacieFindingsFilterFindingCriteria);
    get findingCriteriaInput(): MacieFindingsFilterFindingCriteria;
    get findingsFilterListItems(): any;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _position?;
    get position(): number;
    set position(value: number);
    resetPosition(): void;
    get positionInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
