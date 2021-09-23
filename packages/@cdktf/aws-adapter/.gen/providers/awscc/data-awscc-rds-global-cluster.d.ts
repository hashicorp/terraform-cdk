import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRdsGlobalClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/rds_global_cluster.html#id DataAwsccRdsGlobalCluster#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/rds_global_cluster.html awscc_rds_global_cluster}
*/
export declare class DataAwsccRdsGlobalCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/rds_global_cluster.html awscc_rds_global_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRdsGlobalClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRdsGlobalClusterConfig);
    get deletionProtection(): cdktf.IResolvable;
    get engine(): string;
    get engineVersion(): string;
    get globalClusterIdentifier(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get sourceDbClusterIdentifier(): string;
    get storageEncrypted(): cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
