import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLookoutmetricsAlertConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_alert.html#id DataAwsccLookoutmetricsAlert#id}
    */
    readonly id: string;
}
export declare class DataAwsccLookoutmetricsAlertActionLambdaConfiguration extends cdktf.ComplexComputedList {
    get lambdaArn(): string;
    get roleArn(): string;
}
export declare function dataAwsccLookoutmetricsAlertActionLambdaConfigurationToTerraform(struct?: DataAwsccLookoutmetricsAlertActionLambdaConfiguration): any;
export declare class DataAwsccLookoutmetricsAlertActionSnsConfiguration extends cdktf.ComplexComputedList {
    get roleArn(): string;
    get snsTopicArn(): string;
}
export declare function dataAwsccLookoutmetricsAlertActionSnsConfigurationToTerraform(struct?: DataAwsccLookoutmetricsAlertActionSnsConfiguration): any;
export declare class DataAwsccLookoutmetricsAlertAction extends cdktf.ComplexComputedList {
    get lambdaConfiguration(): any;
    get snsConfiguration(): any;
}
export declare function dataAwsccLookoutmetricsAlertActionToTerraform(struct?: DataAwsccLookoutmetricsAlertAction): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_alert.html awscc_lookoutmetrics_alert}
*/
export declare class DataAwsccLookoutmetricsAlert extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_alert.html awscc_lookoutmetrics_alert} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLookoutmetricsAlertConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLookoutmetricsAlertConfig);
    get action(): any;
    get alertDescription(): string;
    get alertName(): string;
    get alertSensitivityThreshold(): number;
    get anomalyDetectorArn(): string;
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
