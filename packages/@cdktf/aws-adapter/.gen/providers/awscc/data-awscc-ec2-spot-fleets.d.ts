import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2SpotFleetsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_spot_fleets.html awscc_ec2_spot_fleets}
*/
export declare class DataAwsccEc2SpotFleets extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_spot_fleets.html awscc_ec2_spot_fleets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2SpotFleetsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEc2SpotFleetsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
