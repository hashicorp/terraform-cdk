import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGroundstationMissionProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_mission_profile.html#id DataAwsccGroundstationMissionProfile#id}
    */
    readonly id: string;
}
export declare class DataAwsccGroundstationMissionProfileDataflowEdges extends cdktf.ComplexComputedList {
    get destination(): string;
    get source(): string;
}
export declare function dataAwsccGroundstationMissionProfileDataflowEdgesToTerraform(struct?: DataAwsccGroundstationMissionProfileDataflowEdges): any;
export declare class DataAwsccGroundstationMissionProfileTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccGroundstationMissionProfileTagsToTerraform(struct?: DataAwsccGroundstationMissionProfileTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_mission_profile.html awscc_groundstation_mission_profile}
*/
export declare class DataAwsccGroundstationMissionProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_mission_profile.html awscc_groundstation_mission_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGroundstationMissionProfileConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccGroundstationMissionProfileConfig);
    get arn(): string;
    get contactPostPassDurationSeconds(): number;
    get contactPrePassDurationSeconds(): number;
    get dataflowEdges(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get minimumViableContactDurationSeconds(): number;
    get name(): string;
    get region(): string;
    get tags(): any;
    get trackingConfigArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
