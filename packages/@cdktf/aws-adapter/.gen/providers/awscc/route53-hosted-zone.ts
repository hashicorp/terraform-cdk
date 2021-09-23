// https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function route53HostedZoneHostedZoneConfigToTerraform(struct?: Route53HostedZoneHostedZoneConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
  }
}

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

export function route53HostedZoneHostedZoneTagsToTerraform(struct?: Route53HostedZoneHostedZoneTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface Route53HostedZoneQueryLoggingConfig {
  /**
  * The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html#cloudwatch_logs_log_group_arn Route53HostedZone#cloudwatch_logs_log_group_arn}
  */
  readonly cloudwatchLogsLogGroupArn: string;
}

export function route53HostedZoneQueryLoggingConfigToTerraform(struct?: Route53HostedZoneQueryLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_logs_log_group_arn: cdktf.stringToTerraform(struct!.cloudwatchLogsLogGroupArn),
  }
}

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

export function route53HostedZoneVpCsToTerraform(struct?: Route53HostedZoneVpCs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vpc_region: cdktf.stringToTerraform(struct!.vpcRegion),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html awscc_route53_hosted_zone}
*/
export class Route53HostedZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53_hosted_zone";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53_hosted_zone.html awscc_route53_hosted_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53HostedZoneConfig
  */
  public constructor(scope: Construct, id: string, config: Route53HostedZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53_hosted_zone',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hostedZoneConfig = config.hostedZoneConfig;
    this._hostedZoneTags = config.hostedZoneTags;
    this._name = config.name;
    this._queryLoggingConfig = config.queryLoggingConfig;
    this._vpCs = config.vpCs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hosted_zone_config - computed: false, optional: true, required: false
  private _hostedZoneConfig?: Route53HostedZoneHostedZoneConfig;
  public get hostedZoneConfig() {
    return this.interpolationForAttribute('hosted_zone_config') as any;
  }
  public set hostedZoneConfig(value: Route53HostedZoneHostedZoneConfig ) {
    this._hostedZoneConfig = value;
  }
  public resetHostedZoneConfig() {
    this._hostedZoneConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneConfigInput() {
    return this._hostedZoneConfig
  }

  // hosted_zone_tags - computed: false, optional: true, required: false
  private _hostedZoneTags?: Route53HostedZoneHostedZoneTags[];
  public get hostedZoneTags() {
    return this.interpolationForAttribute('hosted_zone_tags') as any;
  }
  public set hostedZoneTags(value: Route53HostedZoneHostedZoneTags[] ) {
    this._hostedZoneTags = value;
  }
  public resetHostedZoneTags() {
    this._hostedZoneTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneTagsInput() {
    return this._hostedZoneTags
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // query_logging_config - computed: false, optional: true, required: false
  private _queryLoggingConfig?: Route53HostedZoneQueryLoggingConfig;
  public get queryLoggingConfig() {
    return this.interpolationForAttribute('query_logging_config') as any;
  }
  public set queryLoggingConfig(value: Route53HostedZoneQueryLoggingConfig ) {
    this._queryLoggingConfig = value;
  }
  public resetQueryLoggingConfig() {
    this._queryLoggingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLoggingConfigInput() {
    return this._queryLoggingConfig
  }

  // vp_cs - computed: false, optional: true, required: false
  private _vpCs?: Route53HostedZoneVpCs[];
  public get vpCs() {
    return this.interpolationForAttribute('vp_cs') as any;
  }
  public set vpCs(value: Route53HostedZoneVpCs[] ) {
    this._vpCs = value;
  }
  public resetVpCs() {
    this._vpCs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpCsInput() {
    return this._vpCs
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hosted_zone_config: route53HostedZoneHostedZoneConfigToTerraform(this._hostedZoneConfig),
      hosted_zone_tags: cdktf.listMapper(route53HostedZoneHostedZoneTagsToTerraform)(this._hostedZoneTags),
      name: cdktf.stringToTerraform(this._name),
      query_logging_config: route53HostedZoneQueryLoggingConfigToTerraform(this._queryLoggingConfig),
      vp_cs: cdktf.listMapper(route53HostedZoneVpCsToTerraform)(this._vpCs),
    };
  }
}
