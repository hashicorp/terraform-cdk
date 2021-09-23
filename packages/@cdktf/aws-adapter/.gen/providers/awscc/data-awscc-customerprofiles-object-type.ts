// https://www.terraform.io/docs/providers/awscc/d/customerprofiles_object_type.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCustomerprofilesObjectTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_object_type.html#id DataAwsccCustomerprofilesObjectType#id}
  */
  readonly id: string;
}
export class DataAwsccCustomerprofilesObjectTypeFieldsObjectTypeField extends cdktf.ComplexComputedList {

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }
}

export function dataAwsccCustomerprofilesObjectTypeFieldsObjectTypeFieldToTerraform(struct?: DataAwsccCustomerprofilesObjectTypeFieldsObjectTypeField): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}

export class DataAwsccCustomerprofilesObjectTypeFields extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type_field - computed: true, optional: false, required: false
  public get objectTypeField() {
    return this.interpolationForAttribute('object_type_field') as any;
  }
}

export function dataAwsccCustomerprofilesObjectTypeFieldsToTerraform(struct?: DataAwsccCustomerprofilesObjectTypeFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    object_type_field: dataAwsccCustomerprofilesObjectTypeFieldsObjectTypeFieldToTerraform(struct!.objectTypeField),
  }
}

export class DataAwsccCustomerprofilesObjectTypeKeysObjectTypeKeyList extends cdktf.ComplexComputedList {

  // field_names - computed: true, optional: false, required: false
  public get fieldNames() {
    return this.getListAttribute('field_names');
  }

  // standard_identifiers - computed: true, optional: false, required: false
  public get standardIdentifiers() {
    return this.getListAttribute('standard_identifiers');
  }
}

export function dataAwsccCustomerprofilesObjectTypeKeysObjectTypeKeyListToTerraform(struct?: DataAwsccCustomerprofilesObjectTypeKeysObjectTypeKeyList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fieldNames),
    standard_identifiers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.standardIdentifiers),
  }
}

export class DataAwsccCustomerprofilesObjectTypeKeys extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type_key_list - computed: true, optional: false, required: false
  public get objectTypeKeyList() {
    return this.interpolationForAttribute('object_type_key_list') as any;
  }
}

export function dataAwsccCustomerprofilesObjectTypeKeysToTerraform(struct?: DataAwsccCustomerprofilesObjectTypeKeys): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    object_type_key_list: cdktf.listMapper(dataAwsccCustomerprofilesObjectTypeKeysObjectTypeKeyListToTerraform)(struct!.objectTypeKeyList),
  }
}

export class DataAwsccCustomerprofilesObjectTypeTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccCustomerprofilesObjectTypeTagsToTerraform(struct?: DataAwsccCustomerprofilesObjectTypeTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_object_type.html awscc_customerprofiles_object_type}
*/
export class DataAwsccCustomerprofilesObjectType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_customerprofiles_object_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_object_type.html awscc_customerprofiles_object_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCustomerprofilesObjectTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCustomerprofilesObjectTypeConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_profile_creation - computed: true, optional: false, required: false
  public get allowProfileCreation() {
    return this.getBooleanAttribute('allow_profile_creation');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // encryption_key - computed: true, optional: false, required: false
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }

  // expiration_days - computed: true, optional: false, required: false
  public get expirationDays() {
    return this.getNumberAttribute('expiration_days');
  }

  // fields - computed: true, optional: false, required: false
  public get fields() {
    return this.interpolationForAttribute('fields') as any;
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // keys - computed: true, optional: false, required: false
  public get keys() {
    return this.interpolationForAttribute('keys') as any;
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // object_type_name - computed: true, optional: false, required: false
  public get objectTypeName() {
    return this.getStringAttribute('object_type_name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
