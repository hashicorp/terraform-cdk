// https://www.terraform.io/docs/providers/awscc/r/codeguruprofiler_profiling_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodeguruprofilerProfilingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The agent permissions attached to this profiling group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeguruprofiler_profiling_group.html#agent_permissions CodeguruprofilerProfilingGroup#agent_permissions}
  */
  readonly agentPermissions?: CodeguruprofilerProfilingGroupAgentPermissions;
  /**
  * Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeguruprofiler_profiling_group.html#anomaly_detection_notification_configuration CodeguruprofilerProfilingGroup#anomaly_detection_notification_configuration}
  */
  readonly anomalyDetectionNotificationConfiguration?: CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[];
  /**
  * The compute platform of the profiling group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeguruprofiler_profiling_group.html#compute_platform CodeguruprofilerProfilingGroup#compute_platform}
  */
  readonly computePlatform?: string;
  /**
  * The name of the profiling group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeguruprofiler_profiling_group.html#profiling_group_name CodeguruprofilerProfilingGroup#profiling_group_name}
  */
  readonly profilingGroupName: string;
  /**
  * The tags associated with a profiling group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeguruprofiler_profiling_group.html#tags CodeguruprofilerProfilingGroup#tags}
  */
  readonly tags?: CodeguruprofilerProfilingGroupTags[];
}
export interface CodeguruprofilerProfilingGroupAgentPermissions {
  /**
  * The principals for the agent permissions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeguruprofiler_profiling_group.html#principals CodeguruprofilerProfilingGroup#principals}
  */
  readonly principals: string[];
}

export function codeguruprofilerProfilingGroupAgentPermissionsToTerraform(struct?: CodeguruprofilerProfilingGroupAgentPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    principals: cdktf.listMapper(cdktf.stringToTerraform)(struct!.principals),
  }
}

export interface CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration {
  /**
  * Unique identifier for each Channel in the notification configuration of a Profiling Group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeguruprofiler_profiling_group.html#channel_id CodeguruprofilerProfilingGroup#channel_id}
  */
  readonly channelId?: string;
  /**
  * Unique arn of the resource to be used for notifications. We support a valid SNS topic arn as a channel uri.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeguruprofiler_profiling_group.html#channel_uri CodeguruprofilerProfilingGroup#channel_uri}
  */
  readonly channelUri: string;
}

export function codeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationToTerraform(struct?: CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
    channel_uri: cdktf.stringToTerraform(struct!.channelUri),
  }
}

export interface CodeguruprofilerProfilingGroupTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeguruprofiler_profiling_group.html#key CodeguruprofilerProfilingGroup#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codeguruprofiler_profiling_group.html#value CodeguruprofilerProfilingGroup#value}
  */
  readonly value: string;
}

export function codeguruprofilerProfilingGroupTagsToTerraform(struct?: CodeguruprofilerProfilingGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/codeguruprofiler_profiling_group.html awscc_codeguruprofiler_profiling_group}
*/
export class CodeguruprofilerProfilingGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_codeguruprofiler_profiling_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/codeguruprofiler_profiling_group.html awscc_codeguruprofiler_profiling_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodeguruprofilerProfilingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CodeguruprofilerProfilingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_codeguruprofiler_profiling_group',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._agentPermissions = config.agentPermissions;
    this._anomalyDetectionNotificationConfiguration = config.anomalyDetectionNotificationConfiguration;
    this._computePlatform = config.computePlatform;
    this._profilingGroupName = config.profilingGroupName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_permissions - computed: false, optional: true, required: false
  private _agentPermissions?: CodeguruprofilerProfilingGroupAgentPermissions;
  public get agentPermissions() {
    return this.interpolationForAttribute('agent_permissions') as any;
  }
  public set agentPermissions(value: CodeguruprofilerProfilingGroupAgentPermissions ) {
    this._agentPermissions = value;
  }
  public resetAgentPermissions() {
    this._agentPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPermissionsInput() {
    return this._agentPermissions
  }

  // anomaly_detection_notification_configuration - computed: false, optional: true, required: false
  private _anomalyDetectionNotificationConfiguration?: CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[];
  public get anomalyDetectionNotificationConfiguration() {
    return this.interpolationForAttribute('anomaly_detection_notification_configuration') as any;
  }
  public set anomalyDetectionNotificationConfiguration(value: CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[] ) {
    this._anomalyDetectionNotificationConfiguration = value;
  }
  public resetAnomalyDetectionNotificationConfiguration() {
    this._anomalyDetectionNotificationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyDetectionNotificationConfigurationInput() {
    return this._anomalyDetectionNotificationConfiguration
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_platform - computed: true, optional: true, required: false
  private _computePlatform?: string;
  public get computePlatform() {
    return this.getStringAttribute('compute_platform');
  }
  public set computePlatform(value: string) {
    this._computePlatform = value;
  }
  public resetComputePlatform() {
    this._computePlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computePlatformInput() {
    return this._computePlatform
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // profiling_group_name - computed: false, optional: false, required: true
  private _profilingGroupName: string;
  public get profilingGroupName() {
    return this.getStringAttribute('profiling_group_name');
  }
  public set profilingGroupName(value: string) {
    this._profilingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingGroupNameInput() {
    return this._profilingGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: CodeguruprofilerProfilingGroupTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: CodeguruprofilerProfilingGroupTags[] ) {
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
      agent_permissions: codeguruprofilerProfilingGroupAgentPermissionsToTerraform(this._agentPermissions),
      anomaly_detection_notification_configuration: cdktf.listMapper(codeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationToTerraform)(this._anomalyDetectionNotificationConfiguration),
      compute_platform: cdktf.stringToTerraform(this._computePlatform),
      profiling_group_name: cdktf.stringToTerraform(this._profilingGroupName),
      tags: cdktf.listMapper(codeguruprofilerProfilingGroupTagsToTerraform)(this._tags),
    };
  }
}
