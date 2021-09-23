// https://www.terraform.io/docs/providers/awscc/d/apprunner_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccApprunnerServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/apprunner_service.html#id DataAwsccApprunnerService#id}
  */
  readonly id: string;
}
export class DataAwsccApprunnerServiceEncryptionConfiguration extends cdktf.ComplexComputedList {

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}

export function dataAwsccApprunnerServiceEncryptionConfigurationToTerraform(struct?: DataAwsccApprunnerServiceEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}

export class DataAwsccApprunnerServiceHealthCheckConfiguration extends cdktf.ComplexComputedList {

  // healthy_threshold - computed: true, optional: false, required: false
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // unhealthy_threshold - computed: true, optional: false, required: false
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
}

export function dataAwsccApprunnerServiceHealthCheckConfigurationToTerraform(struct?: DataAwsccApprunnerServiceHealthCheckConfiguration): any {
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

export class DataAwsccApprunnerServiceInstanceConfiguration extends cdktf.ComplexComputedList {

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // instance_role_arn - computed: true, optional: false, required: false
  public get instanceRoleArn() {
    return this.getStringAttribute('instance_role_arn');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }
}

export function dataAwsccApprunnerServiceInstanceConfigurationToTerraform(struct?: DataAwsccApprunnerServiceInstanceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    instance_role_arn: cdktf.stringToTerraform(struct!.instanceRoleArn),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export class DataAwsccApprunnerServiceSourceConfigurationAuthenticationConfiguration extends cdktf.ComplexComputedList {

  // access_role_arn - computed: true, optional: false, required: false
  public get accessRoleArn() {
    return this.getStringAttribute('access_role_arn');
  }

  // connection_arn - computed: true, optional: false, required: false
  public get connectionArn() {
    return this.getStringAttribute('connection_arn');
  }
}

export function dataAwsccApprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationAuthenticationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_role_arn: cdktf.stringToTerraform(struct!.accessRoleArn),
    connection_arn: cdktf.stringToTerraform(struct!.connectionArn),
  }
}

export class DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues extends cdktf.ComplexComputedList {

  // build_command - computed: true, optional: false, required: false
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // runtime_environment_variables - computed: true, optional: false, required: false
  public get runtimeEnvironmentVariables() {
    return this.interpolationForAttribute('runtime_environment_variables') as any;
  }

  // start_command - computed: true, optional: false, required: false
  public get startCommand() {
    return this.getStringAttribute('start_command');
  }
}

export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    build_command: cdktf.stringToTerraform(struct!.buildCommand),
    port: cdktf.stringToTerraform(struct!.port),
    runtime: cdktf.stringToTerraform(struct!.runtime),
    runtime_environment_variables: cdktf.listMapper(dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesToTerraform)(struct!.runtimeEnvironmentVariables),
    start_command: cdktf.stringToTerraform(struct!.startCommand),
  }
}

export class DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration extends cdktf.ComplexComputedList {

  // code_configuration_values - computed: true, optional: false, required: false
  public get codeConfigurationValues() {
    return this.interpolationForAttribute('code_configuration_values') as any;
  }

  // configuration_source - computed: true, optional: false, required: false
  public get configurationSource() {
    return this.getStringAttribute('configuration_source');
  }
}

export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    code_configuration_values: dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct!.codeConfigurationValues),
    configuration_source: cdktf.stringToTerraform(struct!.configurationSource),
  }
}

export class DataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion extends cdktf.ComplexComputedList {

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccApprunnerServiceSourceConfigurationCodeRepository extends cdktf.ComplexComputedList {

  // code_configuration - computed: true, optional: false, required: false
  public get codeConfiguration() {
    return this.interpolationForAttribute('code_configuration') as any;
  }

  // repository_url - computed: true, optional: false, required: false
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }

  // source_code_version - computed: true, optional: false, required: false
  public get sourceCodeVersion() {
    return this.interpolationForAttribute('source_code_version') as any;
  }
}

export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepository): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    code_configuration: dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct!.codeConfiguration),
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
    source_code_version: dataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct!.sourceCodeVersion),
  }
}

export class DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // runtime_environment_variables - computed: true, optional: false, required: false
  public get runtimeEnvironmentVariables() {
    return this.interpolationForAttribute('runtime_environment_variables') as any;
  }

  // start_command - computed: true, optional: false, required: false
  public get startCommand() {
    return this.getStringAttribute('start_command');
  }
}

export function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    runtime_environment_variables: cdktf.listMapper(dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesToTerraform)(struct!.runtimeEnvironmentVariables),
    start_command: cdktf.stringToTerraform(struct!.startCommand),
  }
}

export class DataAwsccApprunnerServiceSourceConfigurationImageRepository extends cdktf.ComplexComputedList {

  // image_configuration - computed: true, optional: false, required: false
  public get imageConfiguration() {
    return this.interpolationForAttribute('image_configuration') as any;
  }

  // image_identifier - computed: true, optional: false, required: false
  public get imageIdentifier() {
    return this.getStringAttribute('image_identifier');
  }

  // image_repository_type - computed: true, optional: false, required: false
  public get imageRepositoryType() {
    return this.getStringAttribute('image_repository_type');
  }
}

export function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationImageRepository): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_configuration: dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct!.imageConfiguration),
    image_identifier: cdktf.stringToTerraform(struct!.imageIdentifier),
    image_repository_type: cdktf.stringToTerraform(struct!.imageRepositoryType),
  }
}

export class DataAwsccApprunnerServiceSourceConfiguration extends cdktf.ComplexComputedList {

  // authentication_configuration - computed: true, optional: false, required: false
  public get authenticationConfiguration() {
    return this.interpolationForAttribute('authentication_configuration') as any;
  }

  // auto_deployments_enabled - computed: true, optional: false, required: false
  public get autoDeploymentsEnabled() {
    return this.getBooleanAttribute('auto_deployments_enabled');
  }

  // code_repository - computed: true, optional: false, required: false
  public get codeRepository() {
    return this.interpolationForAttribute('code_repository') as any;
  }

  // image_repository - computed: true, optional: false, required: false
  public get imageRepository() {
    return this.interpolationForAttribute('image_repository') as any;
  }
}

export function dataAwsccApprunnerServiceSourceConfigurationToTerraform(struct?: DataAwsccApprunnerServiceSourceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    authentication_configuration: dataAwsccApprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct!.authenticationConfiguration),
    auto_deployments_enabled: cdktf.booleanToTerraform(struct!.autoDeploymentsEnabled),
    code_repository: dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct!.codeRepository),
    image_repository: dataAwsccApprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct!.imageRepository),
  }
}

export class DataAwsccApprunnerServiceTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccApprunnerServiceTagsToTerraform(struct?: DataAwsccApprunnerServiceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apprunner_service.html awscc_apprunner_service}
*/
export class DataAwsccApprunnerService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_apprunner_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apprunner_service.html awscc_apprunner_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApprunnerServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApprunnerServiceConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_configuration_arn - computed: true, optional: false, required: false
  public get autoScalingConfigurationArn() {
    return this.getStringAttribute('auto_scaling_configuration_arn');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }

  // health_check_configuration - computed: true, optional: false, required: false
  public get healthCheckConfiguration() {
    return this.interpolationForAttribute('health_check_configuration') as any;
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

  // instance_configuration - computed: true, optional: false, required: false
  public get instanceConfiguration() {
    return this.interpolationForAttribute('instance_configuration') as any;
  }

  // service_arn - computed: true, optional: false, required: false
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_url - computed: true, optional: false, required: false
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }

  // source_configuration - computed: true, optional: false, required: false
  public get sourceConfiguration() {
    return this.interpolationForAttribute('source_configuration') as any;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
