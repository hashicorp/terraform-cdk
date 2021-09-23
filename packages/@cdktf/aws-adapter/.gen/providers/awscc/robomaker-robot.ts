// https://www.terraform.io/docs/providers/awscc/r/robomaker_robot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RobomakerRobotConfig extends cdktf.TerraformMetaArguments {
  /**
  * The target architecture of the robot.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_robot.html#architecture RobomakerRobot#architecture}
  */
  readonly architecture: string;
  /**
  * The Amazon Resource Name (ARN) of the fleet.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_robot.html#fleet RobomakerRobot#fleet}
  */
  readonly fleet?: string;
  /**
  * The Greengrass group id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_robot.html#greengrass_group_id RobomakerRobot#greengrass_group_id}
  */
  readonly greengrassGroupId: string;
  /**
  * The name for the robot.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_robot.html#name RobomakerRobot#name}
  */
  readonly name?: string;
  /**
  * A key-value pair to associate with a resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_robot.html#tags RobomakerRobot#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_robot.html awscc_robomaker_robot}
*/
export class RobomakerRobot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_robomaker_robot";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_robot.html awscc_robomaker_robot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RobomakerRobotConfig
  */
  public constructor(scope: Construct, id: string, config: RobomakerRobotConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_robomaker_robot',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._architecture = config.architecture;
    this._fleet = config.fleet;
    this._greengrassGroupId = config.greengrassGroupId;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: false, optional: false, required: true
  private _architecture: string;
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // fleet - computed: true, optional: true, required: false
  private _fleet?: string;
  public get fleet() {
    return this.getStringAttribute('fleet');
  }
  public set fleet(value: string) {
    this._fleet = value;
  }
  public resetFleet() {
    this._fleet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetInput() {
    return this._fleet
  }

  // greengrass_group_id - computed: false, optional: false, required: true
  private _greengrassGroupId: string;
  public get greengrassGroupId() {
    return this.getStringAttribute('greengrass_group_id');
  }
  public set greengrassGroupId(value: string) {
    this._greengrassGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get greengrassGroupIdInput() {
    return this._greengrassGroupId
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
      architecture: cdktf.stringToTerraform(this._architecture),
      fleet: cdktf.stringToTerraform(this._fleet),
      greengrass_group_id: cdktf.stringToTerraform(this._greengrassGroupId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
