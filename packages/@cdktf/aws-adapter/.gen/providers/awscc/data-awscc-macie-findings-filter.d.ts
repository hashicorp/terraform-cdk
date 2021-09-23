import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMacieFindingsFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/macie_findings_filter.html#id DataAwsccMacieFindingsFilter#id}
    */
    readonly id: string;
}
export declare class DataAwsccMacieFindingsFilterFindingCriteriaCriterion extends cdktf.ComplexComputedList {
    get eq(): string[];
    get gt(): number;
    get gte(): number;
    get lt(): number;
    get lte(): number;
    get neq(): string[];
}
export declare function dataAwsccMacieFindingsFilterFindingCriteriaCriterionToTerraform(struct?: DataAwsccMacieFindingsFilterFindingCriteriaCriterion): any;
export declare class DataAwsccMacieFindingsFilterFindingCriteria extends cdktf.ComplexComputedList {
    get criterion(): any;
}
export declare function dataAwsccMacieFindingsFilterFindingCriteriaToTerraform(struct?: DataAwsccMacieFindingsFilterFindingCriteria): any;
export declare class DataAwsccMacieFindingsFilterFindingsFilterListItems extends cdktf.ComplexComputedList {
    get id(): string;
    get name(): string;
}
export declare function dataAwsccMacieFindingsFilterFindingsFilterListItemsToTerraform(struct?: DataAwsccMacieFindingsFilterFindingsFilterListItems): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/macie_findings_filter.html awscc_macie_findings_filter}
*/
export declare class DataAwsccMacieFindingsFilter extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/macie_findings_filter.html awscc_macie_findings_filter} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMacieFindingsFilterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccMacieFindingsFilterConfig);
    get action(): string;
    get arn(): string;
    get description(): string;
    get findingCriteria(): any;
    get findingsFilterListItems(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get position(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
