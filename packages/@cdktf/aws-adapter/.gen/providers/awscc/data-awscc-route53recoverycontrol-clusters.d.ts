import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53RecoverycontrolClustersConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_clusters.html awscc_route53recoverycontrol_clusters}
*/
export declare class DataAwsccRoute53RecoverycontrolClusters extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_clusters.html awscc_route53recoverycontrol_clusters} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53RecoverycontrolClustersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccRoute53RecoverycontrolClustersConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
