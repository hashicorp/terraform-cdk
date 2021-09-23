import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccWorkspacesConnectionAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/workspaces_connection_alias.html#id DataAwsccWorkspacesConnectionAlias#id}
    */
    readonly id: string;
}
export declare class DataAwsccWorkspacesConnectionAliasAssociations extends cdktf.ComplexComputedList {
    get associatedAccountId(): string;
    get associationStatus(): string;
    get connectionIdentifier(): string;
    get resourceId(): string;
}
export declare function dataAwsccWorkspacesConnectionAliasAssociationsToTerraform(struct?: DataAwsccWorkspacesConnectionAliasAssociations): any;
export declare class DataAwsccWorkspacesConnectionAliasTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccWorkspacesConnectionAliasTagsToTerraform(struct?: DataAwsccWorkspacesConnectionAliasTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/workspaces_connection_alias.html awscc_workspaces_connection_alias}
*/
export declare class DataAwsccWorkspacesConnectionAlias extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/workspaces_connection_alias.html awscc_workspaces_connection_alias} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccWorkspacesConnectionAliasConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccWorkspacesConnectionAliasConfig);
    get aliasId(): string;
    get associations(): any;
    get connectionAliasState(): string;
    get connectionString(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
