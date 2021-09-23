import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_explainability_job_definition.html#id DataAwsccSagemakerModelExplainabilityJobDefinition#id}
    */
    readonly id: string;
}
export declare class DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig extends cdktf.ComplexComputedList {
    get instanceCount(): number;
    get instanceType(): string;
    get volumeKmsKeyId(): string;
    get volumeSizeInGb(): number;
}
export declare function dataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig): any;
export declare class DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources extends cdktf.ComplexComputedList {
    get clusterConfig(): any;
}
export declare function dataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources): any;
export declare class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification extends cdktf.ComplexComputedList {
    get configUri(): string;
    get environment(): any;
    get imageUri(): string;
}
export declare function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification): any;
export declare class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource extends cdktf.ComplexComputedList {
    get s3Uri(): string;
}
export declare function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource): any;
export declare class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig extends cdktf.ComplexComputedList {
    get baseliningJobName(): string;
    get constraintsResource(): any;
}
export declare function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig): any;
export declare class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput extends cdktf.ComplexComputedList {
    get endpointName(): string;
    get featuresAttribute(): string;
    get inferenceAttribute(): string;
    get localPath(): string;
    get probabilityAttribute(): string;
    get s3DataDistributionType(): string;
    get s3InputMode(): string;
}
export declare function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput): any;
export declare class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput extends cdktf.ComplexComputedList {
    get endpointInput(): any;
}
export declare function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput): any;
export declare class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output extends cdktf.ComplexComputedList {
    get localPath(): string;
    get s3UploadMode(): string;
    get s3Uri(): string;
}
export declare function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output): any;
export declare class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs extends cdktf.ComplexComputedList {
    get s3Output(): any;
}
export declare function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs): any;
export declare class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig extends cdktf.ComplexComputedList {
    get kmsKeyId(): string;
    get monitoringOutputs(): any;
}
export declare function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig): any;
export declare class DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig extends cdktf.ComplexComputedList {
    get securityGroupIds(): string[];
    get subnets(): string[];
}
export declare function dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig): any;
export declare class DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig extends cdktf.ComplexComputedList {
    get enableInterContainerTrafficEncryption(): any;
    get enableNetworkIsolation(): any;
    get vpcConfig(): any;
}
export declare function dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig): any;
export declare class DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition extends cdktf.ComplexComputedList {
    get maxRuntimeInSeconds(): number;
}
export declare function dataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition): any;
export declare class DataAwsccSagemakerModelExplainabilityJobDefinitionTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerModelExplainabilityJobDefinitionTagsToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_explainability_job_definition.html awscc_sagemaker_model_explainability_job_definition}
*/
export declare class DataAwsccSagemakerModelExplainabilityJobDefinition extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_model_explainability_job_definition.html awscc_sagemaker_model_explainability_job_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerModelExplainabilityJobDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerModelExplainabilityJobDefinitionConfig);
    get creationTime(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get jobDefinitionArn(): string;
    get jobDefinitionName(): string;
    get jobResources(): any;
    get modelExplainabilityAppSpecification(): any;
    get modelExplainabilityBaselineConfig(): any;
    get modelExplainabilityJobInput(): any;
    get modelExplainabilityJobOutputConfig(): any;
    get networkConfig(): any;
    get roleArn(): string;
    get stoppingCondition(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
