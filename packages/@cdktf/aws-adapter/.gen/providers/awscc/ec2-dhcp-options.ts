// https://www.terraform.io/docs/providers/awscc/r/ec2_dhcp_options.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function ec2DhcpOptionsTagsToTerraform(struct?: Ec2DhcpOptionsTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_dhcp_options.html awscc_ec2_dhcp_options}
*/
export class Ec2DhcpOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_dhcp_options";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_dhcp_options.html awscc_ec2_dhcp_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2DhcpOptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ec2DhcpOptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_dhcp_options',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domainName = config.domainName;
    this._domainNameServers = config.domainNameServers;
    this._netbiosNameServers = config.netbiosNameServers;
    this._netbiosNodeType = config.netbiosNodeType;
    this._ntpServers = config.ntpServers;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcp_options_id - computed: true, optional: false, required: false
  public get dhcpOptionsId() {
    return this.getStringAttribute('dhcp_options_id');
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // domain_name_servers - computed: true, optional: true, required: false
  private _domainNameServers?: string[];
  public get domainNameServers() {
    return this.getListAttribute('domain_name_servers');
  }
  public set domainNameServers(value: string[]) {
    this._domainNameServers = value;
  }
  public resetDomainNameServers() {
    this._domainNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameServersInput() {
    return this._domainNameServers
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // netbios_name_servers - computed: true, optional: true, required: false
  private _netbiosNameServers?: string[];
  public get netbiosNameServers() {
    return this.getListAttribute('netbios_name_servers');
  }
  public set netbiosNameServers(value: string[]) {
    this._netbiosNameServers = value;
  }
  public resetNetbiosNameServers() {
    this._netbiosNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosNameServersInput() {
    return this._netbiosNameServers
  }

  // netbios_node_type - computed: true, optional: true, required: false
  private _netbiosNodeType?: number;
  public get netbiosNodeType() {
    return this.getNumberAttribute('netbios_node_type');
  }
  public set netbiosNodeType(value: number) {
    this._netbiosNodeType = value;
  }
  public resetNetbiosNodeType() {
    this._netbiosNodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosNodeTypeInput() {
    return this._netbiosNodeType
  }

  // ntp_servers - computed: true, optional: true, required: false
  private _ntpServers?: string[];
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  public resetNtpServers() {
    this._ntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Ec2DhcpOptionsTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Ec2DhcpOptionsTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_name_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._domainNameServers),
      netbios_name_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._netbiosNameServers),
      netbios_node_type: cdktf.numberToTerraform(this._netbiosNodeType),
      ntp_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._ntpServers),
      tags: cdktf.listMapper(ec2DhcpOptionsTagsToTerraform)(this._tags),
    };
  }
}
