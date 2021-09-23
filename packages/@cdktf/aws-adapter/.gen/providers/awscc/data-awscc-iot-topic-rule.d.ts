import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotTopicRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule.html#id DataAwsccIotTopicRule#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotTopicRuleTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotTopicRuleTagsToTerraform(struct?: DataAwsccIotTopicRuleTags): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarm extends cdktf.ComplexComputedList {
    get alarmName(): string;
    get roleArn(): string;
    get stateReason(): string;
    get stateValue(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarm): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogs extends cdktf.ComplexComputedList {
    get logGroupName(): string;
    get roleArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogs): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetric extends cdktf.ComplexComputedList {
    get metricName(): string;
    get metricNamespace(): string;
    get metricTimestamp(): string;
    get metricUnit(): string;
    get metricValue(): string;
    get roleArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetricToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetric): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem extends cdktf.ComplexComputedList {
    get tableName(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2 extends cdktf.ComplexComputedList {
    get putItem(): any;
    get roleArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDb extends cdktf.ComplexComputedList {
    get hashKeyField(): string;
    get hashKeyType(): string;
    get hashKeyValue(): string;
    get payloadField(): string;
    get rangeKeyField(): string;
    get rangeKeyType(): string;
    get rangeKeyValue(): string;
    get roleArn(): string;
    get tableName(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDbToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDb): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearch extends cdktf.ComplexComputedList {
    get endpoint(): string;
    get id(): string;
    get index(): string;
    get roleArn(): string;
    get type(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearchToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearch): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsFirehose extends cdktf.ComplexComputedList {
    get batchMode(): any;
    get deliveryStreamName(): string;
    get roleArn(): string;
    get separator(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsFirehoseToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsFirehose): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4 extends cdktf.ComplexComputedList {
    get roleArn(): string;
    get serviceName(): string;
    get signingRegion(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuth extends cdktf.ComplexComputedList {
    get sigv4(): any;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuth): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeaders extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeadersToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeaders): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsHttp extends cdktf.ComplexComputedList {
    get auth(): any;
    get confirmationUrl(): string;
    get headers(): any;
    get url(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttp): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalytics extends cdktf.ComplexComputedList {
    get batchMode(): any;
    get channelName(): string;
    get roleArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalyticsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalytics): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsIotEvents extends cdktf.ComplexComputedList {
    get batchMode(): any;
    get inputName(): string;
    get messageId(): string;
    get roleArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsIotEventsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotEvents): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp extends cdktf.ComplexComputedList {
    get offsetInNanos(): string;
    get timeInSeconds(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue extends cdktf.ComplexComputedList {
    get booleanValue(): string;
    get doubleValue(): string;
    get integerValue(): string;
    get stringValue(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues extends cdktf.ComplexComputedList {
    get quality(): string;
    get timestamp(): any;
    get value(): any;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries extends cdktf.ComplexComputedList {
    get assetId(): string;
    get entryId(): string;
    get propertyAlias(): string;
    get propertyId(): string;
    get propertyValues(): any;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWise extends cdktf.ComplexComputedList {
    get putAssetPropertyValueEntries(): any;
    get roleArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWiseToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWise): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsKafka extends cdktf.ComplexComputedList {
    get clientProperties(): any;
    get destinationArn(): string;
    get key(): string;
    get partition(): string;
    get topic(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsKafkaToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsKafka): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsKinesis extends cdktf.ComplexComputedList {
    get partitionKey(): string;
    get roleArn(): string;
    get streamName(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsKinesisToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsKinesis): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsLambda extends cdktf.ComplexComputedList {
    get functionArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsLambdaToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsLambda): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsRepublish extends cdktf.ComplexComputedList {
    get qos(): number;
    get roleArn(): string;
    get topic(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsRepublishToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsRepublish): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsS3 extends cdktf.ComplexComputedList {
    get bucketName(): string;
    get cannedAcl(): string;
    get key(): string;
    get roleArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsS3ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsS3): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsSns extends cdktf.ComplexComputedList {
    get messageFormat(): string;
    get roleArn(): string;
    get targetArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsSnsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsSns): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsSqs extends cdktf.ComplexComputedList {
    get queueUrl(): string;
    get roleArn(): string;
    get useBase64(): any;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsSqsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsSqs): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctions extends cdktf.ComplexComputedList {
    get executionNamePrefix(): string;
    get roleArn(): string;
    get stateMachineName(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctionsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctions): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensions extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensions): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestamp extends cdktf.ComplexComputedList {
    get unit(): string;
    get value(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestampToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestamp): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActionsTimestream extends cdktf.ComplexComputedList {
    get batchMode(): any;
    get databaseName(): string;
    get dimensions(): any;
    get roleArn(): string;
    get tableName(): string;
    get timestamp(): any;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsTimestream): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadActions extends cdktf.ComplexComputedList {
    get cloudwatchAlarm(): any;
    get cloudwatchLogs(): any;
    get cloudwatchMetric(): any;
    get dynamoDBv2(): any;
    get dynamoDb(): any;
    get elasticsearch(): any;
    get firehose(): any;
    get http(): any;
    get iotAnalytics(): any;
    get iotEvents(): any;
    get iotSiteWise(): any;
    get kafka(): any;
    get kinesis(): any;
    get lambda(): any;
    get republish(): any;
    get s3(): any;
    get sns(): any;
    get sqs(): any;
    get stepFunctions(): any;
    get timestream(): any;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadActionsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActions): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm extends cdktf.ComplexComputedList {
    get alarmName(): string;
    get roleArn(): string;
    get stateReason(): string;
    get stateValue(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs extends cdktf.ComplexComputedList {
    get logGroupName(): string;
    get roleArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric extends cdktf.ComplexComputedList {
    get metricName(): string;
    get metricNamespace(): string;
    get metricTimestamp(): string;
    get metricUnit(): string;
    get metricValue(): string;
    get roleArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem extends cdktf.ComplexComputedList {
    get tableName(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2 extends cdktf.ComplexComputedList {
    get putItem(): any;
    get roleArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDb extends cdktf.ComplexComputedList {
    get hashKeyField(): string;
    get hashKeyType(): string;
    get hashKeyValue(): string;
    get payloadField(): string;
    get rangeKeyField(): string;
    get rangeKeyType(): string;
    get rangeKeyValue(): string;
    get roleArn(): string;
    get tableName(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDbToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDb): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearch extends cdktf.ComplexComputedList {
    get endpoint(): string;
    get id(): string;
    get index(): string;
    get roleArn(): string;
    get type(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearchToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearch): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehose extends cdktf.ComplexComputedList {
    get batchMode(): any;
    get deliveryStreamName(): string;
    get roleArn(): string;
    get separator(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehoseToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehose): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4 extends cdktf.ComplexComputedList {
    get roleArn(): string;
    get serviceName(): string;
    get signingRegion(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuth extends cdktf.ComplexComputedList {
    get sigv4(): any;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuth): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeaders extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeadersToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeaders): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttp extends cdktf.ComplexComputedList {
    get auth(): any;
    get confirmationUrl(): string;
    get headers(): any;
    get url(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttp): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalytics extends cdktf.ComplexComputedList {
    get batchMode(): any;
    get channelName(): string;
    get roleArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalytics): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEvents extends cdktf.ComplexComputedList {
    get batchMode(): any;
    get inputName(): string;
    get messageId(): string;
    get roleArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEventsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEvents): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp extends cdktf.ComplexComputedList {
    get offsetInNanos(): string;
    get timeInSeconds(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue extends cdktf.ComplexComputedList {
    get booleanValue(): string;
    get doubleValue(): string;
    get integerValue(): string;
    get stringValue(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues extends cdktf.ComplexComputedList {
    get quality(): string;
    get timestamp(): any;
    get value(): any;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries extends cdktf.ComplexComputedList {
    get assetId(): string;
    get entryId(): string;
    get propertyAlias(): string;
    get propertyId(): string;
    get propertyValues(): any;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWise extends cdktf.ComplexComputedList {
    get putAssetPropertyValueEntries(): any;
    get roleArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWise): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafka extends cdktf.ComplexComputedList {
    get clientProperties(): any;
    get destinationArn(): string;
    get key(): string;
    get partition(): string;
    get topic(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafka): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesis extends cdktf.ComplexComputedList {
    get partitionKey(): string;
    get roleArn(): string;
    get streamName(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesisToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesis): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionLambda extends cdktf.ComplexComputedList {
    get functionArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionLambdaToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionLambda): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublish extends cdktf.ComplexComputedList {
    get qos(): number;
    get roleArn(): string;
    get topic(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublish): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionS3 extends cdktf.ComplexComputedList {
    get bucketName(): string;
    get cannedAcl(): string;
    get key(): string;
    get roleArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionS3ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionS3): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionSns extends cdktf.ComplexComputedList {
    get messageFormat(): string;
    get roleArn(): string;
    get targetArn(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionSnsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionSns): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionSqs extends cdktf.ComplexComputedList {
    get queueUrl(): string;
    get roleArn(): string;
    get useBase64(): any;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionSqsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionSqs): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctions extends cdktf.ComplexComputedList {
    get executionNamePrefix(): string;
    get roleArn(): string;
    get stateMachineName(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctionsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctions): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp extends cdktf.ComplexComputedList {
    get unit(): string;
    get value(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestream extends cdktf.ComplexComputedList {
    get batchMode(): any;
    get databaseName(): string;
    get dimensions(): any;
    get roleArn(): string;
    get tableName(): string;
    get timestamp(): any;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestream): any;
export declare class DataAwsccIotTopicRuleTopicRulePayloadErrorAction extends cdktf.ComplexComputedList {
    get cloudwatchAlarm(): any;
    get cloudwatchLogs(): any;
    get cloudwatchMetric(): any;
    get dynamoDBv2(): any;
    get dynamoDb(): any;
    get elasticsearch(): any;
    get firehose(): any;
    get http(): any;
    get iotAnalytics(): any;
    get iotEvents(): any;
    get iotSiteWise(): any;
    get kafka(): any;
    get kinesis(): any;
    get lambda(): any;
    get republish(): any;
    get s3(): any;
    get sns(): any;
    get sqs(): any;
    get stepFunctions(): any;
    get timestream(): any;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadErrorActionToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorAction): any;
export declare class DataAwsccIotTopicRuleTopicRulePayload extends cdktf.ComplexComputedList {
    get actions(): any;
    get awsIotSqlVersion(): string;
    get description(): string;
    get errorAction(): any;
    get ruleDisabled(): any;
    get sql(): string;
}
export declare function dataAwsccIotTopicRuleTopicRulePayloadToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayload): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule.html awscc_iot_topic_rule}
*/
export declare class DataAwsccIotTopicRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule.html awscc_iot_topic_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotTopicRuleConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotTopicRuleConfig);
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get ruleName(): string;
    get tags(): any;
    get topicRulePayload(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
