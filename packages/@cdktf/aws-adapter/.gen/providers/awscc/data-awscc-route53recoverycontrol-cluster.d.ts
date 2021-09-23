import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53RecoverycontrolClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_cluster.html#id DataAwsccRoute53RecoverycontrolCluster#id}
    */
    readonly id: string;
}
export declare class DataAwsccRoute53RecoverycontrolClusterClusterEndpoints extends cdktf.ComplexComputedList {
    get endpoint(): string;
    get region(): string;
}
export declare function dataAwsccRoute53RecoverycontrolClusterClusterEndpointsToTerraform(struct?: DataAwsccRoute53RecoverycontrolClusterClusterEndpoints): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_cluster.html awscc_route53recoverycontrol_cluster}
*/
export declare class DataAwsccRoute53RecoverycontrolCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_cluster.html awscc_route53recoverycontrol_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53RecoverycontrolClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoverycontrolClusterConfig);
    get clusterArn(): string;
    get clusterEndpoints(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
