import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecoverycontrolControlPanelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Cluster to associate with the Control Panel
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_control_panel.html#cluster_arn Route53RecoverycontrolControlPanel#cluster_arn}
    */
    readonly clusterArn?: string;
    /**
    * The name of the control panel. You can use any non-white space character in the name.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_control_panel.html#name Route53RecoverycontrolControlPanel#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_control_panel.html awscc_route53recoverycontrol_control_panel}
*/
export declare class Route53RecoverycontrolControlPanel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_control_panel.html awscc_route53recoverycontrol_control_panel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolControlPanelConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoverycontrolControlPanelConfig);
    private _clusterArn?;
    get clusterArn(): string;
    set clusterArn(value: string);
    resetClusterArn(): void;
    get clusterArnInput(): string | undefined;
    get controlPanelArn(): string;
    get defaultControlPanel(): cdktf.IResolvable;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get routingControlCount(): number;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
