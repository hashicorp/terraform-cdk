// https://www.terraform.io/docs/providers/awscc/d/imagebuilder_infrastructure_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccImagebuilderInfrastructureConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_infrastructure_configuration.html#id DataAwsccImagebuilderInfrastructureConfiguration#id}
  */
  readonly id: string;
}
export class DataAwsccImagebuilderInfrastructureConfigurationLoggingS3Logs extends cdktf.ComplexComputedList {

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // s3_key_prefix - computed: true, optional: false, required: false
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
}

export function dataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsToTerraform(struct?: DataAwsccImagebuilderInfrastructureConfigurationLoggingS3Logs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_key_prefix: cdktf.stringToTerraform(struct!.s3KeyPrefix),
  }
}

export class DataAwsccImagebuilderInfrastructureConfigurationLogging extends cdktf.ComplexComputedList {

  // s3_logs - computed: true, optional: false, required: false
  public get s3Logs() {
    return this.interpolationForAttribute('s3_logs') as any;
  }
}

export function dataAwsccImagebuilderInfrastructureConfigurationLoggingToTerraform(struct?: DataAwsccImagebuilderInfrastructureConfigurationLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_logs: dataAwsccImagebuilderInfrastructureConfigurationLoggingS3LogsToTerraform(struct!.s3Logs),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_infrastructure_configuration.html awscc_imagebuilder_infrastructure_configuration}
*/
export class DataAwsccImagebuilderInfrastructureConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_imagebuilder_infrastructure_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_infrastructure_configuration.html awscc_imagebuilder_infrastructure_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccImagebuilderInfrastructureConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccImagebuilderInfrastructureConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_imagebuilder_infrastructure_configuration',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // instance_profile_name - computed: true, optional: false, required: false
  public get instanceProfileName() {
    return this.getStringAttribute('instance_profile_name');
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }

  // key_pair - computed: true, optional: false, required: false
  public get keyPair() {
    return this.getStringAttribute('key_pair');
  }

  // logging - computed: true, optional: false, required: false
  public get logging() {
    return this.interpolationForAttribute('logging') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_tags - computed: true, optional: false, required: false
  public resourceTags(key: string): string {
    return new cdktf.StringMap(this, 'resource_tags').lookup(key);
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // sns_topic_arn - computed: true, optional: false, required: false
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // terminate_instance_on_failure - computed: true, optional: false, required: false
  public get terminateInstanceOnFailure() {
    return this.getBooleanAttribute('terminate_instance_on_failure');
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
