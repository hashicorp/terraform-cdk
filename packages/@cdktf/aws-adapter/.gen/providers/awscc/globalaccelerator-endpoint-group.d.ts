import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlobalacceleratorEndpointGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * The list of endpoint objects.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#endpoint_configurations GlobalacceleratorEndpointGroup#endpoint_configurations}
    */
    readonly endpointConfigurations?: GlobalacceleratorEndpointGroupEndpointConfigurations[];
    /**
    * The name of the AWS Region where the endpoint group is located
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}
    */
    readonly endpointGroupRegion: string;
    /**
    * The time in seconds between each health check for an endpoint. Must be a value of 10 or 30
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}
    */
    readonly healthCheckIntervalSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#health_check_path GlobalacceleratorEndpointGroup#health_check_path}
    */
    readonly healthCheckPath?: string;
    /**
    * The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#health_check_port GlobalacceleratorEndpointGroup#health_check_port}
    */
    readonly healthCheckPort?: number;
    /**
    * The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}
    */
    readonly healthCheckProtocol?: string;
    /**
    * The Amazon Resource Name (ARN) of the listener
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#listener_arn GlobalacceleratorEndpointGroup#listener_arn}
    */
    readonly listenerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#port_overrides GlobalacceleratorEndpointGroup#port_overrides}
    */
    readonly portOverrides?: GlobalacceleratorEndpointGroupPortOverrides[];
    /**
    * The number of consecutive health checks required to set the state of the endpoint to unhealthy.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#threshold_count GlobalacceleratorEndpointGroup#threshold_count}
    */
    readonly thresholdCount?: number;
    /**
    * The percentage of traffic to sent to an AWS Region
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}
    */
    readonly trafficDialPercentage?: number;
}
export interface GlobalacceleratorEndpointGroupEndpointConfigurations {
    /**
    * true if client ip should be preserved
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#client_ip_preservation_enabled GlobalacceleratorEndpointGroup#client_ip_preservation_enabled}
    */
    readonly clientIpPreservationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Id of the endpoint. For Network/Application Load Balancer this value is the ARN.  For EIP, this value is the allocation ID.  For EC2 instances, this is the EC2 instance ID
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#endpoint_id GlobalacceleratorEndpointGroup#endpoint_id}
    */
    readonly endpointId: string;
    /**
    * The weight for the endpoint.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#weight GlobalacceleratorEndpointGroup#weight}
    */
    readonly weight?: number;
}
export declare function globalacceleratorEndpointGroupEndpointConfigurationsToTerraform(struct?: GlobalacceleratorEndpointGroupEndpointConfigurations): any;
export interface GlobalacceleratorEndpointGroupPortOverrides {
    /**
    * A network port number
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#endpoint_port GlobalacceleratorEndpointGroup#endpoint_port}
    */
    readonly endpointPort: number;
    /**
    * A network port number
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html#listener_port GlobalacceleratorEndpointGroup#listener_port}
    */
    readonly listenerPort: number;
}
export declare function globalacceleratorEndpointGroupPortOverridesToTerraform(struct?: GlobalacceleratorEndpointGroupPortOverrides): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html awscc_globalaccelerator_endpoint_group}
*/
export declare class GlobalacceleratorEndpointGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/globalaccelerator_endpoint_group.html awscc_globalaccelerator_endpoint_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorEndpointGroupConfig
    */
    constructor(scope: Construct, id: string, config: GlobalacceleratorEndpointGroupConfig);
    private _endpointConfigurations?;
    get endpointConfigurations(): GlobalacceleratorEndpointGroupEndpointConfigurations[];
    set endpointConfigurations(value: GlobalacceleratorEndpointGroupEndpointConfigurations[]);
    resetEndpointConfigurations(): void;
    get endpointConfigurationsInput(): GlobalacceleratorEndpointGroupEndpointConfigurations[] | undefined;
    get endpointGroupArn(): string;
    private _endpointGroupRegion;
    get endpointGroupRegion(): string;
    set endpointGroupRegion(value: string);
    get endpointGroupRegionInput(): string;
    private _healthCheckIntervalSeconds?;
    get healthCheckIntervalSeconds(): number;
    set healthCheckIntervalSeconds(value: number);
    resetHealthCheckIntervalSeconds(): void;
    get healthCheckIntervalSecondsInput(): number | undefined;
    private _healthCheckPath?;
    get healthCheckPath(): string;
    set healthCheckPath(value: string);
    resetHealthCheckPath(): void;
    get healthCheckPathInput(): string | undefined;
    private _healthCheckPort?;
    get healthCheckPort(): number;
    set healthCheckPort(value: number);
    resetHealthCheckPort(): void;
    get healthCheckPortInput(): number | undefined;
    private _healthCheckProtocol?;
    get healthCheckProtocol(): string;
    set healthCheckProtocol(value: string);
    resetHealthCheckProtocol(): void;
    get healthCheckProtocolInput(): string | undefined;
    get id(): string;
    private _listenerArn;
    get listenerArn(): string;
    set listenerArn(value: string);
    get listenerArnInput(): string;
    private _portOverrides?;
    get portOverrides(): GlobalacceleratorEndpointGroupPortOverrides[];
    set portOverrides(value: GlobalacceleratorEndpointGroupPortOverrides[]);
    resetPortOverrides(): void;
    get portOverridesInput(): GlobalacceleratorEndpointGroupPortOverrides[] | undefined;
    private _thresholdCount?;
    get thresholdCount(): number;
    set thresholdCount(value: number);
    resetThresholdCount(): void;
    get thresholdCountInput(): number | undefined;
    private _trafficDialPercentage?;
    get trafficDialPercentage(): number;
    set trafficDialPercentage(value: number);
    resetTrafficDialPercentage(): void;
    get trafficDialPercentageInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
