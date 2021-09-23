// https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_analysis.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEc2NetworkInsightsAnalysisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_analysis.html#id DataAwsccEc2NetworkInsightsAnalysis#id}
  */
  readonly id: string;
}
export class DataAwsccEc2NetworkInsightsAnalysisAlternatePathHints extends cdktf.ComplexComputedList {

  // component_arn - computed: true, optional: false, required: false
  public get componentArn() {
    return this.getStringAttribute('component_arn');
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisAlternatePathHintsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisAlternatePathHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    component_arn: cdktf.stringToTerraform(struct!.componentArn),
    component_id: cdktf.stringToTerraform(struct!.componentId),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsAcl extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsAclToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsAcl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRange extends cdktf.ComplexComputedList {

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRule extends cdktf.ComplexComputedList {

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // egress - computed: true, optional: false, required: false
  public get egress() {
    return this.getBooleanAttribute('egress');
  }

  // port_range - computed: true, optional: false, required: false
  public get portRange() {
    return this.interpolationForAttribute('port_range') as any;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // rule_action - computed: true, optional: false, required: false
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }

  // rule_number - computed: true, optional: false, required: false
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    egress: cdktf.booleanToTerraform(struct!.egress),
    port_range: dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rule_action: cdktf.stringToTerraform(struct!.ruleAction),
    rule_number: cdktf.numberToTerraform(struct!.ruleNumber),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedTo extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedToToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener extends cdktf.ComplexComputedList {

  // instance_port - computed: true, optional: false, required: false
  public get instancePort() {
    return this.getNumberAttribute('instance_port');
  }

  // load_balancer_port - computed: true, optional: false, required: false
  public get loadBalancerPort() {
    return this.getNumberAttribute('load_balancer_port');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_port: cdktf.numberToTerraform(struct!.instancePort),
    load_balancer_port: cdktf.numberToTerraform(struct!.loadBalancerPort),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsComponent extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsComponentToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsComponent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGateway extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsDestination extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpc extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTable extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGateway extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTarget extends cdktf.ComplexComputedList {

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // instance - computed: true, optional: false, required: false
  public get instance() {
    return this.interpolationForAttribute('instance') as any;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    instance: dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform(struct!.instance),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsNatGateway extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsNatGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterface extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRanges extends cdktf.ComplexComputedList {

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsPortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixList extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTable extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRoute extends cdktf.ComplexComputedList {

  // destination_cidr - computed: true, optional: false, required: false
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }

  // destination_prefix_list_id - computed: true, optional: false, required: false
  public get destinationPrefixListId() {
    return this.getStringAttribute('destination_prefix_list_id');
  }

  // egress_only_internet_gateway_id - computed: true, optional: false, required: false
  public get egressOnlyInternetGatewayId() {
    return this.getStringAttribute('egress_only_internet_gateway_id');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // nat_gateway_id - computed: true, optional: false, required: false
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // vpc_peering_connection_id - computed: true, optional: false, required: false
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_cidr: cdktf.stringToTerraform(struct!.destinationCidr),
    destination_prefix_list_id: cdktf.stringToTerraform(struct!.destinationPrefixListId),
    egress_only_internet_gateway_id: cdktf.stringToTerraform(struct!.egressOnlyInternetGatewayId),
    gateway_id: cdktf.stringToTerraform(struct!.gatewayId),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    nat_gateway_id: cdktf.stringToTerraform(struct!.natGatewayId),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    origin: cdktf.stringToTerraform(struct!.origin),
    transit_gateway_id: cdktf.stringToTerraform(struct!.transitGatewayId),
    vpc_peering_connection_id: cdktf.stringToTerraform(struct!.vpcPeeringConnectionId),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroup extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange extends cdktf.ComplexComputedList {

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule extends cdktf.ComplexComputedList {

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // port_range - computed: true, optional: false, required: false
  public get portRange() {
    return this.interpolationForAttribute('port_range') as any;
  }

  // prefix_list_id - computed: true, optional: false, required: false
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    direction: cdktf.stringToTerraform(struct!.direction),
    port_range: dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform(struct!.portRange),
    prefix_list_id: cdktf.stringToTerraform(struct!.prefixListId),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroups extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpc extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnet extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpc extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpoint extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnection extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGateway extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanations extends cdktf.ComplexComputedList {

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.interpolationForAttribute('acl') as any;
  }

  // acl_rule - computed: true, optional: false, required: false
  public get aclRule() {
    return this.interpolationForAttribute('acl_rule') as any;
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // addresses - computed: true, optional: false, required: false
  public get addresses() {
    return this.getListAttribute('addresses');
  }

  // attached_to - computed: true, optional: false, required: false
  public get attachedTo() {
    return this.interpolationForAttribute('attached_to') as any;
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // cidrs - computed: true, optional: false, required: false
  public get cidrs() {
    return this.getListAttribute('cidrs');
  }

  // classic_load_balancer_listener - computed: true, optional: false, required: false
  public get classicLoadBalancerListener() {
    return this.interpolationForAttribute('classic_load_balancer_listener') as any;
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.interpolationForAttribute('component') as any;
  }

  // customer_gateway - computed: true, optional: false, required: false
  public get customerGateway() {
    return this.interpolationForAttribute('customer_gateway') as any;
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.interpolationForAttribute('destination') as any;
  }

  // destination_vpc - computed: true, optional: false, required: false
  public get destinationVpc() {
    return this.interpolationForAttribute('destination_vpc') as any;
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // elastic_load_balancer_listener - computed: true, optional: false, required: false
  public get elasticLoadBalancerListener() {
    return this.interpolationForAttribute('elastic_load_balancer_listener') as any;
  }

  // explanation_code - computed: true, optional: false, required: false
  public get explanationCode() {
    return this.getStringAttribute('explanation_code');
  }

  // ingress_route_table - computed: true, optional: false, required: false
  public get ingressRouteTable() {
    return this.interpolationForAttribute('ingress_route_table') as any;
  }

  // internet_gateway - computed: true, optional: false, required: false
  public get internetGateway() {
    return this.interpolationForAttribute('internet_gateway') as any;
  }

  // load_balancer_arn - computed: true, optional: false, required: false
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }

  // load_balancer_listener_port - computed: true, optional: false, required: false
  public get loadBalancerListenerPort() {
    return this.getNumberAttribute('load_balancer_listener_port');
  }

  // load_balancer_target - computed: true, optional: false, required: false
  public get loadBalancerTarget() {
    return this.interpolationForAttribute('load_balancer_target') as any;
  }

  // load_balancer_target_group - computed: true, optional: false, required: false
  public get loadBalancerTargetGroup() {
    return this.interpolationForAttribute('load_balancer_target_group') as any;
  }

  // load_balancer_target_groups - computed: true, optional: false, required: false
  public get loadBalancerTargetGroups() {
    return this.interpolationForAttribute('load_balancer_target_groups') as any;
  }

  // load_balancer_target_port - computed: true, optional: false, required: false
  public get loadBalancerTargetPort() {
    return this.getNumberAttribute('load_balancer_target_port');
  }

  // missing_component - computed: true, optional: false, required: false
  public get missingComponent() {
    return this.getStringAttribute('missing_component');
  }

  // nat_gateway - computed: true, optional: false, required: false
  public get natGateway() {
    return this.interpolationForAttribute('nat_gateway') as any;
  }

  // network_interface - computed: true, optional: false, required: false
  public get networkInterface() {
    return this.interpolationForAttribute('network_interface') as any;
  }

  // packet_field - computed: true, optional: false, required: false
  public get packetField() {
    return this.getStringAttribute('packet_field');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_ranges - computed: true, optional: false, required: false
  public get portRanges() {
    return this.interpolationForAttribute('port_ranges') as any;
  }

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.interpolationForAttribute('prefix_list') as any;
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getListAttribute('protocols');
  }

  // route_table - computed: true, optional: false, required: false
  public get routeTable() {
    return this.interpolationForAttribute('route_table') as any;
  }

  // route_table_route - computed: true, optional: false, required: false
  public get routeTableRoute() {
    return this.interpolationForAttribute('route_table_route') as any;
  }

  // security_group - computed: true, optional: false, required: false
  public get securityGroup() {
    return this.interpolationForAttribute('security_group') as any;
  }

  // security_group_rule - computed: true, optional: false, required: false
  public get securityGroupRule() {
    return this.interpolationForAttribute('security_group_rule') as any;
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.interpolationForAttribute('security_groups') as any;
  }

  // source_vpc - computed: true, optional: false, required: false
  public get sourceVpc() {
    return this.interpolationForAttribute('source_vpc') as any;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.interpolationForAttribute('subnet') as any;
  }

  // subnet_route_table - computed: true, optional: false, required: false
  public get subnetRouteTable() {
    return this.interpolationForAttribute('subnet_route_table') as any;
  }

  // vpc - computed: true, optional: false, required: false
  public get vpc() {
    return this.interpolationForAttribute('vpc') as any;
  }

  // vpc_endpoint - computed: true, optional: false, required: false
  public get vpcEndpoint() {
    return this.interpolationForAttribute('vpc_endpoint') as any;
  }

  // vpc_peering_connection - computed: true, optional: false, required: false
  public get vpcPeeringConnection() {
    return this.interpolationForAttribute('vpc_peering_connection') as any;
  }

  // vpn_connection - computed: true, optional: false, required: false
  public get vpnConnection() {
    return this.interpolationForAttribute('vpn_connection') as any;
  }

  // vpn_gateway - computed: true, optional: false, required: false
  public get vpnGateway() {
    return this.interpolationForAttribute('vpn_gateway') as any;
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acl: dataAwsccEc2NetworkInsightsAnalysisExplanationsAclToTerraform(struct!.acl),
    acl_rule: dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRuleToTerraform(struct!.aclRule),
    address: cdktf.stringToTerraform(struct!.address),
    addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.addresses),
    attached_to: dataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedToToTerraform(struct!.attachedTo),
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(struct!.availabilityZones),
    cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrs),
    classic_load_balancer_listener: dataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform(struct!.classicLoadBalancerListener),
    component: dataAwsccEc2NetworkInsightsAnalysisExplanationsComponentToTerraform(struct!.component),
    customer_gateway: dataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform(struct!.customerGateway),
    destination: dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationToTerraform(struct!.destination),
    destination_vpc: dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform(struct!.destinationVpc),
    direction: cdktf.stringToTerraform(struct!.direction),
    elastic_load_balancer_listener: dataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform(struct!.elasticLoadBalancerListener),
    explanation_code: cdktf.stringToTerraform(struct!.explanationCode),
    ingress_route_table: dataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform(struct!.ingressRouteTable),
    internet_gateway: dataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform(struct!.internetGateway),
    load_balancer_arn: cdktf.stringToTerraform(struct!.loadBalancerArn),
    load_balancer_listener_port: cdktf.numberToTerraform(struct!.loadBalancerListenerPort),
    load_balancer_target: dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform(struct!.loadBalancerTarget),
    load_balancer_target_group: dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform(struct!.loadBalancerTargetGroup),
    load_balancer_target_groups: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform)(struct!.loadBalancerTargetGroups),
    load_balancer_target_port: cdktf.numberToTerraform(struct!.loadBalancerTargetPort),
    missing_component: cdktf.stringToTerraform(struct!.missingComponent),
    nat_gateway: dataAwsccEc2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform(struct!.natGateway),
    network_interface: dataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform(struct!.networkInterface),
    packet_field: cdktf.stringToTerraform(struct!.packetField),
    port: cdktf.numberToTerraform(struct!.port),
    port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisExplanationsPortRangesToTerraform)(struct!.portRanges),
    prefix_list: dataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListToTerraform(struct!.prefixList),
    protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.protocols),
    route_table: dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableToTerraform(struct!.routeTable),
    route_table_route: dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform(struct!.routeTableRoute),
    security_group: dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform(struct!.securityGroup),
    security_group_rule: dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform(struct!.securityGroupRule),
    security_groups: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform)(struct!.securityGroups),
    source_vpc: dataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform(struct!.sourceVpc),
    state: cdktf.stringToTerraform(struct!.state),
    subnet: dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetToTerraform(struct!.subnet),
    subnet_route_table: dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform(struct!.subnetRouteTable),
    vpc: dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcToTerraform(struct!.vpc),
    vpc_endpoint: dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform(struct!.vpcEndpoint),
    vpc_peering_connection: dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform(struct!.vpcPeeringConnection),
    vpn_connection: dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform(struct!.vpnConnection),
    vpn_gateway: dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform(struct!.vpnGateway),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange extends cdktf.ComplexComputedList {

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRule extends cdktf.ComplexComputedList {

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // egress - computed: true, optional: false, required: false
  public get egress() {
    return this.getBooleanAttribute('egress');
  }

  // port_range - computed: true, optional: false, required: false
  public get portRange() {
    return this.interpolationForAttribute('port_range') as any;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // rule_action - computed: true, optional: false, required: false
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }

  // rule_number - computed: true, optional: false, required: false
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    egress: cdktf.booleanToTerraform(struct!.egress),
    port_range: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rule_action: cdktf.stringToTerraform(struct!.ruleAction),
    rule_number: cdktf.numberToTerraform(struct!.ruleNumber),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponent extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges extends cdktf.ComplexComputedList {

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges extends cdktf.ComplexComputedList {

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader extends cdktf.ComplexComputedList {

  // destination_addresses - computed: true, optional: false, required: false
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }

  // destination_port_ranges - computed: true, optional: false, required: false
  public get destinationPortRanges() {
    return this.interpolationForAttribute('destination_port_ranges') as any;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_addresses - computed: true, optional: false, required: false
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }

  // source_port_ranges - computed: true, optional: false, required: false
  public get sourcePortRanges() {
    return this.interpolationForAttribute('source_port_ranges') as any;
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationAddresses),
    destination_port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform)(struct!.destinationPortRanges),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform)(struct!.sourcePortRanges),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges extends cdktf.ComplexComputedList {

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges extends cdktf.ComplexComputedList {

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader extends cdktf.ComplexComputedList {

  // destination_addresses - computed: true, optional: false, required: false
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }

  // destination_port_ranges - computed: true, optional: false, required: false
  public get destinationPortRanges() {
    return this.interpolationForAttribute('destination_port_ranges') as any;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_addresses - computed: true, optional: false, required: false
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }

  // source_port_ranges - computed: true, optional: false, required: false
  public get sourcePortRanges() {
    return this.interpolationForAttribute('source_port_ranges') as any;
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationAddresses),
    destination_port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform)(struct!.destinationPortRanges),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform)(struct!.sourcePortRanges),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute extends cdktf.ComplexComputedList {

  // destination_cidr - computed: true, optional: false, required: false
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }

  // destination_prefix_list_id - computed: true, optional: false, required: false
  public get destinationPrefixListId() {
    return this.getStringAttribute('destination_prefix_list_id');
  }

  // egress_only_internet_gateway_id - computed: true, optional: false, required: false
  public get egressOnlyInternetGatewayId() {
    return this.getStringAttribute('egress_only_internet_gateway_id');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // nat_gateway_id - computed: true, optional: false, required: false
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // vpc_peering_connection_id - computed: true, optional: false, required: false
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_cidr: cdktf.stringToTerraform(struct!.destinationCidr),
    destination_prefix_list_id: cdktf.stringToTerraform(struct!.destinationPrefixListId),
    egress_only_internet_gateway_id: cdktf.stringToTerraform(struct!.egressOnlyInternetGatewayId),
    gateway_id: cdktf.stringToTerraform(struct!.gatewayId),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    nat_gateway_id: cdktf.stringToTerraform(struct!.natGatewayId),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    origin: cdktf.stringToTerraform(struct!.origin),
    transit_gateway_id: cdktf.stringToTerraform(struct!.transitGatewayId),
    vpc_peering_connection_id: cdktf.stringToTerraform(struct!.vpcPeeringConnectionId),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange extends cdktf.ComplexComputedList {

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule extends cdktf.ComplexComputedList {

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // port_range - computed: true, optional: false, required: false
  public get portRange() {
    return this.interpolationForAttribute('port_range') as any;
  }

  // prefix_list_id - computed: true, optional: false, required: false
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    direction: cdktf.stringToTerraform(struct!.direction),
    port_range: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform(struct!.portRange),
    prefix_list_id: cdktf.stringToTerraform(struct!.prefixListId),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnet extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpc extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponents extends cdktf.ComplexComputedList {

  // acl_rule - computed: true, optional: false, required: false
  public get aclRule() {
    return this.interpolationForAttribute('acl_rule') as any;
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.interpolationForAttribute('component') as any;
  }

  // destination_vpc - computed: true, optional: false, required: false
  public get destinationVpc() {
    return this.interpolationForAttribute('destination_vpc') as any;
  }

  // inbound_header - computed: true, optional: false, required: false
  public get inboundHeader() {
    return this.interpolationForAttribute('inbound_header') as any;
  }

  // outbound_header - computed: true, optional: false, required: false
  public get outboundHeader() {
    return this.interpolationForAttribute('outbound_header') as any;
  }

  // route_table_route - computed: true, optional: false, required: false
  public get routeTableRoute() {
    return this.interpolationForAttribute('route_table_route') as any;
  }

  // security_group_rule - computed: true, optional: false, required: false
  public get securityGroupRule() {
    return this.interpolationForAttribute('security_group_rule') as any;
  }

  // sequence_number - computed: true, optional: false, required: false
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }

  // source_vpc - computed: true, optional: false, required: false
  public get sourceVpc() {
    return this.interpolationForAttribute('source_vpc') as any;
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.interpolationForAttribute('subnet') as any;
  }

  // vpc - computed: true, optional: false, required: false
  public get vpc() {
    return this.interpolationForAttribute('vpc') as any;
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acl_rule: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform(struct!.aclRule),
    component: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform(struct!.component),
    destination_vpc: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform(struct!.destinationVpc),
    inbound_header: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform(struct!.inboundHeader),
    outbound_header: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform(struct!.outboundHeader),
    route_table_route: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform(struct!.routeTableRoute),
    security_group_rule: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform(struct!.securityGroupRule),
    sequence_number: cdktf.numberToTerraform(struct!.sequenceNumber),
    source_vpc: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform(struct!.sourceVpc),
    subnet: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform(struct!.subnet),
    vpc: dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform(struct!.vpc),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange extends cdktf.ComplexComputedList {

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRule extends cdktf.ComplexComputedList {

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // egress - computed: true, optional: false, required: false
  public get egress() {
    return this.getBooleanAttribute('egress');
  }

  // port_range - computed: true, optional: false, required: false
  public get portRange() {
    return this.interpolationForAttribute('port_range') as any;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // rule_action - computed: true, optional: false, required: false
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }

  // rule_number - computed: true, optional: false, required: false
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    egress: cdktf.booleanToTerraform(struct!.egress),
    port_range: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rule_action: cdktf.stringToTerraform(struct!.ruleAction),
    rule_number: cdktf.numberToTerraform(struct!.ruleNumber),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponent extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges extends cdktf.ComplexComputedList {

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges extends cdktf.ComplexComputedList {

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader extends cdktf.ComplexComputedList {

  // destination_addresses - computed: true, optional: false, required: false
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }

  // destination_port_ranges - computed: true, optional: false, required: false
  public get destinationPortRanges() {
    return this.interpolationForAttribute('destination_port_ranges') as any;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_addresses - computed: true, optional: false, required: false
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }

  // source_port_ranges - computed: true, optional: false, required: false
  public get sourcePortRanges() {
    return this.interpolationForAttribute('source_port_ranges') as any;
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationAddresses),
    destination_port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform)(struct!.destinationPortRanges),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform)(struct!.sourcePortRanges),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges extends cdktf.ComplexComputedList {

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges extends cdktf.ComplexComputedList {

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader extends cdktf.ComplexComputedList {

  // destination_addresses - computed: true, optional: false, required: false
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }

  // destination_port_ranges - computed: true, optional: false, required: false
  public get destinationPortRanges() {
    return this.interpolationForAttribute('destination_port_ranges') as any;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_addresses - computed: true, optional: false, required: false
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }

  // source_port_ranges - computed: true, optional: false, required: false
  public get sourcePortRanges() {
    return this.interpolationForAttribute('source_port_ranges') as any;
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationAddresses),
    destination_port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform)(struct!.destinationPortRanges),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_port_ranges: cdktf.listMapper(dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform)(struct!.sourcePortRanges),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute extends cdktf.ComplexComputedList {

  // destination_cidr - computed: true, optional: false, required: false
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }

  // destination_prefix_list_id - computed: true, optional: false, required: false
  public get destinationPrefixListId() {
    return this.getStringAttribute('destination_prefix_list_id');
  }

  // egress_only_internet_gateway_id - computed: true, optional: false, required: false
  public get egressOnlyInternetGatewayId() {
    return this.getStringAttribute('egress_only_internet_gateway_id');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // nat_gateway_id - computed: true, optional: false, required: false
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // vpc_peering_connection_id - computed: true, optional: false, required: false
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_cidr: cdktf.stringToTerraform(struct!.destinationCidr),
    destination_prefix_list_id: cdktf.stringToTerraform(struct!.destinationPrefixListId),
    egress_only_internet_gateway_id: cdktf.stringToTerraform(struct!.egressOnlyInternetGatewayId),
    gateway_id: cdktf.stringToTerraform(struct!.gatewayId),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    nat_gateway_id: cdktf.stringToTerraform(struct!.natGatewayId),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    origin: cdktf.stringToTerraform(struct!.origin),
    transit_gateway_id: cdktf.stringToTerraform(struct!.transitGatewayId),
    vpc_peering_connection_id: cdktf.stringToTerraform(struct!.vpcPeeringConnectionId),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange extends cdktf.ComplexComputedList {

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule extends cdktf.ComplexComputedList {

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // port_range - computed: true, optional: false, required: false
  public get portRange() {
    return this.interpolationForAttribute('port_range') as any;
  }

  // prefix_list_id - computed: true, optional: false, required: false
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    direction: cdktf.stringToTerraform(struct!.direction),
    port_range: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform(struct!.portRange),
    prefix_list_id: cdktf.stringToTerraform(struct!.prefixListId),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnet extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpc extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponents extends cdktf.ComplexComputedList {

  // acl_rule - computed: true, optional: false, required: false
  public get aclRule() {
    return this.interpolationForAttribute('acl_rule') as any;
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.interpolationForAttribute('component') as any;
  }

  // destination_vpc - computed: true, optional: false, required: false
  public get destinationVpc() {
    return this.interpolationForAttribute('destination_vpc') as any;
  }

  // inbound_header - computed: true, optional: false, required: false
  public get inboundHeader() {
    return this.interpolationForAttribute('inbound_header') as any;
  }

  // outbound_header - computed: true, optional: false, required: false
  public get outboundHeader() {
    return this.interpolationForAttribute('outbound_header') as any;
  }

  // route_table_route - computed: true, optional: false, required: false
  public get routeTableRoute() {
    return this.interpolationForAttribute('route_table_route') as any;
  }

  // security_group_rule - computed: true, optional: false, required: false
  public get securityGroupRule() {
    return this.interpolationForAttribute('security_group_rule') as any;
  }

  // sequence_number - computed: true, optional: false, required: false
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }

  // source_vpc - computed: true, optional: false, required: false
  public get sourceVpc() {
    return this.interpolationForAttribute('source_vpc') as any;
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.interpolationForAttribute('subnet') as any;
  }

  // vpc - computed: true, optional: false, required: false
  public get vpc() {
    return this.interpolationForAttribute('vpc') as any;
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acl_rule: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform(struct!.aclRule),
    component: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform(struct!.component),
    destination_vpc: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform(struct!.destinationVpc),
    inbound_header: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform(struct!.inboundHeader),
    outbound_header: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform(struct!.outboundHeader),
    route_table_route: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform(struct!.routeTableRoute),
    security_group_rule: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform(struct!.securityGroupRule),
    sequence_number: cdktf.numberToTerraform(struct!.sequenceNumber),
    source_vpc: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform(struct!.sourceVpc),
    subnet: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform(struct!.subnet),
    vpc: dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform(struct!.vpc),
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEc2NetworkInsightsAnalysisTagsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_analysis.html awscc_ec2_network_insights_analysis}
*/
export class DataAwsccEc2NetworkInsightsAnalysis extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_network_insights_analysis";

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
  public constructor(scope: Construct, id: string, config: DataAwsccEc2NetworkInsightsAnalysisConfig) {
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
  public get alternatePathHints() {
    return this.interpolationForAttribute('alternate_path_hints') as any;
  }

  // explanations - computed: true, optional: false, required: false
  public get explanations() {
    return this.interpolationForAttribute('explanations') as any;
  }

  // filter_in_arns - computed: true, optional: false, required: false
  public get filterInArns() {
    return this.getListAttribute('filter_in_arns');
  }

  // forward_path_components - computed: true, optional: false, required: false
  public get forwardPathComponents() {
    return this.interpolationForAttribute('forward_path_components') as any;
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

  // network_insights_analysis_arn - computed: true, optional: false, required: false
  public get networkInsightsAnalysisArn() {
    return this.getStringAttribute('network_insights_analysis_arn');
  }

  // network_insights_analysis_id - computed: true, optional: false, required: false
  public get networkInsightsAnalysisId() {
    return this.getStringAttribute('network_insights_analysis_id');
  }

  // network_insights_path_id - computed: true, optional: false, required: false
  public get networkInsightsPathId() {
    return this.getStringAttribute('network_insights_path_id');
  }

  // network_path_found - computed: true, optional: false, required: false
  public get networkPathFound() {
    return this.getBooleanAttribute('network_path_found');
  }

  // return_path_components - computed: true, optional: false, required: false
  public get returnPathComponents() {
    return this.interpolationForAttribute('return_path_components') as any;
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
