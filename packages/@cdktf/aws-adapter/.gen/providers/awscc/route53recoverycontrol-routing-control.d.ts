import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecoverycontrolRoutingControlConfig extends cdktf.TerraformMetaArguments {
    /**
    * Arn associated with Control Panel
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_routing_control.html#cluster_arn Route53RecoverycontrolRoutingControl#cluster_arn}
    */
    readonly clusterArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the control panel.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_routing_control.html#control_panel_arn Route53RecoverycontrolRoutingControl#control_panel_arn}
    */
    readonly controlPanelArn?: string;
    /**
    * The name of the routing control. You can use any non-white space character in the name.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_routing_control.html#name Route53RecoverycontrolRoutingControl#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_routing_control.html awscc_route53recoverycontrol_routing_control}
*/
export declare class Route53RecoverycontrolRoutingControl extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_routing_control.html awscc_route53recoverycontrol_routing_control} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolRoutingControlConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoverycontrolRoutingControlConfig);
    private _clusterArn?;
    get clusterArn(): string;
    set clusterArn(value: string);
    resetClusterArn(): void;
    get clusterArnInput(): string | undefined;
    private _controlPanelArn?;
    get controlPanelArn(): string;
    set controlPanelArn(value: string);
    resetControlPanelArn(): void;
    get controlPanelArnInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get routingControlArn(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
