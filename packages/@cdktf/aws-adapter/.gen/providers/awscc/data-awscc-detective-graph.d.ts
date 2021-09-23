import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDetectiveGraphConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/detective_graph.html#id DataAwsccDetectiveGraph#id}
    */
    readonly id: string;
}
export declare class DataAwsccDetectiveGraphTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccDetectiveGraphTagsToTerraform(struct?: DataAwsccDetectiveGraphTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/detective_graph.html awscc_detective_graph}
*/
export declare class DataAwsccDetectiveGraph extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/detective_graph.html awscc_detective_graph} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDetectiveGraphConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccDetectiveGraphConfig);
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
