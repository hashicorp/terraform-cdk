// https://www.terraform.io/docs/providers/awscc/d/s3objectlambda_access_point.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccS3ObjectlambdaAccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/s3objectlambda_access_point.html#id DataAwsccS3ObjectlambdaAccessPoint#id}
  */
  readonly id: string;
}
export class DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations extends cdktf.ComplexComputedList {

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // content_transformation - computed: true, optional: false, required: false
  public get contentTransformation() {
    return this.interpolationForAttribute('content_transformation') as any;
  }
}

export function dataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsToTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    content_transformation: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.contentTransformation),
  }
}

export class DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration extends cdktf.ComplexComputedList {

  // allowed_features - computed: true, optional: false, required: false
  public get allowedFeatures() {
    return this.getListAttribute('allowed_features');
  }

  // cloudwatch_metrics_enabled - computed: true, optional: false, required: false
  public get cloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('cloudwatch_metrics_enabled');
  }

  // supporting_access_point - computed: true, optional: false, required: false
  public get supportingAccessPoint() {
    return this.getStringAttribute('supporting_access_point');
  }

  // transformation_configurations - computed: true, optional: false, required: false
  public get transformationConfigurations() {
    return this.interpolationForAttribute('transformation_configurations') as any;
  }
}

export function dataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationToTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_features: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedFeatures),
    cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
    supporting_access_point: cdktf.stringToTerraform(struct!.supportingAccessPoint),
    transformation_configurations: cdktf.listMapper(dataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsToTerraform)(struct!.transformationConfigurations),
  }
}

export class DataAwsccS3ObjectlambdaAccessPointPolicyStatus extends cdktf.ComplexComputedList {

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
}

export function dataAwsccS3ObjectlambdaAccessPointPolicyStatusToTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointPolicyStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_public: cdktf.booleanToTerraform(struct!.isPublic),
  }
}

export class DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration extends cdktf.ComplexComputedList {

  // block_public_acls - computed: true, optional: false, required: false
  public get blockPublicAcls() {
    return this.getBooleanAttribute('block_public_acls');
  }

  // block_public_policy - computed: true, optional: false, required: false
  public get blockPublicPolicy() {
    return this.getBooleanAttribute('block_public_policy');
  }

  // ignore_public_acls - computed: true, optional: false, required: false
  public get ignorePublicAcls() {
    return this.getBooleanAttribute('ignore_public_acls');
  }

  // restrict_public_buckets - computed: true, optional: false, required: false
  public get restrictPublicBuckets() {
    return this.getBooleanAttribute('restrict_public_buckets');
  }
}

export function dataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationToTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    block_public_acls: cdktf.booleanToTerraform(struct!.blockPublicAcls),
    block_public_policy: cdktf.booleanToTerraform(struct!.blockPublicPolicy),
    ignore_public_acls: cdktf.booleanToTerraform(struct!.ignorePublicAcls),
    restrict_public_buckets: cdktf.booleanToTerraform(struct!.restrictPublicBuckets),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3objectlambda_access_point.html awscc_s3objectlambda_access_point}
*/
export class DataAwsccS3ObjectlambdaAccessPoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_s3objectlambda_access_point";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3objectlambda_access_point.html awscc_s3objectlambda_access_point} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccS3ObjectlambdaAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccS3ObjectlambdaAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3objectlambda_access_point',
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

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_lambda_configuration - computed: true, optional: false, required: false
  public get objectLambdaConfiguration() {
    return this.interpolationForAttribute('object_lambda_configuration') as any;
  }

  // policy_status - computed: true, optional: false, required: false
  public get policyStatus() {
    return this.interpolationForAttribute('policy_status') as any;
  }

  // public_access_block_configuration - computed: true, optional: false, required: false
  public get publicAccessBlockConfiguration() {
    return this.interpolationForAttribute('public_access_block_configuration') as any;
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
