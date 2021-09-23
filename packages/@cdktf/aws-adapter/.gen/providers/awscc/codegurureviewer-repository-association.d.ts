import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodegurureviewerRepositoryAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codegurureviewer_repository_association.html#bucket_name CodegurureviewerRepositoryAssociation#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codegurureviewer_repository_association.html#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}
    */
    readonly connectionArn?: string;
    /**
    * Name of the repository to be associated.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codegurureviewer_repository_association.html#name CodegurureviewerRepositoryAssociation#name}
    */
    readonly name: string;
    /**
    * The owner of the repository. For a Bitbucket repository, this is the username for the account that owns the repository.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codegurureviewer_repository_association.html#owner CodegurureviewerRepositoryAssociation#owner}
    */
    readonly owner?: string;
    /**
    * The tags associated with a repository association.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codegurureviewer_repository_association.html#tags CodegurureviewerRepositoryAssociation#tags}
    */
    readonly tags?: CodegurureviewerRepositoryAssociationTags[];
    /**
    * The type of repository to be associated.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codegurureviewer_repository_association.html#type CodegurureviewerRepositoryAssociation#type}
    */
    readonly type: string;
}
export interface CodegurureviewerRepositoryAssociationTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codegurureviewer_repository_association.html#key CodegurureviewerRepositoryAssociation#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codegurureviewer_repository_association.html#value CodegurureviewerRepositoryAssociation#value}
    */
    readonly value: string;
}
export declare function codegurureviewerRepositoryAssociationTagsToTerraform(struct?: CodegurureviewerRepositoryAssociationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/codegurureviewer_repository_association.html awscc_codegurureviewer_repository_association}
*/
export declare class CodegurureviewerRepositoryAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/codegurureviewer_repository_association.html awscc_codegurureviewer_repository_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodegurureviewerRepositoryAssociationConfig
    */
    constructor(scope: Construct, id: string, config: CodegurureviewerRepositoryAssociationConfig);
    get associationArn(): string;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _connectionArn?;
    get connectionArn(): string;
    set connectionArn(value: string);
    resetConnectionArn(): void;
    get connectionArnInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    resetOwner(): void;
    get ownerInput(): string | undefined;
    private _tags?;
    get tags(): CodegurureviewerRepositoryAssociationTags[];
    set tags(value: CodegurureviewerRepositoryAssociationTags[]);
    resetTags(): void;
    get tagsInput(): CodegurureviewerRepositoryAssociationTags[] | undefined;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
