import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkfirewallRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#capacity NetworkfirewallRuleGroup#capacity}
    */
    readonly capacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#description NetworkfirewallRuleGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#rule_group NetworkfirewallRuleGroup#rule_group}
    */
    readonly ruleGroup?: NetworkfirewallRuleGroupRuleGroup;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#rule_group_name NetworkfirewallRuleGroup#rule_group_name}
    */
    readonly ruleGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#tags NetworkfirewallRuleGroup#tags}
    */
    readonly tags?: NetworkfirewallRuleGroupTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#type NetworkfirewallRuleGroup#type}
    */
    readonly type: string;
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#definition NetworkfirewallRuleGroup#definition}
    */
    readonly definition?: string[];
}
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets): any;
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#definition NetworkfirewallRuleGroup#definition}
    */
    readonly definition?: string[];
}
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets): any;
export interface NetworkfirewallRuleGroupRuleGroupRuleVariables {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#ip_sets NetworkfirewallRuleGroup#ip_sets}
    */
    readonly ipSets?: {
        [key: string]: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#port_sets NetworkfirewallRuleGroup#port_sets}
    */
    readonly portSets?: {
        [key: string]: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets;
    } | cdktf.IResolvable;
}
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariables): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#generated_rules_type NetworkfirewallRuleGroup#generated_rules_type}
    */
    readonly generatedRulesType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#target_types NetworkfirewallRuleGroup#target_types}
    */
    readonly targetTypes: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#targets NetworkfirewallRuleGroup#targets}
    */
    readonly targets: string[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#destination NetworkfirewallRuleGroup#destination}
    */
    readonly destination: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#destination_port NetworkfirewallRuleGroup#destination_port}
    */
    readonly destinationPort: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#direction NetworkfirewallRuleGroup#direction}
    */
    readonly direction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#protocol NetworkfirewallRuleGroup#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#source NetworkfirewallRuleGroup#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#source_port NetworkfirewallRuleGroup#source_port}
    */
    readonly sourcePort: string;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#keyword NetworkfirewallRuleGroup#keyword}
    */
    readonly keyword: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#settings NetworkfirewallRuleGroup#settings}
    */
    readonly settings?: string[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#action NetworkfirewallRuleGroup#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#header NetworkfirewallRuleGroup#header}
    */
    readonly header: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#rule_options NetworkfirewallRuleGroup#rule_options}
    */
    readonly ruleOptions: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#value NetworkfirewallRuleGroup#value}
    */
    readonly value: string;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#dimensions NetworkfirewallRuleGroup#dimensions}
    */
    readonly dimensions: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#publish_metric_action NetworkfirewallRuleGroup#publish_metric_action}
    */
    readonly publishMetricAction?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#action_definition NetworkfirewallRuleGroup#action_definition}
    */
    readonly actionDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#action_name NetworkfirewallRuleGroup#action_name}
    */
    readonly actionName: string;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#from_port NetworkfirewallRuleGroup#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#to_port NetworkfirewallRuleGroup#to_port}
    */
    readonly toPort: number;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#address_definition NetworkfirewallRuleGroup#address_definition}
    */
    readonly addressDefinition: string;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#from_port NetworkfirewallRuleGroup#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#to_port NetworkfirewallRuleGroup#to_port}
    */
    readonly toPort: number;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#address_definition NetworkfirewallRuleGroup#address_definition}
    */
    readonly addressDefinition: string;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#flags NetworkfirewallRuleGroup#flags}
    */
    readonly flags: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#masks NetworkfirewallRuleGroup#masks}
    */
    readonly masks?: string[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#destination_ports NetworkfirewallRuleGroup#destination_ports}
    */
    readonly destinationPorts?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#destinations NetworkfirewallRuleGroup#destinations}
    */
    readonly destinations?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#protocols NetworkfirewallRuleGroup#protocols}
    */
    readonly protocols?: number[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#source_ports NetworkfirewallRuleGroup#source_ports}
    */
    readonly sourcePorts?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#sources NetworkfirewallRuleGroup#sources}
    */
    readonly sources?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#tcp_flags NetworkfirewallRuleGroup#tcp_flags}
    */
    readonly tcpFlags?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#actions NetworkfirewallRuleGroup#actions}
    */
    readonly actions: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#match_attributes NetworkfirewallRuleGroup#match_attributes}
    */
    readonly matchAttributes: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#priority NetworkfirewallRuleGroup#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#rule_definition NetworkfirewallRuleGroup#rule_definition}
    */
    readonly ruleDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#custom_actions NetworkfirewallRuleGroup#custom_actions}
    */
    readonly customActions?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#stateless_rules NetworkfirewallRuleGroup#stateless_rules}
    */
    readonly statelessRules: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#rules_source_list NetworkfirewallRuleGroup#rules_source_list}
    */
    readonly rulesSourceList?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#rules_string NetworkfirewallRuleGroup#rules_string}
    */
    readonly rulesString?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#stateful_rules NetworkfirewallRuleGroup#stateful_rules}
    */
    readonly statefulRules?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#stateless_rules_and_custom_actions NetworkfirewallRuleGroup#stateless_rules_and_custom_actions}
    */
    readonly statelessRulesAndCustomActions?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSource): any;
export interface NetworkfirewallRuleGroupRuleGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#rule_variables NetworkfirewallRuleGroup#rule_variables}
    */
    readonly ruleVariables?: NetworkfirewallRuleGroupRuleGroupRuleVariables;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#rules_source NetworkfirewallRuleGroup#rules_source}
    */
    readonly rulesSource: NetworkfirewallRuleGroupRuleGroupRulesSource;
}
export declare function networkfirewallRuleGroupRuleGroupToTerraform(struct?: NetworkfirewallRuleGroupRuleGroup): any;
export interface NetworkfirewallRuleGroupTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#key NetworkfirewallRuleGroup#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#value NetworkfirewallRuleGroup#value}
    */
    readonly value: string;
}
export declare function networkfirewallRuleGroupTagsToTerraform(struct?: NetworkfirewallRuleGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html awscc_networkfirewall_rule_group}
*/
export declare class NetworkfirewallRuleGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html awscc_networkfirewall_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallRuleGroupConfig
    */
    constructor(scope: Construct, id: string, config: NetworkfirewallRuleGroupConfig);
    private _capacity;
    get capacity(): number;
    set capacity(value: number);
    get capacityInput(): number;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _ruleGroup?;
    get ruleGroup(): NetworkfirewallRuleGroupRuleGroup;
    set ruleGroup(value: NetworkfirewallRuleGroupRuleGroup);
    resetRuleGroup(): void;
    get ruleGroupInput(): NetworkfirewallRuleGroupRuleGroup | undefined;
    get ruleGroupArn(): string;
    get ruleGroupId(): string;
    private _ruleGroupName;
    get ruleGroupName(): string;
    set ruleGroupName(value: string);
    get ruleGroupNameInput(): string;
    private _tags?;
    get tags(): NetworkfirewallRuleGroupTags[];
    set tags(value: NetworkfirewallRuleGroupTags[]);
    resetTags(): void;
    get tagsInput(): NetworkfirewallRuleGroupTags[] | undefined;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
