import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function iotTopicRuleTagsToTerraform(struct?: IotTopicRuleTags): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsCloudwatchAlarm): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsCloudwatchLogsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsCloudwatchLogs): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsCloudwatchMetricToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsCloudwatchMetric): any;
export interface IotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
    */
    readonly tableName: string;
}
export declare function iotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsDynamoDBv2ToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsDynamoDBv2): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsDynamoDbToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsDynamoDb): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsElasticsearchToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsElasticsearch): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsFirehoseToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsFirehose): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttpAuthSigv4): any;
export interface IotTopicRuleTopicRulePayloadActionsHttpAuth {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#sigv_4 IotTopicRule#sigv_4}
    */
    readonly sigv4?: IotTopicRuleTopicRulePayloadActionsHttpAuthSigv4;
}
export declare function iotTopicRuleTopicRulePayloadActionsHttpAuthToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttpAuth): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsHttpHeadersToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttpHeaders): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsHttpToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttp): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsIotAnalyticsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotAnalytics): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsIotEventsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotEvents): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsIotSiteWiseToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWise): any;
export interface IotTopicRuleTopicRulePayloadActionsKafka {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#client_properties IotTopicRule#client_properties}
    */
    readonly clientProperties: {
        [key: string]: string;
    } | cdktf.IResolvable;
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
export declare function iotTopicRuleTopicRulePayloadActionsKafkaToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsKafka): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsKinesisToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsKinesis): any;
export interface IotTopicRuleTopicRulePayloadActionsLambda {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#function_arn IotTopicRule#function_arn}
    */
    readonly functionArn?: string;
}
export declare function iotTopicRuleTopicRulePayloadActionsLambdaToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsLambda): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsRepublishToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsRepublish): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsS3ToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsS3): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsSnsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsSns): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsSqsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsSqs): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsStepFunctionsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsStepFunctions): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsTimestreamDimensions): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsTimestreamTimestampToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsTimestreamTimestamp): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsTimestreamToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsTimestream): any;
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
export declare function iotTopicRuleTopicRulePayloadActionsToTerraform(struct?: IotTopicRuleTopicRulePayloadActions): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric): any;
export interface IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
    */
    readonly tableName: string;
}
export declare function iotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionDynamoDbToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionDynamoDb): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionElasticsearchToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionElasticsearch): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionFirehoseToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionFirehose): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4): any;
export interface IotTopicRuleTopicRulePayloadErrorActionHttpAuth {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#sigv_4 IotTopicRule#sigv_4}
    */
    readonly sigv4?: IotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4;
}
export declare function iotTopicRuleTopicRulePayloadErrorActionHttpAuthToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttpAuth): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionHttpHeadersToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttpHeaders): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionHttpToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttp): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotAnalytics): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionIotEventsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotEvents): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWise): any;
export interface IotTopicRuleTopicRulePayloadErrorActionKafka {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#client_properties IotTopicRule#client_properties}
    */
    readonly clientProperties: {
        [key: string]: string;
    } | cdktf.IResolvable;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionKafkaToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionKafka): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionKinesisToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionKinesis): any;
export interface IotTopicRuleTopicRulePayloadErrorActionLambda {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html#function_arn IotTopicRule#function_arn}
    */
    readonly functionArn?: string;
}
export declare function iotTopicRuleTopicRulePayloadErrorActionLambdaToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionLambda): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionRepublishToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionRepublish): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionS3ToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionS3): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionSnsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionSns): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionSqsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionSqs): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionStepFunctionsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionStepFunctions): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionTimestreamToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionTimestream): any;
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
export declare function iotTopicRuleTopicRulePayloadErrorActionToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorAction): any;
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
export declare function iotTopicRuleTopicRulePayloadToTerraform(struct?: IotTopicRuleTopicRulePayload): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html awscc_iot_topic_rule}
*/
export declare class IotTopicRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule.html awscc_iot_topic_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotTopicRuleConfig
    */
    constructor(scope: Construct, id: string, config: IotTopicRuleConfig);
    get arn(): string;
    get id(): string;
    private _ruleName?;
    get ruleName(): string;
    set ruleName(value: string);
    resetRuleName(): void;
    get ruleNameInput(): string | undefined;
    private _tags?;
    get tags(): IotTopicRuleTags[];
    set tags(value: IotTopicRuleTags[]);
    resetTags(): void;
    get tagsInput(): IotTopicRuleTags[] | undefined;
    private _topicRulePayload;
    get topicRulePayload(): IotTopicRuleTopicRulePayload;
    set topicRulePayload(value: IotTopicRuleTopicRulePayload);
    get topicRulePayloadInput(): IotTopicRuleTopicRulePayload;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
