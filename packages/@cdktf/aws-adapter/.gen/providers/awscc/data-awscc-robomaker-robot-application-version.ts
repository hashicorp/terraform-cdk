// https://www.terraform.io/docs/providers/awscc/d/robomaker_robot_application_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRobomakerRobotApplicationVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_robot_application_version.html#id DataAwsccRobomakerRobotApplicationVersion#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_robot_application_version.html awscc_robomaker_robot_application_version}
*/
export class DataAwsccRobomakerRobotApplicationVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_robomaker_robot_application_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_robot_application_version.html awscc_robomaker_robot_application_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRobomakerRobotApplicationVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRobomakerRobotApplicationVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_robomaker_robot_application_version',
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

  // application - computed: true, optional: false, required: false
  public get application() {
    return this.getStringAttribute('application');
  }

  // application_version - computed: true, optional: false, required: false
  public get applicationVersion() {
    return this.getStringAttribute('application_version');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // current_revision_id - computed: true, optional: false, required: false
  public get currentRevisionId() {
    return this.getStringAttribute('current_revision_id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
