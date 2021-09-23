import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatabrewDatasetsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/databrew_datasets.html awscc_databrew_datasets}
*/
export declare class DataAwsccDatabrewDatasets extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/databrew_datasets.html awscc_databrew_datasets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatabrewDatasetsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccDatabrewDatasetsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
