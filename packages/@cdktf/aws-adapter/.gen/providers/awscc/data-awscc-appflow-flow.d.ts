import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAppflowFlowConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/appflow_flow.html#id DataAwsccAppflowFlow#id}
    */
    readonly id: string;
}
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig extends cdktf.ComplexComputedList {
    get bucketName(): string;
    get bucketPrefix(): string;
    get failOnFirstError(): any;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge extends cdktf.ComplexComputedList {
    get errorHandlingConfig(): any;
    get object(): string;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics extends cdktf.ComplexComputedList {
    get object(): string;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetricsToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig extends cdktf.ComplexComputedList {
    get bucketName(): string;
    get bucketPrefix(): string;
    get failOnFirstError(): any;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift extends cdktf.ComplexComputedList {
    get bucketPrefix(): string;
    get errorHandlingConfig(): any;
    get intermediateBucketName(): string;
    get object(): string;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig extends cdktf.ComplexComputedList {
    get aggregationType(): string;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig extends cdktf.ComplexComputedList {
    get prefixFormat(): string;
    get prefixType(): string;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig extends cdktf.ComplexComputedList {
    get aggregationConfig(): any;
    get fileType(): string;
    get prefixConfig(): any;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3 extends cdktf.ComplexComputedList {
    get bucketName(): string;
    get bucketPrefix(): string;
    get s3OutputFormatConfig(): any;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3ToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig extends cdktf.ComplexComputedList {
    get bucketName(): string;
    get bucketPrefix(): string;
    get failOnFirstError(): any;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce extends cdktf.ComplexComputedList {
    get errorHandlingConfig(): any;
    get idFieldNames(): string[];
    get object(): string;
    get writeOperationType(): string;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig extends cdktf.ComplexComputedList {
    get bucketName(): string;
    get bucketPrefix(): string;
    get failOnFirstError(): any;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake extends cdktf.ComplexComputedList {
    get bucketPrefix(): string;
    get errorHandlingConfig(): any;
    get intermediateBucketName(): string;
    get object(): string;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig extends cdktf.ComplexComputedList {
    get aggregationType(): string;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig extends cdktf.ComplexComputedList {
    get prefixFormat(): string;
    get prefixType(): string;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig extends cdktf.ComplexComputedList {
    get aggregationConfig(): any;
    get fileType(): string;
    get prefixConfig(): any;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver extends cdktf.ComplexComputedList {
    get bucketName(): string;
    get bucketPrefix(): string;
    get s3OutputFormatConfig(): any;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig extends cdktf.ComplexComputedList {
    get bucketName(): string;
    get bucketPrefix(): string;
    get failOnFirstError(): any;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk extends cdktf.ComplexComputedList {
    get errorHandlingConfig(): any;
    get idFieldNames(): string[];
    get object(): string;
    get writeOperationType(): string;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorProperties extends cdktf.ComplexComputedList {
    get eventBridge(): any;
    get lookoutMetrics(): any;
    get redshift(): any;
    get s3(): any;
    get salesforce(): any;
    get snowflake(): any;
    get upsolver(): any;
    get zendesk(): any;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorProperties): any;
export declare class DataAwsccAppflowFlowDestinationFlowConfigList extends cdktf.ComplexComputedList {
    get connectorProfileName(): string;
    get connectorType(): string;
    get destinationConnectorProperties(): any;
}
export declare function dataAwsccAppflowFlowDestinationFlowConfigListToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigList): any;
export declare class DataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfig extends cdktf.ComplexComputedList {
    get datetimeTypeFieldName(): string;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfigToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfig): any;
export declare class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude extends cdktf.ComplexComputedList {
    get object(): string;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude): any;
export declare class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog extends cdktf.ComplexComputedList {
    get object(): string;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog): any;
export declare class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace extends cdktf.ComplexComputedList {
    get object(): string;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace): any;
export declare class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics extends cdktf.ComplexComputedList {
    get object(): string;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics): any;
export declare class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus extends cdktf.ComplexComputedList {
    get object(): string;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus): any;
export declare class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo extends cdktf.ComplexComputedList {
    get object(): string;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo): any;
export declare class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 extends cdktf.ComplexComputedList {
    get bucketName(): string;
    get bucketPrefix(): string;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3): any;
export declare class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce extends cdktf.ComplexComputedList {
    get enableDynamicFieldUpdate(): any;
    get includeDeletedRecords(): any;
    get object(): string;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce): any;
export declare class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow extends cdktf.ComplexComputedList {
    get object(): string;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow): any;
export declare class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular extends cdktf.ComplexComputedList {
    get object(): string;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular): any;
export declare class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack extends cdktf.ComplexComputedList {
    get object(): string;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack): any;
export declare class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro extends cdktf.ComplexComputedList {
    get object(): string;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro): any;
export declare class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva extends cdktf.ComplexComputedList {
    get object(): string;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva): any;
export declare class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk extends cdktf.ComplexComputedList {
    get object(): string;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk): any;
export declare class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorProperties extends cdktf.ComplexComputedList {
    get amplitude(): any;
    get datadog(): any;
    get dynatrace(): any;
    get googleAnalytics(): any;
    get inforNexus(): any;
    get marketo(): any;
    get s3(): any;
    get salesforce(): any;
    get serviceNow(): any;
    get singular(): any;
    get slack(): any;
    get trendmicro(): any;
    get veeva(): any;
    get zendesk(): any;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorProperties): any;
export declare class DataAwsccAppflowFlowSourceFlowConfig extends cdktf.ComplexComputedList {
    get connectorProfileName(): string;
    get connectorType(): string;
    get incrementalPullConfig(): any;
    get sourceConnectorProperties(): any;
}
export declare function dataAwsccAppflowFlowSourceFlowConfigToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfig): any;
export declare class DataAwsccAppflowFlowTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccAppflowFlowTagsToTerraform(struct?: DataAwsccAppflowFlowTags): any;
export declare class DataAwsccAppflowFlowTasksConnectorOperator extends cdktf.ComplexComputedList {
    get amplitude(): string;
    get datadog(): string;
    get dynatrace(): string;
    get googleAnalytics(): string;
    get inforNexus(): string;
    get marketo(): string;
    get s3(): string;
    get salesforce(): string;
    get serviceNow(): string;
    get singular(): string;
    get slack(): string;
    get trendmicro(): string;
    get veeva(): string;
    get zendesk(): string;
}
export declare function dataAwsccAppflowFlowTasksConnectorOperatorToTerraform(struct?: DataAwsccAppflowFlowTasksConnectorOperator): any;
export declare class DataAwsccAppflowFlowTasksTaskProperties extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccAppflowFlowTasksTaskPropertiesToTerraform(struct?: DataAwsccAppflowFlowTasksTaskProperties): any;
export declare class DataAwsccAppflowFlowTasks extends cdktf.ComplexComputedList {
    get connectorOperator(): any;
    get destinationField(): string;
    get sourceFields(): string[];
    get taskProperties(): any;
    get taskType(): string;
}
export declare function dataAwsccAppflowFlowTasksToTerraform(struct?: DataAwsccAppflowFlowTasks): any;
export declare class DataAwsccAppflowFlowTriggerConfigTriggerProperties extends cdktf.ComplexComputedList {
    get dataPullMode(): string;
    get scheduleEndTime(): number;
    get scheduleExpression(): string;
    get scheduleStartTime(): number;
    get timeZone(): string;
}
export declare function dataAwsccAppflowFlowTriggerConfigTriggerPropertiesToTerraform(struct?: DataAwsccAppflowFlowTriggerConfigTriggerProperties): any;
export declare class DataAwsccAppflowFlowTriggerConfig extends cdktf.ComplexComputedList {
    get triggerProperties(): any;
    get triggerType(): string;
}
export declare function dataAwsccAppflowFlowTriggerConfigToTerraform(struct?: DataAwsccAppflowFlowTriggerConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/appflow_flow.html awscc_appflow_flow}
*/
export declare class DataAwsccAppflowFlow extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/appflow_flow.html awscc_appflow_flow} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAppflowFlowConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAppflowFlowConfig);
    get description(): string;
    get destinationFlowConfigList(): any;
    get flowArn(): string;
    get flowName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get kmsArn(): string;
    get sourceFlowConfig(): any;
    get tags(): any;
    get tasks(): any;
    get triggerConfig(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
