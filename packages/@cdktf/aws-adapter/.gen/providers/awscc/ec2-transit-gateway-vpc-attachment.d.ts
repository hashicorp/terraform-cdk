import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#add_subnet_ids Ec2TransitGatewayVpcAttachment#add_subnet_ids}
    */
    readonly addSubnetIds?: string[];
    /**
    * The options for the transit gateway vpc attachment.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#options Ec2TransitGatewayVpcAttachment#options}
    */
    readonly options?: Ec2TransitGatewayVpcAttachmentOptions;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#remove_subnet_ids Ec2TransitGatewayVpcAttachment#remove_subnet_ids}
    */
    readonly removeSubnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#subnet_ids Ec2TransitGatewayVpcAttachment#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#tags Ec2TransitGatewayVpcAttachment#tags}
    */
    readonly tags?: Ec2TransitGatewayVpcAttachmentTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#transit_gateway_id Ec2TransitGatewayVpcAttachment#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#vpc_id Ec2TransitGatewayVpcAttachment#vpc_id}
    */
    readonly vpcId?: string;
}
export interface Ec2TransitGatewayVpcAttachmentOptions {
    /**
    * Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#appliance_mode_support Ec2TransitGatewayVpcAttachment#appliance_mode_support}
    */
    readonly applianceModeSupport?: string;
    /**
    * Indicates whether to enable DNS Support for Vpc Attachment. Valid Values: enable | disable
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#dns_support Ec2TransitGatewayVpcAttachment#dns_support}
    */
    readonly dnsSupport?: string;
    /**
    * Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#ipv_6_support Ec2TransitGatewayVpcAttachment#ipv_6_support}
    */
    readonly ipv6Support?: string;
}
export declare function ec2TransitGatewayVpcAttachmentOptionsToTerraform(struct?: Ec2TransitGatewayVpcAttachmentOptions): any;
export interface Ec2TransitGatewayVpcAttachmentTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#key Ec2TransitGatewayVpcAttachment#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html#value Ec2TransitGatewayVpcAttachment#value}
    */
    readonly value: string;
}
export declare function ec2TransitGatewayVpcAttachmentTagsToTerraform(struct?: Ec2TransitGatewayVpcAttachmentTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html awscc_ec2_transit_gateway_vpc_attachment}
*/
export declare class Ec2TransitGatewayVpcAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_vpc_attachment.html awscc_ec2_transit_gateway_vpc_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayVpcAttachmentConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Ec2TransitGatewayVpcAttachmentConfig);
    private _addSubnetIds?;
    get addSubnetIds(): string[];
    set addSubnetIds(value: string[]);
    resetAddSubnetIds(): void;
    get addSubnetIdsInput(): string[] | undefined;
    get id(): string;
    private _options?;
    get options(): Ec2TransitGatewayVpcAttachmentOptions;
    set options(value: Ec2TransitGatewayVpcAttachmentOptions);
    resetOptions(): void;
    get optionsInput(): Ec2TransitGatewayVpcAttachmentOptions | undefined;
    private _removeSubnetIds?;
    get removeSubnetIds(): string[];
    set removeSubnetIds(value: string[]);
    resetRemoveSubnetIds(): void;
    get removeSubnetIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
    private _tags?;
    get tags(): Ec2TransitGatewayVpcAttachmentTags[];
    set tags(value: Ec2TransitGatewayVpcAttachmentTags[]);
    resetTags(): void;
    get tagsInput(): Ec2TransitGatewayVpcAttachmentTags[] | undefined;
    private _transitGatewayId?;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    resetTransitGatewayId(): void;
    get transitGatewayIdInput(): string | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
