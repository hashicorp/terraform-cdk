import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAccessanalyzerAnalyzerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/accessanalyzer_analyzer.html#id DataAwsccAccessanalyzerAnalyzer#id}
    */
    readonly id: string;
}
export declare class DataAwsccAccessanalyzerAnalyzerArchiveRulesFilter extends cdktf.ComplexComputedList {
    get contains(): string[];
    get eq(): string[];
    get exists(): any;
    get neq(): string[];
    get property(): string;
}
export declare function dataAwsccAccessanalyzerAnalyzerArchiveRulesFilterToTerraform(struct?: DataAwsccAccessanalyzerAnalyzerArchiveRulesFilter): any;
export declare class DataAwsccAccessanalyzerAnalyzerArchiveRules extends cdktf.ComplexComputedList {
    get filter(): any;
    get ruleName(): string;
}
export declare function dataAwsccAccessanalyzerAnalyzerArchiveRulesToTerraform(struct?: DataAwsccAccessanalyzerAnalyzerArchiveRules): any;
export declare class DataAwsccAccessanalyzerAnalyzerTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccAccessanalyzerAnalyzerTagsToTerraform(struct?: DataAwsccAccessanalyzerAnalyzerTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/accessanalyzer_analyzer.html awscc_accessanalyzer_analyzer}
*/
export declare class DataAwsccAccessanalyzerAnalyzer extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/accessanalyzer_analyzer.html awscc_accessanalyzer_analyzer} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAccessanalyzerAnalyzerConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAccessanalyzerAnalyzerConfig);
    get analyzerName(): string;
    get archiveRules(): any;
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
