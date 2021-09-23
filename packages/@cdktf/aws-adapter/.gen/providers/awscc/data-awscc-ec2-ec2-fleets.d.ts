import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2Ec2FleetsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_ec2_fleets.html awscc_ec2_ec2_fleets}
*/
export declare class DataAwsccEc2Ec2Fleets extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_ec2_fleets.html awscc_ec2_ec2_fleets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2Ec2FleetsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEc2Ec2FleetsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
