import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2DhcpOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_dhcp_options.html#id DataAwsccEc2DhcpOptions#id}
    */
    readonly id: string;
}
export declare class DataAwsccEc2DhcpOptionsTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEc2DhcpOptionsTagsToTerraform(struct?: DataAwsccEc2DhcpOptionsTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_dhcp_options.html awscc_ec2_dhcp_options}
*/
export declare class DataAwsccEc2DhcpOptions extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_dhcp_options.html awscc_ec2_dhcp_options} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2DhcpOptionsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2DhcpOptionsConfig);
    get dhcpOptionsId(): string;
    get domainName(): string;
    get domainNameServers(): string[];
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get netbiosNameServers(): string[];
    get netbiosNodeType(): number;
    get ntpServers(): string[];
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
