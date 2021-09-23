import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRobomakerFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_fleet.html#id DataAwsccRobomakerFleet#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_fleet.html awscc_robomaker_fleet}
*/
export declare class DataAwsccRobomakerFleet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/robomaker_fleet.html awscc_robomaker_fleet} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRobomakerFleetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRobomakerFleetConfig);
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    tags(key: string): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
