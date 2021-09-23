// https://www.terraform.io/docs/providers/awscc/r/kendra_index.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KendraIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#capacity_units KendraIndex#capacity_units}
  */
  readonly capacityUnits?: KendraIndexCapacityUnits;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#description KendraIndex#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#document_metadata_configurations KendraIndex#document_metadata_configurations}
  */
  readonly documentMetadataConfigurations?: KendraIndexDocumentMetadataConfigurations[];
  /**
  * Edition of index
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#edition KendraIndex#edition}
  */
  readonly edition: string;
  /**
  * Name of index
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#name KendraIndex#name}
  */
  readonly name: string;
  /**
  * Role Arn
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#role_arn KendraIndex#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#server_side_encryption_configuration KendraIndex#server_side_encryption_configuration}
  */
  readonly serverSideEncryptionConfiguration?: KendraIndexServerSideEncryptionConfiguration;
  /**
  * List of tags
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#tags KendraIndex#tags}
  */
  readonly tags?: KendraIndexTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#user_context_policy KendraIndex#user_context_policy}
  */
  readonly userContextPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#user_token_configurations KendraIndex#user_token_configurations}
  */
  readonly userTokenConfigurations?: KendraIndexUserTokenConfigurations[];
}
export interface KendraIndexCapacityUnits {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#query_capacity_units KendraIndex#query_capacity_units}
  */
  readonly queryCapacityUnits: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#storage_capacity_units KendraIndex#storage_capacity_units}
  */
  readonly storageCapacityUnits: number;
}

export function kendraIndexCapacityUnitsToTerraform(struct?: KendraIndexCapacityUnits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query_capacity_units: cdktf.numberToTerraform(struct!.queryCapacityUnits),
    storage_capacity_units: cdktf.numberToTerraform(struct!.storageCapacityUnits),
  }
}

export interface KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#key KendraIndex#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#value KendraIndex#value}
  */
  readonly value?: number;
}

export function kendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsToTerraform(struct?: KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface KendraIndexDocumentMetadataConfigurationsRelevance {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#duration KendraIndex#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#freshness KendraIndex#freshness}
  */
  readonly freshness?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#importance KendraIndex#importance}
  */
  readonly importance?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#rank_order KendraIndex#rank_order}
  */
  readonly rankOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#value_importance_items KendraIndex#value_importance_items}
  */
  readonly valueImportanceItems?: KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems[];
}

export function kendraIndexDocumentMetadataConfigurationsRelevanceToTerraform(struct?: KendraIndexDocumentMetadataConfigurationsRelevance): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    freshness: cdktf.booleanToTerraform(struct!.freshness),
    importance: cdktf.numberToTerraform(struct!.importance),
    rank_order: cdktf.stringToTerraform(struct!.rankOrder),
    value_importance_items: cdktf.listMapper(kendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsToTerraform)(struct!.valueImportanceItems),
  }
}

export interface KendraIndexDocumentMetadataConfigurationsSearch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#displayable KendraIndex#displayable}
  */
  readonly displayable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#facetable KendraIndex#facetable}
  */
  readonly facetable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#searchable KendraIndex#searchable}
  */
  readonly searchable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#sortable KendraIndex#sortable}
  */
  readonly sortable?: boolean | cdktf.IResolvable;
}

export function kendraIndexDocumentMetadataConfigurationsSearchToTerraform(struct?: KendraIndexDocumentMetadataConfigurationsSearch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    displayable: cdktf.booleanToTerraform(struct!.displayable),
    facetable: cdktf.booleanToTerraform(struct!.facetable),
    searchable: cdktf.booleanToTerraform(struct!.searchable),
    sortable: cdktf.booleanToTerraform(struct!.sortable),
  }
}

export interface KendraIndexDocumentMetadataConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#name KendraIndex#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#relevance KendraIndex#relevance}
  */
  readonly relevance?: KendraIndexDocumentMetadataConfigurationsRelevance;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#search KendraIndex#search}
  */
  readonly search?: KendraIndexDocumentMetadataConfigurationsSearch;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#type KendraIndex#type}
  */
  readonly type: string;
}

export function kendraIndexDocumentMetadataConfigurationsToTerraform(struct?: KendraIndexDocumentMetadataConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    relevance: kendraIndexDocumentMetadataConfigurationsRelevanceToTerraform(struct!.relevance),
    search: kendraIndexDocumentMetadataConfigurationsSearchToTerraform(struct!.search),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface KendraIndexServerSideEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#kms_key_id KendraIndex#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function kendraIndexServerSideEncryptionConfigurationToTerraform(struct?: KendraIndexServerSideEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}

export interface KendraIndexTags {
  /**
  * A string used to identify this tag
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#key KendraIndex#key}
  */
  readonly key: string;
  /**
  * A string containing the value for the tag
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#value KendraIndex#value}
  */
  readonly value: string;
}

export function kendraIndexTagsToTerraform(struct?: KendraIndexTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#group_attribute_field KendraIndex#group_attribute_field}
  */
  readonly groupAttributeField: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#user_name_attribute_field KendraIndex#user_name_attribute_field}
  */
  readonly userNameAttributeField: string;
}

export function kendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToTerraform(struct?: KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group_attribute_field: cdktf.stringToTerraform(struct!.groupAttributeField),
    user_name_attribute_field: cdktf.stringToTerraform(struct!.userNameAttributeField),
  }
}

export interface KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#claim_regex KendraIndex#claim_regex}
  */
  readonly claimRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#group_attribute_field KendraIndex#group_attribute_field}
  */
  readonly groupAttributeField?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#issuer KendraIndex#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#key_location KendraIndex#key_location}
  */
  readonly keyLocation: string;
  /**
  * Role Arn
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#secret_manager_arn KendraIndex#secret_manager_arn}
  */
  readonly secretManagerArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#url KendraIndex#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#user_name_attribute_field KendraIndex#user_name_attribute_field}
  */
  readonly userNameAttributeField?: string;
}

export function kendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToTerraform(struct?: KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration): any {
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

export interface KendraIndexUserTokenConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#json_token_type_configuration KendraIndex#json_token_type_configuration}
  */
  readonly jsonTokenTypeConfiguration?: KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#jwt_token_type_configuration KendraIndex#jwt_token_type_configuration}
  */
  readonly jwtTokenTypeConfiguration?: KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration;
}

export function kendraIndexUserTokenConfigurationsToTerraform(struct?: KendraIndexUserTokenConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    json_token_type_configuration: kendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToTerraform(struct!.jsonTokenTypeConfiguration),
    jwt_token_type_configuration: kendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToTerraform(struct!.jwtTokenTypeConfiguration),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html awscc_kendra_index}
*/
export class KendraIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_kendra_index";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html awscc_kendra_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KendraIndexConfig
  */
  public constructor(scope: Construct, id: string, config: KendraIndexConfig) {
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
    this._capacityUnits = config.capacityUnits;
    this._description = config.description;
    this._documentMetadataConfigurations = config.documentMetadataConfigurations;
    this._edition = config.edition;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._serverSideEncryptionConfiguration = config.serverSideEncryptionConfiguration;
    this._tags = config.tags;
    this._userContextPolicy = config.userContextPolicy;
    this._userTokenConfigurations = config.userTokenConfigurations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity_units - computed: false, optional: true, required: false
  private _capacityUnits?: KendraIndexCapacityUnits;
  public get capacityUnits() {
    return this.interpolationForAttribute('capacity_units') as any;
  }
  public set capacityUnits(value: KendraIndexCapacityUnits ) {
    this._capacityUnits = value;
  }
  public resetCapacityUnits() {
    this._capacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityUnitsInput() {
    return this._capacityUnits
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

  // document_metadata_configurations - computed: false, optional: true, required: false
  private _documentMetadataConfigurations?: KendraIndexDocumentMetadataConfigurations[];
  public get documentMetadataConfigurations() {
    return this.interpolationForAttribute('document_metadata_configurations') as any;
  }
  public set documentMetadataConfigurations(value: KendraIndexDocumentMetadataConfigurations[] ) {
    this._documentMetadataConfigurations = value;
  }
  public resetDocumentMetadataConfigurations() {
    this._documentMetadataConfigurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentMetadataConfigurationsInput() {
    return this._documentMetadataConfigurations
  }

  // edition - computed: false, optional: false, required: true
  private _edition: string;
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // server_side_encryption_configuration - computed: true, optional: true, required: false
  private _serverSideEncryptionConfiguration?: KendraIndexServerSideEncryptionConfiguration;
  public get serverSideEncryptionConfiguration() {
    return this.interpolationForAttribute('server_side_encryption_configuration') as any;
  }
  public set serverSideEncryptionConfiguration(value: KendraIndexServerSideEncryptionConfiguration) {
    this._serverSideEncryptionConfiguration = value;
  }
  public resetServerSideEncryptionConfiguration() {
    this._serverSideEncryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionConfigurationInput() {
    return this._serverSideEncryptionConfiguration
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: KendraIndexTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: KendraIndexTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // user_context_policy - computed: false, optional: true, required: false
  private _userContextPolicy?: string;
  public get userContextPolicy() {
    return this.getStringAttribute('user_context_policy');
  }
  public set userContextPolicy(value: string ) {
    this._userContextPolicy = value;
  }
  public resetUserContextPolicy() {
    this._userContextPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userContextPolicyInput() {
    return this._userContextPolicy
  }

  // user_token_configurations - computed: false, optional: true, required: false
  private _userTokenConfigurations?: KendraIndexUserTokenConfigurations[];
  public get userTokenConfigurations() {
    return this.interpolationForAttribute('user_token_configurations') as any;
  }
  public set userTokenConfigurations(value: KendraIndexUserTokenConfigurations[] ) {
    this._userTokenConfigurations = value;
  }
  public resetUserTokenConfigurations() {
    this._userTokenConfigurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenConfigurationsInput() {
    return this._userTokenConfigurations
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_units: kendraIndexCapacityUnitsToTerraform(this._capacityUnits),
      description: cdktf.stringToTerraform(this._description),
      document_metadata_configurations: cdktf.listMapper(kendraIndexDocumentMetadataConfigurationsToTerraform)(this._documentMetadataConfigurations),
      edition: cdktf.stringToTerraform(this._edition),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      server_side_encryption_configuration: kendraIndexServerSideEncryptionConfigurationToTerraform(this._serverSideEncryptionConfiguration),
      tags: cdktf.listMapper(kendraIndexTagsToTerraform)(this._tags),
      user_context_policy: cdktf.stringToTerraform(this._userContextPolicy),
      user_token_configurations: cdktf.listMapper(kendraIndexUserTokenConfigurationsToTerraform)(this._userTokenConfigurations),
    };
  }
}
