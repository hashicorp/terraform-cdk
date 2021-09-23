import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRobomakerSimulationApplicationsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_simulation_applications.html awscc_robomaker_simulation_applications}
*/
export declare class DataAwsccRobomakerSimulationApplications extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_simulation_applications.html awscc_robomaker_simulation_applications} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRobomakerSimulationApplicationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccRobomakerSimulationApplicationsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
