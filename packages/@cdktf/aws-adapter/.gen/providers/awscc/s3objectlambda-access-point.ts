// https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ObjectlambdaAccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name you want to assign to this Object lambda Access Point.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html#name S3ObjectlambdaAccessPoint#name}
  */
  readonly name: string;
  /**
  * Configuration to be applied to this Object lambda Access Point. It specifies Supporting Access Point, Transformation Configurations. Customers can also set if they like to enable Cloudwatch metrics for accesses to this Object lambda Access Point. Default setting for Cloudwatch metrics is disable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html#object_lambda_configuration S3ObjectlambdaAccessPoint#object_lambda_configuration}
  */
  readonly objectLambdaConfiguration?: S3ObjectlambdaAccessPointObjectLambdaConfiguration;
}
export interface S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html#actions S3ObjectlambdaAccessPoint#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html#content_transformation S3ObjectlambdaAccessPoint#content_transformation}
  */
  readonly contentTransformation?: { [key: string]: string } | cdktf.IResolvable;
}

export function s3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsToTerraform(struct?: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    content_transformation: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.contentTransformation),
  }
}

export interface S3ObjectlambdaAccessPointObjectLambdaConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html#allowed_features S3ObjectlambdaAccessPoint#allowed_features}
  */
  readonly allowedFeatures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html#cloudwatch_metrics_enabled S3ObjectlambdaAccessPoint#cloudwatch_metrics_enabled}
  */
  readonly cloudwatchMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html#supporting_access_point S3ObjectlambdaAccessPoint#supporting_access_point}
  */
  readonly supportingAccessPoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html#transformation_configurations S3ObjectlambdaAccessPoint#transformation_configurations}
  */
  readonly transformationConfigurations: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations[];
}

export function s3ObjectlambdaAccessPointObjectLambdaConfigurationToTerraform(struct?: S3ObjectlambdaAccessPointObjectLambdaConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_features: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedFeatures),
    cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
    supporting_access_point: cdktf.stringToTerraform(struct!.supportingAccessPoint),
    transformation_configurations: cdktf.listMapper(s3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsToTerraform)(struct!.transformationConfigurations),
  }
}

export class S3ObjectlambdaAccessPointPolicyStatus extends cdktf.ComplexComputedList {

  // is_public - computed: true, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable;
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic
  }
}

export function s3ObjectlambdaAccessPointPolicyStatusToTerraform(struct?: S3ObjectlambdaAccessPointPolicyStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_public: cdktf.booleanToTerraform(struct!.isPublic),
  }
}

export class S3ObjectlambdaAccessPointPublicAccessBlockConfiguration extends cdktf.ComplexComputedList {

  // block_public_acls - computed: true, optional: true, required: false
  private _blockPublicAcls?: boolean | cdktf.IResolvable;
  public get blockPublicAcls() {
    return this.getBooleanAttribute('block_public_acls');
  }
  public set blockPublicAcls(value: boolean | cdktf.IResolvable) {
    this._blockPublicAcls = value;
  }
  public resetBlockPublicAcls() {
    this._blockPublicAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicAclsInput() {
    return this._blockPublicAcls
  }

  // block_public_policy - computed: true, optional: true, required: false
  private _blockPublicPolicy?: boolean | cdktf.IResolvable;
  public get blockPublicPolicy() {
    return this.getBooleanAttribute('block_public_policy');
  }
  public set blockPublicPolicy(value: boolean | cdktf.IResolvable) {
    this._blockPublicPolicy = value;
  }
  public resetBlockPublicPolicy() {
    this._blockPublicPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicPolicyInput() {
    return this._blockPublicPolicy
  }

  // ignore_public_acls - computed: true, optional: true, required: false
  private _ignorePublicAcls?: boolean | cdktf.IResolvable;
  public get ignorePublicAcls() {
    return this.getBooleanAttribute('ignore_public_acls');
  }
  public set ignorePublicAcls(value: boolean | cdktf.IResolvable) {
    this._ignorePublicAcls = value;
  }
  public resetIgnorePublicAcls() {
    this._ignorePublicAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePublicAclsInput() {
    return this._ignorePublicAcls
  }

  // restrict_public_buckets - computed: true, optional: true, required: false
  private _restrictPublicBuckets?: boolean | cdktf.IResolvable;
  public get restrictPublicBuckets() {
    return this.getBooleanAttribute('restrict_public_buckets');
  }
  public set restrictPublicBuckets(value: boolean | cdktf.IResolvable) {
    this._restrictPublicBuckets = value;
  }
  public resetRestrictPublicBuckets() {
    this._restrictPublicBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPublicBucketsInput() {
    return this._restrictPublicBuckets
  }
}

export function s3ObjectlambdaAccessPointPublicAccessBlockConfigurationToTerraform(struct?: S3ObjectlambdaAccessPointPublicAccessBlockConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    block_public_acls: cdktf.booleanToTerraform(struct!.blockPublicAcls),
    block_public_policy: cdktf.booleanToTerraform(struct!.blockPublicPolicy),
    ignore_public_acls: cdktf.booleanToTerraform(struct!.ignorePublicAcls),
    restrict_public_buckets: cdktf.booleanToTerraform(struct!.restrictPublicBuckets),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html awscc_s3objectlambda_access_point}
*/
export class S3ObjectlambdaAccessPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_s3objectlambda_access_point";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point.html awscc_s3objectlambda_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ObjectlambdaAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: S3ObjectlambdaAccessPointConfig) {
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
    this._name = config.name;
    this._objectLambdaConfiguration = config.objectLambdaConfiguration;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // object_lambda_configuration - computed: false, optional: true, required: false
  private _objectLambdaConfiguration?: S3ObjectlambdaAccessPointObjectLambdaConfiguration;
  public get objectLambdaConfiguration() {
    return this.interpolationForAttribute('object_lambda_configuration') as any;
  }
  public set objectLambdaConfiguration(value: S3ObjectlambdaAccessPointObjectLambdaConfiguration ) {
    this._objectLambdaConfiguration = value;
  }
  public resetObjectLambdaConfiguration() {
    this._objectLambdaConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLambdaConfigurationInput() {
    return this._objectLambdaConfiguration
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
      name: cdktf.stringToTerraform(this._name),
      object_lambda_configuration: s3ObjectlambdaAccessPointObjectLambdaConfigurationToTerraform(this._objectLambdaConfiguration),
    };
  }
}
