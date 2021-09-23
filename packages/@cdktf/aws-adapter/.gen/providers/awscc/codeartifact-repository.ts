// https://www.terraform.io/docs/providers/awscc/r/codeartifact_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly permissionsPolicyDocument?: { [key: string]: string } | cdktf.IResolvable;
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

export function codeartifactRepositoryTagsToTerraform(struct?: CodeartifactRepositoryTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_repository.html awscc_codeartifact_repository}
*/
export class CodeartifactRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_codeartifact_repository";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_repository.html awscc_codeartifact_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodeartifactRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: CodeartifactRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_codeartifact_repository',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._domainName = config.domainName;
    this._externalConnections = config.externalConnections;
    this._permissionsPolicyDocument = config.permissionsPolicyDocument;
    this._repositoryName = config.repositoryName;
    this._tags = config.tags;
    this._upstreams = config.upstreams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // domain_owner - computed: true, optional: false, required: false
  public get domainOwner() {
    return this.getStringAttribute('domain_owner');
  }

  // external_connections - computed: false, optional: true, required: false
  private _externalConnections?: string[];
  public get externalConnections() {
    return this.getListAttribute('external_connections');
  }
  public set externalConnections(value: string[] ) {
    this._externalConnections = value;
  }
  public resetExternalConnections() {
    this._externalConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalConnectionsInput() {
    return this._externalConnections
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions_policy_document - computed: false, optional: true, required: false
  private _permissionsPolicyDocument?: { [key: string]: string } | cdktf.IResolvable;
  public get permissionsPolicyDocument() {
    return this.interpolationForAttribute('permissions_policy_document') as any;
  }
  public set permissionsPolicyDocument(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._permissionsPolicyDocument = value;
  }
  public resetPermissionsPolicyDocument() {
    this._permissionsPolicyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsPolicyDocumentInput() {
    return this._permissionsPolicyDocument
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName: string;
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: CodeartifactRepositoryTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: CodeartifactRepositoryTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // upstreams - computed: false, optional: true, required: false
  private _upstreams?: string[];
  public get upstreams() {
    return this.getListAttribute('upstreams');
  }
  public set upstreams(value: string[] ) {
    this._upstreams = value;
  }
  public resetUpstreams() {
    this._upstreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamsInput() {
    return this._upstreams
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      domain_name: cdktf.stringToTerraform(this._domainName),
      external_connections: cdktf.listMapper(cdktf.stringToTerraform)(this._externalConnections),
      permissions_policy_document: cdktf.hashMapper(cdktf.anyToTerraform)(this._permissionsPolicyDocument),
      repository_name: cdktf.stringToTerraform(this._repositoryName),
      tags: cdktf.listMapper(codeartifactRepositoryTagsToTerraform)(this._tags),
      upstreams: cdktf.listMapper(cdktf.stringToTerraform)(this._upstreams),
    };
  }
}
