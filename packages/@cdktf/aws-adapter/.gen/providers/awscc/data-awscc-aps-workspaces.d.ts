import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccApsWorkspacesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/aps_workspaces.html awscc_aps_workspaces}
*/
export declare class DataAwsccApsWorkspaces extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/aps_workspaces.html awscc_aps_workspaces} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccApsWorkspacesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccApsWorkspacesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
