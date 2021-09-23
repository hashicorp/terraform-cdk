import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecoveryreadinessResourceSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the resource set to create.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#resource_set_name Route53RecoveryreadinessResourceSet#resource_set_name}
    */
    readonly resourceSetName: string;
    /**
    * The resource type of the resources in the resource set. Enter one of the following values for resource type:
  
  AWS: :AutoScaling: :AutoScalingGroup, AWS: :CloudWatch: :Alarm, AWS: :EC2: :CustomerGateway, AWS: :DynamoDB: :Table, AWS: :EC2: :Volume, AWS: :ElasticLoadBalancing: :LoadBalancer, AWS: :ElasticLoadBalancingV2: :LoadBalancer, AWS: :MSK: :Cluster, AWS: :RDS: :DBCluster, AWS: :Route53: :HealthCheck, AWS: :SQS: :Queue, AWS: :SNS: :Topic, AWS: :SNS: :Subscription, AWS: :EC2: :VPC, AWS: :EC2: :VPNConnection, AWS: :EC2: :VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#resource_set_type Route53RecoveryreadinessResourceSet#resource_set_type}
    */
    readonly resourceSetType: string;
    /**
    * A list of resource objects in the resource set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#resources Route53RecoveryreadinessResourceSet#resources}
    */
    readonly resources: Route53RecoveryreadinessResourceSetResources[];
    /**
    * A tag to associate with the parameters for a resource set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#tags Route53RecoveryreadinessResourceSet#tags}
    */
    readonly tags?: Route53RecoveryreadinessResourceSetTags[];
}
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource {
    /**
    * A Network Load Balancer resource Amazon Resource Name (ARN).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#arn Route53RecoveryreadinessResourceSet#arn}
    */
    readonly arn?: string;
}
export declare function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource): any;
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource {
    /**
    * The DNS target domain name.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#domain_name Route53RecoveryreadinessResourceSet#domain_name}
    */
    readonly domainName?: string;
    /**
    * The Resource Record set id.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}
    */
    readonly recordSetId?: string;
}
export declare function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource): any;
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource {
    /**
    * The Network Load Balancer resource that a DNS target resource points to.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#nlb_resource Route53RecoveryreadinessResourceSet#nlb_resource}
    */
    readonly nlbResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource;
    /**
    * The Route 53 resource that a DNS target resource record points to.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#r53_resource Route53RecoveryreadinessResourceSet#r53_resource}
    */
    readonly r53Resource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource;
}
export declare function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource): any;
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResource {
    /**
    * The domain name that acts as an ingress point to a portion of the customer application.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#domain_name Route53RecoveryreadinessResourceSet#domain_name}
    */
    readonly domainName?: string;
    /**
    * The hosted zone Amazon Resource Name (ARN) that contains the DNS record with the provided name of the target resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#hosted_zone_arn Route53RecoveryreadinessResourceSet#hosted_zone_arn}
    */
    readonly hostedZoneArn?: string;
    /**
    * The Route 53 record set ID that will uniquely identify a DNS record, given a name and a type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}
    */
    readonly recordSetId?: string;
    /**
    * The type of DNS record of the target resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#record_type Route53RecoveryreadinessResourceSet#record_type}
    */
    readonly recordType?: string;
    /**
    * The target resource that the Route 53 record points to.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#target_resource Route53RecoveryreadinessResourceSet#target_resource}
    */
    readonly targetResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource;
}
export declare function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource): any;
export interface Route53RecoveryreadinessResourceSetResources {
    /**
    * The component identifier of the resource, generated when DNS target resource is used.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#component_id Route53RecoveryreadinessResourceSet#component_id}
    */
    readonly componentId?: string;
    /**
    * A component for DNS/routing control readiness checks.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#dns_target_resource Route53RecoveryreadinessResourceSet#dns_target_resource}
    */
    readonly dnsTargetResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource;
    /**
    * A list of recovery group Amazon Resource Names (ARNs) and cell ARNs that this resource is contained within.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#readiness_scopes Route53RecoveryreadinessResourceSet#readiness_scopes}
    */
    readonly readinessScopes?: string[];
    /**
    * The Amazon Resource Name (ARN) of the AWS resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#resource_arn Route53RecoveryreadinessResourceSet#resource_arn}
    */
    readonly resourceArn?: string;
}
export declare function route53RecoveryreadinessResourceSetResourcesToTerraform(struct?: Route53RecoveryreadinessResourceSetResources): any;
export interface Route53RecoveryreadinessResourceSetTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#key Route53RecoveryreadinessResourceSet#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html#value Route53RecoveryreadinessResourceSet#value}
    */
    readonly value: string[];
}
export declare function route53RecoveryreadinessResourceSetTagsToTerraform(struct?: Route53RecoveryreadinessResourceSetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html awscc_route53recoveryreadiness_resource_set}
*/
export declare class Route53RecoveryreadinessResourceSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53recoveryreadiness_resource_set.html awscc_route53recoveryreadiness_resource_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessResourceSetConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoveryreadinessResourceSetConfig);
    get id(): string;
    get resourceSetArn(): string;
    private _resourceSetName;
    get resourceSetName(): string;
    set resourceSetName(value: string);
    get resourceSetNameInput(): string;
    private _resourceSetType;
    get resourceSetType(): string;
    set resourceSetType(value: string);
    get resourceSetTypeInput(): string;
    private _resources;
    get resources(): Route53RecoveryreadinessResourceSetResources[];
    set resources(value: Route53RecoveryreadinessResourceSetResources[]);
    get resourcesInput(): Route53RecoveryreadinessResourceSetResources[];
    private _tags?;
    get tags(): Route53RecoveryreadinessResourceSetTags[];
    set tags(value: Route53RecoveryreadinessResourceSetTags[]);
    resetTags(): void;
    get tagsInput(): Route53RecoveryreadinessResourceSetTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
