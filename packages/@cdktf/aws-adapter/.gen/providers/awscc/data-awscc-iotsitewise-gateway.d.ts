import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotsitewiseGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_gateway.html#id DataAwsccIotsitewiseGateway#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries extends cdktf.ComplexComputedList {
    get capabilityConfiguration(): string;
    get capabilityNamespace(): string;
}
export declare function dataAwsccIotsitewiseGatewayGatewayCapabilitySummariesToTerraform(struct?: DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries): any;
export declare class DataAwsccIotsitewiseGatewayGatewayPlatformGreengrass extends cdktf.ComplexComputedList {
    get groupArn(): string;
}
export declare function dataAwsccIotsitewiseGatewayGatewayPlatformGreengrassToTerraform(struct?: DataAwsccIotsitewiseGatewayGatewayPlatformGreengrass): any;
export declare class DataAwsccIotsitewiseGatewayGatewayPlatform extends cdktf.ComplexComputedList {
    get greengrass(): any;
}
export declare function dataAwsccIotsitewiseGatewayGatewayPlatformToTerraform(struct?: DataAwsccIotsitewiseGatewayGatewayPlatform): any;
export declare class DataAwsccIotsitewiseGatewayTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotsitewiseGatewayTagsToTerraform(struct?: DataAwsccIotsitewiseGatewayTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_gateway.html awscc_iotsitewise_gateway}
*/
export declare class DataAwsccIotsitewiseGateway extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_gateway.html awscc_iotsitewise_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotsitewiseGatewayConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotsitewiseGatewayConfig);
    get gatewayCapabilitySummaries(): any;
    get gatewayId(): string;
    get gatewayName(): string;
    get gatewayPlatform(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
