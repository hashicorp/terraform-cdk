import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGroundstationDataflowEndpointGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_dataflow_endpoint_group.html#id DataAwsccGroundstationDataflowEndpointGroup#id}
    */
    readonly id: string;
}
export declare class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress extends cdktf.ComplexComputedList {
    get name(): string;
    get port(): number;
}
export declare function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress): any;
export declare class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint extends cdktf.ComplexComputedList {
    get address(): any;
    get mtu(): number;
    get name(): string;
}
export declare function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpointToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsEndpoint): any;
export declare class DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails extends cdktf.ComplexComputedList {
    get roleArn(): string;
    get securityGroupIds(): string[];
    get subnetIds(): string[];
}
export declare function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails): any;
export declare class DataAwsccGroundstationDataflowEndpointGroupEndpointDetails extends cdktf.ComplexComputedList {
    get endpoint(): any;
    get securityDetails(): any;
}
export declare function dataAwsccGroundstationDataflowEndpointGroupEndpointDetailsToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupEndpointDetails): any;
export declare class DataAwsccGroundstationDataflowEndpointGroupTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccGroundstationDataflowEndpointGroupTagsToTerraform(struct?: DataAwsccGroundstationDataflowEndpointGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_dataflow_endpoint_group.html awscc_groundstation_dataflow_endpoint_group}
*/
export declare class DataAwsccGroundstationDataflowEndpointGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_dataflow_endpoint_group.html awscc_groundstation_dataflow_endpoint_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGroundstationDataflowEndpointGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccGroundstationDataflowEndpointGroupConfig);
    get arn(): string;
    get endpointDetails(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
