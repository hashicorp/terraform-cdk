// https://www.terraform.io/docs/providers/awscc/d/route53_health_check.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRoute53HealthCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53_health_check.html#id DataAwsccRoute53HealthCheck#id}
  */
  readonly id: string;
}
export class DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export function dataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierToTerraform(struct?: DataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifier): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class DataAwsccRoute53HealthCheckHealthCheckConfig extends cdktf.ComplexComputedList {

  // alarm_identifier - computed: true, optional: false, required: false
  public get alarmIdentifier() {
    return this.interpolationForAttribute('alarm_identifier') as any;
  }

  // child_health_checks - computed: true, optional: false, required: false
  public get childHealthChecks() {
    return this.getListAttribute('child_health_checks');
  }

  // enable_sni - computed: true, optional: false, required: false
  public get enableSni() {
    return this.getBooleanAttribute('enable_sni');
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // fully_qualified_domain_name - computed: true, optional: false, required: false
  public get fullyQualifiedDomainName() {
    return this.getStringAttribute('fully_qualified_domain_name');
  }

  // health_threshold - computed: true, optional: false, required: false
  public get healthThreshold() {
    return this.getNumberAttribute('health_threshold');
  }

  // insufficient_data_health_status - computed: true, optional: false, required: false
  public get insufficientDataHealthStatus() {
    return this.getStringAttribute('insufficient_data_health_status');
  }

  // inverted - computed: true, optional: false, required: false
  public get inverted() {
    return this.getBooleanAttribute('inverted');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // measure_latency - computed: true, optional: false, required: false
  public get measureLatency() {
    return this.getBooleanAttribute('measure_latency');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getListAttribute('regions');
  }

  // request_interval - computed: true, optional: false, required: false
  public get requestInterval() {
    return this.getNumberAttribute('request_interval');
  }

  // resource_path - computed: true, optional: false, required: false
  public get resourcePath() {
    return this.getStringAttribute('resource_path');
  }

  // routing_control_arn - computed: true, optional: false, required: false
  public get routingControlArn() {
    return this.getStringAttribute('routing_control_arn');
  }

  // search_string - computed: true, optional: false, required: false
  public get searchString() {
    return this.getStringAttribute('search_string');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccRoute53HealthCheckHealthCheckConfigToTerraform(struct?: DataAwsccRoute53HealthCheckHealthCheckConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_identifier: dataAwsccRoute53HealthCheckHealthCheckConfigAlarmIdentifierToTerraform(struct!.alarmIdentifier),
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

export class DataAwsccRoute53HealthCheckHealthCheckTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccRoute53HealthCheckHealthCheckTagsToTerraform(struct?: DataAwsccRoute53HealthCheckHealthCheckTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53_health_check.html awscc_route53_health_check}
*/
export class DataAwsccRoute53HealthCheck extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53_health_check";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53_health_check.html awscc_route53_health_check} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53HealthCheckConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53HealthCheckConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // health_check_config - computed: true, optional: false, required: false
  public get healthCheckConfig() {
    return this.interpolationForAttribute('health_check_config') as any;
  }

  // health_check_id - computed: true, optional: false, required: false
  public get healthCheckId() {
    return this.getStringAttribute('health_check_id');
  }

  // health_check_tags - computed: true, optional: false, required: false
  public get healthCheckTags() {
    return this.interpolationForAttribute('health_check_tags') as any;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
