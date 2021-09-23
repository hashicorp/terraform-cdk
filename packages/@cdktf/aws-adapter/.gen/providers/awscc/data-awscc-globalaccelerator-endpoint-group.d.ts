import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGlobalacceleratorEndpointGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_endpoint_group.html#id DataAwsccGlobalacceleratorEndpointGroup#id}
    */
    readonly id: string;
}
export declare class DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations extends cdktf.ComplexComputedList {
    get clientIpPreservationEnabled(): any;
    get endpointId(): string;
    get weight(): number;
}
export declare function dataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsToTerraform(struct?: DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations): any;
export declare class DataAwsccGlobalacceleratorEndpointGroupPortOverrides extends cdktf.ComplexComputedList {
    get endpointPort(): number;
    get listenerPort(): number;
}
export declare function dataAwsccGlobalacceleratorEndpointGroupPortOverridesToTerraform(struct?: DataAwsccGlobalacceleratorEndpointGroupPortOverrides): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_endpoint_group.html awscc_globalaccelerator_endpoint_group}
*/
export declare class DataAwsccGlobalacceleratorEndpointGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/globalaccelerator_endpoint_group.html awscc_globalaccelerator_endpoint_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGlobalacceleratorEndpointGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccGlobalacceleratorEndpointGroupConfig);
    get endpointConfigurations(): any;
    get endpointGroupArn(): string;
    get endpointGroupRegion(): string;
    get healthCheckIntervalSeconds(): number;
    get healthCheckPath(): string;
    get healthCheckPort(): number;
    get healthCheckProtocol(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get listenerArn(): string;
    get portOverrides(): any;
    get thresholdCount(): number;
    get trafficDialPercentage(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
