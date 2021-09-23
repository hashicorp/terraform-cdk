import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkspacesConnectionAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/workspaces_connection_alias.html#connection_string WorkspacesConnectionAlias#connection_string}
    */
    readonly connectionString: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/workspaces_connection_alias.html#tags WorkspacesConnectionAlias#tags}
    */
    readonly tags?: WorkspacesConnectionAliasTags[];
}
export declare class WorkspacesConnectionAliasAssociations extends cdktf.ComplexComputedList {
    private _associatedAccountId?;
    get associatedAccountId(): string;
    set associatedAccountId(value: string);
    resetAssociatedAccountId(): void;
    get associatedAccountIdInput(): string | undefined;
    private _associationStatus?;
    get associationStatus(): string;
    set associationStatus(value: string);
    resetAssociationStatus(): void;
    get associationStatusInput(): string | undefined;
    private _connectionIdentifier?;
    get connectionIdentifier(): string;
    set connectionIdentifier(value: string);
    resetConnectionIdentifier(): void;
    get connectionIdentifierInput(): string | undefined;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    resetResourceId(): void;
    get resourceIdInput(): string | undefined;
}
export declare function workspacesConnectionAliasAssociationsToTerraform(struct?: WorkspacesConnectionAliasAssociations): any;
export interface WorkspacesConnectionAliasTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/workspaces_connection_alias.html#key WorkspacesConnectionAlias#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/workspaces_connection_alias.html#value WorkspacesConnectionAlias#value}
    */
    readonly value: string;
}
export declare function workspacesConnectionAliasTagsToTerraform(struct?: WorkspacesConnectionAliasTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/workspaces_connection_alias.html awscc_workspaces_connection_alias}
*/
export declare class WorkspacesConnectionAlias extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/workspaces_connection_alias.html awscc_workspaces_connection_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspacesConnectionAliasConfig
    */
    constructor(scope: Construct, id: string, config: WorkspacesConnectionAliasConfig);
    get aliasId(): string;
    get associations(): any;
    get connectionAliasState(): string;
    private _connectionString;
    get connectionString(): string;
    set connectionString(value: string);
    get connectionStringInput(): string;
    get id(): string;
    private _tags?;
    get tags(): WorkspacesConnectionAliasTags[];
    set tags(value: WorkspacesConnectionAliasTags[]);
    resetTags(): void;
    get tagsInput(): WorkspacesConnectionAliasTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
