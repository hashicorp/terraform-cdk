// https://www.terraform.io/docs/providers/awscc/d/iotevents_detector_model.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIoteventsDetectorModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotevents_detector_model.html#id DataAwsccIoteventsDetectorModel#id}
  */
  readonly id: string;
}
export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimer extends cdktf.ComplexComputedList {

  // timer_name - computed: true, optional: false, required: false
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2Payload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2PayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2Payload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2 extends cdktf.ComplexComputedList {

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2ToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2PayloadToTerraform(struct!.payload),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDb extends cdktf.ComplexComputedList {

  // hash_key_field - computed: true, optional: false, required: false
  public get hashKeyField() {
    return this.getStringAttribute('hash_key_field');
  }

  // hash_key_type - computed: true, optional: false, required: false
  public get hashKeyType() {
    return this.getStringAttribute('hash_key_type');
  }

  // hash_key_value - computed: true, optional: false, required: false
  public get hashKeyValue() {
    return this.getStringAttribute('hash_key_value');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // payload_field - computed: true, optional: false, required: false
  public get payloadField() {
    return this.getStringAttribute('payload_field');
  }

  // range_key_field - computed: true, optional: false, required: false
  public get rangeKeyField() {
    return this.getStringAttribute('range_key_field');
  }

  // range_key_type - computed: true, optional: false, required: false
  public get rangeKeyType() {
    return this.getStringAttribute('range_key_type');
  }

  // range_key_value - computed: true, optional: false, required: false
  public get rangeKeyValue() {
    return this.getStringAttribute('range_key_value');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hash_key_field: cdktf.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktf.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktf.stringToTerraform(struct!.hashKeyValue),
    operation: cdktf.stringToTerraform(struct!.operation),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadToTerraform(struct!.payload),
    payload_field: cdktf.stringToTerraform(struct!.payloadField),
    range_key_field: cdktf.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktf.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktf.stringToTerraform(struct!.rangeKeyValue),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehose extends cdktf.ComplexComputedList {

  // delivery_stream_name - computed: true, optional: false, required: false
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // separator - computed: true, optional: false, required: false
  public get separator() {
    return this.getStringAttribute('separator');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehoseToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadToTerraform(struct!.payload),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEvents extends cdktf.ComplexComputedList {

  // input_name - computed: true, optional: false, required: false
  public get inputName() {
    return this.getStringAttribute('input_name');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input_name: cdktf.stringToTerraform(struct!.inputName),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadToTerraform(struct!.payload),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestamp extends cdktf.ComplexComputedList {

  // offset_in_nanos - computed: true, optional: false, required: false
  public get offsetInNanos() {
    return this.getStringAttribute('offset_in_nanos');
  }

  // time_in_seconds - computed: true, optional: false, required: false
  public get timeInSeconds() {
    return this.getStringAttribute('time_in_seconds');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestamp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    offset_in_nanos: cdktf.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktf.stringToTerraform(struct!.timeInSeconds),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValue extends cdktf.ComplexComputedList {

  // boolean_value - computed: true, optional: false, required: false
  public get booleanValue() {
    return this.getStringAttribute('boolean_value');
  }

  // double_value - computed: true, optional: false, required: false
  public get doubleValue() {
    return this.getStringAttribute('double_value');
  }

  // integer_value - computed: true, optional: false, required: false
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boolean_value: cdktf.stringToTerraform(struct!.booleanValue),
    double_value: cdktf.stringToTerraform(struct!.doubleValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValue extends cdktf.ComplexComputedList {

  // quality - computed: true, optional: false, required: false
  public get quality() {
    return this.getStringAttribute('quality');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.interpolationForAttribute('timestamp') as any;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.interpolationForAttribute('value') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    quality: cdktf.stringToTerraform(struct!.quality),
    timestamp: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct!.timestamp),
    value: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValueToTerraform(struct!.value),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWise extends cdktf.ComplexComputedList {

  // asset_id - computed: true, optional: false, required: false
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }

  // entry_id - computed: true, optional: false, required: false
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }

  // property_alias - computed: true, optional: false, required: false
  public get propertyAlias() {
    return this.getStringAttribute('property_alias');
  }

  // property_id - computed: true, optional: false, required: false
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }

  // property_value - computed: true, optional: false, required: false
  public get propertyValue() {
    return this.interpolationForAttribute('property_value') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWiseToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWise): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asset_id: cdktf.stringToTerraform(struct!.assetId),
    entry_id: cdktf.stringToTerraform(struct!.entryId),
    property_alias: cdktf.stringToTerraform(struct!.propertyAlias),
    property_id: cdktf.stringToTerraform(struct!.propertyId),
    property_value: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueToTerraform(struct!.propertyValue),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublish extends cdktf.ComplexComputedList {

  // mqtt_topic - computed: true, optional: false, required: false
  public get mqttTopic() {
    return this.getStringAttribute('mqtt_topic');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublish): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mqtt_topic: cdktf.stringToTerraform(struct!.mqttTopic),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadToTerraform(struct!.payload),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambda extends cdktf.ComplexComputedList {

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadToTerraform(struct!.payload),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer extends cdktf.ComplexComputedList {

  // timer_name - computed: true, optional: false, required: false
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimer extends cdktf.ComplexComputedList {

  // duration_expression - computed: true, optional: false, required: false
  public get durationExpression() {
    return this.getStringAttribute('duration_expression');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }

  // timer_name - computed: true, optional: false, required: false
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_expression: cdktf.stringToTerraform(struct!.durationExpression),
    seconds: cdktf.numberToTerraform(struct!.seconds),
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariable extends cdktf.ComplexComputedList {

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // variable_name - computed: true, optional: false, required: false
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariableToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSns extends cdktf.ComplexComputedList {

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadToTerraform(struct!.payload),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqs extends cdktf.ComplexComputedList {

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // queue_url - computed: true, optional: false, required: false
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }

  // use_base_64 - computed: true, optional: false, required: false
  public get useBase64() {
    return this.getBooleanAttribute('use_base_64');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadToTerraform(struct!.payload),
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    use_base_64: cdktf.booleanToTerraform(struct!.useBase64),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActions extends cdktf.ComplexComputedList {

  // clear_timer - computed: true, optional: false, required: false
  public get clearTimer() {
    return this.interpolationForAttribute('clear_timer') as any;
  }

  // dynamo_d_bv_2 - computed: true, optional: false, required: false
  public get dynamoDBv2() {
    return this.interpolationForAttribute('dynamo_d_bv_2') as any;
  }

  // dynamo_db - computed: true, optional: false, required: false
  public get dynamoDb() {
    return this.interpolationForAttribute('dynamo_db') as any;
  }

  // firehose - computed: true, optional: false, required: false
  public get firehose() {
    return this.interpolationForAttribute('firehose') as any;
  }

  // iot_events - computed: true, optional: false, required: false
  public get iotEvents() {
    return this.interpolationForAttribute('iot_events') as any;
  }

  // iot_site_wise - computed: true, optional: false, required: false
  public get iotSiteWise() {
    return this.interpolationForAttribute('iot_site_wise') as any;
  }

  // iot_topic_publish - computed: true, optional: false, required: false
  public get iotTopicPublish() {
    return this.interpolationForAttribute('iot_topic_publish') as any;
  }

  // lambda - computed: true, optional: false, required: false
  public get lambda() {
    return this.interpolationForAttribute('lambda') as any;
  }

  // reset_timer - computed: true, optional: false, required: false
  public get resetTimer() {
    return this.interpolationForAttribute('reset_timer') as any;
  }

  // set_timer - computed: true, optional: false, required: false
  public get setTimer() {
    return this.interpolationForAttribute('set_timer') as any;
  }

  // set_variable - computed: true, optional: false, required: false
  public get setVariable() {
    return this.interpolationForAttribute('set_variable') as any;
  }

  // sns - computed: true, optional: false, required: false
  public get sns() {
    return this.interpolationForAttribute('sns') as any;
  }

  // sqs - computed: true, optional: false, required: false
  public get sqs() {
    return this.interpolationForAttribute('sqs') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    clear_timer: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimerToTerraform(struct!.clearTimer),
    dynamo_d_bv_2: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbToTerraform(struct!.dynamoDb),
    firehose: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehoseToTerraform(struct!.firehose),
    iot_events: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWiseToTerraform(struct!.iotSiteWise),
    iot_topic_publish: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishToTerraform(struct!.iotTopicPublish),
    lambda: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaToTerraform(struct!.lambda),
    reset_timer: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimerToTerraform(struct!.resetTimer),
    set_timer: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimerToTerraform(struct!.setTimer),
    set_variable: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariableToTerraform(struct!.setVariable),
    sns: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsToTerraform(struct!.sns),
    sqs: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsToTerraform(struct!.sqs),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents extends cdktf.ComplexComputedList {

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.interpolationForAttribute('actions') as any;
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsToTerraform)(struct!.actions),
    condition: cdktf.stringToTerraform(struct!.condition),
    event_name: cdktf.stringToTerraform(struct!.eventName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnter extends cdktf.ComplexComputedList {

  // events - computed: true, optional: false, required: false
  public get events() {
    return this.interpolationForAttribute('events') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    events: cdktf.listMapper(dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsToTerraform)(struct!.events),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer extends cdktf.ComplexComputedList {

  // timer_name - computed: true, optional: false, required: false
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Payload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Payload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2 extends cdktf.ComplexComputedList {

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2ToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadToTerraform(struct!.payload),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDb extends cdktf.ComplexComputedList {

  // hash_key_field - computed: true, optional: false, required: false
  public get hashKeyField() {
    return this.getStringAttribute('hash_key_field');
  }

  // hash_key_type - computed: true, optional: false, required: false
  public get hashKeyType() {
    return this.getStringAttribute('hash_key_type');
  }

  // hash_key_value - computed: true, optional: false, required: false
  public get hashKeyValue() {
    return this.getStringAttribute('hash_key_value');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // payload_field - computed: true, optional: false, required: false
  public get payloadField() {
    return this.getStringAttribute('payload_field');
  }

  // range_key_field - computed: true, optional: false, required: false
  public get rangeKeyField() {
    return this.getStringAttribute('range_key_field');
  }

  // range_key_type - computed: true, optional: false, required: false
  public get rangeKeyType() {
    return this.getStringAttribute('range_key_type');
  }

  // range_key_value - computed: true, optional: false, required: false
  public get rangeKeyValue() {
    return this.getStringAttribute('range_key_value');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hash_key_field: cdktf.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktf.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktf.stringToTerraform(struct!.hashKeyValue),
    operation: cdktf.stringToTerraform(struct!.operation),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadToTerraform(struct!.payload),
    payload_field: cdktf.stringToTerraform(struct!.payloadField),
    range_key_field: cdktf.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktf.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktf.stringToTerraform(struct!.rangeKeyValue),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehose extends cdktf.ComplexComputedList {

  // delivery_stream_name - computed: true, optional: false, required: false
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // separator - computed: true, optional: false, required: false
  public get separator() {
    return this.getStringAttribute('separator');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehoseToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadToTerraform(struct!.payload),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEvents extends cdktf.ComplexComputedList {

  // input_name - computed: true, optional: false, required: false
  public get inputName() {
    return this.getStringAttribute('input_name');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input_name: cdktf.stringToTerraform(struct!.inputName),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadToTerraform(struct!.payload),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestamp extends cdktf.ComplexComputedList {

  // offset_in_nanos - computed: true, optional: false, required: false
  public get offsetInNanos() {
    return this.getStringAttribute('offset_in_nanos');
  }

  // time_in_seconds - computed: true, optional: false, required: false
  public get timeInSeconds() {
    return this.getStringAttribute('time_in_seconds');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestamp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    offset_in_nanos: cdktf.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktf.stringToTerraform(struct!.timeInSeconds),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValue extends cdktf.ComplexComputedList {

  // boolean_value - computed: true, optional: false, required: false
  public get booleanValue() {
    return this.getStringAttribute('boolean_value');
  }

  // double_value - computed: true, optional: false, required: false
  public get doubleValue() {
    return this.getStringAttribute('double_value');
  }

  // integer_value - computed: true, optional: false, required: false
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boolean_value: cdktf.stringToTerraform(struct!.booleanValue),
    double_value: cdktf.stringToTerraform(struct!.doubleValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValue extends cdktf.ComplexComputedList {

  // quality - computed: true, optional: false, required: false
  public get quality() {
    return this.getStringAttribute('quality');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.interpolationForAttribute('timestamp') as any;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.interpolationForAttribute('value') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    quality: cdktf.stringToTerraform(struct!.quality),
    timestamp: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct!.timestamp),
    value: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueToTerraform(struct!.value),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWise extends cdktf.ComplexComputedList {

  // asset_id - computed: true, optional: false, required: false
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }

  // entry_id - computed: true, optional: false, required: false
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }

  // property_alias - computed: true, optional: false, required: false
  public get propertyAlias() {
    return this.getStringAttribute('property_alias');
  }

  // property_id - computed: true, optional: false, required: false
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }

  // property_value - computed: true, optional: false, required: false
  public get propertyValue() {
    return this.interpolationForAttribute('property_value') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWise): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asset_id: cdktf.stringToTerraform(struct!.assetId),
    entry_id: cdktf.stringToTerraform(struct!.entryId),
    property_alias: cdktf.stringToTerraform(struct!.propertyAlias),
    property_id: cdktf.stringToTerraform(struct!.propertyId),
    property_value: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueToTerraform(struct!.propertyValue),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublish extends cdktf.ComplexComputedList {

  // mqtt_topic - computed: true, optional: false, required: false
  public get mqttTopic() {
    return this.getStringAttribute('mqtt_topic');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublish): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mqtt_topic: cdktf.stringToTerraform(struct!.mqttTopic),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadToTerraform(struct!.payload),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambda extends cdktf.ComplexComputedList {

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadToTerraform(struct!.payload),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer extends cdktf.ComplexComputedList {

  // timer_name - computed: true, optional: false, required: false
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimer extends cdktf.ComplexComputedList {

  // duration_expression - computed: true, optional: false, required: false
  public get durationExpression() {
    return this.getStringAttribute('duration_expression');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }

  // timer_name - computed: true, optional: false, required: false
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_expression: cdktf.stringToTerraform(struct!.durationExpression),
    seconds: cdktf.numberToTerraform(struct!.seconds),
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariable extends cdktf.ComplexComputedList {

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // variable_name - computed: true, optional: false, required: false
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariableToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSns extends cdktf.ComplexComputedList {

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadToTerraform(struct!.payload),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqs extends cdktf.ComplexComputedList {

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // queue_url - computed: true, optional: false, required: false
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }

  // use_base_64 - computed: true, optional: false, required: false
  public get useBase64() {
    return this.getBooleanAttribute('use_base_64');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadToTerraform(struct!.payload),
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    use_base_64: cdktf.booleanToTerraform(struct!.useBase64),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActions extends cdktf.ComplexComputedList {

  // clear_timer - computed: true, optional: false, required: false
  public get clearTimer() {
    return this.interpolationForAttribute('clear_timer') as any;
  }

  // dynamo_d_bv_2 - computed: true, optional: false, required: false
  public get dynamoDBv2() {
    return this.interpolationForAttribute('dynamo_d_bv_2') as any;
  }

  // dynamo_db - computed: true, optional: false, required: false
  public get dynamoDb() {
    return this.interpolationForAttribute('dynamo_db') as any;
  }

  // firehose - computed: true, optional: false, required: false
  public get firehose() {
    return this.interpolationForAttribute('firehose') as any;
  }

  // iot_events - computed: true, optional: false, required: false
  public get iotEvents() {
    return this.interpolationForAttribute('iot_events') as any;
  }

  // iot_site_wise - computed: true, optional: false, required: false
  public get iotSiteWise() {
    return this.interpolationForAttribute('iot_site_wise') as any;
  }

  // iot_topic_publish - computed: true, optional: false, required: false
  public get iotTopicPublish() {
    return this.interpolationForAttribute('iot_topic_publish') as any;
  }

  // lambda - computed: true, optional: false, required: false
  public get lambda() {
    return this.interpolationForAttribute('lambda') as any;
  }

  // reset_timer - computed: true, optional: false, required: false
  public get resetTimer() {
    return this.interpolationForAttribute('reset_timer') as any;
  }

  // set_timer - computed: true, optional: false, required: false
  public get setTimer() {
    return this.interpolationForAttribute('set_timer') as any;
  }

  // set_variable - computed: true, optional: false, required: false
  public get setVariable() {
    return this.interpolationForAttribute('set_variable') as any;
  }

  // sns - computed: true, optional: false, required: false
  public get sns() {
    return this.interpolationForAttribute('sns') as any;
  }

  // sqs - computed: true, optional: false, required: false
  public get sqs() {
    return this.interpolationForAttribute('sqs') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    clear_timer: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimerToTerraform(struct!.clearTimer),
    dynamo_d_bv_2: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbToTerraform(struct!.dynamoDb),
    firehose: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehoseToTerraform(struct!.firehose),
    iot_events: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseToTerraform(struct!.iotSiteWise),
    iot_topic_publish: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishToTerraform(struct!.iotTopicPublish),
    lambda: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaToTerraform(struct!.lambda),
    reset_timer: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimerToTerraform(struct!.resetTimer),
    set_timer: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimerToTerraform(struct!.setTimer),
    set_variable: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariableToTerraform(struct!.setVariable),
    sns: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsToTerraform(struct!.sns),
    sqs: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsToTerraform(struct!.sqs),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents extends cdktf.ComplexComputedList {

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.interpolationForAttribute('actions') as any;
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsToTerraform)(struct!.actions),
    condition: cdktf.stringToTerraform(struct!.condition),
    event_name: cdktf.stringToTerraform(struct!.eventName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExit extends cdktf.ComplexComputedList {

  // events - computed: true, optional: false, required: false
  public get events() {
    return this.interpolationForAttribute('events') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExit): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    events: cdktf.listMapper(dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsToTerraform)(struct!.events),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer extends cdktf.ComplexComputedList {

  // timer_name - computed: true, optional: false, required: false
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Payload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Payload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2 extends cdktf.ComplexComputedList {

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2ToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadToTerraform(struct!.payload),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDb extends cdktf.ComplexComputedList {

  // hash_key_field - computed: true, optional: false, required: false
  public get hashKeyField() {
    return this.getStringAttribute('hash_key_field');
  }

  // hash_key_type - computed: true, optional: false, required: false
  public get hashKeyType() {
    return this.getStringAttribute('hash_key_type');
  }

  // hash_key_value - computed: true, optional: false, required: false
  public get hashKeyValue() {
    return this.getStringAttribute('hash_key_value');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // payload_field - computed: true, optional: false, required: false
  public get payloadField() {
    return this.getStringAttribute('payload_field');
  }

  // range_key_field - computed: true, optional: false, required: false
  public get rangeKeyField() {
    return this.getStringAttribute('range_key_field');
  }

  // range_key_type - computed: true, optional: false, required: false
  public get rangeKeyType() {
    return this.getStringAttribute('range_key_type');
  }

  // range_key_value - computed: true, optional: false, required: false
  public get rangeKeyValue() {
    return this.getStringAttribute('range_key_value');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hash_key_field: cdktf.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktf.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktf.stringToTerraform(struct!.hashKeyValue),
    operation: cdktf.stringToTerraform(struct!.operation),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadToTerraform(struct!.payload),
    payload_field: cdktf.stringToTerraform(struct!.payloadField),
    range_key_field: cdktf.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktf.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktf.stringToTerraform(struct!.rangeKeyValue),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehose extends cdktf.ComplexComputedList {

  // delivery_stream_name - computed: true, optional: false, required: false
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // separator - computed: true, optional: false, required: false
  public get separator() {
    return this.getStringAttribute('separator');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehoseToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadToTerraform(struct!.payload),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEvents extends cdktf.ComplexComputedList {

  // input_name - computed: true, optional: false, required: false
  public get inputName() {
    return this.getStringAttribute('input_name');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input_name: cdktf.stringToTerraform(struct!.inputName),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadToTerraform(struct!.payload),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestamp extends cdktf.ComplexComputedList {

  // offset_in_nanos - computed: true, optional: false, required: false
  public get offsetInNanos() {
    return this.getStringAttribute('offset_in_nanos');
  }

  // time_in_seconds - computed: true, optional: false, required: false
  public get timeInSeconds() {
    return this.getStringAttribute('time_in_seconds');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestamp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    offset_in_nanos: cdktf.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktf.stringToTerraform(struct!.timeInSeconds),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValue extends cdktf.ComplexComputedList {

  // boolean_value - computed: true, optional: false, required: false
  public get booleanValue() {
    return this.getStringAttribute('boolean_value');
  }

  // double_value - computed: true, optional: false, required: false
  public get doubleValue() {
    return this.getStringAttribute('double_value');
  }

  // integer_value - computed: true, optional: false, required: false
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boolean_value: cdktf.stringToTerraform(struct!.booleanValue),
    double_value: cdktf.stringToTerraform(struct!.doubleValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValue extends cdktf.ComplexComputedList {

  // quality - computed: true, optional: false, required: false
  public get quality() {
    return this.getStringAttribute('quality');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.interpolationForAttribute('timestamp') as any;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.interpolationForAttribute('value') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    quality: cdktf.stringToTerraform(struct!.quality),
    timestamp: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct!.timestamp),
    value: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueToTerraform(struct!.value),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWise extends cdktf.ComplexComputedList {

  // asset_id - computed: true, optional: false, required: false
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }

  // entry_id - computed: true, optional: false, required: false
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }

  // property_alias - computed: true, optional: false, required: false
  public get propertyAlias() {
    return this.getStringAttribute('property_alias');
  }

  // property_id - computed: true, optional: false, required: false
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }

  // property_value - computed: true, optional: false, required: false
  public get propertyValue() {
    return this.interpolationForAttribute('property_value') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWise): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asset_id: cdktf.stringToTerraform(struct!.assetId),
    entry_id: cdktf.stringToTerraform(struct!.entryId),
    property_alias: cdktf.stringToTerraform(struct!.propertyAlias),
    property_id: cdktf.stringToTerraform(struct!.propertyId),
    property_value: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueToTerraform(struct!.propertyValue),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublish extends cdktf.ComplexComputedList {

  // mqtt_topic - computed: true, optional: false, required: false
  public get mqttTopic() {
    return this.getStringAttribute('mqtt_topic');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublish): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mqtt_topic: cdktf.stringToTerraform(struct!.mqttTopic),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadToTerraform(struct!.payload),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambda extends cdktf.ComplexComputedList {

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadToTerraform(struct!.payload),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer extends cdktf.ComplexComputedList {

  // timer_name - computed: true, optional: false, required: false
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimer extends cdktf.ComplexComputedList {

  // duration_expression - computed: true, optional: false, required: false
  public get durationExpression() {
    return this.getStringAttribute('duration_expression');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }

  // timer_name - computed: true, optional: false, required: false
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_expression: cdktf.stringToTerraform(struct!.durationExpression),
    seconds: cdktf.numberToTerraform(struct!.seconds),
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariable extends cdktf.ComplexComputedList {

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // variable_name - computed: true, optional: false, required: false
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariableToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSns extends cdktf.ComplexComputedList {

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadToTerraform(struct!.payload),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqs extends cdktf.ComplexComputedList {

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // queue_url - computed: true, optional: false, required: false
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }

  // use_base_64 - computed: true, optional: false, required: false
  public get useBase64() {
    return this.getBooleanAttribute('use_base_64');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadToTerraform(struct!.payload),
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    use_base_64: cdktf.booleanToTerraform(struct!.useBase64),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActions extends cdktf.ComplexComputedList {

  // clear_timer - computed: true, optional: false, required: false
  public get clearTimer() {
    return this.interpolationForAttribute('clear_timer') as any;
  }

  // dynamo_d_bv_2 - computed: true, optional: false, required: false
  public get dynamoDBv2() {
    return this.interpolationForAttribute('dynamo_d_bv_2') as any;
  }

  // dynamo_db - computed: true, optional: false, required: false
  public get dynamoDb() {
    return this.interpolationForAttribute('dynamo_db') as any;
  }

  // firehose - computed: true, optional: false, required: false
  public get firehose() {
    return this.interpolationForAttribute('firehose') as any;
  }

  // iot_events - computed: true, optional: false, required: false
  public get iotEvents() {
    return this.interpolationForAttribute('iot_events') as any;
  }

  // iot_site_wise - computed: true, optional: false, required: false
  public get iotSiteWise() {
    return this.interpolationForAttribute('iot_site_wise') as any;
  }

  // iot_topic_publish - computed: true, optional: false, required: false
  public get iotTopicPublish() {
    return this.interpolationForAttribute('iot_topic_publish') as any;
  }

  // lambda - computed: true, optional: false, required: false
  public get lambda() {
    return this.interpolationForAttribute('lambda') as any;
  }

  // reset_timer - computed: true, optional: false, required: false
  public get resetTimer() {
    return this.interpolationForAttribute('reset_timer') as any;
  }

  // set_timer - computed: true, optional: false, required: false
  public get setTimer() {
    return this.interpolationForAttribute('set_timer') as any;
  }

  // set_variable - computed: true, optional: false, required: false
  public get setVariable() {
    return this.interpolationForAttribute('set_variable') as any;
  }

  // sns - computed: true, optional: false, required: false
  public get sns() {
    return this.interpolationForAttribute('sns') as any;
  }

  // sqs - computed: true, optional: false, required: false
  public get sqs() {
    return this.interpolationForAttribute('sqs') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    clear_timer: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimerToTerraform(struct!.clearTimer),
    dynamo_d_bv_2: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbToTerraform(struct!.dynamoDb),
    firehose: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehoseToTerraform(struct!.firehose),
    iot_events: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseToTerraform(struct!.iotSiteWise),
    iot_topic_publish: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishToTerraform(struct!.iotTopicPublish),
    lambda: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaToTerraform(struct!.lambda),
    reset_timer: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimerToTerraform(struct!.resetTimer),
    set_timer: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimerToTerraform(struct!.setTimer),
    set_variable: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariableToTerraform(struct!.setVariable),
    sns: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsToTerraform(struct!.sns),
    sqs: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsToTerraform(struct!.sqs),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEvents extends cdktf.ComplexComputedList {

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.interpolationForAttribute('actions') as any;
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsToTerraform)(struct!.actions),
    condition: cdktf.stringToTerraform(struct!.condition),
    event_name: cdktf.stringToTerraform(struct!.eventName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer extends cdktf.ComplexComputedList {

  // timer_name - computed: true, optional: false, required: false
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Payload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Payload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2 extends cdktf.ComplexComputedList {

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2ToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadToTerraform(struct!.payload),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDb extends cdktf.ComplexComputedList {

  // hash_key_field - computed: true, optional: false, required: false
  public get hashKeyField() {
    return this.getStringAttribute('hash_key_field');
  }

  // hash_key_type - computed: true, optional: false, required: false
  public get hashKeyType() {
    return this.getStringAttribute('hash_key_type');
  }

  // hash_key_value - computed: true, optional: false, required: false
  public get hashKeyValue() {
    return this.getStringAttribute('hash_key_value');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // payload_field - computed: true, optional: false, required: false
  public get payloadField() {
    return this.getStringAttribute('payload_field');
  }

  // range_key_field - computed: true, optional: false, required: false
  public get rangeKeyField() {
    return this.getStringAttribute('range_key_field');
  }

  // range_key_type - computed: true, optional: false, required: false
  public get rangeKeyType() {
    return this.getStringAttribute('range_key_type');
  }

  // range_key_value - computed: true, optional: false, required: false
  public get rangeKeyValue() {
    return this.getStringAttribute('range_key_value');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hash_key_field: cdktf.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktf.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktf.stringToTerraform(struct!.hashKeyValue),
    operation: cdktf.stringToTerraform(struct!.operation),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadToTerraform(struct!.payload),
    payload_field: cdktf.stringToTerraform(struct!.payloadField),
    range_key_field: cdktf.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktf.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktf.stringToTerraform(struct!.rangeKeyValue),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehose extends cdktf.ComplexComputedList {

  // delivery_stream_name - computed: true, optional: false, required: false
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // separator - computed: true, optional: false, required: false
  public get separator() {
    return this.getStringAttribute('separator');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadToTerraform(struct!.payload),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEvents extends cdktf.ComplexComputedList {

  // input_name - computed: true, optional: false, required: false
  public get inputName() {
    return this.getStringAttribute('input_name');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input_name: cdktf.stringToTerraform(struct!.inputName),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadToTerraform(struct!.payload),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestamp extends cdktf.ComplexComputedList {

  // offset_in_nanos - computed: true, optional: false, required: false
  public get offsetInNanos() {
    return this.getStringAttribute('offset_in_nanos');
  }

  // time_in_seconds - computed: true, optional: false, required: false
  public get timeInSeconds() {
    return this.getStringAttribute('time_in_seconds');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestamp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    offset_in_nanos: cdktf.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktf.stringToTerraform(struct!.timeInSeconds),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValue extends cdktf.ComplexComputedList {

  // boolean_value - computed: true, optional: false, required: false
  public get booleanValue() {
    return this.getStringAttribute('boolean_value');
  }

  // double_value - computed: true, optional: false, required: false
  public get doubleValue() {
    return this.getStringAttribute('double_value');
  }

  // integer_value - computed: true, optional: false, required: false
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boolean_value: cdktf.stringToTerraform(struct!.booleanValue),
    double_value: cdktf.stringToTerraform(struct!.doubleValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValue extends cdktf.ComplexComputedList {

  // quality - computed: true, optional: false, required: false
  public get quality() {
    return this.getStringAttribute('quality');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.interpolationForAttribute('timestamp') as any;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.interpolationForAttribute('value') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    quality: cdktf.stringToTerraform(struct!.quality),
    timestamp: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct!.timestamp),
    value: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueToTerraform(struct!.value),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWise extends cdktf.ComplexComputedList {

  // asset_id - computed: true, optional: false, required: false
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }

  // entry_id - computed: true, optional: false, required: false
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }

  // property_alias - computed: true, optional: false, required: false
  public get propertyAlias() {
    return this.getStringAttribute('property_alias');
  }

  // property_id - computed: true, optional: false, required: false
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }

  // property_value - computed: true, optional: false, required: false
  public get propertyValue() {
    return this.interpolationForAttribute('property_value') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWise): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asset_id: cdktf.stringToTerraform(struct!.assetId),
    entry_id: cdktf.stringToTerraform(struct!.entryId),
    property_alias: cdktf.stringToTerraform(struct!.propertyAlias),
    property_id: cdktf.stringToTerraform(struct!.propertyId),
    property_value: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueToTerraform(struct!.propertyValue),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublish extends cdktf.ComplexComputedList {

  // mqtt_topic - computed: true, optional: false, required: false
  public get mqttTopic() {
    return this.getStringAttribute('mqtt_topic');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublish): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mqtt_topic: cdktf.stringToTerraform(struct!.mqttTopic),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadToTerraform(struct!.payload),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambda extends cdktf.ComplexComputedList {

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadToTerraform(struct!.payload),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer extends cdktf.ComplexComputedList {

  // timer_name - computed: true, optional: false, required: false
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimer extends cdktf.ComplexComputedList {

  // duration_expression - computed: true, optional: false, required: false
  public get durationExpression() {
    return this.getStringAttribute('duration_expression');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }

  // timer_name - computed: true, optional: false, required: false
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_expression: cdktf.stringToTerraform(struct!.durationExpression),
    seconds: cdktf.numberToTerraform(struct!.seconds),
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariable extends cdktf.ComplexComputedList {

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // variable_name - computed: true, optional: false, required: false
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSns extends cdktf.ComplexComputedList {

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadToTerraform(struct!.payload),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayload extends cdktf.ComplexComputedList {

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqs extends cdktf.ComplexComputedList {

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.interpolationForAttribute('payload') as any;
  }

  // queue_url - computed: true, optional: false, required: false
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }

  // use_base_64 - computed: true, optional: false, required: false
  public get useBase64() {
    return this.getBooleanAttribute('use_base_64');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadToTerraform(struct!.payload),
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    use_base_64: cdktf.booleanToTerraform(struct!.useBase64),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActions extends cdktf.ComplexComputedList {

  // clear_timer - computed: true, optional: false, required: false
  public get clearTimer() {
    return this.interpolationForAttribute('clear_timer') as any;
  }

  // dynamo_d_bv_2 - computed: true, optional: false, required: false
  public get dynamoDBv2() {
    return this.interpolationForAttribute('dynamo_d_bv_2') as any;
  }

  // dynamo_db - computed: true, optional: false, required: false
  public get dynamoDb() {
    return this.interpolationForAttribute('dynamo_db') as any;
  }

  // firehose - computed: true, optional: false, required: false
  public get firehose() {
    return this.interpolationForAttribute('firehose') as any;
  }

  // iot_events - computed: true, optional: false, required: false
  public get iotEvents() {
    return this.interpolationForAttribute('iot_events') as any;
  }

  // iot_site_wise - computed: true, optional: false, required: false
  public get iotSiteWise() {
    return this.interpolationForAttribute('iot_site_wise') as any;
  }

  // iot_topic_publish - computed: true, optional: false, required: false
  public get iotTopicPublish() {
    return this.interpolationForAttribute('iot_topic_publish') as any;
  }

  // lambda - computed: true, optional: false, required: false
  public get lambda() {
    return this.interpolationForAttribute('lambda') as any;
  }

  // reset_timer - computed: true, optional: false, required: false
  public get resetTimer() {
    return this.interpolationForAttribute('reset_timer') as any;
  }

  // set_timer - computed: true, optional: false, required: false
  public get setTimer() {
    return this.interpolationForAttribute('set_timer') as any;
  }

  // set_variable - computed: true, optional: false, required: false
  public get setVariable() {
    return this.interpolationForAttribute('set_variable') as any;
  }

  // sns - computed: true, optional: false, required: false
  public get sns() {
    return this.interpolationForAttribute('sns') as any;
  }

  // sqs - computed: true, optional: false, required: false
  public get sqs() {
    return this.interpolationForAttribute('sqs') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    clear_timer: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerToTerraform(struct!.clearTimer),
    dynamo_d_bv_2: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbToTerraform(struct!.dynamoDb),
    firehose: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseToTerraform(struct!.firehose),
    iot_events: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseToTerraform(struct!.iotSiteWise),
    iot_topic_publish: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishToTerraform(struct!.iotTopicPublish),
    lambda: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaToTerraform(struct!.lambda),
    reset_timer: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerToTerraform(struct!.resetTimer),
    set_timer: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerToTerraform(struct!.setTimer),
    set_variable: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableToTerraform(struct!.setVariable),
    sns: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsToTerraform(struct!.sns),
    sqs: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsToTerraform(struct!.sqs),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEvents extends cdktf.ComplexComputedList {

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.interpolationForAttribute('actions') as any;
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // next_state - computed: true, optional: false, required: false
  public get nextState() {
    return this.getStringAttribute('next_state');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsToTerraform)(struct!.actions),
    condition: cdktf.stringToTerraform(struct!.condition),
    event_name: cdktf.stringToTerraform(struct!.eventName),
    next_state: cdktf.stringToTerraform(struct!.nextState),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInput extends cdktf.ComplexComputedList {

  // events - computed: true, optional: false, required: false
  public get events() {
    return this.interpolationForAttribute('events') as any;
  }

  // transition_events - computed: true, optional: false, required: false
  public get transitionEvents() {
    return this.interpolationForAttribute('transition_events') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    events: cdktf.listMapper(dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsToTerraform)(struct!.events),
    transition_events: cdktf.listMapper(dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsToTerraform)(struct!.transitionEvents),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStates extends cdktf.ComplexComputedList {

  // on_enter - computed: true, optional: false, required: false
  public get onEnter() {
    return this.interpolationForAttribute('on_enter') as any;
  }

  // on_exit - computed: true, optional: false, required: false
  public get onExit() {
    return this.interpolationForAttribute('on_exit') as any;
  }

  // on_input - computed: true, optional: false, required: false
  public get onInput() {
    return this.interpolationForAttribute('on_input') as any;
  }

  // state_name - computed: true, optional: false, required: false
  public get stateName() {
    return this.getStringAttribute('state_name');
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStates): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    on_enter: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterToTerraform(struct!.onEnter),
    on_exit: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitToTerraform(struct!.onExit),
    on_input: dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputToTerraform(struct!.onInput),
    state_name: cdktf.stringToTerraform(struct!.stateName),
  }
}

export class DataAwsccIoteventsDetectorModelDetectorModelDefinition extends cdktf.ComplexComputedList {

  // initial_state_name - computed: true, optional: false, required: false
  public get initialStateName() {
    return this.getStringAttribute('initial_state_name');
  }

  // states - computed: true, optional: false, required: false
  public get states() {
    return this.interpolationForAttribute('states') as any;
  }
}

export function dataAwsccIoteventsDetectorModelDetectorModelDefinitionToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    initial_state_name: cdktf.stringToTerraform(struct!.initialStateName),
    states: cdktf.listMapper(dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesToTerraform)(struct!.states),
  }
}

export class DataAwsccIoteventsDetectorModelTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIoteventsDetectorModelTagsToTerraform(struct?: DataAwsccIoteventsDetectorModelTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotevents_detector_model.html awscc_iotevents_detector_model}
*/
export class DataAwsccIoteventsDetectorModel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotevents_detector_model";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotevents_detector_model.html awscc_iotevents_detector_model} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIoteventsDetectorModelConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIoteventsDetectorModelConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotevents_detector_model',
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

  // detector_model_definition - computed: true, optional: false, required: false
  public get detectorModelDefinition() {
    return this.interpolationForAttribute('detector_model_definition') as any;
  }

  // detector_model_description - computed: true, optional: false, required: false
  public get detectorModelDescription() {
    return this.getStringAttribute('detector_model_description');
  }

  // detector_model_name - computed: true, optional: false, required: false
  public get detectorModelName() {
    return this.getStringAttribute('detector_model_name');
  }

  // evaluation_method - computed: true, optional: false, required: false
  public get evaluationMethod() {
    return this.getStringAttribute('evaluation_method');
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
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
