import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function codeguruprofilerProfilingGroupAgentPermissionsToTerraform(struct?: CodeguruprofilerProfilingGroupAgentPermissions): any;
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
export declare function codeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationToTerraform(struct?: CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration): any;
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
export declare function codeguruprofilerProfilingGroupTagsToTerraform(struct?: CodeguruprofilerProfilingGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/codeguruprofiler_profiling_group.html awscc_codeguruprofiler_profiling_group}
*/
export declare class CodeguruprofilerProfilingGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/codeguruprofiler_profiling_group.html awscc_codeguruprofiler_profiling_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeguruprofilerProfilingGroupConfig
    */
    constructor(scope: Construct, id: string, config: CodeguruprofilerProfilingGroupConfig);
    private _agentPermissions?;
    get agentPermissions(): CodeguruprofilerProfilingGroupAgentPermissions;
    set agentPermissions(value: CodeguruprofilerProfilingGroupAgentPermissions);
    resetAgentPermissions(): void;
    get agentPermissionsInput(): CodeguruprofilerProfilingGroupAgentPermissions | undefined;
    private _anomalyDetectionNotificationConfiguration?;
    get anomalyDetectionNotificationConfiguration(): CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[];
    set anomalyDetectionNotificationConfiguration(value: CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[]);
    resetAnomalyDetectionNotificationConfiguration(): void;
    get anomalyDetectionNotificationConfigurationInput(): CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[] | undefined;
    get arn(): string;
    private _computePlatform?;
    get computePlatform(): string;
    set computePlatform(value: string);
    resetComputePlatform(): void;
    get computePlatformInput(): string | undefined;
    get id(): string;
    private _profilingGroupName;
    get profilingGroupName(): string;
    set profilingGroupName(value: string);
    get profilingGroupNameInput(): string;
    private _tags?;
    get tags(): CodeguruprofilerProfilingGroupTags[];
    set tags(value: CodeguruprofilerProfilingGroupTags[]);
    resetTags(): void;
    get tagsInput(): CodeguruprofilerProfilingGroupTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
