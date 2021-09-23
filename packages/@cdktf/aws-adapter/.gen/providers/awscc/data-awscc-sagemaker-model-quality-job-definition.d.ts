import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerModelQualityJobDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_quality_job_definition.html#id DataAwsccSagemakerModelQualityJobDefinition#id}
    */
    readonly id: string;
}
export declare class DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig extends cdktf.ComplexComputedList {
    get instanceCount(): number;
    get instanceType(): string;
    get volumeKmsKeyId(): string;
    get volumeSizeInGb(): number;
}
export declare function dataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig): any;
export declare class DataAwsccSagemakerModelQualityJobDefinitionJobResources extends cdktf.ComplexComputedList {
    get clusterConfig(): any;
}
export declare function dataAwsccSagemakerModelQualityJobDefinitionJobResourcesToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionJobResources): any;
export declare class DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification extends cdktf.ComplexComputedList {
    get containerArguments(): string[];
    get containerEntrypoint(): string[];
    get environment(): any;
    get imageUri(): string;
    get postAnalyticsProcessorSourceUri(): string;
    get problemType(): string;
    get recordPreprocessorSourceUri(): string;
}
export declare function dataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification): any;
export declare class DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource extends cdktf.ComplexComputedList {
    get s3Uri(): string;
}
export declare function dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource): any;
export declare class DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig extends cdktf.ComplexComputedList {
    get baseliningJobName(): string;
    get constraintsResource(): any;
}
export declare function dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig): any;
export declare class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput extends cdktf.ComplexComputedList {
    get endTimeOffset(): string;
    get endpointName(): string;
    get inferenceAttribute(): string;
    get localPath(): string;
    get probabilityAttribute(): string;
    get probabilityThresholdAttribute(): number;
    get s3DataDistributionType(): string;
    get s3InputMode(): string;
    get startTimeOffset(): string;
}
export declare function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput): any;
export declare class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input extends cdktf.ComplexComputedList {
    get s3Uri(): string;
}
export declare function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input): any;
export declare class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput extends cdktf.ComplexComputedList {
    get endpointInput(): any;
    get groundTruthS3Input(): any;
}
export declare function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput): any;
export declare class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output extends cdktf.ComplexComputedList {
    get localPath(): string;
    get s3UploadMode(): string;
    get s3Uri(): string;
}
export declare function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output): any;
export declare class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs extends cdktf.ComplexComputedList {
    get s3Output(): any;
}
export declare function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs): any;
export declare class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig extends cdktf.ComplexComputedList {
    get kmsKeyId(): string;
    get monitoringOutputs(): any;
}
export declare function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig): any;
export declare class DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig extends cdktf.ComplexComputedList {
    get securityGroupIds(): string[];
    get subnets(): string[];
}
export declare function dataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig): any;
export declare class DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig extends cdktf.ComplexComputedList {
    get enableInterContainerTrafficEncryption(): any;
    get enableNetworkIsolation(): any;
    get vpcConfig(): any;
}
export declare function dataAwsccSagemakerModelQualityJobDefinitionNetworkConfigToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig): any;
export declare class DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition extends cdktf.ComplexComputedList {
    get maxRuntimeInSeconds(): number;
}
export declare function dataAwsccSagemakerModelQualityJobDefinitionStoppingConditionToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition): any;
export declare class DataAwsccSagemakerModelQualityJobDefinitionTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerModelQualityJobDefinitionTagsToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_quality_job_definition.html awscc_sagemaker_model_quality_job_definition}
*/
export declare class DataAwsccSagemakerModelQualityJobDefinition extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_quality_job_definition.html awscc_sagemaker_model_quality_job_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerModelQualityJobDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerModelQualityJobDefinitionConfig);
    get creationTime(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get jobDefinitionArn(): string;
    get jobDefinitionName(): string;
    get jobResources(): any;
    get modelQualityAppSpecification(): any;
    get modelQualityBaselineConfig(): any;
    get modelQualityJobInput(): any;
    get modelQualityJobOutputConfig(): any;
    get networkConfig(): any;
    get roleArn(): string;
    get stoppingCondition(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
