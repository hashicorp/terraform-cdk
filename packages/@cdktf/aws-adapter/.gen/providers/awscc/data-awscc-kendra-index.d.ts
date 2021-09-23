import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccKendraIndexConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/kendra_index.html#id DataAwsccKendraIndex#id}
    */
    readonly id: string;
}
export declare class DataAwsccKendraIndexCapacityUnits extends cdktf.ComplexComputedList {
    get queryCapacityUnits(): number;
    get storageCapacityUnits(): number;
}
export declare function dataAwsccKendraIndexCapacityUnitsToTerraform(struct?: DataAwsccKendraIndexCapacityUnits): any;
export declare class DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): number;
}
export declare function dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsToTerraform(struct?: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems): any;
export declare class DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance extends cdktf.ComplexComputedList {
    get duration(): string;
    get freshness(): any;
    get importance(): number;
    get rankOrder(): string;
    get valueImportanceItems(): any;
}
export declare function dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceToTerraform(struct?: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance): any;
export declare class DataAwsccKendraIndexDocumentMetadataConfigurationsSearch extends cdktf.ComplexComputedList {
    get displayable(): any;
    get facetable(): any;
    get searchable(): any;
    get sortable(): any;
}
export declare function dataAwsccKendraIndexDocumentMetadataConfigurationsSearchToTerraform(struct?: DataAwsccKendraIndexDocumentMetadataConfigurationsSearch): any;
export declare class DataAwsccKendraIndexDocumentMetadataConfigurations extends cdktf.ComplexComputedList {
    get name(): string;
    get relevance(): any;
    get search(): any;
    get type(): string;
}
export declare function dataAwsccKendraIndexDocumentMetadataConfigurationsToTerraform(struct?: DataAwsccKendraIndexDocumentMetadataConfigurations): any;
export declare class DataAwsccKendraIndexServerSideEncryptionConfiguration extends cdktf.ComplexComputedList {
    get kmsKeyId(): string;
}
export declare function dataAwsccKendraIndexServerSideEncryptionConfigurationToTerraform(struct?: DataAwsccKendraIndexServerSideEncryptionConfiguration): any;
export declare class DataAwsccKendraIndexTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccKendraIndexTagsToTerraform(struct?: DataAwsccKendraIndexTags): any;
export declare class DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration extends cdktf.ComplexComputedList {
    get groupAttributeField(): string;
    get userNameAttributeField(): string;
}
export declare function dataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToTerraform(struct?: DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration): any;
export declare class DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration extends cdktf.ComplexComputedList {
    get claimRegex(): string;
    get groupAttributeField(): string;
    get issuer(): string;
    get keyLocation(): string;
    get secretManagerArn(): string;
    get url(): string;
    get userNameAttributeField(): string;
}
export declare function dataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToTerraform(struct?: DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration): any;
export declare class DataAwsccKendraIndexUserTokenConfigurations extends cdktf.ComplexComputedList {
    get jsonTokenTypeConfiguration(): any;
    get jwtTokenTypeConfiguration(): any;
}
export declare function dataAwsccKendraIndexUserTokenConfigurationsToTerraform(struct?: DataAwsccKendraIndexUserTokenConfigurations): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/kendra_index.html awscc_kendra_index}
*/
export declare class DataAwsccKendraIndex extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/kendra_index.html awscc_kendra_index} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccKendraIndexConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccKendraIndexConfig);
    get arn(): string;
    get capacityUnits(): any;
    get description(): string;
    get documentMetadataConfigurations(): any;
    get edition(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get roleArn(): string;
    get serverSideEncryptionConfiguration(): any;
    get tags(): any;
    get userContextPolicy(): string;
    get userTokenConfigurations(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
