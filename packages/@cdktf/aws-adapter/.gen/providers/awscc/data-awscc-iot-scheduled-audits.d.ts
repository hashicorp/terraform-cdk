import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotScheduledAuditsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_scheduled_audits.html awscc_iot_scheduled_audits}
*/
export declare class DataAwsccIotScheduledAudits extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_scheduled_audits.html awscc_iot_scheduled_audits} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotScheduledAuditsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIotScheduledAuditsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
