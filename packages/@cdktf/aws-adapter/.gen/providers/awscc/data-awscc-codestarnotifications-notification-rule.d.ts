import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCodestarnotificationsNotificationRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/codestarnotifications_notification_rule.html#id DataAwsccCodestarnotificationsNotificationRule#id}
    */
    readonly id: string;
}
export declare class DataAwsccCodestarnotificationsNotificationRuleTargets extends cdktf.ComplexComputedList {
    get targetAddress(): string;
    get targetType(): string;
}
export declare function dataAwsccCodestarnotificationsNotificationRuleTargetsToTerraform(struct?: DataAwsccCodestarnotificationsNotificationRuleTargets): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/codestarnotifications_notification_rule.html awscc_codestarnotifications_notification_rule}
*/
export declare class DataAwsccCodestarnotificationsNotificationRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/codestarnotifications_notification_rule.html awscc_codestarnotifications_notification_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCodestarnotificationsNotificationRuleConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCodestarnotificationsNotificationRuleConfig);
    get arn(): string;
    get detailType(): string;
    get eventTypeIds(): string[];
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get resource(): string;
    get status(): string;
    tags(key: string): string;
    get targets(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
