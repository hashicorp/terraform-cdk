import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53RecoverycontrolControlPanelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_control_panel.html#id DataAwsccRoute53RecoverycontrolControlPanel#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_control_panel.html awscc_route53recoverycontrol_control_panel}
*/
export declare class DataAwsccRoute53RecoverycontrolControlPanel extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_control_panel.html awscc_route53recoverycontrol_control_panel} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53RecoverycontrolControlPanelConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoverycontrolControlPanelConfig);
    get clusterArn(): string;
    get controlPanelArn(): string;
    get defaultControlPanel(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get routingControlCount(): number;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
