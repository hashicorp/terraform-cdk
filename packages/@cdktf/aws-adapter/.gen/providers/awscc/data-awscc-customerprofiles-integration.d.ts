import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCustomerprofilesIntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_integration.html#id DataAwsccCustomerprofilesIntegration#id}
    */
    readonly id: string;
}
export declare class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig extends cdktf.ComplexComputedList {
    get datetimeTypeFieldName(): string;
}
export declare function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig): any;
export declare class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo extends cdktf.ComplexComputedList {
    get object(): string;
}
export declare function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo): any;
export declare class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 extends cdktf.ComplexComputedList {
    get bucketName(): string;
    get bucketPrefix(): string;
}
export declare function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3): any;
export declare class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce extends cdktf.ComplexComputedList {
    get enableDynamicFieldUpdate(): any;
    get includeDeletedRecords(): any;
    get object(): string;
}
export declare function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce): any;
export declare class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow extends cdktf.ComplexComputedList {
    get object(): string;
}
export declare function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow): any;
export declare class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk extends cdktf.ComplexComputedList {
    get object(): string;
}
export declare function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk): any;
export declare class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties extends cdktf.ComplexComputedList {
    get marketo(): any;
    get s3(): any;
    get salesforce(): any;
    get serviceNow(): any;
    get zendesk(): any;
}
export declare function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties): any;
export declare class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig extends cdktf.ComplexComputedList {
    get connectorProfileName(): string;
    get connectorType(): string;
    get incrementalPullConfig(): any;
    get sourceConnectorProperties(): any;
}
export declare function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig): any;
export declare class DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator extends cdktf.ComplexComputedList {
    get marketo(): string;
    get s3(): string;
    get salesforce(): string;
    get serviceNow(): string;
    get zendesk(): string;
}
export declare function dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator): any;
export declare class DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties extends cdktf.ComplexComputedList {
    get operatorPropertyKey(): string;
    get property(): string;
}
export declare function dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties): any;
export declare class DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks extends cdktf.ComplexComputedList {
    get connectorOperator(): any;
    get destinationField(): string;
    get sourceFields(): string[];
    get taskProperties(): any;
    get taskType(): string;
}
export declare function dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks): any;
export declare class DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled extends cdktf.ComplexComputedList {
    get dataPullMode(): string;
    get firstExecutionFrom(): number;
    get scheduleEndTime(): number;
    get scheduleExpression(): string;
    get scheduleOffset(): number;
    get scheduleStartTime(): number;
    get timezone(): string;
}
export declare function dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled): any;
export declare class DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties extends cdktf.ComplexComputedList {
    get scheduled(): any;
}
export declare function dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties): any;
export declare class DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig extends cdktf.ComplexComputedList {
    get triggerProperties(): any;
    get triggerType(): string;
}
export declare function dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig): any;
export declare class DataAwsccCustomerprofilesIntegrationFlowDefinition extends cdktf.ComplexComputedList {
    get description(): string;
    get flowName(): string;
    get kmsArn(): string;
    get sourceFlowConfig(): any;
    get tasks(): any;
    get triggerConfig(): any;
}
export declare function dataAwsccCustomerprofilesIntegrationFlowDefinitionToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinition): any;
export declare class DataAwsccCustomerprofilesIntegrationTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccCustomerprofilesIntegrationTagsToTerraform(struct?: DataAwsccCustomerprofilesIntegrationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_integration.html awscc_customerprofiles_integration}
*/
export declare class DataAwsccCustomerprofilesIntegration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_integration.html awscc_customerprofiles_integration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCustomerprofilesIntegrationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCustomerprofilesIntegrationConfig);
    get createdAt(): string;
    get domainName(): string;
    get flowDefinition(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastUpdatedAt(): string;
    get objectTypeName(): string;
    get tags(): any;
    get uri(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
