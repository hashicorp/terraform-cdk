"use strict";
// https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform = exports.ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform = exports.ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform = exports.ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform = exports.ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform = exports.ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform = exports.ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform = exports.ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform = exports.ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform = exports.ec2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform = exports.ec2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform = exports.ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsToTerraform = exports.Ec2NetworkInsightsAnalysisExplanations = exports.ec2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsVpcToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsSubnetToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsRouteTableToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsPrefixListToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsPortRangesToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsDestinationToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsComponentToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsAttachedToToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsAclRuleToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform = exports.ec2NetworkInsightsAnalysisExplanationsAclToTerraform = exports.ec2NetworkInsightsAnalysisAlternatePathHintsToTerraform = exports.Ec2NetworkInsightsAnalysisAlternatePathHints = void 0;
exports.Ec2NetworkInsightsAnalysis = exports.ec2NetworkInsightsAnalysisTagsToTerraform = exports.ec2NetworkInsightsAnalysisReturnPathComponentsToTerraform = exports.Ec2NetworkInsightsAnalysisReturnPathComponents = exports.ec2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform = exports.ec2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform = exports.ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform = exports.ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform = exports.ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform = exports.ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform = exports.ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform = exports.ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform = exports.ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform = exports.ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform = exports.ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform = exports.ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform = exports.ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform = exports.ec2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform = exports.ec2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform = exports.ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform = exports.ec2NetworkInsightsAnalysisForwardPathComponentsToTerraform = exports.Ec2NetworkInsightsAnalysisForwardPathComponents = exports.ec2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform = exports.ec2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform = exports.ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform = exports.ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform = void 0;
const cdktf = require("cdktf");
class Ec2NetworkInsightsAnalysisAlternatePathHints extends cdktf.ComplexComputedList {
    get componentArn() {
        return this.getStringAttribute('component_arn');
    }
    set componentArn(value) {
        this._componentArn = value;
    }
    resetComponentArn() {
        this._componentArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get componentArnInput() {
        return this._componentArn;
    }
    get componentId() {
        return this.getStringAttribute('component_id');
    }
    set componentId(value) {
        this._componentId = value;
    }
    resetComponentId() {
        this._componentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get componentIdInput() {
        return this._componentId;
    }
}
exports.Ec2NetworkInsightsAnalysisAlternatePathHints = Ec2NetworkInsightsAnalysisAlternatePathHints;
function ec2NetworkInsightsAnalysisAlternatePathHintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        component_arn: cdktf.stringToTerraform(struct.componentArn),
        component_id: cdktf.stringToTerraform(struct.componentId),
    };
}
exports.ec2NetworkInsightsAnalysisAlternatePathHintsToTerraform = ec2NetworkInsightsAnalysisAlternatePathHintsToTerraform;
function ec2NetworkInsightsAnalysisExplanationsAclToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsAclToTerraform = ec2NetworkInsightsAnalysisExplanationsAclToTerraform;
function ec2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform = ec2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform;
function ec2NetworkInsightsAnalysisExplanationsAclRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
        egress: cdktf.booleanToTerraform(struct.egress),
        port_range: ec2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform(struct.portRange),
        protocol: cdktf.stringToTerraform(struct.protocol),
        rule_action: cdktf.stringToTerraform(struct.ruleAction),
        rule_number: cdktf.numberToTerraform(struct.ruleNumber),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsAclRuleToTerraform = ec2NetworkInsightsAnalysisExplanationsAclRuleToTerraform;
function ec2NetworkInsightsAnalysisExplanationsAttachedToToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsAttachedToToTerraform = ec2NetworkInsightsAnalysisExplanationsAttachedToToTerraform;
function ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_port: cdktf.numberToTerraform(struct.instancePort),
        load_balancer_port: cdktf.numberToTerraform(struct.loadBalancerPort),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform = ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform;
function ec2NetworkInsightsAnalysisExplanationsComponentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsComponentToTerraform = ec2NetworkInsightsAnalysisExplanationsComponentToTerraform;
function ec2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform = ec2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform;
function ec2NetworkInsightsAnalysisExplanationsDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsDestinationToTerraform = ec2NetworkInsightsAnalysisExplanationsDestinationToTerraform;
function ec2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform = ec2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform;
function ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform = ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform;
function ec2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform = ec2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform;
function ec2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform = ec2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform;
function ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform = ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform;
function ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        instance: ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform(struct.instance),
        port: cdktf.numberToTerraform(struct.port),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform = ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform;
function ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform = ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform;
function ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform = ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform;
function ec2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform = ec2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform;
function ec2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform = ec2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform;
function ec2NetworkInsightsAnalysisExplanationsPortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsPortRangesToTerraform = ec2NetworkInsightsAnalysisExplanationsPortRangesToTerraform;
function ec2NetworkInsightsAnalysisExplanationsPrefixListToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsPrefixListToTerraform = ec2NetworkInsightsAnalysisExplanationsPrefixListToTerraform;
function ec2NetworkInsightsAnalysisExplanationsRouteTableToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsRouteTableToTerraform = ec2NetworkInsightsAnalysisExplanationsRouteTableToTerraform;
function ec2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform(struct) {
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
exports.ec2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform = ec2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform;
function ec2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform = ec2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform;
function ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform = ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform;
function ec2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
        direction: cdktf.stringToTerraform(struct.direction),
        port_range: ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform(struct.portRange),
        prefix_list_id: cdktf.stringToTerraform(struct.prefixListId),
        protocol: cdktf.stringToTerraform(struct.protocol),
        security_group_id: cdktf.stringToTerraform(struct.securityGroupId),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform = ec2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform;
function ec2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform = ec2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform;
function ec2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform = ec2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform;
function ec2NetworkInsightsAnalysisExplanationsSubnetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsSubnetToTerraform = ec2NetworkInsightsAnalysisExplanationsSubnetToTerraform;
function ec2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform = ec2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform;
function ec2NetworkInsightsAnalysisExplanationsVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsVpcToTerraform = ec2NetworkInsightsAnalysisExplanationsVpcToTerraform;
function ec2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform = ec2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform;
function ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform = ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform;
function ec2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform = ec2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform;
function ec2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform = ec2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform;
class Ec2NetworkInsightsAnalysisExplanations extends cdktf.ComplexComputedList {
    get acl() {
        return this.interpolationForAttribute('acl');
    }
    set acl(value) {
        this._acl = value;
    }
    resetAcl() {
        this._acl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aclInput() {
        return this._acl;
    }
    get aclRule() {
        return this.interpolationForAttribute('acl_rule');
    }
    set aclRule(value) {
        this._aclRule = value;
    }
    resetAclRule() {
        this._aclRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aclRuleInput() {
        return this._aclRule;
    }
    get address() {
        return this.getStringAttribute('address');
    }
    set address(value) {
        this._address = value;
    }
    resetAddress() {
        this._address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get addressInput() {
        return this._address;
    }
    get addresses() {
        return this.getListAttribute('addresses');
    }
    set addresses(value) {
        this._addresses = value;
    }
    resetAddresses() {
        this._addresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get addressesInput() {
        return this._addresses;
    }
    get attachedTo() {
        return this.interpolationForAttribute('attached_to');
    }
    set attachedTo(value) {
        this._attachedTo = value;
    }
    resetAttachedTo() {
        this._attachedTo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get attachedToInput() {
        return this._attachedTo;
    }
    get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    set availabilityZones(value) {
        this._availabilityZones = value;
    }
    resetAvailabilityZones() {
        this._availabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get availabilityZonesInput() {
        return this._availabilityZones;
    }
    get cidrs() {
        return this.getListAttribute('cidrs');
    }
    set cidrs(value) {
        this._cidrs = value;
    }
    resetCidrs() {
        this._cidrs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cidrsInput() {
        return this._cidrs;
    }
    get classicLoadBalancerListener() {
        return this.interpolationForAttribute('classic_load_balancer_listener');
    }
    set classicLoadBalancerListener(value) {
        this._classicLoadBalancerListener = value;
    }
    resetClassicLoadBalancerListener() {
        this._classicLoadBalancerListener = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get classicLoadBalancerListenerInput() {
        return this._classicLoadBalancerListener;
    }
    get component() {
        return this.interpolationForAttribute('component');
    }
    set component(value) {
        this._component = value;
    }
    resetComponent() {
        this._component = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get componentInput() {
        return this._component;
    }
    get customerGateway() {
        return this.interpolationForAttribute('customer_gateway');
    }
    set customerGateway(value) {
        this._customerGateway = value;
    }
    resetCustomerGateway() {
        this._customerGateway = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customerGatewayInput() {
        return this._customerGateway;
    }
    get destination() {
        return this.interpolationForAttribute('destination');
    }
    set destination(value) {
        this._destination = value;
    }
    resetDestination() {
        this._destination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationInput() {
        return this._destination;
    }
    get destinationVpc() {
        return this.interpolationForAttribute('destination_vpc');
    }
    set destinationVpc(value) {
        this._destinationVpc = value;
    }
    resetDestinationVpc() {
        this._destinationVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationVpcInput() {
        return this._destinationVpc;
    }
    get direction() {
        return this.getStringAttribute('direction');
    }
    set direction(value) {
        this._direction = value;
    }
    resetDirection() {
        this._direction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get directionInput() {
        return this._direction;
    }
    get elasticLoadBalancerListener() {
        return this.interpolationForAttribute('elastic_load_balancer_listener');
    }
    set elasticLoadBalancerListener(value) {
        this._elasticLoadBalancerListener = value;
    }
    resetElasticLoadBalancerListener() {
        this._elasticLoadBalancerListener = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get elasticLoadBalancerListenerInput() {
        return this._elasticLoadBalancerListener;
    }
    get explanationCode() {
        return this.getStringAttribute('explanation_code');
    }
    set explanationCode(value) {
        this._explanationCode = value;
    }
    resetExplanationCode() {
        this._explanationCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get explanationCodeInput() {
        return this._explanationCode;
    }
    get ingressRouteTable() {
        return this.interpolationForAttribute('ingress_route_table');
    }
    set ingressRouteTable(value) {
        this._ingressRouteTable = value;
    }
    resetIngressRouteTable() {
        this._ingressRouteTable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ingressRouteTableInput() {
        return this._ingressRouteTable;
    }
    get internetGateway() {
        return this.interpolationForAttribute('internet_gateway');
    }
    set internetGateway(value) {
        this._internetGateway = value;
    }
    resetInternetGateway() {
        this._internetGateway = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get internetGatewayInput() {
        return this._internetGateway;
    }
    get loadBalancerArn() {
        return this.getStringAttribute('load_balancer_arn');
    }
    set loadBalancerArn(value) {
        this._loadBalancerArn = value;
    }
    resetLoadBalancerArn() {
        this._loadBalancerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loadBalancerArnInput() {
        return this._loadBalancerArn;
    }
    get loadBalancerListenerPort() {
        return this.getNumberAttribute('load_balancer_listener_port');
    }
    set loadBalancerListenerPort(value) {
        this._loadBalancerListenerPort = value;
    }
    resetLoadBalancerListenerPort() {
        this._loadBalancerListenerPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loadBalancerListenerPortInput() {
        return this._loadBalancerListenerPort;
    }
    get loadBalancerTarget() {
        return this.interpolationForAttribute('load_balancer_target');
    }
    set loadBalancerTarget(value) {
        this._loadBalancerTarget = value;
    }
    resetLoadBalancerTarget() {
        this._loadBalancerTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loadBalancerTargetInput() {
        return this._loadBalancerTarget;
    }
    get loadBalancerTargetGroup() {
        return this.interpolationForAttribute('load_balancer_target_group');
    }
    set loadBalancerTargetGroup(value) {
        this._loadBalancerTargetGroup = value;
    }
    resetLoadBalancerTargetGroup() {
        this._loadBalancerTargetGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loadBalancerTargetGroupInput() {
        return this._loadBalancerTargetGroup;
    }
    get loadBalancerTargetGroups() {
        return this.interpolationForAttribute('load_balancer_target_groups');
    }
    set loadBalancerTargetGroups(value) {
        this._loadBalancerTargetGroups = value;
    }
    resetLoadBalancerTargetGroups() {
        this._loadBalancerTargetGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loadBalancerTargetGroupsInput() {
        return this._loadBalancerTargetGroups;
    }
    get loadBalancerTargetPort() {
        return this.getNumberAttribute('load_balancer_target_port');
    }
    set loadBalancerTargetPort(value) {
        this._loadBalancerTargetPort = value;
    }
    resetLoadBalancerTargetPort() {
        this._loadBalancerTargetPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loadBalancerTargetPortInput() {
        return this._loadBalancerTargetPort;
    }
    get missingComponent() {
        return this.getStringAttribute('missing_component');
    }
    set missingComponent(value) {
        this._missingComponent = value;
    }
    resetMissingComponent() {
        this._missingComponent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get missingComponentInput() {
        return this._missingComponent;
    }
    get natGateway() {
        return this.interpolationForAttribute('nat_gateway');
    }
    set natGateway(value) {
        this._natGateway = value;
    }
    resetNatGateway() {
        this._natGateway = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get natGatewayInput() {
        return this._natGateway;
    }
    get networkInterface() {
        return this.interpolationForAttribute('network_interface');
    }
    set networkInterface(value) {
        this._networkInterface = value;
    }
    resetNetworkInterface() {
        this._networkInterface = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkInterfaceInput() {
        return this._networkInterface;
    }
    get packetField() {
        return this.getStringAttribute('packet_field');
    }
    set packetField(value) {
        this._packetField = value;
    }
    resetPacketField() {
        this._packetField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get packetFieldInput() {
        return this._packetField;
    }
    get port() {
        return this.getNumberAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    get portRanges() {
        return this.interpolationForAttribute('port_ranges');
    }
    set portRanges(value) {
        this._portRanges = value;
    }
    resetPortRanges() {
        this._portRanges = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portRangesInput() {
        return this._portRanges;
    }
    get prefixList() {
        return this.interpolationForAttribute('prefix_list');
    }
    set prefixList(value) {
        this._prefixList = value;
    }
    resetPrefixList() {
        this._prefixList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prefixListInput() {
        return this._prefixList;
    }
    get protocols() {
        return this.getListAttribute('protocols');
    }
    set protocols(value) {
        this._protocols = value;
    }
    resetProtocols() {
        this._protocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get protocolsInput() {
        return this._protocols;
    }
    get routeTable() {
        return this.interpolationForAttribute('route_table');
    }
    set routeTable(value) {
        this._routeTable = value;
    }
    resetRouteTable() {
        this._routeTable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get routeTableInput() {
        return this._routeTable;
    }
    get routeTableRoute() {
        return this.interpolationForAttribute('route_table_route');
    }
    set routeTableRoute(value) {
        this._routeTableRoute = value;
    }
    resetRouteTableRoute() {
        this._routeTableRoute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get routeTableRouteInput() {
        return this._routeTableRoute;
    }
    get securityGroup() {
        return this.interpolationForAttribute('security_group');
    }
    set securityGroup(value) {
        this._securityGroup = value;
    }
    resetSecurityGroup() {
        this._securityGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupInput() {
        return this._securityGroup;
    }
    get securityGroupRule() {
        return this.interpolationForAttribute('security_group_rule');
    }
    set securityGroupRule(value) {
        this._securityGroupRule = value;
    }
    resetSecurityGroupRule() {
        this._securityGroupRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupRuleInput() {
        return this._securityGroupRule;
    }
    get securityGroups() {
        return this.interpolationForAttribute('security_groups');
    }
    set securityGroups(value) {
        this._securityGroups = value;
    }
    resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupsInput() {
        return this._securityGroups;
    }
    get sourceVpc() {
        return this.interpolationForAttribute('source_vpc');
    }
    set sourceVpc(value) {
        this._sourceVpc = value;
    }
    resetSourceVpc() {
        this._sourceVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceVpcInput() {
        return this._sourceVpc;
    }
    get state() {
        return this.getStringAttribute('state');
    }
    set state(value) {
        this._state = value;
    }
    resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stateInput() {
        return this._state;
    }
    get subnet() {
        return this.interpolationForAttribute('subnet');
    }
    set subnet(value) {
        this._subnet = value;
    }
    resetSubnet() {
        this._subnet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subnetInput() {
        return this._subnet;
    }
    get subnetRouteTable() {
        return this.interpolationForAttribute('subnet_route_table');
    }
    set subnetRouteTable(value) {
        this._subnetRouteTable = value;
    }
    resetSubnetRouteTable() {
        this._subnetRouteTable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subnetRouteTableInput() {
        return this._subnetRouteTable;
    }
    get vpc() {
        return this.interpolationForAttribute('vpc');
    }
    set vpc(value) {
        this._vpc = value;
    }
    resetVpc() {
        this._vpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcInput() {
        return this._vpc;
    }
    get vpcEndpoint() {
        return this.interpolationForAttribute('vpc_endpoint');
    }
    set vpcEndpoint(value) {
        this._vpcEndpoint = value;
    }
    resetVpcEndpoint() {
        this._vpcEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcEndpointInput() {
        return this._vpcEndpoint;
    }
    get vpcPeeringConnection() {
        return this.interpolationForAttribute('vpc_peering_connection');
    }
    set vpcPeeringConnection(value) {
        this._vpcPeeringConnection = value;
    }
    resetVpcPeeringConnection() {
        this._vpcPeeringConnection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcPeeringConnectionInput() {
        return this._vpcPeeringConnection;
    }
    get vpnConnection() {
        return this.interpolationForAttribute('vpn_connection');
    }
    set vpnConnection(value) {
        this._vpnConnection = value;
    }
    resetVpnConnection() {
        this._vpnConnection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpnConnectionInput() {
        return this._vpnConnection;
    }
    get vpnGateway() {
        return this.interpolationForAttribute('vpn_gateway');
    }
    set vpnGateway(value) {
        this._vpnGateway = value;
    }
    resetVpnGateway() {
        this._vpnGateway = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpnGatewayInput() {
        return this._vpnGateway;
    }
}
exports.Ec2NetworkInsightsAnalysisExplanations = Ec2NetworkInsightsAnalysisExplanations;
function ec2NetworkInsightsAnalysisExplanationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acl: ec2NetworkInsightsAnalysisExplanationsAclToTerraform(struct.acl),
        acl_rule: ec2NetworkInsightsAnalysisExplanationsAclRuleToTerraform(struct.aclRule),
        address: cdktf.stringToTerraform(struct.address),
        addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.addresses),
        attached_to: ec2NetworkInsightsAnalysisExplanationsAttachedToToTerraform(struct.attachedTo),
        availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(struct.availabilityZones),
        cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct.cidrs),
        classic_load_balancer_listener: ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform(struct.classicLoadBalancerListener),
        component: ec2NetworkInsightsAnalysisExplanationsComponentToTerraform(struct.component),
        customer_gateway: ec2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform(struct.customerGateway),
        destination: ec2NetworkInsightsAnalysisExplanationsDestinationToTerraform(struct.destination),
        destination_vpc: ec2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform(struct.destinationVpc),
        direction: cdktf.stringToTerraform(struct.direction),
        elastic_load_balancer_listener: ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform(struct.elasticLoadBalancerListener),
        explanation_code: cdktf.stringToTerraform(struct.explanationCode),
        ingress_route_table: ec2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform(struct.ingressRouteTable),
        internet_gateway: ec2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform(struct.internetGateway),
        load_balancer_arn: cdktf.stringToTerraform(struct.loadBalancerArn),
        load_balancer_listener_port: cdktf.numberToTerraform(struct.loadBalancerListenerPort),
        load_balancer_target: ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform(struct.loadBalancerTarget),
        load_balancer_target_group: ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform(struct.loadBalancerTargetGroup),
        load_balancer_target_groups: cdktf.listMapper(ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform)(struct.loadBalancerTargetGroups),
        load_balancer_target_port: cdktf.numberToTerraform(struct.loadBalancerTargetPort),
        missing_component: cdktf.stringToTerraform(struct.missingComponent),
        nat_gateway: ec2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform(struct.natGateway),
        network_interface: ec2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform(struct.networkInterface),
        packet_field: cdktf.stringToTerraform(struct.packetField),
        port: cdktf.numberToTerraform(struct.port),
        port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisExplanationsPortRangesToTerraform)(struct.portRanges),
        prefix_list: ec2NetworkInsightsAnalysisExplanationsPrefixListToTerraform(struct.prefixList),
        protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct.protocols),
        route_table: ec2NetworkInsightsAnalysisExplanationsRouteTableToTerraform(struct.routeTable),
        route_table_route: ec2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform(struct.routeTableRoute),
        security_group: ec2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform(struct.securityGroup),
        security_group_rule: ec2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform(struct.securityGroupRule),
        security_groups: cdktf.listMapper(ec2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform)(struct.securityGroups),
        source_vpc: ec2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform(struct.sourceVpc),
        state: cdktf.stringToTerraform(struct.state),
        subnet: ec2NetworkInsightsAnalysisExplanationsSubnetToTerraform(struct.subnet),
        subnet_route_table: ec2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform(struct.subnetRouteTable),
        vpc: ec2NetworkInsightsAnalysisExplanationsVpcToTerraform(struct.vpc),
        vpc_endpoint: ec2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform(struct.vpcEndpoint),
        vpc_peering_connection: ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform(struct.vpcPeeringConnection),
        vpn_connection: ec2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform(struct.vpnConnection),
        vpn_gateway: ec2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform(struct.vpnGateway),
    };
}
exports.ec2NetworkInsightsAnalysisExplanationsToTerraform = ec2NetworkInsightsAnalysisExplanationsToTerraform;
function ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform;
function ec2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
        egress: cdktf.booleanToTerraform(struct.egress),
        port_range: ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform(struct.portRange),
        protocol: cdktf.stringToTerraform(struct.protocol),
        rule_action: cdktf.stringToTerraform(struct.ruleAction),
        rule_number: cdktf.numberToTerraform(struct.ruleNumber),
    };
}
exports.ec2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform;
function ec2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform;
function ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform;
function ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform;
function ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform;
function ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.destinationAddresses),
        destination_port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform)(struct.destinationPortRanges),
        protocol: cdktf.stringToTerraform(struct.protocol),
        source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.sourceAddresses),
        source_port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform)(struct.sourcePortRanges),
    };
}
exports.ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform;
function ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform;
function ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform;
function ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.destinationAddresses),
        destination_port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform)(struct.destinationPortRanges),
        protocol: cdktf.stringToTerraform(struct.protocol),
        source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.sourceAddresses),
        source_port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform)(struct.sourcePortRanges),
    };
}
exports.ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform;
function ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform(struct) {
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
exports.ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform;
function ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform;
function ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
        direction: cdktf.stringToTerraform(struct.direction),
        port_range: ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform(struct.portRange),
        prefix_list_id: cdktf.stringToTerraform(struct.prefixListId),
        protocol: cdktf.stringToTerraform(struct.protocol),
        security_group_id: cdktf.stringToTerraform(struct.securityGroupId),
    };
}
exports.ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform;
function ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform;
function ec2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform;
function ec2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform;
class Ec2NetworkInsightsAnalysisForwardPathComponents extends cdktf.ComplexComputedList {
    get aclRule() {
        return this.interpolationForAttribute('acl_rule');
    }
    set aclRule(value) {
        this._aclRule = value;
    }
    resetAclRule() {
        this._aclRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aclRuleInput() {
        return this._aclRule;
    }
    get component() {
        return this.interpolationForAttribute('component');
    }
    set component(value) {
        this._component = value;
    }
    resetComponent() {
        this._component = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get componentInput() {
        return this._component;
    }
    get destinationVpc() {
        return this.interpolationForAttribute('destination_vpc');
    }
    set destinationVpc(value) {
        this._destinationVpc = value;
    }
    resetDestinationVpc() {
        this._destinationVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationVpcInput() {
        return this._destinationVpc;
    }
    get inboundHeader() {
        return this.interpolationForAttribute('inbound_header');
    }
    set inboundHeader(value) {
        this._inboundHeader = value;
    }
    resetInboundHeader() {
        this._inboundHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inboundHeaderInput() {
        return this._inboundHeader;
    }
    get outboundHeader() {
        return this.interpolationForAttribute('outbound_header');
    }
    set outboundHeader(value) {
        this._outboundHeader = value;
    }
    resetOutboundHeader() {
        this._outboundHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get outboundHeaderInput() {
        return this._outboundHeader;
    }
    get routeTableRoute() {
        return this.interpolationForAttribute('route_table_route');
    }
    set routeTableRoute(value) {
        this._routeTableRoute = value;
    }
    resetRouteTableRoute() {
        this._routeTableRoute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get routeTableRouteInput() {
        return this._routeTableRoute;
    }
    get securityGroupRule() {
        return this.interpolationForAttribute('security_group_rule');
    }
    set securityGroupRule(value) {
        this._securityGroupRule = value;
    }
    resetSecurityGroupRule() {
        this._securityGroupRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupRuleInput() {
        return this._securityGroupRule;
    }
    get sequenceNumber() {
        return this.getNumberAttribute('sequence_number');
    }
    set sequenceNumber(value) {
        this._sequenceNumber = value;
    }
    resetSequenceNumber() {
        this._sequenceNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sequenceNumberInput() {
        return this._sequenceNumber;
    }
    get sourceVpc() {
        return this.interpolationForAttribute('source_vpc');
    }
    set sourceVpc(value) {
        this._sourceVpc = value;
    }
    resetSourceVpc() {
        this._sourceVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceVpcInput() {
        return this._sourceVpc;
    }
    get subnet() {
        return this.interpolationForAttribute('subnet');
    }
    set subnet(value) {
        this._subnet = value;
    }
    resetSubnet() {
        this._subnet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subnetInput() {
        return this._subnet;
    }
    get vpc() {
        return this.interpolationForAttribute('vpc');
    }
    set vpc(value) {
        this._vpc = value;
    }
    resetVpc() {
        this._vpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcInput() {
        return this._vpc;
    }
}
exports.Ec2NetworkInsightsAnalysisForwardPathComponents = Ec2NetworkInsightsAnalysisForwardPathComponents;
function ec2NetworkInsightsAnalysisForwardPathComponentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acl_rule: ec2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform(struct.aclRule),
        component: ec2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform(struct.component),
        destination_vpc: ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform(struct.destinationVpc),
        inbound_header: ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform(struct.inboundHeader),
        outbound_header: ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform(struct.outboundHeader),
        route_table_route: ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform(struct.routeTableRoute),
        security_group_rule: ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform(struct.securityGroupRule),
        sequence_number: cdktf.numberToTerraform(struct.sequenceNumber),
        source_vpc: ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform(struct.sourceVpc),
        subnet: ec2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform(struct.subnet),
        vpc: ec2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform(struct.vpc),
    };
}
exports.ec2NetworkInsightsAnalysisForwardPathComponentsToTerraform = ec2NetworkInsightsAnalysisForwardPathComponentsToTerraform;
function ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform;
function ec2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
        egress: cdktf.booleanToTerraform(struct.egress),
        port_range: ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform(struct.portRange),
        protocol: cdktf.stringToTerraform(struct.protocol),
        rule_action: cdktf.stringToTerraform(struct.ruleAction),
        rule_number: cdktf.numberToTerraform(struct.ruleNumber),
    };
}
exports.ec2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform;
function ec2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform;
function ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform;
function ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform;
function ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform;
function ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.destinationAddresses),
        destination_port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform)(struct.destinationPortRanges),
        protocol: cdktf.stringToTerraform(struct.protocol),
        source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.sourceAddresses),
        source_port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform)(struct.sourcePortRanges),
    };
}
exports.ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform;
function ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform;
function ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform;
function ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.destinationAddresses),
        destination_port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform)(struct.destinationPortRanges),
        protocol: cdktf.stringToTerraform(struct.protocol),
        source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.sourceAddresses),
        source_port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform)(struct.sourcePortRanges),
    };
}
exports.ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform;
function ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform(struct) {
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
exports.ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform;
function ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
exports.ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform;
function ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
        direction: cdktf.stringToTerraform(struct.direction),
        port_range: ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform(struct.portRange),
        prefix_list_id: cdktf.stringToTerraform(struct.prefixListId),
        protocol: cdktf.stringToTerraform(struct.protocol),
        security_group_id: cdktf.stringToTerraform(struct.securityGroupId),
    };
}
exports.ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform;
function ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform;
function ec2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform;
function ec2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        id: cdktf.stringToTerraform(struct.id),
    };
}
exports.ec2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform;
class Ec2NetworkInsightsAnalysisReturnPathComponents extends cdktf.ComplexComputedList {
    get aclRule() {
        return this.interpolationForAttribute('acl_rule');
    }
    set aclRule(value) {
        this._aclRule = value;
    }
    resetAclRule() {
        this._aclRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aclRuleInput() {
        return this._aclRule;
    }
    get component() {
        return this.interpolationForAttribute('component');
    }
    set component(value) {
        this._component = value;
    }
    resetComponent() {
        this._component = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get componentInput() {
        return this._component;
    }
    get destinationVpc() {
        return this.interpolationForAttribute('destination_vpc');
    }
    set destinationVpc(value) {
        this._destinationVpc = value;
    }
    resetDestinationVpc() {
        this._destinationVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationVpcInput() {
        return this._destinationVpc;
    }
    get inboundHeader() {
        return this.interpolationForAttribute('inbound_header');
    }
    set inboundHeader(value) {
        this._inboundHeader = value;
    }
    resetInboundHeader() {
        this._inboundHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inboundHeaderInput() {
        return this._inboundHeader;
    }
    get outboundHeader() {
        return this.interpolationForAttribute('outbound_header');
    }
    set outboundHeader(value) {
        this._outboundHeader = value;
    }
    resetOutboundHeader() {
        this._outboundHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get outboundHeaderInput() {
        return this._outboundHeader;
    }
    get routeTableRoute() {
        return this.interpolationForAttribute('route_table_route');
    }
    set routeTableRoute(value) {
        this._routeTableRoute = value;
    }
    resetRouteTableRoute() {
        this._routeTableRoute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get routeTableRouteInput() {
        return this._routeTableRoute;
    }
    get securityGroupRule() {
        return this.interpolationForAttribute('security_group_rule');
    }
    set securityGroupRule(value) {
        this._securityGroupRule = value;
    }
    resetSecurityGroupRule() {
        this._securityGroupRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupRuleInput() {
        return this._securityGroupRule;
    }
    get sequenceNumber() {
        return this.getNumberAttribute('sequence_number');
    }
    set sequenceNumber(value) {
        this._sequenceNumber = value;
    }
    resetSequenceNumber() {
        this._sequenceNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sequenceNumberInput() {
        return this._sequenceNumber;
    }
    get sourceVpc() {
        return this.interpolationForAttribute('source_vpc');
    }
    set sourceVpc(value) {
        this._sourceVpc = value;
    }
    resetSourceVpc() {
        this._sourceVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceVpcInput() {
        return this._sourceVpc;
    }
    get subnet() {
        return this.interpolationForAttribute('subnet');
    }
    set subnet(value) {
        this._subnet = value;
    }
    resetSubnet() {
        this._subnet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subnetInput() {
        return this._subnet;
    }
    get vpc() {
        return this.interpolationForAttribute('vpc');
    }
    set vpc(value) {
        this._vpc = value;
    }
    resetVpc() {
        this._vpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcInput() {
        return this._vpc;
    }
}
exports.Ec2NetworkInsightsAnalysisReturnPathComponents = Ec2NetworkInsightsAnalysisReturnPathComponents;
function ec2NetworkInsightsAnalysisReturnPathComponentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acl_rule: ec2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform(struct.aclRule),
        component: ec2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform(struct.component),
        destination_vpc: ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform(struct.destinationVpc),
        inbound_header: ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform(struct.inboundHeader),
        outbound_header: ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform(struct.outboundHeader),
        route_table_route: ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform(struct.routeTableRoute),
        security_group_rule: ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform(struct.securityGroupRule),
        sequence_number: cdktf.numberToTerraform(struct.sequenceNumber),
        source_vpc: ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform(struct.sourceVpc),
        subnet: ec2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform(struct.subnet),
        vpc: ec2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform(struct.vpc),
    };
}
exports.ec2NetworkInsightsAnalysisReturnPathComponentsToTerraform = ec2NetworkInsightsAnalysisReturnPathComponentsToTerraform;
function ec2NetworkInsightsAnalysisTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.ec2NetworkInsightsAnalysisTagsToTerraform = ec2NetworkInsightsAnalysisTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html awscc_ec2_network_insights_analysis}
*/
class Ec2NetworkInsightsAnalysis extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html awscc_ec2_network_insights_analysis} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2NetworkInsightsAnalysisConfig
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
        this._filterInArns = config.filterInArns;
        this._networkInsightsPathId = config.networkInsightsPathId;
        this._tags = config.tags;
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
    get filterInArns() {
        return this.getListAttribute('filter_in_arns');
    }
    set filterInArns(value) {
        this._filterInArns = value;
    }
    resetFilterInArns() {
        this._filterInArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInArnsInput() {
        return this._filterInArns;
    }
    // forward_path_components - computed: true, optional: false, required: false
    get forwardPathComponents() {
        return this.interpolationForAttribute('forward_path_components');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // network_insights_analysis_arn - computed: true, optional: false, required: false
    get networkInsightsAnalysisArn() {
        return this.getStringAttribute('network_insights_analysis_arn');
    }
    // network_insights_analysis_id - computed: true, optional: false, required: false
    get networkInsightsAnalysisId() {
        return this.getStringAttribute('network_insights_analysis_id');
    }
    get networkInsightsPathId() {
        return this.getStringAttribute('network_insights_path_id');
    }
    set networkInsightsPathId(value) {
        this._networkInsightsPathId = value;
    }
    // Temporarily expose input value. Use with caution.
    get networkInsightsPathIdInput() {
        return this._networkInsightsPathId;
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
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            filter_in_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._filterInArns),
            network_insights_path_id: cdktf.stringToTerraform(this._networkInsightsPathId),
            tags: cdktf.listMapper(ec2NetworkInsightsAnalysisTagsToTerraform)(this._tags),
        };
    }
}
exports.Ec2NetworkInsightsAnalysis = Ec2NetworkInsightsAnalysis;
// =================
// STATIC PROPERTIES
// =================
Ec2NetworkInsightsAnalysis.tfResourceType = "awscc_ec2_network_insights_analysis";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWMyLW5ldHdvcmstaW5zaWdodHMtYW5hbHlzaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlYzItbmV0d29yay1pbnNpZ2h0cy1hbmFseXNpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUZBQXFGO0FBQ3JGLDJDQUEyQzs7OztBQUczQywrQkFBK0I7QUFrQi9CLE1BQWEsNENBQTZDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUl6RixJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUMzQixDQUFDO0lBSUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7SUFDMUIsQ0FBQztDQUNGO0FBakNELG9HQWlDQztBQUVELFNBQWdCLHVEQUF1RCxDQUFDLE1BQXFEO0lBQzNILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FB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QixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUlELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUF1QztRQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNuQixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxjQUFjLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzdFLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDOUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMseUNBQXlDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzlFLENBQUM7SUFDSixDQUFDOztBQXBKSCxnRUFxSkM7QUFuSkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyx5Q0FBYyxHQUFXLHFDQUFxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNmaWx0ZXJfaW5fYXJucyBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNmaWx0ZXJfaW5fYXJuc31cbiAgKi9cbiAgcmVhZG9ubHkgZmlsdGVySW5Bcm5zPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNuZXR3b3JrX2luc2lnaHRzX3BhdGhfaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjbmV0d29ya19pbnNpZ2h0c19wYXRoX2lkfVxuICAqL1xuICByZWFkb25seSBuZXR3b3JrSW5zaWdodHNQYXRoSWQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3RhZ3MgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzVGFnc1tdO1xufVxuZXhwb3J0IGNsYXNzIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzQWx0ZXJuYXRlUGF0aEhpbnRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29tcG9uZW50X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbXBvbmVudEFybj86IHN0cmluZztcbiAgcHVibGljIGdldCBjb21wb25lbnRBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wb25lbnRfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21wb25lbnRBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXBvbmVudEFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbXBvbmVudEFybigpIHtcbiAgICB0aGlzLl9jb21wb25lbnRBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXBvbmVudEFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRBcm5cbiAgfVxuXG4gIC8vIGNvbXBvbmVudF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbXBvbmVudElkPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNvbXBvbmVudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcG9uZW50X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21wb25lbnRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29tcG9uZW50SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21wb25lbnRJZCgpIHtcbiAgICB0aGlzLl9jb21wb25lbnRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tcG9uZW50SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50SWRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNBbHRlcm5hdGVQYXRoSGludHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0FsdGVybmF0ZVBhdGhIaW50cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb21wb25lbnRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBvbmVudEFybiksXG4gICAgY29tcG9uZW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBvbmVudElkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQWNsIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2FybiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2lkfVxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQWNsVG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNBY2wpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNBY2xSdWxlUG9ydFJhbmdlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2Zyb20gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjZnJvbX1cbiAgKi9cbiAgcmVhZG9ubHkgZnJvbT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3RvIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3RvfVxuICAqL1xuICByZWFkb25seSB0bz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQWNsUnVsZVBvcnRSYW5nZVRvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQWNsUnVsZVBvcnRSYW5nZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmcm9tOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyb20pLFxuICAgIHRvOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQWNsUnVsZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNjaWRyIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2NpZHJ9XG4gICovXG4gIHJlYWRvbmx5IGNpZHI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNlZ3Jlc3MgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjZWdyZXNzfVxuICAqL1xuICByZWFkb25seSBlZ3Jlc3M/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNwb3J0X3JhbmdlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3BvcnRfcmFuZ2V9XG4gICovXG4gIHJlYWRvbmx5IHBvcnRSYW5nZT86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQWNsUnVsZVBvcnRSYW5nZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3Byb3RvY29sIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3Byb3RvY29sfVxuICAqL1xuICByZWFkb25seSBwcm90b2NvbD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3J1bGVfYWN0aW9uIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3J1bGVfYWN0aW9ufVxuICAqL1xuICByZWFkb25seSBydWxlQWN0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjcnVsZV9udW1iZXIgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjcnVsZV9udW1iZXJ9XG4gICovXG4gIHJlYWRvbmx5IHJ1bGVOdW1iZXI/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0FjbFJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0FjbFJ1bGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2lkcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jaWRyKSxcbiAgICBlZ3Jlc3M6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVncmVzcyksXG4gICAgcG9ydF9yYW5nZTogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNBY2xSdWxlUG9ydFJhbmdlVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0UmFuZ2UpLFxuICAgIHByb3RvY29sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb3RvY29sKSxcbiAgICBydWxlX2FjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ydWxlQWN0aW9uKSxcbiAgICBydWxlX251bWJlcjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5ydWxlTnVtYmVyKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQXR0YWNoZWRUbyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNhcm4gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjYXJufVxuICAqL1xuICByZWFkb25seSBhcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNpZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0F0dGFjaGVkVG9Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0F0dGFjaGVkVG8pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNDbGFzc2ljTG9hZEJhbGFuY2VyTGlzdGVuZXIge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjaW5zdGFuY2VfcG9ydCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNpbnN0YW5jZV9wb3J0fVxuICAqL1xuICByZWFkb25seSBpbnN0YW5jZVBvcnQ/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNsb2FkX2JhbGFuY2VyX3BvcnQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjbG9hZF9iYWxhbmNlcl9wb3J0fVxuICAqL1xuICByZWFkb25seSBsb2FkQmFsYW5jZXJQb3J0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNDbGFzc2ljTG9hZEJhbGFuY2VyTGlzdGVuZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0NsYXNzaWNMb2FkQmFsYW5jZXJMaXN0ZW5lcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZV9wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlUG9ydCksXG4gICAgbG9hZF9iYWxhbmNlcl9wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvYWRCYWxhbmNlclBvcnQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNDb21wb25lbnQge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjYXJuIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNDb21wb25lbnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0NvbXBvbmVudCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0N1c3RvbWVyR2F0ZXdheSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNhcm4gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjYXJufVxuICAqL1xuICByZWFkb25seSBhcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNpZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0N1c3RvbWVyR2F0ZXdheVRvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQ3VzdG9tZXJHYXRld2F5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zRGVzdGluYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjYXJuIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNEZXN0aW5hdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zRGVzdGluYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNEZXN0aW5hdGlvblZwYyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNhcm4gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjYXJufVxuICAqL1xuICByZWFkb25seSBhcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNpZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0Rlc3RpbmF0aW9uVnBjVG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNEZXN0aW5hdGlvblZwYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0VsYXN0aWNMb2FkQmFsYW5jZXJMaXN0ZW5lciB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNhcm4gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjYXJufVxuICAqL1xuICByZWFkb25seSBhcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNpZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0VsYXN0aWNMb2FkQmFsYW5jZXJMaXN0ZW5lclRvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zRWxhc3RpY0xvYWRCYWxhbmNlckxpc3RlbmVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zSW5ncmVzc1JvdXRlVGFibGUge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjYXJuIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNJbmdyZXNzUm91dGVUYWJsZVRvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zSW5ncmVzc1JvdXRlVGFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNJbnRlcm5ldEdhdGV3YXkge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjYXJuIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNJbnRlcm5ldEdhdGV3YXlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0ludGVybmV0R2F0ZXdheSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0xvYWRCYWxhbmNlclRhcmdldEluc3RhbmNlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2FybiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2lkfVxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0SW5zdGFuY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0xvYWRCYWxhbmNlclRhcmdldEluc3RhbmNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2FkZHJlc3MgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjYWRkcmVzc31cbiAgKi9cbiAgcmVhZG9ubHkgYWRkcmVzcz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2F2YWlsYWJpbGl0eV96b25lIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2F2YWlsYWJpbGl0eV96b25lfVxuICAqL1xuICByZWFkb25seSBhdmFpbGFiaWxpdHlab25lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjaW5zdGFuY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjaW5zdGFuY2V9XG4gICovXG4gIHJlYWRvbmx5IGluc3RhbmNlPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNMb2FkQmFsYW5jZXJUYXJnZXRJbnN0YW5jZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3BvcnQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjcG9ydH1cbiAgKi9cbiAgcmVhZG9ubHkgcG9ydD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0VG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNMb2FkQmFsYW5jZXJUYXJnZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWRkcmVzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hZGRyZXNzKSxcbiAgICBhdmFpbGFiaWxpdHlfem9uZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdmFpbGFiaWxpdHlab25lKSxcbiAgICBpbnN0YW5jZTogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNMb2FkQmFsYW5jZXJUYXJnZXRJbnN0YW5jZVRvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2UpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0xvYWRCYWxhbmNlclRhcmdldEdyb3VwIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2FybiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2lkfVxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0R3JvdXBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0xvYWRCYWxhbmNlclRhcmdldEdyb3VwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0R3JvdXBzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2FybiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2lkfVxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0R3JvdXBzVG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNMb2FkQmFsYW5jZXJUYXJnZXRHcm91cHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNOYXRHYXRld2F5IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2FybiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2lkfVxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTmF0R2F0ZXdheVRvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTmF0R2F0ZXdheSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc05ldHdvcmtJbnRlcmZhY2Uge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjYXJuIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNOZXR3b3JrSW50ZXJmYWNlVG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNOZXR3b3JrSW50ZXJmYWNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zUG9ydFJhbmdlcyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNmcm9tIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Zyb219XG4gICovXG4gIHJlYWRvbmx5IGZyb20/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCN0byBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyN0b31cbiAgKi9cbiAgcmVhZG9ubHkgdG8/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1BvcnRSYW5nZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1BvcnRSYW5nZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZnJvbTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5mcm9tKSxcbiAgICB0bzogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50byksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ByZWZpeExpc3Qge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjYXJuIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNQcmVmaXhMaXN0VG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNQcmVmaXhMaXN0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zUm91dGVUYWJsZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNhcm4gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjYXJufVxuICAqL1xuICByZWFkb25seSBhcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNpZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1JvdXRlVGFibGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1JvdXRlVGFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNSb3V0ZVRhYmxlUm91dGUge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjZGVzdGluYXRpb25fY2lkciBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNkZXN0aW5hdGlvbl9jaWRyfVxuICAqL1xuICByZWFkb25seSBkZXN0aW5hdGlvbkNpZHI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNkZXN0aW5hdGlvbl9wcmVmaXhfbGlzdF9pZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNkZXN0aW5hdGlvbl9wcmVmaXhfbGlzdF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgZGVzdGluYXRpb25QcmVmaXhMaXN0SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNlZ3Jlc3Nfb25seV9pbnRlcm5ldF9nYXRld2F5X2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2VncmVzc19vbmx5X2ludGVybmV0X2dhdGV3YXlfaWR9XG4gICovXG4gIHJlYWRvbmx5IGVncmVzc09ubHlJbnRlcm5ldEdhdGV3YXlJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2dhdGV3YXlfaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjZ2F0ZXdheV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgZ2F0ZXdheUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjaW5zdGFuY2VfaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjaW5zdGFuY2VfaWR9XG4gICovXG4gIHJlYWRvbmx5IGluc3RhbmNlSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNuYXRfZ2F0ZXdheV9pZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNuYXRfZ2F0ZXdheV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgbmF0R2F0ZXdheUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjbmV0d29ya19pbnRlcmZhY2VfaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjbmV0d29ya19pbnRlcmZhY2VfaWR9XG4gICovXG4gIHJlYWRvbmx5IG5ldHdvcmtJbnRlcmZhY2VJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI29yaWdpbiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNvcmlnaW59XG4gICovXG4gIHJlYWRvbmx5IG9yaWdpbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3RyYW5zaXRfZ2F0ZXdheV9pZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyN0cmFuc2l0X2dhdGV3YXlfaWR9XG4gICovXG4gIHJlYWRvbmx5IHRyYW5zaXRHYXRld2F5SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCN2cGNfcGVlcmluZ19jb25uZWN0aW9uX2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWR9XG4gICovXG4gIHJlYWRvbmx5IHZwY1BlZXJpbmdDb25uZWN0aW9uSWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1JvdXRlVGFibGVSb3V0ZVRvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zUm91dGVUYWJsZVJvdXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRlc3RpbmF0aW9uX2NpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb25DaWRyKSxcbiAgICBkZXN0aW5hdGlvbl9wcmVmaXhfbGlzdF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXN0aW5hdGlvblByZWZpeExpc3RJZCksXG4gICAgZWdyZXNzX29ubHlfaW50ZXJuZXRfZ2F0ZXdheV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lZ3Jlc3NPbmx5SW50ZXJuZXRHYXRld2F5SWQpLFxuICAgIGdhdGV3YXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ2F0ZXdheUlkKSxcbiAgICBpbnN0YW5jZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZUlkKSxcbiAgICBuYXRfZ2F0ZXdheV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYXRHYXRld2F5SWQpLFxuICAgIG5ldHdvcmtfaW50ZXJmYWNlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5ldHdvcmtJbnRlcmZhY2VJZCksXG4gICAgb3JpZ2luOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yaWdpbiksXG4gICAgdHJhbnNpdF9nYXRld2F5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRyYW5zaXRHYXRld2F5SWQpLFxuICAgIHZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudnBjUGVlcmluZ0Nvbm5lY3Rpb25JZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1NlY3VyaXR5R3JvdXAge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjYXJuIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTZWN1cml0eUdyb3VwVG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTZWN1cml0eUdyb3VwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU2VjdXJpdHlHcm91cFJ1bGVQb3J0UmFuZ2Uge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjZnJvbSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNmcm9tfVxuICAqL1xuICByZWFkb25seSBmcm9tPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjdG8gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjdG99XG4gICovXG4gIHJlYWRvbmx5IHRvPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTZWN1cml0eUdyb3VwUnVsZVBvcnRSYW5nZVRvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU2VjdXJpdHlHcm91cFJ1bGVQb3J0UmFuZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZnJvbTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5mcm9tKSxcbiAgICB0bzogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50byksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1NlY3VyaXR5R3JvdXBSdWxlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2NpZHIgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjY2lkcn1cbiAgKi9cbiAgcmVhZG9ubHkgY2lkcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2RpcmVjdGlvbiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNkaXJlY3Rpb259XG4gICovXG4gIHJlYWRvbmx5IGRpcmVjdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3BvcnRfcmFuZ2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjcG9ydF9yYW5nZX1cbiAgKi9cbiAgcmVhZG9ubHkgcG9ydFJhbmdlPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTZWN1cml0eUdyb3VwUnVsZVBvcnRSYW5nZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3ByZWZpeF9saXN0X2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3ByZWZpeF9saXN0X2lkfVxuICAqL1xuICByZWFkb25seSBwcmVmaXhMaXN0SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNwcm90b2NvbCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNwcm90b2NvbH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJvdG9jb2w/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNzZWN1cml0eV9ncm91cF9pZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNzZWN1cml0eV9ncm91cF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTZWN1cml0eUdyb3VwUnVsZVRvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU2VjdXJpdHlHcm91cFJ1bGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2lkcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jaWRyKSxcbiAgICBkaXJlY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGlyZWN0aW9uKSxcbiAgICBwb3J0X3JhbmdlOiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1NlY3VyaXR5R3JvdXBSdWxlUG9ydFJhbmdlVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0UmFuZ2UpLFxuICAgIHByZWZpeF9saXN0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeExpc3RJZCksXG4gICAgcHJvdG9jb2w6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvdG9jb2wpLFxuICAgIHNlY3VyaXR5X2dyb3VwX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBJZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1NlY3VyaXR5R3JvdXBzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2FybiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2lkfVxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU2VjdXJpdHlHcm91cHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1NlY3VyaXR5R3JvdXBzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU291cmNlVnBjIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2FybiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2lkfVxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU291cmNlVnBjVG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTb3VyY2VWcGMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTdWJuZXQge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjYXJuIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTdWJuZXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1N1Ym5ldCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1N1Ym5ldFJvdXRlVGFibGUge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjYXJuIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTdWJuZXRSb3V0ZVRhYmxlVG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTdWJuZXRSb3V0ZVRhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zVnBjIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2FybiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2lkfVxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zVnBjVG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNWcGMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNWcGNFbmRwb2ludCB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNhcm4gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjYXJufVxuICAqL1xuICByZWFkb25seSBhcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNpZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwY0VuZHBvaW50VG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNWcGNFbmRwb2ludCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwY1BlZXJpbmdDb25uZWN0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2FybiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2lkfVxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zVnBjUGVlcmluZ0Nvbm5lY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwY1BlZXJpbmdDb25uZWN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zVnBuQ29ubmVjdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNhcm4gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjYXJufVxuICAqL1xuICByZWFkb25seSBhcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNpZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwbkNvbm5lY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwbkNvbm5lY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNWcG5HYXRld2F5IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2FybiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2lkfVxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zVnBuR2F0ZXdheVRvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zVnBuR2F0ZXdheSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWNsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNsPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNBY2w7XG4gIHB1YmxpYyBnZXQgYWNsKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2FjbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjbCh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNBY2wpIHtcbiAgICB0aGlzLl9hY2wgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2woKSB7XG4gICAgdGhpcy5fYWNsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2xJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNsXG4gIH1cblxuICAvLyBhY2xfcnVsZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjbFJ1bGU/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0FjbFJ1bGU7XG4gIHB1YmxpYyBnZXQgYWNsUnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhY2xfcnVsZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjbFJ1bGUodmFsdWU6IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQWNsUnVsZSkge1xuICAgIHRoaXMuX2FjbFJ1bGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2xSdWxlKCkge1xuICAgIHRoaXMuX2FjbFJ1bGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjbFJ1bGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNsUnVsZVxuICB9XG5cbiAgLy8gYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FkZHJlc3M/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgYWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FkZHJlc3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFkZHJlc3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FkZHJlc3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBZGRyZXNzKCkge1xuICAgIHRoaXMuX2FkZHJlc3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFkZHJlc3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWRkcmVzc1xuICB9XG5cbiAgLy8gYWRkcmVzc2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWRkcmVzc2VzPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgYWRkcmVzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2FkZHJlc3NlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWRkcmVzc2VzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2FkZHJlc3NlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFkZHJlc3NlcygpIHtcbiAgICB0aGlzLl9hZGRyZXNzZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFkZHJlc3Nlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hZGRyZXNzZXNcbiAgfVxuXG4gIC8vIGF0dGFjaGVkX3RvIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXR0YWNoZWRUbz86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQXR0YWNoZWRUbztcbiAgcHVibGljIGdldCBhdHRhY2hlZFRvKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2F0dGFjaGVkX3RvJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYXR0YWNoZWRUbyh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNBdHRhY2hlZFRvKSB7XG4gICAgdGhpcy5fYXR0YWNoZWRUbyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF0dGFjaGVkVG8oKSB7XG4gICAgdGhpcy5fYXR0YWNoZWRUbyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXR0YWNoZWRUb0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRhY2hlZFRvXG4gIH1cblxuICAvLyBhdmFpbGFiaWxpdHlfem9uZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdmFpbGFiaWxpdHlab25lcz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IGF2YWlsYWJpbGl0eVpvbmVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2F2YWlsYWJpbGl0eV96b25lcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXZhaWxhYmlsaXR5Wm9uZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdmFpbGFiaWxpdHlab25lcygpIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZXNcbiAgfVxuXG4gIC8vIGNpZHJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2lkcnM/OiBzdHJpbmdbXTtcbiAgcHVibGljIGdldCBjaWRycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjaWRycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2lkcnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fY2lkcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDaWRycygpIHtcbiAgICB0aGlzLl9jaWRycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2lkcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2lkcnNcbiAgfVxuXG4gIC8vIGNsYXNzaWNfbG9hZF9iYWxhbmNlcl9saXN0ZW5lciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NsYXNzaWNMb2FkQmFsYW5jZXJMaXN0ZW5lcj86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQ2xhc3NpY0xvYWRCYWxhbmNlckxpc3RlbmVyO1xuICBwdWJsaWMgZ2V0IGNsYXNzaWNMb2FkQmFsYW5jZXJMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjbGFzc2ljX2xvYWRfYmFsYW5jZXJfbGlzdGVuZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjbGFzc2ljTG9hZEJhbGFuY2VyTGlzdGVuZXIodmFsdWU6IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQ2xhc3NpY0xvYWRCYWxhbmNlckxpc3RlbmVyKSB7XG4gICAgdGhpcy5fY2xhc3NpY0xvYWRCYWxhbmNlckxpc3RlbmVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xhc3NpY0xvYWRCYWxhbmNlckxpc3RlbmVyKCkge1xuICAgIHRoaXMuX2NsYXNzaWNMb2FkQmFsYW5jZXJMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xhc3NpY0xvYWRCYWxhbmNlckxpc3RlbmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsYXNzaWNMb2FkQmFsYW5jZXJMaXN0ZW5lclxuICB9XG5cbiAgLy8gY29tcG9uZW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29tcG9uZW50PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNDb21wb25lbnQ7XG4gIHB1YmxpYyBnZXQgY29tcG9uZW50KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbXBvbmVudCh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNDb21wb25lbnQpIHtcbiAgICB0aGlzLl9jb21wb25lbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21wb25lbnQoKSB7XG4gICAgdGhpcy5fY29tcG9uZW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb21wb25lbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50XG4gIH1cblxuICAvLyBjdXN0b21lcl9nYXRld2F5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tZXJHYXRld2F5PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNDdXN0b21lckdhdGV3YXk7XG4gIHB1YmxpYyBnZXQgY3VzdG9tZXJHYXRld2F5KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2N1c3RvbWVyX2dhdGV3YXknKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21lckdhdGV3YXkodmFsdWU6IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQ3VzdG9tZXJHYXRld2F5KSB7XG4gICAgdGhpcy5fY3VzdG9tZXJHYXRld2F5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tZXJHYXRld2F5KCkge1xuICAgIHRoaXMuX2N1c3RvbWVyR2F0ZXdheSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tZXJHYXRld2F5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbWVyR2F0ZXdheVxuICB9XG5cbiAgLy8gZGVzdGluYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXN0aW5hdGlvbj86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zRGVzdGluYXRpb247XG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGVzdGluYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBkZXN0aW5hdGlvbih2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNEZXN0aW5hdGlvbikge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzdGluYXRpb24oKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uXG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbl92cGMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXN0aW5hdGlvblZwYz86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zRGVzdGluYXRpb25WcGM7XG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25WcGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGVzdGluYXRpb25fdnBjJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzdGluYXRpb25WcGModmFsdWU6IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zRGVzdGluYXRpb25WcGMpIHtcbiAgICB0aGlzLl9kZXN0aW5hdGlvblZwYyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc3RpbmF0aW9uVnBjKCkge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uVnBjID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXN0aW5hdGlvblZwY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0aW5hdGlvblZwY1xuICB9XG5cbiAgLy8gZGlyZWN0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGlyZWN0aW9uPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGRpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RpcmVjdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGlyZWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXJlY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREaXJlY3Rpb24oKSB7XG4gICAgdGhpcy5fZGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkaXJlY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uXG4gIH1cblxuICAvLyBlbGFzdGljX2xvYWRfYmFsYW5jZXJfbGlzdGVuZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbGFzdGljTG9hZEJhbGFuY2VyTGlzdGVuZXI/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0VsYXN0aWNMb2FkQmFsYW5jZXJMaXN0ZW5lcjtcbiAgcHVibGljIGdldCBlbGFzdGljTG9hZEJhbGFuY2VyTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWxhc3RpY19sb2FkX2JhbGFuY2VyX2xpc3RlbmVyJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZWxhc3RpY0xvYWRCYWxhbmNlckxpc3RlbmVyKHZhbHVlOiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0VsYXN0aWNMb2FkQmFsYW5jZXJMaXN0ZW5lcikge1xuICAgIHRoaXMuX2VsYXN0aWNMb2FkQmFsYW5jZXJMaXN0ZW5lciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVsYXN0aWNMb2FkQmFsYW5jZXJMaXN0ZW5lcigpIHtcbiAgICB0aGlzLl9lbGFzdGljTG9hZEJhbGFuY2VyTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVsYXN0aWNMb2FkQmFsYW5jZXJMaXN0ZW5lcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbGFzdGljTG9hZEJhbGFuY2VyTGlzdGVuZXJcbiAgfVxuXG4gIC8vIGV4cGxhbmF0aW9uX2NvZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leHBsYW5hdGlvbkNvZGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZXhwbGFuYXRpb25Db2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXhwbGFuYXRpb25fY29kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhwbGFuYXRpb25Db2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9leHBsYW5hdGlvbkNvZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeHBsYW5hdGlvbkNvZGUoKSB7XG4gICAgdGhpcy5fZXhwbGFuYXRpb25Db2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleHBsYW5hdGlvbkNvZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwbGFuYXRpb25Db2RlXG4gIH1cblxuICAvLyBpbmdyZXNzX3JvdXRlX3RhYmxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5ncmVzc1JvdXRlVGFibGU/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0luZ3Jlc3NSb3V0ZVRhYmxlO1xuICBwdWJsaWMgZ2V0IGluZ3Jlc3NSb3V0ZVRhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2luZ3Jlc3Nfcm91dGVfdGFibGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbmdyZXNzUm91dGVUYWJsZSh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNJbmdyZXNzUm91dGVUYWJsZSkge1xuICAgIHRoaXMuX2luZ3Jlc3NSb3V0ZVRhYmxlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5ncmVzc1JvdXRlVGFibGUoKSB7XG4gICAgdGhpcy5faW5ncmVzc1JvdXRlVGFibGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluZ3Jlc3NSb3V0ZVRhYmxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luZ3Jlc3NSb3V0ZVRhYmxlXG4gIH1cblxuICAvLyBpbnRlcm5ldF9nYXRld2F5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW50ZXJuZXRHYXRld2F5PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNJbnRlcm5ldEdhdGV3YXk7XG4gIHB1YmxpYyBnZXQgaW50ZXJuZXRHYXRld2F5KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ludGVybmV0X2dhdGV3YXknKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbnRlcm5ldEdhdGV3YXkodmFsdWU6IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zSW50ZXJuZXRHYXRld2F5KSB7XG4gICAgdGhpcy5faW50ZXJuZXRHYXRld2F5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW50ZXJuZXRHYXRld2F5KCkge1xuICAgIHRoaXMuX2ludGVybmV0R2F0ZXdheSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW50ZXJuZXRHYXRld2F5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVybmV0R2F0ZXdheVxuICB9XG5cbiAgLy8gbG9hZF9iYWxhbmNlcl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2FkQmFsYW5jZXJBcm4/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2VyQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9hZF9iYWxhbmNlcl9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvYWRCYWxhbmNlckFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VyQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9hZEJhbGFuY2VyQXJuKCkge1xuICAgIHRoaXMuX2xvYWRCYWxhbmNlckFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2VyQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRCYWxhbmNlckFyblxuICB9XG5cbiAgLy8gbG9hZF9iYWxhbmNlcl9saXN0ZW5lcl9wb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9hZEJhbGFuY2VyTGlzdGVuZXJQb3J0PzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IGxvYWRCYWxhbmNlckxpc3RlbmVyUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2xvYWRfYmFsYW5jZXJfbGlzdGVuZXJfcG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9hZEJhbGFuY2VyTGlzdGVuZXJQb3J0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXJMaXN0ZW5lclBvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2FkQmFsYW5jZXJMaXN0ZW5lclBvcnQoKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VyTGlzdGVuZXJQb3J0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2FkQmFsYW5jZXJMaXN0ZW5lclBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZEJhbGFuY2VyTGlzdGVuZXJQb3J0XG4gIH1cblxuICAvLyBsb2FkX2JhbGFuY2VyX3RhcmdldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvYWRCYWxhbmNlclRhcmdldD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0O1xuICBwdWJsaWMgZ2V0IGxvYWRCYWxhbmNlclRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsb2FkX2JhbGFuY2VyX3RhcmdldCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvYWRCYWxhbmNlclRhcmdldCh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNMb2FkQmFsYW5jZXJUYXJnZXQpIHtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXJUYXJnZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2FkQmFsYW5jZXJUYXJnZXQoKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VyVGFyZ2V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2FkQmFsYW5jZXJUYXJnZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZEJhbGFuY2VyVGFyZ2V0XG4gIH1cblxuICAvLyBsb2FkX2JhbGFuY2VyX3RhcmdldF9ncm91cCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvYWRCYWxhbmNlclRhcmdldEdyb3VwPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNMb2FkQmFsYW5jZXJUYXJnZXRHcm91cDtcbiAgcHVibGljIGdldCBsb2FkQmFsYW5jZXJUYXJnZXRHcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsb2FkX2JhbGFuY2VyX3RhcmdldF9ncm91cCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvYWRCYWxhbmNlclRhcmdldEdyb3VwKHZhbHVlOiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0xvYWRCYWxhbmNlclRhcmdldEdyb3VwKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VyVGFyZ2V0R3JvdXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2FkQmFsYW5jZXJUYXJnZXRHcm91cCgpIHtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXJUYXJnZXRHcm91cCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2VyVGFyZ2V0R3JvdXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZEJhbGFuY2VyVGFyZ2V0R3JvdXBcbiAgfVxuXG4gIC8vIGxvYWRfYmFsYW5jZXJfdGFyZ2V0X2dyb3VwcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvYWRCYWxhbmNlclRhcmdldEdyb3Vwcz86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0R3JvdXBzW107XG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2VyVGFyZ2V0R3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xvYWRfYmFsYW5jZXJfdGFyZ2V0X2dyb3VwcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvYWRCYWxhbmNlclRhcmdldEdyb3Vwcyh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNMb2FkQmFsYW5jZXJUYXJnZXRHcm91cHNbXSkge1xuICAgIHRoaXMuX2xvYWRCYWxhbmNlclRhcmdldEdyb3VwcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvYWRCYWxhbmNlclRhcmdldEdyb3VwcygpIHtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXJUYXJnZXRHcm91cHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvYWRCYWxhbmNlclRhcmdldEdyb3Vwc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2FkQmFsYW5jZXJUYXJnZXRHcm91cHNcbiAgfVxuXG4gIC8vIGxvYWRfYmFsYW5jZXJfdGFyZ2V0X3BvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2FkQmFsYW5jZXJUYXJnZXRQb3J0PzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IGxvYWRCYWxhbmNlclRhcmdldFBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdsb2FkX2JhbGFuY2VyX3RhcmdldF9wb3J0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2FkQmFsYW5jZXJUYXJnZXRQb3J0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXJUYXJnZXRQb3J0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9hZEJhbGFuY2VyVGFyZ2V0UG9ydCgpIHtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXJUYXJnZXRQb3J0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2FkQmFsYW5jZXJUYXJnZXRQb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRCYWxhbmNlclRhcmdldFBvcnRcbiAgfVxuXG4gIC8vIG1pc3NpbmdfY29tcG9uZW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWlzc2luZ0NvbXBvbmVudD86IHN0cmluZztcbiAgcHVibGljIGdldCBtaXNzaW5nQ29tcG9uZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWlzc2luZ19jb21wb25lbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1pc3NpbmdDb21wb25lbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21pc3NpbmdDb21wb25lbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNaXNzaW5nQ29tcG9uZW50KCkge1xuICAgIHRoaXMuX21pc3NpbmdDb21wb25lbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1pc3NpbmdDb21wb25lbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWlzc2luZ0NvbXBvbmVudFxuICB9XG5cbiAgLy8gbmF0X2dhdGV3YXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYXRHYXRld2F5PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNOYXRHYXRld2F5O1xuICBwdWJsaWMgZ2V0IG5hdEdhdGV3YXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbmF0X2dhdGV3YXknKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBuYXRHYXRld2F5KHZhbHVlOiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc05hdEdhdGV3YXkpIHtcbiAgICB0aGlzLl9uYXRHYXRld2F5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmF0R2F0ZXdheSgpIHtcbiAgICB0aGlzLl9uYXRHYXRld2F5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYXRHYXRld2F5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdEdhdGV3YXlcbiAgfVxuXG4gIC8vIG5ldHdvcmtfaW50ZXJmYWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmV0d29ya0ludGVyZmFjZT86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTmV0d29ya0ludGVyZmFjZTtcbiAgcHVibGljIGdldCBuZXR3b3JrSW50ZXJmYWNlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ25ldHdvcmtfaW50ZXJmYWNlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbmV0d29ya0ludGVyZmFjZSh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNOZXR3b3JrSW50ZXJmYWNlKSB7XG4gICAgdGhpcy5fbmV0d29ya0ludGVyZmFjZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5ldHdvcmtJbnRlcmZhY2UoKSB7XG4gICAgdGhpcy5fbmV0d29ya0ludGVyZmFjZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV0d29ya0ludGVyZmFjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uZXR3b3JrSW50ZXJmYWNlXG4gIH1cblxuICAvLyBwYWNrZXRfZmllbGQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYWNrZXRGaWVsZD86IHN0cmluZztcbiAgcHVibGljIGdldCBwYWNrZXRGaWVsZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhY2tldF9maWVsZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFja2V0RmllbGQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhY2tldEZpZWxkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFja2V0RmllbGQoKSB7XG4gICAgdGhpcy5fcGFja2V0RmllbGQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhY2tldEZpZWxkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhY2tldEZpZWxkXG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9ydD86IG51bWJlcjtcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBvcnQoKSB7XG4gICAgdGhpcy5fcG9ydCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9ydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb3J0XG4gIH1cblxuICAvLyBwb3J0X3JhbmdlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BvcnRSYW5nZXM/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1BvcnRSYW5nZXNbXTtcbiAgcHVibGljIGdldCBwb3J0UmFuZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BvcnRfcmFuZ2VzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydFJhbmdlcyh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNQb3J0UmFuZ2VzW10pIHtcbiAgICB0aGlzLl9wb3J0UmFuZ2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UG9ydFJhbmdlcygpIHtcbiAgICB0aGlzLl9wb3J0UmFuZ2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb3J0UmFuZ2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnRSYW5nZXNcbiAgfVxuXG4gIC8vIHByZWZpeF9saXN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZml4TGlzdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zUHJlZml4TGlzdDtcbiAgcHVibGljIGdldCBwcmVmaXhMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ByZWZpeF9saXN0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZml4TGlzdCh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNQcmVmaXhMaXN0KSB7XG4gICAgdGhpcy5fcHJlZml4TGlzdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWZpeExpc3QoKSB7XG4gICAgdGhpcy5fcHJlZml4TGlzdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZml4TGlzdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmaXhMaXN0XG4gIH1cblxuICAvLyBwcm90b2NvbHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm90b2NvbHM/OiBzdHJpbmdbXTtcbiAgcHVibGljIGdldCBwcm90b2NvbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncHJvdG9jb2xzJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm90b2NvbHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcHJvdG9jb2xzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvdG9jb2xzKCkge1xuICAgIHRoaXMuX3Byb3RvY29scyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2xzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3RvY29sc1xuICB9XG5cbiAgLy8gcm91dGVfdGFibGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yb3V0ZVRhYmxlPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNSb3V0ZVRhYmxlO1xuICBwdWJsaWMgZ2V0IHJvdXRlVGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncm91dGVfdGFibGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByb3V0ZVRhYmxlKHZhbHVlOiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1JvdXRlVGFibGUpIHtcbiAgICB0aGlzLl9yb3V0ZVRhYmxlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Um91dGVUYWJsZSgpIHtcbiAgICB0aGlzLl9yb3V0ZVRhYmxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb3V0ZVRhYmxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdXRlVGFibGVcbiAgfVxuXG4gIC8vIHJvdXRlX3RhYmxlX3JvdXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcm91dGVUYWJsZVJvdXRlPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNSb3V0ZVRhYmxlUm91dGU7XG4gIHB1YmxpYyBnZXQgcm91dGVUYWJsZVJvdXRlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JvdXRlX3RhYmxlX3JvdXRlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcm91dGVUYWJsZVJvdXRlKHZhbHVlOiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1JvdXRlVGFibGVSb3V0ZSkge1xuICAgIHRoaXMuX3JvdXRlVGFibGVSb3V0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJvdXRlVGFibGVSb3V0ZSgpIHtcbiAgICB0aGlzLl9yb3V0ZVRhYmxlUm91dGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvdXRlVGFibGVSb3V0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZVRhYmxlUm91dGVcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X2dyb3VwIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VjdXJpdHlHcm91cD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU2VjdXJpdHlHcm91cDtcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlHcm91cCh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTZWN1cml0eUdyb3VwKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlY3VyaXR5R3JvdXAoKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWN1cml0eUdyb3VwXG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cF9ydWxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VjdXJpdHlHcm91cFJ1bGU/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1NlY3VyaXR5R3JvdXBSdWxlO1xuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwX3J1bGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzZWN1cml0eUdyb3VwUnVsZSh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTZWN1cml0eUdyb3VwUnVsZSkge1xuICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBSdWxlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VjdXJpdHlHcm91cFJ1bGUoKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cFJ1bGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBSdWxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5R3JvdXBSdWxlXG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZWN1cml0eUdyb3Vwcz86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU2VjdXJpdHlHcm91cHNbXTtcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzZWN1cml0eV9ncm91cHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzZWN1cml0eUdyb3Vwcyh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTZWN1cml0eUdyb3Vwc1tdKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZWN1cml0eUdyb3VwcygpIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdXJpdHlHcm91cHNcbiAgfVxuXG4gIC8vIHNvdXJjZV92cGMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zb3VyY2VWcGM/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1NvdXJjZVZwYztcbiAgcHVibGljIGdldCBzb3VyY2VWcGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc291cmNlX3ZwYycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZVZwYyh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTb3VyY2VWcGMpIHtcbiAgICB0aGlzLl9zb3VyY2VWcGMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTb3VyY2VWcGMoKSB7XG4gICAgdGhpcy5fc291cmNlVnBjID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VWcGNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlVnBjXG4gIH1cblxuICAvLyBzdGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXRlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXRlKCkge1xuICAgIHRoaXMuX3N0YXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVxuICB9XG5cbiAgLy8gc3VibmV0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3VibmV0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTdWJuZXQ7XG4gIHB1YmxpYyBnZXQgc3VibmV0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N1Ym5ldCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Ym5ldCh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTdWJuZXQpIHtcbiAgICB0aGlzLl9zdWJuZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdWJuZXQoKSB7XG4gICAgdGhpcy5fc3VibmV0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJuZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VibmV0XG4gIH1cblxuICAvLyBzdWJuZXRfcm91dGVfdGFibGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdWJuZXRSb3V0ZVRhYmxlPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTdWJuZXRSb3V0ZVRhYmxlO1xuICBwdWJsaWMgZ2V0IHN1Ym5ldFJvdXRlVGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3VibmV0X3JvdXRlX3RhYmxlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc3VibmV0Um91dGVUYWJsZSh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTdWJuZXRSb3V0ZVRhYmxlKSB7XG4gICAgdGhpcy5fc3VibmV0Um91dGVUYWJsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1Ym5ldFJvdXRlVGFibGUoKSB7XG4gICAgdGhpcy5fc3VibmV0Um91dGVUYWJsZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VibmV0Um91dGVUYWJsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJuZXRSb3V0ZVRhYmxlXG4gIH1cblxuICAvLyB2cGMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92cGM/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwYztcbiAgcHVibGljIGdldCB2cGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndnBjJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdnBjKHZhbHVlOiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwYykge1xuICAgIHRoaXMuX3ZwYyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZwYygpIHtcbiAgICB0aGlzLl92cGMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNcbiAgfVxuXG4gIC8vIHZwY19lbmRwb2ludCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZwY0VuZHBvaW50PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNWcGNFbmRwb2ludDtcbiAgcHVibGljIGdldCB2cGNFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2cGNfZW5kcG9pbnQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB2cGNFbmRwb2ludCh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNWcGNFbmRwb2ludCkge1xuICAgIHRoaXMuX3ZwY0VuZHBvaW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VnBjRW5kcG9pbnQoKSB7XG4gICAgdGhpcy5fdnBjRW5kcG9pbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY0VuZHBvaW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwY0VuZHBvaW50XG4gIH1cblxuICAvLyB2cGNfcGVlcmluZ19jb25uZWN0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdnBjUGVlcmluZ0Nvbm5lY3Rpb24/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwY1BlZXJpbmdDb25uZWN0aW9uO1xuICBwdWJsaWMgZ2V0IHZwY1BlZXJpbmdDb25uZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB2cGNQZWVyaW5nQ29ubmVjdGlvbih2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNWcGNQZWVyaW5nQ29ubmVjdGlvbikge1xuICAgIHRoaXMuX3ZwY1BlZXJpbmdDb25uZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VnBjUGVlcmluZ0Nvbm5lY3Rpb24oKSB7XG4gICAgdGhpcy5fdnBjUGVlcmluZ0Nvbm5lY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY1BlZXJpbmdDb25uZWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwY1BlZXJpbmdDb25uZWN0aW9uXG4gIH1cblxuICAvLyB2cG5fY29ubmVjdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZwbkNvbm5lY3Rpb24/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwbkNvbm5lY3Rpb247XG4gIHB1YmxpYyBnZXQgdnBuQ29ubmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2cG5fY29ubmVjdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHZwbkNvbm5lY3Rpb24odmFsdWU6IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zVnBuQ29ubmVjdGlvbikge1xuICAgIHRoaXMuX3ZwbkNvbm5lY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWcG5Db25uZWN0aW9uKCkge1xuICAgIHRoaXMuX3ZwbkNvbm5lY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwbkNvbm5lY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBuQ29ubmVjdGlvblxuICB9XG5cbiAgLy8gdnBuX2dhdGV3YXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92cG5HYXRld2F5PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNWcG5HYXRld2F5O1xuICBwdWJsaWMgZ2V0IHZwbkdhdGV3YXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndnBuX2dhdGV3YXknKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB2cG5HYXRld2F5KHZhbHVlOiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1ZwbkdhdGV3YXkpIHtcbiAgICB0aGlzLl92cG5HYXRld2F5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VnBuR2F0ZXdheSgpIHtcbiAgICB0aGlzLl92cG5HYXRld2F5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cG5HYXRld2F5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwbkdhdGV3YXlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY2w6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQWNsVG9UZXJyYWZvcm0oc3RydWN0IS5hY2wpLFxuICAgIGFjbF9ydWxlOiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0FjbFJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjbFJ1bGUpLFxuICAgIGFkZHJlc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWRkcmVzcyksXG4gICAgYWRkcmVzc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmFkZHJlc3NlcyksXG4gICAgYXR0YWNoZWRfdG86IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQXR0YWNoZWRUb1RvVGVycmFmb3JtKHN0cnVjdCEuYXR0YWNoZWRUbyksXG4gICAgYXZhaWxhYmlsaXR5X3pvbmVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmF2YWlsYWJpbGl0eVpvbmVzKSxcbiAgICBjaWRyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5jaWRycyksXG4gICAgY2xhc3NpY19sb2FkX2JhbGFuY2VyX2xpc3RlbmVyOiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0NsYXNzaWNMb2FkQmFsYW5jZXJMaXN0ZW5lclRvVGVycmFmb3JtKHN0cnVjdCEuY2xhc3NpY0xvYWRCYWxhbmNlckxpc3RlbmVyKSxcbiAgICBjb21wb25lbnQ6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQ29tcG9uZW50VG9UZXJyYWZvcm0oc3RydWN0IS5jb21wb25lbnQpLFxuICAgIGN1c3RvbWVyX2dhdGV3YXk6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zQ3VzdG9tZXJHYXRld2F5VG9UZXJyYWZvcm0oc3RydWN0IS5jdXN0b21lckdhdGV3YXkpLFxuICAgIGRlc3RpbmF0aW9uOiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0Rlc3RpbmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5kZXN0aW5hdGlvbiksXG4gICAgZGVzdGluYXRpb25fdnBjOiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0Rlc3RpbmF0aW9uVnBjVG9UZXJyYWZvcm0oc3RydWN0IS5kZXN0aW5hdGlvblZwYyksXG4gICAgZGlyZWN0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRpcmVjdGlvbiksXG4gICAgZWxhc3RpY19sb2FkX2JhbGFuY2VyX2xpc3RlbmVyOiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0VsYXN0aWNMb2FkQmFsYW5jZXJMaXN0ZW5lclRvVGVycmFmb3JtKHN0cnVjdCEuZWxhc3RpY0xvYWRCYWxhbmNlckxpc3RlbmVyKSxcbiAgICBleHBsYW5hdGlvbl9jb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4cGxhbmF0aW9uQ29kZSksXG4gICAgaW5ncmVzc19yb3V0ZV90YWJsZTogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNJbmdyZXNzUm91dGVUYWJsZVRvVGVycmFmb3JtKHN0cnVjdCEuaW5ncmVzc1JvdXRlVGFibGUpLFxuICAgIGludGVybmV0X2dhdGV3YXk6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zSW50ZXJuZXRHYXRld2F5VG9UZXJyYWZvcm0oc3RydWN0IS5pbnRlcm5ldEdhdGV3YXkpLFxuICAgIGxvYWRfYmFsYW5jZXJfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvYWRCYWxhbmNlckFybiksXG4gICAgbG9hZF9iYWxhbmNlcl9saXN0ZW5lcl9wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvYWRCYWxhbmNlckxpc3RlbmVyUG9ydCksXG4gICAgbG9hZF9iYWxhbmNlcl90YXJnZXQ6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0VG9UZXJyYWZvcm0oc3RydWN0IS5sb2FkQmFsYW5jZXJUYXJnZXQpLFxuICAgIGxvYWRfYmFsYW5jZXJfdGFyZ2V0X2dyb3VwOiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc0xvYWRCYWxhbmNlclRhcmdldEdyb3VwVG9UZXJyYWZvcm0oc3RydWN0IS5sb2FkQmFsYW5jZXJUYXJnZXRHcm91cCksXG4gICAgbG9hZF9iYWxhbmNlcl90YXJnZXRfZ3JvdXBzOiBjZGt0Zi5saXN0TWFwcGVyKGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zTG9hZEJhbGFuY2VyVGFyZ2V0R3JvdXBzVG9UZXJyYWZvcm0pKHN0cnVjdCEubG9hZEJhbGFuY2VyVGFyZ2V0R3JvdXBzKSxcbiAgICBsb2FkX2JhbGFuY2VyX3RhcmdldF9wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvYWRCYWxhbmNlclRhcmdldFBvcnQpLFxuICAgIG1pc3NpbmdfY29tcG9uZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pc3NpbmdDb21wb25lbnQpLFxuICAgIG5hdF9nYXRld2F5OiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc05hdEdhdGV3YXlUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hdEdhdGV3YXkpLFxuICAgIG5ldHdvcmtfaW50ZXJmYWNlOiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc05ldHdvcmtJbnRlcmZhY2VUb1RlcnJhZm9ybShzdHJ1Y3QhLm5ldHdvcmtJbnRlcmZhY2UpLFxuICAgIHBhY2tldF9maWVsZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYWNrZXRGaWVsZCksXG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgICBwb3J0X3JhbmdlczogY2RrdGYubGlzdE1hcHBlcihlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1BvcnRSYW5nZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5wb3J0UmFuZ2VzKSxcbiAgICBwcmVmaXhfbGlzdDogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNQcmVmaXhMaXN0VG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXhMaXN0KSxcbiAgICBwcm90b2NvbHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEucHJvdG9jb2xzKSxcbiAgICByb3V0ZV90YWJsZTogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNSb3V0ZVRhYmxlVG9UZXJyYWZvcm0oc3RydWN0IS5yb3V0ZVRhYmxlKSxcbiAgICByb3V0ZV90YWJsZV9yb3V0ZTogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNSb3V0ZVRhYmxlUm91dGVUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvdXRlVGFibGVSb3V0ZSksXG4gICAgc2VjdXJpdHlfZ3JvdXA6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU2VjdXJpdHlHcm91cFRvVGVycmFmb3JtKHN0cnVjdCEuc2VjdXJpdHlHcm91cCksXG4gICAgc2VjdXJpdHlfZ3JvdXBfcnVsZTogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTZWN1cml0eUdyb3VwUnVsZVRvVGVycmFmb3JtKHN0cnVjdCEuc2VjdXJpdHlHcm91cFJ1bGUpLFxuICAgIHNlY3VyaXR5X2dyb3VwczogY2RrdGYubGlzdE1hcHBlcihlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0V4cGxhbmF0aW9uc1NlY3VyaXR5R3JvdXBzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2VjdXJpdHlHcm91cHMpLFxuICAgIHNvdXJjZV92cGM6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU291cmNlVnBjVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VWcGMpLFxuICAgIHN0YXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXRlKSxcbiAgICBzdWJuZXQ6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zU3VibmV0VG9UZXJyYWZvcm0oc3RydWN0IS5zdWJuZXQpLFxuICAgIHN1Ym5ldF9yb3V0ZV90YWJsZTogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNTdWJuZXRSb3V0ZVRhYmxlVG9UZXJyYWZvcm0oc3RydWN0IS5zdWJuZXRSb3V0ZVRhYmxlKSxcbiAgICB2cGM6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zVnBjVG9UZXJyYWZvcm0oc3RydWN0IS52cGMpLFxuICAgIHZwY19lbmRwb2ludDogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNWcGNFbmRwb2ludFRvVGVycmFmb3JtKHN0cnVjdCEudnBjRW5kcG9pbnQpLFxuICAgIHZwY19wZWVyaW5nX2Nvbm5lY3Rpb246IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRXhwbGFuYXRpb25zVnBjUGVlcmluZ0Nvbm5lY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnZwY1BlZXJpbmdDb25uZWN0aW9uKSxcbiAgICB2cG5fY29ubmVjdGlvbjogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNWcG5Db25uZWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS52cG5Db25uZWN0aW9uKSxcbiAgICB2cG5fZ2F0ZXdheTogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNFeHBsYW5hdGlvbnNWcG5HYXRld2F5VG9UZXJyYWZvcm0oc3RydWN0IS52cG5HYXRld2F5KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzQWNsUnVsZVBvcnRSYW5nZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNmcm9tIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Zyb219XG4gICovXG4gIHJlYWRvbmx5IGZyb20/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCN0byBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyN0b31cbiAgKi9cbiAgcmVhZG9ubHkgdG8/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0FjbFJ1bGVQb3J0UmFuZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0FjbFJ1bGVQb3J0UmFuZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZnJvbTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5mcm9tKSxcbiAgICB0bzogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50byksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0FjbFJ1bGUge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjY2lkciBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNjaWRyfVxuICAqL1xuICByZWFkb25seSBjaWRyPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjZWdyZXNzIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2VncmVzc31cbiAgKi9cbiAgcmVhZG9ubHkgZWdyZXNzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjcG9ydF9yYW5nZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNwb3J0X3JhbmdlfVxuICAqL1xuICByZWFkb25seSBwb3J0UmFuZ2U/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0FjbFJ1bGVQb3J0UmFuZ2U7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNwcm90b2NvbCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNwcm90b2NvbH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJvdG9jb2w/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNydWxlX2FjdGlvbiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNydWxlX2FjdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgcnVsZUFjdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3J1bGVfbnVtYmVyIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3J1bGVfbnVtYmVyfVxuICAqL1xuICByZWFkb25seSBydWxlTnVtYmVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNBY2xSdWxlVG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNBY2xSdWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2lkciksXG4gICAgZWdyZXNzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lZ3Jlc3MpLFxuICAgIHBvcnRfcmFuZ2U6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzQWNsUnVsZVBvcnRSYW5nZVRvVGVycmFmb3JtKHN0cnVjdCEucG9ydFJhbmdlKSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgcnVsZV9hY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucnVsZUFjdGlvbiksXG4gICAgcnVsZV9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucnVsZU51bWJlciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0NvbXBvbmVudCB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNhcm4gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjYXJufVxuICAqL1xuICByZWFkb25seSBhcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNpZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0NvbXBvbmVudFRvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzQ29tcG9uZW50KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzRGVzdGluYXRpb25WcGMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjYXJuIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNEZXN0aW5hdGlvblZwY1RvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzRGVzdGluYXRpb25WcGMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNJbmJvdW5kSGVhZGVyRGVzdGluYXRpb25Qb3J0UmFuZ2VzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2Zyb20gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjZnJvbX1cbiAgKi9cbiAgcmVhZG9ubHkgZnJvbT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3RvIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3RvfVxuICAqL1xuICByZWFkb25seSB0bz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlckRlc3RpbmF0aW9uUG9ydFJhbmdlc1RvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlckRlc3RpbmF0aW9uUG9ydFJhbmdlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmcm9tOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyb20pLFxuICAgIHRvOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlclNvdXJjZVBvcnRSYW5nZXMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjZnJvbSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNmcm9tfVxuICAqL1xuICByZWFkb25seSBmcm9tPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjdG8gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjdG99XG4gICovXG4gIHJlYWRvbmx5IHRvPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNJbmJvdW5kSGVhZGVyU291cmNlUG9ydFJhbmdlc1RvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlclNvdXJjZVBvcnRSYW5nZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZnJvbTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5mcm9tKSxcbiAgICB0bzogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50byksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXIge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjZGVzdGluYXRpb25fYWRkcmVzc2VzIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Rlc3RpbmF0aW9uX2FkZHJlc3Nlc31cbiAgKi9cbiAgcmVhZG9ubHkgZGVzdGluYXRpb25BZGRyZXNzZXM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2Rlc3RpbmF0aW9uX3BvcnRfcmFuZ2VzIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Rlc3RpbmF0aW9uX3BvcnRfcmFuZ2VzfVxuICAqL1xuICByZWFkb25seSBkZXN0aW5hdGlvblBvcnRSYW5nZXM/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXJEZXN0aW5hdGlvblBvcnRSYW5nZXNbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3Byb3RvY29sIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3Byb3RvY29sfVxuICAqL1xuICByZWFkb25seSBwcm90b2NvbD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3NvdXJjZV9hZGRyZXNzZXMgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjc291cmNlX2FkZHJlc3Nlc31cbiAgKi9cbiAgcmVhZG9ubHkgc291cmNlQWRkcmVzc2VzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNzb3VyY2VfcG9ydF9yYW5nZXMgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjc291cmNlX3BvcnRfcmFuZ2VzfVxuICAqL1xuICByZWFkb25seSBzb3VyY2VQb3J0UmFuZ2VzPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNJbmJvdW5kSGVhZGVyU291cmNlUG9ydFJhbmdlc1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNJbmJvdW5kSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNJbmJvdW5kSGVhZGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRlc3RpbmF0aW9uX2FkZHJlc3NlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5kZXN0aW5hdGlvbkFkZHJlc3NlcyksXG4gICAgZGVzdGluYXRpb25fcG9ydF9yYW5nZXM6IGNka3RmLmxpc3RNYXBwZXIoZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNJbmJvdW5kSGVhZGVyRGVzdGluYXRpb25Qb3J0UmFuZ2VzVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGVzdGluYXRpb25Qb3J0UmFuZ2VzKSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgc291cmNlX2FkZHJlc3NlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zb3VyY2VBZGRyZXNzZXMpLFxuICAgIHNvdXJjZV9wb3J0X3JhbmdlczogY2RrdGYubGlzdE1hcHBlcihlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXJTb3VyY2VQb3J0UmFuZ2VzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc291cmNlUG9ydFJhbmdlcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c091dGJvdW5kSGVhZGVyRGVzdGluYXRpb25Qb3J0UmFuZ2VzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2Zyb20gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjZnJvbX1cbiAgKi9cbiAgcmVhZG9ubHkgZnJvbT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3RvIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3RvfVxuICAqL1xuICByZWFkb25seSB0bz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJEZXN0aW5hdGlvblBvcnRSYW5nZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c091dGJvdW5kSGVhZGVyRGVzdGluYXRpb25Qb3J0UmFuZ2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZyb206IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZnJvbSksXG4gICAgdG86IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudG8pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlclNvdXJjZVBvcnRSYW5nZXMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjZnJvbSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNmcm9tfVxuICAqL1xuICByZWFkb25seSBmcm9tPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjdG8gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjdG99XG4gICovXG4gIHJlYWRvbmx5IHRvPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlclNvdXJjZVBvcnRSYW5nZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c091dGJvdW5kSGVhZGVyU291cmNlUG9ydFJhbmdlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmcm9tOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyb20pLFxuICAgIHRvOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXIge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjZGVzdGluYXRpb25fYWRkcmVzc2VzIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Rlc3RpbmF0aW9uX2FkZHJlc3Nlc31cbiAgKi9cbiAgcmVhZG9ubHkgZGVzdGluYXRpb25BZGRyZXNzZXM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2Rlc3RpbmF0aW9uX3BvcnRfcmFuZ2VzIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Rlc3RpbmF0aW9uX3BvcnRfcmFuZ2VzfVxuICAqL1xuICByZWFkb25seSBkZXN0aW5hdGlvblBvcnRSYW5nZXM/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c091dGJvdW5kSGVhZGVyRGVzdGluYXRpb25Qb3J0UmFuZ2VzW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNwcm90b2NvbCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNwcm90b2NvbH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJvdG9jb2w/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNzb3VyY2VfYWRkcmVzc2VzIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3NvdXJjZV9hZGRyZXNzZXN9XG4gICovXG4gIHJlYWRvbmx5IHNvdXJjZUFkZHJlc3Nlcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjc291cmNlX3BvcnRfcmFuZ2VzIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3NvdXJjZV9wb3J0X3Jhbmdlc31cbiAgKi9cbiAgcmVhZG9ubHkgc291cmNlUG9ydFJhbmdlcz86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJTb3VyY2VQb3J0UmFuZ2VzW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c091dGJvdW5kSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXN0aW5hdGlvbl9hZGRyZXNzZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGVzdGluYXRpb25BZGRyZXNzZXMpLFxuICAgIGRlc3RpbmF0aW9uX3BvcnRfcmFuZ2VzOiBjZGt0Zi5saXN0TWFwcGVyKGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJEZXN0aW5hdGlvblBvcnRSYW5nZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5kZXN0aW5hdGlvblBvcnRSYW5nZXMpLFxuICAgIHByb3RvY29sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb3RvY29sKSxcbiAgICBzb3VyY2VfYWRkcmVzc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNvdXJjZUFkZHJlc3NlcyksXG4gICAgc291cmNlX3BvcnRfcmFuZ2VzOiBjZGt0Zi5saXN0TWFwcGVyKGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJTb3VyY2VQb3J0UmFuZ2VzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc291cmNlUG9ydFJhbmdlcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1JvdXRlVGFibGVSb3V0ZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNkZXN0aW5hdGlvbl9jaWRyIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Rlc3RpbmF0aW9uX2NpZHJ9XG4gICovXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uQ2lkcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2Rlc3RpbmF0aW9uX3ByZWZpeF9saXN0X2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Rlc3RpbmF0aW9uX3ByZWZpeF9saXN0X2lkfVxuICAqL1xuICByZWFkb25seSBkZXN0aW5hdGlvblByZWZpeExpc3RJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2VncmVzc19vbmx5X2ludGVybmV0X2dhdGV3YXlfaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjZWdyZXNzX29ubHlfaW50ZXJuZXRfZ2F0ZXdheV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgZWdyZXNzT25seUludGVybmV0R2F0ZXdheUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjZ2F0ZXdheV9pZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNnYXRld2F5X2lkfVxuICAqL1xuICByZWFkb25seSBnYXRld2F5SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNpbnN0YW5jZV9pZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNpbnN0YW5jZV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgaW5zdGFuY2VJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI25hdF9nYXRld2F5X2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI25hdF9nYXRld2F5X2lkfVxuICAqL1xuICByZWFkb25seSBuYXRHYXRld2F5SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNuZXR3b3JrX2ludGVyZmFjZV9pZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNuZXR3b3JrX2ludGVyZmFjZV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgbmV0d29ya0ludGVyZmFjZUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjb3JpZ2luIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI29yaWdpbn1cbiAgKi9cbiAgcmVhZG9ubHkgb3JpZ2luPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjdHJhbnNpdF9nYXRld2F5X2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3RyYW5zaXRfZ2F0ZXdheV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgdHJhbnNpdEdhdGV3YXlJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzUm91dGVUYWJsZVJvdXRlVG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNSb3V0ZVRhYmxlUm91dGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGVzdGluYXRpb25fY2lkcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXN0aW5hdGlvbkNpZHIpLFxuICAgIGRlc3RpbmF0aW9uX3ByZWZpeF9saXN0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uUHJlZml4TGlzdElkKSxcbiAgICBlZ3Jlc3Nfb25seV9pbnRlcm5ldF9nYXRld2F5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVncmVzc09ubHlJbnRlcm5ldEdhdGV3YXlJZCksXG4gICAgZ2F0ZXdheV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5nYXRld2F5SWQpLFxuICAgIGluc3RhbmNlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlSWQpLFxuICAgIG5hdF9nYXRld2F5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hdEdhdGV3YXlJZCksXG4gICAgbmV0d29ya19pbnRlcmZhY2VfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmV0d29ya0ludGVyZmFjZUlkKSxcbiAgICBvcmlnaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3JpZ2luKSxcbiAgICB0cmFuc2l0X2dhdGV3YXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHJhbnNpdEdhdGV3YXlJZCksXG4gICAgdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52cGNQZWVyaW5nQ29ubmVjdGlvbklkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU2VjdXJpdHlHcm91cFJ1bGVQb3J0UmFuZ2Uge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjZnJvbSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNmcm9tfVxuICAqL1xuICByZWFkb25seSBmcm9tPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjdG8gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjdG99XG4gICovXG4gIHJlYWRvbmx5IHRvPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNTZWN1cml0eUdyb3VwUnVsZVBvcnRSYW5nZVRvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU2VjdXJpdHlHcm91cFJ1bGVQb3J0UmFuZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZnJvbTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5mcm9tKSxcbiAgICB0bzogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50byksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1NlY3VyaXR5R3JvdXBSdWxlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2NpZHIgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjY2lkcn1cbiAgKi9cbiAgcmVhZG9ubHkgY2lkcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2RpcmVjdGlvbiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNkaXJlY3Rpb259XG4gICovXG4gIHJlYWRvbmx5IGRpcmVjdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3BvcnRfcmFuZ2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjcG9ydF9yYW5nZX1cbiAgKi9cbiAgcmVhZG9ubHkgcG9ydFJhbmdlPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNTZWN1cml0eUdyb3VwUnVsZVBvcnRSYW5nZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3ByZWZpeF9saXN0X2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3ByZWZpeF9saXN0X2lkfVxuICAqL1xuICByZWFkb25seSBwcmVmaXhMaXN0SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNwcm90b2NvbCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNwcm90b2NvbH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJvdG9jb2w/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNzZWN1cml0eV9ncm91cF9pZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNzZWN1cml0eV9ncm91cF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNTZWN1cml0eUdyb3VwUnVsZVRvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU2VjdXJpdHlHcm91cFJ1bGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2lkcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jaWRyKSxcbiAgICBkaXJlY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGlyZWN0aW9uKSxcbiAgICBwb3J0X3JhbmdlOiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1NlY3VyaXR5R3JvdXBSdWxlUG9ydFJhbmdlVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0UmFuZ2UpLFxuICAgIHByZWZpeF9saXN0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeExpc3RJZCksXG4gICAgcHJvdG9jb2w6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvdG9jb2wpLFxuICAgIHNlY3VyaXR5X2dyb3VwX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBJZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1NvdXJjZVZwYyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNhcm4gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjYXJufVxuICAqL1xuICByZWFkb25seSBhcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNpZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1NvdXJjZVZwY1RvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU291cmNlVnBjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU3VibmV0IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2FybiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2lkfVxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU3VibmV0VG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNTdWJuZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNWcGMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjYXJuIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNWcGNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1ZwYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWNsX3J1bGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2xSdWxlPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNBY2xSdWxlO1xuICBwdWJsaWMgZ2V0IGFjbFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWNsX3J1bGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhY2xSdWxlKHZhbHVlOiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0FjbFJ1bGUpIHtcbiAgICB0aGlzLl9hY2xSdWxlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNsUnVsZSgpIHtcbiAgICB0aGlzLl9hY2xSdWxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2xSdWxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjbFJ1bGVcbiAgfVxuXG4gIC8vIGNvbXBvbmVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbXBvbmVudD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzQ29tcG9uZW50O1xuICBwdWJsaWMgZ2V0IGNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb21wb25lbnQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjb21wb25lbnQodmFsdWU6IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzQ29tcG9uZW50KSB7XG4gICAgdGhpcy5fY29tcG9uZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29tcG9uZW50KCkge1xuICAgIHRoaXMuX2NvbXBvbmVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tcG9uZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudFxuICB9XG5cbiAgLy8gZGVzdGluYXRpb25fdnBjIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzdGluYXRpb25WcGM/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0Rlc3RpbmF0aW9uVnBjO1xuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uVnBjKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX3ZwYycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc3RpbmF0aW9uVnBjKHZhbHVlOiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0Rlc3RpbmF0aW9uVnBjKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb25WcGMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXN0aW5hdGlvblZwYygpIHtcbiAgICB0aGlzLl9kZXN0aW5hdGlvblZwYyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25WcGNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdGluYXRpb25WcGNcbiAgfVxuXG4gIC8vIGluYm91bmRfaGVhZGVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5ib3VuZEhlYWRlcj86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlcjtcbiAgcHVibGljIGdldCBpbmJvdW5kSGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2luYm91bmRfaGVhZGVyJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaW5ib3VuZEhlYWRlcih2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNJbmJvdW5kSGVhZGVyKSB7XG4gICAgdGhpcy5faW5ib3VuZEhlYWRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluYm91bmRIZWFkZXIoKSB7XG4gICAgdGhpcy5faW5ib3VuZEhlYWRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5ib3VuZEhlYWRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmJvdW5kSGVhZGVyXG4gIH1cblxuICAvLyBvdXRib3VuZF9oZWFkZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vdXRib3VuZEhlYWRlcj86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXI7XG4gIHB1YmxpYyBnZXQgb3V0Ym91bmRIZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb3V0Ym91bmRfaGVhZGVyJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgb3V0Ym91bmRIZWFkZXIodmFsdWU6IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXIpIHtcbiAgICB0aGlzLl9vdXRib3VuZEhlYWRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE91dGJvdW5kSGVhZGVyKCkge1xuICAgIHRoaXMuX291dGJvdW5kSGVhZGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvdXRib3VuZEhlYWRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vdXRib3VuZEhlYWRlclxuICB9XG5cbiAgLy8gcm91dGVfdGFibGVfcm91dGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yb3V0ZVRhYmxlUm91dGU/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1JvdXRlVGFibGVSb3V0ZTtcbiAgcHVibGljIGdldCByb3V0ZVRhYmxlUm91dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncm91dGVfdGFibGVfcm91dGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByb3V0ZVRhYmxlUm91dGUodmFsdWU6IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzUm91dGVUYWJsZVJvdXRlKSB7XG4gICAgdGhpcy5fcm91dGVUYWJsZVJvdXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Um91dGVUYWJsZVJvdXRlKCkge1xuICAgIHRoaXMuX3JvdXRlVGFibGVSb3V0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm91dGVUYWJsZVJvdXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdXRlVGFibGVSb3V0ZVxuICB9XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBfcnVsZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlY3VyaXR5R3JvdXBSdWxlPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNTZWN1cml0eUdyb3VwUnVsZTtcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwUnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9ydWxlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlHcm91cFJ1bGUodmFsdWU6IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU2VjdXJpdHlHcm91cFJ1bGUpIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwUnVsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlY3VyaXR5R3JvdXBSdWxlKCkge1xuICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBSdWxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwUnVsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWN1cml0eUdyb3VwUnVsZVxuICB9XG5cbiAgLy8gc2VxdWVuY2VfbnVtYmVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VxdWVuY2VOdW1iZXI/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgc2VxdWVuY2VOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzZXF1ZW5jZV9udW1iZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcXVlbmNlTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zZXF1ZW5jZU51bWJlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlcXVlbmNlTnVtYmVyKCkge1xuICAgIHRoaXMuX3NlcXVlbmNlTnVtYmVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXF1ZW5jZU51bWJlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXF1ZW5jZU51bWJlclxuICB9XG5cbiAgLy8gc291cmNlX3ZwYyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvdXJjZVZwYz86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU291cmNlVnBjO1xuICBwdWJsaWMgZ2V0IHNvdXJjZVZwYygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzb3VyY2VfdnBjJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc291cmNlVnBjKHZhbHVlOiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1NvdXJjZVZwYykge1xuICAgIHRoaXMuX3NvdXJjZVZwYyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvdXJjZVZwYygpIHtcbiAgICB0aGlzLl9zb3VyY2VWcGMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZVZwY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VWcGNcbiAgfVxuXG4gIC8vIHN1Ym5ldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1Ym5ldD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU3VibmV0O1xuICBwdWJsaWMgZ2V0IHN1Ym5ldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdWJuZXQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzdWJuZXQodmFsdWU6IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzU3VibmV0KSB7XG4gICAgdGhpcy5fc3VibmV0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VibmV0KCkge1xuICAgIHRoaXMuX3N1Ym5ldCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VibmV0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1Ym5ldFxuICB9XG5cbiAgLy8gdnBjIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdnBjPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNWcGM7XG4gIHB1YmxpYyBnZXQgdnBjKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZwYycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHZwYyh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNWcGMpIHtcbiAgICB0aGlzLl92cGMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWcGMoKSB7XG4gICAgdGhpcy5fdnBjID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNsX3J1bGU6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzQWNsUnVsZVRvVGVycmFmb3JtKHN0cnVjdCEuYWNsUnVsZSksXG4gICAgY29tcG9uZW50OiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c0NvbXBvbmVudFRvVGVycmFmb3JtKHN0cnVjdCEuY29tcG9uZW50KSxcbiAgICBkZXN0aW5hdGlvbl92cGM6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzRGVzdGluYXRpb25WcGNUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uVnBjKSxcbiAgICBpbmJvdW5kX2hlYWRlcjogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNJbmJvdW5kSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbmJvdW5kSGVhZGVyKSxcbiAgICBvdXRib3VuZF9oZWFkZXI6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm91dGJvdW5kSGVhZGVyKSxcbiAgICByb3V0ZV90YWJsZV9yb3V0ZTogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNSb3V0ZVRhYmxlUm91dGVUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvdXRlVGFibGVSb3V0ZSksXG4gICAgc2VjdXJpdHlfZ3JvdXBfcnVsZTogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNTZWN1cml0eUdyb3VwUnVsZVRvVGVycmFmb3JtKHN0cnVjdCEuc2VjdXJpdHlHcm91cFJ1bGUpLFxuICAgIHNlcXVlbmNlX251bWJlcjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zZXF1ZW5jZU51bWJlciksXG4gICAgc291cmNlX3ZwYzogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNGb3J3YXJkUGF0aENvbXBvbmVudHNTb3VyY2VWcGNUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZVZwYyksXG4gICAgc3VibmV0OiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0ZvcndhcmRQYXRoQ29tcG9uZW50c1N1Ym5ldFRvVGVycmFmb3JtKHN0cnVjdCEuc3VibmV0KSxcbiAgICB2cGM6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzRm9yd2FyZFBhdGhDb21wb25lbnRzVnBjVG9UZXJyYWZvcm0oc3RydWN0IS52cGMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0FjbFJ1bGVQb3J0UmFuZ2Uge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjZnJvbSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNmcm9tfVxuICAqL1xuICByZWFkb25seSBmcm9tPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjdG8gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjdG99XG4gICovXG4gIHJlYWRvbmx5IHRvPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0FjbFJ1bGVQb3J0UmFuZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzQWNsUnVsZVBvcnRSYW5nZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmcm9tOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyb20pLFxuICAgIHRvOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNBY2xSdWxlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2NpZHIgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjY2lkcn1cbiAgKi9cbiAgcmVhZG9ubHkgY2lkcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2VncmVzcyBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNlZ3Jlc3N9XG4gICovXG4gIHJlYWRvbmx5IGVncmVzcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3BvcnRfcmFuZ2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjcG9ydF9yYW5nZX1cbiAgKi9cbiAgcmVhZG9ubHkgcG9ydFJhbmdlPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0FjbFJ1bGVQb3J0UmFuZ2U7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNwcm90b2NvbCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNwcm90b2NvbH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJvdG9jb2w/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNydWxlX2FjdGlvbiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNydWxlX2FjdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgcnVsZUFjdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3J1bGVfbnVtYmVyIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3J1bGVfbnVtYmVyfVxuICAqL1xuICByZWFkb25seSBydWxlTnVtYmVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0FjbFJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzQWNsUnVsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjaWRyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNpZHIpLFxuICAgIGVncmVzczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZWdyZXNzKSxcbiAgICBwb3J0X3JhbmdlOiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzQWNsUnVsZVBvcnRSYW5nZVRvVGVycmFmb3JtKHN0cnVjdCEucG9ydFJhbmdlKSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgcnVsZV9hY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucnVsZUFjdGlvbiksXG4gICAgcnVsZV9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucnVsZU51bWJlciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzQ29tcG9uZW50IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2FybiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2lkfVxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNDb21wb25lbnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzQ29tcG9uZW50KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNEZXN0aW5hdGlvblZwYyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNhcm4gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjYXJufVxuICAqL1xuICByZWFkb25seSBhcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNpZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzRGVzdGluYXRpb25WcGNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzRGVzdGluYXRpb25WcGMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXJEZXN0aW5hdGlvblBvcnRSYW5nZXMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjZnJvbSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNmcm9tfVxuICAqL1xuICByZWFkb25seSBmcm9tPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjdG8gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjdG99XG4gICovXG4gIHJlYWRvbmx5IHRvPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXJEZXN0aW5hdGlvblBvcnRSYW5nZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlckRlc3RpbmF0aW9uUG9ydFJhbmdlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmcm9tOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyb20pLFxuICAgIHRvOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNJbmJvdW5kSGVhZGVyU291cmNlUG9ydFJhbmdlcyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNmcm9tIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Zyb219XG4gICovXG4gIHJlYWRvbmx5IGZyb20/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCN0byBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyN0b31cbiAgKi9cbiAgcmVhZG9ubHkgdG8/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlclNvdXJjZVBvcnRSYW5nZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlclNvdXJjZVBvcnRSYW5nZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZnJvbTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5mcm9tKSxcbiAgICB0bzogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50byksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlciB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNkZXN0aW5hdGlvbl9hZGRyZXNzZXMgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjZGVzdGluYXRpb25fYWRkcmVzc2VzfVxuICAqL1xuICByZWFkb25seSBkZXN0aW5hdGlvbkFkZHJlc3Nlcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjZGVzdGluYXRpb25fcG9ydF9yYW5nZXMgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjZGVzdGluYXRpb25fcG9ydF9yYW5nZXN9XG4gICovXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uUG9ydFJhbmdlcz86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNJbmJvdW5kSGVhZGVyRGVzdGluYXRpb25Qb3J0UmFuZ2VzW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNwcm90b2NvbCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNwcm90b2NvbH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJvdG9jb2w/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNzb3VyY2VfYWRkcmVzc2VzIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3NvdXJjZV9hZGRyZXNzZXN9XG4gICovXG4gIHJlYWRvbmx5IHNvdXJjZUFkZHJlc3Nlcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjc291cmNlX3BvcnRfcmFuZ2VzIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3NvdXJjZV9wb3J0X3Jhbmdlc31cbiAgKi9cbiAgcmVhZG9ubHkgc291cmNlUG9ydFJhbmdlcz86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNJbmJvdW5kSGVhZGVyU291cmNlUG9ydFJhbmdlc1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXN0aW5hdGlvbl9hZGRyZXNzZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGVzdGluYXRpb25BZGRyZXNzZXMpLFxuICAgIGRlc3RpbmF0aW9uX3BvcnRfcmFuZ2VzOiBjZGt0Zi5saXN0TWFwcGVyKGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNJbmJvdW5kSGVhZGVyRGVzdGluYXRpb25Qb3J0UmFuZ2VzVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGVzdGluYXRpb25Qb3J0UmFuZ2VzKSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgc291cmNlX2FkZHJlc3NlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zb3VyY2VBZGRyZXNzZXMpLFxuICAgIHNvdXJjZV9wb3J0X3JhbmdlczogY2RrdGYubGlzdE1hcHBlcihlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlclNvdXJjZVBvcnRSYW5nZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5zb3VyY2VQb3J0UmFuZ2VzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlckRlc3RpbmF0aW9uUG9ydFJhbmdlcyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNmcm9tIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Zyb219XG4gICovXG4gIHJlYWRvbmx5IGZyb20/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCN0byBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyN0b31cbiAgKi9cbiAgcmVhZG9ubHkgdG8/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJEZXN0aW5hdGlvblBvcnRSYW5nZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJEZXN0aW5hdGlvblBvcnRSYW5nZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZnJvbTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5mcm9tKSxcbiAgICB0bzogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50byksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJTb3VyY2VQb3J0UmFuZ2VzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2Zyb20gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjZnJvbX1cbiAgKi9cbiAgcmVhZG9ubHkgZnJvbT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3RvIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3RvfVxuICAqL1xuICByZWFkb25seSB0bz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlclNvdXJjZVBvcnRSYW5nZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXJTb3VyY2VQb3J0UmFuZ2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZyb206IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZnJvbSksXG4gICAgdG86IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudG8pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c091dGJvdW5kSGVhZGVyIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2Rlc3RpbmF0aW9uX2FkZHJlc3NlcyBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNkZXN0aW5hdGlvbl9hZGRyZXNzZXN9XG4gICovXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uQWRkcmVzc2VzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNkZXN0aW5hdGlvbl9wb3J0X3JhbmdlcyBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNkZXN0aW5hdGlvbl9wb3J0X3Jhbmdlc31cbiAgKi9cbiAgcmVhZG9ubHkgZGVzdGluYXRpb25Qb3J0UmFuZ2VzPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c091dGJvdW5kSGVhZGVyRGVzdGluYXRpb25Qb3J0UmFuZ2VzW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNwcm90b2NvbCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNwcm90b2NvbH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJvdG9jb2w/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNzb3VyY2VfYWRkcmVzc2VzIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3NvdXJjZV9hZGRyZXNzZXN9XG4gICovXG4gIHJlYWRvbmx5IHNvdXJjZUFkZHJlc3Nlcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjc291cmNlX3BvcnRfcmFuZ2VzIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3NvdXJjZV9wb3J0X3Jhbmdlc31cbiAgKi9cbiAgcmVhZG9ubHkgc291cmNlUG9ydFJhbmdlcz86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlclNvdXJjZVBvcnRSYW5nZXNbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlclRvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXN0aW5hdGlvbl9hZGRyZXNzZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGVzdGluYXRpb25BZGRyZXNzZXMpLFxuICAgIGRlc3RpbmF0aW9uX3BvcnRfcmFuZ2VzOiBjZGt0Zi5saXN0TWFwcGVyKGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNPdXRib3VuZEhlYWRlckRlc3RpbmF0aW9uUG9ydFJhbmdlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRlc3RpbmF0aW9uUG9ydFJhbmdlcyksXG4gICAgcHJvdG9jb2w6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvdG9jb2wpLFxuICAgIHNvdXJjZV9hZGRyZXNzZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc291cmNlQWRkcmVzc2VzKSxcbiAgICBzb3VyY2VfcG9ydF9yYW5nZXM6IGNka3RmLmxpc3RNYXBwZXIoZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c091dGJvdW5kSGVhZGVyU291cmNlUG9ydFJhbmdlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNvdXJjZVBvcnRSYW5nZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1JvdXRlVGFibGVSb3V0ZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNkZXN0aW5hdGlvbl9jaWRyIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Rlc3RpbmF0aW9uX2NpZHJ9XG4gICovXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uQ2lkcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2Rlc3RpbmF0aW9uX3ByZWZpeF9saXN0X2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Rlc3RpbmF0aW9uX3ByZWZpeF9saXN0X2lkfVxuICAqL1xuICByZWFkb25seSBkZXN0aW5hdGlvblByZWZpeExpc3RJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2VncmVzc19vbmx5X2ludGVybmV0X2dhdGV3YXlfaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjZWdyZXNzX29ubHlfaW50ZXJuZXRfZ2F0ZXdheV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgZWdyZXNzT25seUludGVybmV0R2F0ZXdheUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjZ2F0ZXdheV9pZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNnYXRld2F5X2lkfVxuICAqL1xuICByZWFkb25seSBnYXRld2F5SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNpbnN0YW5jZV9pZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNpbnN0YW5jZV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgaW5zdGFuY2VJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI25hdF9nYXRld2F5X2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI25hdF9nYXRld2F5X2lkfVxuICAqL1xuICByZWFkb25seSBuYXRHYXRld2F5SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNuZXR3b3JrX2ludGVyZmFjZV9pZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNuZXR3b3JrX2ludGVyZmFjZV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgbmV0d29ya0ludGVyZmFjZUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjb3JpZ2luIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI29yaWdpbn1cbiAgKi9cbiAgcmVhZG9ubHkgb3JpZ2luPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjdHJhbnNpdF9nYXRld2F5X2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3RyYW5zaXRfZ2F0ZXdheV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgdHJhbnNpdEdhdGV3YXlJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3ZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjdnBjX3BlZXJpbmdfY29ubmVjdGlvbl9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgdnBjUGVlcmluZ0Nvbm5lY3Rpb25JZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNSb3V0ZVRhYmxlUm91dGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzUm91dGVUYWJsZVJvdXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRlc3RpbmF0aW9uX2NpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb25DaWRyKSxcbiAgICBkZXN0aW5hdGlvbl9wcmVmaXhfbGlzdF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXN0aW5hdGlvblByZWZpeExpc3RJZCksXG4gICAgZWdyZXNzX29ubHlfaW50ZXJuZXRfZ2F0ZXdheV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lZ3Jlc3NPbmx5SW50ZXJuZXRHYXRld2F5SWQpLFxuICAgIGdhdGV3YXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ2F0ZXdheUlkKSxcbiAgICBpbnN0YW5jZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZUlkKSxcbiAgICBuYXRfZ2F0ZXdheV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYXRHYXRld2F5SWQpLFxuICAgIG5ldHdvcmtfaW50ZXJmYWNlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5ldHdvcmtJbnRlcmZhY2VJZCksXG4gICAgb3JpZ2luOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yaWdpbiksXG4gICAgdHJhbnNpdF9nYXRld2F5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRyYW5zaXRHYXRld2F5SWQpLFxuICAgIHZwY19wZWVyaW5nX2Nvbm5lY3Rpb25faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudnBjUGVlcmluZ0Nvbm5lY3Rpb25JZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzU2VjdXJpdHlHcm91cFJ1bGVQb3J0UmFuZ2Uge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjZnJvbSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNmcm9tfVxuICAqL1xuICByZWFkb25seSBmcm9tPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjdG8gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjdG99XG4gICovXG4gIHJlYWRvbmx5IHRvPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1NlY3VyaXR5R3JvdXBSdWxlUG9ydFJhbmdlVG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1NlY3VyaXR5R3JvdXBSdWxlUG9ydFJhbmdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZyb206IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZnJvbSksXG4gICAgdG86IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudG8pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1NlY3VyaXR5R3JvdXBSdWxlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2NpZHIgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjY2lkcn1cbiAgKi9cbiAgcmVhZG9ubHkgY2lkcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2RpcmVjdGlvbiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNkaXJlY3Rpb259XG4gICovXG4gIHJlYWRvbmx5IGRpcmVjdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3BvcnRfcmFuZ2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjcG9ydF9yYW5nZX1cbiAgKi9cbiAgcmVhZG9ubHkgcG9ydFJhbmdlPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1NlY3VyaXR5R3JvdXBSdWxlUG9ydFJhbmdlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjcHJlZml4X2xpc3RfaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjcHJlZml4X2xpc3RfaWR9XG4gICovXG4gIHJlYWRvbmx5IHByZWZpeExpc3RJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3Byb3RvY29sIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3Byb3RvY29sfVxuICAqL1xuICByZWFkb25seSBwcm90b2NvbD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI3NlY3VyaXR5X2dyb3VwX2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI3NlY3VyaXR5X2dyb3VwX2lkfVxuICAqL1xuICByZWFkb25seSBzZWN1cml0eUdyb3VwSWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzU2VjdXJpdHlHcm91cFJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzU2VjdXJpdHlHcm91cFJ1bGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2lkcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jaWRyKSxcbiAgICBkaXJlY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGlyZWN0aW9uKSxcbiAgICBwb3J0X3JhbmdlOiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzU2VjdXJpdHlHcm91cFJ1bGVQb3J0UmFuZ2VUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnRSYW5nZSksXG4gICAgcHJlZml4X2xpc3RfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZml4TGlzdElkKSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgc2VjdXJpdHlfZ3JvdXBfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VjdXJpdHlHcm91cElkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNTb3VyY2VWcGMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjYXJuIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwjaWQgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1NvdXJjZVZwY1RvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNTb3VyY2VWcGMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1N1Ym5ldCB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNhcm4gRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMjYXJufVxuICAqL1xuICByZWFkb25seSBhcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCNpZCBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzU3VibmV0VG9UZXJyYWZvcm0oc3RydWN0PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1N1Ym5ldCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzVnBjIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2FybiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sI2lkIEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2lkfVxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNWcGNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzVnBjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFjbF9ydWxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNsUnVsZT86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNBY2xSdWxlO1xuICBwdWJsaWMgZ2V0IGFjbFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWNsX3J1bGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhY2xSdWxlKHZhbHVlOiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzQWNsUnVsZSkge1xuICAgIHRoaXMuX2FjbFJ1bGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2xSdWxlKCkge1xuICAgIHRoaXMuX2FjbFJ1bGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjbFJ1bGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNsUnVsZVxuICB9XG5cbiAgLy8gY29tcG9uZW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29tcG9uZW50PzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0NvbXBvbmVudDtcbiAgcHVibGljIGdldCBjb21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29tcG9uZW50JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY29tcG9uZW50KHZhbHVlOiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzQ29tcG9uZW50KSB7XG4gICAgdGhpcy5fY29tcG9uZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29tcG9uZW50KCkge1xuICAgIHRoaXMuX2NvbXBvbmVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tcG9uZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudFxuICB9XG5cbiAgLy8gZGVzdGluYXRpb25fdnBjIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzdGluYXRpb25WcGM/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzRGVzdGluYXRpb25WcGM7XG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25WcGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGVzdGluYXRpb25fdnBjJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzdGluYXRpb25WcGModmFsdWU6IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNEZXN0aW5hdGlvblZwYykge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uVnBjID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzdGluYXRpb25WcGMoKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb25WcGMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uVnBjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uVnBjXG4gIH1cblxuICAvLyBpbmJvdW5kX2hlYWRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luYm91bmRIZWFkZXI/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzSW5ib3VuZEhlYWRlcjtcbiAgcHVibGljIGdldCBpbmJvdW5kSGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2luYm91bmRfaGVhZGVyJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaW5ib3VuZEhlYWRlcih2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXIpIHtcbiAgICB0aGlzLl9pbmJvdW5kSGVhZGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5ib3VuZEhlYWRlcigpIHtcbiAgICB0aGlzLl9pbmJvdW5kSGVhZGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmJvdW5kSGVhZGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luYm91bmRIZWFkZXJcbiAgfVxuXG4gIC8vIG91dGJvdW5kX2hlYWRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX291dGJvdW5kSGVhZGVyPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c091dGJvdW5kSGVhZGVyO1xuICBwdWJsaWMgZ2V0IG91dGJvdW5kSGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ291dGJvdW5kX2hlYWRlcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG91dGJvdW5kSGVhZGVyKHZhbHVlOiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzT3V0Ym91bmRIZWFkZXIpIHtcbiAgICB0aGlzLl9vdXRib3VuZEhlYWRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE91dGJvdW5kSGVhZGVyKCkge1xuICAgIHRoaXMuX291dGJvdW5kSGVhZGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvdXRib3VuZEhlYWRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vdXRib3VuZEhlYWRlclxuICB9XG5cbiAgLy8gcm91dGVfdGFibGVfcm91dGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yb3V0ZVRhYmxlUm91dGU/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzUm91dGVUYWJsZVJvdXRlO1xuICBwdWJsaWMgZ2V0IHJvdXRlVGFibGVSb3V0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyb3V0ZV90YWJsZV9yb3V0ZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvdXRlVGFibGVSb3V0ZSh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1JvdXRlVGFibGVSb3V0ZSkge1xuICAgIHRoaXMuX3JvdXRlVGFibGVSb3V0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJvdXRlVGFibGVSb3V0ZSgpIHtcbiAgICB0aGlzLl9yb3V0ZVRhYmxlUm91dGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvdXRlVGFibGVSb3V0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZVRhYmxlUm91dGVcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X2dyb3VwX3J1bGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZWN1cml0eUdyb3VwUnVsZT86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNTZWN1cml0eUdyb3VwUnVsZTtcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwUnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9ydWxlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlHcm91cFJ1bGUodmFsdWU6IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNTZWN1cml0eUdyb3VwUnVsZSkge1xuICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBSdWxlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VjdXJpdHlHcm91cFJ1bGUoKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cFJ1bGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBSdWxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5R3JvdXBSdWxlXG4gIH1cblxuICAvLyBzZXF1ZW5jZV9udW1iZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXF1ZW5jZU51bWJlcj86IG51bWJlcjtcbiAgcHVibGljIGdldCBzZXF1ZW5jZU51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NlcXVlbmNlX251bWJlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VxdWVuY2VOdW1iZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NlcXVlbmNlTnVtYmVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VxdWVuY2VOdW1iZXIoKSB7XG4gICAgdGhpcy5fc2VxdWVuY2VOdW1iZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcXVlbmNlTnVtYmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcXVlbmNlTnVtYmVyXG4gIH1cblxuICAvLyBzb3VyY2VfdnBjIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc291cmNlVnBjPzogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1NvdXJjZVZwYztcbiAgcHVibGljIGdldCBzb3VyY2VWcGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc291cmNlX3ZwYycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZVZwYyh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1NvdXJjZVZwYykge1xuICAgIHRoaXMuX3NvdXJjZVZwYyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvdXJjZVZwYygpIHtcbiAgICB0aGlzLl9zb3VyY2VWcGMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZVZwY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VWcGNcbiAgfVxuXG4gIC8vIHN1Ym5ldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1Ym5ldD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNTdWJuZXQ7XG4gIHB1YmxpYyBnZXQgc3VibmV0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N1Ym5ldCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Ym5ldCh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1N1Ym5ldCkge1xuICAgIHRoaXMuX3N1Ym5ldCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1Ym5ldCgpIHtcbiAgICB0aGlzLl9zdWJuZXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1Ym5ldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJuZXRcbiAgfVxuXG4gIC8vIHZwYyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZwYz86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNWcGM7XG4gIHB1YmxpYyBnZXQgdnBjKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZwYycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHZwYyh2YWx1ZTogRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1ZwYykge1xuICAgIHRoaXMuX3ZwYyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZwYygpIHtcbiAgICB0aGlzLl92cGMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1RvVGVycmFmb3JtKHN0cnVjdD86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNsX3J1bGU6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNBY2xSdWxlVG9UZXJyYWZvcm0oc3RydWN0IS5hY2xSdWxlKSxcbiAgICBjb21wb25lbnQ6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNDb21wb25lbnRUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBvbmVudCksXG4gICAgZGVzdGluYXRpb25fdnBjOiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzRGVzdGluYXRpb25WcGNUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uVnBjKSxcbiAgICBpbmJvdW5kX2hlYWRlcjogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c0luYm91bmRIZWFkZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmluYm91bmRIZWFkZXIpLFxuICAgIG91dGJvdW5kX2hlYWRlcjogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c091dGJvdW5kSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0IS5vdXRib3VuZEhlYWRlciksXG4gICAgcm91dGVfdGFibGVfcm91dGU6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNSb3V0ZVRhYmxlUm91dGVUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvdXRlVGFibGVSb3V0ZSksXG4gICAgc2VjdXJpdHlfZ3JvdXBfcnVsZTogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1NlY3VyaXR5R3JvdXBSdWxlVG9UZXJyYWZvcm0oc3RydWN0IS5zZWN1cml0eUdyb3VwUnVsZSksXG4gICAgc2VxdWVuY2VfbnVtYmVyOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcXVlbmNlTnVtYmVyKSxcbiAgICBzb3VyY2VfdnBjOiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1JldHVyblBhdGhDb21wb25lbnRzU291cmNlVnBjVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VWcGMpLFxuICAgIHN1Ym5ldDogZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNSZXR1cm5QYXRoQ29tcG9uZW50c1N1Ym5ldFRvVGVycmFmb3JtKHN0cnVjdCEuc3VibmV0KSxcbiAgICB2cGM6IGVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzUmV0dXJuUGF0aENvbXBvbmVudHNWcGNUb1RlcnJhZm9ybShzdHJ1Y3QhLnZwYyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1RhZ3Mge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9yL2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzLmh0bWwja2V5IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzI2tleX1cbiAgKi9cbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCN2YWx1ZSBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpcyN2YWx1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1RhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc1RhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL3IvZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMuaHRtbCBhd3NjY19lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpc31cbiovXG5leHBvcnQgY2xhc3MgRWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXMgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpc1wiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2Mvci9lYzJfbmV0d29ya19pbnNpZ2h0c19hbmFseXNpcy5odG1sIGF3c2NjX2VjMl9uZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0NvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBFYzJOZXR3b3JrSW5zaWdodHNBbmFseXNpc0NvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2NfZWMyX25ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXMnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9maWx0ZXJJbkFybnMgPSBjb25maWcuZmlsdGVySW5Bcm5zO1xuICAgIHRoaXMuX25ldHdvcmtJbnNpZ2h0c1BhdGhJZCA9IGNvbmZpZy5uZXR3b3JrSW5zaWdodHNQYXRoSWQ7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhbHRlcm5hdGVfcGF0aF9oaW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFsdGVybmF0ZVBhdGhIaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhbHRlcm5hdGVfcGF0aF9oaW50cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGV4cGxhbmF0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4cGxhbmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdleHBsYW5hdGlvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBmaWx0ZXJfaW5fYXJucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpbHRlckluQXJucz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IGZpbHRlckluQXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdmaWx0ZXJfaW5fYXJucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmlsdGVySW5Bcm5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2ZpbHRlckluQXJucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpbHRlckluQXJucygpIHtcbiAgICB0aGlzLl9maWx0ZXJJbkFybnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbHRlckluQXJuc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJJbkFybnNcbiAgfVxuXG4gIC8vIGZvcndhcmRfcGF0aF9jb21wb25lbnRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZm9yd2FyZFBhdGhDb21wb25lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ZvcndhcmRfcGF0aF9jb21wb25lbnRzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuZXR3b3JrX2luc2lnaHRzX2FuYWx5c2lzX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmV0d29ya19pbnNpZ2h0c19hbmFseXNpc19hcm4nKTtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfaW5zaWdodHNfYW5hbHlzaXNfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuZXR3b3JrSW5zaWdodHNBbmFseXNpc0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmV0d29ya19pbnNpZ2h0c19hbmFseXNpc19pZCcpO1xuICB9XG5cbiAgLy8gbmV0d29ya19pbnNpZ2h0c19wYXRoX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25ldHdvcmtJbnNpZ2h0c1BhdGhJZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5ldHdvcmtJbnNpZ2h0c1BhdGhJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25ldHdvcmtfaW5zaWdodHNfcGF0aF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmV0d29ya0luc2lnaHRzUGF0aElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uZXR3b3JrSW5zaWdodHNQYXRoSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV0d29ya0luc2lnaHRzUGF0aElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25ldHdvcmtJbnNpZ2h0c1BhdGhJZFxuICB9XG5cbiAgLy8gbmV0d29ya19wYXRoX2ZvdW5kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmV0d29ya1BhdGhGb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCduZXR3b3JrX3BhdGhfZm91bmQnKTtcbiAgfVxuXG4gIC8vIHJldHVybl9wYXRoX2NvbXBvbmVudHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXR1cm5QYXRoQ29tcG9uZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXR1cm5fcGF0aF9jb21wb25lbnRzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3RhcnRfZGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXJ0RGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXJ0X2RhdGUnKTtcbiAgfVxuXG4gIC8vIHN0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1cycpO1xuICB9XG5cbiAgLy8gc3RhdHVzX21lc3NhZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0dXNNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzX21lc3NhZ2UnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzVGFnc1tdO1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IEVjMk5ldHdvcmtJbnNpZ2h0c0FuYWx5c2lzVGFnc1tdICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBmaWx0ZXJfaW5fYXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fZmlsdGVySW5Bcm5zKSxcbiAgICAgIG5ldHdvcmtfaW5zaWdodHNfcGF0aF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmV0d29ya0luc2lnaHRzUGF0aElkKSxcbiAgICAgIHRhZ3M6IGNka3RmLmxpc3RNYXBwZXIoZWMyTmV0d29ya0luc2lnaHRzQW5hbHlzaXNUYWdzVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==