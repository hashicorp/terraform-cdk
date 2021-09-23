import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerDataQualityJobDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_data_quality_job_definition.html#id DataAwsccSagemakerDataQualityJobDefinition#id}
    */
    readonly id: string;
}
export declare class DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification extends cdktf.ComplexComputedList {
    get containerArguments(): string[];
    get containerEntrypoint(): string[];
    get environment(): any;
    get imageUri(): string;
    get postAnalyticsProcessorSourceUri(): string;
    get recordPreprocessorSourceUri(): string;
}
export declare function dataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification): any;
export declare class DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource extends cdktf.ComplexComputedList {
    get s3Uri(): string;
}
export declare function dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource): any;
export declare class DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource extends cdktf.ComplexComputedList {
    get s3Uri(): string;
}
export declare function dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource): any;
export declare class DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig extends cdktf.ComplexComputedList {
    get baseliningJobName(): string;
    get constraintsResource(): any;
    get statisticsResource(): any;
}
export declare function dataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig): any;
export declare class DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput extends cdktf.ComplexComputedList {
    get endpointName(): string;
    get localPath(): string;
    get s3DataDistributionType(): string;
    get s3InputMode(): string;
}
export declare function dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput): any;
export declare class DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput extends cdktf.ComplexComputedList {
    get endpointInput(): any;
}
export declare function dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput): any;
export declare class DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output extends cdktf.ComplexComputedList {
    get localPath(): string;
    get s3UploadMode(): string;
    get s3Uri(): string;
}
export declare function dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output): any;
export declare class DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs extends cdktf.ComplexComputedList {
    get s3Output(): any;
}
export declare function dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs): any;
export declare class DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig extends cdktf.ComplexComputedList {
    get kmsKeyId(): string;
    get monitoringOutputs(): any;
}
export declare function dataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig): any;
export declare class DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig extends cdktf.ComplexComputedList {
    get instanceCount(): number;
    get instanceType(): string;
    get volumeKmsKeyId(): string;
    get volumeSizeInGb(): number;
}
export declare function dataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig): any;
export declare class DataAwsccSagemakerDataQualityJobDefinitionJobResources extends cdktf.ComplexComputedList {
    get clusterConfig(): any;
}
export declare function dataAwsccSagemakerDataQualityJobDefinitionJobResourcesToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionJobResources): any;
export declare class DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig extends cdktf.ComplexComputedList {
    get securityGroupIds(): string[];
    get subnets(): string[];
}
export declare function dataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig): any;
export declare class DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig extends cdktf.ComplexComputedList {
    get enableInterContainerTrafficEncryption(): any;
    get enableNetworkIsolation(): any;
    get vpcConfig(): any;
}
export declare function dataAwsccSagemakerDataQualityJobDefinitionNetworkConfigToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig): any;
export declare class DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition extends cdktf.ComplexComputedList {
    get maxRuntimeInSeconds(): number;
}
export declare function dataAwsccSagemakerDataQualityJobDefinitionStoppingConditionToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition): any;
export declare class DataAwsccSagemakerDataQualityJobDefinitionTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerDataQualityJobDefinitionTagsToTerraform(struct?: DataAwsccSagemakerDataQualityJobDefinitionTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_data_quality_job_definition.html awscc_sagemaker_data_quality_job_definition}
*/
export declare class DataAwsccSagemakerDataQualityJobDefinition extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_data_quality_job_definition.html awscc_sagemaker_data_quality_job_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerDataQualityJobDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerDataQualityJobDefinitionConfig);
    get creationTime(): string;
    get dataQualityAppSpecification(): any;
    get dataQualityBaselineConfig(): any;
    get dataQualityJobInput(): any;
    get dataQualityJobOutputConfig(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get jobDefinitionArn(): string;
    get jobDefinitionName(): string;
    get jobResources(): any;
    get networkConfig(): any;
    get roleArn(): string;
    get stoppingCondition(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
