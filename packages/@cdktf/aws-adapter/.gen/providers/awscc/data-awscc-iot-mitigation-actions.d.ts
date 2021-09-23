import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotMitigationActionsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_mitigation_actions.html awscc_iot_mitigation_actions}
*/
export declare class DataAwsccIotMitigationActions extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_mitigation_actions.html awscc_iot_mitigation_actions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotMitigationActionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIotMitigationActionsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
