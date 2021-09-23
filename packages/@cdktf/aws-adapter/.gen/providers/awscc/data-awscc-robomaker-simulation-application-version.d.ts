import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRobomakerSimulationApplicationVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_simulation_application_version.html#id DataAwsccRobomakerSimulationApplicationVersion#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_simulation_application_version.html awscc_robomaker_simulation_application_version}
*/
export declare class DataAwsccRobomakerSimulationApplicationVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_simulation_application_version.html awscc_robomaker_simulation_application_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRobomakerSimulationApplicationVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRobomakerSimulationApplicationVersionConfig);
    get application(): string;
    get applicationVersion(): string;
    get arn(): string;
    get currentRevisionId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
