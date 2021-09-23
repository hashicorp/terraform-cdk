// https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset_model.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotsitewiseAssetModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset_model.html#id DataAwsccIotsitewiseAssetModel#id}
  */
  readonly id: string;
}
export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute extends cdktf.ComplexComputedList {

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue extends cdktf.ComplexComputedList {

  // hierarchy_logical_id - computed: true, optional: false, required: false
  public get hierarchyLogicalId() {
    return this.getStringAttribute('hierarchy_logical_id');
  }

  // property_logical_id - computed: true, optional: false, required: false
  public get propertyLogicalId() {
    return this.getStringAttribute('property_logical_id');
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hierarchy_logical_id: cdktf.stringToTerraform(struct!.hierarchyLogicalId),
    property_logical_id: cdktf.stringToTerraform(struct!.propertyLogicalId),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.interpolationForAttribute('value') as any;
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueToTerraform(struct!.value),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling extends cdktf.ComplexComputedList {

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getStringAttribute('offset');
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    offset: cdktf.stringToTerraform(struct!.offset),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow extends cdktf.ComplexComputedList {

  // tumbling - computed: true, optional: false, required: false
  public get tumbling() {
    return this.interpolationForAttribute('tumbling') as any;
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tumbling: dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingToTerraform(struct!.tumbling),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric extends cdktf.ComplexComputedList {

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // variables - computed: true, optional: false, required: false
  public get variables() {
    return this.interpolationForAttribute('variables') as any;
  }

  // window - computed: true, optional: false, required: false
  public get window() {
    return this.interpolationForAttribute('window') as any;
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    variables: cdktf.listMapper(dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesToTerraform)(struct!.variables),
    window: dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowToTerraform(struct!.window),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue extends cdktf.ComplexComputedList {

  // hierarchy_logical_id - computed: true, optional: false, required: false
  public get hierarchyLogicalId() {
    return this.getStringAttribute('hierarchy_logical_id');
  }

  // property_logical_id - computed: true, optional: false, required: false
  public get propertyLogicalId() {
    return this.getStringAttribute('property_logical_id');
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hierarchy_logical_id: cdktf.stringToTerraform(struct!.hierarchyLogicalId),
    property_logical_id: cdktf.stringToTerraform(struct!.propertyLogicalId),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.interpolationForAttribute('value') as any;
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueToTerraform(struct!.value),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform extends cdktf.ComplexComputedList {

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // variables - computed: true, optional: false, required: false
  public get variables() {
    return this.interpolationForAttribute('variables') as any;
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    variables: cdktf.listMapper(dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesToTerraform)(struct!.variables),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType extends cdktf.ComplexComputedList {

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.interpolationForAttribute('attribute') as any;
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.interpolationForAttribute('metric') as any;
  }

  // transform - computed: true, optional: false, required: false
  public get transform() {
    return this.interpolationForAttribute('transform') as any;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute: dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeToTerraform(struct!.attribute),
    metric: dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricToTerraform(struct!.metric),
    transform: dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformToTerraform(struct!.transform),
    type_name: cdktf.stringToTerraform(struct!.typeName),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties extends cdktf.ComplexComputedList {

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // data_type_spec - computed: true, optional: false, required: false
  public get dataTypeSpec() {
    return this.getStringAttribute('data_type_spec');
  }

  // logical_id - computed: true, optional: false, required: false
  public get logicalId() {
    return this.getStringAttribute('logical_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.interpolationForAttribute('type') as any;
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    data_type_spec: cdktf.stringToTerraform(struct!.dataTypeSpec),
    logical_id: cdktf.stringToTerraform(struct!.logicalId),
    name: cdktf.stringToTerraform(struct!.name),
    type: dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeToTerraform(struct!.type),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelCompositeModels extends cdktf.ComplexComputedList {

  // composite_model_properties - computed: true, optional: false, required: false
  public get compositeModelProperties() {
    return this.interpolationForAttribute('composite_model_properties') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelCompositeModels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    composite_model_properties: cdktf.listMapper(dataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesToTerraform)(struct!.compositeModelProperties),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelHierarchies extends cdktf.ComplexComputedList {

  // child_asset_model_id - computed: true, optional: false, required: false
  public get childAssetModelId() {
    return this.getStringAttribute('child_asset_model_id');
  }

  // logical_id - computed: true, optional: false, required: false
  public get logicalId() {
    return this.getStringAttribute('logical_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelHierarchiesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelHierarchies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    child_asset_model_id: cdktf.stringToTerraform(struct!.childAssetModelId),
    logical_id: cdktf.stringToTerraform(struct!.logicalId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute extends cdktf.ComplexComputedList {

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue extends cdktf.ComplexComputedList {

  // hierarchy_logical_id - computed: true, optional: false, required: false
  public get hierarchyLogicalId() {
    return this.getStringAttribute('hierarchy_logical_id');
  }

  // property_logical_id - computed: true, optional: false, required: false
  public get propertyLogicalId() {
    return this.getStringAttribute('property_logical_id');
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hierarchy_logical_id: cdktf.stringToTerraform(struct!.hierarchyLogicalId),
    property_logical_id: cdktf.stringToTerraform(struct!.propertyLogicalId),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.interpolationForAttribute('value') as any;
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueToTerraform(struct!.value),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling extends cdktf.ComplexComputedList {

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getStringAttribute('offset');
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    offset: cdktf.stringToTerraform(struct!.offset),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow extends cdktf.ComplexComputedList {

  // tumbling - computed: true, optional: false, required: false
  public get tumbling() {
    return this.interpolationForAttribute('tumbling') as any;
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tumbling: dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingToTerraform(struct!.tumbling),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric extends cdktf.ComplexComputedList {

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // variables - computed: true, optional: false, required: false
  public get variables() {
    return this.interpolationForAttribute('variables') as any;
  }

  // window - computed: true, optional: false, required: false
  public get window() {
    return this.interpolationForAttribute('window') as any;
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    variables: cdktf.listMapper(dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesToTerraform)(struct!.variables),
    window: dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowToTerraform(struct!.window),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue extends cdktf.ComplexComputedList {

  // hierarchy_logical_id - computed: true, optional: false, required: false
  public get hierarchyLogicalId() {
    return this.getStringAttribute('hierarchy_logical_id');
  }

  // property_logical_id - computed: true, optional: false, required: false
  public get propertyLogicalId() {
    return this.getStringAttribute('property_logical_id');
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hierarchy_logical_id: cdktf.stringToTerraform(struct!.hierarchyLogicalId),
    property_logical_id: cdktf.stringToTerraform(struct!.propertyLogicalId),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.interpolationForAttribute('value') as any;
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueToTerraform(struct!.value),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform extends cdktf.ComplexComputedList {

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // variables - computed: true, optional: false, required: false
  public get variables() {
    return this.interpolationForAttribute('variables') as any;
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    variables: cdktf.listMapper(dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesToTerraform)(struct!.variables),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelPropertiesType extends cdktf.ComplexComputedList {

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.interpolationForAttribute('attribute') as any;
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.interpolationForAttribute('metric') as any;
  }

  // transform - computed: true, optional: false, required: false
  public get transform() {
    return this.interpolationForAttribute('transform') as any;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelPropertiesType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute: dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeToTerraform(struct!.attribute),
    metric: dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricToTerraform(struct!.metric),
    transform: dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformToTerraform(struct!.transform),
    type_name: cdktf.stringToTerraform(struct!.typeName),
  }
}

export class DataAwsccIotsitewiseAssetModelAssetModelProperties extends cdktf.ComplexComputedList {

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // data_type_spec - computed: true, optional: false, required: false
  public get dataTypeSpec() {
    return this.getStringAttribute('data_type_spec');
  }

  // logical_id - computed: true, optional: false, required: false
  public get logicalId() {
    return this.getStringAttribute('logical_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.interpolationForAttribute('type') as any;
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export function dataAwsccIotsitewiseAssetModelAssetModelPropertiesToTerraform(struct?: DataAwsccIotsitewiseAssetModelAssetModelProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    data_type_spec: cdktf.stringToTerraform(struct!.dataTypeSpec),
    logical_id: cdktf.stringToTerraform(struct!.logicalId),
    name: cdktf.stringToTerraform(struct!.name),
    type: dataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeToTerraform(struct!.type),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}

export class DataAwsccIotsitewiseAssetModelTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotsitewiseAssetModelTagsToTerraform(struct?: DataAwsccIotsitewiseAssetModelTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_asset_model.html awscc_iotsitewise_asset_model}
*/
export class DataAwsccIotsitewiseAssetModel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotsitewise_asset_model";

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
  public constructor(scope: Construct, id: string, config: DataAwsccIotsitewiseAssetModelConfig) {
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
  public get assetModelArn() {
    return this.getStringAttribute('asset_model_arn');
  }

  // asset_model_composite_models - computed: true, optional: false, required: false
  public get assetModelCompositeModels() {
    return this.interpolationForAttribute('asset_model_composite_models') as any;
  }

  // asset_model_description - computed: true, optional: false, required: false
  public get assetModelDescription() {
    return this.getStringAttribute('asset_model_description');
  }

  // asset_model_hierarchies - computed: true, optional: false, required: false
  public get assetModelHierarchies() {
    return this.interpolationForAttribute('asset_model_hierarchies') as any;
  }

  // asset_model_id - computed: true, optional: false, required: false
  public get assetModelId() {
    return this.getStringAttribute('asset_model_id');
  }

  // asset_model_name - computed: true, optional: false, required: false
  public get assetModelName() {
    return this.getStringAttribute('asset_model_name');
  }

  // asset_model_properties - computed: true, optional: false, required: false
  public get assetModelProperties() {
    return this.interpolationForAttribute('asset_model_properties') as any;
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

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
