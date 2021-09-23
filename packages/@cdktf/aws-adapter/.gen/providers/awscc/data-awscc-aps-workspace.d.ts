import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccApsWorkspaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/aps_workspace.html#id DataAwsccApsWorkspace#id}
    */
    readonly id: string;
}
export declare class DataAwsccApsWorkspaceTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccApsWorkspaceTagsToTerraform(struct?: DataAwsccApsWorkspaceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/aps_workspace.html awscc_aps_workspace}
*/
export declare class DataAwsccApsWorkspace extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/aps_workspace.html awscc_aps_workspace} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccApsWorkspaceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccApsWorkspaceConfig);
    get alias(): string;
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get prometheusEndpoint(): string;
    get tags(): any;
    get workspaceId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
