// https://www.terraform.io/docs/providers/awscc/d/route53_hosted_zone.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRoute53HostedZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53_hosted_zone.html#id DataAwsccRoute53HostedZone#id}
  */
  readonly id: string;
}
export class DataAwsccRoute53HostedZoneHostedZoneConfig extends cdktf.ComplexComputedList {

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }
}

export function dataAwsccRoute53HostedZoneHostedZoneConfigToTerraform(struct?: DataAwsccRoute53HostedZoneHostedZoneConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
  }
}

export class DataAwsccRoute53HostedZoneHostedZoneTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccRoute53HostedZoneHostedZoneTagsToTerraform(struct?: DataAwsccRoute53HostedZoneHostedZoneTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccRoute53HostedZoneQueryLoggingConfig extends cdktf.ComplexComputedList {

  // cloudwatch_logs_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogsLogGroupArn() {
    return this.getStringAttribute('cloudwatch_logs_log_group_arn');
  }
}

export function dataAwsccRoute53HostedZoneQueryLoggingConfigToTerraform(struct?: DataAwsccRoute53HostedZoneQueryLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_logs_log_group_arn: cdktf.stringToTerraform(struct!.cloudwatchLogsLogGroupArn),
  }
}

export class DataAwsccRoute53HostedZoneVpCs extends cdktf.ComplexComputedList {

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_region - computed: true, optional: false, required: false
  public get vpcRegion() {
    return this.getStringAttribute('vpc_region');
  }
}

export function dataAwsccRoute53HostedZoneVpCsToTerraform(struct?: DataAwsccRoute53HostedZoneVpCs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vpc_region: cdktf.stringToTerraform(struct!.vpcRegion),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53_hosted_zone.html awscc_route53_hosted_zone}
*/
export class DataAwsccRoute53HostedZone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53_hosted_zone";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53_hosted_zone.html awscc_route53_hosted_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53HostedZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53HostedZoneConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hosted_zone_config - computed: true, optional: false, required: false
  public get hostedZoneConfig() {
    return this.interpolationForAttribute('hosted_zone_config') as any;
  }

  // hosted_zone_tags - computed: true, optional: false, required: false
  public get hostedZoneTags() {
    return this.interpolationForAttribute('hosted_zone_tags') as any;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // query_logging_config - computed: true, optional: false, required: false
  public get queryLoggingConfig() {
    return this.interpolationForAttribute('query_logging_config') as any;
  }

  // vp_cs - computed: true, optional: false, required: false
  public get vpCs() {
    return this.interpolationForAttribute('vp_cs') as any;
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
