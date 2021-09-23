// https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabrewScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Schedule cron
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html#cron_expression DatabrewSchedule#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html#job_names DatabrewSchedule#job_names}
  */
  readonly jobNames?: string[];
  /**
  * Schedule Name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html#name DatabrewSchedule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html#tags DatabrewSchedule#tags}
  */
  readonly tags?: DatabrewScheduleTags[];
}
export interface DatabrewScheduleTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html#key DatabrewSchedule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html#value DatabrewSchedule#value}
  */
  readonly value: string;
}

export function databrewScheduleTagsToTerraform(struct?: DatabrewScheduleTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html awscc_databrew_schedule}
*/
export class DatabrewSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_databrew_schedule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/databrew_schedule.html awscc_databrew_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabrewScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DatabrewScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_databrew_schedule',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cronExpression = config.cronExpression;
    this._jobNames = config.jobNames;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression: string;
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_names - computed: false, optional: true, required: false
  private _jobNames?: string[];
  public get jobNames() {
    return this.getListAttribute('job_names');
  }
  public set jobNames(value: string[] ) {
    this._jobNames = value;
  }
  public resetJobNames() {
    this._jobNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNamesInput() {
    return this._jobNames
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: DatabrewScheduleTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: DatabrewScheduleTags[]) {
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
      cron_expression: cdktf.stringToTerraform(this._cronExpression),
      job_names: cdktf.listMapper(cdktf.stringToTerraform)(this._jobNames),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(databrewScheduleTagsToTerraform)(this._tags),
    };
  }
}
