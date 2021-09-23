// https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomerprofilesObjectTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether a profile should be created when data is received.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#allow_profile_creation CustomerprofilesObjectType#allow_profile_creation}
  */
  readonly allowProfileCreation?: boolean | cdktf.IResolvable;
  /**
  * Description of the profile object type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#description CustomerprofilesObjectType#description}
  */
  readonly description?: string;
  /**
  * The unique name of the domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#domain_name CustomerprofilesObjectType#domain_name}
  */
  readonly domainName: string;
  /**
  * The default encryption key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#encryption_key CustomerprofilesObjectType#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * The default number of days until the data within the domain expires.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#expiration_days CustomerprofilesObjectType#expiration_days}
  */
  readonly expirationDays?: number;
  /**
  * A list of the name and ObjectType field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#fields CustomerprofilesObjectType#fields}
  */
  readonly fields?: CustomerprofilesObjectTypeFields[];
  /**
  * A list of unique keys that can be used to map data to the profile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#keys CustomerprofilesObjectType#keys}
  */
  readonly keys?: CustomerprofilesObjectTypeKeys[];
  /**
  * The name of the profile object type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#object_type_name CustomerprofilesObjectType#object_type_name}
  */
  readonly objectTypeName?: string;
  /**
  * The tags (keys and values) associated with the integration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#tags CustomerprofilesObjectType#tags}
  */
  readonly tags?: CustomerprofilesObjectTypeTags[];
  /**
  * A unique identifier for the object template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#template_id CustomerprofilesObjectType#template_id}
  */
  readonly templateId?: string;
}
export interface CustomerprofilesObjectTypeFieldsObjectTypeField {
  /**
  * The content type of the field. Used for determining equality when searching.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#content_type CustomerprofilesObjectType#content_type}
  */
  readonly contentType?: string;
  /**
  * A field of a ProfileObject. For example: _source.FirstName, where "_source" is a ProfileObjectType of a Zendesk user and "FirstName" is a field in that ObjectType.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#source CustomerprofilesObjectType#source}
  */
  readonly source?: string;
  /**
  * The location of the data in the standard ProfileObject model. For example: _profile.Address.PostalCode.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#target CustomerprofilesObjectType#target}
  */
  readonly target?: string;
}

export function customerprofilesObjectTypeFieldsObjectTypeFieldToTerraform(struct?: CustomerprofilesObjectTypeFieldsObjectTypeField): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}

export interface CustomerprofilesObjectTypeFields {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#name CustomerprofilesObjectType#name}
  */
  readonly name?: string;
  /**
  * Represents a field in a ProfileObjectType.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#object_type_field CustomerprofilesObjectType#object_type_field}
  */
  readonly objectTypeField?: CustomerprofilesObjectTypeFieldsObjectTypeField;
}

export function customerprofilesObjectTypeFieldsToTerraform(struct?: CustomerprofilesObjectTypeFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    object_type_field: customerprofilesObjectTypeFieldsObjectTypeFieldToTerraform(struct!.objectTypeField),
  }
}

export interface CustomerprofilesObjectTypeKeysObjectTypeKeyList {
  /**
  * The reference for the key name of the fields map. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#field_names CustomerprofilesObjectType#field_names}
  */
  readonly fieldNames?: string[];
  /**
  * The types of keys that a ProfileObject can have. Each ProfileObject can have only 1 UNIQUE key but multiple PROFILE keys. PROFILE means that this key can be used to tie an object to a PROFILE. UNIQUE means that it can be used to uniquely identify an object. If a key a is marked as SECONDARY, it will be used to search for profiles after all other PROFILE keys have been searched. A LOOKUP_ONLY key is only used to match a profile but is not persisted to be used for searching of the profile. A NEW_ONLY key is only used if the profile does not already exist before the object is ingested, otherwise it is only used for matching objects to profiles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#standard_identifiers CustomerprofilesObjectType#standard_identifiers}
  */
  readonly standardIdentifiers?: string[];
}

export function customerprofilesObjectTypeKeysObjectTypeKeyListToTerraform(struct?: CustomerprofilesObjectTypeKeysObjectTypeKeyList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fieldNames),
    standard_identifiers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.standardIdentifiers),
  }
}

export interface CustomerprofilesObjectTypeKeys {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#name CustomerprofilesObjectType#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#object_type_key_list CustomerprofilesObjectType#object_type_key_list}
  */
  readonly objectTypeKeyList?: CustomerprofilesObjectTypeKeysObjectTypeKeyList[];
}

export function customerprofilesObjectTypeKeysToTerraform(struct?: CustomerprofilesObjectTypeKeys): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    object_type_key_list: cdktf.listMapper(customerprofilesObjectTypeKeysObjectTypeKeyListToTerraform)(struct!.objectTypeKeyList),
  }
}

export interface CustomerprofilesObjectTypeTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#key CustomerprofilesObjectType#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html#value CustomerprofilesObjectType#value}
  */
  readonly value: string;
}

export function customerprofilesObjectTypeTagsToTerraform(struct?: CustomerprofilesObjectTypeTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html awscc_customerprofiles_object_type}
*/
export class CustomerprofilesObjectType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_customerprofiles_object_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html awscc_customerprofiles_object_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomerprofilesObjectTypeConfig
  */
  public constructor(scope: Construct, id: string, config: CustomerprofilesObjectTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_customerprofiles_object_type',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowProfileCreation = config.allowProfileCreation;
    this._description = config.description;
    this._domainName = config.domainName;
    this._encryptionKey = config.encryptionKey;
    this._expirationDays = config.expirationDays;
    this._fields = config.fields;
    this._keys = config.keys;
    this._objectTypeName = config.objectTypeName;
    this._tags = config.tags;
    this._templateId = config.templateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_profile_creation - computed: false, optional: true, required: false
  private _allowProfileCreation?: boolean | cdktf.IResolvable;
  public get allowProfileCreation() {
    return this.getBooleanAttribute('allow_profile_creation');
  }
  public set allowProfileCreation(value: boolean | cdktf.IResolvable ) {
    this._allowProfileCreation = value;
  }
  public resetAllowProfileCreation() {
    this._allowProfileCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowProfileCreationInput() {
    return this._allowProfileCreation
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: string;
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string ) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey
  }

  // expiration_days - computed: false, optional: true, required: false
  private _expirationDays?: number;
  public get expirationDays() {
    return this.getNumberAttribute('expiration_days');
  }
  public set expirationDays(value: number ) {
    this._expirationDays = value;
  }
  public resetExpirationDays() {
    this._expirationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDaysInput() {
    return this._expirationDays
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: CustomerprofilesObjectTypeFields[];
  public get fields() {
    return this.interpolationForAttribute('fields') as any;
  }
  public set fields(value: CustomerprofilesObjectTypeFields[] ) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: CustomerprofilesObjectTypeKeys[];
  public get keys() {
    return this.interpolationForAttribute('keys') as any;
  }
  public set keys(value: CustomerprofilesObjectTypeKeys[] ) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // object_type_name - computed: true, optional: true, required: false
  private _objectTypeName?: string;
  public get objectTypeName() {
    return this.getStringAttribute('object_type_name');
  }
  public set objectTypeName(value: string) {
    this._objectTypeName = value;
  }
  public resetObjectTypeName() {
    this._objectTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeNameInput() {
    return this._objectTypeName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: CustomerprofilesObjectTypeTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: CustomerprofilesObjectTypeTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string;
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string ) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_profile_creation: cdktf.booleanToTerraform(this._allowProfileCreation),
      description: cdktf.stringToTerraform(this._description),
      domain_name: cdktf.stringToTerraform(this._domainName),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      expiration_days: cdktf.numberToTerraform(this._expirationDays),
      fields: cdktf.listMapper(customerprofilesObjectTypeFieldsToTerraform)(this._fields),
      keys: cdktf.listMapper(customerprofilesObjectTypeKeysToTerraform)(this._keys),
      object_type_name: cdktf.stringToTerraform(this._objectTypeName),
      tags: cdktf.listMapper(customerprofilesObjectTypeTagsToTerraform)(this._tags),
      template_id: cdktf.stringToTerraform(this._templateId),
    };
  }
}
