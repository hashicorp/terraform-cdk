import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGroundstationDataflowEndpointGroupsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_dataflow_endpoint_groups.html awscc_groundstation_dataflow_endpoint_groups}
*/
export declare class DataAwsccGroundstationDataflowEndpointGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_dataflow_endpoint_groups.html awscc_groundstation_dataflow_endpoint_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGroundstationDataflowEndpointGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccGroundstationDataflowEndpointGroupsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
