import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecoverycontrolClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Name of a Cluster. You can use any non-white space character in the name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_cluster.html#name Route53RecoverycontrolCluster#name}
    */
    readonly name?: string;
}
export declare class Route53RecoverycontrolClusterClusterEndpoints extends cdktf.ComplexComputedList {
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    resetEndpoint(): void;
    get endpointInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
}
export declare function route53RecoverycontrolClusterClusterEndpointsToTerraform(struct?: Route53RecoverycontrolClusterClusterEndpoints): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_cluster.html awscc_route53recoverycontrol_cluster}
*/
export declare class Route53RecoverycontrolCluster extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_cluster.html awscc_route53recoverycontrol_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolClusterConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Route53RecoverycontrolClusterConfig);
    get clusterArn(): string;
    get clusterEndpoints(): any;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
