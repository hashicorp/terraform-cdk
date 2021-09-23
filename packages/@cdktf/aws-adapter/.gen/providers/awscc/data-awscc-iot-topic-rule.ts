// https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotTopicRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule.html#id DataAwsccIotTopicRule#id}
  */
  readonly id: string;
}
export class DataAwsccIotTopicRuleTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotTopicRuleTagsToTerraform(struct?: DataAwsccIotTopicRuleTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarm extends cdktf.ComplexComputedList {

  // alarm_name - computed: true, optional: false, required: false
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // state_reason - computed: true, optional: false, required: false
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }

  // state_value - computed: true, optional: false, required: false
  public get stateValue() {
    return this.getStringAttribute('state_value');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_name: cdktf.stringToTerraform(struct!.alarmName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    state_reason: cdktf.stringToTerraform(struct!.stateReason),
    state_value: cdktf.stringToTerraform(struct!.stateValue),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogs extends cdktf.ComplexComputedList {

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetric extends cdktf.ComplexComputedList {

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // metric_namespace - computed: true, optional: false, required: false
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }

  // metric_timestamp - computed: true, optional: false, required: false
  public get metricTimestamp() {
    return this.getStringAttribute('metric_timestamp');
  }

  // metric_unit - computed: true, optional: false, required: false
  public get metricUnit() {
    return this.getStringAttribute('metric_unit');
  }

  // metric_value - computed: true, optional: false, required: false
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetricToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    metric_timestamp: cdktf.stringToTerraform(struct!.metricTimestamp),
    metric_unit: cdktf.stringToTerraform(struct!.metricUnit),
    metric_value: cdktf.stringToTerraform(struct!.metricValue),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem extends cdktf.ComplexComputedList {

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2 extends cdktf.ComplexComputedList {

  // put_item - computed: true, optional: false, required: false
  public get putItem() {
    return this.interpolationForAttribute('put_item') as any;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    put_item: dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToTerraform(struct!.putItem),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDb extends cdktf.ComplexComputedList {

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

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDbToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hash_key_field: cdktf.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktf.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktf.stringToTerraform(struct!.hashKeyValue),
    payload_field: cdktf.stringToTerraform(struct!.payloadField),
    range_key_field: cdktf.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktf.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktf.stringToTerraform(struct!.rangeKeyValue),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearch extends cdktf.ComplexComputedList {

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearchToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id: cdktf.stringToTerraform(struct!.id),
    index: cdktf.stringToTerraform(struct!.index),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsFirehose extends cdktf.ComplexComputedList {

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }

  // delivery_stream_name - computed: true, optional: false, required: false
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // separator - computed: true, optional: false, required: false
  public get separator() {
    return this.getStringAttribute('separator');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsFirehoseToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_mode: cdktf.booleanToTerraform(struct!.batchMode),
    delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4 extends cdktf.ComplexComputedList {

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // signing_region - computed: true, optional: false, required: false
  public get signingRegion() {
    return this.getStringAttribute('signing_region');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    signing_region: cdktf.stringToTerraform(struct!.signingRegion),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuth extends cdktf.ComplexComputedList {

  // sigv_4 - computed: true, optional: false, required: false
  public get sigv4() {
    return this.interpolationForAttribute('sigv_4') as any;
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sigv_4: dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToTerraform(struct!.sigv4),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeaders extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeadersToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsHttp extends cdktf.ComplexComputedList {

  // auth - computed: true, optional: false, required: false
  public get auth() {
    return this.interpolationForAttribute('auth') as any;
  }

  // confirmation_url - computed: true, optional: false, required: false
  public get confirmationUrl() {
    return this.getStringAttribute('confirmation_url');
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return this.interpolationForAttribute('headers') as any;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth: dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthToTerraform(struct!.auth),
    confirmation_url: cdktf.stringToTerraform(struct!.confirmationUrl),
    headers: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeadersToTerraform)(struct!.headers),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalytics extends cdktf.ComplexComputedList {

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalyticsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_mode: cdktf.booleanToTerraform(struct!.batchMode),
    channel_name: cdktf.stringToTerraform(struct!.channelName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsIotEvents extends cdktf.ComplexComputedList {

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }

  // input_name - computed: true, optional: false, required: false
  public get inputName() {
    return this.getStringAttribute('input_name');
  }

  // message_id - computed: true, optional: false, required: false
  public get messageId() {
    return this.getStringAttribute('message_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotEventsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_mode: cdktf.booleanToTerraform(struct!.batchMode),
    input_name: cdktf.stringToTerraform(struct!.inputName),
    message_id: cdktf.stringToTerraform(struct!.messageId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp extends cdktf.ComplexComputedList {

  // offset_in_nanos - computed: true, optional: false, required: false
  public get offsetInNanos() {
    return this.getStringAttribute('offset_in_nanos');
  }

  // time_in_seconds - computed: true, optional: false, required: false
  public get timeInSeconds() {
    return this.getStringAttribute('time_in_seconds');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    offset_in_nanos: cdktf.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktf.stringToTerraform(struct!.timeInSeconds),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue extends cdktf.ComplexComputedList {

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

export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boolean_value: cdktf.stringToTerraform(struct!.booleanValue),
    double_value: cdktf.stringToTerraform(struct!.doubleValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues extends cdktf.ComplexComputedList {

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

export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    quality: cdktf.stringToTerraform(struct!.quality),
    timestamp: dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct!.timestamp),
    value: dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct!.value),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries extends cdktf.ComplexComputedList {

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

  // property_values - computed: true, optional: false, required: false
  public get propertyValues() {
    return this.interpolationForAttribute('property_values') as any;
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asset_id: cdktf.stringToTerraform(struct!.assetId),
    entry_id: cdktf.stringToTerraform(struct!.entryId),
    property_alias: cdktf.stringToTerraform(struct!.propertyAlias),
    property_id: cdktf.stringToTerraform(struct!.propertyId),
    property_values: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform)(struct!.propertyValues),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWise extends cdktf.ComplexComputedList {

  // put_asset_property_value_entries - computed: true, optional: false, required: false
  public get putAssetPropertyValueEntries() {
    return this.interpolationForAttribute('put_asset_property_value_entries') as any;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWiseToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWise): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    put_asset_property_value_entries: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToTerraform)(struct!.putAssetPropertyValueEntries),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsKafka extends cdktf.ComplexComputedList {

  // client_properties - computed: true, optional: false, required: false
  public get clientProperties() {
    return this.interpolationForAttribute('client_properties') as any;
  }

  // destination_arn - computed: true, optional: false, required: false
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getStringAttribute('partition');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsKafkaToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsKafka): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.clientProperties),
    destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
    key: cdktf.stringToTerraform(struct!.key),
    partition: cdktf.stringToTerraform(struct!.partition),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsKinesis extends cdktf.ComplexComputedList {

  // partition_key - computed: true, optional: false, required: false
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsKinesisToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsKinesis): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    partition_key: cdktf.stringToTerraform(struct!.partitionKey),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsLambda extends cdktf.ComplexComputedList {

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsLambdaToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsRepublish extends cdktf.ComplexComputedList {

  // qos - computed: true, optional: false, required: false
  public get qos() {
    return this.getNumberAttribute('qos');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsRepublishToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsRepublish): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    qos: cdktf.numberToTerraform(struct!.qos),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsS3 extends cdktf.ComplexComputedList {

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // canned_acl - computed: true, optional: false, required: false
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsS3ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    canned_acl: cdktf.stringToTerraform(struct!.cannedAcl),
    key: cdktf.stringToTerraform(struct!.key),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsSns extends cdktf.ComplexComputedList {

  // message_format - computed: true, optional: false, required: false
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsSnsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsSqs extends cdktf.ComplexComputedList {

  // queue_url - computed: true, optional: false, required: false
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // use_base_64 - computed: true, optional: false, required: false
  public get useBase64() {
    return this.getBooleanAttribute('use_base_64');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsSqsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsSqs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    use_base_64: cdktf.booleanToTerraform(struct!.useBase64),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctions extends cdktf.ComplexComputedList {

  // execution_name_prefix - computed: true, optional: false, required: false
  public get executionNamePrefix() {
    return this.getStringAttribute('execution_name_prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // state_machine_name - computed: true, optional: false, required: false
  public get stateMachineName() {
    return this.getStringAttribute('state_machine_name');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctionsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    execution_name_prefix: cdktf.stringToTerraform(struct!.executionNamePrefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    state_machine_name: cdktf.stringToTerraform(struct!.stateMachineName),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensions extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestamp extends cdktf.ComplexComputedList {

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestampToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestamp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsTimestream extends cdktf.ComplexComputedList {

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return this.interpolationForAttribute('dimensions') as any;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.interpolationForAttribute('timestamp') as any;
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsTimestream): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_mode: cdktf.booleanToTerraform(struct!.batchMode),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    dimensions: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToTerraform)(struct!.dimensions),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    timestamp: dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestampToTerraform(struct!.timestamp),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActions extends cdktf.ComplexComputedList {

  // cloudwatch_alarm - computed: true, optional: false, required: false
  public get cloudwatchAlarm() {
    return this.interpolationForAttribute('cloudwatch_alarm') as any;
  }

  // cloudwatch_logs - computed: true, optional: false, required: false
  public get cloudwatchLogs() {
    return this.interpolationForAttribute('cloudwatch_logs') as any;
  }

  // cloudwatch_metric - computed: true, optional: false, required: false
  public get cloudwatchMetric() {
    return this.interpolationForAttribute('cloudwatch_metric') as any;
  }

  // dynamo_d_bv_2 - computed: true, optional: false, required: false
  public get dynamoDBv2() {
    return this.interpolationForAttribute('dynamo_d_bv_2') as any;
  }

  // dynamo_db - computed: true, optional: false, required: false
  public get dynamoDb() {
    return this.interpolationForAttribute('dynamo_db') as any;
  }

  // elasticsearch - computed: true, optional: false, required: false
  public get elasticsearch() {
    return this.interpolationForAttribute('elasticsearch') as any;
  }

  // firehose - computed: true, optional: false, required: false
  public get firehose() {
    return this.interpolationForAttribute('firehose') as any;
  }

  // http - computed: true, optional: false, required: false
  public get http() {
    return this.interpolationForAttribute('http') as any;
  }

  // iot_analytics - computed: true, optional: false, required: false
  public get iotAnalytics() {
    return this.interpolationForAttribute('iot_analytics') as any;
  }

  // iot_events - computed: true, optional: false, required: false
  public get iotEvents() {
    return this.interpolationForAttribute('iot_events') as any;
  }

  // iot_site_wise - computed: true, optional: false, required: false
  public get iotSiteWise() {
    return this.interpolationForAttribute('iot_site_wise') as any;
  }

  // kafka - computed: true, optional: false, required: false
  public get kafka() {
    return this.interpolationForAttribute('kafka') as any;
  }

  // kinesis - computed: true, optional: false, required: false
  public get kinesis() {
    return this.interpolationForAttribute('kinesis') as any;
  }

  // lambda - computed: true, optional: false, required: false
  public get lambda() {
    return this.interpolationForAttribute('lambda') as any;
  }

  // republish - computed: true, optional: false, required: false
  public get republish() {
    return this.interpolationForAttribute('republish') as any;
  }

  // s3 - computed: true, optional: false, required: false
  public get s3() {
    return this.interpolationForAttribute('s3') as any;
  }

  // sns - computed: true, optional: false, required: false
  public get sns() {
    return this.interpolationForAttribute('sns') as any;
  }

  // sqs - computed: true, optional: false, required: false
  public get sqs() {
    return this.interpolationForAttribute('sqs') as any;
  }

  // step_functions - computed: true, optional: false, required: false
  public get stepFunctions() {
    return this.interpolationForAttribute('step_functions') as any;
  }

  // timestream - computed: true, optional: false, required: false
  public get timestream() {
    return this.interpolationForAttribute('timestream') as any;
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_alarm: dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToTerraform(struct!.cloudwatchAlarm),
    cloudwatch_logs: dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogsToTerraform(struct!.cloudwatchLogs),
    cloudwatch_metric: dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetricToTerraform(struct!.cloudwatchMetric),
    dynamo_d_bv_2: dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDbToTerraform(struct!.dynamoDb),
    elasticsearch: dataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearchToTerraform(struct!.elasticsearch),
    firehose: dataAwsccIotTopicRuleTopicRulePayloadActionsFirehoseToTerraform(struct!.firehose),
    http: dataAwsccIotTopicRuleTopicRulePayloadActionsHttpToTerraform(struct!.http),
    iot_analytics: dataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalyticsToTerraform(struct!.iotAnalytics),
    iot_events: dataAwsccIotTopicRuleTopicRulePayloadActionsIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWiseToTerraform(struct!.iotSiteWise),
    kafka: dataAwsccIotTopicRuleTopicRulePayloadActionsKafkaToTerraform(struct!.kafka),
    kinesis: dataAwsccIotTopicRuleTopicRulePayloadActionsKinesisToTerraform(struct!.kinesis),
    lambda: dataAwsccIotTopicRuleTopicRulePayloadActionsLambdaToTerraform(struct!.lambda),
    republish: dataAwsccIotTopicRuleTopicRulePayloadActionsRepublishToTerraform(struct!.republish),
    s3: dataAwsccIotTopicRuleTopicRulePayloadActionsS3ToTerraform(struct!.s3),
    sns: dataAwsccIotTopicRuleTopicRulePayloadActionsSnsToTerraform(struct!.sns),
    sqs: dataAwsccIotTopicRuleTopicRulePayloadActionsSqsToTerraform(struct!.sqs),
    step_functions: dataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctionsToTerraform(struct!.stepFunctions),
    timestream: dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamToTerraform(struct!.timestream),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm extends cdktf.ComplexComputedList {

  // alarm_name - computed: true, optional: false, required: false
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // state_reason - computed: true, optional: false, required: false
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }

  // state_value - computed: true, optional: false, required: false
  public get stateValue() {
    return this.getStringAttribute('state_value');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_name: cdktf.stringToTerraform(struct!.alarmName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    state_reason: cdktf.stringToTerraform(struct!.stateReason),
    state_value: cdktf.stringToTerraform(struct!.stateValue),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs extends cdktf.ComplexComputedList {

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric extends cdktf.ComplexComputedList {

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // metric_namespace - computed: true, optional: false, required: false
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }

  // metric_timestamp - computed: true, optional: false, required: false
  public get metricTimestamp() {
    return this.getStringAttribute('metric_timestamp');
  }

  // metric_unit - computed: true, optional: false, required: false
  public get metricUnit() {
    return this.getStringAttribute('metric_unit');
  }

  // metric_value - computed: true, optional: false, required: false
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    metric_timestamp: cdktf.stringToTerraform(struct!.metricTimestamp),
    metric_unit: cdktf.stringToTerraform(struct!.metricUnit),
    metric_value: cdktf.stringToTerraform(struct!.metricValue),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem extends cdktf.ComplexComputedList {

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2 extends cdktf.ComplexComputedList {

  // put_item - computed: true, optional: false, required: false
  public get putItem() {
    return this.interpolationForAttribute('put_item') as any;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    put_item: dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToTerraform(struct!.putItem),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDb extends cdktf.ComplexComputedList {

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

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDbToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hash_key_field: cdktf.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktf.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktf.stringToTerraform(struct!.hashKeyValue),
    payload_field: cdktf.stringToTerraform(struct!.payloadField),
    range_key_field: cdktf.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktf.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktf.stringToTerraform(struct!.rangeKeyValue),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearch extends cdktf.ComplexComputedList {

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearchToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id: cdktf.stringToTerraform(struct!.id),
    index: cdktf.stringToTerraform(struct!.index),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehose extends cdktf.ComplexComputedList {

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }

  // delivery_stream_name - computed: true, optional: false, required: false
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // separator - computed: true, optional: false, required: false
  public get separator() {
    return this.getStringAttribute('separator');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehoseToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_mode: cdktf.booleanToTerraform(struct!.batchMode),
    delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4 extends cdktf.ComplexComputedList {

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // signing_region - computed: true, optional: false, required: false
  public get signingRegion() {
    return this.getStringAttribute('signing_region');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    signing_region: cdktf.stringToTerraform(struct!.signingRegion),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuth extends cdktf.ComplexComputedList {

  // sigv_4 - computed: true, optional: false, required: false
  public get sigv4() {
    return this.interpolationForAttribute('sigv_4') as any;
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sigv_4: dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToTerraform(struct!.sigv4),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeaders extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeadersToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttp extends cdktf.ComplexComputedList {

  // auth - computed: true, optional: false, required: false
  public get auth() {
    return this.interpolationForAttribute('auth') as any;
  }

  // confirmation_url - computed: true, optional: false, required: false
  public get confirmationUrl() {
    return this.getStringAttribute('confirmation_url');
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return this.interpolationForAttribute('headers') as any;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth: dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthToTerraform(struct!.auth),
    confirmation_url: cdktf.stringToTerraform(struct!.confirmationUrl),
    headers: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeadersToTerraform)(struct!.headers),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalytics extends cdktf.ComplexComputedList {

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_mode: cdktf.booleanToTerraform(struct!.batchMode),
    channel_name: cdktf.stringToTerraform(struct!.channelName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEvents extends cdktf.ComplexComputedList {

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }

  // input_name - computed: true, optional: false, required: false
  public get inputName() {
    return this.getStringAttribute('input_name');
  }

  // message_id - computed: true, optional: false, required: false
  public get messageId() {
    return this.getStringAttribute('message_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEventsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_mode: cdktf.booleanToTerraform(struct!.batchMode),
    input_name: cdktf.stringToTerraform(struct!.inputName),
    message_id: cdktf.stringToTerraform(struct!.messageId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp extends cdktf.ComplexComputedList {

  // offset_in_nanos - computed: true, optional: false, required: false
  public get offsetInNanos() {
    return this.getStringAttribute('offset_in_nanos');
  }

  // time_in_seconds - computed: true, optional: false, required: false
  public get timeInSeconds() {
    return this.getStringAttribute('time_in_seconds');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    offset_in_nanos: cdktf.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktf.stringToTerraform(struct!.timeInSeconds),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue extends cdktf.ComplexComputedList {

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

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boolean_value: cdktf.stringToTerraform(struct!.booleanValue),
    double_value: cdktf.stringToTerraform(struct!.doubleValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues extends cdktf.ComplexComputedList {

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

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    quality: cdktf.stringToTerraform(struct!.quality),
    timestamp: dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct!.timestamp),
    value: dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct!.value),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries extends cdktf.ComplexComputedList {

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

  // property_values - computed: true, optional: false, required: false
  public get propertyValues() {
    return this.interpolationForAttribute('property_values') as any;
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asset_id: cdktf.stringToTerraform(struct!.assetId),
    entry_id: cdktf.stringToTerraform(struct!.entryId),
    property_alias: cdktf.stringToTerraform(struct!.propertyAlias),
    property_id: cdktf.stringToTerraform(struct!.propertyId),
    property_values: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform)(struct!.propertyValues),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWise extends cdktf.ComplexComputedList {

  // put_asset_property_value_entries - computed: true, optional: false, required: false
  public get putAssetPropertyValueEntries() {
    return this.interpolationForAttribute('put_asset_property_value_entries') as any;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWise): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    put_asset_property_value_entries: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToTerraform)(struct!.putAssetPropertyValueEntries),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafka extends cdktf.ComplexComputedList {

  // client_properties - computed: true, optional: false, required: false
  public get clientProperties() {
    return this.interpolationForAttribute('client_properties') as any;
  }

  // destination_arn - computed: true, optional: false, required: false
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getStringAttribute('partition');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafka): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.clientProperties),
    destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
    key: cdktf.stringToTerraform(struct!.key),
    partition: cdktf.stringToTerraform(struct!.partition),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesis extends cdktf.ComplexComputedList {

  // partition_key - computed: true, optional: false, required: false
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesisToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesis): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    partition_key: cdktf.stringToTerraform(struct!.partitionKey),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionLambda extends cdktf.ComplexComputedList {

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionLambdaToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublish extends cdktf.ComplexComputedList {

  // qos - computed: true, optional: false, required: false
  public get qos() {
    return this.getNumberAttribute('qos');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublish): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    qos: cdktf.numberToTerraform(struct!.qos),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionS3 extends cdktf.ComplexComputedList {

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // canned_acl - computed: true, optional: false, required: false
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionS3ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    canned_acl: cdktf.stringToTerraform(struct!.cannedAcl),
    key: cdktf.stringToTerraform(struct!.key),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionSns extends cdktf.ComplexComputedList {

  // message_format - computed: true, optional: false, required: false
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionSnsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionSqs extends cdktf.ComplexComputedList {

  // queue_url - computed: true, optional: false, required: false
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // use_base_64 - computed: true, optional: false, required: false
  public get useBase64() {
    return this.getBooleanAttribute('use_base_64');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionSqsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionSqs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    use_base_64: cdktf.booleanToTerraform(struct!.useBase64),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctions extends cdktf.ComplexComputedList {

  // execution_name_prefix - computed: true, optional: false, required: false
  public get executionNamePrefix() {
    return this.getStringAttribute('execution_name_prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // state_machine_name - computed: true, optional: false, required: false
  public get stateMachineName() {
    return this.getStringAttribute('state_machine_name');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctionsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    execution_name_prefix: cdktf.stringToTerraform(struct!.executionNamePrefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    state_machine_name: cdktf.stringToTerraform(struct!.stateMachineName),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp extends cdktf.ComplexComputedList {

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestream extends cdktf.ComplexComputedList {

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return this.interpolationForAttribute('dimensions') as any;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.interpolationForAttribute('timestamp') as any;
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestream): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_mode: cdktf.booleanToTerraform(struct!.batchMode),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    dimensions: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToTerraform)(struct!.dimensions),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    timestamp: dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToTerraform(struct!.timestamp),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorAction extends cdktf.ComplexComputedList {

  // cloudwatch_alarm - computed: true, optional: false, required: false
  public get cloudwatchAlarm() {
    return this.interpolationForAttribute('cloudwatch_alarm') as any;
  }

  // cloudwatch_logs - computed: true, optional: false, required: false
  public get cloudwatchLogs() {
    return this.interpolationForAttribute('cloudwatch_logs') as any;
  }

  // cloudwatch_metric - computed: true, optional: false, required: false
  public get cloudwatchMetric() {
    return this.interpolationForAttribute('cloudwatch_metric') as any;
  }

  // dynamo_d_bv_2 - computed: true, optional: false, required: false
  public get dynamoDBv2() {
    return this.interpolationForAttribute('dynamo_d_bv_2') as any;
  }

  // dynamo_db - computed: true, optional: false, required: false
  public get dynamoDb() {
    return this.interpolationForAttribute('dynamo_db') as any;
  }

  // elasticsearch - computed: true, optional: false, required: false
  public get elasticsearch() {
    return this.interpolationForAttribute('elasticsearch') as any;
  }

  // firehose - computed: true, optional: false, required: false
  public get firehose() {
    return this.interpolationForAttribute('firehose') as any;
  }

  // http - computed: true, optional: false, required: false
  public get http() {
    return this.interpolationForAttribute('http') as any;
  }

  // iot_analytics - computed: true, optional: false, required: false
  public get iotAnalytics() {
    return this.interpolationForAttribute('iot_analytics') as any;
  }

  // iot_events - computed: true, optional: false, required: false
  public get iotEvents() {
    return this.interpolationForAttribute('iot_events') as any;
  }

  // iot_site_wise - computed: true, optional: false, required: false
  public get iotSiteWise() {
    return this.interpolationForAttribute('iot_site_wise') as any;
  }

  // kafka - computed: true, optional: false, required: false
  public get kafka() {
    return this.interpolationForAttribute('kafka') as any;
  }

  // kinesis - computed: true, optional: false, required: false
  public get kinesis() {
    return this.interpolationForAttribute('kinesis') as any;
  }

  // lambda - computed: true, optional: false, required: false
  public get lambda() {
    return this.interpolationForAttribute('lambda') as any;
  }

  // republish - computed: true, optional: false, required: false
  public get republish() {
    return this.interpolationForAttribute('republish') as any;
  }

  // s3 - computed: true, optional: false, required: false
  public get s3() {
    return this.interpolationForAttribute('s3') as any;
  }

  // sns - computed: true, optional: false, required: false
  public get sns() {
    return this.interpolationForAttribute('sns') as any;
  }

  // sqs - computed: true, optional: false, required: false
  public get sqs() {
    return this.interpolationForAttribute('sqs') as any;
  }

  // step_functions - computed: true, optional: false, required: false
  public get stepFunctions() {
    return this.interpolationForAttribute('step_functions') as any;
  }

  // timestream - computed: true, optional: false, required: false
  public get timestream() {
    return this.interpolationForAttribute('timestream') as any;
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_alarm: dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToTerraform(struct!.cloudwatchAlarm),
    cloudwatch_logs: dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToTerraform(struct!.cloudwatchLogs),
    cloudwatch_metric: dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToTerraform(struct!.cloudwatchMetric),
    dynamo_d_bv_2: dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDbToTerraform(struct!.dynamoDb),
    elasticsearch: dataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearchToTerraform(struct!.elasticsearch),
    firehose: dataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehoseToTerraform(struct!.firehose),
    http: dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpToTerraform(struct!.http),
    iot_analytics: dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToTerraform(struct!.iotAnalytics),
    iot_events: dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToTerraform(struct!.iotSiteWise),
    kafka: dataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaToTerraform(struct!.kafka),
    kinesis: dataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesisToTerraform(struct!.kinesis),
    lambda: dataAwsccIotTopicRuleTopicRulePayloadErrorActionLambdaToTerraform(struct!.lambda),
    republish: dataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishToTerraform(struct!.republish),
    s3: dataAwsccIotTopicRuleTopicRulePayloadErrorActionS3ToTerraform(struct!.s3),
    sns: dataAwsccIotTopicRuleTopicRulePayloadErrorActionSnsToTerraform(struct!.sns),
    sqs: dataAwsccIotTopicRuleTopicRulePayloadErrorActionSqsToTerraform(struct!.sqs),
    step_functions: dataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctionsToTerraform(struct!.stepFunctions),
    timestream: dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamToTerraform(struct!.timestream),
  }
}

export class DataAwsccIotTopicRuleTopicRulePayload extends cdktf.ComplexComputedList {

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.interpolationForAttribute('actions') as any;
  }

  // aws_iot_sql_version - computed: true, optional: false, required: false
  public get awsIotSqlVersion() {
    return this.getStringAttribute('aws_iot_sql_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // error_action - computed: true, optional: false, required: false
  public get errorAction() {
    return this.interpolationForAttribute('error_action') as any;
  }

  // rule_disabled - computed: true, optional: false, required: false
  public get ruleDisabled() {
    return this.getBooleanAttribute('rule_disabled');
  }

  // sql - computed: true, optional: false, required: false
  public get sql() {
    return this.getStringAttribute('sql');
  }
}

export function dataAwsccIotTopicRuleTopicRulePayloadToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadActionsToTerraform)(struct!.actions),
    aws_iot_sql_version: cdktf.stringToTerraform(struct!.awsIotSqlVersion),
    description: cdktf.stringToTerraform(struct!.description),
    error_action: dataAwsccIotTopicRuleTopicRulePayloadErrorActionToTerraform(struct!.errorAction),
    rule_disabled: cdktf.booleanToTerraform(struct!.ruleDisabled),
    sql: cdktf.stringToTerraform(struct!.sql),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule.html awscc_iot_topic_rule}
*/
export class DataAwsccIotTopicRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_topic_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule.html awscc_iot_topic_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotTopicRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotTopicRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_topic_rule',
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

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // topic_rule_payload - computed: true, optional: false, required: false
  public get topicRulePayload() {
    return this.interpolationForAttribute('topic_rule_payload') as any;
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
