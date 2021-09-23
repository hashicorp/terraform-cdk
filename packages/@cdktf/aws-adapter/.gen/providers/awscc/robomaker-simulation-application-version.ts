// https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RobomakerSimulationApplicationVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application_version.html#application RobomakerSimulationApplicationVersion#application}
  */
  readonly application: string;
  /**
  * The revision ID of robot application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application_version.html#current_revision_id RobomakerSimulationApplicationVersion#current_revision_id}
  */
  readonly currentRevisionId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application_version.html awscc_robomaker_simulation_application_version}
*/
export class RobomakerSimulationApplicationVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_robomaker_simulation_application_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application_version.html awscc_robomaker_simulation_application_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RobomakerSimulationApplicationVersionConfig
  */
  public constructor(scope: Construct, id: string, config: RobomakerSimulationApplicationVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_robomaker_simulation_application_version',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._application = config.application;
    this._currentRevisionId = config.currentRevisionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application - computed: false, optional: false, required: true
  private _application: string;
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application
  }

  // application_version - computed: true, optional: false, required: false
  public get applicationVersion() {
    return this.getStringAttribute('application_version');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // current_revision_id - computed: true, optional: true, required: false
  private _currentRevisionId?: string;
  public get currentRevisionId() {
    return this.getStringAttribute('current_revision_id');
  }
  public set currentRevisionId(value: string) {
    this._currentRevisionId = value;
  }
  public resetCurrentRevisionId() {
    this._currentRevisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentRevisionIdInput() {
    return this._currentRevisionId
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application: cdktf.stringToTerraform(this._application),
      current_revision_id: cdktf.stringToTerraform(this._currentRevisionId),
    };
  }
}
