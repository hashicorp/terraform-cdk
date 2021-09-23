// https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
  }
}

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

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hierarchy_logical_id: cdktf.stringToTerraform(struct!.hierarchyLogicalId),
    property_logical_id: cdktf.stringToTerraform(struct!.propertyLogicalId),
  }
}

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

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToTerraform(struct!.value),
  }
}

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

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    offset: cdktf.stringToTerraform(struct!.offset),
  }
}

export interface IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow {
  /**
  * Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#tumbling IotsitewiseAssetModel#tumbling}
  */
  readonly tumbling?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling;
}

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tumbling: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToTerraform(struct!.tumbling),
  }
}

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

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    variables: cdktf.listMapper(iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToTerraform)(struct!.variables),
    window: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToTerraform(struct!.window),
  }
}

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

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hierarchy_logical_id: cdktf.stringToTerraform(struct!.hierarchyLogicalId),
    property_logical_id: cdktf.stringToTerraform(struct!.propertyLogicalId),
  }
}

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

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToTerraform(struct!.value),
  }
}

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

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    variables: cdktf.listMapper(iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToTerraform)(struct!.variables),
  }
}

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

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToTerraform(struct!.attribute),
    metric: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToTerraform(struct!.metric),
    transform: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToTerraform(struct!.transform),
    type_name: cdktf.stringToTerraform(struct!.typeName),
  }
}

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

export function iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    data_type_spec: cdktf.stringToTerraform(struct!.dataTypeSpec),
    logical_id: cdktf.stringToTerraform(struct!.logicalId),
    name: cdktf.stringToTerraform(struct!.name),
    type: iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToTerraform(struct!.type),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}

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

export function iotsitewiseAssetModelAssetModelCompositeModelsToTerraform(struct?: IotsitewiseAssetModelAssetModelCompositeModels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    composite_model_properties: cdktf.listMapper(iotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToTerraform)(struct!.compositeModelProperties),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

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

export function iotsitewiseAssetModelAssetModelHierarchiesToTerraform(struct?: IotsitewiseAssetModelAssetModelHierarchies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    child_asset_model_id: cdktf.stringToTerraform(struct!.childAssetModelId),
    logical_id: cdktf.stringToTerraform(struct!.logicalId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface IotsitewiseAssetModelAssetModelPropertiesTypeAttribute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#default_value IotsitewiseAssetModel#default_value}
  */
  readonly defaultValue?: string;
}

export function iotsitewiseAssetModelAssetModelPropertiesTypeAttributeToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeAttribute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
  }
}

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

export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hierarchy_logical_id: cdktf.stringToTerraform(struct!.hierarchyLogicalId),
    property_logical_id: cdktf.stringToTerraform(struct!.propertyLogicalId),
  }
}

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

export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToTerraform(struct!.value),
  }
}

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

export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    offset: cdktf.stringToTerraform(struct!.offset),
  }
}

export interface IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow {
  /**
  * Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html#tumbling IotsitewiseAssetModel#tumbling}
  */
  readonly tumbling?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling;
}

export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tumbling: iotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToTerraform(struct!.tumbling),
  }
}

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

export function iotsitewiseAssetModelAssetModelPropertiesTypeMetricToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    variables: cdktf.listMapper(iotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToTerraform)(struct!.variables),
    window: iotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToTerraform(struct!.window),
  }
}

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

export function iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hierarchy_logical_id: cdktf.stringToTerraform(struct!.hierarchyLogicalId),
    property_logical_id: cdktf.stringToTerraform(struct!.propertyLogicalId),
  }
}

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

export function iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToTerraform(struct!.value),
  }
}

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

export function iotsitewiseAssetModelAssetModelPropertiesTypeTransformToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesTypeTransform): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    variables: cdktf.listMapper(iotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToTerraform)(struct!.variables),
  }
}

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

export function iotsitewiseAssetModelAssetModelPropertiesTypeToTerraform(struct?: IotsitewiseAssetModelAssetModelPropertiesType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute: iotsitewiseAssetModelAssetModelPropertiesTypeAttributeToTerraform(struct!.attribute),
    metric: iotsitewiseAssetModelAssetModelPropertiesTypeMetricToTerraform(struct!.metric),
    transform: iotsitewiseAssetModelAssetModelPropertiesTypeTransformToTerraform(struct!.transform),
    type_name: cdktf.stringToTerraform(struct!.typeName),
  }
}

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

export function iotsitewiseAssetModelAssetModelPropertiesToTerraform(struct?: IotsitewiseAssetModelAssetModelProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    data_type_spec: cdktf.stringToTerraform(struct!.dataTypeSpec),
    logical_id: cdktf.stringToTerraform(struct!.logicalId),
    name: cdktf.stringToTerraform(struct!.name),
    type: iotsitewiseAssetModelAssetModelPropertiesTypeToTerraform(struct!.type),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}

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

export function iotsitewiseAssetModelTagsToTerraform(struct?: IotsitewiseAssetModelTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html awscc_iotsitewise_asset_model}
*/
export class IotsitewiseAssetModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotsitewise_asset_model";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_asset_model.html awscc_iotsitewise_asset_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotsitewiseAssetModelConfig
  */
  public constructor(scope: Construct, id: string, config: IotsitewiseAssetModelConfig) {
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
    this._assetModelCompositeModels = config.assetModelCompositeModels;
    this._assetModelDescription = config.assetModelDescription;
    this._assetModelHierarchies = config.assetModelHierarchies;
    this._assetModelName = config.assetModelName;
    this._assetModelProperties = config.assetModelProperties;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_model_arn - computed: true, optional: false, required: false
  public get assetModelArn() {
    return this.getStringAttribute('asset_model_arn');
  }

  // asset_model_composite_models - computed: false, optional: true, required: false
  private _assetModelCompositeModels?: IotsitewiseAssetModelAssetModelCompositeModels[];
  public get assetModelCompositeModels() {
    return this.interpolationForAttribute('asset_model_composite_models') as any;
  }
  public set assetModelCompositeModels(value: IotsitewiseAssetModelAssetModelCompositeModels[] ) {
    this._assetModelCompositeModels = value;
  }
  public resetAssetModelCompositeModels() {
    this._assetModelCompositeModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetModelCompositeModelsInput() {
    return this._assetModelCompositeModels
  }

  // asset_model_description - computed: false, optional: true, required: false
  private _assetModelDescription?: string;
  public get assetModelDescription() {
    return this.getStringAttribute('asset_model_description');
  }
  public set assetModelDescription(value: string ) {
    this._assetModelDescription = value;
  }
  public resetAssetModelDescription() {
    this._assetModelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetModelDescriptionInput() {
    return this._assetModelDescription
  }

  // asset_model_hierarchies - computed: false, optional: true, required: false
  private _assetModelHierarchies?: IotsitewiseAssetModelAssetModelHierarchies[];
  public get assetModelHierarchies() {
    return this.interpolationForAttribute('asset_model_hierarchies') as any;
  }
  public set assetModelHierarchies(value: IotsitewiseAssetModelAssetModelHierarchies[] ) {
    this._assetModelHierarchies = value;
  }
  public resetAssetModelHierarchies() {
    this._assetModelHierarchies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetModelHierarchiesInput() {
    return this._assetModelHierarchies
  }

  // asset_model_id - computed: true, optional: false, required: false
  public get assetModelId() {
    return this.getStringAttribute('asset_model_id');
  }

  // asset_model_name - computed: false, optional: false, required: true
  private _assetModelName: string;
  public get assetModelName() {
    return this.getStringAttribute('asset_model_name');
  }
  public set assetModelName(value: string) {
    this._assetModelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetModelNameInput() {
    return this._assetModelName
  }

  // asset_model_properties - computed: false, optional: true, required: false
  private _assetModelProperties?: IotsitewiseAssetModelAssetModelProperties[];
  public get assetModelProperties() {
    return this.interpolationForAttribute('asset_model_properties') as any;
  }
  public set assetModelProperties(value: IotsitewiseAssetModelAssetModelProperties[] ) {
    this._assetModelProperties = value;
  }
  public resetAssetModelProperties() {
    this._assetModelProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetModelPropertiesInput() {
    return this._assetModelProperties
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotsitewiseAssetModelTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotsitewiseAssetModelTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asset_model_composite_models: cdktf.listMapper(iotsitewiseAssetModelAssetModelCompositeModelsToTerraform)(this._assetModelCompositeModels),
      asset_model_description: cdktf.stringToTerraform(this._assetModelDescription),
      asset_model_hierarchies: cdktf.listMapper(iotsitewiseAssetModelAssetModelHierarchiesToTerraform)(this._assetModelHierarchies),
      asset_model_name: cdktf.stringToTerraform(this._assetModelName),
      asset_model_properties: cdktf.listMapper(iotsitewiseAssetModelAssetModelPropertiesToTerraform)(this._assetModelProperties),
      tags: cdktf.listMapper(iotsitewiseAssetModelTagsToTerraform)(this._tags),
    };
  }
}
