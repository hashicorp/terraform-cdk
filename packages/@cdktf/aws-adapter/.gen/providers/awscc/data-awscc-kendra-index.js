"use strict";
// https://www.terraform.io/docs/providers/awscc/d/kendra_index.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccKendraIndex = exports.dataAwsccKendraIndexUserTokenConfigurationsToTerraform = exports.DataAwsccKendraIndexUserTokenConfigurations = exports.dataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToTerraform = exports.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration = exports.dataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToTerraform = exports.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration = exports.dataAwsccKendraIndexTagsToTerraform = exports.DataAwsccKendraIndexTags = exports.dataAwsccKendraIndexServerSideEncryptionConfigurationToTerraform = exports.DataAwsccKendraIndexServerSideEncryptionConfiguration = exports.dataAwsccKendraIndexDocumentMetadataConfigurationsToTerraform = exports.DataAwsccKendraIndexDocumentMetadataConfigurations = exports.dataAwsccKendraIndexDocumentMetadataConfigurationsSearchToTerraform = exports.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch = exports.dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceToTerraform = exports.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance = exports.dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsToTerraform = exports.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems = exports.dataAwsccKendraIndexCapacityUnitsToTerraform = exports.DataAwsccKendraIndexCapacityUnits = void 0;
const cdktf = require("cdktf");
class DataAwsccKendraIndexCapacityUnits extends cdktf.ComplexComputedList {
    // query_capacity_units - computed: true, optional: false, required: false
    get queryCapacityUnits() {
        return this.getNumberAttribute('query_capacity_units');
    }
    // storage_capacity_units - computed: true, optional: false, required: false
    get storageCapacityUnits() {
        return this.getNumberAttribute('storage_capacity_units');
    }
}
exports.DataAwsccKendraIndexCapacityUnits = DataAwsccKendraIndexCapacityUnits;
function dataAwsccKendraIndexCapacityUnitsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        query_capacity_units: cdktf.numberToTerraform(struct.queryCapacityUnits),
        storage_capacity_units: cdktf.numberToTerraform(struct.storageCapacityUnits),
    };
}
exports.dataAwsccKendraIndexCapacityUnitsToTerraform = dataAwsccKendraIndexCapacityUnitsToTerraform;
class DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getNumberAttribute('value');
    }
}
exports.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems = DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems;
function dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsToTerraform = dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsToTerraform;
class DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance extends cdktf.ComplexComputedList {
    // duration - computed: true, optional: false, required: false
    get duration() {
        return this.getStringAttribute('duration');
    }
    // freshness - computed: true, optional: false, required: false
    get freshness() {
        return this.getBooleanAttribute('freshness');
    }
    // importance - computed: true, optional: false, required: false
    get importance() {
        return this.getNumberAttribute('importance');
    }
    // rank_order - computed: true, optional: false, required: false
    get rankOrder() {
        return this.getStringAttribute('rank_order');
    }
    // value_importance_items - computed: true, optional: false, required: false
    get valueImportanceItems() {
        return this.interpolationForAttribute('value_importance_items');
    }
}
exports.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance = DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance;
function dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        duration: cdktf.stringToTerraform(struct.duration),
        freshness: cdktf.booleanToTerraform(struct.freshness),
        importance: cdktf.numberToTerraform(struct.importance),
        rank_order: cdktf.stringToTerraform(struct.rankOrder),
        value_importance_items: cdktf.listMapper(dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsToTerraform)(struct.valueImportanceItems),
    };
}
exports.dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceToTerraform = dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceToTerraform;
class DataAwsccKendraIndexDocumentMetadataConfigurationsSearch extends cdktf.ComplexComputedList {
    // displayable - computed: true, optional: false, required: false
    get displayable() {
        return this.getBooleanAttribute('displayable');
    }
    // facetable - computed: true, optional: false, required: false
    get facetable() {
        return this.getBooleanAttribute('facetable');
    }
    // searchable - computed: true, optional: false, required: false
    get searchable() {
        return this.getBooleanAttribute('searchable');
    }
    // sortable - computed: true, optional: false, required: false
    get sortable() {
        return this.getBooleanAttribute('sortable');
    }
}
exports.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch = DataAwsccKendraIndexDocumentMetadataConfigurationsSearch;
function dataAwsccKendraIndexDocumentMetadataConfigurationsSearchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        displayable: cdktf.booleanToTerraform(struct.displayable),
        facetable: cdktf.booleanToTerraform(struct.facetable),
        searchable: cdktf.booleanToTerraform(struct.searchable),
        sortable: cdktf.booleanToTerraform(struct.sortable),
    };
}
exports.dataAwsccKendraIndexDocumentMetadataConfigurationsSearchToTerraform = dataAwsccKendraIndexDocumentMetadataConfigurationsSearchToTerraform;
class DataAwsccKendraIndexDocumentMetadataConfigurations extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // relevance - computed: true, optional: false, required: false
    get relevance() {
        return this.interpolationForAttribute('relevance');
    }
    // search - computed: true, optional: false, required: false
    get search() {
        return this.interpolationForAttribute('search');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccKendraIndexDocumentMetadataConfigurations = DataAwsccKendraIndexDocumentMetadataConfigurations;
function dataAwsccKendraIndexDocumentMetadataConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        relevance: dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceToTerraform(struct.relevance),
        search: dataAwsccKendraIndexDocumentMetadataConfigurationsSearchToTerraform(struct.search),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccKendraIndexDocumentMetadataConfigurationsToTerraform = dataAwsccKendraIndexDocumentMetadataConfigurationsToTerraform;
class DataAwsccKendraIndexServerSideEncryptionConfiguration extends cdktf.ComplexComputedList {
    // kms_key_id - computed: true, optional: false, required: false
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
}
exports.DataAwsccKendraIndexServerSideEncryptionConfiguration = DataAwsccKendraIndexServerSideEncryptionConfiguration;
function dataAwsccKendraIndexServerSideEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
    };
}
exports.dataAwsccKendraIndexServerSideEncryptionConfigurationToTerraform = dataAwsccKendraIndexServerSideEncryptionConfigurationToTerraform;
class DataAwsccKendraIndexTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccKendraIndexTags = DataAwsccKendraIndexTags;
function dataAwsccKendraIndexTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccKendraIndexTagsToTerraform = dataAwsccKendraIndexTagsToTerraform;
class DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration extends cdktf.ComplexComputedList {
    // group_attribute_field - computed: true, optional: false, required: false
    get groupAttributeField() {
        return this.getStringAttribute('group_attribute_field');
    }
    // user_name_attribute_field - computed: true, optional: false, required: false
    get userNameAttributeField() {
        return this.getStringAttribute('user_name_attribute_field');
    }
}
exports.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration = DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration;
function dataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        group_attribute_field: cdktf.stringToTerraform(struct.groupAttributeField),
        user_name_attribute_field: cdktf.stringToTerraform(struct.userNameAttributeField),
    };
}
exports.dataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToTerraform = dataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToTerraform;
class DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration extends cdktf.ComplexComputedList {
    // claim_regex - computed: true, optional: false, required: false
    get claimRegex() {
        return this.getStringAttribute('claim_regex');
    }
    // group_attribute_field - computed: true, optional: false, required: false
    get groupAttributeField() {
        return this.getStringAttribute('group_attribute_field');
    }
    // issuer - computed: true, optional: false, required: false
    get issuer() {
        return this.getStringAttribute('issuer');
    }
    // key_location - computed: true, optional: false, required: false
    get keyLocation() {
        return this.getStringAttribute('key_location');
    }
    // secret_manager_arn - computed: true, optional: false, required: false
    get secretManagerArn() {
        return this.getStringAttribute('secret_manager_arn');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
    // user_name_attribute_field - computed: true, optional: false, required: false
    get userNameAttributeField() {
        return this.getStringAttribute('user_name_attribute_field');
    }
}
exports.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration = DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration;
function dataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        claim_regex: cdktf.stringToTerraform(struct.claimRegex),
        group_attribute_field: cdktf.stringToTerraform(struct.groupAttributeField),
        issuer: cdktf.stringToTerraform(struct.issuer),
        key_location: cdktf.stringToTerraform(struct.keyLocation),
        secret_manager_arn: cdktf.stringToTerraform(struct.secretManagerArn),
        url: cdktf.stringToTerraform(struct.url),
        user_name_attribute_field: cdktf.stringToTerraform(struct.userNameAttributeField),
    };
}
exports.dataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToTerraform = dataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToTerraform;
class DataAwsccKendraIndexUserTokenConfigurations extends cdktf.ComplexComputedList {
    // json_token_type_configuration - computed: true, optional: false, required: false
    get jsonTokenTypeConfiguration() {
        return this.interpolationForAttribute('json_token_type_configuration');
    }
    // jwt_token_type_configuration - computed: true, optional: false, required: false
    get jwtTokenTypeConfiguration() {
        return this.interpolationForAttribute('jwt_token_type_configuration');
    }
}
exports.DataAwsccKendraIndexUserTokenConfigurations = DataAwsccKendraIndexUserTokenConfigurations;
function dataAwsccKendraIndexUserTokenConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        json_token_type_configuration: dataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToTerraform(struct.jsonTokenTypeConfiguration),
        jwt_token_type_configuration: dataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToTerraform(struct.jwtTokenTypeConfiguration),
    };
}
exports.dataAwsccKendraIndexUserTokenConfigurationsToTerraform = dataAwsccKendraIndexUserTokenConfigurationsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/kendra_index.html awscc_kendra_index}
*/
class DataAwsccKendraIndex extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    get arn() {
        return this.getStringAttribute('arn');
    }
    // capacity_units - computed: true, optional: false, required: false
    get capacityUnits() {
        return this.interpolationForAttribute('capacity_units');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // document_metadata_configurations - computed: true, optional: false, required: false
    get documentMetadataConfigurations() {
        return this.interpolationForAttribute('document_metadata_configurations');
    }
    // edition - computed: true, optional: false, required: false
    get edition() {
        return this.getStringAttribute('edition');
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // server_side_encryption_configuration - computed: true, optional: false, required: false
    get serverSideEncryptionConfiguration() {
        return this.interpolationForAttribute('server_side_encryption_configuration');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // user_context_policy - computed: true, optional: false, required: false
    get userContextPolicy() {
        return this.getStringAttribute('user_context_policy');
    }
    // user_token_configurations - computed: true, optional: false, required: false
    get userTokenConfigurations() {
        return this.interpolationForAttribute('user_token_configurations');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    }
}
exports.DataAwsccKendraIndex = DataAwsccKendraIndex;
// =================
// STATIC PROPERTIES
// =================
DataAwsccKendraIndex.tfResourceType = "awscc_kendra_index";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1rZW5kcmEtaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLWF3c2NjLWtlbmRyYS1pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0VBQW9FO0FBQ3BFLDJDQUEyQzs7O0FBRzNDLCtCQUErQjtBQVkvQixNQUFhLGlDQUFrQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFOUUsMEVBQTBFO0lBQzFFLElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELDRFQUE0RTtJQUM1RSxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FDRjtBQVhELDhFQVdDO0FBRUQsU0FBZ0IsNENBQTRDLENBQUMsTUFBMEM7SUFDckcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxvQkFBb0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO1FBQ3pFLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7S0FDOUUsQ0FBQTtBQUNILENBQUM7QUFORCxvR0FNQztBQUVELE1BQWEsK0VBQWdGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU1SCx5REFBeUQ7SUFDekQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELDJEQUEyRDtJQUMzRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0Y7QUFY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LENBQUMsc0NBQXNDLENBQVEsQ0FBQztJQUN2RixDQUFDO0lBRUQsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7SUFFRCx5RUFBeUU7SUFDekUsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsK0VBQStFO0lBQy9FLElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLDJCQUEyQixDQUFRLENBQUM7SUFDNUUsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3RDLENBQUM7SUFDSixDQUFDOztBQWhISCxvREFpSEM7QUEvR0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxtQ0FBYyxHQUFXLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2Qva2VuZHJhX2luZGV4Lmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NLZW5kcmFJbmRleENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBVbmlxdWVseSBpZGVudGlmaWVzIHRoZSByZXNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2tlbmRyYV9pbmRleC5odG1sI2lkIERhdGFBd3NjY0tlbmRyYUluZGV4I2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYUluZGV4Q2FwYWNpdHlVbml0cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHF1ZXJ5X2NhcGFjaXR5X3VuaXRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcXVlcnlDYXBhY2l0eVVuaXRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncXVlcnlfY2FwYWNpdHlfdW5pdHMnKTtcbiAgfVxuXG4gIC8vIHN0b3JhZ2VfY2FwYWNpdHlfdW5pdHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdG9yYWdlQ2FwYWNpdHlVbml0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3N0b3JhZ2VfY2FwYWNpdHlfdW5pdHMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhSW5kZXhDYXBhY2l0eVVuaXRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhSW5kZXhDYXBhY2l0eVVuaXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHF1ZXJ5X2NhcGFjaXR5X3VuaXRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnF1ZXJ5Q2FwYWNpdHlVbml0cyksXG4gICAgc3RvcmFnZV9jYXBhY2l0eV91bml0czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zdG9yYWdlQ2FwYWNpdHlVbml0cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYUluZGV4RG9jdW1lbnRNZXRhZGF0YUNvbmZpZ3VyYXRpb25zUmVsZXZhbmNlVmFsdWVJbXBvcnRhbmNlSXRlbXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLZW5kcmFJbmRleERvY3VtZW50TWV0YWRhdGFDb25maWd1cmF0aW9uc1JlbGV2YW5jZVZhbHVlSW1wb3J0YW5jZUl0ZW1zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhSW5kZXhEb2N1bWVudE1ldGFkYXRhQ29uZmlndXJhdGlvbnNSZWxldmFuY2VWYWx1ZUltcG9ydGFuY2VJdGVtcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYUluZGV4RG9jdW1lbnRNZXRhZGF0YUNvbmZpZ3VyYXRpb25zUmVsZXZhbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZHVyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2R1cmF0aW9uJyk7XG4gIH1cblxuICAvLyBmcmVzaG5lc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmcmVzaG5lc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZnJlc2huZXNzJyk7XG4gIH1cblxuICAvLyBpbXBvcnRhbmNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW1wb3J0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2ltcG9ydGFuY2UnKTtcbiAgfVxuXG4gIC8vIHJhbmtfb3JkZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByYW5rT3JkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyYW5rX29yZGVyJyk7XG4gIH1cblxuICAvLyB2YWx1ZV9pbXBvcnRhbmNlX2l0ZW1zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWVJbXBvcnRhbmNlSXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmFsdWVfaW1wb3J0YW5jZV9pdGVtcycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhSW5kZXhEb2N1bWVudE1ldGFkYXRhQ29uZmlndXJhdGlvbnNSZWxldmFuY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFJbmRleERvY3VtZW50TWV0YWRhdGFDb25maWd1cmF0aW9uc1JlbGV2YW5jZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkdXJhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kdXJhdGlvbiksXG4gICAgZnJlc2huZXNzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5mcmVzaG5lc3MpLFxuICAgIGltcG9ydGFuY2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW1wb3J0YW5jZSksXG4gICAgcmFua19vcmRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yYW5rT3JkZXIpLFxuICAgIHZhbHVlX2ltcG9ydGFuY2VfaXRlbXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjS2VuZHJhSW5kZXhEb2N1bWVudE1ldGFkYXRhQ29uZmlndXJhdGlvbnNSZWxldmFuY2VWYWx1ZUltcG9ydGFuY2VJdGVtc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnZhbHVlSW1wb3J0YW5jZUl0ZW1zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhSW5kZXhEb2N1bWVudE1ldGFkYXRhQ29uZmlndXJhdGlvbnNTZWFyY2ggZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkaXNwbGF5YWJsZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpc3BsYXlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Rpc3BsYXlhYmxlJyk7XG4gIH1cblxuICAvLyBmYWNldGFibGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmYWNldGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZmFjZXRhYmxlJyk7XG4gIH1cblxuICAvLyBzZWFyY2hhYmxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VhcmNoYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzZWFyY2hhYmxlJyk7XG4gIH1cblxuICAvLyBzb3J0YWJsZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNvcnRhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3NvcnRhYmxlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYUluZGV4RG9jdW1lbnRNZXRhZGF0YUNvbmZpZ3VyYXRpb25zU2VhcmNoVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhSW5kZXhEb2N1bWVudE1ldGFkYXRhQ29uZmlndXJhdGlvbnNTZWFyY2gpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGlzcGxheWFibGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRpc3BsYXlhYmxlKSxcbiAgICBmYWNldGFibGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmZhY2V0YWJsZSksXG4gICAgc2VhcmNoYWJsZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuc2VhcmNoYWJsZSksXG4gICAgc29ydGFibGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnNvcnRhYmxlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhSW5kZXhEb2N1bWVudE1ldGFkYXRhQ29uZmlndXJhdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHJlbGV2YW5jZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlbGV2YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZWxldmFuY2UnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzZWFyY2ggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWFyY2goKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2VhcmNoJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYUluZGV4RG9jdW1lbnRNZXRhZGF0YUNvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhSW5kZXhEb2N1bWVudE1ldGFkYXRhQ29uZmlndXJhdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICByZWxldmFuY2U6IGRhdGFBd3NjY0tlbmRyYUluZGV4RG9jdW1lbnRNZXRhZGF0YUNvbmZpZ3VyYXRpb25zUmVsZXZhbmNlVG9UZXJyYWZvcm0oc3RydWN0IS5yZWxldmFuY2UpLFxuICAgIHNlYXJjaDogZGF0YUF3c2NjS2VuZHJhSW5kZXhEb2N1bWVudE1ldGFkYXRhQ29uZmlndXJhdGlvbnNTZWFyY2hUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlYXJjaCksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhSW5kZXhTZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYUluZGV4U2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhSW5kZXhTZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlJZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYUluZGV4VGFncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYUluZGV4VGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tlbmRyYUluZGV4VGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYUluZGV4VXNlclRva2VuQ29uZmlndXJhdGlvbnNKc29uVG9rZW5UeXBlQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGdyb3VwX2F0dHJpYnV0ZV9maWVsZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGdyb3VwQXR0cmlidXRlRmllbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdncm91cF9hdHRyaWJ1dGVfZmllbGQnKTtcbiAgfVxuXG4gIC8vIHVzZXJfbmFtZV9hdHRyaWJ1dGVfZmllbGQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1c2VyTmFtZUF0dHJpYnV0ZUZpZWxkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9uYW1lX2F0dHJpYnV0ZV9maWVsZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLZW5kcmFJbmRleFVzZXJUb2tlbkNvbmZpZ3VyYXRpb25zSnNvblRva2VuVHlwZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLZW5kcmFJbmRleFVzZXJUb2tlbkNvbmZpZ3VyYXRpb25zSnNvblRva2VuVHlwZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZ3JvdXBfYXR0cmlidXRlX2ZpZWxkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdyb3VwQXR0cmlidXRlRmllbGQpLFxuICAgIHVzZXJfbmFtZV9hdHRyaWJ1dGVfZmllbGQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlck5hbWVBdHRyaWJ1dGVGaWVsZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYUluZGV4VXNlclRva2VuQ29uZmlndXJhdGlvbnNKd3RUb2tlblR5cGVDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2xhaW1fcmVnZXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbGFpbVJlZ2V4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2xhaW1fcmVnZXgnKTtcbiAgfVxuXG4gIC8vIGdyb3VwX2F0dHJpYnV0ZV9maWVsZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGdyb3VwQXR0cmlidXRlRmllbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdncm91cF9hdHRyaWJ1dGVfZmllbGQnKTtcbiAgfVxuXG4gIC8vIGlzc3VlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlzc3VlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lzc3VlcicpO1xuICB9XG5cbiAgLy8ga2V5X2xvY2F0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5TG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXlfbG9jYXRpb24nKTtcbiAgfVxuXG4gIC8vIHNlY3JldF9tYW5hZ2VyX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY3JldE1hbmFnZXJBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNyZXRfbWFuYWdlcl9hcm4nKTtcbiAgfVxuXG4gIC8vIHVybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG5cbiAgLy8gdXNlcl9uYW1lX2F0dHJpYnV0ZV9maWVsZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVzZXJOYW1lQXR0cmlidXRlRmllbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VyX25hbWVfYXR0cmlidXRlX2ZpZWxkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tlbmRyYUluZGV4VXNlclRva2VuQ29uZmlndXJhdGlvbnNKd3RUb2tlblR5cGVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2VuZHJhSW5kZXhVc2VyVG9rZW5Db25maWd1cmF0aW9uc0p3dFRva2VuVHlwZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2xhaW1fcmVnZXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xhaW1SZWdleCksXG4gICAgZ3JvdXBfYXR0cmlidXRlX2ZpZWxkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdyb3VwQXR0cmlidXRlRmllbGQpLFxuICAgIGlzc3VlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pc3N1ZXIpLFxuICAgIGtleV9sb2NhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXlMb2NhdGlvbiksXG4gICAgc2VjcmV0X21hbmFnZXJfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE1hbmFnZXJBcm4pLFxuICAgIHVybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cmwpLFxuICAgIHVzZXJfbmFtZV9hdHRyaWJ1dGVfZmllbGQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlck5hbWVBdHRyaWJ1dGVGaWVsZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tlbmRyYUluZGV4VXNlclRva2VuQ29uZmlndXJhdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBqc29uX3Rva2VuX3R5cGVfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGpzb25Ub2tlblR5cGVDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2pzb25fdG9rZW5fdHlwZV9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gand0X3Rva2VuX3R5cGVfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGp3dFRva2VuVHlwZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnand0X3Rva2VuX3R5cGVfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2VuZHJhSW5kZXhVc2VyVG9rZW5Db25maWd1cmF0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tlbmRyYUluZGV4VXNlclRva2VuQ29uZmlndXJhdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAganNvbl90b2tlbl90eXBlX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tlbmRyYUluZGV4VXNlclRva2VuQ29uZmlndXJhdGlvbnNKc29uVG9rZW5UeXBlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuanNvblRva2VuVHlwZUNvbmZpZ3VyYXRpb24pLFxuICAgIGp3dF90b2tlbl90eXBlX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tlbmRyYUluZGV4VXNlclRva2VuQ29uZmlndXJhdGlvbnNKd3RUb2tlblR5cGVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5qd3RUb2tlblR5cGVDb25maWd1cmF0aW9uKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2tlbmRyYV9pbmRleC5odG1sIGF3c2NjX2tlbmRyYV9pbmRleH1cbiovXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2VuZHJhSW5kZXggZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2tlbmRyYV9pbmRleFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9rZW5kcmFfaW5kZXguaHRtbCBhd3NjY19rZW5kcmFfaW5kZXh9IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY0tlbmRyYUluZGV4Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NjY0tlbmRyYUluZGV4Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19rZW5kcmFfaW5kZXgnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjYXBhY2l0eV91bml0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNhcGFjaXR5VW5pdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2FwYWNpdHlfdW5pdHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIC8vIGRvY3VtZW50X21ldGFkYXRhX2NvbmZpZ3VyYXRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG9jdW1lbnRNZXRhZGF0YUNvbmZpZ3VyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RvY3VtZW50X21ldGFkYXRhX2NvbmZpZ3VyYXRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZWRpdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVkaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlZGl0aW9uJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZFxuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gc2VydmVyX3NpZGVfZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NlcnZlcl9zaWRlX2VuY3J5cHRpb25fY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB1c2VyX2NvbnRleHRfcG9saWN5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXNlckNvbnRleHRQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VyX2NvbnRleHRfcG9saWN5Jyk7XG4gIH1cblxuICAvLyB1c2VyX3Rva2VuX2NvbmZpZ3VyYXRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXNlclRva2VuQ29uZmlndXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndXNlcl90b2tlbl9jb25maWd1cmF0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=