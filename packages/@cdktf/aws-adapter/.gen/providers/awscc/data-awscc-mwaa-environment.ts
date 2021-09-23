// https://www.terraform.io/docs/providers/awscc/d/mwaa_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccMwaaEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mwaa_environment.html#id DataAwsccMwaaEnvironment#id}
  */
  readonly id: string;
}
export class DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs extends cdktf.ComplexComputedList {

  // cloudwatch_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
}

export function dataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_log_group_arn: cdktf.stringToTerraform(struct!.cloudwatchLogGroupArn),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export class DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs extends cdktf.ComplexComputedList {

  // cloudwatch_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
}

export function dataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_log_group_arn: cdktf.stringToTerraform(struct!.cloudwatchLogGroupArn),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export class DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs extends cdktf.ComplexComputedList {

  // cloudwatch_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
}

export function dataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_log_group_arn: cdktf.stringToTerraform(struct!.cloudwatchLogGroupArn),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export class DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs extends cdktf.ComplexComputedList {

  // cloudwatch_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
}

export function dataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_log_group_arn: cdktf.stringToTerraform(struct!.cloudwatchLogGroupArn),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export class DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs extends cdktf.ComplexComputedList {

  // cloudwatch_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
}

export function dataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_log_group_arn: cdktf.stringToTerraform(struct!.cloudwatchLogGroupArn),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export class DataAwsccMwaaEnvironmentLoggingConfiguration extends cdktf.ComplexComputedList {

  // dag_processing_logs - computed: true, optional: false, required: false
  public get dagProcessingLogs() {
    return this.interpolationForAttribute('dag_processing_logs') as any;
  }

  // scheduler_logs - computed: true, optional: false, required: false
  public get schedulerLogs() {
    return this.interpolationForAttribute('scheduler_logs') as any;
  }

  // task_logs - computed: true, optional: false, required: false
  public get taskLogs() {
    return this.interpolationForAttribute('task_logs') as any;
  }

  // webserver_logs - computed: true, optional: false, required: false
  public get webserverLogs() {
    return this.interpolationForAttribute('webserver_logs') as any;
  }

  // worker_logs - computed: true, optional: false, required: false
  public get workerLogs() {
    return this.interpolationForAttribute('worker_logs') as any;
  }
}

export function dataAwsccMwaaEnvironmentLoggingConfigurationToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dag_processing_logs: dataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct!.dagProcessingLogs),
    scheduler_logs: dataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct!.schedulerLogs),
    task_logs: dataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct!.taskLogs),
    webserver_logs: dataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct!.webserverLogs),
    worker_logs: dataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct!.workerLogs),
  }
}

export class DataAwsccMwaaEnvironmentNetworkConfiguration extends cdktf.ComplexComputedList {

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}

export function dataAwsccMwaaEnvironmentNetworkConfigurationToTerraform(struct?: DataAwsccMwaaEnvironmentNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mwaa_environment.html awscc_mwaa_environment}
*/
export class DataAwsccMwaaEnvironment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mwaa_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mwaa_environment.html awscc_mwaa_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMwaaEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMwaaEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mwaa_environment',
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

  // airflow_configuration_options - computed: true, optional: false, required: false
  public airflowConfigurationOptions(key: string): string {
    return new cdktf.StringMap(this, 'airflow_configuration_options').lookup(key);
  }

  // airflow_version - computed: true, optional: false, required: false
  public get airflowVersion() {
    return this.getStringAttribute('airflow_version');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // dag_s3_path - computed: true, optional: false, required: false
  public get dagS3Path() {
    return this.getStringAttribute('dag_s3_path');
  }

  // environment_class - computed: true, optional: false, required: false
  public get environmentClass() {
    return this.getStringAttribute('environment_class');
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
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

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }

  // logging_configuration - computed: true, optional: false, required: false
  public get loggingConfiguration() {
    return this.interpolationForAttribute('logging_configuration') as any;
  }

  // max_workers - computed: true, optional: false, required: false
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }

  // min_workers - computed: true, optional: false, required: false
  public get minWorkers() {
    return this.getNumberAttribute('min_workers');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_configuration - computed: true, optional: false, required: false
  public get networkConfiguration() {
    return this.interpolationForAttribute('network_configuration') as any;
  }

  // plugins_s3_object_version - computed: true, optional: false, required: false
  public get pluginsS3ObjectVersion() {
    return this.getStringAttribute('plugins_s3_object_version');
  }

  // plugins_s3_path - computed: true, optional: false, required: false
  public get pluginsS3Path() {
    return this.getStringAttribute('plugins_s3_path');
  }

  // requirements_s3_object_version - computed: true, optional: false, required: false
  public get requirementsS3ObjectVersion() {
    return this.getStringAttribute('requirements_s3_object_version');
  }

  // requirements_s3_path - computed: true, optional: false, required: false
  public get requirementsS3Path() {
    return this.getStringAttribute('requirements_s3_path');
  }

  // schedulers - computed: true, optional: false, required: false
  public get schedulers() {
    return this.getNumberAttribute('schedulers');
  }

  // source_bucket_arn - computed: true, optional: false, required: false
  public get sourceBucketArn() {
    return this.getStringAttribute('source_bucket_arn');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // webserver_access_mode - computed: true, optional: false, required: false
  public get webserverAccessMode() {
    return this.getStringAttribute('webserver_access_mode');
  }

  // webserver_url - computed: true, optional: false, required: false
  public get webserverUrl() {
    return this.getStringAttribute('webserver_url');
  }

  // weekly_maintenance_window_start - computed: true, optional: false, required: false
  public get weeklyMaintenanceWindowStart() {
    return this.getStringAttribute('weekly_maintenance_window_start');
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
