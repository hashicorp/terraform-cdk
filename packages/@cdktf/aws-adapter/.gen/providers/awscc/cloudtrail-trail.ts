// https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function cloudtrailTrailEventSelectorsDataResourcesToTerraform(struct?: CloudtrailTrailEventSelectorsDataResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

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

export function cloudtrailTrailEventSelectorsToTerraform(struct?: CloudtrailTrailEventSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_resources: cdktf.listMapper(cloudtrailTrailEventSelectorsDataResourcesToTerraform)(struct!.dataResources),
    exclude_management_event_sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeManagementEventSources),
    include_management_events: cdktf.booleanToTerraform(struct!.includeManagementEvents),
    read_write_type: cdktf.stringToTerraform(struct!.readWriteType),
  }
}

export interface CloudtrailTrailInsightSelectors {
  /**
  * The type of insight to log on a trail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html#insight_type CloudtrailTrail#insight_type}
  */
  readonly insightType?: string;
}

export function cloudtrailTrailInsightSelectorsToTerraform(struct?: CloudtrailTrailInsightSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    insight_type: cdktf.stringToTerraform(struct!.insightType),
  }
}

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

export function cloudtrailTrailTagsToTerraform(struct?: CloudtrailTrailTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html awscc_cloudtrail_trail}
*/
export class CloudtrailTrail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudtrail_trail";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudtrail_trail.html awscc_cloudtrail_trail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudtrailTrailConfig
  */
  public constructor(scope: Construct, id: string, config: CloudtrailTrailConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudtrail_trail',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cloudwatchLogsLogGroupArn = config.cloudwatchLogsLogGroupArn;
    this._cloudwatchLogsRoleArn = config.cloudwatchLogsRoleArn;
    this._enableLogFileValidation = config.enableLogFileValidation;
    this._eventSelectors = config.eventSelectors;
    this._includeGlobalServiceEvents = config.includeGlobalServiceEvents;
    this._insightSelectors = config.insightSelectors;
    this._isLogging = config.isLogging;
    this._isMultiRegionTrail = config.isMultiRegionTrail;
    this._isOrganizationTrail = config.isOrganizationTrail;
    this._kmsKeyId = config.kmsKeyId;
    this._s3BucketName = config.s3BucketName;
    this._s3KeyPrefix = config.s3KeyPrefix;
    this._snsTopicName = config.snsTopicName;
    this._tags = config.tags;
    this._trailName = config.trailName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloudwatch_logs_log_group_arn - computed: false, optional: true, required: false
  private _cloudwatchLogsLogGroupArn?: string;
  public get cloudwatchLogsLogGroupArn() {
    return this.getStringAttribute('cloudwatch_logs_log_group_arn');
  }
  public set cloudwatchLogsLogGroupArn(value: string ) {
    this._cloudwatchLogsLogGroupArn = value;
  }
  public resetCloudwatchLogsLogGroupArn() {
    this._cloudwatchLogsLogGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsLogGroupArnInput() {
    return this._cloudwatchLogsLogGroupArn
  }

  // cloudwatch_logs_role_arn - computed: false, optional: true, required: false
  private _cloudwatchLogsRoleArn?: string;
  public get cloudwatchLogsRoleArn() {
    return this.getStringAttribute('cloudwatch_logs_role_arn');
  }
  public set cloudwatchLogsRoleArn(value: string ) {
    this._cloudwatchLogsRoleArn = value;
  }
  public resetCloudwatchLogsRoleArn() {
    this._cloudwatchLogsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsRoleArnInput() {
    return this._cloudwatchLogsRoleArn
  }

  // enable_log_file_validation - computed: false, optional: true, required: false
  private _enableLogFileValidation?: boolean | cdktf.IResolvable;
  public get enableLogFileValidation() {
    return this.getBooleanAttribute('enable_log_file_validation');
  }
  public set enableLogFileValidation(value: boolean | cdktf.IResolvable ) {
    this._enableLogFileValidation = value;
  }
  public resetEnableLogFileValidation() {
    this._enableLogFileValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogFileValidationInput() {
    return this._enableLogFileValidation
  }

  // event_selectors - computed: false, optional: true, required: false
  private _eventSelectors?: CloudtrailTrailEventSelectors[];
  public get eventSelectors() {
    return this.interpolationForAttribute('event_selectors') as any;
  }
  public set eventSelectors(value: CloudtrailTrailEventSelectors[] ) {
    this._eventSelectors = value;
  }
  public resetEventSelectors() {
    this._eventSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSelectorsInput() {
    return this._eventSelectors
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_global_service_events - computed: false, optional: true, required: false
  private _includeGlobalServiceEvents?: boolean | cdktf.IResolvable;
  public get includeGlobalServiceEvents() {
    return this.getBooleanAttribute('include_global_service_events');
  }
  public set includeGlobalServiceEvents(value: boolean | cdktf.IResolvable ) {
    this._includeGlobalServiceEvents = value;
  }
  public resetIncludeGlobalServiceEvents() {
    this._includeGlobalServiceEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGlobalServiceEventsInput() {
    return this._includeGlobalServiceEvents
  }

  // insight_selectors - computed: false, optional: true, required: false
  private _insightSelectors?: CloudtrailTrailInsightSelectors[];
  public get insightSelectors() {
    return this.interpolationForAttribute('insight_selectors') as any;
  }
  public set insightSelectors(value: CloudtrailTrailInsightSelectors[] ) {
    this._insightSelectors = value;
  }
  public resetInsightSelectors() {
    this._insightSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightSelectorsInput() {
    return this._insightSelectors
  }

  // is_logging - computed: false, optional: false, required: true
  private _isLogging: boolean | cdktf.IResolvable;
  public get isLogging() {
    return this.getBooleanAttribute('is_logging');
  }
  public set isLogging(value: boolean | cdktf.IResolvable) {
    this._isLogging = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isLoggingInput() {
    return this._isLogging
  }

  // is_multi_region_trail - computed: false, optional: true, required: false
  private _isMultiRegionTrail?: boolean | cdktf.IResolvable;
  public get isMultiRegionTrail() {
    return this.getBooleanAttribute('is_multi_region_trail');
  }
  public set isMultiRegionTrail(value: boolean | cdktf.IResolvable ) {
    this._isMultiRegionTrail = value;
  }
  public resetIsMultiRegionTrail() {
    this._isMultiRegionTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMultiRegionTrailInput() {
    return this._isMultiRegionTrail
  }

  // is_organization_trail - computed: false, optional: true, required: false
  private _isOrganizationTrail?: boolean | cdktf.IResolvable;
  public get isOrganizationTrail() {
    return this.getBooleanAttribute('is_organization_trail');
  }
  public set isOrganizationTrail(value: boolean | cdktf.IResolvable ) {
    this._isOrganizationTrail = value;
  }
  public resetIsOrganizationTrail() {
    this._isOrganizationTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOrganizationTrailInput() {
    return this._isOrganizationTrail
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string ) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName: string;
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName
  }

  // s3_key_prefix - computed: false, optional: true, required: false
  private _s3KeyPrefix?: string;
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
  public set s3KeyPrefix(value: string ) {
    this._s3KeyPrefix = value;
  }
  public resetS3KeyPrefix() {
    this._s3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyPrefixInput() {
    return this._s3KeyPrefix
  }

  // sns_topic_arn - computed: true, optional: false, required: false
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }

  // sns_topic_name - computed: false, optional: true, required: false
  private _snsTopicName?: string;
  public get snsTopicName() {
    return this.getStringAttribute('sns_topic_name');
  }
  public set snsTopicName(value: string ) {
    this._snsTopicName = value;
  }
  public resetSnsTopicName() {
    this._snsTopicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicNameInput() {
    return this._snsTopicName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: CloudtrailTrailTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: CloudtrailTrailTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // trail_name - computed: true, optional: true, required: false
  private _trailName?: string;
  public get trailName() {
    return this.getStringAttribute('trail_name');
  }
  public set trailName(value: string) {
    this._trailName = value;
  }
  public resetTrailName() {
    this._trailName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trailNameInput() {
    return this._trailName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloudwatch_logs_log_group_arn: cdktf.stringToTerraform(this._cloudwatchLogsLogGroupArn),
      cloudwatch_logs_role_arn: cdktf.stringToTerraform(this._cloudwatchLogsRoleArn),
      enable_log_file_validation: cdktf.booleanToTerraform(this._enableLogFileValidation),
      event_selectors: cdktf.listMapper(cloudtrailTrailEventSelectorsToTerraform)(this._eventSelectors),
      include_global_service_events: cdktf.booleanToTerraform(this._includeGlobalServiceEvents),
      insight_selectors: cdktf.listMapper(cloudtrailTrailInsightSelectorsToTerraform)(this._insightSelectors),
      is_logging: cdktf.booleanToTerraform(this._isLogging),
      is_multi_region_trail: cdktf.booleanToTerraform(this._isMultiRegionTrail),
      is_organization_trail: cdktf.booleanToTerraform(this._isOrganizationTrail),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      s3_bucket_name: cdktf.stringToTerraform(this._s3BucketName),
      s3_key_prefix: cdktf.stringToTerraform(this._s3KeyPrefix),
      sns_topic_name: cdktf.stringToTerraform(this._snsTopicName),
      tags: cdktf.listMapper(cloudtrailTrailTagsToTerraform)(this._tags),
      trail_name: cdktf.stringToTerraform(this._trailName),
    };
  }
}
