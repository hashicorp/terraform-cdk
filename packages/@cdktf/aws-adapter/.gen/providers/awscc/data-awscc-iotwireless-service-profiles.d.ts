import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotwirelessServiceProfilesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_service_profiles.html awscc_iotwireless_service_profiles}
*/
export declare class DataAwsccIotwirelessServiceProfiles extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_service_profiles.html awscc_iotwireless_service_profiles} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotwirelessServiceProfilesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIotwirelessServiceProfilesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
