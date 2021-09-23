import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGroundstationMissionProfilesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_mission_profiles.html awscc_groundstation_mission_profiles}
*/
export declare class DataAwsccGroundstationMissionProfiles extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_mission_profiles.html awscc_groundstation_mission_profiles} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGroundstationMissionProfilesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccGroundstationMissionProfilesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
