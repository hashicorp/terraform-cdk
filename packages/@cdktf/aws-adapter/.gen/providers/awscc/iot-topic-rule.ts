// https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotTopicRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#rule_name IotTopicRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#tags IotTopicRule#tags}
  */
  readonly tags?: IotTopicRuleTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#topic_rule_payload IotTopicRule#topic_rule_payload}
  */
  readonly topicRulePayload: IotTopicRuleTopicRulePayload;
}
export interface IotTopicRuleTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#key IotTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#value IotTopicRule#value}
  */
  readonly value: string;
}

export function iotTopicRuleTagsToTerraform(struct?: IotTopicRuleTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsCloudwatchAlarm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#alarm_name IotTopicRule#alarm_name}
  */
  readonly alarmName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#state_reason IotTopicRule#state_reason}
  */
  readonly stateReason: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#state_value IotTopicRule#state_value}
  */
  readonly stateValue: string;
}

export function iotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsCloudwatchAlarm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_name: cdktf.stringToTerraform(struct!.alarmName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    state_reason: cdktf.stringToTerraform(struct!.stateReason),
    state_value: cdktf.stringToTerraform(struct!.stateValue),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsCloudwatchLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#log_group_name IotTopicRule#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleTopicRulePayloadActionsCloudwatchLogsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsCloudwatchLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsCloudwatchMetric {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#metric_name IotTopicRule#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#metric_namespace IotTopicRule#metric_namespace}
  */
  readonly metricNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#metric_timestamp IotTopicRule#metric_timestamp}
  */
  readonly metricTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#metric_unit IotTopicRule#metric_unit}
  */
  readonly metricUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#metric_value IotTopicRule#metric_value}
  */
  readonly metricValue: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleTopicRulePayloadActionsCloudwatchMetricToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsCloudwatchMetric): any {
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

export interface IotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
  */
  readonly tableName: string;
}

export function iotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsDynamoDBv2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#put_item IotTopicRule#put_item}
  */
  readonly putItem?: IotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
}

export function iotTopicRuleTopicRulePayloadActionsDynamoDBv2ToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsDynamoDBv2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    put_item: iotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToTerraform(struct!.putItem),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsDynamoDb {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#hash_key_field IotTopicRule#hash_key_field}
  */
  readonly hashKeyField: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#hash_key_type IotTopicRule#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#hash_key_value IotTopicRule#hash_key_value}
  */
  readonly hashKeyValue: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#payload_field IotTopicRule#payload_field}
  */
  readonly payloadField?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#range_key_field IotTopicRule#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#range_key_type IotTopicRule#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#range_key_value IotTopicRule#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
  */
  readonly tableName: string;
}

export function iotTopicRuleTopicRulePayloadActionsDynamoDbToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsDynamoDb): any {
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

export interface IotTopicRuleTopicRulePayloadActionsElasticsearch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#endpoint IotTopicRule#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#id IotTopicRule#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#index IotTopicRule#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#type IotTopicRule#type}
  */
  readonly type: string;
}

export function iotTopicRuleTopicRulePayloadActionsElasticsearchToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsElasticsearch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id: cdktf.stringToTerraform(struct!.id),
    index: cdktf.stringToTerraform(struct!.index),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsFirehose {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#delivery_stream_name IotTopicRule#delivery_stream_name}
  */
  readonly deliveryStreamName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#separator IotTopicRule#separator}
  */
  readonly separator?: string;
}

export function iotTopicRuleTopicRulePayloadActionsFirehoseToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_mode: cdktf.booleanToTerraform(struct!.batchMode),
    delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsHttpAuthSigv4 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#service_name IotTopicRule#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#signing_region IotTopicRule#signing_region}
  */
  readonly signingRegion: string;
}

export function iotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttpAuthSigv4): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    signing_region: cdktf.stringToTerraform(struct!.signingRegion),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsHttpAuth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#sigv_4 IotTopicRule#sigv_4}
  */
  readonly sigv4?: IotTopicRuleTopicRulePayloadActionsHttpAuthSigv4;
}

export function iotTopicRuleTopicRulePayloadActionsHttpAuthToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttpAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sigv_4: iotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToTerraform(struct!.sigv4),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#key IotTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#value IotTopicRule#value}
  */
  readonly value: string;
}

export function iotTopicRuleTopicRulePayloadActionsHttpHeadersToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttpHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsHttp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#auth IotTopicRule#auth}
  */
  readonly auth?: IotTopicRuleTopicRulePayloadActionsHttpAuth;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#confirmation_url IotTopicRule#confirmation_url}
  */
  readonly confirmationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#headers IotTopicRule#headers}
  */
  readonly headers?: IotTopicRuleTopicRulePayloadActionsHttpHeaders[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#url IotTopicRule#url}
  */
  readonly url: string;
}

export function iotTopicRuleTopicRulePayloadActionsHttpToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth: iotTopicRuleTopicRulePayloadActionsHttpAuthToTerraform(struct!.auth),
    confirmation_url: cdktf.stringToTerraform(struct!.confirmationUrl),
    headers: cdktf.listMapper(iotTopicRuleTopicRulePayloadActionsHttpHeadersToTerraform)(struct!.headers),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsIotAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#channel_name IotTopicRule#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleTopicRulePayloadActionsIotAnalyticsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_mode: cdktf.booleanToTerraform(struct!.batchMode),
    channel_name: cdktf.stringToTerraform(struct!.channelName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsIotEvents {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#input_name IotTopicRule#input_name}
  */
  readonly inputName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#message_id IotTopicRule#message_id}
  */
  readonly messageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleTopicRulePayloadActionsIotEventsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_mode: cdktf.booleanToTerraform(struct!.batchMode),
    input_name: cdktf.stringToTerraform(struct!.inputName),
    message_id: cdktf.stringToTerraform(struct!.messageId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#offset_in_nanos IotTopicRule#offset_in_nanos}
  */
  readonly offsetInNanos?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#time_in_seconds IotTopicRule#time_in_seconds}
  */
  readonly timeInSeconds: string;
}

export function iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    offset_in_nanos: cdktf.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktf.stringToTerraform(struct!.timeInSeconds),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#boolean_value IotTopicRule#boolean_value}
  */
  readonly booleanValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#double_value IotTopicRule#double_value}
  */
  readonly doubleValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#integer_value IotTopicRule#integer_value}
  */
  readonly integerValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#string_value IotTopicRule#string_value}
  */
  readonly stringValue?: string;
}

export function iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boolean_value: cdktf.stringToTerraform(struct!.booleanValue),
    double_value: cdktf.stringToTerraform(struct!.doubleValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#quality IotTopicRule#quality}
  */
  readonly quality?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#timestamp IotTopicRule#timestamp}
  */
  readonly timestamp: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#value IotTopicRule#value}
  */
  readonly value: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue;
}

export function iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    quality: cdktf.stringToTerraform(struct!.quality),
    timestamp: iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct!.timestamp),
    value: iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct!.value),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#asset_id IotTopicRule#asset_id}
  */
  readonly assetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#entry_id IotTopicRule#entry_id}
  */
  readonly entryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#property_alias IotTopicRule#property_alias}
  */
  readonly propertyAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#property_id IotTopicRule#property_id}
  */
  readonly propertyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#property_values IotTopicRule#property_values}
  */
  readonly propertyValues: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues[];
}

export function iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asset_id: cdktf.stringToTerraform(struct!.assetId),
    entry_id: cdktf.stringToTerraform(struct!.entryId),
    property_alias: cdktf.stringToTerraform(struct!.propertyAlias),
    property_id: cdktf.stringToTerraform(struct!.propertyId),
    property_values: cdktf.listMapper(iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform)(struct!.propertyValues),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsIotSiteWise {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#put_asset_property_value_entries IotTopicRule#put_asset_property_value_entries}
  */
  readonly putAssetPropertyValueEntries: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleTopicRulePayloadActionsIotSiteWiseToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWise): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    put_asset_property_value_entries: cdktf.listMapper(iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToTerraform)(struct!.putAssetPropertyValueEntries),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsKafka {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#client_properties IotTopicRule#client_properties}
  */
  readonly clientProperties: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#destination_arn IotTopicRule#destination_arn}
  */
  readonly destinationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#key IotTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#partition IotTopicRule#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#topic IotTopicRule#topic}
  */
  readonly topic: string;
}

export function iotTopicRuleTopicRulePayloadActionsKafkaToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsKafka): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.clientProperties),
    destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
    key: cdktf.stringToTerraform(struct!.key),
    partition: cdktf.stringToTerraform(struct!.partition),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsKinesis {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#partition_key IotTopicRule#partition_key}
  */
  readonly partitionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#stream_name IotTopicRule#stream_name}
  */
  readonly streamName: string;
}

export function iotTopicRuleTopicRulePayloadActionsKinesisToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsKinesis): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    partition_key: cdktf.stringToTerraform(struct!.partitionKey),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsLambda {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#function_arn IotTopicRule#function_arn}
  */
  readonly functionArn?: string;
}

export function iotTopicRuleTopicRulePayloadActionsLambdaToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsRepublish {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#qos IotTopicRule#qos}
  */
  readonly qos?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#topic IotTopicRule#topic}
  */
  readonly topic: string;
}

export function iotTopicRuleTopicRulePayloadActionsRepublishToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsRepublish): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    qos: cdktf.numberToTerraform(struct!.qos),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsS3 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#bucket_name IotTopicRule#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#canned_acl IotTopicRule#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#key IotTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleTopicRulePayloadActionsS3ToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    canned_acl: cdktf.stringToTerraform(struct!.cannedAcl),
    key: cdktf.stringToTerraform(struct!.key),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsSns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#message_format IotTopicRule#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#target_arn IotTopicRule#target_arn}
  */
  readonly targetArn: string;
}

export function iotTopicRuleTopicRulePayloadActionsSnsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsSqs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#queue_url IotTopicRule#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#use_base_64 IotTopicRule#use_base_64}
  */
  readonly useBase64?: boolean | cdktf.IResolvable;
}

export function iotTopicRuleTopicRulePayloadActionsSqsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsSqs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    use_base_64: cdktf.booleanToTerraform(struct!.useBase64),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsStepFunctions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#execution_name_prefix IotTopicRule#execution_name_prefix}
  */
  readonly executionNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#state_machine_name IotTopicRule#state_machine_name}
  */
  readonly stateMachineName: string;
}

export function iotTopicRuleTopicRulePayloadActionsStepFunctionsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsStepFunctions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    execution_name_prefix: cdktf.stringToTerraform(struct!.executionNamePrefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    state_machine_name: cdktf.stringToTerraform(struct!.stateMachineName),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsTimestreamDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#name IotTopicRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#value IotTopicRule#value}
  */
  readonly value: string;
}

export function iotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsTimestreamDimensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsTimestreamTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#unit IotTopicRule#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#value IotTopicRule#value}
  */
  readonly value: string;
}

export function iotTopicRuleTopicRulePayloadActionsTimestreamTimestampToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsTimestreamTimestamp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface IotTopicRuleTopicRulePayloadActionsTimestream {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#database_name IotTopicRule#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#dimensions IotTopicRule#dimensions}
  */
  readonly dimensions: IotTopicRuleTopicRulePayloadActionsTimestreamDimensions[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#timestamp IotTopicRule#timestamp}
  */
  readonly timestamp?: IotTopicRuleTopicRulePayloadActionsTimestreamTimestamp;
}

export function iotTopicRuleTopicRulePayloadActionsTimestreamToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsTimestream): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_mode: cdktf.booleanToTerraform(struct!.batchMode),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    dimensions: cdktf.listMapper(iotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToTerraform)(struct!.dimensions),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    timestamp: iotTopicRuleTopicRulePayloadActionsTimestreamTimestampToTerraform(struct!.timestamp),
  }
}

export interface IotTopicRuleTopicRulePayloadActions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}
  */
  readonly cloudwatchAlarm?: IotTopicRuleTopicRulePayloadActionsCloudwatchAlarm;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#cloudwatch_logs IotTopicRule#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: IotTopicRuleTopicRulePayloadActionsCloudwatchLogs;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#cloudwatch_metric IotTopicRule#cloudwatch_metric}
  */
  readonly cloudwatchMetric?: IotTopicRuleTopicRulePayloadActionsCloudwatchMetric;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#dynamo_d_bv_2 IotTopicRule#dynamo_d_bv_2}
  */
  readonly dynamoDBv2?: IotTopicRuleTopicRulePayloadActionsDynamoDBv2;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#dynamo_db IotTopicRule#dynamo_db}
  */
  readonly dynamoDb?: IotTopicRuleTopicRulePayloadActionsDynamoDb;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#elasticsearch IotTopicRule#elasticsearch}
  */
  readonly elasticsearch?: IotTopicRuleTopicRulePayloadActionsElasticsearch;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#firehose IotTopicRule#firehose}
  */
  readonly firehose?: IotTopicRuleTopicRulePayloadActionsFirehose;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#http IotTopicRule#http}
  */
  readonly http?: IotTopicRuleTopicRulePayloadActionsHttp;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#iot_analytics IotTopicRule#iot_analytics}
  */
  readonly iotAnalytics?: IotTopicRuleTopicRulePayloadActionsIotAnalytics;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#iot_events IotTopicRule#iot_events}
  */
  readonly iotEvents?: IotTopicRuleTopicRulePayloadActionsIotEvents;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#iot_site_wise IotTopicRule#iot_site_wise}
  */
  readonly iotSiteWise?: IotTopicRuleTopicRulePayloadActionsIotSiteWise;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#kafka IotTopicRule#kafka}
  */
  readonly kafka?: IotTopicRuleTopicRulePayloadActionsKafka;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#kinesis IotTopicRule#kinesis}
  */
  readonly kinesis?: IotTopicRuleTopicRulePayloadActionsKinesis;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#lambda IotTopicRule#lambda}
  */
  readonly lambda?: IotTopicRuleTopicRulePayloadActionsLambda;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#republish IotTopicRule#republish}
  */
  readonly republish?: IotTopicRuleTopicRulePayloadActionsRepublish;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#s3 IotTopicRule#s3}
  */
  readonly s3?: IotTopicRuleTopicRulePayloadActionsS3;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#sns IotTopicRule#sns}
  */
  readonly sns?: IotTopicRuleTopicRulePayloadActionsSns;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#sqs IotTopicRule#sqs}
  */
  readonly sqs?: IotTopicRuleTopicRulePayloadActionsSqs;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#step_functions IotTopicRule#step_functions}
  */
  readonly stepFunctions?: IotTopicRuleTopicRulePayloadActionsStepFunctions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#timestream IotTopicRule#timestream}
  */
  readonly timestream?: IotTopicRuleTopicRulePayloadActionsTimestream;
}

export function iotTopicRuleTopicRulePayloadActionsToTerraform(struct?: IotTopicRuleTopicRulePayloadActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_alarm: iotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToTerraform(struct!.cloudwatchAlarm),
    cloudwatch_logs: iotTopicRuleTopicRulePayloadActionsCloudwatchLogsToTerraform(struct!.cloudwatchLogs),
    cloudwatch_metric: iotTopicRuleTopicRulePayloadActionsCloudwatchMetricToTerraform(struct!.cloudwatchMetric),
    dynamo_d_bv_2: iotTopicRuleTopicRulePayloadActionsDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: iotTopicRuleTopicRulePayloadActionsDynamoDbToTerraform(struct!.dynamoDb),
    elasticsearch: iotTopicRuleTopicRulePayloadActionsElasticsearchToTerraform(struct!.elasticsearch),
    firehose: iotTopicRuleTopicRulePayloadActionsFirehoseToTerraform(struct!.firehose),
    http: iotTopicRuleTopicRulePayloadActionsHttpToTerraform(struct!.http),
    iot_analytics: iotTopicRuleTopicRulePayloadActionsIotAnalyticsToTerraform(struct!.iotAnalytics),
    iot_events: iotTopicRuleTopicRulePayloadActionsIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: iotTopicRuleTopicRulePayloadActionsIotSiteWiseToTerraform(struct!.iotSiteWise),
    kafka: iotTopicRuleTopicRulePayloadActionsKafkaToTerraform(struct!.kafka),
    kinesis: iotTopicRuleTopicRulePayloadActionsKinesisToTerraform(struct!.kinesis),
    lambda: iotTopicRuleTopicRulePayloadActionsLambdaToTerraform(struct!.lambda),
    republish: iotTopicRuleTopicRulePayloadActionsRepublishToTerraform(struct!.republish),
    s3: iotTopicRuleTopicRulePayloadActionsS3ToTerraform(struct!.s3),
    sns: iotTopicRuleTopicRulePayloadActionsSnsToTerraform(struct!.sns),
    sqs: iotTopicRuleTopicRulePayloadActionsSqsToTerraform(struct!.sqs),
    step_functions: iotTopicRuleTopicRulePayloadActionsStepFunctionsToTerraform(struct!.stepFunctions),
    timestream: iotTopicRuleTopicRulePayloadActionsTimestreamToTerraform(struct!.timestream),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#alarm_name IotTopicRule#alarm_name}
  */
  readonly alarmName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#state_reason IotTopicRule#state_reason}
  */
  readonly stateReason: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#state_value IotTopicRule#state_value}
  */
  readonly stateValue: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_name: cdktf.stringToTerraform(struct!.alarmName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    state_reason: cdktf.stringToTerraform(struct!.stateReason),
    state_value: cdktf.stringToTerraform(struct!.stateValue),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#log_group_name IotTopicRule#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#metric_name IotTopicRule#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#metric_namespace IotTopicRule#metric_namespace}
  */
  readonly metricNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#metric_timestamp IotTopicRule#metric_timestamp}
  */
  readonly metricTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#metric_unit IotTopicRule#metric_unit}
  */
  readonly metricUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#metric_value IotTopicRule#metric_value}
  */
  readonly metricValue: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric): any {
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

export interface IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
  */
  readonly tableName: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#put_item IotTopicRule#put_item}
  */
  readonly putItem?: IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    put_item: iotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToTerraform(struct!.putItem),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionDynamoDb {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#hash_key_field IotTopicRule#hash_key_field}
  */
  readonly hashKeyField: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#hash_key_type IotTopicRule#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#hash_key_value IotTopicRule#hash_key_value}
  */
  readonly hashKeyValue: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#payload_field IotTopicRule#payload_field}
  */
  readonly payloadField?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#range_key_field IotTopicRule#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#range_key_type IotTopicRule#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#range_key_value IotTopicRule#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
  */
  readonly tableName: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionDynamoDbToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionDynamoDb): any {
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

export interface IotTopicRuleTopicRulePayloadErrorActionElasticsearch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#endpoint IotTopicRule#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#id IotTopicRule#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#index IotTopicRule#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#type IotTopicRule#type}
  */
  readonly type: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionElasticsearchToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionElasticsearch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id: cdktf.stringToTerraform(struct!.id),
    index: cdktf.stringToTerraform(struct!.index),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionFirehose {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#delivery_stream_name IotTopicRule#delivery_stream_name}
  */
  readonly deliveryStreamName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#separator IotTopicRule#separator}
  */
  readonly separator?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionFirehoseToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_mode: cdktf.booleanToTerraform(struct!.batchMode),
    delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#service_name IotTopicRule#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#signing_region IotTopicRule#signing_region}
  */
  readonly signingRegion: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    signing_region: cdktf.stringToTerraform(struct!.signingRegion),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionHttpAuth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#sigv_4 IotTopicRule#sigv_4}
  */
  readonly sigv4?: IotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4;
}

export function iotTopicRuleTopicRulePayloadErrorActionHttpAuthToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttpAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sigv_4: iotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToTerraform(struct!.sigv4),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#key IotTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#value IotTopicRule#value}
  */
  readonly value: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionHttpHeadersToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttpHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionHttp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#auth IotTopicRule#auth}
  */
  readonly auth?: IotTopicRuleTopicRulePayloadErrorActionHttpAuth;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#confirmation_url IotTopicRule#confirmation_url}
  */
  readonly confirmationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#headers IotTopicRule#headers}
  */
  readonly headers?: IotTopicRuleTopicRulePayloadErrorActionHttpHeaders[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#url IotTopicRule#url}
  */
  readonly url: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionHttpToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth: iotTopicRuleTopicRulePayloadErrorActionHttpAuthToTerraform(struct!.auth),
    confirmation_url: cdktf.stringToTerraform(struct!.confirmationUrl),
    headers: cdktf.listMapper(iotTopicRuleTopicRulePayloadErrorActionHttpHeadersToTerraform)(struct!.headers),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionIotAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#channel_name IotTopicRule#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_mode: cdktf.booleanToTerraform(struct!.batchMode),
    channel_name: cdktf.stringToTerraform(struct!.channelName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionIotEvents {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#input_name IotTopicRule#input_name}
  */
  readonly inputName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#message_id IotTopicRule#message_id}
  */
  readonly messageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionIotEventsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_mode: cdktf.booleanToTerraform(struct!.batchMode),
    input_name: cdktf.stringToTerraform(struct!.inputName),
    message_id: cdktf.stringToTerraform(struct!.messageId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#offset_in_nanos IotTopicRule#offset_in_nanos}
  */
  readonly offsetInNanos?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#time_in_seconds IotTopicRule#time_in_seconds}
  */
  readonly timeInSeconds: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    offset_in_nanos: cdktf.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktf.stringToTerraform(struct!.timeInSeconds),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#boolean_value IotTopicRule#boolean_value}
  */
  readonly booleanValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#double_value IotTopicRule#double_value}
  */
  readonly doubleValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#integer_value IotTopicRule#integer_value}
  */
  readonly integerValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#string_value IotTopicRule#string_value}
  */
  readonly stringValue?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boolean_value: cdktf.stringToTerraform(struct!.booleanValue),
    double_value: cdktf.stringToTerraform(struct!.doubleValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#quality IotTopicRule#quality}
  */
  readonly quality?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#timestamp IotTopicRule#timestamp}
  */
  readonly timestamp: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#value IotTopicRule#value}
  */
  readonly value: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue;
}

export function iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    quality: cdktf.stringToTerraform(struct!.quality),
    timestamp: iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct!.timestamp),
    value: iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct!.value),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#asset_id IotTopicRule#asset_id}
  */
  readonly assetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#entry_id IotTopicRule#entry_id}
  */
  readonly entryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#property_alias IotTopicRule#property_alias}
  */
  readonly propertyAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#property_id IotTopicRule#property_id}
  */
  readonly propertyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#property_values IotTopicRule#property_values}
  */
  readonly propertyValues: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues[];
}

export function iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asset_id: cdktf.stringToTerraform(struct!.assetId),
    entry_id: cdktf.stringToTerraform(struct!.entryId),
    property_alias: cdktf.stringToTerraform(struct!.propertyAlias),
    property_id: cdktf.stringToTerraform(struct!.propertyId),
    property_values: cdktf.listMapper(iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform)(struct!.propertyValues),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionIotSiteWise {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#put_asset_property_value_entries IotTopicRule#put_asset_property_value_entries}
  */
  readonly putAssetPropertyValueEntries: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWise): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    put_asset_property_value_entries: cdktf.listMapper(iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToTerraform)(struct!.putAssetPropertyValueEntries),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionKafka {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#client_properties IotTopicRule#client_properties}
  */
  readonly clientProperties: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#destination_arn IotTopicRule#destination_arn}
  */
  readonly destinationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#key IotTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#partition IotTopicRule#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#topic IotTopicRule#topic}
  */
  readonly topic: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionKafkaToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionKafka): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.clientProperties),
    destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
    key: cdktf.stringToTerraform(struct!.key),
    partition: cdktf.stringToTerraform(struct!.partition),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionKinesis {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#partition_key IotTopicRule#partition_key}
  */
  readonly partitionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#stream_name IotTopicRule#stream_name}
  */
  readonly streamName: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionKinesisToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionKinesis): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    partition_key: cdktf.stringToTerraform(struct!.partitionKey),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionLambda {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#function_arn IotTopicRule#function_arn}
  */
  readonly functionArn?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionLambdaToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionRepublish {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#qos IotTopicRule#qos}
  */
  readonly qos?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#topic IotTopicRule#topic}
  */
  readonly topic: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionRepublishToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionRepublish): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    qos: cdktf.numberToTerraform(struct!.qos),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionS3 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#bucket_name IotTopicRule#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#canned_acl IotTopicRule#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#key IotTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionS3ToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    canned_acl: cdktf.stringToTerraform(struct!.cannedAcl),
    key: cdktf.stringToTerraform(struct!.key),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionSns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#message_format IotTopicRule#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#target_arn IotTopicRule#target_arn}
  */
  readonly targetArn: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionSnsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionSqs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#queue_url IotTopicRule#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#use_base_64 IotTopicRule#use_base_64}
  */
  readonly useBase64?: boolean | cdktf.IResolvable;
}

export function iotTopicRuleTopicRulePayloadErrorActionSqsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionSqs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    use_base_64: cdktf.booleanToTerraform(struct!.useBase64),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionStepFunctions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#execution_name_prefix IotTopicRule#execution_name_prefix}
  */
  readonly executionNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#state_machine_name IotTopicRule#state_machine_name}
  */
  readonly stateMachineName: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionStepFunctionsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionStepFunctions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    execution_name_prefix: cdktf.stringToTerraform(struct!.executionNamePrefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    state_machine_name: cdktf.stringToTerraform(struct!.stateMachineName),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#name IotTopicRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#value IotTopicRule#value}
  */
  readonly value: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#unit IotTopicRule#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#value IotTopicRule#value}
  */
  readonly value: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorActionTimestream {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#database_name IotTopicRule#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#dimensions IotTopicRule#dimensions}
  */
  readonly dimensions: IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#timestamp IotTopicRule#timestamp}
  */
  readonly timestamp?: IotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp;
}

export function iotTopicRuleTopicRulePayloadErrorActionTimestreamToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionTimestream): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_mode: cdktf.booleanToTerraform(struct!.batchMode),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    dimensions: cdktf.listMapper(iotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToTerraform)(struct!.dimensions),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    timestamp: iotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToTerraform(struct!.timestamp),
  }
}

export interface IotTopicRuleTopicRulePayloadErrorAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}
  */
  readonly cloudwatchAlarm?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#cloudwatch_logs IotTopicRule#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#cloudwatch_metric IotTopicRule#cloudwatch_metric}
  */
  readonly cloudwatchMetric?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#dynamo_d_bv_2 IotTopicRule#dynamo_d_bv_2}
  */
  readonly dynamoDBv2?: IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#dynamo_db IotTopicRule#dynamo_db}
  */
  readonly dynamoDb?: IotTopicRuleTopicRulePayloadErrorActionDynamoDb;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#elasticsearch IotTopicRule#elasticsearch}
  */
  readonly elasticsearch?: IotTopicRuleTopicRulePayloadErrorActionElasticsearch;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#firehose IotTopicRule#firehose}
  */
  readonly firehose?: IotTopicRuleTopicRulePayloadErrorActionFirehose;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#http IotTopicRule#http}
  */
  readonly http?: IotTopicRuleTopicRulePayloadErrorActionHttp;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#iot_analytics IotTopicRule#iot_analytics}
  */
  readonly iotAnalytics?: IotTopicRuleTopicRulePayloadErrorActionIotAnalytics;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#iot_events IotTopicRule#iot_events}
  */
  readonly iotEvents?: IotTopicRuleTopicRulePayloadErrorActionIotEvents;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#iot_site_wise IotTopicRule#iot_site_wise}
  */
  readonly iotSiteWise?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWise;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#kafka IotTopicRule#kafka}
  */
  readonly kafka?: IotTopicRuleTopicRulePayloadErrorActionKafka;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#kinesis IotTopicRule#kinesis}
  */
  readonly kinesis?: IotTopicRuleTopicRulePayloadErrorActionKinesis;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#lambda IotTopicRule#lambda}
  */
  readonly lambda?: IotTopicRuleTopicRulePayloadErrorActionLambda;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#republish IotTopicRule#republish}
  */
  readonly republish?: IotTopicRuleTopicRulePayloadErrorActionRepublish;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#s3 IotTopicRule#s3}
  */
  readonly s3?: IotTopicRuleTopicRulePayloadErrorActionS3;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#sns IotTopicRule#sns}
  */
  readonly sns?: IotTopicRuleTopicRulePayloadErrorActionSns;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#sqs IotTopicRule#sqs}
  */
  readonly sqs?: IotTopicRuleTopicRulePayloadErrorActionSqs;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#step_functions IotTopicRule#step_functions}
  */
  readonly stepFunctions?: IotTopicRuleTopicRulePayloadErrorActionStepFunctions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#timestream IotTopicRule#timestream}
  */
  readonly timestream?: IotTopicRuleTopicRulePayloadErrorActionTimestream;
}

export function iotTopicRuleTopicRulePayloadErrorActionToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_alarm: iotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToTerraform(struct!.cloudwatchAlarm),
    cloudwatch_logs: iotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToTerraform(struct!.cloudwatchLogs),
    cloudwatch_metric: iotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToTerraform(struct!.cloudwatchMetric),
    dynamo_d_bv_2: iotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: iotTopicRuleTopicRulePayloadErrorActionDynamoDbToTerraform(struct!.dynamoDb),
    elasticsearch: iotTopicRuleTopicRulePayloadErrorActionElasticsearchToTerraform(struct!.elasticsearch),
    firehose: iotTopicRuleTopicRulePayloadErrorActionFirehoseToTerraform(struct!.firehose),
    http: iotTopicRuleTopicRulePayloadErrorActionHttpToTerraform(struct!.http),
    iot_analytics: iotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToTerraform(struct!.iotAnalytics),
    iot_events: iotTopicRuleTopicRulePayloadErrorActionIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: iotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToTerraform(struct!.iotSiteWise),
    kafka: iotTopicRuleTopicRulePayloadErrorActionKafkaToTerraform(struct!.kafka),
    kinesis: iotTopicRuleTopicRulePayloadErrorActionKinesisToTerraform(struct!.kinesis),
    lambda: iotTopicRuleTopicRulePayloadErrorActionLambdaToTerraform(struct!.lambda),
    republish: iotTopicRuleTopicRulePayloadErrorActionRepublishToTerraform(struct!.republish),
    s3: iotTopicRuleTopicRulePayloadErrorActionS3ToTerraform(struct!.s3),
    sns: iotTopicRuleTopicRulePayloadErrorActionSnsToTerraform(struct!.sns),
    sqs: iotTopicRuleTopicRulePayloadErrorActionSqsToTerraform(struct!.sqs),
    step_functions: iotTopicRuleTopicRulePayloadErrorActionStepFunctionsToTerraform(struct!.stepFunctions),
    timestream: iotTopicRuleTopicRulePayloadErrorActionTimestreamToTerraform(struct!.timestream),
  }
}

export interface IotTopicRuleTopicRulePayload {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#actions IotTopicRule#actions}
  */
  readonly actions: IotTopicRuleTopicRulePayloadActions[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#aws_iot_sql_version IotTopicRule#aws_iot_sql_version}
  */
  readonly awsIotSqlVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#description IotTopicRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#error_action IotTopicRule#error_action}
  */
  readonly errorAction?: IotTopicRuleTopicRulePayloadErrorAction;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#rule_disabled IotTopicRule#rule_disabled}
  */
  readonly ruleDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#sql IotTopicRule#sql}
  */
  readonly sql: string;
}

export function iotTopicRuleTopicRulePayloadToTerraform(struct?: IotTopicRuleTopicRulePayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(iotTopicRuleTopicRulePayloadActionsToTerraform)(struct!.actions),
    aws_iot_sql_version: cdktf.stringToTerraform(struct!.awsIotSqlVersion),
    description: cdktf.stringToTerraform(struct!.description),
    error_action: iotTopicRuleTopicRulePayloadErrorActionToTerraform(struct!.errorAction),
    rule_disabled: cdktf.booleanToTerraform(struct!.ruleDisabled),
    sql: cdktf.stringToTerraform(struct!.sql),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html awscc_iot_topic_rule}
*/
export class IotTopicRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_topic_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html awscc_iot_topic_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotTopicRuleConfig
  */
  public constructor(scope: Construct, id: string, config: IotTopicRuleConfig) {
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
    this._ruleName = config.ruleName;
    this._tags = config.tags;
    this._topicRulePayload = config.topicRulePayload;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule_name - computed: true, optional: true, required: false
  private _ruleName?: string;
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotTopicRuleTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotTopicRuleTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // topic_rule_payload - computed: false, optional: false, required: true
  private _topicRulePayload: IotTopicRuleTopicRulePayload;
  public get topicRulePayload() {
    return this.interpolationForAttribute('topic_rule_payload') as any;
  }
  public set topicRulePayload(value: IotTopicRuleTopicRulePayload) {
    this._topicRulePayload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicRulePayloadInput() {
    return this._topicRulePayload
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rule_name: cdktf.stringToTerraform(this._ruleName),
      tags: cdktf.listMapper(iotTopicRuleTagsToTerraform)(this._tags),
      topic_rule_payload: iotTopicRuleTopicRulePayloadToTerraform(this._topicRulePayload),
    };
  }
}
