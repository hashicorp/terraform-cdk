import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function ssmDocumentAttachmentsToTerraform(struct?: SsmDocumentAttachments): any;
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
export declare function ssmDocumentRequiresToTerraform(struct?: SsmDocumentRequires): any;
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
export declare function ssmDocumentTagsToTerraform(struct?: SsmDocumentTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html awscc_ssm_document}
*/
export declare class SsmDocument extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ssm_document.html awscc_ssm_document} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmDocumentConfig
    */
    constructor(scope: Construct, id: string, config: SsmDocumentConfig);
    private _attachments?;
    get attachments(): SsmDocumentAttachments[];
    set attachments(value: SsmDocumentAttachments[]);
    resetAttachments(): void;
    get attachmentsInput(): SsmDocumentAttachments[] | undefined;
    private _content;
    get content(): string;
    set content(value: string);
    get contentInput(): string;
    private _documentFormat?;
    get documentFormat(): string;
    set documentFormat(value: string);
    resetDocumentFormat(): void;
    get documentFormatInput(): string | undefined;
    private _documentType?;
    get documentType(): string;
    set documentType(value: string);
    resetDocumentType(): void;
    get documentTypeInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _requires?;
    get requires(): SsmDocumentRequires[];
    set requires(value: SsmDocumentRequires[]);
    resetRequires(): void;
    get requiresInput(): SsmDocumentRequires[] | undefined;
    private _tags?;
    get tags(): SsmDocumentTags[];
    set tags(value: SsmDocumentTags[]);
    resetTags(): void;
    get tagsInput(): SsmDocumentTags[] | undefined;
    private _targetType?;
    get targetType(): string;
    set targetType(value: string);
    resetTargetType(): void;
    get targetTypeInput(): string | undefined;
    private _versionName?;
    get versionName(): string;
    set versionName(value: string);
    resetVersionName(): void;
    get versionNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
