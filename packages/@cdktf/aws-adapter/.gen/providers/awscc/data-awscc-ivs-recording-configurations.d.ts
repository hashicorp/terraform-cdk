import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIvsRecordingConfigurationsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ivs_recording_configurations.html awscc_ivs_recording_configurations}
*/
export declare class DataAwsccIvsRecordingConfigurations extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ivs_recording_configurations.html awscc_ivs_recording_configurations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIvsRecordingConfigurationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIvsRecordingConfigurationsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
