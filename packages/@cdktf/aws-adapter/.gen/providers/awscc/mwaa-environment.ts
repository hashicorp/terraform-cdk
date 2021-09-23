// https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MwaaEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Key/value pairs representing Airflow configuration variables.
    Keys are prefixed by their section:

    [core]
    dags_folder={AIRFLOW_HOME}/dags

    Would be represented as

    "core.dags_folder": "{AIRFLOW_HOME}/dags"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}
  */
  readonly airflowConfigurationOptions?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Version of airflow to deploy to the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#airflow_version MwaaEnvironment#airflow_version}
  */
  readonly airflowVersion?: string;
  /**
  * Represents an S3 prefix relative to the root of an S3 bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#dag_s3_path MwaaEnvironment#dag_s3_path}
  */
  readonly dagS3Path?: string;
  /**
  * Templated configuration for airflow processes and backing infrastructure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#environment_class MwaaEnvironment#environment_class}
  */
  readonly environmentClass?: string;
  /**
  * IAM role to be used by tasks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#execution_role_arn MwaaEnvironment#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for MWAA data encryption.

    You can specify the CMK using any of the following:

    Key ID. For example, key/1234abcd-12ab-34cd-56ef-1234567890ab.

    Key alias. For example, alias/ExampleAlias.

    Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.

    Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.

    AWS authenticates the CMK asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid, the action can appear to complete, but eventually fails.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#kms_key MwaaEnvironment#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Logging configuration for the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#logging_configuration MwaaEnvironment#logging_configuration}
  */
  readonly loggingConfiguration?: MwaaEnvironmentLoggingConfiguration;
  /**
  * Maximum worker compute units.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#max_workers MwaaEnvironment#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Minimum worker compute units.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#min_workers MwaaEnvironment#min_workers}
  */
  readonly minWorkers?: number;
  /**
  * Customer-defined identifier for the environment, unique per customer region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#name MwaaEnvironment#name}
  */
  readonly name: string;
  /**
  * Configures the network resources of the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#network_configuration MwaaEnvironment#network_configuration}
  */
  readonly networkConfiguration?: MwaaEnvironmentNetworkConfiguration;
  /**
  * Represents an version ID for an S3 object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}
  */
  readonly pluginsS3ObjectVersion?: string;
  /**
  * Represents an S3 prefix relative to the root of an S3 bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#plugins_s3_path MwaaEnvironment#plugins_s3_path}
  */
  readonly pluginsS3Path?: string;
  /**
  * Represents an version ID for an S3 object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}
  */
  readonly requirementsS3ObjectVersion?: string;
  /**
  * Represents an S3 prefix relative to the root of an S3 bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#requirements_s3_path MwaaEnvironment#requirements_s3_path}
  */
  readonly requirementsS3Path?: string;
  /**
  * Scheduler compute units.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#schedulers MwaaEnvironment#schedulers}
  */
  readonly schedulers?: number;
  /**
  * ARN for the AWS S3 bucket to use as the source of DAGs and plugins for the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#source_bucket_arn MwaaEnvironment#source_bucket_arn}
  */
  readonly sourceBucketArn?: string;
  /**
  * A map of tags for the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#tags MwaaEnvironment#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Choice for mode of webserver access including over public internet or via private VPC endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#webserver_access_mode MwaaEnvironment#webserver_access_mode}
  */
  readonly webserverAccessMode?: string;
  /**
  * Start time for the weekly maintenance window.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}
  */
  readonly weeklyMaintenanceWindowStart?: string;
}
export interface MwaaEnvironmentLoggingConfigurationDagProcessingLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#cloudwatch_log_group_arn MwaaEnvironment#cloudwatch_log_group_arn}
  */
  readonly cloudwatchLogGroupArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

export function mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationDagProcessingLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_log_group_arn: cdktf.stringToTerraform(struct!.cloudwatchLogGroupArn),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export interface MwaaEnvironmentLoggingConfigurationSchedulerLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#cloudwatch_log_group_arn MwaaEnvironment#cloudwatch_log_group_arn}
  */
  readonly cloudwatchLogGroupArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

export function mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationSchedulerLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_log_group_arn: cdktf.stringToTerraform(struct!.cloudwatchLogGroupArn),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export interface MwaaEnvironmentLoggingConfigurationTaskLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#cloudwatch_log_group_arn MwaaEnvironment#cloudwatch_log_group_arn}
  */
  readonly cloudwatchLogGroupArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

export function mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationTaskLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_log_group_arn: cdktf.stringToTerraform(struct!.cloudwatchLogGroupArn),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export interface MwaaEnvironmentLoggingConfigurationWebserverLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#cloudwatch_log_group_arn MwaaEnvironment#cloudwatch_log_group_arn}
  */
  readonly cloudwatchLogGroupArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

export function mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationWebserverLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_log_group_arn: cdktf.stringToTerraform(struct!.cloudwatchLogGroupArn),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export interface MwaaEnvironmentLoggingConfigurationWorkerLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#cloudwatch_log_group_arn MwaaEnvironment#cloudwatch_log_group_arn}
  */
  readonly cloudwatchLogGroupArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}
  */
  readonly logLevel?: string;
}

export function mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationWorkerLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_log_group_arn: cdktf.stringToTerraform(struct!.cloudwatchLogGroupArn),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export interface MwaaEnvironmentLoggingConfiguration {
  /**
  * Logging configuration for a specific airflow component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#dag_processing_logs MwaaEnvironment#dag_processing_logs}
  */
  readonly dagProcessingLogs?: MwaaEnvironmentLoggingConfigurationDagProcessingLogs;
  /**
  * Logging configuration for a specific airflow component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#scheduler_logs MwaaEnvironment#scheduler_logs}
  */
  readonly schedulerLogs?: MwaaEnvironmentLoggingConfigurationSchedulerLogs;
  /**
  * Logging configuration for a specific airflow component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#task_logs MwaaEnvironment#task_logs}
  */
  readonly taskLogs?: MwaaEnvironmentLoggingConfigurationTaskLogs;
  /**
  * Logging configuration for a specific airflow component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#webserver_logs MwaaEnvironment#webserver_logs}
  */
  readonly webserverLogs?: MwaaEnvironmentLoggingConfigurationWebserverLogs;
  /**
  * Logging configuration for a specific airflow component.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#worker_logs MwaaEnvironment#worker_logs}
  */
  readonly workerLogs?: MwaaEnvironmentLoggingConfigurationWorkerLogs;
}

export function mwaaEnvironmentLoggingConfigurationToTerraform(struct?: MwaaEnvironmentLoggingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dag_processing_logs: mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct!.dagProcessingLogs),
    scheduler_logs: mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct!.schedulerLogs),
    task_logs: mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct!.taskLogs),
    webserver_logs: mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct!.webserverLogs),
    worker_logs: mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct!.workerLogs),
  }
}

export interface MwaaEnvironmentNetworkConfiguration {
  /**
  * A list of security groups to use for the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#security_group_ids MwaaEnvironment#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * A list of subnets to use for the environment. These must be private subnets, in the same VPC, in two different availability zones.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html#subnet_ids MwaaEnvironment#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function mwaaEnvironmentNetworkConfigurationToTerraform(struct?: MwaaEnvironmentNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html awscc_mwaa_environment}
*/
export class MwaaEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mwaa_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html awscc_mwaa_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MwaaEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: MwaaEnvironmentConfig) {
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
    this._airflowConfigurationOptions = config.airflowConfigurationOptions;
    this._airflowVersion = config.airflowVersion;
    this._dagS3Path = config.dagS3Path;
    this._environmentClass = config.environmentClass;
    this._executionRoleArn = config.executionRoleArn;
    this._kmsKey = config.kmsKey;
    this._loggingConfiguration = config.loggingConfiguration;
    this._maxWorkers = config.maxWorkers;
    this._minWorkers = config.minWorkers;
    this._name = config.name;
    this._networkConfiguration = config.networkConfiguration;
    this._pluginsS3ObjectVersion = config.pluginsS3ObjectVersion;
    this._pluginsS3Path = config.pluginsS3Path;
    this._requirementsS3ObjectVersion = config.requirementsS3ObjectVersion;
    this._requirementsS3Path = config.requirementsS3Path;
    this._schedulers = config.schedulers;
    this._sourceBucketArn = config.sourceBucketArn;
    this._tags = config.tags;
    this._webserverAccessMode = config.webserverAccessMode;
    this._weeklyMaintenanceWindowStart = config.weeklyMaintenanceWindowStart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // airflow_configuration_options - computed: false, optional: true, required: false
  private _airflowConfigurationOptions?: { [key: string]: string } | cdktf.IResolvable;
  public get airflowConfigurationOptions() {
    return this.interpolationForAttribute('airflow_configuration_options') as any;
  }
  public set airflowConfigurationOptions(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._airflowConfigurationOptions = value;
  }
  public resetAirflowConfigurationOptions() {
    this._airflowConfigurationOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airflowConfigurationOptionsInput() {
    return this._airflowConfigurationOptions
  }

  // airflow_version - computed: false, optional: true, required: false
  private _airflowVersion?: string;
  public get airflowVersion() {
    return this.getStringAttribute('airflow_version');
  }
  public set airflowVersion(value: string ) {
    this._airflowVersion = value;
  }
  public resetAirflowVersion() {
    this._airflowVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airflowVersionInput() {
    return this._airflowVersion
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // dag_s3_path - computed: false, optional: true, required: false
  private _dagS3Path?: string;
  public get dagS3Path() {
    return this.getStringAttribute('dag_s3_path');
  }
  public set dagS3Path(value: string ) {
    this._dagS3Path = value;
  }
  public resetDagS3Path() {
    this._dagS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dagS3PathInput() {
    return this._dagS3Path
  }

  // environment_class - computed: false, optional: true, required: false
  private _environmentClass?: string;
  public get environmentClass() {
    return this.getStringAttribute('environment_class');
  }
  public set environmentClass(value: string ) {
    this._environmentClass = value;
  }
  public resetEnvironmentClass() {
    this._environmentClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentClassInput() {
    return this._environmentClass
  }

  // execution_role_arn - computed: false, optional: true, required: false
  private _executionRoleArn?: string;
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string ) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey
  }

  // logging_configuration - computed: false, optional: true, required: false
  private _loggingConfiguration?: MwaaEnvironmentLoggingConfiguration;
  public get loggingConfiguration() {
    return this.interpolationForAttribute('logging_configuration') as any;
  }
  public set loggingConfiguration(value: MwaaEnvironmentLoggingConfiguration ) {
    this._loggingConfiguration = value;
  }
  public resetLoggingConfiguration() {
    this._loggingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration
  }

  // max_workers - computed: false, optional: true, required: false
  private _maxWorkers?: number;
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number ) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers
  }

  // min_workers - computed: false, optional: true, required: false
  private _minWorkers?: number;
  public get minWorkers() {
    return this.getNumberAttribute('min_workers');
  }
  public set minWorkers(value: number ) {
    this._minWorkers = value;
  }
  public resetMinWorkers() {
    this._minWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkersInput() {
    return this._minWorkers
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

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration?: MwaaEnvironmentNetworkConfiguration;
  public get networkConfiguration() {
    return this.interpolationForAttribute('network_configuration') as any;
  }
  public set networkConfiguration(value: MwaaEnvironmentNetworkConfiguration ) {
    this._networkConfiguration = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration
  }

  // plugins_s3_object_version - computed: false, optional: true, required: false
  private _pluginsS3ObjectVersion?: string;
  public get pluginsS3ObjectVersion() {
    return this.getStringAttribute('plugins_s3_object_version');
  }
  public set pluginsS3ObjectVersion(value: string ) {
    this._pluginsS3ObjectVersion = value;
  }
  public resetPluginsS3ObjectVersion() {
    this._pluginsS3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsS3ObjectVersionInput() {
    return this._pluginsS3ObjectVersion
  }

  // plugins_s3_path - computed: false, optional: true, required: false
  private _pluginsS3Path?: string;
  public get pluginsS3Path() {
    return this.getStringAttribute('plugins_s3_path');
  }
  public set pluginsS3Path(value: string ) {
    this._pluginsS3Path = value;
  }
  public resetPluginsS3Path() {
    this._pluginsS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsS3PathInput() {
    return this._pluginsS3Path
  }

  // requirements_s3_object_version - computed: false, optional: true, required: false
  private _requirementsS3ObjectVersion?: string;
  public get requirementsS3ObjectVersion() {
    return this.getStringAttribute('requirements_s3_object_version');
  }
  public set requirementsS3ObjectVersion(value: string ) {
    this._requirementsS3ObjectVersion = value;
  }
  public resetRequirementsS3ObjectVersion() {
    this._requirementsS3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsS3ObjectVersionInput() {
    return this._requirementsS3ObjectVersion
  }

  // requirements_s3_path - computed: false, optional: true, required: false
  private _requirementsS3Path?: string;
  public get requirementsS3Path() {
    return this.getStringAttribute('requirements_s3_path');
  }
  public set requirementsS3Path(value: string ) {
    this._requirementsS3Path = value;
  }
  public resetRequirementsS3Path() {
    this._requirementsS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsS3PathInput() {
    return this._requirementsS3Path
  }

  // schedulers - computed: false, optional: true, required: false
  private _schedulers?: number;
  public get schedulers() {
    return this.getNumberAttribute('schedulers');
  }
  public set schedulers(value: number ) {
    this._schedulers = value;
  }
  public resetSchedulers() {
    this._schedulers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulersInput() {
    return this._schedulers
  }

  // source_bucket_arn - computed: false, optional: true, required: false
  private _sourceBucketArn?: string;
  public get sourceBucketArn() {
    return this.getStringAttribute('source_bucket_arn');
  }
  public set sourceBucketArn(value: string ) {
    this._sourceBucketArn = value;
  }
  public resetSourceBucketArn() {
    this._sourceBucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBucketArnInput() {
    return this._sourceBucketArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // webserver_access_mode - computed: false, optional: true, required: false
  private _webserverAccessMode?: string;
  public get webserverAccessMode() {
    return this.getStringAttribute('webserver_access_mode');
  }
  public set webserverAccessMode(value: string ) {
    this._webserverAccessMode = value;
  }
  public resetWebserverAccessMode() {
    this._webserverAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webserverAccessModeInput() {
    return this._webserverAccessMode
  }

  // webserver_url - computed: true, optional: false, required: false
  public get webserverUrl() {
    return this.getStringAttribute('webserver_url');
  }

  // weekly_maintenance_window_start - computed: false, optional: true, required: false
  private _weeklyMaintenanceWindowStart?: string;
  public get weeklyMaintenanceWindowStart() {
    return this.getStringAttribute('weekly_maintenance_window_start');
  }
  public set weeklyMaintenanceWindowStart(value: string ) {
    this._weeklyMaintenanceWindowStart = value;
  }
  public resetWeeklyMaintenanceWindowStart() {
    this._weeklyMaintenanceWindowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyMaintenanceWindowStartInput() {
    return this._weeklyMaintenanceWindowStart
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      airflow_configuration_options: cdktf.hashMapper(cdktf.anyToTerraform)(this._airflowConfigurationOptions),
      airflow_version: cdktf.stringToTerraform(this._airflowVersion),
      dag_s3_path: cdktf.stringToTerraform(this._dagS3Path),
      environment_class: cdktf.stringToTerraform(this._environmentClass),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      kms_key: cdktf.stringToTerraform(this._kmsKey),
      logging_configuration: mwaaEnvironmentLoggingConfigurationToTerraform(this._loggingConfiguration),
      max_workers: cdktf.numberToTerraform(this._maxWorkers),
      min_workers: cdktf.numberToTerraform(this._minWorkers),
      name: cdktf.stringToTerraform(this._name),
      network_configuration: mwaaEnvironmentNetworkConfigurationToTerraform(this._networkConfiguration),
      plugins_s3_object_version: cdktf.stringToTerraform(this._pluginsS3ObjectVersion),
      plugins_s3_path: cdktf.stringToTerraform(this._pluginsS3Path),
      requirements_s3_object_version: cdktf.stringToTerraform(this._requirementsS3ObjectVersion),
      requirements_s3_path: cdktf.stringToTerraform(this._requirementsS3Path),
      schedulers: cdktf.numberToTerraform(this._schedulers),
      source_bucket_arn: cdktf.stringToTerraform(this._sourceBucketArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      webserver_access_mode: cdktf.stringToTerraform(this._webserverAccessMode),
      weekly_maintenance_window_start: cdktf.stringToTerraform(this._weeklyMaintenanceWindowStart),
    };
  }
}
