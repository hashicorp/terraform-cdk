import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotsitewiseAssetModelConfig extends cdktf.TerraformMetaArguments {
    /**
    * The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#asset_model_composite_models IotsitewiseAssetModel#asset_model_composite_models}
    */
    readonly assetModelCompositeModels?: IotsitewiseAssetModelAssetModelCompositeModels[];
    /**
    * A description for the asset model.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#asset_model_description IotsitewiseAssetModel#asset_model_description}
    */
    readonly assetModelDescription?: string;
    /**
    * The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. You can specify up to 10 hierarchies per asset model.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#asset_model_hierarchies IotsitewiseAssetModel#asset_model_hierarchies}
    */
    readonly assetModelHierarchies?: IotsitewiseAssetModelAssetModelHierarchies[];
    /**
    * A unique, friendly name for the asset model.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#asset_model_name IotsitewiseAssetModel#asset_model_name}
    */
    readonly assetModelName: string;
    /**
    * The property definitions of the asset model. You can specify up to 200 properties per asset model.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#asset_model_properties IotsitewiseAssetModel#asset_model_properties}
    */
    readonly assetModelProperties?: IotsitewiseAssetModelAssetModelProperties[];
    /**
    * A list of key-value pairs that contain metadata for the asset model.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#tags IotsitewiseAssetModel#tags}
    */
    readonly tags?: IotsitewiseAssetModelTags[];
}
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#default_value IotsitewiseAssetModel#default_value}
    */
    readonly defaultValue?: string;
}
export declare function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute): any;
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#hierarchy_logical_id IotsitewiseAssetModel#hierarchy_logical_id}
    */
    readonly hierarchyLogicalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#property_logical_id IotsitewiseAssetModel#property_logical_id}
    */
    readonly propertyLogicalId: string;
}
export declare function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue): any;
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables {
    /**
    * The friendly name of the variable to be used in the expression.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#name IotsitewiseAssetModel#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#value IotsitewiseAssetModel#value}
    */
    readonly value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue;
}
export declare function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables): any;
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling {
    /**
    * The time interval for the tumbling window.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#interval IotsitewiseAssetModel#interval}
    */
    readonly interval: string;
    /**
    * The shift or reference point on timeline for the contiguous time intervals.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#offset IotsitewiseAssetModel#offset}
    */
    readonly offset?: string;
}
export declare function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling): any;
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow {
    /**
    * Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#tumbling IotsitewiseAssetModel#tumbling}
    */
    readonly tumbling?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling;
}
export declare function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow): any;
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric {
    /**
    * The mathematical expression that defines the metric aggregation function. You can specify up to 10 functions per expression.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#expression IotsitewiseAssetModel#expression}
    */
    readonly expression: string;
    /**
    * The list of variables used in the expression.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#variables IotsitewiseAssetModel#variables}
    */
    readonly variables: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables[];
    /**
    * Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#window IotsitewiseAssetModel#window}
    */
    readonly window: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow;
}
export declare function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric): any;
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#hierarchy_logical_id IotsitewiseAssetModel#hierarchy_logical_id}
    */
    readonly hierarchyLogicalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#property_logical_id IotsitewiseAssetModel#property_logical_id}
    */
    readonly propertyLogicalId: string;
}
export declare function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue): any;
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables {
    /**
    * The friendly name of the variable to be used in the expression.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#name IotsitewiseAssetModel#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#value IotsitewiseAssetModel#value}
    */
    readonly value: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue;
}
export declare function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables): any;
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform {
    /**
    * The mathematical expression that defines the transformation function. You can specify up to 10 functions per expression.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#expression IotsitewiseAssetModel#expression}
    */
    readonly expression: string;
    /**
    * The list of variables used in the expression.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#variables IotsitewiseAssetModel#variables}
    */
    readonly variables: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables[];
}
export declare function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform): any;
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#attribute IotsitewiseAssetModel#attribute}
    */
    readonly attribute?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#metric IotsitewiseAssetModel#metric}
    */
    readonly metric?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#transform IotsitewiseAssetModel#transform}
    */
    readonly transform?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#type_name IotsitewiseAssetModel#type_name}
    */
    readonly typeName: string;
}
export declare function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType): any;
export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#data_type IotsitewiseAssetModel#data_type}
    */
    readonly dataType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#data_type_spec IotsitewiseAssetModel#data_type_spec}
    */
    readonly dataTypeSpec?: string;
    /**
    * Customer provided ID for property.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#logical_id IotsitewiseAssetModel#logical_id}
    */
    readonly logicalId: string;
    /**
    * The name of the asset model property.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#name IotsitewiseAssetModel#name}
    */
    readonly name: string;
    /**
    * Contains a property type, which can be one of attribute, measurement, metric, or transform.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#type IotsitewiseAssetModel#type}
    */
    readonly type: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType;
    /**
    * The unit of the asset model property, such as Newtons or RPM.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#unit IotsitewiseAssetModel#unit}
    */
    readonly unit?: string;
}
export declare function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties): any;
export interface IotsitewiseAssetModelAssetModelCompositeModels {
    /**
    * The property definitions of the asset model. You can specify up to 200 properties per asset model.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#composite_model_properties IotsitewiseAssetModel#composite_model_properties}
    */
    readonly compositeModelProperties?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties[];
    /**
    * A description for the asset composite model.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#description IotsitewiseAssetModel#description}
    */
    readonly description?: string;
    /**
    * A unique, friendly name for the asset composite model.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#name IotsitewiseAssetModel#name}
    */
    readonly name: string;
    /**
    * The type of the composite model. For alarm composite models, this type is AWS/ALARM
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#type IotsitewiseAssetModel#type}
    */
    readonly type: string;
}
export declare function iotsitewiseAssetModelAssetModelCompositeModelsToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModels): any;
export interface IotsitewiseAssetModelAssetModelHierarchies {
    /**
    * The ID of the asset model. All assets in this hierarchy must be instances of the child AssetModelId asset model.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#child_asset_model_id IotsitewiseAssetModel#child_asset_model_id}
    */
    readonly childAssetModelId: string;
    /**
    * Customer provided ID for hierarchy.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#logical_id IotsitewiseAssetModel#logical_id}
    */
    readonly logicalId: string;
    /**
    * The name of the asset model hierarchy.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#name IotsitewiseAssetModel#name}
    */
    readonly name: string;
}
export declare function iotsitewiseAssetModelAssetModelHierarchiesToTerraform(struct?: IotsitewiseAssetModelAssetModelHierarchies): any;
export interface IotsitewiseAssetModelAssetModelPropertiesTypeAttribute {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#default_value IotsitewiseAssetModel#default_value}
    */
    readonly defaultValue?: string;
}
export declare function iotsitewiseAssetModelAssetModelPropertiesTypeAttributeToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeAttribute): any;
export interface IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#hierarchy_logical_id IotsitewiseAssetModel#hierarchy_logical_id}
    */
    readonly hierarchyLogicalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#property_logical_id IotsitewiseAssetModel#property_logical_id}
    */
    readonly propertyLogicalId: string;
}
export declare function iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue): any;
export interface IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables {
    /**
    * The friendly name of the variable to be used in the expression.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#name IotsitewiseAssetModel#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#value IotsitewiseAssetModel#value}
    */
    readonly value: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue;
}
export declare function iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables): any;
export interface IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling {
    /**
    * The time interval for the tumbling window.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#interval IotsitewiseAssetModel#interval}
    */
    readonly interval: string;
    /**
    * The shift or reference point on timeline for the contiguous time intervals.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#offset IotsitewiseAssetModel#offset}
    */
    readonly offset?: string;
}
export declare function iotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling): any;
export interface IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow {
    /**
    * Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#tumbling IotsitewiseAssetModel#tumbling}
    */
    readonly tumbling?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling;
}
export declare function iotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow): any;
export interface IotsitewiseAssetModelAssetModelPropertiesTypeMetric {
    /**
    * The mathematical expression that defines the metric aggregation function. You can specify up to 10 functions per expression.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#expression IotsitewiseAssetModel#expression}
    */
    readonly expression: string;
    /**
    * The list of variables used in the expression.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#variables IotsitewiseAssetModel#variables}
    */
    readonly variables: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables[];
    /**
    * Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#window IotsitewiseAssetModel#window}
    */
    readonly window: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow;
}
export declare function iotsitewiseAssetModelAssetModelPropertiesTypeMetricToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetric): any;
export interface IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#hierarchy_logical_id IotsitewiseAssetModel#hierarchy_logical_id}
    */
    readonly hierarchyLogicalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#property_logical_id IotsitewiseAssetModel#property_logical_id}
    */
    readonly propertyLogicalId: string;
}
export declare function iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue): any;
export interface IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables {
    /**
    * The friendly name of the variable to be used in the expression.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#name IotsitewiseAssetModel#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#value IotsitewiseAssetModel#value}
    */
    readonly value: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue;
}
export declare function iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables): any;
export interface IotsitewiseAssetModelAssetModelPropertiesTypeTransform {
    /**
    * The mathematical expression that defines the transformation function. You can specify up to 10 functions per expression.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#expression IotsitewiseAssetModel#expression}
    */
    readonly expression: string;
    /**
    * The list of variables used in the expression.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#variables IotsitewiseAssetModel#variables}
    */
    readonly variables: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables[];
}
export declare function iotsitewiseAssetModelAssetModelPropertiesTypeTransformToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeTransform): any;
export interface IotsitewiseAssetModelAssetModelPropertiesType {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#attribute IotsitewiseAssetModel#attribute}
    */
    readonly attribute?: IotsitewiseAssetModelAssetModelPropertiesTypeAttribute;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#metric IotsitewiseAssetModel#metric}
    */
    readonly metric?: IotsitewiseAssetModelAssetModelPropertiesTypeMetric;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#transform IotsitewiseAssetModel#transform}
    */
    readonly transform?: IotsitewiseAssetModelAssetModelPropertiesTypeTransform;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#type_name IotsitewiseAssetModel#type_name}
    */
    readonly typeName: string;
}
export declare function iotsitewiseAssetModelAssetModelPropertiesTypeToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesType): any;
export interface IotsitewiseAssetModelAssetModelProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#data_type IotsitewiseAssetModel#data_type}
    */
    readonly dataType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#data_type_spec IotsitewiseAssetModel#data_type_spec}
    */
    readonly dataTypeSpec?: string;
    /**
    * Customer provided ID for property.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#logical_id IotsitewiseAssetModel#logical_id}
    */
    readonly logicalId: string;
    /**
    * The name of the asset model property.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#name IotsitewiseAssetModel#name}
    */
    readonly name: string;
    /**
    * Contains a property type, which can be one of attribute, measurement, metric, or transform.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#type IotsitewiseAssetModel#type}
    */
    readonly type: IotsitewiseAssetModelAssetModelPropertiesType;
    /**
    * The unit of the asset model property, such as Newtons or RPM.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#unit IotsitewiseAssetModel#unit}
    */
    readonly unit?: string;
}
export declare function iotsitewiseAssetModelAssetModelPropertiesToTerraform(struct?: IotsitewiseAssetModelAssetModelProperties): any;
export interface IotsitewiseAssetModelTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#key IotsitewiseAssetModel#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#value IotsitewiseAssetModel#value}
    */
    readonly value: string;
}
export declare function iotsitewiseAssetModelTagsToTerraform(struct?: IotsitewiseAssetModelTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html awscc_iotsitewise_asset_model}
*/
export declare class IotsitewiseAssetModel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html awscc_iotsitewise_asset_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotsitewiseAssetModelConfig
    */
    constructor(scope: Construct, id: string, config: IotsitewiseAssetModelConfig);
    get assetModelArn(): string;
    private _assetModelCompositeModels?;
    get assetModelCompositeModels(): IotsitewiseAssetModelAssetModelCompositeModels[];
    set assetModelCompositeModels(value: IotsitewiseAssetModelAssetModelCompositeModels[]);
    resetAssetModelCompositeModels(): void;
    get assetModelCompositeModelsInput(): IotsitewiseAssetModelAssetModelCompositeModels[] | undefined;
    private _assetModelDescription?;
    get assetModelDescription(): string;
    set assetModelDescription(value: string);
    resetAssetModelDescription(): void;
    get assetModelDescriptionInput(): string | undefined;
    private _assetModelHierarchies?;
    get assetModelHierarchies(): IotsitewiseAssetModelAssetModelHierarchies[];
    set assetModelHierarchies(value: IotsitewiseAssetModelAssetModelHierarchies[]);
    resetAssetModelHierarchies(): void;
    get assetModelHierarchiesInput(): IotsitewiseAssetModelAssetModelHierarchies[] | undefined;
    get assetModelId(): string;
    private _assetModelName;
    get assetModelName(): string;
    set assetModelName(value: string);
    get assetModelNameInput(): string;
    private _assetModelProperties?;
    get assetModelProperties(): IotsitewiseAssetModelAssetModelProperties[];
    set assetModelProperties(value: IotsitewiseAssetModelAssetModelProperties[]);
    resetAssetModelProperties(): void;
    get assetModelPropertiesInput(): IotsitewiseAssetModelAssetModelProperties[] | undefined;
    get id(): string;
    private _tags?;
    get tags(): IotsitewiseAssetModelTags[];
    set tags(value: IotsitewiseAssetModelTags[]);
    resetTags(): void;
    get tagsInput(): IotsitewiseAssetModelTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
