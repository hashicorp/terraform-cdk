import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAccessanalyzerAnalyzersConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/accessanalyzer_analyzers.html awscc_accessanalyzer_analyzers}
*/
export declare class DataAwsccAccessanalyzerAnalyzers extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/accessanalyzer_analyzers.html awscc_accessanalyzer_analyzers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAccessanalyzerAnalyzersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccAccessanalyzerAnalyzersConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
