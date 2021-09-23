// https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IoteventsDetectorModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Information that defines how a detector operates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#detector_model_definition IoteventsDetectorModel#detector_model_definition}
  */
  readonly detectorModelDefinition: IoteventsDetectorModelDetectorModelDefinition;
  /**
  * A brief description of the detector model.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#detector_model_description IoteventsDetectorModel#detector_model_description}
  */
  readonly detectorModelDescription?: string;
  /**
  * The name of the detector model.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#detector_model_name IoteventsDetectorModel#detector_model_name}
  */
  readonly detectorModelName?: string;
  /**
  * Information about the order in which events are evaluated and how actions are executed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#evaluation_method IoteventsDetectorModel#evaluation_method}
  */
  readonly evaluationMethod?: string;
  /**
  * The value used to identify a detector instance. When a device or system sends input, a new detector instance with a unique key value is created. AWS IoT Events can continue to route input to its corresponding detector instance based on this identifying information.

This parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct detector instance, the device must send a message payload that contains the same attribute-value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#key IoteventsDetectorModel#key}
  */
  readonly key?: string;
  /**
  * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#role_arn IoteventsDetectorModel#role_arn}
  */
  readonly roleArn: string;
  /**
  * An array of key-value pairs to apply to this resource.

For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#tags IoteventsDetectorModel#tags}
  */
  readonly tags?: IoteventsDetectorModelTags[];
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2Payload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2PayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2Payload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2 {
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2Payload;
  /**
  * The name of the DynamoDB table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#table_name IoteventsDetectorModel#table_name}
  */
  readonly tableName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2ToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2PayloadToTerraform(struct!.payload),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDb {
  /**
  * The name of the hash key (also called the partition key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#hash_key_field IoteventsDetectorModel#hash_key_field}
  */
  readonly hashKeyField: string;
  /**
  * The data type for the hash key (also called the partition key). You can specify the following values:

* `STRING` - The hash key is a string.

* `NUMBER` - The hash key is a number.

If you don't specify `hashKeyType`, the default value is `STRING`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#hash_key_type IoteventsDetectorModel#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * The value of the hash key (also called the partition key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#hash_key_value IoteventsDetectorModel#hash_key_value}
  */
  readonly hashKeyValue: string;
  /**
  * The type of operation to perform. You can specify the following values:

* `INSERT` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.

* `UPDATE` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.

* `DELETE` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.

If you don't specify this parameter, AWS IoT Events triggers the `INSERT` operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#operation IoteventsDetectorModel#operation}
  */
  readonly operation?: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayload;
  /**
  * The name of the DynamoDB column that receives the action payload.

If you don't specify this parameter, the name of the DynamoDB column is `payload`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload_field IoteventsDetectorModel#payload_field}
  */
  readonly payloadField?: string;
  /**
  * The name of the range key (also called the sort key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#range_key_field IoteventsDetectorModel#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * The data type for the range key (also called the sort key), You can specify the following values:

* `STRING` - The range key is a string.

* `NUMBER` - The range key is number.

If you don't specify `rangeKeyField`, the default value is `STRING`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#range_key_type IoteventsDetectorModel#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * The value of the range key (also called the sort key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#range_key_value IoteventsDetectorModel#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * The name of the DynamoDB table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#table_name IoteventsDetectorModel#table_name}
  */
  readonly tableName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hash_key_field: cdktf.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktf.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktf.stringToTerraform(struct!.hashKeyValue),
    operation: cdktf.stringToTerraform(struct!.operation),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadToTerraform(struct!.payload),
    payload_field: cdktf.stringToTerraform(struct!.payloadField),
    range_key_field: cdktf.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktf.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktf.stringToTerraform(struct!.rangeKeyValue),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehose {
  /**
  * The name of the Kinesis Data Firehose delivery stream where the data is written.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#delivery_stream_name IoteventsDetectorModel#delivery_stream_name}
  */
  readonly deliveryStreamName: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayload;
  /**
  * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#separator IoteventsDetectorModel#separator}
  */
  readonly separator?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehoseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadToTerraform(struct!.payload),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEvents {
  /**
  * The name of the AWS IoT Events input where the data is sent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#input_name IoteventsDetectorModel#input_name}
  */
  readonly inputName: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input_name: cdktf.stringToTerraform(struct!.inputName),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadToTerraform(struct!.payload),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestamp {
  /**
  * The timestamp, in seconds, in the Unix epoch format. The valid range is between `1-31556889864403199`. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#offset_in_nanos IoteventsDetectorModel#offset_in_nanos}
  */
  readonly offsetInNanos?: string;
  /**
  * The nanosecond offset converted from `timeInSeconds`. The valid range is between `0-999999999`. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#time_in_seconds IoteventsDetectorModel#time_in_seconds}
  */
  readonly timeInSeconds: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestamp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    offset_in_nanos: cdktf.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktf.stringToTerraform(struct!.timeInSeconds),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValue {
  /**
  * The asset property value is a Boolean value that must be `TRUE` or `FALSE`. You can also specify an expression. If you use an expression, the evaluated result should be a Boolean value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#boolean_value IoteventsDetectorModel#boolean_value}
  */
  readonly booleanValue?: string;
  /**
  * The asset property value is a double. You can also specify an expression. If you use an expression, the evaluated result should be a double.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#double_value IoteventsDetectorModel#double_value}
  */
  readonly doubleValue?: string;
  /**
  * The asset property value is an integer. You can also specify an expression. If you use an expression, the evaluated result should be an integer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#integer_value IoteventsDetectorModel#integer_value}
  */
  readonly integerValue?: string;
  /**
  * The asset property value is a string. You can also specify an expression. If you use an expression, the evaluated result should be a string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#string_value IoteventsDetectorModel#string_value}
  */
  readonly stringValue?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boolean_value: cdktf.stringToTerraform(struct!.booleanValue),
    double_value: cdktf.stringToTerraform(struct!.doubleValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValue {
  /**
  * The quality of the asset property value. The value must be `GOOD`, `BAD`, or `UNCERTAIN`. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#quality IoteventsDetectorModel#quality}
  */
  readonly quality?: string;
  /**
  * A structure that contains timestamp information. For more information, see [TimeInNanos](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html) in the *AWS IoT SiteWise API Reference*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timestamp IoteventsDetectorModel#timestamp}
  */
  readonly timestamp?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestamp;
  /**
  * A structure that contains an asset property value. For more information, see [Variant](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html) in the *AWS IoT SiteWise API Reference*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#value IoteventsDetectorModel#value}
  */
  readonly value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValue;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    quality: cdktf.stringToTerraform(struct!.quality),
    timestamp: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct!.timestamp),
    value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValueToTerraform(struct!.value),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWise {
  /**
  * The ID of the asset that has the specified property. You can specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#asset_id IoteventsDetectorModel#asset_id}
  */
  readonly assetId?: string;
  /**
  * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#entry_id IoteventsDetectorModel#entry_id}
  */
  readonly entryId?: string;
  /**
  * The alias of the asset property. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#property_alias IoteventsDetectorModel#property_alias}
  */
  readonly propertyAlias?: string;
  /**
  * The ID of the asset property. You can specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#property_id IoteventsDetectorModel#property_id}
  */
  readonly propertyId?: string;
  /**
  * A structure that contains value information. For more information, see [AssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html) in the *AWS IoT SiteWise API Reference*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#property_value IoteventsDetectorModel#property_value}
  */
  readonly propertyValue: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValue;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWiseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWise): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asset_id: cdktf.stringToTerraform(struct!.assetId),
    entry_id: cdktf.stringToTerraform(struct!.entryId),
    property_alias: cdktf.stringToTerraform(struct!.propertyAlias),
    property_id: cdktf.stringToTerraform(struct!.propertyId),
    property_value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueToTerraform(struct!.propertyValue),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublish {
  /**
  * The MQTT topic of the message. You can use a string expression that includes variables (`$variable.<variable-name>`) and input values (`$input.<input-name>.<path-to-datum>`) as the topic string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#mqtt_topic IoteventsDetectorModel#mqtt_topic}
  */
  readonly mqttTopic: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublish): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mqtt_topic: cdktf.stringToTerraform(struct!.mqttTopic),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadToTerraform(struct!.payload),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambda {
  /**
  * The ARN of the Lambda function that is executed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#function_arn IoteventsDetectorModel#function_arn}
  */
  readonly functionArn: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadToTerraform(struct!.payload),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer {
  /**
  * The name of the timer to reset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimer {
  /**
  * The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (`$variable.<variable-name>`), and input values (`$input.<input-name>.<path-to-datum>`) as the duration. The range of the duration is `1-31622400` seconds. To ensure accuracy, the minimum duration is `60` seconds. The evaluated result of the duration is rounded down to the nearest whole number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#duration_expression IoteventsDetectorModel#duration_expression}
  */
  readonly durationExpression?: string;
  /**
  * The number of seconds until the timer expires. The minimum value is `60` seconds to ensure accuracy. The maximum value is `31622400` seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#seconds IoteventsDetectorModel#seconds}
  */
  readonly seconds?: number;
  /**
  * The name of the timer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_expression: cdktf.stringToTerraform(struct!.durationExpression),
    seconds: cdktf.numberToTerraform(struct!.seconds),
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariable {
  /**
  * The new value of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#value IoteventsDetectorModel#value}
  */
  readonly value: string;
  /**
  * The name of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#variable_name IoteventsDetectorModel#variable_name}
  */
  readonly variableName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariableToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSns {
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayload;
  /**
  * The ARN of the Amazon SNS target where the message is sent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#target_arn IoteventsDetectorModel#target_arn}
  */
  readonly targetArn: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadToTerraform(struct!.payload),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqs {
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayload;
  /**
  * The URL of the SQS queue where the data is written.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#queue_url IoteventsDetectorModel#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Set this to `TRUE` if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to `FALSE`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#use_base_64 IoteventsDetectorModel#use_base_64}
  */
  readonly useBase64?: boolean | cdktf.IResolvable;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadToTerraform(struct!.payload),
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    use_base_64: cdktf.booleanToTerraform(struct!.useBase64),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActions {
  /**
  * Information needed to clear the timer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#clear_timer IoteventsDetectorModel#clear_timer}
  */
  readonly clearTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimer;
  /**
  * Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.

You can use expressions for parameters that are strings. For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#dynamo_d_bv_2 IoteventsDetectorModel#dynamo_d_bv_2}
  */
  readonly dynamoDBv2?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2;
  /**
  * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *AWS IoT Events Developer Guide*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#dynamo_db IoteventsDetectorModel#dynamo_db}
  */
  readonly dynamoDb?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDb;
  /**
  * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#firehose IoteventsDetectorModel#firehose}
  */
  readonly firehose?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehose;
  /**
  * Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#iot_events IoteventsDetectorModel#iot_events}
  */
  readonly iotEvents?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEvents;
  /**
  * Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#iot_site_wise IoteventsDetectorModel#iot_site_wise}
  */
  readonly iotSiteWise?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWise;
  /**
  * Information required to publish the MQTT message through the AWS IoT message broker.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#iot_topic_publish IoteventsDetectorModel#iot_topic_publish}
  */
  readonly iotTopicPublish?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublish;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#lambda IoteventsDetectorModel#lambda}
  */
  readonly lambda?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambda;
  /**
  * Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#reset_timer IoteventsDetectorModel#reset_timer}
  */
  readonly resetTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer;
  /**
  * Information needed to set the timer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#set_timer IoteventsDetectorModel#set_timer}
  */
  readonly setTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimer;
  /**
  * Information about the variable and its new value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#set_variable IoteventsDetectorModel#set_variable}
  */
  readonly setVariable?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariable;
  /**
  * Information required to publish the Amazon SNS message.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#sns IoteventsDetectorModel#sns}
  */
  readonly sns?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSns;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#sqs IoteventsDetectorModel#sqs}
  */
  readonly sqs?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqs;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    clear_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimerToTerraform(struct!.clearTimer),
    dynamo_d_bv_2: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbToTerraform(struct!.dynamoDb),
    firehose: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehoseToTerraform(struct!.firehose),
    iot_events: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWiseToTerraform(struct!.iotSiteWise),
    iot_topic_publish: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishToTerraform(struct!.iotTopicPublish),
    lambda: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaToTerraform(struct!.lambda),
    reset_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimerToTerraform(struct!.resetTimer),
    set_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimerToTerraform(struct!.setTimer),
    set_variable: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariableToTerraform(struct!.setVariable),
    sns: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsToTerraform(struct!.sns),
    sqs: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsToTerraform(struct!.sqs),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents {
  /**
  * The actions to be performed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#actions IoteventsDetectorModel#actions}
  */
  readonly actions?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActions[];
  /**
  * The Boolean expression that, when `TRUE`, causes the `actions` to be performed. If not present, the `actions` are performed (=`TRUE`). If the expression result is not a `Boolean` value, the `actions` are not performed (=`FALSE`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#condition IoteventsDetectorModel#condition}
  */
  readonly condition?: string;
  /**
  * The name of the event.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#event_name IoteventsDetectorModel#event_name}
  */
  readonly eventName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsToTerraform)(struct!.actions),
    condition: cdktf.stringToTerraform(struct!.condition),
    event_name: cdktf.stringToTerraform(struct!.eventName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnter {
  /**
  * Specifies the `actions` that are performed when the state is entered and the `condition` is `TRUE`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#events IoteventsDetectorModel#events}
  */
  readonly events?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents[];
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    events: cdktf.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsToTerraform)(struct!.events),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Payload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Payload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2 {
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Payload;
  /**
  * The name of the DynamoDB table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#table_name IoteventsDetectorModel#table_name}
  */
  readonly tableName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2ToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadToTerraform(struct!.payload),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDb {
  /**
  * The name of the hash key (also called the partition key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#hash_key_field IoteventsDetectorModel#hash_key_field}
  */
  readonly hashKeyField: string;
  /**
  * The data type for the hash key (also called the partition key). You can specify the following values:

* `STRING` - The hash key is a string.

* `NUMBER` - The hash key is a number.

If you don't specify `hashKeyType`, the default value is `STRING`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#hash_key_type IoteventsDetectorModel#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * The value of the hash key (also called the partition key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#hash_key_value IoteventsDetectorModel#hash_key_value}
  */
  readonly hashKeyValue: string;
  /**
  * The type of operation to perform. You can specify the following values:

* `INSERT` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.

* `UPDATE` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.

* `DELETE` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.

If you don't specify this parameter, AWS IoT Events triggers the `INSERT` operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#operation IoteventsDetectorModel#operation}
  */
  readonly operation?: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayload;
  /**
  * The name of the DynamoDB column that receives the action payload.

If you don't specify this parameter, the name of the DynamoDB column is `payload`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload_field IoteventsDetectorModel#payload_field}
  */
  readonly payloadField?: string;
  /**
  * The name of the range key (also called the sort key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#range_key_field IoteventsDetectorModel#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * The data type for the range key (also called the sort key), You can specify the following values:

* `STRING` - The range key is a string.

* `NUMBER` - The range key is number.

If you don't specify `rangeKeyField`, the default value is `STRING`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#range_key_type IoteventsDetectorModel#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * The value of the range key (also called the sort key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#range_key_value IoteventsDetectorModel#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * The name of the DynamoDB table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#table_name IoteventsDetectorModel#table_name}
  */
  readonly tableName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hash_key_field: cdktf.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktf.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktf.stringToTerraform(struct!.hashKeyValue),
    operation: cdktf.stringToTerraform(struct!.operation),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadToTerraform(struct!.payload),
    payload_field: cdktf.stringToTerraform(struct!.payloadField),
    range_key_field: cdktf.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktf.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktf.stringToTerraform(struct!.rangeKeyValue),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehose {
  /**
  * The name of the Kinesis Data Firehose delivery stream where the data is written.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#delivery_stream_name IoteventsDetectorModel#delivery_stream_name}
  */
  readonly deliveryStreamName: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayload;
  /**
  * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#separator IoteventsDetectorModel#separator}
  */
  readonly separator?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehoseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadToTerraform(struct!.payload),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEvents {
  /**
  * The name of the AWS IoT Events input where the data is sent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#input_name IoteventsDetectorModel#input_name}
  */
  readonly inputName: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input_name: cdktf.stringToTerraform(struct!.inputName),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadToTerraform(struct!.payload),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestamp {
  /**
  * The timestamp, in seconds, in the Unix epoch format. The valid range is between `1-31556889864403199`. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#offset_in_nanos IoteventsDetectorModel#offset_in_nanos}
  */
  readonly offsetInNanos?: string;
  /**
  * The nanosecond offset converted from `timeInSeconds`. The valid range is between `0-999999999`. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#time_in_seconds IoteventsDetectorModel#time_in_seconds}
  */
  readonly timeInSeconds: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestamp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    offset_in_nanos: cdktf.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktf.stringToTerraform(struct!.timeInSeconds),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValue {
  /**
  * The asset property value is a Boolean value that must be `TRUE` or `FALSE`. You can also specify an expression. If you use an expression, the evaluated result should be a Boolean value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#boolean_value IoteventsDetectorModel#boolean_value}
  */
  readonly booleanValue?: string;
  /**
  * The asset property value is a double. You can also specify an expression. If you use an expression, the evaluated result should be a double.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#double_value IoteventsDetectorModel#double_value}
  */
  readonly doubleValue?: string;
  /**
  * The asset property value is an integer. You can also specify an expression. If you use an expression, the evaluated result should be an integer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#integer_value IoteventsDetectorModel#integer_value}
  */
  readonly integerValue?: string;
  /**
  * The asset property value is a string. You can also specify an expression. If you use an expression, the evaluated result should be a string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#string_value IoteventsDetectorModel#string_value}
  */
  readonly stringValue?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boolean_value: cdktf.stringToTerraform(struct!.booleanValue),
    double_value: cdktf.stringToTerraform(struct!.doubleValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValue {
  /**
  * The quality of the asset property value. The value must be `GOOD`, `BAD`, or `UNCERTAIN`. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#quality IoteventsDetectorModel#quality}
  */
  readonly quality?: string;
  /**
  * A structure that contains timestamp information. For more information, see [TimeInNanos](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html) in the *AWS IoT SiteWise API Reference*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timestamp IoteventsDetectorModel#timestamp}
  */
  readonly timestamp?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestamp;
  /**
  * A structure that contains an asset property value. For more information, see [Variant](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html) in the *AWS IoT SiteWise API Reference*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#value IoteventsDetectorModel#value}
  */
  readonly value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValue;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    quality: cdktf.stringToTerraform(struct!.quality),
    timestamp: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct!.timestamp),
    value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueToTerraform(struct!.value),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWise {
  /**
  * The ID of the asset that has the specified property. You can specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#asset_id IoteventsDetectorModel#asset_id}
  */
  readonly assetId?: string;
  /**
  * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#entry_id IoteventsDetectorModel#entry_id}
  */
  readonly entryId?: string;
  /**
  * The alias of the asset property. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#property_alias IoteventsDetectorModel#property_alias}
  */
  readonly propertyAlias?: string;
  /**
  * The ID of the asset property. You can specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#property_id IoteventsDetectorModel#property_id}
  */
  readonly propertyId?: string;
  /**
  * A structure that contains value information. For more information, see [AssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html) in the *AWS IoT SiteWise API Reference*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#property_value IoteventsDetectorModel#property_value}
  */
  readonly propertyValue: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValue;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWise): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asset_id: cdktf.stringToTerraform(struct!.assetId),
    entry_id: cdktf.stringToTerraform(struct!.entryId),
    property_alias: cdktf.stringToTerraform(struct!.propertyAlias),
    property_id: cdktf.stringToTerraform(struct!.propertyId),
    property_value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueToTerraform(struct!.propertyValue),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublish {
  /**
  * The MQTT topic of the message. You can use a string expression that includes variables (`$variable.<variable-name>`) and input values (`$input.<input-name>.<path-to-datum>`) as the topic string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#mqtt_topic IoteventsDetectorModel#mqtt_topic}
  */
  readonly mqttTopic: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublish): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mqtt_topic: cdktf.stringToTerraform(struct!.mqttTopic),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadToTerraform(struct!.payload),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambda {
  /**
  * The ARN of the Lambda function that is executed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#function_arn IoteventsDetectorModel#function_arn}
  */
  readonly functionArn: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadToTerraform(struct!.payload),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer {
  /**
  * The name of the timer to reset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimer {
  /**
  * The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (`$variable.<variable-name>`), and input values (`$input.<input-name>.<path-to-datum>`) as the duration. The range of the duration is `1-31622400` seconds. To ensure accuracy, the minimum duration is `60` seconds. The evaluated result of the duration is rounded down to the nearest whole number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#duration_expression IoteventsDetectorModel#duration_expression}
  */
  readonly durationExpression?: string;
  /**
  * The number of seconds until the timer expires. The minimum value is `60` seconds to ensure accuracy. The maximum value is `31622400` seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#seconds IoteventsDetectorModel#seconds}
  */
  readonly seconds?: number;
  /**
  * The name of the timer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_expression: cdktf.stringToTerraform(struct!.durationExpression),
    seconds: cdktf.numberToTerraform(struct!.seconds),
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariable {
  /**
  * The new value of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#value IoteventsDetectorModel#value}
  */
  readonly value: string;
  /**
  * The name of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#variable_name IoteventsDetectorModel#variable_name}
  */
  readonly variableName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariableToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSns {
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayload;
  /**
  * The ARN of the Amazon SNS target where the message is sent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#target_arn IoteventsDetectorModel#target_arn}
  */
  readonly targetArn: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadToTerraform(struct!.payload),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqs {
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayload;
  /**
  * The URL of the SQS queue where the data is written.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#queue_url IoteventsDetectorModel#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Set this to `TRUE` if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to `FALSE`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#use_base_64 IoteventsDetectorModel#use_base_64}
  */
  readonly useBase64?: boolean | cdktf.IResolvable;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadToTerraform(struct!.payload),
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    use_base_64: cdktf.booleanToTerraform(struct!.useBase64),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActions {
  /**
  * Information needed to clear the timer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#clear_timer IoteventsDetectorModel#clear_timer}
  */
  readonly clearTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer;
  /**
  * Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.

You can use expressions for parameters that are strings. For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#dynamo_d_bv_2 IoteventsDetectorModel#dynamo_d_bv_2}
  */
  readonly dynamoDBv2?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2;
  /**
  * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *AWS IoT Events Developer Guide*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#dynamo_db IoteventsDetectorModel#dynamo_db}
  */
  readonly dynamoDb?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDb;
  /**
  * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#firehose IoteventsDetectorModel#firehose}
  */
  readonly firehose?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehose;
  /**
  * Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#iot_events IoteventsDetectorModel#iot_events}
  */
  readonly iotEvents?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEvents;
  /**
  * Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#iot_site_wise IoteventsDetectorModel#iot_site_wise}
  */
  readonly iotSiteWise?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWise;
  /**
  * Information required to publish the MQTT message through the AWS IoT message broker.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#iot_topic_publish IoteventsDetectorModel#iot_topic_publish}
  */
  readonly iotTopicPublish?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublish;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#lambda IoteventsDetectorModel#lambda}
  */
  readonly lambda?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambda;
  /**
  * Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#reset_timer IoteventsDetectorModel#reset_timer}
  */
  readonly resetTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer;
  /**
  * Information needed to set the timer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#set_timer IoteventsDetectorModel#set_timer}
  */
  readonly setTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimer;
  /**
  * Information about the variable and its new value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#set_variable IoteventsDetectorModel#set_variable}
  */
  readonly setVariable?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariable;
  /**
  * Information required to publish the Amazon SNS message.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#sns IoteventsDetectorModel#sns}
  */
  readonly sns?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSns;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#sqs IoteventsDetectorModel#sqs}
  */
  readonly sqs?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqs;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    clear_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimerToTerraform(struct!.clearTimer),
    dynamo_d_bv_2: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbToTerraform(struct!.dynamoDb),
    firehose: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehoseToTerraform(struct!.firehose),
    iot_events: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseToTerraform(struct!.iotSiteWise),
    iot_topic_publish: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishToTerraform(struct!.iotTopicPublish),
    lambda: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaToTerraform(struct!.lambda),
    reset_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimerToTerraform(struct!.resetTimer),
    set_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimerToTerraform(struct!.setTimer),
    set_variable: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariableToTerraform(struct!.setVariable),
    sns: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsToTerraform(struct!.sns),
    sqs: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsToTerraform(struct!.sqs),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents {
  /**
  * The actions to be performed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#actions IoteventsDetectorModel#actions}
  */
  readonly actions?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActions[];
  /**
  * The Boolean expression that, when `TRUE`, causes the `actions` to be performed. If not present, the `actions` are performed (=`TRUE`). If the expression result is not a `Boolean` value, the `actions` are not performed (=`FALSE`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#condition IoteventsDetectorModel#condition}
  */
  readonly condition?: string;
  /**
  * The name of the event.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#event_name IoteventsDetectorModel#event_name}
  */
  readonly eventName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsToTerraform)(struct!.actions),
    condition: cdktf.stringToTerraform(struct!.condition),
    event_name: cdktf.stringToTerraform(struct!.eventName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExit {
  /**
  * Specifies the `actions` that are performed when the state is exited and the `condition` is `TRUE`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#events IoteventsDetectorModel#events}
  */
  readonly events?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents[];
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExit): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    events: cdktf.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsToTerraform)(struct!.events),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Payload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Payload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2 {
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Payload;
  /**
  * The name of the DynamoDB table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#table_name IoteventsDetectorModel#table_name}
  */
  readonly tableName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2ToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadToTerraform(struct!.payload),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDb {
  /**
  * The name of the hash key (also called the partition key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#hash_key_field IoteventsDetectorModel#hash_key_field}
  */
  readonly hashKeyField: string;
  /**
  * The data type for the hash key (also called the partition key). You can specify the following values:

* `STRING` - The hash key is a string.

* `NUMBER` - The hash key is a number.

If you don't specify `hashKeyType`, the default value is `STRING`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#hash_key_type IoteventsDetectorModel#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * The value of the hash key (also called the partition key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#hash_key_value IoteventsDetectorModel#hash_key_value}
  */
  readonly hashKeyValue: string;
  /**
  * The type of operation to perform. You can specify the following values:

* `INSERT` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.

* `UPDATE` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.

* `DELETE` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.

If you don't specify this parameter, AWS IoT Events triggers the `INSERT` operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#operation IoteventsDetectorModel#operation}
  */
  readonly operation?: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayload;
  /**
  * The name of the DynamoDB column that receives the action payload.

If you don't specify this parameter, the name of the DynamoDB column is `payload`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload_field IoteventsDetectorModel#payload_field}
  */
  readonly payloadField?: string;
  /**
  * The name of the range key (also called the sort key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#range_key_field IoteventsDetectorModel#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * The data type for the range key (also called the sort key), You can specify the following values:

* `STRING` - The range key is a string.

* `NUMBER` - The range key is number.

If you don't specify `rangeKeyField`, the default value is `STRING`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#range_key_type IoteventsDetectorModel#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * The value of the range key (also called the sort key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#range_key_value IoteventsDetectorModel#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * The name of the DynamoDB table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#table_name IoteventsDetectorModel#table_name}
  */
  readonly tableName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hash_key_field: cdktf.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktf.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktf.stringToTerraform(struct!.hashKeyValue),
    operation: cdktf.stringToTerraform(struct!.operation),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadToTerraform(struct!.payload),
    payload_field: cdktf.stringToTerraform(struct!.payloadField),
    range_key_field: cdktf.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktf.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktf.stringToTerraform(struct!.rangeKeyValue),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehose {
  /**
  * The name of the Kinesis Data Firehose delivery stream where the data is written.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#delivery_stream_name IoteventsDetectorModel#delivery_stream_name}
  */
  readonly deliveryStreamName: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayload;
  /**
  * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#separator IoteventsDetectorModel#separator}
  */
  readonly separator?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehoseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadToTerraform(struct!.payload),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEvents {
  /**
  * The name of the AWS IoT Events input where the data is sent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#input_name IoteventsDetectorModel#input_name}
  */
  readonly inputName: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input_name: cdktf.stringToTerraform(struct!.inputName),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadToTerraform(struct!.payload),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestamp {
  /**
  * The timestamp, in seconds, in the Unix epoch format. The valid range is between `1-31556889864403199`. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#offset_in_nanos IoteventsDetectorModel#offset_in_nanos}
  */
  readonly offsetInNanos?: string;
  /**
  * The nanosecond offset converted from `timeInSeconds`. The valid range is between `0-999999999`. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#time_in_seconds IoteventsDetectorModel#time_in_seconds}
  */
  readonly timeInSeconds: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestamp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    offset_in_nanos: cdktf.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktf.stringToTerraform(struct!.timeInSeconds),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValue {
  /**
  * The asset property value is a Boolean value that must be `TRUE` or `FALSE`. You can also specify an expression. If you use an expression, the evaluated result should be a Boolean value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#boolean_value IoteventsDetectorModel#boolean_value}
  */
  readonly booleanValue?: string;
  /**
  * The asset property value is a double. You can also specify an expression. If you use an expression, the evaluated result should be a double.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#double_value IoteventsDetectorModel#double_value}
  */
  readonly doubleValue?: string;
  /**
  * The asset property value is an integer. You can also specify an expression. If you use an expression, the evaluated result should be an integer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#integer_value IoteventsDetectorModel#integer_value}
  */
  readonly integerValue?: string;
  /**
  * The asset property value is a string. You can also specify an expression. If you use an expression, the evaluated result should be a string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#string_value IoteventsDetectorModel#string_value}
  */
  readonly stringValue?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boolean_value: cdktf.stringToTerraform(struct!.booleanValue),
    double_value: cdktf.stringToTerraform(struct!.doubleValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValue {
  /**
  * The quality of the asset property value. The value must be `GOOD`, `BAD`, or `UNCERTAIN`. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#quality IoteventsDetectorModel#quality}
  */
  readonly quality?: string;
  /**
  * A structure that contains timestamp information. For more information, see [TimeInNanos](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html) in the *AWS IoT SiteWise API Reference*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timestamp IoteventsDetectorModel#timestamp}
  */
  readonly timestamp?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestamp;
  /**
  * A structure that contains an asset property value. For more information, see [Variant](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html) in the *AWS IoT SiteWise API Reference*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#value IoteventsDetectorModel#value}
  */
  readonly value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValue;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    quality: cdktf.stringToTerraform(struct!.quality),
    timestamp: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct!.timestamp),
    value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueToTerraform(struct!.value),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWise {
  /**
  * The ID of the asset that has the specified property. You can specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#asset_id IoteventsDetectorModel#asset_id}
  */
  readonly assetId?: string;
  /**
  * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#entry_id IoteventsDetectorModel#entry_id}
  */
  readonly entryId?: string;
  /**
  * The alias of the asset property. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#property_alias IoteventsDetectorModel#property_alias}
  */
  readonly propertyAlias?: string;
  /**
  * The ID of the asset property. You can specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#property_id IoteventsDetectorModel#property_id}
  */
  readonly propertyId?: string;
  /**
  * A structure that contains value information. For more information, see [AssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html) in the *AWS IoT SiteWise API Reference*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#property_value IoteventsDetectorModel#property_value}
  */
  readonly propertyValue: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValue;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWise): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asset_id: cdktf.stringToTerraform(struct!.assetId),
    entry_id: cdktf.stringToTerraform(struct!.entryId),
    property_alias: cdktf.stringToTerraform(struct!.propertyAlias),
    property_id: cdktf.stringToTerraform(struct!.propertyId),
    property_value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueToTerraform(struct!.propertyValue),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublish {
  /**
  * The MQTT topic of the message. You can use a string expression that includes variables (`$variable.<variable-name>`) and input values (`$input.<input-name>.<path-to-datum>`) as the topic string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#mqtt_topic IoteventsDetectorModel#mqtt_topic}
  */
  readonly mqttTopic: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublish): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mqtt_topic: cdktf.stringToTerraform(struct!.mqttTopic),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadToTerraform(struct!.payload),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambda {
  /**
  * The ARN of the Lambda function that is executed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#function_arn IoteventsDetectorModel#function_arn}
  */
  readonly functionArn: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadToTerraform(struct!.payload),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer {
  /**
  * The name of the timer to reset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimer {
  /**
  * The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (`$variable.<variable-name>`), and input values (`$input.<input-name>.<path-to-datum>`) as the duration. The range of the duration is `1-31622400` seconds. To ensure accuracy, the minimum duration is `60` seconds. The evaluated result of the duration is rounded down to the nearest whole number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#duration_expression IoteventsDetectorModel#duration_expression}
  */
  readonly durationExpression?: string;
  /**
  * The number of seconds until the timer expires. The minimum value is `60` seconds to ensure accuracy. The maximum value is `31622400` seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#seconds IoteventsDetectorModel#seconds}
  */
  readonly seconds?: number;
  /**
  * The name of the timer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_expression: cdktf.stringToTerraform(struct!.durationExpression),
    seconds: cdktf.numberToTerraform(struct!.seconds),
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariable {
  /**
  * The new value of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#value IoteventsDetectorModel#value}
  */
  readonly value: string;
  /**
  * The name of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#variable_name IoteventsDetectorModel#variable_name}
  */
  readonly variableName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariableToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSns {
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayload;
  /**
  * The ARN of the Amazon SNS target where the message is sent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#target_arn IoteventsDetectorModel#target_arn}
  */
  readonly targetArn: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadToTerraform(struct!.payload),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqs {
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayload;
  /**
  * The URL of the SQS queue where the data is written.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#queue_url IoteventsDetectorModel#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Set this to `TRUE` if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to `FALSE`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#use_base_64 IoteventsDetectorModel#use_base_64}
  */
  readonly useBase64?: boolean | cdktf.IResolvable;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadToTerraform(struct!.payload),
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    use_base_64: cdktf.booleanToTerraform(struct!.useBase64),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActions {
  /**
  * Information needed to clear the timer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#clear_timer IoteventsDetectorModel#clear_timer}
  */
  readonly clearTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer;
  /**
  * Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.

You can use expressions for parameters that are strings. For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#dynamo_d_bv_2 IoteventsDetectorModel#dynamo_d_bv_2}
  */
  readonly dynamoDBv2?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2;
  /**
  * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *AWS IoT Events Developer Guide*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#dynamo_db IoteventsDetectorModel#dynamo_db}
  */
  readonly dynamoDb?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDb;
  /**
  * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#firehose IoteventsDetectorModel#firehose}
  */
  readonly firehose?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehose;
  /**
  * Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#iot_events IoteventsDetectorModel#iot_events}
  */
  readonly iotEvents?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEvents;
  /**
  * Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#iot_site_wise IoteventsDetectorModel#iot_site_wise}
  */
  readonly iotSiteWise?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWise;
  /**
  * Information required to publish the MQTT message through the AWS IoT message broker.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#iot_topic_publish IoteventsDetectorModel#iot_topic_publish}
  */
  readonly iotTopicPublish?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublish;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#lambda IoteventsDetectorModel#lambda}
  */
  readonly lambda?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambda;
  /**
  * Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#reset_timer IoteventsDetectorModel#reset_timer}
  */
  readonly resetTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer;
  /**
  * Information needed to set the timer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#set_timer IoteventsDetectorModel#set_timer}
  */
  readonly setTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimer;
  /**
  * Information about the variable and its new value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#set_variable IoteventsDetectorModel#set_variable}
  */
  readonly setVariable?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariable;
  /**
  * Information required to publish the Amazon SNS message.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#sns IoteventsDetectorModel#sns}
  */
  readonly sns?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSns;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#sqs IoteventsDetectorModel#sqs}
  */
  readonly sqs?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqs;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    clear_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimerToTerraform(struct!.clearTimer),
    dynamo_d_bv_2: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbToTerraform(struct!.dynamoDb),
    firehose: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehoseToTerraform(struct!.firehose),
    iot_events: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseToTerraform(struct!.iotSiteWise),
    iot_topic_publish: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishToTerraform(struct!.iotTopicPublish),
    lambda: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaToTerraform(struct!.lambda),
    reset_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimerToTerraform(struct!.resetTimer),
    set_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimerToTerraform(struct!.setTimer),
    set_variable: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariableToTerraform(struct!.setVariable),
    sns: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsToTerraform(struct!.sns),
    sqs: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsToTerraform(struct!.sqs),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEvents {
  /**
  * The actions to be performed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#actions IoteventsDetectorModel#actions}
  */
  readonly actions?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActions[];
  /**
  * The Boolean expression that, when `TRUE`, causes the `actions` to be performed. If not present, the `actions` are performed (=`TRUE`). If the expression result is not a `Boolean` value, the `actions` are not performed (=`FALSE`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#condition IoteventsDetectorModel#condition}
  */
  readonly condition?: string;
  /**
  * The name of the event.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#event_name IoteventsDetectorModel#event_name}
  */
  readonly eventName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsToTerraform)(struct!.actions),
    condition: cdktf.stringToTerraform(struct!.condition),
    event_name: cdktf.stringToTerraform(struct!.eventName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Payload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Payload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2 {
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Payload;
  /**
  * The name of the DynamoDB table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#table_name IoteventsDetectorModel#table_name}
  */
  readonly tableName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2ToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadToTerraform(struct!.payload),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDb {
  /**
  * The name of the hash key (also called the partition key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#hash_key_field IoteventsDetectorModel#hash_key_field}
  */
  readonly hashKeyField: string;
  /**
  * The data type for the hash key (also called the partition key). You can specify the following values:

* `STRING` - The hash key is a string.

* `NUMBER` - The hash key is a number.

If you don't specify `hashKeyType`, the default value is `STRING`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#hash_key_type IoteventsDetectorModel#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * The value of the hash key (also called the partition key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#hash_key_value IoteventsDetectorModel#hash_key_value}
  */
  readonly hashKeyValue: string;
  /**
  * The type of operation to perform. You can specify the following values:

* `INSERT` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.

* `UPDATE` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.

* `DELETE` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.

If you don't specify this parameter, AWS IoT Events triggers the `INSERT` operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#operation IoteventsDetectorModel#operation}
  */
  readonly operation?: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayload;
  /**
  * The name of the DynamoDB column that receives the action payload.

If you don't specify this parameter, the name of the DynamoDB column is `payload`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload_field IoteventsDetectorModel#payload_field}
  */
  readonly payloadField?: string;
  /**
  * The name of the range key (also called the sort key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#range_key_field IoteventsDetectorModel#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * The data type for the range key (also called the sort key), You can specify the following values:

* `STRING` - The range key is a string.

* `NUMBER` - The range key is number.

If you don't specify `rangeKeyField`, the default value is `STRING`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#range_key_type IoteventsDetectorModel#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * The value of the range key (also called the sort key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#range_key_value IoteventsDetectorModel#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * The name of the DynamoDB table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#table_name IoteventsDetectorModel#table_name}
  */
  readonly tableName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hash_key_field: cdktf.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktf.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktf.stringToTerraform(struct!.hashKeyValue),
    operation: cdktf.stringToTerraform(struct!.operation),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadToTerraform(struct!.payload),
    payload_field: cdktf.stringToTerraform(struct!.payloadField),
    range_key_field: cdktf.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktf.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktf.stringToTerraform(struct!.rangeKeyValue),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehose {
  /**
  * The name of the Kinesis Data Firehose delivery stream where the data is written.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#delivery_stream_name IoteventsDetectorModel#delivery_stream_name}
  */
  readonly deliveryStreamName: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayload;
  /**
  * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#separator IoteventsDetectorModel#separator}
  */
  readonly separator?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadToTerraform(struct!.payload),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEvents {
  /**
  * The name of the AWS IoT Events input where the data is sent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#input_name IoteventsDetectorModel#input_name}
  */
  readonly inputName: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input_name: cdktf.stringToTerraform(struct!.inputName),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadToTerraform(struct!.payload),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestamp {
  /**
  * The timestamp, in seconds, in the Unix epoch format. The valid range is between `1-31556889864403199`. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#offset_in_nanos IoteventsDetectorModel#offset_in_nanos}
  */
  readonly offsetInNanos?: string;
  /**
  * The nanosecond offset converted from `timeInSeconds`. The valid range is between `0-999999999`. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#time_in_seconds IoteventsDetectorModel#time_in_seconds}
  */
  readonly timeInSeconds: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestamp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    offset_in_nanos: cdktf.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktf.stringToTerraform(struct!.timeInSeconds),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValue {
  /**
  * The asset property value is a Boolean value that must be `TRUE` or `FALSE`. You can also specify an expression. If you use an expression, the evaluated result should be a Boolean value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#boolean_value IoteventsDetectorModel#boolean_value}
  */
  readonly booleanValue?: string;
  /**
  * The asset property value is a double. You can also specify an expression. If you use an expression, the evaluated result should be a double.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#double_value IoteventsDetectorModel#double_value}
  */
  readonly doubleValue?: string;
  /**
  * The asset property value is an integer. You can also specify an expression. If you use an expression, the evaluated result should be an integer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#integer_value IoteventsDetectorModel#integer_value}
  */
  readonly integerValue?: string;
  /**
  * The asset property value is a string. You can also specify an expression. If you use an expression, the evaluated result should be a string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#string_value IoteventsDetectorModel#string_value}
  */
  readonly stringValue?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boolean_value: cdktf.stringToTerraform(struct!.booleanValue),
    double_value: cdktf.stringToTerraform(struct!.doubleValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValue {
  /**
  * The quality of the asset property value. The value must be `GOOD`, `BAD`, or `UNCERTAIN`. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#quality IoteventsDetectorModel#quality}
  */
  readonly quality?: string;
  /**
  * A structure that contains timestamp information. For more information, see [TimeInNanos](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html) in the *AWS IoT SiteWise API Reference*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timestamp IoteventsDetectorModel#timestamp}
  */
  readonly timestamp?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestamp;
  /**
  * A structure that contains an asset property value. For more information, see [Variant](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html) in the *AWS IoT SiteWise API Reference*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#value IoteventsDetectorModel#value}
  */
  readonly value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValue;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    quality: cdktf.stringToTerraform(struct!.quality),
    timestamp: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct!.timestamp),
    value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueToTerraform(struct!.value),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWise {
  /**
  * The ID of the asset that has the specified property. You can specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#asset_id IoteventsDetectorModel#asset_id}
  */
  readonly assetId?: string;
  /**
  * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#entry_id IoteventsDetectorModel#entry_id}
  */
  readonly entryId?: string;
  /**
  * The alias of the asset property. You can also specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#property_alias IoteventsDetectorModel#property_alias}
  */
  readonly propertyAlias?: string;
  /**
  * The ID of the asset property. You can specify an expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#property_id IoteventsDetectorModel#property_id}
  */
  readonly propertyId?: string;
  /**
  * A structure that contains value information. For more information, see [AssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html) in the *AWS IoT SiteWise API Reference*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#property_value IoteventsDetectorModel#property_value}
  */
  readonly propertyValue: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValue;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWise): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asset_id: cdktf.stringToTerraform(struct!.assetId),
    entry_id: cdktf.stringToTerraform(struct!.entryId),
    property_alias: cdktf.stringToTerraform(struct!.propertyAlias),
    property_id: cdktf.stringToTerraform(struct!.propertyId),
    property_value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueToTerraform(struct!.propertyValue),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublish {
  /**
  * The MQTT topic of the message. You can use a string expression that includes variables (`$variable.<variable-name>`) and input values (`$input.<input-name>.<path-to-datum>`) as the topic string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#mqtt_topic IoteventsDetectorModel#mqtt_topic}
  */
  readonly mqttTopic: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublish): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mqtt_topic: cdktf.stringToTerraform(struct!.mqttTopic),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadToTerraform(struct!.payload),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambda {
  /**
  * The ARN of the Lambda function that is executed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#function_arn IoteventsDetectorModel#function_arn}
  */
  readonly functionArn: string;
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadToTerraform(struct!.payload),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer {
  /**
  * The name of the timer to reset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimer {
  /**
  * The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (`$variable.<variable-name>`), and input values (`$input.<input-name>.<path-to-datum>`) as the duration. The range of the duration is `1-31622400` seconds. To ensure accuracy, the minimum duration is `60` seconds. The evaluated result of the duration is rounded down to the nearest whole number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#duration_expression IoteventsDetectorModel#duration_expression}
  */
  readonly durationExpression?: string;
  /**
  * The number of seconds until the timer expires. The minimum value is `60` seconds to ensure accuracy. The maximum value is `31622400` seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#seconds IoteventsDetectorModel#seconds}
  */
  readonly seconds?: number;
  /**
  * The name of the timer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_expression: cdktf.stringToTerraform(struct!.durationExpression),
    seconds: cdktf.numberToTerraform(struct!.seconds),
    timer_name: cdktf.stringToTerraform(struct!.timerName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariable {
  /**
  * The new value of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#value IoteventsDetectorModel#value}
  */
  readonly value: string;
  /**
  * The name of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#variable_name IoteventsDetectorModel#variable_name}
  */
  readonly variableName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSns {
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayload;
  /**
  * The ARN of the Amazon SNS target where the message is sent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#target_arn IoteventsDetectorModel#target_arn}
  */
  readonly targetArn: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadToTerraform(struct!.payload),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression: string;
  /**
  * The value of the payload type can be either `STRING` or `JSON`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#type IoteventsDetectorModel#type}
  */
  readonly type: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_expression: cdktf.stringToTerraform(struct!.contentExpression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqs {
  /**
  * Information needed to configure the payload.

By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayload;
  /**
  * The URL of the SQS queue where the data is written.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#queue_url IoteventsDetectorModel#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Set this to `TRUE` if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to `FALSE`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#use_base_64 IoteventsDetectorModel#use_base_64}
  */
  readonly useBase64?: boolean | cdktf.IResolvable;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadToTerraform(struct!.payload),
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    use_base_64: cdktf.booleanToTerraform(struct!.useBase64),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActions {
  /**
  * Information needed to clear the timer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#clear_timer IoteventsDetectorModel#clear_timer}
  */
  readonly clearTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer;
  /**
  * Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.

You can use expressions for parameters that are strings. For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *AWS IoT Events Developer Guide*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#dynamo_d_bv_2 IoteventsDetectorModel#dynamo_d_bv_2}
  */
  readonly dynamoDBv2?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2;
  /**
  * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *AWS IoT Events Developer Guide*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#dynamo_db IoteventsDetectorModel#dynamo_db}
  */
  readonly dynamoDb?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDb;
  /**
  * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#firehose IoteventsDetectorModel#firehose}
  */
  readonly firehose?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehose;
  /**
  * Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#iot_events IoteventsDetectorModel#iot_events}
  */
  readonly iotEvents?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEvents;
  /**
  * Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#iot_site_wise IoteventsDetectorModel#iot_site_wise}
  */
  readonly iotSiteWise?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWise;
  /**
  * Information required to publish the MQTT message through the AWS IoT message broker.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#iot_topic_publish IoteventsDetectorModel#iot_topic_publish}
  */
  readonly iotTopicPublish?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublish;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#lambda IoteventsDetectorModel#lambda}
  */
  readonly lambda?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambda;
  /**
  * Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#reset_timer IoteventsDetectorModel#reset_timer}
  */
  readonly resetTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer;
  /**
  * Information needed to set the timer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#set_timer IoteventsDetectorModel#set_timer}
  */
  readonly setTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimer;
  /**
  * Information about the variable and its new value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#set_variable IoteventsDetectorModel#set_variable}
  */
  readonly setVariable?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariable;
  /**
  * Information required to publish the Amazon SNS message.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#sns IoteventsDetectorModel#sns}
  */
  readonly sns?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSns;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#sqs IoteventsDetectorModel#sqs}
  */
  readonly sqs?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqs;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    clear_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerToTerraform(struct!.clearTimer),
    dynamo_d_bv_2: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbToTerraform(struct!.dynamoDb),
    firehose: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseToTerraform(struct!.firehose),
    iot_events: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseToTerraform(struct!.iotSiteWise),
    iot_topic_publish: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishToTerraform(struct!.iotTopicPublish),
    lambda: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaToTerraform(struct!.lambda),
    reset_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerToTerraform(struct!.resetTimer),
    set_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerToTerraform(struct!.setTimer),
    set_variable: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableToTerraform(struct!.setVariable),
    sns: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsToTerraform(struct!.sns),
    sqs: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsToTerraform(struct!.sqs),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEvents {
  /**
  * The actions to be performed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#actions IoteventsDetectorModel#actions}
  */
  readonly actions?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActions[];
  /**
  * A Boolean expression that when `TRUE` causes the `actions` to be performed and the `nextState` to be entered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#condition IoteventsDetectorModel#condition}
  */
  readonly condition: string;
  /**
  * The name of the event.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#event_name IoteventsDetectorModel#event_name}
  */
  readonly eventName: string;
  /**
  * The next state to enter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#next_state IoteventsDetectorModel#next_state}
  */
  readonly nextState: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsToTerraform)(struct!.actions),
    condition: cdktf.stringToTerraform(struct!.condition),
    event_name: cdktf.stringToTerraform(struct!.eventName),
    next_state: cdktf.stringToTerraform(struct!.nextState),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInput {
  /**
  * Specifies the `actions` performed when the `condition` evaluates to `TRUE`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#events IoteventsDetectorModel#events}
  */
  readonly events?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEvents[];
  /**
  * Specifies the `actions` performed, and the next `state` entered, when a `condition` evaluates to `TRUE`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#transition_events IoteventsDetectorModel#transition_events}
  */
  readonly transitionEvents?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEvents[];
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    events: cdktf.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsToTerraform)(struct!.events),
    transition_events: cdktf.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsToTerraform)(struct!.transitionEvents),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinitionStates {
  /**
  * When entering this state, perform these `actions` if the `condition` is `TRUE`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#on_enter IoteventsDetectorModel#on_enter}
  */
  readonly onEnter?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnter;
  /**
  * When exiting this state, perform these `actions` if the specified `condition` is `TRUE`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#on_exit IoteventsDetectorModel#on_exit}
  */
  readonly onExit?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExit;
  /**
  * When an input is received and the `condition` is `TRUE`, perform the specified `actions`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#on_input IoteventsDetectorModel#on_input}
  */
  readonly onInput?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInput;
  /**
  * The name of the state.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#state_name IoteventsDetectorModel#state_name}
  */
  readonly stateName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStates): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    on_enter: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterToTerraform(struct!.onEnter),
    on_exit: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitToTerraform(struct!.onExit),
    on_input: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputToTerraform(struct!.onInput),
    state_name: cdktf.stringToTerraform(struct!.stateName),
  }
}

export interface IoteventsDetectorModelDetectorModelDefinition {
  /**
  * The state that is entered at the creation of each detector (instance).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#initial_state_name IoteventsDetectorModel#initial_state_name}
  */
  readonly initialStateName: string;
  /**
  * Information about the states of the detector.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#states IoteventsDetectorModel#states}
  */
  readonly states: IoteventsDetectorModelDetectorModelDefinitionStates[];
}

export function ioteventsDetectorModelDetectorModelDefinitionToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    initial_state_name: cdktf.stringToTerraform(struct!.initialStateName),
    states: cdktf.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesToTerraform)(struct!.states),
  }
}

export interface IoteventsDetectorModelTags {
  /**
  * Key of the Tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#key IoteventsDetectorModel#key}
  */
  readonly key: string;
  /**
  * Value of the Tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#value IoteventsDetectorModel#value}
  */
  readonly value: string;
}

export function ioteventsDetectorModelTagsToTerraform(struct?: IoteventsDetectorModelTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html awscc_iotevents_detector_model}
*/
export class IoteventsDetectorModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotevents_detector_model";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html awscc_iotevents_detector_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IoteventsDetectorModelConfig
  */
  public constructor(scope: Construct, id: string, config: IoteventsDetectorModelConfig) {
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
    this._detectorModelDefinition = config.detectorModelDefinition;
    this._detectorModelDescription = config.detectorModelDescription;
    this._detectorModelName = config.detectorModelName;
    this._evaluationMethod = config.evaluationMethod;
    this._key = config.key;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // detector_model_definition - computed: false, optional: false, required: true
  private _detectorModelDefinition: IoteventsDetectorModelDetectorModelDefinition;
  public get detectorModelDefinition() {
    return this.interpolationForAttribute('detector_model_definition') as any;
  }
  public set detectorModelDefinition(value: IoteventsDetectorModelDetectorModelDefinition) {
    this._detectorModelDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorModelDefinitionInput() {
    return this._detectorModelDefinition
  }

  // detector_model_description - computed: false, optional: true, required: false
  private _detectorModelDescription?: string;
  public get detectorModelDescription() {
    return this.getStringAttribute('detector_model_description');
  }
  public set detectorModelDescription(value: string ) {
    this._detectorModelDescription = value;
  }
  public resetDetectorModelDescription() {
    this._detectorModelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorModelDescriptionInput() {
    return this._detectorModelDescription
  }

  // detector_model_name - computed: true, optional: true, required: false
  private _detectorModelName?: string;
  public get detectorModelName() {
    return this.getStringAttribute('detector_model_name');
  }
  public set detectorModelName(value: string) {
    this._detectorModelName = value;
  }
  public resetDetectorModelName() {
    this._detectorModelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorModelNameInput() {
    return this._detectorModelName
  }

  // evaluation_method - computed: false, optional: true, required: false
  private _evaluationMethod?: string;
  public get evaluationMethod() {
    return this.getStringAttribute('evaluation_method');
  }
  public set evaluationMethod(value: string ) {
    this._evaluationMethod = value;
  }
  public resetEvaluationMethod() {
    this._evaluationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationMethodInput() {
    return this._evaluationMethod
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: true, required: false
  private _key?: string;
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IoteventsDetectorModelTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IoteventsDetectorModelTags[] ) {
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
      detector_model_definition: ioteventsDetectorModelDetectorModelDefinitionToTerraform(this._detectorModelDefinition),
      detector_model_description: cdktf.stringToTerraform(this._detectorModelDescription),
      detector_model_name: cdktf.stringToTerraform(this._detectorModelName),
      evaluation_method: cdktf.stringToTerraform(this._evaluationMethod),
      key: cdktf.stringToTerraform(this._key),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.listMapper(ioteventsDetectorModelTagsToTerraform)(this._tags),
    };
  }
}
