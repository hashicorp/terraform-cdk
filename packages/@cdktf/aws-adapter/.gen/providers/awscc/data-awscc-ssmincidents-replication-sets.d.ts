import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSsmincidentsReplicationSetsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ssmincidents_replication_sets.html awscc_ssmincidents_replication_sets}
*/
export declare class DataAwsccSsmincidentsReplicationSets extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ssmincidents_replication_sets.html awscc_ssmincidents_replication_sets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSsmincidentsReplicationSetsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccSsmincidentsReplicationSetsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
