import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudtrailTrailConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. Not required unless you specify CloudWatchLogsRoleArn.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#cloudwatch_logs_log_group_arn CloudtrailTrail#cloudwatch_logs_log_group_arn}
    */
    readonly cloudwatchLogsLogGroupArn?: string;
    /**
    * Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#cloudwatch_logs_role_arn CloudtrailTrail#cloudwatch_logs_role_arn}
    */
    readonly cloudwatchLogsRoleArn?: string;
    /**
    * Specifies whether log file validation is enabled. The default is false.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#enable_log_file_validation CloudtrailTrail#enable_log_file_validation}
    */
    readonly enableLogFileValidation?: boolean | cdktf.IResolvable;
    /**
    * Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. You can configure up to five event selectors for a trail.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#event_selectors CloudtrailTrail#event_selectors}
    */
    readonly eventSelectors?: CloudtrailTrailEventSelectors[];
    /**
    * Specifies whether the trail is publishing events from global services such as IAM to the log files.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#include_global_service_events CloudtrailTrail#include_global_service_events}
    */
    readonly includeGlobalServiceEvents?: boolean | cdktf.IResolvable;
    /**
    * Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#insight_selectors CloudtrailTrail#insight_selectors}
    */
    readonly insightSelectors?: CloudtrailTrailInsightSelectors[];
    /**
    * Whether the CloudTrail is currently logging AWS API calls.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#is_logging CloudtrailTrail#is_logging}
    */
    readonly isLogging: boolean | cdktf.IResolvable;
    /**
    * Specifies whether the trail applies only to the current region or to all regions. The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#is_multi_region_trail CloudtrailTrail#is_multi_region_trail}
    */
    readonly isMultiRegionTrail?: boolean | cdktf.IResolvable;
    /**
    * Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account. The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in AWS Organizations.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#is_organization_trail CloudtrailTrail#is_organization_trail}
    */
    readonly isOrganizationTrail?: boolean | cdktf.IResolvable;
    /**
    * Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#kms_key_id CloudtrailTrail#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#s3_bucket_name CloudtrailTrail#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see Finding Your CloudTrail Log Files. The maximum length is 200 characters.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#s3_key_prefix CloudtrailTrail#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
    /**
    * Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#sns_topic_name CloudtrailTrail#sns_topic_name}
    */
    readonly snsTopicName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#tags CloudtrailTrail#tags}
    */
    readonly tags?: CloudtrailTrailTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#trail_name CloudtrailTrail#trail_name}
    */
    readonly trailName?: string;
}
export interface CloudtrailTrailEventSelectorsDataResources {
    /**
    * The resource type in which you want to log data events. You can specify AWS::S3::Object or AWS::Lambda::Function resources.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#type CloudtrailTrail#type}
    */
    readonly type: string;
    /**
    * An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#values CloudtrailTrail#values}
    */
    readonly values?: string[];
}
export declare function cloudtrailTrailEventSelectorsDataResourcesToTerraform(struct?: CloudtrailTrailEventSelectorsDataResources): any;
export interface CloudtrailTrailEventSelectors {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#data_resources CloudtrailTrail#data_resources}
    */
    readonly dataResources?: CloudtrailTrailEventSelectorsDataResources[];
    /**
    * An optional list of service event sources from which you do not want management events to be logged on your trail. In this release, the list can be empty (disables the filter), or it can filter out AWS Key Management Service events by containing "kms.amazonaws.com". By default, ExcludeManagementEventSources is empty, and AWS KMS events are included in events that are logged to your trail.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#exclude_management_event_sources CloudtrailTrail#exclude_management_event_sources}
    */
    readonly excludeManagementEventSources?: string[];
    /**
    * Specify if you want your event selector to include management events for your trail.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#include_management_events CloudtrailTrail#include_management_events}
    */
    readonly includeManagementEvents?: boolean | cdktf.IResolvable;
    /**
    * Specify if you want your trail to log read-only events, write-only events, or all. For example, the EC2 GetConsoleOutput is a read-only API operation and RunInstances is a write-only API operation.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#read_write_type CloudtrailTrail#read_write_type}
    */
    readonly readWriteType?: string;
}
export declare function cloudtrailTrailEventSelectorsToTerraform(struct?: CloudtrailTrailEventSelectors): any;
export interface CloudtrailTrailInsightSelectors {
    /**
    * The type of insight to log on a trail.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#insight_type CloudtrailTrail#insight_type}
    */
    readonly insightType?: string;
}
export declare function cloudtrailTrailInsightSelectorsToTerraform(struct?: CloudtrailTrailInsightSelectors): any;
export interface CloudtrailTrailTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#key CloudtrailTrail#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#value CloudtrailTrail#value}
    */
    readonly value: string;
}
export declare function cloudtrailTrailTagsToTerraform(struct?: CloudtrailTrailTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html awscc_cloudtrail_trail}
*/
export declare class CloudtrailTrail extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html awscc_cloudtrail_trail} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudtrailTrailConfig
    */
    constructor(scope: Construct, id: string, config: CloudtrailTrailConfig);
    get arn(): string;
    private _cloudwatchLogsLogGroupArn?;
    get cloudwatchLogsLogGroupArn(): string;
    set cloudwatchLogsLogGroupArn(value: string);
    resetCloudwatchLogsLogGroupArn(): void;
    get cloudwatchLogsLogGroupArnInput(): string | undefined;
    private _cloudwatchLogsRoleArn?;
    get cloudwatchLogsRoleArn(): string;
    set cloudwatchLogsRoleArn(value: string);
    resetCloudwatchLogsRoleArn(): void;
    get cloudwatchLogsRoleArnInput(): string | undefined;
    private _enableLogFileValidation?;
    get enableLogFileValidation(): boolean | cdktf.IResolvable;
    set enableLogFileValidation(value: boolean | cdktf.IResolvable);
    resetEnableLogFileValidation(): void;
    get enableLogFileValidationInput(): boolean | cdktf.IResolvable | undefined;
    private _eventSelectors?;
    get eventSelectors(): CloudtrailTrailEventSelectors[];
    set eventSelectors(value: CloudtrailTrailEventSelectors[]);
    resetEventSelectors(): void;
    get eventSelectorsInput(): CloudtrailTrailEventSelectors[] | undefined;
    get id(): string;
    private _includeGlobalServiceEvents?;
    get includeGlobalServiceEvents(): boolean | cdktf.IResolvable;
    set includeGlobalServiceEvents(value: boolean | cdktf.IResolvable);
    resetIncludeGlobalServiceEvents(): void;
    get includeGlobalServiceEventsInput(): boolean | cdktf.IResolvable | undefined;
    private _insightSelectors?;
    get insightSelectors(): CloudtrailTrailInsightSelectors[];
    set insightSelectors(value: CloudtrailTrailInsightSelectors[]);
    resetInsightSelectors(): void;
    get insightSelectorsInput(): CloudtrailTrailInsightSelectors[] | undefined;
    private _isLogging;
    get isLogging(): boolean | cdktf.IResolvable;
    set isLogging(value: boolean | cdktf.IResolvable);
    get isLoggingInput(): boolean | cdktf.IResolvable;
    private _isMultiRegionTrail?;
    get isMultiRegionTrail(): boolean | cdktf.IResolvable;
    set isMultiRegionTrail(value: boolean | cdktf.IResolvable);
    resetIsMultiRegionTrail(): void;
    get isMultiRegionTrailInput(): boolean | cdktf.IResolvable | undefined;
    private _isOrganizationTrail?;
    get isOrganizationTrail(): boolean | cdktf.IResolvable;
    set isOrganizationTrail(value: boolean | cdktf.IResolvable);
    resetIsOrganizationTrail(): void;
    get isOrganizationTrailInput(): boolean | cdktf.IResolvable | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _s3BucketName;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string | undefined;
    get snsTopicArn(): string;
    private _snsTopicName?;
    get snsTopicName(): string;
    set snsTopicName(value: string);
    resetSnsTopicName(): void;
    get snsTopicNameInput(): string | undefined;
    private _tags?;
    get tags(): CloudtrailTrailTags[];
    set tags(value: CloudtrailTrailTags[]);
    resetTags(): void;
    get tagsInput(): CloudtrailTrailTags[] | undefined;
    private _trailName?;
    get trailName(): string;
    set trailName(value: string);
    resetTrailName(): void;
    get trailNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
