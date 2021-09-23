"use strict";
// https://www.terraform.io/docs/providers/awscc/d/networkfirewall_rule_group.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccNetworkfirewallRuleGroup = exports.dataAwsccNetworkfirewallRuleGroupTagsToTerraform = exports.DataAwsccNetworkfirewallRuleGroupTags = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroup = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets = exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform = exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets = void 0;
const cdktf = require("cdktf");
class DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets extends cdktf.ComplexComputedList {
    // definition - computed: true, optional: false, required: false
    get definition() {
        return this.getListAttribute('definition');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets = DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        definition: cdktf.listMapper(cdktf.stringToTerraform)(struct.definition),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets extends cdktf.ComplexComputedList {
    // definition - computed: true, optional: false, required: false
    get definition() {
        return this.getListAttribute('definition');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets = DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        definition: cdktf.listMapper(cdktf.stringToTerraform)(struct.definition),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables extends cdktf.ComplexComputedList {
    // ip_sets - computed: true, optional: false, required: false
    get ipSets() {
        return this.interpolationForAttribute('ip_sets');
    }
    // port_sets - computed: true, optional: false, required: false
    get portSets() {
        return this.interpolationForAttribute('port_sets');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables = DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ip_sets: cdktf.hashMapper(cdktf.anyToTerraform)(struct.ipSets),
        port_sets: cdktf.hashMapper(cdktf.anyToTerraform)(struct.portSets),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList extends cdktf.ComplexComputedList {
    // generated_rules_type - computed: true, optional: false, required: false
    get generatedRulesType() {
        return this.getStringAttribute('generated_rules_type');
    }
    // target_types - computed: true, optional: false, required: false
    get targetTypes() {
        return this.getListAttribute('target_types');
    }
    // targets - computed: true, optional: false, required: false
    get targets() {
        return this.getListAttribute('targets');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        generated_rules_type: cdktf.stringToTerraform(struct.generatedRulesType),
        target_types: cdktf.listMapper(cdktf.stringToTerraform)(struct.targetTypes),
        targets: cdktf.listMapper(cdktf.stringToTerraform)(struct.targets),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader extends cdktf.ComplexComputedList {
    // destination - computed: true, optional: false, required: false
    get destination() {
        return this.getStringAttribute('destination');
    }
    // destination_port - computed: true, optional: false, required: false
    get destinationPort() {
        return this.getStringAttribute('destination_port');
    }
    // direction - computed: true, optional: false, required: false
    get direction() {
        return this.getStringAttribute('direction');
    }
    // protocol - computed: true, optional: false, required: false
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    // source - computed: true, optional: false, required: false
    get source() {
        return this.getStringAttribute('source');
    }
    // source_port - computed: true, optional: false, required: false
    get sourcePort() {
        return this.getStringAttribute('source_port');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination: cdktf.stringToTerraform(struct.destination),
        destination_port: cdktf.stringToTerraform(struct.destinationPort),
        direction: cdktf.stringToTerraform(struct.direction),
        protocol: cdktf.stringToTerraform(struct.protocol),
        source: cdktf.stringToTerraform(struct.source),
        source_port: cdktf.stringToTerraform(struct.sourcePort),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions extends cdktf.ComplexComputedList {
    // keyword - computed: true, optional: false, required: false
    get keyword() {
        return this.getStringAttribute('keyword');
    }
    // settings - computed: true, optional: false, required: false
    get settings() {
        return this.getListAttribute('settings');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        keyword: cdktf.stringToTerraform(struct.keyword),
        settings: cdktf.listMapper(cdktf.stringToTerraform)(struct.settings),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules extends cdktf.ComplexComputedList {
    // action - computed: true, optional: false, required: false
    get action() {
        return this.getStringAttribute('action');
    }
    // header - computed: true, optional: false, required: false
    get header() {
        return this.interpolationForAttribute('header');
    }
    // rule_options - computed: true, optional: false, required: false
    get ruleOptions() {
        return this.interpolationForAttribute('rule_options');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        header: dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderToTerraform(struct.header),
        rule_options: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsToTerraform)(struct.ruleOptions),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions extends cdktf.ComplexComputedList {
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction extends cdktf.ComplexComputedList {
    // dimensions - computed: true, optional: false, required: false
    get dimensions() {
        return this.interpolationForAttribute('dimensions');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dimensions: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform)(struct.dimensions),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition extends cdktf.ComplexComputedList {
    // publish_metric_action - computed: true, optional: false, required: false
    get publishMetricAction() {
        return this.interpolationForAttribute('publish_metric_action');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        publish_metric_action: dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToTerraform(struct.publishMetricAction),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions extends cdktf.ComplexComputedList {
    // action_definition - computed: true, optional: false, required: false
    get actionDefinition() {
        return this.interpolationForAttribute('action_definition');
    }
    // action_name - computed: true, optional: false, required: false
    get actionName() {
        return this.getStringAttribute('action_name');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action_definition: dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToTerraform(struct.actionDefinition),
        action_name: cdktf.stringToTerraform(struct.actionName),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts extends cdktf.ComplexComputedList {
    // from_port - computed: true, optional: false, required: false
    get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    // to_port - computed: true, optional: false, required: false
    get toPort() {
        return this.getNumberAttribute('to_port');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from_port: cdktf.numberToTerraform(struct.fromPort),
        to_port: cdktf.numberToTerraform(struct.toPort),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations extends cdktf.ComplexComputedList {
    // address_definition - computed: true, optional: false, required: false
    get addressDefinition() {
        return this.getStringAttribute('address_definition');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        address_definition: cdktf.stringToTerraform(struct.addressDefinition),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts extends cdktf.ComplexComputedList {
    // from_port - computed: true, optional: false, required: false
    get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    // to_port - computed: true, optional: false, required: false
    get toPort() {
        return this.getNumberAttribute('to_port');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from_port: cdktf.numberToTerraform(struct.fromPort),
        to_port: cdktf.numberToTerraform(struct.toPort),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources extends cdktf.ComplexComputedList {
    // address_definition - computed: true, optional: false, required: false
    get addressDefinition() {
        return this.getStringAttribute('address_definition');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        address_definition: cdktf.stringToTerraform(struct.addressDefinition),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags extends cdktf.ComplexComputedList {
    // flags - computed: true, optional: false, required: false
    get flags() {
        return this.getListAttribute('flags');
    }
    // masks - computed: true, optional: false, required: false
    get masks() {
        return this.getListAttribute('masks');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        flags: cdktf.listMapper(cdktf.stringToTerraform)(struct.flags),
        masks: cdktf.listMapper(cdktf.stringToTerraform)(struct.masks),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes extends cdktf.ComplexComputedList {
    // destination_ports - computed: true, optional: false, required: false
    get destinationPorts() {
        return this.interpolationForAttribute('destination_ports');
    }
    // destinations - computed: true, optional: false, required: false
    get destinations() {
        return this.interpolationForAttribute('destinations');
    }
    // protocols - computed: true, optional: false, required: false
    get protocols() {
        return this.interpolationForAttribute('protocols');
    }
    // source_ports - computed: true, optional: false, required: false
    get sourcePorts() {
        return this.interpolationForAttribute('source_ports');
    }
    // sources - computed: true, optional: false, required: false
    get sources() {
        return this.interpolationForAttribute('sources');
    }
    // tcp_flags - computed: true, optional: false, required: false
    get tcpFlags() {
        return this.interpolationForAttribute('tcp_flags');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_ports: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToTerraform)(struct.destinationPorts),
        destinations: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToTerraform)(struct.destinations),
        protocols: cdktf.listMapper(cdktf.numberToTerraform)(struct.protocols),
        source_ports: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToTerraform)(struct.sourcePorts),
        sources: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToTerraform)(struct.sources),
        tcp_flags: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToTerraform)(struct.tcpFlags),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition extends cdktf.ComplexComputedList {
    // actions - computed: true, optional: false, required: false
    get actions() {
        return this.getListAttribute('actions');
    }
    // match_attributes - computed: true, optional: false, required: false
    get matchAttributes() {
        return this.interpolationForAttribute('match_attributes');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        match_attributes: dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToTerraform(struct.matchAttributes),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules extends cdktf.ComplexComputedList {
    // priority - computed: true, optional: false, required: false
    get priority() {
        return this.getNumberAttribute('priority');
    }
    // rule_definition - computed: true, optional: false, required: false
    get ruleDefinition() {
        return this.interpolationForAttribute('rule_definition');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        rule_definition: dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToTerraform(struct.ruleDefinition),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions extends cdktf.ComplexComputedList {
    // custom_actions - computed: true, optional: false, required: false
    get customActions() {
        return this.interpolationForAttribute('custom_actions');
    }
    // stateless_rules - computed: true, optional: false, required: false
    get statelessRules() {
        return this.interpolationForAttribute('stateless_rules');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        custom_actions: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToTerraform)(struct.customActions),
        stateless_rules: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToTerraform)(struct.statelessRules),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource extends cdktf.ComplexComputedList {
    // rules_source_list - computed: true, optional: false, required: false
    get rulesSourceList() {
        return this.interpolationForAttribute('rules_source_list');
    }
    // rules_string - computed: true, optional: false, required: false
    get rulesString() {
        return this.getStringAttribute('rules_string');
    }
    // stateful_rules - computed: true, optional: false, required: false
    get statefulRules() {
        return this.interpolationForAttribute('stateful_rules');
    }
    // stateless_rules_and_custom_actions - computed: true, optional: false, required: false
    get statelessRulesAndCustomActions() {
        return this.interpolationForAttribute('stateless_rules_and_custom_actions');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource = DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource;
function dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        rules_source_list: dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct.rulesSourceList),
        rules_string: cdktf.stringToTerraform(struct.rulesString),
        stateful_rules: cdktf.listMapper(dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesToTerraform)(struct.statefulRules),
        stateless_rules_and_custom_actions: dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct.statelessRulesAndCustomActions),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceToTerraform;
class DataAwsccNetworkfirewallRuleGroupRuleGroup extends cdktf.ComplexComputedList {
    // rule_variables - computed: true, optional: false, required: false
    get ruleVariables() {
        return this.interpolationForAttribute('rule_variables');
    }
    // rules_source - computed: true, optional: false, required: false
    get rulesSource() {
        return this.interpolationForAttribute('rules_source');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupRuleGroup = DataAwsccNetworkfirewallRuleGroupRuleGroup;
function dataAwsccNetworkfirewallRuleGroupRuleGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        rule_variables: dataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct.ruleVariables),
        rules_source: dataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct.rulesSource),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupRuleGroupToTerraform = dataAwsccNetworkfirewallRuleGroupRuleGroupToTerraform;
class DataAwsccNetworkfirewallRuleGroupTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccNetworkfirewallRuleGroupTags = DataAwsccNetworkfirewallRuleGroupTags;
function dataAwsccNetworkfirewallRuleGroupTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccNetworkfirewallRuleGroupTagsToTerraform = dataAwsccNetworkfirewallRuleGroupTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_rule_group.html awscc_networkfirewall_rule_group}
*/
class DataAwsccNetworkfirewallRuleGroup extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    get capacity() {
        return this.getNumberAttribute('capacity');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // rule_group - computed: true, optional: false, required: false
    get ruleGroup() {
        return this.interpolationForAttribute('rule_group');
    }
    // rule_group_arn - computed: true, optional: false, required: false
    get ruleGroupArn() {
        return this.getStringAttribute('rule_group_arn');
    }
    // rule_group_id - computed: true, optional: false, required: false
    get ruleGroupId() {
        return this.getStringAttribute('rule_group_id');
    }
    // rule_group_name - computed: true, optional: false, required: false
    get ruleGroupName() {
        return this.getStringAttribute('rule_group_name');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    }
}
exports.DataAwsccNetworkfirewallRuleGroup = DataAwsccNetworkfirewallRuleGroup;
// =================
// STATIC PROPERTIES
// =================
DataAwsccNetworkfirewallRuleGroup.tfResourceType = "awscc_networkfirewall_rule_group";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1uZXR3b3JrZmlyZXdhbGwtcnVsZS1ncm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtYXdzY2MtbmV0d29ya2ZpcmV3YWxsLXJ1bGUtZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtGQUFrRjtBQUNsRiwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFZL0IsTUFBYSw2REFBOEQsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTFHLGdFQUFnRTtJQUNoRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBTkQsc0lBTUM7QUFFRCxTQUFnQix3RUFBd0UsQ0FBQyxNQUFzRTtJQUM3SixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7S0FDMUUsQ0FBQTtBQUNILENBQUM7QUFMRCw0SkFLQztBQUVELE1BQWEsK0RBQWdFLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU1RyxnRUFBZ0U7SUFDaEUsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDRjtBQU5ELDBJQU1DO0FBRUQsU0FBZ0IsMEVBQTBFLENBQUMsTUFBd0U7SUFDakssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENB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QUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsZ0VBQWdFO0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQVEsQ0FBQztJQUM3RCxDQUFDO0lBRUQsb0VBQW9FO0lBQ3BFLElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxxRUFBcUU7SUFDckUsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDO0lBRUQsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7QUFqR0gsOEVBa0dDO0FBaEdDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csZ0RBQWMsR0FBVyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cC5odG1sI2lkIERhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGVmaW5pdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZGVmaW5pdGlvbicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZWZpbml0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRlZmluaXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzUG9ydFNldHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkZWZpbml0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdkZWZpbml0aW9uJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNQb3J0U2V0c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNQb3J0U2V0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZWZpbml0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRlZmluaXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaXBfc2V0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlwU2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpcF9zZXRzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcG9ydF9zZXRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydFNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncG9ydF9zZXRzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpcF9zZXRzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLmlwU2V0cyksXG4gICAgcG9ydF9zZXRzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLnBvcnRTZXRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VSdWxlc1NvdXJjZUxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBnZW5lcmF0ZWRfcnVsZXNfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGdlbmVyYXRlZFJ1bGVzVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dlbmVyYXRlZF9ydWxlc190eXBlJyk7XG4gIH1cblxuICAvLyB0YXJnZXRfdHlwZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YXJnZXRUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0YXJnZXRfdHlwZXMnKTtcbiAgfVxuXG4gIC8vIHRhcmdldHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YXJnZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3RhcmdldHMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VSdWxlc1NvdXJjZUxpc3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVJ1bGVzU291cmNlTGlzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBnZW5lcmF0ZWRfcnVsZXNfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5nZW5lcmF0ZWRSdWxlc1R5cGUpLFxuICAgIHRhcmdldF90eXBlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS50YXJnZXRUeXBlcyksXG4gICAgdGFyZ2V0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS50YXJnZXRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVzSGVhZGVyIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGVzdGluYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uJyk7XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbl9wb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25Qb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzdGluYXRpb25fcG9ydCcpO1xuICB9XG5cbiAgLy8gZGlyZWN0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGlyZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGlyZWN0aW9uJyk7XG4gIH1cblxuICAvLyBwcm90b2NvbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb3RvY29sKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvdG9jb2wnKTtcbiAgfVxuXG4gIC8vIHNvdXJjZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZScpO1xuICB9XG5cbiAgLy8gc291cmNlX3BvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb3VyY2VQb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX3BvcnQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVzSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVzSGVhZGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRlc3RpbmF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uKSxcbiAgICBkZXN0aW5hdGlvbl9wb3J0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uUG9ydCksXG4gICAgZGlyZWN0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRpcmVjdGlvbiksXG4gICAgcHJvdG9jb2w6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvdG9jb2wpLFxuICAgIHNvdXJjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2UpLFxuICAgIHNvdXJjZV9wb3J0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZVBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZXNSdWxlT3B0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGtleXdvcmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXl3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5d29yZCcpO1xuICB9XG5cbiAgLy8gc2V0dGluZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZXR0aW5ncycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZXNSdWxlT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlc1J1bGVPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleXdvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5d29yZCksXG4gICAgc2V0dGluZ3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2V0dGluZ3MpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY3Rpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgfVxuXG4gIC8vIGhlYWRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhlYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdoZWFkZXInKSBhcyBhbnk7XG4gIH1cblxuICAvLyBydWxlX29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBydWxlT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdydWxlX29wdGlvbnMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWN0aW9uKSxcbiAgICBoZWFkZXI6IGRhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlc0hlYWRlclRvVGVycmFmb3JtKHN0cnVjdCEuaGVhZGVyKSxcbiAgICBydWxlX29wdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVzUnVsZU9wdGlvbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5ydWxlT3B0aW9ucyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uc0FjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbnNBY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbnNBY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbnNBY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRpbWVuc2lvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkaW1lbnNpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RpbWVuc2lvbnMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uc0FjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25zQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGltZW5zaW9uczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbnNBY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5kaW1lbnNpb25zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25zQWN0aW9uRGVmaW5pdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHB1Ymxpc2hfbWV0cmljX2FjdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHB1Ymxpc2hNZXRyaWNBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHVibGlzaF9tZXRyaWNfYWN0aW9uJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbnNBY3Rpb25EZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25zQWN0aW9uRGVmaW5pdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwdWJsaXNoX21ldHJpY19hY3Rpb246IGRhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uc0FjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5wdWJsaXNoTWV0cmljQWN0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWN0aW9uX2RlZmluaXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY3Rpb25EZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2FjdGlvbl9kZWZpbml0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gYWN0aW9uX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY3Rpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWN0aW9uX25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbl9kZWZpbml0aW9uOiBkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbnNBY3Rpb25EZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5hY3Rpb25EZWZpbml0aW9uKSxcbiAgICBhY3Rpb25fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY3Rpb25OYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlc1J1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25Qb3J0cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZyb21fcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZyb21Qb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZnJvbV9wb3J0Jyk7XG4gIH1cblxuICAvLyB0b19wb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdG9Qb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndG9fcG9ydCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVzUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvblBvcnRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlc1J1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25Qb3J0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmcm9tX3BvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZnJvbVBvcnQpLFxuICAgIHRvX3BvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudG9Qb3J0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlc1J1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWRkcmVzc19kZWZpbml0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWRkcmVzc0RlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZGRyZXNzX2RlZmluaXRpb24nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlc1J1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlc1J1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFkZHJlc3NfZGVmaW5pdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hZGRyZXNzRGVmaW5pdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZXNSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVBvcnRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZnJvbV9wb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZnJvbVBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdmcm9tX3BvcnQnKTtcbiAgfVxuXG4gIC8vIHRvX3BvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0b1BvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0b19wb3J0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZXNSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVBvcnRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlc1J1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzU291cmNlUG9ydHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZnJvbV9wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyb21Qb3J0KSxcbiAgICB0b19wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvUG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZXNSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhZGRyZXNzX2RlZmluaXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhZGRyZXNzRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FkZHJlc3NfZGVmaW5pdGlvbicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVzUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlc1J1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzU291cmNlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhZGRyZXNzX2RlZmluaXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWRkcmVzc0RlZmluaXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVzUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNUY3BGbGFncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZsYWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmxhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZmxhZ3MnKTtcbiAgfVxuXG4gIC8vIG1hc2tzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnbWFza3MnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlc1J1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzVGNwRmxhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVzUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNUY3BGbGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmbGFnczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5mbGFncyksXG4gICAgbWFza3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEubWFza3MpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVzUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkZXN0aW5hdGlvbl9wb3J0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uUG9ydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGVzdGluYXRpb25fcG9ydHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGVzdGluYXRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcHJvdG9jb2xzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2xzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Byb3RvY29scycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNvdXJjZV9wb3J0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNvdXJjZVBvcnRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NvdXJjZV9wb3J0cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNvdXJjZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb3VyY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NvdXJjZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0Y3BfZmxhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0Y3BGbGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0Y3BfZmxhZ3MnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZXNSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZXNSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXN0aW5hdGlvbl9wb3J0czogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVzUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvblBvcnRzVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGVzdGluYXRpb25Qb3J0cyksXG4gICAgZGVzdGluYXRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZXNSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRlc3RpbmF0aW9ucyksXG4gICAgcHJvdG9jb2xzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLm51bWJlclRvVGVycmFmb3JtKShzdHJ1Y3QhLnByb3RvY29scyksXG4gICAgc291cmNlX3BvcnRzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZXNSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVBvcnRzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc291cmNlUG9ydHMpLFxuICAgIHNvdXJjZXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlc1J1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzU291cmNlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNvdXJjZXMpLFxuICAgIHRjcF9mbGFnczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVzUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNUY3BGbGFnc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRjcEZsYWdzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlc1J1bGVEZWZpbml0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWN0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWN0aW9ucycpO1xuICB9XG5cbiAgLy8gbWF0Y2hfYXR0cmlidXRlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1hdGNoQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtYXRjaF9hdHRyaWJ1dGVzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVzUnVsZURlZmluaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVzUnVsZURlZmluaXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hY3Rpb25zKSxcbiAgICBtYXRjaF9hdHRyaWJ1dGVzOiBkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVzUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hdGNoQXR0cmlidXRlcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBwcmlvcml0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncHJpb3JpdHknKTtcbiAgfVxuXG4gIC8vIHJ1bGVfZGVmaW5pdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJ1bGVEZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3J1bGVfZGVmaW5pdGlvbicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcHJpb3JpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucHJpb3JpdHkpLFxuICAgIHJ1bGVfZGVmaW5pdGlvbjogZGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlc1J1bGVEZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5ydWxlRGVmaW5pdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY3VzdG9tX2FjdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjdXN0b21BY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2N1c3RvbV9hY3Rpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3RhdGVsZXNzX3J1bGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdGVsZXNzUnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RhdGVsZXNzX3J1bGVzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGN1c3RvbV9hY3Rpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmN1c3RvbUFjdGlvbnMpLFxuICAgIHN0YXRlbGVzc19ydWxlczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3RhdGVsZXNzUnVsZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHJ1bGVzX3NvdXJjZV9saXN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcnVsZXNTb3VyY2VMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3J1bGVzX3NvdXJjZV9saXN0JykgYXMgYW55O1xuICB9XG5cbiAgLy8gcnVsZXNfc3RyaW5nIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcnVsZXNTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdydWxlc19zdHJpbmcnKTtcbiAgfVxuXG4gIC8vIHN0YXRlZnVsX3J1bGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdGVmdWxSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdGF0ZWZ1bF9ydWxlcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN0YXRlbGVzc19ydWxlc19hbmRfY3VzdG9tX2FjdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RhdGVsZXNzX3J1bGVzX2FuZF9jdXN0b21fYWN0aW9ucycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBydWxlc19zb3VyY2VfbGlzdDogZGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VSdWxlc1NvdXJjZUxpc3RUb1RlcnJhZm9ybShzdHJ1Y3QhLnJ1bGVzU291cmNlTGlzdCksXG4gICAgcnVsZXNfc3RyaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJ1bGVzU3RyaW5nKSxcbiAgICBzdGF0ZWZ1bF9ydWxlczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5zdGF0ZWZ1bFJ1bGVzKSxcbiAgICBzdGF0ZWxlc3NfcnVsZXNfYW5kX2N1c3RvbV9hY3Rpb25zOiBkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcnVsZV92YXJpYWJsZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBydWxlVmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3J1bGVfdmFyaWFibGVzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcnVsZXNfc291cmNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcnVsZXNTb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncnVsZXNfc291cmNlJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcnVsZV92YXJpYWJsZXM6IGRhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNUb1RlcnJhZm9ybShzdHJ1Y3QhLnJ1bGVWYXJpYWJsZXMpLFxuICAgIHJ1bGVzX3NvdXJjZTogZGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3QhLnJ1bGVzU291cmNlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwVGFncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBUYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwLmh0bWwgYXdzY2NfbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXB9XG4qL1xuZXhwb3J0IGNsYXNzIERhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXBcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAuaHRtbCBhd3NjY19uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cH0gRGF0YSBTb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRGF0YUF3c2NjTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NjY05ldHdvcmtmaXJld2FsbFJ1bGVHcm91cENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2NhcGFjaXR5Jyk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBydWxlX2dyb3VwIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcnVsZUdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3J1bGVfZ3JvdXAnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBydWxlX2dyb3VwX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJ1bGVHcm91cEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3J1bGVfZ3JvdXBfYXJuJyk7XG4gIH1cblxuICAvLyBydWxlX2dyb3VwX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcnVsZUdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdydWxlX2dyb3VwX2lkJyk7XG4gIH1cblxuICAvLyBydWxlX2dyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBydWxlR3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncnVsZV9ncm91cF9uYW1lJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxufVxuIl19