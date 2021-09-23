import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_robot.html awscc_robomaker_robot}
*/
export declare class RobomakerRobot extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_robot.html awscc_robomaker_robot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RobomakerRobotConfig
    */
    constructor(scope: Construct, id: string, config: RobomakerRobotConfig);
    private _architecture;
    get architecture(): string;
    set architecture(value: string);
    get architectureInput(): string;
    get arn(): string;
    private _fleet?;
    get fleet(): string;
    set fleet(value: string);
    resetFleet(): void;
    get fleetInput(): string | undefined;
    private _greengrassGroupId;
    get greengrassGroupId(): string;
    set greengrassGroupId(value: string);
    get greengrassGroupIdInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
