import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GroundstationDataflowEndpointGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#endpoint_details GroundstationDataflowEndpointGroup#endpoint_details}
    */
    readonly endpointDetails: GroundstationDataflowEndpointGroupEndpointDetails[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#tags GroundstationDataflowEndpointGroup#tags}
    */
    readonly tags?: GroundstationDataflowEndpointGroupTags[];
}
export interface GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#name GroundstationDataflowEndpointGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#port GroundstationDataflowEndpointGroup#port}
    */
    readonly port?: number;
}
export declare function groundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress): any;
export interface GroundstationDataflowEndpointGroupEndpointDetailsEndpoint {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#address GroundstationDataflowEndpointGroup#address}
    */
    readonly address?: GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#mtu GroundstationDataflowEndpointGroup#mtu}
    */
    readonly mtu?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#name GroundstationDataflowEndpointGroup#name}
    */
    readonly name?: string;
}
export declare function groundstationDataflowEndpointGroupEndpointDetailsEndpointToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsEndpoint): any;
export interface GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#role_arn GroundstationDataflowEndpointGroup#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#security_group_ids GroundstationDataflowEndpointGroup#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#subnet_ids GroundstationDataflowEndpointGroup#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export declare function groundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails): any;
export interface GroundstationDataflowEndpointGroupEndpointDetails {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#endpoint GroundstationDataflowEndpointGroup#endpoint}
    */
    readonly endpoint?: GroundstationDataflowEndpointGroupEndpointDetailsEndpoint;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#security_details GroundstationDataflowEndpointGroup#security_details}
    */
    readonly securityDetails?: GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails;
}
export declare function groundstationDataflowEndpointGroupEndpointDetailsToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetails): any;
export interface GroundstationDataflowEndpointGroupTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#key GroundstationDataflowEndpointGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html#value GroundstationDataflowEndpointGroup#value}
    */
    readonly value?: string;
}
export declare function groundstationDataflowEndpointGroupTagsToTerraform(struct?: GroundstationDataflowEndpointGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html awscc_groundstation_dataflow_endpoint_group}
*/
export declare class GroundstationDataflowEndpointGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_dataflow_endpoint_group.html awscc_groundstation_dataflow_endpoint_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GroundstationDataflowEndpointGroupConfig
    */
    constructor(scope: Construct, id: string, config: GroundstationDataflowEndpointGroupConfig);
    get arn(): string;
    private _endpointDetails;
    get endpointDetails(): GroundstationDataflowEndpointGroupEndpointDetails[];
    set endpointDetails(value: GroundstationDataflowEndpointGroupEndpointDetails[]);
    get endpointDetailsInput(): GroundstationDataflowEndpointGroupEndpointDetails[];
    get id(): string;
    private _tags?;
    get tags(): GroundstationDataflowEndpointGroupTags[];
    set tags(value: GroundstationDataflowEndpointGroupTags[]);
    resetTags(): void;
    get tagsInput(): GroundstationDataflowEndpointGroupTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
