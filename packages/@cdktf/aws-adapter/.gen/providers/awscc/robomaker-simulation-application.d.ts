import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
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
export declare function robomakerSimulationApplicationRenderingEngineToTerraform(struct?: RobomakerSimulationApplicationRenderingEngine): any;
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
export declare function robomakerSimulationApplicationRobotSoftwareSuiteToTerraform(struct?: RobomakerSimulationApplicationRobotSoftwareSuite): any;
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
export declare function robomakerSimulationApplicationSimulationSoftwareSuiteToTerraform(struct?: RobomakerSimulationApplicationSimulationSoftwareSuite): any;
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
export declare function robomakerSimulationApplicationSourcesToTerraform(struct?: RobomakerSimulationApplicationSources): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html awscc_robomaker_simulation_application}
*/
export declare class RobomakerSimulationApplication extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/robomaker_simulation_application.html awscc_robomaker_simulation_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RobomakerSimulationApplicationConfig
    */
    constructor(scope: Construct, id: string, config: RobomakerSimulationApplicationConfig);
    get arn(): string;
    private _currentRevisionId?;
    get currentRevisionId(): string;
    set currentRevisionId(value: string);
    resetCurrentRevisionId(): void;
    get currentRevisionIdInput(): string | undefined;
    private _environment?;
    get environment(): string;
    set environment(value: string);
    resetEnvironment(): void;
    get environmentInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _renderingEngine?;
    get renderingEngine(): RobomakerSimulationApplicationRenderingEngine;
    set renderingEngine(value: RobomakerSimulationApplicationRenderingEngine);
    resetRenderingEngine(): void;
    get renderingEngineInput(): RobomakerSimulationApplicationRenderingEngine | undefined;
    private _robotSoftwareSuite;
    get robotSoftwareSuite(): RobomakerSimulationApplicationRobotSoftwareSuite;
    set robotSoftwareSuite(value: RobomakerSimulationApplicationRobotSoftwareSuite);
    get robotSoftwareSuiteInput(): RobomakerSimulationApplicationRobotSoftwareSuite;
    private _simulationSoftwareSuite;
    get simulationSoftwareSuite(): RobomakerSimulationApplicationSimulationSoftwareSuite;
    set simulationSoftwareSuite(value: RobomakerSimulationApplicationSimulationSoftwareSuite);
    get simulationSoftwareSuiteInput(): RobomakerSimulationApplicationSimulationSoftwareSuite;
    private _sources?;
    get sources(): RobomakerSimulationApplicationSources[];
    set sources(value: RobomakerSimulationApplicationSources[]);
    resetSources(): void;
    get sourcesInput(): RobomakerSimulationApplicationSources[] | undefined;
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
