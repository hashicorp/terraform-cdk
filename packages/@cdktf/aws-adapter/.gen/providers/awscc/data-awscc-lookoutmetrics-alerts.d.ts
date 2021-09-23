import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLookoutmetricsAlertsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_alerts.html awscc_lookoutmetrics_alerts}
*/
export declare class DataAwsccLookoutmetricsAlerts extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_alerts.html awscc_lookoutmetrics_alerts} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLookoutmetricsAlertsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccLookoutmetricsAlertsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
