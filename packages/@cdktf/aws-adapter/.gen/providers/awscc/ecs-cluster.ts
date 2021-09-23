// https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#capacity_providers EcsCluster#capacity_providers}
  */
  readonly capacityProviders?: string[];
  /**
  * A user-generated string that you use to identify your cluster. If you don't specify a name, AWS CloudFormation generates a unique physical ID for the name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#cluster_name EcsCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#cluster_settings EcsCluster#cluster_settings}
  */
  readonly clusterSettings?: EcsClusterClusterSettings[];
  /**
  * The configurations to be set at cluster level.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#configuration EcsCluster#configuration}
  */
  readonly configuration?: EcsClusterConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#default_capacity_provider_strategy EcsCluster#default_capacity_provider_strategy}
  */
  readonly defaultCapacityProviderStrategy?: EcsClusterDefaultCapacityProviderStrategy[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#tags EcsCluster#tags}
  */
  readonly tags?: EcsClusterTags[];
}
export interface EcsClusterClusterSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#name EcsCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#value EcsCluster#value}
  */
  readonly value?: string;
}

export function ecsClusterClusterSettingsToTerraform(struct?: EcsClusterClusterSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#cloudwatch_encryption_enabled EcsCluster#cloudwatch_encryption_enabled}
  */
  readonly cloudwatchEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#cloudwatch_log_group_name EcsCluster#cloudwatch_log_group_name}
  */
  readonly cloudwatchLogGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#s3_bucket_name EcsCluster#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#s3_encryption_enabled EcsCluster#s3_encryption_enabled}
  */
  readonly s3EncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#s3_key_prefix EcsCluster#s3_key_prefix}
  */
  readonly s3KeyPrefix?: string;
}

export function ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_encryption_enabled: cdktf.booleanToTerraform(struct!.cloudwatchEncryptionEnabled),
    cloudwatch_log_group_name: cdktf.stringToTerraform(struct!.cloudwatchLogGroupName),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_encryption_enabled: cdktf.booleanToTerraform(struct!.s3EncryptionEnabled),
    s3_key_prefix: cdktf.stringToTerraform(struct!.s3KeyPrefix),
  }
}

export interface EcsClusterConfigurationExecuteCommandConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#kms_key_id EcsCluster#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The session logging configuration for ExecuteCommand.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#log_configuration EcsCluster#log_configuration}
  */
  readonly logConfiguration?: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#logging EcsCluster#logging}
  */
  readonly logging?: string;
}

export function ecsClusterConfigurationExecuteCommandConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    log_configuration: ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct!.logConfiguration),
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}

export interface EcsClusterConfiguration {
  /**
  * The configuration for ExecuteCommand.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#execute_command_configuration EcsCluster#execute_command_configuration}
  */
  readonly executeCommandConfiguration?: EcsClusterConfigurationExecuteCommandConfiguration;
}

export function ecsClusterConfigurationToTerraform(struct?: EcsClusterConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    execute_command_configuration: ecsClusterConfigurationExecuteCommandConfigurationToTerraform(struct!.executeCommandConfiguration),
  }
}

export interface EcsClusterDefaultCapacityProviderStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#base EcsCluster#base}
  */
  readonly base?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#capacity_provider EcsCluster#capacity_provider}
  */
  readonly capacityProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#weight EcsCluster#weight}
  */
  readonly weight?: number;
}

export function ecsClusterDefaultCapacityProviderStrategyToTerraform(struct?: EcsClusterDefaultCapacityProviderStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    base: cdktf.numberToTerraform(struct!.base),
    capacity_provider: cdktf.stringToTerraform(struct!.capacityProvider),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface EcsClusterTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#key EcsCluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html#value EcsCluster#value}
  */
  readonly value?: string;
}

export function ecsClusterTagsToTerraform(struct?: EcsClusterTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html awscc_ecs_cluster}
*/
export class EcsCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecs_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecs_cluster.html awscc_ecs_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EcsClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecs_cluster',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._capacityProviders = config.capacityProviders;
    this._clusterName = config.clusterName;
    this._clusterSettings = config.clusterSettings;
    this._configuration = config.configuration;
    this._defaultCapacityProviderStrategy = config.defaultCapacityProviderStrategy;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity_providers - computed: false, optional: true, required: false
  private _capacityProviders?: string[];
  public get capacityProviders() {
    return this.getListAttribute('capacity_providers');
  }
  public set capacityProviders(value: string[] ) {
    this._capacityProviders = value;
  }
  public resetCapacityProviders() {
    this._capacityProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProvidersInput() {
    return this._capacityProviders
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string;
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
  }

  // cluster_settings - computed: false, optional: true, required: false
  private _clusterSettings?: EcsClusterClusterSettings[];
  public get clusterSettings() {
    return this.interpolationForAttribute('cluster_settings') as any;
  }
  public set clusterSettings(value: EcsClusterClusterSettings[] ) {
    this._clusterSettings = value;
  }
  public resetClusterSettings() {
    this._clusterSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSettingsInput() {
    return this._clusterSettings
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: EcsClusterConfiguration;
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }
  public set configuration(value: EcsClusterConfiguration ) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // default_capacity_provider_strategy - computed: false, optional: true, required: false
  private _defaultCapacityProviderStrategy?: EcsClusterDefaultCapacityProviderStrategy[];
  public get defaultCapacityProviderStrategy() {
    return this.interpolationForAttribute('default_capacity_provider_strategy') as any;
  }
  public set defaultCapacityProviderStrategy(value: EcsClusterDefaultCapacityProviderStrategy[] ) {
    this._defaultCapacityProviderStrategy = value;
  }
  public resetDefaultCapacityProviderStrategy() {
    this._defaultCapacityProviderStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCapacityProviderStrategyInput() {
    return this._defaultCapacityProviderStrategy
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: EcsClusterTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: EcsClusterTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_providers: cdktf.listMapper(cdktf.stringToTerraform)(this._capacityProviders),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_settings: cdktf.listMapper(ecsClusterClusterSettingsToTerraform)(this._clusterSettings),
      configuration: ecsClusterConfigurationToTerraform(this._configuration),
      default_capacity_provider_strategy: cdktf.listMapper(ecsClusterDefaultCapacityProviderStrategyToTerraform)(this._defaultCapacityProviderStrategy),
      tags: cdktf.listMapper(ecsClusterTagsToTerraform)(this._tags),
    };
  }
}
