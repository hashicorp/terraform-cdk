import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIoteventsInputsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotevents_inputs.html awscc_iotevents_inputs}
*/
export declare class DataAwsccIoteventsInputs extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotevents_inputs.html awscc_iotevents_inputs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIoteventsInputsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIoteventsInputsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
