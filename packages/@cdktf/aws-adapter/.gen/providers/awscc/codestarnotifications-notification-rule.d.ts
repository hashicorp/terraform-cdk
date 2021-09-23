import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodestarnotificationsNotificationRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#detail_type CodestarnotificationsNotificationRule#detail_type}
    */
    readonly detailType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}
    */
    readonly eventTypeIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#name CodestarnotificationsNotificationRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#resource CodestarnotificationsNotificationRule#resource}
    */
    readonly resource: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#status CodestarnotificationsNotificationRule#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#tags CodestarnotificationsNotificationRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#targets CodestarnotificationsNotificationRule#targets}
    */
    readonly targets: CodestarnotificationsNotificationRuleTargets[];
}
export interface CodestarnotificationsNotificationRuleTargets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#target_address CodestarnotificationsNotificationRule#target_address}
    */
    readonly targetAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#target_type CodestarnotificationsNotificationRule#target_type}
    */
    readonly targetType: string;
}
export declare function codestarnotificationsNotificationRuleTargetsToTerraform(struct?: CodestarnotificationsNotificationRuleTargets): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html awscc_codestarnotifications_notification_rule}
*/
export declare class CodestarnotificationsNotificationRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html awscc_codestarnotifications_notification_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodestarnotificationsNotificationRuleConfig
    */
    constructor(scope: Construct, id: string, config: CodestarnotificationsNotificationRuleConfig);
    get arn(): string;
    private _detailType;
    get detailType(): string;
    set detailType(value: string);
    get detailTypeInput(): string;
    private _eventTypeIds;
    get eventTypeIds(): string[];
    set eventTypeIds(value: string[]);
    get eventTypeIdsInput(): string[];
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _resource;
    get resource(): string;
    set resource(value: string);
    get resourceInput(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    private _targets;
    get targets(): CodestarnotificationsNotificationRuleTargets[];
    set targets(value: CodestarnotificationsNotificationRuleTargets[]);
    get targetsInput(): CodestarnotificationsNotificationRuleTargets[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
