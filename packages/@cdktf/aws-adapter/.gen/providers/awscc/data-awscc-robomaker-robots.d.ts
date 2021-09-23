import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRobomakerRobotsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_robots.html awscc_robomaker_robots}
*/
export declare class DataAwsccRobomakerRobots extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_robots.html awscc_robomaker_robots} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRobomakerRobotsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccRobomakerRobotsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
