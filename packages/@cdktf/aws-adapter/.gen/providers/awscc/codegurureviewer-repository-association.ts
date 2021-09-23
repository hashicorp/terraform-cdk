// https://www.terraform.io/docs/providers/awscc/r/codegurureviewer_repository_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function codegurureviewerRepositoryAssociationTagsToTerraform(struct?: CodegurureviewerRepositoryAssociationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/codegurureviewer_repository_association.html awscc_codegurureviewer_repository_association}
*/
export class CodegurureviewerRepositoryAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_codegurureviewer_repository_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/codegurureviewer_repository_association.html awscc_codegurureviewer_repository_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodegurureviewerRepositoryAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: CodegurureviewerRepositoryAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_codegurureviewer_repository_association',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucketName = config.bucketName;
    this._connectionArn = config.connectionArn;
    this._name = config.name;
    this._owner = config.owner;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_arn - computed: true, optional: false, required: false
  public get associationArn() {
    return this.getStringAttribute('association_arn');
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string;
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName
  }

  // connection_arn - computed: true, optional: true, required: false
  private _connectionArn?: string;
  public get connectionArn() {
    return this.getStringAttribute('connection_arn');
  }
  public set connectionArn(value: string) {
    this._connectionArn = value;
  }
  public resetConnectionArn() {
    this._connectionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionArnInput() {
    return this._connectionArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string;
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: CodegurureviewerRepositoryAssociationTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: CodegurureviewerRepositoryAssociationTags[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      connection_arn: cdktf.stringToTerraform(this._connectionArn),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      tags: cdktf.listMapper(codegurureviewerRepositoryAssociationTagsToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
