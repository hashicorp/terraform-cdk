// https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2NetworkInsightsAnalysisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#filter_in_arns Ec2NetworkInsightsAnalysis#filter_in_arns}
  */
  readonly filterInArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#network_insights_path_id Ec2NetworkInsightsAnalysis#network_insights_path_id}
  */
  readonly networkInsightsPathId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#tags Ec2NetworkInsightsAnalysis#tags}
  */
  readonly tags?: Ec2NetworkInsightsAnalysisTags[];
}
export class Ec2NetworkInsightsAnalysisAlternatePathHints extends cdktf.ComplexComputedList {

  // component_arn - computed: true, optional: true, required: false
  private _componentArn?: string;
  public get componentArn() {
    return this.getStringAttribute('component_arn');
  }
  public set componentArn(value: string) {
    this._componentArn = value;
  }
  public resetComponentArn() {
    this._componentArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentArnInput() {
    return this._componentArn
  }

  // component_id - computed: true, optional: true, required: false
  private _componentId?: string;
  public get componentId() {
    return this.getStringAttribute('component_id');
  }
  public set componentId(value: string) {
    this._componentId = value;
  }
  public resetComponentId() {
    this._componentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentIdInput() {
    return this._componentId
  }
}

export function ec2NetworkInsightsAnalysisAlternatePathHintsToTerraform(struct?: Ec2NetworkInsightsAnalysisAlternatePathHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    component_arn: cdktf.stringToTerraform(struct!.componentArn),
    component_id: cdktf.stringToTerraform(struct!.componentId),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsAcl {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsAclToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsAcl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsAclRulePortRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#from Ec2NetworkInsightsAnalysis#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#to Ec2NetworkInsightsAnalysis#to}
  */
  readonly to?: number;
}

export function ec2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsAclRulePortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsAclRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#cidr Ec2NetworkInsightsAnalysis#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#egress Ec2NetworkInsightsAnalysis#egress}
  */
  readonly egress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#port_range Ec2NetworkInsightsAnalysis#port_range}
  */
  readonly portRange?: Ec2NetworkInsightsAnalysisExplanationsAclRulePortRange;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#protocol Ec2NetworkInsightsAnalysis#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#rule_action Ec2NetworkInsightsAnalysis#rule_action}
  */
  readonly ruleAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#rule_number Ec2NetworkInsightsAnalysis#rule_number}
  */
  readonly ruleNumber?: number;
}

export function ec2NetworkInsightsAnalysisExplanationsAclRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsAclRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    egress: cdktf.booleanToTerraform(struct!.egress),
    port_range: ec2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rule_action: cdktf.stringToTerraform(struct!.ruleAction),
    rule_number: cdktf.numberToTerraform(struct!.ruleNumber),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsAttachedTo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsAttachedToToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsAttachedTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#instance_port Ec2NetworkInsightsAnalysis#instance_port}
  */
  readonly instancePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#load_balancer_port Ec2NetworkInsightsAnalysis#load_balancer_port}
  */
  readonly loadBalancerPort?: number;
}

export function ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_port: cdktf.numberToTerraform(struct!.instancePort),
    load_balancer_port: cdktf.numberToTerraform(struct!.loadBalancerPort),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsComponent {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsComponentToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsComponent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsCustomerGateway {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsCustomerGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsDestinationToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsDestinationVpc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsDestinationVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsIngressRouteTable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsIngressRouteTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsInternetGateway {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsInternetGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#address Ec2NetworkInsightsAnalysis#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#availability_zone Ec2NetworkInsightsAnalysis#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#instance Ec2NetworkInsightsAnalysis#instance}
  */
  readonly instance?: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#port Ec2NetworkInsightsAnalysis#port}
  */
  readonly port?: number;
}

export function ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    instance: ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform(struct!.instance),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsNatGateway {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsNatGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsPortRanges {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#from Ec2NetworkInsightsAnalysis#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#to Ec2NetworkInsightsAnalysis#to}
  */
  readonly to?: number;
}

export function ec2NetworkInsightsAnalysisExplanationsPortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsPortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsPrefixList {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsPrefixListToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsPrefixList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsRouteTable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsRouteTableToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsRouteTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsRouteTableRoute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#destination_cidr Ec2NetworkInsightsAnalysis#destination_cidr}
  */
  readonly destinationCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#destination_prefix_list_id Ec2NetworkInsightsAnalysis#destination_prefix_list_id}
  */
  readonly destinationPrefixListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#egress_only_internet_gateway_id Ec2NetworkInsightsAnalysis#egress_only_internet_gateway_id}
  */
  readonly egressOnlyInternetGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#gateway_id Ec2NetworkInsightsAnalysis#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#instance_id Ec2NetworkInsightsAnalysis#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#nat_gateway_id Ec2NetworkInsightsAnalysis#nat_gateway_id}
  */
  readonly natGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#network_interface_id Ec2NetworkInsightsAnalysis#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#origin Ec2NetworkInsightsAnalysis#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#transit_gateway_id Ec2NetworkInsightsAnalysis#transit_gateway_id}
  */
  readonly transitGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#vpc_peering_connection_id Ec2NetworkInsightsAnalysis#vpc_peering_connection_id}
  */
  readonly vpcPeeringConnectionId?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsRouteTableRoute): any {
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

export interface Ec2NetworkInsightsAnalysisExplanationsSecurityGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#from Ec2NetworkInsightsAnalysis#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#to Ec2NetworkInsightsAnalysis#to}
  */
  readonly to?: number;
}

export function ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#cidr Ec2NetworkInsightsAnalysis#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#direction Ec2NetworkInsightsAnalysis#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#port_range Ec2NetworkInsightsAnalysis#port_range}
  */
  readonly portRange?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#prefix_list_id Ec2NetworkInsightsAnalysis#prefix_list_id}
  */
  readonly prefixListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#protocol Ec2NetworkInsightsAnalysis#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#security_group_id Ec2NetworkInsightsAnalysis#security_group_id}
  */
  readonly securityGroupId?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    direction: cdktf.stringToTerraform(struct!.direction),
    port_range: ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform(struct!.portRange),
    prefix_list_id: cdktf.stringToTerraform(struct!.prefixListId),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsSecurityGroups {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsSourceVpc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSourceVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsSubnet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsSubnetToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSubnet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsVpc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsVpcEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpcEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsVpnConnection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpnConnection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisExplanationsVpnGateway {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpnGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class Ec2NetworkInsightsAnalysisExplanations extends cdktf.ComplexComputedList {

  // acl - computed: true, optional: true, required: false
  private _acl?: Ec2NetworkInsightsAnalysisExplanationsAcl;
  public get acl() {
    return this.interpolationForAttribute('acl') as any;
  }
  public set acl(value: Ec2NetworkInsightsAnalysisExplanationsAcl) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl
  }

  // acl_rule - computed: true, optional: true, required: false
  private _aclRule?: Ec2NetworkInsightsAnalysisExplanationsAclRule;
  public get aclRule() {
    return this.interpolationForAttribute('acl_rule') as any;
  }
  public set aclRule(value: Ec2NetworkInsightsAnalysisExplanationsAclRule) {
    this._aclRule = value;
  }
  public resetAclRule() {
    this._aclRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclRuleInput() {
    return this._aclRule
  }

  // address - computed: true, optional: true, required: false
  private _address?: string;
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address
  }

  // addresses - computed: true, optional: true, required: false
  private _addresses?: string[];
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses
  }

  // attached_to - computed: true, optional: true, required: false
  private _attachedTo?: Ec2NetworkInsightsAnalysisExplanationsAttachedTo;
  public get attachedTo() {
    return this.interpolationForAttribute('attached_to') as any;
  }
  public set attachedTo(value: Ec2NetworkInsightsAnalysisExplanationsAttachedTo) {
    this._attachedTo = value;
  }
  public resetAttachedTo() {
    this._attachedTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedToInput() {
    return this._attachedTo
  }

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones
  }

  // cidrs - computed: true, optional: true, required: false
  private _cidrs?: string[];
  public get cidrs() {
    return this.getListAttribute('cidrs');
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  public resetCidrs() {
    this._cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs
  }

  // classic_load_balancer_listener - computed: true, optional: true, required: false
  private _classicLoadBalancerListener?: Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener;
  public get classicLoadBalancerListener() {
    return this.interpolationForAttribute('classic_load_balancer_listener') as any;
  }
  public set classicLoadBalancerListener(value: Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener) {
    this._classicLoadBalancerListener = value;
  }
  public resetClassicLoadBalancerListener() {
    this._classicLoadBalancerListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classicLoadBalancerListenerInput() {
    return this._classicLoadBalancerListener
  }

  // component - computed: true, optional: true, required: false
  private _component?: Ec2NetworkInsightsAnalysisExplanationsComponent;
  public get component() {
    return this.interpolationForAttribute('component') as any;
  }
  public set component(value: Ec2NetworkInsightsAnalysisExplanationsComponent) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component
  }

  // customer_gateway - computed: true, optional: true, required: false
  private _customerGateway?: Ec2NetworkInsightsAnalysisExplanationsCustomerGateway;
  public get customerGateway() {
    return this.interpolationForAttribute('customer_gateway') as any;
  }
  public set customerGateway(value: Ec2NetworkInsightsAnalysisExplanationsCustomerGateway) {
    this._customerGateway = value;
  }
  public resetCustomerGateway() {
    this._customerGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewayInput() {
    return this._customerGateway
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: Ec2NetworkInsightsAnalysisExplanationsDestination;
  public get destination() {
    return this.interpolationForAttribute('destination') as any;
  }
  public set destination(value: Ec2NetworkInsightsAnalysisExplanationsDestination) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }

  // destination_vpc - computed: true, optional: true, required: false
  private _destinationVpc?: Ec2NetworkInsightsAnalysisExplanationsDestinationVpc;
  public get destinationVpc() {
    return this.interpolationForAttribute('destination_vpc') as any;
  }
  public set destinationVpc(value: Ec2NetworkInsightsAnalysisExplanationsDestinationVpc) {
    this._destinationVpc = value;
  }
  public resetDestinationVpc() {
    this._destinationVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVpcInput() {
    return this._destinationVpc
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string;
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction
  }

  // elastic_load_balancer_listener - computed: true, optional: true, required: false
  private _elasticLoadBalancerListener?: Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener;
  public get elasticLoadBalancerListener() {
    return this.interpolationForAttribute('elastic_load_balancer_listener') as any;
  }
  public set elasticLoadBalancerListener(value: Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener) {
    this._elasticLoadBalancerListener = value;
  }
  public resetElasticLoadBalancerListener() {
    this._elasticLoadBalancerListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticLoadBalancerListenerInput() {
    return this._elasticLoadBalancerListener
  }

  // explanation_code - computed: true, optional: true, required: false
  private _explanationCode?: string;
  public get explanationCode() {
    return this.getStringAttribute('explanation_code');
  }
  public set explanationCode(value: string) {
    this._explanationCode = value;
  }
  public resetExplanationCode() {
    this._explanationCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explanationCodeInput() {
    return this._explanationCode
  }

  // ingress_route_table - computed: true, optional: true, required: false
  private _ingressRouteTable?: Ec2NetworkInsightsAnalysisExplanationsIngressRouteTable;
  public get ingressRouteTable() {
    return this.interpolationForAttribute('ingress_route_table') as any;
  }
  public set ingressRouteTable(value: Ec2NetworkInsightsAnalysisExplanationsIngressRouteTable) {
    this._ingressRouteTable = value;
  }
  public resetIngressRouteTable() {
    this._ingressRouteTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressRouteTableInput() {
    return this._ingressRouteTable
  }

  // internet_gateway - computed: true, optional: true, required: false
  private _internetGateway?: Ec2NetworkInsightsAnalysisExplanationsInternetGateway;
  public get internetGateway() {
    return this.interpolationForAttribute('internet_gateway') as any;
  }
  public set internetGateway(value: Ec2NetworkInsightsAnalysisExplanationsInternetGateway) {
    this._internetGateway = value;
  }
  public resetInternetGateway() {
    this._internetGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetGatewayInput() {
    return this._internetGateway
  }

  // load_balancer_arn - computed: true, optional: true, required: false
  private _loadBalancerArn?: string;
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }
  public set loadBalancerArn(value: string) {
    this._loadBalancerArn = value;
  }
  public resetLoadBalancerArn() {
    this._loadBalancerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerArnInput() {
    return this._loadBalancerArn
  }

  // load_balancer_listener_port - computed: true, optional: true, required: false
  private _loadBalancerListenerPort?: number;
  public get loadBalancerListenerPort() {
    return this.getNumberAttribute('load_balancer_listener_port');
  }
  public set loadBalancerListenerPort(value: number) {
    this._loadBalancerListenerPort = value;
  }
  public resetLoadBalancerListenerPort() {
    this._loadBalancerListenerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerListenerPortInput() {
    return this._loadBalancerListenerPort
  }

  // load_balancer_target - computed: true, optional: true, required: false
  private _loadBalancerTarget?: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTarget;
  public get loadBalancerTarget() {
    return this.interpolationForAttribute('load_balancer_target') as any;
  }
  public set loadBalancerTarget(value: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTarget) {
    this._loadBalancerTarget = value;
  }
  public resetLoadBalancerTarget() {
    this._loadBalancerTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTargetInput() {
    return this._loadBalancerTarget
  }

  // load_balancer_target_group - computed: true, optional: true, required: false
  private _loadBalancerTargetGroup?: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup;
  public get loadBalancerTargetGroup() {
    return this.interpolationForAttribute('load_balancer_target_group') as any;
  }
  public set loadBalancerTargetGroup(value: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup) {
    this._loadBalancerTargetGroup = value;
  }
  public resetLoadBalancerTargetGroup() {
    this._loadBalancerTargetGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTargetGroupInput() {
    return this._loadBalancerTargetGroup
  }

  // load_balancer_target_groups - computed: true, optional: true, required: false
  private _loadBalancerTargetGroups?: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups[];
  public get loadBalancerTargetGroups() {
    return this.interpolationForAttribute('load_balancer_target_groups') as any;
  }
  public set loadBalancerTargetGroups(value: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups[]) {
    this._loadBalancerTargetGroups = value;
  }
  public resetLoadBalancerTargetGroups() {
    this._loadBalancerTargetGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTargetGroupsInput() {
    return this._loadBalancerTargetGroups
  }

  // load_balancer_target_port - computed: true, optional: true, required: false
  private _loadBalancerTargetPort?: number;
  public get loadBalancerTargetPort() {
    return this.getNumberAttribute('load_balancer_target_port');
  }
  public set loadBalancerTargetPort(value: number) {
    this._loadBalancerTargetPort = value;
  }
  public resetLoadBalancerTargetPort() {
    this._loadBalancerTargetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTargetPortInput() {
    return this._loadBalancerTargetPort
  }

  // missing_component - computed: true, optional: true, required: false
  private _missingComponent?: string;
  public get missingComponent() {
    return this.getStringAttribute('missing_component');
  }
  public set missingComponent(value: string) {
    this._missingComponent = value;
  }
  public resetMissingComponent() {
    this._missingComponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingComponentInput() {
    return this._missingComponent
  }

  // nat_gateway - computed: true, optional: true, required: false
  private _natGateway?: Ec2NetworkInsightsAnalysisExplanationsNatGateway;
  public get natGateway() {
    return this.interpolationForAttribute('nat_gateway') as any;
  }
  public set natGateway(value: Ec2NetworkInsightsAnalysisExplanationsNatGateway) {
    this._natGateway = value;
  }
  public resetNatGateway() {
    this._natGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayInput() {
    return this._natGateway
  }

  // network_interface - computed: true, optional: true, required: false
  private _networkInterface?: Ec2NetworkInsightsAnalysisExplanationsNetworkInterface;
  public get networkInterface() {
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: Ec2NetworkInsightsAnalysisExplanationsNetworkInterface) {
    this._networkInterface = value;
  }
  public resetNetworkInterface() {
    this._networkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // packet_field - computed: true, optional: true, required: false
  private _packetField?: string;
  public get packetField() {
    return this.getStringAttribute('packet_field');
  }
  public set packetField(value: string) {
    this._packetField = value;
  }
  public resetPacketField() {
    this._packetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetFieldInput() {
    return this._packetField
  }

  // port - computed: true, optional: true, required: false
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // port_ranges - computed: true, optional: true, required: false
  private _portRanges?: Ec2NetworkInsightsAnalysisExplanationsPortRanges[];
  public get portRanges() {
    return this.interpolationForAttribute('port_ranges') as any;
  }
  public set portRanges(value: Ec2NetworkInsightsAnalysisExplanationsPortRanges[]) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges
  }

  // prefix_list - computed: true, optional: true, required: false
  private _prefixList?: Ec2NetworkInsightsAnalysisExplanationsPrefixList;
  public get prefixList() {
    return this.interpolationForAttribute('prefix_list') as any;
  }
  public set prefixList(value: Ec2NetworkInsightsAnalysisExplanationsPrefixList) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[];
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols
  }

  // route_table - computed: true, optional: true, required: false
  private _routeTable?: Ec2NetworkInsightsAnalysisExplanationsRouteTable;
  public get routeTable() {
    return this.interpolationForAttribute('route_table') as any;
  }
  public set routeTable(value: Ec2NetworkInsightsAnalysisExplanationsRouteTable) {
    this._routeTable = value;
  }
  public resetRouteTable() {
    this._routeTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableInput() {
    return this._routeTable
  }

  // route_table_route - computed: true, optional: true, required: false
  private _routeTableRoute?: Ec2NetworkInsightsAnalysisExplanationsRouteTableRoute;
  public get routeTableRoute() {
    return this.interpolationForAttribute('route_table_route') as any;
  }
  public set routeTableRoute(value: Ec2NetworkInsightsAnalysisExplanationsRouteTableRoute) {
    this._routeTableRoute = value;
  }
  public resetRouteTableRoute() {
    this._routeTableRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableRouteInput() {
    return this._routeTableRoute
  }

  // security_group - computed: true, optional: true, required: false
  private _securityGroup?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroup;
  public get securityGroup() {
    return this.interpolationForAttribute('security_group') as any;
  }
  public set securityGroup(value: Ec2NetworkInsightsAnalysisExplanationsSecurityGroup) {
    this._securityGroup = value;
  }
  public resetSecurityGroup() {
    this._securityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup
  }

  // security_group_rule - computed: true, optional: true, required: false
  private _securityGroupRule?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRule;
  public get securityGroupRule() {
    return this.interpolationForAttribute('security_group_rule') as any;
  }
  public set securityGroupRule(value: Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRule) {
    this._securityGroupRule = value;
  }
  public resetSecurityGroupRule() {
    this._securityGroupRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupRuleInput() {
    return this._securityGroupRule
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroups[];
  public get securityGroups() {
    return this.interpolationForAttribute('security_groups') as any;
  }
  public set securityGroups(value: Ec2NetworkInsightsAnalysisExplanationsSecurityGroups[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups
  }

  // source_vpc - computed: true, optional: true, required: false
  private _sourceVpc?: Ec2NetworkInsightsAnalysisExplanationsSourceVpc;
  public get sourceVpc() {
    return this.interpolationForAttribute('source_vpc') as any;
  }
  public set sourceVpc(value: Ec2NetworkInsightsAnalysisExplanationsSourceVpc) {
    this._sourceVpc = value;
  }
  public resetSourceVpc() {
    this._sourceVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVpcInput() {
    return this._sourceVpc
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: Ec2NetworkInsightsAnalysisExplanationsSubnet;
  public get subnet() {
    return this.interpolationForAttribute('subnet') as any;
  }
  public set subnet(value: Ec2NetworkInsightsAnalysisExplanationsSubnet) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet
  }

  // subnet_route_table - computed: true, optional: true, required: false
  private _subnetRouteTable?: Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTable;
  public get subnetRouteTable() {
    return this.interpolationForAttribute('subnet_route_table') as any;
  }
  public set subnetRouteTable(value: Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTable) {
    this._subnetRouteTable = value;
  }
  public resetSubnetRouteTable() {
    this._subnetRouteTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetRouteTableInput() {
    return this._subnetRouteTable
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc?: Ec2NetworkInsightsAnalysisExplanationsVpc;
  public get vpc() {
    return this.interpolationForAttribute('vpc') as any;
  }
  public set vpc(value: Ec2NetworkInsightsAnalysisExplanationsVpc) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc
  }

  // vpc_endpoint - computed: true, optional: true, required: false
  private _vpcEndpoint?: Ec2NetworkInsightsAnalysisExplanationsVpcEndpoint;
  public get vpcEndpoint() {
    return this.interpolationForAttribute('vpc_endpoint') as any;
  }
  public set vpcEndpoint(value: Ec2NetworkInsightsAnalysisExplanationsVpcEndpoint) {
    this._vpcEndpoint = value;
  }
  public resetVpcEndpoint() {
    this._vpcEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointInput() {
    return this._vpcEndpoint
  }

  // vpc_peering_connection - computed: true, optional: true, required: false
  private _vpcPeeringConnection?: Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnection;
  public get vpcPeeringConnection() {
    return this.interpolationForAttribute('vpc_peering_connection') as any;
  }
  public set vpcPeeringConnection(value: Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnection) {
    this._vpcPeeringConnection = value;
  }
  public resetVpcPeeringConnection() {
    this._vpcPeeringConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringConnectionInput() {
    return this._vpcPeeringConnection
  }

  // vpn_connection - computed: true, optional: true, required: false
  private _vpnConnection?: Ec2NetworkInsightsAnalysisExplanationsVpnConnection;
  public get vpnConnection() {
    return this.interpolationForAttribute('vpn_connection') as any;
  }
  public set vpnConnection(value: Ec2NetworkInsightsAnalysisExplanationsVpnConnection) {
    this._vpnConnection = value;
  }
  public resetVpnConnection() {
    this._vpnConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnConnectionInput() {
    return this._vpnConnection
  }

  // vpn_gateway - computed: true, optional: true, required: false
  private _vpnGateway?: Ec2NetworkInsightsAnalysisExplanationsVpnGateway;
  public get vpnGateway() {
    return this.interpolationForAttribute('vpn_gateway') as any;
  }
  public set vpnGateway(value: Ec2NetworkInsightsAnalysisExplanationsVpnGateway) {
    this._vpnGateway = value;
  }
  public resetVpnGateway() {
    this._vpnGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayInput() {
    return this._vpnGateway
  }
}

export function ec2NetworkInsightsAnalysisExplanationsToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acl: ec2NetworkInsightsAnalysisExplanationsAclToTerraform(struct!.acl),
    acl_rule: ec2NetworkInsightsAnalysisExplanationsAclRuleToTerraform(struct!.aclRule),
    address: cdktf.stringToTerraform(struct!.address),
    addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.addresses),
    attached_to: ec2NetworkInsightsAnalysisExplanationsAttachedToToTerraform(struct!.attachedTo),
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(struct!.availabilityZones),
    cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrs),
    classic_load_balancer_listener: ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform(struct!.classicLoadBalancerListener),
    component: ec2NetworkInsightsAnalysisExplanationsComponentToTerraform(struct!.component),
    customer_gateway: ec2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform(struct!.customerGateway),
    destination: ec2NetworkInsightsAnalysisExplanationsDestinationToTerraform(struct!.destination),
    destination_vpc: ec2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform(struct!.destinationVpc),
    direction: cdktf.stringToTerraform(struct!.direction),
    elastic_load_balancer_listener: ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform(struct!.elasticLoadBalancerListener),
    explanation_code: cdktf.stringToTerraform(struct!.explanationCode),
    ingress_route_table: ec2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform(struct!.ingressRouteTable),
    internet_gateway: ec2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform(struct!.internetGateway),
    load_balancer_arn: cdktf.stringToTerraform(struct!.loadBalancerArn),
    load_balancer_listener_port: cdktf.numberToTerraform(struct!.loadBalancerListenerPort),
    load_balancer_target: ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform(struct!.loadBalancerTarget),
    load_balancer_target_group: ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform(struct!.loadBalancerTargetGroup),
    load_balancer_target_groups: cdktf.listMapper(ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform)(struct!.loadBalancerTargetGroups),
    load_balancer_target_port: cdktf.numberToTerraform(struct!.loadBalancerTargetPort),
    missing_component: cdktf.stringToTerraform(struct!.missingComponent),
    nat_gateway: ec2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform(struct!.natGateway),
    network_interface: ec2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform(struct!.networkInterface),
    packet_field: cdktf.stringToTerraform(struct!.packetField),
    port: cdktf.numberToTerraform(struct!.port),
    port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisExplanationsPortRangesToTerraform)(struct!.portRanges),
    prefix_list: ec2NetworkInsightsAnalysisExplanationsPrefixListToTerraform(struct!.prefixList),
    protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.protocols),
    route_table: ec2NetworkInsightsAnalysisExplanationsRouteTableToTerraform(struct!.routeTable),
    route_table_route: ec2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform(struct!.routeTableRoute),
    security_group: ec2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform(struct!.securityGroup),
    security_group_rule: ec2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform(struct!.securityGroupRule),
    security_groups: cdktf.listMapper(ec2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform)(struct!.securityGroups),
    source_vpc: ec2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform(struct!.sourceVpc),
    state: cdktf.stringToTerraform(struct!.state),
    subnet: ec2NetworkInsightsAnalysisExplanationsSubnetToTerraform(struct!.subnet),
    subnet_route_table: ec2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform(struct!.subnetRouteTable),
    vpc: ec2NetworkInsightsAnalysisExplanationsVpcToTerraform(struct!.vpc),
    vpc_endpoint: ec2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform(struct!.vpcEndpoint),
    vpc_peering_connection: ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform(struct!.vpcPeeringConnection),
    vpn_connection: ec2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform(struct!.vpnConnection),
    vpn_gateway: ec2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform(struct!.vpnGateway),
  }
}

export interface Ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#from Ec2NetworkInsightsAnalysis#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#to Ec2NetworkInsightsAnalysis#to}
  */
  readonly to?: number;
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export interface Ec2NetworkInsightsAnalysisForwardPathComponentsAclRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#cidr Ec2NetworkInsightsAnalysis#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#egress Ec2NetworkInsightsAnalysis#egress}
  */
  readonly egress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#port_range Ec2NetworkInsightsAnalysis#port_range}
  */
  readonly portRange?: Ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#protocol Ec2NetworkInsightsAnalysis#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#rule_action Ec2NetworkInsightsAnalysis#rule_action}
  */
  readonly ruleAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#rule_number Ec2NetworkInsightsAnalysis#rule_number}
  */
  readonly ruleNumber?: number;
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsAclRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    egress: cdktf.booleanToTerraform(struct!.egress),
    port_range: ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rule_action: cdktf.stringToTerraform(struct!.ruleAction),
    rule_number: cdktf.numberToTerraform(struct!.ruleNumber),
  }
}

export interface Ec2NetworkInsightsAnalysisForwardPathComponentsComponent {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsComponent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#from Ec2NetworkInsightsAnalysis#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#to Ec2NetworkInsightsAnalysis#to}
  */
  readonly to?: number;
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export interface Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#from Ec2NetworkInsightsAnalysis#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#to Ec2NetworkInsightsAnalysis#to}
  */
  readonly to?: number;
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export interface Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#destination_addresses Ec2NetworkInsightsAnalysis#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#destination_port_ranges Ec2NetworkInsightsAnalysis#destination_port_ranges}
  */
  readonly destinationPortRanges?: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#protocol Ec2NetworkInsightsAnalysis#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#source_addresses Ec2NetworkInsightsAnalysis#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#source_port_ranges Ec2NetworkInsightsAnalysis#source_port_ranges}
  */
  readonly sourcePortRanges?: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges[];
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationAddresses),
    destination_port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform)(struct!.destinationPortRanges),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform)(struct!.sourcePortRanges),
  }
}

export interface Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#from Ec2NetworkInsightsAnalysis#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#to Ec2NetworkInsightsAnalysis#to}
  */
  readonly to?: number;
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export interface Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#from Ec2NetworkInsightsAnalysis#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#to Ec2NetworkInsightsAnalysis#to}
  */
  readonly to?: number;
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export interface Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#destination_addresses Ec2NetworkInsightsAnalysis#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#destination_port_ranges Ec2NetworkInsightsAnalysis#destination_port_ranges}
  */
  readonly destinationPortRanges?: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#protocol Ec2NetworkInsightsAnalysis#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#source_addresses Ec2NetworkInsightsAnalysis#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#source_port_ranges Ec2NetworkInsightsAnalysis#source_port_ranges}
  */
  readonly sourcePortRanges?: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges[];
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationAddresses),
    destination_port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform)(struct!.destinationPortRanges),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform)(struct!.sourcePortRanges),
  }
}

export interface Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#destination_cidr Ec2NetworkInsightsAnalysis#destination_cidr}
  */
  readonly destinationCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#destination_prefix_list_id Ec2NetworkInsightsAnalysis#destination_prefix_list_id}
  */
  readonly destinationPrefixListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#egress_only_internet_gateway_id Ec2NetworkInsightsAnalysis#egress_only_internet_gateway_id}
  */
  readonly egressOnlyInternetGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#gateway_id Ec2NetworkInsightsAnalysis#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#instance_id Ec2NetworkInsightsAnalysis#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#nat_gateway_id Ec2NetworkInsightsAnalysis#nat_gateway_id}
  */
  readonly natGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#network_interface_id Ec2NetworkInsightsAnalysis#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#origin Ec2NetworkInsightsAnalysis#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#transit_gateway_id Ec2NetworkInsightsAnalysis#transit_gateway_id}
  */
  readonly transitGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#vpc_peering_connection_id Ec2NetworkInsightsAnalysis#vpc_peering_connection_id}
  */
  readonly vpcPeeringConnectionId?: string;
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute): any {
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

export interface Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#from Ec2NetworkInsightsAnalysis#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#to Ec2NetworkInsightsAnalysis#to}
  */
  readonly to?: number;
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export interface Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#cidr Ec2NetworkInsightsAnalysis#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#direction Ec2NetworkInsightsAnalysis#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#port_range Ec2NetworkInsightsAnalysis#port_range}
  */
  readonly portRange?: Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#prefix_list_id Ec2NetworkInsightsAnalysis#prefix_list_id}
  */
  readonly prefixListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#protocol Ec2NetworkInsightsAnalysis#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#security_group_id Ec2NetworkInsightsAnalysis#security_group_id}
  */
  readonly securityGroupId?: string;
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    direction: cdktf.stringToTerraform(struct!.direction),
    port_range: ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform(struct!.portRange),
    prefix_list_id: cdktf.stringToTerraform(struct!.prefixListId),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
  }
}

export interface Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisForwardPathComponentsSubnet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsSubnet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisForwardPathComponentsVpc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class Ec2NetworkInsightsAnalysisForwardPathComponents extends cdktf.ComplexComputedList {

  // acl_rule - computed: true, optional: true, required: false
  private _aclRule?: Ec2NetworkInsightsAnalysisForwardPathComponentsAclRule;
  public get aclRule() {
    return this.interpolationForAttribute('acl_rule') as any;
  }
  public set aclRule(value: Ec2NetworkInsightsAnalysisForwardPathComponentsAclRule) {
    this._aclRule = value;
  }
  public resetAclRule() {
    this._aclRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclRuleInput() {
    return this._aclRule
  }

  // component - computed: true, optional: true, required: false
  private _component?: Ec2NetworkInsightsAnalysisForwardPathComponentsComponent;
  public get component() {
    return this.interpolationForAttribute('component') as any;
  }
  public set component(value: Ec2NetworkInsightsAnalysisForwardPathComponentsComponent) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component
  }

  // destination_vpc - computed: true, optional: true, required: false
  private _destinationVpc?: Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc;
  public get destinationVpc() {
    return this.interpolationForAttribute('destination_vpc') as any;
  }
  public set destinationVpc(value: Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc) {
    this._destinationVpc = value;
  }
  public resetDestinationVpc() {
    this._destinationVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVpcInput() {
    return this._destinationVpc
  }

  // inbound_header - computed: true, optional: true, required: false
  private _inboundHeader?: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeader;
  public get inboundHeader() {
    return this.interpolationForAttribute('inbound_header') as any;
  }
  public set inboundHeader(value: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeader) {
    this._inboundHeader = value;
  }
  public resetInboundHeader() {
    this._inboundHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundHeaderInput() {
    return this._inboundHeader
  }

  // outbound_header - computed: true, optional: true, required: false
  private _outboundHeader?: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader;
  public get outboundHeader() {
    return this.interpolationForAttribute('outbound_header') as any;
  }
  public set outboundHeader(value: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader) {
    this._outboundHeader = value;
  }
  public resetOutboundHeader() {
    this._outboundHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundHeaderInput() {
    return this._outboundHeader
  }

  // route_table_route - computed: true, optional: true, required: false
  private _routeTableRoute?: Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute;
  public get routeTableRoute() {
    return this.interpolationForAttribute('route_table_route') as any;
  }
  public set routeTableRoute(value: Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute) {
    this._routeTableRoute = value;
  }
  public resetRouteTableRoute() {
    this._routeTableRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableRouteInput() {
    return this._routeTableRoute
  }

  // security_group_rule - computed: true, optional: true, required: false
  private _securityGroupRule?: Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule;
  public get securityGroupRule() {
    return this.interpolationForAttribute('security_group_rule') as any;
  }
  public set securityGroupRule(value: Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule) {
    this._securityGroupRule = value;
  }
  public resetSecurityGroupRule() {
    this._securityGroupRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupRuleInput() {
    return this._securityGroupRule
  }

  // sequence_number - computed: true, optional: true, required: false
  private _sequenceNumber?: number;
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }
  public set sequenceNumber(value: number) {
    this._sequenceNumber = value;
  }
  public resetSequenceNumber() {
    this._sequenceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberInput() {
    return this._sequenceNumber
  }

  // source_vpc - computed: true, optional: true, required: false
  private _sourceVpc?: Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpc;
  public get sourceVpc() {
    return this.interpolationForAttribute('source_vpc') as any;
  }
  public set sourceVpc(value: Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpc) {
    this._sourceVpc = value;
  }
  public resetSourceVpc() {
    this._sourceVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVpcInput() {
    return this._sourceVpc
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: Ec2NetworkInsightsAnalysisForwardPathComponentsSubnet;
  public get subnet() {
    return this.interpolationForAttribute('subnet') as any;
  }
  public set subnet(value: Ec2NetworkInsightsAnalysisForwardPathComponentsSubnet) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc?: Ec2NetworkInsightsAnalysisForwardPathComponentsVpc;
  public get vpc() {
    return this.interpolationForAttribute('vpc') as any;
  }
  public set vpc(value: Ec2NetworkInsightsAnalysisForwardPathComponentsVpc) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc
  }
}

export function ec2NetworkInsightsAnalysisForwardPathComponentsToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acl_rule: ec2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform(struct!.aclRule),
    component: ec2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform(struct!.component),
    destination_vpc: ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform(struct!.destinationVpc),
    inbound_header: ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform(struct!.inboundHeader),
    outbound_header: ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform(struct!.outboundHeader),
    route_table_route: ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform(struct!.routeTableRoute),
    security_group_rule: ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform(struct!.securityGroupRule),
    sequence_number: cdktf.numberToTerraform(struct!.sequenceNumber),
    source_vpc: ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform(struct!.sourceVpc),
    subnet: ec2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform(struct!.subnet),
    vpc: ec2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform(struct!.vpc),
  }
}

export interface Ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#from Ec2NetworkInsightsAnalysis#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#to Ec2NetworkInsightsAnalysis#to}
  */
  readonly to?: number;
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export interface Ec2NetworkInsightsAnalysisReturnPathComponentsAclRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#cidr Ec2NetworkInsightsAnalysis#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#egress Ec2NetworkInsightsAnalysis#egress}
  */
  readonly egress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#port_range Ec2NetworkInsightsAnalysis#port_range}
  */
  readonly portRange?: Ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#protocol Ec2NetworkInsightsAnalysis#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#rule_action Ec2NetworkInsightsAnalysis#rule_action}
  */
  readonly ruleAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#rule_number Ec2NetworkInsightsAnalysis#rule_number}
  */
  readonly ruleNumber?: number;
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsAclRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    egress: cdktf.booleanToTerraform(struct!.egress),
    port_range: ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rule_action: cdktf.stringToTerraform(struct!.ruleAction),
    rule_number: cdktf.numberToTerraform(struct!.ruleNumber),
  }
}

export interface Ec2NetworkInsightsAnalysisReturnPathComponentsComponent {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsComponent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#from Ec2NetworkInsightsAnalysis#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#to Ec2NetworkInsightsAnalysis#to}
  */
  readonly to?: number;
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export interface Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#from Ec2NetworkInsightsAnalysis#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#to Ec2NetworkInsightsAnalysis#to}
  */
  readonly to?: number;
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export interface Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#destination_addresses Ec2NetworkInsightsAnalysis#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#destination_port_ranges Ec2NetworkInsightsAnalysis#destination_port_ranges}
  */
  readonly destinationPortRanges?: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#protocol Ec2NetworkInsightsAnalysis#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#source_addresses Ec2NetworkInsightsAnalysis#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#source_port_ranges Ec2NetworkInsightsAnalysis#source_port_ranges}
  */
  readonly sourcePortRanges?: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges[];
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationAddresses),
    destination_port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform)(struct!.destinationPortRanges),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform)(struct!.sourcePortRanges),
  }
}

export interface Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#from Ec2NetworkInsightsAnalysis#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#to Ec2NetworkInsightsAnalysis#to}
  */
  readonly to?: number;
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export interface Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#from Ec2NetworkInsightsAnalysis#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#to Ec2NetworkInsightsAnalysis#to}
  */
  readonly to?: number;
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export interface Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#destination_addresses Ec2NetworkInsightsAnalysis#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#destination_port_ranges Ec2NetworkInsightsAnalysis#destination_port_ranges}
  */
  readonly destinationPortRanges?: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#protocol Ec2NetworkInsightsAnalysis#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#source_addresses Ec2NetworkInsightsAnalysis#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#source_port_ranges Ec2NetworkInsightsAnalysis#source_port_ranges}
  */
  readonly sourcePortRanges?: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges[];
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationAddresses),
    destination_port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform)(struct!.destinationPortRanges),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_port_ranges: cdktf.listMapper(ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform)(struct!.sourcePortRanges),
  }
}

export interface Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#destination_cidr Ec2NetworkInsightsAnalysis#destination_cidr}
  */
  readonly destinationCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#destination_prefix_list_id Ec2NetworkInsightsAnalysis#destination_prefix_list_id}
  */
  readonly destinationPrefixListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#egress_only_internet_gateway_id Ec2NetworkInsightsAnalysis#egress_only_internet_gateway_id}
  */
  readonly egressOnlyInternetGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#gateway_id Ec2NetworkInsightsAnalysis#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#instance_id Ec2NetworkInsightsAnalysis#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#nat_gateway_id Ec2NetworkInsightsAnalysis#nat_gateway_id}
  */
  readonly natGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#network_interface_id Ec2NetworkInsightsAnalysis#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#origin Ec2NetworkInsightsAnalysis#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#transit_gateway_id Ec2NetworkInsightsAnalysis#transit_gateway_id}
  */
  readonly transitGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#vpc_peering_connection_id Ec2NetworkInsightsAnalysis#vpc_peering_connection_id}
  */
  readonly vpcPeeringConnectionId?: string;
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute): any {
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

export interface Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#from Ec2NetworkInsightsAnalysis#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#to Ec2NetworkInsightsAnalysis#to}
  */
  readonly to?: number;
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export interface Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#cidr Ec2NetworkInsightsAnalysis#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#direction Ec2NetworkInsightsAnalysis#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#port_range Ec2NetworkInsightsAnalysis#port_range}
  */
  readonly portRange?: Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#prefix_list_id Ec2NetworkInsightsAnalysis#prefix_list_id}
  */
  readonly prefixListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#protocol Ec2NetworkInsightsAnalysis#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#security_group_id Ec2NetworkInsightsAnalysis#security_group_id}
  */
  readonly securityGroupId?: string;
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    direction: cdktf.stringToTerraform(struct!.direction),
    port_range: ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform(struct!.portRange),
    prefix_list_id: cdktf.stringToTerraform(struct!.prefixListId),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
  }
}

export interface Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisReturnPathComponentsSubnet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsSubnet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface Ec2NetworkInsightsAnalysisReturnPathComponentsVpc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#arn Ec2NetworkInsightsAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#id Ec2NetworkInsightsAnalysis#id}
  */
  readonly id?: string;
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class Ec2NetworkInsightsAnalysisReturnPathComponents extends cdktf.ComplexComputedList {

  // acl_rule - computed: true, optional: true, required: false
  private _aclRule?: Ec2NetworkInsightsAnalysisReturnPathComponentsAclRule;
  public get aclRule() {
    return this.interpolationForAttribute('acl_rule') as any;
  }
  public set aclRule(value: Ec2NetworkInsightsAnalysisReturnPathComponentsAclRule) {
    this._aclRule = value;
  }
  public resetAclRule() {
    this._aclRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclRuleInput() {
    return this._aclRule
  }

  // component - computed: true, optional: true, required: false
  private _component?: Ec2NetworkInsightsAnalysisReturnPathComponentsComponent;
  public get component() {
    return this.interpolationForAttribute('component') as any;
  }
  public set component(value: Ec2NetworkInsightsAnalysisReturnPathComponentsComponent) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component
  }

  // destination_vpc - computed: true, optional: true, required: false
  private _destinationVpc?: Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc;
  public get destinationVpc() {
    return this.interpolationForAttribute('destination_vpc') as any;
  }
  public set destinationVpc(value: Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc) {
    this._destinationVpc = value;
  }
  public resetDestinationVpc() {
    this._destinationVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVpcInput() {
    return this._destinationVpc
  }

  // inbound_header - computed: true, optional: true, required: false
  private _inboundHeader?: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeader;
  public get inboundHeader() {
    return this.interpolationForAttribute('inbound_header') as any;
  }
  public set inboundHeader(value: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeader) {
    this._inboundHeader = value;
  }
  public resetInboundHeader() {
    this._inboundHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundHeaderInput() {
    return this._inboundHeader
  }

  // outbound_header - computed: true, optional: true, required: false
  private _outboundHeader?: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader;
  public get outboundHeader() {
    return this.interpolationForAttribute('outbound_header') as any;
  }
  public set outboundHeader(value: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader) {
    this._outboundHeader = value;
  }
  public resetOutboundHeader() {
    this._outboundHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundHeaderInput() {
    return this._outboundHeader
  }

  // route_table_route - computed: true, optional: true, required: false
  private _routeTableRoute?: Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute;
  public get routeTableRoute() {
    return this.interpolationForAttribute('route_table_route') as any;
  }
  public set routeTableRoute(value: Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute) {
    this._routeTableRoute = value;
  }
  public resetRouteTableRoute() {
    this._routeTableRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableRouteInput() {
    return this._routeTableRoute
  }

  // security_group_rule - computed: true, optional: true, required: false
  private _securityGroupRule?: Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule;
  public get securityGroupRule() {
    return this.interpolationForAttribute('security_group_rule') as any;
  }
  public set securityGroupRule(value: Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule) {
    this._securityGroupRule = value;
  }
  public resetSecurityGroupRule() {
    this._securityGroupRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupRuleInput() {
    return this._securityGroupRule
  }

  // sequence_number - computed: true, optional: true, required: false
  private _sequenceNumber?: number;
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }
  public set sequenceNumber(value: number) {
    this._sequenceNumber = value;
  }
  public resetSequenceNumber() {
    this._sequenceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberInput() {
    return this._sequenceNumber
  }

  // source_vpc - computed: true, optional: true, required: false
  private _sourceVpc?: Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpc;
  public get sourceVpc() {
    return this.interpolationForAttribute('source_vpc') as any;
  }
  public set sourceVpc(value: Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpc) {
    this._sourceVpc = value;
  }
  public resetSourceVpc() {
    this._sourceVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVpcInput() {
    return this._sourceVpc
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: Ec2NetworkInsightsAnalysisReturnPathComponentsSubnet;
  public get subnet() {
    return this.interpolationForAttribute('subnet') as any;
  }
  public set subnet(value: Ec2NetworkInsightsAnalysisReturnPathComponentsSubnet) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc?: Ec2NetworkInsightsAnalysisReturnPathComponentsVpc;
  public get vpc() {
    return this.interpolationForAttribute('vpc') as any;
  }
  public set vpc(value: Ec2NetworkInsightsAnalysisReturnPathComponentsVpc) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc
  }
}

export function ec2NetworkInsightsAnalysisReturnPathComponentsToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acl_rule: ec2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform(struct!.aclRule),
    component: ec2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform(struct!.component),
    destination_vpc: ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform(struct!.destinationVpc),
    inbound_header: ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform(struct!.inboundHeader),
    outbound_header: ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform(struct!.outboundHeader),
    route_table_route: ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform(struct!.routeTableRoute),
    security_group_rule: ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform(struct!.securityGroupRule),
    sequence_number: cdktf.numberToTerraform(struct!.sequenceNumber),
    source_vpc: ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform(struct!.sourceVpc),
    subnet: ec2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform(struct!.subnet),
    vpc: ec2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform(struct!.vpc),
  }
}

export interface Ec2NetworkInsightsAnalysisTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#key Ec2NetworkInsightsAnalysis#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html#value Ec2NetworkInsightsAnalysis#value}
  */
  readonly value?: string;
}

export function ec2NetworkInsightsAnalysisTagsToTerraform(struct?: Ec2NetworkInsightsAnalysisTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html awscc_ec2_network_insights_analysis}
*/
export class Ec2NetworkInsightsAnalysis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_network_insights_analysis";

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
  public constructor(scope: Construct, id: string, config: Ec2NetworkInsightsAnalysisConfig) {
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
  public get alternatePathHints() {
    return this.interpolationForAttribute('alternate_path_hints') as any;
  }

  // explanations - computed: true, optional: false, required: false
  public get explanations() {
    return this.interpolationForAttribute('explanations') as any;
  }

  // filter_in_arns - computed: true, optional: true, required: false
  private _filterInArns?: string[];
  public get filterInArns() {
    return this.getListAttribute('filter_in_arns');
  }
  public set filterInArns(value: string[]) {
    this._filterInArns = value;
  }
  public resetFilterInArns() {
    this._filterInArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInArnsInput() {
    return this._filterInArns
  }

  // forward_path_components - computed: true, optional: false, required: false
  public get forwardPathComponents() {
    return this.interpolationForAttribute('forward_path_components') as any;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_insights_analysis_arn - computed: true, optional: false, required: false
  public get networkInsightsAnalysisArn() {
    return this.getStringAttribute('network_insights_analysis_arn');
  }

  // network_insights_analysis_id - computed: true, optional: false, required: false
  public get networkInsightsAnalysisId() {
    return this.getStringAttribute('network_insights_analysis_id');
  }

  // network_insights_path_id - computed: false, optional: false, required: true
  private _networkInsightsPathId: string;
  public get networkInsightsPathId() {
    return this.getStringAttribute('network_insights_path_id');
  }
  public set networkInsightsPathId(value: string) {
    this._networkInsightsPathId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInsightsPathIdInput() {
    return this._networkInsightsPathId
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

  // tags - computed: false, optional: true, required: false
  private _tags?: Ec2NetworkInsightsAnalysisTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Ec2NetworkInsightsAnalysisTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_in_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._filterInArns),
      network_insights_path_id: cdktf.stringToTerraform(this._networkInsightsPathId),
      tags: cdktf.listMapper(ec2NetworkInsightsAnalysisTagsToTerraform)(this._tags),
    };
  }
}
