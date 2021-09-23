// https://www.terraform.io/docs/providers/awscc/d/elasticache_global_replication_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccElasticacheGlobalReplicationGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_global_replication_group.html#id DataAwsccElasticacheGlobalReplicationGroup#id}
  */
  readonly id: string;
}
export class DataAwsccElasticacheGlobalReplicationGroupMembers extends cdktf.ComplexComputedList {

  // replication_group_id - computed: true, optional: false, required: false
  public get replicationGroupId() {
    return this.getStringAttribute('replication_group_id');
  }

  // replication_group_region - computed: true, optional: false, required: false
  public get replicationGroupRegion() {
    return this.getStringAttribute('replication_group_region');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export function dataAwsccElasticacheGlobalReplicationGroupMembersToTerraform(struct?: DataAwsccElasticacheGlobalReplicationGroupMembers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    replication_group_id: cdktf.stringToTerraform(struct!.replicationGroupId),
    replication_group_region: cdktf.stringToTerraform(struct!.replicationGroupRegion),
    role: cdktf.stringToTerraform(struct!.role),
  }
}

export class DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations extends cdktf.ComplexComputedList {

  // node_group_id - computed: true, optional: false, required: false
  public get nodeGroupId() {
    return this.getStringAttribute('node_group_id');
  }

  // preferred_availability_zones - computed: true, optional: false, required: false
  public get preferredAvailabilityZones() {
    return this.getListAttribute('preferred_availability_zones');
  }
}

export function dataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsToTerraform(struct?: DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_group_id: cdktf.stringToTerraform(struct!.nodeGroupId),
    preferred_availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(struct!.preferredAvailabilityZones),
  }
}

export class DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations extends cdktf.ComplexComputedList {

  // replication_group_id - computed: true, optional: false, required: false
  public get replicationGroupId() {
    return this.getStringAttribute('replication_group_id');
  }

  // replication_group_region - computed: true, optional: false, required: false
  public get replicationGroupRegion() {
    return this.getStringAttribute('replication_group_region');
  }

  // resharding_configurations - computed: true, optional: false, required: false
  public get reshardingConfigurations() {
    return this.interpolationForAttribute('resharding_configurations') as any;
  }
}

export function dataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsToTerraform(struct?: DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    replication_group_id: cdktf.stringToTerraform(struct!.replicationGroupId),
    replication_group_region: cdktf.stringToTerraform(struct!.replicationGroupRegion),
    resharding_configurations: cdktf.listMapper(dataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsToTerraform)(struct!.reshardingConfigurations),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_global_replication_group.html awscc_elasticache_global_replication_group}
*/
export class DataAwsccElasticacheGlobalReplicationGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_elasticache_global_replication_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/elasticache_global_replication_group.html awscc_elasticache_global_replication_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccElasticacheGlobalReplicationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccElasticacheGlobalReplicationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elasticache_global_replication_group',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_failover_enabled - computed: true, optional: false, required: false
  public get automaticFailoverEnabled() {
    return this.getBooleanAttribute('automatic_failover_enabled');
  }

  // cache_node_type - computed: true, optional: false, required: false
  public get cacheNodeType() {
    return this.getStringAttribute('cache_node_type');
  }

  // cache_parameter_group_name - computed: true, optional: false, required: false
  public get cacheParameterGroupName() {
    return this.getStringAttribute('cache_parameter_group_name');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // global_node_group_count - computed: true, optional: false, required: false
  public get globalNodeGroupCount() {
    return this.getNumberAttribute('global_node_group_count');
  }

  // global_replication_group_description - computed: true, optional: false, required: false
  public get globalReplicationGroupDescription() {
    return this.getStringAttribute('global_replication_group_description');
  }

  // global_replication_group_id - computed: true, optional: false, required: false
  public get globalReplicationGroupId() {
    return this.getStringAttribute('global_replication_group_id');
  }

  // global_replication_group_id_suffix - computed: true, optional: false, required: false
  public get globalReplicationGroupIdSuffix() {
    return this.getStringAttribute('global_replication_group_id_suffix');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // members - computed: true, optional: false, required: false
  public get members() {
    return this.interpolationForAttribute('members') as any;
  }

  // regional_configurations - computed: true, optional: false, required: false
  public get regionalConfigurations() {
    return this.interpolationForAttribute('regional_configurations') as any;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
