// https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FisExperimentTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The actions for the experiment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#actions FisExperimentTemplate#actions}
  */
  readonly actions?: { [key: string]: FisExperimentTemplateActions } | cdktf.IResolvable;
  /**
  * A description for the experiment template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#description FisExperimentTemplate#description}
  */
  readonly description: string;
  /**
  * The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#role_arn FisExperimentTemplate#role_arn}
  */
  readonly roleArn: string;
  /**
  * One or more stop conditions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#stop_conditions FisExperimentTemplate#stop_conditions}
  */
  readonly stopConditions: FisExperimentTemplateStopConditions[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#tags FisExperimentTemplate#tags}
  */
  readonly tags: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The targets for the experiment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#targets FisExperimentTemplate#targets}
  */
  readonly targets: { [key: string]: FisExperimentTemplateTargets } | cdktf.IResolvable;
}
export interface FisExperimentTemplateActions {
  /**
  * The ID of the action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#action_id FisExperimentTemplate#action_id}
  */
  readonly actionId?: string;
  /**
  * A description for the action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#description FisExperimentTemplate#description}
  */
  readonly description?: string;
  /**
  * The parameters for the action, if applicable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#parameters FisExperimentTemplate#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The names of the actions that must be completed before the current action starts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#start_after FisExperimentTemplate#start_after}
  */
  readonly startAfter?: string[];
  /**
  * One or more targets for the action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#targets FisExperimentTemplate#targets}
  */
  readonly targets?: { [key: string]: string } | cdktf.IResolvable;
}

export function fisExperimentTemplateActionsToTerraform(struct?: FisExperimentTemplateActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_id: cdktf.stringToTerraform(struct!.actionId),
    description: cdktf.stringToTerraform(struct!.description),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
    start_after: cdktf.listMapper(cdktf.stringToTerraform)(struct!.startAfter),
    targets: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.targets),
  }
}

export interface FisExperimentTemplateStopConditions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#source FisExperimentTemplate#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#value FisExperimentTemplate#value}
  */
  readonly value?: string;
}

export function fisExperimentTemplateStopConditionsToTerraform(struct?: FisExperimentTemplateStopConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface FisExperimentTemplateTargetsFilters {
  /**
  * The attribute path for the filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#path FisExperimentTemplate#path}
  */
  readonly path: string;
  /**
  * The attribute values for the filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#values FisExperimentTemplate#values}
  */
  readonly values: string[];
}

export function fisExperimentTemplateTargetsFiltersToTerraform(struct?: FisExperimentTemplateTargetsFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface FisExperimentTemplateTargets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#filters FisExperimentTemplate#filters}
  */
  readonly filters?: FisExperimentTemplateTargetsFilters[];
  /**
  * The Amazon Resource Names (ARNs) of the target resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#resource_arns FisExperimentTemplate#resource_arns}
  */
  readonly resourceArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#resource_tags FisExperimentTemplate#resource_tags}
  */
  readonly resourceTags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The AWS resource type. The resource type must be supported for the specified action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#resource_type FisExperimentTemplate#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Scopes the identified resources to a specific number of the resources at random, or a percentage of the resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html#selection_mode FisExperimentTemplate#selection_mode}
  */
  readonly selectionMode?: string;
}

export function fisExperimentTemplateTargetsToTerraform(struct?: FisExperimentTemplateTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filters: cdktf.listMapper(fisExperimentTemplateTargetsFiltersToTerraform)(struct!.filters),
    resource_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceArns),
    resource_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.resourceTags),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    selection_mode: cdktf.stringToTerraform(struct!.selectionMode),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html awscc_fis_experiment_template}
*/
export class FisExperimentTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_fis_experiment_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/fis_experiment_template.html awscc_fis_experiment_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FisExperimentTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: FisExperimentTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_fis_experiment_template',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._actions = config.actions;
    this._description = config.description;
    this._roleArn = config.roleArn;
    this._stopConditions = config.stopConditions;
    this._tags = config.tags;
    this._targets = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: true, required: false
  private _actions?: { [key: string]: FisExperimentTemplateActions } | cdktf.IResolvable;
  public get actions() {
    return this.interpolationForAttribute('actions') as any;
  }
  public set actions(value: { [key: string]: FisExperimentTemplateActions } | cdktf.IResolvable ) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions
  }

  // description - computed: false, optional: false, required: true
  private _description: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // stop_conditions - computed: false, optional: false, required: true
  private _stopConditions: FisExperimentTemplateStopConditions[];
  public get stopConditions() {
    return this.interpolationForAttribute('stop_conditions') as any;
  }
  public set stopConditions(value: FisExperimentTemplateStopConditions[]) {
    this._stopConditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stopConditionsInput() {
    return this._stopConditions
  }

  // tags - computed: false, optional: false, required: true
  private _tags: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // targets - computed: false, optional: false, required: true
  private _targets: { [key: string]: FisExperimentTemplateTargets } | cdktf.IResolvable;
  public get targets() {
    return this.interpolationForAttribute('targets') as any;
  }
  public set targets(value: { [key: string]: FisExperimentTemplateTargets } | cdktf.IResolvable) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.hashMapper(cdktf.anyToTerraform)(this._actions),
      description: cdktf.stringToTerraform(this._description),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      stop_conditions: cdktf.listMapper(fisExperimentTemplateStopConditionsToTerraform)(this._stopConditions),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      targets: cdktf.hashMapper(cdktf.anyToTerraform)(this._targets),
    };
  }
}
