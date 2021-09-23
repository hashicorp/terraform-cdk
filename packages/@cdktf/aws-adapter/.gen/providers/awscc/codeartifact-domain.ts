// https://www.terraform.io/docs/providers/awscc/r/codeartifact_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodeartifactDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_domain.html#domain_name CodeartifactDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * The access control resource policy on the provided domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_domain.html#permissions_policy_document CodeartifactDomain#permissions_policy_document}
  */
  readonly permissionsPolicyDocument?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_domain.html#tags CodeartifactDomain#tags}
  */
  readonly tags?: CodeartifactDomainTags[];
}
export interface CodeartifactDomainTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_domain.html#key CodeartifactDomain#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_domain.html#value CodeartifactDomain#value}
  */
  readonly value: string;
}

export function codeartifactDomainTagsToTerraform(struct?: CodeartifactDomainTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_domain.html awscc_codeartifact_domain}
*/
export class CodeartifactDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_codeartifact_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/codeartifact_domain.html awscc_codeartifact_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodeartifactDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CodeartifactDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_codeartifact_domain',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domainName = config.domainName;
    this._permissionsPolicyDocument = config.permissionsPolicyDocument;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // encryption_key - computed: true, optional: false, required: false
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: CodeartifactDomainTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: CodeartifactDomainTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      permissions_policy_document: cdktf.hashMapper(cdktf.anyToTerraform)(this._permissionsPolicyDocument),
      tags: cdktf.listMapper(codeartifactDomainTagsToTerraform)(this._tags),
    };
  }
}
