// https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53HealthCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * A complex type that contains information about the health check.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#health_check_config Route53HealthCheck#health_check_config}
  */
  readonly healthCheckConfig: Route53HealthCheckHealthCheckConfig;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#health_check_tags Route53HealthCheck#health_check_tags}
  */
  readonly healthCheckTags?: Route53HealthCheckHealthCheckTags[];
}
export interface Route53HealthCheckHealthCheckConfigAlarmIdentifier {
  /**
  * The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#name Route53HealthCheck#name}
  */
  readonly name: string;
  /**
  * For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#region Route53HealthCheck#region}
  */
  readonly region: string;
}

export function route53HealthCheckHealthCheckConfigAlarmIdentifierToTerraform(struct?: Route53HealthCheckHealthCheckConfigAlarmIdentifier): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export interface Route53HealthCheckHealthCheckConfig {
  /**
  * A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#alarm_identifier Route53HealthCheck#alarm_identifier}
  */
  readonly alarmIdentifier?: Route53HealthCheckHealthCheckConfigAlarmIdentifier;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#child_health_checks Route53HealthCheck#child_health_checks}
  */
  readonly childHealthChecks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#enable_sni Route53HealthCheck#enable_sni}
  */
  readonly enableSni?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#failure_threshold Route53HealthCheck#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#fully_qualified_domain_name Route53HealthCheck#fully_qualified_domain_name}
  */
  readonly fullyQualifiedDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#health_threshold Route53HealthCheck#health_threshold}
  */
  readonly healthThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}
  */
  readonly insufficientDataHealthStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#inverted Route53HealthCheck#inverted}
  */
  readonly inverted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#ip_address Route53HealthCheck#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#measure_latency Route53HealthCheck#measure_latency}
  */
  readonly measureLatency?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#port Route53HealthCheck#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#regions Route53HealthCheck#regions}
  */
  readonly regions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#request_interval Route53HealthCheck#request_interval}
  */
  readonly requestInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#resource_path Route53HealthCheck#resource_path}
  */
  readonly resourcePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#routing_control_arn Route53HealthCheck#routing_control_arn}
  */
  readonly routingControlArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#search_string Route53HealthCheck#search_string}
  */
  readonly searchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#type Route53HealthCheck#type}
  */
  readonly type: string;
}

export function route53HealthCheckHealthCheckConfigToTerraform(struct?: Route53HealthCheckHealthCheckConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_identifier: route53HealthCheckHealthCheckConfigAlarmIdentifierToTerraform(struct!.alarmIdentifier),
    child_health_checks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.childHealthChecks),
    enable_sni: cdktf.booleanToTerraform(struct!.enableSni),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    fully_qualified_domain_name: cdktf.stringToTerraform(struct!.fullyQualifiedDomainName),
    health_threshold: cdktf.numberToTerraform(struct!.healthThreshold),
    insufficient_data_health_status: cdktf.stringToTerraform(struct!.insufficientDataHealthStatus),
    inverted: cdktf.booleanToTerraform(struct!.inverted),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    measure_latency: cdktf.booleanToTerraform(struct!.measureLatency),
    port: cdktf.numberToTerraform(struct!.port),
    regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
    request_interval: cdktf.numberToTerraform(struct!.requestInterval),
    resource_path: cdktf.stringToTerraform(struct!.resourcePath),
    routing_control_arn: cdktf.stringToTerraform(struct!.routingControlArn),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Route53HealthCheckHealthCheckTags {
  /**
  * The key name of the tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#key Route53HealthCheck#key}
  */
  readonly key: string;
  /**
  * The value for the tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html#value Route53HealthCheck#value}
  */
  readonly value: string;
}

export function route53HealthCheckHealthCheckTagsToTerraform(struct?: Route53HealthCheckHealthCheckTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html awscc_route53_health_check}
*/
export class Route53HealthCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53_health_check";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53_health_check.html awscc_route53_health_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53HealthCheckConfig
  */
  public constructor(scope: Construct, id: string, config: Route53HealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53_health_check',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._healthCheckConfig = config.healthCheckConfig;
    this._healthCheckTags = config.healthCheckTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // health_check_config - computed: false, optional: false, required: true
  private _healthCheckConfig: Route53HealthCheckHealthCheckConfig;
  public get healthCheckConfig() {
    return this.interpolationForAttribute('health_check_config') as any;
  }
  public set healthCheckConfig(value: Route53HealthCheckHealthCheckConfig) {
    this._healthCheckConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConfigInput() {
    return this._healthCheckConfig
  }

  // health_check_id - computed: true, optional: false, required: false
  public get healthCheckId() {
    return this.getStringAttribute('health_check_id');
  }

  // health_check_tags - computed: false, optional: true, required: false
  private _healthCheckTags?: Route53HealthCheckHealthCheckTags[];
  public get healthCheckTags() {
    return this.interpolationForAttribute('health_check_tags') as any;
  }
  public set healthCheckTags(value: Route53HealthCheckHealthCheckTags[] ) {
    this._healthCheckTags = value;
  }
  public resetHealthCheckTags() {
    this._healthCheckTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTagsInput() {
    return this._healthCheckTags
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      health_check_config: route53HealthCheckHealthCheckConfigToTerraform(this._healthCheckConfig),
      health_check_tags: cdktf.listMapper(route53HealthCheckHealthCheckTagsToTerraform)(this._healthCheckTags),
    };
  }
}
