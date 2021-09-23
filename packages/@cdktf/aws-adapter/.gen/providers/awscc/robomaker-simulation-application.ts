// https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RobomakerSimulationApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The current revision id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#current_revision_id RobomakerSimulationApplication#current_revision_id}
  */
  readonly currentRevisionId?: string;
  /**
  * The URI of the Docker image for the robot application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#environment RobomakerSimulationApplication#environment}
  */
  readonly environment?: string;
  /**
  * The name of the simulation application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#name RobomakerSimulationApplication#name}
  */
  readonly name?: string;
  /**
  * Information about a rendering engine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#rendering_engine RobomakerSimulationApplication#rendering_engine}
  */
  readonly renderingEngine?: RobomakerSimulationApplicationRenderingEngine;
  /**
  * Information about a robot software suite (ROS distribution).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#robot_software_suite RobomakerSimulationApplication#robot_software_suite}
  */
  readonly robotSoftwareSuite: RobomakerSimulationApplicationRobotSoftwareSuite;
  /**
  * Information about a simulation software suite.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#simulation_software_suite RobomakerSimulationApplication#simulation_software_suite}
  */
  readonly simulationSoftwareSuite: RobomakerSimulationApplicationSimulationSoftwareSuite;
  /**
  * The sources of the simulation application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#sources RobomakerSimulationApplication#sources}
  */
  readonly sources?: RobomakerSimulationApplicationSources[];
  /**
  * A key-value pair to associate with a resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#tags RobomakerSimulationApplication#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export interface RobomakerSimulationApplicationRenderingEngine {
  /**
  * The name of the rendering engine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#name RobomakerSimulationApplication#name}
  */
  readonly name: string;
  /**
  * The version of the rendering engine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#version RobomakerSimulationApplication#version}
  */
  readonly version: string;
}

export function robomakerSimulationApplicationRenderingEngineToTerraform(struct?: RobomakerSimulationApplicationRenderingEngine): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface RobomakerSimulationApplicationRobotSoftwareSuite {
  /**
  * The name of the robot software suite (ROS distribution).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#name RobomakerSimulationApplication#name}
  */
  readonly name: string;
  /**
  * The version of the robot software suite (ROS distribution).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#version RobomakerSimulationApplication#version}
  */
  readonly version: string;
}

export function robomakerSimulationApplicationRobotSoftwareSuiteToTerraform(struct?: RobomakerSimulationApplicationRobotSoftwareSuite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface RobomakerSimulationApplicationSimulationSoftwareSuite {
  /**
  * The name of the simulation software suite.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#name RobomakerSimulationApplication#name}
  */
  readonly name: string;
  /**
  * The version of the simulation software suite.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#version RobomakerSimulationApplication#version}
  */
  readonly version: string;
}

export function robomakerSimulationApplicationSimulationSoftwareSuiteToTerraform(struct?: RobomakerSimulationApplicationSimulationSoftwareSuite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface RobomakerSimulationApplicationSources {
  /**
  * The target processor architecture for the application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#architecture RobomakerSimulationApplication#architecture}
  */
  readonly architecture: string;
  /**
  * The Amazon S3 bucket name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#s3_bucket RobomakerSimulationApplication#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The s3 object key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html#s3_key RobomakerSimulationApplication#s3_key}
  */
  readonly s3Key: string;
}

export function robomakerSimulationApplicationSourcesToTerraform(struct?: RobomakerSimulationApplicationSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    architecture: cdktf.stringToTerraform(struct!.architecture),
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_key: cdktf.stringToTerraform(struct!.s3Key),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html awscc_robomaker_simulation_application}
*/
export class RobomakerSimulationApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_robomaker_simulation_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html awscc_robomaker_simulation_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RobomakerSimulationApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: RobomakerSimulationApplicationConfig) {
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
    this._currentRevisionId = config.currentRevisionId;
    this._environment = config.environment;
    this._name = config.name;
    this._renderingEngine = config.renderingEngine;
    this._robotSoftwareSuite = config.robotSoftwareSuite;
    this._simulationSoftwareSuite = config.simulationSoftwareSuite;
    this._sources = config.sources;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // current_revision_id - computed: false, optional: true, required: false
  private _currentRevisionId?: string;
  public get currentRevisionId() {
    return this.getStringAttribute('current_revision_id');
  }
  public set currentRevisionId(value: string ) {
    this._currentRevisionId = value;
  }
  public resetCurrentRevisionId() {
    this._currentRevisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentRevisionIdInput() {
    return this._currentRevisionId
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string;
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string ) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // rendering_engine - computed: false, optional: true, required: false
  private _renderingEngine?: RobomakerSimulationApplicationRenderingEngine;
  public get renderingEngine() {
    return this.interpolationForAttribute('rendering_engine') as any;
  }
  public set renderingEngine(value: RobomakerSimulationApplicationRenderingEngine ) {
    this._renderingEngine = value;
  }
  public resetRenderingEngine() {
    this._renderingEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderingEngineInput() {
    return this._renderingEngine
  }

  // robot_software_suite - computed: false, optional: false, required: true
  private _robotSoftwareSuite: RobomakerSimulationApplicationRobotSoftwareSuite;
  public get robotSoftwareSuite() {
    return this.interpolationForAttribute('robot_software_suite') as any;
  }
  public set robotSoftwareSuite(value: RobomakerSimulationApplicationRobotSoftwareSuite) {
    this._robotSoftwareSuite = value;
  }
  // Temporarily expose input value. Use with caution.
  public get robotSoftwareSuiteInput() {
    return this._robotSoftwareSuite
  }

  // simulation_software_suite - computed: false, optional: false, required: true
  private _simulationSoftwareSuite: RobomakerSimulationApplicationSimulationSoftwareSuite;
  public get simulationSoftwareSuite() {
    return this.interpolationForAttribute('simulation_software_suite') as any;
  }
  public set simulationSoftwareSuite(value: RobomakerSimulationApplicationSimulationSoftwareSuite) {
    this._simulationSoftwareSuite = value;
  }
  // Temporarily expose input value. Use with caution.
  public get simulationSoftwareSuiteInput() {
    return this._simulationSoftwareSuite
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: RobomakerSimulationApplicationSources[];
  public get sources() {
    return this.interpolationForAttribute('sources') as any;
  }
  public set sources(value: RobomakerSimulationApplicationSources[] ) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
      current_revision_id: cdktf.stringToTerraform(this._currentRevisionId),
      environment: cdktf.stringToTerraform(this._environment),
      name: cdktf.stringToTerraform(this._name),
      rendering_engine: robomakerSimulationApplicationRenderingEngineToTerraform(this._renderingEngine),
      robot_software_suite: robomakerSimulationApplicationRobotSoftwareSuiteToTerraform(this._robotSoftwareSuite),
      simulation_software_suite: robomakerSimulationApplicationSimulationSoftwareSuiteToTerraform(this._simulationSoftwareSuite),
      sources: cdktf.listMapper(robomakerSimulationApplicationSourcesToTerraform)(this._sources),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
