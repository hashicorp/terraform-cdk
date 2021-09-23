import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLocationTrackersConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/location_trackers.html awscc_location_trackers}
*/
export declare class DataAwsccLocationTrackers extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/location_trackers.html awscc_location_trackers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLocationTrackersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccLocationTrackersConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
