import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
    readonly airflowConfigurationOptions?: {
        [key: string]: string;
    } | cdktf.IResolvable;
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
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
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
export declare function mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationDagProcessingLogs): any;
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
export declare function mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationSchedulerLogs): any;
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
export declare function mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationTaskLogs): any;
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
export declare function mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationWebserverLogs): any;
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
export declare function mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationWorkerLogs): any;
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
export declare function mwaaEnvironmentLoggingConfigurationToTerraform(struct?: MwaaEnvironmentLoggingConfiguration): any;
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
export declare function mwaaEnvironmentNetworkConfigurationToTerraform(struct?: MwaaEnvironmentNetworkConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html awscc_mwaa_environment}
*/
export declare class MwaaEnvironment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mwaa_environment.html awscc_mwaa_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MwaaEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: MwaaEnvironmentConfig);
    private _airflowConfigurationOptions?;
    get airflowConfigurationOptions(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set airflowConfigurationOptions(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetAirflowConfigurationOptions(): void;
    get airflowConfigurationOptionsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    private _airflowVersion?;
    get airflowVersion(): string;
    set airflowVersion(value: string);
    resetAirflowVersion(): void;
    get airflowVersionInput(): string | undefined;
    get arn(): string;
    private _dagS3Path?;
    get dagS3Path(): string;
    set dagS3Path(value: string);
    resetDagS3Path(): void;
    get dagS3PathInput(): string | undefined;
    private _environmentClass?;
    get environmentClass(): string;
    set environmentClass(value: string);
    resetEnvironmentClass(): void;
    get environmentClassInput(): string | undefined;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    resetExecutionRoleArn(): void;
    get executionRoleArnInput(): string | undefined;
    get id(): string;
    private _kmsKey?;
    get kmsKey(): string;
    set kmsKey(value: string);
    resetKmsKey(): void;
    get kmsKeyInput(): string | undefined;
    private _loggingConfiguration?;
    get loggingConfiguration(): MwaaEnvironmentLoggingConfiguration;
    set loggingConfiguration(value: MwaaEnvironmentLoggingConfiguration);
    resetLoggingConfiguration(): void;
    get loggingConfigurationInput(): MwaaEnvironmentLoggingConfiguration | undefined;
    private _maxWorkers?;
    get maxWorkers(): number;
    set maxWorkers(value: number);
    resetMaxWorkers(): void;
    get maxWorkersInput(): number | undefined;
    private _minWorkers?;
    get minWorkers(): number;
    set minWorkers(value: number);
    resetMinWorkers(): void;
    get minWorkersInput(): number | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _networkConfiguration?;
    get networkConfiguration(): MwaaEnvironmentNetworkConfiguration;
    set networkConfiguration(value: MwaaEnvironmentNetworkConfiguration);
    resetNetworkConfiguration(): void;
    get networkConfigurationInput(): MwaaEnvironmentNetworkConfiguration | undefined;
    private _pluginsS3ObjectVersion?;
    get pluginsS3ObjectVersion(): string;
    set pluginsS3ObjectVersion(value: string);
    resetPluginsS3ObjectVersion(): void;
    get pluginsS3ObjectVersionInput(): string | undefined;
    private _pluginsS3Path?;
    get pluginsS3Path(): string;
    set pluginsS3Path(value: string);
    resetPluginsS3Path(): void;
    get pluginsS3PathInput(): string | undefined;
    private _requirementsS3ObjectVersion?;
    get requirementsS3ObjectVersion(): string;
    set requirementsS3ObjectVersion(value: string);
    resetRequirementsS3ObjectVersion(): void;
    get requirementsS3ObjectVersionInput(): string | undefined;
    private _requirementsS3Path?;
    get requirementsS3Path(): string;
    set requirementsS3Path(value: string);
    resetRequirementsS3Path(): void;
    get requirementsS3PathInput(): string | undefined;
    private _schedulers?;
    get schedulers(): number;
    set schedulers(value: number);
    resetSchedulers(): void;
    get schedulersInput(): number | undefined;
    private _sourceBucketArn?;
    get sourceBucketArn(): string;
    set sourceBucketArn(value: string);
    resetSourceBucketArn(): void;
    get sourceBucketArnInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    private _webserverAccessMode?;
    get webserverAccessMode(): string;
    set webserverAccessMode(value: string);
    resetWebserverAccessMode(): void;
    get webserverAccessModeInput(): string | undefined;
    get webserverUrl(): string;
    private _weeklyMaintenanceWindowStart?;
    get weeklyMaintenanceWindowStart(): string;
    set weeklyMaintenanceWindowStart(value: string);
    resetWeeklyMaintenanceWindowStart(): void;
    get weeklyMaintenanceWindowStartInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
