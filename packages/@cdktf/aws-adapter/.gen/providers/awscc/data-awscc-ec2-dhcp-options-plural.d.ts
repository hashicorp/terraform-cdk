import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2DhcpOptionsPluralConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_dhcp_options_plural.html awscc_ec2_dhcp_options_plural}
*/
export declare class DataAwsccEc2DhcpOptionsPlural extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_dhcp_options_plural.html awscc_ec2_dhcp_options_plural} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2DhcpOptionsPluralConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEc2DhcpOptionsPluralConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
