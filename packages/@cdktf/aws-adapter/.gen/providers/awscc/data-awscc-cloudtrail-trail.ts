// https://www.terraform.io/docs/providers/awscc/d/cloudtrail_trail.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCloudtrailTrailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudtrail_trail.html#id DataAwsccCloudtrailTrail#id}
  */
  readonly id: string;
}
export class DataAwsccCloudtrailTrailEventSelectorsDataResources extends cdktf.ComplexComputedList {

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export function dataAwsccCloudtrailTrailEventSelectorsDataResourcesToTerraform(struct?: DataAwsccCloudtrailTrailEventSelectorsDataResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class DataAwsccCloudtrailTrailEventSelectors extends cdktf.ComplexComputedList {

  // data_resources - computed: true, optional: false, required: false
  public get dataResources() {
    return this.interpolationForAttribute('data_resources') as any;
  }

  // exclude_management_event_sources - computed: true, optional: false, required: false
  public get excludeManagementEventSources() {
    return this.getListAttribute('exclude_management_event_sources');
  }

  // include_management_events - computed: true, optional: false, required: false
  public get includeManagementEvents() {
    return this.getBooleanAttribute('include_management_events');
  }

  // read_write_type - computed: true, optional: false, required: false
  public get readWriteType() {
    return this.getStringAttribute('read_write_type');
  }
}

export function dataAwsccCloudtrailTrailEventSelectorsToTerraform(struct?: DataAwsccCloudtrailTrailEventSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_resources: cdktf.listMapper(dataAwsccCloudtrailTrailEventSelectorsDataResourcesToTerraform)(struct!.dataResources),
    exclude_management_event_sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeManagementEventSources),
    include_management_events: cdktf.booleanToTerraform(struct!.includeManagementEvents),
    read_write_type: cdktf.stringToTerraform(struct!.readWriteType),
  }
}

export class DataAwsccCloudtrailTrailInsightSelectors extends cdktf.ComplexComputedList {

  // insight_type - computed: true, optional: false, required: false
  public get insightType() {
    return this.getStringAttribute('insight_type');
  }
}

export function dataAwsccCloudtrailTrailInsightSelectorsToTerraform(struct?: DataAwsccCloudtrailTrailInsightSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    insight_type: cdktf.stringToTerraform(struct!.insightType),
  }
}

export class DataAwsccCloudtrailTrailTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccCloudtrailTrailTagsToTerraform(struct?: DataAwsccCloudtrailTrailTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudtrail_trail.html awscc_cloudtrail_trail}
*/
export class DataAwsccCloudtrailTrail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudtrail_trail";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudtrail_trail.html awscc_cloudtrail_trail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudtrailTrailConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudtrailTrailConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloudwatch_logs_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogsLogGroupArn() {
    return this.getStringAttribute('cloudwatch_logs_log_group_arn');
  }

  // cloudwatch_logs_role_arn - computed: true, optional: false, required: false
  public get cloudwatchLogsRoleArn() {
    return this.getStringAttribute('cloudwatch_logs_role_arn');
  }

  // enable_log_file_validation - computed: true, optional: false, required: false
  public get enableLogFileValidation() {
    return this.getBooleanAttribute('enable_log_file_validation');
  }

  // event_selectors - computed: true, optional: false, required: false
  public get eventSelectors() {
    return this.interpolationForAttribute('event_selectors') as any;
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

  // include_global_service_events - computed: true, optional: false, required: false
  public get includeGlobalServiceEvents() {
    return this.getBooleanAttribute('include_global_service_events');
  }

  // insight_selectors - computed: true, optional: false, required: false
  public get insightSelectors() {
    return this.interpolationForAttribute('insight_selectors') as any;
  }

  // is_logging - computed: true, optional: false, required: false
  public get isLogging() {
    return this.getBooleanAttribute('is_logging');
  }

  // is_multi_region_trail - computed: true, optional: false, required: false
  public get isMultiRegionTrail() {
    return this.getBooleanAttribute('is_multi_region_trail');
  }

  // is_organization_trail - computed: true, optional: false, required: false
  public get isOrganizationTrail() {
    return this.getBooleanAttribute('is_organization_trail');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // s3_key_prefix - computed: true, optional: false, required: false
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }

  // sns_topic_arn - computed: true, optional: false, required: false
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }

  // sns_topic_name - computed: true, optional: false, required: false
  public get snsTopicName() {
    return this.getStringAttribute('sns_topic_name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // trail_name - computed: true, optional: false, required: false
  public get trailName() {
    return this.getStringAttribute('trail_name');
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
