import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimer): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2PayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2Payload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2ToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDb): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehoseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehose): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEvents): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestamp): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValue): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValue): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWiseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWise): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublish): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambda): any;
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer {
    /**
    * The name of the timer to reset.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
    */
    readonly timerName: string;
}
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimer): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariableToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariable): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSns): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqs): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActions): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents): any;
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnter {
    /**
    * Specifies the `actions` that are performed when the state is entered and the `condition` is `TRUE`.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#events IoteventsDetectorModel#events}
    */
    readonly events?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents[];
}
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnter): any;
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
    */
    readonly timerName: string;
}
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Payload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2ToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDb): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehoseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehose): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEvents): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestamp): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValue): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValue): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWise): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublish): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambda): any;
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer {
    /**
    * The name of the timer to reset.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
    */
    readonly timerName: string;
}
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimer): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariableToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariable): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSns): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqs): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActions): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents): any;
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExit {
    /**
    * Specifies the `actions` that are performed when the state is exited and the `condition` is `TRUE`.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#events IoteventsDetectorModel#events}
    */
    readonly events?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents[];
}
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExit): any;
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
    */
    readonly timerName: string;
}
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Payload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2ToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDb): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehoseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehose): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEvents): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestamp): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValue): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValue): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWise): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublish): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambda): any;
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer {
    /**
    * The name of the timer to reset.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
    */
    readonly timerName: string;
}
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimer): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariableToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariable): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSns): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqs): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActions): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEvents): any;
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
    */
    readonly timerName: string;
}
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Payload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2ToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDb): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehose): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEvents): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestamp): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValue): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValue): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWise): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublish): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambda): any;
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer {
    /**
    * The name of the timer to reset.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html#timer_name IoteventsDetectorModel#timer_name}
    */
    readonly timerName: string;
}
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimer): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariable): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSns): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayload): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqs): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActions): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEvents): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInput): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionStatesToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStates): any;
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
export declare function ioteventsDetectorModelDetectorModelDefinitionToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinition): any;
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
export declare function ioteventsDetectorModelTagsToTerraform(struct?: IoteventsDetectorModelTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html awscc_iotevents_detector_model}
*/
export declare class IoteventsDetectorModel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotevents_detector_model.html awscc_iotevents_detector_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IoteventsDetectorModelConfig
    */
    constructor(scope: Construct, id: string, config: IoteventsDetectorModelConfig);
    private _detectorModelDefinition;
    get detectorModelDefinition(): IoteventsDetectorModelDetectorModelDefinition;
    set detectorModelDefinition(value: IoteventsDetectorModelDetectorModelDefinition);
    get detectorModelDefinitionInput(): IoteventsDetectorModelDetectorModelDefinition;
    private _detectorModelDescription?;
    get detectorModelDescription(): string;
    set detectorModelDescription(value: string);
    resetDetectorModelDescription(): void;
    get detectorModelDescriptionInput(): string | undefined;
    private _detectorModelName?;
    get detectorModelName(): string;
    set detectorModelName(value: string);
    resetDetectorModelName(): void;
    get detectorModelNameInput(): string | undefined;
    private _evaluationMethod?;
    get evaluationMethod(): string;
    set evaluationMethod(value: string);
    resetEvaluationMethod(): void;
    get evaluationMethodInput(): string | undefined;
    get id(): string;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _tags?;
    get tags(): IoteventsDetectorModelTags[];
    set tags(value: IoteventsDetectorModelTags[]);
    resetTags(): void;
    get tagsInput(): IoteventsDetectorModelTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
