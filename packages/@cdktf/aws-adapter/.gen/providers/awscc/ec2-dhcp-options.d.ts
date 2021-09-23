import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2DhcpOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * This value is used to complete unqualified DNS hostnames.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_dhcp_options.html#domain_name Ec2DhcpOptions#domain_name}
    */
    readonly domainName?: string;
    /**
    * The IPv4 addresses of up to four domain name servers, or AmazonProvidedDNS.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_dhcp_options.html#domain_name_servers Ec2DhcpOptions#domain_name_servers}
    */
    readonly domainNameServers?: string[];
    /**
    * The IPv4 addresses of up to four NetBIOS name servers.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_dhcp_options.html#netbios_name_servers Ec2DhcpOptions#netbios_name_servers}
    */
    readonly netbiosNameServers?: string[];
    /**
    * The NetBIOS node type (1, 2, 4, or 8).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_dhcp_options.html#netbios_node_type Ec2DhcpOptions#netbios_node_type}
    */
    readonly netbiosNodeType?: number;
    /**
    * The IPv4 addresses of up to four Network Time Protocol (NTP) servers.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_dhcp_options.html#ntp_servers Ec2DhcpOptions#ntp_servers}
    */
    readonly ntpServers?: string[];
    /**
    * Any tags assigned to the DHCP options set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_dhcp_options.html#tags Ec2DhcpOptions#tags}
    */
    readonly tags?: Ec2DhcpOptionsTags[];
}
export interface Ec2DhcpOptionsTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_dhcp_options.html#key Ec2DhcpOptions#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_dhcp_options.html#value Ec2DhcpOptions#value}
    */
    readonly value: string;
}
export declare function ec2DhcpOptionsTagsToTerraform(struct?: Ec2DhcpOptionsTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_dhcp_options.html awscc_ec2_dhcp_options}
*/
export declare class Ec2DhcpOptions extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_dhcp_options.html awscc_ec2_dhcp_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2DhcpOptionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Ec2DhcpOptionsConfig);
    get dhcpOptionsId(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    resetDomainName(): void;
    get domainNameInput(): string | undefined;
    private _domainNameServers?;
    get domainNameServers(): string[];
    set domainNameServers(value: string[]);
    resetDomainNameServers(): void;
    get domainNameServersInput(): string[] | undefined;
    get id(): string;
    private _netbiosNameServers?;
    get netbiosNameServers(): string[];
    set netbiosNameServers(value: string[]);
    resetNetbiosNameServers(): void;
    get netbiosNameServersInput(): string[] | undefined;
    private _netbiosNodeType?;
    get netbiosNodeType(): number;
    set netbiosNodeType(value: number);
    resetNetbiosNodeType(): void;
    get netbiosNodeTypeInput(): number | undefined;
    private _ntpServers?;
    get ntpServers(): string[];
    set ntpServers(value: string[]);
    resetNtpServers(): void;
    get ntpServersInput(): string[] | undefined;
    private _tags?;
    get tags(): Ec2DhcpOptionsTags[];
    set tags(value: Ec2DhcpOptionsTags[]);
    resetTags(): void;
    get tagsInput(): Ec2DhcpOptionsTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
