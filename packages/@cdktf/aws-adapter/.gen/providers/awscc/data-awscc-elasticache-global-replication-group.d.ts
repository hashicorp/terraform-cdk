import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccElasticacheGlobalReplicationGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_global_replication_group.html#id DataAwsccElasticacheGlobalReplicationGroup#id}
    */
    readonly id: string;
}
export declare class DataAwsccElasticacheGlobalReplicationGroupMembers extends cdktf.ComplexComputedList {
    get replicationGroupId(): string;
    get replicationGroupRegion(): string;
    get role(): string;
}
export declare function dataAwsccElasticacheGlobalReplicationGroupMembersToTerraform(struct?: DataAwsccElasticacheGlobalReplicationGroupMembers): any;
export declare class DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations extends cdktf.ComplexComputedList {
    get nodeGroupId(): string;
    get preferredAvailabilityZones(): string[];
}
export declare function dataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsToTerraform(struct?: DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations): any;
export declare class DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations extends cdktf.ComplexComputedList {
    get replicationGroupId(): string;
    get replicationGroupRegion(): string;
    get reshardingConfigurations(): any;
}
export declare function dataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsToTerraform(struct?: DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_global_replication_group.html awscc_elasticache_global_replication_group}
*/
export declare class DataAwsccElasticacheGlobalReplicationGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_global_replication_group.html awscc_elasticache_global_replication_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccElasticacheGlobalReplicationGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccElasticacheGlobalReplicationGroupConfig);
    get automaticFailoverEnabled(): cdktf.IResolvable;
    get cacheNodeType(): string;
    get cacheParameterGroupName(): string;
    get engineVersion(): string;
    get globalNodeGroupCount(): number;
    get globalReplicationGroupDescription(): string;
    get globalReplicationGroupId(): string;
    get globalReplicationGroupIdSuffix(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get members(): any;
    get regionalConfigurations(): any;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
