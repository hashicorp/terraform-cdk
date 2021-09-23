import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEcsClustersConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_clusters.html awscc_ecs_clusters}
*/
export declare class DataAwsccEcsClusters extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_clusters.html awscc_ecs_clusters} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcsClustersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEcsClustersConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
