import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayPeeringAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * The ID of the peer account
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}
    */
    readonly peerAccountId: string;
    /**
    * Peer Region
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}
    */
    readonly peerRegion: string;
    /**
    * The ID of the peer transit gateway.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}
    */
    readonly peerTransitGatewayId: string;
    /**
    * The tags for the transit gateway peering attachment.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html#tags Ec2TransitGatewayPeeringAttachment#tags}
    */
    readonly tags?: Ec2TransitGatewayPeeringAttachmentTags[];
    /**
    * The ID of the transit gateway.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}
    */
    readonly transitGatewayId: string;
}
export declare class Ec2TransitGatewayPeeringAttachmentStatus extends cdktf.ComplexComputedList {
    private _code?;
    get code(): string;
    set code(value: string);
    resetCode(): void;
    get codeInput(): string | undefined;
    private _message?;
    get message(): string;
    set message(value: string);
    resetMessage(): void;
    get messageInput(): string | undefined;
}
export declare function ec2TransitGatewayPeeringAttachmentStatusToTerraform(struct?: Ec2TransitGatewayPeeringAttachmentStatus): any;
export interface Ec2TransitGatewayPeeringAttachmentTags {
    /**
    * The key of the tag. Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws:.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html#key Ec2TransitGatewayPeeringAttachment#key}
    */
    readonly key?: string;
    /**
    * The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html#value Ec2TransitGatewayPeeringAttachment#value}
    */
    readonly value?: string;
}
export declare function ec2TransitGatewayPeeringAttachmentTagsToTerraform(struct?: Ec2TransitGatewayPeeringAttachmentTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html awscc_ec2_transit_gateway_peering_attachment}
*/
export declare class Ec2TransitGatewayPeeringAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_peering_attachment.html awscc_ec2_transit_gateway_peering_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayPeeringAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayPeeringAttachmentConfig);
    get creationTime(): string;
    get id(): string;
    private _peerAccountId;
    get peerAccountId(): string;
    set peerAccountId(value: string);
    get peerAccountIdInput(): string;
    private _peerRegion;
    get peerRegion(): string;
    set peerRegion(value: string);
    get peerRegionInput(): string;
    private _peerTransitGatewayId;
    get peerTransitGatewayId(): string;
    set peerTransitGatewayId(value: string);
    get peerTransitGatewayIdInput(): string;
    get state(): string;
    get status(): any;
    private _tags?;
    get tags(): Ec2TransitGatewayPeeringAttachmentTags[];
    set tags(value: Ec2TransitGatewayPeeringAttachmentTags[]);
    resetTags(): void;
    get tagsInput(): Ec2TransitGatewayPeeringAttachmentTags[] | undefined;
    get transitGatewayAttachmentId(): string;
    private _transitGatewayId;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    get transitGatewayIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
