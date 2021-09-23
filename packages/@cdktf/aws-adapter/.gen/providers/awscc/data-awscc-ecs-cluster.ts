// https://www.terraform.io/docs/providers/awscc/d/ecs_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEcsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecs_cluster.html#id DataAwsccEcsCluster#id}
  */
  readonly id: string;
}
export class DataAwsccEcsClusterClusterSettings extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEcsClusterClusterSettingsToTerraform(struct?: DataAwsccEcsClusterClusterSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccEcsClusterConfigurationExecuteCommandConfigurationLogConfiguration extends cdktf.ComplexComputedList {

  // cloudwatch_encryption_enabled - computed: true, optional: false, required: false
  public get cloudwatchEncryptionEnabled() {
    return this.getBooleanAttribute('cloudwatch_encryption_enabled');
  }

  // cloudwatch_log_group_name - computed: true, optional: false, required: false
  public get cloudwatchLogGroupName() {
    return this.getStringAttribute('cloudwatch_log_group_name');
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // s3_encryption_enabled - computed: true, optional: false, required: false
  public get s3EncryptionEnabled() {
    return this.getBooleanAttribute('s3_encryption_enabled');
  }

  // s3_key_prefix - computed: true, optional: false, required: false
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
}

export function dataAwsccEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct?: DataAwsccEcsClusterConfigurationExecuteCommandConfigurationLogConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_encryption_enabled: cdktf.booleanToTerraform(struct!.cloudwatchEncryptionEnabled),
    cloudwatch_log_group_name: cdktf.stringToTerraform(struct!.cloudwatchLogGroupName),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_encryption_enabled: cdktf.booleanToTerraform(struct!.s3EncryptionEnabled),
    s3_key_prefix: cdktf.stringToTerraform(struct!.s3KeyPrefix),
  }
}

export class DataAwsccEcsClusterConfigurationExecuteCommandConfiguration extends cdktf.ComplexComputedList {

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // log_configuration - computed: true, optional: false, required: false
  public get logConfiguration() {
    return this.interpolationForAttribute('log_configuration') as any;
  }

  // logging - computed: true, optional: false, required: false
  public get logging() {
    return this.getStringAttribute('logging');
  }
}

export function dataAwsccEcsClusterConfigurationExecuteCommandConfigurationToTerraform(struct?: DataAwsccEcsClusterConfigurationExecuteCommandConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    log_configuration: dataAwsccEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct!.logConfiguration),
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}

export class DataAwsccEcsClusterConfiguration extends cdktf.ComplexComputedList {

  // execute_command_configuration - computed: true, optional: false, required: false
  public get executeCommandConfiguration() {
    return this.interpolationForAttribute('execute_command_configuration') as any;
  }
}

export function dataAwsccEcsClusterConfigurationToTerraform(struct?: DataAwsccEcsClusterConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    execute_command_configuration: dataAwsccEcsClusterConfigurationExecuteCommandConfigurationToTerraform(struct!.executeCommandConfiguration),
  }
}

export class DataAwsccEcsClusterDefaultCapacityProviderStrategy extends cdktf.ComplexComputedList {

  // base - computed: true, optional: false, required: false
  public get base() {
    return this.getNumberAttribute('base');
  }

  // capacity_provider - computed: true, optional: false, required: false
  public get capacityProvider() {
    return this.getStringAttribute('capacity_provider');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export function dataAwsccEcsClusterDefaultCapacityProviderStrategyToTerraform(struct?: DataAwsccEcsClusterDefaultCapacityProviderStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    base: cdktf.numberToTerraform(struct!.base),
    capacity_provider: cdktf.stringToTerraform(struct!.capacityProvider),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export class DataAwsccEcsClusterTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEcsClusterTagsToTerraform(struct?: DataAwsccEcsClusterTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecs_cluster.html awscc_ecs_cluster}
*/
export class DataAwsccEcsCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecs_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecs_cluster.html awscc_ecs_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEcsClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEcsClusterConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity_providers - computed: true, optional: false, required: false
  public get capacityProviders() {
    return this.getListAttribute('capacity_providers');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_settings - computed: true, optional: false, required: false
  public get clusterSettings() {
    return this.interpolationForAttribute('cluster_settings') as any;
  }

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }

  // default_capacity_provider_strategy - computed: true, optional: false, required: false
  public get defaultCapacityProviderStrategy() {
    return this.interpolationForAttribute('default_capacity_provider_strategy') as any;
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

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
