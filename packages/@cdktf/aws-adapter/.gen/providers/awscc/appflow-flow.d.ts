import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppflowFlowConfig extends cdktf.TerraformMetaArguments {
    /**
    * Description of the flow.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#description AppflowFlow#description}
    */
    readonly description?: string;
    /**
    * List of Destination connectors of the flow.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#destination_flow_config_list AppflowFlow#destination_flow_config_list}
    */
    readonly destinationFlowConfigList: AppflowFlowDestinationFlowConfigList[];
    /**
    * Name of the flow.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#flow_name AppflowFlow#flow_name}
    */
    readonly flowName: string;
    /**
    * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#kms_arn AppflowFlow#kms_arn}
    */
    readonly kmsArn?: string;
    /**
    * Configurations of Source connector of the flow.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#source_flow_config AppflowFlow#source_flow_config}
    */
    readonly sourceFlowConfig: AppflowFlowSourceFlowConfig;
    /**
    * List of Tags.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#tags AppflowFlow#tags}
    */
    readonly tags?: AppflowFlowTags[];
    /**
    * List of tasks for the flow.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#tasks AppflowFlow#tasks}
    */
    readonly tasks: AppflowFlowTasks[];
    /**
    * Trigger settings of the flow.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#trigger_config AppflowFlow#trigger_config}
    */
    readonly triggerConfig: AppflowFlowTriggerConfig;
}
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#fail_on_first_error AppflowFlow#fail_on_first_error}
    */
    readonly failOnFirstError?: boolean | cdktf.IResolvable;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#error_handling_config AppflowFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object?: string;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetricsToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#fail_on_first_error AppflowFlow#fail_on_first_error}
    */
    readonly failOnFirstError?: boolean | cdktf.IResolvable;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#error_handling_config AppflowFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#intermediate_bucket_name AppflowFlow#intermediate_bucket_name}
    */
    readonly intermediateBucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#aggregation_type AppflowFlow#aggregation_type}
    */
    readonly aggregationType?: string;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#prefix_format AppflowFlow#prefix_format}
    */
    readonly prefixFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#prefix_type AppflowFlow#prefix_type}
    */
    readonly prefixType?: string;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#aggregation_config AppflowFlow#aggregation_config}
    */
    readonly aggregationConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#file_type AppflowFlow#file_type}
    */
    readonly fileType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#prefix_config AppflowFlow#prefix_config}
    */
    readonly prefixConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#s3_output_format_config AppflowFlow#s3_output_format_config}
    */
    readonly s3OutputFormatConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3ToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#fail_on_first_error AppflowFlow#fail_on_first_error}
    */
    readonly failOnFirstError?: boolean | cdktf.IResolvable;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#error_handling_config AppflowFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig;
    /**
    * List of fields used as ID when performing a write operation.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#id_field_names AppflowFlow#id_field_names}
    */
    readonly idFieldNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#write_operation_type AppflowFlow#write_operation_type}
    */
    readonly writeOperationType?: string;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#fail_on_first_error AppflowFlow#fail_on_first_error}
    */
    readonly failOnFirstError?: boolean | cdktf.IResolvable;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#error_handling_config AppflowFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#intermediate_bucket_name AppflowFlow#intermediate_bucket_name}
    */
    readonly intermediateBucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#aggregation_type AppflowFlow#aggregation_type}
    */
    readonly aggregationType?: string;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#prefix_format AppflowFlow#prefix_format}
    */
    readonly prefixFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#prefix_type AppflowFlow#prefix_type}
    */
    readonly prefixType?: string;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#aggregation_config AppflowFlow#aggregation_config}
    */
    readonly aggregationConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#file_type AppflowFlow#file_type}
    */
    readonly fileType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#prefix_config AppflowFlow#prefix_config}
    */
    readonly prefixConfig: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#s3_output_format_config AppflowFlow#s3_output_format_config}
    */
    readonly s3OutputFormatConfig: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#fail_on_first_error AppflowFlow#fail_on_first_error}
    */
    readonly failOnFirstError?: boolean | cdktf.IResolvable;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#error_handling_config AppflowFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig;
    /**
    * List of fields used as ID when performing a write operation.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#id_field_names AppflowFlow#id_field_names}
    */
    readonly idFieldNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#write_operation_type AppflowFlow#write_operation_type}
    */
    readonly writeOperationType?: string;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk): any;
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#event_bridge AppflowFlow#event_bridge}
    */
    readonly eventBridge?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#lookout_metrics AppflowFlow#lookout_metrics}
    */
    readonly lookoutMetrics?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#redshift AppflowFlow#redshift}
    */
    readonly redshift?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#s3 AppflowFlow#s3}
    */
    readonly s3?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#salesforce AppflowFlow#salesforce}
    */
    readonly salesforce?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#snowflake AppflowFlow#snowflake}
    */
    readonly snowflake?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#upsolver AppflowFlow#upsolver}
    */
    readonly upsolver?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#zendesk AppflowFlow#zendesk}
    */
    readonly zendesk?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk;
}
export declare function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorProperties): any;
export interface AppflowFlowDestinationFlowConfigList {
    /**
    * Name of connector profile
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#connector_profile_name AppflowFlow#connector_profile_name}
    */
    readonly connectorProfileName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#connector_type AppflowFlow#connector_type}
    */
    readonly connectorType: string;
    /**
    * Destination connector details
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#destination_connector_properties AppflowFlow#destination_connector_properties}
    */
    readonly destinationConnectorProperties: AppflowFlowDestinationFlowConfigListDestinationConnectorProperties;
}
export declare function appflowFlowDestinationFlowConfigListToTerraform(struct?: AppflowFlowDestinationFlowConfigList): any;
export interface AppflowFlowSourceFlowConfigIncrementalPullConfig {
    /**
    * Name of the datetime/timestamp data type field to be used for importing incremental records from the source
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#datetime_type_field_name AppflowFlow#datetime_type_field_name}
    */
    readonly datetimeTypeFieldName?: string;
}
export declare function appflowFlowSourceFlowConfigIncrementalPullConfigToTerraform(struct?: AppflowFlowSourceFlowConfigIncrementalPullConfig): any;
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude): any;
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog): any;
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace): any;
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics): any;
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus): any;
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo): any;
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_name AppflowFlow#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
    */
    readonly bucketPrefix: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3): any;
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#enable_dynamic_field_update AppflowFlow#enable_dynamic_field_update}
    */
    readonly enableDynamicFieldUpdate?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#include_deleted_records AppflowFlow#include_deleted_records}
    */
    readonly includeDeletedRecords?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce): any;
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow): any;
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular): any;
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack): any;
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro): any;
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva): any;
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
    */
    readonly object: string;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk): any;
export interface AppflowFlowSourceFlowConfigSourceConnectorProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#amplitude AppflowFlow#amplitude}
    */
    readonly amplitude?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#datadog AppflowFlow#datadog}
    */
    readonly datadog?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#dynatrace AppflowFlow#dynatrace}
    */
    readonly dynatrace?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#google_analytics AppflowFlow#google_analytics}
    */
    readonly googleAnalytics?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#infor_nexus AppflowFlow#infor_nexus}
    */
    readonly inforNexus?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#marketo AppflowFlow#marketo}
    */
    readonly marketo?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#s3 AppflowFlow#s3}
    */
    readonly s3?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#salesforce AppflowFlow#salesforce}
    */
    readonly salesforce?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#service_now AppflowFlow#service_now}
    */
    readonly serviceNow?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#singular AppflowFlow#singular}
    */
    readonly singular?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#slack AppflowFlow#slack}
    */
    readonly slack?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#trendmicro AppflowFlow#trendmicro}
    */
    readonly trendmicro?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#veeva AppflowFlow#veeva}
    */
    readonly veeva?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#zendesk AppflowFlow#zendesk}
    */
    readonly zendesk?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk;
}
export declare function appflowFlowSourceFlowConfigSourceConnectorPropertiesToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorProperties): any;
export interface AppflowFlowSourceFlowConfig {
    /**
    * Name of connector profile
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#connector_profile_name AppflowFlow#connector_profile_name}
    */
    readonly connectorProfileName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#connector_type AppflowFlow#connector_type}
    */
    readonly connectorType: string;
    /**
    * Configuration for scheduled incremental data pull
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#incremental_pull_config AppflowFlow#incremental_pull_config}
    */
    readonly incrementalPullConfig?: AppflowFlowSourceFlowConfigIncrementalPullConfig;
    /**
    * Source connector details required to query a connector
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#source_connector_properties AppflowFlow#source_connector_properties}
    */
    readonly sourceConnectorProperties: AppflowFlowSourceFlowConfigSourceConnectorProperties;
}
export declare function appflowFlowSourceFlowConfigToTerraform(struct?: AppflowFlowSourceFlowConfig): any;
export interface AppflowFlowTags {
    /**
    * A string used to identify this tag
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#key AppflowFlow#key}
    */
    readonly key: string;
    /**
    * A string containing the value for the tag
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#value AppflowFlow#value}
    */
    readonly value: string;
}
export declare function appflowFlowTagsToTerraform(struct?: AppflowFlowTags): any;
export interface AppflowFlowTasksConnectorOperator {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#amplitude AppflowFlow#amplitude}
    */
    readonly amplitude?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#datadog AppflowFlow#datadog}
    */
    readonly datadog?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#dynatrace AppflowFlow#dynatrace}
    */
    readonly dynatrace?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#google_analytics AppflowFlow#google_analytics}
    */
    readonly googleAnalytics?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#infor_nexus AppflowFlow#infor_nexus}
    */
    readonly inforNexus?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#marketo AppflowFlow#marketo}
    */
    readonly marketo?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#s3 AppflowFlow#s3}
    */
    readonly s3?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#salesforce AppflowFlow#salesforce}
    */
    readonly salesforce?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#service_now AppflowFlow#service_now}
    */
    readonly serviceNow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#singular AppflowFlow#singular}
    */
    readonly singular?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#slack AppflowFlow#slack}
    */
    readonly slack?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#trendmicro AppflowFlow#trendmicro}
    */
    readonly trendmicro?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#veeva AppflowFlow#veeva}
    */
    readonly veeva?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#zendesk AppflowFlow#zendesk}
    */
    readonly zendesk?: string;
}
export declare function appflowFlowTasksConnectorOperatorToTerraform(struct?: AppflowFlowTasksConnectorOperator): any;
export interface AppflowFlowTasksTaskProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#key AppflowFlow#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#value AppflowFlow#value}
    */
    readonly value: string;
}
export declare function appflowFlowTasksTaskPropertiesToTerraform(struct?: AppflowFlowTasksTaskProperties): any;
export interface AppflowFlowTasks {
    /**
    * Operation to be performed on provided source fields
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#connector_operator AppflowFlow#connector_operator}
    */
    readonly connectorOperator?: AppflowFlowTasksConnectorOperator;
    /**
    * A field value on which source field should be validated
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#destination_field AppflowFlow#destination_field}
    */
    readonly destinationField?: string;
    /**
    * Source fields on which particular task will be applied
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#source_fields AppflowFlow#source_fields}
    */
    readonly sourceFields: string[];
    /**
    * A Map used to store task related info
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#task_properties AppflowFlow#task_properties}
    */
    readonly taskProperties?: AppflowFlowTasksTaskProperties[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#task_type AppflowFlow#task_type}
    */
    readonly taskType: string;
}
export declare function appflowFlowTasksToTerraform(struct?: AppflowFlowTasks): any;
export interface AppflowFlowTriggerConfigTriggerProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#data_pull_mode AppflowFlow#data_pull_mode}
    */
    readonly dataPullMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#schedule_end_time AppflowFlow#schedule_end_time}
    */
    readonly scheduleEndTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#schedule_expression AppflowFlow#schedule_expression}
    */
    readonly scheduleExpression: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#schedule_start_time AppflowFlow#schedule_start_time}
    */
    readonly scheduleStartTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#time_zone AppflowFlow#time_zone}
    */
    readonly timeZone?: string;
}
export declare function appflowFlowTriggerConfigTriggerPropertiesToTerraform(struct?: AppflowFlowTriggerConfigTriggerProperties): any;
export interface AppflowFlowTriggerConfig {
    /**
    * Details required for scheduled trigger type
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#trigger_properties AppflowFlow#trigger_properties}
    */
    readonly triggerProperties?: AppflowFlowTriggerConfigTriggerProperties;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#trigger_type AppflowFlow#trigger_type}
    */
    readonly triggerType: string;
}
export declare function appflowFlowTriggerConfigToTerraform(struct?: AppflowFlowTriggerConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html awscc_appflow_flow}
*/
export declare class AppflowFlow extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html awscc_appflow_flow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppflowFlowConfig
    */
    constructor(scope: Construct, id: string, config: AppflowFlowConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _destinationFlowConfigList;
    get destinationFlowConfigList(): AppflowFlowDestinationFlowConfigList[];
    set destinationFlowConfigList(value: AppflowFlowDestinationFlowConfigList[]);
    get destinationFlowConfigListInput(): AppflowFlowDestinationFlowConfigList[];
    get flowArn(): string;
    private _flowName;
    get flowName(): string;
    set flowName(value: string);
    get flowNameInput(): string;
    get id(): string;
    private _kmsArn?;
    get kmsArn(): string;
    set kmsArn(value: string);
    resetKmsArn(): void;
    get kmsArnInput(): string | undefined;
    private _sourceFlowConfig;
    get sourceFlowConfig(): AppflowFlowSourceFlowConfig;
    set sourceFlowConfig(value: AppflowFlowSourceFlowConfig);
    get sourceFlowConfigInput(): AppflowFlowSourceFlowConfig;
    private _tags?;
    get tags(): AppflowFlowTags[];
    set tags(value: AppflowFlowTags[]);
    resetTags(): void;
    get tagsInput(): AppflowFlowTags[] | undefined;
    private _tasks;
    get tasks(): AppflowFlowTasks[];
    set tasks(value: AppflowFlowTasks[]);
    get tasksInput(): AppflowFlowTasks[];
    private _triggerConfig;
    get triggerConfig(): AppflowFlowTriggerConfig;
    set triggerConfig(value: AppflowFlowTriggerConfig);
    get triggerConfigInput(): AppflowFlowTriggerConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
