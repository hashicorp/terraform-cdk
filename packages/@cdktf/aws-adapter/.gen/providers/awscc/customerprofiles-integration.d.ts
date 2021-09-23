import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CustomerprofilesIntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The unique name of the domain.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#domain_name CustomerprofilesIntegration#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#flow_definition CustomerprofilesIntegration#flow_definition}
    */
    readonly flowDefinition?: CustomerprofilesIntegrationFlowDefinition;
    /**
    * The name of the ObjectType defined for the 3rd party data in Profile Service
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#object_type_name CustomerprofilesIntegration#object_type_name}
    */
    readonly objectTypeName: string;
    /**
    * The tags (keys and values) associated with the integration
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#tags CustomerprofilesIntegration#tags}
    */
    readonly tags?: CustomerprofilesIntegrationTags[];
    /**
    * The URI of the S3 bucket or any other type of data source.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#uri CustomerprofilesIntegration#uri}
    */
    readonly uri?: string;
}
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#datetime_type_field_name CustomerprofilesIntegration#datetime_type_field_name}
    */
    readonly datetimeTypeFieldName?: string;
}
export declare function customerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig): any;
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#object CustomerprofilesIntegration#object}
    */
    readonly object: string;
}
export declare function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo): any;
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#bucket_name CustomerprofilesIntegration#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#bucket_prefix CustomerprofilesIntegration#bucket_prefix}
    */
    readonly bucketPrefix?: string;
}
export declare function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3): any;
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#enable_dynamic_field_update CustomerprofilesIntegration#enable_dynamic_field_update}
    */
    readonly enableDynamicFieldUpdate?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#include_deleted_records CustomerprofilesIntegration#include_deleted_records}
    */
    readonly includeDeletedRecords?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#object CustomerprofilesIntegration#object}
    */
    readonly object: string;
}
export declare function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce): any;
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#object CustomerprofilesIntegration#object}
    */
    readonly object: string;
}
export declare function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow): any;
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#object CustomerprofilesIntegration#object}
    */
    readonly object: string;
}
export declare function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk): any;
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#marketo CustomerprofilesIntegration#marketo}
    */
    readonly marketo?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#s3 CustomerprofilesIntegration#s3}
    */
    readonly s3?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#salesforce CustomerprofilesIntegration#salesforce}
    */
    readonly salesforce?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#service_now CustomerprofilesIntegration#service_now}
    */
    readonly serviceNow?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#zendesk CustomerprofilesIntegration#zendesk}
    */
    readonly zendesk?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk;
}
export declare function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties): any;
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#connector_profile_name CustomerprofilesIntegration#connector_profile_name}
    */
    readonly connectorProfileName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#connector_type CustomerprofilesIntegration#connector_type}
    */
    readonly connectorType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#incremental_pull_config CustomerprofilesIntegration#incremental_pull_config}
    */
    readonly incrementalPullConfig?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#source_connector_properties CustomerprofilesIntegration#source_connector_properties}
    */
    readonly sourceConnectorProperties: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties;
}
export declare function customerprofilesIntegrationFlowDefinitionSourceFlowConfigToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig): any;
export interface CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#marketo CustomerprofilesIntegration#marketo}
    */
    readonly marketo?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#s3 CustomerprofilesIntegration#s3}
    */
    readonly s3?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#salesforce CustomerprofilesIntegration#salesforce}
    */
    readonly salesforce?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#service_now CustomerprofilesIntegration#service_now}
    */
    readonly serviceNow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#zendesk CustomerprofilesIntegration#zendesk}
    */
    readonly zendesk?: string;
}
export declare function customerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator): any;
export interface CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#operator_property_key CustomerprofilesIntegration#operator_property_key}
    */
    readonly operatorPropertyKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#property CustomerprofilesIntegration#property}
    */
    readonly property: string;
}
export declare function customerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties): any;
export interface CustomerprofilesIntegrationFlowDefinitionTasks {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#connector_operator CustomerprofilesIntegration#connector_operator}
    */
    readonly connectorOperator?: CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#destination_field CustomerprofilesIntegration#destination_field}
    */
    readonly destinationField?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#source_fields CustomerprofilesIntegration#source_fields}
    */
    readonly sourceFields: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#task_properties CustomerprofilesIntegration#task_properties}
    */
    readonly taskProperties?: CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#task_type CustomerprofilesIntegration#task_type}
    */
    readonly taskType: string;
}
export declare function customerprofilesIntegrationFlowDefinitionTasksToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTasks): any;
export interface CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#data_pull_mode CustomerprofilesIntegration#data_pull_mode}
    */
    readonly dataPullMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#first_execution_from CustomerprofilesIntegration#first_execution_from}
    */
    readonly firstExecutionFrom?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#schedule_end_time CustomerprofilesIntegration#schedule_end_time}
    */
    readonly scheduleEndTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#schedule_expression CustomerprofilesIntegration#schedule_expression}
    */
    readonly scheduleExpression: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#schedule_offset CustomerprofilesIntegration#schedule_offset}
    */
    readonly scheduleOffset?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#schedule_start_time CustomerprofilesIntegration#schedule_start_time}
    */
    readonly scheduleStartTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#timezone CustomerprofilesIntegration#timezone}
    */
    readonly timezone?: string;
}
export declare function customerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled): any;
export interface CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#scheduled CustomerprofilesIntegration#scheduled}
    */
    readonly scheduled?: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled;
}
export declare function customerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties): any;
export interface CustomerprofilesIntegrationFlowDefinitionTriggerConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#trigger_properties CustomerprofilesIntegration#trigger_properties}
    */
    readonly triggerProperties?: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#trigger_type CustomerprofilesIntegration#trigger_type}
    */
    readonly triggerType: string;
}
export declare function customerprofilesIntegrationFlowDefinitionTriggerConfigToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTriggerConfig): any;
export interface CustomerprofilesIntegrationFlowDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#description CustomerprofilesIntegration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#flow_name CustomerprofilesIntegration#flow_name}
    */
    readonly flowName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#kms_arn CustomerprofilesIntegration#kms_arn}
    */
    readonly kmsArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#source_flow_config CustomerprofilesIntegration#source_flow_config}
    */
    readonly sourceFlowConfig: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#tasks CustomerprofilesIntegration#tasks}
    */
    readonly tasks: CustomerprofilesIntegrationFlowDefinitionTasks[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#trigger_config CustomerprofilesIntegration#trigger_config}
    */
    readonly triggerConfig: CustomerprofilesIntegrationFlowDefinitionTriggerConfig;
}
export declare function customerprofilesIntegrationFlowDefinitionToTerraform(struct?: CustomerprofilesIntegrationFlowDefinition): any;
export interface CustomerprofilesIntegrationTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#key CustomerprofilesIntegration#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html#value CustomerprofilesIntegration#value}
    */
    readonly value: string;
}
export declare function customerprofilesIntegrationTagsToTerraform(struct?: CustomerprofilesIntegrationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html awscc_customerprofiles_integration}
*/
export declare class CustomerprofilesIntegration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/customerprofiles_integration.html awscc_customerprofiles_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomerprofilesIntegrationConfig
    */
    constructor(scope: Construct, id: string, config: CustomerprofilesIntegrationConfig);
    get createdAt(): string;
    private _domainName;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    private _flowDefinition?;
    get flowDefinition(): CustomerprofilesIntegrationFlowDefinition;
    set flowDefinition(value: CustomerprofilesIntegrationFlowDefinition);
    resetFlowDefinition(): void;
    get flowDefinitionInput(): CustomerprofilesIntegrationFlowDefinition | undefined;
    get id(): string;
    get lastUpdatedAt(): string;
    private _objectTypeName;
    get objectTypeName(): string;
    set objectTypeName(value: string);
    get objectTypeNameInput(): string;
    private _tags?;
    get tags(): CustomerprofilesIntegrationTags[];
    set tags(value: CustomerprofilesIntegrationTags[]);
    resetTags(): void;
    get tagsInput(): CustomerprofilesIntegrationTags[] | undefined;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    resetUri(): void;
    get uriInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
