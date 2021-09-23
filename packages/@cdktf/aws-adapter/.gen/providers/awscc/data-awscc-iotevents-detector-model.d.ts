import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIoteventsDetectorModelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotevents_detector_model.html#id DataAwsccIoteventsDetectorModel#id}
    */
    readonly id: string;
}
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimer extends cdktf.ComplexComputedList {
    get timerName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimer): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2Payload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2PayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2Payload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2 extends cdktf.ComplexComputedList {
    get payload(): any;
    get tableName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2ToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDb extends cdktf.ComplexComputedList {
    get hashKeyField(): string;
    get hashKeyType(): string;
    get hashKeyValue(): string;
    get operation(): string;
    get payload(): any;
    get payloadField(): string;
    get rangeKeyField(): string;
    get rangeKeyType(): string;
    get rangeKeyValue(): string;
    get tableName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDb): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehose extends cdktf.ComplexComputedList {
    get deliveryStreamName(): string;
    get payload(): any;
    get separator(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehoseToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehose): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEvents extends cdktf.ComplexComputedList {
    get inputName(): string;
    get payload(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEvents): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestamp extends cdktf.ComplexComputedList {
    get offsetInNanos(): string;
    get timeInSeconds(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestamp): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValue extends cdktf.ComplexComputedList {
    get booleanValue(): string;
    get doubleValue(): string;
    get integerValue(): string;
    get stringValue(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValue): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValue extends cdktf.ComplexComputedList {
    get quality(): string;
    get timestamp(): any;
    get value(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValue): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWise extends cdktf.ComplexComputedList {
    get assetId(): string;
    get entryId(): string;
    get propertyAlias(): string;
    get propertyId(): string;
    get propertyValue(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWiseToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWise): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublish extends cdktf.ComplexComputedList {
    get mqttTopic(): string;
    get payload(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublish): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambda extends cdktf.ComplexComputedList {
    get functionArn(): string;
    get payload(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambda): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer extends cdktf.ComplexComputedList {
    get timerName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimer extends cdktf.ComplexComputedList {
    get durationExpression(): string;
    get seconds(): number;
    get timerName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimer): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariable extends cdktf.ComplexComputedList {
    get value(): string;
    get variableName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariableToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariable): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSns extends cdktf.ComplexComputedList {
    get payload(): any;
    get targetArn(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSns): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqs extends cdktf.ComplexComputedList {
    get payload(): any;
    get queueUrl(): string;
    get useBase64(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqs): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActions extends cdktf.ComplexComputedList {
    get clearTimer(): any;
    get dynamoDBv2(): any;
    get dynamoDb(): any;
    get firehose(): any;
    get iotEvents(): any;
    get iotSiteWise(): any;
    get iotTopicPublish(): any;
    get lambda(): any;
    get resetTimer(): any;
    get setTimer(): any;
    get setVariable(): any;
    get sns(): any;
    get sqs(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActions): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents extends cdktf.ComplexComputedList {
    get actions(): any;
    get condition(): string;
    get eventName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnter extends cdktf.ComplexComputedList {
    get events(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnterToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnEnter): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer extends cdktf.ComplexComputedList {
    get timerName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Payload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Payload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2 extends cdktf.ComplexComputedList {
    get payload(): any;
    get tableName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2ToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDb extends cdktf.ComplexComputedList {
    get hashKeyField(): string;
    get hashKeyType(): string;
    get hashKeyValue(): string;
    get operation(): string;
    get payload(): any;
    get payloadField(): string;
    get rangeKeyField(): string;
    get rangeKeyType(): string;
    get rangeKeyValue(): string;
    get tableName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDb): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehose extends cdktf.ComplexComputedList {
    get deliveryStreamName(): string;
    get payload(): any;
    get separator(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehoseToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehose): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEvents extends cdktf.ComplexComputedList {
    get inputName(): string;
    get payload(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEvents): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestamp extends cdktf.ComplexComputedList {
    get offsetInNanos(): string;
    get timeInSeconds(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestamp): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValue extends cdktf.ComplexComputedList {
    get booleanValue(): string;
    get doubleValue(): string;
    get integerValue(): string;
    get stringValue(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValue): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValue extends cdktf.ComplexComputedList {
    get quality(): string;
    get timestamp(): any;
    get value(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValue): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWise extends cdktf.ComplexComputedList {
    get assetId(): string;
    get entryId(): string;
    get propertyAlias(): string;
    get propertyId(): string;
    get propertyValue(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWise): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublish extends cdktf.ComplexComputedList {
    get mqttTopic(): string;
    get payload(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublish): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambda extends cdktf.ComplexComputedList {
    get functionArn(): string;
    get payload(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambda): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer extends cdktf.ComplexComputedList {
    get timerName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimer extends cdktf.ComplexComputedList {
    get durationExpression(): string;
    get seconds(): number;
    get timerName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimer): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariable extends cdktf.ComplexComputedList {
    get value(): string;
    get variableName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariableToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariable): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSns extends cdktf.ComplexComputedList {
    get payload(): any;
    get targetArn(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSns): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqs extends cdktf.ComplexComputedList {
    get payload(): any;
    get queueUrl(): string;
    get useBase64(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqs): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActions extends cdktf.ComplexComputedList {
    get clearTimer(): any;
    get dynamoDBv2(): any;
    get dynamoDb(): any;
    get firehose(): any;
    get iotEvents(): any;
    get iotSiteWise(): any;
    get iotTopicPublish(): any;
    get lambda(): any;
    get resetTimer(): any;
    get setTimer(): any;
    get setVariable(): any;
    get sns(): any;
    get sqs(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActions): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents extends cdktf.ComplexComputedList {
    get actions(): any;
    get condition(): string;
    get eventName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExit extends cdktf.ComplexComputedList {
    get events(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExitToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnExit): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer extends cdktf.ComplexComputedList {
    get timerName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Payload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Payload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2 extends cdktf.ComplexComputedList {
    get payload(): any;
    get tableName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2ToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDb extends cdktf.ComplexComputedList {
    get hashKeyField(): string;
    get hashKeyType(): string;
    get hashKeyValue(): string;
    get operation(): string;
    get payload(): any;
    get payloadField(): string;
    get rangeKeyField(): string;
    get rangeKeyType(): string;
    get rangeKeyValue(): string;
    get tableName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDb): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehose extends cdktf.ComplexComputedList {
    get deliveryStreamName(): string;
    get payload(): any;
    get separator(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehoseToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehose): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEvents extends cdktf.ComplexComputedList {
    get inputName(): string;
    get payload(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEvents): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestamp extends cdktf.ComplexComputedList {
    get offsetInNanos(): string;
    get timeInSeconds(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestamp): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValue extends cdktf.ComplexComputedList {
    get booleanValue(): string;
    get doubleValue(): string;
    get integerValue(): string;
    get stringValue(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValue): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValue extends cdktf.ComplexComputedList {
    get quality(): string;
    get timestamp(): any;
    get value(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValue): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWise extends cdktf.ComplexComputedList {
    get assetId(): string;
    get entryId(): string;
    get propertyAlias(): string;
    get propertyId(): string;
    get propertyValue(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWise): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublish extends cdktf.ComplexComputedList {
    get mqttTopic(): string;
    get payload(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublish): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambda extends cdktf.ComplexComputedList {
    get functionArn(): string;
    get payload(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambda): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer extends cdktf.ComplexComputedList {
    get timerName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimer extends cdktf.ComplexComputedList {
    get durationExpression(): string;
    get seconds(): number;
    get timerName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimer): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariable extends cdktf.ComplexComputedList {
    get value(): string;
    get variableName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariableToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariable): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSns extends cdktf.ComplexComputedList {
    get payload(): any;
    get targetArn(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSns): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqs extends cdktf.ComplexComputedList {
    get payload(): any;
    get queueUrl(): string;
    get useBase64(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqs): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActions extends cdktf.ComplexComputedList {
    get clearTimer(): any;
    get dynamoDBv2(): any;
    get dynamoDb(): any;
    get firehose(): any;
    get iotEvents(): any;
    get iotSiteWise(): any;
    get iotTopicPublish(): any;
    get lambda(): any;
    get resetTimer(): any;
    get setTimer(): any;
    get setVariable(): any;
    get sns(): any;
    get sqs(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActions): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEvents extends cdktf.ComplexComputedList {
    get actions(): any;
    get condition(): string;
    get eventName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputEvents): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer extends cdktf.ComplexComputedList {
    get timerName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Payload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Payload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2 extends cdktf.ComplexComputedList {
    get payload(): any;
    get tableName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2ToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDb extends cdktf.ComplexComputedList {
    get hashKeyField(): string;
    get hashKeyType(): string;
    get hashKeyValue(): string;
    get operation(): string;
    get payload(): any;
    get payloadField(): string;
    get rangeKeyField(): string;
    get rangeKeyType(): string;
    get rangeKeyValue(): string;
    get tableName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDb): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehose extends cdktf.ComplexComputedList {
    get deliveryStreamName(): string;
    get payload(): any;
    get separator(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehose): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEvents extends cdktf.ComplexComputedList {
    get inputName(): string;
    get payload(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEvents): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestamp extends cdktf.ComplexComputedList {
    get offsetInNanos(): string;
    get timeInSeconds(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestamp): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValue extends cdktf.ComplexComputedList {
    get booleanValue(): string;
    get doubleValue(): string;
    get integerValue(): string;
    get stringValue(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValue): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValue extends cdktf.ComplexComputedList {
    get quality(): string;
    get timestamp(): any;
    get value(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValue): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWise extends cdktf.ComplexComputedList {
    get assetId(): string;
    get entryId(): string;
    get propertyAlias(): string;
    get propertyId(): string;
    get propertyValue(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWise): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublish extends cdktf.ComplexComputedList {
    get mqttTopic(): string;
    get payload(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublish): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambda extends cdktf.ComplexComputedList {
    get functionArn(): string;
    get payload(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambda): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer extends cdktf.ComplexComputedList {
    get timerName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimer extends cdktf.ComplexComputedList {
    get durationExpression(): string;
    get seconds(): number;
    get timerName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimer): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariable extends cdktf.ComplexComputedList {
    get value(): string;
    get variableName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariable): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSns extends cdktf.ComplexComputedList {
    get payload(): any;
    get targetArn(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSns): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayload extends cdktf.ComplexComputedList {
    get contentExpression(): string;
    get type(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayload): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqs extends cdktf.ComplexComputedList {
    get payload(): any;
    get queueUrl(): string;
    get useBase64(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqs): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActions extends cdktf.ComplexComputedList {
    get clearTimer(): any;
    get dynamoDBv2(): any;
    get dynamoDb(): any;
    get firehose(): any;
    get iotEvents(): any;
    get iotSiteWise(): any;
    get iotTopicPublish(): any;
    get lambda(): any;
    get resetTimer(): any;
    get setTimer(): any;
    get setVariable(): any;
    get sns(): any;
    get sqs(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActions): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEvents extends cdktf.ComplexComputedList {
    get actions(): any;
    get condition(): string;
    get eventName(): string;
    get nextState(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEvents): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInput extends cdktf.ComplexComputedList {
    get events(): any;
    get transitionEvents(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInputToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesOnInput): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinitionStates extends cdktf.ComplexComputedList {
    get onEnter(): any;
    get onExit(): any;
    get onInput(): any;
    get stateName(): string;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionStatesToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinitionStates): any;
export declare class DataAwsccIoteventsDetectorModelDetectorModelDefinition extends cdktf.ComplexComputedList {
    get initialStateName(): string;
    get states(): any;
}
export declare function dataAwsccIoteventsDetectorModelDetectorModelDefinitionToTerraform(struct?: DataAwsccIoteventsDetectorModelDetectorModelDefinition): any;
export declare class DataAwsccIoteventsDetectorModelTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIoteventsDetectorModelTagsToTerraform(struct?: DataAwsccIoteventsDetectorModelTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotevents_detector_model.html awscc_iotevents_detector_model}
*/
export declare class DataAwsccIoteventsDetectorModel extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotevents_detector_model.html awscc_iotevents_detector_model} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIoteventsDetectorModelConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIoteventsDetectorModelConfig);
    get detectorModelDefinition(): any;
    get detectorModelDescription(): string;
    get detectorModelName(): string;
    get evaluationMethod(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get key(): string;
    get roleArn(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
