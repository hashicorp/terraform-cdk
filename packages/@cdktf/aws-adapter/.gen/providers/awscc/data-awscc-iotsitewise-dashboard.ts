// https://www.terraform.io/docs/providers/awscc/d/iotsitewise_dashboard.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotsitewiseDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_dashboard.html#id DataAwsccIotsitewiseDashboard#id}
  */
  readonly id: string;
}
export class DataAwsccIotsitewiseDashboardTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotsitewiseDashboardTagsToTerraform(struct?: DataAwsccIotsitewiseDashboardTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_dashboard.html awscc_iotsitewise_dashboard}
*/
export class DataAwsccIotsitewiseDashboard extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotsitewise_dashboard";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_dashboard.html awscc_iotsitewise_dashboard} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotsitewiseDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotsitewiseDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotsitewise_dashboard',
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

  // dashboard_arn - computed: true, optional: false, required: false
  public get dashboardArn() {
    return this.getStringAttribute('dashboard_arn');
  }

  // dashboard_definition - computed: true, optional: false, required: false
  public get dashboardDefinition() {
    return this.getStringAttribute('dashboard_definition');
  }

  // dashboard_description - computed: true, optional: false, required: false
  public get dashboardDescription() {
    return this.getStringAttribute('dashboard_description');
  }

  // dashboard_id - computed: true, optional: false, required: false
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }

  // dashboard_name - computed: true, optional: false, required: false
  public get dashboardName() {
    return this.getStringAttribute('dashboard_name');
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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
