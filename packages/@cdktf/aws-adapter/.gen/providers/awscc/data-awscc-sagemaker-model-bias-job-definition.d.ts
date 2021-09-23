import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerModelBiasJobDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_bias_job_definition.html#id DataAwsccSagemakerModelBiasJobDefinition#id}
    */
    readonly id: string;
}
export declare class DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig extends cdktf.ComplexComputedList {
    get instanceCount(): number;
    get instanceType(): string;
    get volumeKmsKeyId(): string;
    get volumeSizeInGb(): number;
}
export declare function dataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig): any;
export declare class DataAwsccSagemakerModelBiasJobDefinitionJobResources extends cdktf.ComplexComputedList {
    get clusterConfig(): any;
}
export declare function dataAwsccSagemakerModelBiasJobDefinitionJobResourcesToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionJobResources): any;
export declare class DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification extends cdktf.ComplexComputedList {
    get configUri(): string;
    get environment(): any;
    get imageUri(): string;
}
export declare function dataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification): any;
export declare class DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource extends cdktf.ComplexComputedList {
    get s3Uri(): string;
}
export declare function dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource): any;
export declare class DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig extends cdktf.ComplexComputedList {
    get baseliningJobName(): string;
    get constraintsResource(): any;
}
export declare function dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig): any;
export declare class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput extends cdktf.ComplexComputedList {
    get endTimeOffset(): string;
    get endpointName(): string;
    get featuresAttribute(): string;
    get inferenceAttribute(): string;
    get localPath(): string;
    get probabilityAttribute(): string;
    get probabilityThresholdAttribute(): number;
    get s3DataDistributionType(): string;
    get s3InputMode(): string;
    get startTimeOffset(): string;
}
export declare function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput): any;
export declare class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input extends cdktf.ComplexComputedList {
    get s3Uri(): string;
}
export declare function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input): any;
export declare class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput extends cdktf.ComplexComputedList {
    get endpointInput(): any;
    get groundTruthS3Input(): any;
}
export declare function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput): any;
export declare class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output extends cdktf.ComplexComputedList {
    get localPath(): string;
    get s3UploadMode(): string;
    get s3Uri(): string;
}
export declare function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output): any;
export declare class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs extends cdktf.ComplexComputedList {
    get s3Output(): any;
}
export declare function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs): any;
export declare class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig extends cdktf.ComplexComputedList {
    get kmsKeyId(): string;
    get monitoringOutputs(): any;
}
export declare function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig): any;
export declare class DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig extends cdktf.ComplexComputedList {
    get securityGroupIds(): string[];
    get subnets(): string[];
}
export declare function dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig): any;
export declare class DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig extends cdktf.ComplexComputedList {
    get enableInterContainerTrafficEncryption(): any;
    get enableNetworkIsolation(): any;
    get vpcConfig(): any;
}
export declare function dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig): any;
export declare class DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition extends cdktf.ComplexComputedList {
    get maxRuntimeInSeconds(): number;
}
export declare function dataAwsccSagemakerModelBiasJobDefinitionStoppingConditionToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition): any;
export declare class DataAwsccSagemakerModelBiasJobDefinitionTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerModelBiasJobDefinitionTagsToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_bias_job_definition.html awscc_sagemaker_model_bias_job_definition}
*/
export declare class DataAwsccSagemakerModelBiasJobDefinition extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_bias_job_definition.html awscc_sagemaker_model_bias_job_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerModelBiasJobDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerModelBiasJobDefinitionConfig);
    get creationTime(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get jobDefinitionArn(): string;
    get jobDefinitionName(): string;
    get jobResources(): any;
    get modelBiasAppSpecification(): any;
    get modelBiasBaselineConfig(): any;
    get modelBiasJobInput(): any;
    get modelBiasJobOutputConfig(): any;
    get networkConfig(): any;
    get roleArn(): string;
    get stoppingCondition(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
