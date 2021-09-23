// https://www.terraform.io/docs/providers/awscc/d/fis_experiment_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccFisExperimentTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/fis_experiment_template.html#id DataAwsccFisExperimentTemplate#id}
  */
  readonly id: string;
}
export class DataAwsccFisExperimentTemplateActions extends cdktf.ComplexComputedList {

  // action_id - computed: true, optional: false, required: false
  public get actionId() {
    return this.getStringAttribute('action_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }

  // start_after - computed: true, optional: false, required: false
  public get startAfter() {
    return this.getListAttribute('start_after');
  }

  // targets - computed: true, optional: false, required: false
  public get targets() {
    return this.interpolationForAttribute('targets') as any;
  }
}

export function dataAwsccFisExperimentTemplateActionsToTerraform(struct?: DataAwsccFisExperimentTemplateActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_id: cdktf.stringToTerraform(struct!.actionId),
    description: cdktf.stringToTerraform(struct!.description),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    start_after: cdktf.listMapper(cdktf.stringToTerraform)(struct!.startAfter),
    targets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.targets),
  }
}

export class DataAwsccFisExperimentTemplateStopConditions extends cdktf.ComplexComputedList {

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccFisExperimentTemplateStopConditionsToTerraform(struct?: DataAwsccFisExperimentTemplateStopConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccFisExperimentTemplateTargetsFilters extends cdktf.ComplexComputedList {

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export function dataAwsccFisExperimentTemplateTargetsFiltersToTerraform(struct?: DataAwsccFisExperimentTemplateTargetsFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class DataAwsccFisExperimentTemplateTargets extends cdktf.ComplexComputedList {

  // filters - computed: true, optional: false, required: false
  public get filters() {
    return this.interpolationForAttribute('filters') as any;
  }

  // resource_arns - computed: true, optional: false, required: false
  public get resourceArns() {
    return this.getListAttribute('resource_arns');
  }

  // resource_tags - computed: true, optional: false, required: false
  public get resourceTags() {
    return this.interpolationForAttribute('resource_tags') as any;
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // selection_mode - computed: true, optional: false, required: false
  public get selectionMode() {
    return this.getStringAttribute('selection_mode');
  }
}

export function dataAwsccFisExperimentTemplateTargetsToTerraform(struct?: DataAwsccFisExperimentTemplateTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filters: cdktf.listMapper(dataAwsccFisExperimentTemplateTargetsFiltersToTerraform)(struct!.filters),
    resource_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceArns),
    resource_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceTags),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    selection_mode: cdktf.stringToTerraform(struct!.selectionMode),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/fis_experiment_template.html awscc_fis_experiment_template}
*/
export class DataAwsccFisExperimentTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_fis_experiment_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/fis_experiment_template.html awscc_fis_experiment_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccFisExperimentTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccFisExperimentTemplateConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.interpolationForAttribute('actions') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // stop_conditions - computed: true, optional: false, required: false
  public get stopConditions() {
    return this.interpolationForAttribute('stop_conditions') as any;
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // targets - computed: true, optional: false, required: false
  public get targets() {
    return this.interpolationForAttribute('targets') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
