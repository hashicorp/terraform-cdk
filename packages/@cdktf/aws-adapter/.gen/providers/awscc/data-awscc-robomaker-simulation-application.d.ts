import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRobomakerSimulationApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_simulation_application.html#id DataAwsccRobomakerSimulationApplication#id}
    */
    readonly id: string;
}
export declare class DataAwsccRobomakerSimulationApplicationRenderingEngine extends cdktf.ComplexComputedList {
    get name(): string;
    get version(): string;
}
export declare function dataAwsccRobomakerSimulationApplicationRenderingEngineToTerraform(struct?: DataAwsccRobomakerSimulationApplicationRenderingEngine): any;
export declare class DataAwsccRobomakerSimulationApplicationRobotSoftwareSuite extends cdktf.ComplexComputedList {
    get name(): string;
    get version(): string;
}
export declare function dataAwsccRobomakerSimulationApplicationRobotSoftwareSuiteToTerraform(struct?: DataAwsccRobomakerSimulationApplicationRobotSoftwareSuite): any;
export declare class DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuite extends cdktf.ComplexComputedList {
    get name(): string;
    get version(): string;
}
export declare function dataAwsccRobomakerSimulationApplicationSimulationSoftwareSuiteToTerraform(struct?: DataAwsccRobomakerSimulationApplicationSimulationSoftwareSuite): any;
export declare class DataAwsccRobomakerSimulationApplicationSources extends cdktf.ComplexComputedList {
    get architecture(): string;
    get s3Bucket(): string;
    get s3Key(): string;
}
export declare function dataAwsccRobomakerSimulationApplicationSourcesToTerraform(struct?: DataAwsccRobomakerSimulationApplicationSources): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_simulation_application.html awscc_robomaker_simulation_application}
*/
export declare class DataAwsccRobomakerSimulationApplication extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_simulation_application.html awscc_robomaker_simulation_application} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRobomakerSimulationApplicationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRobomakerSimulationApplicationConfig);
    get arn(): string;
    get currentRevisionId(): string;
    get environment(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get renderingEngine(): any;
    get robotSoftwareSuite(): any;
    get simulationSoftwareSuite(): any;
    get sources(): any;
    tags(key: string): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
