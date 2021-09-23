// https://www.terraform.io/docs/providers/awscc/r/sagemaker_pipeline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_pipeline.html#pipeline_definition SagemakerPipeline#pipeline_definition}
  */
  readonly pipelineDefinition: { [key: string]: string } | cdktf.IResolvable;
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

export function sagemakerPipelineTagsToTerraform(struct?: SagemakerPipelineTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_pipeline.html awscc_sagemaker_pipeline}
*/
export class SagemakerPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_pipeline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_pipeline.html awscc_sagemaker_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._pipelineDefinition = config.pipelineDefinition;
    this._pipelineDescription = config.pipelineDescription;
    this._pipelineDisplayName = config.pipelineDisplayName;
    this._pipelineName = config.pipelineName;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pipeline_definition - computed: false, optional: false, required: true
  private _pipelineDefinition: { [key: string]: string } | cdktf.IResolvable;
  public get pipelineDefinition() {
    return this.interpolationForAttribute('pipeline_definition') as any;
  }
  public set pipelineDefinition(value: { [key: string]: string } | cdktf.IResolvable) {
    this._pipelineDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineDefinitionInput() {
    return this._pipelineDefinition
  }

  // pipeline_description - computed: false, optional: true, required: false
  private _pipelineDescription?: string;
  public get pipelineDescription() {
    return this.getStringAttribute('pipeline_description');
  }
  public set pipelineDescription(value: string ) {
    this._pipelineDescription = value;
  }
  public resetPipelineDescription() {
    this._pipelineDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineDescriptionInput() {
    return this._pipelineDescription
  }

  // pipeline_display_name - computed: false, optional: true, required: false
  private _pipelineDisplayName?: string;
  public get pipelineDisplayName() {
    return this.getStringAttribute('pipeline_display_name');
  }
  public set pipelineDisplayName(value: string ) {
    this._pipelineDisplayName = value;
  }
  public resetPipelineDisplayName() {
    this._pipelineDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineDisplayNameInput() {
    return this._pipelineDisplayName
  }

  // pipeline_name - computed: false, optional: false, required: true
  private _pipelineName: string;
  public get pipelineName() {
    return this.getStringAttribute('pipeline_name');
  }
  public set pipelineName(value: string) {
    this._pipelineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineNameInput() {
    return this._pipelineName
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: SagemakerPipelineTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SagemakerPipelineTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pipeline_definition: cdktf.hashMapper(cdktf.anyToTerraform)(this._pipelineDefinition),
      pipeline_description: cdktf.stringToTerraform(this._pipelineDescription),
      pipeline_display_name: cdktf.stringToTerraform(this._pipelineDisplayName),
      pipeline_name: cdktf.stringToTerraform(this._pipelineName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.listMapper(sagemakerPipelineTagsToTerraform)(this._tags),
    };
  }
}
