// https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticacheGlobalReplicationGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * AutomaticFailoverEnabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}
  */
  readonly automaticFailoverEnabled?: boolean | cdktf.IResolvable;
  /**
  * The cache node type of the Global Datastore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}
  */
  readonly cacheNodeType?: string;
  /**
  * Cache parameter group name to use for the new engine version. This parameter cannot be modified independently.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#cache_parameter_group_name ElasticacheGlobalReplicationGroup#cache_parameter_group_name}
  */
  readonly cacheParameterGroupName?: string;
  /**
  * The engine version of the Global Datastore.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#engine_version ElasticacheGlobalReplicationGroup#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Indicates the number of node groups in the Global Datastore.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#global_node_group_count ElasticacheGlobalReplicationGroup#global_node_group_count}
  */
  readonly globalNodeGroupCount?: number;
  /**
  * The optional description of the Global Datastore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}
  */
  readonly globalReplicationGroupDescription?: string;
  /**
  * The suffix name of a Global Datastore. Amazon ElastiCache automatically applies a prefix to the Global Datastore ID when it is created. Each AWS Region has its own prefix. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}
  */
  readonly globalReplicationGroupIdSuffix?: string;
  /**
  * The replication groups that comprise the Global Datastore.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#members ElasticacheGlobalReplicationGroup#members}
  */
  readonly members: ElasticacheGlobalReplicationGroupMembers[];
  /**
  * Describes the replication group IDs, the AWS regions where they are stored and the shard configuration for each that comprise the Global Datastore 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#regional_configurations ElasticacheGlobalReplicationGroup#regional_configurations}
  */
  readonly regionalConfigurations?: ElasticacheGlobalReplicationGroupRegionalConfigurations[];
}
export interface ElasticacheGlobalReplicationGroupMembers {
  /**
  * Regionally unique identifier for the member i.e. ReplicationGroupId.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#replication_group_id ElasticacheGlobalReplicationGroup#replication_group_id}
  */
  readonly replicationGroupId?: string;
  /**
  * The AWS region of the Global Datastore member.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#replication_group_region ElasticacheGlobalReplicationGroup#replication_group_region}
  */
  readonly replicationGroupRegion?: string;
  /**
  * Indicates the role of the member, primary or secondary.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#role ElasticacheGlobalReplicationGroup#role}
  */
  readonly role?: string;
}

export function elasticacheGlobalReplicationGroupMembersToTerraform(struct?: ElasticacheGlobalReplicationGroupMembers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    replication_group_id: cdktf.stringToTerraform(struct!.replicationGroupId),
    replication_group_region: cdktf.stringToTerraform(struct!.replicationGroupRegion),
    role: cdktf.stringToTerraform(struct!.role),
  }
}

export interface ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations {
  /**
  * Unique identifier for the Node Group. This is either auto-generated by ElastiCache (4-digit id) or a user supplied id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#node_group_id ElasticacheGlobalReplicationGroup#node_group_id}
  */
  readonly nodeGroupId?: string;
  /**
  * A list of preferred availability zones for the nodes of new node groups.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#preferred_availability_zones ElasticacheGlobalReplicationGroup#preferred_availability_zones}
  */
  readonly preferredAvailabilityZones?: string[];
}

export function elasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsToTerraform(struct?: ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_group_id: cdktf.stringToTerraform(struct!.nodeGroupId),
    preferred_availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(struct!.preferredAvailabilityZones),
  }
}

export interface ElasticacheGlobalReplicationGroupRegionalConfigurations {
  /**
  * The replication group id of the Global Datastore member.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#replication_group_id ElasticacheGlobalReplicationGroup#replication_group_id}
  */
  readonly replicationGroupId?: string;
  /**
  * The AWS region of the Global Datastore member.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#replication_group_region ElasticacheGlobalReplicationGroup#replication_group_region}
  */
  readonly replicationGroupRegion?: string;
  /**
  * A list of PreferredAvailabilityZones objects that specifies the configuration of a node group in the resharded cluster. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html#resharding_configurations ElasticacheGlobalReplicationGroup#resharding_configurations}
  */
  readonly reshardingConfigurations?: ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations[];
}

export function elasticacheGlobalReplicationGroupRegionalConfigurationsToTerraform(struct?: ElasticacheGlobalReplicationGroupRegionalConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    replication_group_id: cdktf.stringToTerraform(struct!.replicationGroupId),
    replication_group_region: cdktf.stringToTerraform(struct!.replicationGroupRegion),
    resharding_configurations: cdktf.listMapper(elasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsToTerraform)(struct!.reshardingConfigurations),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html awscc_elasticache_global_replication_group}
*/
export class ElasticacheGlobalReplicationGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_elasticache_global_replication_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_global_replication_group.html awscc_elasticache_global_replication_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticacheGlobalReplicationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticacheGlobalReplicationGroupConfig) {
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
    this._automaticFailoverEnabled = config.automaticFailoverEnabled;
    this._cacheNodeType = config.cacheNodeType;
    this._cacheParameterGroupName = config.cacheParameterGroupName;
    this._engineVersion = config.engineVersion;
    this._globalNodeGroupCount = config.globalNodeGroupCount;
    this._globalReplicationGroupDescription = config.globalReplicationGroupDescription;
    this._globalReplicationGroupIdSuffix = config.globalReplicationGroupIdSuffix;
    this._members = config.members;
    this._regionalConfigurations = config.regionalConfigurations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_failover_enabled - computed: false, optional: true, required: false
  private _automaticFailoverEnabled?: boolean | cdktf.IResolvable;
  public get automaticFailoverEnabled() {
    return this.getBooleanAttribute('automatic_failover_enabled');
  }
  public set automaticFailoverEnabled(value: boolean | cdktf.IResolvable ) {
    this._automaticFailoverEnabled = value;
  }
  public resetAutomaticFailoverEnabled() {
    this._automaticFailoverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFailoverEnabledInput() {
    return this._automaticFailoverEnabled
  }

  // cache_node_type - computed: false, optional: true, required: false
  private _cacheNodeType?: string;
  public get cacheNodeType() {
    return this.getStringAttribute('cache_node_type');
  }
  public set cacheNodeType(value: string ) {
    this._cacheNodeType = value;
  }
  public resetCacheNodeType() {
    this._cacheNodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNodeTypeInput() {
    return this._cacheNodeType
  }

  // cache_parameter_group_name - computed: false, optional: true, required: false
  private _cacheParameterGroupName?: string;
  public get cacheParameterGroupName() {
    return this.getStringAttribute('cache_parameter_group_name');
  }
  public set cacheParameterGroupName(value: string ) {
    this._cacheParameterGroupName = value;
  }
  public resetCacheParameterGroupName() {
    this._cacheParameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheParameterGroupNameInput() {
    return this._cacheParameterGroupName
  }

  // engine_version - computed: false, optional: true, required: false
  private _engineVersion?: string;
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string ) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion
  }

  // global_node_group_count - computed: false, optional: true, required: false
  private _globalNodeGroupCount?: number;
  public get globalNodeGroupCount() {
    return this.getNumberAttribute('global_node_group_count');
  }
  public set globalNodeGroupCount(value: number ) {
    this._globalNodeGroupCount = value;
  }
  public resetGlobalNodeGroupCount() {
    this._globalNodeGroupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNodeGroupCountInput() {
    return this._globalNodeGroupCount
  }

  // global_replication_group_description - computed: false, optional: true, required: false
  private _globalReplicationGroupDescription?: string;
  public get globalReplicationGroupDescription() {
    return this.getStringAttribute('global_replication_group_description');
  }
  public set globalReplicationGroupDescription(value: string ) {
    this._globalReplicationGroupDescription = value;
  }
  public resetGlobalReplicationGroupDescription() {
    this._globalReplicationGroupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalReplicationGroupDescriptionInput() {
    return this._globalReplicationGroupDescription
  }

  // global_replication_group_id - computed: true, optional: false, required: false
  public get globalReplicationGroupId() {
    return this.getStringAttribute('global_replication_group_id');
  }

  // global_replication_group_id_suffix - computed: false, optional: true, required: false
  private _globalReplicationGroupIdSuffix?: string;
  public get globalReplicationGroupIdSuffix() {
    return this.getStringAttribute('global_replication_group_id_suffix');
  }
  public set globalReplicationGroupIdSuffix(value: string ) {
    this._globalReplicationGroupIdSuffix = value;
  }
  public resetGlobalReplicationGroupIdSuffix() {
    this._globalReplicationGroupIdSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalReplicationGroupIdSuffixInput() {
    return this._globalReplicationGroupIdSuffix
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: false, optional: false, required: true
  private _members: ElasticacheGlobalReplicationGroupMembers[];
  public get members() {
    return this.interpolationForAttribute('members') as any;
  }
  public set members(value: ElasticacheGlobalReplicationGroupMembers[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members
  }

  // regional_configurations - computed: false, optional: true, required: false
  private _regionalConfigurations?: ElasticacheGlobalReplicationGroupRegionalConfigurations[];
  public get regionalConfigurations() {
    return this.interpolationForAttribute('regional_configurations') as any;
  }
  public set regionalConfigurations(value: ElasticacheGlobalReplicationGroupRegionalConfigurations[] ) {
    this._regionalConfigurations = value;
  }
  public resetRegionalConfigurations() {
    this._regionalConfigurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalConfigurationsInput() {
    return this._regionalConfigurations
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
      automatic_failover_enabled: cdktf.booleanToTerraform(this._automaticFailoverEnabled),
      cache_node_type: cdktf.stringToTerraform(this._cacheNodeType),
      cache_parameter_group_name: cdktf.stringToTerraform(this._cacheParameterGroupName),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      global_node_group_count: cdktf.numberToTerraform(this._globalNodeGroupCount),
      global_replication_group_description: cdktf.stringToTerraform(this._globalReplicationGroupDescription),
      global_replication_group_id_suffix: cdktf.stringToTerraform(this._globalReplicationGroupIdSuffix),
      members: cdktf.listMapper(elasticacheGlobalReplicationGroupMembersToTerraform)(this._members),
      regional_configurations: cdktf.listMapper(elasticacheGlobalReplicationGroupRegionalConfigurationsToTerraform)(this._regionalConfigurations),
    };
  }
}
