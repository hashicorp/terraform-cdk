// https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_alert.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccLookoutmetricsAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_alert.html#id DataAwsccLookoutmetricsAlert#id}
  */
  readonly id: string;
}
export class DataAwsccLookoutmetricsAlertActionLambdaConfiguration extends cdktf.ComplexComputedList {

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccLookoutmetricsAlertActionLambdaConfigurationToTerraform(struct?: DataAwsccLookoutmetricsAlertActionLambdaConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccLookoutmetricsAlertActionSnsConfiguration extends cdktf.ComplexComputedList {

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // sns_topic_arn - computed: true, optional: false, required: false
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
}

export function dataAwsccLookoutmetricsAlertActionSnsConfigurationToTerraform(struct?: DataAwsccLookoutmetricsAlertActionSnsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    sns_topic_arn: cdktf.stringToTerraform(struct!.snsTopicArn),
  }
}

export class DataAwsccLookoutmetricsAlertAction extends cdktf.ComplexComputedList {

  // lambda_configuration - computed: true, optional: false, required: false
  public get lambdaConfiguration() {
    return this.interpolationForAttribute('lambda_configuration') as any;
  }

  // sns_configuration - computed: true, optional: false, required: false
  public get snsConfiguration() {
    return this.interpolationForAttribute('sns_configuration') as any;
  }
}

export function dataAwsccLookoutmetricsAlertActionToTerraform(struct?: DataAwsccLookoutmetricsAlertAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    lambda_configuration: dataAwsccLookoutmetricsAlertActionLambdaConfigurationToTerraform(struct!.lambdaConfiguration),
    sns_configuration: dataAwsccLookoutmetricsAlertActionSnsConfigurationToTerraform(struct!.snsConfiguration),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_alert.html awscc_lookoutmetrics_alert}
*/
export class DataAwsccLookoutmetricsAlert extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_lookoutmetrics_alert";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_alert.html awscc_lookoutmetrics_alert} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLookoutmetricsAlertConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLookoutmetricsAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lookoutmetrics_alert',
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

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.interpolationForAttribute('action') as any;
  }

  // alert_description - computed: true, optional: false, required: false
  public get alertDescription() {
    return this.getStringAttribute('alert_description');
  }

  // alert_name - computed: true, optional: false, required: false
  public get alertName() {
    return this.getStringAttribute('alert_name');
  }

  // alert_sensitivity_threshold - computed: true, optional: false, required: false
  public get alertSensitivityThreshold() {
    return this.getNumberAttribute('alert_sensitivity_threshold');
  }

  // anomaly_detector_arn - computed: true, optional: false, required: false
  public get anomalyDetectorArn() {
    return this.getStringAttribute('anomaly_detector_arn');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
