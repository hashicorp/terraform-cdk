// https://www.terraform.io/docs/providers/awscc/r/iam_saml_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamSamlProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_saml_provider.html#name IamSamlProvider#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_saml_provider.html#saml_metadata_document IamSamlProvider#saml_metadata_document}
  */
  readonly samlMetadataDocument: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_saml_provider.html#tags IamSamlProvider#tags}
  */
  readonly tags?: IamSamlProviderTags[];
}
export interface IamSamlProviderTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_saml_provider.html#key IamSamlProvider#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iam_saml_provider.html#value IamSamlProvider#value}
  */
  readonly value: string;
}

export function iamSamlProviderTagsToTerraform(struct?: IamSamlProviderTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iam_saml_provider.html awscc_iam_saml_provider}
*/
export class IamSamlProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iam_saml_provider";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iam_saml_provider.html awscc_iam_saml_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamSamlProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IamSamlProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iam_saml_provider',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._samlMetadataDocument = config.samlMetadataDocument;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // saml_metadata_document - computed: false, optional: false, required: true
  private _samlMetadataDocument: string;
  public get samlMetadataDocument() {
    return this.getStringAttribute('saml_metadata_document');
  }
  public set samlMetadataDocument(value: string) {
    this._samlMetadataDocument = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlMetadataDocumentInput() {
    return this._samlMetadataDocument
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IamSamlProviderTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IamSamlProviderTags[] ) {
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
      name: cdktf.stringToTerraform(this._name),
      saml_metadata_document: cdktf.stringToTerraform(this._samlMetadataDocument),
      tags: cdktf.listMapper(iamSamlProviderTagsToTerraform)(this._tags),
    };
  }
}
