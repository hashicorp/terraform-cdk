import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2NetworkInsightsAnalysisConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_analysis.html#id DataAwsccEc2NetworkInsightsAnalysis#id}
    */
    readonly id: string;
}
export declare class DataAwsccEc2NetworkInsightsAnalysisAlternatePathHints extends cdktf.ComplexComputedList {
    get componentArn(): string;
    get componentId(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisAlternatePathHintsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisAlternatePathHints): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsAcl extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsAclToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsAcl): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRange extends cdktf.ComplexComputedList {
    get from(): number;
    get to(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRange): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRule extends cdktf.ComplexComputedList {
    get cidr(): string;
    get egress(): any;
    get portRange(): any;
    get protocol(): string;
    get ruleAction(): string;
    get ruleNumber(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRule): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedTo extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedToToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedTo): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener extends cdktf.ComplexComputedList {
    get instancePort(): number;
    get loadBalancerPort(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsComponent extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsComponentToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsComponent): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGateway extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGateway): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsDestination extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsDestination): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpc extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpc): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTable extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTable): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGateway extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGateway): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTarget extends cdktf.ComplexComputedList {
    get address(): string;
    get availabilityZone(): string;
    get instance(): any;
    get port(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTarget): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsNatGateway extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsNatGateway): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterface extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterface): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRanges extends cdktf.ComplexComputedList {
    get from(): number;
    get to(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsPortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRanges): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixList extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixList): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTable extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTable): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRoute extends cdktf.ComplexComputedList {
    get destinationCidr(): string;
    get destinationPrefixListId(): string;
    get egressOnlyInternetGatewayId(): string;
    get gatewayId(): string;
    get instanceId(): string;
    get natGatewayId(): string;
    get networkInterfaceId(): string;
    get origin(): string;
    get transitGatewayId(): string;
    get vpcPeeringConnectionId(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRoute): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroup extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroup): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange extends cdktf.ComplexComputedList {
    get from(): number;
    get to(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule extends cdktf.ComplexComputedList {
    get cidr(): string;
    get direction(): string;
    get portRange(): any;
    get prefixListId(): string;
    get protocol(): string;
    get securityGroupId(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroups extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroups): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpc extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpc): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnet extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnet): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpc extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpc): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpoint extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpoint): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnection extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnection): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGateway extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGateway): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisExplanations extends cdktf.ComplexComputedList {
    get acl(): any;
    get aclRule(): any;
    get address(): string;
    get addresses(): string[];
    get attachedTo(): any;
    get availabilityZones(): string[];
    get cidrs(): string[];
    get classicLoadBalancerListener(): any;
    get component(): any;
    get customerGateway(): any;
    get destination(): any;
    get destinationVpc(): any;
    get direction(): string;
    get elasticLoadBalancerListener(): any;
    get explanationCode(): string;
    get ingressRouteTable(): any;
    get internetGateway(): any;
    get loadBalancerArn(): string;
    get loadBalancerListenerPort(): number;
    get loadBalancerTarget(): any;
    get loadBalancerTargetGroup(): any;
    get loadBalancerTargetGroups(): any;
    get loadBalancerTargetPort(): number;
    get missingComponent(): string;
    get natGateway(): any;
    get networkInterface(): any;
    get packetField(): string;
    get port(): number;
    get portRanges(): any;
    get prefixList(): any;
    get protocols(): string[];
    get routeTable(): any;
    get routeTableRoute(): any;
    get securityGroup(): any;
    get securityGroupRule(): any;
    get securityGroups(): any;
    get sourceVpc(): any;
    get state(): string;
    get subnet(): any;
    get subnetRouteTable(): any;
    get vpc(): any;
    get vpcEndpoint(): any;
    get vpcPeeringConnection(): any;
    get vpnConnection(): any;
    get vpnGateway(): any;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisExplanationsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanations): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange extends cdktf.ComplexComputedList {
    get from(): number;
    get to(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRule extends cdktf.ComplexComputedList {
    get cidr(): string;
    get egress(): any;
    get portRange(): any;
    get protocol(): string;
    get ruleAction(): string;
    get ruleNumber(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRule): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponent extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponent): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges extends cdktf.ComplexComputedList {
    get from(): number;
    get to(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges extends cdktf.ComplexComputedList {
    get from(): number;
    get to(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader extends cdktf.ComplexComputedList {
    get destinationAddresses(): string[];
    get destinationPortRanges(): any;
    get protocol(): string;
    get sourceAddresses(): string[];
    get sourcePortRanges(): any;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges extends cdktf.ComplexComputedList {
    get from(): number;
    get to(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges extends cdktf.ComplexComputedList {
    get from(): number;
    get to(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader extends cdktf.ComplexComputedList {
    get destinationAddresses(): string[];
    get destinationPortRanges(): any;
    get protocol(): string;
    get sourceAddresses(): string[];
    get sourcePortRanges(): any;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute extends cdktf.ComplexComputedList {
    get destinationCidr(): string;
    get destinationPrefixListId(): string;
    get egressOnlyInternetGatewayId(): string;
    get gatewayId(): string;
    get instanceId(): string;
    get natGatewayId(): string;
    get networkInterfaceId(): string;
    get origin(): string;
    get transitGatewayId(): string;
    get vpcPeeringConnectionId(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange extends cdktf.ComplexComputedList {
    get from(): number;
    get to(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule extends cdktf.ComplexComputedList {
    get cidr(): string;
    get direction(): string;
    get portRange(): any;
    get prefixListId(): string;
    get protocol(): string;
    get securityGroupId(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnet extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnet): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpc extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpc): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponents extends cdktf.ComplexComputedList {
    get aclRule(): any;
    get component(): any;
    get destinationVpc(): any;
    get inboundHeader(): any;
    get outboundHeader(): any;
    get routeTableRoute(): any;
    get securityGroupRule(): any;
    get sequenceNumber(): number;
    get sourceVpc(): any;
    get subnet(): any;
    get vpc(): any;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponents): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange extends cdktf.ComplexComputedList {
    get from(): number;
    get to(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRule extends cdktf.ComplexComputedList {
    get cidr(): string;
    get egress(): any;
    get portRange(): any;
    get protocol(): string;
    get ruleAction(): string;
    get ruleNumber(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRule): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponent extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponent): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges extends cdktf.ComplexComputedList {
    get from(): number;
    get to(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges extends cdktf.ComplexComputedList {
    get from(): number;
    get to(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader extends cdktf.ComplexComputedList {
    get destinationAddresses(): string[];
    get destinationPortRanges(): any;
    get protocol(): string;
    get sourceAddresses(): string[];
    get sourcePortRanges(): any;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges extends cdktf.ComplexComputedList {
    get from(): number;
    get to(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges extends cdktf.ComplexComputedList {
    get from(): number;
    get to(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader extends cdktf.ComplexComputedList {
    get destinationAddresses(): string[];
    get destinationPortRanges(): any;
    get protocol(): string;
    get sourceAddresses(): string[];
    get sourcePortRanges(): any;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute extends cdktf.ComplexComputedList {
    get destinationCidr(): string;
    get destinationPrefixListId(): string;
    get egressOnlyInternetGatewayId(): string;
    get gatewayId(): string;
    get instanceId(): string;
    get natGatewayId(): string;
    get networkInterfaceId(): string;
    get origin(): string;
    get transitGatewayId(): string;
    get vpcPeeringConnectionId(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange extends cdktf.ComplexComputedList {
    get from(): number;
    get to(): number;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule extends cdktf.ComplexComputedList {
    get cidr(): string;
    get direction(): string;
    get portRange(): any;
    get prefixListId(): string;
    get protocol(): string;
    get securityGroupId(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnet extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnet): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpc extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpc): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponents extends cdktf.ComplexComputedList {
    get aclRule(): any;
    get component(): any;
    get destinationVpc(): any;
    get inboundHeader(): any;
    get outboundHeader(): any;
    get routeTableRoute(): any;
    get securityGroupRule(): any;
    get sequenceNumber(): number;
    get sourceVpc(): any;
    get subnet(): any;
    get vpc(): any;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponents): any;
export declare class DataAwsccEc2NetworkInsightsAnalysisTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEc2NetworkInsightsAnalysisTagsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_analysis.html awscc_ec2_network_insights_analysis}
*/
export declare class DataAwsccEc2NetworkInsightsAnalysis extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_network_insights_analysis.html awscc_ec2_network_insights_analysis} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2NetworkInsightsAnalysisConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2NetworkInsightsAnalysisConfig);
    get alternatePathHints(): any;
    get explanations(): any;
    get filterInArns(): string[];
    get forwardPathComponents(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get networkInsightsAnalysisArn(): string;
    get networkInsightsAnalysisId(): string;
    get networkInsightsPathId(): string;
    get networkPathFound(): cdktf.IResolvable;
    get returnPathComponents(): any;
    get startDate(): string;
    get status(): string;
    get statusMessage(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
