import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGlobalacceleratorListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_listener.html#id DataAwsccGlobalacceleratorListener#id}
    */
    readonly id: string;
}
export declare class DataAwsccGlobalacceleratorListenerPortRanges extends cdktf.ComplexComputedList {
    get fromPort(): number;
    get toPort(): number;
}
export declare function dataAwsccGlobalacceleratorListenerPortRangesToTerraform(struct?: DataAwsccGlobalacceleratorListenerPortRanges): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_listener.html awscc_globalaccelerator_listener}
*/
export declare class DataAwsccGlobalacceleratorListener extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_listener.html awscc_globalaccelerator_listener} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGlobalacceleratorListenerConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccGlobalacceleratorListenerConfig);
    get acceleratorArn(): string;
    get clientAffinity(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get listenerArn(): string;
    get portRanges(): any;
    get protocol(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
