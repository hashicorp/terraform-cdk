import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RobomakerRobotApplicationVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_robot_application_version.html#application RobomakerRobotApplicationVersion#application}
    */
    readonly application: string;
    /**
    * The revision ID of robot application.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_robot_application_version.html#current_revision_id RobomakerRobotApplicationVersion#current_revision_id}
    */
    readonly currentRevisionId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_robot_application_version.html awscc_robomaker_robot_application_version}
*/
export declare class RobomakerRobotApplicationVersion extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_robot_application_version.html awscc_robomaker_robot_application_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RobomakerRobotApplicationVersionConfig
    */
    constructor(scope: Construct, id: string, config: RobomakerRobotApplicationVersionConfig);
    private _application;
    get application(): string;
    set application(value: string);
    get applicationInput(): string;
    get applicationVersion(): string;
    get arn(): string;
    private _currentRevisionId?;
    get currentRevisionId(): string;
    set currentRevisionId(value: string);
    resetCurrentRevisionId(): void;
    get currentRevisionIdInput(): string | undefined;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
