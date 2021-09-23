import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function kendraIndexCapacityUnitsToTerraform(struct?: KendraIndexCapacityUnits): any;
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
export declare function kendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsToTerraform(struct?: KendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems): any;
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
export declare function kendraIndexDocumentMetadataConfigurationsRelevanceToTerraform(struct?: KendraIndexDocumentMetadataConfigurationsRelevance): any;
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
export declare function kendraIndexDocumentMetadataConfigurationsSearchToTerraform(struct?: KendraIndexDocumentMetadataConfigurationsSearch): any;
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
export declare function kendraIndexDocumentMetadataConfigurationsToTerraform(struct?: KendraIndexDocumentMetadataConfigurations): any;
export interface KendraIndexServerSideEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html#kms_key_id KendraIndex#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export declare function kendraIndexServerSideEncryptionConfigurationToTerraform(struct?: KendraIndexServerSideEncryptionConfiguration): any;
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
export declare function kendraIndexTagsToTerraform(struct?: KendraIndexTags): any;
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
export declare function kendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToTerraform(struct?: KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration): any;
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
export declare function kendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToTerraform(struct?: KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration): any;
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
export declare function kendraIndexUserTokenConfigurationsToTerraform(struct?: KendraIndexUserTokenConfigurations): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html awscc_kendra_index}
*/
export declare class KendraIndex extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kendra_index.html awscc_kendra_index} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KendraIndexConfig
    */
    constructor(scope: Construct, id: string, config: KendraIndexConfig);
    get arn(): string;
    private _capacityUnits?;
    get capacityUnits(): KendraIndexCapacityUnits;
    set capacityUnits(value: KendraIndexCapacityUnits);
    resetCapacityUnits(): void;
    get capacityUnitsInput(): KendraIndexCapacityUnits | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _documentMetadataConfigurations?;
    get documentMetadataConfigurations(): KendraIndexDocumentMetadataConfigurations[];
    set documentMetadataConfigurations(value: KendraIndexDocumentMetadataConfigurations[]);
    resetDocumentMetadataConfigurations(): void;
    get documentMetadataConfigurationsInput(): KendraIndexDocumentMetadataConfigurations[] | undefined;
    private _edition;
    get edition(): string;
    set edition(value: string);
    get editionInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _serverSideEncryptionConfiguration?;
    get serverSideEncryptionConfiguration(): KendraIndexServerSideEncryptionConfiguration;
    set serverSideEncryptionConfiguration(value: KendraIndexServerSideEncryptionConfiguration);
    resetServerSideEncryptionConfiguration(): void;
    get serverSideEncryptionConfigurationInput(): KendraIndexServerSideEncryptionConfiguration | undefined;
    private _tags?;
    get tags(): KendraIndexTags[];
    set tags(value: KendraIndexTags[]);
    resetTags(): void;
    get tagsInput(): KendraIndexTags[] | undefined;
    private _userContextPolicy?;
    get userContextPolicy(): string;
    set userContextPolicy(value: string);
    resetUserContextPolicy(): void;
    get userContextPolicyInput(): string | undefined;
    private _userTokenConfigurations?;
    get userTokenConfigurations(): KendraIndexUserTokenConfigurations[];
    set userTokenConfigurations(value: KendraIndexUserTokenConfigurations[]);
    resetUserTokenConfigurations(): void;
    get userTokenConfigurationsInput(): KendraIndexUserTokenConfigurations[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
