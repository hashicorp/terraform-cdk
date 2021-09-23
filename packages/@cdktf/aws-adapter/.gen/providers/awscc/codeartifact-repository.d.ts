import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodeartifactRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * A text description of the repository.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_repository.html#description CodeartifactRepository#description}
    */
    readonly description?: string;
    /**
    * The name of the domain that contains the repository.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_repository.html#domain_name CodeartifactRepository#domain_name}
    */
    readonly domainName: string;
    /**
    * A list of external connections associated with the repository.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_repository.html#external_connections CodeartifactRepository#external_connections}
    */
    readonly externalConnections?: string[];
    /**
    * The access control resource policy on the provided repository.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_repository.html#permissions_policy_document CodeartifactRepository#permissions_policy_document}
    */
    readonly permissionsPolicyDocument?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The name of the repository.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_repository.html#repository_name CodeartifactRepository#repository_name}
    */
    readonly repositoryName: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_repository.html#tags CodeartifactRepository#tags}
    */
    readonly tags?: CodeartifactRepositoryTags[];
    /**
    * A list of upstream repositories associated with the repository.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_repository.html#upstreams CodeartifactRepository#upstreams}
    */
    readonly upstreams?: string[];
}
export interface CodeartifactRepositoryTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_repository.html#key CodeartifactRepository#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_repository.html#value CodeartifactRepository#value}
    */
    readonly value: string;
}
export declare function codeartifactRepositoryTagsToTerraform(struct?: CodeartifactRepositoryTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_repository.html awscc_codeartifact_repository}
*/
export declare class CodeartifactRepository extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_repository.html awscc_codeartifact_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeartifactRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: CodeartifactRepositoryConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _domainName;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get domainOwner(): string;
    private _externalConnections?;
    get externalConnections(): string[];
    set externalConnections(value: string[]);
    resetExternalConnections(): void;
    get externalConnectionsInput(): string[] | undefined;
    get id(): string;
    get name(): string;
    private _permissionsPolicyDocument?;
    get permissionsPolicyDocument(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set permissionsPolicyDocument(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetPermissionsPolicyDocument(): void;
    get permissionsPolicyDocumentInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    private _repositoryName;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string;
    private _tags?;
    get tags(): CodeartifactRepositoryTags[];
    set tags(value: CodeartifactRepositoryTags[]);
    resetTags(): void;
    get tagsInput(): CodeartifactRepositoryTags[] | undefined;
    private _upstreams?;
    get upstreams(): string[];
    set upstreams(value: string[]);
    resetUpstreams(): void;
    get upstreamsInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
