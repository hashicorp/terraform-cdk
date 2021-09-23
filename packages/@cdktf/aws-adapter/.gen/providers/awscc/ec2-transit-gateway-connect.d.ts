import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayConnectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html#options Ec2TransitGatewayConnect#options}
    */
    readonly options: Ec2TransitGatewayConnectOptions;
    /**
    * The tags for the attachment.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html#tags Ec2TransitGatewayConnect#tags}
    */
    readonly tags?: Ec2TransitGatewayConnectTags[];
    /**
    * The ID of the attachment from which the Connect attachment was created.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html#transport_transit_gateway_attachment_id Ec2TransitGatewayConnect#transport_transit_gateway_attachment_id}
    */
    readonly transportTransitGatewayAttachmentId: string;
}
export interface Ec2TransitGatewayConnectOptions {
    /**
    * The tunnel protocol.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html#protocol Ec2TransitGatewayConnect#protocol}
    */
    readonly protocol?: string;
}
export declare function ec2TransitGatewayConnectOptionsToTerraform(struct?: Ec2TransitGatewayConnectOptions): any;
export interface Ec2TransitGatewayConnectTags {
    /**
    * The key of the tag. Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws:.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html#key Ec2TransitGatewayConnect#key}
    */
    readonly key?: string;
    /**
    * The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html#value Ec2TransitGatewayConnect#value}
    */
    readonly value?: string;
}
export declare function ec2TransitGatewayConnectTagsToTerraform(struct?: Ec2TransitGatewayConnectTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html awscc_ec2_transit_gateway_connect}
*/
export declare class Ec2TransitGatewayConnect extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_connect.html awscc_ec2_transit_gateway_connect} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayConnectConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayConnectConfig);
    get creationTime(): string;
    get id(): string;
    private _options;
    get options(): Ec2TransitGatewayConnectOptions;
    set options(value: Ec2TransitGatewayConnectOptions);
    get optionsInput(): Ec2TransitGatewayConnectOptions;
    get state(): string;
    private _tags?;
    get tags(): Ec2TransitGatewayConnectTags[];
    set tags(value: Ec2TransitGatewayConnectTags[]);
    resetTags(): void;
    get tagsInput(): Ec2TransitGatewayConnectTags[] | undefined;
    get transitGatewayAttachmentId(): string;
    get transitGatewayId(): string;
    private _transportTransitGatewayAttachmentId;
    get transportTransitGatewayAttachmentId(): string;
    set transportTransitGatewayAttachmentId(value: string);
    get transportTransitGatewayAttachmentIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
