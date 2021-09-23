// https://www.terraform.io/docs/providers/awscc/d/robomaker_simulation_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRobomakerSimulationApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_simulation_application.html#id DataAwsccRobomakerSimulationApplication#id}
  */
  readonly id: string;
}
export class DataAwsccRobomakerSimulationApplicationRenderingEngine extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export function dataAwsccRobomakerSimulationApplicationRenderingEngineToTerraform(struct?: DataAwsccRobomakerSimulationApplicationRenderingEngine): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class DataAwsccRobomakerSimulationApplicationRobotSoftwareSuite extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export function dataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteToTerraform(struct?: DataAwsccRobomakerSimulationApplicationRobotSoftwareSuite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuite extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export function dataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteToTerraform(struct?: DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class DataAwsccRobomakerSimulationApplicationSources extends cdktf.ComplexComputedList {

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_key - computed: true, optional: false, required: false
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
}

export function dataAwsccRobomakerSimulationApplicationSourcesToTerraform(struct?: DataAwsccRobomakerSimulationApplicationSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    architecture: cdktf.stringToTerraform(struct!.architecture),
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_key: cdktf.stringToTerraform(struct!.s3Key),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_simulation_application.html awscc_robomaker_simulation_application}
*/
export class DataAwsccRobomakerSimulationApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_robomaker_simulation_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_simulation_application.html awscc_robomaker_simulation_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRobomakerSimulationApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRobomakerSimulationApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_robomaker_simulation_application',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // current_revision_id - computed: true, optional: false, required: false
  public get currentRevisionId() {
    return this.getStringAttribute('current_revision_id');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rendering_engine - computed: true, optional: false, required: false
  public get renderingEngine() {
    return this.interpolationForAttribute('rendering_engine') as any;
  }

  // robot_software_suite - computed: true, optional: false, required: false
  public get robotSoftwareSuite() {
    return this.interpolationForAttribute('robot_software_suite') as any;
  }

  // simulation_software_suite - computed: true, optional: false, required: false
  public get simulationSoftwareSuite() {
    return this.interpolationForAttribute('simulation_software_suite') as any;
  }

  // sources - computed: true, optional: false, required: false
  public get sources() {
    return this.interpolationForAttribute('sources') as any;
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
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
