// https://www.terraform.io/docs/providers/awscc/d/networkfirewall_rule_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccNetworkfirewallRuleGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_rule_group.html#id DataAwsccNetworkfirewallRuleGroup#id}
  */
  readonly id: string;
}
export class DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets extends cdktf.ComplexComputedList {

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getListAttribute('definition');
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    definition: cdktf.listMapper(cdktf.stringToTerraform)(struct!.definition),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets extends cdktf.ComplexComputedList {

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getListAttribute('definition');
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    definition: cdktf.listMapper(cdktf.stringToTerraform)(struct!.definition),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables extends cdktf.ComplexComputedList {

  // ip_sets - computed: true, optional: false, required: false
  public get ipSets() {
    return this.interpolationForAttribute('ip_sets') as any;
  }

  // port_sets - computed: true, optional: false, required: false
  public get portSets() {
    return this.interpolationForAttribute('port_sets') as any;
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip_sets: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.ipSets),
    port_sets: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.portSets),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList extends cdktf.ComplexComputedList {

  // generated_rules_type - computed: true, optional: false, required: false
  public get generatedRulesType() {
    return this.getStringAttribute('generated_rules_type');
  }

  // target_types - computed: true, optional: false, required: false
  public get targetTypes() {
    return this.getListAttribute('target_types');
  }

  // targets - computed: true, optional: false, required: false
  public get targets() {
    return this.getListAttribute('targets');
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    generated_rules_type: cdktf.stringToTerraform(struct!.generatedRulesType),
    target_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetTypes),
    targets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targets),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader extends cdktf.ComplexComputedList {

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader): any {
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

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions extends cdktf.ComplexComputedList {

  // keyword - computed: true, optional: false, required: false
  public get keyword() {
    return this.getStringAttribute('keyword');
  }

  // settings - computed: true, optional: false, required: false
  public get settings() {
    return this.getListAttribute('settings');
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    keyword: cdktf.stringToTerraform(struct!.keyword),
    settings: cdktf.listMapper(cdktf.stringToTerraform)(struct!.settings),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules extends cdktf.ComplexComputedList {

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // header - computed: true, optional: false, required: false
  public get header() {
    return this.interpolationForAttribute('header') as any;
  }

  // rule_options - computed: true, optional: false, required: false
  public get ruleOptions() {
    return this.interpolationForAttribute('rule_options') as any;
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    header: dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderToTerraform(struct!.header),
    rule_options: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsToTerraform)(struct!.ruleOptions),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions extends cdktf.ComplexComputedList {

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction extends cdktf.ComplexComputedList {

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return this.interpolationForAttribute('dimensions') as any;
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimensions: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform)(struct!.dimensions),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition extends cdktf.ComplexComputedList {

  // publish_metric_action - computed: true, optional: false, required: false
  public get publishMetricAction() {
    return this.interpolationForAttribute('publish_metric_action') as any;
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    publish_metric_action: dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToTerraform(struct!.publishMetricAction),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions extends cdktf.ComplexComputedList {

  // action_definition - computed: true, optional: false, required: false
  public get actionDefinition() {
    return this.interpolationForAttribute('action_definition') as any;
  }

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_definition: dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToTerraform(struct!.actionDefinition),
    action_name: cdktf.stringToTerraform(struct!.actionName),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts extends cdktf.ComplexComputedList {

  // from_port - computed: true, optional: false, required: false
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations extends cdktf.ComplexComputedList {

  // address_definition - computed: true, optional: false, required: false
  public get addressDefinition() {
    return this.getStringAttribute('address_definition');
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address_definition: cdktf.stringToTerraform(struct!.addressDefinition),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts extends cdktf.ComplexComputedList {

  // from_port - computed: true, optional: false, required: false
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources extends cdktf.ComplexComputedList {

  // address_definition - computed: true, optional: false, required: false
  public get addressDefinition() {
    return this.getStringAttribute('address_definition');
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address_definition: cdktf.stringToTerraform(struct!.addressDefinition),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags extends cdktf.ComplexComputedList {

  // flags - computed: true, optional: false, required: false
  public get flags() {
    return this.getListAttribute('flags');
  }

  // masks - computed: true, optional: false, required: false
  public get masks() {
    return this.getListAttribute('masks');
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.flags),
    masks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.masks),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes extends cdktf.ComplexComputedList {

  // destination_ports - computed: true, optional: false, required: false
  public get destinationPorts() {
    return this.interpolationForAttribute('destination_ports') as any;
  }

  // destinations - computed: true, optional: false, required: false
  public get destinations() {
    return this.interpolationForAttribute('destinations') as any;
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.interpolationForAttribute('protocols') as any;
  }

  // source_ports - computed: true, optional: false, required: false
  public get sourcePorts() {
    return this.interpolationForAttribute('source_ports') as any;
  }

  // sources - computed: true, optional: false, required: false
  public get sources() {
    return this.interpolationForAttribute('sources') as any;
  }

  // tcp_flags - computed: true, optional: false, required: false
  public get tcpFlags() {
    return this.interpolationForAttribute('tcp_flags') as any;
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_ports: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToTerraform)(struct!.destinationPorts),
    destinations: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToTerraform)(struct!.destinations),
    protocols: cdktf.listMapper(cdktf.numberToTerraform)(struct!.protocols),
    source_ports: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToTerraform)(struct!.sourcePorts),
    sources: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToTerraform)(struct!.sources),
    tcp_flags: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToTerraform)(struct!.tcpFlags),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition extends cdktf.ComplexComputedList {

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // match_attributes - computed: true, optional: false, required: false
  public get matchAttributes() {
    return this.interpolationForAttribute('match_attributes') as any;
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    match_attributes: dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToTerraform(struct!.matchAttributes),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules extends cdktf.ComplexComputedList {

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // rule_definition - computed: true, optional: false, required: false
  public get ruleDefinition() {
    return this.interpolationForAttribute('rule_definition') as any;
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    rule_definition: dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToTerraform(struct!.ruleDefinition),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions extends cdktf.ComplexComputedList {

  // custom_actions - computed: true, optional: false, required: false
  public get customActions() {
    return this.interpolationForAttribute('custom_actions') as any;
  }

  // stateless_rules - computed: true, optional: false, required: false
  public get statelessRules() {
    return this.interpolationForAttribute('stateless_rules') as any;
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_actions: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToTerraform)(struct!.customActions),
    stateless_rules: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToTerraform)(struct!.statelessRules),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource extends cdktf.ComplexComputedList {

  // rules_source_list - computed: true, optional: false, required: false
  public get rulesSourceList() {
    return this.interpolationForAttribute('rules_source_list') as any;
  }

  // rules_string - computed: true, optional: false, required: false
  public get rulesString() {
    return this.getStringAttribute('rules_string');
  }

  // stateful_rules - computed: true, optional: false, required: false
  public get statefulRules() {
    return this.interpolationForAttribute('stateful_rules') as any;
  }

  // stateless_rules_and_custom_actions - computed: true, optional: false, required: false
  public get statelessRulesAndCustomActions() {
    return this.interpolationForAttribute('stateless_rules_and_custom_actions') as any;
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rules_source_list: dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct!.rulesSourceList),
    rules_string: cdktf.stringToTerraform(struct!.rulesString),
    stateful_rules: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesToTerraform)(struct!.statefulRules),
    stateless_rules_and_custom_actions: dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct!.statelessRulesAndCustomActions),
  }
}

export class DataAwsccNetworkfirewallRuleGroupRuleGroup extends cdktf.ComplexComputedList {

  // rule_variables - computed: true, optional: false, required: false
  public get ruleVariables() {
    return this.interpolationForAttribute('rule_variables') as any;
  }

  // rules_source - computed: true, optional: false, required: false
  public get rulesSource() {
    return this.interpolationForAttribute('rules_source') as any;
  }
}

export function dataAwsccNetworkfirewallRuleGroupRuleGroupToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupRuleGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rule_variables: dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct!.ruleVariables),
    rules_source: dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct!.rulesSource),
  }
}

export class DataAwsccNetworkfirewallRuleGroupTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccNetworkfirewallRuleGroupTagsToTerraform(struct?: DataAwsccNetworkfirewallRuleGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_rule_group.html awscc_networkfirewall_rule_group}
*/
export class DataAwsccNetworkfirewallRuleGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_networkfirewall_rule_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_rule_group.html awscc_networkfirewall_rule_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNetworkfirewallRuleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNetworkfirewallRuleGroupConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // rule_group - computed: true, optional: false, required: false
  public get ruleGroup() {
    return this.interpolationForAttribute('rule_group') as any;
  }

  // rule_group_arn - computed: true, optional: false, required: false
  public get ruleGroupArn() {
    return this.getStringAttribute('rule_group_arn');
  }

  // rule_group_id - computed: true, optional: false, required: false
  public get ruleGroupId() {
    return this.getStringAttribute('rule_group_id');
  }

  // rule_group_name - computed: true, optional: false, required: false
  public get ruleGroupName() {
    return this.getStringAttribute('rule_group_name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
