import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerPipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_pipeline.html#id DataAwsccSagemakerPipeline#id}
    */
    readonly id: string;
}
export declare class DataAwsccSagemakerPipelineTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerPipelineTagsToTerraform(struct?: DataAwsccSagemakerPipelineTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_pipeline.html awscc_sagemaker_pipeline}
*/
export declare class DataAwsccSagemakerPipeline extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_pipeline.html awscc_sagemaker_pipeline} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerPipelineConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerPipelineConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    pipelineDefinition(key: string): string;
    get pipelineDescription(): string;
    get pipelineDisplayName(): string;
    get pipelineName(): string;
    get roleArn(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
