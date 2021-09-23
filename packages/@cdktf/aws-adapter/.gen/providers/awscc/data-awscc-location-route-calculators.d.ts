import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLocationRouteCalculatorsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/location_route_calculators.html awscc_location_route_calculators}
*/
export declare class DataAwsccLocationRouteCalculators extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/location_route_calculators.html awscc_location_route_calculators} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLocationRouteCalculatorsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccLocationRouteCalculatorsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
