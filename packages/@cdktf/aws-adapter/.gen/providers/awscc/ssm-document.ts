// https://www.terraform.io/docs/providers/awscc/r/ssm_document.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of key and value pairs that describe attachments to a version of a document.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html#attachments SsmDocument#attachments}
  */
  readonly attachments?: SsmDocumentAttachments[];
  /**
  * The content for the Systems Manager document in JSON, YAML or String format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html#content SsmDocument#content}
  */
  readonly content: string;
  /**
  * Specify the document format for the request. The document format can be either JSON or YAML. JSON is the default format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html#document_format SsmDocument#document_format}
  */
  readonly documentFormat?: string;
  /**
  * The type of document to create.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html#document_type SsmDocument#document_type}
  */
  readonly documentType?: string;
  /**
  * A name for the Systems Manager document.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html#name SsmDocument#name}
  */
  readonly name?: string;
  /**
  * A list of SSM documents required by a document. For example, an ApplicationConfiguration document requires an ApplicationConfigurationSchema document.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html#requires SsmDocument#requires}
  */
  readonly requires?: SsmDocumentRequires[];
  /**
  * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html#tags SsmDocument#tags}
  */
  readonly tags?: SsmDocumentTags[];
  /**
  * Specify a target type to define the kinds of resources the document can run on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html#target_type SsmDocument#target_type}
  */
  readonly targetType?: string;
  /**
  * An optional field specifying the version of the artifact you are creating with the document. This value is unique across all versions of a document, and cannot be changed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html#version_name SsmDocument#version_name}
  */
  readonly versionName?: string;
}
export interface SsmDocumentAttachments {
  /**
  * The key of a key-value pair that identifies the location of an attachment to a document.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html#key SsmDocument#key}
  */
  readonly key?: string;
  /**
  * The name of the document attachment file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html#name SsmDocument#name}
  */
  readonly name?: string;
  /**
  * The value of a key-value pair that identifies the location of an attachment to a document. The format for Value depends on the type of key you specify.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html#values SsmDocument#values}
  */
  readonly values?: string[];
}

export function ssmDocumentAttachmentsToTerraform(struct?: SsmDocumentAttachments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface SsmDocumentRequires {
  /**
  * The name of the required SSM document. The name can be an Amazon Resource Name (ARN).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html#name SsmDocument#name}
  */
  readonly name?: string;
  /**
  * The document version required by the current document.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html#version SsmDocument#version}
  */
  readonly version?: string;
}

export function ssmDocumentRequiresToTerraform(struct?: SsmDocumentRequires): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface SsmDocumentTags {
  /**
  * The name of the tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html#key SsmDocument#key}
  */
  readonly key?: string;
  /**
  * The value of the tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html#value SsmDocument#value}
  */
  readonly value?: string;
}

export function ssmDocumentTagsToTerraform(struct?: SsmDocumentTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html awscc_ssm_document}
*/
export class SsmDocument extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ssm_document";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html awscc_ssm_document} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmDocumentConfig
  */
  public constructor(scope: Construct, id: string, config: SsmDocumentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssm_document',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._attachments = config.attachments;
    this._content = config.content;
    this._documentFormat = config.documentFormat;
    this._documentType = config.documentType;
    this._name = config.name;
    this._requires = config.requires;
    this._tags = config.tags;
    this._targetType = config.targetType;
    this._versionName = config.versionName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachments - computed: true, optional: true, required: false
  private _attachments?: SsmDocumentAttachments[];
  public get attachments() {
    return this.interpolationForAttribute('attachments') as any;
  }
  public set attachments(value: SsmDocumentAttachments[]) {
    this._attachments = value;
  }
  public resetAttachments() {
    this._attachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsInput() {
    return this._attachments
  }

  // content - computed: false, optional: false, required: true
  private _content: string;
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // document_format - computed: true, optional: true, required: false
  private _documentFormat?: string;
  public get documentFormat() {
    return this.getStringAttribute('document_format');
  }
  public set documentFormat(value: string) {
    this._documentFormat = value;
  }
  public resetDocumentFormat() {
    this._documentFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentFormatInput() {
    return this._documentFormat
  }

  // document_type - computed: true, optional: true, required: false
  private _documentType?: string;
  public get documentType() {
    return this.getStringAttribute('document_type');
  }
  public set documentType(value: string) {
    this._documentType = value;
  }
  public resetDocumentType() {
    this._documentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTypeInput() {
    return this._documentType
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

  // requires - computed: true, optional: true, required: false
  private _requires?: SsmDocumentRequires[];
  public get requires() {
    return this.interpolationForAttribute('requires') as any;
  }
  public set requires(value: SsmDocumentRequires[]) {
    this._requires = value;
  }
  public resetRequires() {
    this._requires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresInput() {
    return this._requires
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: SsmDocumentTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SsmDocumentTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // target_type - computed: true, optional: true, required: false
  private _targetType?: string;
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType
  }

  // version_name - computed: true, optional: true, required: false
  private _versionName?: string;
  public get versionName() {
    return this.getStringAttribute('version_name');
  }
  public set versionName(value: string) {
    this._versionName = value;
  }
  public resetVersionName() {
    this._versionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNameInput() {
    return this._versionName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attachments: cdktf.listMapper(ssmDocumentAttachmentsToTerraform)(this._attachments),
      content: cdktf.stringToTerraform(this._content),
      document_format: cdktf.stringToTerraform(this._documentFormat),
      document_type: cdktf.stringToTerraform(this._documentType),
      name: cdktf.stringToTerraform(this._name),
      requires: cdktf.listMapper(ssmDocumentRequiresToTerraform)(this._requires),
      tags: cdktf.listMapper(ssmDocumentTagsToTerraform)(this._tags),
      target_type: cdktf.stringToTerraform(this._targetType),
      version_name: cdktf.stringToTerraform(this._versionName),
    };
  }
}
