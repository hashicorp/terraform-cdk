import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53HostedZoneConfig extends cdktf.TerraformMetaArguments {
    /**
    * A complex type that contains an optional comment.
  
  If you don't want to specify a comment, omit the HostedZoneConfig and Comment elements.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html#hosted_zone_config Route53HostedZone#hosted_zone_config}
    */
    readonly hostedZoneConfig?: Route53HostedZoneHostedZoneConfig;
    /**
    * Adds, edits, or deletes tags for a health check or a hosted zone.
  
  For information about using tags for cost allocation, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html#hosted_zone_tags Route53HostedZone#hosted_zone_tags}
    */
    readonly hostedZoneTags?: Route53HostedZoneHostedZoneTags[];
    /**
    * The name of the domain. Specify a fully qualified domain name, for example, www.example.com. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats www.example.com (without a trailing dot) and www.example.com. (with a trailing dot) as identical.
  
  If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of NameServers that are returned by the Fn::GetAtt intrinsic function.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html#name Route53HostedZone#name}
    */
    readonly name: string;
    /**
    * A complex type that contains information about a configuration for DNS query logging.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html#query_logging_config Route53HostedZone#query_logging_config}
    */
    readonly queryLoggingConfig?: Route53HostedZoneQueryLoggingConfig;
    /**
    * A complex type that contains information about the VPCs that are associated with the specified hosted zone.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html#vp_cs Route53HostedZone#vp_cs}
    */
    readonly vpCs?: Route53HostedZoneVpCs[];
}
export interface Route53HostedZoneHostedZoneConfig {
    /**
    * Any comments that you want to include about the hosted zone.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html#comment Route53HostedZone#comment}
    */
    readonly comment?: string;
}
export declare function route53HostedZoneHostedZoneConfigToTerraform(struct?: Route53HostedZoneHostedZoneConfig): any;
export interface Route53HostedZoneHostedZoneTags {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html#key Route53HostedZone#key}
    */
    readonly key: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html#value Route53HostedZone#value}
    */
    readonly value: string;
}
export declare function route53HostedZoneHostedZoneTagsToTerraform(struct?: Route53HostedZoneHostedZoneTags): any;
export interface Route53HostedZoneQueryLoggingConfig {
    /**
    * The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html#cloudwatch_logs_log_group_arn Route53HostedZone#cloudwatch_logs_log_group_arn}
    */
    readonly cloudwatchLogsLogGroupArn: string;
}
export declare function route53HostedZoneQueryLoggingConfigToTerraform(struct?: Route53HostedZoneQueryLoggingConfig): any;
export interface Route53HostedZoneVpCs {
    /**
    * The ID of an Amazon VPC.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html#vpc_id Route53HostedZone#vpc_id}
    */
    readonly vpcId: string;
    /**
    * The region that an Amazon VPC was created in. See https://docs.aws.amazon.com/general/latest/gr/rande.html for a list of up to date regions.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html#vpc_region Route53HostedZone#vpc_region}
    */
    readonly vpcRegion: string;
}
export declare function route53HostedZoneVpCsToTerraform(struct?: Route53HostedZoneVpCs): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html awscc_route53_hosted_zone}
*/
export declare class Route53HostedZone extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html awscc_route53_hosted_zone} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53HostedZoneConfig
    */
    constructor(scope: Construct, id: string, config: Route53HostedZoneConfig);
    private _hostedZoneConfig?;
    get hostedZoneConfig(): Route53HostedZoneHostedZoneConfig;
    set hostedZoneConfig(value: Route53HostedZoneHostedZoneConfig);
    resetHostedZoneConfig(): void;
    get hostedZoneConfigInput(): Route53HostedZoneHostedZoneConfig | undefined;
    private _hostedZoneTags?;
    get hostedZoneTags(): Route53HostedZoneHostedZoneTags[];
    set hostedZoneTags(value: Route53HostedZoneHostedZoneTags[]);
    resetHostedZoneTags(): void;
    get hostedZoneTagsInput(): Route53HostedZoneHostedZoneTags[] | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get nameServers(): string[];
    private _queryLoggingConfig?;
    get queryLoggingConfig(): Route53HostedZoneQueryLoggingConfig;
    set queryLoggingConfig(value: Route53HostedZoneQueryLoggingConfig);
    resetQueryLoggingConfig(): void;
    get queryLoggingConfigInput(): Route53HostedZoneQueryLoggingConfig | undefined;
    private _vpCs?;
    get vpCs(): Route53HostedZoneVpCs[];
    set vpCs(value: Route53HostedZoneVpCs[]);
    resetVpCs(): void;
    get vpCsInput(): Route53HostedZoneVpCs[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
