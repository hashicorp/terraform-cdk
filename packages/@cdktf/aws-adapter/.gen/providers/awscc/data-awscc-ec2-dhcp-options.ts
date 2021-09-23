// https://www.terraform.io/docs/providers/awscc/d/ec2_dhcp_options.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEc2DhcpOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_dhcp_options.html#id DataAwsccEc2DhcpOptions#id}
  */
  readonly id: string;
}
export class DataAwsccEc2DhcpOptionsTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEc2DhcpOptionsTagsToTerraform(struct?: DataAwsccEc2DhcpOptionsTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_dhcp_options.html awscc_ec2_dhcp_options}
*/
export class DataAwsccEc2DhcpOptions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_dhcp_options";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_dhcp_options.html awscc_ec2_dhcp_options} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2DhcpOptionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2DhcpOptionsConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcp_options_id - computed: true, optional: false, required: false
  public get dhcpOptionsId() {
    return this.getStringAttribute('dhcp_options_id');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_name_servers - computed: true, optional: false, required: false
  public get domainNameServers() {
    return this.getListAttribute('domain_name_servers');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // netbios_name_servers - computed: true, optional: false, required: false
  public get netbiosNameServers() {
    return this.getListAttribute('netbios_name_servers');
  }

  // netbios_node_type - computed: true, optional: false, required: false
  public get netbiosNodeType() {
    return this.getNumberAttribute('netbios_node_type');
  }

  // ntp_servers - computed: true, optional: false, required: false
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
