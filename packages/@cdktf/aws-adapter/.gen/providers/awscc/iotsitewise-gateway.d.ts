import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotsitewiseGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * A list of gateway capability summaries that each contain a namespace and status.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#gateway_capability_summaries IotsitewiseGateway#gateway_capability_summaries}
    */
    readonly gatewayCapabilitySummaries?: IotsitewiseGatewayGatewayCapabilitySummaries[];
    /**
    * A unique, friendly name for the gateway.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#gateway_name IotsitewiseGateway#gateway_name}
    */
    readonly gatewayName: string;
    /**
    * Contains a gateway's platform information.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#gateway_platform IotsitewiseGateway#gateway_platform}
    */
    readonly gatewayPlatform: IotsitewiseGatewayGatewayPlatform;
    /**
    * A list of key-value pairs that contain metadata for the gateway.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#tags IotsitewiseGateway#tags}
    */
    readonly tags?: IotsitewiseGatewayTags[];
}
export interface IotsitewiseGatewayGatewayCapabilitySummaries {
    /**
    * The JSON document that defines the gateway capability's configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#capability_configuration IotsitewiseGateway#capability_configuration}
    */
    readonly capabilityConfiguration?: string;
    /**
    * The namespace of the capability configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#capability_namespace IotsitewiseGateway#capability_namespace}
    */
    readonly capabilityNamespace: string;
}
export declare function iotsitewiseGatewayGatewayCapabilitySummariesToTerraform(struct?: IotsitewiseGatewayGatewayCapabilitySummaries): any;
export interface IotsitewiseGatewayGatewayPlatformGreengrass {
    /**
    * The ARN of the Greengrass group.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#group_arn IotsitewiseGateway#group_arn}
    */
    readonly groupArn: string;
}
export declare function iotsitewiseGatewayGatewayPlatformGreengrassToTerraform(struct?: IotsitewiseGatewayGatewayPlatformGreengrass): any;
export interface IotsitewiseGatewayGatewayPlatform {
    /**
    * Contains the ARN of AWS IoT Greengrass Group that the gateway runs on.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#greengrass IotsitewiseGateway#greengrass}
    */
    readonly greengrass: IotsitewiseGatewayGatewayPlatformGreengrass;
}
export declare function iotsitewiseGatewayGatewayPlatformToTerraform(struct?: IotsitewiseGatewayGatewayPlatform): any;
export interface IotsitewiseGatewayTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#key IotsitewiseGateway#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#value IotsitewiseGateway#value}
    */
    readonly value: string;
}
export declare function iotsitewiseGatewayTagsToTerraform(struct?: IotsitewiseGatewayTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html awscc_iotsitewise_gateway}
*/
export declare class IotsitewiseGateway extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html awscc_iotsitewise_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotsitewiseGatewayConfig
    */
    constructor(scope: Construct, id: string, config: IotsitewiseGatewayConfig);
    private _gatewayCapabilitySummaries?;
    get gatewayCapabilitySummaries(): IotsitewiseGatewayGatewayCapabilitySummaries[];
    set gatewayCapabilitySummaries(value: IotsitewiseGatewayGatewayCapabilitySummaries[]);
    resetGatewayCapabilitySummaries(): void;
    get gatewayCapabilitySummariesInput(): IotsitewiseGatewayGatewayCapabilitySummaries[] | undefined;
    get gatewayId(): string;
    private _gatewayName;
    get gatewayName(): string;
    set gatewayName(value: string);
    get gatewayNameInput(): string;
    private _gatewayPlatform;
    get gatewayPlatform(): IotsitewiseGatewayGatewayPlatform;
    set gatewayPlatform(value: IotsitewiseGatewayGatewayPlatform);
    get gatewayPlatformInput(): IotsitewiseGatewayGatewayPlatform;
    get id(): string;
    private _tags?;
    get tags(): IotsitewiseGatewayTags[];
    set tags(value: IotsitewiseGatewayTags[]);
    resetTags(): void;
    get tagsInput(): IotsitewiseGatewayTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
