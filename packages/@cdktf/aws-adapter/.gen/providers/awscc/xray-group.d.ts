import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface XrayGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * The filter expression defining criteria by which to group traces.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html#filter_expression XrayGroup#filter_expression}
    */
    readonly filterExpression?: string;
    /**
    * The case-sensitive name of the new group. Names must be unique.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html#group_name XrayGroup#group_name}
    */
    readonly groupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html#insights_configuration XrayGroup#insights_configuration}
    */
    readonly insightsConfiguration?: XrayGroupInsightsConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html#tags XrayGroup#tags}
    */
    readonly tags?: XrayGroupTags[];
}
export interface XrayGroupInsightsConfiguration {
    /**
    * Set the InsightsEnabled value to true to enable insights or false to disable insights.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html#insights_enabled XrayGroup#insights_enabled}
    */
    readonly insightsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be enabled on a group with InsightsEnabled set to true.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html#notifications_enabled XrayGroup#notifications_enabled}
    */
    readonly notificationsEnabled?: boolean | cdktf.IResolvable;
}
export declare function xrayGroupInsightsConfigurationToTerraform(struct?: XrayGroupInsightsConfiguration): any;
export interface XrayGroupTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html#key XrayGroup#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html#value XrayGroup#value}
    */
    readonly value: string;
}
export declare function xrayGroupTagsToTerraform(struct?: XrayGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html awscc_xray_group}
*/
export declare class XrayGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/xray_group.html awscc_xray_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options XrayGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: XrayGroupConfig);
    private _filterExpression?;
    get filterExpression(): string;
    set filterExpression(value: string);
    resetFilterExpression(): void;
    get filterExpressionInput(): string | undefined;
    get groupArn(): string;
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    resetGroupName(): void;
    get groupNameInput(): string | undefined;
    get id(): string;
    private _insightsConfiguration?;
    get insightsConfiguration(): XrayGroupInsightsConfiguration;
    set insightsConfiguration(value: XrayGroupInsightsConfiguration);
    resetInsightsConfiguration(): void;
    get insightsConfigurationInput(): XrayGroupInsightsConfiguration | undefined;
    private _tags?;
    get tags(): XrayGroupTags[];
    set tags(value: XrayGroupTags[]);
    resetTags(): void;
    get tagsInput(): XrayGroupTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
