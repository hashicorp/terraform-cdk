import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function lookoutmetricsAlertActionLambdaConfigurationToTerraform(struct?: LookoutmetricsAlertActionLambdaConfiguration): any;
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
export declare function lookoutmetricsAlertActionSnsConfigurationToTerraform(struct?: LookoutmetricsAlertActionSnsConfiguration): any;
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
export declare function lookoutmetricsAlertActionToTerraform(struct?: LookoutmetricsAlertAction): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html awscc_lookoutmetrics_alert}
*/
export declare class LookoutmetricsAlert extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_alert.html awscc_lookoutmetrics_alert} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LookoutmetricsAlertConfig
    */
    constructor(scope: Construct, id: string, config: LookoutmetricsAlertConfig);
    private _action;
    get action(): LookoutmetricsAlertAction;
    set action(value: LookoutmetricsAlertAction);
    get actionInput(): LookoutmetricsAlertAction;
    private _alertDescription?;
    get alertDescription(): string;
    set alertDescription(value: string);
    resetAlertDescription(): void;
    get alertDescriptionInput(): string | undefined;
    private _alertName?;
    get alertName(): string;
    set alertName(value: string);
    resetAlertName(): void;
    get alertNameInput(): string | undefined;
    private _alertSensitivityThreshold;
    get alertSensitivityThreshold(): number;
    set alertSensitivityThreshold(value: number);
    get alertSensitivityThresholdInput(): number;
    private _anomalyDetectorArn;
    get anomalyDetectorArn(): string;
    set anomalyDetectorArn(value: string);
    get anomalyDetectorArnInput(): string;
    get arn(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
