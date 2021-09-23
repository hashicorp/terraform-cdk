import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayMulticastDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * The options for the transit gateway multicast domain.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html#options Ec2TransitGatewayMulticastDomain#options}
    */
    readonly options?: Ec2TransitGatewayMulticastDomainOptions;
    /**
    * The tags for the transit gateway multicast domain.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html#tags Ec2TransitGatewayMulticastDomain#tags}
    */
    readonly tags?: Ec2TransitGatewayMulticastDomainTags[];
    /**
    * The ID of the transit gateway.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html#transit_gateway_id Ec2TransitGatewayMulticastDomain#transit_gateway_id}
    */
    readonly transitGatewayId: string;
}
export interface Ec2TransitGatewayMulticastDomainOptions {
    /**
    * Indicates whether to automatically cross-account subnet associations that are associated with the transit gateway multicast domain. Valid Values: enable | disable
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html#auto_accept_shared_associations Ec2TransitGatewayMulticastDomain#auto_accept_shared_associations}
    */
    readonly autoAcceptSharedAssociations?: string;
    /**
    * Indicates whether Internet Group Management Protocol (IGMP) version 2 is turned on for the transit gateway multicast domain. Valid Values: enable | disable
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html#igmpv_2_support Ec2TransitGatewayMulticastDomain#igmpv_2_support}
    */
    readonly igmpv2Support?: string;
    /**
    * Indicates whether support for statically configuring transit gateway multicast group sources is turned on. Valid Values: enable | disable
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html#static_sources_support Ec2TransitGatewayMulticastDomain#static_sources_support}
    */
    readonly staticSourcesSupport?: string;
}
export declare function ec2TransitGatewayMulticastDomainOptionsToTerraform(struct?: Ec2TransitGatewayMulticastDomainOptions): any;
export interface Ec2TransitGatewayMulticastDomainTags {
    /**
    * The key of the tag. Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws:.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html#key Ec2TransitGatewayMulticastDomain#key}
    */
    readonly key?: string;
    /**
    * The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html#value Ec2TransitGatewayMulticastDomain#value}
    */
    readonly value?: string;
}
export declare function ec2TransitGatewayMulticastDomainTagsToTerraform(struct?: Ec2TransitGatewayMulticastDomainTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html awscc_ec2_transit_gateway_multicast_domain}
*/
export declare class Ec2TransitGatewayMulticastDomain extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain.html awscc_ec2_transit_gateway_multicast_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayMulticastDomainConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayMulticastDomainConfig);
    get creationTime(): string;
    get id(): string;
    private _options?;
    get options(): Ec2TransitGatewayMulticastDomainOptions;
    set options(value: Ec2TransitGatewayMulticastDomainOptions);
    resetOptions(): void;
    get optionsInput(): Ec2TransitGatewayMulticastDomainOptions | undefined;
    get state(): string;
    private _tags?;
    get tags(): Ec2TransitGatewayMulticastDomainTags[];
    set tags(value: Ec2TransitGatewayMulticastDomainTags[]);
    resetTags(): void;
    get tagsInput(): Ec2TransitGatewayMulticastDomainTags[] | undefined;
    private _transitGatewayId;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    get transitGatewayIdInput(): string;
    get transitGatewayMulticastDomainArn(): string;
    get transitGatewayMulticastDomainId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
