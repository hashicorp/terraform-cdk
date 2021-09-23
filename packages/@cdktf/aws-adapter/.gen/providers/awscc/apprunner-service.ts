// https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApprunnerServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Autoscaling configuration ARN
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}
  */
  readonly autoScalingConfigurationArn?: string;
  /**
  * Encryption configuration (KMS key)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#encryption_configuration ApprunnerService#encryption_configuration}
  */
  readonly encryptionConfiguration?: ApprunnerServiceEncryptionConfiguration;
  /**
  * Health check configuration
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#health_check_configuration ApprunnerService#health_check_configuration}
  */
  readonly healthCheckConfiguration?: ApprunnerServiceHealthCheckConfiguration;
  /**
  * Instance Configuration
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#instance_configuration ApprunnerService#instance_configuration}
  */
  readonly instanceConfiguration?: ApprunnerServiceInstanceConfiguration;
  /**
  * The AppRunner Service Name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#service_name ApprunnerService#service_name}
  */
  readonly serviceName?: string;
  /**
  * Source Code configuration
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#source_configuration ApprunnerService#source_configuration}
  */
  readonly sourceConfiguration: ApprunnerServiceSourceConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#tags ApprunnerService#tags}
  */
  readonly tags?: ApprunnerServiceTags[];
}
export interface ApprunnerServiceEncryptionConfiguration {
  /**
  * The KMS Key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#kms_key ApprunnerService#kms_key}
  */
  readonly kmsKey: string;
}

export function apprunnerServiceEncryptionConfigurationToTerraform(struct?: ApprunnerServiceEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}

export interface ApprunnerServiceHealthCheckConfiguration {
  /**
  * Health check Healthy Threshold
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#healthy_threshold ApprunnerService#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Health check Interval
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#interval ApprunnerService#interval}
  */
  readonly interval?: number;
  /**
  * Health check Path
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#path ApprunnerService#path}
  */
  readonly path?: string;
  /**
  * Health Check Protocol
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#protocol ApprunnerService#protocol}
  */
  readonly protocol?: string;
  /**
  * Health check Timeout
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#timeout ApprunnerService#timeout}
  */
  readonly timeout?: number;
  /**
  * Health check Unhealthy Threshold
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#unhealthy_threshold ApprunnerService#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
}

export function apprunnerServiceHealthCheckConfigurationToTerraform(struct?: ApprunnerServiceHealthCheckConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval: cdktf.numberToTerraform(struct!.interval),
    path: cdktf.stringToTerraform(struct!.path),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}

export interface ApprunnerServiceInstanceConfiguration {
  /**
  * CPU
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#cpu ApprunnerService#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#instance_role_arn ApprunnerService#instance_role_arn}
  */
  readonly instanceRoleArn?: string;
  /**
  * Memory
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#memory ApprunnerService#memory}
  */
  readonly memory?: string;
}

export function apprunnerServiceInstanceConfigurationToTerraform(struct?: ApprunnerServiceInstanceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    instance_role_arn: cdktf.stringToTerraform(struct!.instanceRoleArn),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export interface ApprunnerServiceSourceConfigurationAuthenticationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#access_role_arn ApprunnerService#access_role_arn}
  */
  readonly accessRoleArn?: string;
  /**
  * Connection Arn
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#connection_arn ApprunnerService#connection_arn}
  */
  readonly connectionArn?: string;
}

export function apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationAuthenticationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_role_arn: cdktf.stringToTerraform(struct!.accessRoleArn),
    connection_arn: cdktf.stringToTerraform(struct!.connectionArn),
  }
}

export interface ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#name ApprunnerService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#value ApprunnerService#value}
  */
  readonly value?: string;
}

export function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
  /**
  * Build Command
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#build_command ApprunnerService#build_command}
  */
  readonly buildCommand?: string;
  /**
  * Port
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#port ApprunnerService#port}
  */
  readonly port?: string;
  /**
  * Runtime
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#runtime ApprunnerService#runtime}
  */
  readonly runtime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#runtime_environment_variables ApprunnerService#runtime_environment_variables}
  */
  readonly runtimeEnvironmentVariables?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables[];
  /**
  * Start Command
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#start_command ApprunnerService#start_command}
  */
  readonly startCommand?: string;
}

export function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    build_command: cdktf.stringToTerraform(struct!.buildCommand),
    port: cdktf.stringToTerraform(struct!.port),
    runtime: cdktf.stringToTerraform(struct!.runtime),
    runtime_environment_variables: cdktf.listMapper(apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesToTerraform)(struct!.runtimeEnvironmentVariables),
    start_command: cdktf.stringToTerraform(struct!.startCommand),
  }
}

export interface ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration {
  /**
  * Code Configuration Values
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#code_configuration_values ApprunnerService#code_configuration_values}
  */
  readonly codeConfigurationValues?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues;
  /**
  * Configuration Source
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#configuration_source ApprunnerService#configuration_source}
  */
  readonly configurationSource: string;
}

export function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    code_configuration_values: apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct!.codeConfigurationValues),
    configuration_source: cdktf.stringToTerraform(struct!.configurationSource),
  }
}

export interface ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion {
  /**
  * Source Code Version Type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#type ApprunnerService#type}
  */
  readonly type: string;
  /**
  * Source Code Version Value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#value ApprunnerService#value}
  */
  readonly value: string;
}

export function apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApprunnerServiceSourceConfigurationCodeRepository {
  /**
  * Code Configuration
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#code_configuration ApprunnerService#code_configuration}
  */
  readonly codeConfiguration?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration;
  /**
  * Repository Url
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#repository_url ApprunnerService#repository_url}
  */
  readonly repositoryUrl: string;
  /**
  * Source Code Version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#source_code_version ApprunnerService#source_code_version}
  */
  readonly sourceCodeVersion: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion;
}

export function apprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepository): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    code_configuration: apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct!.codeConfiguration),
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
    source_code_version: apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct!.sourceCodeVersion),
  }
}

export interface ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#name ApprunnerService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#value ApprunnerService#value}
  */
  readonly value?: string;
}

export function apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesToTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration {
  /**
  * Port
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#port ApprunnerService#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#runtime_environment_variables ApprunnerService#runtime_environment_variables}
  */
  readonly runtimeEnvironmentVariables?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables[];
  /**
  * Start Command
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#start_command ApprunnerService#start_command}
  */
  readonly startCommand?: string;
}

export function apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    runtime_environment_variables: cdktf.listMapper(apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesToTerraform)(struct!.runtimeEnvironmentVariables),
    start_command: cdktf.stringToTerraform(struct!.startCommand),
  }
}

export interface ApprunnerServiceSourceConfigurationImageRepository {
  /**
  * Image Configuration
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#image_configuration ApprunnerService#image_configuration}
  */
  readonly imageConfiguration?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration;
  /**
  * Image Identifier
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#image_identifier ApprunnerService#image_identifier}
  */
  readonly imageIdentifier: string;
  /**
  * Image Repository Type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#image_repository_type ApprunnerService#image_repository_type}
  */
  readonly imageRepositoryType: string;
}

export function apprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepository): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_configuration: apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct!.imageConfiguration),
    image_identifier: cdktf.stringToTerraform(struct!.imageIdentifier),
    image_repository_type: cdktf.stringToTerraform(struct!.imageRepositoryType),
  }
}

export interface ApprunnerServiceSourceConfiguration {
  /**
  * Authentication Configuration
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#authentication_configuration ApprunnerService#authentication_configuration}
  */
  readonly authenticationConfiguration?: ApprunnerServiceSourceConfigurationAuthenticationConfiguration;
  /**
  * Auto Deployment enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#auto_deployments_enabled ApprunnerService#auto_deployments_enabled}
  */
  readonly autoDeploymentsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Source Code Repository
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#code_repository ApprunnerService#code_repository}
  */
  readonly codeRepository?: ApprunnerServiceSourceConfigurationCodeRepository;
  /**
  * Image Repository
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#image_repository ApprunnerService#image_repository}
  */
  readonly imageRepository?: ApprunnerServiceSourceConfigurationImageRepository;
}

export function apprunnerServiceSourceConfigurationToTerraform(struct?: ApprunnerServiceSourceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    authentication_configuration: apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct!.authenticationConfiguration),
    auto_deployments_enabled: cdktf.booleanToTerraform(struct!.autoDeploymentsEnabled),
    code_repository: apprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct!.codeRepository),
    image_repository: apprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct!.imageRepository),
  }
}

export interface ApprunnerServiceTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#key ApprunnerService#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html#value ApprunnerService#value}
  */
  readonly value?: string;
}

export function apprunnerServiceTagsToTerraform(struct?: ApprunnerServiceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html awscc_apprunner_service}
*/
export class ApprunnerService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_apprunner_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html awscc_apprunner_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApprunnerServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ApprunnerServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apprunner_service',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoScalingConfigurationArn = config.autoScalingConfigurationArn;
    this._encryptionConfiguration = config.encryptionConfiguration;
    this._healthCheckConfiguration = config.healthCheckConfiguration;
    this._instanceConfiguration = config.instanceConfiguration;
    this._serviceName = config.serviceName;
    this._sourceConfiguration = config.sourceConfiguration;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_configuration_arn - computed: false, optional: true, required: false
  private _autoScalingConfigurationArn?: string;
  public get autoScalingConfigurationArn() {
    return this.getStringAttribute('auto_scaling_configuration_arn');
  }
  public set autoScalingConfigurationArn(value: string ) {
    this._autoScalingConfigurationArn = value;
  }
  public resetAutoScalingConfigurationArn() {
    this._autoScalingConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingConfigurationArnInput() {
    return this._autoScalingConfigurationArn
  }

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration?: ApprunnerServiceEncryptionConfiguration;
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }
  public set encryptionConfiguration(value: ApprunnerServiceEncryptionConfiguration) {
    this._encryptionConfiguration = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration
  }

  // health_check_configuration - computed: false, optional: true, required: false
  private _healthCheckConfiguration?: ApprunnerServiceHealthCheckConfiguration;
  public get healthCheckConfiguration() {
    return this.interpolationForAttribute('health_check_configuration') as any;
  }
  public set healthCheckConfiguration(value: ApprunnerServiceHealthCheckConfiguration ) {
    this._healthCheckConfiguration = value;
  }
  public resetHealthCheckConfiguration() {
    this._healthCheckConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConfigurationInput() {
    return this._healthCheckConfiguration
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_configuration - computed: false, optional: true, required: false
  private _instanceConfiguration?: ApprunnerServiceInstanceConfiguration;
  public get instanceConfiguration() {
    return this.interpolationForAttribute('instance_configuration') as any;
  }
  public set instanceConfiguration(value: ApprunnerServiceInstanceConfiguration ) {
    this._instanceConfiguration = value;
  }
  public resetInstanceConfiguration() {
    this._instanceConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationInput() {
    return this._instanceConfiguration
  }

  // service_arn - computed: true, optional: false, required: false
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string;
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // service_url - computed: true, optional: false, required: false
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }

  // source_configuration - computed: false, optional: false, required: true
  private _sourceConfiguration: ApprunnerServiceSourceConfiguration;
  public get sourceConfiguration() {
    return this.interpolationForAttribute('source_configuration') as any;
  }
  public set sourceConfiguration(value: ApprunnerServiceSourceConfiguration) {
    this._sourceConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: ApprunnerServiceTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: ApprunnerServiceTags[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_configuration_arn: cdktf.stringToTerraform(this._autoScalingConfigurationArn),
      encryption_configuration: apprunnerServiceEncryptionConfigurationToTerraform(this._encryptionConfiguration),
      health_check_configuration: apprunnerServiceHealthCheckConfigurationToTerraform(this._healthCheckConfiguration),
      instance_configuration: apprunnerServiceInstanceConfigurationToTerraform(this._instanceConfiguration),
      service_name: cdktf.stringToTerraform(this._serviceName),
      source_configuration: apprunnerServiceSourceConfigurationToTerraform(this._sourceConfiguration),
      tags: cdktf.listMapper(apprunnerServiceTagsToTerraform)(this._tags),
    };
  }
}
