import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlobalacceleratorListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the accelerator.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html#accelerator_arn GlobalacceleratorListener#accelerator_arn}
    */
    readonly acceleratorArn: string;
    /**
    * Client affinity lets you direct all requests from a user to the same endpoint.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html#client_affinity GlobalacceleratorListener#client_affinity}
    */
    readonly clientAffinity?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html#port_ranges GlobalacceleratorListener#port_ranges}
    */
    readonly portRanges: GlobalacceleratorListenerPortRanges[];
    /**
    * The protocol for the listener.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html#protocol GlobalacceleratorListener#protocol}
    */
    readonly protocol?: string;
}
export interface GlobalacceleratorListenerPortRanges {
    /**
    * A network port number
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html#from_port GlobalacceleratorListener#from_port}
    */
    readonly fromPort: number;
    /**
    * A network port number
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html#to_port GlobalacceleratorListener#to_port}
    */
    readonly toPort: number;
}
export declare function globalacceleratorListenerPortRangesToTerraform(struct?: GlobalacceleratorListenerPortRanges): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html awscc_globalaccelerator_listener}
*/
export declare class GlobalacceleratorListener extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_listener.html awscc_globalaccelerator_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorListenerConfig
    */
    constructor(scope: Construct, id: string, config: GlobalacceleratorListenerConfig);
    private _acceleratorArn;
    get acceleratorArn(): string;
    set acceleratorArn(value: string);
    get acceleratorArnInput(): string;
    private _clientAffinity?;
    get clientAffinity(): string;
    set clientAffinity(value: string);
    resetClientAffinity(): void;
    get clientAffinityInput(): string | undefined;
    get id(): string;
    get listenerArn(): string;
    private _portRanges;
    get portRanges(): GlobalacceleratorListenerPortRanges[];
    set portRanges(value: GlobalacceleratorListenerPortRanges[]);
    get portRangesInput(): GlobalacceleratorListenerPortRanges[];
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
