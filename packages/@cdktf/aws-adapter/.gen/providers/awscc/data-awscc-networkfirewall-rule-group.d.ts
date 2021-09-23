import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNetworkfirewallRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_rule_group.html#id DataAwsccNetworkfirewallRuleGroup#id}
    */
    readonly id: string;
}
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets extends cdktf.ComplexComputedList {
    get definition(): string[];
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets extends cdktf.ComplexComputedList {
    get definition(): string[];
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables extends cdktf.ComplexComputedList {
    get ipSets(): any;
    get portSets(): any;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList extends cdktf.ComplexComputedList {
    get generatedRulesType(): string;
    get targetTypes(): string[];
    get targets(): string[];
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader extends cdktf.ComplexComputedList {
    get destination(): string;
    get destinationPort(): string;
    get direction(): string;
    get protocol(): string;
    get source(): string;
    get sourcePort(): string;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions extends cdktf.ComplexComputedList {
    get keyword(): string;
    get settings(): string[];
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules extends cdktf.ComplexComputedList {
    get action(): string;
    get header(): any;
    get ruleOptions(): any;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions extends cdktf.ComplexComputedList {
    get value(): string;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction extends cdktf.ComplexComputedList {
    get dimensions(): any;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition extends cdktf.ComplexComputedList {
    get publishMetricAction(): any;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions extends cdktf.ComplexComputedList {
    get actionDefinition(): any;
    get actionName(): string;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts extends cdktf.ComplexComputedList {
    get fromPort(): number;
    get toPort(): number;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations extends cdktf.ComplexComputedList {
    get addressDefinition(): string;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts extends cdktf.ComplexComputedList {
    get fromPort(): number;
    get toPort(): number;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources extends cdktf.ComplexComputedList {
    get addressDefinition(): string;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags extends cdktf.ComplexComputedList {
    get flags(): string[];
    get masks(): string[];
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes extends cdktf.ComplexComputedList {
    get destinationPorts(): any;
    get destinations(): any;
    get protocols(): any;
    get sourcePorts(): any;
    get sources(): any;
    get tcpFlags(): any;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition extends cdktf.ComplexComputedList {
    get actions(): string[];
    get matchAttributes(): any;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules extends cdktf.ComplexComputedList {
    get priority(): number;
    get ruleDefinition(): any;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions extends cdktf.ComplexComputedList {
    get customActions(): any;
    get statelessRules(): any;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource extends cdktf.ComplexComputedList {
    get rulesSourceList(): any;
    get rulesString(): string;
    get statefulRules(): any;
    get statelessRulesAndCustomActions(): any;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource): any;
export declare class DataAwsccNetworkfirewallRuleGroupRuleGroup extends cdktf.ComplexComputedList {
    get ruleVariables(): any;
    get rulesSource(): any;
}
export declare function dataAwsccNetworkfirewallRuleGroupRuleGroupToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroup): any;
export declare class DataAwsccNetworkfirewallRuleGroupTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccNetworkfirewallRuleGroupTagsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_rule_group.html awscc_networkfirewall_rule_group}
*/
export declare class DataAwsccNetworkfirewallRuleGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_rule_group.html awscc_networkfirewall_rule_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNetworkfirewallRuleGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccNetworkfirewallRuleGroupConfig);
    get capacity(): number;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get ruleGroup(): any;
    get ruleGroupArn(): string;
    get ruleGroupId(): string;
    get ruleGroupName(): string;
    get tags(): any;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
