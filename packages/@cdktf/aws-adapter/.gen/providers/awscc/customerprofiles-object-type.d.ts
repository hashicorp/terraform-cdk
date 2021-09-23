import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function customerprofilesObjectTypeFieldsObjectTypeFieldToTerraform(struct?: CustomerprofilesObjectTypeFieldsObjectTypeField): any;
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
export declare function customerprofilesObjectTypeFieldsToTerraform(struct?: CustomerprofilesObjectTypeFields): any;
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
export declare function customerprofilesObjectTypeKeysObjectTypeKeyListToTerraform(struct?: CustomerprofilesObjectTypeKeysObjectTypeKeyList): any;
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
export declare function customerprofilesObjectTypeKeysToTerraform(struct?: CustomerprofilesObjectTypeKeys): any;
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
export declare function customerprofilesObjectTypeTagsToTerraform(struct?: CustomerprofilesObjectTypeTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html awscc_customerprofiles_object_type}
*/
export declare class CustomerprofilesObjectType extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_object_type.html awscc_customerprofiles_object_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomerprofilesObjectTypeConfig
    */
    constructor(scope: Construct, id: string, config: CustomerprofilesObjectTypeConfig);
    private _allowProfileCreation?;
    get allowProfileCreation(): boolean | cdktf.IResolvable;
    set allowProfileCreation(value: boolean | cdktf.IResolvable);
    resetAllowProfileCreation(): void;
    get allowProfileCreationInput(): boolean | cdktf.IResolvable | undefined;
    get createdAt(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _domainName;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    private _encryptionKey?;
    get encryptionKey(): string;
    set encryptionKey(value: string);
    resetEncryptionKey(): void;
    get encryptionKeyInput(): string | undefined;
    private _expirationDays?;
    get expirationDays(): number;
    set expirationDays(value: number);
    resetExpirationDays(): void;
    get expirationDaysInput(): number | undefined;
    private _fields?;
    get fields(): CustomerprofilesObjectTypeFields[];
    set fields(value: CustomerprofilesObjectTypeFields[]);
    resetFields(): void;
    get fieldsInput(): CustomerprofilesObjectTypeFields[] | undefined;
    get id(): string;
    private _keys?;
    get keys(): CustomerprofilesObjectTypeKeys[];
    set keys(value: CustomerprofilesObjectTypeKeys[]);
    resetKeys(): void;
    get keysInput(): CustomerprofilesObjectTypeKeys[] | undefined;
    get lastUpdatedAt(): string;
    private _objectTypeName?;
    get objectTypeName(): string;
    set objectTypeName(value: string);
    resetObjectTypeName(): void;
    get objectTypeNameInput(): string | undefined;
    private _tags?;
    get tags(): CustomerprofilesObjectTypeTags[];
    set tags(value: CustomerprofilesObjectTypeTags[]);
    resetTags(): void;
    get tagsInput(): CustomerprofilesObjectTypeTags[] | undefined;
    private _templateId?;
    get templateId(): string;
    set templateId(value: string);
    resetTemplateId(): void;
    get templateIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
