import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotwirelessDestinationsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_destinations.html awscc_iotwireless_destinations}
*/
export declare class DataAwsccIotwirelessDestinations extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_destinations.html awscc_iotwireless_destinations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotwirelessDestinationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIotwirelessDestinationsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
