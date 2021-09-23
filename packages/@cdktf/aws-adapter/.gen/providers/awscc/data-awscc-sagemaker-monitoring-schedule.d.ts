import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerMonitoringScheduleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_monitoring_schedule.html#id DataAwsccSagemakerMonitoringSchedule#id}
    */
    readonly id: string;
}
export declare class DataAwsccSagemakerMonitoringScheduleLastMonitoringExecutionSummary extends cdktf.ComplexComputedList {
    get creationTime(): string;
    get endpointName(): string;
    get failureReason(): string;
    get lastModifiedTime(): string;
    get monitoringExecutionStatus(): string;
    get monitoringScheduleName(): string;
    get processingJobArn(): string;
    get scheduledTime(): string;
}
export declare function dataAwsccSagemakerMonitoringScheduleLastMonitoringExecutionSummaryToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleLastMonitoringExecutionSummary): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource extends cdktf.ComplexComputedList {
    get s3Uri(): string;
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResourceToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource extends cdktf.ComplexComputedList {
    get s3Uri(): string;
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResourceToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig extends cdktf.ComplexComputedList {
    get constraintsResource(): any;
    get statisticsResource(): any;
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification extends cdktf.ComplexComputedList {
    get containerArguments(): string[];
    get containerEntrypoint(): string[];
    get imageUri(): string;
    get postAnalyticsProcessorSourceUri(): string;
    get recordPreprocessorSourceUri(): string;
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecificationToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput extends cdktf.ComplexComputedList {
    get endpointName(): string;
    get localPath(): string;
    get s3DataDistributionType(): string;
    get s3InputMode(): string;
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInputToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs extends cdktf.ComplexComputedList {
    get endpointInput(): any;
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output extends cdktf.ComplexComputedList {
    get localPath(): string;
    get s3UploadMode(): string;
    get s3Uri(): string;
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs extends cdktf.ComplexComputedList {
    get s3Output(): any;
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig extends cdktf.ComplexComputedList {
    get kmsKeyId(): string;
    get monitoringOutputs(): any;
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig extends cdktf.ComplexComputedList {
    get instanceCount(): number;
    get instanceType(): string;
    get volumeKmsKeyId(): string;
    get volumeSizeInGb(): number;
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfigToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources extends cdktf.ComplexComputedList {
    get clusterConfig(): any;
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig extends cdktf.ComplexComputedList {
    get securityGroupIds(): string[];
    get subnets(): string[];
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig extends cdktf.ComplexComputedList {
    get enableInterContainerTrafficEncryption(): any;
    get enableNetworkIsolation(): any;
    get vpcConfig(): any;
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition extends cdktf.ComplexComputedList {
    get maxRuntimeInSeconds(): number;
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingConditionToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition extends cdktf.ComplexComputedList {
    get baselineConfig(): any;
    get environment(): any;
    get monitoringAppSpecification(): any;
    get monitoringInputs(): any;
    get monitoringOutputConfig(): any;
    get monitoringResources(): any;
    get networkConfig(): any;
    get roleArn(): string;
    get stoppingCondition(): any;
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig extends cdktf.ComplexComputedList {
    get scheduleExpression(): string;
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig): any;
export declare class DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfig extends cdktf.ComplexComputedList {
    get monitoringJobDefinition(): any;
    get monitoringJobDefinitionName(): string;
    get monitoringType(): string;
    get scheduleConfig(): any;
}
export declare function dataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfigToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleMonitoringScheduleConfig): any;
export declare class DataAwsccSagemakerMonitoringScheduleTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerMonitoringScheduleTagsToTerraform(struct?: DataAwsccSagemakerMonitoringScheduleTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_monitoring_schedule.html awscc_sagemaker_monitoring_schedule}
*/
export declare class DataAwsccSagemakerMonitoringSchedule extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_monitoring_schedule.html awscc_sagemaker_monitoring_schedule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerMonitoringScheduleConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerMonitoringScheduleConfig);
    get creationTime(): string;
    get endpointName(): string;
    get failureReason(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastModifiedTime(): string;
    get lastMonitoringExecutionSummary(): any;
    get monitoringScheduleArn(): string;
    get monitoringScheduleConfig(): any;
    get monitoringScheduleName(): string;
    get monitoringScheduleStatus(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
