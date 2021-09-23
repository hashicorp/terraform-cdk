// https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LookoutmetricsAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html#action LookoutmetricsAlert#action}
  */
  readonly action: LookoutmetricsAlertAction;
  /**
  * A description for the alert.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html#alert_description LookoutmetricsAlert#alert_description}
  */
  readonly alertDescription?: string;
  /**
  * The name of the alert. If not provided, a name is generated automatically.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html#alert_name LookoutmetricsAlert#alert_name}
  */
  readonly alertName?: string;
  /**
  * A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html#alert_sensitivity_threshold LookoutmetricsAlert#alert_sensitivity_threshold}
  */
  readonly alertSensitivityThreshold: number;
  /**
  * The Amazon resource name (ARN) of the Anomaly Detector to alert.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html#anomaly_detector_arn LookoutmetricsAlert#anomaly_detector_arn}
  */
  readonly anomalyDetectorArn: string;
}
export interface LookoutmetricsAlertActionLambdaConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html#lambda_arn LookoutmetricsAlert#lambda_arn}
  */
  readonly lambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html#role_arn LookoutmetricsAlert#role_arn}
  */
  readonly roleArn: string;
}

export function lookoutmetricsAlertActionLambdaConfigurationToTerraform(struct?: LookoutmetricsAlertActionLambdaConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface LookoutmetricsAlertActionSnsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html#role_arn LookoutmetricsAlert#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html#sns_topic_arn LookoutmetricsAlert#sns_topic_arn}
  */
  readonly snsTopicArn: string;
}

export function lookoutmetricsAlertActionSnsConfigurationToTerraform(struct?: LookoutmetricsAlertActionSnsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    sns_topic_arn: cdktf.stringToTerraform(struct!.snsTopicArn),
  }
}

export interface LookoutmetricsAlertAction {
  /**
  * Configuration options for a Lambda alert action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html#lambda_configuration LookoutmetricsAlert#lambda_configuration}
  */
  readonly lambdaConfiguration?: LookoutmetricsAlertActionLambdaConfiguration;
  /**
  * Configuration options for an SNS alert action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html#sns_configuration LookoutmetricsAlert#sns_configuration}
  */
  readonly snsConfiguration?: LookoutmetricsAlertActionSnsConfiguration;
}

export function lookoutmetricsAlertActionToTerraform(struct?: LookoutmetricsAlertAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    lambda_configuration: lookoutmetricsAlertActionLambdaConfigurationToTerraform(struct!.lambdaConfiguration),
    sns_configuration: lookoutmetricsAlertActionSnsConfigurationToTerraform(struct!.snsConfiguration),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html awscc_lookoutmetrics_alert}
*/
export class LookoutmetricsAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_lookoutmetrics_alert";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html awscc_lookoutmetrics_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LookoutmetricsAlertConfig
  */
  public constructor(scope: Construct, id: string, config: LookoutmetricsAlertConfig) {
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
    this._action = config.action;
    this._alertDescription = config.alertDescription;
    this._alertName = config.alertName;
    this._alertSensitivityThreshold = config.alertSensitivityThreshold;
    this._anomalyDetectorArn = config.anomalyDetectorArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action: LookoutmetricsAlertAction;
  public get action() {
    return this.interpolationForAttribute('action') as any;
  }
  public set action(value: LookoutmetricsAlertAction) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // alert_description - computed: true, optional: true, required: false
  private _alertDescription?: string;
  public get alertDescription() {
    return this.getStringAttribute('alert_description');
  }
  public set alertDescription(value: string) {
    this._alertDescription = value;
  }
  public resetAlertDescription() {
    this._alertDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDescriptionInput() {
    return this._alertDescription
  }

  // alert_name - computed: true, optional: true, required: false
  private _alertName?: string;
  public get alertName() {
    return this.getStringAttribute('alert_name');
  }
  public set alertName(value: string) {
    this._alertName = value;
  }
  public resetAlertName() {
    this._alertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertNameInput() {
    return this._alertName
  }

  // alert_sensitivity_threshold - computed: false, optional: false, required: true
  private _alertSensitivityThreshold: number;
  public get alertSensitivityThreshold() {
    return this.getNumberAttribute('alert_sensitivity_threshold');
  }
  public set alertSensitivityThreshold(value: number) {
    this._alertSensitivityThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSensitivityThresholdInput() {
    return this._alertSensitivityThreshold
  }

  // anomaly_detector_arn - computed: false, optional: false, required: true
  private _anomalyDetectorArn: string;
  public get anomalyDetectorArn() {
    return this.getStringAttribute('anomaly_detector_arn');
  }
  public set anomalyDetectorArn(value: string) {
    this._anomalyDetectorArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyDetectorArnInput() {
    return this._anomalyDetectorArn
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: lookoutmetricsAlertActionToTerraform(this._action),
      alert_description: cdktf.stringToTerraform(this._alertDescription),
      alert_name: cdktf.stringToTerraform(this._alertName),
      alert_sensitivity_threshold: cdktf.numberToTerraform(this._alertSensitivityThreshold),
      anomaly_detector_arn: cdktf.stringToTerraform(this._anomalyDetectorArn),
    };
  }
}
