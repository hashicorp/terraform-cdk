// https://www.terraform.io/docs/providers/awscc/d/codeguruprofiler_profiling_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCodeguruprofilerProfilingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/codeguruprofiler_profiling_group.html#id DataAwsccCodeguruprofilerProfilingGroup#id}
  */
  readonly id: string;
}
export class DataAwsccCodeguruprofilerProfilingGroupAgentPermissions extends cdktf.ComplexComputedList {

  // principals - computed: true, optional: false, required: false
  public get principals() {
    return this.getListAttribute('principals');
  }
}

export function dataAwsccCodeguruprofilerProfilingGroupAgentPermissionsToTerraform(struct?: DataAwsccCodeguruprofilerProfilingGroupAgentPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    principals: cdktf.listMapper(cdktf.stringToTerraform)(struct!.principals),
  }
}

export class DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration extends cdktf.ComplexComputedList {

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }

  // channel_uri - computed: true, optional: false, required: false
  public get channelUri() {
    return this.getStringAttribute('channel_uri');
  }
}

export function dataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationToTerraform(struct?: DataAwsccCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
    channel_uri: cdktf.stringToTerraform(struct!.channelUri),
  }
}

export class DataAwsccCodeguruprofilerProfilingGroupTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccCodeguruprofilerProfilingGroupTagsToTerraform(struct?: DataAwsccCodeguruprofilerProfilingGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/codeguruprofiler_profiling_group.html awscc_codeguruprofiler_profiling_group}
*/
export class DataAwsccCodeguruprofilerProfilingGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_codeguruprofiler_profiling_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/codeguruprofiler_profiling_group.html awscc_codeguruprofiler_profiling_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCodeguruprofilerProfilingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCodeguruprofilerProfilingGroupConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_permissions - computed: true, optional: false, required: false
  public get agentPermissions() {
    return this.interpolationForAttribute('agent_permissions') as any;
  }

  // anomaly_detection_notification_configuration - computed: true, optional: false, required: false
  public get anomalyDetectionNotificationConfiguration() {
    return this.interpolationForAttribute('anomaly_detection_notification_configuration') as any;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_platform - computed: true, optional: false, required: false
  public get computePlatform() {
    return this.getStringAttribute('compute_platform');
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

  // profiling_group_name - computed: true, optional: false, required: false
  public get profilingGroupName() {
    return this.getStringAttribute('profiling_group_name');
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
