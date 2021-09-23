"use strict";
// https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset_model.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataAwsccIotsitewiseAssetModelTagsToTerraform = exports.DataAwsccIotsitewiseAssetModelTags = exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelProperties = exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesType = exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform = exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables = exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue = exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric = exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow = exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling = exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables = exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue = exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute = exports.dataAwsccIotsitewiseAssetModelAssetModelHierarchiesToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelHierarchies = exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModels = exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties = exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType = exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform = exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables = exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue = exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric = exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow = exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling = exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables = exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue = exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToTerraform = exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute = void 0;
exports.DataAwsccIotsitewiseAssetModel = void 0;
const cdktf = require("cdktf");
class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute extends cdktf.ComplexComputedList {
    // default_value - computed: true, optional: false, required: false
    get defaultValue() {
        return this.getStringAttribute('default_value');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute = DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute;
function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_value: cdktf.stringToTerraform(struct.defaultValue),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToTerraform = dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue extends cdktf.ComplexComputedList {
    // hierarchy_logical_id - computed: true, optional: false, required: false
    get hierarchyLogicalId() {
        return this.getStringAttribute('hierarchy_logical_id');
    }
    // property_logical_id - computed: true, optional: false, required: false
    get propertyLogicalId() {
        return this.getStringAttribute('property_logical_id');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue = DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue;
function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hierarchy_logical_id: cdktf.stringToTerraform(struct.hierarchyLogicalId),
        property_logical_id: cdktf.stringToTerraform(struct.propertyLogicalId),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToTerraform = dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.interpolationForAttribute('value');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables = DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables;
function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToTerraform(struct.value),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToTerraform = dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling extends cdktf.ComplexComputedList {
    // interval - computed: true, optional: false, required: false
    get interval() {
        return this.getStringAttribute('interval');
    }
    // offset - computed: true, optional: false, required: false
    get offset() {
        return this.getStringAttribute('offset');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling = DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling;
function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        interval: cdktf.stringToTerraform(struct.interval),
        offset: cdktf.stringToTerraform(struct.offset),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToTerraform = dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow extends cdktf.ComplexComputedList {
    // tumbling - computed: true, optional: false, required: false
    get tumbling() {
        return this.interpolationForAttribute('tumbling');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow = DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow;
function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        tumbling: dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToTerraform(struct.tumbling),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToTerraform = dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric extends cdktf.ComplexComputedList {
    // expression - computed: true, optional: false, required: false
    get expression() {
        return this.getStringAttribute('expression');
    }
    // variables - computed: true, optional: false, required: false
    get variables() {
        return this.interpolationForAttribute('variables');
    }
    // window - computed: true, optional: false, required: false
    get window() {
        return this.interpolationForAttribute('window');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric = DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric;
function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        variables: cdktf.listMapper(dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToTerraform)(struct.variables),
        window: dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToTerraform(struct.window),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToTerraform = dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue extends cdktf.ComplexComputedList {
    // hierarchy_logical_id - computed: true, optional: false, required: false
    get hierarchyLogicalId() {
        return this.getStringAttribute('hierarchy_logical_id');
    }
    // property_logical_id - computed: true, optional: false, required: false
    get propertyLogicalId() {
        return this.getStringAttribute('property_logical_id');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue = DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue;
function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hierarchy_logical_id: cdktf.stringToTerraform(struct.hierarchyLogicalId),
        property_logical_id: cdktf.stringToTerraform(struct.propertyLogicalId),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToTerraform = dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.interpolationForAttribute('value');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables = DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables;
function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToTerraform(struct.value),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToTerraform = dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform extends cdktf.ComplexComputedList {
    // expression - computed: true, optional: false, required: false
    get expression() {
        return this.getStringAttribute('expression');
    }
    // variables - computed: true, optional: false, required: false
    get variables() {
        return this.interpolationForAttribute('variables');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform = DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform;
function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        variables: cdktf.listMapper(dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToTerraform)(struct.variables),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToTerraform = dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType extends cdktf.ComplexComputedList {
    // attribute - computed: true, optional: false, required: false
    get attribute() {
        return this.interpolationForAttribute('attribute');
    }
    // metric - computed: true, optional: false, required: false
    get metric() {
        return this.interpolationForAttribute('metric');
    }
    // transform - computed: true, optional: false, required: false
    get transform() {
        return this.interpolationForAttribute('transform');
    }
    // type_name - computed: true, optional: false, required: false
    get typeName() {
        return this.getStringAttribute('type_name');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType = DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType;
function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attribute: dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToTerraform(struct.attribute),
        metric: dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToTerraform(struct.metric),
        transform: dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToTerraform(struct.transform),
        type_name: cdktf.stringToTerraform(struct.typeName),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToTerraform = dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties extends cdktf.ComplexComputedList {
    // data_type - computed: true, optional: false, required: false
    get dataType() {
        return this.getStringAttribute('data_type');
    }
    // data_type_spec - computed: true, optional: false, required: false
    get dataTypeSpec() {
        return this.getStringAttribute('data_type_spec');
    }
    // logical_id - computed: true, optional: false, required: false
    get logicalId() {
        return this.getStringAttribute('logical_id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.interpolationForAttribute('type');
    }
    // unit - computed: true, optional: false, required: false
    get unit() {
        return this.getStringAttribute('unit');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties = DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties;
function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_type: cdktf.stringToTerraform(struct.dataType),
        data_type_spec: cdktf.stringToTerraform(struct.dataTypeSpec),
        logical_id: cdktf.stringToTerraform(struct.logicalId),
        name: cdktf.stringToTerraform(struct.name),
        type: dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToTerraform(struct.type),
        unit: cdktf.stringToTerraform(struct.unit),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToTerraform = dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelCompositeModels extends cdktf.ComplexComputedList {
    // composite_model_properties - computed: true, optional: false, required: false
    get compositeModelProperties() {
        return this.interpolationForAttribute('composite_model_properties');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelCompositeModels = DataAwsccIotsitewiseAssetModelAssetModelCompositeModels;
function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        composite_model_properties: cdktf.listMapper(dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToTerraform)(struct.compositeModelProperties),
        description: cdktf.stringToTerraform(struct.description),
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsToTerraform = dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelHierarchies extends cdktf.ComplexComputedList {
    // child_asset_model_id - computed: true, optional: false, required: false
    get childAssetModelId() {
        return this.getStringAttribute('child_asset_model_id');
    }
    // logical_id - computed: true, optional: false, required: false
    get logicalId() {
        return this.getStringAttribute('logical_id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelHierarchies = DataAwsccIotsitewiseAssetModelAssetModelHierarchies;
function dataAwsccIotsitewiseAssetModelAssetModelHierarchiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        child_asset_model_id: cdktf.stringToTerraform(struct.childAssetModelId),
        logical_id: cdktf.stringToTerraform(struct.logicalId),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelHierarchiesToTerraform = dataAwsccIotsitewiseAssetModelAssetModelHierarchiesToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute extends cdktf.ComplexComputedList {
    // default_value - computed: true, optional: false, required: false
    get defaultValue() {
        return this.getStringAttribute('default_value');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute = DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute;
function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_value: cdktf.stringToTerraform(struct.defaultValue),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeToTerraform = dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue extends cdktf.ComplexComputedList {
    // hierarchy_logical_id - computed: true, optional: false, required: false
    get hierarchyLogicalId() {
        return this.getStringAttribute('hierarchy_logical_id');
    }
    // property_logical_id - computed: true, optional: false, required: false
    get propertyLogicalId() {
        return this.getStringAttribute('property_logical_id');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue = DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue;
function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hierarchy_logical_id: cdktf.stringToTerraform(struct.hierarchyLogicalId),
        property_logical_id: cdktf.stringToTerraform(struct.propertyLogicalId),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToTerraform = dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.interpolationForAttribute('value');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables = DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables;
function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToTerraform(struct.value),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToTerraform = dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling extends cdktf.ComplexComputedList {
    // interval - computed: true, optional: false, required: false
    get interval() {
        return this.getStringAttribute('interval');
    }
    // offset - computed: true, optional: false, required: false
    get offset() {
        return this.getStringAttribute('offset');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling = DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling;
function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        interval: cdktf.stringToTerraform(struct.interval),
        offset: cdktf.stringToTerraform(struct.offset),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToTerraform = dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow extends cdktf.ComplexComputedList {
    // tumbling - computed: true, optional: false, required: false
    get tumbling() {
        return this.interpolationForAttribute('tumbling');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow = DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow;
function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        tumbling: dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToTerraform(struct.tumbling),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToTerraform = dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric extends cdktf.ComplexComputedList {
    // expression - computed: true, optional: false, required: false
    get expression() {
        return this.getStringAttribute('expression');
    }
    // variables - computed: true, optional: false, required: false
    get variables() {
        return this.interpolationForAttribute('variables');
    }
    // window - computed: true, optional: false, required: false
    get window() {
        return this.interpolationForAttribute('window');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric = DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric;
function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        variables: cdktf.listMapper(dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToTerraform)(struct.variables),
        window: dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToTerraform(struct.window),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricToTerraform = dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue extends cdktf.ComplexComputedList {
    // hierarchy_logical_id - computed: true, optional: false, required: false
    get hierarchyLogicalId() {
        return this.getStringAttribute('hierarchy_logical_id');
    }
    // property_logical_id - computed: true, optional: false, required: false
    get propertyLogicalId() {
        return this.getStringAttribute('property_logical_id');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue = DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue;
function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hierarchy_logical_id: cdktf.stringToTerraform(struct.hierarchyLogicalId),
        property_logical_id: cdktf.stringToTerraform(struct.propertyLogicalId),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToTerraform = dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.interpolationForAttribute('value');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables = DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables;
function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToTerraform(struct.value),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToTerraform = dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform extends cdktf.ComplexComputedList {
    // expression - computed: true, optional: false, required: false
    get expression() {
        return this.getStringAttribute('expression');
    }
    // variables - computed: true, optional: false, required: false
    get variables() {
        return this.interpolationForAttribute('variables');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform = DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform;
function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        variables: cdktf.listMapper(dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToTerraform)(struct.variables),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformToTerraform = dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelPropertiesType extends cdktf.ComplexComputedList {
    // attribute - computed: true, optional: false, required: false
    get attribute() {
        return this.interpolationForAttribute('attribute');
    }
    // metric - computed: true, optional: false, required: false
    get metric() {
        return this.interpolationForAttribute('metric');
    }
    // transform - computed: true, optional: false, required: false
    get transform() {
        return this.interpolationForAttribute('transform');
    }
    // type_name - computed: true, optional: false, required: false
    get typeName() {
        return this.getStringAttribute('type_name');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelPropertiesType = DataAwsccIotsitewiseAssetModelAssetModelPropertiesType;
function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attribute: dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeToTerraform(struct.attribute),
        metric: dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricToTerraform(struct.metric),
        transform: dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformToTerraform(struct.transform),
        type_name: cdktf.stringToTerraform(struct.typeName),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeToTerraform = dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeToTerraform;
class DataAwsccIotsitewiseAssetModelAssetModelProperties extends cdktf.ComplexComputedList {
    // data_type - computed: true, optional: false, required: false
    get dataType() {
        return this.getStringAttribute('data_type');
    }
    // data_type_spec - computed: true, optional: false, required: false
    get dataTypeSpec() {
        return this.getStringAttribute('data_type_spec');
    }
    // logical_id - computed: true, optional: false, required: false
    get logicalId() {
        return this.getStringAttribute('logical_id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.interpolationForAttribute('type');
    }
    // unit - computed: true, optional: false, required: false
    get unit() {
        return this.getStringAttribute('unit');
    }
}
exports.DataAwsccIotsitewiseAssetModelAssetModelProperties = DataAwsccIotsitewiseAssetModelAssetModelProperties;
function dataAwsccIotsitewiseAssetModelAssetModelPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_type: cdktf.stringToTerraform(struct.dataType),
        data_type_spec: cdktf.stringToTerraform(struct.dataTypeSpec),
        logical_id: cdktf.stringToTerraform(struct.logicalId),
        name: cdktf.stringToTerraform(struct.name),
        type: dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeToTerraform(struct.type),
        unit: cdktf.stringToTerraform(struct.unit),
    };
}
exports.dataAwsccIotsitewiseAssetModelAssetModelPropertiesToTerraform = dataAwsccIotsitewiseAssetModelAssetModelPropertiesToTerraform;
class DataAwsccIotsitewiseAssetModelTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccIotsitewiseAssetModelTags = DataAwsccIotsitewiseAssetModelTags;
function dataAwsccIotsitewiseAssetModelTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccIotsitewiseAssetModelTagsToTerraform = dataAwsccIotsitewiseAssetModelTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset_model.html awscc_iotsitewise_asset_model}
*/
class DataAwsccIotsitewiseAssetModel extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset_model.html awscc_iotsitewise_asset_model} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotsitewiseAssetModelConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotsitewise_asset_model',
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
    // asset_model_arn - computed: true, optional: false, required: false
    get assetModelArn() {
        return this.getStringAttribute('asset_model_arn');
    }
    // asset_model_composite_models - computed: true, optional: false, required: false
    get assetModelCompositeModels() {
        return this.interpolationForAttribute('asset_model_composite_models');
    }
    // asset_model_description - computed: true, optional: false, required: false
    get assetModelDescription() {
        return this.getStringAttribute('asset_model_description');
    }
    // asset_model_hierarchies - computed: true, optional: false, required: false
    get assetModelHierarchies() {
        return this.interpolationForAttribute('asset_model_hierarchies');
    }
    // asset_model_id - computed: true, optional: false, required: false
    get assetModelId() {
        return this.getStringAttribute('asset_model_id');
    }
    // asset_model_name - computed: true, optional: false, required: false
    get assetModelName() {
        return this.getStringAttribute('asset_model_name');
    }
    // asset_model_properties - computed: true, optional: false, required: false
    get assetModelProperties() {
        return this.interpolationForAttribute('asset_model_properties');
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
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
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
exports.DataAwsccIotsitewiseAssetModel = DataAwsccIotsitewiseAssetModel;
// =================
// STATIC PROPERTIES
// =================
DataAwsccIotsitewiseAssetModel.tfResourceType = "awscc_iotsitewise_asset_model";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1pb3RzaXRld2lzZS1hc3NldC1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtYXdzY2MtaW90c2l0ZXdpc2UtYXNzZXQtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtFQUErRTtBQUMvRSwyQ0FBMkM7Ozs7QUFHM0MsK0JBQStCO0FBWS9CLE1BQWEsNEZBQTZGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV6SSxtRUFBbUU7SUFDbkUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDRjtBQU5ELG9NQU1DO0FBRUQsU0FBZ0IsdUdBQXVHLENBQUMsTUFBcUc7SUFDM04sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7S0FDN0QsQ0FBQTtBQUNILENBQUM7QUFMRCwwTkFLQztBQUVELE1BQWEsdUdBQXdHLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVwSiwwRUFBMEU7SUFDMUUsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQseUVBQXlFO0lBQ3pFLElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNGO0FBWEQsME5BV0M7QUFFRCxTQUFnQixrSEFBa0gsQ0FBQyxNQUFnSDtJQUNqUCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNM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QUNuRCxDQUFDO0lBRUQsc0VBQXNFO0lBQ3RFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCw0RUFBNEU7SUFDNUUsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsd0JBQXdCLENBQVEsQ0FBQztJQUN6RSxDQUFDO0lBSUQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELElBQVcsRUFBRSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2pCLENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFRLENBQUM7SUFDdkQsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3RDLENBQUM7SUFDSixDQUFDOztBQWpHSCx3RUFrR0M7QUFoR0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyw2Q0FBYyxHQUFXLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvaW90c2l0ZXdpc2VfYXNzZXRfbW9kZWwuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBVbmlxdWVseSBpZGVudGlmaWVzIHRoZSByZXNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2lvdHNpdGV3aXNlX2Fzc2V0X21vZGVsLmh0bWwjaWQgRGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsI2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNDb21wb3NpdGVNb2RlbFByb3BlcnRpZXNUeXBlQXR0cmlidXRlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGVmYXVsdF92YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlZmF1bHRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlZmF1bHRfdmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbENvbXBvc2l0ZU1vZGVsc0NvbXBvc2l0ZU1vZGVsUHJvcGVydGllc1R5cGVBdHRyaWJ1dGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzQ29tcG9zaXRlTW9kZWxQcm9wZXJ0aWVzVHlwZUF0dHJpYnV0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0X3ZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRWYWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNDb21wb3NpdGVNb2RlbFByb3BlcnRpZXNUeXBlTWV0cmljVmFyaWFibGVzVmFsdWUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBoaWVyYXJjaHlfbG9naWNhbF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhpZXJhcmNoeUxvZ2ljYWxJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hpZXJhcmNoeV9sb2dpY2FsX2lkJyk7XG4gIH1cblxuICAvLyBwcm9wZXJ0eV9sb2dpY2FsX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvcGVydHlMb2dpY2FsSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm9wZXJ0eV9sb2dpY2FsX2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNDb21wb3NpdGVNb2RlbFByb3BlcnRpZXNUeXBlTWV0cmljVmFyaWFibGVzVmFsdWVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzQ29tcG9zaXRlTW9kZWxQcm9wZXJ0aWVzVHlwZU1ldHJpY1ZhcmlhYmxlc1ZhbHVlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGhpZXJhcmNoeV9sb2dpY2FsX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhpZXJhcmNoeUxvZ2ljYWxJZCksXG4gICAgcHJvcGVydHlfbG9naWNhbF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9wZXJ0eUxvZ2ljYWxJZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNDb21wb3NpdGVNb2RlbFByb3BlcnRpZXNUeXBlTWV0cmljVmFyaWFibGVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZhbHVlJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzQ29tcG9zaXRlTW9kZWxQcm9wZXJ0aWVzVHlwZU1ldHJpY1ZhcmlhYmxlc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNDb21wb3NpdGVNb2RlbFByb3BlcnRpZXNUeXBlTWV0cmljVmFyaWFibGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmFsdWU6IGRhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNDb21wb3NpdGVNb2RlbFByb3BlcnRpZXNUeXBlTWV0cmljVmFyaWFibGVzVmFsdWVUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbENvbXBvc2l0ZU1vZGVsc0NvbXBvc2l0ZU1vZGVsUHJvcGVydGllc1R5cGVNZXRyaWNXaW5kb3dUdW1ibGluZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGludGVydmFsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnRlcnZhbCcpO1xuICB9XG5cbiAgLy8gb2Zmc2V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2Zmc2V0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNDb21wb3NpdGVNb2RlbFByb3BlcnRpZXNUeXBlTWV0cmljV2luZG93VHVtYmxpbmdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzQ29tcG9zaXRlTW9kZWxQcm9wZXJ0aWVzVHlwZU1ldHJpY1dpbmRvd1R1bWJsaW5nKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGludGVydmFsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmludGVydmFsKSxcbiAgICBvZmZzZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub2Zmc2V0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbENvbXBvc2l0ZU1vZGVsc0NvbXBvc2l0ZU1vZGVsUHJvcGVydGllc1R5cGVNZXRyaWNXaW5kb3cgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyB0dW1ibGluZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR1bWJsaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3R1bWJsaW5nJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzQ29tcG9zaXRlTW9kZWxQcm9wZXJ0aWVzVHlwZU1ldHJpY1dpbmRvd1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNDb21wb3NpdGVNb2RlbFByb3BlcnRpZXNUeXBlTWV0cmljV2luZG93KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHR1bWJsaW5nOiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzQ29tcG9zaXRlTW9kZWxQcm9wZXJ0aWVzVHlwZU1ldHJpY1dpbmRvd1R1bWJsaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50dW1ibGluZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNDb21wb3NpdGVNb2RlbFByb3BlcnRpZXNUeXBlTWV0cmljIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZXhwcmVzc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleHByZXNzaW9uJyk7XG4gIH1cblxuICAvLyB2YXJpYWJsZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmFyaWFibGVzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gd2luZG93IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd2luZG93KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3dpbmRvdycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbENvbXBvc2l0ZU1vZGVsc0NvbXBvc2l0ZU1vZGVsUHJvcGVydGllc1R5cGVNZXRyaWNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzQ29tcG9zaXRlTW9kZWxQcm9wZXJ0aWVzVHlwZU1ldHJpYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBleHByZXNzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4cHJlc3Npb24pLFxuICAgIHZhcmlhYmxlczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzQ29tcG9zaXRlTW9kZWxQcm9wZXJ0aWVzVHlwZU1ldHJpY1ZhcmlhYmxlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnZhcmlhYmxlcyksXG4gICAgd2luZG93OiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzQ29tcG9zaXRlTW9kZWxQcm9wZXJ0aWVzVHlwZU1ldHJpY1dpbmRvd1RvVGVycmFmb3JtKHN0cnVjdCEud2luZG93KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbENvbXBvc2l0ZU1vZGVsc0NvbXBvc2l0ZU1vZGVsUHJvcGVydGllc1R5cGVUcmFuc2Zvcm1WYXJpYWJsZXNWYWx1ZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGhpZXJhcmNoeV9sb2dpY2FsX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGllcmFyY2h5TG9naWNhbElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaGllcmFyY2h5X2xvZ2ljYWxfaWQnKTtcbiAgfVxuXG4gIC8vIHByb3BlcnR5X2xvZ2ljYWxfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9wZXJ0eUxvZ2ljYWxJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3BlcnR5X2xvZ2ljYWxfaWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbENvbXBvc2l0ZU1vZGVsc0NvbXBvc2l0ZU1vZGVsUHJvcGVydGllc1R5cGVUcmFuc2Zvcm1WYXJpYWJsZXNWYWx1ZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNDb21wb3NpdGVNb2RlbFByb3BlcnRpZXNUeXBlVHJhbnNmb3JtVmFyaWFibGVzVmFsdWUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaGllcmFyY2h5X2xvZ2ljYWxfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaGllcmFyY2h5TG9naWNhbElkKSxcbiAgICBwcm9wZXJ0eV9sb2dpY2FsX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb3BlcnR5TG9naWNhbElkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbENvbXBvc2l0ZU1vZGVsc0NvbXBvc2l0ZU1vZGVsUHJvcGVydGllc1R5cGVUcmFuc2Zvcm1WYXJpYWJsZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmFsdWUnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNDb21wb3NpdGVNb2RlbFByb3BlcnRpZXNUeXBlVHJhbnNmb3JtVmFyaWFibGVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbENvbXBvc2l0ZU1vZGVsc0NvbXBvc2l0ZU1vZGVsUHJvcGVydGllc1R5cGVUcmFuc2Zvcm1WYXJpYWJsZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2YWx1ZTogZGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbENvbXBvc2l0ZU1vZGVsc0NvbXBvc2l0ZU1vZGVsUHJvcGVydGllc1R5cGVUcmFuc2Zvcm1WYXJpYWJsZXNWYWx1ZVRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzQ29tcG9zaXRlTW9kZWxQcm9wZXJ0aWVzVHlwZVRyYW5zZm9ybSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGV4cHJlc3Npb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBleHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXhwcmVzc2lvbicpO1xuICB9XG5cbiAgLy8gdmFyaWFibGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZhcmlhYmxlcycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbENvbXBvc2l0ZU1vZGVsc0NvbXBvc2l0ZU1vZGVsUHJvcGVydGllc1R5cGVUcmFuc2Zvcm1Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzQ29tcG9zaXRlTW9kZWxQcm9wZXJ0aWVzVHlwZVRyYW5zZm9ybSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBleHByZXNzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4cHJlc3Npb24pLFxuICAgIHZhcmlhYmxlczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzQ29tcG9zaXRlTW9kZWxQcm9wZXJ0aWVzVHlwZVRyYW5zZm9ybVZhcmlhYmxlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnZhcmlhYmxlcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNDb21wb3NpdGVNb2RlbFByb3BlcnRpZXNUeXBlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXR0cmlidXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXR0cmlidXRlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2F0dHJpYnV0ZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG1ldHJpYyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1ldHJpYygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtZXRyaWMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0cmFuc2Zvcm0gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0cmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndHJhbnNmb3JtJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdHlwZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHlwZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlX25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbENvbXBvc2l0ZU1vZGVsc0NvbXBvc2l0ZU1vZGVsUHJvcGVydGllc1R5cGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzQ29tcG9zaXRlTW9kZWxQcm9wZXJ0aWVzVHlwZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhdHRyaWJ1dGU6IGRhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNDb21wb3NpdGVNb2RlbFByb3BlcnRpZXNUeXBlQXR0cmlidXRlVG9UZXJyYWZvcm0oc3RydWN0IS5hdHRyaWJ1dGUpLFxuICAgIG1ldHJpYzogZGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbENvbXBvc2l0ZU1vZGVsc0NvbXBvc2l0ZU1vZGVsUHJvcGVydGllc1R5cGVNZXRyaWNUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpYyksXG4gICAgdHJhbnNmb3JtOiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzQ29tcG9zaXRlTW9kZWxQcm9wZXJ0aWVzVHlwZVRyYW5zZm9ybVRvVGVycmFmb3JtKHN0cnVjdCEudHJhbnNmb3JtKSxcbiAgICB0eXBlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZU5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzQ29tcG9zaXRlTW9kZWxQcm9wZXJ0aWVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGF0YV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3R5cGUnKTtcbiAgfVxuXG4gIC8vIGRhdGFfdHlwZV9zcGVjIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YVR5cGVTcGVjKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YV90eXBlX3NwZWMnKTtcbiAgfVxuXG4gIC8vIGxvZ2ljYWxfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dpY2FsSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dpY2FsX2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3R5cGUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbENvbXBvc2l0ZU1vZGVsc0NvbXBvc2l0ZU1vZGVsUHJvcGVydGllc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNDb21wb3NpdGVNb2RlbFByb3BlcnRpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF0YV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFUeXBlKSxcbiAgICBkYXRhX3R5cGVfc3BlYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhVHlwZVNwZWMpLFxuICAgIGxvZ2ljYWxfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9naWNhbElkKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHR5cGU6IGRhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNDb21wb3NpdGVNb2RlbFByb3BlcnRpZXNUeXBlVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29tcG9zaXRlX21vZGVsX3Byb3BlcnRpZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21wb3NpdGVNb2RlbFByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29tcG9zaXRlX21vZGVsX3Byb3BlcnRpZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbXBvc2l0ZV9tb2RlbF9wcm9wZXJ0aWVzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxDb21wb3NpdGVNb2RlbHNDb21wb3NpdGVNb2RlbFByb3BlcnRpZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5jb21wb3NpdGVNb2RlbFByb3BlcnRpZXMpLFxuICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc2NyaXB0aW9uKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxIaWVyYXJjaGllcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNoaWxkX2Fzc2V0X21vZGVsX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2hpbGRBc3NldE1vZGVsSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjaGlsZF9hc3NldF9tb2RlbF9pZCcpO1xuICB9XG5cbiAgLy8gbG9naWNhbF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvZ2ljYWxJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ2ljYWxfaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsSGllcmFyY2hpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsSGllcmFyY2hpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2hpbGRfYXNzZXRfbW9kZWxfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2hpbGRBc3NldE1vZGVsSWQpLFxuICAgIGxvZ2ljYWxfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9naWNhbElkKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVBdHRyaWJ1dGUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkZWZhdWx0X3ZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVmYXVsdF92YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVBdHRyaWJ1dGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVBdHRyaWJ1dGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGVmYXVsdF92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWZhdWx0VmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVNZXRyaWNWYXJpYWJsZXNWYWx1ZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGhpZXJhcmNoeV9sb2dpY2FsX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGllcmFyY2h5TG9naWNhbElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaGllcmFyY2h5X2xvZ2ljYWxfaWQnKTtcbiAgfVxuXG4gIC8vIHByb3BlcnR5X2xvZ2ljYWxfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9wZXJ0eUxvZ2ljYWxJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3BlcnR5X2xvZ2ljYWxfaWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbFByb3BlcnRpZXNUeXBlTWV0cmljVmFyaWFibGVzVmFsdWVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVNZXRyaWNWYXJpYWJsZXNWYWx1ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBoaWVyYXJjaHlfbG9naWNhbF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5oaWVyYXJjaHlMb2dpY2FsSWQpLFxuICAgIHByb3BlcnR5X2xvZ2ljYWxfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvcGVydHlMb2dpY2FsSWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVNZXRyaWNWYXJpYWJsZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmFsdWUnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxQcm9wZXJ0aWVzVHlwZU1ldHJpY1ZhcmlhYmxlc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxQcm9wZXJ0aWVzVHlwZU1ldHJpY1ZhcmlhYmxlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZhbHVlOiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVNZXRyaWNWYXJpYWJsZXNWYWx1ZVRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVNZXRyaWNXaW5kb3dUdW1ibGluZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGludGVydmFsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnRlcnZhbCcpO1xuICB9XG5cbiAgLy8gb2Zmc2V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2Zmc2V0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxQcm9wZXJ0aWVzVHlwZU1ldHJpY1dpbmRvd1R1bWJsaW5nVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbFByb3BlcnRpZXNUeXBlTWV0cmljV2luZG93VHVtYmxpbmcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaW50ZXJ2YWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWwpLFxuICAgIG9mZnNldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vZmZzZXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVNZXRyaWNXaW5kb3cgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyB0dW1ibGluZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR1bWJsaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3R1bWJsaW5nJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVNZXRyaWNXaW5kb3dUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVNZXRyaWNXaW5kb3cpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdHVtYmxpbmc6IGRhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxQcm9wZXJ0aWVzVHlwZU1ldHJpY1dpbmRvd1R1bWJsaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50dW1ibGluZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxQcm9wZXJ0aWVzVHlwZU1ldHJpYyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGV4cHJlc3Npb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBleHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXhwcmVzc2lvbicpO1xuICB9XG5cbiAgLy8gdmFyaWFibGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZhcmlhYmxlcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHdpbmRvdyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHdpbmRvdygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd3aW5kb3cnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxQcm9wZXJ0aWVzVHlwZU1ldHJpY1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxQcm9wZXJ0aWVzVHlwZU1ldHJpYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBleHByZXNzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4cHJlc3Npb24pLFxuICAgIHZhcmlhYmxlczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVNZXRyaWNWYXJpYWJsZXNUb1RlcnJhZm9ybSkoc3RydWN0IS52YXJpYWJsZXMpLFxuICAgIHdpbmRvdzogZGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbFByb3BlcnRpZXNUeXBlTWV0cmljV2luZG93VG9UZXJyYWZvcm0oc3RydWN0IS53aW5kb3cpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVUcmFuc2Zvcm1WYXJpYWJsZXNWYWx1ZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGhpZXJhcmNoeV9sb2dpY2FsX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGllcmFyY2h5TG9naWNhbElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaGllcmFyY2h5X2xvZ2ljYWxfaWQnKTtcbiAgfVxuXG4gIC8vIHByb3BlcnR5X2xvZ2ljYWxfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9wZXJ0eUxvZ2ljYWxJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3BlcnR5X2xvZ2ljYWxfaWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbFByb3BlcnRpZXNUeXBlVHJhbnNmb3JtVmFyaWFibGVzVmFsdWVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVUcmFuc2Zvcm1WYXJpYWJsZXNWYWx1ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBoaWVyYXJjaHlfbG9naWNhbF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5oaWVyYXJjaHlMb2dpY2FsSWQpLFxuICAgIHByb3BlcnR5X2xvZ2ljYWxfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvcGVydHlMb2dpY2FsSWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVUcmFuc2Zvcm1WYXJpYWJsZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmFsdWUnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxQcm9wZXJ0aWVzVHlwZVRyYW5zZm9ybVZhcmlhYmxlc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxQcm9wZXJ0aWVzVHlwZVRyYW5zZm9ybVZhcmlhYmxlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZhbHVlOiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVUcmFuc2Zvcm1WYXJpYWJsZXNWYWx1ZVRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVUcmFuc2Zvcm0gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBleHByZXNzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4cHJlc3Npb24nKTtcbiAgfVxuXG4gIC8vIHZhcmlhYmxlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2YXJpYWJsZXMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxQcm9wZXJ0aWVzVHlwZVRyYW5zZm9ybVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxQcm9wZXJ0aWVzVHlwZVRyYW5zZm9ybSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBleHByZXNzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4cHJlc3Npb24pLFxuICAgIHZhcmlhYmxlczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVUcmFuc2Zvcm1WYXJpYWJsZXNUb1RlcnJhZm9ybSkoc3RydWN0IS52YXJpYWJsZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhdHRyaWJ1dGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdHRyaWJ1dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXR0cmlidXRlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbWV0cmljIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWV0cmljKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21ldHJpYycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRyYW5zZm9ybSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0cmFuc2Zvcm0nKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0eXBlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0eXBlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGVfbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXR0cmlidXRlOiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVBdHRyaWJ1dGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmF0dHJpYnV0ZSksXG4gICAgbWV0cmljOiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVNZXRyaWNUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpYyksXG4gICAgdHJhbnNmb3JtOiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVUcmFuc2Zvcm1Ub1RlcnJhZm9ybShzdHJ1Y3QhLnRyYW5zZm9ybSksXG4gICAgdHlwZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGVOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsQXNzZXRNb2RlbFByb3BlcnRpZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFfdHlwZScpO1xuICB9XG5cbiAgLy8gZGF0YV90eXBlX3NwZWMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhVHlwZVNwZWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3R5cGVfc3BlYycpO1xuICB9XG5cbiAgLy8gbG9naWNhbF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvZ2ljYWxJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ2ljYWxfaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndHlwZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1bml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndW5pdCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbEFzc2V0TW9kZWxQcm9wZXJ0aWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGFfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhVHlwZSksXG4gICAgZGF0YV90eXBlX3NwZWM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YVR5cGVTcGVjKSxcbiAgICBsb2dpY2FsX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ2ljYWxJZCksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB0eXBlOiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxBc3NldE1vZGVsUHJvcGVydGllc1R5cGVUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbFRhZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90c2l0ZXdpc2VBc3NldE1vZGVsVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9pb3RzaXRld2lzZV9hc3NldF9tb2RlbC5odG1sIGF3c2NjX2lvdHNpdGV3aXNlX2Fzc2V0X21vZGVsfVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWwgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2lvdHNpdGV3aXNlX2Fzc2V0X21vZGVsXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2lvdHNpdGV3aXNlX2Fzc2V0X21vZGVsLmh0bWwgYXdzY2NfaW90c2l0ZXdpc2VfYXNzZXRfbW9kZWx9IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY0lvdHNpdGV3aXNlQXNzZXRNb2RlbENvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzY2NJb3RzaXRld2lzZUFzc2V0TW9kZWxDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX2lvdHNpdGV3aXNlX2Fzc2V0X21vZGVsJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFzc2V0X21vZGVsX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFzc2V0TW9kZWxBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhc3NldF9tb2RlbF9hcm4nKTtcbiAgfVxuXG4gIC8vIGFzc2V0X21vZGVsX2NvbXBvc2l0ZV9tb2RlbHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhc3NldE1vZGVsQ29tcG9zaXRlTW9kZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Fzc2V0X21vZGVsX2NvbXBvc2l0ZV9tb2RlbHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBhc3NldF9tb2RlbF9kZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFzc2V0TW9kZWxEZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Fzc2V0X21vZGVsX2Rlc2NyaXB0aW9uJyk7XG4gIH1cblxuICAvLyBhc3NldF9tb2RlbF9oaWVyYXJjaGllcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFzc2V0TW9kZWxIaWVyYXJjaGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhc3NldF9tb2RlbF9oaWVyYXJjaGllcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGFzc2V0X21vZGVsX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXNzZXRNb2RlbElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXNzZXRfbW9kZWxfaWQnKTtcbiAgfVxuXG4gIC8vIGFzc2V0X21vZGVsX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhc3NldE1vZGVsTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Fzc2V0X21vZGVsX25hbWUnKTtcbiAgfVxuXG4gIC8vIGFzc2V0X21vZGVsX3Byb3BlcnRpZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhc3NldE1vZGVsUHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhc3NldF9tb2RlbF9wcm9wZXJ0aWVzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxufVxuIl19