// https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    definition: cdktf.listMapper(cdktf.stringToTerraform)(struct!.definition),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#definition NetworkfirewallRuleGroup#definition}
  */
  readonly definition?: string[];
}

export function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    definition: cdktf.listMapper(cdktf.stringToTerraform)(struct!.definition),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRuleVariables {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#ip_sets NetworkfirewallRuleGroup#ip_sets}
  */
  readonly ipSets?: { [key: string]: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#port_sets NetworkfirewallRuleGroup#port_sets}
  */
  readonly portSets?: { [key: string]: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets } | cdktf.IResolvable;
}

export function networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip_sets: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.ipSets),
    port_sets: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.portSets),
  }
}

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

export function networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    generated_rules_type: cdktf.stringToTerraform(struct!.generatedRulesType),
    target_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetTypes),
    targets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targets),
  }
}

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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    direction: cdktf.stringToTerraform(struct!.direction),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source: cdktf.stringToTerraform(struct!.source),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}

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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    keyword: cdktf.stringToTerraform(struct!.keyword),
    settings: cdktf.listMapper(cdktf.stringToTerraform)(struct!.settings),
  }
}

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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    header: networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderToTerraform(struct!.header),
    rule_options: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsToTerraform)(struct!.ruleOptions),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#value NetworkfirewallRuleGroup#value}
  */
  readonly value: string;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#dimensions NetworkfirewallRuleGroup#dimensions}
  */
  readonly dimensions: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions[];
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimensions: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform)(struct!.dimensions),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#publish_metric_action NetworkfirewallRuleGroup#publish_metric_action}
  */
  readonly publishMetricAction?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    publish_metric_action: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToTerraform(struct!.publishMetricAction),
  }
}

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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_definition: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToTerraform(struct!.actionDefinition),
    action_name: cdktf.stringToTerraform(struct!.actionName),
  }
}

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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#address_definition NetworkfirewallRuleGroup#address_definition}
  */
  readonly addressDefinition: string;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address_definition: cdktf.stringToTerraform(struct!.addressDefinition),
  }
}

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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html#address_definition NetworkfirewallRuleGroup#address_definition}
  */
  readonly addressDefinition: string;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address_definition: cdktf.stringToTerraform(struct!.addressDefinition),
  }
}

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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.flags),
    masks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.masks),
  }
}

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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_ports: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToTerraform)(struct!.destinationPorts),
    destinations: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToTerraform)(struct!.destinations),
    protocols: cdktf.listMapper(cdktf.numberToTerraform)(struct!.protocols),
    source_ports: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToTerraform)(struct!.sourcePorts),
    sources: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToTerraform)(struct!.sources),
    tcp_flags: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToTerraform)(struct!.tcpFlags),
  }
}

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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    match_attributes: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToTerraform(struct!.matchAttributes),
  }
}

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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    rule_definition: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToTerraform(struct!.ruleDefinition),
  }
}

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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_actions: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToTerraform)(struct!.customActions),
    stateless_rules: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToTerraform)(struct!.statelessRules),
  }
}

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

export function networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rules_source_list: networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct!.rulesSourceList),
    rules_string: cdktf.stringToTerraform(struct!.rulesString),
    stateful_rules: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesToTerraform)(struct!.statefulRules),
    stateless_rules_and_custom_actions: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct!.statelessRulesAndCustomActions),
  }
}

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

export function networkfirewallRuleGroupRuleGroupToTerraform(struct?: NetworkfirewallRuleGroupRuleGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rule_variables: networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct!.ruleVariables),
    rules_source: networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct!.rulesSource),
  }
}

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

export function networkfirewallRuleGroupTagsToTerraform(struct?: NetworkfirewallRuleGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html awscc_networkfirewall_rule_group}
*/
export class NetworkfirewallRuleGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_networkfirewall_rule_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_rule_group.html awscc_networkfirewall_rule_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkfirewallRuleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkfirewallRuleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkfirewall_rule_group',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._capacity = config.capacity;
    this._description = config.description;
    this._ruleGroup = config.ruleGroup;
    this._ruleGroupName = config.ruleGroupName;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: false, optional: false, required: true
  private _capacity: number;
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule_group - computed: false, optional: true, required: false
  private _ruleGroup?: NetworkfirewallRuleGroupRuleGroup;
  public get ruleGroup() {
    return this.interpolationForAttribute('rule_group') as any;
  }
  public set ruleGroup(value: NetworkfirewallRuleGroupRuleGroup ) {
    this._ruleGroup = value;
  }
  public resetRuleGroup() {
    this._ruleGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupInput() {
    return this._ruleGroup
  }

  // rule_group_arn - computed: true, optional: false, required: false
  public get ruleGroupArn() {
    return this.getStringAttribute('rule_group_arn');
  }

  // rule_group_id - computed: true, optional: false, required: false
  public get ruleGroupId() {
    return this.getStringAttribute('rule_group_id');
  }

  // rule_group_name - computed: false, optional: false, required: true
  private _ruleGroupName: string;
  public get ruleGroupName() {
    return this.getStringAttribute('rule_group_name');
  }
  public set ruleGroupName(value: string) {
    this._ruleGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupNameInput() {
    return this._ruleGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: NetworkfirewallRuleGroupTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: NetworkfirewallRuleGroupTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity: cdktf.numberToTerraform(this._capacity),
      description: cdktf.stringToTerraform(this._description),
      rule_group: networkfirewallRuleGroupRuleGroupToTerraform(this._ruleGroup),
      rule_group_name: cdktf.stringToTerraform(this._ruleGroupName),
      tags: cdktf.listMapper(networkfirewallRuleGroupTagsToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
