import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerPipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_pipeline.html#pipeline_definition SagemakerPipeline#pipeline_definition}
    */
    readonly pipelineDefinition: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The description of the Pipeline.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_pipeline.html#pipeline_description SagemakerPipeline#pipeline_description}
    */
    readonly pipelineDescription?: string;
    /**
    * The display name of the Pipeline.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_pipeline.html#pipeline_display_name SagemakerPipeline#pipeline_display_name}
    */
    readonly pipelineDisplayName?: string;
    /**
    * The name of the Pipeline.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_pipeline.html#pipeline_name SagemakerPipeline#pipeline_name}
    */
    readonly pipelineName: string;
    /**
    * Role Arn
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_pipeline.html#role_arn SagemakerPipeline#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_pipeline.html#tags SagemakerPipeline#tags}
    */
    readonly tags?: SagemakerPipelineTags[];
}
export interface SagemakerPipelineTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_pipeline.html#key SagemakerPipeline#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_pipeline.html#value SagemakerPipeline#value}
    */
    readonly value: string;
}
export declare function sagemakerPipelineTagsToTerraform(struct?: SagemakerPipelineTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_pipeline.html awscc_sagemaker_pipeline}
*/
export declare class SagemakerPipeline extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_pipeline.html awscc_sagemaker_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerPipelineConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerPipelineConfig);
    get id(): string;
    private _pipelineDefinition;
    get pipelineDefinition(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set pipelineDefinition(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    get pipelineDefinitionInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _pipelineDescription?;
    get pipelineDescription(): string;
    set pipelineDescription(value: string);
    resetPipelineDescription(): void;
    get pipelineDescriptionInput(): string | undefined;
    private _pipelineDisplayName?;
    get pipelineDisplayName(): string;
    set pipelineDisplayName(value: string);
    resetPipelineDisplayName(): void;
    get pipelineDisplayNameInput(): string | undefined;
    private _pipelineName;
    get pipelineName(): string;
    set pipelineName(value: string);
    get pipelineNameInput(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _tags?;
    get tags(): SagemakerPipelineTags[];
    set tags(value: SagemakerPipelineTags[]);
    resetTags(): void;
    get tagsInput(): SagemakerPipelineTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
