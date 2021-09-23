import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53RecoverycontrolRoutingControlConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_routing_control.html#id DataAwsccRoute53RecoverycontrolRoutingControl#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_routing_control.html awscc_route53recoverycontrol_routing_control}
*/
export declare class DataAwsccRoute53RecoverycontrolRoutingControl extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_routing_control.html awscc_route53recoverycontrol_routing_control} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53RecoverycontrolRoutingControlConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoverycontrolRoutingControlConfig);
    get clusterArn(): string;
    get controlPanelArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get routingControlArn(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
