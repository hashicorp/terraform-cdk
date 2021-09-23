import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class Ec2NetworkInsightsAnalysisAlternatePathHints extends cdktf.ComplexComputedList {
    private _componentArn?;
    get componentArn(): string;
    set componentArn(value: string);
    resetComponentArn(): void;
    get componentArnInput(): string | undefined;
    private _componentId?;
    get componentId(): string;
    set componentId(value: string);
    resetComponentId(): void;
    get componentIdInput(): string | undefined;
}
export declare function ec2NetworkInsightsAnalysisAlternatePathHintsToTerraform(struct?: Ec2NetworkInsightsAnalysisAlternatePathHints): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsAclToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsAcl): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsAclRulePortRange): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsAclRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsAclRule): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsAttachedToToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsAttachedTo): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsComponentToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsComponent): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsCustomerGateway): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsDestinationToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsDestination): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsDestinationVpc): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsIngressRouteTable): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsInternetGateway): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTarget): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsNatGateway): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsNetworkInterface): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsPortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsPortRanges): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsPrefixListToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsPrefixList): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsRouteTableToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsRouteTable): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsRouteTableRoute): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroup): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRule): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroups): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSourceVpc): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsSubnetToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSubnet): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTable): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpc): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpcEndpoint): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnection): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpnConnection): any;
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
export declare function ec2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpnGateway): any;
export declare class Ec2NetworkInsightsAnalysisExplanations extends cdktf.ComplexComputedList {
    private _acl?;
    get acl(): Ec2NetworkInsightsAnalysisExplanationsAcl;
    set acl(value: Ec2NetworkInsightsAnalysisExplanationsAcl);
    resetAcl(): void;
    get aclInput(): Ec2NetworkInsightsAnalysisExplanationsAcl | undefined;
    private _aclRule?;
    get aclRule(): Ec2NetworkInsightsAnalysisExplanationsAclRule;
    set aclRule(value: Ec2NetworkInsightsAnalysisExplanationsAclRule);
    resetAclRule(): void;
    get aclRuleInput(): Ec2NetworkInsightsAnalysisExplanationsAclRule | undefined;
    private _address?;
    get address(): string;
    set address(value: string);
    resetAddress(): void;
    get addressInput(): string | undefined;
    private _addresses?;
    get addresses(): string[];
    set addresses(value: string[]);
    resetAddresses(): void;
    get addressesInput(): string[] | undefined;
    private _attachedTo?;
    get attachedTo(): Ec2NetworkInsightsAnalysisExplanationsAttachedTo;
    set attachedTo(value: Ec2NetworkInsightsAnalysisExplanationsAttachedTo);
    resetAttachedTo(): void;
    get attachedToInput(): Ec2NetworkInsightsAnalysisExplanationsAttachedTo | undefined;
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    resetAvailabilityZones(): void;
    get availabilityZonesInput(): string[] | undefined;
    private _cidrs?;
    get cidrs(): string[];
    set cidrs(value: string[]);
    resetCidrs(): void;
    get cidrsInput(): string[] | undefined;
    private _classicLoadBalancerListener?;
    get classicLoadBalancerListener(): Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener;
    set classicLoadBalancerListener(value: Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener);
    resetClassicLoadBalancerListener(): void;
    get classicLoadBalancerListenerInput(): Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener | undefined;
    private _component?;
    get component(): Ec2NetworkInsightsAnalysisExplanationsComponent;
    set component(value: Ec2NetworkInsightsAnalysisExplanationsComponent);
    resetComponent(): void;
    get componentInput(): Ec2NetworkInsightsAnalysisExplanationsComponent | undefined;
    private _customerGateway?;
    get customerGateway(): Ec2NetworkInsightsAnalysisExplanationsCustomerGateway;
    set customerGateway(value: Ec2NetworkInsightsAnalysisExplanationsCustomerGateway);
    resetCustomerGateway(): void;
    get customerGatewayInput(): Ec2NetworkInsightsAnalysisExplanationsCustomerGateway | undefined;
    private _destination?;
    get destination(): Ec2NetworkInsightsAnalysisExplanationsDestination;
    set destination(value: Ec2NetworkInsightsAnalysisExplanationsDestination);
    resetDestination(): void;
    get destinationInput(): Ec2NetworkInsightsAnalysisExplanationsDestination | undefined;
    private _destinationVpc?;
    get destinationVpc(): Ec2NetworkInsightsAnalysisExplanationsDestinationVpc;
    set destinationVpc(value: Ec2NetworkInsightsAnalysisExplanationsDestinationVpc);
    resetDestinationVpc(): void;
    get destinationVpcInput(): Ec2NetworkInsightsAnalysisExplanationsDestinationVpc | undefined;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string | undefined;
    private _elasticLoadBalancerListener?;
    get elasticLoadBalancerListener(): Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener;
    set elasticLoadBalancerListener(value: Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener);
    resetElasticLoadBalancerListener(): void;
    get elasticLoadBalancerListenerInput(): Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener | undefined;
    private _explanationCode?;
    get explanationCode(): string;
    set explanationCode(value: string);
    resetExplanationCode(): void;
    get explanationCodeInput(): string | undefined;
    private _ingressRouteTable?;
    get ingressRouteTable(): Ec2NetworkInsightsAnalysisExplanationsIngressRouteTable;
    set ingressRouteTable(value: Ec2NetworkInsightsAnalysisExplanationsIngressRouteTable);
    resetIngressRouteTable(): void;
    get ingressRouteTableInput(): Ec2NetworkInsightsAnalysisExplanationsIngressRouteTable | undefined;
    private _internetGateway?;
    get internetGateway(): Ec2NetworkInsightsAnalysisExplanationsInternetGateway;
    set internetGateway(value: Ec2NetworkInsightsAnalysisExplanationsInternetGateway);
    resetInternetGateway(): void;
    get internetGatewayInput(): Ec2NetworkInsightsAnalysisExplanationsInternetGateway | undefined;
    private _loadBalancerArn?;
    get loadBalancerArn(): string;
    set loadBalancerArn(value: string);
    resetLoadBalancerArn(): void;
    get loadBalancerArnInput(): string | undefined;
    private _loadBalancerListenerPort?;
    get loadBalancerListenerPort(): number;
    set loadBalancerListenerPort(value: number);
    resetLoadBalancerListenerPort(): void;
    get loadBalancerListenerPortInput(): number | undefined;
    private _loadBalancerTarget?;
    get loadBalancerTarget(): Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTarget;
    set loadBalancerTarget(value: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTarget);
    resetLoadBalancerTarget(): void;
    get loadBalancerTargetInput(): Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTarget | undefined;
    private _loadBalancerTargetGroup?;
    get loadBalancerTargetGroup(): Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup;
    set loadBalancerTargetGroup(value: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup);
    resetLoadBalancerTargetGroup(): void;
    get loadBalancerTargetGroupInput(): Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup | undefined;
    private _loadBalancerTargetGroups?;
    get loadBalancerTargetGroups(): Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups[];
    set loadBalancerTargetGroups(value: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups[]);
    resetLoadBalancerTargetGroups(): void;
    get loadBalancerTargetGroupsInput(): Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups[] | undefined;
    private _loadBalancerTargetPort?;
    get loadBalancerTargetPort(): number;
    set loadBalancerTargetPort(value: number);
    resetLoadBalancerTargetPort(): void;
    get loadBalancerTargetPortInput(): number | undefined;
    private _missingComponent?;
    get missingComponent(): string;
    set missingComponent(value: string);
    resetMissingComponent(): void;
    get missingComponentInput(): string | undefined;
    private _natGateway?;
    get natGateway(): Ec2NetworkInsightsAnalysisExplanationsNatGateway;
    set natGateway(value: Ec2NetworkInsightsAnalysisExplanationsNatGateway);
    resetNatGateway(): void;
    get natGatewayInput(): Ec2NetworkInsightsAnalysisExplanationsNatGateway | undefined;
    private _networkInterface?;
    get networkInterface(): Ec2NetworkInsightsAnalysisExplanationsNetworkInterface;
    set networkInterface(value: Ec2NetworkInsightsAnalysisExplanationsNetworkInterface);
    resetNetworkInterface(): void;
    get networkInterfaceInput(): Ec2NetworkInsightsAnalysisExplanationsNetworkInterface | undefined;
    private _packetField?;
    get packetField(): string;
    set packetField(value: string);
    resetPacketField(): void;
    get packetFieldInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _portRanges?;
    get portRanges(): Ec2NetworkInsightsAnalysisExplanationsPortRanges[];
    set portRanges(value: Ec2NetworkInsightsAnalysisExplanationsPortRanges[]);
    resetPortRanges(): void;
    get portRangesInput(): Ec2NetworkInsightsAnalysisExplanationsPortRanges[] | undefined;
    private _prefixList?;
    get prefixList(): Ec2NetworkInsightsAnalysisExplanationsPrefixList;
    set prefixList(value: Ec2NetworkInsightsAnalysisExplanationsPrefixList);
    resetPrefixList(): void;
    get prefixListInput(): Ec2NetworkInsightsAnalysisExplanationsPrefixList | undefined;
    private _protocols?;
    get protocols(): string[];
    set protocols(value: string[]);
    resetProtocols(): void;
    get protocolsInput(): string[] | undefined;
    private _routeTable?;
    get routeTable(): Ec2NetworkInsightsAnalysisExplanationsRouteTable;
    set routeTable(value: Ec2NetworkInsightsAnalysisExplanationsRouteTable);
    resetRouteTable(): void;
    get routeTableInput(): Ec2NetworkInsightsAnalysisExplanationsRouteTable | undefined;
    private _routeTableRoute?;
    get routeTableRoute(): Ec2NetworkInsightsAnalysisExplanationsRouteTableRoute;
    set routeTableRoute(value: Ec2NetworkInsightsAnalysisExplanationsRouteTableRoute);
    resetRouteTableRoute(): void;
    get routeTableRouteInput(): Ec2NetworkInsightsAnalysisExplanationsRouteTableRoute | undefined;
    private _securityGroup?;
    get securityGroup(): Ec2NetworkInsightsAnalysisExplanationsSecurityGroup;
    set securityGroup(value: Ec2NetworkInsightsAnalysisExplanationsSecurityGroup);
    resetSecurityGroup(): void;
    get securityGroupInput(): Ec2NetworkInsightsAnalysisExplanationsSecurityGroup | undefined;
    private _securityGroupRule?;
    get securityGroupRule(): Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRule;
    set securityGroupRule(value: Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRule);
    resetSecurityGroupRule(): void;
    get securityGroupRuleInput(): Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRule | undefined;
    private _securityGroups?;
    get securityGroups(): Ec2NetworkInsightsAnalysisExplanationsSecurityGroups[];
    set securityGroups(value: Ec2NetworkInsightsAnalysisExplanationsSecurityGroups[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): Ec2NetworkInsightsAnalysisExplanationsSecurityGroups[] | undefined;
    private _sourceVpc?;
    get sourceVpc(): Ec2NetworkInsightsAnalysisExplanationsSourceVpc;
    set sourceVpc(value: Ec2NetworkInsightsAnalysisExplanationsSourceVpc);
    resetSourceVpc(): void;
    get sourceVpcInput(): Ec2NetworkInsightsAnalysisExplanationsSourceVpc | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    private _subnet?;
    get subnet(): Ec2NetworkInsightsAnalysisExplanationsSubnet;
    set subnet(value: Ec2NetworkInsightsAnalysisExplanationsSubnet);
    resetSubnet(): void;
    get subnetInput(): Ec2NetworkInsightsAnalysisExplanationsSubnet | undefined;
    private _subnetRouteTable?;
    get subnetRouteTable(): Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTable;
    set subnetRouteTable(value: Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTable);
    resetSubnetRouteTable(): void;
    get subnetRouteTableInput(): Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTable | undefined;
    private _vpc?;
    get vpc(): Ec2NetworkInsightsAnalysisExplanationsVpc;
    set vpc(value: Ec2NetworkInsightsAnalysisExplanationsVpc);
    resetVpc(): void;
    get vpcInput(): Ec2NetworkInsightsAnalysisExplanationsVpc | undefined;
    private _vpcEndpoint?;
    get vpcEndpoint(): Ec2NetworkInsightsAnalysisExplanationsVpcEndpoint;
    set vpcEndpoint(value: Ec2NetworkInsightsAnalysisExplanationsVpcEndpoint);
    resetVpcEndpoint(): void;
    get vpcEndpointInput(): Ec2NetworkInsightsAnalysisExplanationsVpcEndpoint | undefined;
    private _vpcPeeringConnection?;
    get vpcPeeringConnection(): Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnection;
    set vpcPeeringConnection(value: Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnection);
    resetVpcPeeringConnection(): void;
    get vpcPeeringConnectionInput(): Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnection | undefined;
    private _vpnConnection?;
    get vpnConnection(): Ec2NetworkInsightsAnalysisExplanationsVpnConnection;
    set vpnConnection(value: Ec2NetworkInsightsAnalysisExplanationsVpnConnection);
    resetVpnConnection(): void;
    get vpnConnectionInput(): Ec2NetworkInsightsAnalysisExplanationsVpnConnection | undefined;
    private _vpnGateway?;
    get vpnGateway(): Ec2NetworkInsightsAnalysisExplanationsVpnGateway;
    set vpnGateway(value: Ec2NetworkInsightsAnalysisExplanationsVpnGateway);
    resetVpnGateway(): void;
    get vpnGatewayInput(): Ec2NetworkInsightsAnalysisExplanationsVpnGateway | undefined;
}
export declare function ec2NetworkInsightsAnalysisExplanationsToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanations): any;
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
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange): any;
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
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsAclRule): any;
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
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsComponent): any;
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
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc): any;
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
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges): any;
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
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges): any;
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
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeader): any;
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
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges): any;
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
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges): any;
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
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader): any;
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
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute): any;
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
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange): any;
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
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule): any;
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
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpc): any;
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
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsSubnet): any;
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
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsVpc): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponents extends cdktf.ComplexComputedList {
    private _aclRule?;
    get aclRule(): Ec2NetworkInsightsAnalysisForwardPathComponentsAclRule;
    set aclRule(value: Ec2NetworkInsightsAnalysisForwardPathComponentsAclRule);
    resetAclRule(): void;
    get aclRuleInput(): Ec2NetworkInsightsAnalysisForwardPathComponentsAclRule | undefined;
    private _component?;
    get component(): Ec2NetworkInsightsAnalysisForwardPathComponentsComponent;
    set component(value: Ec2NetworkInsightsAnalysisForwardPathComponentsComponent);
    resetComponent(): void;
    get componentInput(): Ec2NetworkInsightsAnalysisForwardPathComponentsComponent | undefined;
    private _destinationVpc?;
    get destinationVpc(): Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc;
    set destinationVpc(value: Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc);
    resetDestinationVpc(): void;
    get destinationVpcInput(): Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc | undefined;
    private _inboundHeader?;
    get inboundHeader(): Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeader;
    set inboundHeader(value: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeader);
    resetInboundHeader(): void;
    get inboundHeaderInput(): Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeader | undefined;
    private _outboundHeader?;
    get outboundHeader(): Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader;
    set outboundHeader(value: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader);
    resetOutboundHeader(): void;
    get outboundHeaderInput(): Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader | undefined;
    private _routeTableRoute?;
    get routeTableRoute(): Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute;
    set routeTableRoute(value: Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute);
    resetRouteTableRoute(): void;
    get routeTableRouteInput(): Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute | undefined;
    private _securityGroupRule?;
    get securityGroupRule(): Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule;
    set securityGroupRule(value: Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule);
    resetSecurityGroupRule(): void;
    get securityGroupRuleInput(): Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule | undefined;
    private _sequenceNumber?;
    get sequenceNumber(): number;
    set sequenceNumber(value: number);
    resetSequenceNumber(): void;
    get sequenceNumberInput(): number | undefined;
    private _sourceVpc?;
    get sourceVpc(): Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpc;
    set sourceVpc(value: Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpc);
    resetSourceVpc(): void;
    get sourceVpcInput(): Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpc | undefined;
    private _subnet?;
    get subnet(): Ec2NetworkInsightsAnalysisForwardPathComponentsSubnet;
    set subnet(value: Ec2NetworkInsightsAnalysisForwardPathComponentsSubnet);
    resetSubnet(): void;
    get subnetInput(): Ec2NetworkInsightsAnalysisForwardPathComponentsSubnet | undefined;
    private _vpc?;
    get vpc(): Ec2NetworkInsightsAnalysisForwardPathComponentsVpc;
    set vpc(value: Ec2NetworkInsightsAnalysisForwardPathComponentsVpc);
    resetVpc(): void;
    get vpcInput(): Ec2NetworkInsightsAnalysisForwardPathComponentsVpc | undefined;
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponents): any;
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
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange): any;
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
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsAclRule): any;
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
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsComponent): any;
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
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc): any;
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
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges): any;
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
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges): any;
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
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeader): any;
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
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges): any;
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
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges): any;
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
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader): any;
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
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute): any;
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
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange): any;
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
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule): any;
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
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpc): any;
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
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsSubnet): any;
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
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsVpc): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponents extends cdktf.ComplexComputedList {
    private _aclRule?;
    get aclRule(): Ec2NetworkInsightsAnalysisReturnPathComponentsAclRule;
    set aclRule(value: Ec2NetworkInsightsAnalysisReturnPathComponentsAclRule);
    resetAclRule(): void;
    get aclRuleInput(): Ec2NetworkInsightsAnalysisReturnPathComponentsAclRule | undefined;
    private _component?;
    get component(): Ec2NetworkInsightsAnalysisReturnPathComponentsComponent;
    set component(value: Ec2NetworkInsightsAnalysisReturnPathComponentsComponent);
    resetComponent(): void;
    get componentInput(): Ec2NetworkInsightsAnalysisReturnPathComponentsComponent | undefined;
    private _destinationVpc?;
    get destinationVpc(): Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc;
    set destinationVpc(value: Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc);
    resetDestinationVpc(): void;
    get destinationVpcInput(): Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc | undefined;
    private _inboundHeader?;
    get inboundHeader(): Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeader;
    set inboundHeader(value: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeader);
    resetInboundHeader(): void;
    get inboundHeaderInput(): Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeader | undefined;
    private _outboundHeader?;
    get outboundHeader(): Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader;
    set outboundHeader(value: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader);
    resetOutboundHeader(): void;
    get outboundHeaderInput(): Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader | undefined;
    private _routeTableRoute?;
    get routeTableRoute(): Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute;
    set routeTableRoute(value: Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute);
    resetRouteTableRoute(): void;
    get routeTableRouteInput(): Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute | undefined;
    private _securityGroupRule?;
    get securityGroupRule(): Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule;
    set securityGroupRule(value: Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule);
    resetSecurityGroupRule(): void;
    get securityGroupRuleInput(): Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule | undefined;
    private _sequenceNumber?;
    get sequenceNumber(): number;
    set sequenceNumber(value: number);
    resetSequenceNumber(): void;
    get sequenceNumberInput(): number | undefined;
    private _sourceVpc?;
    get sourceVpc(): Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpc;
    set sourceVpc(value: Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpc);
    resetSourceVpc(): void;
    get sourceVpcInput(): Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpc | undefined;
    private _subnet?;
    get subnet(): Ec2NetworkInsightsAnalysisReturnPathComponentsSubnet;
    set subnet(value: Ec2NetworkInsightsAnalysisReturnPathComponentsSubnet);
    resetSubnet(): void;
    get subnetInput(): Ec2NetworkInsightsAnalysisReturnPathComponentsSubnet | undefined;
    private _vpc?;
    get vpc(): Ec2NetworkInsightsAnalysisReturnPathComponentsVpc;
    set vpc(value: Ec2NetworkInsightsAnalysisReturnPathComponentsVpc);
    resetVpc(): void;
    get vpcInput(): Ec2NetworkInsightsAnalysisReturnPathComponentsVpc | undefined;
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponents): any;
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
export declare function ec2NetworkInsightsAnalysisTagsToTerraform(struct?: Ec2NetworkInsightsAnalysisTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html awscc_ec2_network_insights_analysis}
*/
export declare class Ec2NetworkInsightsAnalysis extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_network_insights_analysis.html awscc_ec2_network_insights_analysis} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2NetworkInsightsAnalysisConfig
    */
    constructor(scope: Construct, id: string, config: Ec2NetworkInsightsAnalysisConfig);
    get alternatePathHints(): any;
    get explanations(): any;
    private _filterInArns?;
    get filterInArns(): string[];
    set filterInArns(value: string[]);
    resetFilterInArns(): void;
    get filterInArnsInput(): string[] | undefined;
    get forwardPathComponents(): any;
    get id(): string;
    get networkInsightsAnalysisArn(): string;
    get networkInsightsAnalysisId(): string;
    private _networkInsightsPathId;
    get networkInsightsPathId(): string;
    set networkInsightsPathId(value: string);
    get networkInsightsPathIdInput(): string;
    get networkPathFound(): cdktf.IResolvable;
    get returnPathComponents(): any;
    get startDate(): string;
    get status(): string;
    get statusMessage(): string;
    private _tags?;
    get tags(): Ec2NetworkInsightsAnalysisTags[];
    set tags(value: Ec2NetworkInsightsAnalysisTags[]);
    resetTags(): void;
    get tagsInput(): Ec2NetworkInsightsAnalysisTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
