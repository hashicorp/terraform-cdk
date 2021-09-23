// https://www.terraform.io/docs/providers/awscc/d/kendra_index.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccKendraIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/kendra_index.html#id DataAwsccKendraIndex#id}
  */
  readonly id: string;
}
export class DataAwsccKendraIndexCapacityUnits extends cdktf.ComplexComputedList {

  // query_capacity_units - computed: true, optional: false, required: false
  public get queryCapacityUnits() {
    return this.getNumberAttribute('query_capacity_units');
  }

  // storage_capacity_units - computed: true, optional: false, required: false
  public get storageCapacityUnits() {
    return this.getNumberAttribute('storage_capacity_units');
  }
}

export function dataAwsccKendraIndexCapacityUnitsToTerraform(struct?: DataAwsccKendraIndexCapacityUnits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query_capacity_units: cdktf.numberToTerraform(struct!.queryCapacityUnits),
    storage_capacity_units: cdktf.numberToTerraform(struct!.storageCapacityUnits),
  }
}

export class DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export function dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsToTerraform(struct?: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance extends cdktf.ComplexComputedList {

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // freshness - computed: true, optional: false, required: false
  public get freshness() {
    return this.getBooleanAttribute('freshness');
  }

  // importance - computed: true, optional: false, required: false
  public get importance() {
    return this.getNumberAttribute('importance');
  }

  // rank_order - computed: true, optional: false, required: false
  public get rankOrder() {
    return this.getStringAttribute('rank_order');
  }

  // value_importance_items - computed: true, optional: false, required: false
  public get valueImportanceItems() {
    return this.interpolationForAttribute('value_importance_items') as any;
  }
}

export function dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceToTerraform(struct?: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    freshness: cdktf.booleanToTerraform(struct!.freshness),
    importance: cdktf.numberToTerraform(struct!.importance),
    rank_order: cdktf.stringToTerraform(struct!.rankOrder),
    value_importance_items: cdktf.listMapper(dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsToTerraform)(struct!.valueImportanceItems),
  }
}

export class DataAwsccKendraIndexDocumentMetadataConfigurationsSearch extends cdktf.ComplexComputedList {

  // displayable - computed: true, optional: false, required: false
  public get displayable() {
    return this.getBooleanAttribute('displayable');
  }

  // facetable - computed: true, optional: false, required: false
  public get facetable() {
    return this.getBooleanAttribute('facetable');
  }

  // searchable - computed: true, optional: false, required: false
  public get searchable() {
    return this.getBooleanAttribute('searchable');
  }

  // sortable - computed: true, optional: false, required: false
  public get sortable() {
    return this.getBooleanAttribute('sortable');
  }
}

export function dataAwsccKendraIndexDocumentMetadataConfigurationsSearchToTerraform(struct?: DataAwsccKendraIndexDocumentMetadataConfigurationsSearch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    displayable: cdktf.booleanToTerraform(struct!.displayable),
    facetable: cdktf.booleanToTerraform(struct!.facetable),
    searchable: cdktf.booleanToTerraform(struct!.searchable),
    sortable: cdktf.booleanToTerraform(struct!.sortable),
  }
}

export class DataAwsccKendraIndexDocumentMetadataConfigurations extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // relevance - computed: true, optional: false, required: false
  public get relevance() {
    return this.interpolationForAttribute('relevance') as any;
  }

  // search - computed: true, optional: false, required: false
  public get search() {
    return this.interpolationForAttribute('search') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccKendraIndexDocumentMetadataConfigurationsToTerraform(struct?: DataAwsccKendraIndexDocumentMetadataConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    relevance: dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceToTerraform(struct!.relevance),
    search: dataAwsccKendraIndexDocumentMetadataConfigurationsSearchToTerraform(struct!.search),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccKendraIndexServerSideEncryptionConfiguration extends cdktf.ComplexComputedList {

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}

export function dataAwsccKendraIndexServerSideEncryptionConfigurationToTerraform(struct?: DataAwsccKendraIndexServerSideEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}

export class DataAwsccKendraIndexTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccKendraIndexTagsToTerraform(struct?: DataAwsccKendraIndexTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration extends cdktf.ComplexComputedList {

  // group_attribute_field - computed: true, optional: false, required: false
  public get groupAttributeField() {
    return this.getStringAttribute('group_attribute_field');
  }

  // user_name_attribute_field - computed: true, optional: false, required: false
  public get userNameAttributeField() {
    return this.getStringAttribute('user_name_attribute_field');
  }
}

export function dataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToTerraform(struct?: DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group_attribute_field: cdktf.stringToTerraform(struct!.groupAttributeField),
    user_name_attribute_field: cdktf.stringToTerraform(struct!.userNameAttributeField),
  }
}

export class DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration extends cdktf.ComplexComputedList {

  // claim_regex - computed: true, optional: false, required: false
  public get claimRegex() {
    return this.getStringAttribute('claim_regex');
  }

  // group_attribute_field - computed: true, optional: false, required: false
  public get groupAttributeField() {
    return this.getStringAttribute('group_attribute_field');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // key_location - computed: true, optional: false, required: false
  public get keyLocation() {
    return this.getStringAttribute('key_location');
  }

  // secret_manager_arn - computed: true, optional: false, required: false
  public get secretManagerArn() {
    return this.getStringAttribute('secret_manager_arn');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_name_attribute_field - computed: true, optional: false, required: false
  public get userNameAttributeField() {
    return this.getStringAttribute('user_name_attribute_field');
  }
}

export function dataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToTerraform(struct?: DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    claim_regex: cdktf.stringToTerraform(struct!.claimRegex),
    group_attribute_field: cdktf.stringToTerraform(struct!.groupAttributeField),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    key_location: cdktf.stringToTerraform(struct!.keyLocation),
    secret_manager_arn: cdktf.stringToTerraform(struct!.secretManagerArn),
    url: cdktf.stringToTerraform(struct!.url),
    user_name_attribute_field: cdktf.stringToTerraform(struct!.userNameAttributeField),
  }
}

export class DataAwsccKendraIndexUserTokenConfigurations extends cdktf.ComplexComputedList {

  // json_token_type_configuration - computed: true, optional: false, required: false
  public get jsonTokenTypeConfiguration() {
    return this.interpolationForAttribute('json_token_type_configuration') as any;
  }

  // jwt_token_type_configuration - computed: true, optional: false, required: false
  public get jwtTokenTypeConfiguration() {
    return this.interpolationForAttribute('jwt_token_type_configuration') as any;
  }
}

export function dataAwsccKendraIndexUserTokenConfigurationsToTerraform(struct?: DataAwsccKendraIndexUserTokenConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    json_token_type_configuration: dataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToTerraform(struct!.jsonTokenTypeConfiguration),
    jwt_token_type_configuration: dataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToTerraform(struct!.jwtTokenTypeConfiguration),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/kendra_index.html awscc_kendra_index}
*/
export class DataAwsccKendraIndex extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_kendra_index";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/kendra_index.html awscc_kendra_index} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccKendraIndexConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccKendraIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kendra_index',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity_units - computed: true, optional: false, required: false
  public get capacityUnits() {
    return this.interpolationForAttribute('capacity_units') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // document_metadata_configurations - computed: true, optional: false, required: false
  public get documentMetadataConfigurations() {
    return this.interpolationForAttribute('document_metadata_configurations') as any;
  }

  // edition - computed: true, optional: false, required: false
  public get edition() {
    return this.getStringAttribute('edition');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // server_side_encryption_configuration - computed: true, optional: false, required: false
  public get serverSideEncryptionConfiguration() {
    return this.interpolationForAttribute('server_side_encryption_configuration') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // user_context_policy - computed: true, optional: false, required: false
  public get userContextPolicy() {
    return this.getStringAttribute('user_context_policy');
  }

  // user_token_configurations - computed: true, optional: false, required: false
  public get userTokenConfigurations() {
    return this.interpolationForAttribute('user_token_configurations') as any;
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
