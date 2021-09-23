import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53RecoverycontrolSafetyRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_safety_rule.html#id DataAwsccRoute53RecoverycontrolSafetyRule#id}
    */
    readonly id: string;
}
export declare class DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule extends cdktf.ComplexComputedList {
    get assertedControls(): string[];
    get waitPeriodMs(): number;
}
export declare function dataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleToTerraform(struct?: DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule): any;
export declare class DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule extends cdktf.ComplexComputedList {
    get gatingControls(): string[];
    get targetControls(): string[];
    get waitPeriodMs(): number;
}
export declare function dataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleToTerraform(struct?: DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule): any;
export declare class DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig extends cdktf.ComplexComputedList {
    get inverted(): any;
    get threshold(): number;
    get type(): string;
}
export declare function dataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigToTerraform(struct?: DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_safety_rule.html awscc_route53recoverycontrol_safety_rule}
*/
export declare class DataAwsccRoute53RecoverycontrolSafetyRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_safety_rule.html awscc_route53recoverycontrol_safety_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53RecoverycontrolSafetyRuleConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoverycontrolSafetyRuleConfig);
    get assertionRule(): any;
    get controlPanelArn(): string;
    get gatingRule(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get ruleConfig(): any;
    get safetyRuleArn(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
