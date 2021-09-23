import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApsWorkspaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * AMP Workspace alias.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/aps_workspace.html#alias ApsWorkspace#alias}
    */
    readonly alias?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/aps_workspace.html#tags ApsWorkspace#tags}
    */
    readonly tags?: ApsWorkspaceTags[];
}
export interface ApsWorkspaceTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/aps_workspace.html#key ApsWorkspace#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/aps_workspace.html#value ApsWorkspace#value}
    */
    readonly value: string;
}
export declare function apsWorkspaceTagsToTerraform(struct?: ApsWorkspaceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/aps_workspace.html awscc_aps_workspace}
*/
export declare class ApsWorkspace extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/aps_workspace.html awscc_aps_workspace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApsWorkspaceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ApsWorkspaceConfig);
    private _alias?;
    get alias(): string;
    set alias(value: string);
    resetAlias(): void;
    get aliasInput(): string | undefined;
    get arn(): string;
    get id(): string;
    get prometheusEndpoint(): string;
    private _tags?;
    get tags(): ApsWorkspaceTags[];
    set tags(value: ApsWorkspaceTags[]);
    resetTags(): void;
    get tagsInput(): ApsWorkspaceTags[] | undefined;
    get workspaceId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
