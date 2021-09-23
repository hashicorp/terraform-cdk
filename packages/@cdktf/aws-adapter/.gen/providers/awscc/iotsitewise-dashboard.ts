// https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotsitewiseDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * The dashboard definition specified in a JSON literal.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html#dashboard_definition IotsitewiseDashboard#dashboard_definition}
  */
  readonly dashboardDefinition: string;
  /**
  * A description for the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html#dashboard_description IotsitewiseDashboard#dashboard_description}
  */
  readonly dashboardDescription: string;
  /**
  * A friendly name for the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html#dashboard_name IotsitewiseDashboard#dashboard_name}
  */
  readonly dashboardName: string;
  /**
  * The ID of the project in which to create the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html#project_id IotsitewiseDashboard#project_id}
  */
  readonly projectId?: string;
  /**
  * A list of key-value pairs that contain metadata for the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html#tags IotsitewiseDashboard#tags}
  */
  readonly tags?: IotsitewiseDashboardTags[];
}
export interface IotsitewiseDashboardTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html#key IotsitewiseDashboard#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html#value IotsitewiseDashboard#value}
  */
  readonly value: string;
}

export function iotsitewiseDashboardTagsToTerraform(struct?: IotsitewiseDashboardTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html awscc_iotsitewise_dashboard}
*/
export class IotsitewiseDashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotsitewise_dashboard";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_dashboard.html awscc_iotsitewise_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotsitewiseDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: IotsitewiseDashboardConfig) {
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
    this._dashboardDefinition = config.dashboardDefinition;
    this._dashboardDescription = config.dashboardDescription;
    this._dashboardName = config.dashboardName;
    this._projectId = config.projectId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_arn - computed: true, optional: false, required: false
  public get dashboardArn() {
    return this.getStringAttribute('dashboard_arn');
  }

  // dashboard_definition - computed: false, optional: false, required: true
  private _dashboardDefinition: string;
  public get dashboardDefinition() {
    return this.getStringAttribute('dashboard_definition');
  }
  public set dashboardDefinition(value: string) {
    this._dashboardDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardDefinitionInput() {
    return this._dashboardDefinition
  }

  // dashboard_description - computed: false, optional: false, required: true
  private _dashboardDescription: string;
  public get dashboardDescription() {
    return this.getStringAttribute('dashboard_description');
  }
  public set dashboardDescription(value: string) {
    this._dashboardDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardDescriptionInput() {
    return this._dashboardDescription
  }

  // dashboard_id - computed: true, optional: false, required: false
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }

  // dashboard_name - computed: false, optional: false, required: true
  private _dashboardName: string;
  public get dashboardName() {
    return this.getStringAttribute('dashboard_name');
  }
  public set dashboardName(value: string) {
    this._dashboardName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardNameInput() {
    return this._dashboardName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string;
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotsitewiseDashboardTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotsitewiseDashboardTags[] ) {
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
      dashboard_definition: cdktf.stringToTerraform(this._dashboardDefinition),
      dashboard_description: cdktf.stringToTerraform(this._dashboardDescription),
      dashboard_name: cdktf.stringToTerraform(this._dashboardName),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(iotsitewiseDashboardTagsToTerraform)(this._tags),
    };
  }
}
