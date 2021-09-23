import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDetectiveGraphsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/detective_graphs.html awscc_detective_graphs}
*/
export declare class DataAwsccDetectiveGraphs extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/detective_graphs.html awscc_detective_graphs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDetectiveGraphsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccDetectiveGraphsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
