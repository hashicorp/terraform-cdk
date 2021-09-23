import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53RecoverycontrolControlPanelsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_control_panels.html awscc_route53recoverycontrol_control_panels}
*/
export declare class DataAwsccRoute53RecoverycontrolControlPanels extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_control_panels.html awscc_route53recoverycontrol_control_panels} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53RecoverycontrolControlPanelsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccRoute53RecoverycontrolControlPanelsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
