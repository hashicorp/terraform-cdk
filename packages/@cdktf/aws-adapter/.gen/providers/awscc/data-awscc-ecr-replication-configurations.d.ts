import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEcrReplicationConfigurationsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecr_replication_configurations.html awscc_ecr_replication_configurations}
*/
export declare class DataAwsccEcrReplicationConfigurations extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecr_replication_configurations.html awscc_ecr_replication_configurations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcrReplicationConfigurationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEcrReplicationConfigurationsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
