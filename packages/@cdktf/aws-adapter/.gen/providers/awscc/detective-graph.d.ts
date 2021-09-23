import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DetectiveGraphConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/detective_graph.html#tags DetectiveGraph#tags}
    */
    readonly tags?: DetectiveGraphTags[];
}
export interface DetectiveGraphTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. Valid characters are Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/detective_graph.html#key DetectiveGraph#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. Valid characters are Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/detective_graph.html#value DetectiveGraph#value}
    */
    readonly value?: string;
}
export declare function detectiveGraphTagsToTerraform(struct?: DetectiveGraphTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/detective_graph.html awscc_detective_graph}
*/
export declare class DetectiveGraph extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/detective_graph.html awscc_detective_graph} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DetectiveGraphConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DetectiveGraphConfig);
    get arn(): string;
    get id(): string;
    private _tags?;
    get tags(): DetectiveGraphTags[];
    set tags(value: DetectiveGraphTags[]);
    resetTags(): void;
    get tagsInput(): DetectiveGraphTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
