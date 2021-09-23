"use strict";
// https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsS3ToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsS3 = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsRepublishToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsRepublish = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsLambdaToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsLambda = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsKinesisToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsKinesis = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsKafkaToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsKafka = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWiseToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWise = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsIotEventsToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsIotEvents = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalyticsToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalytics = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsHttpToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsHttp = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeadersToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeaders = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuth = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4 = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsFirehoseToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsFirehose = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearchToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearch = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDbToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDb = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2ToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2 = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetricToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetric = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogsToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogs = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarm = exports.dataAwsccIotTopicRuleTagsToTerraform = exports.DataAwsccIotTopicRuleTags = void 0;
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEventsToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEvents = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalytics = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttp = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeadersToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeaders = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuth = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4 = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehoseToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehose = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearchToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearch = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDbToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDb = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2 = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActions = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsTimestream = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestampToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestamp = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensions = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctionsToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctions = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsSqsToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsSqs = exports.dataAwsccIotTopicRuleTopicRulePayloadActionsSnsToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadActionsSns = void 0;
exports.DataAwsccIotTopicRule = exports.dataAwsccIotTopicRuleTopicRulePayloadToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayload = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorAction = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestream = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctionsToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctions = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionSqsToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionSqs = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionSnsToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionSns = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionS3ToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionS3 = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublish = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionLambdaToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionLambda = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesisToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesis = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafka = exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToTerraform = exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWise = void 0;
const cdktf = require("cdktf");
class DataAwsccIotTopicRuleTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccIotTopicRuleTags = DataAwsccIotTopicRuleTags;
function dataAwsccIotTopicRuleTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccIotTopicRuleTagsToTerraform = dataAwsccIotTopicRuleTagsToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarm extends cdktf.ComplexComputedList {
    // alarm_name - computed: true, optional: false, required: false
    get alarmName() {
        return this.getStringAttribute('alarm_name');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // state_reason - computed: true, optional: false, required: false
    get stateReason() {
        return this.getStringAttribute('state_reason');
    }
    // state_value - computed: true, optional: false, required: false
    get stateValue() {
        return this.getStringAttribute('state_value');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarm = DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarm;
function dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarm_name: cdktf.stringToTerraform(struct.alarmName),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        state_reason: cdktf.stringToTerraform(struct.stateReason),
        state_value: cdktf.stringToTerraform(struct.stateValue),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogs extends cdktf.ComplexComputedList {
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogs = DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogs;
function dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogsToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogsToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetric extends cdktf.ComplexComputedList {
    // metric_name - computed: true, optional: false, required: false
    get metricName() {
        return this.getStringAttribute('metric_name');
    }
    // metric_namespace - computed: true, optional: false, required: false
    get metricNamespace() {
        return this.getStringAttribute('metric_namespace');
    }
    // metric_timestamp - computed: true, optional: false, required: false
    get metricTimestamp() {
        return this.getStringAttribute('metric_timestamp');
    }
    // metric_unit - computed: true, optional: false, required: false
    get metricUnit() {
        return this.getStringAttribute('metric_unit');
    }
    // metric_value - computed: true, optional: false, required: false
    get metricValue() {
        return this.getStringAttribute('metric_value');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetric = DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetric;
function dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetricToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        metric_name: cdktf.stringToTerraform(struct.metricName),
        metric_namespace: cdktf.stringToTerraform(struct.metricNamespace),
        metric_timestamp: cdktf.stringToTerraform(struct.metricTimestamp),
        metric_unit: cdktf.stringToTerraform(struct.metricUnit),
        metric_value: cdktf.stringToTerraform(struct.metricValue),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetricToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetricToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem extends cdktf.ComplexComputedList {
    // table_name - computed: true, optional: false, required: false
    get tableName() {
        return this.getStringAttribute('table_name');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem = DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem;
function dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        table_name: cdktf.stringToTerraform(struct.tableName),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2 extends cdktf.ComplexComputedList {
    // put_item - computed: true, optional: false, required: false
    get putItem() {
        return this.interpolationForAttribute('put_item');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2 = DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2;
function dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        put_item: dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToTerraform(struct.putItem),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2ToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2ToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDb extends cdktf.ComplexComputedList {
    // hash_key_field - computed: true, optional: false, required: false
    get hashKeyField() {
        return this.getStringAttribute('hash_key_field');
    }
    // hash_key_type - computed: true, optional: false, required: false
    get hashKeyType() {
        return this.getStringAttribute('hash_key_type');
    }
    // hash_key_value - computed: true, optional: false, required: false
    get hashKeyValue() {
        return this.getStringAttribute('hash_key_value');
    }
    // payload_field - computed: true, optional: false, required: false
    get payloadField() {
        return this.getStringAttribute('payload_field');
    }
    // range_key_field - computed: true, optional: false, required: false
    get rangeKeyField() {
        return this.getStringAttribute('range_key_field');
    }
    // range_key_type - computed: true, optional: false, required: false
    get rangeKeyType() {
        return this.getStringAttribute('range_key_type');
    }
    // range_key_value - computed: true, optional: false, required: false
    get rangeKeyValue() {
        return this.getStringAttribute('range_key_value');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // table_name - computed: true, optional: false, required: false
    get tableName() {
        return this.getStringAttribute('table_name');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDb = DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDb;
function dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDbToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hash_key_field: cdktf.stringToTerraform(struct.hashKeyField),
        hash_key_type: cdktf.stringToTerraform(struct.hashKeyType),
        hash_key_value: cdktf.stringToTerraform(struct.hashKeyValue),
        payload_field: cdktf.stringToTerraform(struct.payloadField),
        range_key_field: cdktf.stringToTerraform(struct.rangeKeyField),
        range_key_type: cdktf.stringToTerraform(struct.rangeKeyType),
        range_key_value: cdktf.stringToTerraform(struct.rangeKeyValue),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        table_name: cdktf.stringToTerraform(struct.tableName),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDbToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDbToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearch extends cdktf.ComplexComputedList {
    // endpoint - computed: true, optional: false, required: false
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // index - computed: true, optional: false, required: false
    get index() {
        return this.getStringAttribute('index');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearch = DataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearch;
function dataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint: cdktf.stringToTerraform(struct.endpoint),
        id: cdktf.stringToTerraform(struct.id),
        index: cdktf.stringToTerraform(struct.index),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearchToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearchToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsFirehose extends cdktf.ComplexComputedList {
    // batch_mode - computed: true, optional: false, required: false
    get batchMode() {
        return this.getBooleanAttribute('batch_mode');
    }
    // delivery_stream_name - computed: true, optional: false, required: false
    get deliveryStreamName() {
        return this.getStringAttribute('delivery_stream_name');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // separator - computed: true, optional: false, required: false
    get separator() {
        return this.getStringAttribute('separator');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsFirehose = DataAwsccIotTopicRuleTopicRulePayloadActionsFirehose;
function dataAwsccIotTopicRuleTopicRulePayloadActionsFirehoseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        batch_mode: cdktf.booleanToTerraform(struct.batchMode),
        delivery_stream_name: cdktf.stringToTerraform(struct.deliveryStreamName),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        separator: cdktf.stringToTerraform(struct.separator),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsFirehoseToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsFirehoseToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4 extends cdktf.ComplexComputedList {
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // service_name - computed: true, optional: false, required: false
    get serviceName() {
        return this.getStringAttribute('service_name');
    }
    // signing_region - computed: true, optional: false, required: false
    get signingRegion() {
        return this.getStringAttribute('signing_region');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4 = DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4;
function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        service_name: cdktf.stringToTerraform(struct.serviceName),
        signing_region: cdktf.stringToTerraform(struct.signingRegion),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuth extends cdktf.ComplexComputedList {
    // sigv_4 - computed: true, optional: false, required: false
    get sigv4() {
        return this.interpolationForAttribute('sigv_4');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuth = DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuth;
function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        sigv_4: dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToTerraform(struct.sigv4),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeaders extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeaders = DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeaders;
function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeadersToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeadersToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsHttp extends cdktf.ComplexComputedList {
    // auth - computed: true, optional: false, required: false
    get auth() {
        return this.interpolationForAttribute('auth');
    }
    // confirmation_url - computed: true, optional: false, required: false
    get confirmationUrl() {
        return this.getStringAttribute('confirmation_url');
    }
    // headers - computed: true, optional: false, required: false
    get headers() {
        return this.interpolationForAttribute('headers');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsHttp = DataAwsccIotTopicRuleTopicRulePayloadActionsHttp;
function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auth: dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthToTerraform(struct.auth),
        confirmation_url: cdktf.stringToTerraform(struct.confirmationUrl),
        headers: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeadersToTerraform)(struct.headers),
        url: cdktf.stringToTerraform(struct.url),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsHttpToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsHttpToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalytics extends cdktf.ComplexComputedList {
    // batch_mode - computed: true, optional: false, required: false
    get batchMode() {
        return this.getBooleanAttribute('batch_mode');
    }
    // channel_name - computed: true, optional: false, required: false
    get channelName() {
        return this.getStringAttribute('channel_name');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalytics = DataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalytics;
function dataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalyticsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        batch_mode: cdktf.booleanToTerraform(struct.batchMode),
        channel_name: cdktf.stringToTerraform(struct.channelName),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalyticsToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalyticsToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsIotEvents extends cdktf.ComplexComputedList {
    // batch_mode - computed: true, optional: false, required: false
    get batchMode() {
        return this.getBooleanAttribute('batch_mode');
    }
    // input_name - computed: true, optional: false, required: false
    get inputName() {
        return this.getStringAttribute('input_name');
    }
    // message_id - computed: true, optional: false, required: false
    get messageId() {
        return this.getStringAttribute('message_id');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsIotEvents = DataAwsccIotTopicRuleTopicRulePayloadActionsIotEvents;
function dataAwsccIotTopicRuleTopicRulePayloadActionsIotEventsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        batch_mode: cdktf.booleanToTerraform(struct.batchMode),
        input_name: cdktf.stringToTerraform(struct.inputName),
        message_id: cdktf.stringToTerraform(struct.messageId),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsIotEventsToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsIotEventsToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp extends cdktf.ComplexComputedList {
    // offset_in_nanos - computed: true, optional: false, required: false
    get offsetInNanos() {
        return this.getStringAttribute('offset_in_nanos');
    }
    // time_in_seconds - computed: true, optional: false, required: false
    get timeInSeconds() {
        return this.getStringAttribute('time_in_seconds');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp = DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp;
function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        offset_in_nanos: cdktf.stringToTerraform(struct.offsetInNanos),
        time_in_seconds: cdktf.stringToTerraform(struct.timeInSeconds),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue extends cdktf.ComplexComputedList {
    // boolean_value - computed: true, optional: false, required: false
    get booleanValue() {
        return this.getStringAttribute('boolean_value');
    }
    // double_value - computed: true, optional: false, required: false
    get doubleValue() {
        return this.getStringAttribute('double_value');
    }
    // integer_value - computed: true, optional: false, required: false
    get integerValue() {
        return this.getStringAttribute('integer_value');
    }
    // string_value - computed: true, optional: false, required: false
    get stringValue() {
        return this.getStringAttribute('string_value');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue = DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue;
function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        boolean_value: cdktf.stringToTerraform(struct.booleanValue),
        double_value: cdktf.stringToTerraform(struct.doubleValue),
        integer_value: cdktf.stringToTerraform(struct.integerValue),
        string_value: cdktf.stringToTerraform(struct.stringValue),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues extends cdktf.ComplexComputedList {
    // quality - computed: true, optional: false, required: false
    get quality() {
        return this.getStringAttribute('quality');
    }
    // timestamp - computed: true, optional: false, required: false
    get timestamp() {
        return this.interpolationForAttribute('timestamp');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.interpolationForAttribute('value');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues = DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues;
function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        quality: cdktf.stringToTerraform(struct.quality),
        timestamp: dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct.timestamp),
        value: dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct.value),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries extends cdktf.ComplexComputedList {
    // asset_id - computed: true, optional: false, required: false
    get assetId() {
        return this.getStringAttribute('asset_id');
    }
    // entry_id - computed: true, optional: false, required: false
    get entryId() {
        return this.getStringAttribute('entry_id');
    }
    // property_alias - computed: true, optional: false, required: false
    get propertyAlias() {
        return this.getStringAttribute('property_alias');
    }
    // property_id - computed: true, optional: false, required: false
    get propertyId() {
        return this.getStringAttribute('property_id');
    }
    // property_values - computed: true, optional: false, required: false
    get propertyValues() {
        return this.interpolationForAttribute('property_values');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries = DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries;
function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        asset_id: cdktf.stringToTerraform(struct.assetId),
        entry_id: cdktf.stringToTerraform(struct.entryId),
        property_alias: cdktf.stringToTerraform(struct.propertyAlias),
        property_id: cdktf.stringToTerraform(struct.propertyId),
        property_values: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform)(struct.propertyValues),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWise extends cdktf.ComplexComputedList {
    // put_asset_property_value_entries - computed: true, optional: false, required: false
    get putAssetPropertyValueEntries() {
        return this.interpolationForAttribute('put_asset_property_value_entries');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWise = DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWise;
function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWiseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        put_asset_property_value_entries: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToTerraform)(struct.putAssetPropertyValueEntries),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWiseToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWiseToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsKafka extends cdktf.ComplexComputedList {
    // client_properties - computed: true, optional: false, required: false
    get clientProperties() {
        return this.interpolationForAttribute('client_properties');
    }
    // destination_arn - computed: true, optional: false, required: false
    get destinationArn() {
        return this.getStringAttribute('destination_arn');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // partition - computed: true, optional: false, required: false
    get partition() {
        return this.getStringAttribute('partition');
    }
    // topic - computed: true, optional: false, required: false
    get topic() {
        return this.getStringAttribute('topic');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsKafka = DataAwsccIotTopicRuleTopicRulePayloadActionsKafka;
function dataAwsccIotTopicRuleTopicRulePayloadActionsKafkaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct.clientProperties),
        destination_arn: cdktf.stringToTerraform(struct.destinationArn),
        key: cdktf.stringToTerraform(struct.key),
        partition: cdktf.stringToTerraform(struct.partition),
        topic: cdktf.stringToTerraform(struct.topic),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsKafkaToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsKafkaToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsKinesis extends cdktf.ComplexComputedList {
    // partition_key - computed: true, optional: false, required: false
    get partitionKey() {
        return this.getStringAttribute('partition_key');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // stream_name - computed: true, optional: false, required: false
    get streamName() {
        return this.getStringAttribute('stream_name');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsKinesis = DataAwsccIotTopicRuleTopicRulePayloadActionsKinesis;
function dataAwsccIotTopicRuleTopicRulePayloadActionsKinesisToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        partition_key: cdktf.stringToTerraform(struct.partitionKey),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        stream_name: cdktf.stringToTerraform(struct.streamName),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsKinesisToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsKinesisToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsLambda extends cdktf.ComplexComputedList {
    // function_arn - computed: true, optional: false, required: false
    get functionArn() {
        return this.getStringAttribute('function_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsLambda = DataAwsccIotTopicRuleTopicRulePayloadActionsLambda;
function dataAwsccIotTopicRuleTopicRulePayloadActionsLambdaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        function_arn: cdktf.stringToTerraform(struct.functionArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsLambdaToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsLambdaToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsRepublish extends cdktf.ComplexComputedList {
    // qos - computed: true, optional: false, required: false
    get qos() {
        return this.getNumberAttribute('qos');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // topic - computed: true, optional: false, required: false
    get topic() {
        return this.getStringAttribute('topic');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsRepublish = DataAwsccIotTopicRuleTopicRulePayloadActionsRepublish;
function dataAwsccIotTopicRuleTopicRulePayloadActionsRepublishToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        qos: cdktf.numberToTerraform(struct.qos),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        topic: cdktf.stringToTerraform(struct.topic),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsRepublishToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsRepublishToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsS3 extends cdktf.ComplexComputedList {
    // bucket_name - computed: true, optional: false, required: false
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    // canned_acl - computed: true, optional: false, required: false
    get cannedAcl() {
        return this.getStringAttribute('canned_acl');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsS3 = DataAwsccIotTopicRuleTopicRulePayloadActionsS3;
function dataAwsccIotTopicRuleTopicRulePayloadActionsS3ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        canned_acl: cdktf.stringToTerraform(struct.cannedAcl),
        key: cdktf.stringToTerraform(struct.key),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsS3ToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsS3ToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsSns extends cdktf.ComplexComputedList {
    // message_format - computed: true, optional: false, required: false
    get messageFormat() {
        return this.getStringAttribute('message_format');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // target_arn - computed: true, optional: false, required: false
    get targetArn() {
        return this.getStringAttribute('target_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsSns = DataAwsccIotTopicRuleTopicRulePayloadActionsSns;
function dataAwsccIotTopicRuleTopicRulePayloadActionsSnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message_format: cdktf.stringToTerraform(struct.messageFormat),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        target_arn: cdktf.stringToTerraform(struct.targetArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsSnsToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsSnsToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsSqs extends cdktf.ComplexComputedList {
    // queue_url - computed: true, optional: false, required: false
    get queueUrl() {
        return this.getStringAttribute('queue_url');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // use_base_64 - computed: true, optional: false, required: false
    get useBase64() {
        return this.getBooleanAttribute('use_base_64');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsSqs = DataAwsccIotTopicRuleTopicRulePayloadActionsSqs;
function dataAwsccIotTopicRuleTopicRulePayloadActionsSqsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        queue_url: cdktf.stringToTerraform(struct.queueUrl),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        use_base_64: cdktf.booleanToTerraform(struct.useBase64),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsSqsToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsSqsToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctions extends cdktf.ComplexComputedList {
    // execution_name_prefix - computed: true, optional: false, required: false
    get executionNamePrefix() {
        return this.getStringAttribute('execution_name_prefix');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // state_machine_name - computed: true, optional: false, required: false
    get stateMachineName() {
        return this.getStringAttribute('state_machine_name');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctions = DataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctions;
function dataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        execution_name_prefix: cdktf.stringToTerraform(struct.executionNamePrefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        state_machine_name: cdktf.stringToTerraform(struct.stateMachineName),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctionsToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctionsToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensions extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensions = DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensions;
function dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestamp extends cdktf.ComplexComputedList {
    // unit - computed: true, optional: false, required: false
    get unit() {
        return this.getStringAttribute('unit');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestamp = DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestamp;
function dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestampToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestampToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestampToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActionsTimestream extends cdktf.ComplexComputedList {
    // batch_mode - computed: true, optional: false, required: false
    get batchMode() {
        return this.getBooleanAttribute('batch_mode');
    }
    // database_name - computed: true, optional: false, required: false
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    // dimensions - computed: true, optional: false, required: false
    get dimensions() {
        return this.interpolationForAttribute('dimensions');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // table_name - computed: true, optional: false, required: false
    get tableName() {
        return this.getStringAttribute('table_name');
    }
    // timestamp - computed: true, optional: false, required: false
    get timestamp() {
        return this.interpolationForAttribute('timestamp');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActionsTimestream = DataAwsccIotTopicRuleTopicRulePayloadActionsTimestream;
function dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        batch_mode: cdktf.booleanToTerraform(struct.batchMode),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        dimensions: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToTerraform)(struct.dimensions),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        table_name: cdktf.stringToTerraform(struct.tableName),
        timestamp: dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestampToTerraform(struct.timestamp),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadActions extends cdktf.ComplexComputedList {
    // cloudwatch_alarm - computed: true, optional: false, required: false
    get cloudwatchAlarm() {
        return this.interpolationForAttribute('cloudwatch_alarm');
    }
    // cloudwatch_logs - computed: true, optional: false, required: false
    get cloudwatchLogs() {
        return this.interpolationForAttribute('cloudwatch_logs');
    }
    // cloudwatch_metric - computed: true, optional: false, required: false
    get cloudwatchMetric() {
        return this.interpolationForAttribute('cloudwatch_metric');
    }
    // dynamo_d_bv_2 - computed: true, optional: false, required: false
    get dynamoDBv2() {
        return this.interpolationForAttribute('dynamo_d_bv_2');
    }
    // dynamo_db - computed: true, optional: false, required: false
    get dynamoDb() {
        return this.interpolationForAttribute('dynamo_db');
    }
    // elasticsearch - computed: true, optional: false, required: false
    get elasticsearch() {
        return this.interpolationForAttribute('elasticsearch');
    }
    // firehose - computed: true, optional: false, required: false
    get firehose() {
        return this.interpolationForAttribute('firehose');
    }
    // http - computed: true, optional: false, required: false
    get http() {
        return this.interpolationForAttribute('http');
    }
    // iot_analytics - computed: true, optional: false, required: false
    get iotAnalytics() {
        return this.interpolationForAttribute('iot_analytics');
    }
    // iot_events - computed: true, optional: false, required: false
    get iotEvents() {
        return this.interpolationForAttribute('iot_events');
    }
    // iot_site_wise - computed: true, optional: false, required: false
    get iotSiteWise() {
        return this.interpolationForAttribute('iot_site_wise');
    }
    // kafka - computed: true, optional: false, required: false
    get kafka() {
        return this.interpolationForAttribute('kafka');
    }
    // kinesis - computed: true, optional: false, required: false
    get kinesis() {
        return this.interpolationForAttribute('kinesis');
    }
    // lambda - computed: true, optional: false, required: false
    get lambda() {
        return this.interpolationForAttribute('lambda');
    }
    // republish - computed: true, optional: false, required: false
    get republish() {
        return this.interpolationForAttribute('republish');
    }
    // s3 - computed: true, optional: false, required: false
    get s3() {
        return this.interpolationForAttribute('s3');
    }
    // sns - computed: true, optional: false, required: false
    get sns() {
        return this.interpolationForAttribute('sns');
    }
    // sqs - computed: true, optional: false, required: false
    get sqs() {
        return this.interpolationForAttribute('sqs');
    }
    // step_functions - computed: true, optional: false, required: false
    get stepFunctions() {
        return this.interpolationForAttribute('step_functions');
    }
    // timestream - computed: true, optional: false, required: false
    get timestream() {
        return this.interpolationForAttribute('timestream');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadActions = DataAwsccIotTopicRuleTopicRulePayloadActions;
function dataAwsccIotTopicRuleTopicRulePayloadActionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_alarm: dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToTerraform(struct.cloudwatchAlarm),
        cloudwatch_logs: dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogsToTerraform(struct.cloudwatchLogs),
        cloudwatch_metric: dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetricToTerraform(struct.cloudwatchMetric),
        dynamo_d_bv_2: dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2ToTerraform(struct.dynamoDBv2),
        dynamo_db: dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDbToTerraform(struct.dynamoDb),
        elasticsearch: dataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearchToTerraform(struct.elasticsearch),
        firehose: dataAwsccIotTopicRuleTopicRulePayloadActionsFirehoseToTerraform(struct.firehose),
        http: dataAwsccIotTopicRuleTopicRulePayloadActionsHttpToTerraform(struct.http),
        iot_analytics: dataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalyticsToTerraform(struct.iotAnalytics),
        iot_events: dataAwsccIotTopicRuleTopicRulePayloadActionsIotEventsToTerraform(struct.iotEvents),
        iot_site_wise: dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWiseToTerraform(struct.iotSiteWise),
        kafka: dataAwsccIotTopicRuleTopicRulePayloadActionsKafkaToTerraform(struct.kafka),
        kinesis: dataAwsccIotTopicRuleTopicRulePayloadActionsKinesisToTerraform(struct.kinesis),
        lambda: dataAwsccIotTopicRuleTopicRulePayloadActionsLambdaToTerraform(struct.lambda),
        republish: dataAwsccIotTopicRuleTopicRulePayloadActionsRepublishToTerraform(struct.republish),
        s3: dataAwsccIotTopicRuleTopicRulePayloadActionsS3ToTerraform(struct.s3),
        sns: dataAwsccIotTopicRuleTopicRulePayloadActionsSnsToTerraform(struct.sns),
        sqs: dataAwsccIotTopicRuleTopicRulePayloadActionsSqsToTerraform(struct.sqs),
        step_functions: dataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctionsToTerraform(struct.stepFunctions),
        timestream: dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamToTerraform(struct.timestream),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadActionsToTerraform = dataAwsccIotTopicRuleTopicRulePayloadActionsToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm extends cdktf.ComplexComputedList {
    // alarm_name - computed: true, optional: false, required: false
    get alarmName() {
        return this.getStringAttribute('alarm_name');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // state_reason - computed: true, optional: false, required: false
    get stateReason() {
        return this.getStringAttribute('state_reason');
    }
    // state_value - computed: true, optional: false, required: false
    get stateValue() {
        return this.getStringAttribute('state_value');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm = DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarm_name: cdktf.stringToTerraform(struct.alarmName),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        state_reason: cdktf.stringToTerraform(struct.stateReason),
        state_value: cdktf.stringToTerraform(struct.stateValue),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs extends cdktf.ComplexComputedList {
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs = DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric extends cdktf.ComplexComputedList {
    // metric_name - computed: true, optional: false, required: false
    get metricName() {
        return this.getStringAttribute('metric_name');
    }
    // metric_namespace - computed: true, optional: false, required: false
    get metricNamespace() {
        return this.getStringAttribute('metric_namespace');
    }
    // metric_timestamp - computed: true, optional: false, required: false
    get metricTimestamp() {
        return this.getStringAttribute('metric_timestamp');
    }
    // metric_unit - computed: true, optional: false, required: false
    get metricUnit() {
        return this.getStringAttribute('metric_unit');
    }
    // metric_value - computed: true, optional: false, required: false
    get metricValue() {
        return this.getStringAttribute('metric_value');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric = DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        metric_name: cdktf.stringToTerraform(struct.metricName),
        metric_namespace: cdktf.stringToTerraform(struct.metricNamespace),
        metric_timestamp: cdktf.stringToTerraform(struct.metricTimestamp),
        metric_unit: cdktf.stringToTerraform(struct.metricUnit),
        metric_value: cdktf.stringToTerraform(struct.metricValue),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem extends cdktf.ComplexComputedList {
    // table_name - computed: true, optional: false, required: false
    get tableName() {
        return this.getStringAttribute('table_name');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem = DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        table_name: cdktf.stringToTerraform(struct.tableName),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2 extends cdktf.ComplexComputedList {
    // put_item - computed: true, optional: false, required: false
    get putItem() {
        return this.interpolationForAttribute('put_item');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2 = DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        put_item: dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToTerraform(struct.putItem),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDb extends cdktf.ComplexComputedList {
    // hash_key_field - computed: true, optional: false, required: false
    get hashKeyField() {
        return this.getStringAttribute('hash_key_field');
    }
    // hash_key_type - computed: true, optional: false, required: false
    get hashKeyType() {
        return this.getStringAttribute('hash_key_type');
    }
    // hash_key_value - computed: true, optional: false, required: false
    get hashKeyValue() {
        return this.getStringAttribute('hash_key_value');
    }
    // payload_field - computed: true, optional: false, required: false
    get payloadField() {
        return this.getStringAttribute('payload_field');
    }
    // range_key_field - computed: true, optional: false, required: false
    get rangeKeyField() {
        return this.getStringAttribute('range_key_field');
    }
    // range_key_type - computed: true, optional: false, required: false
    get rangeKeyType() {
        return this.getStringAttribute('range_key_type');
    }
    // range_key_value - computed: true, optional: false, required: false
    get rangeKeyValue() {
        return this.getStringAttribute('range_key_value');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // table_name - computed: true, optional: false, required: false
    get tableName() {
        return this.getStringAttribute('table_name');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDb = DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDb;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDbToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hash_key_field: cdktf.stringToTerraform(struct.hashKeyField),
        hash_key_type: cdktf.stringToTerraform(struct.hashKeyType),
        hash_key_value: cdktf.stringToTerraform(struct.hashKeyValue),
        payload_field: cdktf.stringToTerraform(struct.payloadField),
        range_key_field: cdktf.stringToTerraform(struct.rangeKeyField),
        range_key_type: cdktf.stringToTerraform(struct.rangeKeyType),
        range_key_value: cdktf.stringToTerraform(struct.rangeKeyValue),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        table_name: cdktf.stringToTerraform(struct.tableName),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDbToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDbToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearch extends cdktf.ComplexComputedList {
    // endpoint - computed: true, optional: false, required: false
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // index - computed: true, optional: false, required: false
    get index() {
        return this.getStringAttribute('index');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearch = DataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearch;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint: cdktf.stringToTerraform(struct.endpoint),
        id: cdktf.stringToTerraform(struct.id),
        index: cdktf.stringToTerraform(struct.index),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearchToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearchToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehose extends cdktf.ComplexComputedList {
    // batch_mode - computed: true, optional: false, required: false
    get batchMode() {
        return this.getBooleanAttribute('batch_mode');
    }
    // delivery_stream_name - computed: true, optional: false, required: false
    get deliveryStreamName() {
        return this.getStringAttribute('delivery_stream_name');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // separator - computed: true, optional: false, required: false
    get separator() {
        return this.getStringAttribute('separator');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehose = DataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehose;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehoseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        batch_mode: cdktf.booleanToTerraform(struct.batchMode),
        delivery_stream_name: cdktf.stringToTerraform(struct.deliveryStreamName),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        separator: cdktf.stringToTerraform(struct.separator),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehoseToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehoseToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4 extends cdktf.ComplexComputedList {
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // service_name - computed: true, optional: false, required: false
    get serviceName() {
        return this.getStringAttribute('service_name');
    }
    // signing_region - computed: true, optional: false, required: false
    get signingRegion() {
        return this.getStringAttribute('signing_region');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4 = DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        service_name: cdktf.stringToTerraform(struct.serviceName),
        signing_region: cdktf.stringToTerraform(struct.signingRegion),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuth extends cdktf.ComplexComputedList {
    // sigv_4 - computed: true, optional: false, required: false
    get sigv4() {
        return this.interpolationForAttribute('sigv_4');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuth = DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuth;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        sigv_4: dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToTerraform(struct.sigv4),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeaders extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeaders = DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeaders;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeadersToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeadersToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttp extends cdktf.ComplexComputedList {
    // auth - computed: true, optional: false, required: false
    get auth() {
        return this.interpolationForAttribute('auth');
    }
    // confirmation_url - computed: true, optional: false, required: false
    get confirmationUrl() {
        return this.getStringAttribute('confirmation_url');
    }
    // headers - computed: true, optional: false, required: false
    get headers() {
        return this.interpolationForAttribute('headers');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttp = DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttp;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auth: dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthToTerraform(struct.auth),
        confirmation_url: cdktf.stringToTerraform(struct.confirmationUrl),
        headers: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeadersToTerraform)(struct.headers),
        url: cdktf.stringToTerraform(struct.url),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalytics extends cdktf.ComplexComputedList {
    // batch_mode - computed: true, optional: false, required: false
    get batchMode() {
        return this.getBooleanAttribute('batch_mode');
    }
    // channel_name - computed: true, optional: false, required: false
    get channelName() {
        return this.getStringAttribute('channel_name');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalytics = DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalytics;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        batch_mode: cdktf.booleanToTerraform(struct.batchMode),
        channel_name: cdktf.stringToTerraform(struct.channelName),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEvents extends cdktf.ComplexComputedList {
    // batch_mode - computed: true, optional: false, required: false
    get batchMode() {
        return this.getBooleanAttribute('batch_mode');
    }
    // input_name - computed: true, optional: false, required: false
    get inputName() {
        return this.getStringAttribute('input_name');
    }
    // message_id - computed: true, optional: false, required: false
    get messageId() {
        return this.getStringAttribute('message_id');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEvents = DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEvents;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEventsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        batch_mode: cdktf.booleanToTerraform(struct.batchMode),
        input_name: cdktf.stringToTerraform(struct.inputName),
        message_id: cdktf.stringToTerraform(struct.messageId),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEventsToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEventsToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp extends cdktf.ComplexComputedList {
    // offset_in_nanos - computed: true, optional: false, required: false
    get offsetInNanos() {
        return this.getStringAttribute('offset_in_nanos');
    }
    // time_in_seconds - computed: true, optional: false, required: false
    get timeInSeconds() {
        return this.getStringAttribute('time_in_seconds');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp = DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        offset_in_nanos: cdktf.stringToTerraform(struct.offsetInNanos),
        time_in_seconds: cdktf.stringToTerraform(struct.timeInSeconds),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue extends cdktf.ComplexComputedList {
    // boolean_value - computed: true, optional: false, required: false
    get booleanValue() {
        return this.getStringAttribute('boolean_value');
    }
    // double_value - computed: true, optional: false, required: false
    get doubleValue() {
        return this.getStringAttribute('double_value');
    }
    // integer_value - computed: true, optional: false, required: false
    get integerValue() {
        return this.getStringAttribute('integer_value');
    }
    // string_value - computed: true, optional: false, required: false
    get stringValue() {
        return this.getStringAttribute('string_value');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue = DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        boolean_value: cdktf.stringToTerraform(struct.booleanValue),
        double_value: cdktf.stringToTerraform(struct.doubleValue),
        integer_value: cdktf.stringToTerraform(struct.integerValue),
        string_value: cdktf.stringToTerraform(struct.stringValue),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues extends cdktf.ComplexComputedList {
    // quality - computed: true, optional: false, required: false
    get quality() {
        return this.getStringAttribute('quality');
    }
    // timestamp - computed: true, optional: false, required: false
    get timestamp() {
        return this.interpolationForAttribute('timestamp');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.interpolationForAttribute('value');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues = DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        quality: cdktf.stringToTerraform(struct.quality),
        timestamp: dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct.timestamp),
        value: dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct.value),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries extends cdktf.ComplexComputedList {
    // asset_id - computed: true, optional: false, required: false
    get assetId() {
        return this.getStringAttribute('asset_id');
    }
    // entry_id - computed: true, optional: false, required: false
    get entryId() {
        return this.getStringAttribute('entry_id');
    }
    // property_alias - computed: true, optional: false, required: false
    get propertyAlias() {
        return this.getStringAttribute('property_alias');
    }
    // property_id - computed: true, optional: false, required: false
    get propertyId() {
        return this.getStringAttribute('property_id');
    }
    // property_values - computed: true, optional: false, required: false
    get propertyValues() {
        return this.interpolationForAttribute('property_values');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries = DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        asset_id: cdktf.stringToTerraform(struct.assetId),
        entry_id: cdktf.stringToTerraform(struct.entryId),
        property_alias: cdktf.stringToTerraform(struct.propertyAlias),
        property_id: cdktf.stringToTerraform(struct.propertyId),
        property_values: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform)(struct.propertyValues),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWise extends cdktf.ComplexComputedList {
    // put_asset_property_value_entries - computed: true, optional: false, required: false
    get putAssetPropertyValueEntries() {
        return this.interpolationForAttribute('put_asset_property_value_entries');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWise = DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWise;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        put_asset_property_value_entries: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToTerraform)(struct.putAssetPropertyValueEntries),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafka extends cdktf.ComplexComputedList {
    // client_properties - computed: true, optional: false, required: false
    get clientProperties() {
        return this.interpolationForAttribute('client_properties');
    }
    // destination_arn - computed: true, optional: false, required: false
    get destinationArn() {
        return this.getStringAttribute('destination_arn');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // partition - computed: true, optional: false, required: false
    get partition() {
        return this.getStringAttribute('partition');
    }
    // topic - computed: true, optional: false, required: false
    get topic() {
        return this.getStringAttribute('topic');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafka = DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafka;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct.clientProperties),
        destination_arn: cdktf.stringToTerraform(struct.destinationArn),
        key: cdktf.stringToTerraform(struct.key),
        partition: cdktf.stringToTerraform(struct.partition),
        topic: cdktf.stringToTerraform(struct.topic),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesis extends cdktf.ComplexComputedList {
    // partition_key - computed: true, optional: false, required: false
    get partitionKey() {
        return this.getStringAttribute('partition_key');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // stream_name - computed: true, optional: false, required: false
    get streamName() {
        return this.getStringAttribute('stream_name');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesis = DataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesis;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesisToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        partition_key: cdktf.stringToTerraform(struct.partitionKey),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        stream_name: cdktf.stringToTerraform(struct.streamName),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesisToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesisToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionLambda extends cdktf.ComplexComputedList {
    // function_arn - computed: true, optional: false, required: false
    get functionArn() {
        return this.getStringAttribute('function_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionLambda = DataAwsccIotTopicRuleTopicRulePayloadErrorActionLambda;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionLambdaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        function_arn: cdktf.stringToTerraform(struct.functionArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionLambdaToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionLambdaToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublish extends cdktf.ComplexComputedList {
    // qos - computed: true, optional: false, required: false
    get qos() {
        return this.getNumberAttribute('qos');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // topic - computed: true, optional: false, required: false
    get topic() {
        return this.getStringAttribute('topic');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublish = DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublish;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        qos: cdktf.numberToTerraform(struct.qos),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        topic: cdktf.stringToTerraform(struct.topic),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionS3 extends cdktf.ComplexComputedList {
    // bucket_name - computed: true, optional: false, required: false
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    // canned_acl - computed: true, optional: false, required: false
    get cannedAcl() {
        return this.getStringAttribute('canned_acl');
    }
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionS3 = DataAwsccIotTopicRuleTopicRulePayloadErrorActionS3;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionS3ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        canned_acl: cdktf.stringToTerraform(struct.cannedAcl),
        key: cdktf.stringToTerraform(struct.key),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionS3ToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionS3ToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionSns extends cdktf.ComplexComputedList {
    // message_format - computed: true, optional: false, required: false
    get messageFormat() {
        return this.getStringAttribute('message_format');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // target_arn - computed: true, optional: false, required: false
    get targetArn() {
        return this.getStringAttribute('target_arn');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionSns = DataAwsccIotTopicRuleTopicRulePayloadErrorActionSns;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionSnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message_format: cdktf.stringToTerraform(struct.messageFormat),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        target_arn: cdktf.stringToTerraform(struct.targetArn),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionSnsToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionSnsToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionSqs extends cdktf.ComplexComputedList {
    // queue_url - computed: true, optional: false, required: false
    get queueUrl() {
        return this.getStringAttribute('queue_url');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // use_base_64 - computed: true, optional: false, required: false
    get useBase64() {
        return this.getBooleanAttribute('use_base_64');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionSqs = DataAwsccIotTopicRuleTopicRulePayloadErrorActionSqs;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionSqsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        queue_url: cdktf.stringToTerraform(struct.queueUrl),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        use_base_64: cdktf.booleanToTerraform(struct.useBase64),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionSqsToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionSqsToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctions extends cdktf.ComplexComputedList {
    // execution_name_prefix - computed: true, optional: false, required: false
    get executionNamePrefix() {
        return this.getStringAttribute('execution_name_prefix');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // state_machine_name - computed: true, optional: false, required: false
    get stateMachineName() {
        return this.getStringAttribute('state_machine_name');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctions = DataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctions;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        execution_name_prefix: cdktf.stringToTerraform(struct.executionNamePrefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        state_machine_name: cdktf.stringToTerraform(struct.stateMachineName),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctionsToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctionsToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions = DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp extends cdktf.ComplexComputedList {
    // unit - computed: true, optional: false, required: false
    get unit() {
        return this.getStringAttribute('unit');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp = DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestream extends cdktf.ComplexComputedList {
    // batch_mode - computed: true, optional: false, required: false
    get batchMode() {
        return this.getBooleanAttribute('batch_mode');
    }
    // database_name - computed: true, optional: false, required: false
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    // dimensions - computed: true, optional: false, required: false
    get dimensions() {
        return this.interpolationForAttribute('dimensions');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // table_name - computed: true, optional: false, required: false
    get tableName() {
        return this.getStringAttribute('table_name');
    }
    // timestamp - computed: true, optional: false, required: false
    get timestamp() {
        return this.interpolationForAttribute('timestamp');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestream = DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestream;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        batch_mode: cdktf.booleanToTerraform(struct.batchMode),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        dimensions: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToTerraform)(struct.dimensions),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        table_name: cdktf.stringToTerraform(struct.tableName),
        timestamp: dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToTerraform(struct.timestamp),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamToTerraform;
class DataAwsccIotTopicRuleTopicRulePayloadErrorAction extends cdktf.ComplexComputedList {
    // cloudwatch_alarm - computed: true, optional: false, required: false
    get cloudwatchAlarm() {
        return this.interpolationForAttribute('cloudwatch_alarm');
    }
    // cloudwatch_logs - computed: true, optional: false, required: false
    get cloudwatchLogs() {
        return this.interpolationForAttribute('cloudwatch_logs');
    }
    // cloudwatch_metric - computed: true, optional: false, required: false
    get cloudwatchMetric() {
        return this.interpolationForAttribute('cloudwatch_metric');
    }
    // dynamo_d_bv_2 - computed: true, optional: false, required: false
    get dynamoDBv2() {
        return this.interpolationForAttribute('dynamo_d_bv_2');
    }
    // dynamo_db - computed: true, optional: false, required: false
    get dynamoDb() {
        return this.interpolationForAttribute('dynamo_db');
    }
    // elasticsearch - computed: true, optional: false, required: false
    get elasticsearch() {
        return this.interpolationForAttribute('elasticsearch');
    }
    // firehose - computed: true, optional: false, required: false
    get firehose() {
        return this.interpolationForAttribute('firehose');
    }
    // http - computed: true, optional: false, required: false
    get http() {
        return this.interpolationForAttribute('http');
    }
    // iot_analytics - computed: true, optional: false, required: false
    get iotAnalytics() {
        return this.interpolationForAttribute('iot_analytics');
    }
    // iot_events - computed: true, optional: false, required: false
    get iotEvents() {
        return this.interpolationForAttribute('iot_events');
    }
    // iot_site_wise - computed: true, optional: false, required: false
    get iotSiteWise() {
        return this.interpolationForAttribute('iot_site_wise');
    }
    // kafka - computed: true, optional: false, required: false
    get kafka() {
        return this.interpolationForAttribute('kafka');
    }
    // kinesis - computed: true, optional: false, required: false
    get kinesis() {
        return this.interpolationForAttribute('kinesis');
    }
    // lambda - computed: true, optional: false, required: false
    get lambda() {
        return this.interpolationForAttribute('lambda');
    }
    // republish - computed: true, optional: false, required: false
    get republish() {
        return this.interpolationForAttribute('republish');
    }
    // s3 - computed: true, optional: false, required: false
    get s3() {
        return this.interpolationForAttribute('s3');
    }
    // sns - computed: true, optional: false, required: false
    get sns() {
        return this.interpolationForAttribute('sns');
    }
    // sqs - computed: true, optional: false, required: false
    get sqs() {
        return this.interpolationForAttribute('sqs');
    }
    // step_functions - computed: true, optional: false, required: false
    get stepFunctions() {
        return this.interpolationForAttribute('step_functions');
    }
    // timestream - computed: true, optional: false, required: false
    get timestream() {
        return this.interpolationForAttribute('timestream');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayloadErrorAction = DataAwsccIotTopicRuleTopicRulePayloadErrorAction;
function dataAwsccIotTopicRuleTopicRulePayloadErrorActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_alarm: dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToTerraform(struct.cloudwatchAlarm),
        cloudwatch_logs: dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToTerraform(struct.cloudwatchLogs),
        cloudwatch_metric: dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToTerraform(struct.cloudwatchMetric),
        dynamo_d_bv_2: dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToTerraform(struct.dynamoDBv2),
        dynamo_db: dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDbToTerraform(struct.dynamoDb),
        elasticsearch: dataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearchToTerraform(struct.elasticsearch),
        firehose: dataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehoseToTerraform(struct.firehose),
        http: dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpToTerraform(struct.http),
        iot_analytics: dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToTerraform(struct.iotAnalytics),
        iot_events: dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEventsToTerraform(struct.iotEvents),
        iot_site_wise: dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToTerraform(struct.iotSiteWise),
        kafka: dataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaToTerraform(struct.kafka),
        kinesis: dataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesisToTerraform(struct.kinesis),
        lambda: dataAwsccIotTopicRuleTopicRulePayloadErrorActionLambdaToTerraform(struct.lambda),
        republish: dataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishToTerraform(struct.republish),
        s3: dataAwsccIotTopicRuleTopicRulePayloadErrorActionS3ToTerraform(struct.s3),
        sns: dataAwsccIotTopicRuleTopicRulePayloadErrorActionSnsToTerraform(struct.sns),
        sqs: dataAwsccIotTopicRuleTopicRulePayloadErrorActionSqsToTerraform(struct.sqs),
        step_functions: dataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctionsToTerraform(struct.stepFunctions),
        timestream: dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamToTerraform(struct.timestream),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadErrorActionToTerraform = dataAwsccIotTopicRuleTopicRulePayloadErrorActionToTerraform;
class DataAwsccIotTopicRuleTopicRulePayload extends cdktf.ComplexComputedList {
    // actions - computed: true, optional: false, required: false
    get actions() {
        return this.interpolationForAttribute('actions');
    }
    // aws_iot_sql_version - computed: true, optional: false, required: false
    get awsIotSqlVersion() {
        return this.getStringAttribute('aws_iot_sql_version');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // error_action - computed: true, optional: false, required: false
    get errorAction() {
        return this.interpolationForAttribute('error_action');
    }
    // rule_disabled - computed: true, optional: false, required: false
    get ruleDisabled() {
        return this.getBooleanAttribute('rule_disabled');
    }
    // sql - computed: true, optional: false, required: false
    get sql() {
        return this.getStringAttribute('sql');
    }
}
exports.DataAwsccIotTopicRuleTopicRulePayload = DataAwsccIotTopicRuleTopicRulePayload;
function dataAwsccIotTopicRuleTopicRulePayloadToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        actions: cdktf.listMapper(dataAwsccIotTopicRuleTopicRulePayloadActionsToTerraform)(struct.actions),
        aws_iot_sql_version: cdktf.stringToTerraform(struct.awsIotSqlVersion),
        description: cdktf.stringToTerraform(struct.description),
        error_action: dataAwsccIotTopicRuleTopicRulePayloadErrorActionToTerraform(struct.errorAction),
        rule_disabled: cdktf.booleanToTerraform(struct.ruleDisabled),
        sql: cdktf.stringToTerraform(struct.sql),
    };
}
exports.dataAwsccIotTopicRuleTopicRulePayloadToTerraform = dataAwsccIotTopicRuleTopicRulePayloadToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule.html awscc_iot_topic_rule}
*/
class DataAwsccIotTopicRule extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    get arn() {
        return this.getStringAttribute('arn');
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
    // rule_name - computed: true, optional: false, required: false
    get ruleName() {
        return this.getStringAttribute('rule_name');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // topic_rule_payload - computed: true, optional: false, required: false
    get topicRulePayload() {
        return this.interpolationForAttribute('topic_rule_payload');
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
exports.DataAwsccIotTopicRule = DataAwsccIotTopicRule;
// =================
// STATIC PROPERTIES
// =================
DataAwsccIotTopicRule.tfResourceType = "awscc_iot_topic_rule";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1pb3QtdG9waWMtcnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtYXdzY2MtaW90LXRvcGljLXJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNFQUFzRTtBQUN0RSwyQ0FBMkM7Ozs7O0FBRzNDLCtCQUErQjtBQVkvQixNQUFhLHlCQUEwQixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFdEUseURBQXlEO0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwyREFBMkQ7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNGO0FBWEQsOERBV0M7QUFFRCxTQUFnQixvQ0FBb0MsQ0FBQyxNQUFrQztJQUNyRixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFORCxvRkFNQztBQUVELE1BQWEsMkRBQTRELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV4RyxnRUFBZ0U7SUFDaEUsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxrRUFBa0U7SUFDbEUs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RSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3RDLENBQUM7SUFDSixDQUFDOztBQTdFSCxzREE4RUM7QUE1RUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxvQ0FBYyxHQUFXLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvaW90X3RvcGljX3J1bGUuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NjY0lvdFRvcGljUnVsZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBVbmlxdWVseSBpZGVudGlmaWVzIHRoZSByZXNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2lvdF90b3BpY19ydWxlLmh0bWwjaWQgRGF0YUF3c2NjSW90VG9waWNSdWxlI2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRhZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90VG9waWNSdWxlVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zQ2xvdWR3YXRjaEFsYXJtIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWxhcm1fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFsYXJtTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FsYXJtX25hbWUnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyBzdGF0ZV9yZWFzb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0ZVJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRlX3JlYXNvbicpO1xuICB9XG5cbiAgLy8gc3RhdGVfdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0ZVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdGVfdmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNDbG91ZHdhdGNoQWxhcm1Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0Nsb3Vkd2F0Y2hBbGFybSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbGFybV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsYXJtTmFtZSksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgc3RhdGVfcmVhc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXRlUmVhc29uKSxcbiAgICBzdGF0ZV92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0ZVZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNDbG91ZHdhdGNoTG9ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGxvZ19ncm91cF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX2dyb3VwX25hbWUnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zQ2xvdWR3YXRjaExvZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0Nsb3Vkd2F0Y2hMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGxvZ19ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0dyb3VwTmFtZSksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zQ2xvdWR3YXRjaE1ldHJpYyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG1ldHJpY19uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWV0cmljTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21ldHJpY19uYW1lJyk7XG4gIH1cblxuICAvLyBtZXRyaWNfbmFtZXNwYWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWV0cmljTmFtZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWV0cmljX25hbWVzcGFjZScpO1xuICB9XG5cbiAgLy8gbWV0cmljX3RpbWVzdGFtcCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1ldHJpY1RpbWVzdGFtcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21ldHJpY190aW1lc3RhbXAnKTtcbiAgfVxuXG4gIC8vIG1ldHJpY191bml0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWV0cmljVW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21ldHJpY191bml0Jyk7XG4gIH1cblxuICAvLyBtZXRyaWNfdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtZXRyaWNWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21ldHJpY192YWx1ZScpO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNDbG91ZHdhdGNoTWV0cmljVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNDbG91ZHdhdGNoTWV0cmljKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1ldHJpY19uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY05hbWUpLFxuICAgIG1ldHJpY19uYW1lc3BhY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWV0cmljTmFtZXNwYWNlKSxcbiAgICBtZXRyaWNfdGltZXN0YW1wOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY1RpbWVzdGFtcCksXG4gICAgbWV0cmljX3VuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWV0cmljVW5pdCksXG4gICAgbWV0cmljX3ZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY1ZhbHVlKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNEeW5hbW9EQnYyUHV0SXRlbSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHRhYmxlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWJsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YWJsZV9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zRHluYW1vREJ2MlB1dEl0ZW1Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0R5bmFtb0RCdjJQdXRJdGVtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHRhYmxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFibGVOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNEeW5hbW9EQnYyIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcHV0X2l0ZW0gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwdXRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3B1dF9pdGVtJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNEeW5hbW9EQnYyVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNEeW5hbW9EQnYyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHB1dF9pdGVtOiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0R5bmFtb0RCdjJQdXRJdGVtVG9UZXJyYWZvcm0oc3RydWN0IS5wdXRJdGVtKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNEeW5hbW9EYiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGhhc2hfa2V5X2ZpZWxkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGFzaEtleUZpZWxkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaGFzaF9rZXlfZmllbGQnKTtcbiAgfVxuXG4gIC8vIGhhc2hfa2V5X3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBoYXNoS2V5VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hhc2hfa2V5X3R5cGUnKTtcbiAgfVxuXG4gIC8vIGhhc2hfa2V5X3ZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGFzaEtleVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaGFzaF9rZXlfdmFsdWUnKTtcbiAgfVxuXG4gIC8vIHBheWxvYWRfZmllbGQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYXlsb2FkRmllbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXlsb2FkX2ZpZWxkJyk7XG4gIH1cblxuICAvLyByYW5nZV9rZXlfZmllbGQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByYW5nZUtleUZpZWxkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmFuZ2Vfa2V5X2ZpZWxkJyk7XG4gIH1cblxuICAvLyByYW5nZV9rZXlfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJhbmdlS2V5VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JhbmdlX2tleV90eXBlJyk7XG4gIH1cblxuICAvLyByYW5nZV9rZXlfdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByYW5nZUtleVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmFuZ2Vfa2V5X3ZhbHVlJyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gdGFibGVfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhYmxlX25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNEeW5hbW9EYlRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zRHluYW1vRGIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaGFzaF9rZXlfZmllbGQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaGFzaEtleUZpZWxkKSxcbiAgICBoYXNoX2tleV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhhc2hLZXlUeXBlKSxcbiAgICBoYXNoX2tleV92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5oYXNoS2V5VmFsdWUpLFxuICAgIHBheWxvYWRfZmllbGQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGF5bG9hZEZpZWxkKSxcbiAgICByYW5nZV9rZXlfZmllbGQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmFuZ2VLZXlGaWVsZCksXG4gICAgcmFuZ2Vfa2V5X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmFuZ2VLZXlUeXBlKSxcbiAgICByYW5nZV9rZXlfdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmFuZ2VLZXlWYWx1ZSksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgdGFibGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YWJsZU5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0VsYXN0aWNzZWFyY2ggZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmRwb2ludCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5kcG9pbnQnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaW5kZXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luZGV4Jyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zRWxhc3RpY3NlYXJjaFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zRWxhc3RpY3NlYXJjaCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmRwb2ludDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbmRwb2ludCksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICAgIGluZGV4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluZGV4KSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0ZpcmVob3NlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYmF0Y2hfbW9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJhdGNoTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdiYXRjaF9tb2RlJyk7XG4gIH1cblxuICAvLyBkZWxpdmVyeV9zdHJlYW1fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlbGl2ZXJ5U3RyZWFtTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlbGl2ZXJ5X3N0cmVhbV9uYW1lJyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gc2VwYXJhdG9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VwYXJhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VwYXJhdG9yJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zRmlyZWhvc2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0ZpcmVob3NlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJhdGNoX21vZGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmJhdGNoTW9kZSksXG4gICAgZGVsaXZlcnlfc3RyZWFtX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVsaXZlcnlTdHJlYW1OYW1lKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgICBzZXBhcmF0b3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VwYXJhdG9yKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNIdHRwQXV0aFNpZ3Y0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxuXG4gIC8vIHNlcnZpY2VfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9uYW1lJyk7XG4gIH1cblxuICAvLyBzaWduaW5nX3JlZ2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNpZ25pbmdSZWdpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzaWduaW5nX3JlZ2lvbicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0h0dHBBdXRoU2lndjRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0h0dHBBdXRoU2lndjQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgc2VydmljZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZpY2VOYW1lKSxcbiAgICBzaWduaW5nX3JlZ2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zaWduaW5nUmVnaW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNIdHRwQXV0aCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHNpZ3ZfNCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNpZ3Y0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NpZ3ZfNCcpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNIdHRwQXV0aFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zSHR0cEF1dGgpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2lndl80OiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0h0dHBBdXRoU2lndjRUb1RlcnJhZm9ybShzdHJ1Y3QhLnNpZ3Y0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNIdHRwSGVhZGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zSHR0cEhlYWRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0h0dHBIZWFkZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNIdHRwIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXV0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF1dGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXV0aCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNvbmZpcm1hdGlvbl91cmwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25maXJtYXRpb25VcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25maXJtYXRpb25fdXJsJyk7XG4gIH1cblxuICAvLyBoZWFkZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGVhZGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdoZWFkZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXJsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zSHR0cFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zSHR0cCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhdXRoOiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0h0dHBBdXRoVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRoKSxcbiAgICBjb25maXJtYXRpb25fdXJsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpcm1hdGlvblVybCksXG4gICAgaGVhZGVyczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0h0dHBIZWFkZXJzVG9UZXJyYWZvcm0pKHN0cnVjdCEuaGVhZGVycyksXG4gICAgdXJsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVybCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zSW90QW5hbHl0aWNzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYmF0Y2hfbW9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJhdGNoTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdiYXRjaF9tb2RlJyk7XG4gIH1cblxuICAvLyBjaGFubmVsX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjaGFubmVsTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NoYW5uZWxfbmFtZScpO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNJb3RBbmFseXRpY3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0lvdEFuYWx5dGljcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBiYXRjaF9tb2RlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5iYXRjaE1vZGUpLFxuICAgIGNoYW5uZWxfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jaGFubmVsTmFtZSksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zSW90RXZlbnRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYmF0Y2hfbW9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJhdGNoTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdiYXRjaF9tb2RlJyk7XG4gIH1cblxuICAvLyBpbnB1dF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5wdXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5wdXRfbmFtZScpO1xuICB9XG5cbiAgLy8gbWVzc2FnZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lc3NhZ2VfaWQnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zSW90RXZlbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNJb3RFdmVudHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYmF0Y2hfbW9kZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYmF0Y2hNb2RlKSxcbiAgICBpbnB1dF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlucHV0TmFtZSksXG4gICAgbWVzc2FnZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXNzYWdlSWQpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0lvdFNpdGVXaXNlUHV0QXNzZXRQcm9wZXJ0eVZhbHVlRW50cmllc1Byb3BlcnR5VmFsdWVzVGltZXN0YW1wIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gb2Zmc2V0X2luX25hbm9zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb2Zmc2V0SW5OYW5vcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29mZnNldF9pbl9uYW5vcycpO1xuICB9XG5cbiAgLy8gdGltZV9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGltZUluU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RpbWVfaW5fc2Vjb25kcycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0lvdFNpdGVXaXNlUHV0QXNzZXRQcm9wZXJ0eVZhbHVlRW50cmllc1Byb3BlcnR5VmFsdWVzVGltZXN0YW1wVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNJb3RTaXRlV2lzZVB1dEFzc2V0UHJvcGVydHlWYWx1ZUVudHJpZXNQcm9wZXJ0eVZhbHVlc1RpbWVzdGFtcCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBvZmZzZXRfaW5fbmFub3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub2Zmc2V0SW5OYW5vcyksXG4gICAgdGltZV9pbl9zZWNvbmRzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpbWVJblNlY29uZHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0lvdFNpdGVXaXNlUHV0QXNzZXRQcm9wZXJ0eVZhbHVlRW50cmllc1Byb3BlcnR5VmFsdWVzVmFsdWUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBib29sZWFuX3ZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYm9vbGVhblZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYm9vbGVhbl92YWx1ZScpO1xuICB9XG5cbiAgLy8gZG91YmxlX3ZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG91YmxlVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb3VibGVfdmFsdWUnKTtcbiAgfVxuXG4gIC8vIGludGVnZXJfdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnRlZ2VyVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnRlZ2VyX3ZhbHVlJyk7XG4gIH1cblxuICAvLyBzdHJpbmdfdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdHJpbmdWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0cmluZ192YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0lvdFNpdGVXaXNlUHV0QXNzZXRQcm9wZXJ0eVZhbHVlRW50cmllc1Byb3BlcnR5VmFsdWVzVmFsdWVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0lvdFNpdGVXaXNlUHV0QXNzZXRQcm9wZXJ0eVZhbHVlRW50cmllc1Byb3BlcnR5VmFsdWVzVmFsdWUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYm9vbGVhbl92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ib29sZWFuVmFsdWUpLFxuICAgIGRvdWJsZV92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb3VibGVWYWx1ZSksXG4gICAgaW50ZWdlcl92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnRlZ2VyVmFsdWUpLFxuICAgIHN0cmluZ192YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdHJpbmdWYWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zSW90U2l0ZVdpc2VQdXRBc3NldFByb3BlcnR5VmFsdWVFbnRyaWVzUHJvcGVydHlWYWx1ZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBxdWFsaXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcXVhbGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3F1YWxpdHknKTtcbiAgfVxuXG4gIC8vIHRpbWVzdGFtcCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRpbWVzdGFtcCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0aW1lc3RhbXAnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZhbHVlJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0lvdFNpdGVXaXNlUHV0QXNzZXRQcm9wZXJ0eVZhbHVlRW50cmllc1Byb3BlcnR5VmFsdWVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNJb3RTaXRlV2lzZVB1dEFzc2V0UHJvcGVydHlWYWx1ZUVudHJpZXNQcm9wZXJ0eVZhbHVlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBxdWFsaXR5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnF1YWxpdHkpLFxuICAgIHRpbWVzdGFtcDogZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNJb3RTaXRlV2lzZVB1dEFzc2V0UHJvcGVydHlWYWx1ZUVudHJpZXNQcm9wZXJ0eVZhbHVlc1RpbWVzdGFtcFRvVGVycmFmb3JtKHN0cnVjdCEudGltZXN0YW1wKSxcbiAgICB2YWx1ZTogZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNJb3RTaXRlV2lzZVB1dEFzc2V0UHJvcGVydHlWYWx1ZUVudHJpZXNQcm9wZXJ0eVZhbHVlc1ZhbHVlVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zSW90U2l0ZVdpc2VQdXRBc3NldFByb3BlcnR5VmFsdWVFbnRyaWVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXNzZXRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhc3NldElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXNzZXRfaWQnKTtcbiAgfVxuXG4gIC8vIGVudHJ5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW50cnlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VudHJ5X2lkJyk7XG4gIH1cblxuICAvLyBwcm9wZXJ0eV9hbGlhcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb3BlcnR5QWxpYXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm9wZXJ0eV9hbGlhcycpO1xuICB9XG5cbiAgLy8gcHJvcGVydHlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9wZXJ0eUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvcGVydHlfaWQnKTtcbiAgfVxuXG4gIC8vIHByb3BlcnR5X3ZhbHVlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb3BlcnR5VmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Byb3BlcnR5X3ZhbHVlcycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNJb3RTaXRlV2lzZVB1dEFzc2V0UHJvcGVydHlWYWx1ZUVudHJpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0lvdFNpdGVXaXNlUHV0QXNzZXRQcm9wZXJ0eVZhbHVlRW50cmllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhc3NldF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hc3NldElkKSxcbiAgICBlbnRyeV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbnRyeUlkKSxcbiAgICBwcm9wZXJ0eV9hbGlhczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9wZXJ0eUFsaWFzKSxcbiAgICBwcm9wZXJ0eV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9wZXJ0eUlkKSxcbiAgICBwcm9wZXJ0eV92YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNJb3RTaXRlV2lzZVB1dEFzc2V0UHJvcGVydHlWYWx1ZUVudHJpZXNQcm9wZXJ0eVZhbHVlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnByb3BlcnR5VmFsdWVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNJb3RTaXRlV2lzZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHB1dF9hc3NldF9wcm9wZXJ0eV92YWx1ZV9lbnRyaWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHV0QXNzZXRQcm9wZXJ0eVZhbHVlRW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwdXRfYXNzZXRfcHJvcGVydHlfdmFsdWVfZW50cmllcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zSW90U2l0ZVdpc2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0lvdFNpdGVXaXNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHB1dF9hc3NldF9wcm9wZXJ0eV92YWx1ZV9lbnRyaWVzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zSW90U2l0ZVdpc2VQdXRBc3NldFByb3BlcnR5VmFsdWVFbnRyaWVzVG9UZXJyYWZvcm0pKHN0cnVjdCEucHV0QXNzZXRQcm9wZXJ0eVZhbHVlRW50cmllcyksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zS2Fma2EgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjbGllbnRfcHJvcGVydGllcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsaWVudFByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2xpZW50X3Byb3BlcnRpZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvbkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX2FybicpO1xuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cblxuICAvLyBwYXJ0aXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYXJ0aXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXJ0aXRpb24nKTtcbiAgfVxuXG4gIC8vIHRvcGljIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdG9waWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0b3BpYycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0thZmthVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNLYWZrYSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjbGllbnRfcHJvcGVydGllczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5jbGllbnRQcm9wZXJ0aWVzKSxcbiAgICBkZXN0aW5hdGlvbl9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb25Bcm4pLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHBhcnRpdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJ0aXRpb24pLFxuICAgIHRvcGljOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvcGljKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNLaW5lc2lzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcGFydGl0aW9uX2tleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhcnRpdGlvbktleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhcnRpdGlvbl9rZXknKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyBzdHJlYW1fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0cmVhbU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdHJlYW1fbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0tpbmVzaXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0tpbmVzaXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcGFydGl0aW9uX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJ0aXRpb25LZXkpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHN0cmVhbV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0cmVhbU5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0xhbWJkYSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZ1bmN0aW9uX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZ1bmN0aW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZnVuY3Rpb25fYXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zTGFtYmRhVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNMYW1iZGEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZnVuY3Rpb25fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZ1bmN0aW9uQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNSZXB1Ymxpc2ggZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBxb3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBxb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdxb3MnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyB0b3BpYyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRvcGljKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndG9waWMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNSZXB1Ymxpc2hUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc1JlcHVibGlzaCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBxb3M6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucW9zKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgICB0b3BpYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50b3BpYyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zUzMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBidWNrZXRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfbmFtZScpO1xuICB9XG5cbiAgLy8gY2FubmVkX2FjbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNhbm5lZEFjbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nhbm5lZF9hY2wnKTtcbiAgfVxuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNTM1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zUzMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0TmFtZSksXG4gICAgY2FubmVkX2FjbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jYW5uZWRBY2wpLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc1NucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG1lc3NhZ2VfZm9ybWF0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWVzc2FnZUZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lc3NhZ2VfZm9ybWF0Jyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gdGFyZ2V0X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhcmdldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhcmdldF9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNTbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc1Nucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlX2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXNzYWdlRm9ybWF0KSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgICB0YXJnZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldEFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zU3FzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcXVldWVfdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcXVldWVVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdxdWV1ZV91cmwnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyB1c2VfYmFzZV82NCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVzZUJhc2U2NCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd1c2VfYmFzZV82NCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc1Nxc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zU3FzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHF1ZXVlX3VybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5xdWV1ZVVybCksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgdXNlX2Jhc2VfNjQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnVzZUJhc2U2NCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zU3RlcEZ1bmN0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGV4ZWN1dGlvbl9uYW1lX3ByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4ZWN1dGlvbk5hbWVQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleGVjdXRpb25fbmFtZV9wcmVmaXgnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyBzdGF0ZV9tYWNoaW5lX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0ZU1hY2hpbmVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdGVfbWFjaGluZV9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zU3RlcEZ1bmN0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zU3RlcEZ1bmN0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBleGVjdXRpb25fbmFtZV9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXhlY3V0aW9uTmFtZVByZWZpeCksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgc3RhdGVfbWFjaGluZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXRlTWFjaGluZU5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc1RpbWVzdHJlYW1EaW1lbnNpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNUaW1lc3RyZWFtRGltZW5zaW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zVGltZXN0cmVhbURpbWVuc2lvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zVGltZXN0cmVhbVRpbWVzdGFtcCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1bml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndW5pdCcpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zVGltZXN0cmVhbVRpbWVzdGFtcFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zVGltZXN0cmVhbVRpbWVzdGFtcCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNUaW1lc3RyZWFtIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYmF0Y2hfbW9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJhdGNoTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdiYXRjaF9tb2RlJyk7XG4gIH1cblxuICAvLyBkYXRhYmFzZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2VfbmFtZScpO1xuICB9XG5cbiAgLy8gZGltZW5zaW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpbWVuc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGltZW5zaW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyB0YWJsZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFibGVfbmFtZScpO1xuICB9XG5cbiAgLy8gdGltZXN0YW1wIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGltZXN0YW1wKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RpbWVzdGFtcCcpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNUaW1lc3RyZWFtVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNUaW1lc3RyZWFtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJhdGNoX21vZGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmJhdGNoTW9kZSksXG4gICAgZGF0YWJhc2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZU5hbWUpLFxuICAgIGRpbWVuc2lvbnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNUaW1lc3RyZWFtRGltZW5zaW9uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRpbWVuc2lvbnMpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHRhYmxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFibGVOYW1lKSxcbiAgICB0aW1lc3RhbXA6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zVGltZXN0cmVhbVRpbWVzdGFtcFRvVGVycmFmb3JtKHN0cnVjdCEudGltZXN0YW1wKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjbG91ZHdhdGNoX2FsYXJtIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaEFsYXJtKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Nsb3Vkd2F0Y2hfYWxhcm0nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjbG91ZHdhdGNoX2xvZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbG91ZHdhdGNoTG9ncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjbG91ZHdhdGNoX2xvZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjbG91ZHdhdGNoX21ldHJpYyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hNZXRyaWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2xvdWR3YXRjaF9tZXRyaWMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkeW5hbW9fZF9idl8yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZHluYW1vREJ2MigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkeW5hbW9fZF9idl8yJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZHluYW1vX2RiIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZHluYW1vRGIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZHluYW1vX2RiJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZWxhc3RpY3NlYXJjaCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVsYXN0aWNzZWFyY2goKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWxhc3RpY3NlYXJjaCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGZpcmVob3NlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmlyZWhvc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmlyZWhvc2UnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBodHRwIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaHR0cCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdodHRwJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaW90X2FuYWx5dGljcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlvdEFuYWx5dGljcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpb3RfYW5hbHl0aWNzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaW90X2V2ZW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlvdEV2ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpb3RfZXZlbnRzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaW90X3NpdGVfd2lzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlvdFNpdGVXaXNlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2lvdF9zaXRlX3dpc2UnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBrYWZrYSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGthZmthKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2thZmthJykgYXMgYW55O1xuICB9XG5cbiAgLy8ga2luZXNpcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtpbmVzaXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgna2luZXNpcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGxhbWJkYSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhbWJkYSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsYW1iZGEnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZXB1Ymxpc2ggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXB1Ymxpc2goKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVwdWJsaXNoJykgYXMgYW55O1xuICB9XG5cbiAgLy8gczMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzMygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzMycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzcXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzcXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3FzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3RlcF9mdW5jdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGVwRnVuY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N0ZXBfZnVuY3Rpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGltZXN0cmVhbSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRpbWVzdHJlYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGltZXN0cmVhbScpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjbG91ZHdhdGNoX2FsYXJtOiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0Nsb3Vkd2F0Y2hBbGFybVRvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaEFsYXJtKSxcbiAgICBjbG91ZHdhdGNoX2xvZ3M6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zQ2xvdWR3YXRjaExvZ3NUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hMb2dzKSxcbiAgICBjbG91ZHdhdGNoX21ldHJpYzogZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNDbG91ZHdhdGNoTWV0cmljVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoTWV0cmljKSxcbiAgICBkeW5hbW9fZF9idl8yOiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0R5bmFtb0RCdjJUb1RlcnJhZm9ybShzdHJ1Y3QhLmR5bmFtb0RCdjIpLFxuICAgIGR5bmFtb19kYjogZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNEeW5hbW9EYlRvVGVycmFmb3JtKHN0cnVjdCEuZHluYW1vRGIpLFxuICAgIGVsYXN0aWNzZWFyY2g6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zRWxhc3RpY3NlYXJjaFRvVGVycmFmb3JtKHN0cnVjdCEuZWxhc3RpY3NlYXJjaCksXG4gICAgZmlyZWhvc2U6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zRmlyZWhvc2VUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpcmVob3NlKSxcbiAgICBodHRwOiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0h0dHBUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHApLFxuICAgIGlvdF9hbmFseXRpY3M6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zSW90QW5hbHl0aWNzVG9UZXJyYWZvcm0oc3RydWN0IS5pb3RBbmFseXRpY3MpLFxuICAgIGlvdF9ldmVudHM6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zSW90RXZlbnRzVG9UZXJyYWZvcm0oc3RydWN0IS5pb3RFdmVudHMpLFxuICAgIGlvdF9zaXRlX3dpc2U6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zSW90U2l0ZVdpc2VUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvdFNpdGVXaXNlKSxcbiAgICBrYWZrYTogZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNLYWZrYVRvVGVycmFmb3JtKHN0cnVjdCEua2Fma2EpLFxuICAgIGtpbmVzaXM6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zS2luZXNpc1RvVGVycmFmb3JtKHN0cnVjdCEua2luZXNpcyksXG4gICAgbGFtYmRhOiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc0xhbWJkYVRvVGVycmFmb3JtKHN0cnVjdCEubGFtYmRhKSxcbiAgICByZXB1Ymxpc2g6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zUmVwdWJsaXNoVG9UZXJyYWZvcm0oc3RydWN0IS5yZXB1Ymxpc2gpLFxuICAgIHMzOiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc1MzVG9UZXJyYWZvcm0oc3RydWN0IS5zMyksXG4gICAgc25zOiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc1Nuc1RvVGVycmFmb3JtKHN0cnVjdCEuc25zKSxcbiAgICBzcXM6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zU3FzVG9UZXJyYWZvcm0oc3RydWN0IS5zcXMpLFxuICAgIHN0ZXBfZnVuY3Rpb25zOiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkQWN0aW9uc1N0ZXBGdW5jdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0ZXBGdW5jdGlvbnMpLFxuICAgIHRpbWVzdHJlYW06IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRBY3Rpb25zVGltZXN0cmVhbVRvVGVycmFmb3JtKHN0cnVjdCEudGltZXN0cmVhbSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkNsb3Vkd2F0Y2hBbGFybSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFsYXJtX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbGFybU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbGFybV9uYW1lJyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gc3RhdGVfcmVhc29uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdGVSZWFzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0ZV9yZWFzb24nKTtcbiAgfVxuXG4gIC8vIHN0YXRlX3ZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdGVWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRlX3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkNsb3Vkd2F0Y2hBbGFybVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkNsb3Vkd2F0Y2hBbGFybSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbGFybV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsYXJtTmFtZSksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgc3RhdGVfcmVhc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXRlUmVhc29uKSxcbiAgICBzdGF0ZV92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0ZVZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uQ2xvdWR3YXRjaExvZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBsb2dfZ3JvdXBfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvZ0dyb3VwTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19ncm91cF9uYW1lJyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25DbG91ZHdhdGNoTG9nc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkNsb3Vkd2F0Y2hMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGxvZ19ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0dyb3VwTmFtZSksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkNsb3Vkd2F0Y2hNZXRyaWMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBtZXRyaWNfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1ldHJpY05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXRyaWNfbmFtZScpO1xuICB9XG5cbiAgLy8gbWV0cmljX25hbWVzcGFjZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1ldHJpY05hbWVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21ldHJpY19uYW1lc3BhY2UnKTtcbiAgfVxuXG4gIC8vIG1ldHJpY190aW1lc3RhbXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtZXRyaWNUaW1lc3RhbXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXRyaWNfdGltZXN0YW1wJyk7XG4gIH1cblxuICAvLyBtZXRyaWNfdW5pdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1ldHJpY1VuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXRyaWNfdW5pdCcpO1xuICB9XG5cbiAgLy8gbWV0cmljX3ZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWV0cmljVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXRyaWNfdmFsdWUnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkNsb3Vkd2F0Y2hNZXRyaWNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25DbG91ZHdhdGNoTWV0cmljKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1ldHJpY19uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY05hbWUpLFxuICAgIG1ldHJpY19uYW1lc3BhY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWV0cmljTmFtZXNwYWNlKSxcbiAgICBtZXRyaWNfdGltZXN0YW1wOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY1RpbWVzdGFtcCksXG4gICAgbWV0cmljX3VuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWV0cmljVW5pdCksXG4gICAgbWV0cmljX3ZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY1ZhbHVlKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uRHluYW1vREJ2MlB1dEl0ZW0gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyB0YWJsZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFibGVfbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25EeW5hbW9EQnYyUHV0SXRlbVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkR5bmFtb0RCdjJQdXRJdGVtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHRhYmxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFibGVOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uRHluYW1vREJ2MiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHB1dF9pdGVtIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHV0SXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwdXRfaXRlbScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkR5bmFtb0RCdjJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25EeW5hbW9EQnYyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHB1dF9pdGVtOiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25EeW5hbW9EQnYyUHV0SXRlbVRvVGVycmFmb3JtKHN0cnVjdCEucHV0SXRlbSksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkR5bmFtb0RiIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaGFzaF9rZXlfZmllbGQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBoYXNoS2V5RmllbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdoYXNoX2tleV9maWVsZCcpO1xuICB9XG5cbiAgLy8gaGFzaF9rZXlfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhhc2hLZXlUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaGFzaF9rZXlfdHlwZScpO1xuICB9XG5cbiAgLy8gaGFzaF9rZXlfdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBoYXNoS2V5VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdoYXNoX2tleV92YWx1ZScpO1xuICB9XG5cbiAgLy8gcGF5bG9hZF9maWVsZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBheWxvYWRGaWVsZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BheWxvYWRfZmllbGQnKTtcbiAgfVxuXG4gIC8vIHJhbmdlX2tleV9maWVsZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJhbmdlS2V5RmllbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyYW5nZV9rZXlfZmllbGQnKTtcbiAgfVxuXG4gIC8vIHJhbmdlX2tleV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmFuZ2VLZXlUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmFuZ2Vfa2V5X3R5cGUnKTtcbiAgfVxuXG4gIC8vIHJhbmdlX2tleV92YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJhbmdlS2V5VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyYW5nZV9rZXlfdmFsdWUnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyB0YWJsZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFibGVfbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25EeW5hbW9EYlRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkR5bmFtb0RiKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGhhc2hfa2V5X2ZpZWxkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhhc2hLZXlGaWVsZCksXG4gICAgaGFzaF9rZXlfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5oYXNoS2V5VHlwZSksXG4gICAgaGFzaF9rZXlfdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaGFzaEtleVZhbHVlKSxcbiAgICBwYXlsb2FkX2ZpZWxkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBheWxvYWRGaWVsZCksXG4gICAgcmFuZ2Vfa2V5X2ZpZWxkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJhbmdlS2V5RmllbGQpLFxuICAgIHJhbmdlX2tleV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJhbmdlS2V5VHlwZSksXG4gICAgcmFuZ2Vfa2V5X3ZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJhbmdlS2V5VmFsdWUpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHRhYmxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFibGVOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uRWxhc3RpY3NlYXJjaCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuZHBvaW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmRwb2ludCcpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpbmRleCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5kZXgnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uRWxhc3RpY3NlYXJjaFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkVsYXN0aWNzZWFyY2gpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5kcG9pbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW5kcG9pbnQpLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgICBpbmRleDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbmRleCksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uRmlyZWhvc2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBiYXRjaF9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYmF0Y2hNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2JhdGNoX21vZGUnKTtcbiAgfVxuXG4gIC8vIGRlbGl2ZXJ5X3N0cmVhbV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVsaXZlcnlTdHJlYW1OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsaXZlcnlfc3RyZWFtX25hbWUnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyBzZXBhcmF0b3IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXBhcmF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXBhcmF0b3InKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uRmlyZWhvc2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25GaXJlaG9zZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBiYXRjaF9tb2RlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5iYXRjaE1vZGUpLFxuICAgIGRlbGl2ZXJ5X3N0cmVhbV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGl2ZXJ5U3RyZWFtTmFtZSksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgc2VwYXJhdG9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcGFyYXRvciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkh0dHBBdXRoU2lndjQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gc2VydmljZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX25hbWUnKTtcbiAgfVxuXG4gIC8vIHNpZ25pbmdfcmVnaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2lnbmluZ1JlZ2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NpZ25pbmdfcmVnaW9uJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkh0dHBBdXRoU2lndjRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25IdHRwQXV0aFNpZ3Y0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHNlcnZpY2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJ2aWNlTmFtZSksXG4gICAgc2lnbmluZ19yZWdpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2lnbmluZ1JlZ2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkh0dHBBdXRoIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc2lndl80IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2lndjQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2lndl80JykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25IdHRwQXV0aFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkh0dHBBdXRoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNpZ3ZfNDogZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uSHR0cEF1dGhTaWd2NFRvVGVycmFmb3JtKHN0cnVjdCEuc2lndjQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25IdHRwSGVhZGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkh0dHBIZWFkZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uSHR0cEhlYWRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25IdHRwIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXV0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF1dGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXV0aCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNvbmZpcm1hdGlvbl91cmwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25maXJtYXRpb25VcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25maXJtYXRpb25fdXJsJyk7XG4gIH1cblxuICAvLyBoZWFkZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGVhZGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdoZWFkZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXJsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkh0dHBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25IdHRwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGF1dGg6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkh0dHBBdXRoVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRoKSxcbiAgICBjb25maXJtYXRpb25fdXJsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpcm1hdGlvblVybCksXG4gICAgaGVhZGVyczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25IdHRwSGVhZGVyc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmhlYWRlcnMpLFxuICAgIHVybDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cmwpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25Jb3RBbmFseXRpY3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBiYXRjaF9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYmF0Y2hNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2JhdGNoX21vZGUnKTtcbiAgfVxuXG4gIC8vIGNoYW5uZWxfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNoYW5uZWxOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2hhbm5lbF9uYW1lJyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25Jb3RBbmFseXRpY3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25Jb3RBbmFseXRpY3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYmF0Y2hfbW9kZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYmF0Y2hNb2RlKSxcbiAgICBjaGFubmVsX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2hhbm5lbE5hbWUpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25Jb3RFdmVudHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBiYXRjaF9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYmF0Y2hNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2JhdGNoX21vZGUnKTtcbiAgfVxuXG4gIC8vIGlucHV0X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnB1dE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnB1dF9uYW1lJyk7XG4gIH1cblxuICAvLyBtZXNzYWdlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWVzc2FnZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWVzc2FnZV9pZCcpO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uSW90RXZlbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uSW90RXZlbnRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJhdGNoX21vZGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmJhdGNoTW9kZSksXG4gICAgaW5wdXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnB1dE5hbWUpLFxuICAgIG1lc3NhZ2VfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWVzc2FnZUlkKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uSW90U2l0ZVdpc2VQdXRBc3NldFByb3BlcnR5VmFsdWVFbnRyaWVzUHJvcGVydHlWYWx1ZXNUaW1lc3RhbXAgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBvZmZzZXRfaW5fbmFub3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvZmZzZXRJbk5hbm9zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2Zmc2V0X2luX25hbm9zJyk7XG4gIH1cblxuICAvLyB0aW1lX2luX3NlY29uZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0aW1lSW5TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGltZV9pbl9zZWNvbmRzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbklvdFNpdGVXaXNlUHV0QXNzZXRQcm9wZXJ0eVZhbHVlRW50cmllc1Byb3BlcnR5VmFsdWVzVGltZXN0YW1wVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uSW90U2l0ZVdpc2VQdXRBc3NldFByb3BlcnR5VmFsdWVFbnRyaWVzUHJvcGVydHlWYWx1ZXNUaW1lc3RhbXApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgb2Zmc2V0X2luX25hbm9zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9mZnNldEluTmFub3MpLFxuICAgIHRpbWVfaW5fc2Vjb25kczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lSW5TZWNvbmRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uSW90U2l0ZVdpc2VQdXRBc3NldFByb3BlcnR5VmFsdWVFbnRyaWVzUHJvcGVydHlWYWx1ZXNWYWx1ZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJvb2xlYW5fdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBib29sZWFuVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdib29sZWFuX3ZhbHVlJyk7XG4gIH1cblxuICAvLyBkb3VibGVfdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkb3VibGVWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvdWJsZV92YWx1ZScpO1xuICB9XG5cbiAgLy8gaW50ZWdlcl92YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGludGVnZXJWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ludGVnZXJfdmFsdWUnKTtcbiAgfVxuXG4gIC8vIHN0cmluZ192YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0cmluZ1ZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RyaW5nX3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbklvdFNpdGVXaXNlUHV0QXNzZXRQcm9wZXJ0eVZhbHVlRW50cmllc1Byb3BlcnR5VmFsdWVzVmFsdWVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25Jb3RTaXRlV2lzZVB1dEFzc2V0UHJvcGVydHlWYWx1ZUVudHJpZXNQcm9wZXJ0eVZhbHVlc1ZhbHVlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJvb2xlYW5fdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYm9vbGVhblZhbHVlKSxcbiAgICBkb3VibGVfdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG91YmxlVmFsdWUpLFxuICAgIGludGVnZXJfdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW50ZWdlclZhbHVlKSxcbiAgICBzdHJpbmdfdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RyaW5nVmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25Jb3RTaXRlV2lzZVB1dEFzc2V0UHJvcGVydHlWYWx1ZUVudHJpZXNQcm9wZXJ0eVZhbHVlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHF1YWxpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBxdWFsaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncXVhbGl0eScpO1xuICB9XG5cbiAgLy8gdGltZXN0YW1wIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGltZXN0YW1wKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RpbWVzdGFtcCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmFsdWUnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbklvdFNpdGVXaXNlUHV0QXNzZXRQcm9wZXJ0eVZhbHVlRW50cmllc1Byb3BlcnR5VmFsdWVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uSW90U2l0ZVdpc2VQdXRBc3NldFByb3BlcnR5VmFsdWVFbnRyaWVzUHJvcGVydHlWYWx1ZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcXVhbGl0eTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5xdWFsaXR5KSxcbiAgICB0aW1lc3RhbXA6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbklvdFNpdGVXaXNlUHV0QXNzZXRQcm9wZXJ0eVZhbHVlRW50cmllc1Byb3BlcnR5VmFsdWVzVGltZXN0YW1wVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lc3RhbXApLFxuICAgIHZhbHVlOiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25Jb3RTaXRlV2lzZVB1dEFzc2V0UHJvcGVydHlWYWx1ZUVudHJpZXNQcm9wZXJ0eVZhbHVlc1ZhbHVlVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbklvdFNpdGVXaXNlUHV0QXNzZXRQcm9wZXJ0eVZhbHVlRW50cmllcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFzc2V0X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXNzZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Fzc2V0X2lkJyk7XG4gIH1cblxuICAvLyBlbnRyeV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVudHJ5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbnRyeV9pZCcpO1xuICB9XG5cbiAgLy8gcHJvcGVydHlfYWxpYXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9wZXJ0eUFsaWFzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvcGVydHlfYWxpYXMnKTtcbiAgfVxuXG4gIC8vIHByb3BlcnR5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvcGVydHlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3BlcnR5X2lkJyk7XG4gIH1cblxuICAvLyBwcm9wZXJ0eV92YWx1ZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9wZXJ0eVZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwcm9wZXJ0eV92YWx1ZXMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbklvdFNpdGVXaXNlUHV0QXNzZXRQcm9wZXJ0eVZhbHVlRW50cmllc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbklvdFNpdGVXaXNlUHV0QXNzZXRQcm9wZXJ0eVZhbHVlRW50cmllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhc3NldF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hc3NldElkKSxcbiAgICBlbnRyeV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbnRyeUlkKSxcbiAgICBwcm9wZXJ0eV9hbGlhczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9wZXJ0eUFsaWFzKSxcbiAgICBwcm9wZXJ0eV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9wZXJ0eUlkKSxcbiAgICBwcm9wZXJ0eV92YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uSW90U2l0ZVdpc2VQdXRBc3NldFByb3BlcnR5VmFsdWVFbnRyaWVzUHJvcGVydHlWYWx1ZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5wcm9wZXJ0eVZhbHVlcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbklvdFNpdGVXaXNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcHV0X2Fzc2V0X3Byb3BlcnR5X3ZhbHVlX2VudHJpZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwdXRBc3NldFByb3BlcnR5VmFsdWVFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3B1dF9hc3NldF9wcm9wZXJ0eV92YWx1ZV9lbnRyaWVzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uSW90U2l0ZVdpc2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25Jb3RTaXRlV2lzZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwdXRfYXNzZXRfcHJvcGVydHlfdmFsdWVfZW50cmllczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25Jb3RTaXRlV2lzZVB1dEFzc2V0UHJvcGVydHlWYWx1ZUVudHJpZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5wdXRBc3NldFByb3BlcnR5VmFsdWVFbnRyaWVzKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uS2Fma2EgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjbGllbnRfcHJvcGVydGllcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsaWVudFByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2xpZW50X3Byb3BlcnRpZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvbkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX2FybicpO1xuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cblxuICAvLyBwYXJ0aXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYXJ0aXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXJ0aXRpb24nKTtcbiAgfVxuXG4gIC8vIHRvcGljIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdG9waWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0b3BpYycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25LYWZrYVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkthZmthKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNsaWVudF9wcm9wZXJ0aWVzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNsaWVudFByb3BlcnRpZXMpLFxuICAgIGRlc3RpbmF0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXN0aW5hdGlvbkFybiksXG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgcGFydGl0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhcnRpdGlvbiksXG4gICAgdG9waWM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudG9waWMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25LaW5lc2lzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcGFydGl0aW9uX2tleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhcnRpdGlvbktleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhcnRpdGlvbl9rZXknKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyBzdHJlYW1fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0cmVhbU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdHJlYW1fbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25LaW5lc2lzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uS2luZXNpcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwYXJ0aXRpb25fa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhcnRpdGlvbktleSksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgc3RyZWFtX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RyZWFtTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkxhbWJkYSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZ1bmN0aW9uX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZ1bmN0aW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZnVuY3Rpb25fYXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkxhbWJkYVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkxhbWJkYSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmdW5jdGlvbl9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZnVuY3Rpb25Bcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25SZXB1Ymxpc2ggZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBxb3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBxb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdxb3MnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyB0b3BpYyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRvcGljKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndG9waWMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uUmVwdWJsaXNoVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uUmVwdWJsaXNoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHFvczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5xb3MpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHRvcGljOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvcGljKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uUzMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBidWNrZXRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfbmFtZScpO1xuICB9XG5cbiAgLy8gY2FubmVkX2FjbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNhbm5lZEFjbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nhbm5lZF9hY2wnKTtcbiAgfVxuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uUzNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25TMyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXROYW1lKSxcbiAgICBjYW5uZWRfYWNsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhbm5lZEFjbCksXG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvblNucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG1lc3NhZ2VfZm9ybWF0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWVzc2FnZUZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lc3NhZ2VfZm9ybWF0Jyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gdGFyZ2V0X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhcmdldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhcmdldF9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uU25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uU25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VfZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lc3NhZ2VGb3JtYXQpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHRhcmdldF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0QXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uU3FzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcXVldWVfdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcXVldWVVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdxdWV1ZV91cmwnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyB1c2VfYmFzZV82NCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVzZUJhc2U2NCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd1c2VfYmFzZV82NCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25TcXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25TcXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcXVldWVfdXJsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnF1ZXVlVXJsKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgICB1c2VfYmFzZV82NDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEudXNlQmFzZTY0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uU3RlcEZ1bmN0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGV4ZWN1dGlvbl9uYW1lX3ByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4ZWN1dGlvbk5hbWVQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleGVjdXRpb25fbmFtZV9wcmVmaXgnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyBzdGF0ZV9tYWNoaW5lX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0ZU1hY2hpbmVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdGVfbWFjaGluZV9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvblN0ZXBGdW5jdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25TdGVwRnVuY3Rpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGV4ZWN1dGlvbl9uYW1lX3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5leGVjdXRpb25OYW1lUHJlZml4KSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgICBzdGF0ZV9tYWNoaW5lX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdGVNYWNoaW5lTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvblRpbWVzdHJlYW1EaW1lbnNpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uVGltZXN0cmVhbURpbWVuc2lvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25UaW1lc3RyZWFtRGltZW5zaW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uVGltZXN0cmVhbVRpbWVzdGFtcCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1bml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndW5pdCcpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvblRpbWVzdHJlYW1UaW1lc3RhbXBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25UaW1lc3RyZWFtVGltZXN0YW1wKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25UaW1lc3RyZWFtIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYmF0Y2hfbW9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJhdGNoTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdiYXRjaF9tb2RlJyk7XG4gIH1cblxuICAvLyBkYXRhYmFzZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2VfbmFtZScpO1xuICB9XG5cbiAgLy8gZGltZW5zaW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpbWVuc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGltZW5zaW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyB0YWJsZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFibGVfbmFtZScpO1xuICB9XG5cbiAgLy8gdGltZXN0YW1wIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGltZXN0YW1wKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RpbWVzdGFtcCcpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uVGltZXN0cmVhbVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvblRpbWVzdHJlYW0pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYmF0Y2hfbW9kZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYmF0Y2hNb2RlKSxcbiAgICBkYXRhYmFzZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlTmFtZSksXG4gICAgZGltZW5zaW9uczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25UaW1lc3RyZWFtRGltZW5zaW9uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRpbWVuc2lvbnMpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHRhYmxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFibGVOYW1lKSxcbiAgICB0aW1lc3RhbXA6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvblRpbWVzdHJlYW1UaW1lc3RhbXBUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpbWVzdGFtcCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNsb3Vkd2F0Y2hfYWxhcm0gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbG91ZHdhdGNoQWxhcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2xvdWR3YXRjaF9hbGFybScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9ncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Nsb3Vkd2F0Y2hfbG9ncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfbWV0cmljIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaE1ldHJpYygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjbG91ZHdhdGNoX21ldHJpYycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGR5bmFtb19kX2J2XzIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkeW5hbW9EQnYyKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2R5bmFtb19kX2J2XzInKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkeW5hbW9fZGIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkeW5hbW9EYigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkeW5hbW9fZGInKSBhcyBhbnk7XG4gIH1cblxuICAvLyBlbGFzdGljc2VhcmNoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZWxhc3RpY3NlYXJjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbGFzdGljc2VhcmNoJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZmlyZWhvc2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmaXJlaG9zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmaXJlaG9zZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGh0dHAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBodHRwKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2h0dHAnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpb3RfYW5hbHl0aWNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW90QW5hbHl0aWNzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2lvdF9hbmFseXRpY3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpb3RfZXZlbnRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW90RXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2lvdF9ldmVudHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpb3Rfc2l0ZV93aXNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW90U2l0ZVdpc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaW90X3NpdGVfd2lzZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGthZmthIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2Fma2EoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgna2Fma2EnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBraW5lc2lzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2luZXNpcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdraW5lc2lzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbGFtYmRhIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFtYmRhKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xhbWJkYScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJlcHVibGlzaCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlcHVibGlzaCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXB1Ymxpc2gnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzMyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3MzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNxcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNxcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzcXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzdGVwX2Z1bmN0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0ZXBGdW5jdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RlcF9mdW5jdGlvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0aW1lc3RyZWFtIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGltZXN0cmVhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0aW1lc3RyZWFtJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2xvdWR3YXRjaF9hbGFybTogZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uQ2xvdWR3YXRjaEFsYXJtVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoQWxhcm0pLFxuICAgIGNsb3Vkd2F0Y2hfbG9nczogZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uQ2xvdWR3YXRjaExvZ3NUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hMb2dzKSxcbiAgICBjbG91ZHdhdGNoX21ldHJpYzogZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uQ2xvdWR3YXRjaE1ldHJpY1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaE1ldHJpYyksXG4gICAgZHluYW1vX2RfYnZfMjogZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uRHluYW1vREJ2MlRvVGVycmFmb3JtKHN0cnVjdCEuZHluYW1vREJ2MiksXG4gICAgZHluYW1vX2RiOiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25EeW5hbW9EYlRvVGVycmFmb3JtKHN0cnVjdCEuZHluYW1vRGIpLFxuICAgIGVsYXN0aWNzZWFyY2g6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkVsYXN0aWNzZWFyY2hUb1RlcnJhZm9ybShzdHJ1Y3QhLmVsYXN0aWNzZWFyY2gpLFxuICAgIGZpcmVob3NlOiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25GaXJlaG9zZVRvVGVycmFmb3JtKHN0cnVjdCEuZmlyZWhvc2UpLFxuICAgIGh0dHA6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkh0dHBUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHApLFxuICAgIGlvdF9hbmFseXRpY3M6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbklvdEFuYWx5dGljc1RvVGVycmFmb3JtKHN0cnVjdCEuaW90QW5hbHl0aWNzKSxcbiAgICBpb3RfZXZlbnRzOiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25Jb3RFdmVudHNUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvdEV2ZW50cyksXG4gICAgaW90X3NpdGVfd2lzZTogZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uSW90U2l0ZVdpc2VUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvdFNpdGVXaXNlKSxcbiAgICBrYWZrYTogZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uS2Fma2FUb1RlcnJhZm9ybShzdHJ1Y3QhLmthZmthKSxcbiAgICBraW5lc2lzOiBkYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkRXJyb3JBY3Rpb25LaW5lc2lzVG9UZXJyYWZvcm0oc3RydWN0IS5raW5lc2lzKSxcbiAgICBsYW1iZGE6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvbkxhbWJkYVRvVGVycmFmb3JtKHN0cnVjdCEubGFtYmRhKSxcbiAgICByZXB1Ymxpc2g6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvblJlcHVibGlzaFRvVGVycmFmb3JtKHN0cnVjdCEucmVwdWJsaXNoKSxcbiAgICBzMzogZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uUzNUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzKSxcbiAgICBzbnM6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvblNuc1RvVGVycmFmb3JtKHN0cnVjdCEuc25zKSxcbiAgICBzcXM6IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvblNxc1RvVGVycmFmb3JtKHN0cnVjdCEuc3FzKSxcbiAgICBzdGVwX2Z1bmN0aW9uczogZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uU3RlcEZ1bmN0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuc3RlcEZ1bmN0aW9ucyksXG4gICAgdGltZXN0cmVhbTogZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEVycm9yQWN0aW9uVGltZXN0cmVhbVRvVGVycmFmb3JtKHN0cnVjdCEudGltZXN0cmVhbSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY3Rpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhY3Rpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gYXdzX2lvdF9zcWxfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF3c0lvdFNxbFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhd3NfaW90X3NxbF92ZXJzaW9uJyk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIC8vIGVycm9yX2FjdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVycm9yQWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Vycm9yX2FjdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJ1bGVfZGlzYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBydWxlRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncnVsZV9kaXNhYmxlZCcpO1xuICB9XG5cbiAgLy8gc3FsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3FsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3FsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVUb3BpY1J1bGVQYXlsb2FkKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjSW90VG9waWNSdWxlVG9waWNSdWxlUGF5bG9hZEFjdGlvbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5hY3Rpb25zKSxcbiAgICBhd3NfaW90X3NxbF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF3c0lvdFNxbFZlcnNpb24pLFxuICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc2NyaXB0aW9uKSxcbiAgICBlcnJvcl9hY3Rpb246IGRhdGFBd3NjY0lvdFRvcGljUnVsZVRvcGljUnVsZVBheWxvYWRFcnJvckFjdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZXJyb3JBY3Rpb24pLFxuICAgIHJ1bGVfZGlzYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJ1bGVEaXNhYmxlZCksXG4gICAgc3FsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNxbCksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9pb3RfdG9waWNfcnVsZS5odG1sIGF3c2NjX2lvdF90b3BpY19ydWxlfVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RUb3BpY1J1bGUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2lvdF90b3BpY19ydWxlXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2lvdF90b3BpY19ydWxlLmh0bWwgYXdzY2NfaW90X3RvcGljX3J1bGV9IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY0lvdFRvcGljUnVsZUNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzY2NJb3RUb3BpY1J1bGVDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX2lvdF90b3BpY19ydWxlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRcbiAgfVxuXG4gIC8vIHJ1bGVfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncnVsZV9uYW1lJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdG9waWNfcnVsZV9wYXlsb2FkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdG9waWNSdWxlUGF5bG9hZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0b3BpY19ydWxlX3BheWxvYWQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxufVxuIl19