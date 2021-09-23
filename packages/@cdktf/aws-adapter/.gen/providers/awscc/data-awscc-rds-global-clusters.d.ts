import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRdsGlobalClustersConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/rds_global_clusters.html awscc_rds_global_clusters}
*/
export declare class DataAwsccRdsGlobalClusters extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/rds_global_clusters.html awscc_rds_global_clusters} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRdsGlobalClustersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccRdsGlobalClustersConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
