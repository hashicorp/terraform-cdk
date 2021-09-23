"use strict";
// https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_analysis.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroup = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRoute = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTable = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixList = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsPortRangesToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRanges = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterface = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsNatGateway = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTarget = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGateway = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTable = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpc = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsDestination = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGateway = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsComponentToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsComponent = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedToToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedTo = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRuleToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRule = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRange = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsAclToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsAcl = exports.dataAwsccEc2NetworkInsightsAnalysisAlternatePathHintsToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisAlternatePathHints = void 0;
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc = exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule = exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange = exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute = exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader = exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges = exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges = exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader = exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges = exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges = exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc = exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponent = exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRule = exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanations = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGateway = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnection = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpoint = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsVpc = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnet = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpc = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroups = exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule = void 0;
exports.DataAwsccEc2NetworkInsightsAnalysis = exports.dataAwsccEc2NetworkInsightsAnalysisTagsToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisTags = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponents = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpc = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnet = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponent = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRule = exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange = exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponents = exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpc = exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform = exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnet = void 0;
const cdktf = require("cdktf");
class DataAwsccEc2NetworkInsightsAnalysisAlternatePathHints extends cdktf.ComplexComputedList {
    // component_arn - computed: true, optional: false, required: false
    get componentArn() {
        return this.getStringAttribute('component_arn');
    }
    // component_id - computed: true, optional: false, required: false
    get componentId() {
        return this.getStringAttribute('component_id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisAlternatePathHints = DataAwsccEc2NetworkInsightsAnalysisAlternatePathHints;
function dataAwsccEc2NetworkInsightsAnalysisAlternatePathHintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        component_arn: cdktf.stringToTerraform(struct.componentArn),
        component_id: cdktf.stringToTerraform(struct.componentId),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisAlternatePathHintsToTerraform = dataAwsccEc2NetworkInsightsAnalysisAlternatePathHintsToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsAcl extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsAcl = DataAwsccEc2NetworkInsightsAnalysisExplanationsAcl;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsAclToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsAclToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsAclToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRange extends cdktf.ComplexComputedList {
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getNumberAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getNumberAttribute('to');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRange = DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRange;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRule extends cdktf.ComplexComputedList {
    // cidr - computed: true, optional: false, required: false
    get cidr() {
        return this.getStringAttribute('cidr');
    }
    // egress - computed: true, optional: false, required: false
    get egress() {
        return this.getBooleanAttribute('egress');
    }
    // port_range - computed: true, optional: false, required: false
    get portRange() {
        return this.interpolationForAttribute('port_range');
    }
    // protocol - computed: true, optional: false, required: false
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    // rule_action - computed: true, optional: false, required: false
    get ruleAction() {
        return this.getStringAttribute('rule_action');
    }
    // rule_number - computed: true, optional: false, required: false
    get ruleNumber() {
        return this.getNumberAttribute('rule_number');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRule = DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRule;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
        egress: cdktf.booleanToTerraform(struct.egress),
        port_range: dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform(struct.portRange),
        protocol: cdktf.stringToTerraform(struct.protocol),
        rule_action: cdktf.stringToTerraform(struct.ruleAction),
        rule_number: cdktf.numberToTerraform(struct.ruleNumber),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRuleToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRuleToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedTo extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedTo = DataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedTo;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedToToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedToToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedToToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener extends cdktf.ComplexComputedList {
    // instance_port - computed: true, optional: false, required: false
    get instancePort() {
        return this.getNumberAttribute('instance_port');
    }
    // load_balancer_port - computed: true, optional: false, required: false
    get loadBalancerPort() {
        return this.getNumberAttribute('load_balancer_port');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener = DataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_port: cdktf.numberToTerraform(struct.instancePort),
        load_balancer_port: cdktf.numberToTerraform(struct.loadBalancerPort),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsComponent extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsComponent = DataAwsccEc2NetworkInsightsAnalysisExplanationsComponent;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsComponentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsComponentToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsComponentToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGateway extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGateway = DataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGateway;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsDestination extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsDestination = DataAwsccEc2NetworkInsightsAnalysisExplanationsDestination;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpc extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpc = DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpc;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener = DataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTable extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTable = DataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTable;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGateway extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGateway = DataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGateway;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance = DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTarget extends cdktf.ComplexComputedList {
    // address - computed: true, optional: false, required: false
    get address() {
        return this.getStringAttribute('address');
    }
    // availability_zone - computed: true, optional: false, required: false
    get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    // instance - computed: true, optional: false, required: false
    get instance() {
        return this.interpolationForAttribute('instance');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTarget = DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTarget;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        instance: dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform(struct.instance),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup = DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups = DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsNatGateway extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsNatGateway = DataAwsccEc2NetworkInsightsAnalysisExplanationsNatGateway;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterface extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterface = DataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterface;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRanges extends cdktf.ComplexComputedList {
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getNumberAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getNumberAttribute('to');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRanges = DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRanges;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsPortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsPortRangesToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsPortRangesToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixList extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixList = DataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixList;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTable extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTable = DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTable;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRoute extends cdktf.ComplexComputedList {
    // destination_cidr - computed: true, optional: false, required: false
    get destinationCidr() {
        return this.getStringAttribute('destination_cidr');
    }
    // destination_prefix_list_id - computed: true, optional: false, required: false
    get destinationPrefixListId() {
        return this.getStringAttribute('destination_prefix_list_id');
    }
    // egress_only_internet_gateway_id - computed: true, optional: false, required: false
    get egressOnlyInternetGatewayId() {
        return this.getStringAttribute('egress_only_internet_gateway_id');
    }
    // gateway_id - computed: true, optional: false, required: false
    get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    // instance_id - computed: true, optional: false, required: false
    get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    // nat_gateway_id - computed: true, optional: false, required: false
    get natGatewayId() {
        return this.getStringAttribute('nat_gateway_id');
    }
    // network_interface_id - computed: true, optional: false, required: false
    get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    // origin - computed: true, optional: false, required: false
    get origin() {
        return this.getStringAttribute('origin');
    }
    // transit_gateway_id - computed: true, optional: false, required: false
    get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    // vpc_peering_connection_id - computed: true, optional: false, required: false
    get vpcPeeringConnectionId() {
        return this.getStringAttribute('vpc_peering_connection_id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRoute = DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRoute;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_cidr: cdktf.stringToTerraform(struct.destinationCidr),
        destination_prefix_list_id: cdktf.stringToTerraform(struct.destinationPrefixListId),
        egress_only_internet_gateway_id: cdktf.stringToTerraform(struct.egressOnlyInternetGatewayId),
        gateway_id: cdktf.stringToTerraform(struct.gatewayId),
        instance_id: cdktf.stringToTerraform(struct.instanceId),
        nat_gateway_id: cdktf.stringToTerraform(struct.natGatewayId),
        network_interface_id: cdktf.stringToTerraform(struct.networkInterfaceId),
        origin: cdktf.stringToTerraform(struct.origin),
        transit_gateway_id: cdktf.stringToTerraform(struct.transitGatewayId),
        vpc_peering_connection_id: cdktf.stringToTerraform(struct.vpcPeeringConnectionId),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroup extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroup = DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroup;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange extends cdktf.ComplexComputedList {
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getNumberAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getNumberAttribute('to');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange = DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule extends cdktf.ComplexComputedList {
    // cidr - computed: true, optional: false, required: false
    get cidr() {
        return this.getStringAttribute('cidr');
    }
    // direction - computed: true, optional: false, required: false
    get direction() {
        return this.getStringAttribute('direction');
    }
    // port_range - computed: true, optional: false, required: false
    get portRange() {
        return this.interpolationForAttribute('port_range');
    }
    // prefix_list_id - computed: true, optional: false, required: false
    get prefixListId() {
        return this.getStringAttribute('prefix_list_id');
    }
    // protocol - computed: true, optional: false, required: false
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    // security_group_id - computed: true, optional: false, required: false
    get securityGroupId() {
        return this.getStringAttribute('security_group_id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule = DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
        direction: cdktf.stringToTerraform(struct.direction),
        port_range: dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform(struct.portRange),
        prefix_list_id: cdktf.stringToTerraform(struct.prefixListId),
        protocol: cdktf.stringToTerraform(struct.protocol),
        security_group_id: cdktf.stringToTerraform(struct.securityGroupId),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroups extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroups = DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroups;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpc extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpc = DataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpc;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnet extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnet = DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnet;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable = DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpc extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsVpc = DataAwsccEc2NetworkInsightsAnalysisExplanationsVpc;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpoint extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpoint = DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpoint;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection = DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnection extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnection = DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnection;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGateway extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGateway = DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGateway;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisExplanations extends cdktf.ComplexComputedList {
    // acl - computed: true, optional: false, required: false
    get acl() {
        return this.interpolationForAttribute('acl');
    }
    // acl_rule - computed: true, optional: false, required: false
    get aclRule() {
        return this.interpolationForAttribute('acl_rule');
    }
    // address - computed: true, optional: false, required: false
    get address() {
        return this.getStringAttribute('address');
    }
    // addresses - computed: true, optional: false, required: false
    get addresses() {
        return this.getListAttribute('addresses');
    }
    // attached_to - computed: true, optional: false, required: false
    get attachedTo() {
        return this.interpolationForAttribute('attached_to');
    }
    // availability_zones - computed: true, optional: false, required: false
    get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    // cidrs - computed: true, optional: false, required: false
    get cidrs() {
        return this.getListAttribute('cidrs');
    }
    // classic_load_balancer_listener - computed: true, optional: false, required: false
    get classicLoadBalancerListener() {
        return this.interpolationForAttribute('classic_load_balancer_listener');
    }
    // component - computed: true, optional: false, required: false
    get component() {
        return this.interpolationForAttribute('component');
    }
    // customer_gateway - computed: true, optional: false, required: false
    get customerGateway() {
        return this.interpolationForAttribute('customer_gateway');
    }
    // destination - computed: true, optional: false, required: false
    get destination() {
        return this.interpolationForAttribute('destination');
    }
    // destination_vpc - computed: true, optional: false, required: false
    get destinationVpc() {
        return this.interpolationForAttribute('destination_vpc');
    }
    // direction - computed: true, optional: false, required: false
    get direction() {
        return this.getStringAttribute('direction');
    }
    // elastic_load_balancer_listener - computed: true, optional: false, required: false
    get elasticLoadBalancerListener() {
        return this.interpolationForAttribute('elastic_load_balancer_listener');
    }
    // explanation_code - computed: true, optional: false, required: false
    get explanationCode() {
        return this.getStringAttribute('explanation_code');
    }
    // ingress_route_table - computed: true, optional: false, required: false
    get ingressRouteTable() {
        return this.interpolationForAttribute('ingress_route_table');
    }
    // internet_gateway - computed: true, optional: false, required: false
    get internetGateway() {
        return this.interpolationForAttribute('internet_gateway');
    }
    // load_balancer_arn - computed: true, optional: false, required: false
    get loadBalancerArn() {
        return this.getStringAttribute('load_balancer_arn');
    }
    // load_balancer_listener_port - computed: true, optional: false, required: false
    get loadBalancerListenerPort() {
        return this.getNumberAttribute('load_balancer_listener_port');
    }
    // load_balancer_target - computed: true, optional: false, required: false
    get loadBalancerTarget() {
        return this.interpolationForAttribute('load_balancer_target');
    }
    // load_balancer_target_group - computed: true, optional: false, required: false
    get loadBalancerTargetGroup() {
        return this.interpolationForAttribute('load_balancer_target_group');
    }
    // load_balancer_target_groups - computed: true, optional: false, required: false
    get loadBalancerTargetGroups() {
        return this.interpolationForAttribute('load_balancer_target_groups');
    }
    // load_balancer_target_port - computed: true, optional: false, required: false
    get loadBalancerTargetPort() {
        return this.getNumberAttribute('load_balancer_target_port');
    }
    // missing_component - computed: true, optional: false, required: false
    get missingComponent() {
        return this.getStringAttribute('missing_component');
    }
    // nat_gateway - computed: true, optional: false, required: false
    get natGateway() {
        return this.interpolationForAttribute('nat_gateway');
    }
    // network_interface - computed: true, optional: false, required: false
    get networkInterface() {
        return this.interpolationForAttribute('network_interface');
    }
    // packet_field - computed: true, optional: false, required: false
    get packetField() {
        return this.getStringAttribute('packet_field');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
    // port_ranges - computed: true, optional: false, required: false
    get portRanges() {
        return this.interpolationForAttribute('port_ranges');
    }
    // prefix_list - computed: true, optional: false, required: false
    get prefixList() {
        return this.interpolationForAttribute('prefix_list');
    }
    // protocols - computed: true, optional: false, required: false
    get protocols() {
        return this.getListAttribute('protocols');
    }
    // route_table - computed: true, optional: false, required: false
    get routeTable() {
        return this.interpolationForAttribute('route_table');
    }
    // route_table_route - computed: true, optional: false, required: false
    get routeTableRoute() {
        return this.interpolationForAttribute('route_table_route');
    }
    // security_group - computed: true, optional: false, required: false
    get securityGroup() {
        return this.interpolationForAttribute('security_group');
    }
    // security_group_rule - computed: true, optional: false, required: false
    get securityGroupRule() {
        return this.interpolationForAttribute('security_group_rule');
    }
    // security_groups - computed: true, optional: false, required: false
    get securityGroups() {
        return this.interpolationForAttribute('security_groups');
    }
    // source_vpc - computed: true, optional: false, required: false
    get sourceVpc() {
        return this.interpolationForAttribute('source_vpc');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
    // subnet - computed: true, optional: false, required: false
    get subnet() {
        return this.interpolationForAttribute('subnet');
    }
    // subnet_route_table - computed: true, optional: false, required: false
    get subnetRouteTable() {
        return this.interpolationForAttribute('subnet_route_table');
    }
    // vpc - computed: true, optional: false, required: false
    get vpc() {
        return this.interpolationForAttribute('vpc');
    }
    // vpc_endpoint - computed: true, optional: false, required: false
    get vpcEndpoint() {
        return this.interpolationForAttribute('vpc_endpoint');
    }
    // vpc_peering_connection - computed: true, optional: false, required: false
    get vpcPeeringConnection() {
        return this.interpolationForAttribute('vpc_peering_connection');
    }
    // vpn_connection - computed: true, optional: false, required: false
    get vpnConnection() {
        return this.interpolationForAttribute('vpn_connection');
    }
    // vpn_gateway - computed: true, optional: false, required: false
    get vpnGateway() {
        return this.interpolationForAttribute('vpn_gateway');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisExplanations = DataAwsccEc2NetworkInsightsAnalysisExplanations;
function dataAwsccEc2NetworkInsightsAnalysisExplanationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acl: dataAwsccEc2NetworkInsightsAnalysisExplanationsAclToTerraform(struct.acl),
        acl_rule: dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRuleToTerraform(struct.aclRule),
        address: cdktf.stringToTerraform(struct.address),
        addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.addresses),
        attached_to: dataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedToToTerraform(struct.attachedTo),
        availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(struct.availabilityZones),
        cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct.cidrs),
        classic_load_balancer_listener: dataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform(struct.classicLoadBalancerListener),
        component: dataAwsccEc2NetworkInsightsAnalysisExplanationsComponentToTerraform(struct.component),
        customer_gateway: dataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform(struct.customerGateway),
        destination: dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationToTerraform(struct.destination),
        destination_vpc: dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform(struct.destinationVpc),
        direction: cdktf.stringToTerraform(struct.direction),
        elastic_load_balancer_listener: dataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform(struct.elasticLoadBalancerListener),
        explanation_code: cdktf.stringToTerraform(struct.explanationCode),
        ingress_route_table: dataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform(struct.ingressRouteTable),
        internet_gateway: dataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform(struct.internetGateway),
        load_balancer_arn: cdktf.stringToTerraform(struct.loadBalancerArn),
        load_balancer_listener_port: cdktf.numberToTerraform(struct.loadBalancerListenerPort),
        load_balancer_target: dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform(struct.loadBalancerTarget),
        load_balancer_target_group: dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform(struct.loadBalancerTargetGroup),
        load_balancer_target_groups: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform)(struct.loadBalancerTargetGroups),
        load_balancer_target_port: cdktf.numberToTerraform(struct.loadBalancerTargetPort),
        missing_component: cdktf.stringToTerraform(struct.missingComponent),
        nat_gateway: dataAwsccEc2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform(struct.natGateway),
        network_interface: dataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform(struct.networkInterface),
        packet_field: cdktf.stringToTerraform(struct.packetField),
        port: cdktf.numberToTerraform(struct.port),
        port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisExplanationsPortRangesToTerraform)(struct.portRanges),
        prefix_list: dataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListToTerraform(struct.prefixList),
        protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct.protocols),
        route_table: dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableToTerraform(struct.routeTable),
        route_table_route: dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform(struct.routeTableRoute),
        security_group: dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform(struct.securityGroup),
        security_group_rule: dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform(struct.securityGroupRule),
        security_groups: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform)(struct.securityGroups),
        source_vpc: dataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform(struct.sourceVpc),
        state: cdktf.stringToTerraform(struct.state),
        subnet: dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetToTerraform(struct.subnet),
        subnet_route_table: dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform(struct.subnetRouteTable),
        vpc: dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcToTerraform(struct.vpc),
        vpc_endpoint: dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform(struct.vpcEndpoint),
        vpc_peering_connection: dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform(struct.vpcPeeringConnection),
        vpn_connection: dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform(struct.vpnConnection),
        vpn_gateway: dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform(struct.vpnGateway),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisExplanationsToTerraform = dataAwsccEc2NetworkInsightsAnalysisExplanationsToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange extends cdktf.ComplexComputedList {
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getNumberAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getNumberAttribute('to');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRule extends cdktf.ComplexComputedList {
    // cidr - computed: true, optional: false, required: false
    get cidr() {
        return this.getStringAttribute('cidr');
    }
    // egress - computed: true, optional: false, required: false
    get egress() {
        return this.getBooleanAttribute('egress');
    }
    // port_range - computed: true, optional: false, required: false
    get portRange() {
        return this.interpolationForAttribute('port_range');
    }
    // protocol - computed: true, optional: false, required: false
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    // rule_action - computed: true, optional: false, required: false
    get ruleAction() {
        return this.getStringAttribute('rule_action');
    }
    // rule_number - computed: true, optional: false, required: false
    get ruleNumber() {
        return this.getNumberAttribute('rule_number');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRule = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRule;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
        egress: cdktf.booleanToTerraform(struct.egress),
        port_range: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform(struct.portRange),
        protocol: cdktf.stringToTerraform(struct.protocol),
        rule_action: cdktf.stringToTerraform(struct.ruleAction),
        rule_number: cdktf.numberToTerraform(struct.ruleNumber),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponent extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponent = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponent;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges extends cdktf.ComplexComputedList {
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getNumberAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getNumberAttribute('to');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges extends cdktf.ComplexComputedList {
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getNumberAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getNumberAttribute('to');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader extends cdktf.ComplexComputedList {
    // destination_addresses - computed: true, optional: false, required: false
    get destinationAddresses() {
        return this.getListAttribute('destination_addresses');
    }
    // destination_port_ranges - computed: true, optional: false, required: false
    get destinationPortRanges() {
        return this.interpolationForAttribute('destination_port_ranges');
    }
    // protocol - computed: true, optional: false, required: false
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    // source_addresses - computed: true, optional: false, required: false
    get sourceAddresses() {
        return this.getListAttribute('source_addresses');
    }
    // source_port_ranges - computed: true, optional: false, required: false
    get sourcePortRanges() {
        return this.interpolationForAttribute('source_port_ranges');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.destinationAddresses),
        destination_port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform)(struct.destinationPortRanges),
        protocol: cdktf.stringToTerraform(struct.protocol),
        source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.sourceAddresses),
        source_port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform)(struct.sourcePortRanges),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges extends cdktf.ComplexComputedList {
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getNumberAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getNumberAttribute('to');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges extends cdktf.ComplexComputedList {
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getNumberAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getNumberAttribute('to');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader extends cdktf.ComplexComputedList {
    // destination_addresses - computed: true, optional: false, required: false
    get destinationAddresses() {
        return this.getListAttribute('destination_addresses');
    }
    // destination_port_ranges - computed: true, optional: false, required: false
    get destinationPortRanges() {
        return this.interpolationForAttribute('destination_port_ranges');
    }
    // protocol - computed: true, optional: false, required: false
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    // source_addresses - computed: true, optional: false, required: false
    get sourceAddresses() {
        return this.getListAttribute('source_addresses');
    }
    // source_port_ranges - computed: true, optional: false, required: false
    get sourcePortRanges() {
        return this.interpolationForAttribute('source_port_ranges');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.destinationAddresses),
        destination_port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform)(struct.destinationPortRanges),
        protocol: cdktf.stringToTerraform(struct.protocol),
        source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.sourceAddresses),
        source_port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform)(struct.sourcePortRanges),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute extends cdktf.ComplexComputedList {
    // destination_cidr - computed: true, optional: false, required: false
    get destinationCidr() {
        return this.getStringAttribute('destination_cidr');
    }
    // destination_prefix_list_id - computed: true, optional: false, required: false
    get destinationPrefixListId() {
        return this.getStringAttribute('destination_prefix_list_id');
    }
    // egress_only_internet_gateway_id - computed: true, optional: false, required: false
    get egressOnlyInternetGatewayId() {
        return this.getStringAttribute('egress_only_internet_gateway_id');
    }
    // gateway_id - computed: true, optional: false, required: false
    get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    // instance_id - computed: true, optional: false, required: false
    get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    // nat_gateway_id - computed: true, optional: false, required: false
    get natGatewayId() {
        return this.getStringAttribute('nat_gateway_id');
    }
    // network_interface_id - computed: true, optional: false, required: false
    get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    // origin - computed: true, optional: false, required: false
    get origin() {
        return this.getStringAttribute('origin');
    }
    // transit_gateway_id - computed: true, optional: false, required: false
    get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    // vpc_peering_connection_id - computed: true, optional: false, required: false
    get vpcPeeringConnectionId() {
        return this.getStringAttribute('vpc_peering_connection_id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_cidr: cdktf.stringToTerraform(struct.destinationCidr),
        destination_prefix_list_id: cdktf.stringToTerraform(struct.destinationPrefixListId),
        egress_only_internet_gateway_id: cdktf.stringToTerraform(struct.egressOnlyInternetGatewayId),
        gateway_id: cdktf.stringToTerraform(struct.gatewayId),
        instance_id: cdktf.stringToTerraform(struct.instanceId),
        nat_gateway_id: cdktf.stringToTerraform(struct.natGatewayId),
        network_interface_id: cdktf.stringToTerraform(struct.networkInterfaceId),
        origin: cdktf.stringToTerraform(struct.origin),
        transit_gateway_id: cdktf.stringToTerraform(struct.transitGatewayId),
        vpc_peering_connection_id: cdktf.stringToTerraform(struct.vpcPeeringConnectionId),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange extends cdktf.ComplexComputedList {
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getNumberAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getNumberAttribute('to');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule extends cdktf.ComplexComputedList {
    // cidr - computed: true, optional: false, required: false
    get cidr() {
        return this.getStringAttribute('cidr');
    }
    // direction - computed: true, optional: false, required: false
    get direction() {
        return this.getStringAttribute('direction');
    }
    // port_range - computed: true, optional: false, required: false
    get portRange() {
        return this.interpolationForAttribute('port_range');
    }
    // prefix_list_id - computed: true, optional: false, required: false
    get prefixListId() {
        return this.getStringAttribute('prefix_list_id');
    }
    // protocol - computed: true, optional: false, required: false
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    // security_group_id - computed: true, optional: false, required: false
    get securityGroupId() {
        return this.getStringAttribute('security_group_id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
        direction: cdktf.stringToTerraform(struct.direction),
        port_range: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform(struct.portRange),
        prefix_list_id: cdktf.stringToTerraform(struct.prefixListId),
        protocol: cdktf.stringToTerraform(struct.protocol),
        security_group_id: cdktf.stringToTerraform(struct.securityGroupId),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnet extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnet = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnet;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpc extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpc = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpc;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponents extends cdktf.ComplexComputedList {
    // acl_rule - computed: true, optional: false, required: false
    get aclRule() {
        return this.interpolationForAttribute('acl_rule');
    }
    // component - computed: true, optional: false, required: false
    get component() {
        return this.interpolationForAttribute('component');
    }
    // destination_vpc - computed: true, optional: false, required: false
    get destinationVpc() {
        return this.interpolationForAttribute('destination_vpc');
    }
    // inbound_header - computed: true, optional: false, required: false
    get inboundHeader() {
        return this.interpolationForAttribute('inbound_header');
    }
    // outbound_header - computed: true, optional: false, required: false
    get outboundHeader() {
        return this.interpolationForAttribute('outbound_header');
    }
    // route_table_route - computed: true, optional: false, required: false
    get routeTableRoute() {
        return this.interpolationForAttribute('route_table_route');
    }
    // security_group_rule - computed: true, optional: false, required: false
    get securityGroupRule() {
        return this.interpolationForAttribute('security_group_rule');
    }
    // sequence_number - computed: true, optional: false, required: false
    get sequenceNumber() {
        return this.getNumberAttribute('sequence_number');
    }
    // source_vpc - computed: true, optional: false, required: false
    get sourceVpc() {
        return this.interpolationForAttribute('source_vpc');
    }
    // subnet - computed: true, optional: false, required: false
    get subnet() {
        return this.interpolationForAttribute('subnet');
    }
    // vpc - computed: true, optional: false, required: false
    get vpc() {
        return this.interpolationForAttribute('vpc');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisForwardPathComponents = DataAwsccEc2NetworkInsightsAnalysisForwardPathComponents;
function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acl_rule: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform(struct.aclRule),
        component: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform(struct.component),
        destination_vpc: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform(struct.destinationVpc),
        inbound_header: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform(struct.inboundHeader),
        outbound_header: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform(struct.outboundHeader),
        route_table_route: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform(struct.routeTableRoute),
        security_group_rule: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform(struct.securityGroupRule),
        sequence_number: cdktf.numberToTerraform(struct.sequenceNumber),
        source_vpc: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform(struct.sourceVpc),
        subnet: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform(struct.subnet),
        vpc: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform(struct.vpc),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsToTerraform = dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange extends cdktf.ComplexComputedList {
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getNumberAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getNumberAttribute('to');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRule extends cdktf.ComplexComputedList {
    // cidr - computed: true, optional: false, required: false
    get cidr() {
        return this.getStringAttribute('cidr');
    }
    // egress - computed: true, optional: false, required: false
    get egress() {
        return this.getBooleanAttribute('egress');
    }
    // port_range - computed: true, optional: false, required: false
    get portRange() {
        return this.interpolationForAttribute('port_range');
    }
    // protocol - computed: true, optional: false, required: false
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    // rule_action - computed: true, optional: false, required: false
    get ruleAction() {
        return this.getStringAttribute('rule_action');
    }
    // rule_number - computed: true, optional: false, required: false
    get ruleNumber() {
        return this.getNumberAttribute('rule_number');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRule = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRule;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
        egress: cdktf.booleanToTerraform(struct.egress),
        port_range: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform(struct.portRange),
        protocol: cdktf.stringToTerraform(struct.protocol),
        rule_action: cdktf.stringToTerraform(struct.ruleAction),
        rule_number: cdktf.numberToTerraform(struct.ruleNumber),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponent extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponent = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponent;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges extends cdktf.ComplexComputedList {
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getNumberAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getNumberAttribute('to');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges extends cdktf.ComplexComputedList {
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getNumberAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getNumberAttribute('to');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader extends cdktf.ComplexComputedList {
    // destination_addresses - computed: true, optional: false, required: false
    get destinationAddresses() {
        return this.getListAttribute('destination_addresses');
    }
    // destination_port_ranges - computed: true, optional: false, required: false
    get destinationPortRanges() {
        return this.interpolationForAttribute('destination_port_ranges');
    }
    // protocol - computed: true, optional: false, required: false
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    // source_addresses - computed: true, optional: false, required: false
    get sourceAddresses() {
        return this.getListAttribute('source_addresses');
    }
    // source_port_ranges - computed: true, optional: false, required: false
    get sourcePortRanges() {
        return this.interpolationForAttribute('source_port_ranges');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.destinationAddresses),
        destination_port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform)(struct.destinationPortRanges),
        protocol: cdktf.stringToTerraform(struct.protocol),
        source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.sourceAddresses),
        source_port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform)(struct.sourcePortRanges),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges extends cdktf.ComplexComputedList {
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getNumberAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getNumberAttribute('to');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges extends cdktf.ComplexComputedList {
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getNumberAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getNumberAttribute('to');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader extends cdktf.ComplexComputedList {
    // destination_addresses - computed: true, optional: false, required: false
    get destinationAddresses() {
        return this.getListAttribute('destination_addresses');
    }
    // destination_port_ranges - computed: true, optional: false, required: false
    get destinationPortRanges() {
        return this.interpolationForAttribute('destination_port_ranges');
    }
    // protocol - computed: true, optional: false, required: false
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    // source_addresses - computed: true, optional: false, required: false
    get sourceAddresses() {
        return this.getListAttribute('source_addresses');
    }
    // source_port_ranges - computed: true, optional: false, required: false
    get sourcePortRanges() {
        return this.interpolationForAttribute('source_port_ranges');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.destinationAddresses),
        destination_port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform)(struct.destinationPortRanges),
        protocol: cdktf.stringToTerraform(struct.protocol),
        source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.sourceAddresses),
        source_port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform)(struct.sourcePortRanges),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute extends cdktf.ComplexComputedList {
    // destination_cidr - computed: true, optional: false, required: false
    get destinationCidr() {
        return this.getStringAttribute('destination_cidr');
    }
    // destination_prefix_list_id - computed: true, optional: false, required: false
    get destinationPrefixListId() {
        return this.getStringAttribute('destination_prefix_list_id');
    }
    // egress_only_internet_gateway_id - computed: true, optional: false, required: false
    get egressOnlyInternetGatewayId() {
        return this.getStringAttribute('egress_only_internet_gateway_id');
    }
    // gateway_id - computed: true, optional: false, required: false
    get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    // instance_id - computed: true, optional: false, required: false
    get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    // nat_gateway_id - computed: true, optional: false, required: false
    get natGatewayId() {
        return this.getStringAttribute('nat_gateway_id');
    }
    // network_interface_id - computed: true, optional: false, required: false
    get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    // origin - computed: true, optional: false, required: false
    get origin() {
        return this.getStringAttribute('origin');
    }
    // transit_gateway_id - computed: true, optional: false, required: false
    get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    // vpc_peering_connection_id - computed: true, optional: false, required: false
    get vpcPeeringConnectionId() {
        return this.getStringAttribute('vpc_peering_connection_id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_cidr: cdktf.stringToTerraform(struct.destinationCidr),
        destination_prefix_list_id: cdktf.stringToTerraform(struct.destinationPrefixListId),
        egress_only_internet_gateway_id: cdktf.stringToTerraform(struct.egressOnlyInternetGatewayId),
        gateway_id: cdktf.stringToTerraform(struct.gatewayId),
        instance_id: cdktf.stringToTerraform(struct.instanceId),
        nat_gateway_id: cdktf.stringToTerraform(struct.natGatewayId),
        network_interface_id: cdktf.stringToTerraform(struct.networkInterfaceId),
        origin: cdktf.stringToTerraform(struct.origin),
        transit_gateway_id: cdktf.stringToTerraform(struct.transitGatewayId),
        vpc_peering_connection_id: cdktf.stringToTerraform(struct.vpcPeeringConnectionId),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange extends cdktf.ComplexComputedList {
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getNumberAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getNumberAttribute('to');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule extends cdktf.ComplexComputedList {
    // cidr - computed: true, optional: false, required: false
    get cidr() {
        return this.getStringAttribute('cidr');
    }
    // direction - computed: true, optional: false, required: false
    get direction() {
        return this.getStringAttribute('direction');
    }
    // port_range - computed: true, optional: false, required: false
    get portRange() {
        return this.interpolationForAttribute('port_range');
    }
    // prefix_list_id - computed: true, optional: false, required: false
    get prefixListId() {
        return this.getStringAttribute('prefix_list_id');
    }
    // protocol - computed: true, optional: false, required: false
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    // security_group_id - computed: true, optional: false, required: false
    get securityGroupId() {
        return this.getStringAttribute('security_group_id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
        direction: cdktf.stringToTerraform(struct.direction),
        port_range: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform(struct.portRange),
        prefix_list_id: cdktf.stringToTerraform(struct.prefixListId),
        protocol: cdktf.stringToTerraform(struct.protocol),
        security_group_id: cdktf.stringToTerraform(struct.securityGroupId),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnet extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnet = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnet;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpc extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpc = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpc;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponents extends cdktf.ComplexComputedList {
    // acl_rule - computed: true, optional: false, required: false
    get aclRule() {
        return this.interpolationForAttribute('acl_rule');
    }
    // component - computed: true, optional: false, required: false
    get component() {
        return this.interpolationForAttribute('component');
    }
    // destination_vpc - computed: true, optional: false, required: false
    get destinationVpc() {
        return this.interpolationForAttribute('destination_vpc');
    }
    // inbound_header - computed: true, optional: false, required: false
    get inboundHeader() {
        return this.interpolationForAttribute('inbound_header');
    }
    // outbound_header - computed: true, optional: false, required: false
    get outboundHeader() {
        return this.interpolationForAttribute('outbound_header');
    }
    // route_table_route - computed: true, optional: false, required: false
    get routeTableRoute() {
        return this.interpolationForAttribute('route_table_route');
    }
    // security_group_rule - computed: true, optional: false, required: false
    get securityGroupRule() {
        return this.interpolationForAttribute('security_group_rule');
    }
    // sequence_number - computed: true, optional: false, required: false
    get sequenceNumber() {
        return this.getNumberAttribute('sequence_number');
    }
    // source_vpc - computed: true, optional: false, required: false
    get sourceVpc() {
        return this.interpolationForAttribute('source_vpc');
    }
    // subnet - computed: true, optional: false, required: false
    get subnet() {
        return this.interpolationForAttribute('subnet');
    }
    // vpc - computed: true, optional: false, required: false
    get vpc() {
        return this.interpolationForAttribute('vpc');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisReturnPathComponents = DataAwsccEc2NetworkInsightsAnalysisReturnPathComponents;
function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acl_rule: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform(struct.aclRule),
        component: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform(struct.component),
        destination_vpc: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform(struct.destinationVpc),
        inbound_header: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform(struct.inboundHeader),
        outbound_header: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform(struct.outboundHeader),
        route_table_route: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform(struct.routeTableRoute),
        security_group_rule: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform(struct.securityGroupRule),
        sequence_number: cdktf.numberToTerraform(struct.sequenceNumber),
        source_vpc: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform(struct.sourceVpc),
        subnet: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform(struct.subnet),
        vpc: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform(struct.vpc),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsToTerraform = dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsToTerraform;
class DataAwsccEc2NetworkInsightsAnalysisTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccEc2NetworkInsightsAnalysisTags = DataAwsccEc2NetworkInsightsAnalysisTags;
function dataAwsccEc2NetworkInsightsAnalysisTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccEc2NetworkInsightsAnalysisTagsToTerraform = dataAwsccEc2NetworkInsightsAnalysisTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_analysis.html awscc_ec2_network_insights_analysis}
*/
class DataAwsccEc2NetworkInsightsAnalysis extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_analysis.html awscc_ec2_network_insights_analysis} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2NetworkInsightsAnalysisConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_network_insights_analysis',
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
    // alternate_path_hints - computed: true, optional: false, required: false
    get alternatePathHints() {
        return this.interpolationForAttribute('alternate_path_hints');
    }
    // explanations - computed: true, optional: false, required: false
    get explanations() {
        return this.interpolationForAttribute('explanations');
    }
    // filter_in_arns - computed: true, optional: false, required: false
    get filterInArns() {
        return this.getListAttribute('filter_in_arns');
    }
    // forward_path_components - computed: true, optional: false, required: false
    get forwardPathComponents() {
        return this.interpolationForAttribute('forward_path_components');
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
    // network_insights_analysis_arn - computed: true, optional: false, required: false
    get networkInsightsAnalysisArn() {
        return this.getStringAttribute('network_insights_analysis_arn');
    }
    // network_insights_analysis_id - computed: true, optional: false, required: false
    get networkInsightsAnalysisId() {
        return this.getStringAttribute('network_insights_analysis_id');
    }
    // network_insights_path_id - computed: true, optional: false, required: false
    get networkInsightsPathId() {
        return this.getStringAttribute('network_insights_path_id');
    }
    // network_path_found - computed: true, optional: false, required: false
    get networkPathFound() {
        return this.getBooleanAttribute('network_path_found');
    }
    // return_path_components - computed: true, optional: false, required: false
    get returnPathComponents() {
        return this.interpolationForAttribute('return_path_components');
    }
    // start_date - computed: true, optional: false, required: false
    get startDate() {
        return this.getStringAttribute('start_date');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // status_message - computed: true, optional: false, required: false
    get statusMessage() {
        return this.getStringAttribute('status_message');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
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
exports.DataAwsccEc2NetworkInsightsAnalysis = DataAwsccEc2NetworkInsightsAnalysis;
// =================
// STATIC PROPERTIES
// =================
DataAwsccEc2NetworkInsightsAnalysis.tfResourceType = "awscc_ec2_network_insights_analysis";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1lYzItbmV0d29yay1pbnNpZ2h0cy1hbmFseXNpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtYXdzY2MtZWMyLW5ldHdvcmstaW5zaWdodHMtYW5hbHlzaXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFGQUFxRjtBQUNyRiwyQ0FBMkM7Ozs7O0FBRzNDLCtCQUErQjtBQVkvQixNQUFhLHFEQUFzRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFbEcsbUVBQW1FO0lBQ25FLElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsa0VBQWtFO0lBQ2xFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0Y7QUFYRCxzSEFXQztBQUVELFNBQWdCLGdFQUFnRSxDQUFDLE1BQThEO0lBQzdJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzVELFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztLQUMzRCxDQUFBO0FBQ0gsQ0FBQztBQU5ELDRJQU1DO0FBRUQsTUFBYSxrREFBbUQsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRS9GLHlEQUF5RDtJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsd0RBQXdEO0lBQ3hELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFD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QztJQUMvQyxDQUFDO0lBRUQsNERBQTREO0lBQzVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxvRUFBb0U7SUFDcEUsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBMUhILGtGQTJIQztBQXpIQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLGtEQUFjLEdBQVcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogVW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgcmVzb3VyY2UuXG4gICogXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2lkIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzQWx0ZXJuYXRlUGF0aEhpbnRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29tcG9uZW50X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbXBvbmVudEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbXBvbmVudF9hcm4nKTtcbiAgfVxuXG4gIC8vIGNvbXBvbmVudF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbXBvbmVudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcG9uZW50X2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzQWx0ZXJuYXRlUGF0aEhpbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNBbHRlcm5hdGVQYXRoSGludHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29tcG9uZW50X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wb25lbnRBcm4pLFxuICAgIGNvbXBvbmVudF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wb25lbnRJZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQWNsIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNBY2xUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0FjbCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQWNsUnVsZVBvcnRSYW5nZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZyb20gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmcm9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZnJvbScpO1xuICB9XG5cbiAgLy8gdG8gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0bygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RvJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQWNsUnVsZVBvcnRSYW5nZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQWNsUnVsZVBvcnRSYW5nZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmcm9tOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyb20pLFxuICAgIHRvOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNBY2xSdWxlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNpZHIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjaWRyJyk7XG4gIH1cblxuICAvLyBlZ3Jlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlZ3Jlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZWdyZXNzJyk7XG4gIH1cblxuICAvLyBwb3J0X3JhbmdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcG9ydFJhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BvcnRfcmFuZ2UnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwcm90b2NvbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb3RvY29sKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvdG9jb2wnKTtcbiAgfVxuXG4gIC8vIHJ1bGVfYWN0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcnVsZUFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3J1bGVfYWN0aW9uJyk7XG4gIH1cblxuICAvLyBydWxlX251bWJlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJ1bGVOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdydWxlX251bWJlcicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0FjbFJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0FjbFJ1bGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2lkcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jaWRyKSxcbiAgICBlZ3Jlc3M6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVncmVzcyksXG4gICAgcG9ydF9yYW5nZTogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNBY2xSdWxlUG9ydFJhbmdlVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0UmFuZ2UpLFxuICAgIHByb3RvY29sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb3RvY29sKSxcbiAgICBydWxlX2FjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ydWxlQWN0aW9uKSxcbiAgICBydWxlX251bWJlcjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5ydWxlTnVtYmVyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNBdHRhY2hlZFRvIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNBdHRhY2hlZFRvVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNBdHRhY2hlZFRvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNDbGFzc2ljTG9hZEJhbGFuY2VyTGlzdGVuZXIgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpbnN0YW5jZV9wb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VQb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW5zdGFuY2VfcG9ydCcpO1xuICB9XG5cbiAgLy8gbG9hZF9iYWxhbmNlcl9wb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2VyUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2xvYWRfYmFsYW5jZXJfcG9ydCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0NsYXNzaWNMb2FkQmFsYW5jZXJMaXN0ZW5lclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQ2xhc3NpY0xvYWRCYWxhbmNlckxpc3RlbmVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlX3BvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VQb3J0KSxcbiAgICBsb2FkX2JhbGFuY2VyX3BvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubG9hZEJhbGFuY2VyUG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQ29tcG9uZW50IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNDb21wb25lbnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0NvbXBvbmVudCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQ3VzdG9tZXJHYXRld2F5IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNDdXN0b21lckdhdGV3YXlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0N1c3RvbWVyR2F0ZXdheSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zRGVzdGluYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0Rlc3RpbmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNEZXN0aW5hdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zRGVzdGluYXRpb25WcGMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0Rlc3RpbmF0aW9uVnBjVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNEZXN0aW5hdGlvblZwYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zRWxhc3RpY0xvYWRCYWxhbmNlckxpc3RlbmVyIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNFbGFzdGljTG9hZEJhbGFuY2VyTGlzdGVuZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0VsYXN0aWNMb2FkQmFsYW5jZXJMaXN0ZW5lcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zSW5ncmVzc1JvdXRlVGFibGUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0luZ3Jlc3NSb3V0ZVRhYmxlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNJbmdyZXNzUm91dGVUYWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zSW50ZXJuZXRHYXRld2F5IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNJbnRlcm5ldEdhdGV3YXlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0ludGVybmV0R2F0ZXdheSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0SW5zdGFuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0xvYWRCYWxhbmNlclRhcmdldEluc3RhbmNlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNMb2FkQmFsYW5jZXJUYXJnZXRJbnN0YW5jZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZGRyZXNzJyk7XG4gIH1cblxuICAvLyBhdmFpbGFiaWxpdHlfem9uZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF2YWlsYWJpbGl0eVpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdmFpbGFiaWxpdHlfem9uZScpO1xuICB9XG5cbiAgLy8gaW5zdGFuY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpbnN0YW5jZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0xvYWRCYWxhbmNlclRhcmdldFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFkZHJlc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWRkcmVzcyksXG4gICAgYXZhaWxhYmlsaXR5X3pvbmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXZhaWxhYmlsaXR5Wm9uZSksXG4gICAgaW5zdGFuY2U6IGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0SW5zdGFuY2VUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlKSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0xvYWRCYWxhbmNlclRhcmdldEdyb3VwIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNMb2FkQmFsYW5jZXJUYXJnZXRHcm91cFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0R3JvdXApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0xvYWRCYWxhbmNlclRhcmdldEdyb3VwcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0R3JvdXBzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNMb2FkQmFsYW5jZXJUYXJnZXRHcm91cHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc05hdEdhdGV3YXkgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc05hdEdhdGV3YXlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc05hdEdhdGV3YXkpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc05ldHdvcmtJbnRlcmZhY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc05ldHdvcmtJbnRlcmZhY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc05ldHdvcmtJbnRlcmZhY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1BvcnRSYW5nZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBmcm9tIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZnJvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Zyb20nKTtcbiAgfVxuXG4gIC8vIHRvIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdG8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0bycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1BvcnRSYW5nZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1BvcnRSYW5nZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZnJvbTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5mcm9tKSxcbiAgICB0bzogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50byksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zUHJlZml4TGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zUHJlZml4TGlzdFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zUHJlZml4TGlzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zUm91dGVUYWJsZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zUm91dGVUYWJsZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zUm91dGVUYWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zUm91dGVUYWJsZVJvdXRlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGVzdGluYXRpb25fY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uQ2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX2NpZHInKTtcbiAgfVxuXG4gIC8vIGRlc3RpbmF0aW9uX3ByZWZpeF9saXN0X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25QcmVmaXhMaXN0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXN0aW5hdGlvbl9wcmVmaXhfbGlzdF9pZCcpO1xuICB9XG5cbiAgLy8gZWdyZXNzX29ubHlfaW50ZXJuZXRfZ2F0ZXdheV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVncmVzc09ubHlJbnRlcm5ldEdhdGV3YXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VncmVzc19vbmx5X2ludGVybmV0X2dhdGV3YXlfaWQnKTtcbiAgfVxuXG4gIC8vIGdhdGV3YXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBnYXRld2F5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnYXRld2F5X2lkJyk7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV9pZCcpO1xuICB9XG5cbiAgLy8gbmF0X2dhdGV3YXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYXRHYXRld2F5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYXRfZ2F0ZXdheV9pZCcpO1xuICB9XG5cbiAgLy8gbmV0d29ya19pbnRlcmZhY2VfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuZXR3b3JrSW50ZXJmYWNlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduZXR3b3JrX2ludGVyZmFjZV9pZCcpO1xuICB9XG5cbiAgLy8gb3JpZ2luIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JpZ2luKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3JpZ2luJyk7XG4gIH1cblxuICAvLyB0cmFuc2l0X2dhdGV3YXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0cmFuc2l0R2F0ZXdheUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHJhbnNpdF9nYXRld2F5X2lkJyk7XG4gIH1cblxuICAvLyB2cGNfcGVlcmluZ19jb25uZWN0aW9uX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNSb3V0ZVRhYmxlUm91dGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1JvdXRlVGFibGVSb3V0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXN0aW5hdGlvbl9jaWRyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uQ2lkciksXG4gICAgZGVzdGluYXRpb25fcHJlZml4X2xpc3RfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb25QcmVmaXhMaXN0SWQpLFxuICAgIGVncmVzc19vbmx5X2ludGVybmV0X2dhdGV3YXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZWdyZXNzT25seUludGVybmV0R2F0ZXdheUlkKSxcbiAgICBnYXRld2F5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdhdGV3YXlJZCksXG4gICAgaW5zdGFuY2VfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VJZCksXG4gICAgbmF0X2dhdGV3YXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmF0R2F0ZXdheUlkKSxcbiAgICBuZXR3b3JrX2ludGVyZmFjZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uZXR3b3JrSW50ZXJmYWNlSWQpLFxuICAgIG9yaWdpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW4pLFxuICAgIHRyYW5zaXRfZ2F0ZXdheV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50cmFuc2l0R2F0ZXdheUlkKSxcbiAgICB2cGNfcGVlcmluZ19jb25uZWN0aW9uX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZwY1BlZXJpbmdDb25uZWN0aW9uSWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1NlY3VyaXR5R3JvdXAgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1NlY3VyaXR5R3JvdXBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1NlY3VyaXR5R3JvdXApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1NlY3VyaXR5R3JvdXBSdWxlUG9ydFJhbmdlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZnJvbSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZyb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdmcm9tJyk7XG4gIH1cblxuICAvLyB0byAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRvKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndG8nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTZWN1cml0eUdyb3VwUnVsZVBvcnRSYW5nZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU2VjdXJpdHlHcm91cFJ1bGVQb3J0UmFuZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZnJvbTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5mcm9tKSxcbiAgICB0bzogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50byksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU2VjdXJpdHlHcm91cFJ1bGUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjaWRyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NpZHInKTtcbiAgfVxuXG4gIC8vIGRpcmVjdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RpcmVjdGlvbicpO1xuICB9XG5cbiAgLy8gcG9ydF9yYW5nZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvcnRSYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwb3J0X3JhbmdlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcHJlZml4X2xpc3RfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmVmaXhMaXN0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVmaXhfbGlzdF9pZCcpO1xuICB9XG5cbiAgLy8gcHJvdG9jb2wgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3RvY29sJyk7XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwX2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU2VjdXJpdHlHcm91cFJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1NlY3VyaXR5R3JvdXBSdWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2lkciksXG4gICAgZGlyZWN0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRpcmVjdGlvbiksXG4gICAgcG9ydF9yYW5nZTogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTZWN1cml0eUdyb3VwUnVsZVBvcnRSYW5nZVRvVGVycmFmb3JtKHN0cnVjdCEucG9ydFJhbmdlKSxcbiAgICBwcmVmaXhfbGlzdF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXhMaXN0SWQpLFxuICAgIHByb3RvY29sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb3RvY29sKSxcbiAgICBzZWN1cml0eV9ncm91cF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWN1cml0eUdyb3VwSWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1NlY3VyaXR5R3JvdXBzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTZWN1cml0eUdyb3Vwc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU2VjdXJpdHlHcm91cHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1NvdXJjZVZwYyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU291cmNlVnBjVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTb3VyY2VWcGMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1N1Ym5ldCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU3VibmV0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTdWJuZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1N1Ym5ldFJvdXRlVGFibGUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1N1Ym5ldFJvdXRlVGFibGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1N1Ym5ldFJvdXRlVGFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwYyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zVnBjVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNWcGMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwY0VuZHBvaW50IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNWcGNFbmRwb2ludFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zVnBjRW5kcG9pbnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwY1BlZXJpbmdDb25uZWN0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNWcGNQZWVyaW5nQ29ubmVjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zVnBjUGVlcmluZ0Nvbm5lY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwbkNvbm5lY3Rpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwbkNvbm5lY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwbkNvbm5lY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwbkdhdGV3YXkgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwbkdhdGV3YXlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwbkdhdGV3YXkpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFjbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjbCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhY2wnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBhY2xfcnVsZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjbFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWNsX3J1bGUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBhZGRyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FkZHJlc3MnKTtcbiAgfVxuXG4gIC8vIGFkZHJlc3NlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFkZHJlc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhZGRyZXNzZXMnKTtcbiAgfVxuXG4gIC8vIGF0dGFjaGVkX3RvIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXR0YWNoZWRUbygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhdHRhY2hlZF90bycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGF2YWlsYWJpbGl0eV96b25lcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF2YWlsYWJpbGl0eVpvbmVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2F2YWlsYWJpbGl0eV96b25lcycpO1xuICB9XG5cbiAgLy8gY2lkcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjaWRycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjaWRycycpO1xuICB9XG5cbiAgLy8gY2xhc3NpY19sb2FkX2JhbGFuY2VyX2xpc3RlbmVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xhc3NpY0xvYWRCYWxhbmNlckxpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NsYXNzaWNfbG9hZF9iYWxhbmNlcl9saXN0ZW5lcicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNvbXBvbmVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb21wb25lbnQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjdXN0b21lcl9nYXRld2F5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3VzdG9tZXJHYXRld2F5KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2N1c3RvbWVyX2dhdGV3YXknKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZGVzdGluYXRpb25fdnBjIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25WcGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGVzdGluYXRpb25fdnBjJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZGlyZWN0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGlyZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGlyZWN0aW9uJyk7XG4gIH1cblxuICAvLyBlbGFzdGljX2xvYWRfYmFsYW5jZXJfbGlzdGVuZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbGFzdGljTG9hZEJhbGFuY2VyTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWxhc3RpY19sb2FkX2JhbGFuY2VyX2xpc3RlbmVyJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZXhwbGFuYXRpb25fY29kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4cGxhbmF0aW9uQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4cGxhbmF0aW9uX2NvZGUnKTtcbiAgfVxuXG4gIC8vIGluZ3Jlc3Nfcm91dGVfdGFibGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmdyZXNzUm91dGVUYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpbmdyZXNzX3JvdXRlX3RhYmxlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaW50ZXJuZXRfZ2F0ZXdheSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGludGVybmV0R2F0ZXdheSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpbnRlcm5ldF9nYXRld2F5JykgYXMgYW55O1xuICB9XG5cbiAgLy8gbG9hZF9iYWxhbmNlcl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2FkQmFsYW5jZXJBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2FkX2JhbGFuY2VyX2FybicpO1xuICB9XG5cbiAgLy8gbG9hZF9iYWxhbmNlcl9saXN0ZW5lcl9wb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2VyTGlzdGVuZXJQb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbG9hZF9iYWxhbmNlcl9saXN0ZW5lcl9wb3J0Jyk7XG4gIH1cblxuICAvLyBsb2FkX2JhbGFuY2VyX3RhcmdldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvYWRCYWxhbmNlclRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsb2FkX2JhbGFuY2VyX3RhcmdldCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGxvYWRfYmFsYW5jZXJfdGFyZ2V0X2dyb3VwIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2VyVGFyZ2V0R3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbG9hZF9iYWxhbmNlcl90YXJnZXRfZ3JvdXAnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBsb2FkX2JhbGFuY2VyX3RhcmdldF9ncm91cHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2FkQmFsYW5jZXJUYXJnZXRHcm91cHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbG9hZF9iYWxhbmNlcl90YXJnZXRfZ3JvdXBzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbG9hZF9iYWxhbmNlcl90YXJnZXRfcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvYWRCYWxhbmNlclRhcmdldFBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdsb2FkX2JhbGFuY2VyX3RhcmdldF9wb3J0Jyk7XG4gIH1cblxuICAvLyBtaXNzaW5nX2NvbXBvbmVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pc3NpbmdDb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtaXNzaW5nX2NvbXBvbmVudCcpO1xuICB9XG5cbiAgLy8gbmF0X2dhdGV3YXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYXRHYXRld2F5KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ25hdF9nYXRld2F5JykgYXMgYW55O1xuICB9XG5cbiAgLy8gbmV0d29ya19pbnRlcmZhY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuZXR3b3JrSW50ZXJmYWNlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ25ldHdvcmtfaW50ZXJmYWNlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcGFja2V0X2ZpZWxkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGFja2V0RmllbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYWNrZXRfZmllbGQnKTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG5cbiAgLy8gcG9ydF9yYW5nZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0UmFuZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BvcnRfcmFuZ2VzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcHJlZml4X2xpc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmVmaXhMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ByZWZpeF9saXN0JykgYXMgYW55O1xuICB9XG5cbiAgLy8gcHJvdG9jb2xzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2xzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3Byb3RvY29scycpO1xuICB9XG5cbiAgLy8gcm91dGVfdGFibGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb3V0ZVRhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JvdXRlX3RhYmxlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcm91dGVfdGFibGVfcm91dGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb3V0ZVRhYmxlUm91dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncm91dGVfdGFibGVfcm91dGUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2VjdXJpdHlfZ3JvdXAnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cF9ydWxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2VjdXJpdHlfZ3JvdXBfcnVsZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X2dyb3VwcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNvdXJjZV92cGMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb3VyY2VWcGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc291cmNlX3ZwYycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN0YXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0ZScpO1xuICB9XG5cbiAgLy8gc3VibmV0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VibmV0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N1Ym5ldCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9yb3V0ZV90YWJsZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1Ym5ldFJvdXRlVGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3VibmV0X3JvdXRlX3RhYmxlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdnBjIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdnBjKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZwYycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHZwY19lbmRwb2ludCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZwY0VuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZwY19lbmRwb2ludCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHZwY19wZWVyaW5nX2Nvbm5lY3Rpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2cGNQZWVyaW5nQ29ubmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2cGNfcGVlcmluZ19jb25uZWN0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdnBuX2Nvbm5lY3Rpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2cG5Db25uZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Zwbl9jb25uZWN0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdnBuX2dhdGV3YXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2cG5HYXRld2F5KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Zwbl9nYXRld2F5JykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjbDogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNBY2xUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjbCksXG4gICAgYWNsX3J1bGU6IGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQWNsUnVsZVRvVGVycmFmb3JtKHN0cnVjdCEuYWNsUnVsZSksXG4gICAgYWRkcmVzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hZGRyZXNzKSxcbiAgICBhZGRyZXNzZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWRkcmVzc2VzKSxcbiAgICBhdHRhY2hlZF90bzogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNBdHRhY2hlZFRvVG9UZXJyYWZvcm0oc3RydWN0IS5hdHRhY2hlZFRvKSxcbiAgICBhdmFpbGFiaWxpdHlfem9uZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYXZhaWxhYmlsaXR5Wm9uZXMpLFxuICAgIGNpZHJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNpZHJzKSxcbiAgICBjbGFzc2ljX2xvYWRfYmFsYW5jZXJfbGlzdGVuZXI6IGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQ2xhc3NpY0xvYWRCYWxhbmNlckxpc3RlbmVyVG9UZXJyYWZvcm0oc3RydWN0IS5jbGFzc2ljTG9hZEJhbGFuY2VyTGlzdGVuZXIpLFxuICAgIGNvbXBvbmVudDogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNDb21wb25lbnRUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBvbmVudCksXG4gICAgY3VzdG9tZXJfZ2F0ZXdheTogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNDdXN0b21lckdhdGV3YXlUb1RlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbWVyR2F0ZXdheSksXG4gICAgZGVzdGluYXRpb246IGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zRGVzdGluYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uKSxcbiAgICBkZXN0aW5hdGlvbl92cGM6IGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zRGVzdGluYXRpb25WcGNUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uVnBjKSxcbiAgICBkaXJlY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGlyZWN0aW9uKSxcbiAgICBlbGFzdGljX2xvYWRfYmFsYW5jZXJfbGlzdGVuZXI6IGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zRWxhc3RpY0xvYWRCYWxhbmNlckxpc3RlbmVyVG9UZXJyYWZvcm0oc3RydWN0IS5lbGFzdGljTG9hZEJhbGFuY2VyTGlzdGVuZXIpLFxuICAgIGV4cGxhbmF0aW9uX2NvZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXhwbGFuYXRpb25Db2RlKSxcbiAgICBpbmdyZXNzX3JvdXRlX3RhYmxlOiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0luZ3Jlc3NSb3V0ZVRhYmxlVG9UZXJyYWZvcm0oc3RydWN0IS5pbmdyZXNzUm91dGVUYWJsZSksXG4gICAgaW50ZXJuZXRfZ2F0ZXdheTogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNJbnRlcm5ldEdhdGV3YXlUb1RlcnJhZm9ybShzdHJ1Y3QhLmludGVybmV0R2F0ZXdheSksXG4gICAgbG9hZF9iYWxhbmNlcl9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9hZEJhbGFuY2VyQXJuKSxcbiAgICBsb2FkX2JhbGFuY2VyX2xpc3RlbmVyX3BvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubG9hZEJhbGFuY2VyTGlzdGVuZXJQb3J0KSxcbiAgICBsb2FkX2JhbGFuY2VyX3RhcmdldDogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNMb2FkQmFsYW5jZXJUYXJnZXRUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvYWRCYWxhbmNlclRhcmdldCksXG4gICAgbG9hZF9iYWxhbmNlcl90YXJnZXRfZ3JvdXA6IGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0R3JvdXBUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvYWRCYWxhbmNlclRhcmdldEdyb3VwKSxcbiAgICBsb2FkX2JhbGFuY2VyX3RhcmdldF9ncm91cHM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNMb2FkQmFsYW5jZXJUYXJnZXRHcm91cHNUb1RlcnJhZm9ybSkoc3RydWN0IS5sb2FkQmFsYW5jZXJUYXJnZXRHcm91cHMpLFxuICAgIGxvYWRfYmFsYW5jZXJfdGFyZ2V0X3BvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubG9hZEJhbGFuY2VyVGFyZ2V0UG9ydCksXG4gICAgbWlzc2luZ19jb21wb25lbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWlzc2luZ0NvbXBvbmVudCksXG4gICAgbmF0X2dhdGV3YXk6IGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTmF0R2F0ZXdheVRvVGVycmFmb3JtKHN0cnVjdCEubmF0R2F0ZXdheSksXG4gICAgbmV0d29ya19pbnRlcmZhY2U6IGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTmV0d29ya0ludGVyZmFjZVRvVGVycmFmb3JtKHN0cnVjdCEubmV0d29ya0ludGVyZmFjZSksXG4gICAgcGFja2V0X2ZpZWxkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhY2tldEZpZWxkKSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICAgIHBvcnRfcmFuZ2VzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zUG9ydFJhbmdlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnBvcnRSYW5nZXMpLFxuICAgIHByZWZpeF9saXN0OiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ByZWZpeExpc3RUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeExpc3QpLFxuICAgIHByb3RvY29sczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5wcm90b2NvbHMpLFxuICAgIHJvdXRlX3RhYmxlOiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1JvdXRlVGFibGVUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvdXRlVGFibGUpLFxuICAgIHJvdXRlX3RhYmxlX3JvdXRlOiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1JvdXRlVGFibGVSb3V0ZVRvVGVycmFmb3JtKHN0cnVjdCEucm91dGVUYWJsZVJvdXRlKSxcbiAgICBzZWN1cml0eV9ncm91cDogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTZWN1cml0eUdyb3VwVG9UZXJyYWZvcm0oc3RydWN0IS5zZWN1cml0eUdyb3VwKSxcbiAgICBzZWN1cml0eV9ncm91cF9ydWxlOiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1NlY3VyaXR5R3JvdXBSdWxlVG9UZXJyYWZvcm0oc3RydWN0IS5zZWN1cml0eUdyb3VwUnVsZSksXG4gICAgc2VjdXJpdHlfZ3JvdXBzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU2VjdXJpdHlHcm91cHNUb1RlcnJhZm9ybSkoc3RydWN0IS5zZWN1cml0eUdyb3VwcyksXG4gICAgc291cmNlX3ZwYzogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTb3VyY2VWcGNUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZVZwYyksXG4gICAgc3RhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdGUpLFxuICAgIHN1Ym5ldDogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTdWJuZXRUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1Ym5ldCksXG4gICAgc3VibmV0X3JvdXRlX3RhYmxlOiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1N1Ym5ldFJvdXRlVGFibGVUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1Ym5ldFJvdXRlVGFibGUpLFxuICAgIHZwYzogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNWcGNUb1RlcnJhZm9ybShzdHJ1Y3QhLnZwYyksXG4gICAgdnBjX2VuZHBvaW50OiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwY0VuZHBvaW50VG9UZXJyYWZvcm0oc3RydWN0IS52cGNFbmRwb2ludCksXG4gICAgdnBjX3BlZXJpbmdfY29ubmVjdGlvbjogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNWcGNQZWVyaW5nQ29ubmVjdGlvblRvVGVycmFmb3JtKHN0cnVjdCEudnBjUGVlcmluZ0Nvbm5lY3Rpb24pLFxuICAgIHZwbl9jb25uZWN0aW9uOiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwbkNvbm5lY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnZwbkNvbm5lY3Rpb24pLFxuICAgIHZwbl9nYXRld2F5OiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwbkdhdGV3YXlUb1RlcnJhZm9ybShzdHJ1Y3QhLnZwbkdhdGV3YXkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0FjbFJ1bGVQb3J0UmFuZ2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBmcm9tIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZnJvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Zyb20nKTtcbiAgfVxuXG4gIC8vIHRvIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdG8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0bycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0FjbFJ1bGVQb3J0UmFuZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0FjbFJ1bGVQb3J0UmFuZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZnJvbTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5mcm9tKSxcbiAgICB0bzogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50byksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzQWNsUnVsZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNpZHIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjaWRyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2lkcicpO1xuICB9XG5cbiAgLy8gZWdyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZWdyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VncmVzcycpO1xuICB9XG5cbiAgLy8gcG9ydF9yYW5nZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvcnRSYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwb3J0X3JhbmdlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcHJvdG9jb2wgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3RvY29sJyk7XG4gIH1cblxuICAvLyBydWxlX2FjdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJ1bGVBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdydWxlX2FjdGlvbicpO1xuICB9XG5cbiAgLy8gcnVsZV9udW1iZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBydWxlTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncnVsZV9udW1iZXInKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNBY2xSdWxlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNBY2xSdWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2lkciksXG4gICAgZWdyZXNzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lZ3Jlc3MpLFxuICAgIHBvcnRfcmFuZ2U6IGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzQWNsUnVsZVBvcnRSYW5nZVRvVGVycmFmb3JtKHN0cnVjdCEucG9ydFJhbmdlKSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgcnVsZV9hY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucnVsZUFjdGlvbiksXG4gICAgcnVsZV9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucnVsZU51bWJlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzQ29tcG9uZW50IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNDb21wb25lbnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0NvbXBvbmVudCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzRGVzdGluYXRpb25WcGMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0Rlc3RpbmF0aW9uVnBjVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNEZXN0aW5hdGlvblZwYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlckRlc3RpbmF0aW9uUG9ydFJhbmdlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZyb20gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmcm9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZnJvbScpO1xuICB9XG5cbiAgLy8gdG8gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0bygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RvJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlckRlc3RpbmF0aW9uUG9ydFJhbmdlc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlckRlc3RpbmF0aW9uUG9ydFJhbmdlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmcm9tOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyb20pLFxuICAgIHRvOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNJbmJvdW5kSGVhZGVyU291cmNlUG9ydFJhbmdlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZyb20gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmcm9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZnJvbScpO1xuICB9XG5cbiAgLy8gdG8gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0bygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RvJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlclNvdXJjZVBvcnRSYW5nZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXJTb3VyY2VQb3J0UmFuZ2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZyb206IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZnJvbSksXG4gICAgdG86IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudG8pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXIgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkZXN0aW5hdGlvbl9hZGRyZXNzZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvbkFkZHJlc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdkZXN0aW5hdGlvbl9hZGRyZXNzZXMnKTtcbiAgfVxuXG4gIC8vIGRlc3RpbmF0aW9uX3BvcnRfcmFuZ2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25Qb3J0UmFuZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX3BvcnRfcmFuZ2VzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcHJvdG9jb2wgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3RvY29sJyk7XG4gIH1cblxuICAvLyBzb3VyY2VfYWRkcmVzc2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc291cmNlQWRkcmVzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NvdXJjZV9hZGRyZXNzZXMnKTtcbiAgfVxuXG4gIC8vIHNvdXJjZV9wb3J0X3JhbmdlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNvdXJjZVBvcnRSYW5nZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc291cmNlX3BvcnRfcmFuZ2VzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGVzdGluYXRpb25fYWRkcmVzc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRlc3RpbmF0aW9uQWRkcmVzc2VzKSxcbiAgICBkZXN0aW5hdGlvbl9wb3J0X3JhbmdlczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXJEZXN0aW5hdGlvblBvcnRSYW5nZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5kZXN0aW5hdGlvblBvcnRSYW5nZXMpLFxuICAgIHByb3RvY29sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb3RvY29sKSxcbiAgICBzb3VyY2VfYWRkcmVzc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNvdXJjZUFkZHJlc3NlcyksXG4gICAgc291cmNlX3BvcnRfcmFuZ2VzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlclNvdXJjZVBvcnRSYW5nZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5zb3VyY2VQb3J0UmFuZ2VzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlckRlc3RpbmF0aW9uUG9ydFJhbmdlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZyb20gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmcm9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZnJvbScpO1xuICB9XG5cbiAgLy8gdG8gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0bygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RvJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJEZXN0aW5hdGlvblBvcnRSYW5nZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c091dGJvdW5kSGVhZGVyRGVzdGluYXRpb25Qb3J0UmFuZ2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZyb206IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZnJvbSksXG4gICAgdG86IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudG8pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c091dGJvdW5kSGVhZGVyU291cmNlUG9ydFJhbmdlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZyb20gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmcm9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZnJvbScpO1xuICB9XG5cbiAgLy8gdG8gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0bygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RvJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJTb3VyY2VQb3J0UmFuZ2VzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlclNvdXJjZVBvcnRSYW5nZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZnJvbTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5mcm9tKSxcbiAgICB0bzogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50byksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXIgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkZXN0aW5hdGlvbl9hZGRyZXNzZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvbkFkZHJlc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdkZXN0aW5hdGlvbl9hZGRyZXNzZXMnKTtcbiAgfVxuXG4gIC8vIGRlc3RpbmF0aW9uX3BvcnRfcmFuZ2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25Qb3J0UmFuZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX3BvcnRfcmFuZ2VzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcHJvdG9jb2wgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3RvY29sJyk7XG4gIH1cblxuICAvLyBzb3VyY2VfYWRkcmVzc2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc291cmNlQWRkcmVzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NvdXJjZV9hZGRyZXNzZXMnKTtcbiAgfVxuXG4gIC8vIHNvdXJjZV9wb3J0X3JhbmdlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNvdXJjZVBvcnRSYW5nZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc291cmNlX3BvcnRfcmFuZ2VzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c091dGJvdW5kSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXN0aW5hdGlvbl9hZGRyZXNzZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGVzdGluYXRpb25BZGRyZXNzZXMpLFxuICAgIGRlc3RpbmF0aW9uX3BvcnRfcmFuZ2VzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJEZXN0aW5hdGlvblBvcnRSYW5nZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5kZXN0aW5hdGlvblBvcnRSYW5nZXMpLFxuICAgIHByb3RvY29sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb3RvY29sKSxcbiAgICBzb3VyY2VfYWRkcmVzc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNvdXJjZUFkZHJlc3NlcyksXG4gICAgc291cmNlX3BvcnRfcmFuZ2VzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJTb3VyY2VQb3J0UmFuZ2VzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc291cmNlUG9ydFJhbmdlcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzUm91dGVUYWJsZVJvdXRlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGVzdGluYXRpb25fY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uQ2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX2NpZHInKTtcbiAgfVxuXG4gIC8vIGRlc3RpbmF0aW9uX3ByZWZpeF9saXN0X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25QcmVmaXhMaXN0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXN0aW5hdGlvbl9wcmVmaXhfbGlzdF9pZCcpO1xuICB9XG5cbiAgLy8gZWdyZXNzX29ubHlfaW50ZXJuZXRfZ2F0ZXdheV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVncmVzc09ubHlJbnRlcm5ldEdhdGV3YXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VncmVzc19vbmx5X2ludGVybmV0X2dhdGV3YXlfaWQnKTtcbiAgfVxuXG4gIC8vIGdhdGV3YXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBnYXRld2F5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnYXRld2F5X2lkJyk7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV9pZCcpO1xuICB9XG5cbiAgLy8gbmF0X2dhdGV3YXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYXRHYXRld2F5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYXRfZ2F0ZXdheV9pZCcpO1xuICB9XG5cbiAgLy8gbmV0d29ya19pbnRlcmZhY2VfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuZXR3b3JrSW50ZXJmYWNlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduZXR3b3JrX2ludGVyZmFjZV9pZCcpO1xuICB9XG5cbiAgLy8gb3JpZ2luIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JpZ2luKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3JpZ2luJyk7XG4gIH1cblxuICAvLyB0cmFuc2l0X2dhdGV3YXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0cmFuc2l0R2F0ZXdheUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHJhbnNpdF9nYXRld2F5X2lkJyk7XG4gIH1cblxuICAvLyB2cGNfcGVlcmluZ19jb25uZWN0aW9uX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNSb3V0ZVRhYmxlUm91dGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1JvdXRlVGFibGVSb3V0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXN0aW5hdGlvbl9jaWRyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uQ2lkciksXG4gICAgZGVzdGluYXRpb25fcHJlZml4X2xpc3RfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb25QcmVmaXhMaXN0SWQpLFxuICAgIGVncmVzc19vbmx5X2ludGVybmV0X2dhdGV3YXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZWdyZXNzT25seUludGVybmV0R2F0ZXdheUlkKSxcbiAgICBnYXRld2F5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdhdGV3YXlJZCksXG4gICAgaW5zdGFuY2VfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VJZCksXG4gICAgbmF0X2dhdGV3YXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmF0R2F0ZXdheUlkKSxcbiAgICBuZXR3b3JrX2ludGVyZmFjZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uZXR3b3JrSW50ZXJmYWNlSWQpLFxuICAgIG9yaWdpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW4pLFxuICAgIHRyYW5zaXRfZ2F0ZXdheV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50cmFuc2l0R2F0ZXdheUlkKSxcbiAgICB2cGNfcGVlcmluZ19jb25uZWN0aW9uX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZwY1BlZXJpbmdDb25uZWN0aW9uSWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1NlY3VyaXR5R3JvdXBSdWxlUG9ydFJhbmdlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZnJvbSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZyb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdmcm9tJyk7XG4gIH1cblxuICAvLyB0byAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRvKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndG8nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNTZWN1cml0eUdyb3VwUnVsZVBvcnRSYW5nZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU2VjdXJpdHlHcm91cFJ1bGVQb3J0UmFuZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZnJvbTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5mcm9tKSxcbiAgICB0bzogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50byksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU2VjdXJpdHlHcm91cFJ1bGUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjaWRyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NpZHInKTtcbiAgfVxuXG4gIC8vIGRpcmVjdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RpcmVjdGlvbicpO1xuICB9XG5cbiAgLy8gcG9ydF9yYW5nZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvcnRSYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwb3J0X3JhbmdlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcHJlZml4X2xpc3RfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmVmaXhMaXN0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVmaXhfbGlzdF9pZCcpO1xuICB9XG5cbiAgLy8gcHJvdG9jb2wgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3RvY29sJyk7XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwX2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU2VjdXJpdHlHcm91cFJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1NlY3VyaXR5R3JvdXBSdWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2lkciksXG4gICAgZGlyZWN0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRpcmVjdGlvbiksXG4gICAgcG9ydF9yYW5nZTogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNTZWN1cml0eUdyb3VwUnVsZVBvcnRSYW5nZVRvVGVycmFmb3JtKHN0cnVjdCEucG9ydFJhbmdlKSxcbiAgICBwcmVmaXhfbGlzdF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXhMaXN0SWQpLFxuICAgIHByb3RvY29sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb3RvY29sKSxcbiAgICBzZWN1cml0eV9ncm91cF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWN1cml0eUdyb3VwSWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1NvdXJjZVZwYyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU291cmNlVnBjVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNTb3VyY2VWcGMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1N1Ym5ldCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU3VibmV0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNTdWJuZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1ZwYyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzVnBjVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNWcGMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFjbF9ydWxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNsUnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhY2xfcnVsZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNvbXBvbmVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb21wb25lbnQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbl92cGMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvblZwYygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkZXN0aW5hdGlvbl92cGMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpbmJvdW5kX2hlYWRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluYm91bmRIZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaW5ib3VuZF9oZWFkZXInKSBhcyBhbnk7XG4gIH1cblxuICAvLyBvdXRib3VuZF9oZWFkZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvdXRib3VuZEhlYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdvdXRib3VuZF9oZWFkZXInKSBhcyBhbnk7XG4gIH1cblxuICAvLyByb3V0ZV90YWJsZV9yb3V0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvdXRlVGFibGVSb3V0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyb3V0ZV90YWJsZV9yb3V0ZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X2dyb3VwX3J1bGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwUnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9ydWxlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2VxdWVuY2VfbnVtYmVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VxdWVuY2VOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzZXF1ZW5jZV9udW1iZXInKTtcbiAgfVxuXG4gIC8vIHNvdXJjZV92cGMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb3VyY2VWcGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc291cmNlX3ZwYycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN1Ym5ldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1Ym5ldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdWJuZXQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB2cGMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2cGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndnBjJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjbF9ydWxlOiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0FjbFJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjbFJ1bGUpLFxuICAgIGNvbXBvbmVudDogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNDb21wb25lbnRUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBvbmVudCksXG4gICAgZGVzdGluYXRpb25fdnBjOiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0Rlc3RpbmF0aW9uVnBjVG9UZXJyYWZvcm0oc3RydWN0IS5kZXN0aW5hdGlvblZwYyksXG4gICAgaW5ib3VuZF9oZWFkZXI6IGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlclRvVGVycmFmb3JtKHN0cnVjdCEuaW5ib3VuZEhlYWRlciksXG4gICAgb3V0Ym91bmRfaGVhZGVyOiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c091dGJvdW5kSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0IS5vdXRib3VuZEhlYWRlciksXG4gICAgcm91dGVfdGFibGVfcm91dGU6IGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzUm91dGVUYWJsZVJvdXRlVG9UZXJyYWZvcm0oc3RydWN0IS5yb3V0ZVRhYmxlUm91dGUpLFxuICAgIHNlY3VyaXR5X2dyb3VwX3J1bGU6IGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU2VjdXJpdHlHcm91cFJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBSdWxlKSxcbiAgICBzZXF1ZW5jZV9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2VxdWVuY2VOdW1iZXIpLFxuICAgIHNvdXJjZV92cGM6IGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU291cmNlVnBjVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VWcGMpLFxuICAgIHN1Ym5ldDogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNTdWJuZXRUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1Ym5ldCksXG4gICAgdnBjOiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1ZwY1RvVGVycmFmb3JtKHN0cnVjdCEudnBjKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0FjbFJ1bGVQb3J0UmFuZ2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBmcm9tIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZnJvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Zyb20nKTtcbiAgfVxuXG4gIC8vIHRvIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdG8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0bycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzQWNsUnVsZVBvcnRSYW5nZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNBY2xSdWxlUG9ydFJhbmdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZyb206IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZnJvbSksXG4gICAgdG86IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudG8pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzQWNsUnVsZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNpZHIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjaWRyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2lkcicpO1xuICB9XG5cbiAgLy8gZWdyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZWdyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VncmVzcycpO1xuICB9XG5cbiAgLy8gcG9ydF9yYW5nZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBvcnRSYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwb3J0X3JhbmdlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcHJvdG9jb2wgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3RvY29sJyk7XG4gIH1cblxuICAvLyBydWxlX2FjdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJ1bGVBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdydWxlX2FjdGlvbicpO1xuICB9XG5cbiAgLy8gcnVsZV9udW1iZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBydWxlTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncnVsZV9udW1iZXInKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0FjbFJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzQWNsUnVsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjaWRyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNpZHIpLFxuICAgIGVncmVzczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZWdyZXNzKSxcbiAgICBwb3J0X3JhbmdlOiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzQWNsUnVsZVBvcnRSYW5nZVRvVGVycmFmb3JtKHN0cnVjdCEucG9ydFJhbmdlKSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgcnVsZV9hY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucnVsZUFjdGlvbiksXG4gICAgcnVsZV9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucnVsZU51bWJlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNDb21wb25lbnQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzQ29tcG9uZW50VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0NvbXBvbmVudCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNEZXN0aW5hdGlvblZwYyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNEZXN0aW5hdGlvblZwY1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNEZXN0aW5hdGlvblZwYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNJbmJvdW5kSGVhZGVyRGVzdGluYXRpb25Qb3J0UmFuZ2VzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZnJvbSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZyb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdmcm9tJyk7XG4gIH1cblxuICAvLyB0byAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRvKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndG8nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXJEZXN0aW5hdGlvblBvcnRSYW5nZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlckRlc3RpbmF0aW9uUG9ydFJhbmdlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmcm9tOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyb20pLFxuICAgIHRvOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXJTb3VyY2VQb3J0UmFuZ2VzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZnJvbSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZyb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdmcm9tJyk7XG4gIH1cblxuICAvLyB0byAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRvKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndG8nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXJTb3VyY2VQb3J0UmFuZ2VzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXJTb3VyY2VQb3J0UmFuZ2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZyb206IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZnJvbSksXG4gICAgdG86IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudG8pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlciBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRlc3RpbmF0aW9uX2FkZHJlc3NlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uQWRkcmVzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX2FkZHJlc3NlcycpO1xuICB9XG5cbiAgLy8gZGVzdGluYXRpb25fcG9ydF9yYW5nZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvblBvcnRSYW5nZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGVzdGluYXRpb25fcG9ydF9yYW5nZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwcm90b2NvbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb3RvY29sKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvdG9jb2wnKTtcbiAgfVxuXG4gIC8vIHNvdXJjZV9hZGRyZXNzZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb3VyY2VBZGRyZXNzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc291cmNlX2FkZHJlc3NlcycpO1xuICB9XG5cbiAgLy8gc291cmNlX3BvcnRfcmFuZ2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc291cmNlUG9ydFJhbmdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzb3VyY2VfcG9ydF9yYW5nZXMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNJbmJvdW5kSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGVzdGluYXRpb25fYWRkcmVzc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRlc3RpbmF0aW9uQWRkcmVzc2VzKSxcbiAgICBkZXN0aW5hdGlvbl9wb3J0X3JhbmdlczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlckRlc3RpbmF0aW9uUG9ydFJhbmdlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRlc3RpbmF0aW9uUG9ydFJhbmdlcyksXG4gICAgcHJvdG9jb2w6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvdG9jb2wpLFxuICAgIHNvdXJjZV9hZGRyZXNzZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc291cmNlQWRkcmVzc2VzKSxcbiAgICBzb3VyY2VfcG9ydF9yYW5nZXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXJTb3VyY2VQb3J0UmFuZ2VzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc291cmNlUG9ydFJhbmdlcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlckRlc3RpbmF0aW9uUG9ydFJhbmdlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZyb20gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmcm9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZnJvbScpO1xuICB9XG5cbiAgLy8gdG8gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0bygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RvJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlckRlc3RpbmF0aW9uUG9ydFJhbmdlc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlckRlc3RpbmF0aW9uUG9ydFJhbmdlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmcm9tOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyb20pLFxuICAgIHRvOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c091dGJvdW5kSGVhZGVyU291cmNlUG9ydFJhbmdlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZyb20gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmcm9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZnJvbScpO1xuICB9XG5cbiAgLy8gdG8gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0bygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RvJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlclNvdXJjZVBvcnRSYW5nZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJTb3VyY2VQb3J0UmFuZ2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZyb206IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZnJvbSksXG4gICAgdG86IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudG8pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXIgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkZXN0aW5hdGlvbl9hZGRyZXNzZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvbkFkZHJlc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdkZXN0aW5hdGlvbl9hZGRyZXNzZXMnKTtcbiAgfVxuXG4gIC8vIGRlc3RpbmF0aW9uX3BvcnRfcmFuZ2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25Qb3J0UmFuZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX3BvcnRfcmFuZ2VzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcHJvdG9jb2wgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3RvY29sJyk7XG4gIH1cblxuICAvLyBzb3VyY2VfYWRkcmVzc2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc291cmNlQWRkcmVzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NvdXJjZV9hZGRyZXNzZXMnKTtcbiAgfVxuXG4gIC8vIHNvdXJjZV9wb3J0X3JhbmdlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNvdXJjZVBvcnRSYW5nZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc291cmNlX3BvcnRfcmFuZ2VzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGVzdGluYXRpb25fYWRkcmVzc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRlc3RpbmF0aW9uQWRkcmVzc2VzKSxcbiAgICBkZXN0aW5hdGlvbl9wb3J0X3JhbmdlczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJEZXN0aW5hdGlvblBvcnRSYW5nZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5kZXN0aW5hdGlvblBvcnRSYW5nZXMpLFxuICAgIHByb3RvY29sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb3RvY29sKSxcbiAgICBzb3VyY2VfYWRkcmVzc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNvdXJjZUFkZHJlc3NlcyksXG4gICAgc291cmNlX3BvcnRfcmFuZ2VzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlclNvdXJjZVBvcnRSYW5nZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5zb3VyY2VQb3J0UmFuZ2VzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1JvdXRlVGFibGVSb3V0ZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRlc3RpbmF0aW9uX2NpZHIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvbkNpZHIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXN0aW5hdGlvbl9jaWRyJyk7XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbl9wcmVmaXhfbGlzdF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uUHJlZml4TGlzdElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzdGluYXRpb25fcHJlZml4X2xpc3RfaWQnKTtcbiAgfVxuXG4gIC8vIGVncmVzc19vbmx5X2ludGVybmV0X2dhdGV3YXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlZ3Jlc3NPbmx5SW50ZXJuZXRHYXRld2F5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlZ3Jlc3Nfb25seV9pbnRlcm5ldF9nYXRld2F5X2lkJyk7XG4gIH1cblxuICAvLyBnYXRld2F5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZ2F0ZXdheUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2F0ZXdheV9pZCcpO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnN0YW5jZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfaWQnKTtcbiAgfVxuXG4gIC8vIG5hdF9nYXRld2F5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmF0R2F0ZXdheUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmF0X2dhdGV3YXlfaWQnKTtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfaW50ZXJmYWNlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmV0d29ya0ludGVyZmFjZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmV0d29ya19pbnRlcmZhY2VfaWQnKTtcbiAgfVxuXG4gIC8vIG9yaWdpbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9yaWdpbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29yaWdpbicpO1xuICB9XG5cbiAgLy8gdHJhbnNpdF9nYXRld2F5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHJhbnNpdEdhdGV3YXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RyYW5zaXRfZ2F0ZXdheV9pZCcpO1xuICB9XG5cbiAgLy8gdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZwY1BlZXJpbmdDb25uZWN0aW9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2cGNfcGVlcmluZ19jb25uZWN0aW9uX2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNSb3V0ZVRhYmxlUm91dGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzUm91dGVUYWJsZVJvdXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRlc3RpbmF0aW9uX2NpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb25DaWRyKSxcbiAgICBkZXN0aW5hdGlvbl9wcmVmaXhfbGlzdF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXN0aW5hdGlvblByZWZpeExpc3RJZCksXG4gICAgZWdyZXNzX29ubHlfaW50ZXJuZXRfZ2F0ZXdheV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lZ3Jlc3NPbmx5SW50ZXJuZXRHYXRld2F5SWQpLFxuICAgIGdhdGV3YXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ2F0ZXdheUlkKSxcbiAgICBpbnN0YW5jZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZUlkKSxcbiAgICBuYXRfZ2F0ZXdheV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYXRHYXRld2F5SWQpLFxuICAgIG5ldHdvcmtfaW50ZXJmYWNlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5ldHdvcmtJbnRlcmZhY2VJZCksXG4gICAgb3JpZ2luOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yaWdpbiksXG4gICAgdHJhbnNpdF9nYXRld2F5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRyYW5zaXRHYXRld2F5SWQpLFxuICAgIHZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudnBjUGVlcmluZ0Nvbm5lY3Rpb25JZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNTZWN1cml0eUdyb3VwUnVsZVBvcnRSYW5nZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZyb20gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmcm9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZnJvbScpO1xuICB9XG5cbiAgLy8gdG8gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0bygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RvJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNTZWN1cml0eUdyb3VwUnVsZVBvcnRSYW5nZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNTZWN1cml0eUdyb3VwUnVsZVBvcnRSYW5nZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmcm9tOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyb20pLFxuICAgIHRvOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1NlY3VyaXR5R3JvdXBSdWxlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNpZHIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjaWRyJyk7XG4gIH1cblxuICAvLyBkaXJlY3Rpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXJlY3Rpb24nKTtcbiAgfVxuXG4gIC8vIHBvcnRfcmFuZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0UmFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncG9ydF9yYW5nZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHByZWZpeF9saXN0X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJlZml4TGlzdElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZml4X2xpc3RfaWQnKTtcbiAgfVxuXG4gIC8vIHByb3RvY29sIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm90b2NvbCcpO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9pZCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzU2VjdXJpdHlHcm91cFJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzU2VjdXJpdHlHcm91cFJ1bGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2lkcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jaWRyKSxcbiAgICBkaXJlY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGlyZWN0aW9uKSxcbiAgICBwb3J0X3JhbmdlOiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzU2VjdXJpdHlHcm91cFJ1bGVQb3J0UmFuZ2VUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnRSYW5nZSksXG4gICAgcHJlZml4X2xpc3RfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZml4TGlzdElkKSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgc2VjdXJpdHlfZ3JvdXBfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VjdXJpdHlHcm91cElkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1NvdXJjZVZwYyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNTb3VyY2VWcGNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzU291cmNlVnBjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1N1Ym5ldCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNTdWJuZXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzU3VibmV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1ZwYyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNWcGNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzVnBjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFjbF9ydWxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNsUnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhY2xfcnVsZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNvbXBvbmVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb21wb25lbnQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbl92cGMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvblZwYygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkZXN0aW5hdGlvbl92cGMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpbmJvdW5kX2hlYWRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluYm91bmRIZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaW5ib3VuZF9oZWFkZXInKSBhcyBhbnk7XG4gIH1cblxuICAvLyBvdXRib3VuZF9oZWFkZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvdXRib3VuZEhlYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdvdXRib3VuZF9oZWFkZXInKSBhcyBhbnk7XG4gIH1cblxuICAvLyByb3V0ZV90YWJsZV9yb3V0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvdXRlVGFibGVSb3V0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyb3V0ZV90YWJsZV9yb3V0ZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X2dyb3VwX3J1bGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwUnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9ydWxlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2VxdWVuY2VfbnVtYmVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VxdWVuY2VOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzZXF1ZW5jZV9udW1iZXInKTtcbiAgfVxuXG4gIC8vIHNvdXJjZV92cGMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzb3VyY2VWcGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc291cmNlX3ZwYycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN1Ym5ldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1Ym5ldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdWJuZXQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB2cGMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2cGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndnBjJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY2xfcnVsZTogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0FjbFJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjbFJ1bGUpLFxuICAgIGNvbXBvbmVudDogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0NvbXBvbmVudFRvVGVycmFmb3JtKHN0cnVjdCEuY29tcG9uZW50KSxcbiAgICBkZXN0aW5hdGlvbl92cGM6IGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNEZXN0aW5hdGlvblZwY1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb25WcGMpLFxuICAgIGluYm91bmRfaGVhZGVyOiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlclRvVGVycmFmb3JtKHN0cnVjdCEuaW5ib3VuZEhlYWRlciksXG4gICAgb3V0Ym91bmRfaGVhZGVyOiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm91dGJvdW5kSGVhZGVyKSxcbiAgICByb3V0ZV90YWJsZV9yb3V0ZTogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1JvdXRlVGFibGVSb3V0ZVRvVGVycmFmb3JtKHN0cnVjdCEucm91dGVUYWJsZVJvdXRlKSxcbiAgICBzZWN1cml0eV9ncm91cF9ydWxlOiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzU2VjdXJpdHlHcm91cFJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBSdWxlKSxcbiAgICBzZXF1ZW5jZV9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2VxdWVuY2VOdW1iZXIpLFxuICAgIHNvdXJjZV92cGM6IGRhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNTb3VyY2VWcGNUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZVZwYyksXG4gICAgc3VibmV0OiBkYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzU3VibmV0VG9UZXJyYWZvcm0oc3RydWN0IS5zdWJuZXQpLFxuICAgIHZwYzogZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1ZwY1RvVGVycmFmb3JtKHN0cnVjdCEudnBjKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNUYWdzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNUYWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwgYXdzY2NfZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXN9XG4qL1xuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0VjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpc1wiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sIGF3c2NjX2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzfSBEYXRhIFNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0NvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzY2NFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0NvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWx0ZXJuYXRlX3BhdGhfaGludHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbHRlcm5hdGVQYXRoSGludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWx0ZXJuYXRlX3BhdGhfaGludHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBleHBsYW5hdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBleHBsYW5hdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZXhwbGFuYXRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZmlsdGVyX2luX2FybnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmaWx0ZXJJbkFybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZmlsdGVyX2luX2FybnMnKTtcbiAgfVxuXG4gIC8vIGZvcndhcmRfcGF0aF9jb21wb25lbnRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZm9yd2FyZFBhdGhDb21wb25lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ZvcndhcmRfcGF0aF9jb21wb25lbnRzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRcbiAgfVxuXG4gIC8vIG5ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXNfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmV0d29ya0luc2lnaHRzQW5hbHlzaXNBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzX2FybicpO1xuICB9XG5cbiAgLy8gbmV0d29ya19pbnNpZ2h0c19hbmFseXNpc19pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzX2lkJyk7XG4gIH1cblxuICAvLyBuZXR3b3JrX2luc2lnaHRzX3BhdGhfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuZXR3b3JrSW5zaWdodHNQYXRoSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduZXR3b3JrX2luc2lnaHRzX3BhdGhfaWQnKTtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfcGF0aF9mb3VuZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5ldHdvcmtQYXRoRm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbmV0d29ya19wYXRoX2ZvdW5kJyk7XG4gIH1cblxuICAvLyByZXR1cm5fcGF0aF9jb21wb25lbnRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmV0dXJuUGF0aENvbXBvbmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmV0dXJuX3BhdGhfY29tcG9uZW50cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN0YXJ0X2RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGFydERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGFydF9kYXRlJyk7XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuXG4gIC8vIHN0YXR1c19tZXNzYWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1c19tZXNzYWdlJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==