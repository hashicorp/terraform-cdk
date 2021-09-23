import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function apprunnerServiceEncryptionConfigurationToTerraform(struct?: ApprunnerServiceEncryptionConfiguration): any;
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
export declare function apprunnerServiceHealthCheckConfigurationToTerraform(struct?: ApprunnerServiceHealthCheckConfiguration): any;
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
export declare function apprunnerServiceInstanceConfigurationToTerraform(struct?: ApprunnerServiceInstanceConfiguration): any;
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
export declare function apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationAuthenticationConfiguration): any;
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
export declare function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables): any;
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
export declare function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues): any;
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
export declare function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration): any;
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
export declare function apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion): any;
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
export declare function apprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepository): any;
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
export declare function apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesToTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables): any;
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
export declare function apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration): any;
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
export declare function apprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepository): any;
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
export declare function apprunnerServiceSourceConfigurationToTerraform(struct?: ApprunnerServiceSourceConfiguration): any;
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
export declare function apprunnerServiceTagsToTerraform(struct?: ApprunnerServiceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html awscc_apprunner_service}
*/
export declare class ApprunnerService extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apprunner_service.html awscc_apprunner_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerServiceConfig
    */
    constructor(scope: Construct, id: string, config: ApprunnerServiceConfig);
    private _autoScalingConfigurationArn?;
    get autoScalingConfigurationArn(): string;
    set autoScalingConfigurationArn(value: string);
    resetAutoScalingConfigurationArn(): void;
    get autoScalingConfigurationArnInput(): string | undefined;
    private _encryptionConfiguration?;
    get encryptionConfiguration(): ApprunnerServiceEncryptionConfiguration;
    set encryptionConfiguration(value: ApprunnerServiceEncryptionConfiguration);
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): ApprunnerServiceEncryptionConfiguration | undefined;
    private _healthCheckConfiguration?;
    get healthCheckConfiguration(): ApprunnerServiceHealthCheckConfiguration;
    set healthCheckConfiguration(value: ApprunnerServiceHealthCheckConfiguration);
    resetHealthCheckConfiguration(): void;
    get healthCheckConfigurationInput(): ApprunnerServiceHealthCheckConfiguration | undefined;
    get id(): string;
    private _instanceConfiguration?;
    get instanceConfiguration(): ApprunnerServiceInstanceConfiguration;
    set instanceConfiguration(value: ApprunnerServiceInstanceConfiguration);
    resetInstanceConfiguration(): void;
    get instanceConfigurationInput(): ApprunnerServiceInstanceConfiguration | undefined;
    get serviceArn(): string;
    get serviceId(): string;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    resetServiceName(): void;
    get serviceNameInput(): string | undefined;
    get serviceUrl(): string;
    private _sourceConfiguration;
    get sourceConfiguration(): ApprunnerServiceSourceConfiguration;
    set sourceConfiguration(value: ApprunnerServiceSourceConfiguration);
    get sourceConfigurationInput(): ApprunnerServiceSourceConfiguration;
    get status(): string;
    private _tags?;
    get tags(): ApprunnerServiceTags[];
    set tags(value: ApprunnerServiceTags[]);
    resetTags(): void;
    get tagsInput(): ApprunnerServiceTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
